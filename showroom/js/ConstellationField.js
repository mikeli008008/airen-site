(()=>{var Wu=Object.create;var ds=Object.defineProperty;var $u=Object.getOwnPropertyDescriptor;var Yu=Object.getOwnPropertyNames;var Vu=Object.getPrototypeOf,Xu=Object.prototype.hasOwnProperty;var W=(e,t)=>()=>(e&&(t=e(e=0)),t);var $e=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var qu=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Yu(t))!Xu.call(e,i)&&i!==n&&ds(e,i,{get:()=>t[i],enumerable:!(r=$u(t,i))||r.enumerable});return e};var vn=(e,t,n)=>(n=e!=null?Wu(Vu(e)):{},qu(t||!e||!e.__esModule?ds(n,"default",{value:e,enumerable:!0}):n,e));var ks=$e(_=>{"use strict";var xn=Symbol.for("react.element"),Qu=Symbol.for("react.portal"),Ku=Symbol.for("react.fragment"),Zu=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),ep=Symbol.for("react.provider"),tp=Symbol.for("react.context"),np=Symbol.for("react.forward_ref"),rp=Symbol.for("react.suspense"),ip=Symbol.for("react.memo"),ap=Symbol.for("react.lazy"),us=Symbol.iterator;function op(e){return e===null||typeof e!="object"?null:(e=us&&e[us]||e["@@iterator"],typeof e=="function"?e:null)}var gs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hs=Object.assign,ms={};function Dt(e,t,n){this.props=e,this.context=t,this.refs=ms,this.updater=n||gs}Dt.prototype.isReactComponent={};Dt.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vs(){}vs.prototype=Dt.prototype;function Oi(e,t,n){this.props=e,this.context=t,this.refs=ms,this.updater=n||gs}var Ii=Oi.prototype=new vs;Ii.constructor=Oi;hs(Ii,Dt.prototype);Ii.isPureReactComponent=!0;var ps=Array.isArray,xs=Object.prototype.hasOwnProperty,Bi={current:null},ys={key:!0,ref:!0,__self:!0,__source:!0};function ws(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)xs.call(t,r)&&!ys.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:xn,type:e,key:a,ref:o,props:i,_owner:Bi.current}}function sp(e,t){return{$$typeof:xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Di(e){return typeof e=="object"&&e!==null&&e.$$typeof===xn}function lp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fs=/\/+/g;function Ni(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lp(""+e.key):t.toString(36)}function fr(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case xn:case Qu:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ni(o,0):r,ps(i)?(n="",e!=null&&(n=e.replace(fs,"$&/")+"/"),fr(i,t,n,"",function(d){return d})):i!=null&&(Di(i)&&(i=sp(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(fs,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",ps(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Ni(a,s);o+=fr(a,t,n,l,i)}else if(l=op(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Ni(a,s++),o+=fr(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function pr(e,t,n){if(e==null)return e;var r=[],i=0;return fr(e,r,"","",function(a){return t.call(n,a,i++)}),r}function cp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ie={current:null},gr={transition:null},dp={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:gr,ReactCurrentOwner:Bi};function bs(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:pr,forEach:function(e,t,n){pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pr(e,function(){t++}),t},toArray:function(e){return pr(e,function(t){return t})||[]},only:function(e){if(!Di(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=Dt;_.Fragment=Ku;_.Profiler=Ju;_.PureComponent=Oi;_.StrictMode=Zu;_.Suspense=rp;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dp;_.act=bs;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hs({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Bi.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)xs.call(t,l)&&!ys.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var d=0;d<l;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:xn,type:e.type,key:i,ref:a,props:r,_owner:o}};_.createContext=function(e){return e={$$typeof:tp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ep,_context:e},e.Consumer=e};_.createElement=ws;_.createFactory=function(e){var t=ws.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:np,render:e}};_.isValidElement=Di;_.lazy=function(e){return{$$typeof:ap,_payload:{_status:-1,_result:e},_init:cp}};_.memo=function(e,t){return{$$typeof:ip,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=gr.transition;gr.transition={};try{e()}finally{gr.transition=t}};_.unstable_act=bs;_.useCallback=function(e,t){return ie.current.useCallback(e,t)};_.useContext=function(e){return ie.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return ie.current.useDeferredValue(e)};_.useEffect=function(e,t){return ie.current.useEffect(e,t)};_.useId=function(){return ie.current.useId()};_.useImperativeHandle=function(e,t,n){return ie.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return ie.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return ie.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return ie.current.useMemo(e,t)};_.useReducer=function(e,t,n){return ie.current.useReducer(e,t,n)};_.useRef=function(e){return ie.current.useRef(e)};_.useState=function(e){return ie.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return ie.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return ie.current.useTransition()};_.version="18.3.1"});var yn=$e((Tf,Ss)=>{"use strict";Ss.exports=ks()});var js=$e(L=>{"use strict";function Wi(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(0<hr(i,t))e[r]=t,e[n]=i,n=r;else break e}}function Le(e){return e.length===0?null:e[0]}function vr(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var o=2*(r+1)-1,s=e[o],l=o+1,d=e[l];if(0>hr(s,n))l<i&&0>hr(d,s)?(e[r]=d,e[l]=n,r=l):(e[r]=s,e[o]=n,r=o);else if(l<i&&0>hr(d,n))e[r]=d,e[l]=n,r=l;else break e}}return t}function hr(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Cs=performance,L.unstable_now=function(){return Cs.now()}):(Hi=Date,Es=Hi.now(),L.unstable_now=function(){return Hi.now()-Es});var Cs,Hi,Es,Ie=[],it=[],up=1,ke=null,J=3,xr=!1,Et=!1,bn=!1,Ts=typeof setTimeout=="function"?setTimeout:null,Ms=typeof clearTimeout=="function"?clearTimeout:null,_s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $i(e){for(var t=Le(it);t!==null;){if(t.callback===null)vr(it);else if(t.startTime<=e)vr(it),t.sortIndex=t.expirationTime,Wi(Ie,t);else break;t=Le(it)}}function Yi(e){if(bn=!1,$i(e),!Et)if(Le(Ie)!==null)Et=!0,Xi(Vi);else{var t=Le(it);t!==null&&qi(Yi,t.startTime-e)}}function Vi(e,t){Et=!1,bn&&(bn=!1,Ms(kn),kn=-1),xr=!0;var n=J;try{for($i(t),ke=Le(Ie);ke!==null&&(!(ke.expirationTime>t)||e&&!Fs());){var r=ke.callback;if(typeof r=="function"){ke.callback=null,J=ke.priorityLevel;var i=r(ke.expirationTime<=t);t=L.unstable_now(),typeof i=="function"?ke.callback=i:ke===Le(Ie)&&vr(Ie),$i(t)}else vr(Ie);ke=Le(Ie)}if(ke!==null)var a=!0;else{var o=Le(it);o!==null&&qi(Yi,o.startTime-t),a=!1}return a}finally{ke=null,J=n,xr=!1}}var yr=!1,mr=null,kn=-1,Ls=5,Ps=-1;function Fs(){return!(L.unstable_now()-Ps<Ls)}function Gi(){if(mr!==null){var e=L.unstable_now();Ps=e;var t=!0;try{t=mr(!0,e)}finally{t?wn():(yr=!1,mr=null)}}else yr=!1}var wn;typeof _s=="function"?wn=function(){_s(Gi)}:typeof MessageChannel<"u"?(Ui=new MessageChannel,zs=Ui.port2,Ui.port1.onmessage=Gi,wn=function(){zs.postMessage(null)}):wn=function(){Ts(Gi,0)};var Ui,zs;function Xi(e){mr=e,yr||(yr=!0,wn())}function qi(e,t){kn=Ts(function(){e(L.unstable_now())},t)}L.unstable_IdlePriority=5;L.unstable_ImmediatePriority=1;L.unstable_LowPriority=4;L.unstable_NormalPriority=3;L.unstable_Profiling=null;L.unstable_UserBlockingPriority=2;L.unstable_cancelCallback=function(e){e.callback=null};L.unstable_continueExecution=function(){Et||xr||(Et=!0,Xi(Vi))};L.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ls=0<e?Math.floor(1e3/e):5};L.unstable_getCurrentPriorityLevel=function(){return J};L.unstable_getFirstCallbackNode=function(){return Le(Ie)};L.unstable_next=function(e){switch(J){case 1:case 2:case 3:var t=3;break;default:t=J}var n=J;J=t;try{return e()}finally{J=n}};L.unstable_pauseExecution=function(){};L.unstable_requestPaint=function(){};L.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=J;J=e;try{return t()}finally{J=n}};L.unstable_scheduleCallback=function(e,t,n){var r=L.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=n+i,e={id:up++,callback:t,priorityLevel:e,startTime:n,expirationTime:i,sortIndex:-1},n>r?(e.sortIndex=n,Wi(it,e),Le(Ie)===null&&e===Le(it)&&(bn?(Ms(kn),kn=-1):bn=!0,qi(Yi,n-r))):(e.sortIndex=i,Wi(Ie,e),Et||xr||(Et=!0,Xi(Vi))),e};L.unstable_shouldYield=Fs;L.unstable_wrapCallback=function(e){var t=J;return function(){var n=J;J=t;try{return e.apply(this,arguments)}finally{J=n}}}});var Rs=$e((Lf,As)=>{"use strict";As.exports=js()});var Bd=$e(be=>{"use strict";var pp=yn(),ye=Rs();function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gl=new Set,Wn={};function It(e,t){ln(e,t),ln(e+"Capture",t)}function ln(e,t){for(Wn[e]=t,e=0;e<t.length;e++)Gl.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xa=Object.prototype.hasOwnProperty,fp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ns={},Os={};function gp(e){return xa.call(Os,e)?!0:xa.call(Ns,e)?!1:fp.test(e)?Os[e]=!0:(Ns[e]=!0,!1)}function hp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mp(e,t,n,r){if(t===null||typeof t>"u"||hp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){K[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];K[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){K[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){K[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){K[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){K[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){K[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){K[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){K[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var uo=/[\-:]([a-z])/g;function po(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(uo,po);K[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(uo,po);K[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(uo,po);K[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){K[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});K.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){K[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function fo(e,t,n,r){var i=K.hasOwnProperty(t)?K[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(mp(t,n,i,r)&&(n=null),r||i===null?gp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tt=pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wr=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),go=Symbol.for("react.strict_mode"),ya=Symbol.for("react.profiler"),Ul=Symbol.for("react.provider"),Wl=Symbol.for("react.context"),ho=Symbol.for("react.forward_ref"),wa=Symbol.for("react.suspense"),ba=Symbol.for("react.suspense_list"),mo=Symbol.for("react.memo"),ot=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var $l=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Is=Symbol.iterator;function Sn(e){return e===null||typeof e!="object"?null:(e=Is&&e[Is]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Qi;function Pn(e){if(Qi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qi=t&&t[1]||""}return`
`+Qi+e}var Ki=!1;function Zi(e,t){if(!e||Ki)return"";Ki=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Ki=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pn(e):""}function vp(e){switch(e.tag){case 5:return Pn(e.type);case 16:return Pn("Lazy");case 13:return Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 2:case 15:return e=Zi(e.type,!1),e;case 11:return e=Zi(e.type.render,!1),e;case 1:return e=Zi(e.type,!0),e;default:return""}}function ka(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Ut:return"Portal";case ya:return"Profiler";case go:return"StrictMode";case wa:return"Suspense";case ba:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wl:return(e.displayName||"Context")+".Consumer";case Ul:return(e._context.displayName||"Context")+".Provider";case ho:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mo:return t=e.displayName||null,t!==null?t:ka(e.type)||"Memo";case ot:t=e._payload,e=e._init;try{return ka(e(t))}catch{}}return null}function xp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ka(t);case 8:return t===go?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yp(e){var t=Yl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function br(e){e._valueTracker||(e._valueTracker=yp(e))}function Vl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yl(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sa(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xl(e,t){t=t.checked,t!=null&&fo(e,"checked",t,!1)}function Ca(e,t){Xl(e,t);var n=wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ea(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ea(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ds(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ea(e,t,n){(t!=="number"||qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _a(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(m(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(m(92));if(Fn(n)){if(1<n.length)throw Error(m(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wt(n)}}function ql(e,t){var n=wt(t.value),r=wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Gs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ql(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function za(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ql(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,Kl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wp=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){wp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function Zl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function Jl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zl(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var bp=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ta(e,t){if(t){if(bp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(m(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(m(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(m(61))}if(t.style!=null&&typeof t.style!="object")throw Error(m(62))}}function Ma(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var La=null;function vo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pa=null,nn=null,rn=null;function Us(e){if(e=cr(e)){if(typeof Pa!="function")throw Error(m(280));var t=e.stateNode;t&&(t=Si(t),Pa(e.stateNode,e.type,t))}}function ec(e){nn?rn?rn.push(e):rn=[e]:nn=e}function tc(){if(nn){var e=nn,t=rn;if(rn=nn=null,Us(e),t)for(e=0;e<t.length;e++)Us(t[e])}}function nc(e,t){return e(t)}function rc(){}var Ji=!1;function ic(e,t,n){if(Ji)return e(t,n);Ji=!0;try{return nc(e,t,n)}finally{Ji=!1,(nn!==null||rn!==null)&&(rc(),tc())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=Si(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(m(231,t,typeof n));return n}var Fa=!1;if(Ke)try{Ht={},Object.defineProperty(Ht,"passive",{get:function(){Fa=!0}}),window.addEventListener("test",Ht,Ht),window.removeEventListener("test",Ht,Ht)}catch{Fa=!1}var Ht;function kp(e,t,n,r,i,a,o,s,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var Nn=!1,Qr=null,Kr=!1,ja=null,Sp={onError:function(e){Nn=!0,Qr=e}};function Cp(e,t,n,r,i,a,o,s,l){Nn=!1,Qr=null,kp.apply(Sp,arguments)}function Ep(e,t,n,r,i,a,o,s,l){if(Cp.apply(this,arguments),Nn){if(Nn){var d=Qr;Nn=!1,Qr=null}else throw Error(m(198));Kr||(Kr=!0,ja=d)}}function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ac(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ws(e){if(Bt(e)!==e)throw Error(m(188))}function _p(e){var t=e.alternate;if(!t){if(t=Bt(e),t===null)throw Error(m(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Ws(i),e;if(a===r)return Ws(i),t;a=a.sibling}throw Error(m(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(m(189))}}if(n.alternate!==r)throw Error(m(190))}if(n.tag!==3)throw Error(m(188));return n.stateNode.current===n?e:t}function oc(e){return e=_p(e),e!==null?sc(e):null}function sc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sc(e);if(t!==null)return t;e=e.sibling}return null}var lc=ye.unstable_scheduleCallback,$s=ye.unstable_cancelCallback,zp=ye.unstable_shouldYield,Tp=ye.unstable_requestPaint,H=ye.unstable_now,Mp=ye.unstable_getCurrentPriorityLevel,xo=ye.unstable_ImmediatePriority,cc=ye.unstable_UserBlockingPriority,Zr=ye.unstable_NormalPriority,Lp=ye.unstable_LowPriority,dc=ye.unstable_IdlePriority,yi=null,Ge=null;function Pp(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(yi,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:Ap,Fp=Math.log,jp=Math.LN2;function Ap(e){return e>>>=0,e===0?32:31-(Fp(e)/jp|0)|0}var Sr=64,Cr=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=jn(s):(a&=o,a!==0&&(r=jn(a)))}else o=n&~i,o!==0?r=jn(o):a!==0&&(r=jn(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Re(t),i=1<<n,r|=e[n],t&=~i;return r}function Rp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Np(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Re(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=Rp(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function Aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uc(){var e=Sr;return Sr<<=1,!(Sr&4194240)&&(Sr=64),e}function ea(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Re(t),e[t]=n}function Op(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Re(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function yo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function pc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fc,wo,gc,hc,mc,Ra=!1,Er=[],pt=null,ft=null,gt=null,Vn=new Map,Xn=new Map,lt=[],Ip="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ys(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function Cn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=cr(t),t!==null&&wo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Bp(e,t,n,r,i){switch(t){case"focusin":return pt=Cn(pt,e,t,n,r,i),!0;case"dragenter":return ft=Cn(ft,e,t,n,r,i),!0;case"mouseover":return gt=Cn(gt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Vn.set(a,Cn(Vn.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Xn.set(a,Cn(Xn.get(a)||null,e,t,n,r,i)),!0}return!1}function vc(e){var t=Tt(e.target);if(t!==null){var n=Bt(t);if(n!==null){if(t=n.tag,t===13){if(t=ac(n),t!==null){e.blockedOn=t,mc(e.priority,function(){gc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Na(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);La=r,n.target.dispatchEvent(r),La=null}else return t=cr(n),t!==null&&wo(t),e.blockedOn=n,!1;t.shift()}return!0}function Vs(e,t,n){Br(e)&&n.delete(t)}function Dp(){Ra=!1,pt!==null&&Br(pt)&&(pt=null),ft!==null&&Br(ft)&&(ft=null),gt!==null&&Br(gt)&&(gt=null),Vn.forEach(Vs),Xn.forEach(Vs)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,Ra||(Ra=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,Dp)))}function qn(e){function t(i){return En(i,e)}if(0<Er.length){En(Er[0],e);for(var n=1;n<Er.length;n++){var r=Er[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&En(pt,e),ft!==null&&En(ft,e),gt!==null&&En(gt,e),Vn.forEach(t),Xn.forEach(t),n=0;n<lt.length;n++)r=lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<lt.length&&(n=lt[0],n.blockedOn===null);)vc(n),n.blockedOn===null&&lt.shift()}var an=tt.ReactCurrentBatchConfig,ei=!0;function Hp(e,t,n,r){var i=M,a=an.transition;an.transition=null;try{M=1,bo(e,t,n,r)}finally{M=i,an.transition=a}}function Gp(e,t,n,r){var i=M,a=an.transition;an.transition=null;try{M=4,bo(e,t,n,r)}finally{M=i,an.transition=a}}function bo(e,t,n,r){if(ei){var i=Na(e,t,n,r);if(i===null)sa(e,t,r,ti,n),Ys(e,r);else if(Bp(i,e,t,n,r))r.stopPropagation();else if(Ys(e,r),t&4&&-1<Ip.indexOf(e)){for(;i!==null;){var a=cr(i);if(a!==null&&fc(a),a=Na(e,t,n,r),a===null&&sa(e,t,r,ti,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else sa(e,t,r,null,n)}}var ti=null;function Na(e,t,n,r){if(ti=null,e=vo(r),e=Tt(e),e!==null)if(t=Bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ac(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ti=e,null}function xc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mp()){case xo:return 1;case cc:return 4;case Zr:case Lp:return 16;case dc:return 536870912;default:return 16}default:return 16}}var dt=null,ko=null,Dr=null;function yc(){if(Dr)return Dr;var e,t=ko,n=t.length,r,i="value"in dt?dt.value:dt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Dr=i.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _r(){return!0}function Xs(){return!1}function we(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?_r:Xs,this.isPropagationStopped=Xs,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},So=we(hn),lr=B({},hn,{view:0,detail:0}),Up=we(lr),ta,na,_n,wi=B({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?(ta=e.screenX-_n.screenX,na=e.screenY-_n.screenY):na=ta=0,_n=e),ta)},movementY:function(e){return"movementY"in e?e.movementY:na}}),qs=we(wi),Wp=B({},wi,{dataTransfer:0}),$p=we(Wp),Yp=B({},lr,{relatedTarget:0}),ra=we(Yp),Vp=B({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xp=we(Vp),qp=B({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qp=we(qp),Kp=B({},hn,{data:0}),Qs=we(Kp),Zp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=e0[e])?!!t[e]:!1}function Co(){return t0}var n0=B({},lr,{key:function(e){if(e.key){var t=Zp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Co,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),r0=we(n0),i0=B({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ks=we(i0),a0=B({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Co}),o0=we(a0),s0=B({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),l0=we(s0),c0=B({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),d0=we(c0),u0=[9,13,27,32],Eo=Ke&&"CompositionEvent"in window,On=null;Ke&&"documentMode"in document&&(On=document.documentMode);var p0=Ke&&"TextEvent"in window&&!On,wc=Ke&&(!Eo||On&&8<On&&11>=On),Zs=" ",Js=!1;function bc(e,t){switch(e){case"keyup":return u0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function f0(e,t){switch(e){case"compositionend":return kc(t);case"keypress":return t.which!==32?null:(Js=!0,Zs);case"textInput":return e=t.data,e===Zs&&Js?null:e;default:return null}}function g0(e,t){if($t)return e==="compositionend"||!Eo&&bc(e,t)?(e=yc(),Dr=ko=dt=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wc&&t.locale!=="ko"?null:t.data;default:return null}}var h0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function el(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!h0[e.type]:t==="textarea"}function Sc(e,t,n,r){ec(r),t=ni(t,"onChange"),0<t.length&&(n=new So("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var In=null,Qn=null;function m0(e){Ac(e,0)}function bi(e){var t=Xt(e);if(Vl(t))return e}function v0(e,t){if(e==="change")return t}var Cc=!1;Ke&&(Ke?(Tr="oninput"in document,Tr||(ia=document.createElement("div"),ia.setAttribute("oninput","return;"),Tr=typeof ia.oninput=="function"),zr=Tr):zr=!1,Cc=zr&&(!document.documentMode||9<document.documentMode));var zr,Tr,ia;function tl(){In&&(In.detachEvent("onpropertychange",Ec),Qn=In=null)}function Ec(e){if(e.propertyName==="value"&&bi(Qn)){var t=[];Sc(t,Qn,e,vo(e)),ic(m0,t)}}function x0(e,t,n){e==="focusin"?(tl(),In=t,Qn=n,In.attachEvent("onpropertychange",Ec)):e==="focusout"&&tl()}function y0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(Qn)}function w0(e,t){if(e==="click")return bi(t)}function b0(e,t){if(e==="input"||e==="change")return bi(t)}function k0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:k0;function Kn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xa.call(t,i)||!Oe(e[i],t[i]))return!1}return!0}function nl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rl(e,t){var n=nl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nl(n)}}function _c(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_c(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zc(){for(var e=window,t=qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qr(e.document)}return t}function _o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function S0(e){var t=zc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_c(n.ownerDocument.documentElement,n)){if(r!==null&&_o(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=rl(n,a);var o=rl(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var C0=Ke&&"documentMode"in document&&11>=document.documentMode,Yt=null,Oa=null,Bn=null,Ia=!1;function il(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ia||Yt==null||Yt!==qr(r)||(r=Yt,"selectionStart"in r&&_o(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bn&&Kn(Bn,r)||(Bn=r,r=ni(Oa,"onSelect"),0<r.length&&(t=new So("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yt)))}function Mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vt={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionend:Mr("Transition","TransitionEnd")},aa={},Tc={};Ke&&(Tc=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function ki(e){if(aa[e])return aa[e];if(!Vt[e])return e;var t=Vt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tc)return aa[e]=t[n];return e}var Mc=ki("animationend"),Lc=ki("animationiteration"),Pc=ki("animationstart"),Fc=ki("transitionend"),jc=new Map,al="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){jc.set(e,t),It(t,[e])}for(Lr=0;Lr<al.length;Lr++)Pr=al[Lr],ol=Pr.toLowerCase(),sl=Pr[0].toUpperCase()+Pr.slice(1),kt(ol,"on"+sl);var Pr,ol,sl,Lr;kt(Mc,"onAnimationEnd");kt(Lc,"onAnimationIteration");kt(Pc,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(Fc,"onTransitionEnd");ln("onMouseEnter",["mouseout","mouseover"]);ln("onMouseLeave",["mouseout","mouseover"]);ln("onPointerEnter",["pointerout","pointerover"]);ln("onPointerLeave",["pointerout","pointerover"]);It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));It("onBeforeInput",["compositionend","keypress","textInput","paste"]);It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E0=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function ll(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ep(r,t,void 0,e),e.currentTarget=null}function Ac(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,d=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;ll(i,s,d),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,d=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;ll(i,s,d),a=l}}}if(Kr)throw e=ja,Kr=!1,ja=null,e}function j(e,t){var n=t[Ua];n===void 0&&(n=t[Ua]=new Set);var r=e+"__bubble";n.has(r)||(Rc(t,e,2,!1),n.add(r))}function oa(e,t,n){var r=0;t&&(r|=4),Rc(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function Zn(e){if(!e[Fr]){e[Fr]=!0,Gl.forEach(function(n){n!=="selectionchange"&&(E0.has(n)||oa(n,!1,e),oa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,oa("selectionchange",!1,t))}}function Rc(e,t,n,r){switch(xc(t)){case 1:var i=Hp;break;case 4:i=Gp;break;default:i=bo}n=i.bind(null,t,n,e),i=void 0,!Fa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function sa(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Tt(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}ic(function(){var d=a,g=vo(n),h=[];e:{var f=jc.get(e);if(f!==void 0){var x=So,y=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":x=r0;break;case"focusin":y="focus",x=ra;break;case"focusout":y="blur",x=ra;break;case"beforeblur":case"afterblur":x=ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=$p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=o0;break;case Mc:case Lc:case Pc:x=Xp;break;case Fc:x=l0;break;case"scroll":x=Up;break;case"wheel":x=d0;break;case"copy":case"cut":case"paste":x=Qp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ks}var b=(t&4)!==0,F=!b&&e==="scroll",u=b?f!==null?f+"Capture":null:f;b=[];for(var c=d,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,u!==null&&(v=Yn(c,u),v!=null&&b.push(Jn(c,v,p)))),F)break;c=c.return}0<b.length&&(f=new x(f,y,null,n,g),h.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",f&&n!==La&&(y=n.relatedTarget||n.fromElement)&&(Tt(y)||y[Ze]))break e;if((x||f)&&(f=g.window===g?g:(f=g.ownerDocument)?f.defaultView||f.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=d,y=y?Tt(y):null,y!==null&&(F=Bt(y),y!==F||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=d),x!==y)){if(b=qs,v="onMouseLeave",u="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=Ks,v="onPointerLeave",u="onPointerEnter",c="pointer"),F=x==null?f:Xt(x),p=y==null?f:Xt(y),f=new b(v,c+"leave",x,n,g),f.target=F,f.relatedTarget=p,v=null,Tt(g)===d&&(b=new b(u,c+"enter",y,n,g),b.target=p,b.relatedTarget=F,v=b),F=v,x&&y)t:{for(b=x,u=y,c=0,p=b;p;p=Gt(p))c++;for(p=0,v=u;v;v=Gt(v))p++;for(;0<c-p;)b=Gt(b),c--;for(;0<p-c;)u=Gt(u),p--;for(;c--;){if(b===u||u!==null&&b===u.alternate)break t;b=Gt(b),u=Gt(u)}b=null}else b=null;x!==null&&cl(h,f,x,b,!1),y!==null&&F!==null&&cl(h,F,y,b,!0)}}e:{if(f=d?Xt(d):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var k=v0;else if(el(f))if(Cc)k=b0;else{k=y0;var S=x0}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=w0);if(k&&(k=k(e,d))){Sc(h,k,n,g);break e}S&&S(e,f,d),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Ea(f,"number",f.value)}switch(S=d?Xt(d):window,e){case"focusin":(el(S)||S.contentEditable==="true")&&(Yt=S,Oa=d,Bn=null);break;case"focusout":Bn=Oa=Yt=null;break;case"mousedown":Ia=!0;break;case"contextmenu":case"mouseup":case"dragend":Ia=!1,il(h,n,g);break;case"selectionchange":if(C0)break;case"keydown":case"keyup":il(h,n,g)}var C;if(Eo)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else $t?bc(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(wc&&n.locale!=="ko"&&($t||E!=="onCompositionStart"?E==="onCompositionEnd"&&$t&&(C=yc()):(dt=g,ko="value"in dt?dt.value:dt.textContent,$t=!0)),S=ni(d,E),0<S.length&&(E=new Qs(E,e,null,n,g),h.push({event:E,listeners:S}),C?E.data=C:(C=kc(n),C!==null&&(E.data=C)))),(C=p0?f0(e,n):g0(e,n))&&(d=ni(d,"onBeforeInput"),0<d.length&&(g=new Qs("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:d}),g.data=C))}Ac(h,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ni(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Yn(e,n),a!=null&&r.unshift(Jn(e,a,i)),a=Yn(e,t),a!=null&&r.push(Jn(e,a,i))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cl(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,d=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&d!==null&&(s=d,i?(l=Yn(n,a),l!=null&&o.unshift(Jn(n,l,s))):i||(l=Yn(n,a),l!=null&&o.push(Jn(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var _0=/\r\n?/g,z0=/\u0000|\uFFFD/g;function dl(e){return(typeof e=="string"?e:""+e).replace(_0,`
`).replace(z0,"")}function jr(e,t,n){if(t=dl(t),dl(e)!==t&&n)throw Error(m(425))}function ri(){}var Ba=null,Da=null;function Ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ga=typeof setTimeout=="function"?setTimeout:void 0,T0=typeof clearTimeout=="function"?clearTimeout:void 0,ul=typeof Promise=="function"?Promise:void 0,M0=typeof queueMicrotask=="function"?queueMicrotask:typeof ul<"u"?function(e){return ul.resolve(null).then(e).catch(L0)}:Ga;function L0(e){setTimeout(function(){throw e})}function la(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qn(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mn=Math.random().toString(36).slice(2),He="__reactFiber$"+mn,er="__reactProps$"+mn,Ze="__reactContainer$"+mn,Ua="__reactEvents$"+mn,P0="__reactListeners$"+mn,F0="__reactHandles$"+mn;function Tt(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pl(e);e!==null;){if(n=e[He])return n;e=pl(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[He]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(m(33))}function Si(e){return e[er]||null}var Wa=[],qt=-1;function St(e){return{current:e}}function A(e){0>qt||(e.current=Wa[qt],Wa[qt]=null,qt--)}function P(e,t){qt++,Wa[qt]=e.current,e.current=t}var bt={},re=St(bt),ue=St(!1),jt=bt;function cn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function pe(e){return e=e.childContextTypes,e!=null}function ii(){A(ue),A(re)}function fl(e,t,n){if(re.current!==bt)throw Error(m(168));P(re,t),P(ue,n)}function Nc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(m(108,xp(e)||"Unknown",i));return B({},n,r)}function ai(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,jt=re.current,P(re,e),P(ue,ue.current),!0}function gl(e,t,n){var r=e.stateNode;if(!r)throw Error(m(169));n?(e=Nc(e,t,jt),r.__reactInternalMemoizedMergedChildContext=e,A(ue),A(re),P(re,e)):A(ue),P(ue,n)}var Ve=null,Ci=!1,ca=!1;function Oc(e){Ve===null?Ve=[e]:Ve.push(e)}function j0(e){Ci=!0,Oc(e)}function Ct(){if(!ca&&Ve!==null){ca=!0;var e=0,t=M;try{var n=Ve;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,Ci=!1}catch(i){throw Ve!==null&&(Ve=Ve.slice(e+1)),lc(xo,Ct),i}finally{M=t,ca=!1}}return null}var Qt=[],Kt=0,oi=null,si=0,Se=[],Ce=0,At=null,Xe=1,qe="";function _t(e,t){Qt[Kt++]=si,Qt[Kt++]=oi,oi=e,si=t}function Ic(e,t,n){Se[Ce++]=Xe,Se[Ce++]=qe,Se[Ce++]=At,At=e;var r=Xe;e=qe;var i=32-Re(r)-1;r&=~(1<<i),n+=1;var a=32-Re(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xe=1<<32-Re(t)+i|n<<i|r,qe=a+e}else Xe=1<<a|n<<i|r,qe=e}function zo(e){e.return!==null&&(_t(e,1),Ic(e,1,0))}function To(e){for(;e===oi;)oi=Qt[--Kt],Qt[Kt]=null,si=Qt[--Kt],Qt[Kt]=null;for(;e===At;)At=Se[--Ce],Se[Ce]=null,qe=Se[--Ce],Se[Ce]=null,Xe=Se[--Ce],Se[Ce]=null}var xe=null,ve=null,R=!1,Ae=null;function Bc(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ve=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=At!==null?{id:Xe,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ve=null,!0):!1;default:return!1}}function $a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ya(e){if(R){var t=ve;if(t){var n=t;if(!hl(e,t)){if($a(e))throw Error(m(418));t=ht(n.nextSibling);var r=xe;t&&hl(e,t)?Bc(r,n):(e.flags=e.flags&-4097|2,R=!1,xe=e)}}else{if($a(e))throw Error(m(418));e.flags=e.flags&-4097|2,R=!1,xe=e}}}function ml(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function Ar(e){if(e!==xe)return!1;if(!R)return ml(e),R=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ha(e.type,e.memoizedProps)),t&&(t=ve)){if($a(e))throw Dc(),Error(m(418));for(;t;)Bc(e,t),t=ht(t.nextSibling)}if(ml(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=xe?ht(e.stateNode.nextSibling):null;return!0}function Dc(){for(var e=ve;e;)e=ht(e.nextSibling)}function dn(){ve=xe=null,R=!1}function Mo(e){Ae===null?Ae=[e]:Ae.push(e)}var A0=tt.ReactCurrentBatchConfig;function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(m(309));var r=n.stateNode}if(!r)throw Error(m(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(m(284));if(!n._owner)throw Error(m(290,e))}return e}function Rr(e,t){throw e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vl(e){var t=e._init;return t(e._payload)}function Hc(e){function t(u,c){if(e){var p=u.deletions;p===null?(u.deletions=[c],u.flags|=16):p.push(c)}}function n(u,c){if(!e)return null;for(;c!==null;)t(u,c),c=c.sibling;return null}function r(u,c){for(u=new Map;c!==null;)c.key!==null?u.set(c.key,c):u.set(c.index,c),c=c.sibling;return u}function i(u,c){return u=yt(u,c),u.index=0,u.sibling=null,u}function a(u,c,p){return u.index=p,e?(p=u.alternate,p!==null?(p=p.index,p<c?(u.flags|=2,c):p):(u.flags|=2,c)):(u.flags|=1048576,c)}function o(u){return e&&u.alternate===null&&(u.flags|=2),u}function s(u,c,p,v){return c===null||c.tag!==6?(c=ma(p,u.mode,v),c.return=u,c):(c=i(c,p),c.return=u,c)}function l(u,c,p,v){var k=p.type;return k===Wt?g(u,c,p.props.children,v,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ot&&vl(k)===c.type)?(v=i(c,p.props),v.ref=zn(u,c,p),v.return=u,v):(v=Xr(p.type,p.key,p.props,null,u.mode,v),v.ref=zn(u,c,p),v.return=u,v)}function d(u,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=va(p,u.mode,v),c.return=u,c):(c=i(c,p.children||[]),c.return=u,c)}function g(u,c,p,v,k){return c===null||c.tag!==7?(c=Ft(p,u.mode,v,k),c.return=u,c):(c=i(c,p),c.return=u,c)}function h(u,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ma(""+c,u.mode,p),c.return=u,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case wr:return p=Xr(c.type,c.key,c.props,null,u.mode,p),p.ref=zn(u,null,c),p.return=u,p;case Ut:return c=va(c,u.mode,p),c.return=u,c;case ot:var v=c._init;return h(u,v(c._payload),p)}if(Fn(c)||Sn(c))return c=Ft(c,u.mode,p,null),c.return=u,c;Rr(u,c)}return null}function f(u,c,p,v){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:s(u,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case wr:return p.key===k?l(u,c,p,v):null;case Ut:return p.key===k?d(u,c,p,v):null;case ot:return k=p._init,f(u,c,k(p._payload),v)}if(Fn(p)||Sn(p))return k!==null?null:g(u,c,p,v,null);Rr(u,p)}return null}function x(u,c,p,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return u=u.get(p)||null,s(c,u,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wr:return u=u.get(v.key===null?p:v.key)||null,l(c,u,v,k);case Ut:return u=u.get(v.key===null?p:v.key)||null,d(c,u,v,k);case ot:var S=v._init;return x(u,c,p,S(v._payload),k)}if(Fn(v)||Sn(v))return u=u.get(p)||null,g(c,u,v,k,null);Rr(c,v)}return null}function y(u,c,p,v){for(var k=null,S=null,C=c,E=c=0,N=null;C!==null&&E<p.length;E++){C.index>E?(N=C,C=null):N=C.sibling;var z=f(u,C,p[E],v);if(z===null){C===null&&(C=N);break}e&&C&&z.alternate===null&&t(u,C),c=a(z,c,E),S===null?k=z:S.sibling=z,S=z,C=N}if(E===p.length)return n(u,C),R&&_t(u,E),k;if(C===null){for(;E<p.length;E++)C=h(u,p[E],v),C!==null&&(c=a(C,c,E),S===null?k=C:S.sibling=C,S=C);return R&&_t(u,E),k}for(C=r(u,C);E<p.length;E++)N=x(C,u,E,p[E],v),N!==null&&(e&&N.alternate!==null&&C.delete(N.key===null?E:N.key),c=a(N,c,E),S===null?k=N:S.sibling=N,S=N);return e&&C.forEach(function(Me){return t(u,Me)}),R&&_t(u,E),k}function b(u,c,p,v){var k=Sn(p);if(typeof k!="function")throw Error(m(150));if(p=k.call(p),p==null)throw Error(m(151));for(var S=k=null,C=c,E=c=0,N=null,z=p.next();C!==null&&!z.done;E++,z=p.next()){C.index>E?(N=C,C=null):N=C.sibling;var Me=f(u,C,z.value,v);if(Me===null){C===null&&(C=N);break}e&&C&&Me.alternate===null&&t(u,C),c=a(Me,c,E),S===null?k=Me:S.sibling=Me,S=Me,C=N}if(z.done)return n(u,C),R&&_t(u,E),k;if(C===null){for(;!z.done;E++,z=p.next())z=h(u,z.value,v),z!==null&&(c=a(z,c,E),S===null?k=z:S.sibling=z,S=z);return R&&_t(u,E),k}for(C=r(u,C);!z.done;E++,z=p.next())z=x(C,u,E,z.value,v),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?E:z.key),c=a(z,c,E),S===null?k=z:S.sibling=z,S=z);return e&&C.forEach(function(ur){return t(u,ur)}),R&&_t(u,E),k}function F(u,c,p,v){if(typeof p=="object"&&p!==null&&p.type===Wt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case wr:e:{for(var k=p.key,S=c;S!==null;){if(S.key===k){if(k=p.type,k===Wt){if(S.tag===7){n(u,S.sibling),c=i(S,p.props.children),c.return=u,u=c;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ot&&vl(k)===S.type){n(u,S.sibling),c=i(S,p.props),c.ref=zn(u,S,p),c.return=u,u=c;break e}n(u,S);break}else t(u,S);S=S.sibling}p.type===Wt?(c=Ft(p.props.children,u.mode,v,p.key),c.return=u,u=c):(v=Xr(p.type,p.key,p.props,null,u.mode,v),v.ref=zn(u,c,p),v.return=u,u=v)}return o(u);case Ut:e:{for(S=p.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(u,c.sibling),c=i(c,p.children||[]),c.return=u,u=c;break e}else{n(u,c);break}else t(u,c);c=c.sibling}c=va(p,u.mode,v),c.return=u,u=c}return o(u);case ot:return S=p._init,F(u,c,S(p._payload),v)}if(Fn(p))return y(u,c,p,v);if(Sn(p))return b(u,c,p,v);Rr(u,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(u,c.sibling),c=i(c,p),c.return=u,u=c):(n(u,c),c=ma(p,u.mode,v),c.return=u,u=c),o(u)):n(u,c)}return F}var un=Hc(!0),Gc=Hc(!1),li=St(null),ci=null,Zt=null,Lo=null;function Po(){Lo=Zt=ci=null}function Fo(e){var t=li.current;A(li),e._currentValue=t}function Va(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){ci=e,Lo=Zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(Lo!==e)if(e={context:e,memoizedValue:t,next:null},Zt===null){if(ci===null)throw Error(m(308));Zt=e,ci.dependencies={lanes:0,firstContext:e}}else Zt=Zt.next=e;return t}var Mt=null;function jo(e){Mt===null?Mt=[e]:Mt.push(e)}function Uc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,jo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var st=!1;function Ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Je(e,n)}return i=r.interleaved,i===null?(t.next=t,jo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Je(e,n)}function Gr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yo(e,n)}}function xl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function di(e,t,n,r){var i=e.updateQueue;st=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,d=l.next;l.next=null,o===null?a=d:o.next=d,o=l;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==o&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=l))}if(a!==null){var h=i.baseState;o=0,g=d=l=null,s=a;do{var f=s.lane,x=s.eventTime;if((r&f)===f){g!==null&&(g=g.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,b=s;switch(f=t,x=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){h=y.call(x,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,f=typeof y=="function"?y.call(x,h,f):y,f==null)break e;h=B({},h,f);break e;case 2:st=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else x={eventTime:x,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=x,l=h):g=g.next=x,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(g===null&&(l=h),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Nt|=o,e.lanes=o,e.memoizedState=h}}function yl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(m(191,i));i.call(r)}}}var dr={},Ue=St(dr),tr=St(dr),nr=St(dr);function Lt(e){if(e===dr)throw Error(m(174));return e}function Ro(e,t){switch(P(nr,t),P(tr,e),P(Ue,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:za(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=za(t,e)}A(Ue),P(Ue,t)}function pn(){A(Ue),A(tr),A(nr)}function $c(e){Lt(nr.current);var t=Lt(Ue.current),n=za(t,e.type);t!==n&&(P(tr,e),P(Ue,n))}function No(e){tr.current===e&&(A(Ue),A(tr))}var O=St(0);function ui(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var da=[];function Oo(){for(var e=0;e<da.length;e++)da[e]._workInProgressVersionPrimary=null;da.length=0}var Ur=tt.ReactCurrentDispatcher,ua=tt.ReactCurrentBatchConfig,Rt=0,I=null,$=null,V=null,pi=!1,Dn=!1,rr=0,R0=0;function ee(){throw Error(m(321))}function Io(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function Bo(e,t,n,r,i,a){if(Rt=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ur.current=e===null||e.memoizedState===null?B0:D0,e=n(r,i),Dn){a=0;do{if(Dn=!1,rr=0,25<=a)throw Error(m(301));a+=1,V=$=null,t.updateQueue=null,Ur.current=H0,e=n(r,i)}while(Dn)}if(Ur.current=fi,t=$!==null&&$.next!==null,Rt=0,V=$=I=null,pi=!1,t)throw Error(m(300));return e}function Do(){var e=rr!==0;return rr=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return V===null?I.memoizedState=V=e:V=V.next=e,V}function Te(){if($===null){var e=I.alternate;e=e!==null?e.memoizedState:null}else e=$.next;var t=V===null?I.memoizedState:V.next;if(t!==null)V=t,$=e;else{if(e===null)throw Error(m(310));$=e,e={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},V===null?I.memoizedState=V=e:V=V.next=e}return V}function ir(e,t){return typeof t=="function"?t(e):t}function pa(e){var t=Te(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=$,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,d=a;do{var g=d.lane;if((Rt&g)===g)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(s=l=h,o=r):l=l.next=h,I.lanes|=g,Nt|=g}d=d.next}while(d!==null&&d!==a);l===null?o=r:l.next=s,Oe(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,I.lanes|=a,Nt|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fa(e){var t=Te(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Oe(a,t.memoizedState)||(de=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Yc(){}function Vc(e,t){var n=I,r=Te(),i=t(),a=!Oe(r.memoizedState,i);if(a&&(r.memoizedState=i,de=!0),r=r.queue,Ho(Qc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||V!==null&&V.memoizedState.tag&1){if(n.flags|=2048,ar(9,qc.bind(null,n,r,i,t),void 0,null),X===null)throw Error(m(349));Rt&30||Xc(n,t,i)}return i}function Xc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t={lastEffect:null,stores:null},I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qc(e,t,n,r){t.value=n,t.getSnapshot=r,Kc(t)&&Zc(e)}function Qc(e,t,n){return n(function(){Kc(t)&&Zc(e)})}function Kc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function Zc(e){var t=Je(e,1);t!==null&&Ne(t,e,1,-1)}function wl(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},t.queue=e,e=e.dispatch=I0.bind(null,I,e),[t.memoizedState,e]}function ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=I.updateQueue,t===null?(t={lastEffect:null,stores:null},I.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jc(){return Te().memoizedState}function Wr(e,t,n,r){var i=De();I.flags|=e,i.memoizedState=ar(1|t,n,void 0,r===void 0?null:r)}function Ei(e,t,n,r){var i=Te();r=r===void 0?null:r;var a=void 0;if($!==null){var o=$.memoizedState;if(a=o.destroy,r!==null&&Io(r,o.deps)){i.memoizedState=ar(t,n,a,r);return}}I.flags|=e,i.memoizedState=ar(1|t,n,a,r)}function bl(e,t){return Wr(8390656,8,e,t)}function Ho(e,t){return Ei(2048,8,e,t)}function ed(e,t){return Ei(4,2,e,t)}function td(e,t){return Ei(4,4,e,t)}function nd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rd(e,t,n){return n=n!=null?n.concat([e]):null,Ei(4,4,nd.bind(null,t,e),n)}function Go(){}function id(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Io(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ad(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Io(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function od(e,t,n){return Rt&21?(Oe(n,t)||(n=uc(),I.lanes|=n,Nt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function N0(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=ua.transition;ua.transition={};try{e(!1),t()}finally{M=n,ua.transition=r}}function sd(){return Te().memoizedState}function O0(e,t,n){var r=xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ld(e))cd(t,n);else if(n=Uc(e,t,n,r),n!==null){var i=oe();Ne(n,e,r,i),dd(n,t,r)}}function I0(e,t,n){var r=xt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ld(e))cd(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Oe(s,o)){var l=t.interleaved;l===null?(i.next=i,jo(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Uc(e,t,i,r),n!==null&&(i=oe(),Ne(n,e,r,i),dd(n,t,r))}}function ld(e){var t=e.alternate;return e===I||t!==null&&t===I}function cd(e,t){Dn=pi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yo(e,n)}}var fi={readContext:ze,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},B0={readContext:ze,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:bl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wr(4194308,4,nd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wr(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=O0.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:wl,useDebugValue:Go,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=wl(!1),t=e[0];return e=N0.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=I,i=De();if(R){if(n===void 0)throw Error(m(407));n=n()}else{if(n=t(),X===null)throw Error(m(349));Rt&30||Xc(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,bl(Qc.bind(null,r,a,e),[e]),r.flags|=2048,ar(9,qc.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=De(),t=X.identifierPrefix;if(R){var n=qe,r=Xe;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=R0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},D0={readContext:ze,useCallback:id,useContext:ze,useEffect:Ho,useImperativeHandle:rd,useInsertionEffect:ed,useLayoutEffect:td,useMemo:ad,useReducer:pa,useRef:Jc,useState:function(){return pa(ir)},useDebugValue:Go,useDeferredValue:function(e){var t=Te();return od(t,$.memoizedState,e)},useTransition:function(){var e=pa(ir)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Yc,useSyncExternalStore:Vc,useId:sd,unstable_isNewReconciler:!1},H0={readContext:ze,useCallback:id,useContext:ze,useEffect:Ho,useImperativeHandle:rd,useInsertionEffect:ed,useLayoutEffect:td,useMemo:ad,useReducer:fa,useRef:Jc,useState:function(){return fa(ir)},useDebugValue:Go,useDeferredValue:function(e){var t=Te();return $===null?t.memoizedState=e:od(t,$.memoizedState,e)},useTransition:function(){var e=fa(ir)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Yc,useSyncExternalStore:Vc,useId:sd,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _i={isMounted:function(e){return(e=e._reactInternals)?Bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=oe(),i=xt(e),a=Qe(r,i);a.payload=t,n!=null&&(a.callback=n),t=mt(e,a,i),t!==null&&(Ne(t,e,i,r),Gr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=oe(),i=xt(e),a=Qe(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=mt(e,a,i),t!==null&&(Ne(t,e,i,r),Gr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),r=xt(e),i=Qe(n,r);i.tag=2,t!=null&&(i.callback=t),t=mt(e,i,r),t!==null&&(Ne(t,e,r,n),Gr(t,e,r))}};function kl(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Kn(n,r)||!Kn(i,a):!0}function ud(e,t,n){var r=!1,i=bt,a=t.contextType;return typeof a=="object"&&a!==null?a=ze(a):(i=pe(t)?jt:re.current,r=t.contextTypes,a=(r=r!=null)?cn(e,i):bt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_i,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Sl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_i.enqueueReplaceState(t,t.state,null)}function qa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ao(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=ze(a):(a=pe(t)?jt:re.current,i.context=cn(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Xa(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_i.enqueueReplaceState(i,i.state,null),di(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=vp(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ga(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var G0=typeof WeakMap=="function"?WeakMap:Map;function pd(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){hi||(hi=!0,oo=r),Qa(e,t)},n}function fd(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Qa(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Qa(e,t),typeof r!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Cl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new G0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=nf.bind(null,e,t,n),t.then(e,e))}function El(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _l(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,mt(n,t,1))),n.lanes|=1),e)}var U0=tt.ReactCurrentOwner,de=!1;function ae(e,t,n,r){t.child=e===null?Gc(t,null,n,r):un(t,e.child,n,r)}function zl(e,t,n,r,i){n=n.render;var a=t.ref;return on(t,i),r=Bo(e,t,n,r,a,i),n=Do(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,et(e,t,i)):(R&&n&&zo(t),t.flags|=1,ae(e,t,r,i),t.child)}function Tl(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Qo(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,gd(e,t,a,r,i)):(e=Xr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Kn,n(o,r)&&e.ref===t.ref)return et(e,t,i)}return t.flags|=1,e=yt(a,r),e.ref=t.ref,e.return=t,t.child=e}function gd(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Kn(a,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,et(e,t,i)}return Ka(e,t,n,r,i)}function hd(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},P(en,me),me|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,P(en,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,P(en,me),me|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,P(en,me),me|=r;return ae(e,t,i,n),t.child}function md(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ka(e,t,n,r,i){var a=pe(n)?jt:re.current;return a=cn(t,a),on(t,i),n=Bo(e,t,n,r,a,i),r=Do(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,et(e,t,i)):(R&&r&&zo(t),t.flags|=1,ae(e,t,n,i),t.child)}function Ml(e,t,n,r,i){if(pe(n)){var a=!0;ai(t)}else a=!1;if(on(t,i),t.stateNode===null)$r(e,t),ud(t,n,r),qa(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=ze(d):(d=pe(n)?jt:re.current,d=cn(t,d));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==d)&&Sl(t,o,r,d),st=!1;var f=t.memoizedState;o.state=f,di(t,r,o,i),l=t.memoizedState,s!==r||f!==l||ue.current||st?(typeof g=="function"&&(Xa(t,n,g,r),l=t.memoizedState),(s=st||kl(t,n,s,r,f,l,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Wc(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Fe(t.type,s),o.props=d,h=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ze(l):(l=pe(n)?jt:re.current,l=cn(t,l));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||f!==l)&&Sl(t,o,r,l),st=!1,f=t.memoizedState,o.state=f,di(t,r,o,i);var y=t.memoizedState;s!==h||f!==y||ue.current||st?(typeof x=="function"&&(Xa(t,n,x,r),y=t.memoizedState),(d=st||kl(t,n,d,r,f,y,l)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Za(e,t,n,r,a,i)}function Za(e,t,n,r,i,a){md(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&gl(t,n,!1),et(e,t,a);r=t.stateNode,U0.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=un(t,e.child,null,a),t.child=un(t,null,s,a)):ae(e,t,s,a),t.memoizedState=r.state,i&&gl(t,n,!0),t.child}function vd(e){var t=e.stateNode;t.pendingContext?fl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fl(e,t.context,!1),Ro(e,t.containerInfo)}function Ll(e,t,n,r,i){return dn(),Mo(i),t.flags|=256,ae(e,t,n,r),t.child}var Ja={dehydrated:null,treeContext:null,retryLane:0};function eo(e){return{baseLanes:e,cachePool:null,transitions:null}}function xd(e,t,n){var r=t.pendingProps,i=O.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),P(O,i&1),e===null)return Ya(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Mi(o,r,0,null),e=Ft(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=eo(n),t.memoizedState=Ja,e):Uo(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return W0(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=yt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=yt(s,a):(a=Ft(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?eo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ja,r}return a=e.child,e=a.sibling,r=yt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Uo(e,t){return t=Mi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Nr(e,t,n,r){return r!==null&&Mo(r),un(t,e.child,null,n),e=Uo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function W0(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=ga(Error(m(422))),Nr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Mi({mode:"visible",children:r.children},i,0,null),a=Ft(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&un(t,e.child,null,o),t.child.memoizedState=eo(o),t.memoizedState=Ja,a);if(!(t.mode&1))return Nr(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(m(419)),r=ga(a,r,void 0),Nr(e,t,o,r)}if(s=(o&e.childLanes)!==0,de||s){if(r=X,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Je(e,i),Ne(r,e,i,-1))}return qo(),r=ga(Error(m(421))),Nr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=rf.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ve=ht(i.nextSibling),xe=t,R=!0,Ae=null,e!==null&&(Se[Ce++]=Xe,Se[Ce++]=qe,Se[Ce++]=At,Xe=e.id,qe=e.overflow,At=t),t=Uo(t,r.children),t.flags|=4096,t)}function Pl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Va(e.return,t,n)}function ha(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function yd(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ae(e,t,r.children,n),r=O.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pl(e,n,t);else if(e.tag===19)Pl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(P(O,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ui(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ha(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ui(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ha(t,!0,n,null,a);break;case"together":ha(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $0(e,t,n){switch(t.tag){case 3:vd(t),dn();break;case 5:$c(t);break;case 1:pe(t.type)&&ai(t);break;case 4:Ro(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;P(li,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(P(O,O.current&1),t.flags|=128,null):n&t.child.childLanes?xd(e,t,n):(P(O,O.current&1),e=et(e,t,n),e!==null?e.sibling:null);P(O,O.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return yd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),P(O,O.current),r)break;return null;case 22:case 23:return t.lanes=0,hd(e,t,n)}return et(e,t,n)}var wd,to,bd,kd;wd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};to=function(){};bd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Lt(Ue.current);var a=null;switch(n){case"input":i=Sa(e,i),r=Sa(e,r),a=[];break;case"select":i=B({},i,{value:void 0}),r=B({},r,{value:void 0}),a=[];break;case"textarea":i=_a(e,i),r=_a(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ri)}Ta(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Wn.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var l=r[d];if(s=i?.[d],r.hasOwnProperty(d)&&l!==s&&(l!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Wn.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&j("scroll",e),a||s===l||(a=[])):(a=a||[]).push(d,l))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};kd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tn(e,t){if(!R)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Y0(e,t,n){var r=t.pendingProps;switch(To(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(t),null;case 1:return pe(t.type)&&ii(),te(t),null;case 3:return r=t.stateNode,pn(),A(ue),A(re),Oo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ar(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(co(Ae),Ae=null))),to(e,t),te(t),null;case 5:No(t);var i=Lt(nr.current);if(n=t.type,e!==null&&t.stateNode!=null)bd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(m(166));return te(t),null}if(e=Lt(Ue.current),Ar(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[He]=t,r[er]=a,e=(t.mode&1)!==0,n){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(i=0;i<An.length;i++)j(An[i],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":Bs(r,a),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},j("invalid",r);break;case"textarea":Hs(r,a),j("invalid",r)}Ta(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&jr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&jr(r.textContent,s,e),i=["children",""+s]):Wn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&j("scroll",r)}switch(n){case"input":br(r),Ds(r,a,!0);break;case"textarea":br(r),Gs(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ri)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ql(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[He]=t,e[er]=r,wd(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ma(n,r),n){case"dialog":j("cancel",e),j("close",e),i=r;break;case"iframe":case"object":case"embed":j("load",e),i=r;break;case"video":case"audio":for(i=0;i<An.length;i++)j(An[i],e);i=r;break;case"source":j("error",e),i=r;break;case"img":case"image":case"link":j("error",e),j("load",e),i=r;break;case"details":j("toggle",e),i=r;break;case"input":Bs(e,r),i=Sa(e,r),j("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=B({},r,{value:void 0}),j("invalid",e);break;case"textarea":Hs(e,r),i=_a(e,r),j("invalid",e);break;default:i=r}Ta(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Jl(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Kl(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$n(e,l):typeof l=="number"&&$n(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Wn.hasOwnProperty(a)?l!=null&&a==="onScroll"&&j("scroll",e):l!=null&&fo(e,a,l,o))}switch(n){case"input":br(e),Ds(e,r,!1);break;case"textarea":br(e),Gs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?tn(e,!!r.multiple,a,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ri)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return te(t),null;case 6:if(e&&t.stateNode!=null)kd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(m(166));if(n=Lt(nr.current),Lt(Ue.current),Ar(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(a=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return te(t),null;case 13:if(A(O),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(R&&ve!==null&&t.mode&1&&!(t.flags&128))Dc(),dn(),t.flags|=98560,a=!1;else if(a=Ar(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(m(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(m(317));a[He]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;te(t),a=!1}else Ae!==null&&(co(Ae),Ae=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||O.current&1?Y===0&&(Y=3):qo())),t.updateQueue!==null&&(t.flags|=4),te(t),null);case 4:return pn(),to(e,t),e===null&&Zn(t.stateNode.containerInfo),te(t),null;case 10:return Fo(t.type._context),te(t),null;case 17:return pe(t.type)&&ii(),te(t),null;case 19:if(A(O),a=t.memoizedState,a===null)return te(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Tn(a,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ui(e),o!==null){for(t.flags|=128,Tn(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return P(O,O.current&1|2),t.child}e=e.sibling}a.tail!==null&&H()>gn&&(t.flags|=128,r=!0,Tn(a,!1),t.lanes=4194304)}else{if(!r)if(e=ui(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!R)return te(t),null}else 2*H()-a.renderingStartTime>gn&&n!==1073741824&&(t.flags|=128,r=!0,Tn(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=H(),t.sibling=null,n=O.current,P(O,r?n&1|2:n&1),t):(te(t),null);case 22:case 23:return Xo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(te(t),t.subtreeFlags&6&&(t.flags|=8192)):te(t),null;case 24:return null;case 25:return null}throw Error(m(156,t.tag))}function V0(e,t){switch(To(t),t.tag){case 1:return pe(t.type)&&ii(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),A(ue),A(re),Oo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return No(t),null;case 13:if(A(O),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(O),null;case 4:return pn(),null;case 10:return Fo(t.type._context),null;case 22:case 23:return Xo(),null;case 24:return null;default:return null}}var Or=!1,ne=!1,X0=typeof WeakSet=="function"?WeakSet:Set,w=null;function Jt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){D(e,t,r)}else n.current=null}function no(e,t,n){try{n()}catch(r){D(e,t,r)}}var Fl=!1;function q0(e,t){if(Ba=ei,e=zc(),_o(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,d=0,g=0,h=e,f=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(s=o+i),h!==a||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(x=h.firstChild)!==null;)f=h,h=x;for(;;){if(h===e)break t;if(f===n&&++d===i&&(s=o),f===a&&++g===r&&(l=o),(x=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=x}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Da={focusedElem:e,selectionRange:n},ei=!1,w=t;w!==null;)if(t=w,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,w=e;else for(;w!==null;){t=w;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,F=y.memoizedState,u=t.stateNode,c=u.getSnapshotBeforeUpdate(t.elementType===t.type?b:Fe(t.type,b),F);u.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(v){D(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,w=e;break}w=t.return}return y=Fl,Fl=!1,y}function Hn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&no(t,n,a)}i=i.next}while(i!==r)}}function zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ro(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sd(e){var t=e.alternate;t!==null&&(e.alternate=null,Sd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[er],delete t[Ua],delete t[P0],delete t[F0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cd(e){return e.tag===5||e.tag===3||e.tag===4}function jl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ri));else if(r!==4&&(e=e.child,e!==null))for(io(e,t,n),e=e.sibling;e!==null;)io(e,t,n),e=e.sibling}function ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ao(e,t,n),e=e.sibling;e!==null;)ao(e,t,n),e=e.sibling}var q=null,je=!1;function at(e,t,n){for(n=n.child;n!==null;)Ed(e,t,n),n=n.sibling}function Ed(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(yi,n)}catch{}switch(n.tag){case 5:ne||Jt(n,t);case 6:var r=q,i=je;q=null,at(e,t,n),q=r,je=i,q!==null&&(je?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(je?(e=q,n=n.stateNode,e.nodeType===8?la(e.parentNode,n):e.nodeType===1&&la(e,n),qn(e)):la(q,n.stateNode));break;case 4:r=q,i=je,q=n.stateNode.containerInfo,je=!0,at(e,t,n),q=r,je=i;break;case 0:case 11:case 14:case 15:if(!ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&no(n,t,o),i=i.next}while(i!==r)}at(e,t,n);break;case 1:if(!ne&&(Jt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){D(n,t,s)}at(e,t,n);break;case 21:at(e,t,n);break;case 22:n.mode&1?(ne=(r=ne)||n.memoizedState!==null,at(e,t,n),ne=r):at(e,t,n);break;default:at(e,t,n)}}function Al(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new X0),t.forEach(function(r){var i=af.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:q=s.stateNode,je=!1;break e;case 3:q=s.stateNode.containerInfo,je=!0;break e;case 4:q=s.stateNode.containerInfo,je=!0;break e}s=s.return}if(q===null)throw Error(m(160));Ed(a,o,i),q=null,je=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){D(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_d(t,e),t=t.sibling}function _d(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Be(e),r&4){try{Hn(3,e,e.return),zi(3,e)}catch(b){D(e,e.return,b)}try{Hn(5,e,e.return)}catch(b){D(e,e.return,b)}}break;case 1:Pe(t,e),Be(e),r&512&&n!==null&&Jt(n,n.return);break;case 5:if(Pe(t,e),Be(e),r&512&&n!==null&&Jt(n,n.return),e.flags&32){var i=e.stateNode;try{$n(i,"")}catch(b){D(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Xl(i,a),Ma(s,o);var d=Ma(s,a);for(o=0;o<l.length;o+=2){var g=l[o],h=l[o+1];g==="style"?Jl(i,h):g==="dangerouslySetInnerHTML"?Kl(i,h):g==="children"?$n(i,h):fo(i,g,h,d)}switch(s){case"input":Ca(i,a);break;case"textarea":ql(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?tn(i,!!a.multiple,x,!1):f!==!!a.multiple&&(a.defaultValue!=null?tn(i,!!a.multiple,a.defaultValue,!0):tn(i,!!a.multiple,a.multiple?[]:"",!1))}i[er]=a}catch(b){D(e,e.return,b)}}break;case 6:if(Pe(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(m(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(b){D(e,e.return,b)}}break;case 3:if(Pe(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(b){D(e,e.return,b)}break;case 4:Pe(t,e),Be(e);break;case 13:Pe(t,e),Be(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Yo=H())),r&4&&Al(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ne=(d=ne)||g,Pe(t,e),ne=d):Pe(t,e),Be(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(w=e,g=e.child;g!==null;){for(h=w=g;w!==null;){switch(f=w,x=f.child,f.tag){case 0:case 11:case 14:case 15:Hn(4,f,f.return);break;case 1:Jt(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){D(r,n,b)}}break;case 5:Jt(f,f.return);break;case 22:if(f.memoizedState!==null){Nl(h);continue}}x!==null?(x.return=f,w=x):Nl(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{i=h.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Zl("display",o))}catch(b){D(e,e.return,b)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(b){D(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pe(t,e),Be(e),r&4&&Al(e);break;case 21:break;default:Pe(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cd(n)){var r=n;break e}n=n.return}throw Error(m(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($n(i,""),r.flags&=-33);var a=jl(e);ao(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=jl(e);io(e,s,o);break;default:throw Error(m(161))}}catch(l){D(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Q0(e,t,n){w=e,zd(e,t,n)}function zd(e,t,n){for(var r=(e.mode&1)!==0;w!==null;){var i=w,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Or;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||ne;s=Or;var d=ne;if(Or=o,(ne=l)&&!d)for(w=i;w!==null;)o=w,l=o.child,o.tag===22&&o.memoizedState!==null?Ol(i):l!==null?(l.return=o,w=l):Ol(i);for(;a!==null;)w=a,zd(a,t,n),a=a.sibling;w=i,Or=s,ne=d}Rl(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,w=a):Rl(e,t,n)}}function Rl(e){for(;w!==null;){var t=w;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ne||zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ne)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&yl(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yl(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&qn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}ne||t.flags&512&&ro(t)}catch(f){D(t,t.return,f)}}if(t===e){w=null;break}if(n=t.sibling,n!==null){n.return=t.return,w=n;break}w=t.return}}function Nl(e){for(;w!==null;){var t=w;if(t===e){w=null;break}var n=t.sibling;if(n!==null){n.return=t.return,w=n;break}w=t.return}}function Ol(e){for(;w!==null;){var t=w;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zi(4,t)}catch(l){D(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){D(t,i,l)}}var a=t.return;try{ro(t)}catch(l){D(t,a,l)}break;case 5:var o=t.return;try{ro(t)}catch(l){D(t,o,l)}}}catch(l){D(t,t.return,l)}if(t===e){w=null;break}var s=t.sibling;if(s!==null){s.return=t.return,w=s;break}w=t.return}}var K0=Math.ceil,gi=tt.ReactCurrentDispatcher,Wo=tt.ReactCurrentOwner,_e=tt.ReactCurrentBatchConfig,T=0,X=null,G=null,Q=0,me=0,en=St(0),Y=0,or=null,Nt=0,Ti=0,$o=0,Gn=null,ce=null,Yo=0,gn=1/0,Ye=null,hi=!1,oo=null,vt=null,Ir=!1,ut=null,mi=0,Un=0,so=null,Yr=-1,Vr=0;function oe(){return T&6?H():Yr!==-1?Yr:Yr=H()}function xt(e){return e.mode&1?T&2&&Q!==0?Q&-Q:A0.transition!==null?(Vr===0&&(Vr=uc()),Vr):(e=M,e!==0||(e=window.event,e=e===void 0?16:xc(e.type)),e):1}function Ne(e,t,n,r){if(50<Un)throw Un=0,so=null,Error(m(185));sr(e,n,r),(!(T&2)||e!==X)&&(e===X&&(!(T&2)&&(Ti|=n),Y===4&&ct(e,Q)),fe(e,r),n===1&&T===0&&!(t.mode&1)&&(gn=H()+500,Ci&&Ct()))}function fe(e,t){var n=e.callbackNode;Np(e,t);var r=Jr(e,e===X?Q:0);if(r===0)n!==null&&$s(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$s(n),t===1)e.tag===0?j0(Il.bind(null,e)):Oc(Il.bind(null,e)),M0(function(){!(T&6)&&Ct()}),n=null;else{switch(pc(r)){case 1:n=xo;break;case 4:n=cc;break;case 16:n=Zr;break;case 536870912:n=dc;break;default:n=Zr}n=Rd(n,Td.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Td(e,t){if(Yr=-1,Vr=0,T&6)throw Error(m(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Jr(e,e===X?Q:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vi(e,r);else{t=r;var i=T;T|=2;var a=Ld();(X!==e||Q!==t)&&(Ye=null,gn=H()+500,Pt(e,t));do try{ef();break}catch(s){Md(e,s)}while(!0);Po(),gi.current=a,T=i,G!==null?t=0:(X=null,Q=0,t=Y)}if(t!==0){if(t===2&&(i=Aa(e),i!==0&&(r=i,t=lo(e,i))),t===1)throw n=or,Pt(e,0),ct(e,r),fe(e,H()),n;if(t===6)ct(e,r);else{if(i=e.current.alternate,!(r&30)&&!Z0(i)&&(t=vi(e,r),t===2&&(a=Aa(e),a!==0&&(r=a,t=lo(e,a))),t===1))throw n=or,Pt(e,0),ct(e,r),fe(e,H()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(m(345));case 2:zt(e,ce,Ye);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=Yo+500-H(),10<t)){if(Jr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ga(zt.bind(null,e,ce,Ye),t);break}zt(e,ce,Ye);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Re(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=H()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*K0(r/1960))-r,10<r){e.timeoutHandle=Ga(zt.bind(null,e,ce,Ye),r);break}zt(e,ce,Ye);break;case 5:zt(e,ce,Ye);break;default:throw Error(m(329))}}}return fe(e,H()),e.callbackNode===n?Td.bind(null,e):null}function lo(e,t){var n=Gn;return e.current.memoizedState.isDehydrated&&(Pt(e,t).flags|=256),e=vi(e,t),e!==2&&(t=ce,ce=n,t!==null&&co(t)),e}function co(e){ce===null?ce=e:ce.push.apply(ce,e)}function Z0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Oe(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~$o,t&=~Ti,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Re(t),r=1<<n;e[n]=-1,t&=~r}}function Il(e){if(T&6)throw Error(m(327));sn();var t=Jr(e,0);if(!(t&1))return fe(e,H()),null;var n=vi(e,t);if(e.tag!==0&&n===2){var r=Aa(e);r!==0&&(t=r,n=lo(e,r))}if(n===1)throw n=or,Pt(e,0),ct(e,t),fe(e,H()),n;if(n===6)throw Error(m(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zt(e,ce,Ye),fe(e,H()),null}function Vo(e,t){var n=T;T|=1;try{return e(t)}finally{T=n,T===0&&(gn=H()+500,Ci&&Ct())}}function Ot(e){ut!==null&&ut.tag===0&&!(T&6)&&sn();var t=T;T|=1;var n=_e.transition,r=M;try{if(_e.transition=null,M=1,e)return e()}finally{M=r,_e.transition=n,T=t,!(T&6)&&Ct()}}function Xo(){me=en.current,A(en)}function Pt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,T0(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(To(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ii();break;case 3:pn(),A(ue),A(re),Oo();break;case 5:No(r);break;case 4:pn();break;case 13:A(O);break;case 19:A(O);break;case 10:Fo(r.type._context);break;case 22:case 23:Xo()}n=n.return}if(X=e,G=e=yt(e.current,null),Q=me=t,Y=0,or=null,$o=Ti=Nt=0,ce=Gn=null,Mt!==null){for(t=0;t<Mt.length;t++)if(n=Mt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Mt=null}return e}function Md(e,t){do{var n=G;try{if(Po(),Ur.current=fi,pi){for(var r=I.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pi=!1}if(Rt=0,V=$=I=null,Dn=!1,rr=0,Wo.current=null,n===null||n.return===null){Y=1,or=t,G=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=Q,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,g=s,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var f=g.alternate;f?(g.updateQueue=f.updateQueue,g.memoizedState=f.memoizedState,g.lanes=f.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=El(o);if(x!==null){x.flags&=-257,_l(x,o,s,a,t),x.mode&1&&Cl(a,d,t),t=x,l=d;var y=t.updateQueue;if(y===null){var b=new Set;b.add(l),t.updateQueue=b}else y.add(l);break e}else{if(!(t&1)){Cl(a,d,t),qo();break e}l=Error(m(426))}}else if(R&&s.mode&1){var F=El(o);if(F!==null){!(F.flags&65536)&&(F.flags|=256),_l(F,o,s,a,t),Mo(fn(l,s));break e}}a=l=fn(l,s),Y!==4&&(Y=2),Gn===null?Gn=[a]:Gn.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var u=pd(a,l,t);xl(a,u);break e;case 1:s=l;var c=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(vt===null||!vt.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var v=fd(a,s,t);xl(a,v);break e}}a=a.return}while(a!==null)}Fd(n)}catch(k){t=k,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function Ld(){var e=gi.current;return gi.current=fi,e===null?fi:e}function qo(){(Y===0||Y===3||Y===2)&&(Y=4),X===null||!(Nt&268435455)&&!(Ti&268435455)||ct(X,Q)}function vi(e,t){var n=T;T|=2;var r=Ld();(X!==e||Q!==t)&&(Ye=null,Pt(e,t));do try{J0();break}catch(i){Md(e,i)}while(!0);if(Po(),T=n,gi.current=r,G!==null)throw Error(m(261));return X=null,Q=0,Y}function J0(){for(;G!==null;)Pd(G)}function ef(){for(;G!==null&&!zp();)Pd(G)}function Pd(e){var t=Ad(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?Fd(e):G=t,Wo.current=null}function Fd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=V0(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,G=null;return}}else if(n=Y0(n,t,me),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);Y===0&&(Y=5)}function zt(e,t,n){var r=M,i=_e.transition;try{_e.transition=null,M=1,tf(e,t,n,r)}finally{_e.transition=i,M=r}return null}function tf(e,t,n,r){do sn();while(ut!==null);if(T&6)throw Error(m(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(m(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Op(e,a),e===X&&(G=X=null,Q=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ir||(Ir=!0,Rd(Zr,function(){return sn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=_e.transition,_e.transition=null;var o=M;M=1;var s=T;T|=4,Wo.current=null,q0(e,n),_d(n,e),S0(Da),ei=!!Ba,Da=Ba=null,e.current=n,Q0(n,e,i),Tp(),T=s,M=o,_e.transition=a}else e.current=n;if(Ir&&(Ir=!1,ut=e,mi=i),a=e.pendingLanes,a===0&&(vt=null),Pp(n.stateNode,r),fe(e,H()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hi)throw hi=!1,e=oo,oo=null,e;return mi&1&&e.tag!==0&&sn(),a=e.pendingLanes,a&1?e===so?Un++:(Un=0,so=e):Un=0,Ct(),null}function sn(){if(ut!==null){var e=pc(mi),t=_e.transition,n=M;try{if(_e.transition=null,M=16>e?16:e,ut===null)var r=!1;else{if(e=ut,ut=null,mi=0,T&6)throw Error(m(331));var i=T;for(T|=4,w=e.current;w!==null;){var a=w,o=a.child;if(w.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var d=s[l];for(w=d;w!==null;){var g=w;switch(g.tag){case 0:case 11:case 15:Hn(8,g,a)}var h=g.child;if(h!==null)h.return=g,w=h;else for(;w!==null;){g=w;var f=g.sibling,x=g.return;if(Sd(g),g===d){w=null;break}if(f!==null){f.return=x,w=f;break}w=x}}}var y=a.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var F=b.sibling;b.sibling=null,b=F}while(b!==null)}}w=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,w=o;else e:for(;w!==null;){if(a=w,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Hn(9,a,a.return)}var u=a.sibling;if(u!==null){u.return=a.return,w=u;break e}w=a.return}}var c=e.current;for(w=c;w!==null;){o=w;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,w=p;else e:for(o=c;w!==null;){if(s=w,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:zi(9,s)}}catch(k){D(s,s.return,k)}if(s===o){w=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,w=v;break e}w=s.return}}if(T=i,Ct(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(yi,e)}catch{}r=!0}return r}finally{M=n,_e.transition=t}}return!1}function Bl(e,t,n){t=fn(n,t),t=pd(e,t,1),e=mt(e,t,1),t=oe(),e!==null&&(sr(e,1,t),fe(e,t))}function D(e,t,n){if(e.tag===3)Bl(e,e,n);else for(;t!==null;){if(t.tag===3){Bl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vt===null||!vt.has(r))){e=fn(n,e),e=fd(t,e,1),t=mt(t,e,1),e=oe(),t!==null&&(sr(t,1,e),fe(t,e));break}}t=t.return}}function nf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,X===e&&(Q&n)===n&&(Y===4||Y===3&&(Q&130023424)===Q&&500>H()-Yo?Pt(e,0):$o|=n),fe(e,t)}function jd(e,t){t===0&&(e.mode&1?(t=Cr,Cr<<=1,!(Cr&130023424)&&(Cr=4194304)):t=1);var n=oe();e=Je(e,t),e!==null&&(sr(e,t,n),fe(e,n))}function rf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jd(e,n)}function af(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(m(314))}r!==null&&r.delete(t),jd(e,n)}var Ad;Ad=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ue.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,$0(e,t,n);de=!!(e.flags&131072)}else de=!1,R&&t.flags&1048576&&Ic(t,si,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$r(e,t),e=t.pendingProps;var i=cn(t,re.current);on(t,n),i=Bo(null,t,r,e,i,n);var a=Do();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(a=!0,ai(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ao(t),i.updater=_i,t.stateNode=i,i._reactInternals=t,qa(t,r,e,n),t=Za(null,t,r,!0,a,n)):(t.tag=0,R&&a&&zo(t),ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($r(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=sf(r),e=Fe(r,e),i){case 0:t=Ka(null,t,r,e,n);break e;case 1:t=Ml(null,t,r,e,n);break e;case 11:t=zl(null,t,r,e,n);break e;case 14:t=Tl(null,t,r,Fe(r.type,e),n);break e}throw Error(m(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),Ka(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),Ml(e,t,r,i,n);case 3:e:{if(vd(t),e===null)throw Error(m(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Wc(e,t),di(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=fn(Error(m(423)),t),t=Ll(e,t,r,n,i);break e}else if(r!==i){i=fn(Error(m(424)),t),t=Ll(e,t,r,n,i);break e}else for(ve=ht(t.stateNode.containerInfo.firstChild),xe=t,R=!0,Ae=null,n=Gc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===i){t=et(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return $c(t),e===null&&Ya(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Ha(r,i)?o=null:a!==null&&Ha(r,a)&&(t.flags|=32),md(e,t),ae(e,t,o,n),t.child;case 6:return e===null&&Ya(t),null;case 13:return xd(e,t,n);case 4:return Ro(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=un(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),zl(e,t,r,i,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,P(li,r._currentValue),r._currentValue=o,a!==null)if(Oe(a.value,o)){if(a.children===i.children&&!ue.current){t=et(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Qe(-1,n&-n),l.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?l.next=l:(l.next=g.next,g.next=l),d.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Va(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(m(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Va(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,on(t,n),i=ze(i),r=r(i),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,i=Fe(r,t.pendingProps),i=Fe(r.type,i),Tl(e,t,r,i,n);case 15:return gd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),$r(e,t),t.tag=1,pe(r)?(e=!0,ai(t)):e=!1,on(t,n),ud(t,r,i),qa(t,r,i,n),Za(null,t,r,!0,e,n);case 19:return yd(e,t,n);case 22:return hd(e,t,n)}throw Error(m(156,t.tag))};function Rd(e,t){return lc(e,t)}function of(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new of(e,t,n,r)}function Qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sf(e){if(typeof e=="function")return Qo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ho)return 11;if(e===mo)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xr(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Qo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wt:return Ft(n.children,i,a,t);case go:o=8,i|=8;break;case ya:return e=Ee(12,n,t,i|2),e.elementType=ya,e.lanes=a,e;case wa:return e=Ee(13,n,t,i),e.elementType=wa,e.lanes=a,e;case ba:return e=Ee(19,n,t,i),e.elementType=ba,e.lanes=a,e;case $l:return Mi(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ul:o=10;break e;case Wl:o=9;break e;case ho:o=11;break e;case mo:o=14;break e;case ot:o=16,r=null;break e}throw Error(m(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Ft(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function Mi(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=$l,e.lanes=n,e.stateNode={isHidden:!1},e}function ma(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function va(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ea(0),this.expirationTimes=ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ea(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ko(e,t,n,r,i,a,o,s,l){return e=new lf(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ee(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ao(a),e}function cf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ut,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nd(e){if(!e)return bt;e=e._reactInternals;e:{if(Bt(e)!==e||e.tag!==1)throw Error(m(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(m(171))}if(e.tag===1){var n=e.type;if(pe(n))return Nc(e,n,t)}return t}function Od(e,t,n,r,i,a,o,s,l){return e=Ko(n,r,!0,e,i,a,o,s,l),e.context=Nd(null),n=e.current,r=oe(),i=xt(n),a=Qe(r,i),a.callback=t??null,mt(n,a,i),e.current.lanes=i,sr(e,i,r),fe(e,r),e}function Li(e,t,n,r){var i=t.current,a=oe(),o=xt(i);return n=Nd(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mt(i,t,o),e!==null&&(Ne(e,i,o,a),Gr(e,i,o)),o}function xi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zo(e,t){Dl(e,t),(e=e.alternate)&&Dl(e,t)}function df(){return null}var Id=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jo(e){this._internalRoot=e}Pi.prototype.render=Jo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));Li(e,t,null,null)};Pi.prototype.unmount=Jo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ot(function(){Li(null,e,null,null)}),t[Ze]=null}};function Pi(e){this._internalRoot=e}Pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<lt.length&&t!==0&&t<lt[n].priority;n++);lt.splice(n,0,e),n===0&&vc(e)}};function es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hl(){}function uf(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var d=xi(o);a.call(d)}}var o=Od(t,r,e,0,null,!1,!1,"",Hl);return e._reactRootContainer=o,e[Ze]=o.current,Zn(e.nodeType===8?e.parentNode:e),Ot(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=xi(l);s.call(d)}}var l=Ko(e,0,!1,null,null,!1,!1,"",Hl);return e._reactRootContainer=l,e[Ze]=l.current,Zn(e.nodeType===8?e.parentNode:e),Ot(function(){Li(t,l,n,r)}),l}function ji(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=xi(o);s.call(l)}}Li(t,o,e,i)}else o=uf(n,t,e,i,r);return xi(o)}fc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(yo(t,n|1),fe(t,H()),!(T&6)&&(gn=H()+500,Ct()))}break;case 13:Ot(function(){var r=Je(e,1);if(r!==null){var i=oe();Ne(r,e,1,i)}}),Zo(e,1)}};wo=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=oe();Ne(t,e,134217728,n)}Zo(e,134217728)}};gc=function(e){if(e.tag===13){var t=xt(e),n=Je(e,t);if(n!==null){var r=oe();Ne(n,e,t,r)}Zo(e,t)}};hc=function(){return M};mc=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Pa=function(e,t,n){switch(t){case"input":if(Ca(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Si(r);if(!i)throw Error(m(90));Vl(r),Ca(r,i)}}}break;case"textarea":ql(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};nc=Vo;rc=Ot;var pf={usingClientEntryPoint:!1,Events:[cr,Xt,Si,ec,tc,Vo]},Mn={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ff={bundleType:Mn.bundleType,version:Mn.version,rendererPackageName:Mn.rendererPackageName,rendererConfig:Mn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=oc(e),e===null?null:e.stateNode},findFiberByHostInstance:Mn.findFiberByHostInstance||df,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ln=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ln.isDisabled&&Ln.supportsFiber))try{yi=Ln.inject(ff),Ge=Ln}catch{}var Ln;be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pf;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!es(t))throw Error(m(200));return cf(e,t,null,n)};be.createRoot=function(e,t){if(!es(e))throw Error(m(299));var n=!1,r="",i=Id;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ko(e,1,!1,null,null,n,!1,r,i),e[Ze]=t.current,Zn(e.nodeType===8?e.parentNode:e),new Jo(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=oc(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Ot(e)};be.hydrate=function(e,t,n){if(!Fi(t))throw Error(m(200));return ji(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!es(e))throw Error(m(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Id;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Od(t,null,e,1,n??null,i,!1,a,o),e[Ze]=t.current,Zn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Pi(t)};be.render=function(e,t,n){if(!Fi(t))throw Error(m(200));return ji(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!Fi(e))throw Error(m(40));return e._reactRootContainer?(Ot(function(){ji(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};be.unstable_batchedUpdates=Vo;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fi(n))throw Error(m(200));if(e==null||e._reactInternals===void 0)throw Error(m(38));return ji(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426"});var Gd=$e((Ff,Hd)=>{"use strict";function Dd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dd)}catch(e){console.error(e)}}Dd(),Hd.exports=Bd()});var Wd=$e(ts=>{"use strict";var Ud=Gd();ts.createRoot=Ud.createRoot,ts.hydrateRoot=Ud.hydrateRoot;var jf});var Yd=$e(Ai=>{"use strict";var gf=yn(),hf=Symbol.for("react.element"),mf=Symbol.for("react.fragment"),vf=Object.prototype.hasOwnProperty,xf=gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yf={key:!0,ref:!0,__self:!0,__source:!0};function $d(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)vf.call(t,r)&&!yf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:hf,type:e,key:a,ref:o,props:i,_owner:xf.current}}Ai.Fragment=mf;Ai.jsx=$d;Ai.jsxs=$d});var ns=$e((Nf,Vd)=>{"use strict";Vd.exports=Yd()});var Xd,qd=W(()=>{Xd=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lumira - Advanced Analytics</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>

<body class="relative min-h-screen overflow-x-hidden flex flex-col font-sans text-[#F2F4FB] bg-[#070914] selection:bg-[#7FC4FF]/30 selection:text-[#7FC4FF]">

    <!-- WebGL Constellation Canvas Shell & Depth Overlay -->
    <div class="fixed inset-0 -z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_#0E1222_0%,_#070914_100%)]"></div>
    <div class="fixed inset-0 -z-10 pointer-events-none">
        <canvas id="constellationCanvas" class="w-full h-full"></canvas>
    </div>
    <div class="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-transparent via-[#0E1222]/40 to-[#070914] opacity-80"></div>

    <!-- Header (Elevated Glassy UI) -->
    <nav class="w-full relative z-20 bg-[#0E1222]/40 backdrop-blur-md border-b border-[#1C2236] shadow-[0_2px_8px_rgba(0,0,0,0.30)]">
        <div class="flex justify-between items-center py-5 px-6 md:px-12 max-w-[90rem] mx-auto">
            
            <!-- Brand -->
            <div class="flex items-center gap-2 text-[#F2F4FB]">
                <div class="relative h-8 w-8 bg-transparent border border-[#1C2236] flex items-center justify-center rounded-md" style="box-shadow: 0 2px 8px rgba(0,0,0,0.30);">
                    <span class="h-2 w-2 rounded-full bg-[#E6C879]" style="box-shadow: 0 0 12px rgba(230,200,121,0.6);"></span>
                </div>
                <span class="text-xl font-thin tracking-tight uppercase ml-1">Lumira</span>
            </div>

            <div class="hidden md:flex items-center gap-10 text-xs font-normal uppercase text-[#9AA3BC] tracking-widest">
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Features</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Use Cases</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Developers</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Pricing</a>
            </div>

            <!-- Gradient Border Shell CTA -->
            <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/30 to-transparent">
                <a href="#" class="block bg-[#0E1222]/80 backdrop-blur-sm text-[#E6C879] px-6 py-2.5 rounded-full text-xs font-normal uppercase tracking-widest hover:bg-[#E6C879] hover:text-[#0E1222] transition-colors">
                    Get Access
                </a>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center relative z-10 px-6 pt-24 pb-28 md:pt-32 lg:pt-40">

        <div class="max-w-5xl mx-auto w-full flex flex-col items-center text-center">

            <!-- Trust Indicators -->
            <div class="flex items-center gap-4 mb-12 fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);">
                <div class="flex -space-x-3">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg" alt="User 1" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-30 opacity-80 mix-blend-luminosity">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" alt="User 2" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-20 opacity-80 mix-blend-luminosity">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg" alt="User 3" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-10 opacity-80 mix-blend-luminosity">
                </div>

                <div class="flex flex-col items-start gap-1">
                    <div class="flex items-center text-[#E6C879] text-lg">
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                    </div>
                    <span class="text-xs font-normal uppercase text-[#9AA3BC] tracking-widest">Trusted by 10,000+ data teams</span>
                </div>
            </div>

            <!-- Headline (Ultralight System Display - GSAP Masked Reveal) -->
            <h1 class="masked-reveal text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight text-[#F2F4FB] text-center leading-tight max-w-5xl cursor-default">
                Uncover hidden patterns<br />with intelligent analytics
            </h1>

            <!-- Subheadline (GSAP Masked Reveal) -->
            <p class="masked-reveal mt-8 text-lg md:text-xl text-[#9AA3BC] max-w-2xl font-normal leading-relaxed">
                Lumira synthesizes complex datasets, disparate sources, and endless metrics into actionable, automated insights that guide your decisions.
            </p>

            <!-- Chunky CTAs to Refined Border Shells -->
            <div class="flex flex-col sm:flex-row items-center gap-6 mt-14 w-full justify-center fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;">
                
                <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/40 to-transparent w-full sm:w-auto" style="box-shadow: 0 16px 40px rgba(0,0,0,0.36);">
                    <a href="#" class="w-full sm:w-auto bg-[#E6C879] text-[#0E1222] px-12 py-4 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-[#E6C879]/90 transition-colors flex items-center justify-center">
                        Get Access
                    </a>
                </div>

                <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/16 to-transparent w-full sm:w-auto" style="box-shadow: 0 2px 8px rgba(0,0,0,0.30);">
                    <a href="#" class="w-full sm:w-auto bg-[#0E1222]/60 backdrop-blur-md text-[#F2F4FB] px-10 py-4 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-[#1C2236]/80 transition-colors flex items-center justify-center gap-2 group">
                        Explore Demo
                        <iconify-icon icon="solar:arrow-right-linear" class="text-xl text-[#7FC4FF] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" stroke-width="1.5"></iconify-icon>
                    </a>
                </div>

            </div>
        </div>

        <!-- Logos Section -->
        <div class="w-full mt-28 md:mt-32 max-w-6xl mx-auto flex flex-col items-center fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;">
            <p class="text-xs font-normal text-[#5C668A] mb-12 tracking-widest uppercase">Powering data-driven enterprises</p>

            <div class="flex flex-wrap justify-center items-center gap-10 md:gap-16">

                <div class="flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:box-linear" stroke-width="1.5"></iconify-icon>
                    Quantus
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:globus-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    NexusData
                </div>

                <div class="flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    OmniStream
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:routing-2-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    Veridian
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:letter-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    ApexMetrics
                </div>

                <div class="hidden lg:flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    Zenith
                </div>

            </div>
        </div>

    </main>

    <script>
        // WebGL Drifting Nodes & Network Logic
        const canvas = document.getElementById('constellationCanvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let nodes = [];
        const LINK = 160; 
        const MAX_NODES = window.innerWidth < 768 ? 40 : 85;
        let pointer = { x: -1000, y: -1000 };

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
        }
        
        window.addEventListener('resize', () => {
            resize();
            initNodes();
        });
        resize();

        function initNodes() {
            nodes = [];
            for(let i=0; i<MAX_NODES; i++) {
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: Math.random() * 2.4 + 1.8
                });
            }
        }
        initNodes();

        // Pointer gravity tracker
        document.addEventListener('mousemove', e => {
            pointer.x = e.clientX;
            pointer.y = e.clientY;
        });

        // Clear pointer on leave
        document.addEventListener('mouseleave', () => {
            pointer.x = -1000;
            pointer.y = -1000;
        });

        function dist(a, b) {
            return Math.hypot(a.x - b.x, a.y - b.y);
        }

        // Render Loop
        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            // Draw Links first so nodes sit crisp on top
            ctx.strokeStyle = '#E6C879';
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const d = dist(nodes[i], nodes[j]);
                    if (d < LINK) {
                        ctx.globalAlpha = 0.22 + (1 - d/LINK) * 0.55;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;
                
                // Bounce off edges
                if(node.x < 0 || node.x > width) node.vx *= -1;
                if(node.y < 0 || node.y > height) node.vy *= -1;

                // Gentle Pointer gravity
                const pd = dist(node, pointer);
                if(pd < 220) {
                    node.x -= (node.x - pointer.x) * 0.005;
                    node.y -= (node.y - pointer.y) * 0.005;
                }
                
                // Draw Node (Pale Gold) \u2014 core + soft halo so particles read at retina scale
                const pulse = 0.78 + Math.sin(Date.now() * 0.001 + node.x) * 0.22;
                ctx.fillStyle = '#E6C879';
                ctx.globalAlpha = pulse * 0.28;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * 2.4, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = pulse;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            requestAnimationFrame(animateCanvas);
        }
        
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            animateCanvas();
        }

        // --- Intersection Observer for structural fade-ins ---
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
        });

        // --- GSAP Masked Staggered Word Reveal ---
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
                gsap.registerPlugin(ScrollTrigger);
                
                const revealElements = document.querySelectorAll('.masked-reveal');
                
                revealElements.forEach(el => {
                    // Non-destructive split that respects <br> tags
                    const html = el.innerHTML;
                    const fragments = html.split(/(<br\\s*\\/?>|\\s+)/);
                    el.innerHTML = '';
                    
                    fragments.forEach(frag => {
                        if (/<br/i.test(frag)) {
                            el.appendChild(document.createElement('br'));
                        } else if (frag.trim() !== '') {
                            const wrapper = document.createElement('span');
                            wrapper.style.cssText = 'overflow: hidden; display: inline-block; vertical-align: bottom; padding-top: 0.1em; margin-top: -0.1em;';
                            
                            const inner = document.createElement('span');
                            inner.className = 'reveal-word';
                            inner.style.cssText = 'display: inline-block; transform: translateY(110%); will-change: transform;';
                            inner.innerHTML = frag;
                            
                            wrapper.appendChild(inner);
                            el.appendChild(wrapper);
                        } else {
                            // Preserve spaces
                            el.appendChild(document.createTextNode(frag));
                        }
                    });

                    // Trigger the animation
                    gsap.to(el.querySelectorAll('.reveal-word'), {
                        y: '0%',
                        duration: 1.2,
                        ease: 'power4.out',
                        stagger: 0.04,
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                        }
                    });
                });
            }
        });
    <\/script>
</body>
</html>`});var Qd,Kd=W(()=>{Qd=`<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zenith Compute Network</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:wght@400&display=swap" rel="stylesheet">
</head>
<body class="bg-[#030509] min-h-screen flex items-center justify-center p-4 md:p-12 font-sans antialiased text-[#FFFFFF] overflow-x-hidden selection:bg-[#60A5FA] selection:text-[#030509]">

    <!-- Gradient Border Shell Technique -->
    <div class="w-full max-w-[1440px] shadow-[0px_100px_80px_rgba(0,0,0,0.12),_0px_41.8px_33.4px_rgba(0,0,0,0.086),_0px_22.3px_17.9px_rgba(0,0,0,0.07)]" style="display:inline-block; padding:1px; border-radius:24px; background:linear-gradient(to right bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0));">
        
        <!-- Main Inner Surface -->
        <div class="relative w-full flex flex-col md:flex-row overflow-hidden min-h-[600px] md:min-h-[650px]" style="background:#030509; border-radius:23px; box-shadow:rgba(255, 255, 255, 0.02) 0px 0px 40px 0px inset;">
            
            <!-- Canvas Particle System Background Field -->
            <canvas id="particle-canvas" class="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-100"></canvas>

            <!-- Matte Noise Texture Overlay -->
            <div class="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-10" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>

            <!-- Left Column: Copy & Controls -->
            <div class="w-full md:w-[38%] px-8 lg:px-16 py-10 md:py-14 flex flex-col justify-between relative z-20 shrink-0 border-r border-white/5">
                
                <!-- Lineart Detail: Corner Brackets -->
                <div class="absolute top-6 left-6 w-3 h-3 border-t border-l border-white/20"></div>
                <div class="absolute top-6 right-6 w-3 h-3 border-t border-r border-white/20"></div>
                <div class="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-white/20"></div>
                <div class="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-white/20"></div>

                <!-- Top Badge -->
                <div class="fade-in-el opacity-0 inline-flex items-center gap-2 px-3 py-1 text-xs font-light tracking-widest uppercase mb-16 border border-white/10 text-[#60A5FA] rounded-full w-max bg-white/5 backdrop-blur-sm">
                    <iconify-icon icon="solar:server-square-linear" stroke-width="1.5" class="text-sm"></iconify-icon>
                    ZENITH COMPUTE
                </div>

                <!-- Heading (Playfair Display) -->
                <div>
                    <h1 id="hero-heading" class="text-5xl md:text-7xl tracking-tight text-[#FFFFFF] mb-6 leading-none opacity-0 font-light" style="font-family: 'Playfair Display', serif;">
                        Infinite execution threads.<br>The cognitive backbone.
                    </h1>

                    <!-- Body Text -->
                    <p class="fade-in-el opacity-0 text-[#9CA3AF] text-lg leading-relaxed max-w-[320px] font-light mb-8" style="font-family: 'Inter', sans-serif;">
                        An autonomous state-management protocol synchronizing distributed workloads across edge micro-clusters and centralized servers. Adjust the target environment to refine processing speed.
                    </p>
                    
                    <!-- Primary Action Button -->
                    <button class="fade-in-el opacity-0 bg-[#60A5FA] text-[#030509] px-8 py-3.5 rounded-full text-sm font-light w-max hover:bg-blue-300 transition-colors flex items-center gap-2" style="font-family: 'Inter', sans-serif;">
                        Provision Network
                        <iconify-icon icon="solar:cpu-linear" stroke-width="1.5" class="text-lg"></iconify-icon>
                    </button>
                </div>

                <!-- Custom Slider Control -->
                <div class="fade-in-el opacity-0 mt-16 pt-8 w-full relative">
                    <!-- Track Line -->
                    <div class="w-full h-[1px] bg-white/10 relative">
                        <!-- Thumb / Active Indicator -->
                        <div class="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#60A5FA] rounded-full shadow-[0_0_12px_rgba(96,165,250,0.6)]"></div>
                    </div>
                    
                    <!-- Labels -->
                    <div class="flex justify-between mt-4 w-full" style="font-family: 'Inter', sans-serif;">
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Local</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Edge</span>
                        <span class="text-xs font-light tracking-widest uppercase text-[#60A5FA] cursor-default">Ring</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Core</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Cloud</span>
                    </div>
                </div>

            </div>

            <!-- Right Column: Media Frame -->
            <div class="w-full md:w-[62%] relative bg-transparent overflow-hidden min-h-[400px] md:min-h-0 border-t md:border-t-0 border-white/5 pointer-events-none" style="transform-style: preserve-3d;">
                
                <!-- Deep Integration Gradients -->
                <div class="absolute inset-0 z-30 pointer-events-none bg-gradient-to-r from-[#030509] via-transparent to-transparent opacity-90"></div>
                <div class="absolute inset-0 z-30 pointer-events-none bg-gradient-to-t from-[#030509] via-[#030509]/30 to-transparent opacity-80"></div>
                
                <!-- Glassmorphism Floating Logic Card -->
                <div id="floating-card" class="absolute top-[25%] right-[12%] z-40 bg-white/[0.03] backdrop-blur-xl border border-[#60A5FA]/20 p-5 rounded-2xl shadow-[0_22px_40px_rgba(0,0,0,0.4)] w-[220px] text-[#60A5FA] pointer-events-auto">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-8 h-8 rounded-full bg-[#60A5FA]/10 border border-[#60A5FA]/20 text-[#60A5FA] flex items-center justify-center">
                            <iconify-icon icon="solar:transfer-horizontal-linear" stroke-width="1.5"></iconify-icon>
                        </div>
                        <span class="text-xs uppercase tracking-widest font-light" style="font-family: 'Inter', sans-serif;">Throughput</span>
                    </div>
                    <div class="text-3xl leading-9 tracking-tighter mb-1" style="font-family: 'Inter', sans-serif;">128.6 PB/s</div>
                    <div class="text-xs uppercase tracking-widest text-[#60A5FA]/60" style="font-family: 'Inter', sans-serif;">Sync Efficiency</div>
                </div>

            </div>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // --- ASCII Particle System Implementation ---
            const canvas = document.getElementById('particle-canvas');
            const ctx = canvas.getContext('2d');

            let width, height;
            let nodes = [];
            let beams = [];
            const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*()'.split('');
            let mouse = { x: -1000, y: -1000 };

            function resize() {
                width = canvas.clientWidth;
                height = canvas.clientHeight;
                const dpr = window.devicePixelRatio || 1;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
            }

            window.addEventListener('resize', () => {
                resize();
                initParticles();
            });

            window.addEventListener('mousemove', e => {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });

            function initParticles() {
                nodes = Array.from({ length: 90 }).map(() => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vy: (Math.random() * 0.4) + 0.1,
                    char: chars[Math.floor(Math.random() * chars.length)]
                }));

                beams = Array.from({ length: 25 }).map(() => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    length: Math.random() * 100 + 50,
                    speed: (Math.random() * 6) + 3,
                    opacity: Math.random() * 0.5 + 0.3
                }));
            }

            resize();
            initParticles();

            function draw() {
                ctx.clearRect(0, 0, width, height);

                // 1. Upward Beams (Fast)
                beams.forEach(b => {
                    b.y -= b.speed;
                    if (b.y + b.length < 0) {
                        b.y = height + 100;
                        b.x = Math.random() * width;
                    }
                    let g = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.length);
                    g.addColorStop(0, \`rgba(96, 165, 250, \${b.opacity})\`);
                    g.addColorStop(1, 'transparent');
                    ctx.strokeStyle = g;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(b.x, b.y);
                    ctx.lineTo(b.x, b.y + b.length);
                    ctx.stroke();
                });

                // 2. Interactive Nodes (ASCII)
                ctx.font = '12px monospace';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // Proximity Lines
                ctx.lineWidth = 0.5;
                for(let i = 0; i < nodes.length; i++) {
                    let n1 = nodes[i];
                    for(let j = i + 1; j < nodes.length; j++) {
                        let n2 = nodes[j];
                        let d = Math.hypot(n1.x - n2.x, n1.y - n2.y);
                        if(d < 120) {
                            ctx.strokeStyle = \`rgba(156, 163, 175, \${0.15 * (1 - d/120)})\`;
                            ctx.beginPath();
                            ctx.moveTo(n1.x, n1.y);
                            ctx.lineTo(n2.x, n2.y);
                            ctx.stroke();
                        }
                    }
                }

                nodes.forEach(n => {
                    n.y += n.vy; // Slow drift
                    if(n.y > height + 20) {
                        n.y = -20;
                        n.x = Math.random() * width;
                    }

                    let dist = Math.hypot(mouse.x - n.x, mouse.y - n.y);

                    // Dynamic Character Swap
                    if (dist < 180 || Math.random() > 0.98) n.char = chars[Math.floor(Math.random() * chars.length)];

                    // Mouse Connection
                    if (dist < 180) {
                        ctx.strokeStyle = \`rgba(96, 165, 250, \${0.5 * (1 - dist/180)})\`;
                        ctx.beginPath(); 
                        ctx.moveTo(n.x, n.y); 
                        ctx.lineTo(mouse.x, mouse.y); 
                        ctx.stroke();
                    }

                    ctx.fillStyle = dist < 180 ? '#60A5FA' : 'rgba(156, 163, 175, 0.4)';
                    ctx.fillText(n.char, n.x, n.y);
                });

                requestAnimationFrame(draw);
            }
            draw();

            // --- GSAP Timeline Reveals ---
            const heading = document.getElementById('hero-heading');
            
            // Staggered vertical masked word setup
            const words = heading.innerHTML.trim().split(/(<br\\s*\\/?>|\\s+)/).filter(w => w.trim().length > 0 || w.toLowerCase().includes('<br'));
            let newHTML = '';
            words.forEach(word => {
                if(word.toLowerCase().includes('<br')) {
                    newHTML += '<br/>';
                } else if (word.trim() !== '') {
                    newHTML += \`<span class="inline-block overflow-hidden align-bottom pb-1 -mb-1"><span class="reveal-word inline-block translate-y-full opacity-0">\${word}</span></span> \`;
                }
            });
            heading.innerHTML = newHTML;
            heading.style.opacity = 1;

            const tl = gsap.timeline({ 
                scrollTrigger: {
                    trigger: heading,
                    start: "top 85%"
                },
                delay: 0.1 
            });

            tl.to('.reveal-word', {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.04,
                ease: "power4.out"
            }, 0);

            tl.to('.fade-in-el', {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            }, 0.6);

            // Canvas Timeline Integration
            tl.to(canvas, { opacity: 1, duration: 2, ease: "power2.inOut" }, 0.2);

            // Floating Logic independent 3D shifts
            gsap.to('#floating-card', {
                y: "-=12",
                rotationX: 4,
                rotationY: -4,
                duration: 4,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
        });
    <\/script>
</body>
</html>`});var Zd,Jd=W(()=>{Zd=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Omnichannel Data Intelligence</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&display=swap" rel="stylesheet">
</head>
<body class="font-sans antialiased text-white m-0 p-0 h-screen w-full flex flex-col overflow-hidden selection:bg-blue-500/30 bg-black relative" style="font-family: 'Inter', sans-serif;">

    <!-- Background Image Stage -->
    <div class="absolute inset-0 z-0 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_3840w.jpg')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"></div>
    
    <!-- Directional Tonal Washes for Readability -->
    <div class="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    <div class="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>

    <!-- Visible Structural Grid Scaffold -->
    <div class="absolute inset-0 z-10 pointer-events-none flex justify-center w-full">
        <div class="w-full max-w-7xl h-full grid grid-cols-1 md:grid-cols-4 border-x border-white/5 divide-y-0 md:divide-x divide-white/5 relative">
            <!-- Structural Line Markers -->
            <div class="hidden md:block absolute top-[20%] -left-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute top-[20%] -right-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute bottom-[35%] -left-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute bottom-[35%] -right-1 w-2 h-[1px] bg-white/30"></div>
            <!-- Grid columns -->
            <div class="relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block"></div>
        </div>
    </div>

    <!-- Controls Box (Top Right Anchored) -->
    <div class="absolute top-6 right-6 md:top-8 md:right-8 z-40 flex gap-3">
        <!-- Gradient Border Treatment Applied via wrapper -->
        <div class="w-10 h-10 rounded p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent">
            <button id="pauseBtn" class="w-full h-full rounded bg-black/40 backdrop-blur-md flex items-center justify-center text-[#6a9ded] hover:bg-white/10 transition-all cursor-pointer outline-none focus:ring-1 focus:ring-[#6a9ded]/50 group" aria-label="Pause Animation">
                <iconify-icon icon="solar:pause-linear" width="18" height="18" stroke-width="1.5" class="group-hover:scale-110 transition-transform"></iconify-icon>
            </button>
        </div>
        <div class="w-10 h-10 rounded p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent">
            <button class="w-full h-full rounded bg-black/40 backdrop-blur-md flex items-center justify-center text-[#6a9ded] hover:bg-white/10 transition-all cursor-pointer outline-none focus:ring-1 focus:ring-[#6a9ded]/50 group" aria-label="Settings">
                <iconify-icon icon="solar:settings-linear" width="18" height="18" stroke-width="1.5" class="group-hover:rotate-90 transition-transform duration-500"></iconify-icon>
            </button>
        </div>
    </div>

    <!-- Additive Canvas Overlay -->
    <canvas id="particle-canvas" class="absolute inset-0 w-full h-full z-20 pointer-events-none"></canvas>

    <!-- Anchored Content Overlay low in viewport -->
    <main class="relative z-30 flex-grow w-full flex flex-col justify-end pb-12 md:pb-24">
        <div class="w-full max-w-7xl mx-auto px-6 md:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-end">
                
                <!-- Primary Headline Block -->
                <header class="md:col-span-2 flex flex-col gap-6">
                    <h1 class="text-4xl md:text-5xl font-extralight tracking-tight leading-tight text-white drop-shadow-lg">
                        <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Omnichannel</span></span> <br>
                        <span class="text-white/60">
                            <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Data</span></span>
                            <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Intelligence</span></span>
                        </span>
                    </h1>
                    <p id="split-text-target" class="text-sm md:text-base font-extralight text-white/50 max-w-sm leading-relaxed tracking-wide">
                        Empowering next-generation analytics platforms with real-time distributed insights and secure, scalable hybrid-cloud processing architectures.
                    </p>
                </header>

                <!-- Secondary Framed Grid Lane (Stats) with Premium Gradient Border -->
                <div class="md:col-span-2 relative p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent backdrop-blur-sm">
                    <!-- Corner structural crosses -->
                    <div class="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 border-t border-l border-white/40 z-10"></div>
                    <div class="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 border-t border-r border-white/40 z-10"></div>
                    <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 border-b border-l border-white/40 z-10"></div>
                    <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 border-b border-r border-white/40 z-10"></div>

                    <!-- Grid Layout for Stats inside Gradient Wrapper -->
                    <div class="grid grid-cols-2 gap-px bg-white/5 w-full h-full relative z-0">
                        <!-- Stat 1 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">120+</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Edge<br>Nodes</span>
                        </div>

                        <!-- Stat 2 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">5.2P</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Data<br>Indexed</span>
                        </div>

                        <!-- Stat 3 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">&lt;10ms</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Query<br>Latency</span>
                        </div>

                        <!-- Stat 4 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">3.4B+</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Event<br>Triggers</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>

    <script>
        // Set up the masked text reveal dynamically for the paragraph text
        const p = document.getElementById('split-text-target');
        const text = p.innerText.trim();
        const words = text.split(/\\s+/);
        p.innerHTML = '';
        words.forEach(word => {
            p.innerHTML += \`<span class="inline-block overflow-hidden align-bottom pb-1"><span class="inline-block gsap-word translate-y-full">\${word}</span></span> \`;
        });

        // Initialize GSAP ScrollTrigger for masked reveal
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.gsap-word', {
            y: "0%",
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.04,
            scrollTrigger: {
                trigger: "main",
                start: "top 95%"
            }
        });

        // Canvas Particle Network (Original logic preserved)
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        const pauseBtn = document.getElementById('pauseBtn');
        let isPaused = false;

        let width, height;
        let particles = [];
        const particleCount = 200;
        const speedMultiplier = 1.1;

        let originX, originY;

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            originX = width / 2;
            originY = height * 0.7; // Lowered slightly to fit grid stage better
        }

        class Particle {
            constructor() {
                this.reset();
                this.z = Math.random() * 1000;
            }

            reset() {
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.random() * 600;
                
                this.x = Math.cos(angle) * radius;
                this.y = (Math.sin(angle) * radius) - 150; 
                
                this.z = 1000; 
                this.speed = (Math.random() * 2 + 1) * speedMultiplier;
                
                // Restrained blue and white hues for technical atmosphere
                const hue = Math.random() > 0.5 ? '200, 220, 255' : '106, 157, 237';
                this.color = \`rgb(\${hue})\`;
                this.length = Math.random() * 2 + 0.5;
            }

            update() {
                this.z -= this.speed;
                if (this.z <= 0) {
                    this.reset();
                }
            }

            draw() {
                const fov = 300; 
                
                const scale = fov / this.z;
                const px = originX + this.x * scale;
                const py = originY + this.y * scale;

                const prevZ = this.z + this.speed * this.length;
                const prevScale = fov / prevZ;
                const prevPx = originX + this.x * prevScale;
                const prevPy = originY + this.y * prevScale;

                let opacity = 1 - (this.z / 1000);
                if (this.z < 100) opacity = this.z / 100; 
                if (opacity < 0) opacity = 0;

                ctx.beginPath();
                ctx.moveTo(prevPx, prevPy);
                ctx.lineTo(px, py);
                
                ctx.strokeStyle = this.color.replace('rgb', 'rgba').replace(')', \`, \${opacity * 0.9})\`);
                // Hairline strokes stay crisp under retina DPR scaling
                ctx.lineWidth = Math.max(0.25, (1 - (this.z / 1000)) * 0.4);
                ctx.lineCap = 'butt';
                ctx.lineJoin = 'miter';
                
                ctx.stroke();
            }
        }

        function init() {
            resize();
            window.addEventListener('resize', resize);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            animate();
        }

        function animate() {
            requestAnimationFrame(animate);

            if (!isPaused) {
                // Faster fade keeps streaks sharp instead of smeared
                ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
                ctx.fillRect(0, 0, width, height);

                particles.forEach(p => {
                    p.update();
                    p.draw();
                });
            }
        }

        pauseBtn.addEventListener('click', () => {
            isPaused = !isPaused;
            const icon = pauseBtn.querySelector('iconify-icon');
            if (isPaused) {
                icon.setAttribute('icon', 'solar:play-linear');
            } else {
                icon.setAttribute('icon', 'solar:pause-linear');
            }
        });

        init();
    <\/script>
</body>
</html>`});var eu,tu=W(()=>{eu=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quantum Flux</title>
    
    <!-- Tailwind & Iconify -->
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <!-- GSAP Core & ScrollTrigger -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    
    <!-- Three.js Import Map -->
    <script type="importmap">
    {
        "imports": {
            "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
            "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
        }
    }
    <\/script>
</head>
<body class="bg-[#050505] text-white selection:bg-white selection:text-black font-extralight overflow-x-hidden relative" style="font-family: 'Space Grotesk', sans-serif;">

    <!-- Loading Overlay -->
    <div id="loader" class="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] transition-opacity duration-1000">
        <div class="flex flex-col items-center gap-4">
            <div class="h-px w-24 bg-neutral-800 overflow-hidden relative">
                <div id="shimmer-bar" class="absolute inset-y-0 left-0 bg-white w-full -translate-x-full"></div>
            </div>
            <p class="text-xs uppercase tracking-[0.2em] text-neutral-500 font-light">
                Booting Sequence
            </p>
        </div>
    </div>

    <!-- 3D Canvas Container -->
    <div class="fixed inset-0 z-0">
        <canvas id="webgl-canvas" class="w-full h-full outline-none cursor-auto"></canvas>
    </div>

    <!-- Container Lines & Corner Squares -->
    <div class="fixed inset-y-6 inset-x-6 md:inset-y-12 md:inset-x-12 border-x border-white/10 pointer-events-none z-10 flex flex-col justify-between">
        <!-- Top Left -->
        <div class="absolute top-0 -translate-y-1/2 -left-[3px] w-1.5 h-1.5 bg-neutral-900 border border-neutral-500 rounded-none"></div>
        <!-- Top Right -->
        <div class="absolute top-0 -translate-y-1/2 -right-[3px] w-1.5 h-1.5 bg-neutral-900 border border-neutral-500 rounded-none"></div>
        <!-- Bottom Left -->
        <div class="absolute bottom-0 translate-y-1/2 -left-[3px] w-1.5 h-1.5 bg-neutral-900 border border-neutral-500 rounded-none"></div>
        <!-- Bottom Right -->
        <div class="absolute bottom-0 translate-y-1/2 -right-[3px] w-1.5 h-1.5 bg-neutral-900 border border-neutral-500 rounded-none"></div>
    </div>

    <!-- Scrollable UI Overlay -->
    <div class="relative z-20 flex flex-col min-h-[160vh] pointer-events-none">
        
        <!-- Fixed Navigation -->
        <header class="fixed top-6 md:top-12 left-6 right-6 md:left-12 md:right-12 px-6 py-6 flex justify-between items-center pointer-events-auto opacity-0 nav-item z-30">
            <div class="flex items-center gap-3 group cursor-pointer">
                <div class="w-8 h-8 rounded-none border border-neutral-800 flex items-center justify-center bg-[#050505] group-hover:border-neutral-400 transition-colors duration-300">
                    <span class="font-light text-xs tracking-tighter text-white">Q</span>
                </div>
                <span class="text-xs font-light tracking-widest text-neutral-400 group-hover:text-white transition-colors uppercase glitch-target">
                    Quantum
                </span>
            </div>

            <nav class="hidden md:flex items-center gap-10 px-8 py-3 rounded-none" style="background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(8px); border: 1px solid transparent; background-clip: padding-box, border-box; background-image: linear-gradient(#050505, #050505), linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 100%);">
                <a href="#" class="uppercase tracking-widest text-neutral-500 hover:text-white transition-colors text-xs font-light">Topology</a>
                <a href="#" class="uppercase tracking-widest text-neutral-500 hover:text-white transition-colors text-xs font-light">Matrix</a>
                <a href="#" class="uppercase tracking-widest text-neutral-500 hover:text-white transition-colors text-xs font-light">Protocol</a>
            </nav>

            <button class="group flex items-center gap-3 px-5 py-2.5 rounded-none transition-all duration-300" style="background: linear-gradient(#050505, #050505) padding-box, linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05)) border-box; border: 1px solid transparent;">
                <span class="text-xs font-light tracking-widest uppercase text-neutral-400 group-hover:text-white">Connect</span>
                <iconify-icon icon="solar:arrow-right-linear" width="14" class="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all"></iconify-icon>
            </button>
        </header>

        <!-- Main Content Area -->
        <main class="flex-grow flex flex-col pt-[35vh] pb-[40vh] px-12 md:px-24 pointer-events-none relative z-20 w-full max-w-6xl mx-auto scroll-trigger-area">
            <div class="space-y-12">
                <!-- Status Tagline -->
                <div class="overflow-hidden">
                    <div class="flex items-center gap-3 mask-word translate-y-full inline-flex">
                        <span class="flex h-1.5 w-1.5 rounded-none bg-neutral-300 shadow-[0_0_8px_rgba(255,255,255,0.6)]"></span>
                        <p class="text-xs uppercase tracking-[0.25em] text-neutral-400 font-extralight">
                            Neural Node: Active
                        </p>
                    </div>
                </div>

                <!-- Headline with Staggered Masked Reveal -->
                <div class="max-w-4xl flex flex-wrap gap-x-6 gap-y-2">
                    <span class="inline-block overflow-hidden pb-2"><span class="mask-word inline-block translate-y-[110%] text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1] text-white glitch-target">Dynamic</span></span>
                    <span class="inline-block overflow-hidden pb-2"><span class="mask-word inline-block translate-y-[110%] text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1] text-white glitch-target">Resonance</span></span>
                    <span class="inline-block overflow-hidden pb-2"><span class="mask-word inline-block translate-y-[110%] text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1] text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-700 glitch-target">Field.</span></span>
                </div>

                <!-- Description -->
                <div class="overflow-hidden max-w-lg">
                    <p class="mask-word translate-y-[110%] inline-block text-sm md:text-base text-neutral-500 leading-relaxed font-extralight">
                        An autonomous volumetric simulation powered by algorithmic dispersion and real-time data flow.
                    </p>
                </div>

                <!-- CTA Actions -->
                <div class="overflow-hidden pt-6">
                    <div class="mask-word translate-y-[110%] flex flex-wrap gap-5 pointer-events-auto">
                        <button class="relative group px-8 py-3.5 bg-white text-black rounded-none overflow-hidden">
                            <div class="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                            <div class="relative flex items-center gap-3">
                                <span class="text-xs uppercase tracking-widest font-light text-black">Initialize</span>
                                <iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
                            </div>
                        </button>

                        <button class="group px-8 py-3.5 rounded-none transition-colors backdrop-blur-sm" style="background: linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0.02)) padding-box, linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%) border-box; border: 1px solid transparent;">
                            <div class="flex items-center gap-3">
                                <span class="text-xs uppercase tracking-widest font-light text-neutral-400 group-hover:text-white transition-colors">System Specs</span>
                                <iconify-icon icon="solar:document-linear" width="16" class="text-neutral-500 group-hover:text-white transition-colors"></iconify-icon>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </main>

        <!-- Fixed Footer -->
        <footer class="fixed bottom-6 md:bottom-12 left-6 right-6 md:left-12 md:right-12 pointer-events-auto nav-item opacity-0 px-6 py-6 grid grid-cols-3 items-end z-30">
            <div class="flex flex-col gap-2">
                <span class="text-[10px] uppercase tracking-widest text-neutral-600 font-light">Telemetry</span>
                <span id="coords" class="text-xs font-mono text-neutral-300 font-extralight">0.00.0.00.00</span>
            </div>

            <div class="hidden sm:flex flex-col gap-2 items-center">
                <span class="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-light">Scroll to traverse</span>
                <div class="w-px h-8 bg-gradient-to-b from-neutral-600 to-transparent"></div>
            </div>
            
            <div class="flex gap-6 justify-self-end">
                <a href="#" class="text-neutral-600 hover:text-white transition-colors">
                    <iconify-icon icon="solar:link-linear" width="18"></iconify-icon>
                </a>
                <a href="#" class="text-neutral-600 hover:text-white transition-colors">
                    <iconify-icon icon="solar:maximize-square-linear" width="18"></iconify-icon>
                </a>
            </div>
        </footer>
    </div>

    <!-- Main Logic & Interactions -->
    <script type="module">
        import * as THREE from 'three';
        import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
        import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
        import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

        // Register GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // --- Configuration (Monotone) ---
        const config = {
            colors: {
                bg: 0x050505,
                primary: 0xdddddd, 
                secondary: 0x555555
            }
        };

        // --- Scene Setup ---
        const canvas = document.querySelector('#webgl-canvas');
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(config.colors.bg);
        scene.fog = new THREE.FogExp2(config.colors.bg, 0.04);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 7;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: false,
            powerPreference: "high-performance",
            alpha: false
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;

        // --- Objects Container ---
        const mainGroup = new THREE.Group();
        scene.add(mainGroup);

        // --- 1. Vortex Particle Field (Smaller Dots) ---
        const vortexCount = 9500;
        const vortexPositions = new Float32Array(vortexCount * 3);
        const vortexRadius = new Float32Array(vortexCount);
        const vortexAngle = new Float32Array(vortexCount);
        const vortexHeight = new Float32Array(vortexCount);
        const vortexSpeed = new Float32Array(vortexCount);

        for (let i = 0; i < vortexCount; i++) {
            const i3 = i * 3;
            const y = (Math.random() - 0.5) * 7.5;
            const funnel = 0.4 + Math.abs(y) * 0.2;
            const r = (0.1 + Math.pow(Math.random(), 1.5) * 2.5) * funnel;
            const a = Math.random() * Math.PI * 2;

            vortexHeight[i] = y;
            vortexRadius[i] = r;
            vortexAngle[i] = a;
            vortexSpeed[i] = 0.5 + Math.random() * 0.8;

            vortexPositions[i3] = Math.cos(a) * r;
            vortexPositions[i3 + 1] = y;
            vortexPositions[i3 + 2] = Math.sin(a) * r;
        }

        const vortexGeometry = new THREE.BufferGeometry();
        vortexGeometry.setAttribute('position', new THREE.BufferAttribute(vortexPositions, 3));
        const vortexMaterial = new THREE.PointsMaterial({
            size: 0.006, // Smaller dots requested
            color: config.colors.primary,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const vortexPoints = new THREE.Points(vortexGeometry, vortexMaterial);
        mainGroup.add(vortexPoints);

        // --- 2. Spiral Guides ---
        function createSpiralLine(turnOffset, color) {
            const spiralPoints = [];
            const pointCount = 400;
            for (let i = 0; i < pointCount; i++) {
                const t = i / (pointCount - 1);
                const angle = t * Math.PI * 14 + turnOffset;
                const radius = 0.2 + t * 2.8;
                const y = (0.5 - t) * 6.0;
                spiralPoints.push(new THREE.Vector3(
                    Math.cos(angle) * radius,
                    y,
                    Math.sin(angle) * radius
                ));
            }
            const spiralGeometry = new THREE.BufferGeometry().setFromPoints(spiralPoints);
            const spiralMaterial = new THREE.LineBasicMaterial({
                color,
                transparent: true,
                opacity: 0.15,
                blending: THREE.AdditiveBlending
            });
            return new THREE.Line(spiralGeometry, spiralMaterial);
        }

        const spiralLineA = createSpiralLine(0, config.colors.secondary);
        const spiralLineB = createSpiralLine(Math.PI, config.colors.primary);
        mainGroup.add(spiralLineA);
        mainGroup.add(spiralLineB);

        // --- 3. Ambient Particles ---
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 300;
        const posArray = new Float32Array(particlesCount * 3);
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 12;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.008,
            color: config.colors.secondary,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // --- Post Processing ---
        const renderScene = new RenderPass(scene, camera);
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.0, 0.4, 0.85);
        bloomPass.strength = 0.6;
        bloomPass.radius = 0.3;
        bloomPass.threshold = 0.2;

        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        // --- Interactions & Animation State ---
        let mouseX = 0, mouseY = 0;
        let targetX = 0, targetY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
            
            // Coordinates Update
            const xVal = (event.clientX / window.innerWidth).toFixed(2);
            const yVal = (event.clientY / window.innerHeight).toFixed(2);
            document.getElementById('coords').innerText = \`\${xVal}.\${yVal}.00\`;
        });

        // --- Animation Loop ---
        const clock = new THREE.Clock();

        function animate() {
            const elapsedTime = clock.getElapsedTime();

            targetX = mouseX * 0.001;
            targetY = mouseY * 0.0008;

            mainGroup.rotation.y += 0.002;
            mainGroup.rotation.y += 0.03 * (targetX - mainGroup.rotation.y);
            mainGroup.rotation.x += 0.03 * (targetY - mainGroup.rotation.x);

            const positions = vortexGeometry.attributes.position.array;
            for (let i = 0; i < vortexCount; i++) {
                const i3 = i * 3;
                const spin = elapsedTime * vortexSpeed[i] * 0.5 + vortexHeight[i] * 0.5;
                const angle = vortexAngle[i] + spin;
                const pulse = Math.sin(elapsedTime * 1.2 + i * 0.01) * 0.05;
                const radius = vortexRadius[i] + pulse;

                positions[i3] = Math.cos(angle) * radius;
                positions[i3 + 1] = vortexHeight[i] + Math.sin(elapsedTime + i * 0.02) * 0.03;
                positions[i3 + 2] = Math.sin(angle) * radius;
            }
            vortexGeometry.attributes.position.needsUpdate = true;

            spiralLineA.rotation.y = elapsedTime * 0.15;
            spiralLineB.rotation.y = -elapsedTime * 0.12;

            particlesMesh.rotation.y = elapsedTime * 0.03;
            particlesMesh.rotation.x = -mouseY * 0.0001;

            composer.render();
            requestAnimationFrame(animate);
        }

        // --- Resize ---
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
        });

        // --- Init & GSAP Animations ---
        window.onload = () => {
            animate();

            // Loader Shimmer loop
            gsap.to("#shimmer-bar", { x: "100%", duration: 1.5, repeat: -1, ease: "power1.inOut" });

            const tl = gsap.timeline();

            // 1. Loader Exit & Nav Enter
            tl.to("#loader", {
                opacity: 0,
                duration: 1.0,
                onComplete: () => { document.getElementById("loader").style.display = "none"; }
            })
            .from(mainGroup.scale, { x: 0.6, y: 0.6, z: 0.6, duration: 2.0, ease: "power3.out" }, "-=0.5")
            .to(".nav-item", { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power2.out" }, "-=1.5");

            // 2. ScrollTrigger Masked Staggered Word Reveal
            gsap.to(".mask-word", {
                scrollTrigger: {
                    trigger: ".scroll-trigger-area",
                    start: "top 80%",
                },
                y: 0,
                duration: 1.4,
                stagger: 0.1,
                ease: "power4.out"
            });
        };
    <\/script>

    <!-- JS based Glitch Effect to avoid arbitrary style tags -->
    <script>
        (function(){
            const targets = document.querySelectorAll('.glitch-target');
            let lastX = 0, lastY = 0, lastTime = 0;
            
            document.addEventListener('mousemove', e => {
                const now = Date.now(), dt = now - lastTime;
                if (dt > 40) {
                    const dx = e.clientX - lastX, dy = e.clientY - lastY;
                    const speed = Math.sqrt(dx * dx + dy * dy) / dt;
                    
                    if (speed > 2.0) {
                        targets.forEach(el => {
                            if (!el.dataset.animating) {
                                el.dataset.animating = "true";
                                gsap.to(el, {
                                    x: () => (Math.random() - 0.5) * 4,
                                    y: () => (Math.random() - 0.5) * 2,
                                    textShadow: "2px 0 rgba(255,255,255,0.4), -2px 0 rgba(100,100,100,0.4)",
                                    duration: 0.05,
                                    yoyo: true,
                                    repeat: 3,
                                    onComplete: () => {
                                        gsap.set(el, { x: 0, y: 0, textShadow: "none" });
                                        setTimeout(() => el.dataset.animating = "", 200);
                                    }
                                });
                            }
                        });
                    }
                    lastX = e.clientX; lastY = e.clientY; lastTime = now;
                }
            });
        })();
    <\/script>
</body>
</html>`});var nu,ru=W(()=>{nu=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AEON // Portal</title>
    
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet">
</head>
<body style="
    --bg-base: #020202; 
    --bg-surface-1: rgba(255, 255, 255, 0.015); 
    --bg-surface-2: rgba(255, 255, 255, 0.04); 
    --bg-surface-3: rgba(255, 255, 255, 0.08);
    --text-primary: #F4F4F5; 
    --text-secondary: #A3A3A3; 
    --text-accent: #020202; 
    --text-tech: #666666;
    --bg-accent: #F4F4F5; 
    --bg-accent-active: #22C55E;
    --border-glow: rgba(255, 255, 255, 0.08);
    --glow-color: 255, 255, 255;
    background-color: var(--bg-base); 
    color: var(--text-primary);
    transition: background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.8s cubic-bezier(0.16, 1, 0.3, 1);
" class="font-['Inter'] min-h-screen overflow-hidden flex items-center justify-center antialiased selection:bg-[var(--bg-surface-3)] selection:text-[var(--text-primary)]">

    <!-- Ambient Background -->
    <div id="webgl-container" class="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen"></div>

    <!-- Structural Framing -->
    <div class="fixed inset-4 lg:inset-8 pointer-events-none z-0 border border-[var(--border-glow)] hidden lg:block transition-colors duration-700">
        <!-- Corner Registration Marks -->
        <div class="absolute -top-[1px] -left-[1px] w-3 h-3 border-t border-l border-[var(--text-secondary)] transition-colors duration-500"></div>
        <div class="absolute -top-[1px] -right-[1px] w-3 h-3 border-t border-r border-[var(--text-secondary)] transition-colors duration-500"></div>
        <div class="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b border-l border-[var(--text-secondary)] transition-colors duration-500"></div>
        <div class="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b border-r border-[var(--text-secondary)] transition-colors duration-500"></div>
        
        <!-- Precision Grid Lines -->
        <div class="absolute top-0 bottom-0 left-1/3 w-[1px] bg-gradient-to-b from-transparent via-[var(--border-glow)] to-transparent opacity-20"></div>
        <div class="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-glow)] to-transparent opacity-10"></div>
    </div>

    <!-- Interface Controls -->
    <div class="absolute top-6 lg:top-12 right-6 lg:right-12 z-20 flex items-center gap-6">
        <div class="font-['JetBrains_Mono'] text-xs text-[var(--text-tech)] tracking-widest uppercase transition-colors duration-500 hidden sm:block">SYS-2.9</div>
        <button id="themeToggleBtn" class="h-8 px-4 border border-[var(--border-glow)] bg-[var(--bg-surface-1)] hover:bg-[var(--bg-surface-2)] text-[var(--text-primary)] backdrop-blur-md flex items-center gap-2 transition-all duration-300 text-xs font-light tracking-wide rounded-sm">
            <iconify-icon id="themeIcon" icon="solar:moon-linear" stroke-width="1.5" class="text-sm"></iconify-icon>
            <span id="themeText">DARK</span>
        </button>
    </div>

    <!-- Metadata Labels -->
    <div class="absolute top-12 left-8 lg:top-16 lg:left-16 z-10 font-['JetBrains_Mono'] text-xs tracking-widest text-[var(--text-tech)] uppercase transition-colors duration-500 hidden sm:block">
        NEURAL.NET // ACTIVE
    </div>
    <div style="transform: translateY(-50%) rotate(90deg); transform-origin: center right;" class="absolute top-1/2 right-8 lg:right-12 z-10 font-['JetBrains_Mono'] text-xs tracking-widest text-[var(--text-tech)] uppercase flex items-center gap-4 transition-colors duration-500 hidden xl:flex">
        <span class="opacity-40">[</span>
        <span>PRT</span>
        <span class="opacity-40">=</span>
        <span>ECHO-9</span>
        <span class="opacity-40">]</span>
    </div>

    <!-- Remixed Layout: Typographic Hero + Interactive Section -->
    <div class="relative z-10 w-full max-w-[1440px] min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-24 py-24 gap-16 lg:gap-8">
        
        <!-- Hero Section -->
        <div class="w-full lg:w-1/2 flex flex-col gap-6 lg:pr-12">
            <div class="font-['JetBrains_Mono'] text-xs text-[var(--text-secondary)] tracking-widest uppercase flex items-center gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-[var(--bg-accent-active)] animate-pulse"></div>
                <span class="block overflow-hidden"><span class="block masked-word translate-y-full opacity-0">Authorization Pending</span></span>
            </div>
            
            <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tighter font-extralight leading-[0.95] text-[var(--text-primary)] uppercase">
                <span class="block overflow-hidden pb-2"><span class="block masked-word translate-y-full opacity-0">Establish</span></span>
                <span class="block overflow-hidden pb-2"><span class="block masked-word translate-y-full opacity-0">Connection</span></span>
            </h1>
            
            <p class="text-sm lg:text-base font-extralight text-[var(--text-secondary)] leading-relaxed max-w-md mt-4">
                <span class="block overflow-hidden"><span class="block masked-word translate-y-full opacity-0">Restricted network sector. Verify your identity via biometric uplink to access the centralized mainframe and quantum datasets.</span></span>
            </p>
        </div>

        <!-- Second Section (Interactive Card) -->
        <div class="w-full max-w-[420px] lg:w-1/2 flex justify-center lg:justify-end">
            
            <!-- Structural Shell with Gradient Border -->
            <div class="relative w-full rounded-sm p-[1px] bg-gradient-to-br from-[var(--border-glow)] via-transparent to-[var(--border-glow)] group">
                
                <div class="w-full rounded-sm bg-[var(--bg-surface-1)] backdrop-blur-2xl p-8 lg:p-10 flex flex-col gap-8 transition-colors duration-500 shadow-2xl shadow-black/40">
                    
                    <!-- Card Header -->
                    <div class="flex flex-col gap-2">
                        <div class="font-['JetBrains_Mono'] text-xs text-[var(--text-primary)] border border-[var(--border-glow)] bg-[var(--bg-surface-2)] px-3 py-1 self-start mb-2 tracking-widest uppercase rounded-sm transition-colors duration-500">IDENTITY.CHECK</div>
                        <h2 class="text-2xl tracking-tight font-light text-[var(--text-primary)]">
                            <span class="block overflow-hidden"><span class="block masked-word translate-y-full opacity-0">Authentication</span></span>
                        </h2>
                    </div>

                    <!-- Alternate Methods Grid -->
                    <div class="grid grid-cols-3 gap-3">
                        <button class="h-12 rounded-sm bg-[var(--bg-surface-2)] hover:bg-[var(--text-primary)] text-[var(--text-primary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-all duration-300 border border-[var(--border-glow)] group/btn" aria-label="Biometric Scan">
                            <iconify-icon icon="solar:fingerprint-linear" stroke-width="1.5" class="text-xl transition-transform duration-300 group-hover/btn:scale-110"></iconify-icon>
                        </button>
                        <button class="h-12 rounded-sm bg-[var(--bg-surface-2)] hover:bg-[var(--text-primary)] text-[var(--text-primary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-all duration-300 border border-[var(--border-glow)] group/btn" aria-label="Hardware Token">
                            <iconify-icon icon="solar:smartphone-linear" stroke-width="1.5" class="text-xl transition-transform duration-300 group-hover/btn:scale-110"></iconify-icon>
                        </button>
                        <button class="h-12 rounded-sm bg-[var(--bg-surface-2)] hover:bg-[var(--text-primary)] text-[var(--text-primary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-all duration-300 border border-[var(--border-glow)] group/btn" aria-label="Neural Passkey">
                            <iconify-icon icon="solar:shield-keyhole-linear" stroke-width="1.5" class="text-xl transition-transform duration-300 group-hover/btn:scale-110"></iconify-icon>
                        </button>
                    </div>

                    <!-- Divider -->
                    <div class="flex items-center gap-4 text-[var(--text-tech)] font-['JetBrains_Mono'] text-xs tracking-widest uppercase">
                        <div class="flex-1 h-[1px] bg-[var(--border-glow)] transition-colors duration-500"></div>
                        <span>FALLBACK PROTOCOL</span>
                        <div class="flex-1 h-[1px] bg-[var(--border-glow)] transition-colors duration-500"></div>
                    </div>

                    <!-- Input Fields -->
                    <div class="flex flex-col gap-5">
                        <div class="relative flex flex-col gap-2">
                            <label class="font-['JetBrains_Mono'] text-xs font-light text-[var(--text-secondary)] uppercase tracking-widest transition-colors duration-500">AGENT_ALIAS</label>
                            <input type="text" placeholder="agent.name@aeon.net" autocomplete="username" class="w-full px-4 h-12 border border-[var(--border-glow)] outline-none rounded-sm bg-[var(--bg-surface-1)] text-[var(--text-primary)] font-['Inter'] text-sm transition-all duration-300 focus:bg-[var(--bg-surface-2)] focus:border-[var(--text-secondary)] placeholder-[var(--text-tech)] font-light">
                        </div>
                        <div class="relative flex flex-col gap-2">
                            <label class="font-['JetBrains_Mono'] text-xs font-light text-[var(--text-secondary)] uppercase tracking-widest transition-colors duration-500">ACCESS_CODE</label>
                            <input type="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" autocomplete="current-password" class="w-full px-4 h-12 border border-[var(--border-glow)] outline-none rounded-sm bg-[var(--bg-surface-1)] text-[var(--text-primary)] font-['Inter'] text-sm transition-all duration-300 focus:bg-[var(--bg-surface-2)] focus:border-[var(--text-secondary)] placeholder-[var(--text-tech)] font-light">
                        </div>
                    </div>

                    <!-- Primary Action -->
                    <button class="h-14 mt-4 rounded-sm bg-[var(--bg-accent)] text-[var(--text-accent)] font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-500 hover:bg-[var(--bg-accent-active)] hover:text-white group/submit relative overflow-hidden">
                        <span class="relative z-10 flex items-center gap-2">
                            INITIATE LINK 
                            <iconify-icon icon="solar:arrow-right-linear" stroke-width="1.5" class="text-base transition-transform duration-300 group-hover/submit:translate-x-1"></iconify-icon>
                        </span>
                    </button>

                </div>
            </div>
        </div>
    </div>

    <script>
        // GSAP Masked Reveal Directive
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);
            
            gsap.to(".masked-word", {
                y: "0%",
                opacity: 1,
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.1,
                delay: 0.1
            });
        });

        // Theme Toggling Logic
        const body = document.body;
        const themeBtn = document.getElementById('themeToggleBtn');
        const themeIcon = document.getElementById('themeIcon');
        const themeText = document.getElementById('themeText');
        let isDark = true;

        const themes = {
            dark: {
                '--bg-base': '#020202',
                '--bg-surface-1': 'rgba(255, 255, 255, 0.015)',
                '--bg-surface-2': 'rgba(255, 255, 255, 0.04)',
                '--bg-surface-3': 'rgba(255, 255, 255, 0.08)',
                '--text-primary': '#F4F4F5',
                '--text-secondary': '#A3A3A3',
                '--text-accent': '#020202',
                '--text-tech': '#666666',
                '--bg-accent': '#F4F4F5',
                '--bg-accent-active': '#22C55E',
                '--border-glow': 'rgba(255, 255, 255, 0.08)',
                '--glow-color': '255, 255, 255',
                shaderCore: '#FFFFFF',
                shaderFringe: '#1e3a8a'
            },
            light: {
                '--bg-base': '#F4F4F5',
                '--bg-surface-1': 'rgba(0, 0, 0, 0.02)',
                '--bg-surface-2': 'rgba(0, 0, 0, 0.05)',
                '--bg-surface-3': 'rgba(0, 0, 0, 0.1)',
                '--text-primary': '#020202',
                '--text-secondary': '#666666',
                '--text-accent': '#FFFFFF',
                '--text-tech': '#A3A3A3',
                '--bg-accent': '#020202',
                '--bg-accent-active': '#16A34A',
                '--border-glow': 'rgba(0, 0, 0, 0.08)',
                '--glow-color': '0, 0, 0',
                shaderCore: '#020202',
                shaderFringe: '#94a3b8'
            }
        };

        themeBtn.addEventListener('click', () => {
            isDark = !isDark;
            const currentTheme = isDark ? themes.dark : themes.light;

            for (const [key, value] of Object.entries(currentTheme)) {
                if (key.startsWith('--')) {
                    body.style.setProperty(key, value);
                }
            }

            if (isDark) {
                themeIcon.setAttribute('icon', 'solar:moon-linear');
                themeText.textContent = 'DARK';
            } else {
                themeIcon.setAttribute('icon', 'solar:sun-linear');
                themeText.textContent = 'LIGHT';
            }

            if (typeof material !== 'undefined') {
                material.uniforms.u_colorCore.value = new THREE.Color(currentTheme.shaderCore);
                material.uniforms.u_colorFringe.value = new THREE.Color(currentTheme.shaderFringe);
                material.uniforms.u_isLightMode.value = isDark ? 0.0 : 1.0;
            }
        });

        // Ambient WebGL Background
        const container = document.getElementById('webgl-container');
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
        camera.position.z = 1;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const geometry = new THREE.PlaneGeometry(2, 2);

        const vertexShader = \`
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1.0);
            }
        \`;

        const fragmentShader = \`
            uniform float u_time;
            uniform vec2 u_resolution;
            uniform vec2 u_mouse;
            uniform vec3 u_colorCore;
            uniform vec3 u_colorFringe;
            uniform float u_isLightMode;
            varying vec2 vUv;

            vec2 hash( vec2 p ) {
                p = vec2( dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)) );
                return -1.0 + 2.0*fract(sin(p)*43758.5453123);
            }
            float noise( in vec2 p ) {
                const float K1 = 0.366025404;
                const float K2 = 0.211324865;
                vec2 i = floor( p + (p.x+p.y)*K1 );
                vec2 a = p - i + (i.x+i.y)*K2;
                vec2 o = (a.x>a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
                vec2 b = a - o + K2;
                vec2 c = a - 1.0 + 2.0*K2;
                vec3 h = max( 0.5-vec3(dot(a,a), dot(b,b), dot(c,c) ), 0.0 );
                vec3 n = h*h*h*h*vec3( dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));
                return dot( n, vec3(70.0) );
            }

            float sdArc(vec2 p, vec2 center, float radius, float width, float warp) {
                p.y += sin(p.x * 2.0 + u_time * 0.3) * warp;
                p.x += noise(p * 1.5 + u_time * 0.1) * (warp * 0.8);
                float d = length(p - center) - radius;
                return abs(d) - width;
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                vec2 st = uv;
                st.x *= u_resolution.x / u_resolution.y;
                
                vec2 mouseOffset = (u_mouse - 0.5) * 0.05;
                st += mouseOffset;

                // Center organic form behind the content area
                vec2 center = vec2(0.5, 0.5);
                
                float d1 = sdArc(st, center, 0.6, 0.02, 0.15);
                float d2 = sdArc(st, center, 0.65, 0.06, 0.2);
                
                float coreGlow = exp(-d1 * 30.0);
                float fringeGlow = exp(-d2 * 10.0);
                float wash = smoothstep(1.5, -0.5, length(st - center)) * 0.15;

                vec3 finalColor = vec3(0.0);
                finalColor += u_colorCore * coreGlow;
                finalColor += u_colorFringe * fringeGlow;
                finalColor += u_colorFringe * wash * (sin(u_time * 0.5) * 0.2 + 0.8);

                float alpha = clamp(coreGlow + fringeGlow + wash, 0.0, 1.0);
                finalColor = vec3(1.0) - exp(-finalColor * 1.5);
                
                if(u_isLightMode > 0.5) {
                    alpha = clamp((coreGlow * 1.2 + fringeGlow + wash * 0.4), 0.0, 0.4);
                }

                gl_FragColor = vec4(finalColor, alpha * 0.6);
            }
        \`;

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                u_time: { value: 0.0 },
                u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
                u_colorCore: { value: new THREE.Color(themes.dark.shaderCore) },
                u_colorFringe: { value: new THREE.Color(themes.dark.shaderFringe) },
                u_isLightMode: { value: 0.0 }
            },
            transparent: true,
            blending: THREE.AdditiveBlending 
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        let targetMouse = new THREE.Vector2(0.5, 0.5);
        document.addEventListener('mousemove', (e) => {
            targetMouse.x = e.clientX / window.innerWidth;
            targetMouse.y = 1.0 - (e.clientY / window.innerHeight); 
        });

        const clock = new THREE.Clock();
        function animate() {
            requestAnimationFrame(animate);
            material.uniforms.u_time.value = clock.getElapsedTime();
            material.uniforms.u_mouse.value.lerp(targetMouse, 0.03);
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            material.uniforms.u_resolution.value.set(width, height);
        });
    <\/script>
</body>
</html>`});var iu,au=W(()=>{iu=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Flow Field with Particle Trails</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; overflow: hidden; background: #0a0a0a; }
  canvas { display: block; width: 100vw; height: 100vh; }
  .label {
    position: fixed;
    top: 20px;
    left: 24px;
    font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(200, 149, 108, 0.5);
    z-index: 10;
    pointer-events: none;
    user-select: none;
  }
</style>
</head>
<body>
<div class="label">Flow Field</div>
<canvas id="canvas"></canvas>
<script>
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// Simplex Noise (compact implementation)
// Based on Stefan Gustavson's simplex noise
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const SimplexNoise = (function() {
  const F2 = 0.5 * (Math.sqrt(3) - 1);
  const G2 = (3 - Math.sqrt(3)) / 6;
  const F3 = 1 / 3;
  const G3 = 1 / 6;

  const grad3 = [
    [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
    [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
    [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]
  ];

  function SimplexNoise(seed) {
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    const p = new Uint8Array(256);
    // Seed-based permutation
    seed = seed || Math.random() * 65536;
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      seed = (seed * 16807 + 0) % 2147483647;
      const j = seed % (i + 1);
      const tmp = p[i];
      p[i] = p[j];
      p[j] = tmp;
    }
    for (let i = 0; i < 512; i++) {
      this.perm[i] = p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }
  }

  SimplexNoise.prototype.noise2D = function(xin, yin) {
    const perm = this.perm, permMod12 = this.permMod12;
    let n0, n1, n2;
    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const t = (i + j) * G2;
    const X0 = i - t, Y0 = j - t;
    const x0 = xin - X0, y0 = yin - Y0;
    let i1, j1;
    if (x0 > y0) { i1 = 1; j1 = 0; }
    else { i1 = 0; j1 = 1; }
    const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
    const ii = i & 255, jj = j & 255;
    let t0 = 0.5 - x0*x0 - y0*y0;
    if (t0 < 0) n0 = 0;
    else { t0 *= t0; const gi = permMod12[ii + perm[jj]]; n0 = t0 * t0 * (grad3[gi][0]*x0 + grad3[gi][1]*y0); }
    let t1 = 0.5 - x1*x1 - y1*y1;
    if (t1 < 0) n1 = 0;
    else { t1 *= t1; const gi = permMod12[ii + i1 + perm[jj + j1]]; n1 = t1 * t1 * (grad3[gi][0]*x1 + grad3[gi][1]*y1); }
    let t2 = 0.5 - x2*x2 - y2*y2;
    if (t2 < 0) n2 = 0;
    else { t2 *= t2; const gi = permMod12[ii + 1 + perm[jj + 1]]; n2 = t2 * t2 * (grad3[gi][0]*x2 + grad3[gi][1]*y2); }
    return 70 * (n0 + n1 + n2);
  };

  SimplexNoise.prototype.noise3D = function(xin, yin, zin) {
    const perm = this.perm, permMod12 = this.permMod12;
    let n0, n1, n2, n3;
    const s = (xin + yin + zin) * F3;
    const i = Math.floor(xin + s), j = Math.floor(yin + s), k = Math.floor(zin + s);
    const t = (i + j + k) * G3;
    const X0 = i - t, Y0 = j - t, Z0 = k - t;
    const x0 = xin - X0, y0 = yin - Y0, z0 = zin - Z0;
    let i1, j1, k1, i2, j2, k2;
    if (x0 >= y0) {
      if (y0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=1;k2=0; }
      else if (x0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=0;k2=1; }
      else { i1=0;j1=0;k1=1;i2=1;j2=0;k2=1; }
    } else {
      if (y0 < z0) { i1=0;j1=0;k1=1;i2=0;j2=1;k2=1; }
      else if (x0 < z0) { i1=0;j1=1;k1=0;i2=0;j2=1;k2=1; }
      else { i1=0;j1=1;k1=0;i2=1;j2=1;k2=0; }
    }
    const x1 = x0 - i1 + G3, y1 = y0 - j1 + G3, z1 = z0 - k1 + G3;
    const x2 = x0 - i2 + 2*G3, y2 = y0 - j2 + 2*G3, z2 = z0 - k2 + 2*G3;
    const x3 = x0 - 1 + 3*G3, y3 = y0 - 1 + 3*G3, z3 = z0 - 1 + 3*G3;
    const ii = i & 255, jj = j & 255, kk = k & 255;
    let t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
    if (t0 < 0) n0 = 0;
    else { t0 *= t0; const gi = permMod12[ii+perm[jj+perm[kk]]]; n0 = t0*t0*(grad3[gi][0]*x0+grad3[gi][1]*y0+grad3[gi][2]*z0); }
    let t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
    if (t1 < 0) n1 = 0;
    else { t1 *= t1; const gi = permMod12[ii+i1+perm[jj+j1+perm[kk+k1]]]; n1 = t1*t1*(grad3[gi][0]*x1+grad3[gi][1]*y1+grad3[gi][2]*z1); }
    let t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
    if (t2 < 0) n2 = 0;
    else { t2 *= t2; const gi = permMod12[ii+i2+perm[jj+j2+perm[kk+k2]]]; n2 = t2*t2*(grad3[gi][0]*x2+grad3[gi][1]*y2+grad3[gi][2]*z2); }
    let t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
    if (t3 < 0) n3 = 0;
    else { t3 *= t3; const gi = permMod12[ii+1+perm[jj+1+perm[kk+1]]]; n3 = t3*t3*(grad3[gi][0]*x3+grad3[gi][1]*y3+grad3[gi][2]*z3); }
    return 32 * (n0 + n1 + n2 + n3);
  };

  return SimplexNoise;
})();

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// Flow Field Renderer
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
(function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const noise = new SimplexNoise(42);
  const dpr = window.devicePixelRatio || 1;

  let W, H;

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // Fill with background on resize to avoid flash
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, W, H);
  }

  window.addEventListener('resize', resize);
  resize();

  // \u2500\u2500 Mouse tracking \u2500\u2500
  const mouse = { x: -9999, y: -9999, active: false };
  window.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });
  window.addEventListener('mouseleave', function() {
    mouse.active = false;
  });

  // \u2500\u2500 Color palette \u2500\u2500
  // Warm tones: amber, gold, coral, with variations
  const palette = [
    { r: 200, g: 149, b: 108 }, // amber  #c8956c
    { r: 212, g: 165, b: 116 }, // gold   #d4a574
    { r: 224, g: 120, b: 80  }, // coral  #e07850
    { r: 190, g: 130, b: 90  }, // dark amber
    { r: 230, g: 180, b: 140 }, // light gold
    { r: 210, g: 100, b: 70  }, // deep coral
    { r: 180, g: 160, b: 120 }, // muted gold
  ];

  function lerpColor(a, b, t) {
    return {
      r: a.r + (b.r - a.r) * t,
      g: a.g + (b.g - a.g) * t,
      b: a.b + (b.b - a.b) * t
    };
  }

  function getColor(noiseVal) {
    // Map noise [-1,1] to palette index
    const t = (noiseVal + 1) * 0.5; // 0..1
    const idx = t * (palette.length - 1);
    const i = Math.floor(idx);
    const f = idx - i;
    const a = palette[Math.min(i, palette.length - 1)];
    const b = palette[Math.min(i + 1, palette.length - 1)];
    return lerpColor(a, b, f);
  }

  // \u2500\u2500 Particles \u2500\u2500
  const PARTICLE_COUNT = 2500;
  let NOISE_SCALE = 0.0025;
  let SPEED = 1.2;
  const MOUSE_RADIUS = 150;
  const MOUSE_FORCE = 2.5;

  const particles = [];

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      speed: 0.4 + Math.random() * 1.0,
      alpha: 0.15 + Math.random() * 0.55,
      size: 0.5 + Math.random() * 1.5
    };
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(createParticle());
  }

  // \u2500\u2500 Animation \u2500\u2500
  let time = 0;

  function draw() {
    // Fade previous frame with dark overlay \u2014 creates trailing effect
    ctx.fillStyle = 'rgba(10, 10, 10, 0.03)';
    ctx.fillRect(0, 0, W, H);

    time += 0.0008;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particles[i];

      // Sample noise field at particle position with time evolution
      const nx = p.x * NOISE_SCALE;
      const ny = p.y * NOISE_SCALE;
      const angle = noise.noise3D(nx, ny, time) * Math.PI * 2;

      // Secondary noise for color variation
      const colorNoise = noise.noise3D(nx * 1.5 + 100, ny * 1.5 + 100, time * 0.5);

      // Velocity from flow field
      let vx = Math.cos(angle) * p.speed * SPEED;
      let vy = Math.sin(angle) * p.speed * SPEED;

      // Mouse interaction \u2014 gentle push away
      if (mouse.active) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
          vx += (dx / dist) * force;
          vy += (dy / dist) * force;
        }
      }

      // Store previous position for line drawing
      const px = p.x;
      const py = p.y;

      // Update position
      p.x += vx;
      p.y += vy;

      // Draw particle trail segment
      const color = getColor(colorNoise);
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(p.x, p.y);
      ctx.strokeStyle = 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + p.alpha + ')';
      ctx.lineWidth = p.size;
      ctx.stroke();

      // Respawn if offscreen
      if (p.x < -20 || p.x > W + 20 || p.y < -20 || p.y > H + 20) {
        p.x = Math.random() * W;
        p.y = Math.random() * H;
      }
    }

    requestAnimationFrame(draw);
  }

  // Initial fill
  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, W, H);

  requestAnimationFrame(draw);

  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'param') {
      switch (e.data.name) {
        case 'SPEED': SPEED = e.data.value; break;
        case 'NOISE_SCALE': NOISE_SCALE = e.data.value; break;
      }
    }
  });
})();
<\/script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"216c03e5eb1b42998a91f716785010f9","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"><\/script>
</body>
</html>
`});var ou,su=W(()=>{ou=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aegis Security - Remixed Bento</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Mono&display=swap" rel="stylesheet">
</head>
<body class="bg-[#111111] text-black antialiased min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-x-hidden selection:bg-yellow-300 selection:text-black" style="font-family: 'Space Mono', monospace;">

    <!-- Bento Grid Container -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-5xl mx-auto min-h-[85vh] py-8">
        
        <!-- Card 1: Grainy / Light (Black Globe) -->
        <article class="col-span-1 relative w-full h-[500px] md:h-auto min-h-[450px] rounded-[2rem] flex flex-col justify-between p-8 overflow-hidden shadow-2xl border border-transparent" style="background: linear-gradient(#f4f4f0, #f4f4f0) padding-box, linear-gradient(135deg, #ffffff 0%, #d1d5db 100%) border-box;">
            <!-- Noise Overlay -->
            <div class="absolute inset-0 z-10 pointer-events-none opacity-[0.15]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E'); mix-blend-mode: multiply;"></div>
            
            <!-- WebGL Background -->
            <div class="absolute inset-0 z-0 top-1/4">
                <canvas id="webgl-lines" class="w-full h-full opacity-60"></canvas>
            </div>

            <!-- Header -->
            <header class="relative z-20 flex justify-between items-center text-sm tracking-tight font-normal">
                <div class="flex items-center gap-1.5">
                    <iconify-icon icon="solar:shield-network-linear" width="20" height="20" style="stroke-width: 1.5;"></iconify-icon>
                    <span>aegis</span>
                </div>
                <span class="text-xs opacity-50 uppercase tracking-widest">Sector.01</span>
            </header>

            <!-- Main Content -->
            <main class="relative z-20 mt-auto">
                <h2 class="text-3xl md:text-4xl tracking-tight leading-[1.1] mb-4 masked-reveal">
                    Absolute stealth.<br>Zero presence.
                </h2>
                <p class="text-xs leading-relaxed font-sans max-w-[220px] text-black/70 masked-reveal" style="font-family: 'Inter', sans-serif;">
                    Your network footprint.<br>Entirely eradicated.
                </p>
            </main>
        </article>

        <!-- Card 2: Yellow Grid + Aura Asset Image -->
        <article class="col-span-1 relative w-full h-[500px] md:h-auto min-h-[450px] rounded-[2rem] flex flex-col justify-between p-8 overflow-hidden shadow-2xl border border-transparent" style="background: linear-gradient(#FDE047, #FDE047) padding-box, linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(202,138,4,0.4) 100%) border-box;">
            
            <!-- Aura Asset Image Background -->
            <div class="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724142aa-44a6-48d3-9cf3-761e00d05b78_1600w.jpg" class="w-full h-full object-cover" alt="Futuristic Deconstructed Pyramid">
            </div>

            <!-- Grid Background Overlay -->
            <div class="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style="background-image: linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px); background-size: 1.5rem 1.5rem;"></div>

            <!-- Header -->
            <header class="relative z-20 flex justify-between items-center text-sm tracking-tight font-normal">
                <div class="flex items-center gap-1.5">
                    <iconify-icon icon="solar:shield-network-linear" width="20" height="20" style="stroke-width: 1.5;"></iconify-icon>
                    <span>aegis</span>
                </div>
                <span class="text-xs opacity-50 uppercase tracking-widest">Sector.02</span>
            </header>

            <!-- Main Content -->
            <main class="relative z-20 mt-auto">
                <h2 class="text-3xl md:text-4xl tracking-tight leading-[1.1] masked-reveal">
                    Adaptive shields.<br>Total autonomy.
                </h2>
            </main>
        </article>

        <!-- Card 3: Black Halftone -->
        <article class="col-span-1 md:col-span-2 relative w-full h-[450px] md:h-[350px] rounded-[2rem] flex flex-col md:flex-row justify-between p-8 overflow-hidden text-white shadow-2xl border border-transparent" style="font-family: 'Inter', sans-serif; background: linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%) border-box;">
            
            <!-- WebGL Halftone Background -->
            <div class="absolute inset-0 z-0 md:left-1/3 pointer-events-none">
                <canvas id="webgl-halftone" class="w-full h-full"></canvas>
            </div>

            <!-- Header (Left on desktop) -->
            <header class="relative z-20 flex md:flex-col justify-between md:justify-start items-center md:items-start text-sm tracking-tight font-normal text-white/90 gap-4" style="font-family: 'Space Mono', monospace;">
                <div class="flex items-center gap-1.5">
                    <iconify-icon icon="solar:shield-network-linear" width="20" height="20" class="text-yellow-400" style="stroke-width: 1.5;"></iconify-icon>
                    <span>aegis</span>
                </div>
                <span class="text-xs opacity-50 uppercase tracking-widest">Sector.03</span>
            </header>

            <!-- Main Content (Right on desktop) -->
            <main class="relative z-20 mt-auto md:mt-0 md:self-end md:text-right max-w-md w-full">
                <h2 class="text-4xl md:text-5xl tracking-tight leading-[1.1] font-normal mb-4 md:mb-6 uppercase masked-reveal">
                    Quantum<br>Core.
                </h2>
                <p class="text-xs leading-relaxed text-white/70 md:ml-auto md:max-w-[240px] masked-reveal" style="font-family: 'Space Mono', monospace;">
                    Next-gen cryptography<br>for modern infrastructure.
                </p>
            </main>
        </article>

    </div>

    <script>
        // GSAP ScrollTrigger Setup
        gsap.registerPlugin(ScrollTrigger);

        // Utility: Split text into words and wrap for masking
        function wrapWords(element) {
            const text = element.innerHTML;
            const words = text.split(/(<br>|\\s+)/).filter(Boolean);
            element.innerHTML = '';
            
            words.forEach(word => {
                if (word === '<br>') {
                    element.appendChild(document.createElement('br'));
                    return;
                }
                if (word.trim() === '') {
                    element.appendChild(document.createTextNode(' '));
                    return;
                }

                const outerSpan = document.createElement('span');
                outerSpan.style.display = 'inline-block';
                outerSpan.style.overflow = 'hidden';
                outerSpan.style.verticalAlign = 'bottom';
                outerSpan.style.paddingBottom = '0.1em'; // Prevent clipping on descenders

                const innerSpan = document.createElement('span');
                innerSpan.style.display = 'inline-block';
                innerSpan.innerHTML = word;
                innerSpan.classList.add('reveal-target');
                innerSpan.style.transform = 'translateY(110%)';
                innerSpan.style.willChange = 'transform';

                outerSpan.appendChild(innerSpan);
                element.appendChild(outerSpan);
            });
        }

        // Apply masking structure and animation
        document.querySelectorAll('.masked-reveal').forEach(el => {
            wrapWords(el);
            
            gsap.to(el.querySelectorAll('.reveal-target'), {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                },
                y: "0%",
                duration: 0.85,
                ease: "power4.out",
                stagger: 0.04
            });
        });

        /* --- WebGL Section 1: Abstract Lines --- */
        const initLinesWebGL = () => {
            const canvas = document.getElementById('webgl-lines');
            if(!canvas) return;
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            
            const resize = () => {
                const parent = canvas.parentElement;
                const width = parent.clientWidth;
                const height = parent.clientHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            };
            window.addEventListener('resize', resize);
            resize();

            camera.position.z = 4.5;

            const group = new THREE.Group();
            scene.add(group);

            const material = new THREE.LineBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.85 }); 
            const particlesCount = 200;
            
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particlesCount * 3);
            
            for(let i = 0; i < particlesCount * 3; i+=3) {
                const r = 2.5;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos((Math.random() * 2) - 1);
                
                positions[i] = r * Math.sin(phi) * Math.cos(theta);
                positions[i+1] = r * Math.sin(phi) * Math.sin(theta);
                positions[i+2] = r * Math.cos(phi);
            }
            
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            
            const index = [];
            for (let i = 0; i < particlesCount; i++) {
                for (let j = i + 1; j < particlesCount; j++) {
                    const dx = positions[i*3] - positions[j*3];
                    const dy = positions[i*3+1] - positions[j*3+1];
                    const dz = positions[i*3+2] - positions[j*3+2];
                    const distSq = dx*dx + dy*dy + dz*dz;
                    if (distSq < 1.2) { 
                        index.push(i, j);
                    }
                }
            }
            geometry.setIndex(index);
            
            const lines = new THREE.LineSegments(geometry, material);
            group.add(lines);

            const animate = () => {
                requestAnimationFrame(animate);
                group.rotation.y += 0.002;
                group.rotation.x += 0.001;
                renderer.render(scene, camera);
            };
            animate();
        };

        /* --- WebGL Section 3: Animated Halftone --- */
        const initHalftoneWebGL = () => {
            const canvas = document.getElementById('webgl-halftone');
            if(!canvas) return;
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
            renderer.setClearColor(0x0A0A0A, 1);
            const scene = new THREE.Scene();
            const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
            
            const resize = () => {
                const parent = canvas.parentElement;
                const width = Math.max(1, (parent && parent.clientWidth) || window.innerWidth || canvas.clientWidth || 1);
                const height = Math.max(1, (parent && parent.clientHeight) || window.innerHeight || canvas.clientHeight || 1);
                renderer.setSize(width, height, false);
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                const aspect = width / height;
                camera.left = -aspect;
                camera.right = aspect;
                camera.bottom = -1;
                camera.top = 1;
                camera.updateProjectionMatrix();
            };
            window.addEventListener('resize', resize);
            resize();
            camera.position.z = 1;

            const gridSize = 20;
            const geometry = new THREE.BufferGeometry();
            const positions = [];
            const scales = [];

            for (let x = -gridSize; x <= gridSize; x++) {
                for (let y = -gridSize; y <= gridSize; y++) {
                    positions.push(x * 0.15, y * 0.15, 0);
                    scales.push(1); 
                }
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            geometry.setAttribute('scale', new THREE.Float32BufferAttribute(scales, 1));

            const material = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 0 },
                    color1: { value: new THREE.Color(0xFBBF24) }, 
                    color2: { value: new THREE.Color(0xFFFFFF) }
                },
                vertexShader: \`
                    attribute float scale;
                    varying vec2 vUv;
                    varying float vScale;
                    uniform float time;
                    
                    void main() {
                        vUv = position.xy;
                        float dist = length(position.xy);
                        float animatedScale = scale * (sin(dist * 6.0 - time * 2.5) * 0.5 + 0.5);
                        vScale = animatedScale;
                        
                        gl_PointSize = animatedScale * 5.0; 
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                \`,
                fragmentShader: \`
                    uniform vec3 color1;
                    uniform vec3 color2;
                    varying vec2 vUv;
                    varying float vScale;
                    
                    void main() {
                        vec2 coord = gl_PointCoord - vec2(0.5);
                        if(length(coord) > 0.5) discard;
                        
                        vec3 finalColor = mix(color2, color1, (vUv.y + 1.0) * 0.5);
                        gl_FragColor = vec4(finalColor, vScale * 0.9);
                    }
                \`,
                transparent: true
            });

            const points = new THREE.Points(geometry, material);
            scene.add(points);

            const clock = new THREE.Clock();
            const animate = () => {
                requestAnimationFrame(animate);
                material.uniforms.time.value = clock.getElapsedTime();
                renderer.render(scene, camera);
            };
            animate();
        };

        // Initialize WebGL instances
        initLinesWebGL();
        initHalftoneWebGL();
    <\/script>
</body>
</html>`});var Ri,lu=W(()=>{Ri=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Network Diagnostics</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP & ScrollTrigger for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=JetBrains+Mono:wght@200;300;400&display=swap" rel="stylesheet">
    <style>
        /* Essential mask utility for inner gradient borders */
        .mask-border {
            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: destination-out;
            mask-composite: exclude;
        }
    </style>
</head>
<body class="bg-[#020804] text-white/90 antialiased min-h-screen flex items-center justify-center p-6 md:p-12 selection:bg-[#34d399]/20 font-sans relative overflow-hidden">

    <!-- Aura Asset Image Background Layer -->
    <div class="absolute inset-0 z-0 opacity-20 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg')] bg-cover bg-center pointer-events-none mix-blend-screen"></div>

    <!-- WebGL-style Lines & Particles Background -->
    <canvas id="bg-waves" class="absolute inset-0 z-0 pointer-events-none opacity-40"></canvas>

    <main id="main-container" class="max-w-7xl w-full relative bg-white/[0.04] p-px z-10 backdrop-blur-sm shadow-2xl shadow-[#34d399]/5 rounded-sm">
        
        <div id="flashlight" class="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 pointer-events-none" style="background: radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(52,211,153,0.08), transparent 40%);"></div>

        <!-- Corner Accents -->
        <div class="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 border border-[#34d399]/30 bg-[#020804] z-30"></div>
        <div class="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 border border-[#34d399]/30 bg-[#020804] z-30"></div>
        <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 border border-[#34d399]/30 bg-[#020804] z-30"></div>
        <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 border border-[#34d399]/30 bg-[#020804] z-30"></div>

        <!-- Horizontal Shooting Line -->
        <div class="hidden md:block absolute -top-px left-0 right-0 h-px overflow-hidden z-20 pointer-events-none">
            <div id="shoot-h" class="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-transparent via-[#34d399]/80 to-transparent"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-y-px md:gap-x-px relative z-10">
            
            <article class="relative flex flex-col py-12 md:p-12 bg-[#020804]/90 backdrop-blur-md">
                <!-- Border Gradient Overlay -->
                <div class="absolute inset-0 border border-transparent bg-[linear-gradient(to_bottom,rgba(52,211,153,0.35),transparent)] mask-border pointer-events-none z-20"></div>

                <header class="text-xs text-white/40 mb-16 uppercase tracking-widest font-mono flex items-center gap-3 font-extralight">
                    <iconify-icon icon="solar:cpu-linear" stroke-width="1.5" class="text-sm text-[#34d399] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"></iconify-icon>
                    CORE-X
                </header>
                <div class="flex-grow flex items-center justify-center mb-16 relative h-56 w-full">
                    <canvas id="canvas-layers" class="absolute inset-0 w-full h-full" style="touch-action: none;"></canvas>
                </div>
                <div>
                    <h3 class="text-lg font-extralight tracking-tight mb-3 text-white/90 flex items-center">
                        <span class="typewriter" data-text="Neural Synchrony"></span><span class="animate-pulse inline-block w-1 h-4 bg-[#34d399]/80 ml-2 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                    </h3>
                    <p class="text-sm text-white/40 leading-relaxed font-extralight reveal-text">Optimized for zero-latency cognitive routing, maintaining absolute parity across decentralized processing nodes.</p>
                </div>
            </article>

            <article class="relative flex flex-col py-12 md:p-12 bg-[#020804]/90 backdrop-blur-md">
                <!-- Border Gradient Overlay -->
                <div class="absolute inset-0 border border-transparent bg-[linear-gradient(to_bottom,rgba(52,211,153,0.35),transparent)] mask-border pointer-events-none z-20"></div>
                
                <div class="hidden md:block absolute top-0 bottom-0 -left-px w-px overflow-hidden z-20 pointer-events-none">
                    <div id="shoot1" class="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-[#34d399]/70 to-transparent"></div>
                </div>
                
                <header class="text-xs text-white/40 mb-16 uppercase tracking-widest font-mono flex items-center gap-3 font-extralight">
                    <iconify-icon icon="solar:server-square-linear" stroke-width="1.5" class="text-sm text-[#34d399] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"></iconify-icon>
                    LINK-Y
                </header>
                <div class="flex-grow flex items-center justify-center mb-16 relative h-56 w-full">
                    <canvas id="canvas-nodes" class="absolute inset-0 w-full h-full" style="touch-action: none;"></canvas>
                </div>
                <div>
                    <h3 class="text-lg font-extralight tracking-tight mb-3 text-white/90 flex items-center">
                        <span class="typewriter" data-text="Fluid Topologies"></span><span class="animate-pulse inline-block w-1 h-4 bg-[#34d399]/80 ml-2 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                    </h3>
                    <p class="text-sm text-white/40 leading-relaxed font-extralight reveal-text">Self-healing network architectures that dynamically adjust vectors to circumvent bottlenecks and systemic anomalies.</p>
                </div>
            </article>

            <article class="relative flex flex-col py-12 md:p-12 bg-[#020804]/90 backdrop-blur-md">
                <!-- Border Gradient Overlay -->
                <div class="absolute inset-0 border border-transparent bg-[linear-gradient(to_bottom,rgba(52,211,153,0.35),transparent)] mask-border pointer-events-none z-20"></div>

                <div class="hidden md:block absolute top-0 bottom-0 -left-px w-px overflow-hidden z-20 pointer-events-none">
                    <div id="shoot2" class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#34d399]/60 to-transparent"></div>
                </div>
                <div class="hidden md:block absolute top-0 bottom-0 -right-px w-px overflow-hidden z-20 pointer-events-none">
                    <div id="shoot3" class="absolute top-0 left-0 w-full h-56 bg-gradient-to-b from-transparent via-[#34d399]/70 to-transparent"></div>
                </div>

                <header class="text-xs text-white/40 mb-16 uppercase tracking-widest font-mono flex items-center gap-3 font-extralight">
                    <iconify-icon icon="solar:network-linear" stroke-width="1.5" class="text-sm text-[#34d399] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"></iconify-icon>
                    GRID-Z
                </header>
                <div class="flex-grow flex items-center justify-center mb-16 relative h-56 w-full">
                    <canvas id="canvas-flow" class="absolute inset-0 w-full h-full" style="touch-action: none;"></canvas>
                </div>
                <div>
                    <h3 class="text-lg font-extralight tracking-tight mb-3 text-white/90 flex items-center">
                        <span class="typewriter" data-text="Elastic Matrices"></span><span class="animate-pulse inline-block w-1 h-4 bg-[#34d399]/80 ml-2 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                    </h3>
                    <p class="text-sm text-white/40 leading-relaxed font-extralight reveal-text">Responsive structural frameworks that instantly allocate computational mass during spikes and retract to preserve efficiency.</p>
                </div>
            </article>

        </div>
    </main>

    <script>
        // WebGL-style Background (Lines & Particles)
        const bgCanvas = document.getElementById('bg-waves');
        const bgCtx = bgCanvas.getContext('2d', { alpha: true });
        let bw, bh, bgT = 0;
        const resizeBg = () => {
            bw = window.innerWidth; bh = window.innerHeight;
            bgCanvas.width = bw; bgCanvas.height = bh;
        };
        window.addEventListener('resize', resizeBg);
        resizeBg();

        const drawBg = () => {
            bgT += 0.012;
            bgCtx.clearRect(0, 0, bw, bh);
            bgCtx.save();
            bgCtx.translate(bw / 2, bh / 2 + 150);
            
            const cols = 32, rows = 22, sp = 65;
            bgCtx.lineWidth = 1;
            
            for(let z = 0; z < rows; z++) {
                for(let x = 0; x < cols; x++) {
                    const px = (x - cols/2) * sp;
                    const pz = z * sp;
                    const scale = 800 / (800 + pz);
                    const sx = px * scale;
                    const y = Math.sin(x * 0.3 + bgT) * Math.cos(z * 0.3 + bgT) * 60;
                    const sy = (y + 50) * scale - 200;

                    bgCtx.fillStyle = \`rgba(52,211,153, \${0.7 * scale})\`;
                    bgCtx.beginPath();
                    bgCtx.arc(sx, sy, 1.2 * scale, 0, Math.PI*2);
                    bgCtx.fill();

                    if (x > 0) {
                        const pxL = (x - 1 - cols/2) * sp;
                        const sxL = pxL * scale;
                        const yL = Math.sin((x - 1) * 0.3 + bgT) * Math.cos(z * 0.3 + bgT) * 60;
                        const syL = (yL + 50) * scale - 200;
                        bgCtx.strokeStyle = \`rgba(52,211,153, \${0.12 * scale})\`;
                        bgCtx.beginPath();
                        bgCtx.moveTo(sx, sy); bgCtx.lineTo(sxL, syL);
                        bgCtx.stroke();
                    }
                    if (z > 0) {
                        const pzU = (z - 1) * sp;
                        const scaleU = 800 / (800 + pzU);
                        const sxU = px * scaleU;
                        const yU = Math.sin(x * 0.3 + bgT) * Math.cos((z - 1) * 0.3 + bgT) * 60;
                        const syU = (yU + 50) * scaleU - 200;
                        bgCtx.strokeStyle = \`rgba(52,211,153, \${0.12 * scale})\`;
                        bgCtx.beginPath();
                        bgCtx.moveTo(sx, sy); bgCtx.lineTo(sxU, syU);
                        bgCtx.stroke();
                    }
                }
            }
            bgCtx.restore();
            requestAnimationFrame(drawBg);
        };
        drawBg();

        // Interactive & Shooting Lines
        const mainEl = document.getElementById('main-container');
        const flash = document.getElementById('flashlight');
        const s1 = document.getElementById('shoot1'), s2 = document.getElementById('shoot2');
        const s3 = document.getElementById('shoot3'), sh = document.getElementById('shoot-h');
        let pos1 = -200, pos2 = -400, pos3 = -300, posH = -300;

        mainEl.addEventListener('mousemove', (e) => {
            const rect = mainEl.getBoundingClientRect();
            flash.style.setProperty('--x', \`\${e.clientX - rect.left}px\`);
            flash.style.setProperty('--y', \`\${e.clientY - rect.top}px\`);
            flash.style.opacity = '1';
        });
        mainEl.addEventListener('mouseleave', () => flash.style.opacity = '0');

        const animateShoots = () => {
            const h = mainEl.offsetHeight || 1000, w = mainEl.offsetWidth || 1200;
            pos1 += 2.5; pos2 += 1.8; pos3 += 3; posH += 3.5;
            if (pos1 > h) pos1 = -200;
            if (pos2 > h) pos2 = -200;
            if (pos3 > h) pos3 = -200;
            if (posH > w) posH = -300;
            if (s1) s1.style.transform = \`translateY(\${pos1}px)\`;
            if (s2) s2.style.transform = \`translateY(\${pos2}px)\`;
            if (s3) s3.style.transform = \`translateY(\${pos3}px)\`;
            if (sh) sh.style.transform = \`translateX(\${posH}px)\`;
            requestAnimationFrame(animateShoots);
        };
        animateShoots();

        // Typewriter Effect
        document.querySelectorAll('.typewriter').forEach(el => {
            const text = el.getAttribute('data-text');
            let i = 0, isDeleting = false;
            const type = () => {
                i += isDeleting ? -1 : 1;
                el.textContent = text.substring(0, i);
                let delay = isDeleting ? 30 : 80;
                if (!isDeleting && i === text.length) { delay = 4000; isDeleting = true; }
                else if (isDeleting && i === 0) { delay = 1500; isDeleting = false; }
                setTimeout(type, delay);
            };
            type();
        });

        // GSAP Masked Staggered Word Reveal 
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.reveal-text').forEach((el) => {
            const words = el.innerText.split(' ');
            el.innerHTML = '';
            words.forEach(word => {
                const wrapper = document.createElement('span');
                wrapper.className = 'inline-block overflow-hidden mr-[0.25em] align-bottom leading-tight';
                const inner = document.createElement('span');
                inner.className = 'inline-block translate-y-full will-change-transform';
                inner.innerText = word;
                wrapper.appendChild(inner);
                el.appendChild(wrapper);
            });

            gsap.to(el.querySelectorAll('.will-change-transform'), {
                y: 0,
                ease: "power4.out",
                duration: 0.8,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: el,
                    start: "top 95%",
                }
            });
        });

        // 3D Canvas Utilities
        const projectIso = (x, y, z) => {
            const angle = Math.PI / 6; 
            return { x: (x - z) * Math.cos(angle), y: y + (x + z) * Math.sin(angle) };
        };

        const setupCanvas = (id, renderFn) => {
            const canvas = document.getElementById(id);
            const ctx = canvas.getContext('2d', { alpha: true });
            let w, h, time = 0;
            const resize = () => {
                const rect = canvas.parentElement.getBoundingClientRect();
                w = rect.width; h = rect.height;
                const dpr = window.devicePixelRatio || 1;
                canvas.width = w * dpr; canvas.height = h * dpr;
                ctx.scale(dpr, dpr);
            };
            window.addEventListener('resize', resize);
            resize();
            const loop = () => {
                time += 0.015;
                ctx.clearRect(0, 0, w, h);
                ctx.save();
                ctx.translate(w / 2, h / 2 + 5);
                renderFn(ctx, time);
                ctx.restore();
                requestAnimationFrame(loop);
            };
            loop();
        };

        // Card 1: Fixed Cropping
        setupCanvas('canvas-layers', (ctx, t) => {
            const size = 42, layers = 5, gap = 20;
            ctx.lineWidth = 1;
            for (let i = layers - 1; i >= 0; i--) {
                const yOff = i * gap - (layers * gap) / 2 + Math.sin(t + i * 0.4) * 4;
                const p1 = projectIso(-size, yOff, -size), p2 = projectIso(size, yOff, -size);
                const p3 = projectIso(size, yOff, size), p4 = projectIso(-size, yOff, size);

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
                ctx.lineTo(p3.x, p3.y); ctx.lineTo(p4.x, p4.y); ctx.closePath();
                
                ctx.fillStyle = '#020804'; ctx.fill();
                ctx.strokeStyle = i === 0 ? 'rgba(52,211,153,0.8)' : 'rgba(52,211,153,0.15)';
                ctx.stroke();

                if (i === 0) {
                    ctx.save();
                    const center = projectIso(0, yOff, 0);
                    ctx.translate(center.x, center.y); ctx.scale(1, 0.5);
                    const sqSize = size * 0.55;
                    ctx.beginPath(); ctx.rect(-sqSize, -sqSize, sqSize * 2, sqSize * 2);
                    ctx.strokeStyle = 'rgba(52,211,153,0.4)'; ctx.stroke();
                    ctx.clip();
                    for(let j = -sqSize; j < sqSize; j += 4) {
                        ctx.beginPath(); ctx.moveTo(-sqSize, j); ctx.lineTo(sqSize, j);
                        ctx.strokeStyle = 'rgba(52,211,153,0.2)'; ctx.stroke();
                    }
                    ctx.restore();
                }
                
                if (i < layers - 1) {
                    const nextY = (i+1) * gap - (layers * gap) / 2 + Math.sin(t + (i+1) * 0.4) * 4;
                    const p1Next = projectIso(-size, nextY, -size), p3Next = projectIso(size, nextY, size);
                    ctx.beginPath(); ctx.setLineDash([2, 2]);
                    ctx.moveTo(p1.x, p1.y); ctx.lineTo(p1Next.x, p1Next.y);
                    ctx.moveTo(p3.x, p3.y); ctx.lineTo(p3Next.x, p3Next.y);
                    ctx.strokeStyle = 'rgba(52,211,153,0.1)'; ctx.stroke();
                    ctx.setLineDash([]);
                }
            }
        });

        // Card 2
        const drawCube = (ctx, x, y, z, s, colorStr) => {
            const pts = [
                projectIso(x-s, y-s, z-s), projectIso(x+s, y-s, z-s), projectIso(x+s, y-s, z+s), projectIso(x-s, y-s, z+s),
                projectIso(x-s, y+s, z-s), projectIso(x+s, y+s, z-s), projectIso(x+s, y+s, z+s), projectIso(x-s, y+s, z+s)
            ];
            ctx.strokeStyle = colorStr; ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(pts[0].x, pts[0].y); ctx.lineTo(pts[1].x, pts[1].y); ctx.lineTo(pts[2].x, pts[2].y); ctx.lineTo(pts[3].x, pts[3].y); ctx.closePath();
            ctx.moveTo(pts[4].x, pts[4].y); ctx.lineTo(pts[5].x, pts[5].y); ctx.lineTo(pts[6].x, pts[6].y); ctx.lineTo(pts[7].x, pts[7].y); ctx.closePath();
            ctx.moveTo(pts[0].x, pts[0].y); ctx.lineTo(pts[4].x, pts[4].y);
            ctx.moveTo(pts[1].x, pts[1].y); ctx.lineTo(pts[5].x, pts[5].y);
            ctx.moveTo(pts[2].x, pts[2].y); ctx.lineTo(pts[6].x, pts[6].y);
            ctx.moveTo(pts[3].x, pts[3].y); ctx.lineTo(pts[7].x, pts[7].y);
            ctx.stroke();
        };

        setupCanvas('canvas-nodes', (ctx, t) => {
            const s = 22, float = Math.sin(t) * 4;
            drawCube(ctx, -35, -float, -35, s, 'rgba(52,211,153,0.15)');
            drawCube(ctx, 35, float, -35, s, 'rgba(52,211,153,0.15)');
            drawCube(ctx, -35, float, 35, s, 'rgba(52,211,153,0.15)');
            drawCube(ctx, 35, -float, 35, s, 'rgba(52,211,153,0.15)');
            drawCube(ctx, 0, Math.cos(t)*6 - 15, 0, s*0.9, 'rgba(52,211,153,0.6)'); 
        });

        // Card 3
        setupCanvas('canvas-flow', (ctx, t) => {
            const size = 65, segments = 22, step = (size * 2) / segments;
            ctx.lineWidth = 1;
            const getH = (x, z) => {
                const dist = Math.sqrt(x*x + z*z);
                const peak = Math.max(0, 45 - dist * 1.1);
                const wave = Math.sin(x*0.2 + t*1.5) * Math.cos(z*0.2 + t*1.5) * 5;
                return -peak - wave + 15;
            };

            for (let z = -size; z < size; z += step) {
                for (let x = -size; x < size; x += step) {
                    const y1 = getH(x, z), y2 = getH(x + step, z);
                    const y3 = getH(x + step, z + step), y4 = getH(x, z + step);
                    const p1 = projectIso(x, y1, z), p2 = projectIso(x + step, y2, z);
                    const p3 = projectIso(x + step, y3, z + step), p4 = projectIso(x, y4, z + step);

                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
                    ctx.lineTo(p3.x, p3.y); ctx.lineTo(p4.x, p4.y); ctx.closePath();
                    ctx.fillStyle = '#020804'; ctx.fill();

                    const heightRatio = Math.max(0, (-y1) / 30);
                    const alpha = 0.05 + heightRatio * 0.4;
                    ctx.strokeStyle = heightRatio > 0.6 ? \`rgba(52,211,153,\${alpha + 0.3})\` : \`rgba(52,211,153,\${alpha + 0.05})\`;
                    ctx.stroke();
                }
            }
        });
    <\/script>
</body>
</html>`});var cu,du=W(()=>{cu=`<!doctype html>
<html lang="en" data-autofocus-guard-installed="1"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vanguard Security - Intelligence</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
<style>*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/* ! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com */*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:''}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0px}.top-0{top:0px}.z-0{z-index:0}.z-50{z-index:50}.z-10{z-index:10}.mx-4{margin-left:1rem;margin-right:1rem}.mx-auto{margin-left:auto;margin-right:auto}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mt-2{margin-top:0.5rem}.mt-auto{margin-top:auto}.flex{display:flex}.grid{display:grid}.h-1{height:0.25rem}.h-32{height:8rem}.h-\\[65vh\\]{height:65vh}.h-full{height:100%}.min-h-screen{min-height:100vh}.min-h-\\[500px\\]{min-height:500px}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-7xl{max-width:80rem}.max-w-\\[40px\\]{max-width:40px}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr))}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1\\.5{gap:0.375rem}.gap-2{gap:0.5rem}.gap-3{gap:0.75rem}.gap-6{gap:1.5rem}.gap-\\[2px\\]{gap:2px}.overflow-hidden{overflow:hidden}.rounded{border-radius:0.25rem}.rounded-md{border-radius:0.375rem}.rounded-sm{border-radius:0.125rem}.rounded-xl{border-radius:0.75rem}.border-b{border-bottom-width:1px}.border-white\\/5{border-color:rgb(255 255 255 / 0.05)}.bg-\\[\\#0a0a0a\\]{--tw-bg-opacity:1;background-color:rgb(10 10 10 / var(--tw-bg-opacity, 1))}.bg-\\[\\#0a0a0a\\]\\/80{background-color:rgb(10 10 10 / 0.8)}.bg-\\[\\#1a1a1a\\]{--tw-bg-opacity:1;background-color:rgb(26 26 26 / var(--tw-bg-opacity, 1))}.bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity, 1))}.bg-\\[\\#121212\\]{--tw-bg-opacity:1;background-color:rgb(18 18 18 / var(--tw-bg-opacity, 1))}.bg-blue-500\\/80{background-color:rgb(59 130 246 / 0.8)}.bg-purple-500\\/80{background-color:rgb(168 85 247 / 0.8)}.bg-slate-500{--tw-bg-opacity:1;background-color:rgb(100 116 139 / var(--tw-bg-opacity, 1))}.p-6{padding:1.5rem}.px-1\\.5{padding-left:0.375rem;padding-right:0.375rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-0\\.5{padding-top:0.125rem;padding-bottom:0.125rem}.py-1\\.5{padding-top:0.375rem;padding-bottom:0.375rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-12{padding-top:3rem;padding-bottom:3rem}.pt-16{padding-top:4rem}.pt-6{padding-top:1.5rem}.text-center{text-align:center}.font-sans{font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.text-base{font-size:1rem;line-height:1.5rem}.text-xs{font-size:0.75rem;line-height:1rem}.text-5xl{font-size:3rem;line-height:1}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.font-light{font-weight:300}.leading-relaxed{line-height:1.625}.leading-tight{line-height:1.25}.tracking-tight{letter-spacing:-0.025em}.tracking-wide{letter-spacing:0.025em}.text-slate-200{--tw-text-opacity:1;color:rgb(226 232 240 / var(--tw-text-opacity, 1))}.text-slate-300{--tw-text-opacity:1;color:rgb(203 213 225 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-slate-400{--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity, 1))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity, 1))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-80{opacity:0.8}.backdrop-blur-md{--tw-backdrop-blur:blur(12px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-colors{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-300{transition-duration:300ms}.selection\\:bg-blue-500\\/30 *::selection{background-color:rgb(59 130 246 / 0.3)}.selection\\:bg-blue-500\\/30::selection{background-color:rgb(59 130 246 / 0.3)}.before\\:absolute::before{content:var(--tw-content);position:absolute}.before\\:inset-0::before{content:var(--tw-content);inset:0px}.before\\:-z-10::before{content:var(--tw-content);z-index:-10}.before\\:rounded-md::before{content:var(--tw-content);border-radius:0.375rem}.before\\:rounded-xl::before{content:var(--tw-content);border-radius:0.75rem}.before\\:bg-gradient-to-b::before{content:var(--tw-content);background-image:linear-gradient(to bottom, var(--tw-gradient-stops))}.before\\:from-white\\/20::before{content:var(--tw-content);--tw-gradient-from:rgb(255 255 255 / 0.2) var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.before\\:from-white\\/15::before{content:var(--tw-content);--tw-gradient-from:rgb(255 255 255 / 0.15) var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.before\\:to-transparent::before{content:var(--tw-content);--tw-gradient-to:transparent var(--tw-gradient-to-position)}.before\\:p-\\[1px\\]::before{content:var(--tw-content);padding:1px}.before\\:transition-colors::before{content:var(--tw-content);transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.before\\:duration-500::before{content:var(--tw-content);transition-duration:500ms}.before\\:\\[mask-composite\\:exclude\\]::before{content:var(--tw-content);-webkit-mask-composite:xor;mask-composite:exclude}.before\\:\\[mask\\:linear-gradient\\(\\#fff_0_0\\)_content-box\\2c linear-gradient\\(\\#fff_0_0\\)\\]::before{content:var(--tw-content);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)}.hover\\:bg-\\[\\#222\\]:hover{--tw-bg-opacity:1;background-color:rgb(34 34 34 / var(--tw-bg-opacity, 1))}.hover\\:before\\:from-white\\/25:hover::before{content:var(--tw-content);--tw-gradient-from:rgb(255 255 255 / 0.25) var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.group:hover .group-hover\\:opacity-100{opacity:1}@media (min-width: 768px){.md\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.md\\:text-7xl{font-size:4.5rem;line-height:1}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width: 1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}.lg\\:text-8xl{font-size:6rem;line-height:1}}</style><meta name="disabled-font-classes" content="font-inter,font-roboto,font-poppins,font-playfair,font-merriweather,font-bricolage,font-work-sans,font-pt-serif,font-space-mono,font-cormorant,font-newsreader,font-dm-sans,font-oswald,font-geist-mono,font-space-grotesk,font-montserrat,font-quicksand,font-google-sans-flex,font-nunito,font-geist,font-jakarta,font-instrument-serif"><link id="all-fonts-link-font-manrope" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style></head>
<body class="bg-[#0a0a0a] text-slate-200 min-h-screen selection:bg-blue-500/30 antialiased font-sans">

    <!-- Header -->
    <header class="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div class="flex items-center gap-2">
            <span class="text-base text-white tracking-tight font-medium font-sans">Vanguard</span>
            <span class="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded tracking-wide font-sans">Security</span>
        </div>
        <button class="relative flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-[#222] transition-colors text-slate-300 text-xs px-3 py-1.5 rounded-md z-0 before:absolute before:inset-0 before:-z-10 before:rounded-md before:p-[1px] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor] font-sans">
            <iconify-icon icon="solar:alt-arrow-left-linear" stroke-width="1.5"></iconify-icon>
            Back to Portal
        </button>
    </header>

    <!-- Hero Section with Canvas Animation & Aura Background -->
    <section class="relative w-full h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-white/5 pt-16">
        <!-- Aura Abstract Asset Image Background -->
        <div class="absolute inset-0 z-0 opacity-20 mix-blend-screen bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_3840w.jpg')] bg-cover bg-center"></div>
        
        <!-- WebGL/Canvas Background -->
        <canvas id="particle-canvas" class="absolute inset-0 z-0 w-full h-full opacity-80" width="1519" height="715"></canvas>
        
        <!-- Hero Content -->
        <div class="relative z-10 text-center mx-4 max-w-4xl w-full">
            <h1 class="reveal-text text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-tight mb-6 font-manrope font-light">
                Autonomous Cyber<br>Immunity
            </h1>
            <p class="reveal-text text-lg md:text-xl lg:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-manrope font-light">
                Securing global infrastructure through AI-driven threat intelligence and proactive zero-day neutralization.
            </p>
        </div>
    </section>

    <!-- Content Grid Section -->
    <section class="max-w-7xl mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Card 1 -->
            <div class="relative bg-[#121212] rounded-xl p-6 h-full flex flex-col group z-0 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-white/15 hover:before:from-white/25 before:to-transparent before:transition-colors before:duration-500 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor]">
                <div class="mb-4">
                    <h3 class="reveal-text text-base text-white tracking-tight flex items-baseline gap-2 font-medium font-sans">
                        Sentinel Protocol <span class="text-xs text-slate-500 font-normal font-sans">(Threat Detection)</span>
                    </h3>
                    <p class="text-sm text-slate-400 mt-2 leading-relaxed font-normal font-sans">
                        Deep learning algorithms monitoring data streams to isolate vulnerabilities before they manifest.
                    </p>
                </div>
                
                <!-- Animated Dot Chart -->
                <div class="mt-auto pt-6 flex items-end gap-3 h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                    <!-- Bars -->
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="relative bg-[#121212] rounded-xl p-6 h-full flex flex-col group z-0 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-white/15 hover:before:from-white/25 before:to-transparent before:transition-colors before:duration-500 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor]">
                <div class="mb-4">
                    <h3 class="reveal-text text-base text-white tracking-tight flex items-baseline gap-2 font-medium font-sans">
                        Nexus Guardian <span class="text-xs text-slate-500 font-normal font-sans">(Node Security)</span>
                    </h3>
                    <p class="text-sm text-slate-400 mt-2 leading-relaxed font-normal font-sans">
                        Heuristic analysis tracking process execution and memory states to halt malicious payloads instantly.
                    </p>
                </div>
                
                <!-- Animated Dot Chart (Purple tint) -->
                <div class="mt-auto pt-6 flex items-end gap-3 h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="relative bg-[#121212] rounded-xl p-6 h-full flex flex-col group z-0 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-white/15 hover:before:from-white/25 before:to-transparent before:transition-colors before:duration-500 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor]">
                <div class="mb-4">
                    <h3 class="reveal-text text-base text-white tracking-tight flex items-baseline gap-2 font-medium font-sans">
                        Aether Monitor <span class="text-xs text-slate-500 font-normal font-sans">(Cloud Defense)</span>
                    </h3>
                    <p class="text-sm text-slate-400 mt-2 leading-relaxed font-normal font-sans">
                        Continuous validation of distributed environments and access controls to maintain absolute state integrity.
                    </p>
                </div>
                
                <!-- Animated Dot Chart (Blue tint) -->
                <div class="mt-auto pt-6 flex items-end gap-3 h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- Scripts -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            // Text Masked Reveal with GSAP Split Logic
            document.querySelectorAll('.reveal-text').forEach(el => {
                const html = el.innerHTML;
                const newHtml = html.split(/(<br\\s*\\/?>|\\s+)/).map(part => {
                    if (part.match(/<br/i)) return part;
                    if (part.trim() === '') return part; 
                    return \`<span style="display:inline-block; overflow:hidden; vertical-align:top;"><span class="reveal-word" style="display:inline-block; transform:translateY(100%); opacity:0;">\${part}</span></span>\`;
                }).join('');
                el.innerHTML = newHtml;
            });

            gsap.registerPlugin(ScrollTrigger);
            gsap.utils.toArray('.reveal-text').forEach(el => {
                gsap.to(el.querySelectorAll('.reveal-word'), {
                    y: '0%',
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.04,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%'
                    }
                });
            });

            // Chart Animation Logic
            setInterval(() => {
                document.querySelectorAll('.chart-col').forEach(col => {
                    const dots = col.querySelectorAll('.chart-dot');
                    const activeCount = Math.floor(Math.random() * (dots.length + 1));
                    dots.forEach((dot, index) => {
                        dot.style.opacity = index < activeCount ? '1' : '0.15';
                    });
                });
            }, 600);

            // Canvas Background Logic
            const canvas = document.getElementById('particle-canvas');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                let width, height;
                
                const spacing = 16;
                const dotRadius = 1.5;
                let time = 0;

                function resize() {
                    width = canvas.width = canvas.offsetWidth;
                    height = canvas.height = canvas.offsetHeight;
                }
                
                window.addEventListener('resize', resize);
                resize();

                function draw() {
                    ctx.clearRect(0, 0, width, height);
                    
                    const cols = Math.floor(width / spacing);
                    const rows = Math.floor(height / spacing);
                    
                    const offsetX = (width - cols * spacing) / 2;
                    const offsetY = (height - rows * spacing) / 2;

                    for (let i = 0; i <= cols; i++) {
                        for (let j = 0; j <= rows; j++) {
                            const x = offsetX + i * spacing;
                            const y = offsetY + j * spacing;
                            
                            const nx = i * 0.1;
                            const ny = j * 0.1;
                            
                            const wave1 = Math.sin(nx + time * 0.5) * Math.cos(ny - time * 0.3);
                            const wave2 = Math.sin(nx * 0.5 - ny * 0.5 + time * 0.8);
                            const value = wave1 + wave2;

                            if (value > 0.1) {
                                ctx.beginPath();
                                ctx.arc(x, y, dotRadius, 0, Math.PI * 2);

                                const highlightCheck = Math.sin(i * 12.34) * Math.cos(j * 56.78);
                                
                                if (highlightCheck > 0.98) {
                                    ctx.fillStyle = '#3b82f6'; // Blue highlight
                                } else if (highlightCheck < -0.98) {
                                    ctx.fillStyle = '#8b5cf6'; // Purple highlight
                                } else {
                                    const alpha = Math.min(0.6, (value - 0.1) * 0.8);
                                    ctx.fillStyle = \`rgba(148, 163, 184, \${alpha})\`;
                                }
                                
                                ctx.fill();
                            }
                        }
                    }
                    
                    time += 0.02;
                    requestAnimationFrame(draw);
                }
                
                draw();
            }
        });
    <\/script>

</body></html>`});var uu,pu=W(()=>{uu=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skeuomorphic Toggle UI - Blue Remix</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-slate-50 flex items-center justify-center min-h-screen p-4 antialiased" style="background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px); background-size: 120px 120px; background-position: center center;">

    <!-- Card Container with Premium Gradient Border -->
    <div id="toggle-card" class="relative rounded-[2rem] w-full max-w-[380px] shadow-[0_25px_50px_-12px_rgba(15,23,42,0.12)] p-[1px] bg-gradient-to-b from-slate-200/80 via-slate-100/50 to-slate-50/20 z-10">
        
        <div class="bg-white rounded-[calc(2rem-1px)] w-full h-full overflow-hidden flex flex-col relative">
            
            <!-- Top Section: 3D Environment -->
            <div class="relative h-64 w-full flex items-center justify-center overflow-hidden" style="background: radial-gradient(circle at 50% 50%, #f0f7ff 0%, #ffffff 80%);">
                
                <!-- Light Rays -->
                <div class="absolute inset-0 pointer-events-none opacity-40" style="background: repeating-conic-gradient(from 0deg at 50% -10%, rgba(59, 130, 246, 0.04) 0deg, transparent 4deg, transparent 8deg, rgba(59, 130, 246, 0.04) 12deg);"></div>

                <!-- Soft Overlay Shadows -->
                <div class="absolute inset-0 pointer-events-none" style="box-shadow: inset 0 20px 40px -10px rgba(0,0,0,0.04), inset 0 -20px 40px -10px rgba(59, 130, 246, 0.05);"></div>

                <!-- Simulated WebGL Waves / Ripples -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <!-- Ambient Wave Base -->
                    <div class="absolute bottom-0 w-full h-32" style="background: radial-gradient(ellipse at 50% 100%, rgba(59, 130, 246, 0.08) 0%, transparent 70%);"></div>
                    
                    <!-- Outer Ripple -->
                    <div class="absolute w-[320px] h-[160px] rounded-[80px]" style="border: 1px solid rgba(96, 165, 250, 0.05); box-shadow: 0 0 30px rgba(96, 165, 250, 0.06), inset 0 0 20px rgba(96, 165, 250, 0.03);"></div>
                    <!-- Middle Ripple -->
                    <div class="absolute w-[260px] h-[120px] rounded-[60px]" style="border: 1px solid rgba(96, 165, 250, 0.12); box-shadow: 0 0 20px rgba(96, 165, 250, 0.1), inset 0 0 15px rgba(96, 165, 250, 0.05);"></div>
                    <!-- Inner Ripple -->
                    <div class="absolute w-[220px] h-[90px] rounded-[45px]" style="border: 1px solid rgba(96, 165, 250, 0.2); box-shadow: 0 0 15px rgba(96, 165, 250, 0.18), inset 0 0 10px rgba(96, 165, 250, 0.1);"></div>
                </div>

                <!-- Dotted Pattern Arc -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[120px] pointer-events-none" style="mask-image: radial-gradient(circle at bottom, transparent 50px, black 51px); -webkit-mask-image: radial-gradient(circle at bottom, transparent 50px, black 51px);">
                    <div class="w-full h-full opacity-40" style="background-image: radial-gradient(rgba(59, 130, 246, 0.7) 1.5px, transparent 1.5px); background-size: 8px 8px; mask-image: linear-gradient(to bottom, black, transparent); -webkit-mask-image: linear-gradient(to bottom, black, transparent);"></div>
                </div>

                <!-- Skeuomorphic Toggle Control -->
                <div id="skeuomorphic-toggle" role="switch" aria-checked="true" tabindex="0" class="relative z-10 w-48 h-16 rounded-full p-1.5 cursor-pointer select-none" style="background: repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px), linear-gradient(180deg, #dbeafe 0%, #93c5fd 100%); box-shadow: inset 0 4px 8px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.7), 0 0 0 6px rgba(239, 246, 255, 0.8), 0 0 25px 5px rgba(96, 165, 250, 0.4); border: 1px solid #60a5fa; transition: background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;">
                    <div id="skeuomorphic-thumb" class="absolute top-1.5 left-1.5 w-[116px] h-[calc(100%-0.75rem)] rounded-full flex items-center justify-center" style="background: linear-gradient(180deg, #ffffff 0%, #f4f8ff 100%); box-shadow: 0 10px 20px -4px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(0,0,0,0.04), inset 0 3px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(96, 165, 250, 0.2); border: 1px solid #e0edfa; transform: translateX(64px); transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;">
                        <span class="text-sm font-normal text-slate-800 tracking-wide" style="text-shadow: 0 1px 1px rgba(255,255,255,0.9); transition: color 0.35s ease, opacity 0.35s ease;">Live Sync</span>
                    </div>
                </div>
            </div>

            <!-- Bottom Section: Content -->
            <div class="p-7 pb-9 bg-white z-20 relative">
                <!-- Icon -->
                <div class="w-8 h-8 rounded-[0.6rem] mb-4 flex items-center justify-center" style="background: linear-gradient(135deg, #60a5fa 0%, #2563eb 100%); box-shadow: inset 0 2px 2px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.1), 0 4px 8px -2px rgba(37, 99, 235, 0.4); border: 1px solid #1d4ed8;">
                    <iconify-icon icon="solar:server-square-linear" class="text-white text-base" style="filter: drop-shadow(0 1px 1px rgba(0,0,0,0.2));"></iconify-icon>
                </div>
                
                <!-- Text -->
                <h2 class="text-xl font-normal tracking-tight text-slate-900 mb-1.5 mask-reveal">Real-time Updates</h2>
                <p class="text-sm text-slate-500 leading-relaxed mask-reveal">Seamless background integration keeps everything current.</p>
            </div>
            
        </div>
    </div>

    <script>
        (function () {
            var toggle = document.getElementById('skeuomorphic-toggle');
            var thumb = document.getElementById('skeuomorphic-thumb');
            var label = thumb && thumb.querySelector('span');
            if (!toggle || !thumb) return;

            var ON_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px), linear-gradient(180deg, #dbeafe 0%, #93c5fd 100%)';
            var OFF_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px), linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%)';
            var ON_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.7), 0 0 0 6px rgba(239, 246, 255, 0.8), 0 0 25px 5px rgba(96, 165, 250, 0.4)';
            var OFF_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.12), inset 0 -2px 4px rgba(255,255,255,0.55), 0 0 0 6px rgba(241, 245, 249, 0.9), 0 0 18px 2px rgba(148, 163, 184, 0.25)';
            var ON_BORDER = '#60a5fa';
            var OFF_BORDER = '#94a3b8';
            var ON_THUMB_SHADOW = '0 10px 20px -4px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(0,0,0,0.04), inset 0 3px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(96, 165, 250, 0.2)';
            var OFF_THUMB_SHADOW = '0 8px 16px -4px rgba(15, 23, 42, 0.18), 0 3px 5px -2px rgba(0,0,0,0.05), inset 0 3px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(148, 163, 184, 0.25)';

            function travel() {
                return Math.max(0, toggle.clientWidth - thumb.clientWidth - 12);
            }

            function apply(on) {
                toggle.setAttribute('aria-checked', on ? 'true' : 'false');
                toggle.style.background = on ? ON_BG : OFF_BG;
                toggle.style.boxShadow = on ? ON_SHADOW : OFF_SHADOW;
                toggle.style.borderColor = on ? ON_BORDER : OFF_BORDER;
                thumb.style.transform = 'translateX(' + (on ? travel() : 0) + 'px)';
                thumb.style.boxShadow = on ? ON_THUMB_SHADOW : OFF_THUMB_SHADOW;
                if (label) {
                    label.style.opacity = on ? '1' : '0.72';
                    label.style.color = on ? '#1e293b' : '#475569';
                }
            }

            function flip() {
                apply(toggle.getAttribute('aria-checked') !== 'true');
            }

            apply(true);
            toggle.addEventListener('click', flip);
            toggle.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    flip();
                }
            });
            window.addEventListener('resize', function () {
                apply(toggle.getAttribute('aria-checked') === 'true');
            });
        })();

        document.addEventListener("DOMContentLoaded", () => {
            if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
            gsap.registerPlugin(ScrollTrigger);
            
            document.querySelectorAll('.mask-reveal').forEach(el => {
                const text = el.innerText;
                el.innerHTML = '';
                
                text.split(/(\\s+)/).forEach(part => {
                    if (!part.trim()) {
                        el.appendChild(document.createTextNode(part));
                        return;
                    }
                    
                    const wrapper = document.createElement('span');
                    wrapper.style.display = 'inline-block';
                    wrapper.style.overflow = 'hidden';
                    wrapper.style.verticalAlign = 'bottom';
                    
                    const inner = document.createElement('span');
                    inner.innerText = part;
                    inner.style.display = 'inline-block';
                    inner.className = 'reveal-word';
                    inner.style.transform = 'translateY(110%)';
                    inner.style.opacity = '0';
                    
                    wrapper.appendChild(inner);
                    el.appendChild(wrapper);
                });
                
                gsap.to(el.querySelectorAll('.reveal-word'), {
                    y: '0%',
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.04,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 95%',
                    }
                });
            });
        });
    <\/script>
</body>
</html>`});var fu,gu=W(()=>{fu=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quantum Matrix State</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&family=Geist:wght@300;400&family=Gloock&display=swap" rel="stylesheet">
</head>
<body class="bg-[#050505] text-white h-screen w-screen overflow-hidden relative selection:bg-white/20 selection:text-white">
    
    <!-- WebGL Background Canvas -->
    <canvas id="glcanvas" class="absolute inset-0 z-0 w-full h-full"></canvas>

    <!-- Aura Asset Image Overlay (Mix Blend Texture) -->
    <div class="absolute inset-0 z-10 opacity-30 mix-blend-screen pointer-events-none bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg')] bg-cover bg-center"></div>

    <!-- Structural Framing Lines with Corner Squares -->
    <div class="absolute inset-6 md:inset-12 border border-white/10 pointer-events-none z-20 transition-all duration-1000 fade-target" style="opacity: 0;">
        <div class="absolute -top-1 -left-1 w-2 h-2 border border-white/30 bg-[#050505]"></div>
        <div class="absolute -top-1 -right-1 w-2 h-2 border border-white/30 bg-[#050505]"></div>
        <div class="absolute -bottom-1 -left-1 w-2 h-2 border border-white/30 bg-[#050505]"></div>
        <div class="absolute -bottom-1 -right-1 w-2 h-2 border border-white/30 bg-[#050505]"></div>
    </div>

    <!-- Main Content Overlay -->
    <main class="absolute inset-0 z-30 p-12 md:p-20 flex flex-col justify-between pointer-events-none">
        
        <!-- Top Row: Editorial Grid Metadata -->
        <header class="grid grid-cols-2 md:grid-cols-3 w-full gap-8 fade-target transition-all duration-1000 ease-out font-['DM_Mono'] uppercase" style="opacity: 0; transform: translateY(10px);">
            <div class="flex flex-col gap-2 text-xs text-gray-500 tracking-widest font-light">
                <span class="text-gray-200">SYSTEM \u2014 09</span>
                <span>NETWORK UPLINK</span>
            </div>
            <div class="hidden md:flex flex-col gap-2 text-xs text-gray-500 tracking-widest font-light text-center">
                <span class="text-gray-200">PING 1.2MS</span>
                <span>SYNC COMPLETE</span>
            </div>
            <div class="flex flex-col gap-2 text-xs text-gray-500 tracking-widest font-light text-right">
                <span class="text-gray-200">SECURITY</span>
                <span>SECURED</span>
            </div>
        </header>

        <!-- Middle: Dashboard Layout -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-12 md:gap-8 fade-target transition-all duration-1000 ease-out flex-1 mt-12 md:mt-0" style="opacity: 0; transform: translateY(10px);">
            
            <!-- Left: Title & Context -->
            <section class="flex-shrink-0 z-40 pointer-events-auto">
                <h2 class="font-['Gloock'] text-5xl md:text-7xl font-normal tracking-tight text-white leading-none uppercase">
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">QUANTUM</span></span><br>
                    <span class="inline-block overflow-hidden align-bottom italic text-gray-300 pr-4"><span class="reveal-word inline-block translate-y-full">MATRIX</span></span>
                </h2>
                <p class="font-['Geist'] text-sm text-gray-400 mt-6 max-w-xs font-light leading-relaxed">
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">Continuous</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">monitoring</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">of</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">decentralized</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">server</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">arrays.</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">All</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">telemetry</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">data</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">is</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">perfectly</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">synchronized</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">across</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">the</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">global</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">infrastructure</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">network.</span></span>
                </p>
            </section>

            <!-- Right: Telemetry Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl pointer-events-auto font-['Geist'] z-40">
                <!-- Metric Card 1 -->
                <div class="p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent h-full">
                    <div class="bg-[#050505]/70 backdrop-blur-md p-5 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500 h-full">
                        <div class="flex justify-between items-center text-xs font-['DM_Mono'] text-gray-400 tracking-widest uppercase">
                            <span>Bandwidth</span>
                            <iconify-icon icon="solar:graph-up-linear" stroke-width="1.5" class="text-base text-gray-200"></iconify-icon>
                        </div>
                        <div class="text-3xl font-normal tracking-tight text-white">142.8<span class="text-sm text-gray-500 ml-1 font-light">GB/s</span></div>
                        <div class="w-full h-0.5 bg-white/10 mt-2">
                            <div class="h-full bg-gray-300 w-[88%]"></div>
                        </div>
                    </div>
                </div>
                
                <!-- Metric Card 2 -->
                <div class="p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent h-full">
                    <div class="bg-[#050505]/70 backdrop-blur-md p-5 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500 h-full">
                        <div class="flex justify-between items-center text-xs font-['DM_Mono'] text-gray-400 tracking-widest uppercase">
                            <span>Server Uplinks</span>
                            <iconify-icon icon="solar:server-square-linear" stroke-width="1.5" class="text-base text-gray-200"></iconify-icon>
                        </div>
                        <div class="text-3xl font-normal tracking-tight text-white">8,192</div>
                        <div class="flex items-end gap-1 h-4 mt-2 opacity-70">
                            <div class="w-full bg-white/20 h-1/2"></div>
                            <div class="w-full bg-white/40 h-3/4"></div>
                            <div class="w-full bg-white/30 h-1/3"></div>
                            <div class="w-full bg-white/60 h-full"></div>
                            <div class="w-full bg-white/50 h-2/3"></div>
                            <div class="w-full bg-white/80 h-[90%]"></div>
                        </div>
                    </div>
                </div>

                <!-- Metric Card 3 -->
                <div class="p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent h-full">
                    <div class="bg-[#050505]/70 backdrop-blur-md p-5 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500 h-full">
                        <div class="flex justify-between items-center text-xs font-['DM_Mono'] text-gray-400 tracking-widest uppercase">
                            <span>Health</span>
                            <div class="w-1.5 h-1.5 rounded-full bg-gray-200 animate-pulse"></div>
                        </div>
                        <div class="text-xl font-normal tracking-tight text-gray-200 leading-snug mt-auto">
                            Systems nominal across all primary regions.
                        </div>
                    </div>
                </div>

                <!-- Metric Card 4 -->
                <div class="p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent h-full">
                    <div class="bg-[#050505]/70 backdrop-blur-md p-5 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500 h-full">
                        <div class="flex justify-between items-center text-xs font-['DM_Mono'] text-gray-400 tracking-widest uppercase">
                            <span>Firewalls</span>
                            <iconify-icon icon="solar:shield-check-linear" stroke-width="1.5" class="text-base text-gray-200"></iconify-icon>
                        </div>
                        <div class="flex flex-wrap gap-2 mt-auto font-['DM_Mono']">
                            <span class="text-xs border border-white/10 px-2 py-1 text-gray-300">AES-256</span>
                            <span class="text-xs border border-white/10 px-2 py-1 text-gray-300">BIOMETRIC</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Row: Status Footer -->
        <footer class="w-full flex justify-between items-end fade-target transition-all duration-1000 ease-out mt-8" style="opacity: 0; transform: translateY(10px);">
            <div class="flex items-center gap-3 text-xs text-gray-500 tracking-widest font-['DM_Mono'] uppercase font-light">
                <iconify-icon icon="solar:radar-linear" stroke-width="1.5" class="text-lg text-gray-200"></iconify-icon>
                <span class="hidden md:inline">MONITORING SECTORS</span>
            </div>
            <div class="flex flex-col gap-2 text-xs text-gray-500 tracking-widest font-['DM_Mono'] uppercase font-light text-right">
                <span class="text-gray-200">ROOT.USER</span>
                <span>SESSION ACTIVE</span>
            </div>
        </footer>
    </main>

    <!-- UI Animation Logic -->
    <script>
        window.addEventListener('load', () => {
            gsap.registerPlugin(ScrollTrigger);

            // Initial UI fade
            document.querySelectorAll('.fade-target').forEach((el, i) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, i * 150 + 100);
            });

            // Masked word reveal
            gsap.to('.reveal-word', {
                scrollTrigger: {
                    trigger: '.reveal-word',
                    start: 'top 95%',
                },
                y: '0%',
                duration: 0.8,
                stagger: 0.03,
                ease: 'power4.out',
                delay: 0.3
            });
        });
    <\/script>

    <!-- WebGL Logic -->
    <script>
        const canvas = document.getElementById('glcanvas');
        const gl = canvas.getContext('webgl');

        let mouseX = -1000, mouseY = -1000;
        let lastMouseMove = 0;
        let currentMouseActive = 0.0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = canvas.clientHeight - e.clientY;
            lastMouseMove = Date.now();
        });

        const vsSource = \`
            attribute vec4 aVertexPosition;
            void main() {
                gl_Position = aVertexPosition;
            }
        \`;

        const fsSource = \`
            precision highp float;
            uniform vec2 u_resolution;
            uniform float u_time;
            uniform vec2 u_mouse;
            uniform float u_mouseActive;

            float hash(float n) { return fract(sin(n)*753.5453123); }
            float noise(float x) {
                float i = floor(x);
                float f = fract(x);
                f = f*f*(3.0-2.0*f);
                return mix(hash(i), hash(i+1.0), f);
            }

            vec2 sdLine(vec2 p, vec2 a, vec2 b) {
                vec2 pa = p - a, ba = b - a;
                float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
                return vec2(length(pa - ba * h), h);
            }

            float lightning(vec2 uv, vec2 a, vec2 b, float t) {
                vec2 ab = b - a;
                float len = length(ab);
                if(len < 0.01) return 0.0;
                vec2 dir = ab / len;
                
                vec2 pa = uv - a;
                float h = clamp(dot(pa, dir) / len, 0.0, 1.0);
                float dist = length(pa - dir * (h * len));
                
                float env = sin(h * 3.1415);
                
                float offset = (noise(h * 25.0 - t * 35.0) - 0.5) * 0.08 * env;
                offset += (noise(h * 70.0 + t * 50.0) - 0.5) * 0.02 * env;
                
                float d = abs(dist + offset);
                
                return (0.0002 / (d + 0.0002) + 0.00001 / (d*d + 0.00001)) * env;
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                uv = uv * 2.0 - 1.0;
                uv.x *= u_resolution.x / u_resolution.y;

                vec2 mouseUV = u_mouse / u_resolution.xy;
                mouseUV = mouseUV * 2.0 - 1.0;
                mouseUV.x *= u_resolution.x / u_resolution.y;

                vec2 center = vec2(-0.8, -0.2);
                center.x += sin(u_time * 0.4) * 0.03;
                center.y += cos(u_time * 0.3) * 0.03;

                vec2 dirUp = normalize(vec2(0.15, 1.0));
                vec2 dirRight = normalize(vec2(1.0, -0.25));
                vec2 dirDownLeft = normalize(vec2(-0.8, -0.6));

                vec2 l1 = sdLine(uv, center, center + dirUp * 5.0);
                vec2 l2 = sdLine(uv, center, center + dirRight * 5.0);
                vec2 l3 = sdLine(uv, center, center + dirDownLeft * 5.0);

                float intensity = 0.006;
                float glow = intensity / (l1.x + 0.001) +
                             intensity / (l2.x + 0.001) +
                             (intensity * 0.4) / (l3.x + 0.001);

                float pulse1 = smoothstep(0.1, 0.0, abs(l1.y - fract(u_time * 0.4))) * 0.03 / (l1.x + 0.001);
                float pulse2 = smoothstep(0.1, 0.0, abs(l2.y - fract(u_time * 0.5 + 0.3))) * 0.03 / (l2.x + 0.001);
                float pulse3 = smoothstep(0.1, 0.0, abs(l3.y - fract(u_time * 0.3 + 0.7))) * 0.015 / (l3.x + 0.001);
                glow += pulse1 + pulse2 + pulse3;

                vec2 p1 = center + dirUp * clamp(dot(mouseUV - center, dirUp), 0.0, 5.0);
                vec2 p2 = center + dirRight * clamp(dot(mouseUV - center, dirRight), 0.0, 5.0);
                vec2 p3 = center + dirDownLeft * clamp(dot(mouseUV - center, dirDownLeft), 0.0, 5.0);
                
                float lgt1 = lightning(uv, p1, mouseUV, u_time);
                float lgt2 = lightning(uv, p2, mouseUV, u_time + 10.0);
                float lgt3 = lightning(uv, p3, mouseUV, u_time + 20.0);
                
                float flicker = step(0.1, noise(u_time * 60.0)) * (noise(u_time * 150.0) * 0.8 + 0.2);
                
                float d1 = length(mouseUV - p1);
                float d2 = length(mouseUV - p2);
                float d3 = length(mouseUV - p3);
                
                glow += lgt1 * smoothstep(2.0, 0.0, d1) * u_mouseActive * flicker;
                glow += lgt2 * smoothstep(2.0, 0.0, d2) * u_mouseActive * flicker;
                glow += lgt3 * smoothstep(2.0, 0.0, d3) * u_mouseActive * flicker;

                float distToCenter = length(uv - center);
                glow += 0.04 / (distToCenter + 0.01);

                vec3 baseColor = vec3(0.6, 0.75, 1.0);
                vec3 finalColor = baseColor * glow;

                finalColor *= 0.85 + 0.15 * sin(u_time * 2.0 - distToCenter * 8.0);

                float vignette = 1.0 - smoothstep(0.4, 2.0, length(uv));
                finalColor *= vignette;

                float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
                finalColor += n * 0.02;

                gl_FragColor = vec4(finalColor, 1.0);
            }
        \`;

        function createShader(gl, type, source) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return null;
            return shader;
        }

        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, createShader(gl, gl.VERTEX_SHADER, vsSource));
        gl.attachShader(shaderProgram, createShader(gl, gl.FRAGMENT_SHADER, fsSource));
        gl.linkProgram(shaderProgram);

        const programInfo = {
            program: shaderProgram,
            attribLocations: { vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition') },
            uniformLocations: {
                resolution: gl.getUniformLocation(shaderProgram, 'u_resolution'),
                time: gl.getUniformLocation(shaderProgram, 'u_time'),
                mouse: gl.getUniformLocation(shaderProgram, 'u_mouse'),
                mouseActive: gl.getUniformLocation(shaderProgram, 'u_mouseActive'),
            },
        };

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0]), gl.STATIC_DRAW);

        let startTime = Date.now();

        function render() {
            if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
            }
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            gl.useProgram(programInfo.program);

            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, 2, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

            let timeSinceMove = Date.now() - lastMouseMove;
            let targetActive = timeSinceMove < 150 ? 1.0 : Math.max(0.0, 1.0 - (timeSinceMove - 150) / 350.0);
            currentMouseActive += (targetActive - currentMouseActive) * 0.15;

            gl.uniform2f(programInfo.uniformLocations.resolution, gl.canvas.width, gl.canvas.height);
            gl.uniform1f(programInfo.uniformLocations.time, (Date.now() - startTime) * 0.001);
            gl.uniform2f(programInfo.uniformLocations.mouse, mouseX, mouseY);
            gl.uniform1f(programInfo.uniformLocations.mouseActive, currentMouseActive);

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);
    <\/script>
</body>
</html>`});var hu,mu=W(()=>{hu=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexus Gateway</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300&display=swap" rel="stylesheet">
</head>
<body class="bg-black text-slate-300 antialiased min-h-screen flex flex-col selection:bg-slate-700 selection:text-white relative" style="font-family: 'Inter', sans-serif;">

    <!-- Global Dither Overlay -->
    <div class="fixed inset-0 z-50 pointer-events-none opacity-[0.15]" style="background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%202%202%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23ffffff%22%2F%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23ffffff%22%2F%3E%3C%2Fsvg%3E'); background-size: 2px 2px;"></div>

    <!-- Visualization Background -->
    <div class="fixed inset-0 z-0 overflow-hidden bg-black">
        <div class="absolute inset-0 z-0 opacity-10" style="background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.01) 0%, rgba(0, 0, 0, 0) 80%);"></div>
        <canvas id="flow-canvas" class="absolute inset-0 w-full h-full z-10"></canvas>
    </div>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center relative z-30 px-6 py-12 min-h-screen w-full">
        
        <!-- Premium Login Card with Hover Border Gradient -->
        <div class="max-w-md w-full bg-black/95 backdrop-blur-xl rounded-2xl p-7 md:p-8 shadow-2xl flex flex-col relative group">
            
            <!-- Base Border -->
            <div class="absolute inset-0 border border-white/[0.04] rounded-2xl pointer-events-none transition-colors duration-500 group-hover:border-transparent"></div>
            
            <!-- Hover Gradient Border -->
            <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.15),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

            <!-- Header Text -->
            <div class="text-center mb-8 w-full relative z-20">
                <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/50 border border-slate-700/50 mb-6 shadow-inner">
                    <iconify-icon icon="solar:cpu-bolt-linear" width="24" height="24" stroke-width="1.5" class="text-slate-200"></iconify-icon>
                </div>
                <h1 id="reveal-title" class="text-3xl md:text-4xl font-thin tracking-tight text-white leading-tight mb-3 uppercase flex flex-wrap justify-center gap-x-2">
                    <span class="overflow-hidden inline-block pt-1"><span class="reveal-word inline-block translate-y-[120%]">Nexus</span></span>
                    <span class="overflow-hidden inline-block pt-1"><span class="reveal-word inline-block translate-y-[120%]">Gateway</span></span>
                </h1>
                <p class="text-sm text-slate-500 font-extralight leading-relaxed">
                    Verify identity to initialize secure connection with the primary framework. Oversee active protocols and routing.
                </p>
            </div>

            <!-- Form -->
            <form class="space-y-5 relative z-20">
                <div>
                    <label for="identifier" class="text-xs font-light text-slate-400 mb-1.5 block uppercase tracking-widest">Operative ID</label>
                    <div class="relative rounded-lg bg-black/80 group/input">
                        <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/input:border-transparent focus-within:border-transparent"></div>
                        <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/input:opacity-100 focus-within:opacity-100 transition-opacity duration-300 z-10"></div>
                        <input type="text" id="identifier" class="relative w-full bg-transparent px-3 py-2 text-sm text-slate-200 focus:outline-none z-20 placeholder-slate-700 font-extralight" placeholder="operative@nexus.net">
                    </div>
                </div>
                <div>
                    <div class="flex justify-between items-center mb-1.5">
                        <label for="key" class="text-xs font-light text-slate-400 block uppercase tracking-widest">Security Key</label>
                        <a href="#" class="text-xs font-extralight text-slate-400 hover:text-white transition-colors underline decoration-slate-700 underline-offset-2">Recover access</a>
                    </div>
                    <div class="relative rounded-lg bg-black/80 group/input">
                        <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/input:border-transparent focus-within:border-transparent"></div>
                        <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/input:opacity-100 focus-within:opacity-100 transition-opacity duration-300 z-10"></div>
                        <input type="password" id="key" class="relative w-full bg-transparent pl-3 pr-10 py-2 text-sm text-slate-200 focus:outline-none z-20 placeholder-slate-700 font-extralight" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022">
                        <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white transition-colors z-30" aria-label="Toggle visibility">
                            <iconify-icon icon="solar:eye-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                        </button>
                    </div>
                </div>
                <div class="flex items-center gap-2 pt-1">
                    <div class="relative flex items-center justify-center w-4 h-4">
                        <input type="checkbox" id="session" class="peer appearance-none w-4 h-4 border border-slate-700 rounded bg-black/50 checked:bg-slate-300 checked:border-slate-300 cursor-pointer transition-colors">
                        <iconify-icon icon="solar:check-linear" width="12" height="12" stroke-width="1.5" class="absolute text-black opacity-0 peer-checked:opacity-100 pointer-events-none"></iconify-icon>
                    </div>
                    <label for="session" class="text-xs font-extralight text-slate-400 cursor-pointer select-none uppercase tracking-wider">Maintain persistent uplink</label>
                </div>
                
                <!-- Primary Button -->
                <button type="submit" class="w-full bg-[#0a0a0a] hover:bg-[#111] text-white text-sm font-light py-2.5 rounded-lg transition-all mt-2 uppercase tracking-widest relative group/btn shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_25px_rgba(255,255,255,0.06)]">
                    <div class="absolute inset-0 border border-white/10 rounded-lg pointer-events-none transition-colors duration-300 group-hover/btn:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.4),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20">Initialize Uplink</span>
                </button>
            </form>

            <!-- Divider -->
            <div class="relative flex items-center py-6 z-20">
                <div class="flex-grow border-t border-slate-800/60"></div>
                <span class="flex-shrink-0 px-4 text-xs font-extralight text-slate-600 uppercase tracking-widest">Alternative Auth</span>
                <div class="flex-grow border-t border-slate-800/60"></div>
            </div>

            <!-- Alternative Options -->
            <div class="grid grid-cols-2 gap-3 z-20">
                <button type="button" class="relative flex items-center justify-center gap-2 w-full bg-black/40 hover:bg-slate-900 rounded-lg py-2.5 text-sm text-slate-400 hover:text-slate-200 transition-colors font-extralight group/alt">
                    <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/alt:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/alt:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20 flex items-center gap-2"><iconify-icon icon="solar:buildings-linear" width="18" height="18" stroke-width="1.5"></iconify-icon> Corporate SSO</span>
                </button>
                <button type="button" class="relative flex items-center justify-center gap-2 w-full bg-black/40 hover:bg-slate-900 rounded-lg py-2.5 text-sm text-slate-400 hover:text-slate-200 transition-colors font-extralight group/alt">
                    <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/alt:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/alt:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20 flex items-center gap-2"><iconify-icon icon="solar:code-circle-linear" width="18" height="18" stroke-width="1.5"></iconify-icon> Git Auth</span>
                </button>
            </div>
        </div>

        <!-- Social Proof -->
        <div class="mt-8 flex flex-col items-center gap-4 relative z-20">
            <div class="flex -space-x-2">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <div class="w-10 h-10 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-xs text-slate-300 font-extralight shadow-lg">+</div>
            </div>
            <p class="text-xs text-slate-600 font-extralight uppercase tracking-widest">Validated by distributed consensus nodes</p>
        </div>

    </main>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // GSAP Masked Reveal for Heading
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(".reveal-word", {
                y: "0%",
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: "#reveal-title",
                    start: "top 95%",
                }
            });

            // Flow Canvas Animation
            const canvas = document.getElementById('flow-canvas');
            const ctx = canvas.getContext('2d');
            
            let width, height;
            let explosions = [];

            function resize() {
                const dpr = window.devicePixelRatio || 1;
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
            }
            window.addEventListener('resize', resize);
            resize();

            window.addEventListener('click', (e) => {
                explosions.push({ x: e.clientX, y: e.clientY, radius: 0, life: 1 });
            });

            const paths = [];
            const numPaths = 80;
            
            for(let i = 0; i < numPaths; i++) {
                paths.push({
                    isLeft: i % 2 === 0,
                    startY: (i / numPaths) * height * 1.4 - height * 0.2,
                    particles: [{
                        t: Math.random(),
                        speed: 0.0015 + Math.random() * 0.002
                    }]
                });
            }

            function getBezierPoint(t, p0, p1, p2, p3) {
                const u = 1 - t;
                return {
                    x: u**3 * p0.x + 3 * u**2 * t * p1.x + 3 * u * t**2 * p2.x + t**3 * p3.x,
                    y: u**3 * p0.y + 3 * u**2 * t * p1.y + 3 * u * t**2 * p2.y + t**3 * p3.y
                };
            }

            function render() {
                ctx.clearRect(0, 0, width, height);
                const centerX = width / 2;
                const centerY = height / 2;

                explosions.forEach(exp => {
                    exp.radius += 15;
                    exp.life -= 0.015;
                });
                explosions = explosions.filter(exp => exp.life > 0);

                paths.forEach(path => {
                    const p0 = { x: path.isLeft ? 0 : width, y: path.startY };
                    const p1 = { x: path.isLeft ? centerX * 0.5 : width - centerX * 0.5, y: path.startY };
                    const p2 = { x: path.isLeft ? centerX * 0.8 : width - centerX * 0.8, y: centerY };
                    const p3 = { x: centerX, y: centerY };

                    ctx.beginPath();
                    ctx.moveTo(p0.x, p0.y);
                    ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
                    ctx.lineWidth = 1.2;
                    ctx.setLineDash([1, 4]);
                    ctx.stroke();
                    ctx.setLineDash([]);

                    path.particles.forEach(p => {
                        p.t += p.speed;
                        if (p.t > 1) {
                            p.t = 0;
                            path.startY += (Math.random() - 0.5) * 10;
                        }

                        let pos = getBezierPoint(p.t, p0, p1, p2, p3);

                        let dxTotal = 0, dyTotal = 0;
                        explosions.forEach(exp => {
                            let dx = pos.x - exp.x;
                            let dy = pos.y - exp.y;
                            let dist = Math.hypot(dx, dy);
                            if (dist < exp.radius + 120 && dist > exp.radius - 120) {
                                let force = (1 - Math.abs(dist - exp.radius) / 120) * exp.life;
                                dxTotal += (dx / dist) * force * 80;
                                dyTotal += (dy / dist) * force * 80;
                            }
                        });
                        
                        pos.x += dxTotal;
                        pos.y += dyTotal;

                        ctx.fillStyle = \`rgba(255, 255, 255, 0.7)\`;
                        ctx.fillRect(pos.x - 1.5, pos.y - 1.5, 3, 3);
                    });
                });
                
                requestAnimationFrame(render);
            }
            
            render();
        });
    <\/script>
</body>
</html>`});var vu,xu=W(()=>{vu=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Connectivity Nexus</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="font-sans antialiased text-blue-950 min-h-screen flex flex-col" style="background: linear-gradient(180deg, rgba(240,244,248,0.92) 0%, rgba(225,234,244,0.92) 40%, rgba(196,217,239,0.92) 80%, rgba(166,200,234,0.92) 100%), url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_1600w.jpg') center/cover no-repeat fixed; background-blend-mode: normal;">

    <!-- Main Structural Container -->
    <div class="max-w-6xl mx-auto w-full flex-grow flex flex-col border-x border-transparent relative bg-white/20 backdrop-blur-[2px]" style="border-image: linear-gradient(to bottom, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
        
        <!-- Top Corner Squares -->
        <div class="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        <div class="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>

        <!-- Header Section -->
        <header class="pt-24 pb-20 px-6 text-center border-b border-transparent relative z-10" style="border-image: linear-gradient(to right, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
            <h1 id="reveal-title" class="text-5xl md:text-6xl font-normal tracking-tight text-blue-950 max-w-3xl mx-auto leading-tight">
                The nexus of <br> global connectivity
            </h1>
            
            <!-- Header Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </header>

        <!-- Stats Section -->
        <section class="border-b border-transparent relative z-10 bg-white/10" style="border-image: linear-gradient(to right, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-blue-300/40 text-center">
                
                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-950 tracking-tight">150+</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        countries integrated worldwide
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-800/90 tracking-tight">
                        <span class="text-blue-500/80 font-light mr-1">$</span>3.1T
                    </div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        annual transfer volume
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-800/80 tracking-tight">99.999%</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        infrastructure reliability
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6">
                    <div class="text-4xl font-normal text-blue-700/80 tracking-tight">850M+</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        verified digital identities
                    </div>
                </div>

            </div>
            
            <!-- Stats Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </section>

        <!-- Animation Section -->
        <main class="flex-grow relative overflow-hidden min-h-[500px]">
            
            <!-- Controls -->
            <div class="absolute top-6 right-6 flex gap-2 z-20">
                <button id="pauseBtn" class="w-8 h-8 flex items-center justify-center bg-white/40 hover:bg-white/60 backdrop-blur-md border border-blue-300/40 rounded text-blue-800 transition-all cursor-pointer" aria-label="Pause animation">
                    <iconify-icon icon="solar:pause-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>
                </button>
                <button class="w-8 h-8 flex items-center justify-center bg-white/40 hover:bg-white/60 backdrop-blur-md border border-blue-300/40 rounded text-blue-800 transition-all cursor-pointer" aria-label="Settings">
                    <iconify-icon icon="solar:settings-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>
                </button>
            </div>

            <!-- Canvas Container -->
            <canvas id="networkCanvas" class="absolute inset-0 w-full h-full block z-0"></canvas>
            
            <!-- Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </main>
    </div>

    <script>
        // Background Canvas Animation
        const canvas = document.getElementById('networkCanvas');
        const ctx = canvas.getContext('2d', { alpha: true });
        let width, height;
        let particles = [];
        let isPlaying = true;
        let animationFrameId;

        function resize() {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            initParticles();
        }

        class Particle {
            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.angle = Math.PI + (Math.random() * Math.PI); 
                if (Math.random() > 0.3) {
                    this.angle = Math.PI * 1.25 + (Math.random() * Math.PI * 0.5);
                }

                this.speed = 0.5 + Math.random() * 2.5;
                this.distance = initial ? Math.random() * (height * 1.2) : Math.random() * 50;
                this.maxLength = 20 + Math.random() * 180;
                this.length = 0;
                this.alpha = 0;
            }

            update() {
                this.distance += this.speed;
                this.length = Math.min(this.maxLength, this.distance * 0.8);
                
                const normalizedDist = this.distance / (height * 1.2);
                this.alpha = Math.min(1, this.distance / 100) * Math.max(0, 1 - normalizedDist);

                if (this.distance > height * 1.5) {
                    this.reset();
                }
            }

            draw() {
                const originX = width / 2;
                const originY = height + 50;

                const startX = originX + Math.cos(this.angle) * this.distance;
                const startY = originY + Math.sin(this.angle) * this.distance;
                const endX = originX + Math.cos(this.angle) * (this.distance + this.length);
                const endY = originY + Math.sin(this.angle) * (this.distance + this.length);

                const distRatio = Math.min(1, this.distance / height);
                const hue = 220 + (distRatio * 15);
                const lightness = 15 + (distRatio * 35);
                
                const color = \`hsla(\${hue}, 90%, \${lightness}%, \${this.alpha})\`;
                const tailColor = \`hsla(\${hue}, 90%, \${Math.max(5, lightness - 15)}%, \${this.alpha * 0.05})\`;

                ctx.beginPath();
                const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
                gradient.addColorStop(0, tailColor);
                gradient.addColorStop(1, color);
                
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 0.5 + (distRatio * 2);
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(endX, endY, 0.5 + (distRatio * 1.5), 0, Math.PI * 2);
                ctx.fillStyle = \`hsla(\${hue}, 100%, \${lightness + 20}%, \${this.alpha * 1.5})\`;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const particleCount = window.innerWidth < 768 ? 150 : 400;
            for(let i=0; i<particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            if (!isPlaying) return;
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            cancelAnimationFrame(animationFrameId);
            resize();
            if(isPlaying) animate();
        });

        resize();
        animate();

        const pauseBtn = document.getElementById('pauseBtn');
        pauseBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                pauseBtn.innerHTML = '<iconify-icon icon="solar:pause-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>';
                animate();
            } else {
                pauseBtn.innerHTML = '<iconify-icon icon="solar:play-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>';
                cancelAnimationFrame(animationFrameId);
            }
        });

        // GSAP Masked Text Reveal
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);
            
            const titleEl = document.getElementById('reveal-title');
            if (titleEl) {
                const lines = titleEl.innerHTML.split(/<br\\s*\\/?>/i);
                titleEl.innerHTML = '';
                
                lines.forEach((line, index) => {
                    const words = line.split(' ');
                    words.forEach((word) => {
                        if (word.trim() !== '') {
                            const wrapper = document.createElement('span');
                            wrapper.className = 'inline-block overflow-hidden align-bottom';
                            wrapper.style.paddingBottom = '0.1em'; 
                            wrapper.style.marginBottom = '-0.1em';
                            
                            const inner = document.createElement('span');
                            inner.className = 'inline-block reveal-text';
                            inner.style.transform = 'translateY(110%)';
                            inner.innerHTML = word;
                            
                            wrapper.appendChild(inner);
                            titleEl.appendChild(wrapper);
                            titleEl.appendChild(document.createTextNode(' '));
                        }
                    });
                    if (index < lines.length - 1) {
                        titleEl.appendChild(document.createElement('br'));
                    }
                });

                gsap.to('.reveal-text', {
                    y: 0,
                    ease: 'power4.out',
                    duration: 1.2,
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: '#reveal-title',
                        start: 'top 90%',
                    }
                });
            }
        });
    <\/script>
</body>
</html>`});var yu,wu=W(()=>{yu=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Interface</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-[#0a0a0c] text-zinc-400 font-mono min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden selection:bg-zinc-800 selection:text-white">
    
    <!-- Aura Asset Background Image -->
    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg" 
         class="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen pointer-events-none z-0" 
         alt="">

    <!-- WebGL-simulated Background Animation -->
    <canvas id="bg-canvas" class="absolute inset-0 z-0 pointer-events-none"></canvas>

    <!-- Main UI Container -->
    <main class="relative z-10 w-full max-w-2xl flex flex-col gap-12 sm:gap-20">

        <!-- PANEL 1: CORE (Red/Orange) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-[#c87a65]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-4 text-[#c87a65]">
                
                <!-- Top Row -->
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#c87a65]/20 pb-2">
                    <h1 class="gsap-reveal text-3xl sm:text-4xl tracking-tight font-medium uppercase animate-pulse" style="animation-duration: 4s;">[ CORE ]</h1>
                    <div class="flex gap-6 text-xs tracking-wider">
                        <div class="flex flex-col gap-1">
                            <span>CONF.SYS</span>
                            <span class="opacity-70">RESTART</span>
                            <span class="opacity-70">SLEEP</span>
                        </div>
                        <div class="flex flex-col gap-1">
                            <span>BUILD_11</span>
                            <span class="opacity-70">ANALYZE</span>
                            <span class="opacity-70">INPUT NEEDED</span>
                        </div>
                    </div>
                </div>

                <!-- Middle Row -->
                <div class="flex flex-col sm:flex-row justify-between items-start gap-6">
                    <!-- Dot Matrix -->
                    <div class="grid grid-cols-[repeat(20,minmax(0,1fr))] gap-1 opacity-80" id="matrix-1">
                        <!-- Populated by JS for brevity -->
                    </div>
                    
                    <!-- Right Controls -->
                    <div class="flex flex-col gap-2 min-w-[200px]">
                        <div class="flex items-center justify-between border-b border-[#c87a65]/20 pb-1">
                            <div class="flex items-center gap-2">
                                <div class="w-3 h-3 rounded-full bg-[#c87a65] animate-ping" style="animation-duration: 3s;"></div>
                                <span class="text-lg tracking-widest">++</span>
                            </div>
                            <span class="text-xs">HASH: 0x3C9A</span>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-1">
                            <span>2B-44 - TEMP: 61\xB0C</span>
                            <div class="w-8 h-3 rounded-full border border-[#c87a65]/50 flex items-center p-[1px]">
                                <div class="w-2 h-full bg-[#c87a65] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PANEL 2: SECURE (Green) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-l from-[#7a9f65]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-3 text-[#7a9f65]">
                
                <!-- Ruler -->
                <div class="relative w-full h-4 border-t border-[#7a9f65]/30 flex justify-between">
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                </div>

                <div class="flex flex-col sm:flex-row justify-between items-end gap-6">
                    <!-- Large Dot Pattern -->
                    <div class="flex flex-col gap-2 opacity-90">
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div></div>
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div></div>
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div></div>
                    </div>

                    <!-- Info Box & Title -->
                    <div class="flex flex-col items-end gap-2 w-full sm:w-auto">
                        <div class="flex items-stretch gap-2">
                            <div class="border border-[#7a9f65]/30 p-2 text-xs flex flex-col justify-center min-w-[120px]">
                                <span>APPROVED</span>
                                <span class="opacity-70">ID: X7-44</span>
                                <span class="opacity-70">SEQ: #0933</span>
                            </div>
                            <div class="border border-[#7a9f65]/30 p-2 flex items-center justify-center">
                                <iconify-icon icon="solar:clock-circle-linear" class="text-xl"></iconify-icon>
                            </div>
                            <!-- Logo Box -->
                            <div class="w-12 h-12 bg-[#7a9f65] relative overflow-hidden flex-shrink-0">
                                <div class="absolute w-16 h-4 bg-[#0a0a0c] -rotate-45 top-4 -left-2"></div>
                            </div>
                        </div>
                        <h2 class="gsap-reveal text-2xl sm:text-3xl tracking-tight font-medium uppercase">SECURE</h2>
                    </div>
                </div>

                <!-- Bottom Text -->
                <div class="flex flex-col sm:flex-row justify-between text-xs mt-2 opacity-80">
                    <span>LOADING <span class="animate-pulse">...</span></span>
                    <span>//KEY: <span class="text-white opacity-90">0x7B11</span>//</span>
                </div>
                <div class="text-xs opacity-70">
                    SYNCING - ID: 88-K - DATA DROP: 0.2% SECTOR 9
                </div>
            </div>
        </section>

        <!-- PANEL 3: 909 (Purple/Blue) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-t from-[#756a9f]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-4 text-[#756a9f]">
                
                <div class="flex flex-col sm:flex-row items-center justify-between gap-8">
                    
                    <!-- Left: Node Diagram -->
                    <div class="relative w-32 h-16 flex-shrink-0 hidden sm:block">
                        <!-- Lines -->
                        <div class="absolute top-2 left-2 w-20 h-px bg-[#756a9f]/50"></div>
                        <div class="absolute top-10 left-6 w-16 h-px bg-[#756a9f]/50"></div>
                        <div class="absolute top-2 left-22 w-px h-8 bg-[#756a9f]/50 rotate-45 origin-top-left"></div>
                        <div class="absolute top-10 left-6 w-px h-6 bg-[#756a9f]/50 -rotate-45 origin-top-left"></div>
                        
                        <!-- Nodes -->
                        <div class="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-1.5 left-21.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-9.5 left-5.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-9.5 left-21.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-14.5 left-1.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        
                        <!-- Arrows -->
                        <div class="absolute top-5 left-0 flex items-center gap-1">
                            <iconify-icon icon="solar:alt-arrow-right-linear" class="text-lg"></iconify-icon>
                            <div class="w-8 h-px bg-[#756a9f]"></div>
                        </div>
                    </div>

                    <!-- Middle: Title -->
                    <div class="flex items-center gap-4">
                        <div class="flex items-center gap-1 sm:hidden">
                            <iconify-icon icon="solar:alt-arrow-right-linear" class="text-lg"></iconify-icon>
                            <div class="w-8 h-px bg-[#756a9f]"></div>
                        </div>
                        <h3 class="gsap-reveal text-5xl sm:text-6xl tracking-tight font-normal">909</h3>
                    </div>

                    <!-- Right: Info & Circle -->
                    <div class="flex items-center gap-6">
                        <div class="flex flex-col text-xs">
                            <span>SECURITY-NET</span>
                            <span class="opacity-70">ACTIVE</span>
                            <span class="opacity-70">STAT: 0xBB02</span>
                            <div class="flex gap-1 mt-1">
                                <div class="w-1.5 h-1.5 rounded-full border border-current"></div>
                                <div class="w-1.5 h-1.5 rounded-full border border-current"></div>
                                <div class="w-1.5 h-1.5 rounded-full border border-current bg-current"></div>
                            </div>
                        </div>
                        
                        <!-- Circular Dots -->
                        <div class="relative w-12 h-12 animate-spin" style="animation-duration: 10s; animation-timing-function: linear;">
                            <div class="absolute inset-0" id="circle-dots">
                                <!-- Populated by JS -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Text -->
                <div class="text-center sm:text-left text-xs flex flex-col sm:flex-row sm:justify-center gap-2 sm:gap-8 mt-2 opacity-80">
                    <span>UPLINK STATUS - <span class="text-white opacity-90">ONLINE</span></span>
                    <span>POWER: 48V - DRAW: 1.8A</span>
                </div>
            </div>
        </section>

    </main>

    <script>
        // GSAP Masked Staggered Reveal Logic
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.gsap-reveal').forEach(el => {
            const text = el.innerText;
            const words = text.split(' ');
            el.innerHTML = '';
            words.forEach((word, i) => {
                const outer = document.createElement('span');
                // Ensure overflow hidden and adjust alignment
                outer.className = 'inline-block overflow-hidden pb-1 -mb-1 align-bottom';
                const inner = document.createElement('span');
                inner.className = 'inline-block translate-y-[120%]';
                inner.innerText = word + (i < words.length - 1 ? '\\u00A0' : '');
                outer.appendChild(inner);
                el.appendChild(outer);
                
                gsap.to(inner, {
                    y: "0%",
                    duration: 0.8,
                    ease: "power3.out",
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                    }
                });
            });
        });

        // Populate Matrix 1
        const matrixContainer = document.getElementById('matrix-1');
        let matrixHTML = '';
        for(let i=0; i<80; i++) {
            const isFilled = Math.random() > 0.6;
            const isDim = Math.random() > 0.5;
            matrixHTML += \`<div class="w-1.5 h-1.5 rounded-full border border-current \${isFilled ? 'bg-current' : ''} \${isDim ? 'opacity-30' : ''}"></div>\`;
        }
        matrixContainer.innerHTML = matrixHTML;

        // Populate Circle Dots
        const circleContainer = document.getElementById('circle-dots');
        let circleHTML = '';
        for(let i=0; i<12; i++) {
            const angle = (i * 30) * (Math.PI / 180);
            const x = 24 + 20 * Math.cos(angle) - 3; // center 24, radius 20, offset half width
            const y = 24 + 20 * Math.sin(angle) - 3;
            const isFilled = i % 3 === 0;
            circleHTML += \`<div class="absolute w-1.5 h-1.5 rounded-full border border-current \${isFilled ? 'bg-current' : ''}" style="left: \${x}px; top: \${y}px;"></div>\`;
        }
        circleContainer.innerHTML = circleHTML;

        // WebGL-simulated Canvas Animation
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function initCanvas() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            particles = [];
            const numParticles = window.innerWidth < 640 ? 30 : 70;
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5
                });
            }
        }

        function drawLines() {
            ctx.clearRect(0, 0, width, height);
            ctx.lineWidth = 1;
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                for (let j = i + 1; j < particles.length; j++) {
                    let p2 = particles[j];
                    let dx = p.x - p2.x;
                    let dy = p.y - p2.y;
                    let dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = \`rgba(255, 255, 255, \${0.28 + (1 - dist / 120) * 0.42})\`;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
                ctx.fillRect(p.x - 0.75, p.y - 0.75, 1.5, 1.5);
            }
            requestAnimationFrame(drawLines);
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();
        drawLines();
    <\/script>
</body>
</html>`});var bu,ku=W(()=>{bu=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexus / Systems</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #050505;
        }
        .font-mono {
            font-family: 'JetBrains Mono', monospace;
        }
    </style>
</head>
<body class="text-zinc-300 min-h-screen flex flex-col overflow-x-hidden selection:bg-white/20 antialiased">

    <!-- Navbar / Top Brand -->
    <nav class="w-full relative z-20">
        <!-- Gradient Border Bottom -->
        <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div class="flex items-center gap-2 text-sm tracking-tight font-medium text-white">
                <iconify-icon icon="solar:atom-linear" width="20"></iconify-icon>
                <span>NEXUS / CORE</span>
            </div>
            <div class="flex items-center gap-6 text-xs font-mono text-zinc-500">
                <span class="hidden sm:block reveal-text">BUILD.v7.2.1</span>
                <span class="flex items-center gap-2 text-zinc-400">
                    <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span class="reveal-text">ACTIVE</span>
                </span>
            </div>
        </div>
    </nav>

    <!-- Main Layout with Vertical Container Lines -->
    <main class="flex-grow w-full max-w-7xl mx-auto relative grid grid-cols-1 lg:grid-cols-3">
        
        <!-- Gradient Container Borders -->
        <div class="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent z-20"></div>
        <div class="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent z-20"></div>

        <!-- Decoration: Corner Squares for Container Lines -->
        <div class="absolute -top-[1px] -left-[3px] w-[5px] h-[5px] bg-white z-20"></div>
        <div class="absolute -top-[1px] -right-[3px] w-[5px] h-[5px] bg-white z-20"></div>
        <div class="absolute -bottom-[1px] -left-[3px] w-[5px] h-[5px] bg-white z-20"></div>
        <div class="absolute -bottom-[1px] -right-[3px] w-[5px] h-[5px] bg-white z-20"></div>

        <!-- Section 01: Hypercube -->
        <div class="group relative p-8 lg:p-10 flex flex-col justify-between h-[600px] lg:h-[800px] overflow-hidden">
            <!-- Background Image Aura Asset -->
            <div class="absolute inset-0 z-0 opacity-[0.08] mix-blend-screen transition-opacity duration-1000 group-hover:opacity-[0.2]" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg'); background-size: cover; background-position: center;"></div>
            
            <!-- Gradient Divider Right -->
            <div class="hidden lg:block absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent z-20"></div>
            <!-- Gradient Divider Bottom (Mobile) -->
            <div class="block lg:hidden absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"></div>

            <!-- Header -->
            <div class="relative z-10 flex justify-between items-start font-mono text-xs text-zinc-500 uppercase tracking-widest">
                <span class="text-zinc-300 font-medium font-sans reveal-text">Prismatic Core</span>
                <span class="reveal-text">01//</span>
            </div>
            
            <!-- Description Top -->
            <p class="relative z-10 mt-8 text-xs text-zinc-400 leading-relaxed max-w-[280px] reveal-text">
                The foundational structure processes raw data streams, organizing chaotic inputs into structured geometric architectures.
            </p>

            <!-- Visual (Canvas) -->
            <div data-wireframe-visual class="relative z-10 flex-grow flex items-center justify-center py-12">
                <canvas id="canvas1" class="w-full max-w-[300px] aspect-square opacity-80 mix-blend-screen"></canvas>
                <!-- Axis Labels -->
                <span class="absolute left-0 top-1/2 text-[10px] text-zinc-700 font-mono -translate-y-1/2 reveal-text">Input</span>
                <span class="absolute right-0 top-1/2 text-[10px] text-zinc-700 font-mono -translate-y-1/2 reveal-text">Output</span>
            </div>

            <!-- Footer -->
            <div class="relative z-10 space-y-6">
                <div class="pt-4 relative">
                    <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
                    <h3 class="text-sm font-medium text-white mb-2 reveal-text">Sequence: Alpha</h3>
                    <p class="text-xs text-zinc-500 leading-relaxed reveal-text">
                        Nexus enables the synthesis of physical and virtual environments, unlocking realms previously hidden from standard view.
                    </p>
                </div>
                <!-- Mini Grid Decor -->
                <div class="flex justify-end">
                    <div class="grid grid-cols-4 grid-rows-3 gap-[1px] bg-[#1a1a1c] border border-[#1a1a1c] w-24 h-16 opacity-50">
                        <div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div>
                        <div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b] flex items-center justify-center"><div class="w-1 h-1 bg-white rounded-full"></div></div><div class="bg-[#09090b]"></div>
                        <div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div>
                    </div>
                </div>
                <div class="flex justify-between items-end font-mono text-[10px] text-zinc-600">
                    <span class="reveal-text">Nexus.sys</span>
                    <span class="reveal-text">V-00.XX.1024</span>
                </div>
            </div>
        </div>

        <!-- Section 02: Logic Cylinders -->
        <div class="group relative p-8 lg:p-10 flex flex-col justify-between h-[600px] lg:h-[800px] overflow-hidden">
            <!-- Background Image Aura Asset -->
            <div class="absolute inset-0 z-0 opacity-[0.08] mix-blend-screen transition-opacity duration-1000 group-hover:opacity-[0.2]" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_1600w.jpg'); background-size: cover; background-position: center;"></div>
            
            <!-- Gradient Divider Right -->
            <div class="hidden lg:block absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent z-20"></div>
            <!-- Gradient Divider Bottom (Mobile) -->
            <div class="block lg:hidden absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"></div>

            <div class="relative z-10 flex justify-between items-start font-mono text-xs text-zinc-500 uppercase tracking-widest">
                <span class="text-zinc-300 font-medium font-sans reveal-text">Cognitive Mesh</span>
                <span class="reveal-text">02//</span>
            </div>

            <p class="relative z-10 mt-8 text-xs text-zinc-400 leading-relaxed max-w-[280px] reveal-text">
                Data flow stems from legacy nodes. An interface born from overlapping algorithms and encrypted keys.
            </p>

            <div data-wireframe-visual class="relative z-10 flex-grow flex items-center justify-center py-12">
                <canvas id="canvas2" class="w-full max-w-[300px] aspect-square opacity-80 mix-blend-screen"></canvas>
                <!-- Floating Glyphs -->
                <div class="absolute inset-0 flex items-center justify-center gap-16 pointer-events-none">
                    <iconify-icon icon="solar:code-scan-linear" class="text-white/20 text-4xl animate-[pulse_4s_ease-in-out_infinite]"></iconify-icon>
                    <iconify-icon icon="solar:database-linear" class="text-white/20 text-4xl animate-[pulse_4s_ease-in-out_infinite] animation-delay-2000"></iconify-icon>
                </div>
            </div>

            <div class="relative z-10 space-y-6">
                <div class="text-right">
                    <p class="text-xs text-zinc-500 leading-relaxed max-w-[240px] ml-auto reveal-text">
                        Within Nexus, metrics are redefined: bridging analytical processing and immersive interaction. The ultimate signature of digital evolution.
                    </p>
                </div>
                <div class="relative flex justify-between items-end font-mono text-[10px] text-zinc-600 pt-12">
                    <div class="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <span class="reveal-text">Nexus.sys</span>
                    <span class="reveal-text">SYS.MEM.OVERFLOW</span>
                </div>
            </div>
        </div>

        <!-- Section 03: Esoteric Sphere -->
        <div class="group relative p-8 lg:p-10 flex flex-col justify-between h-[600px] lg:h-[800px] overflow-hidden">
            <!-- Background Image Aura Asset -->
            <div class="absolute inset-0 z-0 opacity-[0.08] mix-blend-screen transition-opacity duration-1000 group-hover:opacity-[0.2]" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg'); background-size: cover; background-position: center;"></div>

            <div class="relative z-10 flex justify-between items-start font-mono text-xs text-zinc-500 uppercase tracking-widest">
                <span class="text-zinc-300 font-medium font-sans reveal-text">Kinetic Frequency</span>
                <span class="reveal-text">03//</span>
            </div>

            <p class="relative z-10 mt-8 text-xs text-zinc-400 leading-relaxed max-w-[280px] reveal-text">
                "Frequency" denotes the synchronization of fragmented data packets, individuals, or systems oscillating at parallel states.
            </p>

            <div data-wireframe-visual class="relative z-10 flex-grow flex items-center justify-center py-12">
                <canvas id="canvas3" class="w-full max-w-[300px] aspect-square opacity-80 mix-blend-screen"></canvas>
            </div>

            <div class="relative z-10 space-y-6">
                 <div class="pt-4 relative">
                    <div class="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <h3 class="text-sm font-medium text-white mb-2 reveal-text">State: Synchronized</h3>
                    <p class="text-xs text-zinc-500 leading-relaxed reveal-text">
                        Frequency: Data equals the juncture between pure logic and tactile feedback. Tuning to optimal processing bandwidths.
                    </p>
                </div>
                <div class="flex justify-between items-end font-mono text-[10px] text-zinc-600">
                    <div class="flex gap-2">
                        <span class="w-2 h-2 rounded-full border border-zinc-700"></span>
                        <span class="w-2 h-2 rounded-full border border-zinc-700 bg-white/20"></span>
                        <span class="w-2 h-2 rounded-full border border-zinc-700"></span>
                    </div>
                    <span class="reveal-text">Nexus.sys</span>
                </div>
            </div>
        </div>
    </main>

    <!-- Bottom Interface Bar -->
    <footer class="w-full relative z-20 bg-[#09090b]">
        <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div class="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between font-mono text-[10px] text-zinc-600 uppercase">
            <div class="flex items-center gap-4">
                <span class="reveal-text">Ping: 2ms</span>
                <span class="hidden sm:inline reveal-text">Cipher: RSA-4096</span>
            </div>
            <div class="flex items-center gap-4">
                <a href="#" class="hover:text-white transition-colors">Privacy</a>
                <a href="#" class="hover:text-white transition-colors">Terms</a>
                <a href="#" class="hover:text-white transition-colors">Doctrine</a>
            </div>
        </div>
    </footer>

    <!-- WebGL-like Canvas Animation Script & GSAP Reveal -->
    <script>
        // GSAP ScrollTrigger Text Reveal
        gsap.registerPlugin(ScrollTrigger);
        
        document.querySelectorAll('.reveal-text').forEach(el => {
            const text = el.innerText.trim();
            const words = text.split(/\\s+/);
            el.innerHTML = words.map(word => 
                \`<span style="overflow: hidden; display: inline-block; vertical-align: top;"><span style="display: inline-block; transform: translateY(100%);" class="reveal-word">\${word}</span></span>\`
            ).join(' ');

            gsap.to(el.querySelectorAll('.reveal-word'), {
                y: '0%',
                duration: 0.8,
                stagger: 0.03,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 95%',
                    toggleActions: 'play none none none'
                }
            });
        });

        // Wireframe Engine
        class WireframeEngine {
            constructor(canvasId, shapeType) {
                this.canvas = document.getElementById(canvasId);
                this.ctx = this.canvas.getContext('2d');
                this.width = this.canvas.offsetWidth;
                this.height = this.canvas.offsetHeight;
                this.canvas.width = this.width * 2; 
                this.canvas.height = this.height * 2;
                this.ctx.scale(2, 2);
                this.cx = this.width / 2;
                this.cy = this.height / 2;
                this.shapeType = shapeType;
                
                this.points = [];
                this.edges = [];
                this.angleX = 0;
                this.angleY = 0;
                
                this.initShape();
                this.animate();
            }

            initShape() {
                if (this.shapeType === 'cube') {
                    const s = 80;
                    this.points.push({x: s, y: s, z: s}, {x: -s, y: -s, z: s}, {x: -s, y: s, z: -s}, {x: s, y: -s, z: -s});
                    this.points.push({x: -s, y: -s, z: -s}, {x: s, y: s, z: -s}, {x: s, y: -s, z: s}, {x: -s, y: s, z: s});
                    this.edges.push([0,1], [0,2], [0,3], [1,2], [1,3], [2,3]);
                    this.edges.push([4,5], [4,6], [4,7], [5,6], [5,7], [6,7]);
                } else if (this.shapeType === 'cylinders') {
                    const r = 70;
                    const segments = 24;
                    for(let i=0; i<segments; i++) {
                        const theta = (i/segments) * Math.PI * 2;
                        this.points.push({ x: Math.cos(theta)*r, y: Math.sin(theta)*r, z: -30 });
                        this.points.push({ x: Math.cos(theta)*r, y: Math.sin(theta)*r, z: 30 });
                        let next = (i+1)%segments;
                        this.edges.push([i*2, next*2], [i*2+1, next*2+1], [i*2, i*2+1]);
                    }
                     let offset = this.points.length;
                     for(let i=0; i<segments; i++) {
                        const theta = (i/segments) * Math.PI * 2;
                        this.points.push({ x: Math.cos(theta)*r, y: -30, z: Math.sin(theta)*r });
                        this.points.push({ x: Math.cos(theta)*r, y: 30, z: Math.sin(theta)*r });
                        let next = (i+1)%segments;
                        this.edges.push([offset + i*2, offset + next*2], [offset + i*2+1, offset + next*2+1], [offset + i*2, offset + i*2+1]);
                    }
                } else if (this.shapeType === 'sphere') {
                    const t = (1.0 + Math.sqrt(5.0)) / 2.0;
                    const s = 50; 
                    const p = [
                        [-1,  t,  0], [ 1,  t,  0], [-1, -t,  0], [ 1, -t,  0],
                        [ 0, -1,  t], [ 0,  1,  t], [ 0, -1, -t], [ 0,  1, -t],
                        [ t,  0, -1], [ t,  0,  1], [-t,  0, -1], [-t,  0,  1]
                    ];
                    p.forEach(v => this.points.push({x: v[0]*s, y: v[1]*s, z: v[2]*s}));
                    for(let i=0; i<this.points.length; i++){
                        for(let j=i+1; j<this.points.length; j++){
                            let d = Math.hypot(this.points[i].x - this.points[j].x, this.points[i].y - this.points[j].y, this.points[i].z - this.points[j].z);
                            if(d < s*2.1) this.edges.push([i,j]);
                        }
                    }
                     p.forEach(v => this.points.push({x: v[0]*s*0.5, y: v[1]*s*0.5, z: v[2]*s*0.5}));
                     let off = 12;
                     for(let i=0; i<12; i++){
                        for(let j=i+1; j<12; j++){
                            let d = Math.hypot(this.points[off+i].x - this.points[off+j].x, this.points[off+i].y - this.points[off+j].y, this.points[off+i].z - this.points[off+j].z);
                            if(d < s*1.1) this.edges.push([off+i,off+j]);
                        }
                        this.edges.push([i, off+i]); 
                     }
                }
            }

            project(p) {
                let x = p.x * Math.cos(this.angleY) - p.z * Math.sin(this.angleY);
                let z = p.z * Math.cos(this.angleY) + p.x * Math.sin(this.angleY);
                let y = p.y * Math.cos(this.angleX) - z * Math.sin(this.angleX);
                z = z * Math.cos(this.angleX) + p.y * Math.sin(this.angleX);
                
                let fov = 400;
                let scale = fov / (fov + z);
                return { x: x * scale + this.cx, y: y * scale + this.cy, z: z };
            }

            animate() {
                this.ctx.clearRect(0, 0, this.width, this.height);
                this.angleY += 0.005;
                this.angleX += 0.002;
                
                this.ctx.lineWidth = 0.8;

                let projected = this.points.map(p => this.project(p));

                this.edges.forEach(e => {
                    let p1 = projected[e[0]];
                    let p2 = projected[e[1]];
                    let depth = (p1.z + p2.z) / 2;
                    let alpha = Math.max(0.1, (1 - (depth / 200)));
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = \`rgba(255, 255, 255, \${alpha * 0.4})\`;
                    this.ctx.stroke();
                });

                projected.forEach(p => {
                    let alpha = Math.max(0.1, (1 - (p.z / 200)));
                    if (alpha > 0.5) {
                        this.ctx.fillStyle = \`rgba(255, 255, 255, \${alpha})\`;
                        this.ctx.fillRect(p.x-1, p.y-1, 2, 2);
                    }
                });

                requestAnimationFrame(() => this.animate());
            }
        }

        window.onload = () => {
            new WireframeEngine('canvas1', 'cube');
            new WireframeEngine('canvas2', 'cylinders');
            new WireframeEngine('canvas3', 'sphere');
        };
    <\/script>
</body>
</html>`});var Su,Cu=W(()=>{Su=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyber Defenses</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400&family=Plus+Jakarta+Sans:wght@300;400&display=swap" rel="stylesheet">
</head>
<body class="bg-[#030303] min-h-screen flex flex-col items-center justify-center overflow-hidden text-white relative antialiased selection:bg-red-500/30" style="font-family: 'Plus Jakarta Sans', sans-serif;">
    
    <!-- Canvas for background line animation -->
    <canvas id="bg-canvas" class="absolute inset-0 z-0 opacity-50 pointer-events-none"></canvas>

    <!-- Ambient background glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[800px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

    <main class="relative z-10 flex flex-col items-center justify-center w-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6">
        
        <!-- 3D Card Carousel -->
        <div class="relative flex items-center justify-center w-full h-[400px] sm:h-[650px]" style="perspective: 1200px;">
            <div id="carousel" class="relative w-full h-full flex items-center justify-center" style="transform-style: preserve-3d;">
                
                <!-- Left Cards -->
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-0 bg-gradient-to-r from-[#0a0202] to-[#1f0505] border border-red-900/10 cursor-pointer pointer-events-auto" style="transform: translateX(-180%) translateZ(-400px) rotateY(35deg); opacity: 0.15; box-shadow: inset 0 0 20px rgba(0,0,0,0.8);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-10 bg-gradient-to-r from-[#140303] to-[#3d0a0a] border border-red-900/20 cursor-pointer pointer-events-auto" style="transform: translateX(-120%) translateZ(-250px) rotateY(25deg); opacity: 0.4; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-20 bg-gradient-to-r from-[#290606] to-[#6b1111] border border-red-700/30 cursor-pointer pointer-events-auto" style="transform: translateX(-60%) translateZ(-100px) rotateY(15deg); opacity: 0.7; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);"></div>

                <!-- Right Cards -->
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-0 bg-gradient-to-l from-[#0a0202] to-[#1f0505] border border-red-900/10 cursor-pointer pointer-events-auto" style="transform: translateX(180%) translateZ(-400px) rotateY(-35deg); opacity: 0.15; box-shadow: inset 0 0 20px rgba(0,0,0,0.8);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-10 bg-gradient-to-l from-[#140303] to-[#3d0a0a] border border-red-900/20 cursor-pointer pointer-events-auto" style="transform: translateX(120%) translateZ(-250px) rotateY(-25deg); opacity: 0.4; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-20 bg-gradient-to-l from-[#290606] to-[#6b1111] border border-red-700/30 cursor-pointer pointer-events-auto" style="transform: translateX(60%) translateZ(-100px) rotateY(-15deg); opacity: 0.7; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);"></div>

                <!-- Center Active Card -->
                <div class="card absolute w-36 sm:w-72 h-[269px] sm:h-[461px] bg-gradient-to-br from-[#ff4747] to-[#cc0000] rounded-xl flex items-center justify-center z-30 border border-red-300/40 overflow-hidden cursor-pointer pointer-events-auto" style="transform: translateZ(50px); box-shadow: 0 0 80px 15px rgba(220, 38, 38, 0.35), inset 0 0 30px rgba(255,255,255,0.15);">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg" class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply pointer-events-none" alt="Abstract Pattern">
                    <div class="relative flex w-full h-full pointer-events-none" style="background-image: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%), repeating-linear-gradient(-45deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 2px, transparent 2px, transparent 12px);">
                    </div>
                </div>
            </div>
        </div>

        <!-- Typography Section (Overlayed) -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-40" id="hero-text">
            
            <!-- Monospaced Technical Badge -->
            <div id="hero-badge" class="opacity-0 flex items-center gap-3 px-4 py-2 rounded-full bg-[#1a0505]/80 backdrop-blur-md text-red-400 text-xs font-light tracking-widest uppercase mb-8" style="font-family: 'DM Mono', monospace; box-shadow: 0 0 20px rgba(220,38,38,0.15); border: 1px solid transparent; background-clip: padding-box, border-box; background-origin: padding-box, border-box; background-image: linear-gradient(#1a0505, #1a0505), linear-gradient(to right, rgba(153,27,27,0.6), rgba(239,68,68,0.3));">
                <iconify-icon icon="solar:radar-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                <span>Continuous Network Surveillance</span>
            </div>
            
            <!-- Elegant Serif Headline -->
            <h1 class="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#f5f5f5] leading-none max-w-5xl flex flex-col items-center gap-y-2 sm:gap-y-4" style="font-family: 'Cormorant Garamond', serif; text-shadow: 0 10px 40px rgba(0,0,0,0.9);">
                <div class="flex flex-wrap justify-center gap-x-3 sm:gap-x-4">
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">Expose</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">hidden</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">vulnerabilities</span></span>
                </div>
                <div class="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 italic text-red-100">
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">within</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">your</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">cloud</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">infrastructure</span></span>
                </div>
            </h1>

            <!-- Clean Sans-Serif CTA -->
            <button id="hero-button" class="opacity-0 group relative mt-10 sm:mt-14 px-8 py-4 rounded-lg text-sm font-light text-white transition-all active:scale-95 pointer-events-auto flex items-center justify-center bg-red-600 border border-red-500/50 overflow-hidden" style="font-family: 'Plus Jakarta Sans', sans-serif;">
                <span class="absolute inset-0 w-full h-full bg-red-500 transition-all duration-500 ease-out [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(150%_at_50%_50%)] z-0"></span>
                <span class="relative z-10 flex items-center gap-2">
                    Start Threat Assessment
                    <iconify-icon icon="solar:arrow-right-linear" width="18" height="18" stroke-width="1.5"></iconify-icon>
                </span>
            </button>
        </div>
    </main>

    <script>
        // Background Canvas Animation
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function initCanvas() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            particles = [];
            const particleCount = window.innerWidth < 768 ? 40 : 100;
            
            for(let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    baseLength: Math.random() * 80 + 20,
                    speedY: Math.random() * 0.8 + 0.2,
                    baseOpacity: Math.random() * 0.2 + 0.05
                });
            }
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            const centerX = width / 2;
            const centerY = height / 2;
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            particles.forEach(p => {
                const distFromCenterX = Math.abs(p.x - centerX);
                const distFromCenterY = Math.abs(p.y - centerY);
                
                const proximityX = Math.max(0, 1 - (distFromCenterX / (width / 2)));
                const proximityY = Math.max(0, 1 - (distFromCenterY / (height / 2)));
                const centerProximity = proximityX * (0.4 + proximityY * 0.6);
                
                const currentLength = p.baseLength * (1 + centerProximity * 4); 
                
                const currentOpacity = Math.min(1.0, p.baseOpacity + (centerProximity * 2.0));
                const brightness = Math.floor(centerProximity * 180);
                
                ctx.beginPath();
                const grad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + currentLength);
                grad.addColorStop(0, \`rgba(220, 38, 38, 0)\`);
                grad.addColorStop(0.5, \`rgba(255, \${38 + brightness}, \${38 + brightness}, \${currentOpacity})\`);
                grad.addColorStop(1, \`rgba(220, 38, 38, 0)\`);
                
                ctx.strokeStyle = grad;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x, p.y + currentLength);
                ctx.stroke();

                p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5);
                
                if(p.y + currentLength < 0) {
                    p.y = height;
                    p.x = Math.random() * width;
                }
            });
            requestAnimationFrame(animateCanvas);
        }
        animateCanvas();

        // 3D Cards Floating, Mouse Tracking & Hover Animation
        const carousel = document.getElementById('carousel');
        const cards = document.querySelectorAll('.card');
        let time = 0;
        let targetRotateY = 0;
        let currentRotateY = 0;

        cards.forEach(card => {
            card.addEventListener('mouseenter', () => card.isHovered = true);
            card.addEventListener('mouseleave', () => card.isHovered = false);
            card.hoverAmt = 0;
        });

        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) - 0.5;
            targetRotateY = x * 40; 
        });

        function animateCards() {
            time += 0.015;
            currentRotateY += (targetRotateY - currentRotateY) * 0.08;
            carousel.style.transform = \`rotateY(\${currentRotateY}deg)\`;

            cards.forEach((card, index) => {
                if(!card.dataset.baseTransform) {
                    card.dataset.baseTransform = card.style.transform;
                    const match = card.dataset.baseTransform.match(/translateX\\(([^)]+)\\)/);
                    card.directionX = match ? parseFloat(match[1]) : 0;
                }
                
                const targetHover = card.isHovered ? 1 : 0;
                card.hoverAmt += (targetHover - card.hoverAmt) * 0.15;
                
                const hoverZ = card.hoverAmt * 60;
                const hoverY = card.hoverAmt * -20;
                let hoverX = 0;
                
                if (card.directionX < 0) hoverX = card.hoverAmt * -40;
                else if (card.directionX > 0) hoverX = card.hoverAmt * 40;

                const offset = Math.sin(time + (index * 0.5)) * 8;
                
                card.style.transform = \`\${card.dataset.baseTransform} translateX(\${hoverX}px) translateY(\${offset + hoverY}px) translateZ(\${hoverZ}px)\`;
            });
            requestAnimationFrame(animateCards);
        }
        animateCards();

        // Entrance Animation with GSAP Masked Reveal
        gsap.registerPlugin(ScrollTrigger);

        setTimeout(() => {
            // Animate headline words in a masked stagger
            gsap.to('.word', {
                y: "0%",
                duration: 1.2,
                stagger: 0.06,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#hero-text",
                    start: "top 90%"
                }
            });

            // Fade in and float up the badge and button sequentially
            gsap.fromTo(['#hero-badge', '#hero-button'], 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out", delay: 0.4 }
            );
        }, 150);
    <\/script>
</body>
</html>`});var Eu,_u=W(()=>{Eu=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Override</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-zinc-900 text-orange-500 font-mono w-full h-screen overflow-hidden relative select-none flex items-center justify-center">

    <!-- Aura Asset Background Image (Subtle) -->
    <div class="absolute inset-0 z-[-1] opacity-30 mix-blend-screen bg-cover bg-center" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg');"></div>

    <!-- Dither / Noise Overlay -->
    <div class="pointer-events-none absolute inset-0 z-50 opacity-[0.06] mix-blend-screen" style="background-image: url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 2 2%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect width=%221%22 height=%221%22 fill=%22%23f97316%22/%3E%3Crect x=%221%22 y=%221%22 width=%221%22 height=%221%22 fill=%22%23f97316%22/%3E%3C/svg%3E'); background-size: 2px 2px;"></div>

    <!-- WebGL-style Block by Block Animation Canvas -->
    <canvas id="grid-canvas" class="absolute inset-0 z-0 opacity-50" aria-hidden="true"></canvas>

    <!-- Viewport Corner Markers -->
    <div class="absolute top-4 left-4 w-4 h-4 border-t border-l border-orange-500/50 z-10"></div>
    <div class="absolute top-4 right-4 w-4 h-4 border-t border-r border-orange-500/50 z-10"></div>
    <div class="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-orange-500/50 z-10"></div>
    <div class="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-orange-500/50 z-10"></div>

    <!-- Background Telemetry Text -->
    <div class="absolute top-8 left-8 text-xs font-thin opacity-60 tracking-widest flex flex-col gap-1 z-10 hidden sm:flex">
        <span>SYNC_PHASE: <span id="log-frame">000000</span></span>
        <span>SYS_OVERRIDE_SEQ: [ ACTIVE ]</span>
        <span>ROUTE_MAP: TRACING</span>
        <span>CRIT_ALERT:</span>
        <span class="text-orange-600 animate-pulse">> ERR_TIMEOUT</span>
        <span id="typewriter" class="text-orange-400"></span>
    </div>

    <div class="absolute bottom-8 right-8 text-xs font-thin opacity-60 tracking-widest text-right z-10 hidden sm:block">
        <span id="log-mem">REG_ADDR: 0xFA48B2</span><br>
        <span>STATE: OVERRIDING</span>
    </div>

    <!-- Main Content Container -->
    <main class="relative z-20 w-full max-w-5xl h-full flex items-center justify-center px-4 sm:px-16">
        
        <!-- Container Lines & Mini Squares -->
        <div class="absolute inset-y-12 left-8 w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent hidden sm:block"></div>
        <div class="absolute inset-y-12 right-8 w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent hidden sm:block"></div>
        <div class="absolute top-1/4 left-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>
        <div class="absolute bottom-1/4 left-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>
        <div class="absolute top-1/3 right-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>
        <div class="absolute bottom-1/3 right-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>

        <!-- The Main Orange Block (Gradient Border for Premium Surface) -->
        <div class="p-[1px] bg-gradient-to-br from-orange-300 via-orange-600/70 to-orange-900/40 relative w-full shadow-[0_0_50px_rgba(249,115,22,0.15)]">
            
            <div class="relative w-full h-40 sm:h-48 bg-[#f97316] flex items-center transition-all duration-100">
                
                <!-- Top Left Tab -->
                <div class="absolute -top-6 left-0 h-6 w-24 bg-[#f97316] flex items-center justify-between px-2 text-xs font-normal text-zinc-800 tracking-widest border-b border-zinc-800">
                    <span>TIMEOUT</span>
                    <div class="w-1.5 h-1.5 bg-zinc-800"></div>
                </div>

                <!-- Right Edge Extrusions & Cutouts -->
                <div class="absolute -top-3 right-0 h-3 w-10 sm:w-16 bg-[#f97316]">
                    <div class="absolute top-1 right-1 w-1 h-1 bg-zinc-800"></div>
                </div>
                <div class="absolute -bottom-3 right-0 h-3 w-10 sm:w-16 bg-[#f97316]">
                    <div class="absolute bottom-1 right-1 w-1 h-1 bg-zinc-800"></div>
                </div>

                <!-- Left Edge Middle Cutout -->
                <div class="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-4 bg-zinc-800 border-r border-[#f97316]/50"></div>
                <!-- Right Edge Middle Cutout -->
                <div class="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-6 bg-zinc-800"></div>

                <!-- Inner Layout -->
                <div class="flex w-full h-full px-4 sm:px-8">
                    
                    <!-- Left Section: Warning & Text -->
                    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-6 w-full sm:w-1/2 border-zinc-800/30 sm:border-r pr-0 sm:pr-6 relative gs-reveal-container">
                        <!-- Subtle animated background highlight in left section -->
                        <div class="absolute inset-0 bg-white/5 opacity-0 animate-[pulse_4s_ease-in-out_infinite]" style="animation-direction: alternate;"></div>
                        
                        <iconify-icon icon="solar:round-transfer-horizontal-linear" class="text-zinc-800 text-5xl sm:text-7xl shrink-0 animate-spin-slow relative z-10" style="stroke-width: 1.5px; animation: spin 4s linear infinite;"></iconify-icon>
                        <div class="flex flex-col relative z-10 pt-1">
                            <h1 class="text-zinc-800 text-3xl sm:text-5xl font-light tracking-tight leading-[0.85] uppercase overflow-hidden pb-1">
                                <span class="block gs-reveal">System</span>
                            </h1>
                            <h2 class="text-zinc-800 text-3xl sm:text-5xl font-thin tracking-tight leading-[0.85] uppercase mt-1 overflow-hidden pb-1">
                                <span class="block gs-reveal">Override</span>
                            </h2>
                        </div>
                    </div>

                    <!-- Right Section: Data Matrix -->
                    <div class="hidden sm:flex flex-1 relative items-center justify-end pl-6">
                        <!-- Crosshairs / Guides -->
                        <div class="absolute inset-x-6 top-1/2 h-px bg-zinc-800/20 -translate-y-1/2"></div>
                        <div class="absolute inset-y-8 right-32 w-px bg-zinc-800/20"></div>
                        <div class="absolute inset-y-8 right-12 w-px bg-zinc-800/20"></div>

                        <!-- Data Grid Blocks -->
                        <div class="flex gap-4 sm:gap-6 relative z-10">
                            <!-- Block Group 1 -->
                            <div class="grid grid-cols-2 gap-1.5 h-fit">
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                            </div>
                            
                            <!-- Block Group 2 (Offset) -->
                            <div class="grid grid-cols-2 gap-1.5 h-fit mt-8">
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] opacity-20 animate-pulse"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                            </div>

                            <div class="w-2"></div>

                            <!-- Block Group 3 (Top aligned, missing piece blinking to suggest retry) -->
                            <div class="grid grid-cols-2 gap-1.5 h-fit">
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-transparent border border-zinc-800 relative animate-pulse">
                                    <div class="absolute inset-x-1 top-1/2 h-px bg-zinc-800"></div>
                                    <div class="absolute inset-y-1 left-1/2 w-px bg-zinc-800"></div>
                                </div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Left Micro Details -->
                <div class="absolute bottom-2 left-4 flex gap-2 items-center text-zinc-800">
                    <iconify-icon icon="solar:server-square-linear" class="text-lg opacity-80" style="stroke-width: 1.5px;"></iconify-icon>
                    <div class="flex flex-col">
                        <span class="text-xs tracking-widest opacity-80 uppercase font-light leading-none">AUTH_NODE // ACCESS DENIED</span>
                        <span class="text-xs tracking-widest opacity-60 uppercase font-thin mt-1">EXECUTING BYPASS PROTOCOL...</span>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script>
        // GSAP ScrollTrigger Masked Reveal
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".gs-reveal", {
            y: "120%",
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".gs-reveal-container",
                start: "top 95%",
            }
        });

        // WebGL-style Block by Block Animation (Simulated in 2D for constraints)
        const canvas = document.getElementById('grid-canvas');
        const ctx = canvas.getContext('2d');
        let width, height, time = 0;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        function draw() {
            ctx.clearRect(0, 0, width, height);
            time += 0.04;

            const blockSize = 48;
            const blockGap = 2;
            const pitch = blockSize + blockGap;
            const cols = Math.ceil(width / pitch);
            const rows = Math.ceil(height / pitch);

            const centerX = cols / 2;
            const centerY = rows / 2;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const dist = Math.sqrt(Math.pow(i - centerX, 2) + Math.pow(j - centerY, 2));
                    const wave = Math.sin(time - dist * 0.4);
                    
                    if (wave > 0) {
                        const alpha = wave * 0.15; 
                        ctx.fillStyle = \`rgba(249, 115, 22, \${alpha})\`;
                        
                        // Block scaling for "Z-depth" pulsing feel
                        const scale = wave * 0.7 + 0.3;
                        const size = blockSize * scale;
                        const offset = (pitch - size) / 2;
                        
                        ctx.fillRect(i * pitch + offset, j * pitch + offset, size, size);
                    }
                }
            }
            requestAnimationFrame(draw);
        }
        draw();

        // Simulate telemetry data updates
        setInterval(() => {
            const frameLog = document.getElementById('log-frame');
            const memLog = document.getElementById('log-mem');
            if (frameLog) frameLog.innerText = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
            if (memLog) {
                const hex = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
                memLog.innerText = \`REG_ADDR: 0x\${hex}\`;
            }
        }, 150);

        // Typewriter Animation Logic
        const typewriterElement = document.getElementById('typewriter');
        if (typewriterElement) {
            const phrases = ["> INITIATING BYPASS...", "> FLUSHING REGISTERS...", "> TIMEOUT: RETRYING..."];
            let phraseIdx = 0;
            let charIdx = 0;
            let isDeleting = false;
            
            function type() {
                const currentPhrase = phrases[phraseIdx];
                if (isDeleting) {
                    charIdx--;
                } else {
                    charIdx++;
                }
                
                typewriterElement.innerText = currentPhrase.substring(0, charIdx) + "_";
                
                let speed = isDeleting ? 30 : 60;
                
                if (!isDeleting && charIdx === currentPhrase.length) {
                    speed = 2000;
                    isDeleting = true;
                } else if (isDeleting && charIdx === 0) {
                    isDeleting = false;
                    phraseIdx = (phraseIdx + 1) % phrases.length;
                    speed = 500;
                }
                
                setTimeout(type, speed);
            }
            type();
        }
    <\/script>
</body>
</html>`});var zu,Tu=W(()=>{zu=`<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NexusNode Infrastructure</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP & ScrollTrigger for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-black text-white font-sans min-h-screen relative overflow-x-hidden selection:bg-white/20 selection:text-white font-light" style="background-color: #000; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">

    <!-- WebGL Background Container -->
    <div class="fixed inset-0 z-0 pointer-events-none">
        <canvas id="topo-canvas" class="w-full h-full"></canvas>
        <!-- Gradient overlay to fade bottom and top for text readability -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-10"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-90 z-10"></div>
    </div>

    <!-- Main Content -->
    <main class="relative z-20 flex flex-col min-h-screen">
        
        <!-- Navigation -->
        <header class="container mx-auto px-6 py-6 flex items-center justify-between reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out">
            <div class="flex items-center gap-2 text-white hover:text-neutral-300 transition-colors cursor-pointer">
                <iconify-icon icon="solar:radar-linear" width="24"></iconify-icon>
                <span class="font-light text-sm tracking-tight">NexusNode</span>
            </div>
            <nav class="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-extralight">
                <a href="#" class="hover:text-white transition-colors">Compute Clusters</a>
                <a href="#" class="hover:text-white transition-colors">Observability</a>
                <a href="#" class="hover:text-white transition-colors">Throughput</a>
                <a href="#" class="hover:text-white transition-colors">Consensus</a>
            </nav>
            <div class="flex items-center gap-4">
                <a href="#" class="hidden md:block text-sm text-neutral-400 font-extralight hover:text-white transition-colors">Sign In</a>
                <button class="bg-white text-black px-4 py-2 rounded-full text-sm font-light hover:bg-neutral-200 transition-colors">
                    Get Started
                </button>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="flex-grow flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
            <div class="max-w-4xl mx-auto flex flex-col items-center">
                
                <!-- Pill Badge -->
                <div class="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                    <span class="flex h-2 w-2 relative">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    <span class="text-xs font-extralight text-neutral-300 tracking-wide uppercase">Nexus OS v4.2 deployment ready</span>
                    <iconify-icon icon="solar:alt-arrow-right-linear" width="14" class="text-neutral-500"></iconify-icon>
                </div>

                <h1 class="mask-container text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.1]">
                    <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Orchestrate</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">the</span></span>
                    <br class="hidden md:block" />
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600 font-extralight inline-block">
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">neural</span></span>
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">compute</span></span>
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">fabric.</span></span>
                    </span>
                </h1>
                
                <p class="mask-container mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-extralight">
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Provision</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">ultra-low</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">latency</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">inference</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">nodes</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">with</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">zero</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">configuration.</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Enterprise-grade</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">AI</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">infrastructure</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">built</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">for</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">real-time</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">model</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">serving.</span></span>
                </p>
                
                <div class="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-300 mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <button class="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-light hover:bg-neutral-200 transition-colors group">
                        Launch Workspace
                        <iconify-icon icon="solar:transfer-horizontal-linear" width="18" class="group-hover:translate-x-0.5 transition-transform"></iconify-icon>
                    </button>
                    <button class="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-light text-white border border-white/20 hover:bg-white/5 transition-colors">
                        View Documentation
                    </button>
                </div>
            </div>
        </section>

        <!-- Features Matrix with Subtler Gradient Borders -->
        <section class="container mx-auto px-6 py-24 pb-32">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-300">
                
                <!-- Feature Card 1 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:scanner-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Homomorphic</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Encryption</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">Cryptographic isolation guaranteeing absolute data privacy during active model inference across edge nodes.</p>
                    </div>
                </div>

                <!-- Feature Card 2 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:cpu-bolt-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Serverless</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">GPUs</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">On-demand distributed compute layers. Elastic scaling powered by decentralized tensor processing units.</p>
                    </div>
                </div>

                <!-- Feature Card 3 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Global</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">State</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Sync</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">Distributed vector database integration. Access and mutate embedding states with sub-millisecond precision.</p>
                    </div>
                </div>

            </div>
        </section>

    </main>

    <!-- Interactions & WebGL Implementation -->
    <script>
        // Native Reveal Animations Trigger
        setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => {
                el.classList.remove('opacity-0', 'translate-y-4');
            });
        }, 100);

        // GSAP Masked Reveal Implementation
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.mask-container').forEach(container => {
            const words = container.querySelectorAll('.mask-word');
            gsap.to(words, {
                scrollTrigger: {
                    trigger: container,
                    start: "top 95%",
                },
                y: "0%",
                opacity: 1,
                duration: 1.1,
                stagger: 0.05,
                ease: "power4.out",
                delay: 0.1
            });
        });

        // WebGL Topography
        const canvas = document.getElementById('topo-canvas');
        const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false });

        if (gl) {
            const vsSource = \`
                attribute vec2 a_position;
                void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
            \`;

            const fsSource = \`
                precision highp float;
                uniform vec2 u_resolution;
                uniform float u_time;
                uniform float u_dpr;

                vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
                float snoise(vec2 v){
                    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                    vec2 i  = floor(v + dot(v, C.yy) );
                    vec2 x0 = v -   i + dot(i, C.xx);
                    vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1;
                    i = mod(i, 289.0);
                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                    m = m*m; m = m*m;
                    vec3 x = 2.0 * fract(p * C.www) - 1.0;
                    vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5);
                    vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                    vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                    return 130.0 * dot(m, g);
                }

                void main() {
                    vec2 st = gl_FragCoord.xy / u_resolution.xy;
                    st.x *= u_resolution.x / u_resolution.y;

                    // 1px physical grid rendering
                    float gridSize = 48.0 * u_dpr;
                    vec2 gridSt = gl_FragCoord.xy / gridSize;
                    vec2 gridFract = fract(gridSt);
                    float lineThickness = 1.0 / gridSize;
                    float gridLines = step(1.0 - lineThickness, gridFract.x) + step(1.0 - lineThickness, gridFract.y);
                    gridLines = clamp(gridLines, 0.0, 1.0) * 0.12; 

                    // Ultra-thin Topographic Lines
                    float noiseScale = 1.4;
                    vec2 noisePos = st * noiseScale + vec2(u_time * 0.015, u_time * 0.025);
                    float n = snoise(noisePos) * 0.5 + 0.5;
                    float numBands = 10.0;
                    float bandVal = n * numBands;
                    float triangleWave = abs(fract(bandVal) - 0.5) * 2.0; 
                    
                    // Thinner smoothstep constraint for fine industrial aesthetic
                    float topoLines = smoothstep(0.02, 0.00, triangleWave) * 0.45;

                    vec3 color = vec3(0.0);
                    color += vec3(1.0) * gridLines;
                    color += vec3(1.0) * topoLines;

                    gl_FragColor = vec4(color, 1.0);
                }
            \`;

            function createShader(gl, type, source) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                return shader;
            }

            const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
            const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);

            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

            const positionLocation = gl.getAttribLocation(program, "a_position");
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
            const timeLocation = gl.getUniformLocation(program, "u_time");
            const dprLocation = gl.getUniformLocation(program, "u_dpr");

            function resizeCanvas() {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                gl.viewport(0, 0, canvas.width, canvas.height);
                gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
                gl.uniform1f(dprLocation, dpr);
            }

            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();

            let startTime = performance.now();
            function render(time) {
                gl.uniform1f(timeLocation, (time - startTime) * 0.001);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                requestAnimationFrame(render);
            }
            requestAnimationFrame(render);
        }
    <\/script>
</body>
</html>`});function We(e,t,n){return Math.min(n,Math.max(t,e))}function le(e,t,n=1){return Math.max(n,Math.round(e*t))}function wf(e){return e==="cylinders"||e==="sphere"?e:"cube"}function nt(e,t=3){let n=Number(e).toFixed(t);return n.includes(".")?n:`${n}.0`}function bf(e,t="dark"){return e==null?t:e==="light"||e===1||e==="1"?"light":"dark"}function Mu(){if(typeof document>"u"||typeof window>"u")return"dark";let e=document.documentElement,t=e.dataset.scheme??e.dataset.theme;return t==="light"||t==="dark"?t:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function kf(e){let[t,n]=(0,rt.useState)(Mu);return(0,rt.useEffect)(()=>{if(!e||typeof document>"u"||typeof window>"u")return;let r=document.documentElement,i=window.matchMedia("(prefers-color-scheme: dark)"),a=()=>n(Mu()),o=new MutationObserver(a);return o.observe(r,{attributes:!0,attributeFilter:["data-scheme","data-theme"]}),i.addEventListener("change",a),a(),()=>{o.disconnect(),i.removeEventListener("change",a)}},[e]),t}function Lu(e,t){return typeof e=="function"?e(t):e}function is(e,{mode:t}){let n=e.replaceAll("time += 0.015;","time += 0.015 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");return t==="light"&&(n=n.replaceAll("ctx.fillStyle = '#020804';",`ctx.fillStyle = '${he}';`).replaceAll("rgba(52,211,153,","rgba(4,120,87,")),n}function Sf(e,t){let n=t.mode,r=Lu(e.background,n),i=JSON.stringify(e.targets).replace(/</g,"\\u003c"),a=JSON.stringify({mode:n,speed:t.speed,size:t.size,gap:t.gap,length:t.length,density:t.density,strokeWidth:t.strokeWidth,opacity:t.opacity}).replace(/</g,"\\u003c"),o=e.patch?e.patch(e.source,{variant:t.variant,size:t.size,gap:t.gap,length:t.length,density:t.density,strokeWidth:t.strokeWidth,mode:n}):e.source,s=`<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: ${r} !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; }
body > * { visibility: hidden !important; }
body[data-threeui-ready] > [data-threeui-role] { visibility: visible !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; }
[data-threeui-role="ui"] { position: relative !important; z-index: 1 !important; width: min(calc(100% - 32px), var(--threeui-target-width, 1040px)) !important; max-width: none !important; max-height: calc(100% - 32px) !important; margin: auto !important; overflow: auto !important; opacity: 1 !important; transform: none !important; filter: none !important; flex: none !important; box-sizing: border-box !important; }
${e.focusCss??""}
</style>`,l=`<script data-threeui-controls>
(function () {
  var controls = ${a};
  window.__SF_CONTROLS = controls;
  var origin = performance.now();
  var virtual = 0;
  var last = origin;
  var performanceNow = performance.now.bind(performance);
  var dateNow = Date.now.bind(Date);
  var dateOrigin = dateNow();
  performance.now = function () {
    var real = performanceNow();
    virtual += (real - last) * (controls.speed || 1);
    last = real;
    return origin + virtual;
  };
  Date.now = function () {
    return dateOrigin + (performance.now() - origin);
  };
  var raf = window.requestAnimationFrame.bind(window);
  window.requestAnimationFrame = function (callback) {
    return raf(function () {
      callback(performance.now());
    });
  };
  function applyVisual() {
    var opacity = controls.opacity == null ? 1 : controls.opacity;
    var size = controls.size == null ? 1 : controls.size;
    Array.prototype.forEach.call(document.querySelectorAll('[data-threeui-role]'), function (element) {
      element.style.opacity = String(opacity);
      if (element.getAttribute('data-threeui-role') === 'ui') {
        element.style.transform = 'scale(' + size + ')';
        element.style.transformOrigin = 'center center';
      }
    });
  }
  window.addEventListener('message', function (event) {
    if (!event.data || event.data.type !== 'threeui-controls') return;
    var next = event.data.controls || {};
    Object.keys(next).forEach(function (key) { controls[key] = next[key]; });
    applyVisual();
  });
  window.__SF_APPLY_CONTROLS = applyVisual;
})();
<\/script>`,d=`<script data-threeui-focus>
(function () {
  var isolated = false;
  function isolate() {
    if (isolated) return;
    var specs = ${i};
    var roots = [];
    specs.forEach(function (spec) {
      var element = document.querySelector(spec.selector);
      if (!element) return;
      element.setAttribute('data-threeui-role', spec.role);
      if (spec.width) element.style.setProperty('--threeui-target-width', spec.width);
      if (!roots.some(function (root) { return root.contains(element); })) roots.push(element);
    });
    if (!roots.length) return;
    isolated = true;
    roots.forEach(function (root) { document.body.appendChild(root); });
    Array.from(document.body.children).forEach(function (element) {
      if (roots.indexOf(element) !== -1) return;
      element.setAttribute('data-threeui-residual', '');
      element.setAttribute('aria-hidden', 'true');
      if ('inert' in element) element.inert = true;
    });
    document.body.setAttribute('data-threeui-ready', '');
    if (window.__SF_APPLY_CONTROLS) window.__SF_APPLY_CONTROLS();
    requestAnimationFrame(function () { window.dispatchEvent(new Event('resize')); });
  }
  function scheduleIsolation() { setTimeout(isolate, 100); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleIsolation, { once: true });
  else scheduleIsolation();
  window.addEventListener('load', isolate, { once: true });
})();
<\/script>`;return o.replace(/<head([^>]*)>/i,`<head$1>${l}${s}`).replace(/<\/body>/i,`${d}</body>`)}function Cf({definition:e,variant:t="cube",mode:n,speed:r=ge.speed,size:i=ge.size,gap:a=ge.gap,length:o=ge.length,density:s=ge.density,strokeWidth:l=ge.strokeWidth,opacity:d=ge.opacity,hue:g=ge.hue,saturation:h=ge.saturation,brightness:f=ge.brightness,className:x,style:y}){let b=(0,rt.useRef)(null),F=n??e.defaultMode??ge.mode,u=kf(F==="auto"),c=F==="auto"?u:bf(F,ge.mode),p=Lu(e.background,c),v=We(r,0,3),k=We(i,.05,200),S=We(a,0,64),C=We(o,.35,2.5),E=We(s,.25,2.5),N=We(l,.25,8),z=We(d,.05,1),Me=We(g,-180,180),ur=We(h,0,2),ss=We(f,.35,1.65),ls=(0,rt.useMemo)(()=>Sf(e,{variant:t,mode:c,speed:ge.speed,size:k,gap:S,length:C,density:E,strokeWidth:N,opacity:ge.opacity}),[e,c,E,S,C,k,N,t]);(0,rt.useEffect)(()=>{let cs=b.current?.contentWindow;cs&&cs.postMessage({type:"threeui-controls",controls:{mode:c,speed:v,size:k,gap:S,length:C,density:E,strokeWidth:N,opacity:z}},"*")},[c,E,S,C,z,k,v,N,ls]);let Uu=Me===0&&ur===1&&ss===1?void 0:`hue-rotate(${Me}deg) saturate(${ur}) brightness(${ss})`;return(0,as.jsx)("iframe",{ref:b,className:x,title:e.title,srcDoc:ls,sandbox:"allow-scripts",loading:"eager",style:{display:"block",width:"100%",height:"100%",border:0,background:p,filter:Uu,...y}})}function Z(e){return function(t){return(0,as.jsx)(Cf,{...t,definition:e})}}var as,rt,ge,he,rs,U,Pu,Fu,ju,yg,wg,bg,kg,Sg,Cg,Eg,_g,Au,Ru,Nu,zg,Ou,Tg,Iu,Bu=W(()=>{as=vn(ns(),1),rt=vn(yn(),1);qd();Kd();Jd();tu();ru();au();su();lu();du();pu();gu();mu();xu();wu();ku();Cu();_u();Tu();ge={mode:"dark",speed:1,size:1,gap:2,length:1,density:1,strokeWidth:1,opacity:1,hue:0,saturation:1,brightness:1},he="#eef1f6";rs=`
[data-threeui-role="ui"].flex-grow {
  flex: none !important;
  width: min(calc(100% - 32px), var(--threeui-target-width, 360px)) !important;
  height: auto !important;
  min-height: 0 !important;
  max-height: calc(100% - 32px) !important;
  aspect-ratio: 1 / 1 !important;
  margin: 0 !important;
  overflow: hidden !important;
}
[data-threeui-role="ui"] > canvas {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
}
`;U={constellationField:{title:"Constellation Field",source:Xd,supportsMode:!0,background:e=>e==="light"?he:"#070914",targets:[{selector:"#constellationCanvas",role:"background"}],patch(e,{size:t,length:n,density:r,strokeWidth:i,mode:a}){let o=e.replace("const LINK = 160;",`const LINK = ${Math.round(160*n)};`).replace("const MAX_NODES = window.innerWidth < 768 ? 40 : 85;",`const MAX_NODES = window.innerWidth < 768 ? ${le(40,r,8)} : ${le(85,r,12)};`).replace("radius: Math.random() * 2.4 + 1.8",`radius: (Math.random() * 2.4 + 1.8) * ${t}`).replace("ctx.lineWidth = 1;",`ctx.lineWidth = ${Number(Math.max(.25,i).toFixed(2))};`).replace("node.x += node.vx;","node.x += node.vx * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("node.y += node.vy;","node.y += node.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");return a==="light"&&(o=o.replace("ctx.strokeStyle = '#E6C879';","ctx.strokeStyle = '#8B6914';").replace("ctx.fillStyle = '#E6C879';","ctx.fillStyle = '#8B6914';")),o}},particleDrift:{title:"Particle Drift",source:Qd,supportsMode:!0,background:e=>e==="light"?he:"#030509",targets:[{selector:"#particle-canvas",role:"background"}],patch(e,{size:t,length:n,density:r,mode:i}){let a=Math.round(120*n),o=i==="light"?.22:.15,s=e.replace("Array.from({ length: 90 })",`Array.from({ length: ${le(90,r,12)} })`).replace("Array.from({ length: 25 })",`Array.from({ length: ${le(25,r,4)} })`).replace("length: Math.random() * 100 + 50,",`length: (Math.random() * 100 + 50) * ${n},`).replace("n.y += n.vy; // Slow drift","n.y += n.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1); // Slow drift").replace("b.y -= b.speed;","b.y -= b.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("if(d < 120) {",`if(d < ${a}) {`).replace("0.15 * (1 - d/120)",`${o} * (1 - d/${a})`).replace("ctx.lineWidth = 1.5;",`ctx.lineWidth = ${Number((1.5*t).toFixed(2))};`);return i==="light"&&(s=s.replaceAll("rgba(96, 165, 250,","rgba(37, 99, 235,").replaceAll("rgba(156, 163, 175,","rgba(36, 48, 68,").replace("ctx.fillStyle = dist < 180 ? '#60A5FA' : 'rgba(36, 48, 68, 0.4)';","ctx.fillStyle = dist < 180 ? '#2563EB' : 'rgba(36, 48, 68, 0.55)';")),s}},particleNetwork:{title:"Particle Network",source:Zd,supportsMode:!0,background:e=>e==="light"?he:"#05070d",targets:[{selector:"#particle-canvas",role:"background"}],patch(e,{size:t,length:n,density:r,mode:i}){let a=e.replace("const particleCount = 200;",`const particleCount = ${le(200,r,40)};`).replace("this.length = Math.random() * 2 + 0.5;",`this.length = (Math.random() * 2 + 0.5) * ${n};`).replace("this.z -= this.speed;","this.z -= this.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("const fov = 300;",`const fov = ${Math.round(300/Math.max(.4,t))};`);return i==="light"&&(a=a.replace("ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';","ctx.fillStyle = 'rgba(238, 241, 246, 0.55)';").replace("const hue = Math.random() > 0.5 ? '200, 220, 255' : '106, 157, 237';","const hue = Math.random() > 0.5 ? '36, 48, 68' : '37, 99, 235';")),a}},fluxVortex:{title:"Flux Vortex",source:eu,background:"#050505",targets:[{selector:"#webgl-canvas",role:"background"}],patch(e,{size:t,density:n}){return e.replace("const vortexCount = 9500;",`const vortexCount = ${le(9500,n,1200)};`).replace("const particlesCount = 300;",`const particlesCount = ${le(300,n,40)};`).replace("size: 0.006, // Smaller dots requested",`size: ${Number((.006*t).toFixed(4))}, // Smaller dots requested`).replace("size: 0.008,",`size: ${Number((.008*t).toFixed(4))},`)}},portalField:{title:"Portal Field",source:nu,background:"#05060a",targets:[{selector:"#webgl-container",role:"background"}],patch(e,{size:t,length:n}){return e.replace("float d1 = sdArc(st, center, 0.6, 0.02, 0.15);",`float d1 = sdArc(st, center, ${nt(.6*n,3)}, ${nt(.02*t,4)}, 0.15);`).replace("float d2 = sdArc(st, center, 0.65, 0.06, 0.2);",`float d2 = sdArc(st, center, ${nt(.65*n,3)}, ${nt(.06*t,4)}, 0.2);`)}},flowField:{title:"Flow Field",source:iu,background:"#0a0a0a",targets:[{selector:"#canvas",role:"background"}],patch(e,{size:t,length:n,density:r}){return e.replace(/<script defer src="https:\/\/static\.cloudflareinsights\.com\/beacon\.min\.js[^>]*><\/script>/,"").replace("const PARTICLE_COUNT = 2500;",`const PARTICLE_COUNT = ${le(2500,r,300)};`).replace("let NOISE_SCALE = 0.0025;",`let NOISE_SCALE = ${Number((.0025/n).toFixed(6))};`).replace("time += 0.0008;","time += 0.0008 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||0);").replace("let vx = Math.cos(angle) * p.speed * SPEED;","let vx = Math.cos(angle) * p.speed * SPEED * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||0);").replace("let vy = Math.sin(angle) * p.speed * SPEED;","let vy = Math.sin(angle) * p.speed * SPEED * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||0);").replace("ctx.lineWidth = p.size;",`ctx.lineWidth = p.size * ${Number(t.toFixed(3))};`)}},amberHalftone:{title:"Amber Halftone",source:ou,supportsMode:!0,background:e=>e==="light"?he:"#0A0A0A",targets:[{selector:"#webgl-halftone",role:"background"}],patch(e,{size:t,length:n,density:r,mode:i}){let a=Number((.085/Math.max(.25,r)).toFixed(4)),o=Math.max(12,Math.ceil(2.8/a)),s=Number((9*t).toFixed(2)),l=Number((6*n).toFixed(2)),d=e.replace("const gridSize = 20;",`const gridSize = ${o};`).replace("positions.push(x * 0.15, y * 0.15, 0);",`positions.push(x * ${a}, y * ${a}, 0);`).replace("float animatedScale = scale * (sin(dist * 6.0 - time * 2.5) * 0.5 + 0.5);",`float animatedScale = scale * (sin(dist * ${nt(l,2)} - time * 2.5) * 0.5 + 0.5);`).replace("gl_PointSize = animatedScale * 5.0;",`gl_PointSize = animatedScale * ${nt(s,2)};`).replace("material.uniforms.time.value = clock.getElapsedTime();","material.uniforms.time.value = clock.getElapsedTime() * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");return i==="light"&&(d=d.replace("renderer.setClearColor(0x0A0A0A, 1);","renderer.setClearColor(0xeef1f6, 1);").replace("color1: { value: new THREE.Color(0xFBBF24) },","color1: { value: new THREE.Color(0xB45309) },").replace("color2: { value: new THREE.Color(0xFFFFFF) }","color2: { value: new THREE.Color(0x1a1f2a) }")),d}},diagnosticsLayers:{title:"Layered Planes",source:Ri,supportsMode:!0,background:e=>e==="light"?he:"#020804",targets:[{selector:"#main-container article:nth-of-type(1) .flex-grow",role:"ui",width:"360px"}],focusCss:rs,patch:is},diagnosticsNodes:{title:"Node Cubes",source:Ri,supportsMode:!0,background:e=>e==="light"?he:"#020804",targets:[{selector:"#main-container article:nth-of-type(2) .flex-grow",role:"ui",width:"360px"}],focusCss:rs,patch:is},diagnosticsFlow:{title:"Flowing Mesh",source:Ri,supportsMode:!0,background:e=>e==="light"?he:"#020804",targets:[{selector:"#main-container article:nth-of-type(3) .flex-grow",role:"ui",width:"360px"}],focusCss:rs,patch:is},signalParticles:{title:"Signal Particles",source:cu,supportsMode:!0,background:e=>e==="light"?he:"#0a0a0a",targets:[{selector:"#particle-canvas",role:"background"}],patch(e,{size:t,length:n,mode:r}){let i=e.replace("const spacing = 16;",`const spacing = ${Math.max(6,Math.round(16/Math.max(.35,n)))};`).replace("const dotRadius = 1.5;",`const dotRadius = ${Number((1.5*t).toFixed(2))};`).replace("time += 0.02;","time += 0.02 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");return r==="light"&&(i=i.replace("ctx.fillStyle = '#3b82f6'; // Blue highlight","ctx.fillStyle = '#1d4ed8'; // Blue highlight").replace("ctx.fillStyle = '#8b5cf6'; // Purple highlight","ctx.fillStyle = '#5b21b6'; // Purple highlight").replace("ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`;","ctx.fillStyle = `rgba(36, 48, 68, ${alpha})`;")),i}},skeuomorphicToggle:{title:"Skeuomorphic Toggle",source:uu,supportsMode:!0,defaultMode:"auto",background:e=>e==="light"?"#f8fafc":"#0b1220",targets:[{selector:"#skeuomorphic-toggle",role:"ui",width:"192px"}],focusCss:`
#skeuomorphic-toggle {
  width: 12rem !important;
  height: 4rem !important;
  margin: auto !important;
  overflow: visible !important;
  max-height: none !important;
}
`,patch(e,{mode:t}){return t!=="dark"?e:e.replace("var ON_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px), linear-gradient(180deg, #dbeafe 0%, #93c5fd 100%)';","var ON_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.035) 2px, rgba(255,255,255,0.035) 4px), linear-gradient(180deg, #1e3a8a 0%, #172554 100%)';").replace("var OFF_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px), linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%)';","var OFF_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.025) 2px, rgba(255,255,255,0.025) 4px), linear-gradient(180deg, #1e293b 0%, #0f172a 100%)';").replace("var ON_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.7), 0 0 0 6px rgba(239, 246, 255, 0.8), 0 0 25px 5px rgba(96, 165, 250, 0.4)';","var ON_SHADOW = 'inset 0 5px 10px rgba(0,0,0,0.52), inset 0 -2px 4px rgba(147,197,253,0.24), 0 0 0 6px rgba(15,23,42,0.96), 0 0 26px 5px rgba(59,130,246,0.42)';").replace("var OFF_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.12), inset 0 -2px 4px rgba(255,255,255,0.55), 0 0 0 6px rgba(241, 245, 249, 0.9), 0 0 18px 2px rgba(148, 163, 184, 0.25)';","var OFF_SHADOW = 'inset 0 5px 10px rgba(0,0,0,0.56), inset 0 -2px 4px rgba(148,163,184,0.12), 0 0 0 6px rgba(15,23,42,0.96), 0 0 18px 2px rgba(30,64,175,0.2)';").replace("var ON_BORDER = '#60a5fa';","var ON_BORDER = '#3b82f6';").replace("var OFF_BORDER = '#94a3b8';","var OFF_BORDER = '#334155';").replace("background: linear-gradient(180deg, #ffffff 0%, #f4f8ff 100%);","background: linear-gradient(180deg, #e2e8f0 0%, #94a3b8 100%);").replace("border: 1px solid #e0edfa;","border: 1px solid #64748b;")}},matrixField:{title:"Matrix Field",source:fu,background:"#000000",targets:[{selector:"#glcanvas",role:"background"}],patch(e,{size:t,length:n}){return e.replace("float intensity = 0.006;",`float intensity = ${nt(.006*t*n,5)};`)}},gatewayFlow:{title:"Gateway Flow",source:hu,supportsMode:!0,background:e=>e==="light"?he:"#000000",targets:[{selector:"#flow-canvas",role:"background"}],patch(e,{size:t,density:n,mode:r}){let i=e.replace("const numPaths = 80;",`const numPaths = ${le(80,n,12)};`).replace("p.t += p.speed;","p.t += p.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("ctx.lineWidth = 1.2;",`ctx.lineWidth = ${Number((1.2*t).toFixed(2))};`);return r==="light"&&(i=i.replace("ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';","ctx.strokeStyle = 'rgba(26, 31, 42, 0.4)';").replace("ctx.fillStyle = `rgba(255, 255, 255, 0.7)`;","ctx.fillStyle = `rgba(26, 31, 42, 0.75)`;")),i}},connectivityGraph:{title:"Connectivity Graph",source:vu,supportsMode:!0,defaultMode:"light",background:e=>e==="light"?"#c4d9ef":"#0a1220",targets:[{selector:"#networkCanvas",role:"background"}],patch(e,{size:t,length:n,density:r,mode:i}){let a=e.replace("const particleCount = window.innerWidth < 768 ? 150 : 400;",`const particleCount = window.innerWidth < 768 ? ${le(150,r,30)} : ${le(400,r,60)};`).replace("this.maxLength = 20 + Math.random() * 180;",`this.maxLength = (20 + Math.random() * 180) * ${n};`).replace("this.distance += this.speed;","this.distance += this.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("ctx.lineWidth = 0.5 + (distRatio * 2);",`ctx.lineWidth = (0.5 + (distRatio * 2)) * ${t};`);return i==="dark"&&(a=a.replace("const lightness = 15 + (distRatio * 35);","const lightness = 58 + (distRatio * 28);").replace("const tailColor = `hsla(${hue}, 90%, ${Math.max(5, lightness - 15)}%, ${this.alpha * 0.05})`;","const tailColor = `hsla(${hue}, 90%, ${Math.max(40, lightness - 15)}%, ${this.alpha * 0.08})`;")),a}},interfaceLines:{title:"Interface Lines",source:yu,supportsMode:!0,background:e=>e==="light"?he:"#050505",targets:[{selector:"#bg-canvas",role:"background"}],patch(e,{size:t,length:n,density:r,mode:i}){let a=Math.round(120*n),o=e.replace("const numParticles = window.innerWidth < 640 ? 30 : 70;",`const numParticles = window.innerWidth < 640 ? ${le(30,r,8)} : ${le(70,r,12)};`).replace("p.x += p.vx;","p.x += p.vx * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("p.y += p.vy;","p.y += p.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("if (dist < 120)",`if (dist < ${a})`).replace("ctx.lineWidth = 1;",`ctx.lineWidth = ${Number((1*t).toFixed(2))};`);return i==="light"?o=o.replace("ctx.strokeStyle = `rgba(255, 255, 255, ${0.28 + (1 - dist / 120) * 0.42})`;",`ctx.strokeStyle = \`rgba(26, 31, 42, \${0.28 + (1 - dist / ${a}) * 0.42})\`;`).replace("ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';","ctx.fillStyle = 'rgba(26, 31, 42, 0.85)';"):o=o.replace("ctx.strokeStyle = `rgba(255, 255, 255, ${0.28 + (1 - dist / 120) * 0.42})`;",`ctx.strokeStyle = \`rgba(255, 255, 255, \${0.28 + (1 - dist / ${a}) * 0.42})\`;`),o}},wireframeForms:{title:"Wireframe Forms",source:bu,supportsMode:!0,background:e=>e==="light"?he:"#050505",targets:[{selector:"main",role:"ui",width:"1040px"}],focusCss:`
main {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  justify-content: center !important;
  gap: clamp(1rem, 3vw, 2.5rem) !important;
  height: auto !important;
  min-height: 0 !important;
  padding: 1.5rem !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  grid-template-columns: none !important;
}
main > .absolute { display: none !important; }
main > .group {
  height: auto !important;
  min-height: 0 !important;
  padding: 0 !important;
  overflow: visible !important;
  background: transparent !important;
  flex: 0 0 auto !important;
  width: min(72vw, 480px) !important;
}
main > .group:not([data-wireframe-selected]) { display: none !important; }
main > .group > :not([data-wireframe-visual]) { display: none !important; }
main > .group > [data-wireframe-visual] {
  padding: 0 !important;
  flex-grow: 0 !important;
  width: 100% !important;
  aspect-ratio: 1 !important;
}
main > .group > [data-wireframe-visual] > :not(canvas) { display: none !important; }
#canvas1, #canvas2, #canvas3 {
  width: 100% !important;
  max-width: none !important;
  height: 100% !important;
  opacity: 1 !important;
  mix-blend-mode: normal !important;
}
`,patch(e,{variant:t,size:n,length:r,mode:i}){let a=wf(t),o={cube:"<!-- Section 01: Hypercube -->",cylinders:"<!-- Section 02: Logic Cylinders -->",sphere:"<!-- Section 03: Esoteric Sphere -->"}[a],s=e.replace(`${o}
        <div class="group`,`${o}
        <div data-wireframe-selected="${a}" class="group`).replace("this.angleY += 0.005;","this.angleY += 0.005 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("this.angleX += 0.002;","this.angleX += 0.002 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("const s = 80;",`const s = ${Math.round(80*r)};`).replace("const r = 70;",`const r = ${Math.round(70*r)};`).replace("const s = 50; ",`const s = ${Math.round(50*r)}; `).replace("this.ctx.lineWidth = 0.8;",`this.ctx.lineWidth = ${Number((.8*n).toFixed(2))};`);return i==="light"&&(s=s.replace("this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.4})`;","this.ctx.strokeStyle = `rgba(26, 31, 42, ${alpha * 0.45})`;").replace("this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;","this.ctx.fillStyle = `rgba(26, 31, 42, ${alpha})`;")),s}},defenseLines:{title:"Defense Lines",source:Su,supportsMode:!0,background:e=>e==="light"?"#f4ecec":"#120303",targets:[{selector:"#bg-canvas",role:"background"}],patch(e,{size:t,length:n,density:r,mode:i}){let a=e.replace("const particleCount = window.innerWidth < 768 ? 40 : 100;",`const particleCount = window.innerWidth < 768 ? ${le(40,r,8)} : ${le(100,r,16)};`).replace("baseLength: Math.random() * 80 + 20,",`baseLength: (Math.random() * 80 + 20) * ${n},`).replace("p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5);","p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5) * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("ctx.lineWidth = 0.5;",`ctx.lineWidth = ${Number((.5*t).toFixed(2))};`);return i==="light"&&(a=a.replaceAll("rgba(220, 38, 38, 0)","rgba(153, 27, 27, 0)").replace("grad.addColorStop(0.5, `rgba(255, ${38 + brightness}, ${38 + brightness}, ${currentOpacity})`);","grad.addColorStop(0.5, `rgba(185, ${20 + brightness * 0.55}, ${20 + brightness * 0.55}, ${currentOpacity})`);")),a}},overrideGrid:{title:"Override Grid",source:Eu,supportsMode:!0,background:e=>e==="light"?he:"#050505",targets:[{selector:"#grid-canvas",role:"background"}],patch(e,{size:t,gap:n,mode:r}){let i=Math.max(8,Math.round(t)),a=Math.max(0,Math.round(n)),o=e.replace("const blockSize = 48;",`const blockSize = ${i};`).replace("const blockGap = 2;",`const blockGap = ${a};`).replace("time += 0.04;","time += 0.04 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");return r==="light"&&(o=o.replace("ctx.fillStyle = `rgba(249, 115, 22, ${alpha})`;","ctx.fillStyle = `rgba(194, 65, 12, ${alpha * 1.35})`;")),o}},topoField:{title:"Topo Field",source:zu,supportsMode:!0,background:e=>e==="light"?he:"#000000",targets:[{selector:"#topo-canvas",role:"background"}],patch(e,{length:t,density:n,mode:r}){let i=e.replace("float noiseScale = 1.4;",`float noiseScale = ${nt(1.4*t,3)};`).replace("float numBands = 10.0;",`float numBands = ${nt(10*n,2)};`);return r==="light"&&(i=i.replace("gridLines = clamp(gridLines, 0.0, 1.0) * 0.12;","gridLines = clamp(gridLines, 0.0, 1.0) * 0.55;").replace("float topoLines = smoothstep(0.02, 0.00, triangleWave) * 0.45;","float topoLines = smoothstep(0.03, 0.00, triangleWave) * 0.95;").replace(`vec3 color = vec3(0.0);
                    color += vec3(1.0) * gridLines;
                    color += vec3(1.0) * topoLines;`,`vec3 paper = vec3(0.933, 0.945, 0.965);
                    vec3 ink = vec3(0.12, 0.14, 0.18);
                    float lines = clamp(gridLines + topoLines, 0.0, 1.0);
                    vec3 color = mix(paper, ink, lines);`)),i}}};Pu=Z(U.constellationField),Fu=Z(U.particleDrift),ju=Z(U.particleNetwork),yg=Z(U.fluxVortex),wg=Z(U.portalField),bg=Z(U.flowField),kg=Z(U.amberHalftone),Sg={layers:U.diagnosticsLayers,nodes:U.diagnosticsNodes,flow:U.diagnosticsFlow},Cg=Z(U.signalParticles),Eg=Z(U.skeuomorphicToggle),_g=Z(U.matrixField),Au=Z(U.gatewayFlow),Ru=Z(U.connectivityGraph),Nu=Z(U.interfaceLines),zg=Z(U.wireframeForms),Ou=Z(U.defenseLines),Tg=Z(U.overrideGrid),Iu=Z(U.topoField)});var Hu=vn(yn()),Gu=vn(Wd());var Du=vn(ns(),1);Bu();var Ef={"constellation-field":Pu,"particle-drift":Fu,"particle-network":ju,"gateway-flow":Au,"connectivity-graph":Ru,"interface-lines":Nu,"defense-lines":Ou,"topo-field":Iu};function os({variant:e="constellation-field",...t}){let n=Ef[e];return(0,Du.jsx)(n,{...t})}window.ThreeUI=window.ThreeUI||{};window.ThreeUI.ConstellationField=function(e,t){let n=(0,Gu.createRoot)(e);return n.render(Hu.default.createElement(os,t||{})),{unmount:()=>n.unmount()}};})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
