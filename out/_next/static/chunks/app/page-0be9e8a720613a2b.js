(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6932:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.bind(r,4296))},8173:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(306),o=r(5155),u=n._(r(2115)),l=r(180),a=r(1394),s=r(4116),i=r(4445),c=r(5353),f=r(2170),d=r(9544);function p(e,t,r){"undefined"!=typeof window&&(async()=>e.prefetch(t,r))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}r(2363);let y=u.default.forwardRef(function(e,t){let r,n;let{href:l,as:y,children:b,prefetch:g=null,passHref:m,replace:x,shallow:v,scroll:j,onClick:O,onMouseEnter:P,onTouchStart:E,legacyBehavior:_=!1,...k}=e;r=b,_&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let w=u.default.useContext(a.AppRouterContext),N=!1!==g,C=null===g?i.PrefetchKind.AUTO:i.PrefetchKind.FULL,{href:M,as:S}=u.default.useMemo(()=>{let e=h(l);return{href:e,as:y?h(y):e}},[l,y]),I=u.default.useRef(M),T=u.default.useRef(S);_&&(n=u.default.Children.only(r));let R=_?n&&"object"==typeof n&&n.ref:t,[A,U,L]=(0,s.useIntersection)({rootMargin:"200px"}),K=u.default.useCallback(e=>{(T.current!==S||I.current!==M)&&(L(),T.current=S,I.current=M),A(e)},[S,M,L,A]),F=(0,c.useMergedRef)(K,R);u.default.useEffect(()=>{w&&U&&N&&p(w,M,{kind:C})},[S,M,U,N,w,C]);let D={ref:F,onClick(e){_||"function"!=typeof O||O(e),_&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),w&&!e.defaultPrevented&&function(e,t,r,n,o,l,a){let{nodeName:s}=e.currentTarget;"A"===s.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),u.default.startTransition(()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,w,M,S,x,v,j)},onMouseEnter(e){_||"function"!=typeof P||P(e),_&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),w&&N&&p(w,M,{kind:C})},onTouchStart:function(e){_||"function"!=typeof E||E(e),_&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),w&&N&&p(w,M,{kind:C})}};return(0,f.isAbsoluteUrl)(S)?D.href=S:_&&!m&&("a"!==n.type||"href"in n.props)||(D.href=(0,d.addBasePath)(S)),_?u.default.cloneElement(n,D):(0,o.jsx)("a",{...k,...D,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(2115),o=r(8571),u="function"==typeof IntersectionObserver,l=new Map,a=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,i=s||!u,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(u){if(i||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},a.push(r),l.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(2115);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=u(e,n),o.current=u(t,n))}:e||t,[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},180:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return u},formatWithValidation:function(){return a},urlObjectKeys:function(){return l}});let n=r(9955)._(r(4156)),o=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:r}=e,u=e.protocol||"",l=e.pathname||"",a=e.hash||"",s=e.query||"",i=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?i=t+e.host:r&&(i=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(i+=":"+e.port)),s&&"object"==typeof s&&(s=String(n.urlQueryToSearchParams(s)));let c=e.search||s&&"?"+s||"";return u&&!u.endsWith(":")&&(u+=":"),e.slashes||(!u||o.test(u))&&!1!==i?(i="//"+(i||""),l&&"/"!==l[0]&&(l="/"+l)):i||(i=""),a&&"#"!==a[0]&&(a="#"+a),c&&"?"!==c[0]&&(c="?"+c),""+u+i+(l=l.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+a}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function a(e){return u(e)}},4156:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function u(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return u},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},2170:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return m},MissingStaticPage:function(){return g},NormalizeError:function(){return y},PageNotFoundError:function(){return b},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return s},getLocationOrigin:function(){return l},getURL:function(){return a},isAbsoluteUrl:function(){return u},isResSent:function(){return i},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return x}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function a(){let{href:e}=window.location,t=l();return e.substring(t.length)}function s(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function i(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&i(r))return n;if(!n)throw Error('"'+s(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class y extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class m extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function x(e){return JSON.stringify({message:e.message,stack:e.stack})}},4296:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var n=r(5155),o=r(2115),u=r(8173),l=r.n(u);let a=()=>{let[e,t]=(0,o.useState)("light"),[r,u]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{document.body.className="dark"===e?"bg-gray-900 text-white":"bg-white text-black"},[e]),(0,n.jsx)("header",{className:"shadow-md ".concat("dark"===e?"bg-gray-800 text-white":"bg-white text-black"),children:(0,n.jsxs)("div",{className:"container mx-auto flex items-center justify-between py-6 px-6",children:[(0,n.jsx)(l(),{href:"",className:"text-xl font-semibold tracking-wide hover:text-gray-600 transition-colors",children:"BRENOLUIZDEV"}),(0,n.jsxs)("nav",{className:"hidden md:flex space-x-10 text-xl font-semibold tracking-wide",children:[(0,n.jsx)(l(),{href:"#projects",className:"hover:text-gray-600 transition-colors",children:"PROJETOS"}),(0,n.jsx)(l(),{href:"#skills",className:"hover:text-gray-600 transition-colors",children:"SKILLS"}),(0,n.jsx)(l(),{href:"#contact",className:"hover:text-gray-600 transition-colors",children:"CONTATO"})]}),(0,n.jsx)("button",{onClick:()=>{u(!r)},className:"md:hidden text-2xl focus:outline-none",children:"☰"}),(0,n.jsxs)("div",{className:"md:hidden ".concat(r?"block":"hidden"," absolute top-16 left-0 w-full bg-white shadow-md"),children:[(0,n.jsx)(l(),{href:"#projects",className:"block px-4 py-2 hover:bg-gray-200 transition-colors",children:"PROJETOS"}),(0,n.jsx)(l(),{href:"#skills",className:"block px-4 py-2 hover:bg-gray-200 transition-colors",children:"SKILLS"}),(0,n.jsx)(l(),{href:"#contact",className:"block px-4 py-2 hover:bg-gray-200 transition-colors",children:"CONTATO"})]})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(6932)),_N_E=e.O()}]);