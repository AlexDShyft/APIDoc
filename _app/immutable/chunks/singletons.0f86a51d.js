import{w as u}from"./index.82bbb632.js";import{a as h}from"./paths.7c6ba9fd.js";const b="1704411862253",E="sveltekit:snapshot",A="sveltekit:scroll",R="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function y(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function I(){return{x:pageXOffset,y:pageYOffset}}function c(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function _(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function S(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=_(e)}}function T(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!s||m(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:r,target:s,download:l}}function x(e){let t=null,n=null,s=null,r=null,l=null,o=null,a=e;for(;a&&a!==document.documentElement;)s===null&&(s=c(a,"preload-code")),r===null&&(r=c(a,"preload-data")),t===null&&(t=c(a,"keepfocus")),n===null&&(n=c(a,"noscroll")),l===null&&(l=c(a,"reload")),o===null&&(o=c(a,"replacestate")),a=_(a);function i(g){switch(g){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:d[s??"off"],preload_data:d[r??"off"],keep_focus:i(t),noscroll:i(n),reload:i(l),replace_state:i(o)}}function p(e){const t=u(e);let n=!0;function s(){n=!0,t.update(o=>o)}function r(o){n=!1,t.set(o)}function l(o){let a;return t.subscribe(i=>{(a===void 0||n&&i!==a)&&o(a=i)})}return{notify:s,set:r,subscribe:l}}function v(){const{set:e,subscribe:t}=u(!1);let n;async function s(){clearTimeout(n);try{const r=await fetch(`${h}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const o=(await r.json()).version!==b;return o&&(e(!0),clearTimeout(n)),o}catch{return!1}}return{subscribe:t,check:s}}function m(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function O(e){e.client}const U={url:p({}),page:p({}),navigating:u(null),updated:v()};export{R as I,f as P,A as S,E as a,T as b,x as c,U as d,O as e,S as f,y as g,m as i,I as s};
