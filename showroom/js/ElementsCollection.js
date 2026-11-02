(()=>{var cf=Object.create;var Uo=Object.defineProperty;var ff=Object.getOwnPropertyDescriptor;var df=Object.getOwnPropertyNames;var pf=Object.getPrototypeOf,hf=Object.prototype.hasOwnProperty;var Wt=(e,t)=>()=>(e&&(t=e(e=0)),t);var He=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Bo=(e,t)=>{for(var n in t)Uo(e,n,{get:t[n],enumerable:!0})},mf=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of df(t))!hf.call(e,o)&&o!==n&&Uo(e,o,{get:()=>t[o],enumerable:!(r=ff(t,o))||r.enumerable});return e};var Fe=(e,t,n)=>(n=e!=null?cf(pf(e)):{},mf(t||!e||!e.__esModule?Uo(n,"default",{value:e,enumerable:!0}):n,e));var ka=He(P=>{"use strict";var xn=Symbol.for("react.element"),gf=Symbol.for("react.portal"),vf=Symbol.for("react.fragment"),yf=Symbol.for("react.strict_mode"),wf=Symbol.for("react.profiler"),Sf=Symbol.for("react.provider"),xf=Symbol.for("react.context"),kf=Symbol.for("react.forward_ref"),Ef=Symbol.for("react.suspense"),Tf=Symbol.for("react.memo"),Cf=Symbol.for("react.lazy"),fa=Symbol.iterator;function _f(e){return e===null||typeof e!="object"?null:(e=fa&&e[fa]||e["@@iterator"],typeof e=="function"?e:null)}var ha={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ma=Object.assign,ga={};function Ht(e,t,n){this.props=e,this.context=t,this.refs=ga,this.updater=n||ha}Ht.prototype.isReactComponent={};Ht.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ht.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function va(){}va.prototype=Ht.prototype;function Wo(e,t,n){this.props=e,this.context=t,this.refs=ga,this.updater=n||ha}var Ho=Wo.prototype=new va;Ho.constructor=Wo;ma(Ho,Ht.prototype);Ho.isPureReactComponent=!0;var da=Array.isArray,ya=Object.prototype.hasOwnProperty,Vo={current:null},wa={key:!0,ref:!0,__self:!0,__source:!0};function Sa(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)ya.call(t,r)&&!wa.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:xn,type:e,key:l,ref:i,props:o,_owner:Vo.current}}function Pf(e,t){return{$$typeof:xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $o(e){return typeof e=="object"&&e!==null&&e.$$typeof===xn}function Mf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pa=/\/+/g;function jo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mf(""+e.key):t.toString(36)}function mr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case xn:case gf:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+jo(i,0):r,da(o)?(n="",e!=null&&(n=e.replace(pa,"$&/")+"/"),mr(o,t,n,"",function(c){return c})):o!=null&&($o(o)&&(o=Pf(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(pa,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",da(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+jo(l,a);i+=mr(l,t,n,s,o)}else if(s=_f(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+jo(l,a++),i+=mr(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function hr(e,t,n){if(e==null)return e;var r=[],o=0;return mr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Rf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ne={current:null},gr={transition:null},Lf={ReactCurrentDispatcher:ne,ReactCurrentBatchConfig:gr,ReactCurrentOwner:Vo};function xa(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:hr,forEach:function(e,t,n){hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hr(e,function(){t++}),t},toArray:function(e){return hr(e,function(t){return t})||[]},only:function(e){if(!$o(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=Ht;P.Fragment=vf;P.Profiler=wf;P.PureComponent=Wo;P.StrictMode=yf;P.Suspense=Ef;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lf;P.act=xa;P.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ma({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Vo.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)ya.call(t,s)&&!wa.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:xn,type:e.type,key:o,ref:l,props:r,_owner:i}};P.createContext=function(e){return e={$$typeof:xf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sf,_context:e},e.Consumer=e};P.createElement=Sa;P.createFactory=function(e){var t=Sa.bind(null,e);return t.type=e,t};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:kf,render:e}};P.isValidElement=$o;P.lazy=function(e){return{$$typeof:Cf,_payload:{_status:-1,_result:e},_init:Rf}};P.memo=function(e,t){return{$$typeof:Tf,type:e,compare:t===void 0?null:t}};P.startTransition=function(e){var t=gr.transition;gr.transition={};try{e()}finally{gr.transition=t}};P.unstable_act=xa;P.useCallback=function(e,t){return ne.current.useCallback(e,t)};P.useContext=function(e){return ne.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return ne.current.useDeferredValue(e)};P.useEffect=function(e,t){return ne.current.useEffect(e,t)};P.useId=function(){return ne.current.useId()};P.useImperativeHandle=function(e,t,n){return ne.current.useImperativeHandle(e,t,n)};P.useInsertionEffect=function(e,t){return ne.current.useInsertionEffect(e,t)};P.useLayoutEffect=function(e,t){return ne.current.useLayoutEffect(e,t)};P.useMemo=function(e,t){return ne.current.useMemo(e,t)};P.useReducer=function(e,t,n){return ne.current.useReducer(e,t,n)};P.useRef=function(e){return ne.current.useRef(e)};P.useState=function(e){return ne.current.useState(e)};P.useSyncExternalStore=function(e,t,n){return ne.current.useSyncExternalStore(e,t,n)};P.useTransition=function(){return ne.current.useTransition()};P.version="18.3.1"});var be=He((np,Ea)=>{"use strict";Ea.exports=ka()});var Da=He(A=>{"use strict";function Yo(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<vr(o,t))e[r]=t,e[n]=o,n=r;else break e}}function _e(e){return e.length===0?null:e[0]}function wr(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,l=o>>>1;r<l;){var i=2*(r+1)-1,a=e[i],s=i+1,c=e[s];if(0>vr(a,n))s<o&&0>vr(c,a)?(e[r]=c,e[s]=n,r=s):(e[r]=a,e[i]=n,r=i);else if(s<o&&0>vr(c,n))e[r]=c,e[s]=n,r=s;else break e}}return t}function vr(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Ta=performance,A.unstable_now=function(){return Ta.now()}):(Go=Date,Ca=Go.now(),A.unstable_now=function(){return Go.now()-Ca});var Ta,Go,Ca,ze=[],et=[],Nf=1,we=null,Z=3,Sr=!1,Tt=!1,En=!1,Ma=typeof setTimeout=="function"?setTimeout:null,Ra=typeof clearTimeout=="function"?clearTimeout:null,_a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ko(e){for(var t=_e(et);t!==null;){if(t.callback===null)wr(et);else if(t.startTime<=e)wr(et),t.sortIndex=t.expirationTime,Yo(ze,t);else break;t=_e(et)}}function Zo(e){if(En=!1,Ko(e),!Tt)if(_e(ze)!==null)Tt=!0,Jo(qo);else{var t=_e(et);t!==null&&bo(Zo,t.startTime-e)}}function qo(e,t){Tt=!1,En&&(En=!1,Ra(Tn),Tn=-1),Sr=!0;var n=Z;try{for(Ko(t),we=_e(ze);we!==null&&(!(we.expirationTime>t)||e&&!Aa());){var r=we.callback;if(typeof r=="function"){we.callback=null,Z=we.priorityLevel;var o=r(we.expirationTime<=t);t=A.unstable_now(),typeof o=="function"?we.callback=o:we===_e(ze)&&wr(ze),Ko(t)}else wr(ze);we=_e(ze)}if(we!==null)var l=!0;else{var i=_e(et);i!==null&&bo(Zo,i.startTime-t),l=!1}return l}finally{we=null,Z=n,Sr=!1}}var xr=!1,yr=null,Tn=-1,La=5,Na=-1;function Aa(){return!(A.unstable_now()-Na<La)}function Xo(){if(yr!==null){var e=A.unstable_now();Na=e;var t=!0;try{t=yr(!0,e)}finally{t?kn():(xr=!1,yr=null)}}else xr=!1}var kn;typeof _a=="function"?kn=function(){_a(Xo)}:typeof MessageChannel<"u"?(Qo=new MessageChannel,Pa=Qo.port2,Qo.port1.onmessage=Xo,kn=function(){Pa.postMessage(null)}):kn=function(){Ma(Xo,0)};var Qo,Pa;function Jo(e){yr=e,xr||(xr=!0,kn())}function bo(e,t){Tn=Ma(function(){e(A.unstable_now())},t)}A.unstable_IdlePriority=5;A.unstable_ImmediatePriority=1;A.unstable_LowPriority=4;A.unstable_NormalPriority=3;A.unstable_Profiling=null;A.unstable_UserBlockingPriority=2;A.unstable_cancelCallback=function(e){e.callback=null};A.unstable_continueExecution=function(){Tt||Sr||(Tt=!0,Jo(qo))};A.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):La=0<e?Math.floor(1e3/e):5};A.unstable_getCurrentPriorityLevel=function(){return Z};A.unstable_getFirstCallbackNode=function(){return _e(ze)};A.unstable_next=function(e){switch(Z){case 1:case 2:case 3:var t=3;break;default:t=Z}var n=Z;Z=t;try{return e()}finally{Z=n}};A.unstable_pauseExecution=function(){};A.unstable_requestPaint=function(){};A.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Z;Z=e;try{return t()}finally{Z=n}};A.unstable_scheduleCallback=function(e,t,n){var r=A.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:Nf++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,Yo(et,e),_e(ze)===null&&e===_e(et)&&(En?(Ra(Tn),Tn=-1):En=!0,bo(Zo,n-r))):(e.sortIndex=o,Yo(ze,e),Tt||Sr||(Tt=!0,Jo(qo))),e};A.unstable_shouldYield=Aa;A.unstable_wrapCallback=function(e){var t=Z;return function(){var n=Z;Z=t;try{return e.apply(this,arguments)}finally{Z=n}}}});var za=He((op,Fa)=>{"use strict";Fa.exports=Da()});var Bc=He(ge=>{"use strict";var Af=be(),he=za();function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hs=new Set,Xn={};function Ot(e,t){cn(e,t),cn(e+"Capture",t)}function cn(e,t){for(Xn[e]=t,e=0;e<t.length;e++)Hs.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kl=Object.prototype.hasOwnProperty,Df=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ia={},Oa={};function Ff(e){return kl.call(Oa,e)?!0:kl.call(Ia,e)?!1:Df.test(e)?Oa[e]=!0:(Ia[e]=!0,!1)}function zf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function If(e,t,n,r){if(t===null||typeof t>"u"||zf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function le(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){K[e]=new le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];K[t]=new le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){K[e]=new le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){K[e]=new le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){K[e]=new le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){K[e]=new le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){K[e]=new le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){K[e]=new le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){K[e]=new le(e,5,!1,e.toLowerCase(),null,!1,!1)});var hi=/[\-:]([a-z])/g;function mi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hi,mi);K[t]=new le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hi,mi);K[t]=new le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hi,mi);K[t]=new le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){K[e]=new le(e,1,!1,e.toLowerCase(),null,!1,!1)});K.xlinkHref=new le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){K[e]=new le(e,1,!1,e.toLowerCase(),null,!0,!0)});function gi(e,t,n,r){var o=K.hasOwnProperty(t)?K[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(If(t,n,o,r)&&(n=null),r||o===null?Ff(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=Af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kr=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),vi=Symbol.for("react.strict_mode"),El=Symbol.for("react.profiler"),Vs=Symbol.for("react.provider"),$s=Symbol.for("react.context"),yi=Symbol.for("react.forward_ref"),Tl=Symbol.for("react.suspense"),Cl=Symbol.for("react.suspense_list"),wi=Symbol.for("react.memo"),nt=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Gs=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ua=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=Ua&&e[Ua]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,el;function Dn(e){if(el===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);el=t&&t[1]||""}return`
`+el+e}var tl=!1;function nl(e,t){if(!e||tl)return"";tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dn(e):""}function Of(e){switch(e.tag){case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return e=nl(e.type,!1),e;case 11:return e=nl(e.type.render,!1),e;case 1:return e=nl(e.type,!0),e;default:return""}}function _l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Gt:return"Portal";case El:return"Profiler";case vi:return"StrictMode";case Tl:return"Suspense";case Cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $s:return(e.displayName||"Context")+".Consumer";case Vs:return(e._context.displayName||"Context")+".Provider";case yi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wi:return t=e.displayName||null,t!==null?t:_l(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return _l(e(t))}catch{}}return null}function Uf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _l(t);case 8:return t===vi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bf(e){var t=Xs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Er(e){e._valueTracker||(e._valueTracker=Bf(e))}function Qs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Xs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pl(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ba(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ys(e,t){t=t.checked,t!=null&&gi(e,"checked",t,!1)}function Ml(e,t){Ys(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rl(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ja(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rl(e,t,n){(t!=="number"||qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function rn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ll(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(Fn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function Ks(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ha(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tr,qs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jf=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){jf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function Js(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function bs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Js(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Wf=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Al(e,t){if(t){if(Wf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function Dl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fl=null;function Si(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zl=null,on=null,ln=null;function Va(e){if(e=fr(e)){if(typeof zl!="function")throw Error(y(280));var t=e.stateNode;t&&(t=_o(t),zl(e.stateNode,e.type,t))}}function eu(e){on?ln?ln.push(e):ln=[e]:on=e}function tu(){if(on){var e=on,t=ln;if(ln=on=null,Va(e),t)for(e=0;e<t.length;e++)Va(t[e])}}function nu(e,t){return e(t)}function ru(){}var rl=!1;function ou(e,t,n){if(rl)return e(t,n);rl=!0;try{return nu(e,t,n)}finally{rl=!1,(on!==null||ln!==null)&&(ru(),tu())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=_o(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var Il=!1;if(Ye)try{Vt={},Object.defineProperty(Vt,"passive",{get:function(){Il=!0}}),window.addEventListener("test",Vt,Vt),window.removeEventListener("test",Vt,Vt)}catch{Il=!1}var Vt;function Hf(e,t,n,r,o,l,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Un=!1,Jr=null,br=!1,Ol=null,Vf={onError:function(e){Un=!0,Jr=e}};function $f(e,t,n,r,o,l,i,a,s){Un=!1,Jr=null,Hf.apply(Vf,arguments)}function Gf(e,t,n,r,o,l,i,a,s){if($f.apply(this,arguments),Un){if(Un){var c=Jr;Un=!1,Jr=null}else throw Error(y(198));br||(br=!0,Ol=c)}}function Ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $a(e){if(Ut(e)!==e)throw Error(y(188))}function Xf(e){var t=e.alternate;if(!t){if(t=Ut(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return $a(o),e;if(l===r)return $a(o),t;l=l.sibling}throw Error(y(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function iu(e){return e=Xf(e),e!==null?au(e):null}function au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=au(e);if(t!==null)return t;e=e.sibling}return null}var su=he.unstable_scheduleCallback,Ga=he.unstable_cancelCallback,Qf=he.unstable_shouldYield,Yf=he.unstable_requestPaint,W=he.unstable_now,Kf=he.unstable_getCurrentPriorityLevel,xi=he.unstable_ImmediatePriority,uu=he.unstable_UserBlockingPriority,eo=he.unstable_NormalPriority,Zf=he.unstable_LowPriority,cu=he.unstable_IdlePriority,ko=null,Be=null;function qf(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(ko,e,void 0,(e.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:ed,Jf=Math.log,bf=Math.LN2;function ed(e){return e>>>=0,e===0?32:31-(Jf(e)/bf|0)|0}var Cr=64,_r=4194304;function zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function to(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=zn(a):(l&=i,l!==0&&(r=zn(l)))}else i=n&~o,i!==0?r=zn(i):l!==0&&(r=zn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ne(t),o=1<<n,r|=e[n],t&=~o;return r}function td(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Ne(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=td(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fu(){var e=Cr;return Cr<<=1,!(Cr&4194240)&&(Cr=64),e}function ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ne(t),e[t]=n}function rd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ne(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function ki(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ne(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var N=0;function du(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pu,Ei,hu,mu,gu,Bl=!1,Pr=[],st=null,ut=null,ct=null,Kn=new Map,Zn=new Map,ot=[],od="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xa(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zn.delete(t.pointerId)}}function _n(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=fr(t),t!==null&&Ei(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ld(e,t,n,r,o){switch(t){case"focusin":return st=_n(st,e,t,n,r,o),!0;case"dragenter":return ut=_n(ut,e,t,n,r,o),!0;case"mouseover":return ct=_n(ct,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Kn.set(l,_n(Kn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Zn.set(l,_n(Zn.get(l)||null,e,t,n,r,o)),!0}return!1}function vu(e){var t=Pt(e.target);if(t!==null){var n=Ut(t);if(n!==null){if(t=n.tag,t===13){if(t=lu(n),t!==null){e.blockedOn=t,gu(e.priority,function(){hu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fl=r,n.target.dispatchEvent(r),Fl=null}else return t=fr(n),t!==null&&Ei(t),e.blockedOn=n,!1;t.shift()}return!0}function Qa(e,t,n){Wr(e)&&n.delete(t)}function id(){Bl=!1,st!==null&&Wr(st)&&(st=null),ut!==null&&Wr(ut)&&(ut=null),ct!==null&&Wr(ct)&&(ct=null),Kn.forEach(Qa),Zn.forEach(Qa)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,Bl||(Bl=!0,he.unstable_scheduleCallback(he.unstable_NormalPriority,id)))}function qn(e){function t(o){return Pn(o,e)}if(0<Pr.length){Pn(Pr[0],e);for(var n=1;n<Pr.length;n++){var r=Pr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&Pn(st,e),ut!==null&&Pn(ut,e),ct!==null&&Pn(ct,e),Kn.forEach(t),Zn.forEach(t),n=0;n<ot.length;n++)r=ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ot.length&&(n=ot[0],n.blockedOn===null);)vu(n),n.blockedOn===null&&ot.shift()}var an=Je.ReactCurrentBatchConfig,no=!0;function ad(e,t,n,r){var o=N,l=an.transition;an.transition=null;try{N=1,Ti(e,t,n,r)}finally{N=o,an.transition=l}}function sd(e,t,n,r){var o=N,l=an.transition;an.transition=null;try{N=4,Ti(e,t,n,r)}finally{N=o,an.transition=l}}function Ti(e,t,n,r){if(no){var o=jl(e,t,n,r);if(o===null)fl(e,t,r,ro,n),Xa(e,r);else if(ld(o,e,t,n,r))r.stopPropagation();else if(Xa(e,r),t&4&&-1<od.indexOf(e)){for(;o!==null;){var l=fr(o);if(l!==null&&pu(l),l=jl(e,t,n,r),l===null&&fl(e,t,r,ro,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else fl(e,t,r,null,n)}}var ro=null;function jl(e,t,n,r){if(ro=null,e=Si(r),e=Pt(e),e!==null)if(t=Ut(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ro=e,null}function yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kf()){case xi:return 1;case uu:return 4;case eo:case Zf:return 16;case cu:return 536870912;default:return 16}default:return 16}}var it=null,Ci=null,Hr=null;function wu(){if(Hr)return Hr;var e,t=Ci,n=t.length,r,o="value"in it?it.value:it.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Hr=o.slice(e,1<r?1-r:void 0)}function Vr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mr(){return!0}function Ya(){return!1}function me(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Mr:Ya,this.isPropagationStopped=Ya,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mr)},persist:function(){},isPersistent:Mr}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_i=me(vn),cr=B({},vn,{view:0,detail:0}),ud=me(cr),ll,il,Mn,Eo=B({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mn&&(Mn&&e.type==="mousemove"?(ll=e.screenX-Mn.screenX,il=e.screenY-Mn.screenY):il=ll=0,Mn=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:il}}),Ka=me(Eo),cd=B({},Eo,{dataTransfer:0}),fd=me(cd),dd=B({},cr,{relatedTarget:0}),al=me(dd),pd=B({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),hd=me(pd),md=B({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gd=me(md),vd=B({},vn,{data:0}),Za=me(vd),yd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sd[e])?!!t[e]:!1}function Pi(){return xd}var kd=B({},cr,{key:function(e){if(e.key){var t=yd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pi,charCode:function(e){return e.type==="keypress"?Vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ed=me(kd),Td=B({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qa=me(Td),Cd=B({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pi}),_d=me(Cd),Pd=B({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Md=me(Pd),Rd=B({},Eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ld=me(Rd),Nd=[9,13,27,32],Mi=Ye&&"CompositionEvent"in window,Bn=null;Ye&&"documentMode"in document&&(Bn=document.documentMode);var Ad=Ye&&"TextEvent"in window&&!Bn,Su=Ye&&(!Mi||Bn&&8<Bn&&11>=Bn),Ja=" ",ba=!1;function xu(e,t){switch(e){case"keyup":return Nd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function Dd(e,t){switch(e){case"compositionend":return ku(t);case"keypress":return t.which!==32?null:(ba=!0,Ja);case"textInput":return e=t.data,e===Ja&&ba?null:e;default:return null}}function Fd(e,t){if(Qt)return e==="compositionend"||!Mi&&xu(e,t)?(e=wu(),Hr=Ci=it=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Su&&t.locale!=="ko"?null:t.data;default:return null}}var zd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zd[e.type]:t==="textarea"}function Eu(e,t,n,r){eu(r),t=oo(t,"onChange"),0<t.length&&(n=new _i("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jn=null,Jn=null;function Id(e){Fu(e,0)}function To(e){var t=Zt(e);if(Qs(t))return e}function Od(e,t){if(e==="change")return t}var Tu=!1;Ye&&(Ye?(Lr="oninput"in document,Lr||(sl=document.createElement("div"),sl.setAttribute("oninput","return;"),Lr=typeof sl.oninput=="function"),Rr=Lr):Rr=!1,Tu=Rr&&(!document.documentMode||9<document.documentMode));var Rr,Lr,sl;function ts(){jn&&(jn.detachEvent("onpropertychange",Cu),Jn=jn=null)}function Cu(e){if(e.propertyName==="value"&&To(Jn)){var t=[];Eu(t,Jn,e,Si(e)),ou(Id,t)}}function Ud(e,t,n){e==="focusin"?(ts(),jn=t,Jn=n,jn.attachEvent("onpropertychange",Cu)):e==="focusout"&&ts()}function Bd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return To(Jn)}function jd(e,t){if(e==="click")return To(t)}function Wd(e,t){if(e==="input"||e==="change")return To(t)}function Hd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Hd;function bn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!kl.call(t,o)||!De(e[o],t[o]))return!1}return!0}function ns(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rs(e,t){var n=ns(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ns(n)}}function _u(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_u(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pu(){for(var e=window,t=qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qr(e.document)}return t}function Ri(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vd(e){var t=Pu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_u(n.ownerDocument.documentElement,n)){if(r!==null&&Ri(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=rs(n,l);var i=rs(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $d=Ye&&"documentMode"in document&&11>=document.documentMode,Yt=null,Wl=null,Wn=null,Hl=!1;function os(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hl||Yt==null||Yt!==qr(r)||(r=Yt,"selectionStart"in r&&Ri(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wn&&bn(Wn,r)||(Wn=r,r=oo(Wl,"onSelect"),0<r.length&&(t=new _i("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yt)))}function Nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionend:Nr("Transition","TransitionEnd")},ul={},Mu={};Ye&&(Mu=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function Co(e){if(ul[e])return ul[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mu)return ul[e]=t[n];return e}var Ru=Co("animationend"),Lu=Co("animationiteration"),Nu=Co("animationstart"),Au=Co("transitionend"),Du=new Map,ls="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yt(e,t){Du.set(e,t),Ot(t,[e])}for(Ar=0;Ar<ls.length;Ar++)Dr=ls[Ar],is=Dr.toLowerCase(),as=Dr[0].toUpperCase()+Dr.slice(1),yt(is,"on"+as);var Dr,is,as,Ar;yt(Ru,"onAnimationEnd");yt(Lu,"onAnimationIteration");yt(Nu,"onAnimationStart");yt("dblclick","onDoubleClick");yt("focusin","onFocus");yt("focusout","onBlur");yt(Au,"onTransitionEnd");cn("onMouseEnter",["mouseout","mouseover"]);cn("onMouseLeave",["mouseout","mouseover"]);cn("onPointerEnter",["pointerout","pointerover"]);cn("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var In="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gd=new Set("cancel close invalid load scroll toggle".split(" ").concat(In));function ss(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gf(r,t,void 0,e),e.currentTarget=null}function Fu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;ss(o,a,c),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;ss(o,a,c),l=s}}}if(br)throw e=Ol,br=!1,Ol=null,e}function F(e,t){var n=t[Ql];n===void 0&&(n=t[Ql]=new Set);var r=e+"__bubble";n.has(r)||(zu(t,e,2,!1),n.add(r))}function cl(e,t,n){var r=0;t&&(r|=4),zu(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Fr]){e[Fr]=!0,Hs.forEach(function(n){n!=="selectionchange"&&(Gd.has(n)||cl(n,!1,e),cl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,cl("selectionchange",!1,t))}}function zu(e,t,n,r){switch(yu(t)){case 1:var o=ad;break;case 4:o=sd;break;default:o=Ti}n=o.bind(null,t,n,e),o=void 0,!Il||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function fl(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Pt(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}ou(function(){var c=l,h=Si(n),g=[];e:{var p=Du.get(e);if(p!==void 0){var x=_i,k=e;switch(e){case"keypress":if(Vr(n)===0)break e;case"keydown":case"keyup":x=Ed;break;case"focusin":k="focus",x=al;break;case"focusout":k="blur",x=al;break;case"beforeblur":case"afterblur":x=al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=_d;break;case Ru:case Lu:case Nu:x=hd;break;case Au:x=Md;break;case"scroll":x=ud;break;case"wheel":x=Ld;break;case"copy":case"cut":case"paste":x=gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=qa}var E=(t&4)!==0,L=!E&&e==="scroll",f=E?p!==null?p+"Capture":null:p;E=[];for(var u=c,d;u!==null;){d=u;var m=d.stateNode;if(d.tag===5&&m!==null&&(d=m,f!==null&&(m=Yn(u,f),m!=null&&E.push(tr(u,m,d)))),L)break;u=u.return}0<E.length&&(p=new x(p,k,null,n,h),g.push({event:p,listeners:E}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&n!==Fl&&(k=n.relatedTarget||n.fromElement)&&(Pt(k)||k[Ke]))break e;if((x||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=c,k=k?Pt(k):null,k!==null&&(L=Ut(k),k!==L||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=c),x!==k)){if(E=Ka,m="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(E=qa,m="onPointerLeave",f="onPointerEnter",u="pointer"),L=x==null?p:Zt(x),d=k==null?p:Zt(k),p=new E(m,u+"leave",x,n,h),p.target=L,p.relatedTarget=d,m=null,Pt(h)===c&&(E=new E(f,u+"enter",k,n,h),E.target=d,E.relatedTarget=L,m=E),L=m,x&&k)t:{for(E=x,f=k,u=0,d=E;d;d=$t(d))u++;for(d=0,m=f;m;m=$t(m))d++;for(;0<u-d;)E=$t(E),u--;for(;0<d-u;)f=$t(f),d--;for(;u--;){if(E===f||f!==null&&E===f.alternate)break t;E=$t(E),f=$t(f)}E=null}else E=null;x!==null&&us(g,p,x,E,!1),k!==null&&L!==null&&us(g,L,k,E,!0)}}e:{if(p=c?Zt(c):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var v=Od;else if(es(p))if(Tu)v=Wd;else{v=Bd;var S=Ud}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(v=jd);if(v&&(v=v(e,c))){Eu(g,v,n,h);break e}S&&S(e,p,c),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&Rl(p,"number",p.value)}switch(S=c?Zt(c):window,e){case"focusin":(es(S)||S.contentEditable==="true")&&(Yt=S,Wl=c,Wn=null);break;case"focusout":Wn=Wl=Yt=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,os(g,n,h);break;case"selectionchange":if($d)break;case"keydown":case"keyup":os(g,n,h)}var w;if(Mi)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Qt?xu(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Su&&n.locale!=="ko"&&(Qt||C!=="onCompositionStart"?C==="onCompositionEnd"&&Qt&&(w=wu()):(it=h,Ci="value"in it?it.value:it.textContent,Qt=!0)),S=oo(c,C),0<S.length&&(C=new Za(C,e,null,n,h),g.push({event:C,listeners:S}),w?C.data=w:(w=ku(n),w!==null&&(C.data=w)))),(w=Ad?Dd(e,n):Fd(e,n))&&(c=oo(c,"onBeforeInput"),0<c.length&&(h=new Za("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:c}),h.data=w))}Fu(g,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Yn(e,n),l!=null&&r.unshift(tr(e,l,o)),l=Yn(e,t),l!=null&&r.push(tr(e,l,o))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function us(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=Yn(n,l),s!=null&&i.unshift(tr(n,s,a))):o||(s=Yn(n,l),s!=null&&i.push(tr(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Xd=/\r\n?/g,Qd=/\u0000|\uFFFD/g;function cs(e){return(typeof e=="string"?e:""+e).replace(Xd,`
`).replace(Qd,"")}function zr(e,t,n){if(t=cs(t),cs(e)!==t&&n)throw Error(y(425))}function lo(){}var Vl=null,$l=null;function Gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xl=typeof setTimeout=="function"?setTimeout:void 0,Yd=typeof clearTimeout=="function"?clearTimeout:void 0,fs=typeof Promise=="function"?Promise:void 0,Kd=typeof queueMicrotask=="function"?queueMicrotask:typeof fs<"u"?function(e){return fs.resolve(null).then(e).catch(Zd)}:Xl;function Zd(e){setTimeout(function(){throw e})}function dl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);qn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ds(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+yn,nr="__reactProps$"+yn,Ke="__reactContainer$"+yn,Ql="__reactEvents$"+yn,qd="__reactListeners$"+yn,Jd="__reactHandles$"+yn;function Pt(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ds(e);e!==null;){if(n=e[Ue])return n;e=ds(e)}return t}e=n,n=e.parentNode}return null}function fr(e){return e=e[Ue]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function _o(e){return e[nr]||null}var Yl=[],qt=-1;function wt(e){return{current:e}}function z(e){0>qt||(e.current=Yl[qt],Yl[qt]=null,qt--)}function D(e,t){qt++,Yl[qt]=e.current,e.current=t}var vt={},ee=wt(vt),se=wt(!1),At=vt;function fn(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ue(e){return e=e.childContextTypes,e!=null}function io(){z(se),z(ee)}function ps(e,t,n){if(ee.current!==vt)throw Error(y(168));D(ee,t),D(se,n)}function Iu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(y(108,Uf(e)||"Unknown",o));return B({},n,r)}function ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,At=ee.current,D(ee,e),D(se,se.current),!0}function hs(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Iu(e,t,At),r.__reactInternalMemoizedMergedChildContext=e,z(se),z(ee),D(ee,e)):z(se),D(se,n)}var $e=null,Po=!1,pl=!1;function Ou(e){$e===null?$e=[e]:$e.push(e)}function bd(e){Po=!0,Ou(e)}function St(){if(!pl&&$e!==null){pl=!0;var e=0,t=N;try{var n=$e;for(N=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$e=null,Po=!1}catch(o){throw $e!==null&&($e=$e.slice(e+1)),su(xi,St),o}finally{N=t,pl=!1}}return null}var Jt=[],bt=0,so=null,uo=0,Se=[],xe=0,Dt=null,Ge=1,Xe="";function Ct(e,t){Jt[bt++]=uo,Jt[bt++]=so,so=e,uo=t}function Uu(e,t,n){Se[xe++]=Ge,Se[xe++]=Xe,Se[xe++]=Dt,Dt=e;var r=Ge;e=Xe;var o=32-Ne(r)-1;r&=~(1<<o),n+=1;var l=32-Ne(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Ge=1<<32-Ne(t)+o|n<<o|r,Xe=l+e}else Ge=1<<l|n<<o|r,Xe=e}function Li(e){e.return!==null&&(Ct(e,1),Uu(e,1,0))}function Ni(e){for(;e===so;)so=Jt[--bt],Jt[bt]=null,uo=Jt[--bt],Jt[bt]=null;for(;e===Dt;)Dt=Se[--xe],Se[xe]=null,Xe=Se[--xe],Se[xe]=null,Ge=Se[--xe],Se[xe]=null}var pe=null,de=null,I=!1,Le=null;function Bu(e,t){var n=ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ms(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pe=e,de=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pe=e,de=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dt!==null?{id:Ge,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pe=e,de=null,!0):!1;default:return!1}}function Kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zl(e){if(I){var t=de;if(t){var n=t;if(!ms(e,t)){if(Kl(e))throw Error(y(418));t=ft(n.nextSibling);var r=pe;t&&ms(e,t)?Bu(r,n):(e.flags=e.flags&-4097|2,I=!1,pe=e)}}else{if(Kl(e))throw Error(y(418));e.flags=e.flags&-4097|2,I=!1,pe=e}}}function gs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pe=e}function Ir(e){if(e!==pe)return!1;if(!I)return gs(e),I=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gl(e.type,e.memoizedProps)),t&&(t=de)){if(Kl(e))throw ju(),Error(y(418));for(;t;)Bu(e,t),t=ft(t.nextSibling)}if(gs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){de=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}de=null}}else de=pe?ft(e.stateNode.nextSibling):null;return!0}function ju(){for(var e=de;e;)e=ft(e.nextSibling)}function dn(){de=pe=null,I=!1}function Ai(e){Le===null?Le=[e]:Le.push(e)}var e0=Je.ReactCurrentBatchConfig;function Rn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function Or(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vs(e){var t=e._init;return t(e._payload)}function Wu(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=mt(f,u),f.index=0,f.sibling=null,f}function l(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,d,m){return u===null||u.tag!==6?(u=Sl(d,f.mode,m),u.return=f,u):(u=o(u,d),u.return=f,u)}function s(f,u,d,m){var v=d.type;return v===Xt?h(f,u,d.props.children,m,d.key):u!==null&&(u.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===nt&&vs(v)===u.type)?(m=o(u,d.props),m.ref=Rn(f,u,d),m.return=f,m):(m=Zr(d.type,d.key,d.props,null,f.mode,m),m.ref=Rn(f,u,d),m.return=f,m)}function c(f,u,d,m){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=xl(d,f.mode,m),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function h(f,u,d,m,v){return u===null||u.tag!==7?(u=Nt(d,f.mode,m,v),u.return=f,u):(u=o(u,d),u.return=f,u)}function g(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Sl(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case kr:return d=Zr(u.type,u.key,u.props,null,f.mode,d),d.ref=Rn(f,null,u),d.return=f,d;case Gt:return u=xl(u,f.mode,d),u.return=f,u;case nt:var m=u._init;return g(f,m(u._payload),d)}if(Fn(u)||Cn(u))return u=Nt(u,f.mode,d,null),u.return=f,u;Or(f,u)}return null}function p(f,u,d,m){var v=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return v!==null?null:a(f,u,""+d,m);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case kr:return d.key===v?s(f,u,d,m):null;case Gt:return d.key===v?c(f,u,d,m):null;case nt:return v=d._init,p(f,u,v(d._payload),m)}if(Fn(d)||Cn(d))return v!==null?null:h(f,u,d,m,null);Or(f,d)}return null}function x(f,u,d,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return f=f.get(d)||null,a(u,f,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case kr:return f=f.get(m.key===null?d:m.key)||null,s(u,f,m,v);case Gt:return f=f.get(m.key===null?d:m.key)||null,c(u,f,m,v);case nt:var S=m._init;return x(f,u,d,S(m._payload),v)}if(Fn(m)||Cn(m))return f=f.get(d)||null,h(u,f,m,v,null);Or(u,m)}return null}function k(f,u,d,m){for(var v=null,S=null,w=u,C=u=0,M=null;w!==null&&C<d.length;C++){w.index>C?(M=w,w=null):M=w.sibling;var _=p(f,w,d[C],m);if(_===null){w===null&&(w=M);break}e&&w&&_.alternate===null&&t(f,w),u=l(_,u,C),S===null?v=_:S.sibling=_,S=_,w=M}if(C===d.length)return n(f,w),I&&Ct(f,C),v;if(w===null){for(;C<d.length;C++)w=g(f,d[C],m),w!==null&&(u=l(w,u,C),S===null?v=w:S.sibling=w,S=w);return I&&Ct(f,C),v}for(w=r(f,w);C<d.length;C++)M=x(w,f,C,d[C],m),M!==null&&(e&&M.alternate!==null&&w.delete(M.key===null?C:M.key),u=l(M,u,C),S===null?v=M:S.sibling=M,S=M);return e&&w.forEach(function(te){return t(f,te)}),I&&Ct(f,C),v}function E(f,u,d,m){var v=Cn(d);if(typeof v!="function")throw Error(y(150));if(d=v.call(d),d==null)throw Error(y(151));for(var S=v=null,w=u,C=u=0,M=null,_=d.next();w!==null&&!_.done;C++,_=d.next()){w.index>C?(M=w,w=null):M=w.sibling;var te=p(f,w,_.value,m);if(te===null){w===null&&(w=M);break}e&&w&&te.alternate===null&&t(f,w),u=l(te,u,C),S===null?v=te:S.sibling=te,S=te,w=M}if(_.done)return n(f,w),I&&Ct(f,C),v;if(w===null){for(;!_.done;C++,_=d.next())_=g(f,_.value,m),_!==null&&(u=l(_,u,C),S===null?v=_:S.sibling=_,S=_);return I&&Ct(f,C),v}for(w=r(f,w);!_.done;C++,_=d.next())_=x(w,f,C,_.value,m),_!==null&&(e&&_.alternate!==null&&w.delete(_.key===null?C:_.key),u=l(_,u,C),S===null?v=_:S.sibling=_,S=_);return e&&w.forEach(function(Sn){return t(f,Sn)}),I&&Ct(f,C),v}function L(f,u,d,m){if(typeof d=="object"&&d!==null&&d.type===Xt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case kr:e:{for(var v=d.key,S=u;S!==null;){if(S.key===v){if(v=d.type,v===Xt){if(S.tag===7){n(f,S.sibling),u=o(S,d.props.children),u.return=f,f=u;break e}}else if(S.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===nt&&vs(v)===S.type){n(f,S.sibling),u=o(S,d.props),u.ref=Rn(f,S,d),u.return=f,f=u;break e}n(f,S);break}else t(f,S);S=S.sibling}d.type===Xt?(u=Nt(d.props.children,f.mode,m,d.key),u.return=f,f=u):(m=Zr(d.type,d.key,d.props,null,f.mode,m),m.ref=Rn(f,u,d),m.return=f,f=m)}return i(f);case Gt:e:{for(S=d.key;u!==null;){if(u.key===S)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=xl(d,f.mode,m),u.return=f,f=u}return i(f);case nt:return S=d._init,L(f,u,S(d._payload),m)}if(Fn(d))return k(f,u,d,m);if(Cn(d))return E(f,u,d,m);Or(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=Sl(d,f.mode,m),u.return=f,f=u),i(f)):n(f,u)}return L}var pn=Wu(!0),Hu=Wu(!1),co=wt(null),fo=null,en=null,Di=null;function Fi(){Di=en=fo=null}function zi(e){var t=co.current;z(co),e._currentValue=t}function ql(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){fo=e,Di=en=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ae=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(Di!==e)if(e={context:e,memoizedValue:t,next:null},en===null){if(fo===null)throw Error(y(308));en=e,fo.dependencies={lanes:0,firstContext:e}}else en=en.next=e;return t}var Mt=null;function Ii(e){Mt===null?Mt=[e]:Mt.push(e)}function Vu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ii(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ze(e,r)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rt=!1;function Oi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $u(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ze(e,n)}return o=r.interleaved,o===null?(t.next=t,Ii(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ze(e,n)}function $r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ki(e,n)}}function ys(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function po(e,t,n,r){var o=e.updateQueue;rt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?l=c:i.next=c,i=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==i&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=s))}if(l!==null){var g=o.baseState;i=0,h=c=s=null,a=l;do{var p=a.lane,x=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,E=a;switch(p=t,x=n,E.tag){case 1:if(k=E.payload,typeof k=="function"){g=k.call(x,g,p);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=E.payload,p=typeof k=="function"?k.call(x,g,p):k,p==null)break e;g=B({},g,p);break e;case 2:rt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else x={eventTime:x,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=x,s=g):h=h.next=x,i|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(h===null&&(s=g),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);zt|=i,e.lanes=i,e.memoizedState=g}}function ws(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(y(191,o));o.call(r)}}}var dr={},je=wt(dr),rr=wt(dr),or=wt(dr);function Rt(e){if(e===dr)throw Error(y(174));return e}function Ui(e,t){switch(D(or,t),D(rr,e),D(je,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nl(t,e)}z(je),D(je,t)}function hn(){z(je),z(rr),z(or)}function Gu(e){Rt(or.current);var t=Rt(je.current),n=Nl(t,e.type);t!==n&&(D(rr,e),D(je,n))}function Bi(e){rr.current===e&&(z(je),z(rr))}var O=wt(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hl=[];function ji(){for(var e=0;e<hl.length;e++)hl[e]._workInProgressVersionPrimary=null;hl.length=0}var Gr=Je.ReactCurrentDispatcher,ml=Je.ReactCurrentBatchConfig,Ft=0,U=null,V=null,G=null,mo=!1,Hn=!1,lr=0,t0=0;function q(){throw Error(y(321))}function Wi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function Hi(e,t,n,r,o,l){if(Ft=l,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gr.current=e===null||e.memoizedState===null?l0:i0,e=n(r,o),Hn){l=0;do{if(Hn=!1,lr=0,25<=l)throw Error(y(301));l+=1,G=V=null,t.updateQueue=null,Gr.current=a0,e=n(r,o)}while(Hn)}if(Gr.current=go,t=V!==null&&V.next!==null,Ft=0,G=V=U=null,mo=!1,t)throw Error(y(300));return e}function Vi(){var e=lr!==0;return lr=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return G===null?U.memoizedState=G=e:G=G.next=e,G}function Ce(){if(V===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=V.next;var t=G===null?U.memoizedState:G.next;if(t!==null)G=t,V=e;else{if(e===null)throw Error(y(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},G===null?U.memoizedState=G=e:G=G.next=e}return G}function ir(e,t){return typeof t=="function"?t(e):t}function gl(e){var t=Ce(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=V,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,c=l;do{var h=c.lane;if((Ft&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=g,i=r):s=s.next=g,U.lanes|=h,zt|=h}c=c.next}while(c!==null&&c!==l);s===null?i=r:s.next=a,De(r,t.memoizedState)||(ae=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,U.lanes|=l,zt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vl(e){var t=Ce(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);De(l,t.memoizedState)||(ae=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Xu(){}function Qu(e,t){var n=U,r=Ce(),o=t(),l=!De(r.memoizedState,o);if(l&&(r.memoizedState=o,ae=!0),r=r.queue,$i(Zu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||G!==null&&G.memoizedState.tag&1){if(n.flags|=2048,ar(9,Ku.bind(null,n,r,o,t),void 0,null),X===null)throw Error(y(349));Ft&30||Yu(n,t,o)}return o}function Yu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ku(e,t,n,r){t.value=n,t.getSnapshot=r,qu(t)&&Ju(e)}function Zu(e,t,n){return n(function(){qu(t)&&Ju(e)})}function qu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function Ju(e){var t=Ze(e,1);t!==null&&Ae(t,e,1,-1)}function Ss(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},t.queue=e,e=e.dispatch=o0.bind(null,U,e),[t.memoizedState,e]}function ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bu(){return Ce().memoizedState}function Xr(e,t,n,r){var o=Oe();U.flags|=e,o.memoizedState=ar(1|t,n,void 0,r===void 0?null:r)}function Mo(e,t,n,r){var o=Ce();r=r===void 0?null:r;var l=void 0;if(V!==null){var i=V.memoizedState;if(l=i.destroy,r!==null&&Wi(r,i.deps)){o.memoizedState=ar(t,n,l,r);return}}U.flags|=e,o.memoizedState=ar(1|t,n,l,r)}function xs(e,t){return Xr(8390656,8,e,t)}function $i(e,t){return Mo(2048,8,e,t)}function ec(e,t){return Mo(4,2,e,t)}function tc(e,t){return Mo(4,4,e,t)}function nc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rc(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4,4,nc.bind(null,t,e),n)}function Gi(){}function oc(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function lc(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ic(e,t,n){return Ft&21?(De(n,t)||(n=fu(),U.lanes|=n,zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ae=!0),e.memoizedState=n)}function n0(e,t){var n=N;N=n!==0&&4>n?n:4,e(!0);var r=ml.transition;ml.transition={};try{e(!1),t()}finally{N=n,ml.transition=r}}function ac(){return Ce().memoizedState}function r0(e,t,n){var r=ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sc(e))uc(t,n);else if(n=Vu(e,t,n,r),n!==null){var o=oe();Ae(n,e,r,o),cc(n,t,r)}}function o0(e,t,n){var r=ht(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sc(e))uc(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,De(a,i)){var s=t.interleaved;s===null?(o.next=o,Ii(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Vu(e,t,o,r),n!==null&&(o=oe(),Ae(n,e,r,o),cc(n,t,r))}}function sc(e){var t=e.alternate;return e===U||t!==null&&t===U}function uc(e,t){Hn=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ki(e,n)}}var go={readContext:Te,useCallback:q,useContext:q,useEffect:q,useImperativeHandle:q,useInsertionEffect:q,useLayoutEffect:q,useMemo:q,useReducer:q,useRef:q,useState:q,useDebugValue:q,useDeferredValue:q,useTransition:q,useMutableSource:q,useSyncExternalStore:q,useId:q,unstable_isNewReconciler:!1},l0={readContext:Te,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:xs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xr(4194308,4,nc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xr(4,2,e,t)},useMemo:function(e,t){var n=Oe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=r0.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:Ss,useDebugValue:Gi,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=Ss(!1),t=e[0];return e=n0.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,o=Oe();if(I){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),X===null)throw Error(y(349));Ft&30||Yu(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,xs(Zu.bind(null,r,l,e),[e]),r.flags|=2048,ar(9,Ku.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Oe(),t=X.identifierPrefix;if(I){var n=Xe,r=Ge;n=(r&~(1<<32-Ne(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=t0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},i0={readContext:Te,useCallback:oc,useContext:Te,useEffect:$i,useImperativeHandle:rc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:lc,useReducer:gl,useRef:bu,useState:function(){return gl(ir)},useDebugValue:Gi,useDeferredValue:function(e){var t=Ce();return ic(t,V.memoizedState,e)},useTransition:function(){var e=gl(ir)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:Xu,useSyncExternalStore:Qu,useId:ac,unstable_isNewReconciler:!1},a0={readContext:Te,useCallback:oc,useContext:Te,useEffect:$i,useImperativeHandle:rc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:lc,useReducer:vl,useRef:bu,useState:function(){return vl(ir)},useDebugValue:Gi,useDeferredValue:function(e){var t=Ce();return V===null?t.memoizedState=e:ic(t,V.memoizedState,e)},useTransition:function(){var e=vl(ir)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:Xu,useSyncExternalStore:Qu,useId:ac,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Jl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ro={isMounted:function(e){return(e=e._reactInternals)?Ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=oe(),o=ht(e),l=Qe(r,o);l.payload=t,n!=null&&(l.callback=n),t=dt(e,l,o),t!==null&&(Ae(t,e,o,r),$r(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=oe(),o=ht(e),l=Qe(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=dt(e,l,o),t!==null&&(Ae(t,e,o,r),$r(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),r=ht(e),o=Qe(n,r);o.tag=2,t!=null&&(o.callback=t),t=dt(e,o,r),t!==null&&(Ae(t,e,r,n),$r(t,e,r))}};function ks(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!bn(n,r)||!bn(o,l):!0}function fc(e,t,n){var r=!1,o=vt,l=t.contextType;return typeof l=="object"&&l!==null?l=Te(l):(o=ue(t)?At:ee.current,r=t.contextTypes,l=(r=r!=null)?fn(e,o):vt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ro,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Es(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ro.enqueueReplaceState(t,t.state,null)}function bl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Oi(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Te(l):(l=ue(t)?At:ee.current,o.context=fn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Jl(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ro.enqueueReplaceState(o,o.state,null),po(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function mn(e,t){try{var n="",r=t;do n+=Of(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ei(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var s0=typeof WeakMap=="function"?WeakMap:Map;function dc(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yo||(yo=!0,ci=r),ei(e,t)},n}function pc(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ei(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ei(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ts(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new s0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=k0.bind(null,e,t,n),t.then(e,e))}function Cs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _s(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var u0=Je.ReactCurrentOwner,ae=!1;function re(e,t,n,r){t.child=e===null?Hu(t,null,n,r):pn(t,e.child,n,r)}function Ps(e,t,n,r,o){n=n.render;var l=t.ref;return sn(t,o),r=Hi(e,t,n,r,l,o),n=Vi(),e!==null&&!ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qe(e,t,o)):(I&&n&&Li(t),t.flags|=1,re(e,t,r,o),t.child)}function Ms(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!bi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,hc(e,t,l,r,o)):(e=Zr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:bn,n(i,r)&&e.ref===t.ref)return qe(e,t,o)}return t.flags|=1,e=mt(l,r),e.ref=t.ref,e.return=t,t.child=e}function hc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(bn(l,r)&&e.ref===t.ref)if(ae=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(ae=!0);else return t.lanes=e.lanes,qe(e,t,o)}return ti(e,t,n,r,o)}function mc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(nn,fe),fe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(nn,fe),fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,D(nn,fe),fe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,D(nn,fe),fe|=r;return re(e,t,o,n),t.child}function gc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ti(e,t,n,r,o){var l=ue(n)?At:ee.current;return l=fn(t,l),sn(t,o),n=Hi(e,t,n,r,l,o),r=Vi(),e!==null&&!ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qe(e,t,o)):(I&&r&&Li(t),t.flags|=1,re(e,t,n,o),t.child)}function Rs(e,t,n,r,o){if(ue(n)){var l=!0;ao(t)}else l=!1;if(sn(t,o),t.stateNode===null)Qr(e,t),fc(t,n,r),bl(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Te(c):(c=ue(n)?At:ee.current,c=fn(t,c));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Es(t,i,r,c),rt=!1;var p=t.memoizedState;i.state=p,po(t,r,i,o),s=t.memoizedState,a!==r||p!==s||se.current||rt?(typeof h=="function"&&(Jl(t,n,h,r),s=t.memoizedState),(a=rt||ks(t,n,a,r,p,s,c))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,$u(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Me(t.type,a),i.props=c,g=t.pendingProps,p=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Te(s):(s=ue(n)?At:ee.current,s=fn(t,s));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==g||p!==s)&&Es(t,i,r,s),rt=!1,p=t.memoizedState,i.state=p,po(t,r,i,o);var k=t.memoizedState;a!==g||p!==k||se.current||rt?(typeof x=="function"&&(Jl(t,n,x,r),k=t.memoizedState),(c=rt||ks(t,n,c,r,p,k,s)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ni(e,t,n,r,l,o)}function ni(e,t,n,r,o,l){gc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&hs(t,n,!1),qe(e,t,l);r=t.stateNode,u0.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=pn(t,e.child,null,l),t.child=pn(t,null,a,l)):re(e,t,a,l),t.memoizedState=r.state,o&&hs(t,n,!0),t.child}function vc(e){var t=e.stateNode;t.pendingContext?ps(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ps(e,t.context,!1),Ui(e,t.containerInfo)}function Ls(e,t,n,r,o){return dn(),Ai(o),t.flags|=256,re(e,t,n,r),t.child}var ri={dehydrated:null,treeContext:null,retryLane:0};function oi(e){return{baseLanes:e,cachePool:null,transitions:null}}function yc(e,t,n){var r=t.pendingProps,o=O.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),D(O,o&1),e===null)return Zl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Ao(i,r,0,null),e=Nt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=oi(n),t.memoizedState=ri,e):Xi(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return c0(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=mt(a,l):(l=Nt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?oi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=ri,r}return l=e.child,e=l.sibling,r=mt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xi(e,t){return t=Ao({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ur(e,t,n,r){return r!==null&&Ai(r),pn(t,e.child,null,n),e=Xi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function c0(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=yl(Error(y(422))),Ur(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Ao({mode:"visible",children:r.children},o,0,null),l=Nt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&pn(t,e.child,null,i),t.child.memoizedState=oi(i),t.memoizedState=ri,l);if(!(t.mode&1))return Ur(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(y(419)),r=yl(l,r,void 0),Ur(e,t,i,r)}if(a=(i&e.childLanes)!==0,ae||a){if(r=X,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Ze(e,o),Ae(r,e,o,-1))}return Ji(),r=yl(Error(y(421))),Ur(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=E0.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,de=ft(o.nextSibling),pe=t,I=!0,Le=null,e!==null&&(Se[xe++]=Ge,Se[xe++]=Xe,Se[xe++]=Dt,Ge=e.id,Xe=e.overflow,Dt=t),t=Xi(t,r.children),t.flags|=4096,t)}function Ns(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ql(e.return,t,n)}function wl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function wc(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(re(e,t,r.children,n),r=O.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ns(e,n,t);else if(e.tag===19)Ns(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(O,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),wl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ho(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}wl(t,!0,n,null,l);break;case"together":wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function f0(e,t,n){switch(t.tag){case 3:vc(t),dn();break;case 5:Gu(t);break;case 1:ue(t.type)&&ao(t);break;case 4:Ui(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;D(co,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(O,O.current&1),t.flags|=128,null):n&t.child.childLanes?yc(e,t,n):(D(O,O.current&1),e=qe(e,t,n),e!==null?e.sibling:null);D(O,O.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),D(O,O.current),r)break;return null;case 22:case 23:return t.lanes=0,mc(e,t,n)}return qe(e,t,n)}var Sc,li,xc,kc;Sc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};li=function(){};xc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Rt(je.current);var l=null;switch(n){case"input":o=Pl(e,o),r=Pl(e,r),l=[];break;case"select":o=B({},o,{value:void 0}),r=B({},r,{value:void 0}),l=[];break;case"textarea":o=Ll(e,o),r=Ll(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=lo)}Al(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=o?.[c],r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&F("scroll",e),l||a===s||(l=[])):(l=l||[]).push(c,s))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};kc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ln(e,t){if(!I)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function J(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function d0(e,t,n){var r=t.pendingProps;switch(Ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return J(t),null;case 1:return ue(t.type)&&io(),J(t),null;case 3:return r=t.stateNode,hn(),z(se),z(ee),ji(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ir(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(pi(Le),Le=null))),li(e,t),J(t),null;case 5:Bi(t);var o=Rt(or.current);if(n=t.type,e!==null&&t.stateNode!=null)xc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return J(t),null}if(e=Rt(je.current),Ir(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ue]=t,r[nr]=l,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(o=0;o<In.length;o++)F(In[o],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Ba(r,l),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},F("invalid",r);break;case"textarea":Wa(r,l),F("invalid",r)}Al(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&zr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&zr(r.textContent,a,e),o=["children",""+a]):Xn.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&F("scroll",r)}switch(n){case"input":Er(r),ja(r,l,!0);break;case"textarea":Er(r),Ha(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=lo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ue]=t,e[nr]=r,Sc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Dl(n,r),n){case"dialog":F("cancel",e),F("close",e),o=r;break;case"iframe":case"object":case"embed":F("load",e),o=r;break;case"video":case"audio":for(o=0;o<In.length;o++)F(In[o],e);o=r;break;case"source":F("error",e),o=r;break;case"img":case"image":case"link":F("error",e),F("load",e),o=r;break;case"details":F("toggle",e),o=r;break;case"input":Ba(e,r),o=Pl(e,r),F("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=B({},r,{value:void 0}),F("invalid",e);break;case"textarea":Wa(e,r),o=Ll(e,r),F("invalid",e);break;default:o=r}Al(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?bs(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&qs(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Qn(e,s):typeof s=="number"&&Qn(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Xn.hasOwnProperty(l)?s!=null&&l==="onScroll"&&F("scroll",e):s!=null&&gi(e,l,s,i))}switch(n){case"input":Er(e),ja(e,r,!1);break;case"textarea":Er(e),Ha(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?rn(e,!!r.multiple,l,!1):r.defaultValue!=null&&rn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return J(t),null;case 6:if(e&&t.stateNode!=null)kc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Rt(or.current),Rt(je.current),Ir(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(l=r.nodeValue!==n)&&(e=pe,e!==null))switch(e.tag){case 3:zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return J(t),null;case 13:if(z(O),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(I&&de!==null&&t.mode&1&&!(t.flags&128))ju(),dn(),t.flags|=98560,l=!1;else if(l=Ir(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(y(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(317));l[Ue]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;J(t),l=!1}else Le!==null&&(pi(Le),Le=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||O.current&1?$===0&&($=3):Ji())),t.updateQueue!==null&&(t.flags|=4),J(t),null);case 4:return hn(),li(e,t),e===null&&er(t.stateNode.containerInfo),J(t),null;case 10:return zi(t.type._context),J(t),null;case 17:return ue(t.type)&&io(),J(t),null;case 19:if(z(O),l=t.memoizedState,l===null)return J(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Ln(l,!1);else{if($!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ho(e),i!==null){for(t.flags|=128,Ln(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(O,O.current&1|2),t.child}e=e.sibling}l.tail!==null&&W()>gn&&(t.flags|=128,r=!0,Ln(l,!1),t.lanes=4194304)}else{if(!r)if(e=ho(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ln(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!I)return J(t),null}else 2*W()-l.renderingStartTime>gn&&n!==1073741824&&(t.flags|=128,r=!0,Ln(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=W(),t.sibling=null,n=O.current,D(O,r?n&1|2:n&1),t):(J(t),null);case 22:case 23:return qi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?fe&1073741824&&(J(t),t.subtreeFlags&6&&(t.flags|=8192)):J(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function p0(e,t){switch(Ni(t),t.tag){case 1:return ue(t.type)&&io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(),z(se),z(ee),ji(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bi(t),null;case 13:if(z(O),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(O),null;case 4:return hn(),null;case 10:return zi(t.type._context),null;case 22:case 23:return qi(),null;case 24:return null;default:return null}}var Br=!1,b=!1,h0=typeof WeakSet=="function"?WeakSet:Set,T=null;function tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){j(e,t,r)}else n.current=null}function ii(e,t,n){try{n()}catch(r){j(e,t,r)}}var As=!1;function m0(e,t){if(Vl=no,e=Pu(),Ri(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,c=0,h=0,g=e,p=null;t:for(;;){for(var x;g!==n||o!==0&&g.nodeType!==3||(a=i+o),g!==l||r!==0&&g.nodeType!==3||(s=i+r),g.nodeType===3&&(i+=g.nodeValue.length),(x=g.firstChild)!==null;)p=g,g=x;for(;;){if(g===e)break t;if(p===n&&++c===o&&(a=i),p===l&&++h===r&&(s=i),(x=g.nextSibling)!==null)break;g=p,p=g.parentNode}g=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for($l={focusedElem:e,selectionRange:n},no=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var E=k.memoizedProps,L=k.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?E:Me(t.type,E),L);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(m){j(t,t.return,m)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return k=As,As=!1,k}function Vn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&ii(t,n,l)}o=o.next}while(o!==r)}}function Lo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ai(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ec(e){var t=e.alternate;t!==null&&(e.alternate=null,Ec(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[nr],delete t[Ql],delete t[qd],delete t[Jd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tc(e){return e.tag===5||e.tag===3||e.tag===4}function Ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function si(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=lo));else if(r!==4&&(e=e.child,e!==null))for(si(e,t,n),e=e.sibling;e!==null;)si(e,t,n),e=e.sibling}function ui(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ui(e,t,n),e=e.sibling;e!==null;)ui(e,t,n),e=e.sibling}var Q=null,Re=!1;function tt(e,t,n){for(n=n.child;n!==null;)Cc(e,t,n),n=n.sibling}function Cc(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(ko,n)}catch{}switch(n.tag){case 5:b||tn(n,t);case 6:var r=Q,o=Re;Q=null,tt(e,t,n),Q=r,Re=o,Q!==null&&(Re?(e=Q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Q.removeChild(n.stateNode));break;case 18:Q!==null&&(Re?(e=Q,n=n.stateNode,e.nodeType===8?dl(e.parentNode,n):e.nodeType===1&&dl(e,n),qn(e)):dl(Q,n.stateNode));break;case 4:r=Q,o=Re,Q=n.stateNode.containerInfo,Re=!0,tt(e,t,n),Q=r,Re=o;break;case 0:case 11:case 14:case 15:if(!b&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&ii(n,t,i),o=o.next}while(o!==r)}tt(e,t,n);break;case 1:if(!b&&(tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){j(n,t,a)}tt(e,t,n);break;case 21:tt(e,t,n);break;case 22:n.mode&1?(b=(r=b)||n.memoizedState!==null,tt(e,t,n),b=r):tt(e,t,n);break;default:tt(e,t,n)}}function Fs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new h0),t.forEach(function(r){var o=T0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:Q=a.stateNode,Re=!1;break e;case 3:Q=a.stateNode.containerInfo,Re=!0;break e;case 4:Q=a.stateNode.containerInfo,Re=!0;break e}a=a.return}if(Q===null)throw Error(y(160));Cc(l,i,o),Q=null,Re=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){j(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_c(t,e),t=t.sibling}function _c(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Ie(e),r&4){try{Vn(3,e,e.return),Lo(3,e)}catch(E){j(e,e.return,E)}try{Vn(5,e,e.return)}catch(E){j(e,e.return,E)}}break;case 1:Pe(t,e),Ie(e),r&512&&n!==null&&tn(n,n.return);break;case 5:if(Pe(t,e),Ie(e),r&512&&n!==null&&tn(n,n.return),e.flags&32){var o=e.stateNode;try{Qn(o,"")}catch(E){j(e,e.return,E)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Ys(o,l),Dl(a,i);var c=Dl(a,l);for(i=0;i<s.length;i+=2){var h=s[i],g=s[i+1];h==="style"?bs(o,g):h==="dangerouslySetInnerHTML"?qs(o,g):h==="children"?Qn(o,g):gi(o,h,g,c)}switch(a){case"input":Ml(o,l);break;case"textarea":Ks(o,l);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?rn(o,!!l.multiple,x,!1):p!==!!l.multiple&&(l.defaultValue!=null?rn(o,!!l.multiple,l.defaultValue,!0):rn(o,!!l.multiple,l.multiple?[]:"",!1))}o[nr]=l}catch(E){j(e,e.return,E)}}break;case 6:if(Pe(t,e),Ie(e),r&4){if(e.stateNode===null)throw Error(y(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(E){j(e,e.return,E)}}break;case 3:if(Pe(t,e),Ie(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(E){j(e,e.return,E)}break;case 4:Pe(t,e),Ie(e);break;case 13:Pe(t,e),Ie(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Ki=W())),r&4&&Fs(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(b=(c=b)||h,Pe(t,e),b=c):Pe(t,e),Ie(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(T=e,h=e.child;h!==null;){for(g=T=h;T!==null;){switch(p=T,x=p.child,p.tag){case 0:case 11:case 14:case 15:Vn(4,p,p.return);break;case 1:tn(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(E){j(r,n,E)}}break;case 5:tn(p,p.return);break;case 22:if(p.memoizedState!==null){Is(g);continue}}x!==null?(x.return=p,T=x):Is(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{o=g.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=g.stateNode,s=g.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Js("display",i))}catch(E){j(e,e.return,E)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(E){j(e,e.return,E)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Pe(t,e),Ie(e),r&4&&Fs(e);break;case 21:break;default:Pe(t,e),Ie(e)}}function Ie(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Tc(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Qn(o,""),r.flags&=-33);var l=Ds(e);ui(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Ds(e);si(e,a,i);break;default:throw Error(y(161))}}catch(s){j(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function g0(e,t,n){T=e,Pc(e,t,n)}function Pc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Br;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||b;a=Br;var c=b;if(Br=i,(b=s)&&!c)for(T=o;T!==null;)i=T,s=i.child,i.tag===22&&i.memoizedState!==null?Os(o):s!==null?(s.return=i,T=s):Os(o);for(;l!==null;)T=l,Pc(l,t,n),l=l.sibling;T=o,Br=a,b=c}zs(e,t,n)}else o.subtreeFlags&8772&&l!==null?(l.return=o,T=l):zs(e,t,n)}}function zs(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:b||Lo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!b)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ws(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ws(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&qn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}b||t.flags&512&&ai(t)}catch(p){j(t,t.return,p)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Is(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Os(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Lo(4,t)}catch(s){j(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){j(t,o,s)}}var l=t.return;try{ai(t)}catch(s){j(t,l,s)}break;case 5:var i=t.return;try{ai(t)}catch(s){j(t,i,s)}}}catch(s){j(t,t.return,s)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var v0=Math.ceil,vo=Je.ReactCurrentDispatcher,Qi=Je.ReactCurrentOwner,Ee=Je.ReactCurrentBatchConfig,R=0,X=null,H=null,Y=0,fe=0,nn=wt(0),$=0,sr=null,zt=0,No=0,Yi=0,$n=null,ie=null,Ki=0,gn=1/0,Ve=null,yo=!1,ci=null,pt=null,jr=!1,at=null,wo=0,Gn=0,fi=null,Yr=-1,Kr=0;function oe(){return R&6?W():Yr!==-1?Yr:Yr=W()}function ht(e){return e.mode&1?R&2&&Y!==0?Y&-Y:e0.transition!==null?(Kr===0&&(Kr=fu()),Kr):(e=N,e!==0||(e=window.event,e=e===void 0?16:yu(e.type)),e):1}function Ae(e,t,n,r){if(50<Gn)throw Gn=0,fi=null,Error(y(185));ur(e,n,r),(!(R&2)||e!==X)&&(e===X&&(!(R&2)&&(No|=n),$===4&&lt(e,Y)),ce(e,r),n===1&&R===0&&!(t.mode&1)&&(gn=W()+500,Po&&St()))}function ce(e,t){var n=e.callbackNode;nd(e,t);var r=to(e,e===X?Y:0);if(r===0)n!==null&&Ga(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ga(n),t===1)e.tag===0?bd(Us.bind(null,e)):Ou(Us.bind(null,e)),Kd(function(){!(R&6)&&St()}),n=null;else{switch(du(r)){case 1:n=xi;break;case 4:n=uu;break;case 16:n=eo;break;case 536870912:n=cu;break;default:n=eo}n=zc(n,Mc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Mc(e,t){if(Yr=-1,Kr=0,R&6)throw Error(y(327));var n=e.callbackNode;if(un()&&e.callbackNode!==n)return null;var r=to(e,e===X?Y:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=So(e,r);else{t=r;var o=R;R|=2;var l=Lc();(X!==e||Y!==t)&&(Ve=null,gn=W()+500,Lt(e,t));do try{S0();break}catch(a){Rc(e,a)}while(!0);Fi(),vo.current=l,R=o,H!==null?t=0:(X=null,Y=0,t=$)}if(t!==0){if(t===2&&(o=Ul(e),o!==0&&(r=o,t=di(e,o))),t===1)throw n=sr,Lt(e,0),lt(e,r),ce(e,W()),n;if(t===6)lt(e,r);else{if(o=e.current.alternate,!(r&30)&&!y0(o)&&(t=So(e,r),t===2&&(l=Ul(e),l!==0&&(r=l,t=di(e,l))),t===1))throw n=sr,Lt(e,0),lt(e,r),ce(e,W()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:_t(e,ie,Ve);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=Ki+500-W(),10<t)){if(to(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Xl(_t.bind(null,e,ie,Ve),t);break}_t(e,ie,Ve);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Ne(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*v0(r/1960))-r,10<r){e.timeoutHandle=Xl(_t.bind(null,e,ie,Ve),r);break}_t(e,ie,Ve);break;case 5:_t(e,ie,Ve);break;default:throw Error(y(329))}}}return ce(e,W()),e.callbackNode===n?Mc.bind(null,e):null}function di(e,t){var n=$n;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=So(e,t),e!==2&&(t=ie,ie=n,t!==null&&pi(t)),e}function pi(e){ie===null?ie=e:ie.push.apply(ie,e)}function y0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!De(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~Yi,t&=~No,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ne(t),r=1<<n;e[n]=-1,t&=~r}}function Us(e){if(R&6)throw Error(y(327));un();var t=to(e,0);if(!(t&1))return ce(e,W()),null;var n=So(e,t);if(e.tag!==0&&n===2){var r=Ul(e);r!==0&&(t=r,n=di(e,r))}if(n===1)throw n=sr,Lt(e,0),lt(e,t),ce(e,W()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,ie,Ve),ce(e,W()),null}function Zi(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(gn=W()+500,Po&&St())}}function It(e){at!==null&&at.tag===0&&!(R&6)&&un();var t=R;R|=1;var n=Ee.transition,r=N;try{if(Ee.transition=null,N=1,e)return e()}finally{N=r,Ee.transition=n,R=t,!(R&6)&&St()}}function qi(){fe=nn.current,z(nn)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yd(n)),H!==null)for(n=H.return;n!==null;){var r=n;switch(Ni(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&io();break;case 3:hn(),z(se),z(ee),ji();break;case 5:Bi(r);break;case 4:hn();break;case 13:z(O);break;case 19:z(O);break;case 10:zi(r.type._context);break;case 22:case 23:qi()}n=n.return}if(X=e,H=e=mt(e.current,null),Y=fe=t,$=0,sr=null,Yi=No=zt=0,ie=$n=null,Mt!==null){for(t=0;t<Mt.length;t++)if(n=Mt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Mt=null}return e}function Rc(e,t){do{var n=H;try{if(Fi(),Gr.current=go,mo){for(var r=U.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}mo=!1}if(Ft=0,G=V=U=null,Hn=!1,lr=0,Qi.current=null,n===null||n.return===null){$=1,sr=t,H=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=Y,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=a,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=Cs(i);if(x!==null){x.flags&=-257,_s(x,i,a,l,t),x.mode&1&&Ts(l,c,t),t=x,s=c;var k=t.updateQueue;if(k===null){var E=new Set;E.add(s),t.updateQueue=E}else k.add(s);break e}else{if(!(t&1)){Ts(l,c,t),Ji();break e}s=Error(y(426))}}else if(I&&a.mode&1){var L=Cs(i);if(L!==null){!(L.flags&65536)&&(L.flags|=256),_s(L,i,a,l,t),Ai(mn(s,a));break e}}l=s=mn(s,a),$!==4&&($=2),$n===null?$n=[l]:$n.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=dc(l,s,t);ys(l,f);break e;case 1:a=s;var u=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(pt===null||!pt.has(d)))){l.flags|=65536,t&=-t,l.lanes|=t;var m=pc(l,a,t);ys(l,m);break e}}l=l.return}while(l!==null)}Ac(n)}catch(v){t=v,H===n&&n!==null&&(H=n=n.return);continue}break}while(!0)}function Lc(){var e=vo.current;return vo.current=go,e===null?go:e}function Ji(){($===0||$===3||$===2)&&($=4),X===null||!(zt&268435455)&&!(No&268435455)||lt(X,Y)}function So(e,t){var n=R;R|=2;var r=Lc();(X!==e||Y!==t)&&(Ve=null,Lt(e,t));do try{w0();break}catch(o){Rc(e,o)}while(!0);if(Fi(),R=n,vo.current=r,H!==null)throw Error(y(261));return X=null,Y=0,$}function w0(){for(;H!==null;)Nc(H)}function S0(){for(;H!==null&&!Qf();)Nc(H)}function Nc(e){var t=Fc(e.alternate,e,fe);e.memoizedProps=e.pendingProps,t===null?Ac(e):H=t,Qi.current=null}function Ac(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=p0(n,t),n!==null){n.flags&=32767,H=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$=6,H=null;return}}else if(n=d0(n,t,fe),n!==null){H=n;return}if(t=t.sibling,t!==null){H=t;return}H=t=e}while(t!==null);$===0&&($=5)}function _t(e,t,n){var r=N,o=Ee.transition;try{Ee.transition=null,N=1,x0(e,t,n,r)}finally{Ee.transition=o,N=r}return null}function x0(e,t,n,r){do un();while(at!==null);if(R&6)throw Error(y(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(rd(e,l),e===X&&(H=X=null,Y=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jr||(jr=!0,zc(eo,function(){return un(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ee.transition,Ee.transition=null;var i=N;N=1;var a=R;R|=4,Qi.current=null,m0(e,n),_c(n,e),Vd($l),no=!!Vl,$l=Vl=null,e.current=n,g0(n,e,o),Yf(),R=a,N=i,Ee.transition=l}else e.current=n;if(jr&&(jr=!1,at=e,wo=o),l=e.pendingLanes,l===0&&(pt=null),qf(n.stateNode,r),ce(e,W()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(yo)throw yo=!1,e=ci,ci=null,e;return wo&1&&e.tag!==0&&un(),l=e.pendingLanes,l&1?e===fi?Gn++:(Gn=0,fi=e):Gn=0,St(),null}function un(){if(at!==null){var e=du(wo),t=Ee.transition,n=N;try{if(Ee.transition=null,N=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,wo=0,R&6)throw Error(y(331));var o=R;for(R|=4,T=e.current;T!==null;){var l=T,i=l.child;if(T.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(T=c;T!==null;){var h=T;switch(h.tag){case 0:case 11:case 15:Vn(8,h,l)}var g=h.child;if(g!==null)g.return=h,T=g;else for(;T!==null;){h=T;var p=h.sibling,x=h.return;if(Ec(h),h===c){T=null;break}if(p!==null){p.return=x,T=p;break}T=x}}}var k=l.alternate;if(k!==null){var E=k.child;if(E!==null){k.child=null;do{var L=E.sibling;E.sibling=null,E=L}while(E!==null)}}T=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,T=i;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Vn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,T=f;break e}T=l.return}}var u=e.current;for(T=u;T!==null;){i=T;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,T=d;else e:for(i=u;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Lo(9,a)}}catch(v){j(a,a.return,v)}if(a===i){T=null;break e}var m=a.sibling;if(m!==null){m.return=a.return,T=m;break e}T=a.return}}if(R=o,St(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(ko,e)}catch{}r=!0}return r}finally{N=n,Ee.transition=t}}return!1}function Bs(e,t,n){t=mn(n,t),t=dc(e,t,1),e=dt(e,t,1),t=oe(),e!==null&&(ur(e,1,t),ce(e,t))}function j(e,t,n){if(e.tag===3)Bs(e,e,n);else for(;t!==null;){if(t.tag===3){Bs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=mn(n,e),e=pc(t,e,1),t=dt(t,e,1),e=oe(),t!==null&&(ur(t,1,e),ce(t,e));break}}t=t.return}}function k0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,X===e&&(Y&n)===n&&($===4||$===3&&(Y&130023424)===Y&&500>W()-Ki?Lt(e,0):Yi|=n),ce(e,t)}function Dc(e,t){t===0&&(e.mode&1?(t=_r,_r<<=1,!(_r&130023424)&&(_r=4194304)):t=1);var n=oe();e=Ze(e,t),e!==null&&(ur(e,t,n),ce(e,n))}function E0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dc(e,n)}function T0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Dc(e,n)}var Fc;Fc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||se.current)ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ae=!1,f0(e,t,n);ae=!!(e.flags&131072)}else ae=!1,I&&t.flags&1048576&&Uu(t,uo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qr(e,t),e=t.pendingProps;var o=fn(t,ee.current);sn(t,n),o=Hi(null,t,r,e,o,n);var l=Vi();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ue(r)?(l=!0,ao(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Oi(t),o.updater=Ro,t.stateNode=o,o._reactInternals=t,bl(t,r,e,n),t=ni(null,t,r,!0,l,n)):(t.tag=0,I&&l&&Li(t),re(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=_0(r),e=Me(r,e),o){case 0:t=ti(null,t,r,e,n);break e;case 1:t=Rs(null,t,r,e,n);break e;case 11:t=Ps(null,t,r,e,n);break e;case 14:t=Ms(null,t,r,Me(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),ti(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),Rs(e,t,r,o,n);case 3:e:{if(vc(t),e===null)throw Error(y(387));r=t.pendingProps,l=t.memoizedState,o=l.element,$u(e,t),po(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=mn(Error(y(423)),t),t=Ls(e,t,r,n,o);break e}else if(r!==o){o=mn(Error(y(424)),t),t=Ls(e,t,r,n,o);break e}else for(de=ft(t.stateNode.containerInfo.firstChild),pe=t,I=!0,Le=null,n=Hu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===o){t=qe(e,t,n);break e}re(e,t,r,n)}t=t.child}return t;case 5:return Gu(t),e===null&&Zl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Gl(r,o)?i=null:l!==null&&Gl(r,l)&&(t.flags|=32),gc(e,t),re(e,t,i,n),t.child;case 6:return e===null&&Zl(t),null;case 13:return yc(e,t,n);case 4:return Ui(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pn(t,null,r,n):re(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),Ps(e,t,r,o,n);case 7:return re(e,t,t.pendingProps,n),t.child;case 8:return re(e,t,t.pendingProps.children,n),t.child;case 12:return re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,D(co,r._currentValue),r._currentValue=i,l!==null)if(De(l.value,i)){if(l.children===o.children&&!se.current){t=qe(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Qe(-1,n&-n),s.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ql(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(y(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ql(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}re(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,sn(t,n),o=Te(o),r=r(o),t.flags|=1,re(e,t,r,n),t.child;case 14:return r=t.type,o=Me(r,t.pendingProps),o=Me(r.type,o),Ms(e,t,r,o,n);case 15:return hc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),Qr(e,t),t.tag=1,ue(r)?(e=!0,ao(t)):e=!1,sn(t,n),fc(t,r,o),bl(t,r,o,n),ni(null,t,r,!0,e,n);case 19:return wc(e,t,n);case 22:return mc(e,t,n)}throw Error(y(156,t.tag))};function zc(e,t){return su(e,t)}function C0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,t,n,r){return new C0(e,t,n,r)}function bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _0(e){if(typeof e=="function")return bi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yi)return 11;if(e===wi)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zr(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")bi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Xt:return Nt(n.children,o,l,t);case vi:i=8,o|=8;break;case El:return e=ke(12,n,t,o|2),e.elementType=El,e.lanes=l,e;case Tl:return e=ke(13,n,t,o),e.elementType=Tl,e.lanes=l,e;case Cl:return e=ke(19,n,t,o),e.elementType=Cl,e.lanes=l,e;case Gs:return Ao(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vs:i=10;break e;case $s:i=9;break e;case yi:i=11;break e;case wi:i=14;break e;case nt:i=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=ke(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Nt(e,t,n,r){return e=ke(7,e,r,t),e.lanes=n,e}function Ao(e,t,n,r){return e=ke(22,e,r,t),e.elementType=Gs,e.lanes=n,e.stateNode={isHidden:!1},e}function Sl(e,t,n){return e=ke(6,e,null,t),e.lanes=n,e}function xl(e,t,n){return t=ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function P0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ea(e,t,n,r,o,l,i,a,s){return e=new P0(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ke(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oi(l),e}function M0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ic(e){if(!e)return vt;e=e._reactInternals;e:{if(Ut(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(ue(n))return Iu(e,n,t)}return t}function Oc(e,t,n,r,o,l,i,a,s){return e=ea(n,r,!0,e,o,l,i,a,s),e.context=Ic(null),n=e.current,r=oe(),o=ht(n),l=Qe(r,o),l.callback=t??null,dt(n,l,o),e.current.lanes=o,ur(e,o,r),ce(e,r),e}function Do(e,t,n,r){var o=t.current,l=oe(),i=ht(o);return n=Ic(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(o,t,i),e!==null&&(Ae(e,o,i,l),$r(e,o,i)),i}function xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function js(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ta(e,t){js(e,t),(e=e.alternate)&&js(e,t)}function R0(){return null}var Uc=typeof reportError=="function"?reportError:function(e){console.error(e)};function na(e){this._internalRoot=e}Fo.prototype.render=na.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));Do(e,t,null,null)};Fo.prototype.unmount=na.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;It(function(){Do(null,e,null,null)}),t[Ke]=null}};function Fo(e){this._internalRoot=e}Fo.prototype.unstable_scheduleHydration=function(e){if(e){var t=mu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ot.length&&t!==0&&t<ot[n].priority;n++);ot.splice(n,0,e),n===0&&vu(e)}};function ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ws(){}function L0(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=xo(i);l.call(c)}}var i=Oc(t,r,e,0,null,!1,!1,"",Ws);return e._reactRootContainer=i,e[Ke]=i.current,er(e.nodeType===8?e.parentNode:e),It(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=xo(s);a.call(c)}}var s=ea(e,0,!1,null,null,!1,!1,"",Ws);return e._reactRootContainer=s,e[Ke]=s.current,er(e.nodeType===8?e.parentNode:e),It(function(){Do(t,s,n,r)}),s}function Io(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=xo(i);a.call(s)}}Do(t,i,e,o)}else i=L0(n,t,e,o,r);return xo(i)}pu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zn(t.pendingLanes);n!==0&&(ki(t,n|1),ce(t,W()),!(R&6)&&(gn=W()+500,St()))}break;case 13:It(function(){var r=Ze(e,1);if(r!==null){var o=oe();Ae(r,e,1,o)}}),ta(e,1)}};Ei=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=oe();Ae(t,e,134217728,n)}ta(e,134217728)}};hu=function(e){if(e.tag===13){var t=ht(e),n=Ze(e,t);if(n!==null){var r=oe();Ae(n,e,t,r)}ta(e,t)}};mu=function(){return N};gu=function(e,t){var n=N;try{return N=e,t()}finally{N=n}};zl=function(e,t,n){switch(t){case"input":if(Ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=_o(r);if(!o)throw Error(y(90));Qs(r),Ml(r,o)}}}break;case"textarea":Ks(e,n);break;case"select":t=n.value,t!=null&&rn(e,!!n.multiple,t,!1)}};nu=Zi;ru=It;var N0={usingClientEntryPoint:!1,Events:[fr,Zt,_o,eu,tu,Zi]},Nn={findFiberByHostInstance:Pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A0={bundleType:Nn.bundleType,version:Nn.version,rendererPackageName:Nn.rendererPackageName,rendererConfig:Nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=iu(e),e===null?null:e.stateNode},findFiberByHostInstance:Nn.findFiberByHostInstance||R0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(An=__REACT_DEVTOOLS_GLOBAL_HOOK__,!An.isDisabled&&An.supportsFiber))try{ko=An.inject(A0),Be=An}catch{}var An;ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N0;ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ra(t))throw Error(y(200));return M0(e,t,null,n)};ge.createRoot=function(e,t){if(!ra(e))throw Error(y(299));var n=!1,r="",o=Uc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ea(e,1,!1,null,null,n,!1,r,o),e[Ke]=t.current,er(e.nodeType===8?e.parentNode:e),new na(t)};ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=iu(t),e=e===null?null:e.stateNode,e};ge.flushSync=function(e){return It(e)};ge.hydrate=function(e,t,n){if(!zo(t))throw Error(y(200));return Io(null,e,t,!0,n)};ge.hydrateRoot=function(e,t,n){if(!ra(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Uc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Oc(t,null,e,1,n??null,o,!1,l,i),e[Ke]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Fo(t)};ge.render=function(e,t,n){if(!zo(t))throw Error(y(200));return Io(null,e,t,!1,n)};ge.unmountComponentAtNode=function(e){if(!zo(e))throw Error(y(40));return e._reactRootContainer?(It(function(){Io(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ge.unstable_batchedUpdates=Zi;ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zo(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Io(e,t,n,!1,r)};ge.version="18.3.1-next-f1338f8080-20240426"});var Hc=He((ip,Wc)=>{"use strict";function jc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jc)}catch(e){console.error(e)}}jc(),Wc.exports=Bc()});var $c=He(oa=>{"use strict";var Vc=Hc();oa.createRoot=Vc.createRoot,oa.hydrateRoot=Vc.hydrateRoot;var ap});var Xc=He(Oo=>{"use strict";var D0=be(),F0=Symbol.for("react.element"),z0=Symbol.for("react.fragment"),I0=Object.prototype.hasOwnProperty,O0=D0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U0={key:!0,ref:!0,__self:!0,__source:!0};function Gc(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)I0.call(t,r)&&!U0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:F0,type:e,key:l,ref:i,props:o,_owner:O0.current}}Oo.Fragment=z0;Oo.jsx=Gc;Oo.jsxs=Gc});var pr=He((cp,Qc)=>{"use strict";Qc.exports=Xc()});function Yc(e,t){let n=e.getContext("2d");if(!n)throw new Error("Condensation requires Canvas 2D");let r=1,o=1,l=1,i=1,a=120,s=120,c=0,h=0,g=0,p=[],x=[],k=new Map,E=m=>{let v=Math.max(.5,Math.round(m*2)/2),S=k.get(v);if(S)return S;let w=Math.ceil(2*l),C=Math.ceil(v*2+w*2),M=document.createElement("canvas");M.width=C,M.height=C;let _=M.getContext("2d");if(!_)throw new Error("Condensation bubble sprite unavailable");let te=C/2,Sn=v/(4.4*l);return _.fillStyle=`rgba(96,139,196,${.18+Sn*.22})`,_.beginPath(),_.arc(te,te,v,0,Math.PI*2),_.fill(),_.strokeStyle=`rgba(70,98,148,${.35+Sn*.35})`,_.lineWidth=.9*l,_.stroke(),_.fillStyle=`rgba(255,255,255,${.32+Sn*.3})`,_.beginPath(),_.arc(te-v*.32,te-v*.36,Math.max(.45*l,v*.24),0,Math.PI*2),_.fill(),k.set(v,M),M},L=(m=0)=>{let v=8*l,S=Math.max(1,r-v*2),w=Math.max(1,i-v*2);p.push({x:v+Math.random()*S,y:v+Math.random()*w,r:(.5+m*.7)*l,rMax:(2.1+Math.random()*2.3)*l,grow:(.0022+Math.random()*.0032)*l,running:!1,vy:0})},f=(m,v)=>{l=Math.min(window.devicePixelRatio||1,2),r=e.width=Math.max(1,Math.floor(m*l)),o=e.height=Math.max(1,Math.floor(v*l)),e.style.width=`${m}px`,e.style.height=`${v}px`,i=Math.max(1,o-2*l),a=Math.max(80,Math.min(240,Math.round(r*o/(l*l)/5200))),s=Math.round(a*t().dropAmount),p=[],x=[],k.clear();let S=Math.round(s*.62);for(let w=0;w<S;w+=1)L(Math.random()*3)},u=(m,v=1)=>{p.length<s&&Math.random()<.34*v&&L(),m-c>6400&&(c=m,p.filter(S=>!S.running).sort((S,w)=>w.r-S.r).slice(0,3).forEach(S=>{S.running=!0,S.vy=.35*l}));for(let S=p.length-1;S>=0;S-=1){let w=p[S];if(!w.running){w.r+=w.grow*v,w.r>=w.rMax&&(w.running=!0,w.vy=.3*l);continue}w.vy=Math.min(w.vy+.075*l*v,5.4*l),w.y+=w.vy*v;for(let C=p.length-1;C>=0;C-=1){let M=p[C];if(M===w||M.running)continue;let _=Math.abs(M.x-w.x)<w.r+M.r+1.5*l,te=M.y>w.y-w.r&&M.y<w.y+w.vy+w.r;_&&te&&(w.r=Math.sqrt(w.r*w.r+M.r*M.r),p.splice(C,1),C<S&&(S-=1))}w.y>=i&&(x.push({x:w.x,y:i,r0:w.r,born:m}),p.splice(S,1))}x=x.filter(S=>m-S.born<760)},d=m=>{n.clearRect(0,0,r,o),p.forEach(v=>{let S=E(v.r);n.drawImage(S,v.x-S.width/2,v.y-S.height/2)}),x.forEach(v=>{let S=(m-v.born)/760;if(S<0||S>1)return;let w=v.r0+S*16*l;n.strokeStyle=`rgba(75,108,158,${(1-S)*.52})`,n.lineWidth=1.1*l,n.beginPath(),n.ellipse(v.x,v.y,w,w*.34,0,0,Math.PI*2),n.stroke()})};return{resize:f,render(m){let v=t();s=Math.round(a*v.dropAmount);let S=g?Math.min(50,m-g):16.67;g=m,h+=S*v.speed,u(h,v.speed),d(h)},dispose(){p=[],x=[],k.clear()}}}var la,Kc=Wt(()=>{la={speed:1,dropAmount:1,opacity:1}});var Zc={};Bo(Zc,{CondensationBackground:()=>B0});function B0({className:e="",...t}){let n=(0,wn.useRef)(null),r=(0,wn.useRef)(null),o=(0,wn.useRef)({...la,...t});return o.current={...la,...t},(0,wn.useEffect)(()=>{let l=n.current,i=r.current;if(!l||!i)return;let a=Yc(i,()=>o.current),s=0,c=!0,h=()=>{let k=l.getBoundingClientRect();a.resize(k.width,k.height),a.render(performance.now())},g=k=>{a.render(k),s=c&&!document.hidden?requestAnimationFrame(g):0},p=new ResizeObserver(h),x=new IntersectionObserver(([k])=>{c=k?.isIntersecting??!0,c&&!s&&(s=requestAnimationFrame(g)),!c&&s&&(cancelAnimationFrame(s),s=0)});return p.observe(l),x.observe(l),h(),s=requestAnimationFrame(g),()=>{s&&cancelAnimationFrame(s),p.disconnect(),x.disconnect(),a.dispose()}},[]),(0,ia.jsx)("div",{ref:n,className:`threeui-background condensation${e?` ${e}`:""}`,style:{opacity:o.current.opacity},children:(0,ia.jsx)("canvas",{ref:r})})}var ia,wn,qc=Wt(()=>{ia=Fe(pr(),1),wn=Fe(be(),1);Kc()});var Jc,bc=Wt(()=>{Jc=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Elemental Marks \u2014 \u6C34\u30FB\u96F7\u30FB\u708E</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #060708;
    --line: rgba(255,255,255,.07);
    --ink: #e8e4dc;
    --dim: rgba(232,228,220,.42);
    --faint: rgba(232,228,220,.22);
    --water: #6cd3ff;
    --bolt: #aab4ff;
    --fire: #ff9d6b;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { height: 100%; }
  body {
    background: var(--bg);
    color: var(--ink);
    font-family: "JetBrains Mono", monospace;
    overflow: hidden;
  }
  header {
    position: fixed; inset: 0 0 auto 0; z-index: 10;
    display: flex; justify-content: space-between; align-items: baseline;
    padding: 18px 22px;
    pointer-events: none;
    mix-blend-mode: screen;
  }
  header .brand {
    font-family: "Inter", "Hiragino Sans", sans-serif; font-weight: 500;
    font-size: 15px; letter-spacing: normal; text-transform: uppercase;
  }
  header .brand em { font-style: normal; color: var(--dim); margin-left: .8em; letter-spacing: normal; }

  main { display: flex; height: 100dvh; }
  .panel {
    position: relative; flex: 1 1 0; min-width: 0;
    transition: flex .7s cubic-bezier(.22,1,.36,1);
    border-left: 1px solid var(--line);
    opacity: 0; transform: translateY(14px);
    animation: reveal 1.1s cubic-bezier(.22,1,.36,1) forwards;
  }
  .panel:first-child { border-left: 0; }
  .panel:nth-child(1) { animation-delay: .05s; }
  .panel:nth-child(2) { animation-delay: .18s; }
  .panel:nth-child(3) { animation-delay: .31s; }
  @keyframes reveal { to { opacity: 1; transform: none; } }
  @media (hover:hover) and (min-width: 761px) {
    .panel:hover { flex: 1.4 1 0; }
  }
  .panel canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }

  .info {
    position: absolute; left: 22px; bottom: 20px; z-index: 5;
    pointer-events: none;
  }
  .info .romaji {
    font-size: 10px; letter-spacing: normal; color: var(--faint);
    margin-bottom: 10px; text-transform: uppercase;
  }
  .info h2 {
    font-family: "Inter", "Hiragino Sans", sans-serif; font-weight: 500;
    font-size: clamp(20px, 2.2vw, 30px); letter-spacing: normal;
    color: var(--ink);
  }
  .info .tech {
    margin-top: 8px; font-size: 10px; letter-spacing: normal;
    color: var(--dim); max-width: 30ch; line-height: 1.7;
  }
  .kanji {
    position: absolute; top: 46px; right: 18px; z-index: 5;
    font-family: "Inter", "Hiragino Sans", "Yu Gothic", sans-serif; font-weight: 800;
    font-size: clamp(64px, 8vw, 120px); line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1px var(--accent, rgba(255,255,255,.25));
    opacity: .55; pointer-events: none;
    transition: opacity .5s, color .5s;
  }
  .panel:hover .kanji { opacity: .95; color: var(--accent); -webkit-text-stroke: 0; text-shadow: 0 0 34px var(--accent); }
  .panel[data-fx="water"]     { --accent: var(--water); }
  .panel[data-fx="lightning"] { --accent: var(--bolt); }
  .panel[data-fx="fire"]      { --accent: var(--fire); }

  .hint {
    position: fixed; bottom: 18px; right: 22px;
    z-index: 10; font-size: 9px; letter-spacing: normal; color: var(--faint);
    text-transform: uppercase; pointer-events: none; white-space: nowrap;
    animation: pulse 4s ease-in-out infinite;
  }
  @keyframes pulse { 50% { opacity: .35; } }

  .fail {
    position: absolute; inset: 0; display: none; place-items: center;
    font-size: 11px; letter-spacing: normal; color: var(--dim); text-align: center;
  }

  @media (max-width: 760px) {
    body { overflow-y: auto; }
    main { flex-direction: column; height: auto; }
    .panel { height: 72dvh; border-left: 0; border-top: 1px solid var(--line); }
    .hint { display: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    .panel { animation-duration: .01s; }
    .hint { animation: none; }
  }
</style>
</head>
<body>

<header>
  <div class="brand">Elemental Marks<em>\u6C34 \u96F7 \u708E</em></div>
</header>

<main>
  <section class="panel" data-fx="water">
    <canvas></canvas>
    <div class="kanji">\u6C34</div>
    <div class="info">
      <div class="romaji">Sui \u2014 Water</div>
      <h2>OpenAI</h2>
      <p class="tech">ping-pong wave equation \xB7 gradient refraction of the mark</p>
    </div>
    <div class="fail">WEBGL2 FLOAT BUFFERS UNAVAILABLE</div>
  </section>

  <section class="panel" data-fx="lightning">
    <canvas></canvas>
    <div class="kanji">\u96F7</div>
    <div class="info">
      <div class="romaji">Rai \u2014 Lightning</div>
      <h2>Anthropic</h2>
      <p class="tech">contour distance field \xB7 fBm zigzag arcs crawling the outline</p>
    </div>
    <div class="fail">WEBGL2 UNAVAILABLE</div>
  </section>

  <section class="panel" data-fx="fire">
    <canvas></canvas>
    <div class="kanji">\u708E</div>
    <div class="info">
      <div class="romaji">En \u2014 Flame</div>
      <h2>Claude</h2>
      <p class="tech">noise ribbons licking upward from the edge \xB7 rising embers</p>
    </div>
    <div class="fail">WEBGL2 UNAVAILABLE</div>
  </section>
</main>

<div class="hint">move \u2014 \u89E6\u308C\u3066\u307F\u3066 \u2014 press</div>

<script>
'use strict';

/* ---------------- logo paths (simple-icons, viewBox 0 0 24 24) ---------------- */
const LOGO_PATHS = {
  openai: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z",
  anthropic: "M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z",
  claude: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
};

/* ---------------- rasterize -> SDF (chamfer) + edge point extraction ---------------- */
const SDF_SIZE = 512;
const SDF_SPREAD = 128;          // px each side of the edge
const D_RANGE = SDF_SPREAD * 2 / SDF_SIZE; // decoded sdf span in mask-uv units

function rasterizeLogo(pathStr) {
  const c = document.createElement('canvas');
  c.width = c.height = SDF_SIZE;
  const ctx = c.getContext('2d');
  const box = SDF_SIZE * 0.60;
  const s = box / 24;
  const off = (SDF_SIZE - box) / 2;
  ctx.setTransform(s, 0, 0, s, off, off);
  ctx.fillStyle = '#fff';
  ctx.fill(new Path2D(pathStr));
  return ctx.getImageData(0, 0, SDF_SIZE, SDF_SIZE);
}

function chamfer(d, w, h) {
  const D1 = 1, D2 = Math.SQRT2;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x; let v = d[i];
    if (x > 0) v = Math.min(v, d[i - 1] + D1);
    if (y > 0) {
      v = Math.min(v, d[i - w] + D1);
      if (x > 0) v = Math.min(v, d[i - w - 1] + D2);
      if (x < w - 1) v = Math.min(v, d[i - w + 1] + D2);
    }
    d[i] = v;
  }
  for (let y = h - 1; y >= 0; y--) for (let x = w - 1; x >= 0; x--) {
    const i = y * w + x; let v = d[i];
    if (x < w - 1) v = Math.min(v, d[i + 1] + D1);
    if (y < h - 1) {
      v = Math.min(v, d[i + w] + D1);
      if (x < w - 1) v = Math.min(v, d[i + w + 1] + D2);
      if (x > 0) v = Math.min(v, d[i + w - 1] + D2);
    }
    d[i] = v;
  }
}

function buildSDF(img) {
  const n = SDF_SIZE * SDF_SIZE;
  const dOut = new Float32Array(n), dIn = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const inside = img.data[i * 4 + 3] > 127;
    dOut[i] = inside ? 0 : 1e9;
    dIn[i]  = inside ? 1e9 : 0;
  }
  chamfer(dOut, SDF_SIZE, SDF_SIZE);
  chamfer(dIn, SDF_SIZE, SDF_SIZE);
  const enc = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    const d = dOut[i] - dIn[i]; // + outside, - inside
    enc[i] = Math.max(0, Math.min(255, Math.round((0.5 + 0.5 * d / SDF_SPREAD) * 255)));
  }
  return enc;
}

/* contour pixels + outward normals, in y-up mask uv */
function edgePoints(img) {
  const S = SDF_SIZE, pts = [];
  const a = (x, y) => img.data[(y * S + x) * 4 + 3] > 127;
  for (let y = 1; y < S - 1; y++) {
    for (let x = 1; x < S - 1; x++) {
      if (!a(x, y)) continue;
      const l = a(x - 1, y), r = a(x + 1, y), u = a(x, y - 1), dn = a(x, y + 1);
      if (l && r && u && dn) continue;
      const gx = (r ? 1 : 0) - (l ? 1 : 0);
      const gy = (dn ? 1 : 0) - (u ? 1 : 0);
      let nx = -gx, ny = gy;                 // outward, y flipped to y-up
      const len = Math.hypot(nx, ny);
      if (!len) { nx = 0; ny = 1; } else { nx /= len; ny /= len; }
      pts.push((x + 0.5) / S, 1 - (y + 0.5) / S, nx, ny);
    }
  }
  return pts;
}

function makeParticleData(pts, count) {
  const data = new Float32Array(count * 5);
  const nPts = pts.length / 4;
  for (let i = 0; i < count; i++) {
    const j = (Math.random() * nPts) | 0;
    data[i * 5]     = pts[j * 4];
    data[i * 5 + 1] = pts[j * 4 + 1];
    data[i * 5 + 2] = pts[j * 4 + 2];
    data[i * 5 + 3] = pts[j * 4 + 3];
    data[i * 5 + 4] = Math.random() * 100 + i * 0.618;
  }
  return data;
}

/* ---------------- shaders ---------------- */
const VERT = \`#version 300 es
out vec2 vUv;
void main(){
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}\`;

const GLSL_COMMON = \`
precision highp float;
uniform sampler2D uSDF;
uniform float uTime;
uniform float uAspect;
uniform vec2  uScale;
uniform vec2  uShift;
uniform vec3  uPointer; // uv.xy, active
in vec2 vUv;
out vec4 frag;

float hash21(vec2 p){
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i), b = hash21(i + vec2(1,0));
  float c = hash21(i + vec2(0,1)), d = hash21(i + vec2(1,1));
  return mix(mix(a,b,f.x), mix(c,d,f.x), f.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 5; i++){ v += a * vnoise(p); p = r * p * 2.03; a *= 0.5; }
  return v;
}
/* signed distance in mask-uv units; extended analytically past the texture
   border so out-of-range samples keep growing instead of clamping (kills
   the rectangular clamp artifacts) */
float sdf(vec2 uv){
  vec2 m = 0.5 + (uv - 0.5 - uShift) * uScale;
  vec2 mc = clamp(m, 0.0, 1.0);
  float d = (texture(uSDF, vec2(mc.x, 1.0 - mc.y)).r - 0.5) * \${D_RANGE.toFixed(4)};
  return d + length(m - mc);
}
float edgeFade(vec2 uv){
  return smoothstep(0.0, 0.05, uv.x) * smoothstep(1.0, 0.95, uv.x)
       * smoothstep(0.0, 0.05, uv.y) * smoothstep(1.0, 0.95, uv.y);
}
\`;

/* water simulation step (ping-pong, r = h, g = h_prev) */
const FRAG_SIM = \`#version 300 es
precision highp float;
uniform sampler2D uState;
uniform vec2 uTexel;
uniform vec3 uDrop; // sim-uv.xy, strength
in vec2 vUv;
out vec4 frag;
void main(){
  vec2 s = texture(uState, vUv).rg;
  float l = texture(uState, vUv - vec2(uTexel.x, 0.0)).r;
  float r = texture(uState, vUv + vec2(uTexel.x, 0.0)).r;
  float u = texture(uState, vUv + vec2(0.0, uTexel.y)).r;
  float d = texture(uState, vUv - vec2(0.0, uTexel.y)).r;
  float next = (l + r + u + d) * 0.5 - s.g;
  next *= 0.984;
  if (uDrop.z != 0.0){
    float dd = distance(vUv, uDrop.xy);
    next += uDrop.z * exp(-dd * dd * 3800.0);
  }
  frag = vec4(next, s.r, 0.0, 1.0);
}\`;

const FRAG_WATER = \`#version 300 es
\${GLSL_COMMON}
uniform sampler2D uState;
uniform vec2 uSimTexel;
/* cover-map panel uv into the square sim so rings stay circular on screen */
vec2 simUV(vec2 uv){
  return 0.5 + (uv - 0.5) * vec2(uAspect, 1.0) / max(uAspect, 1.0);
}
void main(){
  vec2 suv = simUV(vUv);
  float h  = texture(uState, suv).r;
  float hx = texture(uState, suv + vec2(uSimTexel.x, 0.0)).r - texture(uState, suv - vec2(uSimTexel.x, 0.0)).r;
  float hy = texture(uState, suv + vec2(0.0, uSimTexel.y)).r - texture(uState, suv - vec2(0.0, uSimTexel.y)).r;
  vec2 grad = vec2(hx, hy);
  vec3 nrm = normalize(vec3(-grad * 30.0, 1.0));

  vec2 ruv = vUv + grad * 0.22;          // refracted lookup
  float d  = sdf(ruv);

  // deep water base
  vec3 col = mix(vec3(0.006, 0.030, 0.055), vec3(0.012, 0.078, 0.125), vUv.y * 0.8 + h * 0.25);
  col += vec3(0.02, 0.10, 0.13) * fbm(vUv * vec2(uAspect, 1.0) * 3.0 + uTime * 0.05) * 0.3;

  // the mark, seen through the surface
  float logo = smoothstep(0.005, -0.005, d);
  float glow = exp(-max(d, 0.0) / 0.09) * 0.26;
  vec3 markCol = mix(vec3(0.55, 0.92, 1.0), vec3(0.95, 1.0, 1.0), logo * 0.6);
  col += markCol * (logo * 0.92 + glow);

  // ripple shading: crests bright, troughs barely darker
  col += vec3(0.09, 0.30, 0.40) * clamp(h * 1.8, -0.06, 1.0);
  col += vec3(0.25, 0.55, 0.65) * pow(clamp(h * 2.6, 0.0, 1.0), 2.0) * 0.5;

  // specular glint
  vec3 L = normalize(vec3(-0.35, 0.55, 0.75));
  vec3 H = normalize(L + vec3(0.0, 0.0, 1.0));
  float spec = pow(max(dot(nrm, H), 0.0), 150.0);
  col += spec * vec3(0.65, 0.9, 1.0) * 0.9;

  col *= 0.35 + 0.65 * edgeFade(vUv);
  col += (hash21(vUv * 617.0 + uTime) - 0.5) / 128.0;
  frag = vec4(col, 1.0);
}\`;

const FRAG_LIGHTNING = \`#version 300 es
\${GLSL_COMMON}
void main(){
  float t = uTime;
  float d = sdf(vUv);
  vec2 pp = vUv * vec2(uAspect, 1.0);

  // storm backdrop
  vec3 col = vec3(0.010, 0.011, 0.024);
  col += vec3(0.035, 0.04, 0.075) * fbm(pp * 2.2 + vec2(t * 0.04, t * 0.01));

  // occasional sheet flash
  float slot = floor(t * 0.45);
  float ph   = fract(t * 0.45);
  float big  = step(0.68, hash21(vec2(slot, 3.7))) * exp(-ph * 16.0);

  // the mark: dark slate body, lit by flashes
  float inside = smoothstep(0.005, -0.005, d);
  vec3 body = vec3(0.055, 0.06, 0.10) + big * vec3(0.55, 0.58, 0.85);
  col = mix(col, body, inside);
  float rim = exp(-abs(d) / 0.012) * 0.5;
  col += rim * vec3(0.35, 0.4, 0.8);

  // pointer draws the storm closer
  vec2 dp = (vUv - uPointer.xy) * vec2(uAspect, 1.0);
  float pb = 1.0 + 2.4 * uPointer.z * exp(-dot(dp, dp) * 34.0);

  // fBm zigzag arcs crawling the contour
  float fade = edgeFade(vUv);
  for (int i = 0; i < 3; i++){
    float fi = float(i);
    float n  = fbm(pp * mix(3.0, 8.0, fi / 2.0) + vec2(t * (1.2 + fi * 0.9), fi * 19.3)) - 0.5;
    float e  = abs(d + n * 0.11);
    float fl = hash21(vec2(floor(t * (6.0 + fi * 3.0)), fi));
    fl = mix(0.15, 1.0, smoothstep(0.25, 0.95, fl));
    float bolt = pow(0.0042 * pb / (e + 0.0022), 1.35) * fl;
    bolt = min(bolt, 6.0);
    col += bolt * mix(vec3(0.38, 0.42, 1.0), vec3(0.92, 0.9, 1.0), fi / 2.0) * fade;
  }
  // tight white core arc
  float n0 = fbm(pp * 5.0 + vec2(t * 2.4, 7.7)) - 0.5;
  float e0 = abs(d + n0 * 0.10);
  float corefl = mix(0.25, 1.15, hash21(vec2(floor(t * 9.0), 11.0)));
  col += min(pow(0.0026 * pb / (e0 + 0.0016), 1.6), 8.0) * corefl * vec3(1.0) * fade;

  col += big * vec3(0.30, 0.32, 0.55) * (0.25 + 0.75 * inside);
  col = col / (1.0 + col * 0.18);
  col *= 0.4 + 0.6 * edgeFade(vUv);
  col += (hash21(vUv * 431.0 + uTime) - 0.5) / 128.0;
  frag = vec4(col, 1.0);
}\`;

const FRAG_FIRE = \`#version 300 es
\${GLSL_COMMON}
uniform float uWind;

vec3 fireRamp(float x){
  x = clamp(x, 0.0, 1.0);
  vec3 c = mix(vec3(0.0), vec3(0.45, 0.06, 0.02), smoothstep(0.02, 0.30, x));
  c = mix(c, vec3(0.95, 0.34, 0.08), smoothstep(0.28, 0.55, x));
  c = mix(c, vec3(1.0, 0.68, 0.22), smoothstep(0.52, 0.78, x));
  c = mix(c, vec3(1.0, 0.97, 0.88), smoothstep(0.78, 0.97, x));
  return c;
}

void main(){
  float t = uTime;
  float d0 = sdf(vUv);
  vec2 pp = vUv * vec2(uAspect, 1.0);

  // which way is "up and away" from the mark (wide epsilon: the gradient
  // creases on the medial axis between rays and narrow sampling bands there)
  float e = 0.012;
  vec2 g = vec2(sdf(vUv + vec2(e, 0.0)) - sdf(vUv - vec2(e, 0.0)),
                sdf(vUv + vec2(0.0, e)) - sdf(vUv - vec2(0.0, e)));
  float upw = smoothstep(-0.2, 0.9, normalize(g + 1e-5).y);

  // pointer stokes the flame
  vec2 dp = (vUv - uPointer.xy) * vec2(uAspect, 1.0);
  float stoke = uPointer.z * exp(-dot(dp, dp) * 26.0);

  // thin tongues: x-squashed scrolling fBm, advected progressively with
  // height so flames stay attached at the edge and lick upward
  float n1 = fbm(vec2(pp.x * 12.0,        pp.y * 3.0  - t * 2.1));
  float n2 = fbm(vec2(pp.x * 6.0 + 41.3,  pp.y * 1.7  - t * 1.25));
  float d0f = d0 + (hash21(vUv * 771.0 + t * 1.3) - 0.5) * 0.004;
  float rise = max(0.0, n1 * 1.15 + n2 * 0.65 - 0.5) * 1.3;  // many columns ~0, few run hot
  float adv  = smoothstep(-0.03, 0.22, d0f);     // 0 at the edge, grows above
  float lick = 0.30 * (1.0 + stoke * 0.8);
  vec2 offs = vec2((n2 - 0.5) * 0.05 + uWind * 0.05, -rise * lick * adv);
  float df = sdf(vUv + offs);
  df += (hash21(vUv * 997.0 + uTime) - 0.5) * 0.004;  // dither the 8-bit field

  float heat = clamp(1.0 - df / 0.07, 0.0, 1.0);
  heat *= mix(0.1, 1.0, upw);
  heat *= 1.0 - 0.45 * smoothstep(0.08, 0.26, d0f);  // gentle thinning with height
  float tongue = smoothstep(0.25, 0.70, heat);   // sharp separated licks
  float body   = pow(heat, 2.2) * 0.45;          // faint haze beneath them
  float f = max(tongue, body) * (0.95 + 0.25 * stoke);

  vec3 col = vec3(0.012, 0.006, 0.004);
  col += fireRamp(f * (1.05 - 0.4 * smoothstep(0.02, 0.25, d0)));  // white base, orange tips

  // white-hot mark with a warm halo, like paper mid-combustion
  float inside = smoothstep(0.004, -0.004, d0);
  float core   = smoothstep(0.0, -0.02, d0);
  vec3 markCol = mix(vec3(1.0, 0.92, 0.78), vec3(1.0, 1.0, 0.98), core);
  col = mix(col, markCol, inside);
  col += exp(-max(d0, 0.0) / 0.035) * vec3(1.0, 0.55, 0.22) * 0.35 * (1.0 - inside * 0.9);
  col += exp(-max(d0, 0.0) / 0.12)  * vec3(0.55, 0.14, 0.03) * 0.35 * (0.6 + 0.4 * n2);

  col = col / (1.0 + col * 0.12);
  col *= 0.35 + 0.65 * edgeFade(vUv);
  col += (hash21(vUv * 523.0 + uTime) - 0.5) / 128.0;
  frag = vec4(col, 1.0);
}\`;

/* ---------------- particles: stateless GPU point sprites off the contour ---------------- */
const PART_VERT = \`#version 300 es
precision highp float;
layout(location=0) in vec2 aPos;    // spawn point, y-up mask uv
layout(location=1) in vec2 aNorm;   // outward contour normal
layout(location=2) in float aSeed;
uniform float uTime;
uniform vec2  uScale;
uniform vec2  uShift;
uniform float uDpr;
uniform float uWind;
uniform vec4  uCfgA;  // travel, lifeMin, lifeMax, alongNormal
uniform vec4  uCfgB;  // wiggle, sizeMin, sizeMax, sparse
out float vFade;
out float vMixC;
float h1(float n){ return fract(sin(n) * 43758.5453); }
void main(){
  float hs   = h1(aSeed * 1.31);
  float life = mix(uCfgA.y, uCfgA.z, hs);
  float tt   = uTime / life + aSeed * 13.7;
  float ph   = fract(tt);
  float cyc  = floor(tt);
  float r1 = h1(aSeed + cyc * 0.317);
  float r2 = h1(aSeed * 2.13 + cyc * 0.771);
  float on = step(uCfgB.w, r2);

  vec2 dir = normalize(mix(vec2(0.0, 1.0), aNorm, uCfgA.w) + (vec2(r1, h1(r1 * 7.0)) - 0.5) * 0.8);
  float trav = uCfgA.x * (0.45 + 0.9 * r1);
  vec2 p = aPos + aNorm * 0.004 + dir * trav * ph;
  p.x += sin(ph * 10.0 + r1 * 40.0 + uTime * 0.5) * uCfgB.x * ph;
  p.x += uWind * 0.08 * ph;

  vec2 uv = 0.5 + uShift + (p - 0.5) / uScale;
  vFade = on * smoothstep(0.0, 0.12, ph) * smoothstep(1.0, 0.5, ph) * mix(0.35, 1.0, r2);
  vMixC = h1(aSeed * 3.7 + cyc);
  gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
  gl_PointSize = mix(uCfgB.y, uCfgB.z, h1(aSeed * 5.11 + cyc)) * uDpr * (1.0 - 0.45 * ph);
}\`;

const PART_FRAG = \`#version 300 es
precision highp float;
uniform vec3 uColA;
uniform vec3 uColB;
in float vFade;
in float vMixC;
out vec4 frag;
void main(){
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  if (r2 > 1.0) discard;
  float a = exp(-r2 * 3.5) * (1.0 - r2);
  frag = vec4(mix(uColA, uColB, vMixC) * a * vFade, 1.0);
}\`;

/* ---------------- GL helpers ---------------- */
function compile(gl, type, src) {
  const sh = gl.createShader(type);
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(sh), src);
    return null;
  }
  return sh;
}
function program(gl, vertSrc, fragSrc) {
  const p = gl.createProgram();
  const vs = compile(gl, gl.VERTEX_SHADER, vertSrc);
  const fs = compile(gl, gl.FRAGMENT_SHADER, fragSrc);
  if (!vs || !fs) return null;
  gl.attachShader(p, vs); gl.attachShader(p, fs);
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(p));
    return null;
  }
  return p;
}

const DPR = Math.min(window.devicePixelRatio || 1, 1.75);
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const SIM_RES = 512;

class Panel {
  constructor(el, fragSrc, logo, opts) {
    this.el = el;
    this.canvas = el.querySelector('canvas');
    this.opts = opts;
    this.pointer = { x: 0.5, y: 0.5, active: 0 };
    this.wind = 0;
    this.windTarget = 0;
    this.dropQueue = [];
    this.nextAutoDrop = 0.6;
    this.needsResize = false;
    this.ok = false;

    const gl = this.canvas.getContext('webgl2', { alpha: false, antialias: false });
    if (!gl) return this.fail();
    this.gl = gl;

    this.prog = program(gl, VERT, fragSrc);
    if (!this.prog) return this.fail();
    this.uni = {};
    for (const n of ['uSDF','uTime','uAspect','uScale','uShift','uPointer','uState','uSimTexel','uWind'])
      this.uni[n] = gl.getUniformLocation(this.prog, n);

    // sdf texture
    this.sdfTex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this.sdfTex);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.R8, SDF_SIZE, SDF_SIZE, 0, gl.RED, gl.UNSIGNED_BYTE, logo.sdf);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    if (opts.sim) {
      if (!gl.getExtension('EXT_color_buffer_float')) return this.fail();
      this.simProg = program(gl, VERT, FRAG_SIM);
      if (!this.simProg) return this.fail();
      this.simUni = {
        uState: gl.getUniformLocation(this.simProg, 'uState'),
        uTexel: gl.getUniformLocation(this.simProg, 'uTexel'),
        uDrop:  gl.getUniformLocation(this.simProg, 'uDrop'),
      };
      this.simTex = []; this.simFbo = [];
      for (let i = 0; i < 2; i++) {
        const t = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, t);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RG16F, SIM_RES, SIM_RES, 0, gl.RG, gl.HALF_FLOAT, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        const f = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, f);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, t, 0);
        this.simTex.push(t); this.simFbo.push(f);
      }
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      this.simSrc = 0;
    }

    // particle system
    const P = opts.particles;
    if (P) {
      this.partProg = program(gl, PART_VERT, PART_FRAG);
      if (!this.partProg) return this.fail();
      this.partUni = {};
      for (const n of ['uTime','uScale','uShift','uDpr','uWind','uCfgA','uCfgB','uColA','uColB'])
        this.partUni[n] = gl.getUniformLocation(this.partProg, n);
      const data = makeParticleData(logo.edges, P.count);
      this.partVao = gl.createVertexArray();
      gl.bindVertexArray(this.partVao);
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 20, 0);
      gl.enableVertexAttribArray(1);
      gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 20, 8);
      gl.enableVertexAttribArray(2);
      gl.vertexAttribPointer(2, 1, gl.FLOAT, false, 20, 16);
      gl.bindVertexArray(null);
    }

    this.resize();
    // resize inside the rAF (before drawing), never in the RO callback \u2014
    // RO fires after rAF, so resizing there clears the canvas post-draw
    // and every hover transition frame paints black
    new ResizeObserver(() => {
      if (REDUCED) this.resize(); else this.needsResize = true;
    }).observe(el);
    this.bindPointer();
    this.ok = true;
  }

  fail() {
    this.el.querySelector('.fail').style.display = 'grid';
    this.canvas.style.display = 'none';
  }

  resize() {
    const r = this.el.getBoundingClientRect();
    const w = Math.max(2, Math.round(r.width * DPR));
    const h = Math.max(2, Math.round(r.height * DPR));
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w; this.canvas.height = h;
    }
    this.aspect = w / h;
    if (REDUCED && this.ok) this.draw(0.001);
  }

  bindPointer() {
    const uv = e => {
      const r = this.el.getBoundingClientRect();
      return { x: (e.clientX - r.left) / r.width, y: 1 - (e.clientY - r.top) / r.height };
    };
    let last = null, lastT = 0;
    this.el.addEventListener('pointermove', e => {
      const p = uv(e), now = performance.now();
      this.pointer.x = p.x; this.pointer.y = p.y; this.pointer.active = 1;
      if (last) {
        const dt = Math.max(8, now - lastT);
        const dx = p.x - last.x, dy = p.y - last.y;
        const speed = Math.hypot(dx, dy) / (dt / 1000);
        if (this.opts.sim && speed > 0.05 && this.dropQueue.length < 6)
          this.dropQueue.push({ x: p.x, y: p.y, s: Math.min(speed * 0.14, 0.55) });
        this.windTarget = Math.max(-1, Math.min(1, dx / (dt / 1000) * 0.55));
      }
      last = p; lastT = now;
    });
    this.el.addEventListener('pointerdown', e => {
      const p = uv(e);
      if (this.opts.sim) this.dropQueue.push({ x: p.x, y: p.y, s: 0.9 });
      this.pointer.x = p.x; this.pointer.y = p.y; this.pointer.active = 1.6;
    });
    this.el.addEventListener('pointerup', () => { this.pointer.active = 1; });
    this.el.addEventListener('pointerleave', () => { this.pointer.active = 0; last = null; this.windTarget = 0; });
  }

  /* panel uv -> square sim uv (must match simUV() in the water shader) */
  toSimUV(x, y) {
    const a = this.aspect, m = Math.max(a, 1);
    return { x: 0.5 + (x - 0.5) * a / m, y: 0.5 + (y - 0.5) / m };
  }

  stepSim(t) {
    const gl = this.gl;
    if (t > this.nextAutoDrop) {
      this.dropQueue.push({ x: 0.12 + Math.random() * 0.76, y: 0.12 + Math.random() * 0.76, s: 0.12 + Math.random() * 0.3 });
      this.nextAutoDrop = t + 0.5 + Math.random() * 1.4;
    }
    gl.useProgram(this.simProg);
    gl.viewport(0, 0, SIM_RES, SIM_RES);
    gl.uniform2f(this.simUni.uTexel, 1 / SIM_RES, 1 / SIM_RES);
    for (let i = 0; i < 2; i++) {
      const drop = this.dropQueue.shift();
      if (drop) {
        const s = this.toSimUV(drop.x, drop.y);
        gl.uniform3f(this.simUni.uDrop, s.x, s.y, drop.s);
      } else {
        gl.uniform3f(this.simUni.uDrop, 0, 0, 0);
      }
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.simFbo[1 - this.simSrc]);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, this.simTex[this.simSrc]);
      gl.uniform1i(this.simUni.uState, 1);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      this.simSrc = 1 - this.simSrc;
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }

  scaleVec() {
    const zoom = this.opts.zoom, a = this.aspect;
    const fit = Math.min(a, 1);
    return [(a / fit) * zoom, (1 / fit) * zoom];
  }

  draw(t) {
    const gl = this.gl;
    if (this.needsResize) { this.needsResize = false; this.resize(); }
    if (this.opts.sim) this.stepSim(t);

    this.wind += (this.windTarget - this.wind) * 0.04;
    this.windTarget *= 0.97;

    gl.useProgram(this.prog);
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);

    const sc = this.scaleVec();
    gl.uniform1f(this.uni.uTime, t);
    gl.uniform1f(this.uni.uAspect, this.aspect);
    gl.uniform2f(this.uni.uScale, sc[0], sc[1]);
    gl.uniform2f(this.uni.uShift, this.opts.shift[0], this.opts.shift[1]);
    gl.uniform3f(this.uni.uPointer, this.pointer.x, this.pointer.y, this.pointer.active);
    if (this.uni.uWind) gl.uniform1f(this.uni.uWind, this.wind);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.sdfTex);
    gl.uniform1i(this.uni.uSDF, 0);
    if (this.opts.sim) {
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, this.simTex[this.simSrc]);
      gl.uniform1i(this.uni.uState, 1);
      gl.uniform2f(this.uni.uSimTexel, 1 / SIM_RES, 1 / SIM_RES);
    }
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    const P = this.opts.particles;
    if (P) {
      gl.useProgram(this.partProg);
      gl.uniform1f(this.partUni.uTime, t);
      gl.uniform2f(this.partUni.uScale, sc[0], sc[1]);
      gl.uniform2f(this.partUni.uShift, this.opts.shift[0], this.opts.shift[1]);
      gl.uniform1f(this.partUni.uDpr, DPR);
      gl.uniform1f(this.partUni.uWind, this.wind);
      gl.uniform4f(this.partUni.uCfgA, P.travel, P.lifeMin, P.lifeMax, P.alongNormal);
      gl.uniform4f(this.partUni.uCfgB, P.wiggle, P.sizeMin, P.sizeMax, P.sparse);
      gl.uniform3f(this.partUni.uColA, P.colA[0], P.colA[1], P.colA[2]);
      gl.uniform3f(this.partUni.uColB, P.colB[0], P.colB[1], P.colB[2]);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE);
      gl.bindVertexArray(this.partVao);
      gl.drawArrays(gl.POINTS, 0, P.count);
      gl.bindVertexArray(null);
      gl.disable(gl.BLEND);
    }
  }
}

/* ---------------- boot ---------------- */
function buildLogo(path) {
  const img = rasterizeLogo(path);
  return { sdf: buildSDF(img), edges: edgePoints(img) };
}
const logos = {
  openai: buildLogo(LOGO_PATHS.openai),
  anthropic: buildLogo(LOGO_PATHS.anthropic),
  claude: buildLogo(LOGO_PATHS.claude),
};

const panels = [
  new Panel(document.querySelector('[data-fx="water"]'), FRAG_WATER, logos.openai, {
    sim: true, zoom: 1.06, shift: [0, 0],
    particles: {
      count: 160, travel: 0.10, lifeMin: 4.0, lifeMax: 8.0, alongNormal: 0.15,
      wiggle: 0.02, sizeMin: 1.5, sizeMax: 3.5, sparse: 0.5,
      colA: [0.10, 0.24, 0.30], colB: [0.22, 0.40, 0.48],
    },
  }),
  new Panel(document.querySelector('[data-fx="lightning"]'), FRAG_LIGHTNING, logos.anthropic, {
    sim: false, zoom: 1.10, shift: [0, 0],
    particles: {
      count: 240, travel: 0.055, lifeMin: 0.3, lifeMax: 0.9, alongNormal: 1.0,
      wiggle: 0.015, sizeMin: 1.2, sizeMax: 2.6, sparse: 0.8,
      colA: [0.45, 0.50, 1.0], colB: [0.95, 0.95, 1.0],
    },
  }),
  new Panel(document.querySelector('[data-fx="fire"]'), FRAG_FIRE, logos.claude, {
    sim: false, zoom: 1.16, shift: [0, -0.04],
    particles: {
      count: 420, travel: 0.30, lifeMin: 1.4, lifeMax: 3.0, alongNormal: 0.35,
      wiggle: 0.035, sizeMin: 1.6, sizeMax: 4.5, sparse: 0.55,
      colA: [1.0, 0.62, 0.28], colB: [1.0, 0.30, 0.10],
    },
  }),
].filter(p => p.ok);

const t0 = performance.now();
function loop() {
  const t = (performance.now() - t0) / 1000;
  for (const p of panels) p.draw(t);
  requestAnimationFrame(loop);
}
if (!REDUCED) requestAnimationFrame(loop);
else for (const p of panels) p.draw(0.001);
<\/script>
</body>
</html>
`});var tf={};Bo(tf,{ELEMENTS_DEFAULTS:()=>We,ELEMENT_VARIANTS:()=>ef,ElementsBackground:()=>Y0});function Bt(e,t,n){return Math.min(n,Math.max(t,e))}function X0(e){return G0.reduce((t,[n,r])=>t.replace(n,r),e)}function Q0(e,t,n){let r=W0[e]/Bt(t,.65,1.5),o=Math.max(0,Math.round(V0[e]*Bt(n,0,2))),l=`<style data-elements-focus>
html, body, main { width: 100%; height: 100%; margin: 0; overflow: hidden; background: #060708; }
header, .hint, .info, .kanji { display: none !important; }
main { display: block; }
.panel { display: none; }
.panel[data-fx="${e}"] {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  opacity: 1;
  transform: none;
  animation: none;
}
.panel[data-fx="${e}"] canvas { width: 100%; height: 100%; }
</style>`;return X0(Jc).replace(/<link[^>]+fonts\.googleapis\.com[^>]*>/gi,"").replace(/<link[^>]+fonts\.gstatic\.com[^>]*>/gi,"").replace("</head>",`${l}<script data-elements-controls>
(function () {
  var nativeNow = performance.now.bind(performance);
  var last = nativeNow();
  var virtual = last;
  var state = { speed: 1, paused: false };
  window.__ELEMENTS_PAUSED = false;
  performance.now = function () {
    var real = nativeNow();
    if (!state.paused) virtual += (real - last) * state.speed;
    last = real;
    return virtual;
  };
  window.addEventListener('message', function (event) {
    if (!event.data || event.data.type !== 'elements-controls') return;
    var next = event.data.controls || {};
    if (Number.isFinite(next.speed)) state.speed = Math.max(0, Math.min(3, next.speed));
    state.paused = Boolean(next.paused);
    window.__ELEMENTS_PAUSED = state.paused;
  });
})();
<\/script></head>`).replace(new RegExp(`count: ${$0[e]}`),`count: ${o}`).replace(`zoom: ${H0[e]}`,`zoom: ${r.toFixed(4)}`).replace("for (const p of panels) p.draw(t);","if (!window.__ELEMENTS_PAUSED) for (const p of panels) p.draw(t);")}function Y0({variant:e=We.variant,speed:t=We.speed,size:n=We.size,particleAmount:r=We.particleAmount,opacity:o=We.opacity,hue:l=We.hue,saturation:i=We.saturation,brightness:a=We.brightness,className:s="",style:c}){let h=(0,ve.useRef)(null),[g,p]=(0,ve.useState)(!0),[x,k]=(0,ve.useState)(()=>typeof document>"u"||!document.hidden),E=ef.includes(e)?e:We.variant,L=Bt(t,0,3),f=!g||!x,u=(0,ve.useMemo)(()=>Q0(E,n,r),[r,E,n]),d=(0,ve.useCallback)(()=>{h.current?.contentWindow?.postMessage({type:"elements-controls",controls:{speed:L,paused:f}},"*")},[f,L]);return(0,ve.useEffect)(()=>{let m=h.current;if(!m||typeof IntersectionObserver>"u")return;let v=new IntersectionObserver(([S])=>p(S?.isIntersecting??!0));return v.observe(m),()=>v.disconnect()},[]),(0,ve.useEffect)(()=>{if(typeof document>"u")return;let m=()=>k(!document.hidden);return document.addEventListener("visibilitychange",m),()=>document.removeEventListener("visibilitychange",m)},[]),(0,ve.useEffect)(()=>{d()},[d,u]),(0,aa.jsx)("div",{className:`threeui-background elements${s?` ${s}`:""}`,"data-element":E,style:{background:"#060708",pointerEvents:"auto",...c},children:(0,aa.jsx)("iframe",{ref:h,title:`${j0[E]} element background`,srcDoc:u,sandbox:"allow-scripts",onLoad:d,"aria-hidden":"true",tabIndex:-1,style:{position:"absolute",inset:0,display:"block",width:"100%",height:"100%",border:0,background:"#060708",opacity:Bt(o,.05,1),filter:`hue-rotate(${Bt(l,-180,180)}deg) saturate(${Bt(i,0,2)}) brightness(${Bt(a,.35,1.8)})`}})})}var aa,ve,ef,We,j0,W0,H0,V0,$0,G0,nf=Wt(()=>{aa=Fe(pr(),1),ve=Fe(be(),1);bc();ef=["water","lightning","fire"],We={variant:"water",speed:1,size:1,particleAmount:1,opacity:1,hue:0,saturation:1,brightness:1},j0={water:"Water",lightning:"Lightning",fire:"Fire"},W0={water:1.56,lightning:1.66,fire:1.82},H0={water:"1.06",lightning:"1.10",fire:"1.16"},V0={water:160,lightning:360,fire:560},$0={water:160,lightning:240,fire:420},G0=[[`const SDF_SIZE = 512;
const SDF_SPREAD = 128;`,`const SDF_SIZE = 768;
const SDF_SPREAD = 192;`],["const DPR = Math.min(window.devicePixelRatio || 1, 1.75);","const DPR = Math.min(Math.max(window.devicePixelRatio || 1, 1.5), 2.25);"],["sim: false, zoom: 1.16, shift: [0, -0.04],","sim: false, zoom: 1.16, shift: [0, -0.11],"],[`  float inside = smoothstep(0.005, -0.005, d);
  vec3 body = vec3(0.055, 0.06, 0.10) + big * vec3(0.55, 0.58, 0.85);
  col = mix(col, body, inside);
  float rim = exp(-abs(d) / 0.012) * 0.5;`,`  float inside = smoothstep(0.0025, -0.0025, d);
  vec3 body = vec3(0.055, 0.06, 0.10) + big * vec3(0.55, 0.58, 0.85);
  col = mix(col, body, inside);
  float rim = exp(-abs(d) / 0.0075) * 0.56;`],[`  // fBm zigzag arcs crawling the contour
  float fade = edgeFade(vUv);
  for (int i = 0; i < 3; i++){
    float fi = float(i);
    float n  = fbm(pp * mix(3.0, 8.0, fi / 2.0) + vec2(t * (1.2 + fi * 0.9), fi * 19.3)) - 0.5;
    float e  = abs(d + n * 0.11);
    float fl = hash21(vec2(floor(t * (6.0 + fi * 3.0)), fi));
    fl = mix(0.15, 1.0, smoothstep(0.25, 0.95, fl));
    float bolt = pow(0.0042 * pb / (e + 0.0022), 1.35) * fl;
    bolt = min(bolt, 6.0);
    col += bolt * mix(vec3(0.38, 0.42, 1.0), vec3(0.92, 0.9, 1.0), fi / 2.0) * fade;
  }
  // tight white core arc
  float n0 = fbm(pp * 5.0 + vec2(t * 2.4, 7.7)) - 0.5;
  float e0 = abs(d + n0 * 0.10);
  float corefl = mix(0.25, 1.15, hash21(vec2(floor(t * 9.0), 11.0)));
  col += min(pow(0.0026 * pb / (e0 + 0.0016), 1.6), 8.0) * corefl * vec3(1.0) * fade;`,`  // Layered contour arcs: broad current, hairline filaments, and short-lived forks.
  float fade = edgeFade(vUv);
  for (int i = 0; i < 5; i++){
    float fi = float(i);
    float layer = fi / 4.0;
    float coarse = fbm(pp * mix(4.0, 13.0, layer) + vec2(t * (1.3 + fi * 0.78), fi * 17.7)) - 0.5;
    float detail = fbm(pp * mix(17.0, 31.0, layer) + vec2(-t * (2.9 + fi * 0.55), fi * 31.7)) - 0.5;
    float n = coarse * mix(0.82, 0.58, layer) + detail * mix(0.18, 0.42, layer);
    float e = abs(d + n * mix(0.09, 0.038, layer));
    float fl = hash21(vec2(floor(t * (7.0 + fi * 3.4)), fi));
    fl = mix(0.12, 1.0, smoothstep(0.22, 0.94, fl));
    float width = mix(0.0034, 0.0012, layer);
    float bolt = pow(width * pb / (e + mix(0.0018, 0.0008, layer)), mix(1.42, 1.78, layer)) * fl;
    bolt = min(bolt, 7.0);
    col += bolt * mix(vec3(0.34, 0.39, 1.0), vec3(0.96, 0.94, 1.0), pow(layer, 0.75)) * fade;
  }

  // A white primary channel with a displaced secondary fork.
  float n0 = fbm(pp * 6.5 + vec2(t * 2.8, 7.7)) - 0.5;
  n0 += (fbm(pp * 23.0 + vec2(-t * 4.1, 18.2)) - 0.5) * 0.22;
  float e0 = abs(d + n0 * 0.075);
  float corefl = mix(0.22, 1.2, hash21(vec2(floor(t * 10.0), 11.0)));
  col += min(pow(0.00175 * pb / (e0 + 0.0009), 1.78), 9.0) * corefl * vec3(1.0) * fade;

  float branchNoise = fbm(pp * 16.0 + vec2(t * 3.7, -13.4)) - 0.5;
  float branchEdge = abs(d + n0 * 0.052 + branchNoise * 0.026);
  float branchLife = smoothstep(0.35, 0.92, hash21(vec2(floor(t * 13.0), 23.0)));
  col += min(pow(0.0011 * pb / (branchEdge + 0.00075), 1.72), 5.0)
       * branchLife * vec3(0.64, 0.70, 1.0) * fade;`],[`  // thin tongues: x-squashed scrolling fBm, advected progressively with
  // height so flames stay attached at the edge and lick upward
  float n1 = fbm(vec2(pp.x * 12.0,        pp.y * 3.0  - t * 2.1));
  float n2 = fbm(vec2(pp.x * 6.0 + 41.3,  pp.y * 1.7  - t * 1.25));
  float d0f = d0 + (hash21(vUv * 771.0 + t * 1.3) - 0.5) * 0.004;
  float rise = max(0.0, n1 * 1.15 + n2 * 0.65 - 0.5) * 1.3;  // many columns ~0, few run hot
  float adv  = smoothstep(-0.03, 0.22, d0f);     // 0 at the edge, grows above
  float lick = 0.30 * (1.0 + stoke * 0.8);
  vec2 offs = vec2((n2 - 0.5) * 0.05 + uWind * 0.05, -rise * lick * adv);
  float df = sdf(vUv + offs);
  df += (hash21(vUv * 997.0 + uTime) - 0.5) * 0.004;  // dither the 8-bit field

  float heat = clamp(1.0 - df / 0.07, 0.0, 1.0);
  heat *= mix(0.1, 1.0, upw);
  heat *= 1.0 - 0.45 * smoothstep(0.08, 0.26, d0f);  // gentle thinning with height
  float tongue = smoothstep(0.25, 0.70, heat);   // sharp separated licks
  float body   = pow(heat, 2.2) * 0.45;          // faint haze beneath them
  float f = max(tongue, body) * (0.95 + 0.25 * stoke);`,`  // Three frequency bands split the fire into attached tongues, fine wisps, and hot veins.
  float n1 = fbm(vec2(pp.x * 11.0,        pp.y * 3.2 - t * 2.2));
  float n2 = fbm(vec2(pp.x * 6.5 + 41.3,  pp.y * 1.8 - t * 1.3));
  float n3 = fbm(vec2(pp.x * 27.0 - t * 0.7, pp.y * 7.5 - t * 4.0));
  float d0f = d0 + (hash21(vUv * 771.0 + t * 1.3) - 0.5) * 0.0025;
  float rise = max(0.0, n1 * 0.98 + n2 * 0.54 + n3 * 0.38 - 0.58) * 1.48;
  float adv  = smoothstep(-0.025, 0.24, d0f);
  float lick = 0.31 * (1.0 + stoke * 0.82);
  vec2 offs = vec2((n2 - 0.5) * 0.042 + (n3 - 0.5) * 0.018 + uWind * 0.05, -rise * lick * adv);
  float df = sdf(vUv + offs);
  float micro = fbm(pp * vec2(34.0, 9.0) + vec2(t * 1.1, -t * 5.2));
  df += (micro - 0.5) * 0.011 * adv;
  df += (hash21(vUv * 997.0 + uTime) - 0.5) * 0.0025;

  float heat = clamp(1.0 - df / 0.064, 0.0, 1.0);
  heat *= mix(0.08, 1.0, upw);
  heat *= 1.0 - 0.52 * smoothstep(0.07, 0.27, d0f);
  heat *= 0.84 + n3 * 0.24;
  float tongue = smoothstep(0.29, 0.69, heat);
  float filament = smoothstep(0.58, 0.91, heat + (n3 - 0.5) * 0.20);
  float split = smoothstep(0.38, 0.82, n3) * smoothstep(0.015, 0.23, d0f);
  float body = pow(heat, 2.35) * 0.36;
  float f = max(max(tongue * (0.72 + 0.28 * n3), filament * split * 0.88), body)
          * (0.95 + 0.25 * stoke);`],[`  col += fireRamp(f * (1.05 - 0.4 * smoothstep(0.02, 0.25, d0)));  // white base, orange tips

  // white-hot mark with a warm halo, like paper mid-combustion
  float inside = smoothstep(0.004, -0.004, d0);
  float core   = smoothstep(0.0, -0.02, d0);`,`  col += fireRamp(f * (1.05 - 0.4 * smoothstep(0.02, 0.25, d0)));
  float vein = pow(clamp(1.0 - abs(df) / 0.026, 0.0, 1.0), 3.2)
             * smoothstep(0.55, 0.9, n3) * upw * (0.35 + 0.65 * adv);
  col += fireRamp(0.82) * vein * 0.34;

  // A crisp white-hot mark with a restrained warm halo.
  float inside = smoothstep(0.0025, -0.0025, d0);
  float core   = smoothstep(0.0, -0.016, d0);`],[`  col += exp(-max(d0, 0.0) / 0.035) * vec3(1.0, 0.55, 0.22) * 0.35 * (1.0 - inside * 0.9);
  col += exp(-max(d0, 0.0) / 0.12)  * vec3(0.55, 0.14, 0.03) * 0.35 * (0.6 + 0.4 * n2);`,`  col += exp(-max(d0, 0.0) / 0.026) * vec3(1.0, 0.55, 0.22) * 0.30 * (1.0 - inside * 0.92);
  col += exp(-max(d0, 0.0) / 0.09)  * vec3(0.55, 0.14, 0.03) * 0.28 * (0.55 + 0.45 * n2);`],[`count: 240, travel: 0.055, lifeMin: 0.3, lifeMax: 0.9, alongNormal: 1.0,
      wiggle: 0.015, sizeMin: 1.2, sizeMax: 2.6, sparse: 0.8,`,`count: 240, travel: 0.075, lifeMin: 0.28, lifeMax: 0.82, alongNormal: 0.92,
      wiggle: 0.022, sizeMin: 0.8, sizeMax: 2.0, sparse: 0.72,`],[`count: 420, travel: 0.30, lifeMin: 1.4, lifeMax: 3.0, alongNormal: 0.35,
      wiggle: 0.035, sizeMin: 1.6, sizeMax: 4.5, sparse: 0.55,`,`count: 420, travel: 0.34, lifeMin: 1.1, lifeMax: 2.7, alongNormal: 0.30,
      wiggle: 0.046, sizeMin: 0.9, sizeMax: 3.6, sparse: 0.42,`]]});var rf,of=Wt(()=>{rf=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Generative Branching Tree</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; overflow: hidden; background: #0a0a0a; }
  canvas { display: block; width: 100vw; height: 100vh; }
  .label {
    position: fixed;
    top: 20px;
    left: 24px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 11px;
    font-weight: 500;
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
<div class="label">04 / Generative Tree</div>
<canvas id="canvas"></canvas>
<script>
(function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let W, H;

  // --- Utilities ---
  function lerp(a, b, t) { return a + (b - a) * t; }
  function rand(lo, hi) { return Math.random() * (hi - lo) + lo; }
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function smoothstep(a, b, t) {
    t = Math.max(0, Math.min(1, (t - a) / (b - a)));
    return t * t * (3 - 2 * t);
  }

  // --- Configuration ---
  let MAX_DEPTH = 10;
  let GROWTH_SPEED_BASE = 0.006;
  const HOLD_DURATION = 400;
  const FADE_DURATION = 180;
  const WAIT_DURATION = 80;

  // --- Pre-rendered particle sprite (soft dot) ---
  let particleSprite;
  function initParticleSprite() {
    particleSprite = document.createElement('canvas');
    particleSprite.width = 32;
    particleSprite.height = 32;
    const pctx = particleSprite.getContext('2d');
    const g = pctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    g.addColorStop(0, 'rgba(230, 200, 155, 1)');
    g.addColorStop(0.3, 'rgba(215, 175, 130, 0.5)');
    g.addColorStop(1, 'rgba(200, 150, 100, 0)');
    pctx.fillStyle = g;
    pctx.fillRect(0, 0, 32, 32);
  }

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    initParticleSprite();
  }
  window.addEventListener('resize', resize);
  resize();

  // --- Particle system ---
  const PARTICLE_COUNT = 50;
  let particles = [];

  function createParticle(fullRandom) {
    return {
      x: rand(W * 0.15, W * 0.85),
      y: fullRandom ? rand(H * 0.1, H * 0.9) : rand(H * 0.5, H),
      vx: rand(-0.12, 0.12),
      vy: rand(-0.35, -0.06),
      size: rand(0.6, 2.2),
      alpha: rand(0.04, 0.2),
      phase: rand(0, Math.PI * 2),
      freq: rand(0.0004, 0.0015),
      life: fullRandom ? rand(0, 1) : 0,
      lifeSpeed: rand(0.0006, 0.0025),
    };
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle(true));
    }
  }

  function updateParticles(time) {
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx + Math.sin(time * p.freq + p.phase) * 0.25;
      p.y += p.vy;
      p.life += p.lifeSpeed;
      if (p.life > 1 || p.y < -10 || p.x < -10 || p.x > W + 10) {
        particles[i] = createParticle(false);
      }
    }
  }

  function drawParticles(drawCtx, globalAlpha) {
    for (const p of particles) {
      const lifeFade = p.life < 0.15 ? p.life / 0.15
                     : p.life > 0.8 ? (1 - p.life) / 0.2
                     : 1;
      const a = p.alpha * lifeFade * globalAlpha;
      if (a < 0.004) continue;
      const s = p.size * 3;
      drawCtx.globalAlpha = a;
      drawCtx.drawImage(particleSprite, p.x - s, p.y - s, s * 2, s * 2);
    }
    drawCtx.globalAlpha = 1;
  }

  // --- Color palette (warm sienna \u2192 amber \u2192 golden at tips) ---
  const PALETTE = [
    { r: 78, g: 45, b: 14 },    // deep sienna
    { r: 125, g: 76, b: 28 },   // warm bark
    { r: 172, g: 118, b: 50 },  // rich amber
    { r: 205, g: 158, b: 82 },  // warm gold
    { r: 218, g: 182, b: 108 }, // golden
    { r: 215, g: 195, b: 135 }, // warm golden-cream at tips
  ];

  function colorForDepth(depth, hueShift) {
    const t = depth / MAX_DEPTH;
    const idx = t * (PALETTE.length - 1);
    const i0 = Math.floor(idx);
    const i1 = Math.min(PALETTE.length - 1, i0 + 1);
    const f = idx - i0;
    let r = lerp(PALETTE[i0].r, PALETTE[i1].r, f);
    let g = lerp(PALETTE[i0].g, PALETTE[i1].g, f);
    let b = lerp(PALETTE[i0].b, PALETTE[i1].b, f);

    // Per-branch hue variation (stronger at outer depths)
    // hueShift -1..1: negative = olive/green shift, positive = warm rose shift
    if (hueShift !== undefined) {
      const strength = t * t * 22;
      r += hueShift * strength * 1.0;   // positive = rosier
      g += hueShift * strength * -0.5;  // positive = less green
      b += hueShift * strength * -0.15; // keep blue minimal
    }

    return { r, g, b };
  }

  // --- Branch data ---
  let allBranches = [];
  let treeAlpha = 1;
  let treeState = 'growing';
  let holdTimer = 0, fadeTimer = 0, waitTimer = 0;
  const _pad = parseFloat(new URLSearchParams(location.search).get('p')) || 1;

  function createTree() {
    allBranches = [];

    const trunkLen = H * rand(0.23, 0.28) / _pad;
    const trunkThick = Math.max(8, W * 0.015) / _pad;
    const trunkAngle = -Math.PI / 2 + rand(-0.05, 0.05);

    const approxTreeH = trunkLen * 3.5;
    const baseY = _pad > 1 ? (H + approxTreeH) / 2 : H + trunkThick * 0.5;

    allBranches.push({
      x0: W / 2 + rand(-W * 0.03, W * 0.03),
      y0: baseY,
      angle: trunkAngle,
      length: trunkLen,
      thickness: trunkThick,
      depth: 0,
      growthProgress: 0,
      growthSpeed: GROWTH_SPEED_BASE * rand(0.9, 1.1),
      children: [],
      spawned: false,
      swayPhase: rand(0, Math.PI * 2),
      swayAmp: 0.0008,
      curvature: rand(-0.015, 0.015),
      colorShift: rand(-8, 8),
      hueShift: 0,
      parent: null,
      // Pre-computed stroke variation for painterly rendering
      strokeSeeds: [rand(-1,1), rand(-1,1), rand(-1,1), rand(-1,1), rand(-1,1)],
      tipDots: [],
    });

    treeState = 'growing';
    holdTimer = fadeTimer = waitTimer = 0;
    treeAlpha = 1;
    initParticles();
  }

  function spawnChildren(parent) {
    if (parent.depth >= MAX_DEPTH) return;

    let numChildren;
    if (parent.depth < 1) numChildren = 2 + (Math.random() < 0.35 ? 1 : 0);
    else if (parent.depth < 3) numChildren = 2 + (Math.random() < 0.4 ? 1 : 0);
    else numChildren = Math.random() < 0.25 ? 3 : 2;

    // Progressive pruning: more aggressive at outer depths for airy canopy
    const pruneChance = parent.depth <= 3 ? 0 : parent.depth <= 5 ? 0.1 : parent.depth <= 7 ? 0.22 : 0.35;
    if (Math.random() < pruneChance) numChildren = Math.max(1, numChildren - 1);

    const spread = parent.depth < 2 ? rand(0.32, 0.48) : rand(0.38, 0.6);

    for (let i = 0; i < numChildren; i++) {
      let angleOffset;
      if (numChildren === 1) {
        angleOffset = rand(-0.25, 0.25);
      } else if (numChildren === 2) {
        angleOffset = (i === 0 ? -1 : 1) * rand(0.18, spread);
      } else {
        angleOffset = (i - 1) * spread + rand(-0.1, 0.1);
      }

      const childAngle = parent.angle + angleOffset;
      const lengthFactor = rand(0.58, 0.76);
      const thickFactor = rand(0.48, 0.67);

      const ep = getBranchEnd(parent, 1, 0);

      // Pre-compute tip dots for terminal branches only
      const tipDots = [];
      const childDepth = parent.depth + 1;
      if (childDepth >= MAX_DEPTH) {
        const count = Math.random() < 0.4 ? 2 : 1;
        for (let d = 0; d < count; d++) {
          tipDots.push({
            ox: rand(-2, 2),
            oy: rand(-2, 2),
            size: rand(0.8, 1.6),
            alpha: rand(0.08, 0.2),
          });
        }
      }

      const child = {
        x0: ep.x,
        y0: ep.y,
        angle: childAngle,
        length: parent.length * lengthFactor,
        thickness: Math.max(0.4, parent.thickness * thickFactor),
        depth: childDepth,
        growthProgress: 0,
        growthSpeed: GROWTH_SPEED_BASE * rand(1.0, 1.5) * (1 + parent.depth * 0.1),
        children: [],
        spawned: false,
        swayPhase: rand(0, Math.PI * 2),
        swayAmp: 0.0018 * (parent.depth + 1) * rand(0.7, 1.3),
        curvature: rand(-0.04, 0.04) * (1 + parent.depth * 0.12),
        colorShift: rand(-12, 12),
        hueShift: Math.max(-1, Math.min(1, parent.hueShift + rand(-0.35, 0.35))),
        parent: parent,
        strokeSeeds: [rand(-1,1), rand(-1,1), rand(-1,1), rand(-1,1), rand(-1,1)],
        tipDots: tipDots,
      };

      parent.children.push(child);
      allBranches.push(child);
    }
  }

  // --- Sway (multi-frequency wind + mouse wind + shake) ---
  function getSwayAngle(branch, time) {
    let total = 0;
    let b = branch;
    let depth = 0;
    while (b) {
      const a = b.swayAmp;
      total += Math.sin(time * 0.0005 + b.swayPhase) * a;
      total += Math.sin(time * 0.0003 + b.swayPhase * 1.7) * a * 0.6;
      total += Math.sin(time * 0.00012 + b.swayPhase * 0.4) * a * 0.35;
      depth++;
      b = b.parent;
    }
    // Mouse wind: deeper branches bend more
    if (mouseActive) {
      total += windForce * 0.04 * depth;
    }
    // Shake: rapid oscillation that decays
    if (shakeAmount > 0.01) {
      total += Math.sin(time * 0.015 + branch.swayPhase * 3) * shakeAmount * 0.06 * depth;
    }
    return total;
  }

  function getBranchEnd(branch, progress, time) {
    const sway = getSwayAngle(branch, time);
    const angle = branch.angle + sway;
    const len = branch.length * progress;
    const perpX = -Math.sin(angle);
    const perpY = Math.cos(angle);
    const curveOff = branch.curvature * len;
    return {
      x: branch.x0 + Math.cos(angle) * len + perpX * curveOff,
      y: branch.y0 + Math.sin(angle) * len + perpY * curveOff,
    };
  }

  function recalcPositions(time) {
    for (const b of allBranches) {
      if (b.parent) {
        const pe = getBranchEnd(b.parent, 1, time);
        b.x0 = pe.x;
        b.y0 = pe.y;
      }
    }
  }

  function updateBranches(time) {
    let allDone = true;
    for (const b of allBranches) {
      if (b.growthProgress < 1) {
        b.growthProgress = Math.min(1, b.growthProgress + b.growthSpeed);
        allDone = false;
      }
      // Overlapping growth: spawn children at 65%
      if (b.growthProgress >= 0.65 && !b.spawned) {
        b.spawned = true;
        spawnChildren(b);
      }
    }
    return allDone;
  }

  // --- Branch drawing (multi-stroke painterly) ---
  function drawBranch(drawCtx, b, time) {
    if (b.growthProgress <= 0) return;

    const sway = getSwayAngle(b, time);
    const angle = b.angle + sway;
    const progress = easeOutCubic(b.growthProgress);
    const len = b.length * progress;

    const x1 = b.x0;
    const y1 = b.y0;

    // Perpendicular direction
    const perpX = -Math.sin(angle);
    const perpY = Math.cos(angle);

    // Cubic bezier control points with natural curvature
    const curveOff = b.curvature * len * 1.4;
    const cpx1 = x1 + Math.cos(angle) * len * 0.33 + perpX * curveOff * 0.4;
    const cpy1 = y1 + Math.sin(angle) * len * 0.33 + perpY * curveOff * 0.4;
    const cpx2 = x1 + Math.cos(angle) * len * 0.66 + perpX * curveOff * 0.85;
    const cpy2 = y1 + Math.sin(angle) * len * 0.66 + perpY * curveOff * 0.85;
    const x2 = x1 + Math.cos(angle) * len + perpX * curveOff * 0.7;
    const y2 = y1 + Math.sin(angle) * len + perpY * curveOff * 0.7;

    const col = colorForDepth(b.depth, b.hueShift);
    // Alpha falloff at outer depths for graceful canopy edge
    const depthT = b.depth / MAX_DEPTH;
    const baseAlpha = b.depth <= 1 ? 0.95
                    : b.depth <= 5 ? lerp(0.92, 0.7, depthT)
                    : lerp(0.7, 0.35, (depthT - 0.5) * 2);

    // Determine stroke count by depth for performance
    const strokeCount = b.depth < 3 ? 5 : (b.depth < 6 ? 3 : 2);
    const thickBase = b.thickness;
    const thickTaper = lerp(thickBase, thickBase * 0.3, progress);

    for (let s = 0; s < strokeCount; s++) {
      // Deterministic offset from pre-computed seeds
      const seed = b.strokeSeeds[s] || 0;
      const normalizedS = strokeCount > 1 ? (s / (strokeCount - 1) - 0.5) : 0;

      // Perpendicular offset for multi-stroke spread
      const offsetAmt = normalizedS * thickBase * 0.35 + seed * thickBase * 0.08;
      const ox = perpX * offsetAmt;
      const oy = perpY * offsetAmt;

      // Color variation per stroke (darker on one side, lighter on other)
      const shift = normalizedS * 22 + b.colorShift * 0.3;
      const r = Math.max(0, Math.min(255, col.r + shift));
      const g = Math.max(0, Math.min(255, col.g + shift * 0.65));
      const bb = Math.max(0, Math.min(255, col.b + shift * 0.4));

      // Core stroke is full opacity, flanking strokes are softer
      const isCore = s === Math.floor(strokeCount / 2);
      const alpha = baseAlpha * (isCore ? 1.0 : 0.5);
      const thick = thickTaper * (isCore ? 1.0 : lerp(0.65, 0.45, Math.abs(normalizedS)));

      drawCtx.beginPath();
      drawCtx.moveTo(x1 + ox, y1 + oy);
      drawCtx.bezierCurveTo(
        cpx1 + ox, cpy1 + oy,
        cpx2 + ox, cpy2 + oy,
        x2 + ox, y2 + oy
      );
      drawCtx.strokeStyle = \`rgba(\${r | 0}, \${g | 0}, \${bb | 0}, \${alpha})\`;
      drawCtx.lineWidth = thick;
      drawCtx.lineCap = 'round';
      drawCtx.stroke();
    }

    // Soft ambient glow on mid-to-deep branches
    if (b.depth >= 4 && b.depth < MAX_DEPTH - 1 && b.growthProgress > 0.8) {
      const glowAlpha = smoothstep(0.8, 1.0, b.growthProgress) * 0.06 * (b.depth / MAX_DEPTH);
      const glowR = Math.max(4, thickBase * 2);
      const grd = drawCtx.createRadialGradient(x2, y2, 0, x2, y2, glowR);
      grd.addColorStop(0, \`rgba(\${Math.min(255,col.r+30)|0}, \${Math.min(255,col.g+20)|0}, \${Math.min(255,col.b+15)|0}, \${glowAlpha})\`);
      grd.addColorStop(0.5, \`rgba(\${col.r|0}, \${col.g|0}, \${col.b|0}, \${glowAlpha * 0.25})\`);
      grd.addColorStop(1, \`rgba(\${col.r|0}, \${col.g|0}, \${col.b|0}, 0)\`);
      drawCtx.fillStyle = grd;
      drawCtx.beginPath();
      drawCtx.arc(x2, y2, glowR, 0, Math.PI * 2);
      drawCtx.fill();
    }

    // Delicate luminous tips (inherit branch color)
    if (b.tipDots.length > 0 && b.growthProgress > 0.92) {
      const tipFade = smoothstep(0.92, 1.0, b.growthProgress);
      // Brighten the branch color for the tip glow
      const tr = Math.min(255, col.r * 1.3 + 30);
      const tg2 = Math.min(255, col.g * 1.3 + 25);
      const tb = Math.min(255, col.b * 1.2 + 20);
      for (const dot of b.tipDots) {
        const dx = x2 + dot.ox;
        const dy = y2 + dot.oy;
        const da = tipFade * dot.alpha;
        const ds = dot.size;

        const tg = drawCtx.createRadialGradient(dx, dy, 0, dx, dy, ds * 2);
        tg.addColorStop(0, \`rgba(\${tr|0}, \${tg2|0}, \${tb|0}, \${da * 0.6})\`);
        tg.addColorStop(0.5, \`rgba(\${col.r|0}, \${col.g|0}, \${col.b|0}, \${da * 0.15})\`);
        tg.addColorStop(1, \`rgba(\${col.r|0}, \${col.g|0}, \${col.b|0}, 0)\`);
        drawCtx.fillStyle = tg;
        drawCtx.beginPath();
        drawCtx.arc(dx, dy, ds * 2, 0, Math.PI * 2);
        drawCtx.fill();
      }
    }
  }

  // --- Scene ---
  function drawScene(time) {
    ctx.clearRect(0, 0, W, H);

    // Background
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, W, H);

    // Ambient canopy glow (warm halo behind tree crown)
    if (treeAlpha > 0.05) {
      const cx = W / 2, cy = H * 0.38;
      const canopyGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, H * 0.42);
      canopyGlow.addColorStop(0, \`rgba(60, 36, 12, \${0.2 * treeAlpha})\`);
      canopyGlow.addColorStop(0.5, \`rgba(35, 20, 8, \${0.08 * treeAlpha})\`);
      canopyGlow.addColorStop(1, 'rgba(10, 10, 10, 0)');
      ctx.fillStyle = canopyGlow;
      ctx.fillRect(0, 0, W, H);
    }

    // Ground glow
    if (treeAlpha > 0.05) {
      const groundGrad = ctx.createRadialGradient(W / 2, H, 0, W / 2, H, H * 0.3);
      groundGrad.addColorStop(0, \`rgba(70, 42, 12, \${0.1 * treeAlpha})\`);
      groundGrad.addColorStop(1, 'rgba(10, 10, 10, 0)');
      ctx.fillStyle = groundGrad;
      ctx.fillRect(0, H * 0.55, W, H * 0.45);
    }

    recalcPositions(time);

    // Draw branches
    ctx.save();
    ctx.globalAlpha = treeAlpha;
    for (const b of allBranches) {
      drawBranch(ctx, b, time);
    }
    ctx.restore();

    // Particles
    updateParticles(time);
    ctx.save();
    drawParticles(ctx, treeAlpha);
    ctx.restore();

    // Vignette
    const vigGrad = ctx.createRadialGradient(W / 2, H / 2, W * 0.3, W / 2, H / 2, W * 0.78);
    vigGrad.addColorStop(0, 'rgba(10, 10, 10, 0)');
    vigGrad.addColorStop(1, 'rgba(4, 4, 4, 0.3)');
    ctx.fillStyle = vigGrad;
    ctx.fillRect(0, 0, W, H);
  }

  // --- State machine ---
  function frame(time) {
    // Decay shake
    if (shakeAmount > 0.01) shakeAmount *= 0.95;
    else shakeAmount = 0;

    switch (treeState) {
      case 'growing': {
        const done = updateBranches(time);
        drawScene(time);
        if (done) {
          treeState = 'holding';
          holdTimer = 0;
        }
        break;
      }
      case 'holding': {
        drawScene(time);
        holdTimer++;
        if (holdTimer >= HOLD_DURATION) {
          treeState = 'fading';
          fadeTimer = 0;
        }
        break;
      }
      case 'fading': {
        fadeTimer++;
        treeAlpha = Math.max(0, 1 - fadeTimer / FADE_DURATION);
        drawScene(time);
        if (fadeTimer >= FADE_DURATION) {
          treeState = 'waiting';
          waitTimer = 0;
        }
        break;
      }
      case 'waiting': {
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, W, H);
        waitTimer++;
        if (waitTimer >= WAIT_DURATION) {
          createTree();
        }
        break;
      }
    }
    if (running) requestAnimationFrame(frame);
  }

  // --- Visibility pause ---
  let running = true;
  function startLoop() {
    if (!running) { running = true; requestAnimationFrame(frame); }
  }

  document.addEventListener('visibilitychange', function() {
    if (document.hidden) { running = false; }
    else startLoop();
  });

  // Mouse: move to push the tree with wind, click to shake it
  var mouseX = W / 2, mouseY = H / 2, mouseActive = false;
  var windForce = 0; // -1 to 1, based on mouse x relative to tree
  var shakeAmount = 0;

  canvas.addEventListener('mousemove', function(e) {
    mouseX = e.clientX; mouseY = e.clientY; mouseActive = true;
    windForce = (mouseX - W / 2) / (W / 2); // -1 left, +1 right
  });
  canvas.addEventListener('mouseleave', function() { mouseActive = false; windForce = 0; });
  canvas.addEventListener('click', function() { shakeAmount = 1.0; });
  canvas.addEventListener('touchstart', function(e) {
    e.preventDefault(); mouseActive = true;
    mouseX = e.touches[0].clientX; mouseY = e.touches[0].clientY;
    windForce = (mouseX - W / 2) / (W / 2);
    shakeAmount = 1.0;
  }, { passive: false });
  canvas.addEventListener('touchmove', function(e) {
    e.preventDefault(); mouseX = e.touches[0].clientX; mouseY = e.touches[0].clientY;
    windForce = (mouseX - W / 2) / (W / 2);
  }, { passive: false });
  canvas.addEventListener('touchend', function() { mouseActive = false; windForce = 0; });

  createTree();
  requestAnimationFrame(frame);

  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'param') {
      switch (e.data.name) {
        case 'GROWTH_SPEED_BASE': GROWTH_SPEED_BASE = e.data.value; break;
        case 'MAX_DEPTH': MAX_DEPTH = Math.round(e.data.value); break;
      }
    }
  });
})();
<\/script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"216c03e5eb1b42998a91f716785010f9","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"><\/script>
</body>
</html>
`});var lf={};Bo(lf,{GENERATIVE_TREE_DEFAULTS:()=>xt,GenerativeTree:()=>Z0});function jt(e,t,n){return Math.min(n,Math.max(t,e))}function K0(e,t){let n=Math.max(0,Math.round(50*jt(t,0,2))),r=1/jt(e,.65,1.5);return rf.replace(/<script[^>]+cloudflareinsights\.com[^>]*><\/script>/gi,"").replace("</head>",`<style data-generative-tree-focus>
html, body, canvas { width: 100%; height: 100%; margin: 0; overflow: hidden; background: #0a0a0a; }
.label { display: none !important; }
</style><script data-generative-tree-controls>
(function () {
  var nativeFrame = window.requestAnimationFrame.bind(window);
  var clock = { last: null, time: null };
  window.__GENERATIVE_TREE_CONTROLS = { speed: 1, paused: false };
  window.requestAnimationFrame = function (callback) {
    return nativeFrame(function (realTime) {
      var state = window.__GENERATIVE_TREE_CONTROLS;
      if (clock.last === null) {
        clock.last = realTime;
        clock.time = realTime;
      } else {
        if (!state.paused) clock.time += (realTime - clock.last) * state.speed;
        clock.last = realTime;
      }
      callback(clock.time);
    });
  };
  window.addEventListener('message', function (event) {
    if (!event.data || event.data.type !== 'generative-tree-controls') return;
    var next = event.data.controls || {};
    if (Number.isFinite(next.speed)) {
      window.__GENERATIVE_TREE_CONTROLS.speed = Math.max(0, Math.min(3, next.speed));
    }
    window.__GENERATIVE_TREE_CONTROLS.paused = Boolean(next.paused);
  });
})();
<\/script></head>`).replace("const PARTICLE_COUNT = 50;",`const PARTICLE_COUNT = ${n};`).replace("const _pad = parseFloat(new URLSearchParams(location.search).get('p')) || 1;",`const _pad = ${r.toFixed(4)};`).replace(`function frame(time) {
    // Decay shake`,`function frame(time) {
    if (window.__GENERATIVE_TREE_CONTROLS.paused) { requestAnimationFrame(frame); return; }

    // Decay shake`).replace("b.growthProgress = Math.min(1, b.growthProgress + b.growthSpeed);","b.growthProgress = Math.min(1, b.growthProgress + b.growthSpeed * window.__GENERATIVE_TREE_CONTROLS.speed);").replace("holdTimer++;","holdTimer += window.__GENERATIVE_TREE_CONTROLS.speed;").replace("fadeTimer++;","fadeTimer += window.__GENERATIVE_TREE_CONTROLS.speed;").replace("waitTimer++;","waitTimer += window.__GENERATIVE_TREE_CONTROLS.speed;").replace(`  createTree();
  requestAnimationFrame(frame);`,`  function startTreeWhenSized() {
    resize();
    if (W <= 0 || H <= 0) {
      requestAnimationFrame(startTreeWhenSized);
      return;
    }
    createTree();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(startTreeWhenSized);`)}function Z0({speed:e=xt.speed,size:t=xt.size,particleAmount:n=xt.particleAmount,opacity:r=xt.opacity,hue:o=xt.hue,saturation:l=xt.saturation,brightness:i=xt.brightness,className:a="",style:s}){let c=(0,ye.useRef)(null),[h,g]=(0,ye.useState)(!0),[p,x]=(0,ye.useState)(()=>typeof document>"u"||!document.hidden),k=jt(e,0,3),E=!h||!p||k===0,L=(0,ye.useMemo)(()=>K0(t,n),[n,t]),f=(0,ye.useCallback)(()=>{c.current?.contentWindow?.postMessage({type:"generative-tree-controls",controls:{speed:k,paused:E}},"*")},[E,k]);return(0,ye.useEffect)(()=>{let u=c.current;if(!u||typeof IntersectionObserver>"u")return;let d=new IntersectionObserver(([m])=>g(m?.isIntersecting??!0));return d.observe(u),()=>d.disconnect()},[]),(0,ye.useEffect)(()=>{if(typeof document>"u")return;let u=()=>x(!document.hidden);return document.addEventListener("visibilitychange",u),()=>document.removeEventListener("visibilitychange",u)},[]),(0,ye.useEffect)(()=>{f()},[f,L]),(0,sa.jsx)("div",{className:`threeui-background generative-tree${a?` ${a}`:""}`,style:{background:"#0a0a0a",pointerEvents:"auto",...s},children:(0,sa.jsx)("iframe",{ref:c,title:"Generative Tree background",srcDoc:L,sandbox:"allow-scripts",onLoad:f,"aria-hidden":"true",tabIndex:-1,style:{position:"absolute",inset:0,display:"block",width:"100%",height:"100%",border:0,background:"#0a0a0a",opacity:jt(r,.05,1),filter:`hue-rotate(${jt(o,-180,180)}deg) saturate(${jt(l,0,2)}) brightness(${jt(i,.35,1.8)})`}})})}var sa,ye,xt,af=Wt(()=>{sa=Fe(pr(),1),ye=Fe(be(),1);of();xt={speed:1,size:1,particleAmount:1,opacity:1,hue:0,saturation:1,brightness:1}});var sf=Fe(be()),uf=Fe($c());var kt=Fe(pr(),1),Et=Fe(be(),1),q0=(0,Et.lazy)(()=>Promise.resolve().then(()=>(nf(),tf)).then(e=>({default:e.ElementsBackground}))),J0=(0,Et.lazy)(()=>Promise.resolve().then(()=>(qc(),Zc)).then(e=>({default:e.CondensationBackground}))),b0=(0,Et.lazy)(()=>Promise.resolve().then(()=>(af(),lf)).then(e=>({default:e.GenerativeTree}))),ua=(0,kt.jsx)("div",{className:"threeui-background elements"});function ca(e){if(e.variant==="generative-tree"){let{variant:r,...o}=e;return(0,kt.jsx)(Et.Suspense,{fallback:ua,children:(0,kt.jsx)(b0,{...o})})}if(e.variant==="condensation"){let{variant:r,...o}=e;return(0,kt.jsx)(Et.Suspense,{fallback:ua,children:(0,kt.jsx)(J0,{...o})})}let{variant:t="water",...n}=e;return(0,kt.jsx)(Et.Suspense,{fallback:ua,children:(0,kt.jsx)(q0,{...n,variant:t})})}window.ThreeUI=window.ThreeUI||{};window.ThreeUI.ElementsCollection=function(e,t){let n=(0,uf.createRoot)(e);return n.render(sf.default.createElement(ca,t||{})),{unmount:()=>n.unmount()}};})();
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
