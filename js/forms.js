/* Shared form helpers for Airen pages: post to the CRM, shrink photos, keep drafts. No dependencies. */
(function () {
  var cfg = window.AIREN_CONFIG || {};
  var A = window.Airen = {};
  A.contact = cfg.contact || 'airen.sites@gmail.com';
  A.live = !!cfg.endpoint;

  A.post = function (action, data) {
    if (!cfg.endpoint) return Promise.reject(new Error('offline'));
    var body = Object.assign({ action: action }, data || {});
    return fetch(cfg.endpoint, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body), redirect: 'follow' })
      .then(function (r) { return r.json(); })
      .then(function (j) { if (!j || !j.ok) throw new Error((j && j.error) || 'Request failed'); return j; });
  };

  A.param = function (k) { try { return new URLSearchParams(location.search).get(k) || ''; } catch (e) { return ''; } };

  A.draftId = function (scope) {
    var key = 'airen-draft-' + scope, id = '';
    try { id = localStorage.getItem(key) || ''; } catch (e) {}
    if (!id) {
      id = 'd' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
      try { localStorage.setItem(key, id); } catch (e) {}
    }
    return id;
  };

  /* Save and restore every named field of a form (files excluded). */
  A.keepDraft = function (form, key) {
    var store = 'airen-form-' + key;
    try {
      var saved = JSON.parse(localStorage.getItem(store) || '{}');
      Object.keys(saved).forEach(function (n) {
        var els = form.querySelectorAll('[name="' + n + '"]');
        [].forEach.call(els, function (el) {
          if (el.type === 'radio' || el.type === 'checkbox') el.checked = el.type === 'radio' ? el.value === saved[n] : !!saved[n];
          else if (el.type !== 'file' && !el.value) el.value = saved[n];
        });
      });
    } catch (e) {}
    var save = function () {
      try { localStorage.setItem(store, JSON.stringify(A.values(form))); } catch (e) {}
    };
    var clear = function (ev) {
      var el = ev.target, n = el.name || (el.id || '').replace(/^f-/, '');
      if (el.getAttribute('aria-invalid') === 'true') el.setAttribute('aria-invalid', 'false');
      var e = document.getElementById('e-' + n) || (el.type === 'file' && document.getElementById('e-' + el.id.replace(/^f-/, '')));
      if (e) e.hidden = true;
      if (n === 'photos_later') { var p = document.getElementById('e-photos'); if (p) p.hidden = true; }
    };
    form.addEventListener('input', save); form.addEventListener('change', save);
    form.addEventListener('input', clear); form.addEventListener('change', clear);
    return { clear: function () { try { localStorage.removeItem(store); } catch (e) {} } };
  };

  A.values = function (form) {
    var out = {};
    [].forEach.call(form.elements, function (el) {
      if (!el.name || el.type === 'file' || el.type === 'submit' || el.type === 'button') return;
      if (el.type === 'radio') { if (el.checked) out[el.name] = el.value; return; }
      if (el.type === 'checkbox') { out[el.name] = el.checked; return; }
      out[el.name] = el.value.trim();
    });
    return out;
  };

  /* Shrink a photo to at most `max` px on the long side as JPEG; PDFs, SVGs and small files pass through. */
  A.shrink = function (file, max) {
    max = max || 2000;
    var passthrough = !/^image\/(jpeg|png|webp|heic|heif)$/.test(file.type) || file.size < 400 * 1024;
    var read = function (blob) {
      return new Promise(function (res, rej) {
        var fr = new FileReader(); fr.onload = function () { res(String(fr.result).split(',')[1]); }; fr.onerror = rej; fr.readAsDataURL(blob);
      });
    };
    if (passthrough) return read(file).then(function (d) { return { name: file.name, type: file.type || 'application/octet-stream', data: d }; });
    return new Promise(function (res, rej) {
      var url = URL.createObjectURL(file), img = new Image();
      img.onload = function () {
        var s = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
        var c = document.createElement('canvas'); c.width = Math.round(img.naturalWidth * s); c.height = Math.round(img.naturalHeight * s);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url);
        c.toBlob(function (b) {
          if (!b) return rej(new Error('Could not read that image'));
          read(b).then(function (d) { res({ name: file.name.replace(/\.\w+$/, '') + '.jpg', type: 'image/jpeg', data: d }); }, rej);
        }, 'image/jpeg', 0.85);
      };
      img.onerror = function () { URL.revokeObjectURL(url); read(file).then(function (d) { res({ name: file.name, type: file.type, data: d }); }, rej); };
      img.src = url;
    });
  };

  /* Wire a file input to upload each chosen file to the draft folder and list them. */
  A.uploader = function (input, list, opts) {
    var state = { done: 0, busy: 0, failed: 0 };
    input.addEventListener('change', function () {
      [].forEach.call(input.files, function (f) {
        var li = document.createElement('li'); li.className = 'up';
        var thumb = document.createElement('span'); thumb.className = 'thumb';
        if (/^image\//.test(f.type)) { var im = document.createElement('img'); im.alt = ''; im.src = URL.createObjectURL(f); thumb.appendChild(im); }
        var label = document.createElement('span'); label.className = 'up-name'; label.textContent = f.name;
        var st = document.createElement('span'); st.className = 'up-state'; st.textContent = A.live ? 'Uploading' : 'Saved for email';
        li.appendChild(thumb); li.appendChild(label); li.appendChild(st); list.appendChild(li);
        if (!A.live) return;
        state.busy++; opts.onchange && opts.onchange(state);
        A.shrink(f).then(function (p) {
          return A.post('upload', Object.assign(p, { draft: opts.draft, slot: opts.slot, session_id: opts.session || '' }));
        }).then(function () { st.textContent = 'Uploaded'; li.classList.add('ok'); state.done++; },
          function (e) { st.textContent = e.message === 'offline' ? 'Saved for email' : 'Failed: ' + e.message; li.classList.add('bad'); state.failed++; })
          .then(function () { state.busy--; opts.onchange && opts.onchange(state); });
      });
      input.value = '';
    });
    return state;
  };

  A.mailto = function (subject, obj) {
    var lines = Object.keys(obj).filter(function (k) { return obj[k] !== '' && obj[k] !== false; }).map(function (k) { return k + ': ' + obj[k]; });
    location.href = 'mailto:' + A.contact + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
  };
})();
