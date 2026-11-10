/* Airen frame scrubber: draws a scroll film from a still image sequence on a canvas.
   Smoother than seeking a <video> (especially on iPhones) and usable before everything loads:
   frames arrive in a few pack files, coarse first (every 16th, then 8th, 4th, 2nd, all); only frames near the
   current position are decoded (off the main thread, createImageBitmap), and the two nearest
   decoded frames are blended so the motion stays continuous.
   Usage: const s = AirenSeq({ el: videoElementToReplace, base: 'assets/seq/d/', count: 360, fps: 12,
                               ext: 'webp', onReady: () => {} });  then s.draw(seconds) from your rAF loop. */
(function () {
  window.AirenSeq = function (o) {
    var count = o.count, fps = o.fps || 12, ext = o.ext || 'webp';
    var blobs = new Array(count), bmp = new Map(), pending = new Set();
    var cv = document.createElement('canvas'), cx = cv.getContext('2d', { alpha: false });
    cv.setAttribute('aria-hidden', 'true');
    cv.className = (o.el.className ? o.el.className + ' ' : '') + 'seq-canvas';
    o.el.parentNode.insertBefore(cv, o.el);
    o.el.style.visibility = 'hidden';                 /* keep its box: the canvas follows it */
    cv.style.position = 'absolute'; cv.style.display = 'block'; cv.style.pointerEvents = 'none';
    cv.style.zIndex = getComputedStyle(o.el).zIndex;
    cv.style.opacity = '0'; cv.style.transition = 'opacity .4s';
    function place() {
      cv.style.left = o.el.offsetLeft + 'px'; cv.style.top = o.el.offsetTop + 'px';
      cv.style.width = o.el.offsetWidth + 'px'; cv.style.height = o.el.offsetHeight + 'px';
    }
    place();
    var shown = false, W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2), lastKey = '', ready = false, want = 0, dirty = true;
    function size() {
      var r = cv.getBoundingClientRect();
      /* never draw more pixels than the frames have: the browser scales the canvas up for free */
      var k = Math.min(dpr, 1100 / Math.max(1, r.width), 1100 / Math.max(1, r.height));
      W = Math.max(1, Math.round(r.width * k)); H = Math.max(1, Math.round(r.height * k));
      if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; dirty = true; }
    }
    function cover(img, alpha) {
      var iw = img.width, ih = img.height, s = Math.max(W / iw, H / ih), dw = iw * s, dh = ih * s;
      cx.globalAlpha = alpha; cx.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh);
    }
    
    /* decoding: keep a window of decoded frames around where the visitor is */
    var AHEAD = 14, KEEP = 30;
    function decode(i) {
      if (i < 0 || i >= count || !blobs[i] || bmp.has(i) || pending.has(i)) return;
      pending.add(i);
      createImageBitmap(blobs[i]).then(function (b) {
        pending.delete(i);
        if (Math.abs(i - want) > KEEP) { b.close && b.close(); return; }
        bmp.set(i, b); dirty = true;
        if (!ready && Math.abs(i - want) <= 1) { ready = true; size(); }
      }, function () { pending.delete(i); });
    }
    function feed() {
      for (var d = 0; d <= AHEAD; d++) { decode(want + d); decode(want - d); }
      bmp.forEach(function (b, i) { if (Math.abs(i - want) > KEEP) { b.close && b.close(); bmp.delete(i); } });
    }

    /* downloads: a few pack files, coarse to fine (tools/seqpack/pack.py) */
    var packs = o.packs || 8, nextPack = 0, inflight = 0;
    function pump() {
      while (inflight < 2 && nextPack < packs) {
        (function (n) {
          inflight++;
          fetch(o.base + 'p' + n + '.bin').then(function (r) { if (!r.ok) throw 0; return r.arrayBuffer(); }).then(function (buf) {
            var hl = new DataView(buf).getUint32(0), head = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, hl))), base = 4 + hl;
            head.frames.forEach(function (fr) { blobs[fr[0]] = new Blob([new Uint8Array(buf, base + fr[1], fr[2])], { type: 'image/' + ext }); });
            inflight--; feed(); pump();
          }, function () { inflight--; pump(); });
        })(nextPack++);
      }
    }
    pump();
    addEventListener('resize', function () { place(); size(); });

    function near(f, dir) {               /* nearest decoded frame at or before (dir -1) / after (dir 1) f */
      var i = dir < 0 ? Math.floor(f) : Math.ceil(f);
      for (var d = 0; d < count; d++) { var k = i + d * dir; if (k < 0 || k >= count) return -1; if (bmp.has(k)) return k; }
      return -1;
    }
    return {
      canvas: cv,
      draw: function (t) {
        var f = Math.max(0, Math.min(count - 1, t * fps)), w = Math.round(f);
        if (w !== want) { want = w; feed(); } else if (!ready || bmp.size < 4) feed();
        if (!ready) return;
        if (!W) { place(); size(); }
        var lo = near(f, -1), hi = near(f, 1);
        if (lo < 0) lo = hi; if (hi < 0) hi = lo; if (lo < 0) return;
        if (f - lo > 3 && hi - f <= 3) lo = hi; else if (hi - f > 3 && f - lo <= 3) hi = lo;   /* never blend far apart frames */
        var mix = hi > lo ? (f - lo) / (hi - lo) : 0, q = Math.round(mix * 24) / 24;
        var key = lo + ':' + hi + ':' + q;
        if (key === lastKey && !dirty) return;
        lastKey = key; dirty = false;
        cover(bmp.get(lo), 1);
        if (hi !== lo && q > 0) cover(bmp.get(hi), q);
        cx.globalAlpha = 1;
        if (!shown) { shown = true; cv.style.opacity = '1'; o.onReady && o.onReady(); }
      }
    };
  };
})();
