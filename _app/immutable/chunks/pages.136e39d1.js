var FE=Object.defineProperty;var NE=(i,n,t)=>n in i?FE(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var De=(i,n,t)=>(NE(i,typeof n!="symbol"?n+"":n,t),t),CE=(i,n,t)=>{if(!n.has(i))throw TypeError("Cannot "+t)};var Za=(i,n,t)=>{if(n.has(i))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(i):n.set(i,t)};var ss=(i,n,t)=>(CE(i,n,"access private method"),t);import{b as vs}from"./paths.92c28465.js";import{S as Be,i as Pe,a as te,t as ue,g as Ft,c as Nt,b as Wt,d as ci,m as Yt,e as Qt}from"./index.012ade26.js";import{s as Ne,e as tn,i as ve,d as K,r as nt,u as zc,f as ke,g as xe,h as qe,a4 as ds,x as tt,y as it,z as rt,R as ur,q as cc,l as Eo,m as To,n as Do,H as Xe,j as gn,G as St,a as Io,c as vo,U as OE,V as kE,a7 as fc,o as xE}from"./scheduler.88297443.js";function ct(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Jc(i,n){const t={},s={},a={$$scope:1};let u=i.length;for(;u--;){const l=i[u],p=n[u];if(p){for(const d in l)d in p||(s[d]=1);for(const d in p)a[d]||(t[d]=p[d],a[d]=1);i[u]=p}else for(const d in l)a[d]=1}for(const l in s)l in t||(t[l]=void 0);return t}function Ov(i){return typeof i=="object"&&i!==null?i:{}}function uo(...i){return"/"+i.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}function lo(i){return i.startsWith("/")||i.startsWith("#")}function Hc(i,n){return n.slug(i).replace(/--+/g,"-")}function eo(i){let n,t;const s=i[5].default,a=nt(s,i,i[4],null);let u=[{id:i[1]}],l={};for(let p=0;p<u.length;p+=1)l=zc(l,u[p]);return{c(){n=ke(`h${i[0].depth}`),a&&a.c(),this.h()},l(p){n=xe(p,(`h${i[0].depth}`||"null").toUpperCase(),{id:!0});var d=qe(n);a&&a.l(d),d.forEach(K),this.h()},h(){ds(`h${i[0].depth}`)(n,l)},m(p,d){ve(p,n,d),a&&a.m(n,null),t=!0},p(p,d){a&&a.p&&(!t||d&16)&&tt(a,s,p,p[4],t?rt(s,p[4],d,null):it(p[4]),null),ds(`h${p[0].depth}`)(n,l=Jc(u,[(!t||d&2)&&{id:p[1]}]))},i(p){t||(te(a,p),t=!0)},o(p){ue(a,p),t=!1},d(p){p&&K(n),a&&a.d(p)}}}function RE(i){let n=`h${i[0].depth}`,t,s,a=`h${i[0].depth}`&&eo(i);return{c(){a&&a.c(),t=tn()},l(u){a&&a.l(u),t=tn()},m(u,l){a&&a.m(u,l),ve(u,t,l),s=!0},p(u,[l]){`h${u[0].depth}`?n?Ne(n,`h${u[0].depth}`)?(a.d(1),a=eo(u),n=`h${u[0].depth}`,a.c(),a.m(t.parentNode,t)):a.p(u,l):(a=eo(u),n=`h${u[0].depth}`,a.c(),a.m(t.parentNode,t)):n&&(a.d(1),a=null,n=`h${u[0].depth}`)},i(u){s||(te(a,u),s=!0)},o(u){ue(a,u),s=!1},d(u){u&&K(t),a&&a.d(u)}}}function LE(i,n,t){let{$$slots:s={},$$scope:a}=n,{token:u}=n,{options:l}=n;const p=void 0;let d;return i.$$set=y=>{"token"in y&&t(0,u=y.token),"options"in y&&t(2,l=y.options),"$$scope"in y&&t(4,a=y.$$scope)},i.$$.update=()=>{i.$$.dirty&5&&t(1,d=Hc(u.text,l.slugger))},[u,d,l,p,a,s]}class BE extends Be{constructor(n){super(),Pe(this,n,LE,RE,Ne,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function PE(i){let n,t;const s=i[4].default,a=nt(s,i,i[3],null);return{c(){n=ke("blockquote"),a&&a.c()},l(u){n=xe(u,"BLOCKQUOTE",{});var l=qe(n);a&&a.l(l),l.forEach(K)},m(u,l){ve(u,n,l),a&&a.m(n,null),t=!0},p(u,[l]){a&&a.p&&(!t||l&8)&&tt(a,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(a,u),t=!0)},o(u){ue(a,u),t=!1},d(u){u&&K(n),a&&a.d(u)}}}function UE(i,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,l,p,a,s]}class ME extends Be{constructor(n){super(),Pe(this,n,UE,PE,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function pc(i,n,t){const s=i.slice();return s[3]=n[t],s}function dc(i){let n,t,s=ct(i[0]),a=[];for(let l=0;l<s.length;l+=1)a[l]=hc(pc(i,s,l));const u=l=>ue(a[l],1,1,()=>{a[l]=null});return{c(){for(let l=0;l<a.length;l+=1)a[l].c();n=tn()},l(l){for(let p=0;p<a.length;p+=1)a[p].l(l);n=tn()},m(l,p){for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(l,p);ve(l,n,p),t=!0},p(l,p){if(p&7){s=ct(l[0]);let d;for(d=0;d<s.length;d+=1){const y=pc(l,s,d);a[d]?(a[d].p(y,p),te(a[d],1)):(a[d]=hc(y),a[d].c(),te(a[d],1),a[d].m(n.parentNode,n))}for(Ft(),d=s.length;d<a.length;d+=1)u(d);Nt()}},i(l){if(!t){for(let p=0;p<s.length;p+=1)te(a[p]);t=!0}},o(l){a=a.filter(Boolean);for(let p=0;p<a.length;p+=1)ue(a[p]);t=!1},d(l){l&&K(n),ur(a,l)}}}function hc(i){let n,t;return n=new Xc({props:{token:i[3],renderers:i[1],options:i[2]}}),{c(){Wt(n.$$.fragment)},l(s){ci(n.$$.fragment,s)},m(s,a){Yt(n,s,a),t=!0},p(s,a){const u={};a&1&&(u.token=s[3]),a&2&&(u.renderers=s[1]),a&4&&(u.options=s[2]),n.$set(u)},i(s){t||(te(n.$$.fragment,s),t=!0)},o(s){ue(n.$$.fragment,s),t=!1},d(s){Qt(n,s)}}}function $E(i){let n,t,s=i[0]&&dc(i);return{c(){s&&s.c(),n=tn()},l(a){s&&s.l(a),n=tn()},m(a,u){s&&s.m(a,u),ve(a,n,u),t=!0},p(a,[u]){a[0]?s?(s.p(a,u),u&1&&te(s,1)):(s=dc(a),s.c(),te(s,1),s.m(n.parentNode,n)):s&&(Ft(),ue(s,1,1,()=>{s=null}),Nt())},i(a){t||(te(s),t=!0)},o(a){ue(s),t=!1},d(a){a&&K(n),s&&s.d(a)}}}function VE(i,n,t){let{tokens:s}=n,{renderers:a}=n,{options:u}=n;return i.$$set=l=>{"tokens"in l&&t(0,s=l.tokens),"renderers"in l&&t(1,a=l.renderers),"options"in l&&t(2,u=l.options)},[s,a,u]}class _s extends Be{constructor(n){super(),Pe(this,n,VE,$E,Ne,{tokens:0,renderers:1,options:2})}}function mc(i){let n,t,s;var a=i[1][i[0].type];function u(l,p){return{props:{token:l[0],options:l[2],renderers:l[1],$$slots:{default:[qE]},$$scope:{ctx:l}}}}return a&&(n=cc(a,u(i))),{c(){n&&Wt(n.$$.fragment),t=tn()},l(l){n&&ci(n.$$.fragment,l),t=tn()},m(l,p){n&&Yt(n,l,p),ve(l,t,p),s=!0},p(l,p){if(p&3&&a!==(a=l[1][l[0].type])){if(n){Ft();const d=n;ue(d.$$.fragment,1,0,()=>{Qt(d,1)}),Nt()}a?(n=cc(a,u(l)),Wt(n.$$.fragment),te(n.$$.fragment,1),Yt(n,t.parentNode,t)):n=null}else if(a){const d={};p&1&&(d.token=l[0]),p&4&&(d.options=l[2]),p&2&&(d.renderers=l[1]),p&15&&(d.$$scope={dirty:p,ctx:l}),n.$set(d)}},i(l){s||(n&&te(n.$$.fragment,l),s=!0)},o(l){n&&ue(n.$$.fragment,l),s=!1},d(l){l&&K(t),n&&Qt(n,l)}}}function GE(i){let n=i[0].raw+"",t;return{c(){t=Eo(n)},l(s){t=To(s,n)},m(s,a){ve(s,t,a)},p(s,a){a&1&&n!==(n=s[0].raw+"")&&Do(t,n)},i:Xe,o:Xe,d(s){s&&K(t)}}}function jE(i){let n,t;return n=new _s({props:{tokens:i[0].tokens,renderers:i[1],options:i[2]}}),{c(){Wt(n.$$.fragment)},l(s){ci(n.$$.fragment,s)},m(s,a){Yt(n,s,a),t=!0},p(s,a){const u={};a&1&&(u.tokens=s[0].tokens),a&2&&(u.renderers=s[1]),a&4&&(u.options=s[2]),n.$set(u)},i(s){t||(te(n.$$.fragment,s),t=!0)},o(s){ue(n.$$.fragment,s),t=!1},d(s){Qt(n,s)}}}function qE(i){let n,t,s,a;const u=[jE,GE],l=[];function p(d,y){return"tokens"in d[0]&&d[0].tokens?0:1}return n=p(i),t=l[n]=u[n](i),{c(){t.c(),s=tn()},l(d){t.l(d),s=tn()},m(d,y){l[n].m(d,y),ve(d,s,y),a=!0},p(d,y){let E=n;n=p(d),n===E?l[n].p(d,y):(Ft(),ue(l[E],1,1,()=>{l[E]=null}),Nt(),t=l[n],t?t.p(d,y):(t=l[n]=u[n](d),t.c()),te(t,1),t.m(s.parentNode,s))},i(d){a||(te(t),a=!0)},o(d){ue(t),a=!1},d(d){d&&K(s),l[n].d(d)}}}function WE(i){let n,t,s=i[1][i[0].type]&&mc(i);return{c(){s&&s.c(),n=tn()},l(a){s&&s.l(a),n=tn()},m(a,u){s&&s.m(a,u),ve(a,n,u),t=!0},p(a,[u]){a[1][a[0].type]?s?(s.p(a,u),u&3&&te(s,1)):(s=mc(a),s.c(),te(s,1),s.m(n.parentNode,n)):s&&(Ft(),ue(s,1,1,()=>{s=null}),Nt())},i(a){t||(te(s),t=!0)},o(a){ue(s),t=!1},d(a){a&&K(n),s&&s.d(a)}}}function YE(i,n,t){let{token:s}=n,{renderers:a}=n,{options:u}=n;return i.$$set=l=>{"token"in l&&t(0,s=l.token),"renderers"in l&&t(1,a=l.renderers),"options"in l&&t(2,u=l.options)},[s,a,u]}class Xc extends Be{constructor(n){super(),Pe(this,n,YE,WE,Ne,{token:0,renderers:1,options:2})}}function gc(i,n,t){const s=i.slice();return s[4]=n[t],s}function yc(i){let n,t;return n=new Xc({props:{token:{...i[4]},options:i[1],renderers:i[2]}}),{c(){Wt(n.$$.fragment)},l(s){ci(n.$$.fragment,s)},m(s,a){Yt(n,s,a),t=!0},p(s,a){const u={};a&1&&(u.token={...s[4]}),a&2&&(u.options=s[1]),a&4&&(u.renderers=s[2]),n.$set(u)},i(s){t||(te(n.$$.fragment,s),t=!0)},o(s){ue(n.$$.fragment,s),t=!1},d(s){Qt(n,s)}}}function no(i){let n,t,s,a=ct(i[0].items),u=[];for(let y=0;y<a.length;y+=1)u[y]=yc(gc(i,a,y));const l=y=>ue(u[y],1,1,()=>{u[y]=null});let p=[{start:t=i[0].start||1}],d={};for(let y=0;y<p.length;y+=1)d=zc(d,p[y]);return{c(){n=ke(i[3]);for(let y=0;y<u.length;y+=1)u[y].c();this.h()},l(y){n=xe(y,(i[3]||"null").toUpperCase(),{start:!0});var E=qe(n);for(let I=0;I<u.length;I+=1)u[I].l(E);E.forEach(K),this.h()},h(){ds(i[3])(n,d)},m(y,E){ve(y,n,E);for(let I=0;I<u.length;I+=1)u[I]&&u[I].m(n,null);s=!0},p(y,E){if(E&7){a=ct(y[0].items);let I;for(I=0;I<a.length;I+=1){const S=gc(y,a,I);u[I]?(u[I].p(S,E),te(u[I],1)):(u[I]=yc(S),u[I].c(),te(u[I],1),u[I].m(n,null))}for(Ft(),I=a.length;I<u.length;I+=1)l(I);Nt()}ds(y[3])(n,d=Jc(p,[(!s||E&1&&t!==(t=y[0].start||1))&&{start:t}]))},i(y){if(!s){for(let E=0;E<a.length;E+=1)te(u[E]);s=!0}},o(y){u=u.filter(Boolean);for(let E=0;E<u.length;E+=1)ue(u[E]);s=!1},d(y){y&&K(n),ur(u,y)}}}function QE(i){let n=i[3],t,s=i[3]&&no(i);return{c(){s&&s.c(),t=tn()},l(a){s&&s.l(a),t=tn()},m(a,u){s&&s.m(a,u),ve(a,t,u)},p(a,[u]){a[3]?n?Ne(n,a[3])?(s.d(1),s=no(a),n=a[3],s.c(),s.m(t.parentNode,t)):s.p(a,u):(s=no(a),n=a[3],s.c(),s.m(t.parentNode,t)):n&&(s.d(1),s=null,n=a[3])},i:Xe,o(a){ue(s,a)},d(a){a&&K(t),s&&s.d(a)}}}function zE(i,n,t){let{token:s}=n,{options:a}=n,{renderers:u}=n,l;return i.$$set=p=>{"token"in p&&t(0,s=p.token),"options"in p&&t(1,a=p.options),"renderers"in p&&t(2,u=p.renderers)},i.$$.update=()=>{i.$$.dirty&1&&t(3,l=s.ordered?"ol":"ul")},[s,a,u,l]}class JE extends Be{constructor(n){super(),Pe(this,n,zE,QE,Ne,{token:0,options:1,renderers:2})}}function HE(i){let n,t;const s=i[4].default,a=nt(s,i,i[3],null);return{c(){n=ke("li"),a&&a.c()},l(u){n=xe(u,"LI",{});var l=qe(n);a&&a.l(l),l.forEach(K)},m(u,l){ve(u,n,l),a&&a.m(n,null),t=!0},p(u,[l]){a&&a.p&&(!t||l&8)&&tt(a,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(a,u),t=!0)},o(u){ue(a,u),t=!1},d(u){u&&K(n),a&&a.d(u)}}}function XE(i,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,l,p,a,s]}class KE extends Be{constructor(n){super(),Pe(this,n,XE,HE,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function ZE(i){let n;return{c(){n=ke("br")},l(t){n=xe(t,"BR",{})},m(t,s){ve(t,n,s)},p:Xe,i:Xe,o:Xe,d(t){t&&K(n)}}}function eT(i,n,t){return[void 0,void 0,void 0]}class nT extends Be{constructor(n){super(),Pe(this,n,eT,ZE,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function tT(i){let n,t,s=i[0].text+"",a,u;return{c(){n=ke("pre"),t=ke("code"),a=Eo(s),this.h()},l(l){n=xe(l,"PRE",{});var p=qe(n);t=xe(p,"CODE",{class:!0});var d=qe(t);a=To(d,s),d.forEach(K),p.forEach(K),this.h()},h(){gn(t,"class",u=`lang-${i[0].lang}`)},m(l,p){ve(l,n,p),St(n,t),St(t,a)},p(l,[p]){p&1&&s!==(s=l[0].text+"")&&Do(a,s),p&1&&u!==(u=`lang-${l[0].lang}`)&&gn(t,"class",u)},i:Xe,o:Xe,d(l){l&&K(n)}}}function iT(i,n,t){let{token:s}=n;const a=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,a,u]}class rT extends Be{constructor(n){super(),Pe(this,n,iT,tT,Ne,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function sT(i){let n,t=i[0].raw.slice(1,i[0].raw.length-1)+"",s;return{c(){n=ke("code"),s=Eo(t)},l(a){n=xe(a,"CODE",{});var u=qe(n);s=To(u,t),u.forEach(K)},m(a,u){ve(a,n,u),St(n,s)},p(a,[u]){u&1&&t!==(t=a[0].raw.slice(1,a[0].raw.length-1)+"")&&Do(s,t)},i:Xe,o:Xe,d(a){a&&K(n)}}}function aT(i,n,t){let{token:s}=n;const a=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,a,u]}class oT extends Be{constructor(n){super(),Pe(this,n,aT,sT,Ne,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Ec(i,n,t){const s=i.slice();return s[3]=n[t],s}function Tc(i,n,t){const s=i.slice();return s[6]=n[t],s}function Dc(i,n,t){const s=i.slice();return s[9]=n[t],s}function Ic(i){let n,t,s,a;return t=new _s({props:{tokens:i[9].tokens,options:i[1],renderers:i[2]}}),{c(){n=ke("th"),Wt(t.$$.fragment),s=Io(),this.h()},l(u){n=xe(u,"TH",{scope:!0});var l=qe(n);ci(t.$$.fragment,l),s=vo(l),l.forEach(K),this.h()},h(){gn(n,"scope","col")},m(u,l){ve(u,n,l),Yt(t,n,null),St(n,s),a=!0},p(u,l){const p={};l&1&&(p.tokens=u[9].tokens),l&2&&(p.options=u[1]),l&4&&(p.renderers=u[2]),t.$set(p)},i(u){a||(te(t.$$.fragment,u),a=!0)},o(u){ue(t.$$.fragment,u),a=!1},d(u){u&&K(n),Qt(t)}}}function vc(i){let n,t,s;return t=new _s({props:{tokens:i[6].tokens,options:i[1],renderers:i[2]}}),{c(){n=ke("td"),Wt(t.$$.fragment)},l(a){n=xe(a,"TD",{});var u=qe(n);ci(t.$$.fragment,u),u.forEach(K)},m(a,u){ve(a,n,u),Yt(t,n,null),s=!0},p(a,u){const l={};u&1&&(l.tokens=a[6].tokens),u&2&&(l.options=a[1]),u&4&&(l.renderers=a[2]),t.$set(l)},i(a){s||(te(t.$$.fragment,a),s=!0)},o(a){ue(t.$$.fragment,a),s=!1},d(a){a&&K(n),Qt(t)}}}function _c(i){let n,t,s,a=ct(i[3]),u=[];for(let p=0;p<a.length;p+=1)u[p]=vc(Tc(i,a,p));const l=p=>ue(u[p],1,1,()=>{u[p]=null});return{c(){n=ke("tr");for(let p=0;p<u.length;p+=1)u[p].c();t=Io()},l(p){n=xe(p,"TR",{});var d=qe(n);for(let y=0;y<u.length;y+=1)u[y].l(d);t=vo(d),d.forEach(K)},m(p,d){ve(p,n,d);for(let y=0;y<u.length;y+=1)u[y]&&u[y].m(n,null);St(n,t),s=!0},p(p,d){if(d&7){a=ct(p[3]);let y;for(y=0;y<a.length;y+=1){const E=Tc(p,a,y);u[y]?(u[y].p(E,d),te(u[y],1)):(u[y]=vc(E),u[y].c(),te(u[y],1),u[y].m(n,t))}for(Ft(),y=a.length;y<u.length;y+=1)l(y);Nt()}},i(p){if(!s){for(let d=0;d<a.length;d+=1)te(u[d]);s=!0}},o(p){u=u.filter(Boolean);for(let d=0;d<u.length;d+=1)ue(u[d]);s=!1},d(p){p&&K(n),ur(u,p)}}}function uT(i){let n,t,s,a,u,l,p=ct(i[0].header),d=[];for(let k=0;k<p.length;k+=1)d[k]=Ic(Dc(i,p,k));const y=k=>ue(d[k],1,1,()=>{d[k]=null});let E=ct(i[0].rows),I=[];for(let k=0;k<E.length;k+=1)I[k]=_c(Ec(i,E,k));const S=k=>ue(I[k],1,1,()=>{I[k]=null});return{c(){n=ke("table"),t=ke("thead"),s=ke("tr");for(let k=0;k<d.length;k+=1)d[k].c();a=Io(),u=ke("tbody");for(let k=0;k<I.length;k+=1)I[k].c()},l(k){n=xe(k,"TABLE",{});var R=qe(n);t=xe(R,"THEAD",{});var L=qe(t);s=xe(L,"TR",{});var X=qe(s);for(let Ge=0;Ge<d.length;Ge+=1)d[Ge].l(X);X.forEach(K),L.forEach(K),a=vo(R),u=xe(R,"TBODY",{});var he=qe(u);for(let Ge=0;Ge<I.length;Ge+=1)I[Ge].l(he);he.forEach(K),R.forEach(K)},m(k,R){ve(k,n,R),St(n,t),St(t,s);for(let L=0;L<d.length;L+=1)d[L]&&d[L].m(s,null);St(n,a),St(n,u);for(let L=0;L<I.length;L+=1)I[L]&&I[L].m(u,null);l=!0},p(k,[R]){if(R&7){p=ct(k[0].header);let L;for(L=0;L<p.length;L+=1){const X=Dc(k,p,L);d[L]?(d[L].p(X,R),te(d[L],1)):(d[L]=Ic(X),d[L].c(),te(d[L],1),d[L].m(s,null))}for(Ft(),L=p.length;L<d.length;L+=1)y(L);Nt()}if(R&7){E=ct(k[0].rows);let L;for(L=0;L<E.length;L+=1){const X=Ec(k,E,L);I[L]?(I[L].p(X,R),te(I[L],1)):(I[L]=_c(X),I[L].c(),te(I[L],1),I[L].m(u,null))}for(Ft(),L=E.length;L<I.length;L+=1)S(L);Nt()}},i(k){if(!l){for(let R=0;R<p.length;R+=1)te(d[R]);for(let R=0;R<E.length;R+=1)te(I[R]);l=!0}},o(k){d=d.filter(Boolean);for(let R=0;R<d.length;R+=1)ue(d[R]);I=I.filter(Boolean);for(let R=0;R<I.length;R+=1)ue(I[R]);l=!1},d(k){k&&K(n),ur(d,k),ur(I,k)}}}function lT(i,n,t){let{token:s}=n,{options:a}=n,{renderers:u}=n;return i.$$set=l=>{"token"in l&&t(0,s=l.token),"options"in l&&t(1,a=l.options),"renderers"in l&&t(2,u=l.renderers)},[s,a,u]}class cT extends Be{constructor(n){super(),Pe(this,n,lT,uT,Ne,{token:0,options:1,renderers:2})}}function fT(i){let n,t=i[0].text+"",s;return{c(){n=new OE(!1),s=tn(),this.h()},l(a){n=kE(a,!1),s=tn(),this.h()},h(){n.a=s},m(a,u){n.m(t,a,u),ve(a,s,u)},p(a,[u]){u&1&&t!==(t=a[0].text+"")&&n.p(t)},i:Xe,o:Xe,d(a){a&&(K(s),n.d())}}}function pT(i,n,t){let{token:s}=n;const a=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,a,u]}class dT extends Be{constructor(n){super(),Pe(this,n,pT,fT,Ne,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function hT(i){let n,t;const s=i[4].default,a=nt(s,i,i[3],null);return{c(){n=ke("p"),a&&a.c()},l(u){n=xe(u,"P",{});var l=qe(n);a&&a.l(l),l.forEach(K)},m(u,l){ve(u,n,l),a&&a.m(n,null),t=!0},p(u,[l]){a&&a.p&&(!t||l&8)&&tt(a,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(a,u),t=!0)},o(u){ue(a,u),t=!1},d(u){u&&K(n),a&&a.d(u)}}}function mT(i,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,l,p,a,s]}class gT extends Be{constructor(n){super(),Pe(this,n,mT,hT,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function yT(i){let n,t,s,a;const u=i[4].default,l=nt(u,i,i[3],null);return{c(){n=ke("a"),l&&l.c(),this.h()},l(p){n=xe(p,"A",{href:!0,title:!0});var d=qe(n);l&&l.l(d),d.forEach(K),this.h()},h(){gn(n,"href",t=lo(i[0].href)?uo(i[1].baseUrl,i[0].href):i[0].href),gn(n,"title",s=i[0].title)},m(p,d){ve(p,n,d),l&&l.m(n,null),a=!0},p(p,[d]){l&&l.p&&(!a||d&8)&&tt(l,u,p,p[3],a?rt(u,p[3],d,null):it(p[3]),null),(!a||d&3&&t!==(t=lo(p[0].href)?uo(p[1].baseUrl,p[0].href):p[0].href))&&gn(n,"href",t),(!a||d&1&&s!==(s=p[0].title))&&gn(n,"title",s)},i(p){a||(te(l,p),a=!0)},o(p){ue(l,p),a=!1},d(p){p&&K(n),l&&l.d(p)}}}function ET(i,n,t){let{$$slots:s={},$$scope:a}=n,{token:u}=n,{options:l}=n;const p=void 0;return i.$$set=d=>{"token"in d&&t(0,u=d.token),"options"in d&&t(1,l=d.options),"$$scope"in d&&t(3,a=d.$$scope)},[u,l,p,a,s]}class TT extends Be{constructor(n){super(),Pe(this,n,ET,yT,Ne,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function DT(i){let n;const t=i[4].default,s=nt(t,i,i[3],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,u){s&&s.m(a,u),n=!0},p(a,[u]){s&&s.p&&(!n||u&8)&&tt(s,t,a,a[3],n?rt(t,a[3],u,null):it(a[3]),null)},i(a){n||(te(s,a),n=!0)},o(a){ue(s,a),n=!1},d(a){s&&s.d(a)}}}function IT(i,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,l,p,a,s]}class vT extends Be{constructor(n){super(),Pe(this,n,IT,DT,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function _T(i){let n,t;const s=i[4].default,a=nt(s,i,i[3],null);return{c(){n=ke("dfn"),a&&a.c()},l(u){n=xe(u,"DFN",{});var l=qe(n);a&&a.l(l),l.forEach(K)},m(u,l){ve(u,n,l),a&&a.m(n,null),t=!0},p(u,[l]){a&&a.p&&(!t||l&8)&&tt(a,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(a,u),t=!0)},o(u){ue(a,u),t=!1},d(u){u&&K(n),a&&a.d(u)}}}function AT(i,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,l,p,a,s]}class bT extends Be{constructor(n){super(),Pe(this,n,AT,_T,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function wT(i){let n,t;const s=i[4].default,a=nt(s,i,i[3],null);return{c(){n=ke("del"),a&&a.c()},l(u){n=xe(u,"DEL",{});var l=qe(n);a&&a.l(l),l.forEach(K)},m(u,l){ve(u,n,l),a&&a.m(n,null),t=!0},p(u,[l]){a&&a.p&&(!t||l&8)&&tt(a,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(a,u),t=!0)},o(u){ue(a,u),t=!1},d(u){u&&K(n),a&&a.d(u)}}}function ST(i,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,l,p,a,s]}class FT extends Be{constructor(n){super(),Pe(this,n,ST,wT,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function NT(i){let n,t;const s=i[4].default,a=nt(s,i,i[3],null);return{c(){n=ke("em"),a&&a.c()},l(u){n=xe(u,"EM",{});var l=qe(n);a&&a.l(l),l.forEach(K)},m(u,l){ve(u,n,l),a&&a.m(n,null),t=!0},p(u,[l]){a&&a.p&&(!t||l&8)&&tt(a,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(a,u),t=!0)},o(u){ue(a,u),t=!1},d(u){u&&K(n),a&&a.d(u)}}}function CT(i,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,l,p,a,s]}class OT extends Be{constructor(n){super(),Pe(this,n,CT,NT,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function kT(i){let n;return{c(){n=ke("hr")},l(t){n=xe(t,"HR",{})},m(t,s){ve(t,n,s)},p:Xe,i:Xe,o:Xe,d(t){t&&K(n)}}}function xT(i,n,t){return[void 0,void 0,void 0]}class RT extends Be{constructor(n){super(),Pe(this,n,xT,kT,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function LT(i){let n,t;const s=i[4].default,a=nt(s,i,i[3],null);return{c(){n=ke("strong"),a&&a.c()},l(u){n=xe(u,"STRONG",{});var l=qe(n);a&&a.l(l),l.forEach(K)},m(u,l){ve(u,n,l),a&&a.m(n,null),t=!0},p(u,[l]){a&&a.p&&(!t||l&8)&&tt(a,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(a,u),t=!0)},o(u){ue(a,u),t=!1},d(u){u&&K(n),a&&a.d(u)}}}function BT(i,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,l,p,a,s]}class PT extends Be{constructor(n){super(),Pe(this,n,BT,LT,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function UT(i){let n,t,s,a;return{c(){n=ke("img"),this.h()},l(u){n=xe(u,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){fc(n.src,t=i[0].href)||gn(n,"src",t),gn(n,"title",s=i[0].title),gn(n,"alt",a=i[0].text),gn(n,"class","markdown-image svelte-z38cge")},m(u,l){ve(u,n,l)},p(u,[l]){l&1&&!fc(n.src,t=u[0].href)&&gn(n,"src",t),l&1&&s!==(s=u[0].title)&&gn(n,"title",s),l&1&&a!==(a=u[0].text)&&gn(n,"alt",a)},i:Xe,o:Xe,d(u){u&&K(n)}}}function MT(i,n,t){let{token:s}=n;const a=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,a,u]}class $T extends Be{constructor(n){super(),Pe(this,n,MT,UT,Ne,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function VT(i){let n;const t=i[4].default,s=nt(t,i,i[3],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,u){s&&s.m(a,u),n=!0},p(a,[u]){s&&s.p&&(!n||u&8)&&tt(s,t,a,a[3],n?rt(t,a[3],u,null):it(a[3]),null)},i(a){n||(te(s,a),n=!0)},o(a){ue(s,a),n=!1},d(a){s&&s.d(a)}}}function GT(i,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,l,p,a,s]}class Ac extends Be{constructor(n){super(),Pe(this,n,GT,VT,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function _o(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let fi=_o();function Kc(i){fi=i}const Zc=/[&<>"']/,jT=new RegExp(Zc.source,"g"),ef=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,qT=new RegExp(ef.source,"g"),WT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bc=i=>WT[i];function wn(i,n){if(n){if(Zc.test(i))return i.replace(jT,bc)}else if(ef.test(i))return i.replace(qT,bc);return i}const YT=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function QT(i){return i.replace(YT,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const zT=/(^|[^\[])\^/g;function Ee(i,n){i=typeof i=="string"?i:i.source,n=n||"";const t={replace:(s,a)=>(a=typeof a=="object"&&"source"in a?a.source:a,a=a.replace(zT,"$1"),i=i.replace(s,a),t),getRegex:()=>new RegExp(i,n)};return t}function wc(i){try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const hs={exec:()=>null};function Sc(i,n){const t=i.replace(/\|/g,(u,l,p)=>{let d=!1,y=l;for(;--y>=0&&p[y]==="\\";)d=!d;return d?"|":" |"}),s=t.split(/ \|/);let a=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),n)if(s.length>n)s.splice(n);else for(;s.length<n;)s.push("");for(;a<s.length;a++)s[a]=s[a].trim().replace(/\\\|/g,"|");return s}function to(i,n,t){const s=i.length;if(s===0)return"";let a=0;for(;a<s;){const u=i.charAt(s-a-1);if(u===n&&!t)a++;else if(u!==n&&t)a++;else break}return i.slice(0,s-a)}function JT(i,n){if(i.indexOf(n[1])===-1)return-1;let t=0;for(let s=0;s<i.length;s++)if(i[s]==="\\")s++;else if(i[s]===n[0])t++;else if(i[s]===n[1]&&(t--,t<0))return s;return-1}function Fc(i,n,t,s){const a=n.href,u=n.title?wn(n.title):null,l=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){s.state.inLink=!0;const p={type:"link",raw:t,href:a,title:u,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,p}return{type:"image",raw:t,href:a,title:u,text:wn(l)}}function HT(i,n){const t=i.match(/^(\s+)(?:```)/);if(t===null)return n;const s=t[1];return n.split(`
`).map(a=>{const u=a.match(/^\s+/);if(u===null)return a;const[l]=u;return l.length>=s.length?a.slice(s.length):a}).join(`
`)}class ms{constructor(n){De(this,"options");De(this,"rules");De(this,"lexer");this.options=n||fi}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const s=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:to(s,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const s=t[0],a=HT(s,t[3]||"");return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:a}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let s=t[2].trim();if(/#$/.test(s)){const a=to(s,"#");(this.options.pedantic||!a||/ $/.test(a))&&(s=a.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){const s=t[0].replace(/^ *>[ \t]?/gm,""),a=this.lexer.state.top;this.lexer.state.top=!0;const u=this.lexer.blockTokens(s);return this.lexer.state.top=a,{type:"blockquote",raw:t[0],tokens:u,text:s}}}list(n){let t=this.rules.block.list.exec(n);if(t){let s=t[1].trim();const a=s.length>1,u={type:"list",raw:"",ordered:a,start:a?+s.slice(0,-1):"",loose:!1,items:[]};s=a?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=a?s:"[*+-]");const l=new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`);let p="",d="",y=!1;for(;n;){let E=!1;if(!(t=l.exec(n))||this.rules.block.hr.test(n))break;p=t[0],n=n.substring(p.length);let I=t[2].split(`
`,1)[0].replace(/^\t+/,he=>" ".repeat(3*he.length)),S=n.split(`
`,1)[0],k=0;this.options.pedantic?(k=2,d=I.trimStart()):(k=t[2].search(/[^ ]/),k=k>4?1:k,d=I.slice(k),k+=t[1].length);let R=!1;if(!I&&/^ *$/.test(S)&&(p+=S+`
`,n=n.substring(S.length+1),E=!0),!E){const he=new RegExp(`^ {0,${Math.min(3,k-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Ge=new RegExp(`^ {0,${Math.min(3,k-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),be=new RegExp(`^ {0,${Math.min(3,k-1)}}(?:\`\`\`|~~~)`),Ce=new RegExp(`^ {0,${Math.min(3,k-1)}}#`);for(;n;){const Re=n.split(`
`,1)[0];if(S=Re,this.options.pedantic&&(S=S.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),be.test(S)||Ce.test(S)||he.test(S)||Ge.test(n))break;if(S.search(/[^ ]/)>=k||!S.trim())d+=`
`+S.slice(k);else{if(R||I.search(/[^ ]/)>=4||be.test(I)||Ce.test(I)||Ge.test(I))break;d+=`
`+S}!R&&!S.trim()&&(R=!0),p+=Re+`
`,n=n.substring(Re.length+1),I=S.slice(k)}}u.loose||(y?u.loose=!0:/\n *\n *$/.test(p)&&(y=!0));let L=null,X;this.options.gfm&&(L=/^\[[ xX]\] /.exec(d),L&&(X=L[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),u.items.push({type:"list_item",raw:p,task:!!L,checked:X,loose:!1,text:d,tokens:[]}),u.raw+=p}u.items[u.items.length-1].raw=p.trimEnd(),u.items[u.items.length-1].text=d.trimEnd(),u.raw=u.raw.trimEnd();for(let E=0;E<u.items.length;E++)if(this.lexer.state.top=!1,u.items[E].tokens=this.lexer.blockTokens(u.items[E].text,[]),!u.loose){const I=u.items[E].tokens.filter(k=>k.type==="space"),S=I.length>0&&I.some(k=>/\n.*\n/.test(k.raw));u.loose=S}if(u.loose)for(let E=0;E<u.items.length;E++)u.items[E].loose=!0;return u}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const s=t[1].toLowerCase().replace(/\s+/g," "),a=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",u=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:a,title:u}}}table(n){const t=this.rules.block.table.exec(n);if(t){if(!/[:|]/.test(t[2]))return;const s={type:"table",raw:t[0],header:Sc(t[1]).map(a=>({text:a,tokens:[]})),align:t[2].replace(/^\||\| *$/g,"").split("|"),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(s.header.length===s.align.length){let a=s.align.length,u,l,p,d;for(u=0;u<a;u++){const y=s.align[u];y&&(/^ *-+: *$/.test(y)?s.align[u]="right":/^ *:-+: *$/.test(y)?s.align[u]="center":/^ *:-+ *$/.test(y)?s.align[u]="left":s.align[u]=null)}for(a=s.rows.length,u=0;u<a;u++)s.rows[u]=Sc(s.rows[u],s.header.length).map(y=>({text:y,tokens:[]}));for(a=s.header.length,l=0;l<a;l++)s.header[l].tokens=this.lexer.inline(s.header[l].text);for(a=s.rows.length,l=0;l<a;l++)for(d=s.rows[l],p=0;p<d.length;p++)d[p].tokens=this.lexer.inline(d[p].text);return s}}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:wn(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const s=t[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const l=to(s.slice(0,-1),"\\");if((s.length-l.length)%2===0)return}else{const l=JT(t[2],"()");if(l>-1){const d=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,d).trim(),t[3]=""}}let a=t[2],u="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);l&&(a=l[1],u=l[3])}else u=t[3]?t[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(this.options.pedantic&&!/>$/.test(s)?a=a.slice(1):a=a.slice(1,-1)),Fc(t,{href:a&&a.replace(this.rules.inline._escapes,"$1"),title:u&&u.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(n,t){let s;if((s=this.rules.inline.reflink.exec(n))||(s=this.rules.inline.nolink.exec(n))){let a=(s[2]||s[1]).replace(/\s+/g," ");if(a=t[a.toLowerCase()],!a){const u=s[0].charAt(0);return{type:"text",raw:u,text:u}}return Fc(s,a,s[0],this.lexer)}}emStrong(n,t,s=""){let a=this.rules.inline.emStrong.lDelim.exec(n);if(!a||a[3]&&s.match(/[\p{L}\p{N}]/u))return;if(!(a[1]||a[2]||"")||!s||this.rules.inline.punctuation.exec(s)){const l=[...a[0]].length-1;let p,d,y=l,E=0;const I=a[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(I.lastIndex=0,t=t.slice(-1*n.length+a[0].length-1);(a=I.exec(t))!=null;){if(p=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!p)continue;if(d=[...p].length,a[3]||a[4]){y+=d;continue}else if((a[5]||a[6])&&l%3&&!((l+d)%3)){E+=d;continue}if(y-=d,y>0)continue;d=Math.min(d,d+y+E);const S=[...n].slice(0,l+a.index+d+1).join("");if(Math.min(l,d)%2){const R=S.slice(1,-1);return{type:"em",raw:S,text:R,tokens:this.lexer.inlineTokens(R)}}const k=S.slice(2,-2);return{type:"strong",raw:S,text:k,tokens:this.lexer.inlineTokens(k)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let s=t[2].replace(/\n/g," ");const a=/[^ ]/.test(s),u=/^ /.test(s)&&/ $/.test(s);return a&&u&&(s=s.substring(1,s.length-1)),s=wn(s,!0),{type:"codespan",raw:t[0],text:s}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let s,a;return t[2]==="@"?(s=wn(t[1]),a="mailto:"+s):(s=wn(t[1]),a=s),{type:"link",raw:t[0],text:s,href:a,tokens:[{type:"text",raw:s,text:s}]}}}url(n){let t;if(t=this.rules.inline.url.exec(n)){let s,a;if(t[2]==="@")s=wn(t[0]),a="mailto:"+s;else{let u;do u=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(u!==t[0]);s=wn(t[0]),t[1]==="www."?a="http://"+t[0]:a=t[0]}return{type:"link",raw:t[0],text:s,href:a,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let s;return this.lexer.state.inRawBlock?s=t[0]:s=wn(t[0]),{type:"text",raw:t[0],text:s}}}}const W={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:hs,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};W._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;W._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;W.def=Ee(W.def).replace("label",W._label).replace("title",W._title).getRegex();W.bullet=/(?:[*+-]|\d{1,9}[.)])/;W.listItemStart=Ee(/^( *)(bull) */).replace("bull",W.bullet).getRegex();W.list=Ee(W.list).replace(/bull/g,W.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+W.def.source+")").getRegex();W._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";W._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;W.html=Ee(W.html,"i").replace("comment",W._comment).replace("tag",W._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();W.lheading=Ee(W.lheading).replace(/bull/g,W.bullet).getRegex();W.paragraph=Ee(W._paragraph).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.blockquote=Ee(W.blockquote).replace("paragraph",W.paragraph).getRegex();W.normal={...W};W.gfm={...W.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};W.gfm.table=Ee(W.gfm.table).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.gfm.paragraph=Ee(W._paragraph).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",W.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.pedantic={...W.normal,html:Ee(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",W._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:hs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ee(W.normal._paragraph).replace("hr",W.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",W.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const U={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:hs,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:hs,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};U._punctuation="\\p{P}$+<=>`^|~";U.punctuation=Ee(U.punctuation,"u").replace(/punctuation/g,U._punctuation).getRegex();U.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;U.anyPunctuation=/\\[punct]/g;U._escapes=/\\([punct])/g;U._comment=Ee(W._comment).replace("(?:-->|$)","-->").getRegex();U.emStrong.lDelim=Ee(U.emStrong.lDelim,"u").replace(/punct/g,U._punctuation).getRegex();U.emStrong.rDelimAst=Ee(U.emStrong.rDelimAst,"gu").replace(/punct/g,U._punctuation).getRegex();U.emStrong.rDelimUnd=Ee(U.emStrong.rDelimUnd,"gu").replace(/punct/g,U._punctuation).getRegex();U.anyPunctuation=Ee(U.anyPunctuation,"gu").replace(/punct/g,U._punctuation).getRegex();U._escapes=Ee(U._escapes,"gu").replace(/punct/g,U._punctuation).getRegex();U._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;U._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;U.autolink=Ee(U.autolink).replace("scheme",U._scheme).replace("email",U._email).getRegex();U._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;U.tag=Ee(U.tag).replace("comment",U._comment).replace("attribute",U._attribute).getRegex();U._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;U._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;U._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;U.link=Ee(U.link).replace("label",U._label).replace("href",U._href).replace("title",U._title).getRegex();U.reflink=Ee(U.reflink).replace("label",U._label).replace("ref",W._label).getRegex();U.nolink=Ee(U.nolink).replace("ref",W._label).getRegex();U.reflinkSearch=Ee(U.reflinkSearch,"g").replace("reflink",U.reflink).replace("nolink",U.nolink).getRegex();U.normal={...U};U.pedantic={...U.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Ee(/^!?\[(label)\]\((.*?)\)/).replace("label",U._label).getRegex(),reflink:Ee(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",U._label).getRegex()};U.gfm={...U.normal,escape:Ee(U.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};U.gfm.url=Ee(U.gfm.url,"i").replace("email",U.gfm._extended_email).getRegex();U.breaks={...U.gfm,br:Ee(U.br).replace("{2,}","*").getRegex(),text:Ee(U.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class Jn{constructor(n){De(this,"tokens");De(this,"options");De(this,"state");De(this,"tokenizer");De(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||fi,this.options.tokenizer=this.options.tokenizer||new ms,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:W.normal,inline:U.normal};this.options.pedantic?(t.block=W.pedantic,t.inline=U.pedantic):this.options.gfm&&(t.block=W.gfm,this.options.breaks?t.inline=U.breaks:t.inline=U.gfm),this.tokenizer.rules=t}static get rules(){return{block:W,inline:U}}static lex(n,t){return new Jn(t).lex(n)}static lexInline(n,t){return new Jn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(n,t=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(p,d,y)=>d+"    ".repeat(y.length));let s,a,u,l;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(p=>(s=p.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(n)){n=n.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s);continue}if(s=this.tokenizer.fences(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+s.raw,a.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(u=n,this.options.extensions&&this.options.extensions.startBlock){let p=1/0;const d=n.slice(1);let y;this.options.extensions.startBlock.forEach(E=>{y=E.call({lexer:this},d),typeof y=="number"&&y>=0&&(p=Math.min(p,y))}),p<1/0&&p>=0&&(u=n.substring(0,p+1))}if(this.state.top&&(s=this.tokenizer.paragraph(u))){a=t[t.length-1],l&&a.type==="paragraph"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s),l=u.length!==n.length,n=n.substring(s.raw.length);continue}if(s=this.tokenizer.text(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&a.type==="text"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s);continue}if(n){const p="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let s,a,u,l=n,p,d,y;if(this.tokens.links){const E=Object.keys(this.tokens.links);if(E.length>0)for(;(p=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)E.includes(p[0].slice(p[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(p=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(p=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,p.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(d||(y=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(E=>(s=E.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.escape(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&s.type==="text"&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):t.push(s);continue}if(s=this.tokenizer.link(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(s.raw.length),a=t[t.length-1],a&&s.type==="text"&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(n,l,y)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(n)){n=n.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(n))){n=n.substring(s.raw.length),t.push(s);continue}if(u=n,this.options.extensions&&this.options.extensions.startInline){let E=1/0;const I=n.slice(1);let S;this.options.extensions.startInline.forEach(k=>{S=k.call({lexer:this},I),typeof S=="number"&&S>=0&&(E=Math.min(E,S))}),E<1/0&&E>=0&&(u=n.substring(0,E+1))}if(s=this.tokenizer.inlineText(u)){n=n.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(y=s.raw.slice(-1)),d=!0,a=t[t.length-1],a&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):t.push(s);continue}if(n){const E="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(E);break}else throw new Error(E)}}return t}}class gs{constructor(n){De(this,"options");this.options=n||fi}code(n,t,s){var u;const a=(u=(t||"").match(/^\S*/))==null?void 0:u[0];return n=n.replace(/\n$/,"")+`
`,a?'<pre><code class="language-'+wn(a)+'">'+(s?n:wn(n,!0))+`</code></pre>
`:"<pre><code>"+(s?n:wn(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,t){return n}heading(n,t,s){return`<h${t}>${n}</h${t}>
`}hr(){return`<hr>
`}list(n,t,s){const a=t?"ol":"ul",u=t&&s!==1?' start="'+s+'"':"";return"<"+a+u+`>
`+n+"</"+a+`>
`}listitem(n,t,s){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(n){return`<p>${n}</p>
`}table(n,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+t+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,t){const s=t.header?"th":"td";return(t.align?`<${s} align="${t.align}">`:`<${s}>`)+n+`</${s}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,t,s){const a=wc(n);if(a===null)return s;n=a;let u='<a href="'+n+'"';return t&&(u+=' title="'+t+'"'),u+=">"+s+"</a>",u}image(n,t,s){const a=wc(n);if(a===null)return s;n=a;let u=`<img src="${n}" alt="${s}"`;return t&&(u+=` title="${t}"`),u+=">",u}text(n){return n}}class Ao{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,s){return""+s}image(n,t,s){return""+s}br(){return""}}class ft{constructor(n){De(this,"options");De(this,"renderer");De(this,"textRenderer");this.options=n||fi,this.options.renderer=this.options.renderer||new gs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Ao}static parse(n,t){return new ft(t).parse(n)}static parseInline(n,t){return new ft(t).parseInline(n)}parse(n,t=!0){let s="";for(let a=0;a<n.length;a++){const u=n[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]){const l=u,p=this.options.extensions.renderers[l.type].call({parser:this},l);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){s+=p||"";continue}}switch(u.type){case"space":continue;case"hr":{s+=this.renderer.hr();continue}case"heading":{const l=u;s+=this.renderer.heading(this.parseInline(l.tokens),l.depth,QT(this.parseInline(l.tokens,this.textRenderer)));continue}case"code":{const l=u;s+=this.renderer.code(l.text,l.lang,!!l.escaped);continue}case"table":{const l=u;let p="",d="";for(let E=0;E<l.header.length;E++)d+=this.renderer.tablecell(this.parseInline(l.header[E].tokens),{header:!0,align:l.align[E]});p+=this.renderer.tablerow(d);let y="";for(let E=0;E<l.rows.length;E++){const I=l.rows[E];d="";for(let S=0;S<I.length;S++)d+=this.renderer.tablecell(this.parseInline(I[S].tokens),{header:!1,align:l.align[S]});y+=this.renderer.tablerow(d)}s+=this.renderer.table(p,y);continue}case"blockquote":{const l=u,p=this.parse(l.tokens);s+=this.renderer.blockquote(p);continue}case"list":{const l=u,p=l.ordered,d=l.start,y=l.loose;let E="";for(let I=0;I<l.items.length;I++){const S=l.items[I],k=S.checked,R=S.task;let L="";if(S.task){const X=this.renderer.checkbox(!!k);y?S.tokens.length>0&&S.tokens[0].type==="paragraph"?(S.tokens[0].text=X+" "+S.tokens[0].text,S.tokens[0].tokens&&S.tokens[0].tokens.length>0&&S.tokens[0].tokens[0].type==="text"&&(S.tokens[0].tokens[0].text=X+" "+S.tokens[0].tokens[0].text)):S.tokens.unshift({type:"text",text:X+" "}):L+=X+" "}L+=this.parse(S.tokens,y),E+=this.renderer.listitem(L,R,!!k)}s+=this.renderer.list(E,p,d);continue}case"html":{const l=u;s+=this.renderer.html(l.text,l.block);continue}case"paragraph":{const l=u;s+=this.renderer.paragraph(this.parseInline(l.tokens));continue}case"text":{let l=u,p=l.tokens?this.parseInline(l.tokens):l.text;for(;a+1<n.length&&n[a+1].type==="text";)l=n[++a],p+=`
`+(l.tokens?this.parseInline(l.tokens):l.text);s+=t?this.renderer.paragraph(p):p;continue}default:{const l='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}parseInline(n,t){t=t||this.renderer;let s="";for(let a=0;a<n.length;a++){const u=n[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]){const l=this.options.extensions.renderers[u.type].call({parser:this},u);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(u.type)){s+=l||"";continue}}switch(u.type){case"escape":{const l=u;s+=t.text(l.text);break}case"html":{const l=u;s+=t.html(l.text);break}case"link":{const l=u;s+=t.link(l.href,l.title,this.parseInline(l.tokens,t));break}case"image":{const l=u;s+=t.image(l.href,l.title,l.text);break}case"strong":{const l=u;s+=t.strong(this.parseInline(l.tokens,t));break}case"em":{const l=u;s+=t.em(this.parseInline(l.tokens,t));break}case"codespan":{const l=u;s+=t.codespan(l.text);break}case"br":{s+=t.br();break}case"del":{const l=u;s+=t.del(this.parseInline(l.tokens,t));break}case"text":{const l=u;s+=t.text(l.text);break}default:{const l='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}}class ar{constructor(n){De(this,"options");this.options=n||fi}preprocess(n){return n}postprocess(n){return n}}De(ar,"passThroughHooks",new Set(["preprocess","postprocess"]));var cr,co,Is,nf;class XT{constructor(...n){Za(this,cr);Za(this,Is);De(this,"defaults",_o());De(this,"options",this.setOptions);De(this,"parse",ss(this,cr,co).call(this,Jn.lex,ft.parse));De(this,"parseInline",ss(this,cr,co).call(this,Jn.lexInline,ft.parseInline));De(this,"Parser",ft);De(this,"parser",ft.parse);De(this,"Renderer",gs);De(this,"TextRenderer",Ao);De(this,"Lexer",Jn);De(this,"lexer",Jn.lex);De(this,"Tokenizer",ms);De(this,"Hooks",ar);this.use(...n)}walkTokens(n,t){var a,u;let s=[];for(const l of n)switch(s=s.concat(t.call(this,l)),l.type){case"table":{const p=l;for(const d of p.header)s=s.concat(this.walkTokens(d.tokens,t));for(const d of p.rows)for(const y of d)s=s.concat(this.walkTokens(y.tokens,t));break}case"list":{const p=l;s=s.concat(this.walkTokens(p.items,t));break}default:{const p=l;(u=(a=this.defaults.extensions)==null?void 0:a.childTokens)!=null&&u[p.type]?this.defaults.extensions.childTokens[p.type].forEach(d=>{s=s.concat(this.walkTokens(p[d],t))}):p.tokens&&(s=s.concat(this.walkTokens(p.tokens,t)))}}return s}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(s=>{const a={...s};if(a.async=this.defaults.async||a.async||!1,s.extensions&&(s.extensions.forEach(u=>{if(!u.name)throw new Error("extension name required");if("renderer"in u){const l=t.renderers[u.name];l?t.renderers[u.name]=function(...p){let d=u.renderer.apply(this,p);return d===!1&&(d=l.apply(this,p)),d}:t.renderers[u.name]=u.renderer}if("tokenizer"in u){if(!u.level||u.level!=="block"&&u.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=t[u.level];l?l.unshift(u.tokenizer):t[u.level]=[u.tokenizer],u.start&&(u.level==="block"?t.startBlock?t.startBlock.push(u.start):t.startBlock=[u.start]:u.level==="inline"&&(t.startInline?t.startInline.push(u.start):t.startInline=[u.start]))}"childTokens"in u&&u.childTokens&&(t.childTokens[u.name]=u.childTokens)}),a.extensions=t),s.renderer){const u=this.defaults.renderer||new gs(this.defaults);for(const l in s.renderer){const p=s.renderer[l],d=l,y=u[d];u[d]=(...E)=>{let I=p.apply(u,E);return I===!1&&(I=y.apply(u,E)),I||""}}a.renderer=u}if(s.tokenizer){const u=this.defaults.tokenizer||new ms(this.defaults);for(const l in s.tokenizer){const p=s.tokenizer[l],d=l,y=u[d];u[d]=(...E)=>{let I=p.apply(u,E);return I===!1&&(I=y.apply(u,E)),I}}a.tokenizer=u}if(s.hooks){const u=this.defaults.hooks||new ar;for(const l in s.hooks){const p=s.hooks[l],d=l,y=u[d];ar.passThroughHooks.has(l)?u[d]=E=>{if(this.defaults.async)return Promise.resolve(p.call(u,E)).then(S=>y.call(u,S));const I=p.call(u,E);return y.call(u,I)}:u[d]=(...E)=>{let I=p.apply(u,E);return I===!1&&(I=y.apply(u,E)),I}}a.hooks=u}if(s.walkTokens){const u=this.defaults.walkTokens,l=s.walkTokens;a.walkTokens=function(p){let d=[];return d.push(l.call(this,p)),u&&(d=d.concat(u.call(this,p))),d}}this.defaults={...this.defaults,...a}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}}cr=new WeakSet,co=function(n,t){return(s,a)=>{const u={...a},l={...this.defaults,...u};this.defaults.async===!0&&u.async===!1&&(l.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),l.async=!0);const p=ss(this,Is,nf).call(this,!!l.silent,!!l.async);if(typeof s>"u"||s===null)return p(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return p(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(l.hooks&&(l.hooks.options=l),l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(s):s).then(d=>n(d,l)).then(d=>l.walkTokens?Promise.all(this.walkTokens(d,l.walkTokens)).then(()=>d):d).then(d=>t(d,l)).then(d=>l.hooks?l.hooks.postprocess(d):d).catch(p);try{l.hooks&&(s=l.hooks.preprocess(s));const d=n(s,l);l.walkTokens&&this.walkTokens(d,l.walkTokens);let y=t(d,l);return l.hooks&&(y=l.hooks.postprocess(y)),y}catch(d){return p(d)}}},Is=new WeakSet,nf=function(n,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const a="<p>An error occurred:</p><pre>"+wn(s.message+"",!0)+"</pre>";return t?Promise.resolve(a):a}if(t)return Promise.reject(s);throw s}};const ui=new XT;function Ie(i,n){return ui.parse(i,n)}Ie.options=Ie.setOptions=function(i){return ui.setOptions(i),Ie.defaults=ui.defaults,Kc(Ie.defaults),Ie};Ie.getDefaults=_o;Ie.defaults=fi;Ie.use=function(...i){return ui.use(...i),Ie.defaults=ui.defaults,Kc(Ie.defaults),Ie};Ie.walkTokens=function(i,n){return ui.walkTokens(i,n)};Ie.parseInline=ui.parseInline;Ie.Parser=ft;Ie.parser=ft.parse;Ie.Renderer=gs;Ie.TextRenderer=Ao;Ie.Lexer=Jn;Ie.lexer=Jn.lex;Ie.Tokenizer=ms;Ie.Hooks=ar;Ie.parse=Ie;Ie.options;Ie.setOptions;Ie.use;Ie.walkTokens;Ie.parseInline;ft.parse;Jn.lex;const KT=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,ZT=Object.hasOwnProperty;class tf{constructor(){this.occurrences,this.reset()}slug(n,t){const s=this;let a=eD(n,t===!0);const u=a;for(;ZT.call(s.occurrences,a);)s.occurrences[u]++,a=u+"-"+s.occurrences[u];return s.occurrences[a]=0,a}reset(){this.occurrences=Object.create(null)}}function eD(i,n){return typeof i!="string"?"":(n||(i=i.toLowerCase()),i.replace(KT,"").replace(/ /g,"-"))}function nD(i){return new Jn().lex(i)}const tD=()=>({heading:BE,blockquote:ME,list:JE,list_item:KE,br:nT,code:rT,codespan:oT,table:cT,html:dT,paragraph:gT,link:TT,text:vT,def:bT,del:FT,em:OT,hr:RT,strong:PT,image:$T,space:Ac,escape:Ac}),iD=()=>({baseUrl:"/",slugger:new tf});function rD(){const i=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||i(n)},xE(()=>{console.warn=i})}function sD(i){let n,t;return n=new _s({props:{tokens:i[0],renderers:i[1],options:i[2]}}),{c(){Wt(n.$$.fragment)},l(s){ci(n.$$.fragment,s)},m(s,a){Yt(n,s,a),t=!0},p(s,[a]){const u={};a&1&&(u.tokens=s[0]),a&2&&(u.renderers=s[1]),a&4&&(u.options=s[2]),n.$set(u)},i(s){t||(te(n.$$.fragment,s),t=!0)},o(s){ue(n.$$.fragment,s),t=!1},d(s){Qt(n,s)}}}function aD(i,n,t){rD();let{source:s}=n,{options:a={}}=n,{renderers:u={}}=n,l,p,d;return i.$$set=y=>{"source"in y&&t(3,s=y.source),"options"in y&&t(4,a=y.options),"renderers"in y&&t(5,u=y.renderers)},i.$$.update=()=>{i.$$.dirty&56&&(t(0,l=nD(s)),t(1,p={...tD(),...u}),t(2,d={...iD(),...a}))},[l,p,d,s,a,u]}class kv extends Be{constructor(n){super(),Pe(this,n,aD,sD,Ne,{source:3,options:4,renderers:5})}}const fr={joinUrlPaths:uo,isRelative:lo,generatePathSegment:Hc};var tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oD(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function as(){return{convert:i=>i==null||i===""?null:String(i),asString:i=>String(i),type:i=>i.string().optional()}}function Nc(i){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(i(n).optional()).optional()}}function os(i){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(i(n)).optional()}}function Cc(i){return{convert:n=>n==null||!i.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(i).optional()}}function bn(i,n){const t=s=>n.convert(s[i]);return{name:uD(i),key:i,asEnv:s=>({[i]:n.asString(s)}),zod:{type:n.type},get:t,getOrDefault:(s,a)=>t(s)??a}}function uD(i){return i.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}var bo={APP_LOGO:bn("APP_LOGO",as()),APP_TITLE:bn("APP_TITLE",as()),APP_FAVICON:bn("APP_FAVICON",as()),SITE_ROOT:bn("SITE_ROOT",as()),SITE_META:bn("SITE_META",Nc(i=>i.string())),CUSTOM_STYLES:bn("CUSTOM_STYLES",os(i=>i.string())),FIELDS_SORTING:bn("FIELDS_SORTING",Cc(["default","alphabetical"])),ARGUMENTS_SORTING:bn("ARGUMENTS_SORTING",Cc(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:bn("QUERY_GENERATION_FACTORIES",Nc(i=>i.union([i.string(),i.boolean(),i.number(),i.null(),i.record(i.unknown())]))),PAGES:bn("PAGES",os(i=>{const n=i.lazy(()=>i.object({title:i.string().min(1),content:i.union([i.array(n),i.string().min(1)])}));return n})),EXTERNAL_LINKS:bn("EXTERNAL_LINKS",os(i=>i.object({label:i.string().min(1),href:i.string().min(1),position:i.union([i.literal("header"),i.literal("navigation")]).optional(),kind:i.string().min(1).optional(),group:i.string().min(1).optional()}))),DIRECTIVES:bn("DIRECTIVES",os(i=>i.object({name:i.string().min(1),args:i.array(i.string())})))};function lD(){return{convert:i=>{if(i===null||i===void 0)return null;switch(typeof i){case"boolean":return i;case"string":const n=i.toLowerCase().trim();return n==="true"||n==="t"||n==="1";case"number":return i!==0;default:return null}},asString:i=>String(i),type:i=>i.boolean().optional()}}bn("MAGIDOC_GENERATE",lD());var ys={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ys.exports;(function(i,n){(function(){var t,s="4.17.21",a=200,u="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",p="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",y=500,E="__lodash_placeholder__",I=1,S=2,k=4,R=1,L=2,X=1,he=2,Ge=4,be=8,Ce=16,Re=32,rn=64,Ke=128,mt=256,O=512,Z=30,sn="...",xt=800,Ht=16,hr=1,di=2,mr=3,at=1/0,$n=9007199254740991,hi=17976931348623157e292,Xt=0/0,Sn=4294967295,w=Sn-1,V=Sn>>>1,P=[["ary",Ke],["bind",X],["bindKey",he],["curry",be],["curryRight",Ce],["flip",O],["partial",Re],["partialRight",rn],["rearg",mt]],M="[object Arguments]",me="[object Array]",Ue="[object AsyncFunction]",ge="[object Boolean]",Fn="[object Date]",Li="[object DOMException]",Rt="[object Error]",Ze="[object Function]",xo="[object GeneratorFunction]",Vn="[object Map]",Bi="[object Number]",Wf="[object Null]",gt="[object Object]",Ro="[object Promise]",Yf="[object Proxy]",Pi="[object RegExp]",Gn="[object Set]",Ui="[object String]",gr="[object Symbol]",Qf="[object Undefined]",Mi="[object WeakMap]",zf="[object WeakSet]",$i="[object ArrayBuffer]",mi="[object DataView]",ks="[object Float32Array]",xs="[object Float64Array]",Rs="[object Int8Array]",Ls="[object Int16Array]",Bs="[object Int32Array]",Ps="[object Uint8Array]",Us="[object Uint8ClampedArray]",Ms="[object Uint16Array]",$s="[object Uint32Array]",Jf=/\b__p \+= '';/g,Hf=/\b(__p \+=) '' \+/g,Xf=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Lo=/&(?:amp|lt|gt|quot|#39);/g,Bo=/[&<>"']/g,Kf=RegExp(Lo.source),Zf=RegExp(Bo.source),ep=/<%-([\s\S]+?)%>/g,np=/<%([\s\S]+?)%>/g,Po=/<%=([\s\S]+?)%>/g,tp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ip=/^\w*$/,rp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vs=/[\\^$.*+?()[\]{}|]/g,sp=RegExp(Vs.source),Gs=/^\s+/,ap=/\s/,op=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,up=/\{\n\/\* \[wrapped with (.+)\] \*/,lp=/,? & /,cp=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,fp=/[()=,{}\[\]\/\s]/,pp=/\\(\\)?/g,dp=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Uo=/\w*$/,hp=/^[-+]0x[0-9a-f]+$/i,mp=/^0b[01]+$/i,gp=/^\[object .+?Constructor\]$/,yp=/^0o[0-7]+$/i,Ep=/^(?:0|[1-9]\d*)$/,Tp=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,yr=/($^)/,Dp=/['\n\r\u2028\u2029\\]/g,Er="\\ud800-\\udfff",Ip="\\u0300-\\u036f",vp="\\ufe20-\\ufe2f",_p="\\u20d0-\\u20ff",Mo=Ip+vp+_p,$o="\\u2700-\\u27bf",Vo="a-z\\xdf-\\xf6\\xf8-\\xff",Ap="\\xac\\xb1\\xd7\\xf7",bp="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",wp="\\u2000-\\u206f",Sp=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Go="A-Z\\xc0-\\xd6\\xd8-\\xde",jo="\\ufe0e\\ufe0f",qo=Ap+bp+wp+Sp,js="['’]",Fp="["+Er+"]",Wo="["+qo+"]",Tr="["+Mo+"]",Yo="\\d+",Np="["+$o+"]",Qo="["+Vo+"]",zo="[^"+Er+qo+Yo+$o+Vo+Go+"]",qs="\\ud83c[\\udffb-\\udfff]",Cp="(?:"+Tr+"|"+qs+")",Jo="[^"+Er+"]",Ws="(?:\\ud83c[\\udde6-\\uddff]){2}",Ys="[\\ud800-\\udbff][\\udc00-\\udfff]",gi="["+Go+"]",Ho="\\u200d",Xo="(?:"+Qo+"|"+zo+")",Op="(?:"+gi+"|"+zo+")",Ko="(?:"+js+"(?:d|ll|m|re|s|t|ve))?",Zo="(?:"+js+"(?:D|LL|M|RE|S|T|VE))?",eu=Cp+"?",nu="["+jo+"]?",kp="(?:"+Ho+"(?:"+[Jo,Ws,Ys].join("|")+")"+nu+eu+")*",xp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Rp="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",tu=nu+eu+kp,Lp="(?:"+[Np,Ws,Ys].join("|")+")"+tu,Bp="(?:"+[Jo+Tr+"?",Tr,Ws,Ys,Fp].join("|")+")",Pp=RegExp(js,"g"),Up=RegExp(Tr,"g"),Qs=RegExp(qs+"(?="+qs+")|"+Bp+tu,"g"),Mp=RegExp([gi+"?"+Qo+"+"+Ko+"(?="+[Wo,gi,"$"].join("|")+")",Op+"+"+Zo+"(?="+[Wo,gi+Xo,"$"].join("|")+")",gi+"?"+Xo+"+"+Ko,gi+"+"+Zo,Rp,xp,Yo,Lp].join("|"),"g"),$p=RegExp("["+Ho+Er+Mo+jo+"]"),Vp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Gp=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],jp=-1,Se={};Se[ks]=Se[xs]=Se[Rs]=Se[Ls]=Se[Bs]=Se[Ps]=Se[Us]=Se[Ms]=Se[$s]=!0,Se[M]=Se[me]=Se[$i]=Se[ge]=Se[mi]=Se[Fn]=Se[Rt]=Se[Ze]=Se[Vn]=Se[Bi]=Se[gt]=Se[Pi]=Se[Gn]=Se[Ui]=Se[Mi]=!1;var we={};we[M]=we[me]=we[$i]=we[mi]=we[ge]=we[Fn]=we[ks]=we[xs]=we[Rs]=we[Ls]=we[Bs]=we[Vn]=we[Bi]=we[gt]=we[Pi]=we[Gn]=we[Ui]=we[gr]=we[Ps]=we[Us]=we[Ms]=we[$s]=!0,we[Rt]=we[Ze]=we[Mi]=!1;var qp={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Wp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Yp={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Qp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},zp=parseFloat,Jp=parseInt,iu=typeof tr=="object"&&tr&&tr.Object===Object&&tr,Hp=typeof self=="object"&&self&&self.Object===Object&&self,Je=iu||Hp||Function("return this")(),zs=n&&!n.nodeType&&n,Kt=zs&&!0&&i&&!i.nodeType&&i,ru=Kt&&Kt.exports===zs,Js=ru&&iu.process,Nn=function(){try{var D=Kt&&Kt.require&&Kt.require("util").types;return D||Js&&Js.binding&&Js.binding("util")}catch{}}(),su=Nn&&Nn.isArrayBuffer,au=Nn&&Nn.isDate,ou=Nn&&Nn.isMap,uu=Nn&&Nn.isRegExp,lu=Nn&&Nn.isSet,cu=Nn&&Nn.isTypedArray;function Tn(D,b,A){switch(A.length){case 0:return D.call(b);case 1:return D.call(b,A[0]);case 2:return D.call(b,A[0],A[1]);case 3:return D.call(b,A[0],A[1],A[2])}return D.apply(b,A)}function Xp(D,b,A,$){for(var ee=-1,de=D==null?0:D.length;++ee<de;){var We=D[ee];b($,We,A(We),D)}return $}function Cn(D,b){for(var A=-1,$=D==null?0:D.length;++A<$&&b(D[A],A,D)!==!1;);return D}function Kp(D,b){for(var A=D==null?0:D.length;A--&&b(D[A],A,D)!==!1;);return D}function fu(D,b){for(var A=-1,$=D==null?0:D.length;++A<$;)if(!b(D[A],A,D))return!1;return!0}function Lt(D,b){for(var A=-1,$=D==null?0:D.length,ee=0,de=[];++A<$;){var We=D[A];b(We,A,D)&&(de[ee++]=We)}return de}function Dr(D,b){var A=D==null?0:D.length;return!!A&&yi(D,b,0)>-1}function Hs(D,b,A){for(var $=-1,ee=D==null?0:D.length;++$<ee;)if(A(b,D[$]))return!0;return!1}function Fe(D,b){for(var A=-1,$=D==null?0:D.length,ee=Array($);++A<$;)ee[A]=b(D[A],A,D);return ee}function Bt(D,b){for(var A=-1,$=b.length,ee=D.length;++A<$;)D[ee+A]=b[A];return D}function Xs(D,b,A,$){var ee=-1,de=D==null?0:D.length;for($&&de&&(A=D[++ee]);++ee<de;)A=b(A,D[ee],ee,D);return A}function Zp(D,b,A,$){var ee=D==null?0:D.length;for($&&ee&&(A=D[--ee]);ee--;)A=b(A,D[ee],ee,D);return A}function Ks(D,b){for(var A=-1,$=D==null?0:D.length;++A<$;)if(b(D[A],A,D))return!0;return!1}var ed=Zs("length");function nd(D){return D.split("")}function td(D){return D.match(cp)||[]}function pu(D,b,A){var $;return A(D,function(ee,de,We){if(b(ee,de,We))return $=de,!1}),$}function Ir(D,b,A,$){for(var ee=D.length,de=A+($?1:-1);$?de--:++de<ee;)if(b(D[de],de,D))return de;return-1}function yi(D,b,A){return b===b?hd(D,b,A):Ir(D,du,A)}function id(D,b,A,$){for(var ee=A-1,de=D.length;++ee<de;)if($(D[ee],b))return ee;return-1}function du(D){return D!==D}function hu(D,b){var A=D==null?0:D.length;return A?na(D,b)/A:Xt}function Zs(D){return function(b){return b==null?t:b[D]}}function ea(D){return function(b){return D==null?t:D[b]}}function mu(D,b,A,$,ee){return ee(D,function(de,We,_e){A=$?($=!1,de):b(A,de,We,_e)}),A}function rd(D,b){var A=D.length;for(D.sort(b);A--;)D[A]=D[A].value;return D}function na(D,b){for(var A,$=-1,ee=D.length;++$<ee;){var de=b(D[$]);de!==t&&(A=A===t?de:A+de)}return A}function ta(D,b){for(var A=-1,$=Array(D);++A<D;)$[A]=b(A);return $}function sd(D,b){return Fe(b,function(A){return[A,D[A]]})}function gu(D){return D&&D.slice(0,Du(D)+1).replace(Gs,"")}function Dn(D){return function(b){return D(b)}}function ia(D,b){return Fe(b,function(A){return D[A]})}function Vi(D,b){return D.has(b)}function yu(D,b){for(var A=-1,$=D.length;++A<$&&yi(b,D[A],0)>-1;);return A}function Eu(D,b){for(var A=D.length;A--&&yi(b,D[A],0)>-1;);return A}function ad(D,b){for(var A=D.length,$=0;A--;)D[A]===b&&++$;return $}var od=ea(qp),ud=ea(Wp);function ld(D){return"\\"+Qp[D]}function cd(D,b){return D==null?t:D[b]}function Ei(D){return $p.test(D)}function fd(D){return Vp.test(D)}function pd(D){for(var b,A=[];!(b=D.next()).done;)A.push(b.value);return A}function ra(D){var b=-1,A=Array(D.size);return D.forEach(function($,ee){A[++b]=[ee,$]}),A}function Tu(D,b){return function(A){return D(b(A))}}function Pt(D,b){for(var A=-1,$=D.length,ee=0,de=[];++A<$;){var We=D[A];(We===b||We===E)&&(D[A]=E,de[ee++]=A)}return de}function vr(D){var b=-1,A=Array(D.size);return D.forEach(function($){A[++b]=$}),A}function dd(D){var b=-1,A=Array(D.size);return D.forEach(function($){A[++b]=[$,$]}),A}function hd(D,b,A){for(var $=A-1,ee=D.length;++$<ee;)if(D[$]===b)return $;return-1}function md(D,b,A){for(var $=A+1;$--;)if(D[$]===b)return $;return $}function Ti(D){return Ei(D)?yd(D):ed(D)}function jn(D){return Ei(D)?Ed(D):nd(D)}function Du(D){for(var b=D.length;b--&&ap.test(D.charAt(b)););return b}var gd=ea(Yp);function yd(D){for(var b=Qs.lastIndex=0;Qs.test(D);)++b;return b}function Ed(D){return D.match(Qs)||[]}function Td(D){return D.match(Mp)||[]}var Dd=function D(b){b=b==null?Je:Di.defaults(Je.Object(),b,Di.pick(Je,Gp));var A=b.Array,$=b.Date,ee=b.Error,de=b.Function,We=b.Math,_e=b.Object,sa=b.RegExp,Id=b.String,On=b.TypeError,_r=A.prototype,vd=de.prototype,Ii=_e.prototype,Ar=b["__core-js_shared__"],br=vd.toString,Te=Ii.hasOwnProperty,_d=0,Iu=function(){var e=/[^.]+$/.exec(Ar&&Ar.keys&&Ar.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),wr=Ii.toString,Ad=br.call(_e),bd=Je._,wd=sa("^"+br.call(Te).replace(Vs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Sr=ru?b.Buffer:t,Ut=b.Symbol,Fr=b.Uint8Array,vu=Sr?Sr.allocUnsafe:t,Nr=Tu(_e.getPrototypeOf,_e),_u=_e.create,Au=Ii.propertyIsEnumerable,Cr=_r.splice,bu=Ut?Ut.isConcatSpreadable:t,Gi=Ut?Ut.iterator:t,Zt=Ut?Ut.toStringTag:t,Or=function(){try{var e=ri(_e,"defineProperty");return e({},"",{}),e}catch{}}(),Sd=b.clearTimeout!==Je.clearTimeout&&b.clearTimeout,Fd=$&&$.now!==Je.Date.now&&$.now,Nd=b.setTimeout!==Je.setTimeout&&b.setTimeout,kr=We.ceil,xr=We.floor,aa=_e.getOwnPropertySymbols,Cd=Sr?Sr.isBuffer:t,wu=b.isFinite,Od=_r.join,kd=Tu(_e.keys,_e),Ye=We.max,en=We.min,xd=$.now,Rd=b.parseInt,Su=We.random,Ld=_r.reverse,oa=ri(b,"DataView"),ji=ri(b,"Map"),ua=ri(b,"Promise"),vi=ri(b,"Set"),qi=ri(b,"WeakMap"),Wi=ri(_e,"create"),Rr=qi&&new qi,_i={},Bd=si(oa),Pd=si(ji),Ud=si(ua),Md=si(vi),$d=si(qi),Lr=Ut?Ut.prototype:t,Yi=Lr?Lr.valueOf:t,Fu=Lr?Lr.toString:t;function h(e){if(Le(e)&&!ne(e)&&!(e instanceof le)){if(e instanceof kn)return e;if(Te.call(e,"__wrapped__"))return Nl(e)}return new kn(e)}var Ai=function(){function e(){}return function(r){if(!Oe(r))return{};if(_u)return _u(r);e.prototype=r;var o=new e;return e.prototype=t,o}}();function Br(){}function kn(e,r){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}h.templateSettings={escape:ep,evaluate:np,interpolate:Po,variable:"",imports:{_:h}},h.prototype=Br.prototype,h.prototype.constructor=h,kn.prototype=Ai(Br.prototype),kn.prototype.constructor=kn;function le(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Sn,this.__views__=[]}function Vd(){var e=new le(this.__wrapped__);return e.__actions__=pn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=pn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=pn(this.__views__),e}function Gd(){if(this.__filtered__){var e=new le(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function jd(){var e=this.__wrapped__.value(),r=this.__dir__,o=ne(e),c=r<0,f=o?e.length:0,m=nm(0,f,this.__views__),g=m.start,T=m.end,v=T-g,F=c?T:g-1,N=this.__iteratees__,x=N.length,B=0,j=en(v,this.__takeCount__);if(!o||!c&&f==v&&j==v)return Ku(e,this.__actions__);var J=[];e:for(;v--&&B<j;){F+=r;for(var re=-1,H=e[F];++re<x;){var ae=N[re],fe=ae.iteratee,_n=ae.type,un=fe(H);if(_n==di)H=un;else if(!un){if(_n==hr)continue e;break e}}J[B++]=H}return J}le.prototype=Ai(Br.prototype),le.prototype.constructor=le;function ei(e){var r=-1,o=e==null?0:e.length;for(this.clear();++r<o;){var c=e[r];this.set(c[0],c[1])}}function qd(){this.__data__=Wi?Wi(null):{},this.size=0}function Wd(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}function Yd(e){var r=this.__data__;if(Wi){var o=r[e];return o===d?t:o}return Te.call(r,e)?r[e]:t}function Qd(e){var r=this.__data__;return Wi?r[e]!==t:Te.call(r,e)}function zd(e,r){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=Wi&&r===t?d:r,this}ei.prototype.clear=qd,ei.prototype.delete=Wd,ei.prototype.get=Yd,ei.prototype.has=Qd,ei.prototype.set=zd;function yt(e){var r=-1,o=e==null?0:e.length;for(this.clear();++r<o;){var c=e[r];this.set(c[0],c[1])}}function Jd(){this.__data__=[],this.size=0}function Hd(e){var r=this.__data__,o=Pr(r,e);if(o<0)return!1;var c=r.length-1;return o==c?r.pop():Cr.call(r,o,1),--this.size,!0}function Xd(e){var r=this.__data__,o=Pr(r,e);return o<0?t:r[o][1]}function Kd(e){return Pr(this.__data__,e)>-1}function Zd(e,r){var o=this.__data__,c=Pr(o,e);return c<0?(++this.size,o.push([e,r])):o[c][1]=r,this}yt.prototype.clear=Jd,yt.prototype.delete=Hd,yt.prototype.get=Xd,yt.prototype.has=Kd,yt.prototype.set=Zd;function Et(e){var r=-1,o=e==null?0:e.length;for(this.clear();++r<o;){var c=e[r];this.set(c[0],c[1])}}function eh(){this.size=0,this.__data__={hash:new ei,map:new(ji||yt),string:new ei}}function nh(e){var r=Jr(this,e).delete(e);return this.size-=r?1:0,r}function th(e){return Jr(this,e).get(e)}function ih(e){return Jr(this,e).has(e)}function rh(e,r){var o=Jr(this,e),c=o.size;return o.set(e,r),this.size+=o.size==c?0:1,this}Et.prototype.clear=eh,Et.prototype.delete=nh,Et.prototype.get=th,Et.prototype.has=ih,Et.prototype.set=rh;function ni(e){var r=-1,o=e==null?0:e.length;for(this.__data__=new Et;++r<o;)this.add(e[r])}function sh(e){return this.__data__.set(e,d),this}function ah(e){return this.__data__.has(e)}ni.prototype.add=ni.prototype.push=sh,ni.prototype.has=ah;function qn(e){var r=this.__data__=new yt(e);this.size=r.size}function oh(){this.__data__=new yt,this.size=0}function uh(e){var r=this.__data__,o=r.delete(e);return this.size=r.size,o}function lh(e){return this.__data__.get(e)}function ch(e){return this.__data__.has(e)}function fh(e,r){var o=this.__data__;if(o instanceof yt){var c=o.__data__;if(!ji||c.length<a-1)return c.push([e,r]),this.size=++o.size,this;o=this.__data__=new Et(c)}return o.set(e,r),this.size=o.size,this}qn.prototype.clear=oh,qn.prototype.delete=uh,qn.prototype.get=lh,qn.prototype.has=ch,qn.prototype.set=fh;function Nu(e,r){var o=ne(e),c=!o&&ai(e),f=!o&&!c&&jt(e),m=!o&&!c&&!f&&Fi(e),g=o||c||f||m,T=g?ta(e.length,Id):[],v=T.length;for(var F in e)(r||Te.call(e,F))&&!(g&&(F=="length"||f&&(F=="offset"||F=="parent")||m&&(F=="buffer"||F=="byteLength"||F=="byteOffset")||vt(F,v)))&&T.push(F);return T}function Cu(e){var r=e.length;return r?e[Ta(0,r-1)]:t}function ph(e,r){return Hr(pn(e),ti(r,0,e.length))}function dh(e){return Hr(pn(e))}function la(e,r,o){(o!==t&&!Wn(e[r],o)||o===t&&!(r in e))&&Tt(e,r,o)}function Qi(e,r,o){var c=e[r];(!(Te.call(e,r)&&Wn(c,o))||o===t&&!(r in e))&&Tt(e,r,o)}function Pr(e,r){for(var o=e.length;o--;)if(Wn(e[o][0],r))return o;return-1}function hh(e,r,o,c){return Mt(e,function(f,m,g){r(c,f,o(f),g)}),c}function Ou(e,r){return e&&ut(r,Qe(r),e)}function mh(e,r){return e&&ut(r,hn(r),e)}function Tt(e,r,o){r=="__proto__"&&Or?Or(e,r,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[r]=o}function ca(e,r){for(var o=-1,c=r.length,f=A(c),m=e==null;++o<c;)f[o]=m?t:qa(e,r[o]);return f}function ti(e,r,o){return e===e&&(o!==t&&(e=e<=o?e:o),r!==t&&(e=e>=r?e:r)),e}function xn(e,r,o,c,f,m){var g,T=r&I,v=r&S,F=r&k;if(o&&(g=f?o(e,c,f,m):o(e)),g!==t)return g;if(!Oe(e))return e;var N=ne(e);if(N){if(g=im(e),!T)return pn(e,g)}else{var x=nn(e),B=x==Ze||x==xo;if(jt(e))return nl(e,T);if(x==gt||x==M||B&&!f){if(g=v||B?{}:Dl(e),!T)return v?Yh(e,mh(g,e)):Wh(e,Ou(g,e))}else{if(!we[x])return f?e:{};g=rm(e,x,T)}}m||(m=new qn);var j=m.get(e);if(j)return j;m.set(e,g),Jl(e)?e.forEach(function(H){g.add(xn(H,r,o,H,e,m))}):Ql(e)&&e.forEach(function(H,ae){g.set(ae,xn(H,r,o,ae,e,m))});var J=F?v?Ca:Na:v?hn:Qe,re=N?t:J(e);return Cn(re||e,function(H,ae){re&&(ae=H,H=e[ae]),Qi(g,ae,xn(H,r,o,ae,e,m))}),g}function gh(e){var r=Qe(e);return function(o){return ku(o,e,r)}}function ku(e,r,o){var c=o.length;if(e==null)return!c;for(e=_e(e);c--;){var f=o[c],m=r[f],g=e[f];if(g===t&&!(f in e)||!m(g))return!1}return!0}function xu(e,r,o){if(typeof e!="function")throw new On(l);return er(function(){e.apply(t,o)},r)}function zi(e,r,o,c){var f=-1,m=Dr,g=!0,T=e.length,v=[],F=r.length;if(!T)return v;o&&(r=Fe(r,Dn(o))),c?(m=Hs,g=!1):r.length>=a&&(m=Vi,g=!1,r=new ni(r));e:for(;++f<T;){var N=e[f],x=o==null?N:o(N);if(N=c||N!==0?N:0,g&&x===x){for(var B=F;B--;)if(r[B]===x)continue e;v.push(N)}else m(r,x,c)||v.push(N)}return v}var Mt=al(ot),Ru=al(pa,!0);function yh(e,r){var o=!0;return Mt(e,function(c,f,m){return o=!!r(c,f,m),o}),o}function Ur(e,r,o){for(var c=-1,f=e.length;++c<f;){var m=e[c],g=r(m);if(g!=null&&(T===t?g===g&&!vn(g):o(g,T)))var T=g,v=m}return v}function Eh(e,r,o,c){var f=e.length;for(o=ie(o),o<0&&(o=-o>f?0:f+o),c=c===t||c>f?f:ie(c),c<0&&(c+=f),c=o>c?0:Xl(c);o<c;)e[o++]=r;return e}function Lu(e,r){var o=[];return Mt(e,function(c,f,m){r(c,f,m)&&o.push(c)}),o}function He(e,r,o,c,f){var m=-1,g=e.length;for(o||(o=am),f||(f=[]);++m<g;){var T=e[m];r>0&&o(T)?r>1?He(T,r-1,o,c,f):Bt(f,T):c||(f[f.length]=T)}return f}var fa=ol(),Bu=ol(!0);function ot(e,r){return e&&fa(e,r,Qe)}function pa(e,r){return e&&Bu(e,r,Qe)}function Mr(e,r){return Lt(r,function(o){return _t(e[o])})}function ii(e,r){r=Vt(r,e);for(var o=0,c=r.length;e!=null&&o<c;)e=e[lt(r[o++])];return o&&o==c?e:t}function Pu(e,r,o){var c=r(e);return ne(e)?c:Bt(c,o(e))}function an(e){return e==null?e===t?Qf:Wf:Zt&&Zt in _e(e)?em(e):dm(e)}function da(e,r){return e>r}function Th(e,r){return e!=null&&Te.call(e,r)}function Dh(e,r){return e!=null&&r in _e(e)}function Ih(e,r,o){return e>=en(r,o)&&e<Ye(r,o)}function ha(e,r,o){for(var c=o?Hs:Dr,f=e[0].length,m=e.length,g=m,T=A(m),v=1/0,F=[];g--;){var N=e[g];g&&r&&(N=Fe(N,Dn(r))),v=en(N.length,v),T[g]=!o&&(r||f>=120&&N.length>=120)?new ni(g&&N):t}N=e[0];var x=-1,B=T[0];e:for(;++x<f&&F.length<v;){var j=N[x],J=r?r(j):j;if(j=o||j!==0?j:0,!(B?Vi(B,J):c(F,J,o))){for(g=m;--g;){var re=T[g];if(!(re?Vi(re,J):c(e[g],J,o)))continue e}B&&B.push(J),F.push(j)}}return F}function vh(e,r,o,c){return ot(e,function(f,m,g){r(c,o(f),m,g)}),c}function Ji(e,r,o){r=Vt(r,e),e=Al(e,r);var c=e==null?e:e[lt(Ln(r))];return c==null?t:Tn(c,e,o)}function Uu(e){return Le(e)&&an(e)==M}function _h(e){return Le(e)&&an(e)==$i}function Ah(e){return Le(e)&&an(e)==Fn}function Hi(e,r,o,c,f){return e===r?!0:e==null||r==null||!Le(e)&&!Le(r)?e!==e&&r!==r:bh(e,r,o,c,Hi,f)}function bh(e,r,o,c,f,m){var g=ne(e),T=ne(r),v=g?me:nn(e),F=T?me:nn(r);v=v==M?gt:v,F=F==M?gt:F;var N=v==gt,x=F==gt,B=v==F;if(B&&jt(e)){if(!jt(r))return!1;g=!0,N=!1}if(B&&!N)return m||(m=new qn),g||Fi(e)?yl(e,r,o,c,f,m):Kh(e,r,v,o,c,f,m);if(!(o&R)){var j=N&&Te.call(e,"__wrapped__"),J=x&&Te.call(r,"__wrapped__");if(j||J){var re=j?e.value():e,H=J?r.value():r;return m||(m=new qn),f(re,H,o,c,m)}}return B?(m||(m=new qn),Zh(e,r,o,c,f,m)):!1}function wh(e){return Le(e)&&nn(e)==Vn}function ma(e,r,o,c){var f=o.length,m=f,g=!c;if(e==null)return!m;for(e=_e(e);f--;){var T=o[f];if(g&&T[2]?T[1]!==e[T[0]]:!(T[0]in e))return!1}for(;++f<m;){T=o[f];var v=T[0],F=e[v],N=T[1];if(g&&T[2]){if(F===t&&!(v in e))return!1}else{var x=new qn;if(c)var B=c(F,N,v,e,r,x);if(!(B===t?Hi(N,F,R|L,c,x):B))return!1}}return!0}function Mu(e){if(!Oe(e)||um(e))return!1;var r=_t(e)?wd:gp;return r.test(si(e))}function Sh(e){return Le(e)&&an(e)==Pi}function Fh(e){return Le(e)&&nn(e)==Gn}function Nh(e){return Le(e)&&ts(e.length)&&!!Se[an(e)]}function $u(e){return typeof e=="function"?e:e==null?mn:typeof e=="object"?ne(e)?ju(e[0],e[1]):Gu(e):uc(e)}function ga(e){if(!Zi(e))return kd(e);var r=[];for(var o in _e(e))Te.call(e,o)&&o!="constructor"&&r.push(o);return r}function Ch(e){if(!Oe(e))return pm(e);var r=Zi(e),o=[];for(var c in e)c=="constructor"&&(r||!Te.call(e,c))||o.push(c);return o}function ya(e,r){return e<r}function Vu(e,r){var o=-1,c=dn(e)?A(e.length):[];return Mt(e,function(f,m,g){c[++o]=r(f,m,g)}),c}function Gu(e){var r=ka(e);return r.length==1&&r[0][2]?vl(r[0][0],r[0][1]):function(o){return o===e||ma(o,e,r)}}function ju(e,r){return Ra(e)&&Il(r)?vl(lt(e),r):function(o){var c=qa(o,e);return c===t&&c===r?Wa(o,e):Hi(r,c,R|L)}}function $r(e,r,o,c,f){e!==r&&fa(r,function(m,g){if(f||(f=new qn),Oe(m))Oh(e,r,g,o,$r,c,f);else{var T=c?c(Ba(e,g),m,g+"",e,r,f):t;T===t&&(T=m),la(e,g,T)}},hn)}function Oh(e,r,o,c,f,m,g){var T=Ba(e,o),v=Ba(r,o),F=g.get(v);if(F){la(e,o,F);return}var N=m?m(T,v,o+"",e,r,g):t,x=N===t;if(x){var B=ne(v),j=!B&&jt(v),J=!B&&!j&&Fi(v);N=v,B||j||J?ne(T)?N=T:Me(T)?N=pn(T):j?(x=!1,N=nl(v,!0)):J?(x=!1,N=tl(v,!0)):N=[]:nr(v)||ai(v)?(N=T,ai(T)?N=Kl(T):(!Oe(T)||_t(T))&&(N=Dl(v))):x=!1}x&&(g.set(v,N),f(N,v,c,m,g),g.delete(v)),la(e,o,N)}function qu(e,r){var o=e.length;if(o)return r+=r<0?o:0,vt(r,o)?e[r]:t}function Wu(e,r,o){r.length?r=Fe(r,function(m){return ne(m)?function(g){return ii(g,m.length===1?m[0]:m)}:m}):r=[mn];var c=-1;r=Fe(r,Dn(z()));var f=Vu(e,function(m,g,T){var v=Fe(r,function(F){return F(m)});return{criteria:v,index:++c,value:m}});return rd(f,function(m,g){return qh(m,g,o)})}function kh(e,r){return Yu(e,r,function(o,c){return Wa(e,c)})}function Yu(e,r,o){for(var c=-1,f=r.length,m={};++c<f;){var g=r[c],T=ii(e,g);o(T,g)&&Xi(m,Vt(g,e),T)}return m}function xh(e){return function(r){return ii(r,e)}}function Ea(e,r,o,c){var f=c?id:yi,m=-1,g=r.length,T=e;for(e===r&&(r=pn(r)),o&&(T=Fe(e,Dn(o)));++m<g;)for(var v=0,F=r[m],N=o?o(F):F;(v=f(T,N,v,c))>-1;)T!==e&&Cr.call(T,v,1),Cr.call(e,v,1);return e}function Qu(e,r){for(var o=e?r.length:0,c=o-1;o--;){var f=r[o];if(o==c||f!==m){var m=f;vt(f)?Cr.call(e,f,1):va(e,f)}}return e}function Ta(e,r){return e+xr(Su()*(r-e+1))}function Rh(e,r,o,c){for(var f=-1,m=Ye(kr((r-e)/(o||1)),0),g=A(m);m--;)g[c?m:++f]=e,e+=o;return g}function Da(e,r){var o="";if(!e||r<1||r>$n)return o;do r%2&&(o+=e),r=xr(r/2),r&&(e+=e);while(r);return o}function se(e,r){return Pa(_l(e,r,mn),e+"")}function Lh(e){return Cu(Ni(e))}function Bh(e,r){var o=Ni(e);return Hr(o,ti(r,0,o.length))}function Xi(e,r,o,c){if(!Oe(e))return e;r=Vt(r,e);for(var f=-1,m=r.length,g=m-1,T=e;T!=null&&++f<m;){var v=lt(r[f]),F=o;if(v==="__proto__"||v==="constructor"||v==="prototype")return e;if(f!=g){var N=T[v];F=c?c(N,v,T):t,F===t&&(F=Oe(N)?N:vt(r[f+1])?[]:{})}Qi(T,v,F),T=T[v]}return e}var zu=Rr?function(e,r){return Rr.set(e,r),e}:mn,Ph=Or?function(e,r){return Or(e,"toString",{configurable:!0,enumerable:!1,value:Qa(r),writable:!0})}:mn;function Uh(e){return Hr(Ni(e))}function Rn(e,r,o){var c=-1,f=e.length;r<0&&(r=-r>f?0:f+r),o=o>f?f:o,o<0&&(o+=f),f=r>o?0:o-r>>>0,r>>>=0;for(var m=A(f);++c<f;)m[c]=e[c+r];return m}function Mh(e,r){var o;return Mt(e,function(c,f,m){return o=r(c,f,m),!o}),!!o}function Vr(e,r,o){var c=0,f=e==null?c:e.length;if(typeof r=="number"&&r===r&&f<=V){for(;c<f;){var m=c+f>>>1,g=e[m];g!==null&&!vn(g)&&(o?g<=r:g<r)?c=m+1:f=m}return f}return Ia(e,r,mn,o)}function Ia(e,r,o,c){var f=0,m=e==null?0:e.length;if(m===0)return 0;r=o(r);for(var g=r!==r,T=r===null,v=vn(r),F=r===t;f<m;){var N=xr((f+m)/2),x=o(e[N]),B=x!==t,j=x===null,J=x===x,re=vn(x);if(g)var H=c||J;else F?H=J&&(c||B):T?H=J&&B&&(c||!j):v?H=J&&B&&!j&&(c||!re):j||re?H=!1:H=c?x<=r:x<r;H?f=N+1:m=N}return en(m,w)}function Ju(e,r){for(var o=-1,c=e.length,f=0,m=[];++o<c;){var g=e[o],T=r?r(g):g;if(!o||!Wn(T,v)){var v=T;m[f++]=g===0?0:g}}return m}function Hu(e){return typeof e=="number"?e:vn(e)?Xt:+e}function In(e){if(typeof e=="string")return e;if(ne(e))return Fe(e,In)+"";if(vn(e))return Fu?Fu.call(e):"";var r=e+"";return r=="0"&&1/e==-at?"-0":r}function $t(e,r,o){var c=-1,f=Dr,m=e.length,g=!0,T=[],v=T;if(o)g=!1,f=Hs;else if(m>=a){var F=r?null:Hh(e);if(F)return vr(F);g=!1,f=Vi,v=new ni}else v=r?[]:T;e:for(;++c<m;){var N=e[c],x=r?r(N):N;if(N=o||N!==0?N:0,g&&x===x){for(var B=v.length;B--;)if(v[B]===x)continue e;r&&v.push(x),T.push(N)}else f(v,x,o)||(v!==T&&v.push(x),T.push(N))}return T}function va(e,r){return r=Vt(r,e),e=Al(e,r),e==null||delete e[lt(Ln(r))]}function Xu(e,r,o,c){return Xi(e,r,o(ii(e,r)),c)}function Gr(e,r,o,c){for(var f=e.length,m=c?f:-1;(c?m--:++m<f)&&r(e[m],m,e););return o?Rn(e,c?0:m,c?m+1:f):Rn(e,c?m+1:0,c?f:m)}function Ku(e,r){var o=e;return o instanceof le&&(o=o.value()),Xs(r,function(c,f){return f.func.apply(f.thisArg,Bt([c],f.args))},o)}function _a(e,r,o){var c=e.length;if(c<2)return c?$t(e[0]):[];for(var f=-1,m=A(c);++f<c;)for(var g=e[f],T=-1;++T<c;)T!=f&&(m[f]=zi(m[f]||g,e[T],r,o));return $t(He(m,1),r,o)}function Zu(e,r,o){for(var c=-1,f=e.length,m=r.length,g={};++c<f;){var T=c<m?r[c]:t;o(g,e[c],T)}return g}function Aa(e){return Me(e)?e:[]}function ba(e){return typeof e=="function"?e:mn}function Vt(e,r){return ne(e)?e:Ra(e,r)?[e]:Fl(ye(e))}var $h=se;function Gt(e,r,o){var c=e.length;return o=o===t?c:o,!r&&o>=c?e:Rn(e,r,o)}var el=Sd||function(e){return Je.clearTimeout(e)};function nl(e,r){if(r)return e.slice();var o=e.length,c=vu?vu(o):new e.constructor(o);return e.copy(c),c}function wa(e){var r=new e.constructor(e.byteLength);return new Fr(r).set(new Fr(e)),r}function Vh(e,r){var o=r?wa(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)}function Gh(e){var r=new e.constructor(e.source,Uo.exec(e));return r.lastIndex=e.lastIndex,r}function jh(e){return Yi?_e(Yi.call(e)):{}}function tl(e,r){var o=r?wa(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}function il(e,r){if(e!==r){var o=e!==t,c=e===null,f=e===e,m=vn(e),g=r!==t,T=r===null,v=r===r,F=vn(r);if(!T&&!F&&!m&&e>r||m&&g&&v&&!T&&!F||c&&g&&v||!o&&v||!f)return 1;if(!c&&!m&&!F&&e<r||F&&o&&f&&!c&&!m||T&&o&&f||!g&&f||!v)return-1}return 0}function qh(e,r,o){for(var c=-1,f=e.criteria,m=r.criteria,g=f.length,T=o.length;++c<g;){var v=il(f[c],m[c]);if(v){if(c>=T)return v;var F=o[c];return v*(F=="desc"?-1:1)}}return e.index-r.index}function rl(e,r,o,c){for(var f=-1,m=e.length,g=o.length,T=-1,v=r.length,F=Ye(m-g,0),N=A(v+F),x=!c;++T<v;)N[T]=r[T];for(;++f<g;)(x||f<m)&&(N[o[f]]=e[f]);for(;F--;)N[T++]=e[f++];return N}function sl(e,r,o,c){for(var f=-1,m=e.length,g=-1,T=o.length,v=-1,F=r.length,N=Ye(m-T,0),x=A(N+F),B=!c;++f<N;)x[f]=e[f];for(var j=f;++v<F;)x[j+v]=r[v];for(;++g<T;)(B||f<m)&&(x[j+o[g]]=e[f++]);return x}function pn(e,r){var o=-1,c=e.length;for(r||(r=A(c));++o<c;)r[o]=e[o];return r}function ut(e,r,o,c){var f=!o;o||(o={});for(var m=-1,g=r.length;++m<g;){var T=r[m],v=c?c(o[T],e[T],T,o,e):t;v===t&&(v=e[T]),f?Tt(o,T,v):Qi(o,T,v)}return o}function Wh(e,r){return ut(e,xa(e),r)}function Yh(e,r){return ut(e,El(e),r)}function jr(e,r){return function(o,c){var f=ne(o)?Xp:hh,m=r?r():{};return f(o,e,z(c,2),m)}}function bi(e){return se(function(r,o){var c=-1,f=o.length,m=f>1?o[f-1]:t,g=f>2?o[2]:t;for(m=e.length>3&&typeof m=="function"?(f--,m):t,g&&on(o[0],o[1],g)&&(m=f<3?t:m,f=1),r=_e(r);++c<f;){var T=o[c];T&&e(r,T,c,m)}return r})}function al(e,r){return function(o,c){if(o==null)return o;if(!dn(o))return e(o,c);for(var f=o.length,m=r?f:-1,g=_e(o);(r?m--:++m<f)&&c(g[m],m,g)!==!1;);return o}}function ol(e){return function(r,o,c){for(var f=-1,m=_e(r),g=c(r),T=g.length;T--;){var v=g[e?T:++f];if(o(m[v],v,m)===!1)break}return r}}function Qh(e,r,o){var c=r&X,f=Ki(e);function m(){var g=this&&this!==Je&&this instanceof m?f:e;return g.apply(c?o:this,arguments)}return m}function ul(e){return function(r){r=ye(r);var o=Ei(r)?jn(r):t,c=o?o[0]:r.charAt(0),f=o?Gt(o,1).join(""):r.slice(1);return c[e]()+f}}function wi(e){return function(r){return Xs(ac(sc(r).replace(Pp,"")),e,"")}}function Ki(e){return function(){var r=arguments;switch(r.length){case 0:return new e;case 1:return new e(r[0]);case 2:return new e(r[0],r[1]);case 3:return new e(r[0],r[1],r[2]);case 4:return new e(r[0],r[1],r[2],r[3]);case 5:return new e(r[0],r[1],r[2],r[3],r[4]);case 6:return new e(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new e(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var o=Ai(e.prototype),c=e.apply(o,r);return Oe(c)?c:o}}function zh(e,r,o){var c=Ki(e);function f(){for(var m=arguments.length,g=A(m),T=m,v=Si(f);T--;)g[T]=arguments[T];var F=m<3&&g[0]!==v&&g[m-1]!==v?[]:Pt(g,v);if(m-=F.length,m<o)return dl(e,r,qr,f.placeholder,t,g,F,t,t,o-m);var N=this&&this!==Je&&this instanceof f?c:e;return Tn(N,this,g)}return f}function ll(e){return function(r,o,c){var f=_e(r);if(!dn(r)){var m=z(o,3);r=Qe(r),o=function(T){return m(f[T],T,f)}}var g=e(r,o,c);return g>-1?f[m?r[g]:g]:t}}function cl(e){return It(function(r){var o=r.length,c=o,f=kn.prototype.thru;for(e&&r.reverse();c--;){var m=r[c];if(typeof m!="function")throw new On(l);if(f&&!g&&zr(m)=="wrapper")var g=new kn([],!0)}for(c=g?c:o;++c<o;){m=r[c];var T=zr(m),v=T=="wrapper"?Oa(m):t;v&&La(v[0])&&v[1]==(Ke|be|Re|mt)&&!v[4].length&&v[9]==1?g=g[zr(v[0])].apply(g,v[3]):g=m.length==1&&La(m)?g[T]():g.thru(m)}return function(){var F=arguments,N=F[0];if(g&&F.length==1&&ne(N))return g.plant(N).value();for(var x=0,B=o?r[x].apply(this,F):N;++x<o;)B=r[x].call(this,B);return B}})}function qr(e,r,o,c,f,m,g,T,v,F){var N=r&Ke,x=r&X,B=r&he,j=r&(be|Ce),J=r&O,re=B?t:Ki(e);function H(){for(var ae=arguments.length,fe=A(ae),_n=ae;_n--;)fe[_n]=arguments[_n];if(j)var un=Si(H),An=ad(fe,un);if(c&&(fe=rl(fe,c,f,j)),m&&(fe=sl(fe,m,g,j)),ae-=An,j&&ae<F){var $e=Pt(fe,un);return dl(e,r,qr,H.placeholder,o,fe,$e,T,v,F-ae)}var Yn=x?o:this,bt=B?Yn[e]:e;return ae=fe.length,T?fe=hm(fe,T):J&&ae>1&&fe.reverse(),N&&v<ae&&(fe.length=v),this&&this!==Je&&this instanceof H&&(bt=re||Ki(bt)),bt.apply(Yn,fe)}return H}function fl(e,r){return function(o,c){return vh(o,e,r(c),{})}}function Wr(e,r){return function(o,c){var f;if(o===t&&c===t)return r;if(o!==t&&(f=o),c!==t){if(f===t)return c;typeof o=="string"||typeof c=="string"?(o=In(o),c=In(c)):(o=Hu(o),c=Hu(c)),f=e(o,c)}return f}}function Sa(e){return It(function(r){return r=Fe(r,Dn(z())),se(function(o){var c=this;return e(r,function(f){return Tn(f,c,o)})})})}function Yr(e,r){r=r===t?" ":In(r);var o=r.length;if(o<2)return o?Da(r,e):r;var c=Da(r,kr(e/Ti(r)));return Ei(r)?Gt(jn(c),0,e).join(""):c.slice(0,e)}function Jh(e,r,o,c){var f=r&X,m=Ki(e);function g(){for(var T=-1,v=arguments.length,F=-1,N=c.length,x=A(N+v),B=this&&this!==Je&&this instanceof g?m:e;++F<N;)x[F]=c[F];for(;v--;)x[F++]=arguments[++T];return Tn(B,f?o:this,x)}return g}function pl(e){return function(r,o,c){return c&&typeof c!="number"&&on(r,o,c)&&(o=c=t),r=At(r),o===t?(o=r,r=0):o=At(o),c=c===t?r<o?1:-1:At(c),Rh(r,o,c,e)}}function Qr(e){return function(r,o){return typeof r=="string"&&typeof o=="string"||(r=Bn(r),o=Bn(o)),e(r,o)}}function dl(e,r,o,c,f,m,g,T,v,F){var N=r&be,x=N?g:t,B=N?t:g,j=N?m:t,J=N?t:m;r|=N?Re:rn,r&=~(N?rn:Re),r&Ge||(r&=~(X|he));var re=[e,r,f,j,x,J,B,T,v,F],H=o.apply(t,re);return La(e)&&bl(H,re),H.placeholder=c,wl(H,e,r)}function Fa(e){var r=We[e];return function(o,c){if(o=Bn(o),c=c==null?0:en(ie(c),292),c&&wu(o)){var f=(ye(o)+"e").split("e"),m=r(f[0]+"e"+(+f[1]+c));return f=(ye(m)+"e").split("e"),+(f[0]+"e"+(+f[1]-c))}return r(o)}}var Hh=vi&&1/vr(new vi([,-0]))[1]==at?function(e){return new vi(e)}:Ha;function hl(e){return function(r){var o=nn(r);return o==Vn?ra(r):o==Gn?dd(r):sd(r,e(r))}}function Dt(e,r,o,c,f,m,g,T){var v=r&he;if(!v&&typeof e!="function")throw new On(l);var F=c?c.length:0;if(F||(r&=~(Re|rn),c=f=t),g=g===t?g:Ye(ie(g),0),T=T===t?T:ie(T),F-=f?f.length:0,r&rn){var N=c,x=f;c=f=t}var B=v?t:Oa(e),j=[e,r,o,c,f,N,x,m,g,T];if(B&&fm(j,B),e=j[0],r=j[1],o=j[2],c=j[3],f=j[4],T=j[9]=j[9]===t?v?0:e.length:Ye(j[9]-F,0),!T&&r&(be|Ce)&&(r&=~(be|Ce)),!r||r==X)var J=Qh(e,r,o);else r==be||r==Ce?J=zh(e,r,T):(r==Re||r==(X|Re))&&!f.length?J=Jh(e,r,o,c):J=qr.apply(t,j);var re=B?zu:bl;return wl(re(J,j),e,r)}function ml(e,r,o,c){return e===t||Wn(e,Ii[o])&&!Te.call(c,o)?r:e}function gl(e,r,o,c,f,m){return Oe(e)&&Oe(r)&&(m.set(r,e),$r(e,r,t,gl,m),m.delete(r)),e}function Xh(e){return nr(e)?t:e}function yl(e,r,o,c,f,m){var g=o&R,T=e.length,v=r.length;if(T!=v&&!(g&&v>T))return!1;var F=m.get(e),N=m.get(r);if(F&&N)return F==r&&N==e;var x=-1,B=!0,j=o&L?new ni:t;for(m.set(e,r),m.set(r,e);++x<T;){var J=e[x],re=r[x];if(c)var H=g?c(re,J,x,r,e,m):c(J,re,x,e,r,m);if(H!==t){if(H)continue;B=!1;break}if(j){if(!Ks(r,function(ae,fe){if(!Vi(j,fe)&&(J===ae||f(J,ae,o,c,m)))return j.push(fe)})){B=!1;break}}else if(!(J===re||f(J,re,o,c,m))){B=!1;break}}return m.delete(e),m.delete(r),B}function Kh(e,r,o,c,f,m,g){switch(o){case mi:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case $i:return!(e.byteLength!=r.byteLength||!m(new Fr(e),new Fr(r)));case ge:case Fn:case Bi:return Wn(+e,+r);case Rt:return e.name==r.name&&e.message==r.message;case Pi:case Ui:return e==r+"";case Vn:var T=ra;case Gn:var v=c&R;if(T||(T=vr),e.size!=r.size&&!v)return!1;var F=g.get(e);if(F)return F==r;c|=L,g.set(e,r);var N=yl(T(e),T(r),c,f,m,g);return g.delete(e),N;case gr:if(Yi)return Yi.call(e)==Yi.call(r)}return!1}function Zh(e,r,o,c,f,m){var g=o&R,T=Na(e),v=T.length,F=Na(r),N=F.length;if(v!=N&&!g)return!1;for(var x=v;x--;){var B=T[x];if(!(g?B in r:Te.call(r,B)))return!1}var j=m.get(e),J=m.get(r);if(j&&J)return j==r&&J==e;var re=!0;m.set(e,r),m.set(r,e);for(var H=g;++x<v;){B=T[x];var ae=e[B],fe=r[B];if(c)var _n=g?c(fe,ae,B,r,e,m):c(ae,fe,B,e,r,m);if(!(_n===t?ae===fe||f(ae,fe,o,c,m):_n)){re=!1;break}H||(H=B=="constructor")}if(re&&!H){var un=e.constructor,An=r.constructor;un!=An&&"constructor"in e&&"constructor"in r&&!(typeof un=="function"&&un instanceof un&&typeof An=="function"&&An instanceof An)&&(re=!1)}return m.delete(e),m.delete(r),re}function It(e){return Pa(_l(e,t,kl),e+"")}function Na(e){return Pu(e,Qe,xa)}function Ca(e){return Pu(e,hn,El)}var Oa=Rr?function(e){return Rr.get(e)}:Ha;function zr(e){for(var r=e.name+"",o=_i[r],c=Te.call(_i,r)?o.length:0;c--;){var f=o[c],m=f.func;if(m==null||m==e)return f.name}return r}function Si(e){var r=Te.call(h,"placeholder")?h:e;return r.placeholder}function z(){var e=h.iteratee||za;return e=e===za?$u:e,arguments.length?e(arguments[0],arguments[1]):e}function Jr(e,r){var o=e.__data__;return om(r)?o[typeof r=="string"?"string":"hash"]:o.map}function ka(e){for(var r=Qe(e),o=r.length;o--;){var c=r[o],f=e[c];r[o]=[c,f,Il(f)]}return r}function ri(e,r){var o=cd(e,r);return Mu(o)?o:t}function em(e){var r=Te.call(e,Zt),o=e[Zt];try{e[Zt]=t;var c=!0}catch{}var f=wr.call(e);return c&&(r?e[Zt]=o:delete e[Zt]),f}var xa=aa?function(e){return e==null?[]:(e=_e(e),Lt(aa(e),function(r){return Au.call(e,r)}))}:Xa,El=aa?function(e){for(var r=[];e;)Bt(r,xa(e)),e=Nr(e);return r}:Xa,nn=an;(oa&&nn(new oa(new ArrayBuffer(1)))!=mi||ji&&nn(new ji)!=Vn||ua&&nn(ua.resolve())!=Ro||vi&&nn(new vi)!=Gn||qi&&nn(new qi)!=Mi)&&(nn=function(e){var r=an(e),o=r==gt?e.constructor:t,c=o?si(o):"";if(c)switch(c){case Bd:return mi;case Pd:return Vn;case Ud:return Ro;case Md:return Gn;case $d:return Mi}return r});function nm(e,r,o){for(var c=-1,f=o.length;++c<f;){var m=o[c],g=m.size;switch(m.type){case"drop":e+=g;break;case"dropRight":r-=g;break;case"take":r=en(r,e+g);break;case"takeRight":e=Ye(e,r-g);break}}return{start:e,end:r}}function tm(e){var r=e.match(up);return r?r[1].split(lp):[]}function Tl(e,r,o){r=Vt(r,e);for(var c=-1,f=r.length,m=!1;++c<f;){var g=lt(r[c]);if(!(m=e!=null&&o(e,g)))break;e=e[g]}return m||++c!=f?m:(f=e==null?0:e.length,!!f&&ts(f)&&vt(g,f)&&(ne(e)||ai(e)))}function im(e){var r=e.length,o=new e.constructor(r);return r&&typeof e[0]=="string"&&Te.call(e,"index")&&(o.index=e.index,o.input=e.input),o}function Dl(e){return typeof e.constructor=="function"&&!Zi(e)?Ai(Nr(e)):{}}function rm(e,r,o){var c=e.constructor;switch(r){case $i:return wa(e);case ge:case Fn:return new c(+e);case mi:return Vh(e,o);case ks:case xs:case Rs:case Ls:case Bs:case Ps:case Us:case Ms:case $s:return tl(e,o);case Vn:return new c;case Bi:case Ui:return new c(e);case Pi:return Gh(e);case Gn:return new c;case gr:return jh(e)}}function sm(e,r){var o=r.length;if(!o)return e;var c=o-1;return r[c]=(o>1?"& ":"")+r[c],r=r.join(o>2?", ":" "),e.replace(op,`{
/* [wrapped with `+r+`] */
`)}function am(e){return ne(e)||ai(e)||!!(bu&&e&&e[bu])}function vt(e,r){var o=typeof e;return r=r??$n,!!r&&(o=="number"||o!="symbol"&&Ep.test(e))&&e>-1&&e%1==0&&e<r}function on(e,r,o){if(!Oe(o))return!1;var c=typeof r;return(c=="number"?dn(o)&&vt(r,o.length):c=="string"&&r in o)?Wn(o[r],e):!1}function Ra(e,r){if(ne(e))return!1;var o=typeof e;return o=="number"||o=="symbol"||o=="boolean"||e==null||vn(e)?!0:ip.test(e)||!tp.test(e)||r!=null&&e in _e(r)}function om(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function La(e){var r=zr(e),o=h[r];if(typeof o!="function"||!(r in le.prototype))return!1;if(e===o)return!0;var c=Oa(o);return!!c&&e===c[0]}function um(e){return!!Iu&&Iu in e}var lm=Ar?_t:Ka;function Zi(e){var r=e&&e.constructor,o=typeof r=="function"&&r.prototype||Ii;return e===o}function Il(e){return e===e&&!Oe(e)}function vl(e,r){return function(o){return o==null?!1:o[e]===r&&(r!==t||e in _e(o))}}function cm(e){var r=es(e,function(c){return o.size===y&&o.clear(),c}),o=r.cache;return r}function fm(e,r){var o=e[1],c=r[1],f=o|c,m=f<(X|he|Ke),g=c==Ke&&o==be||c==Ke&&o==mt&&e[7].length<=r[8]||c==(Ke|mt)&&r[7].length<=r[8]&&o==be;if(!(m||g))return e;c&X&&(e[2]=r[2],f|=o&X?0:Ge);var T=r[3];if(T){var v=e[3];e[3]=v?rl(v,T,r[4]):T,e[4]=v?Pt(e[3],E):r[4]}return T=r[5],T&&(v=e[5],e[5]=v?sl(v,T,r[6]):T,e[6]=v?Pt(e[5],E):r[6]),T=r[7],T&&(e[7]=T),c&Ke&&(e[8]=e[8]==null?r[8]:en(e[8],r[8])),e[9]==null&&(e[9]=r[9]),e[0]=r[0],e[1]=f,e}function pm(e){var r=[];if(e!=null)for(var o in _e(e))r.push(o);return r}function dm(e){return wr.call(e)}function _l(e,r,o){return r=Ye(r===t?e.length-1:r,0),function(){for(var c=arguments,f=-1,m=Ye(c.length-r,0),g=A(m);++f<m;)g[f]=c[r+f];f=-1;for(var T=A(r+1);++f<r;)T[f]=c[f];return T[r]=o(g),Tn(e,this,T)}}function Al(e,r){return r.length<2?e:ii(e,Rn(r,0,-1))}function hm(e,r){for(var o=e.length,c=en(r.length,o),f=pn(e);c--;){var m=r[c];e[c]=vt(m,o)?f[m]:t}return e}function Ba(e,r){if(!(r==="constructor"&&typeof e[r]=="function")&&r!="__proto__")return e[r]}var bl=Sl(zu),er=Nd||function(e,r){return Je.setTimeout(e,r)},Pa=Sl(Ph);function wl(e,r,o){var c=r+"";return Pa(e,sm(c,mm(tm(c),o)))}function Sl(e){var r=0,o=0;return function(){var c=xd(),f=Ht-(c-o);if(o=c,f>0){if(++r>=xt)return arguments[0]}else r=0;return e.apply(t,arguments)}}function Hr(e,r){var o=-1,c=e.length,f=c-1;for(r=r===t?c:r;++o<r;){var m=Ta(o,f),g=e[m];e[m]=e[o],e[o]=g}return e.length=r,e}var Fl=cm(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(rp,function(o,c,f,m){r.push(f?m.replace(pp,"$1"):c||o)}),r});function lt(e){if(typeof e=="string"||vn(e))return e;var r=e+"";return r=="0"&&1/e==-at?"-0":r}function si(e){if(e!=null){try{return br.call(e)}catch{}try{return e+""}catch{}}return""}function mm(e,r){return Cn(P,function(o){var c="_."+o[0];r&o[1]&&!Dr(e,c)&&e.push(c)}),e.sort()}function Nl(e){if(e instanceof le)return e.clone();var r=new kn(e.__wrapped__,e.__chain__);return r.__actions__=pn(e.__actions__),r.__index__=e.__index__,r.__values__=e.__values__,r}function gm(e,r,o){(o?on(e,r,o):r===t)?r=1:r=Ye(ie(r),0);var c=e==null?0:e.length;if(!c||r<1)return[];for(var f=0,m=0,g=A(kr(c/r));f<c;)g[m++]=Rn(e,f,f+=r);return g}function ym(e){for(var r=-1,o=e==null?0:e.length,c=0,f=[];++r<o;){var m=e[r];m&&(f[c++]=m)}return f}function Em(){var e=arguments.length;if(!e)return[];for(var r=A(e-1),o=arguments[0],c=e;c--;)r[c-1]=arguments[c];return Bt(ne(o)?pn(o):[o],He(r,1))}var Tm=se(function(e,r){return Me(e)?zi(e,He(r,1,Me,!0)):[]}),Dm=se(function(e,r){var o=Ln(r);return Me(o)&&(o=t),Me(e)?zi(e,He(r,1,Me,!0),z(o,2)):[]}),Im=se(function(e,r){var o=Ln(r);return Me(o)&&(o=t),Me(e)?zi(e,He(r,1,Me,!0),t,o):[]});function vm(e,r,o){var c=e==null?0:e.length;return c?(r=o||r===t?1:ie(r),Rn(e,r<0?0:r,c)):[]}function _m(e,r,o){var c=e==null?0:e.length;return c?(r=o||r===t?1:ie(r),r=c-r,Rn(e,0,r<0?0:r)):[]}function Am(e,r){return e&&e.length?Gr(e,z(r,3),!0,!0):[]}function bm(e,r){return e&&e.length?Gr(e,z(r,3),!0):[]}function wm(e,r,o,c){var f=e==null?0:e.length;return f?(o&&typeof o!="number"&&on(e,r,o)&&(o=0,c=f),Eh(e,r,o,c)):[]}function Cl(e,r,o){var c=e==null?0:e.length;if(!c)return-1;var f=o==null?0:ie(o);return f<0&&(f=Ye(c+f,0)),Ir(e,z(r,3),f)}function Ol(e,r,o){var c=e==null?0:e.length;if(!c)return-1;var f=c-1;return o!==t&&(f=ie(o),f=o<0?Ye(c+f,0):en(f,c-1)),Ir(e,z(r,3),f,!0)}function kl(e){var r=e==null?0:e.length;return r?He(e,1):[]}function Sm(e){var r=e==null?0:e.length;return r?He(e,at):[]}function Fm(e,r){var o=e==null?0:e.length;return o?(r=r===t?1:ie(r),He(e,r)):[]}function Nm(e){for(var r=-1,o=e==null?0:e.length,c={};++r<o;){var f=e[r];c[f[0]]=f[1]}return c}function xl(e){return e&&e.length?e[0]:t}function Cm(e,r,o){var c=e==null?0:e.length;if(!c)return-1;var f=o==null?0:ie(o);return f<0&&(f=Ye(c+f,0)),yi(e,r,f)}function Om(e){var r=e==null?0:e.length;return r?Rn(e,0,-1):[]}var km=se(function(e){var r=Fe(e,Aa);return r.length&&r[0]===e[0]?ha(r):[]}),xm=se(function(e){var r=Ln(e),o=Fe(e,Aa);return r===Ln(o)?r=t:o.pop(),o.length&&o[0]===e[0]?ha(o,z(r,2)):[]}),Rm=se(function(e){var r=Ln(e),o=Fe(e,Aa);return r=typeof r=="function"?r:t,r&&o.pop(),o.length&&o[0]===e[0]?ha(o,t,r):[]});function Lm(e,r){return e==null?"":Od.call(e,r)}function Ln(e){var r=e==null?0:e.length;return r?e[r-1]:t}function Bm(e,r,o){var c=e==null?0:e.length;if(!c)return-1;var f=c;return o!==t&&(f=ie(o),f=f<0?Ye(c+f,0):en(f,c-1)),r===r?md(e,r,f):Ir(e,du,f,!0)}function Pm(e,r){return e&&e.length?qu(e,ie(r)):t}var Um=se(Rl);function Rl(e,r){return e&&e.length&&r&&r.length?Ea(e,r):e}function Mm(e,r,o){return e&&e.length&&r&&r.length?Ea(e,r,z(o,2)):e}function $m(e,r,o){return e&&e.length&&r&&r.length?Ea(e,r,t,o):e}var Vm=It(function(e,r){var o=e==null?0:e.length,c=ca(e,r);return Qu(e,Fe(r,function(f){return vt(f,o)?+f:f}).sort(il)),c});function Gm(e,r){var o=[];if(!(e&&e.length))return o;var c=-1,f=[],m=e.length;for(r=z(r,3);++c<m;){var g=e[c];r(g,c,e)&&(o.push(g),f.push(c))}return Qu(e,f),o}function Ua(e){return e==null?e:Ld.call(e)}function jm(e,r,o){var c=e==null?0:e.length;return c?(o&&typeof o!="number"&&on(e,r,o)?(r=0,o=c):(r=r==null?0:ie(r),o=o===t?c:ie(o)),Rn(e,r,o)):[]}function qm(e,r){return Vr(e,r)}function Wm(e,r,o){return Ia(e,r,z(o,2))}function Ym(e,r){var o=e==null?0:e.length;if(o){var c=Vr(e,r);if(c<o&&Wn(e[c],r))return c}return-1}function Qm(e,r){return Vr(e,r,!0)}function zm(e,r,o){return Ia(e,r,z(o,2),!0)}function Jm(e,r){var o=e==null?0:e.length;if(o){var c=Vr(e,r,!0)-1;if(Wn(e[c],r))return c}return-1}function Hm(e){return e&&e.length?Ju(e):[]}function Xm(e,r){return e&&e.length?Ju(e,z(r,2)):[]}function Km(e){var r=e==null?0:e.length;return r?Rn(e,1,r):[]}function Zm(e,r,o){return e&&e.length?(r=o||r===t?1:ie(r),Rn(e,0,r<0?0:r)):[]}function eg(e,r,o){var c=e==null?0:e.length;return c?(r=o||r===t?1:ie(r),r=c-r,Rn(e,r<0?0:r,c)):[]}function ng(e,r){return e&&e.length?Gr(e,z(r,3),!1,!0):[]}function tg(e,r){return e&&e.length?Gr(e,z(r,3)):[]}var ig=se(function(e){return $t(He(e,1,Me,!0))}),rg=se(function(e){var r=Ln(e);return Me(r)&&(r=t),$t(He(e,1,Me,!0),z(r,2))}),sg=se(function(e){var r=Ln(e);return r=typeof r=="function"?r:t,$t(He(e,1,Me,!0),t,r)});function ag(e){return e&&e.length?$t(e):[]}function og(e,r){return e&&e.length?$t(e,z(r,2)):[]}function ug(e,r){return r=typeof r=="function"?r:t,e&&e.length?$t(e,t,r):[]}function Ma(e){if(!(e&&e.length))return[];var r=0;return e=Lt(e,function(o){if(Me(o))return r=Ye(o.length,r),!0}),ta(r,function(o){return Fe(e,Zs(o))})}function Ll(e,r){if(!(e&&e.length))return[];var o=Ma(e);return r==null?o:Fe(o,function(c){return Tn(r,t,c)})}var lg=se(function(e,r){return Me(e)?zi(e,r):[]}),cg=se(function(e){return _a(Lt(e,Me))}),fg=se(function(e){var r=Ln(e);return Me(r)&&(r=t),_a(Lt(e,Me),z(r,2))}),pg=se(function(e){var r=Ln(e);return r=typeof r=="function"?r:t,_a(Lt(e,Me),t,r)}),dg=se(Ma);function hg(e,r){return Zu(e||[],r||[],Qi)}function mg(e,r){return Zu(e||[],r||[],Xi)}var gg=se(function(e){var r=e.length,o=r>1?e[r-1]:t;return o=typeof o=="function"?(e.pop(),o):t,Ll(e,o)});function Bl(e){var r=h(e);return r.__chain__=!0,r}function yg(e,r){return r(e),e}function Xr(e,r){return r(e)}var Eg=It(function(e){var r=e.length,o=r?e[0]:0,c=this.__wrapped__,f=function(m){return ca(m,e)};return r>1||this.__actions__.length||!(c instanceof le)||!vt(o)?this.thru(f):(c=c.slice(o,+o+(r?1:0)),c.__actions__.push({func:Xr,args:[f],thisArg:t}),new kn(c,this.__chain__).thru(function(m){return r&&!m.length&&m.push(t),m}))});function Tg(){return Bl(this)}function Dg(){return new kn(this.value(),this.__chain__)}function Ig(){this.__values__===t&&(this.__values__=Hl(this.value()));var e=this.__index__>=this.__values__.length,r=e?t:this.__values__[this.__index__++];return{done:e,value:r}}function vg(){return this}function _g(e){for(var r,o=this;o instanceof Br;){var c=Nl(o);c.__index__=0,c.__values__=t,r?f.__wrapped__=c:r=c;var f=c;o=o.__wrapped__}return f.__wrapped__=e,r}function Ag(){var e=this.__wrapped__;if(e instanceof le){var r=e;return this.__actions__.length&&(r=new le(this)),r=r.reverse(),r.__actions__.push({func:Xr,args:[Ua],thisArg:t}),new kn(r,this.__chain__)}return this.thru(Ua)}function bg(){return Ku(this.__wrapped__,this.__actions__)}var wg=jr(function(e,r,o){Te.call(e,o)?++e[o]:Tt(e,o,1)});function Sg(e,r,o){var c=ne(e)?fu:yh;return o&&on(e,r,o)&&(r=t),c(e,z(r,3))}function Fg(e,r){var o=ne(e)?Lt:Lu;return o(e,z(r,3))}var Ng=ll(Cl),Cg=ll(Ol);function Og(e,r){return He(Kr(e,r),1)}function kg(e,r){return He(Kr(e,r),at)}function xg(e,r,o){return o=o===t?1:ie(o),He(Kr(e,r),o)}function Pl(e,r){var o=ne(e)?Cn:Mt;return o(e,z(r,3))}function Ul(e,r){var o=ne(e)?Kp:Ru;return o(e,z(r,3))}var Rg=jr(function(e,r,o){Te.call(e,o)?e[o].push(r):Tt(e,o,[r])});function Lg(e,r,o,c){e=dn(e)?e:Ni(e),o=o&&!c?ie(o):0;var f=e.length;return o<0&&(o=Ye(f+o,0)),is(e)?o<=f&&e.indexOf(r,o)>-1:!!f&&yi(e,r,o)>-1}var Bg=se(function(e,r,o){var c=-1,f=typeof r=="function",m=dn(e)?A(e.length):[];return Mt(e,function(g){m[++c]=f?Tn(r,g,o):Ji(g,r,o)}),m}),Pg=jr(function(e,r,o){Tt(e,o,r)});function Kr(e,r){var o=ne(e)?Fe:Vu;return o(e,z(r,3))}function Ug(e,r,o,c){return e==null?[]:(ne(r)||(r=r==null?[]:[r]),o=c?t:o,ne(o)||(o=o==null?[]:[o]),Wu(e,r,o))}var Mg=jr(function(e,r,o){e[o?0:1].push(r)},function(){return[[],[]]});function $g(e,r,o){var c=ne(e)?Xs:mu,f=arguments.length<3;return c(e,z(r,4),o,f,Mt)}function Vg(e,r,o){var c=ne(e)?Zp:mu,f=arguments.length<3;return c(e,z(r,4),o,f,Ru)}function Gg(e,r){var o=ne(e)?Lt:Lu;return o(e,ns(z(r,3)))}function jg(e){var r=ne(e)?Cu:Lh;return r(e)}function qg(e,r,o){(o?on(e,r,o):r===t)?r=1:r=ie(r);var c=ne(e)?ph:Bh;return c(e,r)}function Wg(e){var r=ne(e)?dh:Uh;return r(e)}function Yg(e){if(e==null)return 0;if(dn(e))return is(e)?Ti(e):e.length;var r=nn(e);return r==Vn||r==Gn?e.size:ga(e).length}function Qg(e,r,o){var c=ne(e)?Ks:Mh;return o&&on(e,r,o)&&(r=t),c(e,z(r,3))}var zg=se(function(e,r){if(e==null)return[];var o=r.length;return o>1&&on(e,r[0],r[1])?r=[]:o>2&&on(r[0],r[1],r[2])&&(r=[r[0]]),Wu(e,He(r,1),[])}),Zr=Fd||function(){return Je.Date.now()};function Jg(e,r){if(typeof r!="function")throw new On(l);return e=ie(e),function(){if(--e<1)return r.apply(this,arguments)}}function Ml(e,r,o){return r=o?t:r,r=e&&r==null?e.length:r,Dt(e,Ke,t,t,t,t,r)}function $l(e,r){var o;if(typeof r!="function")throw new On(l);return e=ie(e),function(){return--e>0&&(o=r.apply(this,arguments)),e<=1&&(r=t),o}}var $a=se(function(e,r,o){var c=X;if(o.length){var f=Pt(o,Si($a));c|=Re}return Dt(e,c,r,o,f)}),Vl=se(function(e,r,o){var c=X|he;if(o.length){var f=Pt(o,Si(Vl));c|=Re}return Dt(r,c,e,o,f)});function Gl(e,r,o){r=o?t:r;var c=Dt(e,be,t,t,t,t,t,r);return c.placeholder=Gl.placeholder,c}function jl(e,r,o){r=o?t:r;var c=Dt(e,Ce,t,t,t,t,t,r);return c.placeholder=jl.placeholder,c}function ql(e,r,o){var c,f,m,g,T,v,F=0,N=!1,x=!1,B=!0;if(typeof e!="function")throw new On(l);r=Bn(r)||0,Oe(o)&&(N=!!o.leading,x="maxWait"in o,m=x?Ye(Bn(o.maxWait)||0,r):m,B="trailing"in o?!!o.trailing:B);function j($e){var Yn=c,bt=f;return c=f=t,F=$e,g=e.apply(bt,Yn),g}function J($e){return F=$e,T=er(ae,r),N?j($e):g}function re($e){var Yn=$e-v,bt=$e-F,lc=r-Yn;return x?en(lc,m-bt):lc}function H($e){var Yn=$e-v,bt=$e-F;return v===t||Yn>=r||Yn<0||x&&bt>=m}function ae(){var $e=Zr();if(H($e))return fe($e);T=er(ae,re($e))}function fe($e){return T=t,B&&c?j($e):(c=f=t,g)}function _n(){T!==t&&el(T),F=0,c=v=f=T=t}function un(){return T===t?g:fe(Zr())}function An(){var $e=Zr(),Yn=H($e);if(c=arguments,f=this,v=$e,Yn){if(T===t)return J(v);if(x)return el(T),T=er(ae,r),j(v)}return T===t&&(T=er(ae,r)),g}return An.cancel=_n,An.flush=un,An}var Hg=se(function(e,r){return xu(e,1,r)}),Xg=se(function(e,r,o){return xu(e,Bn(r)||0,o)});function Kg(e){return Dt(e,O)}function es(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new On(l);var o=function(){var c=arguments,f=r?r.apply(this,c):c[0],m=o.cache;if(m.has(f))return m.get(f);var g=e.apply(this,c);return o.cache=m.set(f,g)||m,g};return o.cache=new(es.Cache||Et),o}es.Cache=Et;function ns(e){if(typeof e!="function")throw new On(l);return function(){var r=arguments;switch(r.length){case 0:return!e.call(this);case 1:return!e.call(this,r[0]);case 2:return!e.call(this,r[0],r[1]);case 3:return!e.call(this,r[0],r[1],r[2])}return!e.apply(this,r)}}function Zg(e){return $l(2,e)}var e0=$h(function(e,r){r=r.length==1&&ne(r[0])?Fe(r[0],Dn(z())):Fe(He(r,1),Dn(z()));var o=r.length;return se(function(c){for(var f=-1,m=en(c.length,o);++f<m;)c[f]=r[f].call(this,c[f]);return Tn(e,this,c)})}),Va=se(function(e,r){var o=Pt(r,Si(Va));return Dt(e,Re,t,r,o)}),Wl=se(function(e,r){var o=Pt(r,Si(Wl));return Dt(e,rn,t,r,o)}),n0=It(function(e,r){return Dt(e,mt,t,t,t,r)});function t0(e,r){if(typeof e!="function")throw new On(l);return r=r===t?r:ie(r),se(e,r)}function i0(e,r){if(typeof e!="function")throw new On(l);return r=r==null?0:Ye(ie(r),0),se(function(o){var c=o[r],f=Gt(o,0,r);return c&&Bt(f,c),Tn(e,this,f)})}function r0(e,r,o){var c=!0,f=!0;if(typeof e!="function")throw new On(l);return Oe(o)&&(c="leading"in o?!!o.leading:c,f="trailing"in o?!!o.trailing:f),ql(e,r,{leading:c,maxWait:r,trailing:f})}function s0(e){return Ml(e,1)}function a0(e,r){return Va(ba(r),e)}function o0(){if(!arguments.length)return[];var e=arguments[0];return ne(e)?e:[e]}function u0(e){return xn(e,k)}function l0(e,r){return r=typeof r=="function"?r:t,xn(e,k,r)}function c0(e){return xn(e,I|k)}function f0(e,r){return r=typeof r=="function"?r:t,xn(e,I|k,r)}function p0(e,r){return r==null||ku(e,r,Qe(r))}function Wn(e,r){return e===r||e!==e&&r!==r}var d0=Qr(da),h0=Qr(function(e,r){return e>=r}),ai=Uu(function(){return arguments}())?Uu:function(e){return Le(e)&&Te.call(e,"callee")&&!Au.call(e,"callee")},ne=A.isArray,m0=su?Dn(su):_h;function dn(e){return e!=null&&ts(e.length)&&!_t(e)}function Me(e){return Le(e)&&dn(e)}function g0(e){return e===!0||e===!1||Le(e)&&an(e)==ge}var jt=Cd||Ka,y0=au?Dn(au):Ah;function E0(e){return Le(e)&&e.nodeType===1&&!nr(e)}function T0(e){if(e==null)return!0;if(dn(e)&&(ne(e)||typeof e=="string"||typeof e.splice=="function"||jt(e)||Fi(e)||ai(e)))return!e.length;var r=nn(e);if(r==Vn||r==Gn)return!e.size;if(Zi(e))return!ga(e).length;for(var o in e)if(Te.call(e,o))return!1;return!0}function D0(e,r){return Hi(e,r)}function I0(e,r,o){o=typeof o=="function"?o:t;var c=o?o(e,r):t;return c===t?Hi(e,r,t,o):!!c}function Ga(e){if(!Le(e))return!1;var r=an(e);return r==Rt||r==Li||typeof e.message=="string"&&typeof e.name=="string"&&!nr(e)}function v0(e){return typeof e=="number"&&wu(e)}function _t(e){if(!Oe(e))return!1;var r=an(e);return r==Ze||r==xo||r==Ue||r==Yf}function Yl(e){return typeof e=="number"&&e==ie(e)}function ts(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=$n}function Oe(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}function Le(e){return e!=null&&typeof e=="object"}var Ql=ou?Dn(ou):wh;function _0(e,r){return e===r||ma(e,r,ka(r))}function A0(e,r,o){return o=typeof o=="function"?o:t,ma(e,r,ka(r),o)}function b0(e){return zl(e)&&e!=+e}function w0(e){if(lm(e))throw new ee(u);return Mu(e)}function S0(e){return e===null}function F0(e){return e==null}function zl(e){return typeof e=="number"||Le(e)&&an(e)==Bi}function nr(e){if(!Le(e)||an(e)!=gt)return!1;var r=Nr(e);if(r===null)return!0;var o=Te.call(r,"constructor")&&r.constructor;return typeof o=="function"&&o instanceof o&&br.call(o)==Ad}var ja=uu?Dn(uu):Sh;function N0(e){return Yl(e)&&e>=-$n&&e<=$n}var Jl=lu?Dn(lu):Fh;function is(e){return typeof e=="string"||!ne(e)&&Le(e)&&an(e)==Ui}function vn(e){return typeof e=="symbol"||Le(e)&&an(e)==gr}var Fi=cu?Dn(cu):Nh;function C0(e){return e===t}function O0(e){return Le(e)&&nn(e)==Mi}function k0(e){return Le(e)&&an(e)==zf}var x0=Qr(ya),R0=Qr(function(e,r){return e<=r});function Hl(e){if(!e)return[];if(dn(e))return is(e)?jn(e):pn(e);if(Gi&&e[Gi])return pd(e[Gi]());var r=nn(e),o=r==Vn?ra:r==Gn?vr:Ni;return o(e)}function At(e){if(!e)return e===0?e:0;if(e=Bn(e),e===at||e===-at){var r=e<0?-1:1;return r*hi}return e===e?e:0}function ie(e){var r=At(e),o=r%1;return r===r?o?r-o:r:0}function Xl(e){return e?ti(ie(e),0,Sn):0}function Bn(e){if(typeof e=="number")return e;if(vn(e))return Xt;if(Oe(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=Oe(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=gu(e);var o=mp.test(e);return o||yp.test(e)?Jp(e.slice(2),o?2:8):hp.test(e)?Xt:+e}function Kl(e){return ut(e,hn(e))}function L0(e){return e?ti(ie(e),-$n,$n):e===0?e:0}function ye(e){return e==null?"":In(e)}var B0=bi(function(e,r){if(Zi(r)||dn(r)){ut(r,Qe(r),e);return}for(var o in r)Te.call(r,o)&&Qi(e,o,r[o])}),Zl=bi(function(e,r){ut(r,hn(r),e)}),rs=bi(function(e,r,o,c){ut(r,hn(r),e,c)}),P0=bi(function(e,r,o,c){ut(r,Qe(r),e,c)}),U0=It(ca);function M0(e,r){var o=Ai(e);return r==null?o:Ou(o,r)}var $0=se(function(e,r){e=_e(e);var o=-1,c=r.length,f=c>2?r[2]:t;for(f&&on(r[0],r[1],f)&&(c=1);++o<c;)for(var m=r[o],g=hn(m),T=-1,v=g.length;++T<v;){var F=g[T],N=e[F];(N===t||Wn(N,Ii[F])&&!Te.call(e,F))&&(e[F]=m[F])}return e}),V0=se(function(e){return e.push(t,gl),Tn(ec,t,e)});function G0(e,r){return pu(e,z(r,3),ot)}function j0(e,r){return pu(e,z(r,3),pa)}function q0(e,r){return e==null?e:fa(e,z(r,3),hn)}function W0(e,r){return e==null?e:Bu(e,z(r,3),hn)}function Y0(e,r){return e&&ot(e,z(r,3))}function Q0(e,r){return e&&pa(e,z(r,3))}function z0(e){return e==null?[]:Mr(e,Qe(e))}function J0(e){return e==null?[]:Mr(e,hn(e))}function qa(e,r,o){var c=e==null?t:ii(e,r);return c===t?o:c}function H0(e,r){return e!=null&&Tl(e,r,Th)}function Wa(e,r){return e!=null&&Tl(e,r,Dh)}var X0=fl(function(e,r,o){r!=null&&typeof r.toString!="function"&&(r=wr.call(r)),e[r]=o},Qa(mn)),K0=fl(function(e,r,o){r!=null&&typeof r.toString!="function"&&(r=wr.call(r)),Te.call(e,r)?e[r].push(o):e[r]=[o]},z),Z0=se(Ji);function Qe(e){return dn(e)?Nu(e):ga(e)}function hn(e){return dn(e)?Nu(e,!0):Ch(e)}function ey(e,r){var o={};return r=z(r,3),ot(e,function(c,f,m){Tt(o,r(c,f,m),c)}),o}function ny(e,r){var o={};return r=z(r,3),ot(e,function(c,f,m){Tt(o,f,r(c,f,m))}),o}var ty=bi(function(e,r,o){$r(e,r,o)}),ec=bi(function(e,r,o,c){$r(e,r,o,c)}),iy=It(function(e,r){var o={};if(e==null)return o;var c=!1;r=Fe(r,function(m){return m=Vt(m,e),c||(c=m.length>1),m}),ut(e,Ca(e),o),c&&(o=xn(o,I|S|k,Xh));for(var f=r.length;f--;)va(o,r[f]);return o});function ry(e,r){return nc(e,ns(z(r)))}var sy=It(function(e,r){return e==null?{}:kh(e,r)});function nc(e,r){if(e==null)return{};var o=Fe(Ca(e),function(c){return[c]});return r=z(r),Yu(e,o,function(c,f){return r(c,f[0])})}function ay(e,r,o){r=Vt(r,e);var c=-1,f=r.length;for(f||(f=1,e=t);++c<f;){var m=e==null?t:e[lt(r[c])];m===t&&(c=f,m=o),e=_t(m)?m.call(e):m}return e}function oy(e,r,o){return e==null?e:Xi(e,r,o)}function uy(e,r,o,c){return c=typeof c=="function"?c:t,e==null?e:Xi(e,r,o,c)}var tc=hl(Qe),ic=hl(hn);function ly(e,r,o){var c=ne(e),f=c||jt(e)||Fi(e);if(r=z(r,4),o==null){var m=e&&e.constructor;f?o=c?new m:[]:Oe(e)?o=_t(m)?Ai(Nr(e)):{}:o={}}return(f?Cn:ot)(e,function(g,T,v){return r(o,g,T,v)}),o}function cy(e,r){return e==null?!0:va(e,r)}function fy(e,r,o){return e==null?e:Xu(e,r,ba(o))}function py(e,r,o,c){return c=typeof c=="function"?c:t,e==null?e:Xu(e,r,ba(o),c)}function Ni(e){return e==null?[]:ia(e,Qe(e))}function dy(e){return e==null?[]:ia(e,hn(e))}function hy(e,r,o){return o===t&&(o=r,r=t),o!==t&&(o=Bn(o),o=o===o?o:0),r!==t&&(r=Bn(r),r=r===r?r:0),ti(Bn(e),r,o)}function my(e,r,o){return r=At(r),o===t?(o=r,r=0):o=At(o),e=Bn(e),Ih(e,r,o)}function gy(e,r,o){if(o&&typeof o!="boolean"&&on(e,r,o)&&(r=o=t),o===t&&(typeof r=="boolean"?(o=r,r=t):typeof e=="boolean"&&(o=e,e=t)),e===t&&r===t?(e=0,r=1):(e=At(e),r===t?(r=e,e=0):r=At(r)),e>r){var c=e;e=r,r=c}if(o||e%1||r%1){var f=Su();return en(e+f*(r-e+zp("1e-"+((f+"").length-1))),r)}return Ta(e,r)}var yy=wi(function(e,r,o){return r=r.toLowerCase(),e+(o?rc(r):r)});function rc(e){return Ya(ye(e).toLowerCase())}function sc(e){return e=ye(e),e&&e.replace(Tp,od).replace(Up,"")}function Ey(e,r,o){e=ye(e),r=In(r);var c=e.length;o=o===t?c:ti(ie(o),0,c);var f=o;return o-=r.length,o>=0&&e.slice(o,f)==r}function Ty(e){return e=ye(e),e&&Zf.test(e)?e.replace(Bo,ud):e}function Dy(e){return e=ye(e),e&&sp.test(e)?e.replace(Vs,"\\$&"):e}var Iy=wi(function(e,r,o){return e+(o?"-":"")+r.toLowerCase()}),vy=wi(function(e,r,o){return e+(o?" ":"")+r.toLowerCase()}),_y=ul("toLowerCase");function Ay(e,r,o){e=ye(e),r=ie(r);var c=r?Ti(e):0;if(!r||c>=r)return e;var f=(r-c)/2;return Yr(xr(f),o)+e+Yr(kr(f),o)}function by(e,r,o){e=ye(e),r=ie(r);var c=r?Ti(e):0;return r&&c<r?e+Yr(r-c,o):e}function wy(e,r,o){e=ye(e),r=ie(r);var c=r?Ti(e):0;return r&&c<r?Yr(r-c,o)+e:e}function Sy(e,r,o){return o||r==null?r=0:r&&(r=+r),Rd(ye(e).replace(Gs,""),r||0)}function Fy(e,r,o){return(o?on(e,r,o):r===t)?r=1:r=ie(r),Da(ye(e),r)}function Ny(){var e=arguments,r=ye(e[0]);return e.length<3?r:r.replace(e[1],e[2])}var Cy=wi(function(e,r,o){return e+(o?"_":"")+r.toLowerCase()});function Oy(e,r,o){return o&&typeof o!="number"&&on(e,r,o)&&(r=o=t),o=o===t?Sn:o>>>0,o?(e=ye(e),e&&(typeof r=="string"||r!=null&&!ja(r))&&(r=In(r),!r&&Ei(e))?Gt(jn(e),0,o):e.split(r,o)):[]}var ky=wi(function(e,r,o){return e+(o?" ":"")+Ya(r)});function xy(e,r,o){return e=ye(e),o=o==null?0:ti(ie(o),0,e.length),r=In(r),e.slice(o,o+r.length)==r}function Ry(e,r,o){var c=h.templateSettings;o&&on(e,r,o)&&(r=t),e=ye(e),r=rs({},r,c,ml);var f=rs({},r.imports,c.imports,ml),m=Qe(f),g=ia(f,m),T,v,F=0,N=r.interpolate||yr,x="__p += '",B=sa((r.escape||yr).source+"|"+N.source+"|"+(N===Po?dp:yr).source+"|"+(r.evaluate||yr).source+"|$","g"),j="//# sourceURL="+(Te.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++jp+"]")+`
`;e.replace(B,function(H,ae,fe,_n,un,An){return fe||(fe=_n),x+=e.slice(F,An).replace(Dp,ld),ae&&(T=!0,x+=`' +
__e(`+ae+`) +
'`),un&&(v=!0,x+=`';
`+un+`;
__p += '`),fe&&(x+=`' +
((__t = (`+fe+`)) == null ? '' : __t) +
'`),F=An+H.length,H}),x+=`';
`;var J=Te.call(r,"variable")&&r.variable;if(!J)x=`with (obj) {
`+x+`
}
`;else if(fp.test(J))throw new ee(p);x=(v?x.replace(Jf,""):x).replace(Hf,"$1").replace(Xf,"$1;"),x="function("+(J||"obj")+`) {
`+(J?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(T?", __e = _.escape":"")+(v?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+x+`return __p
}`;var re=oc(function(){return de(m,j+"return "+x).apply(t,g)});if(re.source=x,Ga(re))throw re;return re}function Ly(e){return ye(e).toLowerCase()}function By(e){return ye(e).toUpperCase()}function Py(e,r,o){if(e=ye(e),e&&(o||r===t))return gu(e);if(!e||!(r=In(r)))return e;var c=jn(e),f=jn(r),m=yu(c,f),g=Eu(c,f)+1;return Gt(c,m,g).join("")}function Uy(e,r,o){if(e=ye(e),e&&(o||r===t))return e.slice(0,Du(e)+1);if(!e||!(r=In(r)))return e;var c=jn(e),f=Eu(c,jn(r))+1;return Gt(c,0,f).join("")}function My(e,r,o){if(e=ye(e),e&&(o||r===t))return e.replace(Gs,"");if(!e||!(r=In(r)))return e;var c=jn(e),f=yu(c,jn(r));return Gt(c,f).join("")}function $y(e,r){var o=Z,c=sn;if(Oe(r)){var f="separator"in r?r.separator:f;o="length"in r?ie(r.length):o,c="omission"in r?In(r.omission):c}e=ye(e);var m=e.length;if(Ei(e)){var g=jn(e);m=g.length}if(o>=m)return e;var T=o-Ti(c);if(T<1)return c;var v=g?Gt(g,0,T).join(""):e.slice(0,T);if(f===t)return v+c;if(g&&(T+=v.length-T),ja(f)){if(e.slice(T).search(f)){var F,N=v;for(f.global||(f=sa(f.source,ye(Uo.exec(f))+"g")),f.lastIndex=0;F=f.exec(N);)var x=F.index;v=v.slice(0,x===t?T:x)}}else if(e.indexOf(In(f),T)!=T){var B=v.lastIndexOf(f);B>-1&&(v=v.slice(0,B))}return v+c}function Vy(e){return e=ye(e),e&&Kf.test(e)?e.replace(Lo,gd):e}var Gy=wi(function(e,r,o){return e+(o?" ":"")+r.toUpperCase()}),Ya=ul("toUpperCase");function ac(e,r,o){return e=ye(e),r=o?t:r,r===t?fd(e)?Td(e):td(e):e.match(r)||[]}var oc=se(function(e,r){try{return Tn(e,t,r)}catch(o){return Ga(o)?o:new ee(o)}}),jy=It(function(e,r){return Cn(r,function(o){o=lt(o),Tt(e,o,$a(e[o],e))}),e});function qy(e){var r=e==null?0:e.length,o=z();return e=r?Fe(e,function(c){if(typeof c[1]!="function")throw new On(l);return[o(c[0]),c[1]]}):[],se(function(c){for(var f=-1;++f<r;){var m=e[f];if(Tn(m[0],this,c))return Tn(m[1],this,c)}})}function Wy(e){return gh(xn(e,I))}function Qa(e){return function(){return e}}function Yy(e,r){return e==null||e!==e?r:e}var Qy=cl(),zy=cl(!0);function mn(e){return e}function za(e){return $u(typeof e=="function"?e:xn(e,I))}function Jy(e){return Gu(xn(e,I))}function Hy(e,r){return ju(e,xn(r,I))}var Xy=se(function(e,r){return function(o){return Ji(o,e,r)}}),Ky=se(function(e,r){return function(o){return Ji(e,o,r)}});function Ja(e,r,o){var c=Qe(r),f=Mr(r,c);o==null&&!(Oe(r)&&(f.length||!c.length))&&(o=r,r=e,e=this,f=Mr(r,Qe(r)));var m=!(Oe(o)&&"chain"in o)||!!o.chain,g=_t(e);return Cn(f,function(T){var v=r[T];e[T]=v,g&&(e.prototype[T]=function(){var F=this.__chain__;if(m||F){var N=e(this.__wrapped__),x=N.__actions__=pn(this.__actions__);return x.push({func:v,args:arguments,thisArg:e}),N.__chain__=F,N}return v.apply(e,Bt([this.value()],arguments))})}),e}function Zy(){return Je._===this&&(Je._=bd),this}function Ha(){}function eE(e){return e=ie(e),se(function(r){return qu(r,e)})}var nE=Sa(Fe),tE=Sa(fu),iE=Sa(Ks);function uc(e){return Ra(e)?Zs(lt(e)):xh(e)}function rE(e){return function(r){return e==null?t:ii(e,r)}}var sE=pl(),aE=pl(!0);function Xa(){return[]}function Ka(){return!1}function oE(){return{}}function uE(){return""}function lE(){return!0}function cE(e,r){if(e=ie(e),e<1||e>$n)return[];var o=Sn,c=en(e,Sn);r=z(r),e-=Sn;for(var f=ta(c,r);++o<e;)r(o);return f}function fE(e){return ne(e)?Fe(e,lt):vn(e)?[e]:pn(Fl(ye(e)))}function pE(e){var r=++_d;return ye(e)+r}var dE=Wr(function(e,r){return e+r},0),hE=Fa("ceil"),mE=Wr(function(e,r){return e/r},1),gE=Fa("floor");function yE(e){return e&&e.length?Ur(e,mn,da):t}function EE(e,r){return e&&e.length?Ur(e,z(r,2),da):t}function TE(e){return hu(e,mn)}function DE(e,r){return hu(e,z(r,2))}function IE(e){return e&&e.length?Ur(e,mn,ya):t}function vE(e,r){return e&&e.length?Ur(e,z(r,2),ya):t}var _E=Wr(function(e,r){return e*r},1),AE=Fa("round"),bE=Wr(function(e,r){return e-r},0);function wE(e){return e&&e.length?na(e,mn):0}function SE(e,r){return e&&e.length?na(e,z(r,2)):0}return h.after=Jg,h.ary=Ml,h.assign=B0,h.assignIn=Zl,h.assignInWith=rs,h.assignWith=P0,h.at=U0,h.before=$l,h.bind=$a,h.bindAll=jy,h.bindKey=Vl,h.castArray=o0,h.chain=Bl,h.chunk=gm,h.compact=ym,h.concat=Em,h.cond=qy,h.conforms=Wy,h.constant=Qa,h.countBy=wg,h.create=M0,h.curry=Gl,h.curryRight=jl,h.debounce=ql,h.defaults=$0,h.defaultsDeep=V0,h.defer=Hg,h.delay=Xg,h.difference=Tm,h.differenceBy=Dm,h.differenceWith=Im,h.drop=vm,h.dropRight=_m,h.dropRightWhile=Am,h.dropWhile=bm,h.fill=wm,h.filter=Fg,h.flatMap=Og,h.flatMapDeep=kg,h.flatMapDepth=xg,h.flatten=kl,h.flattenDeep=Sm,h.flattenDepth=Fm,h.flip=Kg,h.flow=Qy,h.flowRight=zy,h.fromPairs=Nm,h.functions=z0,h.functionsIn=J0,h.groupBy=Rg,h.initial=Om,h.intersection=km,h.intersectionBy=xm,h.intersectionWith=Rm,h.invert=X0,h.invertBy=K0,h.invokeMap=Bg,h.iteratee=za,h.keyBy=Pg,h.keys=Qe,h.keysIn=hn,h.map=Kr,h.mapKeys=ey,h.mapValues=ny,h.matches=Jy,h.matchesProperty=Hy,h.memoize=es,h.merge=ty,h.mergeWith=ec,h.method=Xy,h.methodOf=Ky,h.mixin=Ja,h.negate=ns,h.nthArg=eE,h.omit=iy,h.omitBy=ry,h.once=Zg,h.orderBy=Ug,h.over=nE,h.overArgs=e0,h.overEvery=tE,h.overSome=iE,h.partial=Va,h.partialRight=Wl,h.partition=Mg,h.pick=sy,h.pickBy=nc,h.property=uc,h.propertyOf=rE,h.pull=Um,h.pullAll=Rl,h.pullAllBy=Mm,h.pullAllWith=$m,h.pullAt=Vm,h.range=sE,h.rangeRight=aE,h.rearg=n0,h.reject=Gg,h.remove=Gm,h.rest=t0,h.reverse=Ua,h.sampleSize=qg,h.set=oy,h.setWith=uy,h.shuffle=Wg,h.slice=jm,h.sortBy=zg,h.sortedUniq=Hm,h.sortedUniqBy=Xm,h.split=Oy,h.spread=i0,h.tail=Km,h.take=Zm,h.takeRight=eg,h.takeRightWhile=ng,h.takeWhile=tg,h.tap=yg,h.throttle=r0,h.thru=Xr,h.toArray=Hl,h.toPairs=tc,h.toPairsIn=ic,h.toPath=fE,h.toPlainObject=Kl,h.transform=ly,h.unary=s0,h.union=ig,h.unionBy=rg,h.unionWith=sg,h.uniq=ag,h.uniqBy=og,h.uniqWith=ug,h.unset=cy,h.unzip=Ma,h.unzipWith=Ll,h.update=fy,h.updateWith=py,h.values=Ni,h.valuesIn=dy,h.without=lg,h.words=ac,h.wrap=a0,h.xor=cg,h.xorBy=fg,h.xorWith=pg,h.zip=dg,h.zipObject=hg,h.zipObjectDeep=mg,h.zipWith=gg,h.entries=tc,h.entriesIn=ic,h.extend=Zl,h.extendWith=rs,Ja(h,h),h.add=dE,h.attempt=oc,h.camelCase=yy,h.capitalize=rc,h.ceil=hE,h.clamp=hy,h.clone=u0,h.cloneDeep=c0,h.cloneDeepWith=f0,h.cloneWith=l0,h.conformsTo=p0,h.deburr=sc,h.defaultTo=Yy,h.divide=mE,h.endsWith=Ey,h.eq=Wn,h.escape=Ty,h.escapeRegExp=Dy,h.every=Sg,h.find=Ng,h.findIndex=Cl,h.findKey=G0,h.findLast=Cg,h.findLastIndex=Ol,h.findLastKey=j0,h.floor=gE,h.forEach=Pl,h.forEachRight=Ul,h.forIn=q0,h.forInRight=W0,h.forOwn=Y0,h.forOwnRight=Q0,h.get=qa,h.gt=d0,h.gte=h0,h.has=H0,h.hasIn=Wa,h.head=xl,h.identity=mn,h.includes=Lg,h.indexOf=Cm,h.inRange=my,h.invoke=Z0,h.isArguments=ai,h.isArray=ne,h.isArrayBuffer=m0,h.isArrayLike=dn,h.isArrayLikeObject=Me,h.isBoolean=g0,h.isBuffer=jt,h.isDate=y0,h.isElement=E0,h.isEmpty=T0,h.isEqual=D0,h.isEqualWith=I0,h.isError=Ga,h.isFinite=v0,h.isFunction=_t,h.isInteger=Yl,h.isLength=ts,h.isMap=Ql,h.isMatch=_0,h.isMatchWith=A0,h.isNaN=b0,h.isNative=w0,h.isNil=F0,h.isNull=S0,h.isNumber=zl,h.isObject=Oe,h.isObjectLike=Le,h.isPlainObject=nr,h.isRegExp=ja,h.isSafeInteger=N0,h.isSet=Jl,h.isString=is,h.isSymbol=vn,h.isTypedArray=Fi,h.isUndefined=C0,h.isWeakMap=O0,h.isWeakSet=k0,h.join=Lm,h.kebabCase=Iy,h.last=Ln,h.lastIndexOf=Bm,h.lowerCase=vy,h.lowerFirst=_y,h.lt=x0,h.lte=R0,h.max=yE,h.maxBy=EE,h.mean=TE,h.meanBy=DE,h.min=IE,h.minBy=vE,h.stubArray=Xa,h.stubFalse=Ka,h.stubObject=oE,h.stubString=uE,h.stubTrue=lE,h.multiply=_E,h.nth=Pm,h.noConflict=Zy,h.noop=Ha,h.now=Zr,h.pad=Ay,h.padEnd=by,h.padStart=wy,h.parseInt=Sy,h.random=gy,h.reduce=$g,h.reduceRight=Vg,h.repeat=Fy,h.replace=Ny,h.result=ay,h.round=AE,h.runInContext=D,h.sample=jg,h.size=Yg,h.snakeCase=Cy,h.some=Qg,h.sortedIndex=qm,h.sortedIndexBy=Wm,h.sortedIndexOf=Ym,h.sortedLastIndex=Qm,h.sortedLastIndexBy=zm,h.sortedLastIndexOf=Jm,h.startCase=ky,h.startsWith=xy,h.subtract=bE,h.sum=wE,h.sumBy=SE,h.template=Ry,h.times=cE,h.toFinite=At,h.toInteger=ie,h.toLength=Xl,h.toLower=Ly,h.toNumber=Bn,h.toSafeInteger=L0,h.toString=ye,h.toUpper=By,h.trim=Py,h.trimEnd=Uy,h.trimStart=My,h.truncate=$y,h.unescape=Vy,h.uniqueId=pE,h.upperCase=Gy,h.upperFirst=Ya,h.each=Pl,h.eachRight=Ul,h.first=xl,Ja(h,function(){var e={};return ot(h,function(r,o){Te.call(h.prototype,o)||(e[o]=r)}),e}(),{chain:!1}),h.VERSION=s,Cn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){h[e].placeholder=h}),Cn(["drop","take"],function(e,r){le.prototype[e]=function(o){o=o===t?1:Ye(ie(o),0);var c=this.__filtered__&&!r?new le(this):this.clone();return c.__filtered__?c.__takeCount__=en(o,c.__takeCount__):c.__views__.push({size:en(o,Sn),type:e+(c.__dir__<0?"Right":"")}),c},le.prototype[e+"Right"]=function(o){return this.reverse()[e](o).reverse()}}),Cn(["filter","map","takeWhile"],function(e,r){var o=r+1,c=o==hr||o==mr;le.prototype[e]=function(f){var m=this.clone();return m.__iteratees__.push({iteratee:z(f,3),type:o}),m.__filtered__=m.__filtered__||c,m}}),Cn(["head","last"],function(e,r){var o="take"+(r?"Right":"");le.prototype[e]=function(){return this[o](1).value()[0]}}),Cn(["initial","tail"],function(e,r){var o="drop"+(r?"":"Right");le.prototype[e]=function(){return this.__filtered__?new le(this):this[o](1)}}),le.prototype.compact=function(){return this.filter(mn)},le.prototype.find=function(e){return this.filter(e).head()},le.prototype.findLast=function(e){return this.reverse().find(e)},le.prototype.invokeMap=se(function(e,r){return typeof e=="function"?new le(this):this.map(function(o){return Ji(o,e,r)})}),le.prototype.reject=function(e){return this.filter(ns(z(e)))},le.prototype.slice=function(e,r){e=ie(e);var o=this;return o.__filtered__&&(e>0||r<0)?new le(o):(e<0?o=o.takeRight(-e):e&&(o=o.drop(e)),r!==t&&(r=ie(r),o=r<0?o.dropRight(-r):o.take(r-e)),o)},le.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},le.prototype.toArray=function(){return this.take(Sn)},ot(le.prototype,function(e,r){var o=/^(?:filter|find|map|reject)|While$/.test(r),c=/^(?:head|last)$/.test(r),f=h[c?"take"+(r=="last"?"Right":""):r],m=c||/^find/.test(r);f&&(h.prototype[r]=function(){var g=this.__wrapped__,T=c?[1]:arguments,v=g instanceof le,F=T[0],N=v||ne(g),x=function(ae){var fe=f.apply(h,Bt([ae],T));return c&&B?fe[0]:fe};N&&o&&typeof F=="function"&&F.length!=1&&(v=N=!1);var B=this.__chain__,j=!!this.__actions__.length,J=m&&!B,re=v&&!j;if(!m&&N){g=re?g:new le(this);var H=e.apply(g,T);return H.__actions__.push({func:Xr,args:[x],thisArg:t}),new kn(H,B)}return J&&re?e.apply(this,T):(H=this.thru(x),J?c?H.value()[0]:H.value():H)})}),Cn(["pop","push","shift","sort","splice","unshift"],function(e){var r=_r[e],o=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",c=/^(?:pop|shift)$/.test(e);h.prototype[e]=function(){var f=arguments;if(c&&!this.__chain__){var m=this.value();return r.apply(ne(m)?m:[],f)}return this[o](function(g){return r.apply(ne(g)?g:[],f)})}}),ot(le.prototype,function(e,r){var o=h[r];if(o){var c=o.name+"";Te.call(_i,c)||(_i[c]=[]),_i[c].push({name:r,func:o})}}),_i[qr(t,he).name]=[{name:"wrapper",func:t}],le.prototype.clone=Vd,le.prototype.reverse=Gd,le.prototype.value=jd,h.prototype.at=Eg,h.prototype.chain=Tg,h.prototype.commit=Dg,h.prototype.next=Ig,h.prototype.plant=_g,h.prototype.reverse=Ag,h.prototype.toJSON=h.prototype.valueOf=h.prototype.value=bg,h.prototype.first=h.prototype.head,Gi&&(h.prototype[Gi]=vg),h},Di=Dd();Kt?((Kt.exports=Di)._=Di,zs._=Di):Je._=Di}).call(tr)})(ys,ys.exports);var cD=ys.exports;const Ct=oD(cD),fD="/APIDoc",pD="Loayly and Promo",dD="https://assets.petco.com/petco/image/upload/f_auto,q_auto:best,dpr_2.0,w_139/hp-shop-by-pet-type-small-pet-562x562",hD='[{"title":"Optimus GraphQL API Documentation","content":"\\n# Optimus GraphQL API Documentation\\n\\nThis document introduces a preliminary version of the Optimus GraphQL API, outlining inputs, responses, and internal types. \\nThe majority of the types either come with descriptions or are inherently self-descriptive, aiming to enhance usability. \\nPlease note that the document is currently in development mode, and both expected functionalities and modifications to existing elements are anticipated.\\nGraphQL revolutionizes API communication compared to traditional REST APIs.\\n\\nUnlike REST, which has fixed endpoints and pre-defined responses, GraphQL enables flexible data retrieval by allowing clients to specify the exact data they need. \\nWith a single endpoint, GraphQL consolidates requests, reducing the need for multiple endpoints. \\nIt eliminates over-fetching or under-fetching of data, ensuring optimal network resource utilization. \\nAdditionally, GraphQL supports real-time updates through subscriptions, providing a more dynamic experience. \\nThe strongly typed schema enhances clarity and reduces errors. Overall, GraphQL offers a more efficient and expressive approach to API interactions. \\n(For more details, visit [GraphQL](https://graphql.org) and [RESTful API Design](https://restfulapi.net))\\n\\nAll functions have mandatory input parameter <strong>identityValue</strong> which presents PGR ID. \\nFunctions description contains icons to show the state and development status.\\n\\n<div>\\n<img src=\\"https://cdn3d.iconscout.com/3d/premium/thumb/cross-sign-8749566-7139691.png?f=webp\\" alt=\\"not verified\\" width=\\"32\\" style=\\"vertical-align:middle\\"/>\\n<span>specification not verified</span>\\n</div><br/>\\n\\n<div>\\n<img src=\\"https://cdn-icons-png.flaticon.com/512/6928/6928921.png\\" alt=\\"verified\\" width=\\"32\\" style=\\"vertical-align:middle\\"/>\\n<span>specification verified</span>\\n</div><br/>\\n\\n<div>\\n<img src=\\"https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png\\" alt=\\"pending\\" width=\\"32\\" style=\\"vertical-align:middle\\"/>\\n<span>development pending</span>\\n</div><br/>\\n\\n<div>\\n<img src=\\"https://cdn.icon-icons.com/icons2/3641/PNG/512/play_green_button_icon_227849.png\\" alt=\\"progress\\" width=\\"32\\" style=\\"vertical-align:middle\\"/>\\n<span>development in progress</span>\\n</div><br/>\\n\\n<div>\\n<img src=\\"https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png\\" alt=\\"developed\\" width=\\"32\\" style=\\"vertical-align:middle\\"/>\\n<span>development finished</span>\\n</div><br/>\\n  "}]',mD="true",rf={SITE_ROOT:fD,APP_TITLE:pD,APP_LOGO:dD,PAGES:hD,MAGIDOC_GENERATE:mD};function xv(i){return i.get(rf)}function wo(i,n){return i.getOrDefault(rf,n)}function pe(i,n){if(!!!i)throw new Error(n)}function Ot(i){return typeof i=="object"&&i!==null}function Xn(i,n){if(!!!i)throw new Error(n??"Unexpected invariant triggered.")}const gD=/\r\n|[\n\r]/g;function fo(i,n){let t=0,s=1;for(const a of i.body.matchAll(gD)){if(typeof a.index=="number"||Xn(!1),a.index>=n)break;t=a.index+a[0].length,s+=1}return{line:s,column:n+1-t}}function yD(i){return sf(i.source,fo(i.source,i.start))}function sf(i,n){const t=i.locationOffset.column-1,s="".padStart(t)+i.body,a=n.line-1,u=i.locationOffset.line-1,l=n.line+u,p=n.line===1?t:0,d=n.column+p,y=`${i.name}:${l}:${d}
`,E=s.split(/\r\n|[\n\r]/g),I=E[a];if(I.length>120){const S=Math.floor(d/80),k=d%80,R=[];for(let L=0;L<I.length;L+=80)R.push(I.slice(L,L+80));return y+Oc([[`${l} |`,R[0]],...R.slice(1,S+1).map(L=>["|",L]),["|","^".padStart(k)],["|",R[S+1]]])}return y+Oc([[`${l-1} |`,E[a-1]],[`${l} |`,I],["|","^".padStart(d)],[`${l+1} |`,E[a+1]]])}function Oc(i){const n=i.filter(([s,a])=>a!==void 0),t=Math.max(...n.map(([s])=>s.length));return n.map(([s,a])=>s.padStart(t)+(a?" "+a:"")).join(`
`)}function ED(i){const n=i[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:i[1],positions:i[2],path:i[3],originalError:i[4],extensions:i[5]}:n}class q extends Error{constructor(n,...t){var s,a,u;const{nodes:l,source:p,positions:d,path:y,originalError:E,extensions:I}=ED(t);super(n),this.name="GraphQLError",this.path=y??void 0,this.originalError=E??void 0,this.nodes=kc(Array.isArray(l)?l:l?[l]:void 0);const S=kc((s=this.nodes)===null||s===void 0?void 0:s.map(R=>R.loc).filter(R=>R!=null));this.source=p??(S==null||(a=S[0])===null||a===void 0?void 0:a.source),this.positions=d??(S==null?void 0:S.map(R=>R.start)),this.locations=d&&p?d.map(R=>fo(p,R)):S==null?void 0:S.map(R=>fo(R.source,R.start));const k=Ot(E==null?void 0:E.extensions)?E==null?void 0:E.extensions:void 0;this.extensions=(u=I??k)!==null&&u!==void 0?u:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),E!=null&&E.stack?Object.defineProperty(this,"stack",{value:E.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,q):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+yD(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+sf(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function kc(i){return i===void 0||i.length===0?void 0:i}function ze(i,n,t){return new q(`Syntax Error: ${t}`,{source:i,positions:[n]})}class TD{constructor(n,t,s){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class af{constructor(n,t,s,a,u,l){this.kind=n,this.start=t,this.end=s,this.line=a,this.column=u,this.value=l,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const of={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},DD=new Set(Object.keys(of));function xc(i){const n=i==null?void 0:i.kind;return typeof n=="string"&&DD.has(n)}var Pn;(function(i){i.QUERY="query",i.MUTATION="mutation",i.SUBSCRIPTION="subscription"})(Pn||(Pn={}));var Q;(function(i){i.QUERY="QUERY",i.MUTATION="MUTATION",i.SUBSCRIPTION="SUBSCRIPTION",i.FIELD="FIELD",i.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",i.FRAGMENT_SPREAD="FRAGMENT_SPREAD",i.INLINE_FRAGMENT="INLINE_FRAGMENT",i.VARIABLE_DEFINITION="VARIABLE_DEFINITION",i.SCHEMA="SCHEMA",i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.FIELD_DEFINITION="FIELD_DEFINITION",i.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.ENUM_VALUE="ENUM_VALUE",i.INPUT_OBJECT="INPUT_OBJECT",i.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(Q||(Q={}));var _;(function(i){i.NAME="Name",i.DOCUMENT="Document",i.OPERATION_DEFINITION="OperationDefinition",i.VARIABLE_DEFINITION="VariableDefinition",i.SELECTION_SET="SelectionSet",i.FIELD="Field",i.ARGUMENT="Argument",i.FRAGMENT_SPREAD="FragmentSpread",i.INLINE_FRAGMENT="InlineFragment",i.FRAGMENT_DEFINITION="FragmentDefinition",i.VARIABLE="Variable",i.INT="IntValue",i.FLOAT="FloatValue",i.STRING="StringValue",i.BOOLEAN="BooleanValue",i.NULL="NullValue",i.ENUM="EnumValue",i.LIST="ListValue",i.OBJECT="ObjectValue",i.OBJECT_FIELD="ObjectField",i.DIRECTIVE="Directive",i.NAMED_TYPE="NamedType",i.LIST_TYPE="ListType",i.NON_NULL_TYPE="NonNullType",i.SCHEMA_DEFINITION="SchemaDefinition",i.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",i.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",i.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",i.FIELD_DEFINITION="FieldDefinition",i.INPUT_VALUE_DEFINITION="InputValueDefinition",i.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",i.UNION_TYPE_DEFINITION="UnionTypeDefinition",i.ENUM_TYPE_DEFINITION="EnumTypeDefinition",i.ENUM_VALUE_DEFINITION="EnumValueDefinition",i.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",i.DIRECTIVE_DEFINITION="DirectiveDefinition",i.SCHEMA_EXTENSION="SchemaExtension",i.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",i.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",i.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",i.UNION_TYPE_EXTENSION="UnionTypeExtension",i.ENUM_TYPE_EXTENSION="EnumTypeExtension",i.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(_||(_={}));function po(i){return i===9||i===32}function lr(i){return i>=48&&i<=57}function uf(i){return i>=97&&i<=122||i>=65&&i<=90}function So(i){return uf(i)||i===95}function lf(i){return uf(i)||lr(i)||i===95}function ID(i){var n;let t=Number.MAX_SAFE_INTEGER,s=null,a=-1;for(let l=0;l<i.length;++l){var u;const p=i[l],d=vD(p);d!==p.length&&(s=(u=s)!==null&&u!==void 0?u:l,a=l,l!==0&&d<t&&(t=d))}return i.map((l,p)=>p===0?l:l.slice(t)).slice((n=s)!==null&&n!==void 0?n:0,a+1)}function vD(i){let n=0;for(;n<i.length&&po(i.charCodeAt(n));)++n;return n}function _D(i,n){const t=i.replace(/"""/g,'\\"""'),s=t.split(/\r\n|[\n\r]/g),a=s.length===1,u=s.length>1&&s.slice(1).every(k=>k.length===0||po(k.charCodeAt(0))),l=t.endsWith('\\"""'),p=i.endsWith('"')&&!l,d=i.endsWith("\\"),y=p||d,E=!(n!=null&&n.minimize)&&(!a||i.length>70||y||u||l);let I="";const S=a&&po(i.charCodeAt(0));return(E&&!S||u)&&(I+=`
`),I+=t,(E||y)&&(I+=`
`),'"""'+I+'"""'}var C;(function(i){i.SOF="<SOF>",i.EOF="<EOF>",i.BANG="!",i.DOLLAR="$",i.AMP="&",i.PAREN_L="(",i.PAREN_R=")",i.SPREAD="...",i.COLON=":",i.EQUALS="=",i.AT="@",i.BRACKET_L="[",i.BRACKET_R="]",i.BRACE_L="{",i.PIPE="|",i.BRACE_R="}",i.NAME="Name",i.INT="Int",i.FLOAT="Float",i.STRING="String",i.BLOCK_STRING="BlockString",i.COMMENT="Comment"})(C||(C={}));class AD{constructor(n){const t=new af(C.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==C.EOF)do if(n.next)n=n.next;else{const t=wD(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===C.COMMENT);return n}}function bD(i){return i===C.BANG||i===C.DOLLAR||i===C.AMP||i===C.PAREN_L||i===C.PAREN_R||i===C.SPREAD||i===C.COLON||i===C.EQUALS||i===C.AT||i===C.BRACKET_L||i===C.BRACKET_R||i===C.BRACE_L||i===C.PIPE||i===C.BRACE_R}function xi(i){return i>=0&&i<=55295||i>=57344&&i<=1114111}function As(i,n){return cf(i.charCodeAt(n))&&ff(i.charCodeAt(n+1))}function cf(i){return i>=55296&&i<=56319}function ff(i){return i>=56320&&i<=57343}function li(i,n){const t=i.source.body.codePointAt(n);if(t===void 0)return C.EOF;if(t>=32&&t<=126){const s=String.fromCodePoint(t);return s==='"'?`'"'`:`"${s}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function je(i,n,t,s,a){const u=i.line,l=1+t-i.lineStart;return new af(n,t,s,u,l,a)}function wD(i,n){const t=i.source.body,s=t.length;let a=n;for(;a<s;){const u=t.charCodeAt(a);switch(u){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++i.line,i.lineStart=a;continue;case 13:t.charCodeAt(a+1)===10?a+=2:++a,++i.line,i.lineStart=a;continue;case 35:return SD(i,a);case 33:return je(i,C.BANG,a,a+1);case 36:return je(i,C.DOLLAR,a,a+1);case 38:return je(i,C.AMP,a,a+1);case 40:return je(i,C.PAREN_L,a,a+1);case 41:return je(i,C.PAREN_R,a,a+1);case 46:if(t.charCodeAt(a+1)===46&&t.charCodeAt(a+2)===46)return je(i,C.SPREAD,a,a+3);break;case 58:return je(i,C.COLON,a,a+1);case 61:return je(i,C.EQUALS,a,a+1);case 64:return je(i,C.AT,a,a+1);case 91:return je(i,C.BRACKET_L,a,a+1);case 93:return je(i,C.BRACKET_R,a,a+1);case 123:return je(i,C.BRACE_L,a,a+1);case 124:return je(i,C.PIPE,a,a+1);case 125:return je(i,C.BRACE_R,a,a+1);case 34:return t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34?xD(i,a):ND(i,a)}if(lr(u)||u===45)return FD(i,a,u);if(So(u))return RD(i,a);throw ze(i.source,a,u===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:xi(u)||As(t,a)?`Unexpected character: ${li(i,a)}.`:`Invalid character: ${li(i,a)}.`)}return je(i,C.EOF,s,s)}function SD(i,n){const t=i.source.body,s=t.length;let a=n+1;for(;a<s;){const u=t.charCodeAt(a);if(u===10||u===13)break;if(xi(u))++a;else if(As(t,a))a+=2;else break}return je(i,C.COMMENT,n,a,t.slice(n+1,a))}function FD(i,n,t){const s=i.source.body;let a=n,u=t,l=!1;if(u===45&&(u=s.charCodeAt(++a)),u===48){if(u=s.charCodeAt(++a),lr(u))throw ze(i.source,a,`Invalid number, unexpected digit after 0: ${li(i,a)}.`)}else a=io(i,a,u),u=s.charCodeAt(a);if(u===46&&(l=!0,u=s.charCodeAt(++a),a=io(i,a,u),u=s.charCodeAt(a)),(u===69||u===101)&&(l=!0,u=s.charCodeAt(++a),(u===43||u===45)&&(u=s.charCodeAt(++a)),a=io(i,a,u),u=s.charCodeAt(a)),u===46||So(u))throw ze(i.source,a,`Invalid number, expected digit but got: ${li(i,a)}.`);return je(i,l?C.FLOAT:C.INT,n,a,s.slice(n,a))}function io(i,n,t){if(!lr(t))throw ze(i.source,n,`Invalid number, expected digit but got: ${li(i,n)}.`);const s=i.source.body;let a=n+1;for(;lr(s.charCodeAt(a));)++a;return a}function ND(i,n){const t=i.source.body,s=t.length;let a=n+1,u=a,l="";for(;a<s;){const p=t.charCodeAt(a);if(p===34)return l+=t.slice(u,a),je(i,C.STRING,n,a+1,l);if(p===92){l+=t.slice(u,a);const d=t.charCodeAt(a+1)===117?t.charCodeAt(a+2)===123?CD(i,a):OD(i,a):kD(i,a);l+=d.value,a+=d.size,u=a;continue}if(p===10||p===13)break;if(xi(p))++a;else if(As(t,a))a+=2;else throw ze(i.source,a,`Invalid character within String: ${li(i,a)}.`)}throw ze(i.source,a,"Unterminated string.")}function CD(i,n){const t=i.source.body;let s=0,a=3;for(;a<12;){const u=t.charCodeAt(n+a++);if(u===125){if(a<5||!xi(s))break;return{value:String.fromCodePoint(s),size:a}}if(s=s<<4|ir(u),s<0)break}throw ze(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+a)}".`)}function OD(i,n){const t=i.source.body,s=Rc(t,n+2);if(xi(s))return{value:String.fromCodePoint(s),size:6};if(cf(s)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const a=Rc(t,n+8);if(ff(a))return{value:String.fromCodePoint(s,a),size:12}}throw ze(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function Rc(i,n){return ir(i.charCodeAt(n))<<12|ir(i.charCodeAt(n+1))<<8|ir(i.charCodeAt(n+2))<<4|ir(i.charCodeAt(n+3))}function ir(i){return i>=48&&i<=57?i-48:i>=65&&i<=70?i-55:i>=97&&i<=102?i-87:-1}function kD(i,n){const t=i.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw ze(i.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function xD(i,n){const t=i.source.body,s=t.length;let a=i.lineStart,u=n+3,l=u,p="";const d=[];for(;u<s;){const y=t.charCodeAt(u);if(y===34&&t.charCodeAt(u+1)===34&&t.charCodeAt(u+2)===34){p+=t.slice(l,u),d.push(p);const E=je(i,C.BLOCK_STRING,n,u+3,ID(d).join(`
`));return i.line+=d.length-1,i.lineStart=a,E}if(y===92&&t.charCodeAt(u+1)===34&&t.charCodeAt(u+2)===34&&t.charCodeAt(u+3)===34){p+=t.slice(l,u),l=u+1,u+=4;continue}if(y===10||y===13){p+=t.slice(l,u),d.push(p),y===13&&t.charCodeAt(u+1)===10?u+=2:++u,p="",l=u,a=u;continue}if(xi(y))++u;else if(As(t,u))u+=2;else throw ze(i.source,u,`Invalid character within String: ${li(i,u)}.`)}throw ze(i.source,u,"Unterminated string.")}function RD(i,n){const t=i.source.body,s=t.length;let a=n+1;for(;a<s;){const u=t.charCodeAt(a);if(lf(u))++a;else break}return je(i,C.NAME,n,a,t.slice(n,a))}const LD=10,pf=2;function Y(i){return bs(i,[])}function bs(i,n){switch(typeof i){case"string":return JSON.stringify(i);case"function":return i.name?`[function ${i.name}]`:"[function]";case"object":return BD(i,n);default:return String(i)}}function BD(i,n){if(i===null)return"null";if(n.includes(i))return"[Circular]";const t=[...n,i];if(PD(i)){const s=i.toJSON();if(s!==i)return typeof s=="string"?s:bs(s,t)}else if(Array.isArray(i))return MD(i,t);return UD(i,t)}function PD(i){return typeof i.toJSON=="function"}function UD(i,n){const t=Object.entries(i);return t.length===0?"{}":n.length>pf?"["+$D(i)+"]":"{ "+t.map(([a,u])=>a+": "+bs(u,n)).join(", ")+" }"}function MD(i,n){if(i.length===0)return"[]";if(n.length>pf)return"[Array]";const t=Math.min(LD,i.length),s=i.length-t,a=[];for(let u=0;u<t;++u)a.push(bs(i[u],n));return s===1?a.push("... 1 more item"):s>1&&a.push(`... ${s} more items`),"["+a.join(", ")+"]"}function $D(i){const n=Object.prototype.toString.call(i).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof i.constructor=="function"){const t=i.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const ht=globalThis.process?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var s;const a=t.prototype[Symbol.toStringTag],u=Symbol.toStringTag in n?n[Symbol.toStringTag]:(s=n.constructor)===null||s===void 0?void 0:s.name;if(a===u){const l=Y(n);throw new Error(`Cannot use ${a} "${l}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class df{constructor(n,t="GraphQL request",s={line:1,column:1}){typeof n=="string"||pe(!1,`Body must be a string. Received: ${Y(n)}.`),this.body=n,this.name=t,this.locationOffset=s,this.locationOffset.line>0||pe(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||pe(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function VD(i){return ht(i,df)}function GD(i,n){return new hf(i,n).parseDocument()}function jD(i,n){const t=new hf(i,n);t.expectToken(C.SOF);const s=t.parseValueLiteral(!1);return t.expectToken(C.EOF),s}class hf{constructor(n,t={}){const s=VD(n)?n:new df(n);this._lexer=new AD(s),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(C.NAME);return this.node(n,{kind:_.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:_.DOCUMENT,definitions:this.many(C.SOF,this.parseDefinition,C.EOF)})}parseDefinition(){if(this.peek(C.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===C.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw ze(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(C.BRACE_L))return this.node(n,{kind:_.OPERATION_DEFINITION,operation:Pn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let s;return this.peek(C.NAME)&&(s=this.parseName()),this.node(n,{kind:_.OPERATION_DEFINITION,operation:t,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(C.NAME);switch(n.value){case"query":return Pn.QUERY;case"mutation":return Pn.MUTATION;case"subscription":return Pn.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(C.PAREN_L,this.parseVariableDefinition,C.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:_.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(C.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(C.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(C.DOLLAR),this.node(n,{kind:_.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:_.SELECTION_SET,selections:this.many(C.BRACE_L,this.parseSelection,C.BRACE_R)})}parseSelection(){return this.peek(C.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let s,a;return this.expectOptionalToken(C.COLON)?(s=t,a=this.parseName()):a=t,this.node(n,{kind:_.FIELD,alias:s,name:a,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(C.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(C.PAREN_L,t,C.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,s=this.parseName();return this.expectToken(C.COLON),this.node(t,{kind:_.ARGUMENT,name:s,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(C.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(C.NAME)?this.node(n,{kind:_.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:_.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:_.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:_.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case C.BRACKET_L:return this.parseList(n);case C.BRACE_L:return this.parseObject(n);case C.INT:return this.advanceLexer(),this.node(t,{kind:_.INT,value:t.value});case C.FLOAT:return this.advanceLexer(),this.node(t,{kind:_.FLOAT,value:t.value});case C.STRING:case C.BLOCK_STRING:return this.parseStringLiteral();case C.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:_.BOOLEAN,value:!0});case"false":return this.node(t,{kind:_.BOOLEAN,value:!1});case"null":return this.node(t,{kind:_.NULL});default:return this.node(t,{kind:_.ENUM,value:t.value})}case C.DOLLAR:if(n)if(this.expectToken(C.DOLLAR),this._lexer.token.kind===C.NAME){const s=this._lexer.token.value;throw ze(this._lexer.source,t.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:_.STRING,value:n.value,block:n.kind===C.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:_.LIST,values:this.any(C.BRACKET_L,t,C.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:_.OBJECT,fields:this.any(C.BRACE_L,t,C.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,s=this.parseName();return this.expectToken(C.COLON),this.node(t,{kind:_.OBJECT_FIELD,name:s,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(C.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(C.AT),this.node(t,{kind:_.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(C.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(C.BRACKET_R),t=this.node(n,{kind:_.LIST_TYPE,type:s})}else t=this.parseNamedType();return this.expectOptionalToken(C.BANG)?this.node(n,{kind:_.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:_.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(C.STRING)||this.peek(C.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),a=this.many(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);return this.node(n,{kind:_.SCHEMA_DEFINITION,description:t,directives:s,operationTypes:a})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(C.COLON);const s=this.parseNamedType();return this.node(n,{kind:_.OPERATION_TYPE_DEFINITION,operation:t,type:s})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),a=this.parseConstDirectives();return this.node(n,{kind:_.SCALAR_TYPE_DEFINITION,description:t,name:s,directives:a})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),a=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:_.OBJECT_TYPE_DEFINITION,description:t,name:s,interfaces:a,directives:u,fields:l})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(C.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(C.BRACE_L,this.parseFieldDefinition,C.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName(),a=this.parseArgumentDefs();this.expectToken(C.COLON);const u=this.parseTypeReference(),l=this.parseConstDirectives();return this.node(n,{kind:_.FIELD_DEFINITION,description:t,name:s,arguments:a,type:u,directives:l})}parseArgumentDefs(){return this.optionalMany(C.PAREN_L,this.parseInputValueDef,C.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName();this.expectToken(C.COLON);const a=this.parseTypeReference();let u;this.expectOptionalToken(C.EQUALS)&&(u=this.parseConstValueLiteral());const l=this.parseConstDirectives();return this.node(n,{kind:_.INPUT_VALUE_DEFINITION,description:t,name:s,type:a,defaultValue:u,directives:l})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),a=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:_.INTERFACE_TYPE_DEFINITION,description:t,name:s,interfaces:a,directives:u,fields:l})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),a=this.parseConstDirectives(),u=this.parseUnionMemberTypes();return this.node(n,{kind:_.UNION_TYPE_DEFINITION,description:t,name:s,directives:a,types:u})}parseUnionMemberTypes(){return this.expectOptionalToken(C.EQUALS)?this.delimitedMany(C.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),a=this.parseConstDirectives(),u=this.parseEnumValuesDefinition();return this.node(n,{kind:_.ENUM_TYPE_DEFINITION,description:t,name:s,directives:a,values:u})}parseEnumValuesDefinition(){return this.optionalMany(C.BRACE_L,this.parseEnumValueDefinition,C.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseEnumValueName(),a=this.parseConstDirectives();return this.node(n,{kind:_.ENUM_VALUE_DEFINITION,description:t,name:s,directives:a})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw ze(this._lexer.source,this._lexer.token.start,`${us(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),a=this.parseConstDirectives(),u=this.parseInputFieldsDefinition();return this.node(n,{kind:_.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:s,directives:a,fields:u})}parseInputFieldsDefinition(){return this.optionalMany(C.BRACE_L,this.parseInputValueDef,C.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===C.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),s=this.optionalMany(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);if(t.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:_.SCHEMA_EXTENSION,directives:t,operationTypes:s})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(n,{kind:_.SCALAR_TYPE_EXTENSION,name:t,directives:s})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&a.length===0&&u.length===0)throw this.unexpected();return this.node(n,{kind:_.OBJECT_TYPE_EXTENSION,name:t,interfaces:s,directives:a,fields:u})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&a.length===0&&u.length===0)throw this.unexpected();return this.node(n,{kind:_.INTERFACE_TYPE_EXTENSION,name:t,interfaces:s,directives:a,fields:u})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),s=this.parseConstDirectives(),a=this.parseUnionMemberTypes();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:_.UNION_TYPE_EXTENSION,name:t,directives:s,types:a})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),s=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:_.ENUM_TYPE_EXTENSION,name:t,directives:s,values:a})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),s=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:_.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:s,fields:a})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(C.AT);const s=this.parseName(),a=this.parseArgumentDefs(),u=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const l=this.parseDirectiveLocations();return this.node(n,{kind:_.DIRECTIVE_DEFINITION,description:t,name:s,arguments:a,repeatable:u,locations:l})}parseDirectiveLocations(){return this.delimitedMany(C.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(Q,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new TD(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw ze(this._lexer.source,t.start,`Expected ${mf(n)}, found ${us(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===C.NAME&&t.value===n)this.advanceLexer();else throw ze(this._lexer.source,t.start,`Expected "${n}", found ${us(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===C.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return ze(this._lexer.source,t.start,`Unexpected ${us(t)}.`)}any(n,t,s){this.expectToken(n);const a=[];for(;!this.expectOptionalToken(s);)a.push(t.call(this));return a}optionalMany(n,t,s){if(this.expectOptionalToken(n)){const a=[];do a.push(t.call(this));while(!this.expectOptionalToken(s));return a}return[]}many(n,t,s){this.expectToken(n);const a=[];do a.push(t.call(this));while(!this.expectOptionalToken(s));return a}delimitedMany(n,t){this.expectOptionalToken(n);const s=[];do s.push(t.call(this));while(this.expectOptionalToken(n));return s}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==C.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw ze(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function us(i){const n=i.value;return mf(i.kind)+(n!=null?` "${n}"`:"")}function mf(i){return bD(i)?`"${i}"`:i}const qD=5;function ws(i,n){const[t,s]=n?[i,n]:[void 0,i];let a=" Did you mean ";t&&(a+=t+" ");const u=s.map(d=>`"${d}"`);switch(u.length){case 0:return"";case 1:return a+u[0]+"?";case 2:return a+u[0]+" or "+u[1]+"?"}const l=u.slice(0,qD),p=l.pop();return a+l.join(", ")+", or "+p+"?"}function Lc(i){return i}function Oi(i,n){const t=Object.create(null);for(const s of i)t[n(s)]=s;return t}function oi(i,n,t){const s=Object.create(null);for(const a of i)s[n(a)]=t(a);return s}function wt(i,n){const t=Object.create(null);for(const s of Object.keys(i))t[s]=n(i[s],s);return t}function WD(i,n){let t=0,s=0;for(;t<i.length&&s<n.length;){let a=i.charCodeAt(t),u=n.charCodeAt(s);if(ls(a)&&ls(u)){let l=0;do++t,l=l*10+a-ho,a=i.charCodeAt(t);while(ls(a)&&l>0);let p=0;do++s,p=p*10+u-ho,u=n.charCodeAt(s);while(ls(u)&&p>0);if(l<p)return-1;if(l>p)return 1}else{if(a<u)return-1;if(a>u)return 1;++t,++s}}return i.length-n.length}const ho=48,YD=57;function ls(i){return!isNaN(i)&&ho<=i&&i<=YD}function Ss(i,n){const t=Object.create(null),s=new QD(i),a=Math.floor(i.length*.4)+1;for(const u of n){const l=s.measure(u,a);l!==void 0&&(t[u]=l)}return Object.keys(t).sort((u,l)=>{const p=t[u]-t[l];return p!==0?p:WD(u,l)})}class QD{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=Bc(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const s=n.toLowerCase();if(this._inputLowerCase===s)return 1;let a=Bc(s),u=this._inputArray;if(a.length<u.length){const E=a;a=u,u=E}const l=a.length,p=u.length;if(l-p>t)return;const d=this._rows;for(let E=0;E<=p;E++)d[0][E]=E;for(let E=1;E<=l;E++){const I=d[(E-1)%3],S=d[E%3];let k=S[0]=E;for(let R=1;R<=p;R++){const L=a[E-1]===u[R-1]?0:1;let X=Math.min(I[R]+1,S[R-1]+1,I[R-1]+L);if(E>1&&R>1&&a[E-1]===u[R-2]&&a[E-2]===u[R-1]){const he=d[(E-2)%3][R-2];X=Math.min(X,he+1)}X<k&&(k=X),S[R]=X}if(k>t)return}const y=d[l%3][p];return y<=t?y:void 0}}function Bc(i){const n=i.length,t=new Array(n);for(let s=0;s<n;++s)t[s]=i.charCodeAt(s);return t}function Mn(i){if(i==null)return Object.create(null);if(Object.getPrototypeOf(i)===null)return i;const n=Object.create(null);for(const[t,s]of Object.entries(i))n[t]=s;return n}function zD(i){return`"${i.replace(JD,HD)}"`}const JD=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function HD(i){return XD[i.charCodeAt(0)]}const XD=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],rr=Object.freeze({});function gf(i,n,t=of){const s=new Map;for(const he of Object.values(_))s.set(he,yf(n,he));let a,u=Array.isArray(i),l=[i],p=-1,d=[],y=i,E,I;const S=[],k=[];do{p++;const he=p===l.length,Ge=he&&d.length!==0;if(he){if(E=k.length===0?void 0:S[S.length-1],y=I,I=k.pop(),Ge)if(u){y=y.slice();let Ce=0;for(const[Re,rn]of d){const Ke=Re-Ce;rn===null?(y.splice(Ke,1),Ce++):y[Ke]=rn}}else{y=Object.defineProperties({},Object.getOwnPropertyDescriptors(y));for(const[Ce,Re]of d)y[Ce]=Re}p=a.index,l=a.keys,d=a.edits,u=a.inArray,a=a.prev}else if(I){if(E=u?p:l[p],y=I[E],y==null)continue;S.push(E)}let be;if(!Array.isArray(y)){var R,L;xc(y)||pe(!1,`Invalid AST Node: ${Y(y)}.`);const Ce=he?(R=s.get(y.kind))===null||R===void 0?void 0:R.leave:(L=s.get(y.kind))===null||L===void 0?void 0:L.enter;if(be=Ce==null?void 0:Ce.call(n,y,E,I,S,k),be===rr)break;if(be===!1){if(!he){S.pop();continue}}else if(be!==void 0&&(d.push([E,be]),!he))if(xc(be))y=be;else{S.pop();continue}}if(be===void 0&&Ge&&d.push([E,y]),he)S.pop();else{var X;a={inArray:u,index:p,keys:l,edits:d,prev:a},u=Array.isArray(y),l=u?y:(X=t[y.kind])!==null&&X!==void 0?X:[],p=-1,d=[],I&&k.push(I),I=y}}while(a!==void 0);return d.length!==0?d[d.length-1][1]:i}function KD(i){const n=new Array(i.length).fill(null),t=Object.create(null);for(const s of Object.values(_)){let a=!1;const u=new Array(i.length).fill(void 0),l=new Array(i.length).fill(void 0);for(let d=0;d<i.length;++d){const{enter:y,leave:E}=yf(i[d],s);a||(a=y!=null||E!=null),u[d]=y,l[d]=E}if(!a)continue;const p={enter(...d){const y=d[0];for(let I=0;I<i.length;I++)if(n[I]===null){var E;const S=(E=u[I])===null||E===void 0?void 0:E.apply(i[I],d);if(S===!1)n[I]=y;else if(S===rr)n[I]=rr;else if(S!==void 0)return S}},leave(...d){const y=d[0];for(let I=0;I<i.length;I++)if(n[I]===null){var E;const S=(E=l[I])===null||E===void 0?void 0:E.apply(i[I],d);if(S===rr)n[I]=rr;else if(S!==void 0&&S!==!1)return S}else n[I]===y&&(n[I]=null)}};t[s]=p}return t}function yf(i,n){const t=i[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:i.enter,leave:i.leave}}function pt(i){return gf(i,eI)}const ZD=80,eI={Name:{leave:i=>i.value},Variable:{leave:i=>"$"+i.name},Document:{leave:i=>G(i.definitions,`

`)},OperationDefinition:{leave(i){const n=ce("(",G(i.variableDefinitions,", "),")"),t=G([i.operation,G([i.name,n]),G(i.directives," ")]," ");return(t==="query"?"":t+" ")+i.selectionSet}},VariableDefinition:{leave:({variable:i,type:n,defaultValue:t,directives:s})=>i+": "+n+ce(" = ",t)+ce(" ",G(s," "))},SelectionSet:{leave:({selections:i})=>Qn(i)},Field:{leave({alias:i,name:n,arguments:t,directives:s,selectionSet:a}){const u=ce("",i,": ")+n;let l=u+ce("(",G(t,", "),")");return l.length>ZD&&(l=u+ce(`(
`,ps(G(t,`
`)),`
)`)),G([l,G(s," "),a]," ")}},Argument:{leave:({name:i,value:n})=>i+": "+n},FragmentSpread:{leave:({name:i,directives:n})=>"..."+i+ce(" ",G(n," "))},InlineFragment:{leave:({typeCondition:i,directives:n,selectionSet:t})=>G(["...",ce("on ",i),G(n," "),t]," ")},FragmentDefinition:{leave:({name:i,typeCondition:n,variableDefinitions:t,directives:s,selectionSet:a})=>`fragment ${i}${ce("(",G(t,", "),")")} on ${n} ${ce("",G(s," ")," ")}`+a},IntValue:{leave:({value:i})=>i},FloatValue:{leave:({value:i})=>i},StringValue:{leave:({value:i,block:n})=>n?_D(i):zD(i)},BooleanValue:{leave:({value:i})=>i?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:i})=>i},ListValue:{leave:({values:i})=>"["+G(i,", ")+"]"},ObjectValue:{leave:({fields:i})=>"{"+G(i,", ")+"}"},ObjectField:{leave:({name:i,value:n})=>i+": "+n},Directive:{leave:({name:i,arguments:n})=>"@"+i+ce("(",G(n,", "),")")},NamedType:{leave:({name:i})=>i},ListType:{leave:({type:i})=>"["+i+"]"},NonNullType:{leave:({type:i})=>i+"!"},SchemaDefinition:{leave:({description:i,directives:n,operationTypes:t})=>ce("",i,`
`)+G(["schema",G(n," "),Qn(t)]," ")},OperationTypeDefinition:{leave:({operation:i,type:n})=>i+": "+n},ScalarTypeDefinition:{leave:({description:i,name:n,directives:t})=>ce("",i,`
`)+G(["scalar",n,G(t," ")]," ")},ObjectTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:s,fields:a})=>ce("",i,`
`)+G(["type",n,ce("implements ",G(t," & ")),G(s," "),Qn(a)]," ")},FieldDefinition:{leave:({description:i,name:n,arguments:t,type:s,directives:a})=>ce("",i,`
`)+n+(Pc(t)?ce(`(
`,ps(G(t,`
`)),`
)`):ce("(",G(t,", "),")"))+": "+s+ce(" ",G(a," "))},InputValueDefinition:{leave:({description:i,name:n,type:t,defaultValue:s,directives:a})=>ce("",i,`
`)+G([n+": "+t,ce("= ",s),G(a," ")]," ")},InterfaceTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:s,fields:a})=>ce("",i,`
`)+G(["interface",n,ce("implements ",G(t," & ")),G(s," "),Qn(a)]," ")},UnionTypeDefinition:{leave:({description:i,name:n,directives:t,types:s})=>ce("",i,`
`)+G(["union",n,G(t," "),ce("= ",G(s," | "))]," ")},EnumTypeDefinition:{leave:({description:i,name:n,directives:t,values:s})=>ce("",i,`
`)+G(["enum",n,G(t," "),Qn(s)]," ")},EnumValueDefinition:{leave:({description:i,name:n,directives:t})=>ce("",i,`
`)+G([n,G(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:i,name:n,directives:t,fields:s})=>ce("",i,`
`)+G(["input",n,G(t," "),Qn(s)]," ")},DirectiveDefinition:{leave:({description:i,name:n,arguments:t,repeatable:s,locations:a})=>ce("",i,`
`)+"directive @"+n+(Pc(t)?ce(`(
`,ps(G(t,`
`)),`
)`):ce("(",G(t,", "),")"))+(s?" repeatable":"")+" on "+G(a," | ")},SchemaExtension:{leave:({directives:i,operationTypes:n})=>G(["extend schema",G(i," "),Qn(n)]," ")},ScalarTypeExtension:{leave:({name:i,directives:n})=>G(["extend scalar",i,G(n," ")]," ")},ObjectTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:s})=>G(["extend type",i,ce("implements ",G(n," & ")),G(t," "),Qn(s)]," ")},InterfaceTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:s})=>G(["extend interface",i,ce("implements ",G(n," & ")),G(t," "),Qn(s)]," ")},UnionTypeExtension:{leave:({name:i,directives:n,types:t})=>G(["extend union",i,G(n," "),ce("= ",G(t," | "))]," ")},EnumTypeExtension:{leave:({name:i,directives:n,values:t})=>G(["extend enum",i,G(n," "),Qn(t)]," ")},InputObjectTypeExtension:{leave:({name:i,directives:n,fields:t})=>G(["extend input",i,G(n," "),Qn(t)]," ")}};function G(i,n=""){var t;return(t=i==null?void 0:i.filter(s=>s).join(n))!==null&&t!==void 0?t:""}function Qn(i){return ce(`{
`,ps(G(i,`
`)),`
}`)}function ce(i,n,t=""){return n!=null&&n!==""?i+n+t:""}function ps(i){return ce("  ",i.replace(/\n/g,`
  `))}function Pc(i){var n;return(n=i==null?void 0:i.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function mo(i,n){switch(i.kind){case _.NULL:return null;case _.INT:return parseInt(i.value,10);case _.FLOAT:return parseFloat(i.value);case _.STRING:case _.ENUM:case _.BOOLEAN:return i.value;case _.LIST:return i.values.map(t=>mo(t,n));case _.OBJECT:return oi(i.fields,t=>t.name.value,t=>mo(t.value,n));case _.VARIABLE:return n==null?void 0:n[i.name.value]}}function st(i){if(i!=null||pe(!1,"Must provide name."),typeof i=="string"||pe(!1,"Expected name to be a string."),i.length===0)throw new q("Expected name to be a non-empty string.");for(let n=1;n<i.length;++n)if(!lf(i.charCodeAt(n)))throw new q(`Names must only contain [_a-zA-Z0-9] but "${i}" does not.`);if(!So(i.charCodeAt(0)))throw new q(`Names must start with [_a-zA-Z] but "${i}" does not.`);return i}function nI(i){if(i==="true"||i==="false"||i==="null")throw new q(`Enum values cannot be named: ${i}`);return st(i)}function Fo(i){return Jt(i)||En(i)||cn(i)||Kn(i)||Zn(i)||et(i)||pi(i)||ln(i)}function Jt(i){return ht(i,kt)}function En(i){return ht(i,dt)}function tI(i){if(!En(i))throw new Error(`Expected ${Y(i)} to be a GraphQL Object type.`);return i}function cn(i){return ht(i,Es)}function iI(i){if(!cn(i))throw new Error(`Expected ${Y(i)} to be a GraphQL Interface type.`);return i}function Kn(i){return ht(i,Ts)}function Zn(i){return ht(i,ki)}function et(i){return ht(i,Ds)}function pi(i){return ht(i,yn)}function ln(i){return ht(i,oe)}function Ef(i){return Jt(i)||Zn(i)||et(i)||No(i)&&Ef(i.ofType)}function Tf(i){return Jt(i)||En(i)||cn(i)||Kn(i)||Zn(i)||No(i)&&Tf(i.ofType)}function Df(i){return Jt(i)||Zn(i)}function rI(i){return cn(i)||Kn(i)}class yn{constructor(n){Fo(n)||pe(!1,`Expected ${Y(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class oe{constructor(n){If(n)||pe(!1,`Expected ${Y(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function No(i){return pi(i)||ln(i)}function If(i){return Fo(i)&&!ln(i)}function sI(i){if(!If(i))throw new Error(`Expected ${Y(i)} to be a GraphQL nullable type.`);return i}function Rv(i){return Jt(i)||En(i)||cn(i)||Kn(i)||Zn(i)||et(i)}function aI(i){if(i){let n=i;for(;No(n);)n=n.ofType;return n}}function vf(i){return typeof i=="function"?i():i}function _f(i){return typeof i=="function"?i():i}class kt{constructor(n){var t,s,a,u;const l=(t=n.parseValue)!==null&&t!==void 0?t:Lc;this.name=st(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(s=n.serialize)!==null&&s!==void 0?s:Lc,this.parseValue=l,this.parseLiteral=(a=n.parseLiteral)!==null&&a!==void 0?a:(p,d)=>l(mo(p,d)),this.extensions=Mn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(u=n.extensionASTNodes)!==null&&u!==void 0?u:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||pe(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${Y(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||pe(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||pe(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class dt{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=Mn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>bf(n),this._interfaces=()=>Af(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||pe(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${Y(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Sf(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Af(i){var n;const t=vf((n=i.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||pe(!1,`${i.name} interfaces must be an Array or a function which returns an Array.`),t}function bf(i){const n=_f(i.fields);return Ci(n)||pe(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),wt(n,(t,s)=>{var a;Ci(t)||pe(!1,`${i.name}.${s} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||pe(!1,`${i.name}.${s} field resolver must be a function if provided, but got: ${Y(t.resolve)}.`);const u=(a=t.args)!==null&&a!==void 0?a:{};return Ci(u)||pe(!1,`${i.name}.${s} args must be an object with argument names as keys.`),{name:st(s),description:t.description,type:t.type,args:wf(u),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Mn(t.extensions),astNode:t.astNode}})}function wf(i){return Object.entries(i).map(([n,t])=>({name:st(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Mn(t.extensions),astNode:t.astNode}))}function Ci(i){return Ot(i)&&!Array.isArray(i)}function Sf(i){return wt(i,n=>({description:n.description,type:n.type,args:Ff(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function Ff(i){return oi(i,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function oI(i){return ln(i.type)&&i.defaultValue===void 0}class Es{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Mn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=bf.bind(void 0,n),this._interfaces=Af.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||pe(!1,`${this.name} must provide "resolveType" as a function, but got: ${Y(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Sf(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Ts{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Mn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=uI.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||pe(!1,`${this.name} must provide "resolveType" as a function, but got: ${Y(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function uI(i){const n=vf(i.types);return Array.isArray(n)||pe(!1,`Must provide Array of types or a function which returns such an array for Union ${i.name}.`),n}class ki{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.extensions=Mn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=lI(this.name,n.values),this._valueLookup=new Map(this._values.map(s=>[s.value,s])),this._nameLookup=Oi(this._values,s=>s.name)}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return this._values}getValue(n){return this._nameLookup[n]}serialize(n){const t=this._valueLookup.get(n);if(t===void 0)throw new q(`Enum "${this.name}" cannot represent value: ${Y(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const s=Y(n);throw new q(`Enum "${this.name}" cannot represent non-string value: ${s}.`+cs(this,s))}const t=this.getValue(n);if(t==null)throw new q(`Value "${n}" does not exist in "${this.name}" enum.`+cs(this,n));return t.value}parseLiteral(n,t){if(n.kind!==_.ENUM){const a=pt(n);throw new q(`Enum "${this.name}" cannot represent non-enum value: ${a}.`+cs(this,a),{nodes:n})}const s=this.getValue(n.value);if(s==null){const a=pt(n);throw new q(`Value "${a}" does not exist in "${this.name}" enum.`+cs(this,a),{nodes:n})}return s.value}toConfig(){const n=oi(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function cs(i,n){const t=i.getValues().map(a=>a.name),s=Ss(n,t);return ws("the enum value",s)}function lI(i,n){return Ci(n)||pe(!1,`${i} values must be an object with value names as keys.`),Object.entries(n).map(([t,s])=>(Ci(s)||pe(!1,`${i}.${t} must refer to an object with a "value" key representing an internal value but got: ${Y(s)}.`),{name:nI(t),description:s.description,value:s.value!==void 0?s.value:t,deprecationReason:s.deprecationReason,extensions:Mn(s.extensions),astNode:s.astNode}))}class Ds{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.extensions=Mn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=cI.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=wt(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function cI(i){const n=_f(i.fields);return Ci(n)||pe(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),wt(n,(t,s)=>(!("resolve"in t)||pe(!1,`${i.name}.${s} field has a resolve property, but Input Types cannot define resolvers.`),{name:st(s),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Mn(t.extensions),astNode:t.astNode}))}const ro=2147483647,so=-2147483648,fI=new kt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(i){const n=pr(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new q(`Int cannot represent non-integer value: ${Y(n)}`);if(t>ro||t<so)throw new q("Int cannot represent non 32-bit signed integer value: "+Y(n));return t},parseValue(i){if(typeof i!="number"||!Number.isInteger(i))throw new q(`Int cannot represent non-integer value: ${Y(i)}`);if(i>ro||i<so)throw new q(`Int cannot represent non 32-bit signed integer value: ${i}`);return i},parseLiteral(i){if(i.kind!==_.INT)throw new q(`Int cannot represent non-integer value: ${pt(i)}`,{nodes:i});const n=parseInt(i.value,10);if(n>ro||n<so)throw new q(`Int cannot represent non 32-bit signed integer value: ${i.value}`,{nodes:i});return n}}),pI=new kt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(i){const n=pr(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new q(`Float cannot represent non numeric value: ${Y(n)}`);return t},parseValue(i){if(typeof i!="number"||!Number.isFinite(i))throw new q(`Float cannot represent non numeric value: ${Y(i)}`);return i},parseLiteral(i){if(i.kind!==_.FLOAT&&i.kind!==_.INT)throw new q(`Float cannot represent non numeric value: ${pt(i)}`,i);return parseFloat(i.value)}}),Ve=new kt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(i){const n=pr(i);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new q(`String cannot represent value: ${Y(i)}`)},parseValue(i){if(typeof i!="string")throw new q(`String cannot represent a non string value: ${Y(i)}`);return i},parseLiteral(i){if(i.kind!==_.STRING)throw new q(`String cannot represent a non string value: ${pt(i)}`,{nodes:i});return i.value}}),Un=new kt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(i){const n=pr(i);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new q(`Boolean cannot represent a non boolean value: ${Y(n)}`)},parseValue(i){if(typeof i!="boolean")throw new q(`Boolean cannot represent a non boolean value: ${Y(i)}`);return i},parseLiteral(i){if(i.kind!==_.BOOLEAN)throw new q(`Boolean cannot represent a non boolean value: ${pt(i)}`,{nodes:i});return i.value}}),Nf=new kt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(i){const n=pr(i);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new q(`ID cannot represent value: ${Y(i)}`)},parseValue(i){if(typeof i=="string")return i;if(typeof i=="number"&&Number.isInteger(i))return i.toString();throw new q(`ID cannot represent value: ${Y(i)}`)},parseLiteral(i){if(i.kind!==_.STRING&&i.kind!==_.INT)throw new q("ID cannot represent a non-string and non-integer value: "+pt(i),{nodes:i});return i.value}}),Fs=Object.freeze([Ve,fI,pI,Un,Nf]);function dI(i){return Fs.some(({name:n})=>i.name===n)}function pr(i){if(Ot(i)){if(typeof i.valueOf=="function"){const n=i.valueOf();if(!Ot(n))return n}if(typeof i.toJSON=="function")return i.toJSON()}return i}function hI(i){return ht(i,zt)}class zt{constructor(n){var t,s;this.name=st(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Mn(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||pe(!1,`@${n.name} locations must be an Array.`);const a=(s=n.args)!==null&&s!==void 0?s:{};Ot(a)&&!Array.isArray(a)||pe(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=wf(a)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:Ff(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const mI=new zt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[Q.FIELD,Q.FRAGMENT_SPREAD,Q.INLINE_FRAGMENT],args:{if:{type:new oe(Un),description:"Included when true."}}}),gI=new zt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[Q.FIELD,Q.FRAGMENT_SPREAD,Q.INLINE_FRAGMENT],args:{if:{type:new oe(Un),description:"Skipped when true."}}}),yI="No longer supported",Cf=new zt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[Q.FIELD_DEFINITION,Q.ARGUMENT_DEFINITION,Q.INPUT_FIELD_DEFINITION,Q.ENUM_VALUE],args:{reason:{type:Ve,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:yI}}}),Of=new zt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[Q.SCALAR],args:{url:{type:new oe(Ve),description:"The URL that specifies the behavior of this scalar."}}}),Ri=Object.freeze([mI,gI,Cf,Of]);function EI(i){return typeof i=="object"&&typeof(i==null?void 0:i[Symbol.iterator])=="function"}function sr(i,n){if(ln(n)){const t=sr(i,n.ofType);return(t==null?void 0:t.kind)===_.NULL?null:t}if(i===null)return{kind:_.NULL};if(i===void 0)return null;if(pi(n)){const t=n.ofType;if(EI(i)){const s=[];for(const a of i){const u=sr(a,t);u!=null&&s.push(u)}return{kind:_.LIST,values:s}}return sr(i,t)}if(et(n)){if(!Ot(i))return null;const t=[];for(const s of Object.values(n.getFields())){const a=sr(i[s.name],s.type);a&&t.push({kind:_.OBJECT_FIELD,name:{kind:_.NAME,value:s.name},value:a})}return{kind:_.OBJECT,fields:t}}if(Df(n)){const t=n.serialize(i);if(t==null)return null;if(typeof t=="boolean")return{kind:_.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const s=String(t);return Uc.test(s)?{kind:_.INT,value:s}:{kind:_.FLOAT,value:s}}if(typeof t=="string")return Zn(n)?{kind:_.ENUM,value:t}:n===Nf&&Uc.test(t)?{kind:_.INT,value:t}:{kind:_.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${Y(t)}.`)}Xn(!1,"Unexpected input type: "+Y(n))}const Uc=/^-?(?:0|[1-9][0-9]*)$/,Co=new dt({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Ve,resolve:i=>i.description},types:{description:"A list of all types supported by this server.",type:new oe(new yn(new oe(Hn))),resolve(i){return Object.values(i.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new oe(Hn),resolve:i=>i.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Hn,resolve:i=>i.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Hn,resolve:i=>i.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new oe(new yn(new oe(kf))),resolve:i=>i.getDirectives()}})}),kf=new dt({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new oe(Ve),resolve:i=>i.name},description:{type:Ve,resolve:i=>i.description},isRepeatable:{type:new oe(Un),resolve:i=>i.isRepeatable},locations:{type:new oe(new yn(new oe(xf))),resolve:i=>i.locations},args:{type:new oe(new yn(new oe(Ns))),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}}})}),xf=new ki({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:Q.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:Q.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:Q.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:Q.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:Q.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:Q.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:Q.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:Q.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:Q.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:Q.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:Q.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:Q.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:Q.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:Q.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:Q.UNION,description:"Location adjacent to a union definition."},ENUM:{value:Q.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:Q.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:Q.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:Q.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Hn=new dt({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new oe(Bf),resolve(i){if(Jt(i))return Ae.SCALAR;if(En(i))return Ae.OBJECT;if(cn(i))return Ae.INTERFACE;if(Kn(i))return Ae.UNION;if(Zn(i))return Ae.ENUM;if(et(i))return Ae.INPUT_OBJECT;if(pi(i))return Ae.LIST;if(ln(i))return Ae.NON_NULL;Xn(!1,`Unexpected type: "${Y(i)}".`)}},name:{type:Ve,resolve:i=>"name"in i?i.name:void 0},description:{type:Ve,resolve:i=>"description"in i?i.description:void 0},specifiedByURL:{type:Ve,resolve:i=>"specifiedByURL"in i?i.specifiedByURL:void 0},fields:{type:new yn(new oe(Rf)),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(En(i)||cn(i)){const t=Object.values(i.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},interfaces:{type:new yn(new oe(Hn)),resolve(i){if(En(i)||cn(i))return i.getInterfaces()}},possibleTypes:{type:new yn(new oe(Hn)),resolve(i,n,t,{schema:s}){if(rI(i))return s.getPossibleTypes(i)}},enumValues:{type:new yn(new oe(Lf)),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(Zn(i)){const t=i.getValues();return n?t:t.filter(s=>s.deprecationReason==null)}}},inputFields:{type:new yn(new oe(Ns)),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(et(i)){const t=Object.values(i.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},ofType:{type:Hn,resolve:i=>"ofType"in i?i.ofType:void 0}})}),Rf=new dt({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new oe(Ve),resolve:i=>i.name},description:{type:Ve,resolve:i=>i.description},args:{type:new oe(new yn(new oe(Ns))),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}},type:{type:new oe(Hn),resolve:i=>i.type},isDeprecated:{type:new oe(Un),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ve,resolve:i=>i.deprecationReason}})}),Ns=new dt({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new oe(Ve),resolve:i=>i.name},description:{type:Ve,resolve:i=>i.description},type:{type:new oe(Hn),resolve:i=>i.type},defaultValue:{type:Ve,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(i){const{type:n,defaultValue:t}=i,s=sr(t,n);return s?pt(s):null}},isDeprecated:{type:new oe(Un),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ve,resolve:i=>i.deprecationReason}})}),Lf=new dt({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new oe(Ve),resolve:i=>i.name},description:{type:Ve,resolve:i=>i.description},isDeprecated:{type:new oe(Un),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ve,resolve:i=>i.deprecationReason}})});var Ae;(function(i){i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.INPUT_OBJECT="INPUT_OBJECT",i.LIST="LIST",i.NON_NULL="NON_NULL"})(Ae||(Ae={}));const Bf=new ki({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:Ae.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:Ae.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:Ae.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:Ae.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:Ae.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:Ae.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:Ae.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:Ae.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new oe(Co);new oe(Ve);new oe(Ve);const Cs=Object.freeze([Co,kf,xf,Hn,Rf,Ns,Lf,Bf]);function TI(i){return Cs.some(({name:n})=>i.name===n)}class Pf{constructor(n){var t,s;this.__validationErrors=n.assumeValid===!0?[]:void 0,Ot(n)||pe(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||pe(!1,`"types" must be Array if provided but got: ${Y(n.types)}.`),!n.directives||Array.isArray(n.directives)||pe(!1,`"directives" must be Array if provided but got: ${Y(n.directives)}.`),this.description=n.description,this.extensions=Mn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(s=n.directives)!==null&&s!==void 0?s:Ri;const a=new Set(n.types);if(n.types!=null)for(const u of n.types)a.delete(u),zn(u,a);this._queryType!=null&&zn(this._queryType,a),this._mutationType!=null&&zn(this._mutationType,a),this._subscriptionType!=null&&zn(this._subscriptionType,a);for(const u of this._directives)if(hI(u))for(const l of u.args)zn(l.type,a);zn(Co,a),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const u of a){if(u==null)continue;const l=u.name;if(l||pe(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[l]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${l}".`);if(this._typeMap[l]=u,cn(u)){for(const p of u.getInterfaces())if(cn(p)){let d=this._implementationsMap[p.name];d===void 0&&(d=this._implementationsMap[p.name]={objects:[],interfaces:[]}),d.interfaces.push(u)}}else if(En(u)){for(const p of u.getInterfaces())if(cn(p)){let d=this._implementationsMap[p.name];d===void 0&&(d=this._implementationsMap[p.name]={objects:[],interfaces:[]}),d.objects.push(u)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case Pn.QUERY:return this.getQueryType();case Pn.MUTATION:return this.getMutationType();case Pn.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return Kn(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let s=this._subTypeMap[n.name];if(s===void 0){if(s=Object.create(null),Kn(n))for(const a of n.getTypes())s[a.name]=!0;else{const a=this.getImplementations(n);for(const u of a.objects)s[u.name]=!0;for(const u of a.interfaces)s[u.name]=!0}this._subTypeMap[n.name]=s}return s[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function zn(i,n){const t=aI(i);if(!n.has(t)){if(n.add(t),Kn(t))for(const s of t.getTypes())zn(s,n);else if(En(t)||cn(t)){for(const s of t.getInterfaces())zn(s,n);for(const s of Object.values(t.getFields())){zn(s.type,n);for(const a of s.args)zn(a.type,n)}}else if(et(t))for(const s of Object.values(t.getFields()))zn(s.type,n)}return n}function DI(i){return i.kind===_.SCHEMA_DEFINITION||dr(i)||i.kind===_.DIRECTIVE_DEFINITION}function dr(i){return i.kind===_.SCALAR_TYPE_DEFINITION||i.kind===_.OBJECT_TYPE_DEFINITION||i.kind===_.INTERFACE_TYPE_DEFINITION||i.kind===_.UNION_TYPE_DEFINITION||i.kind===_.ENUM_TYPE_DEFINITION||i.kind===_.INPUT_OBJECT_TYPE_DEFINITION}function II(i){return i.kind===_.SCHEMA_EXTENSION||Oo(i)}function Oo(i){return i.kind===_.SCALAR_TYPE_EXTENSION||i.kind===_.OBJECT_TYPE_EXTENSION||i.kind===_.INTERFACE_TYPE_EXTENSION||i.kind===_.UNION_TYPE_EXTENSION||i.kind===_.ENUM_TYPE_EXTENSION||i.kind===_.INPUT_OBJECT_TYPE_EXTENSION}function vI(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():Ri;for(const l of s)n[l.name]=l.args.map(p=>p.name);const a=i.getDocument().definitions;for(const l of a)if(l.kind===_.DIRECTIVE_DEFINITION){var u;const p=(u=l.arguments)!==null&&u!==void 0?u:[];n[l.name.value]=p.map(d=>d.name.value)}return{Directive(l){const p=l.name.value,d=n[p];if(l.arguments&&d)for(const y of l.arguments){const E=y.name.value;if(!d.includes(E)){const I=Ss(E,d);i.reportError(new q(`Unknown argument "${E}" on directive "@${p}".`+ws(I),{nodes:y}))}}return!1}}}function _I(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():Ri;for(const u of s)n[u.name]=u.locations;const a=i.getDocument().definitions;for(const u of a)u.kind===_.DIRECTIVE_DEFINITION&&(n[u.name.value]=u.locations.map(l=>l.value));return{Directive(u,l,p,d,y){const E=u.name.value,I=n[E];if(!I){i.reportError(new q(`Unknown directive "@${E}".`,{nodes:u}));return}const S=AI(y);S&&!I.includes(S)&&i.reportError(new q(`Directive "@${E}" may not be used on ${S}.`,{nodes:u}))}}}function AI(i){const n=i[i.length-1];switch("kind"in n||Xn(!1),n.kind){case _.OPERATION_DEFINITION:return bI(n.operation);case _.FIELD:return Q.FIELD;case _.FRAGMENT_SPREAD:return Q.FRAGMENT_SPREAD;case _.INLINE_FRAGMENT:return Q.INLINE_FRAGMENT;case _.FRAGMENT_DEFINITION:return Q.FRAGMENT_DEFINITION;case _.VARIABLE_DEFINITION:return Q.VARIABLE_DEFINITION;case _.SCHEMA_DEFINITION:case _.SCHEMA_EXTENSION:return Q.SCHEMA;case _.SCALAR_TYPE_DEFINITION:case _.SCALAR_TYPE_EXTENSION:return Q.SCALAR;case _.OBJECT_TYPE_DEFINITION:case _.OBJECT_TYPE_EXTENSION:return Q.OBJECT;case _.FIELD_DEFINITION:return Q.FIELD_DEFINITION;case _.INTERFACE_TYPE_DEFINITION:case _.INTERFACE_TYPE_EXTENSION:return Q.INTERFACE;case _.UNION_TYPE_DEFINITION:case _.UNION_TYPE_EXTENSION:return Q.UNION;case _.ENUM_TYPE_DEFINITION:case _.ENUM_TYPE_EXTENSION:return Q.ENUM;case _.ENUM_VALUE_DEFINITION:return Q.ENUM_VALUE;case _.INPUT_OBJECT_TYPE_DEFINITION:case _.INPUT_OBJECT_TYPE_EXTENSION:return Q.INPUT_OBJECT;case _.INPUT_VALUE_DEFINITION:{const t=i[i.length-3];return"kind"in t||Xn(!1),t.kind===_.INPUT_OBJECT_TYPE_DEFINITION?Q.INPUT_FIELD_DEFINITION:Q.ARGUMENT_DEFINITION}default:Xn(!1,"Unexpected kind: "+Y(n.kind))}}function bI(i){switch(i){case Pn.QUERY:return Q.QUERY;case Pn.MUTATION:return Q.MUTATION;case Pn.SUBSCRIPTION:return Q.SUBSCRIPTION}}function wI(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);for(const u of i.getDocument().definitions)dr(u)&&(s[u.name.value]=!0);const a=[...Object.keys(t),...Object.keys(s)];return{NamedType(u,l,p,d,y){const E=u.name.value;if(!t[E]&&!s[E]){var I;const S=(I=y[2])!==null&&I!==void 0?I:p,k=S!=null&&SI(S);if(k&&Mc.includes(E))return;const R=Ss(E,k?Mc.concat(a):a);i.reportError(new q(`Unknown type "${E}".`+ws(R),{nodes:u}))}}}}const Mc=[...Fs,...Cs].map(i=>i.name);function SI(i){return"kind"in i&&(DI(i)||II(i))}function FI(i){var n,t,s;const a=i.getSchema(),u=(n=(t=(s=a==null?void 0:a.astNode)!==null&&s!==void 0?s:a==null?void 0:a.getQueryType())!==null&&t!==void 0?t:a==null?void 0:a.getMutationType())!==null&&n!==void 0?n:a==null?void 0:a.getSubscriptionType();let l=0;return{SchemaDefinition(p){if(u){i.reportError(new q("Cannot define a new schema within a schema extension.",{nodes:p}));return}l>0&&i.reportError(new q("Must provide only one schema definition.",{nodes:p})),++l}}}function NI(i){const n=i.getSchema(),t=Object.create(null);for(const a of i.getDocument().definitions)dr(a)&&(t[a.name.value]=a);return{ScalarTypeExtension:s,ObjectTypeExtension:s,InterfaceTypeExtension:s,UnionTypeExtension:s,EnumTypeExtension:s,InputObjectTypeExtension:s};function s(a){const u=a.name.value,l=t[u],p=n==null?void 0:n.getType(u);let d;if(l?d=CI[l.kind]:p&&(d=OI(p)),d){if(d!==a.kind){const y=kI(a.kind);i.reportError(new q(`Cannot extend non-${y} type "${u}".`,{nodes:l?[l,a]:a}))}}else{const y=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),E=Ss(u,y);i.reportError(new q(`Cannot extend type "${u}" because it is not defined.`+ws(E),{nodes:a.name}))}}}const CI={[_.SCALAR_TYPE_DEFINITION]:_.SCALAR_TYPE_EXTENSION,[_.OBJECT_TYPE_DEFINITION]:_.OBJECT_TYPE_EXTENSION,[_.INTERFACE_TYPE_DEFINITION]:_.INTERFACE_TYPE_EXTENSION,[_.UNION_TYPE_DEFINITION]:_.UNION_TYPE_EXTENSION,[_.ENUM_TYPE_DEFINITION]:_.ENUM_TYPE_EXTENSION,[_.INPUT_OBJECT_TYPE_DEFINITION]:_.INPUT_OBJECT_TYPE_EXTENSION};function OI(i){if(Jt(i))return _.SCALAR_TYPE_EXTENSION;if(En(i))return _.OBJECT_TYPE_EXTENSION;if(cn(i))return _.INTERFACE_TYPE_EXTENSION;if(Kn(i))return _.UNION_TYPE_EXTENSION;if(Zn(i))return _.ENUM_TYPE_EXTENSION;if(et(i))return _.INPUT_OBJECT_TYPE_EXTENSION;Xn(!1,"Unexpected type: "+Y(i))}function kI(i){switch(i){case _.SCALAR_TYPE_EXTENSION:return"scalar";case _.OBJECT_TYPE_EXTENSION:return"object";case _.INTERFACE_TYPE_EXTENSION:return"interface";case _.UNION_TYPE_EXTENSION:return"union";case _.ENUM_TYPE_EXTENSION:return"enum";case _.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Xn(!1,"Unexpected kind: "+Y(i))}}function xI(i){var n;const t=Object.create(null),s=i.getSchema(),a=(n=s==null?void 0:s.getDirectives())!==null&&n!==void 0?n:Ri;for(const p of a)t[p.name]=Oi(p.args.filter(oI),d=>d.name);const u=i.getDocument().definitions;for(const p of u)if(p.kind===_.DIRECTIVE_DEFINITION){var l;const d=(l=p.arguments)!==null&&l!==void 0?l:[];t[p.name.value]=Oi(d.filter(RI),y=>y.name.value)}return{Directive:{leave(p){const d=p.name.value,y=t[d];if(y){var E;const I=(E=p.arguments)!==null&&E!==void 0?E:[],S=new Set(I.map(k=>k.name.value));for(const[k,R]of Object.entries(y))if(!S.has(k)){const L=Fo(R.type)?Y(R.type):pt(R.type);i.reportError(new q(`Directive "@${d}" argument "${k}" of type "${L}" is required, but it was not provided.`,{nodes:p}))}}}}}}function RI(i){return i.type.kind===_.NON_NULL_TYPE&&i.defaultValue==null}function qt(i,n,t){if(i){if(i.kind===_.VARIABLE){const s=i.name.value;if(t==null||t[s]===void 0)return;const a=t[s];return a===null&&ln(n)?void 0:a}if(ln(n))return i.kind===_.NULL?void 0:qt(i,n.ofType,t);if(i.kind===_.NULL)return null;if(pi(n)){const s=n.ofType;if(i.kind===_.LIST){const u=[];for(const l of i.values)if($c(l,t)){if(ln(s))return;u.push(null)}else{const p=qt(l,s,t);if(p===void 0)return;u.push(p)}return u}const a=qt(i,s,t);return a===void 0?void 0:[a]}if(et(n)){if(i.kind!==_.OBJECT)return;const s=Object.create(null),a=Oi(i.fields,u=>u.name.value);for(const u of Object.values(n.getFields())){const l=a[u.name];if(!l||$c(l.value,t)){if(u.defaultValue!==void 0)s[u.name]=u.defaultValue;else if(ln(u.type))return;continue}const p=qt(l.value,u.type,t);if(p===void 0)return;s[u.name]=p}return s}if(Df(n)){let s;try{s=n.parseLiteral(i,t)}catch{return}return s===void 0?void 0:s}Xn(!1,"Unexpected input type: "+Y(n))}}function $c(i,n){return i.kind===_.VARIABLE&&(n==null||n[i.name.value]===void 0)}function LI(i,n,t){var s;const a={},u=(s=n.arguments)!==null&&s!==void 0?s:[],l=Oi(u,p=>p.name.value);for(const p of i.args){const d=p.name,y=p.type,E=l[d];if(!E){if(p.defaultValue!==void 0)a[d]=p.defaultValue;else if(ln(y))throw new q(`Argument "${d}" of required type "${Y(y)}" was not provided.`,{nodes:n});continue}const I=E.value;let S=I.kind===_.NULL;if(I.kind===_.VARIABLE){const R=I.name.value;if(t==null||!BI(t,R)){if(p.defaultValue!==void 0)a[d]=p.defaultValue;else if(ln(y))throw new q(`Argument "${d}" of required type "${Y(y)}" was provided the variable "$${R}" which was not provided a runtime value.`,{nodes:I});continue}S=t[R]==null}if(S&&ln(y))throw new q(`Argument "${d}" of non-null type "${Y(y)}" must not be null.`,{nodes:I});const k=qt(I,y,t);if(k===void 0)throw new q(`Argument "${d}" has invalid value ${pt(I)}.`,{nodes:I});a[d]=k}return a}function Uf(i,n,t){var s;const a=(s=n.directives)===null||s===void 0?void 0:s.find(u=>u.name.value===i.name);if(a)return LI(i,a,t)}function BI(i,n){return Object.prototype.hasOwnProperty.call(i,n)}function Mf(i,n){const t=new Map;for(const s of i){const a=n(s),u=t.get(a);u===void 0?t.set(a,[s]):u.push(s)}return t}function PI(i){return{DirectiveDefinition(s){var a;const u=(a=s.arguments)!==null&&a!==void 0?a:[];return t(`@${s.name.value}`,u)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(s){var a;const u=s.name.value,l=(a=s.fields)!==null&&a!==void 0?a:[];for(const d of l){var p;const y=d.name.value,E=(p=d.arguments)!==null&&p!==void 0?p:[];t(`${u}.${y}`,E)}return!1}function t(s,a){const u=Mf(a,l=>l.name.value);for(const[l,p]of u)p.length>1&&i.reportError(new q(`Argument "${s}(${l}:)" can only be defined once.`,{nodes:p.map(d=>d.name)}));return!1}}function UI(i){return{Field:n,Directive:n};function n(t){var s;const a=(s=t.arguments)!==null&&s!==void 0?s:[],u=Mf(a,l=>l.name.value);for(const[l,p]of u)p.length>1&&i.reportError(new q(`There can be only one argument named "${l}".`,{nodes:p.map(d=>d.name)}))}}function MI(i){const n=Object.create(null),t=i.getSchema();return{DirectiveDefinition(s){const a=s.name.value;if(t!=null&&t.getDirective(a)){i.reportError(new q(`Directive "@${a}" already exists in the schema. It cannot be redefined.`,{nodes:s.name}));return}return n[a]?i.reportError(new q(`There can be only one directive named "@${a}".`,{nodes:[n[a],s.name]})):n[a]=s.name,!1}}}function $I(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():Ri;for(const p of s)n[p.name]=!p.isRepeatable;const a=i.getDocument().definitions;for(const p of a)p.kind===_.DIRECTIVE_DEFINITION&&(n[p.name.value]=!p.repeatable);const u=Object.create(null),l=Object.create(null);return{enter(p){if(!("directives"in p)||!p.directives)return;let d;if(p.kind===_.SCHEMA_DEFINITION||p.kind===_.SCHEMA_EXTENSION)d=u;else if(dr(p)||Oo(p)){const y=p.name.value;d=l[y],d===void 0&&(l[y]=d=Object.create(null))}else d=Object.create(null);for(const y of p.directives){const E=y.name.value;n[E]&&(d[E]?i.reportError(new q(`The directive "@${E}" can only be used once at this location.`,{nodes:[d[E],y]})):d[E]=y)}}}}function VI(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{EnumTypeDefinition:a,EnumTypeExtension:a};function a(u){var l;const p=u.name.value;s[p]||(s[p]=Object.create(null));const d=(l=u.values)!==null&&l!==void 0?l:[],y=s[p];for(const E of d){const I=E.name.value,S=t[p];Zn(S)&&S.getValue(I)?i.reportError(new q(`Enum value "${p}.${I}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:E.name})):y[I]?i.reportError(new q(`Enum value "${p}.${I}" can only be defined once.`,{nodes:[y[I],E.name]})):y[I]=E.name}return!1}}function GI(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{InputObjectTypeDefinition:a,InputObjectTypeExtension:a,InterfaceTypeDefinition:a,InterfaceTypeExtension:a,ObjectTypeDefinition:a,ObjectTypeExtension:a};function a(u){var l;const p=u.name.value;s[p]||(s[p]=Object.create(null));const d=(l=u.fields)!==null&&l!==void 0?l:[],y=s[p];for(const E of d){const I=E.name.value;jI(t[p],I)?i.reportError(new q(`Field "${p}.${I}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:E.name})):y[I]?i.reportError(new q(`Field "${p}.${I}" can only be defined once.`,{nodes:[y[I],E.name]})):y[I]=E.name}return!1}}function jI(i,n){return En(i)||cn(i)||et(i)?i.getFields()[n]!=null:!1}function qI(i){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const s=n.pop();s||Xn(!1),t=s}},ObjectField(s){const a=s.name.value;t[a]?i.reportError(new q(`There can be only one input field named "${a}".`,{nodes:[t[a],s.name]})):t[a]=s.name}}}function WI(i){const n=i.getSchema(),t=Object.create(null),s=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:a,SchemaExtension:a};function a(u){var l;const p=(l=u.operationTypes)!==null&&l!==void 0?l:[];for(const d of p){const y=d.operation,E=t[y];s[y]?i.reportError(new q(`Type for ${y} already defined in the schema. It cannot be redefined.`,{nodes:d})):E?i.reportError(new q(`There can be only one ${y} type in schema.`,{nodes:[E,d]})):t[y]=d}return!1}}function YI(i){const n=Object.create(null),t=i.getSchema();return{ScalarTypeDefinition:s,ObjectTypeDefinition:s,InterfaceTypeDefinition:s,UnionTypeDefinition:s,EnumTypeDefinition:s,InputObjectTypeDefinition:s};function s(a){const u=a.name.value;if(t!=null&&t.getType(u)){i.reportError(new q(`Type "${u}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:a.name}));return}return n[u]?i.reportError(new q(`There can be only one type named "${u}".`,{nodes:[n[u],a.name]})):n[u]=a.name,!1}}const QI=Object.freeze([FI,WI,YI,VI,GI,PI,MI,wI,_I,$I,NI,vI,UI,qI,xI]);class zI{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const s of this.getDocument().definitions)s.kind===_.FRAGMENT_DEFINITION&&(t[s.name.value]=s);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const s=[n];let a;for(;a=s.pop();)for(const u of a.selections)u.kind===_.FRAGMENT_SPREAD?t.push(u):u.selectionSet&&s.push(u.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const s=Object.create(null),a=[n.selectionSet];let u;for(;u=a.pop();)for(const l of this.getFragmentSpreads(u)){const p=l.name.value;if(s[p]!==!0){s[p]=!0;const d=this.getFragment(p);d&&(t.push(d),a.push(d.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class JI extends zI{constructor(n,t,s){super(n,s),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function HI(i,n,t=QI){const s=[],a=new JI(i,n,l=>{s.push(l)}),u=t.map(l=>l(a));return gf(i,KD(u)),s}function XI(i){const n=HI(i);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function KI(i,n){Ot(i)&&Ot(i.__schema)||pe(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${Y(i)}.`);const t=i.__schema,s=oi(t.types,O=>O.name,O=>S(O));for(const O of[...Fs,...Cs])s[O.name]&&(s[O.name]=O);const a=t.queryType?E(t.queryType):null,u=t.mutationType?E(t.mutationType):null,l=t.subscriptionType?E(t.subscriptionType):null,p=t.directives?t.directives.map(mt):[];return new Pf({description:t.description,query:a,mutation:u,subscription:l,types:Object.values(s),directives:p,assumeValid:n==null?void 0:n.assumeValid});function d(O){if(O.kind===Ae.LIST){const Z=O.ofType;if(!Z)throw new Error("Decorated type deeper than introspection query.");return new yn(d(Z))}if(O.kind===Ae.NON_NULL){const Z=O.ofType;if(!Z)throw new Error("Decorated type deeper than introspection query.");const sn=d(Z);return new oe(sI(sn))}return y(O)}function y(O){const Z=O.name;if(!Z)throw new Error(`Unknown type reference: ${Y(O)}.`);const sn=s[Z];if(!sn)throw new Error(`Invalid or incomplete schema, unknown type: ${Z}. Ensure that a full introspection query is used in order to build a client schema.`);return sn}function E(O){return tI(y(O))}function I(O){return iI(y(O))}function S(O){if(O!=null&&O.name!=null&&O.kind!=null)switch(O.kind){case Ae.SCALAR:return k(O);case Ae.OBJECT:return L(O);case Ae.INTERFACE:return X(O);case Ae.UNION:return he(O);case Ae.ENUM:return Ge(O);case Ae.INPUT_OBJECT:return be(O)}const Z=Y(O);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${Z}.`)}function k(O){return new kt({name:O.name,description:O.description,specifiedByURL:O.specifiedByURL})}function R(O){if(O.interfaces===null&&O.kind===Ae.INTERFACE)return[];if(!O.interfaces){const Z=Y(O);throw new Error(`Introspection result missing interfaces: ${Z}.`)}return O.interfaces.map(I)}function L(O){return new dt({name:O.name,description:O.description,interfaces:()=>R(O),fields:()=>Ce(O)})}function X(O){return new Es({name:O.name,description:O.description,interfaces:()=>R(O),fields:()=>Ce(O)})}function he(O){if(!O.possibleTypes){const Z=Y(O);throw new Error(`Introspection result missing possibleTypes: ${Z}.`)}return new Ts({name:O.name,description:O.description,types:()=>O.possibleTypes.map(E)})}function Ge(O){if(!O.enumValues){const Z=Y(O);throw new Error(`Introspection result missing enumValues: ${Z}.`)}return new ki({name:O.name,description:O.description,values:oi(O.enumValues,Z=>Z.name,Z=>({description:Z.description,deprecationReason:Z.deprecationReason}))})}function be(O){if(!O.inputFields){const Z=Y(O);throw new Error(`Introspection result missing inputFields: ${Z}.`)}return new Ds({name:O.name,description:O.description,fields:()=>rn(O.inputFields)})}function Ce(O){if(!O.fields)throw new Error(`Introspection result missing fields: ${Y(O)}.`);return oi(O.fields,Z=>Z.name,Re)}function Re(O){const Z=d(O.type);if(!Tf(Z)){const sn=Y(Z);throw new Error(`Introspection must provide output type for fields, but received: ${sn}.`)}if(!O.args){const sn=Y(O);throw new Error(`Introspection result missing field args: ${sn}.`)}return{description:O.description,deprecationReason:O.deprecationReason,type:Z,args:rn(O.args)}}function rn(O){return oi(O,Z=>Z.name,Ke)}function Ke(O){const Z=d(O.type);if(!Ef(Z)){const xt=Y(Z);throw new Error(`Introspection must provide input type for arguments, but received: ${xt}.`)}const sn=O.defaultValue!=null?qt(jD(O.defaultValue),Z):void 0;return{description:O.description,type:Z,defaultValue:sn,deprecationReason:O.deprecationReason}}function mt(O){if(!O.args){const Z=Y(O);throw new Error(`Introspection result missing directive args: ${Z}.`)}if(!O.locations){const Z=Y(O);throw new Error(`Introspection result missing directive locations: ${Z}.`)}return new zt({name:O.name,description:O.description,isRepeatable:O.isRepeatable,locations:O.locations.slice(),args:rn(O.args)})}}function ZI(i,n,t){var s,a,u,l;const p=[],d=Object.create(null),y=[];let E;const I=[];for(const w of n.definitions)if(w.kind===_.SCHEMA_DEFINITION)E=w;else if(w.kind===_.SCHEMA_EXTENSION)I.push(w);else if(dr(w))p.push(w);else if(Oo(w)){const V=w.name.value,P=d[V];d[V]=P?P.concat([w]):[w]}else w.kind===_.DIRECTIVE_DEFINITION&&y.push(w);if(Object.keys(d).length===0&&p.length===0&&y.length===0&&I.length===0&&E==null)return i;const S=Object.create(null);for(const w of i.types)S[w.name]=Ge(w);for(const w of p){var k;const V=w.name.value;S[V]=(k=Vc[V])!==null&&k!==void 0?k:Sn(w)}const R={query:i.query&&X(i.query),mutation:i.mutation&&X(i.mutation),subscription:i.subscription&&X(i.subscription),...E&&sn([E]),...sn(I)};return{description:(s=E)===null||s===void 0||(a=s.description)===null||a===void 0?void 0:a.value,...R,types:Object.values(S),directives:[...i.directives.map(he),...y.map(hr)],extensions:Object.create(null),astNode:(u=E)!==null&&u!==void 0?u:i.astNode,extensionASTNodes:i.extensionASTNodes.concat(I),assumeValid:(l=t==null?void 0:t.assumeValid)!==null&&l!==void 0?l:!1};function L(w){return pi(w)?new yn(L(w.ofType)):ln(w)?new oe(L(w.ofType)):X(w)}function X(w){return S[w.name]}function he(w){const V=w.toConfig();return new zt({...V,args:wt(V.args,Z)})}function Ge(w){if(TI(w)||dI(w))return w;if(Jt(w))return Re(w);if(En(w))return rn(w);if(cn(w))return Ke(w);if(Kn(w))return mt(w);if(Zn(w))return Ce(w);if(et(w))return be(w);Xn(!1,"Unexpected type: "+Y(w))}function be(w){var V;const P=w.toConfig(),M=(V=d[P.name])!==null&&V!==void 0?V:[];return new Ds({...P,fields:()=>({...wt(P.fields,me=>({...me,type:L(me.type)})),...at(M)}),extensionASTNodes:P.extensionASTNodes.concat(M)})}function Ce(w){var V;const P=w.toConfig(),M=(V=d[w.name])!==null&&V!==void 0?V:[];return new ki({...P,values:{...P.values,...$n(M)},extensionASTNodes:P.extensionASTNodes.concat(M)})}function Re(w){var V;const P=w.toConfig(),M=(V=d[P.name])!==null&&V!==void 0?V:[];let me=P.specifiedByURL;for(const ge of M){var Ue;me=(Ue=Gc(ge))!==null&&Ue!==void 0?Ue:me}return new kt({...P,specifiedByURL:me,extensionASTNodes:P.extensionASTNodes.concat(M)})}function rn(w){var V;const P=w.toConfig(),M=(V=d[P.name])!==null&&V!==void 0?V:[];return new dt({...P,interfaces:()=>[...w.getInterfaces().map(X),...hi(M)],fields:()=>({...wt(P.fields,O),...di(M)}),extensionASTNodes:P.extensionASTNodes.concat(M)})}function Ke(w){var V;const P=w.toConfig(),M=(V=d[P.name])!==null&&V!==void 0?V:[];return new Es({...P,interfaces:()=>[...w.getInterfaces().map(X),...hi(M)],fields:()=>({...wt(P.fields,O),...di(M)}),extensionASTNodes:P.extensionASTNodes.concat(M)})}function mt(w){var V;const P=w.toConfig(),M=(V=d[P.name])!==null&&V!==void 0?V:[];return new Ts({...P,types:()=>[...w.getTypes().map(X),...Xt(M)],extensionASTNodes:P.extensionASTNodes.concat(M)})}function O(w){return{...w,type:L(w.type),args:w.args&&wt(w.args,Z)}}function Z(w){return{...w,type:L(w.type)}}function sn(w){const V={};for(const M of w){var P;const me=(P=M.operationTypes)!==null&&P!==void 0?P:[];for(const Ue of me)V[Ue.operation]=xt(Ue.type)}return V}function xt(w){var V;const P=w.name.value,M=(V=Vc[P])!==null&&V!==void 0?V:S[P];if(M===void 0)throw new Error(`Unknown type: "${P}".`);return M}function Ht(w){return w.kind===_.LIST_TYPE?new yn(Ht(w.type)):w.kind===_.NON_NULL_TYPE?new oe(Ht(w.type)):xt(w)}function hr(w){var V;return new zt({name:w.name.value,description:(V=w.description)===null||V===void 0?void 0:V.value,locations:w.locations.map(({value:P})=>P),isRepeatable:w.repeatable,args:mr(w.arguments),astNode:w})}function di(w){const V=Object.create(null);for(const me of w){var P;const Ue=(P=me.fields)!==null&&P!==void 0?P:[];for(const ge of Ue){var M;V[ge.name.value]={type:Ht(ge.type),description:(M=ge.description)===null||M===void 0?void 0:M.value,args:mr(ge.arguments),deprecationReason:fs(ge),astNode:ge}}}return V}function mr(w){const V=w??[],P=Object.create(null);for(const me of V){var M;const Ue=Ht(me.type);P[me.name.value]={type:Ue,description:(M=me.description)===null||M===void 0?void 0:M.value,defaultValue:qt(me.defaultValue,Ue),deprecationReason:fs(me),astNode:me}}return P}function at(w){const V=Object.create(null);for(const me of w){var P;const Ue=(P=me.fields)!==null&&P!==void 0?P:[];for(const ge of Ue){var M;const Fn=Ht(ge.type);V[ge.name.value]={type:Fn,description:(M=ge.description)===null||M===void 0?void 0:M.value,defaultValue:qt(ge.defaultValue,Fn),deprecationReason:fs(ge),astNode:ge}}}return V}function $n(w){const V=Object.create(null);for(const me of w){var P;const Ue=(P=me.values)!==null&&P!==void 0?P:[];for(const ge of Ue){var M;V[ge.name.value]={description:(M=ge.description)===null||M===void 0?void 0:M.value,deprecationReason:fs(ge),astNode:ge}}}return V}function hi(w){return w.flatMap(V=>{var P,M;return(P=(M=V.interfaces)===null||M===void 0?void 0:M.map(xt))!==null&&P!==void 0?P:[]})}function Xt(w){return w.flatMap(V=>{var P,M;return(P=(M=V.types)===null||M===void 0?void 0:M.map(xt))!==null&&P!==void 0?P:[]})}function Sn(w){var V;const P=w.name.value,M=(V=d[P])!==null&&V!==void 0?V:[];switch(w.kind){case _.OBJECT_TYPE_DEFINITION:{var me;const Ze=[w,...M];return new dt({name:P,description:(me=w.description)===null||me===void 0?void 0:me.value,interfaces:()=>hi(Ze),fields:()=>di(Ze),astNode:w,extensionASTNodes:M})}case _.INTERFACE_TYPE_DEFINITION:{var Ue;const Ze=[w,...M];return new Es({name:P,description:(Ue=w.description)===null||Ue===void 0?void 0:Ue.value,interfaces:()=>hi(Ze),fields:()=>di(Ze),astNode:w,extensionASTNodes:M})}case _.ENUM_TYPE_DEFINITION:{var ge;const Ze=[w,...M];return new ki({name:P,description:(ge=w.description)===null||ge===void 0?void 0:ge.value,values:$n(Ze),astNode:w,extensionASTNodes:M})}case _.UNION_TYPE_DEFINITION:{var Fn;const Ze=[w,...M];return new Ts({name:P,description:(Fn=w.description)===null||Fn===void 0?void 0:Fn.value,types:()=>Xt(Ze),astNode:w,extensionASTNodes:M})}case _.SCALAR_TYPE_DEFINITION:{var Li;return new kt({name:P,description:(Li=w.description)===null||Li===void 0?void 0:Li.value,specifiedByURL:Gc(w),astNode:w,extensionASTNodes:M})}case _.INPUT_OBJECT_TYPE_DEFINITION:{var Rt;const Ze=[w,...M];return new Ds({name:P,description:(Rt=w.description)===null||Rt===void 0?void 0:Rt.value,fields:()=>at(Ze),astNode:w,extensionASTNodes:M})}}}}const Vc=Oi([...Fs,...Cs],i=>i.name);function fs(i){const n=Uf(Cf,i);return n==null?void 0:n.reason}function Gc(i){const n=Uf(Of,i);return n==null?void 0:n.url}function ev(i,n){i!=null&&i.kind===_.DOCUMENT||pe(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&XI(i);const s=ZI({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},i,n);if(s.astNode==null)for(const u of s.types)switch(u.name){case"Query":s.query=u;break;case"Mutation":s.mutation=u;break;case"Subscription":s.subscription=u;break}const a=[...s.directives,...Ri.filter(u=>s.directives.every(l=>l.name!==u.name))];return new Pf({...s,directives:a})}function nv(i,n){const t=GD(i,{noLocation:n==null?void 0:n.noLocation,allowLegacyFragmentVariables:n==null?void 0:n.allowLegacyFragmentVariables});return ev(t,{assumeValidSDL:n==null?void 0:n.assumeValidSDL,assumeValid:n==null?void 0:n.assumeValid})}const jc=`
"""
Wallet -> LoyaltyAccount or Empty string
Account -> RewardChannel
Consumer -> Customer
Campaign -> Offer (??? Campaign seems OK)
Points -> Points
"""
scalar JSON


type Query {
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="verified" width="32" style="vertical-align:middle"/>
  <p>
  This API method allows calling applications to retrieve a total number of the available points
  This end point is only applicable to schemes where Points Expiry is enabled. 
  </p>
  </div>
  """
  CustomerPointsOrRewardsAvailable(identityValue: String!, type: PointsType!): CustomerPointsOrRewardsAvailableResponse @cacheControl(maxAge: 10, scope: PRIVATE)
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  Retrieve Consumer details by identityValue
  Should be entering point to get full information about Customer (must be used with GraphQL filters)
  </p>
  </div>
  """
  CustomerLoyaltyAccount(identityValue: String!): CustomerResponse @cacheControl(maxAge: 10, scope: PRIVATE)
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  Get offer list
  </p>
  </div>
  """
  CustomerOffersList(identityValue: String!, input: RewardChannelInput): CustomerOffersResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  Return Points/Reward list with experation date
  </p>
  </div>
  """
  CustomerPointsOrRewardsList(identityValue: String!, type: PointsType, input: RewardChannelInput): CustomerPointsOrRewardsResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  This API method allows the calling application to retrieve a paginated list of Transactions for a specific wallet
  </p>
  </div>
  """
  CustomerTransactions(customerTransactionsInput: CustomerTransactionsInput!): CustomerTransactionsResponse @cacheControl(maxAge: 10, scope: PRIVATE)
}


type Mutation {
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  Create all required instances in a LoyaltyAccount entity with the one call
  </p>
  </div>
  """
  CreateCustomerLoyaltyAccount(identityValue: String!, customerLoyaltyAccountCreateInput: CustomerLoyaltyAccountCreateInput!): CustomerResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  Allow update customer segmentation list
  </p>
  </div>
  """
  UpdateCustomerSegmentationList(identityValue: String!, segmentation: [SegmentationListItem]!): CustomerSegmentationResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  Temparately limited to update customer status
  </p>
  </div>
  """
  UpdateCustomer(identityValue: String!, updateCustomerInput: UpdateCustomerInput!): CustomerResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  Update customer points or rewards amount
  </p>
  </div>
  """
  UpdateCustomerPointsOrRewards(identityValue: String!, updateCustomerPointsInput: UpdateCustomerPointsInput!): UpdateCustomerPointsResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  Allows the calling application to check for available offers and rewards available based on contents of basket sent in request
  </p>
  </div>
  """
  OrderValidate(identityValue: String!, orderValidateInput: OrderValidateInput!): OrderValidateResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  This API endpoint allows the calling application to work out the financial value of points based on the rules configured against the points scheme. 
  These points are converted using the floor, ceiling, rate, step, bonus and pointsBack values.
  </p>
  </div>
  """
  OrderVerifyAvailablePoints(identityValue: String!, orderAvailablePointsInput: OrderAvailablePointsInput!): OrderAvailablePointsResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  This API applies the calculated operations from the spend-calculate API to a wallet and spends points from a customer's points account. 
  This creates an active Wallet Transaction in the wallet found by the identity passed into the request.
  </p>
  </div>
  """
  OrderSpendPoints(identityValue: String!, orderSpendPointsInput: OrderSpendPointsInput!): OrderSpendPointsResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  Void an ACTIVE spend transaction against the given wallet and undo the spending of points. 
  This call is used in the case of a cancelled transaction where a customer has spent points but does not wish to complete the settle.
  </p>
  </div>
  """
  OrderVoidSpendPoints(identityValue: String!, orderVoidSpendPointsInput: OrderVoidSpendPointsInput!): OrderVoidSpendPointsResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  This API endpoint allows the calling application to record in AIR a Consumer Transaction, by recording all Account's operations (like Coupon Redemption, 
  Stored Value Credit/Debit amount, Loyalty Points Earn/Spend or Stamp received). Please note each operation on an Account will create an  Account Transaction 
  while overarching Wallet Transaction would link a Consumer's Transaction to individual AIR Account Transactions.
  </p>
  </div>
  """
  OrderSubmit(identityValue: String!, orderSubmitInput: OrderSubmitInput!): OrderSubmitResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  This API endpoint allows the calling application to record a refund (return) transaction. 
  Request attribute \`basket\` should contain only a list of returned items (please note each returned item should have the attribute \`salesKey=REFUND\`) 
  to update the original transaction. If one or more returned items had triggered an offer redemption, 
  then system will unredeem appropriate COUPON(s) and depending on a Campaign setting (\`unredeemable\`) will put them back 
  into the Customer account or Cancel them. Likewise, if loyalty points were earned in the original transaction, 
  then depending on Scheme configuration (\`isRefundable\`)  the system will debit the difference arisen from the basket differences.
  Please note \`location\` provided to this endpoint will only be used to record where this refund happened (in which Store or Outlet); 
  Order submit transaction location will be used for basket re-analysis, if applicable.
  </p>
  </div>
  """
  OrderReturn(identityValue: String!, orderReturnInput: OrderReturnInput!): OrderReturnResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  This API method allows the calling application to load an offer. 
  Currently available for Stored Value types. If the offer is INACTIVE, the load will activate it by default.
  </p>
  </div>
  """
  UnlockOffer(identityValue: String!, rewardChannelID: String!, unlockOfferInput: UnlockOfferInput): UnlockOfferResponse
}


input CustomerTransactionsInput {
  "filter by transaction dates"
  startDate: String
  endDate: String
  "Pagination filer"
  pagination: Pagination
  """Optional Query parameter for result filtering by Transaction State(s)"""
  state: TransactionState
  """
  Optional Query parameter for result filtering by Transaction Status(es)
  """
  status: TransactionStatus
  """
  Query string for Result Filtering by a single store ID (outlet incoming identifier). 
   This  cannot be used in combination with any other query parameters except for status.
  """
  storeId: String
  """Optional Query parameter for result filtering by Transaction Type(s)"""
  type: TransactionType
  """Optional Query parameter for result filtering by Transaction ID(s)"""
  transactionId: String
}


input UnlockOfferInput {
  "Offer ID to load"
  rewardChannelID: String!
  "Additinal information you want associate with the action"
  details: DetailsEntityInput
  "Set if it happens in the store"
  store: StoreInput
  """
  Dictates whether to activate the account on load. If not passed, it will default to true.
  """
  autoActivateOnLoad: Boolean
  """
  The object of balances with the amount to load against the available balance for stored value accounts.
  balances.available
  Note, you can load onto an already active account, in which case the available will act like a credit.
  """
  availableBalance: Int
}


input DetailsEntityInput {
  """
  Details 1 property, up to 255 characters; up to 255 characters for Key 1 Value
  """
  key1: String
}


input OrderReturnInput {
  "Uses for returnt items only"
  basket: StandardBasketInput!
  "Place where return happend"
  store: StoreInput!
  "Reference to original transaction"
  originalTransaction: OriginalTransactionInput!
  """Refund Transaction"""
  transactionId: String!
}


input RefundSummaryInput {
  adjustmentRules: AdjustmentRulesEntity
  """
  Records the base earn points rewarded to customer during mid fulfil requests.
  """
  fulfilledBaseEarn: [FulfilledBaseEarnEntityListItem]
  """The redemption channel used for this request"""
  redemptionChannel: String
  """
  Total Basket monetary Value after discounts, denominated to a smallest currency unit (e.g. for \`USD\` this value should be provided in \`cents\`)
  """
  totalBasketValue: Int!
  totalDiscountAmount: TotalDiscountAmountInput
  """Basket Items count"""
  totalItems: Int!
  totalQualifyingAmount: TotalQualifyingAmountInput
  """
  Total Tax Amount denominated to a smallest currency unit (e.g. for \`USD\` this value should be provided in \`cents\`)
  """
  totalTaxAmount: Int
}


input OriginalTransactionInput {
  """Order Submit Transaction ID"""
  transactionId: String!
}


input OrderSubmitInput {
  "coming from OrderValidate response"
  basket: EnrichedBasketEntity
  location: StoreInput!
  meta: JSON
  """Mode of operation"""
  mode: OperationMode
  """Merchant transaction id (please note this id has to be unique)"""
  transactionId: String!
  """
  This optional Request attribute allows the calling application to instruct EES AIR 
  to complete the stated operation against a previously created spend points transaction
  """
  spendTransactionId: String
}


input OverridesListItemInput {
  """The id of the account the points are being spent from."""
  channelRewardId: String!
  """The balances to override."""
  balances: BalancesInput!
}


input StoreInput {
  """Store Identifier where transaction is taking place"""
  Id: String!
  """Specifying store type as either retail or online"""
  Type: StoreType
}


input OperationsListItemInput {
  """EES AIR Wallet Account ID"""
  accountId: String
  """Amount to be credited / debited / earned / spend / stamped"""
  amount: Int
  "The object of balances. Some balances only apply to certain types of accounts. See notes below on balances.\\n"
  balances: BalancesEntity
  meta: JSON
  """Operation Type"""
  operationType: OperationType!
  """Token value belonging to an account"""
  token: String
  """EES AIR Wallet ID"""
  walletId: String
}


input OrderSpendPointsInput {
  """
  A unique transaction reference which will be applied to the created wallet transaction
  """
  reference: String
  "The response from points validation request"
  spendAdjudicationResults: SpendAdjudicationResultsEntityInput
}


input SpendAdjudicationResultsEntityInput {
  """SpendAdjudicationResults Date-Time in ATOM format"""
  analysedDateTime: String
  appliedTier: SpendTierEntityInput
  "The object of balanceAfter.\\n"
  balanceAfter: SpendBalances
  operations: [SpendOperationsEntityInput]
  """
  The number of points that cannot be spent due to the available tiers and stepping rules.
  """
  pointsRemainder: Int
  """
  The number of points that are allowed to be spent based on the number passed in.
  """
  pointsValue: Int
}


input SpendTierEntityInput {
  """
  Spend Tier bonus to be added to the exchange value if this Tier definition is used.
  """
  bonus: Int
  """Spend Tier upper limit"""
  ceiling: Int
  """Spend Tier lower limit"""
  floor: Int
  """
  Spend Tier number of points to be credited back to the points account following a points spend transaction if this Tier definition is used.
  """
  pointsBack: Int
  """
  Spend Tier Exchange Rate (for example if \`rate=0.1\` would indicate each point is worth 1/10 of smallest currency denomination, i.e. 1/10 of a penny or a cent)
  """
  rate: Float
  """
  Spend Tier increments that points can be spent in (e.g. if points can be exchanged at 5,000, 10,000, 15,000 and so on, the \`step\` should be equal 5,000)
  """
  step: Int
}


input SpendOperationsEntityInput {
  """The account against which the determined operation is to be performed."""
  rewardChannelId: String
  """
  The balances of the account to be adjusted. If the operation type is \`spend\`, the \`current\`, \`lifetime_spend\`, and \`lifetime_spend_value\` are all required. If the operation is \`credit\`, the current value is  required, if the operation type is \`redeem\` this key is not required.
  """
  balances: BalancesInput
  details: JSON
  """The type of operation to apply."""
  operationType: OperationType
  """The ID of the campaign or scheme related to this operation."""
  resourceId: String
  """The determination if this is a scheme or campaign based operation."""
  resourceType: ResourceType
  """The value of the operation to apply."""
  value: Int
}


input OrderAvailablePointsInput {
  """
  The number of points for which to calculate the financial value. Either monetaryValue or pointsValue must be passed in the request.
  """
  pointsValue: Int!
}


"""
The details of the points scheme to find accounts in the target wallet. Either \`id\` or \`reference\` must be passed and not empty
"""
input SchemeInput {
  "The scheme reference to use to lookup a points account in the wallet associated to the identity passed"
  reference: String
}


input UpdateCustomerPointsInput {
  "Additional transaction information"
  transactionMeta: MetaEntity
  """
  Specifies the amount of points to give to the Customer (value can be negative)
  """
  pointsValue: String!
  """
  The scheme from which points are awarded from - Can be either schemeId or schemeReference
  """
  schemeId: String!
  """A reference the scheme from which points are awarded from"""
  schemeReference: String
  """Designates the start date of the transaction"""
  transactionDate: String
  """The description of the transaction"""
  transactionDescription: String
  """Reference to the transaction"""
  transactionID: String
  """Designates the state of the transaction"""
  transactionState: String
  """Designates the type of the transaction"""
  transactionType: TransactionType
}


input RewardChannelInput {
  """
  Query string for Result Filtering by Campaign Status. 
  Please note enum below contains all possible Campaign statuses
  """
  campaignsStatus: CampaignsStatus
  "Use it to limit results and display pages"
  pagination: Pagination
  "Query for specific state"
  state: RewardChannelState
  "Query for specific status"
  status: RewardChannelStatus
  """Query string for Result filtering by Type(s)"""
  type: [RewardChannelType]
  """
  Query string for Result Filtering by Valid From explicit date-time value or date-time range, 
  for range named key attributes needs to be provided (validFrom[to]=... and/or validFrom[from]=...)
  """
  validFrom: String
  """
  Query string for Result Filtering by Valid To explicit date-time value or date-time range, 
  for range named key attributes needs to be provided (validTo[to]=... and/or validTo[from]=...)
  """
  validTo: String
}


input CustomerLoyaltyAccountCreateInput {
  "Will be used to help visually identify customer"
  friendlyName: String!
  "Segmentation information"
  segmentation: [SegmentationListItem]
  "This could be used to add campaigns during customer creation"
  channels: [RewardChannelsInput]
}


input UpdateCustomerInput {
  "Sent new customer status"
  status: CustomerStatus
}


input StandardBasketInput {
  "Total items, total discount, and total value of basket"
  summary: BasketSummaryInput
  "All SKUs, promotional discounts, unit cost and cost after discount from the basket"
  contents: [StandardBasketContentsInput!]!
}


input RewardChannelsInput {
  campaign: [RewardChannelCreationInput]
  scheme: [CustomerSchemePayloadInput]
}


input RewardChannelCreationInput {
  """Campaign ID"""
  campaignId: String
  """Campaign Tag"""
  campaignTag: String
  "Date range"
  ates: DatesEntity
  """RewardChannel state"""
  state: RewardChannelState
  """RewardChannel Status"""
  status: RewardChannelStatus
}


input CustomerSchemePayloadInput {
  "Shemas in which customer will be involved"
  schemeId: String!
  """RewardChannel state"""
  state: RewardChannelState
}


input OrderValidateInput {
  """Transaction Id generated by calling system"""
  transactionId: String!
  """Store Location information from where this call originates"""
  store: StoreInput
  """
  Contains all items in the basket, a summary of the total items and total basket value
  """
  basket: StandardBasketInput!
}


input StandardBasketContentsInput {
  """Sku of the product in the basket"""
  sku: String
  """SALE/REFUND/FULFIL Flag"""
  salesKey: SalesKey!
  """Product Name"""
  description: String!
  """
  Item Price per unit, denominated to a smaller currency unit ($5.00 sent in as 500)
  """
  itemUnitCost: Int!
  """The metric in which the item is measured (ie. pounds, ounces, each)"""
  itemUnitMetric: ItemUnitMetric
  """Item Quantity"""
  itemUnitCount: Int!
  """Discount per item"""
  itemUnitDiscount: Int!
  """Total cost for this item"""
  totalUnitCost: Int!
  """Total cost for this item after discount"""
  totalUnitCostAfterDiscount: Int!
  """Tax Rate Percentage"""
  taxRate: Float!
  """
  Tax Amount for this item, denominated to a smallest currency unit (ie. cents)
  """
  taxAmount: Int!
}


input QualifiesInput {
  """
  Determines if the item is eligible for basket level discounting. If false this item will not
  qualify for basket level discounts but still qualify for product level discounts.
  """
  discount: Boolean!
  """
  Determines if the item is eligible for Base Earn points. If false this item will not qualify for
  Base Earn points but still qualify for basket and product level discounts.
  """
  points: Boolean!
}


input BasketSummaryInput {
  "Sum of discounts for all items"
  totalDiscountAmount: TotalDiscountAmountInput
  """Total number of items in the basket"""
  totalItems: Int!
  """
  Total Basket monetary value after discounts, denominated to a
  smallest currency unit (e.g. for USD this value should be provided in cents)
  """
  totalBasketValue: Int!
  """
  Total Tax Amount denominated to a smallest currency unit (e.g. for USD this value should be provided in cents)
  """
  totalTaxAmount: Int
}


input TotalQualifyingAmountInput {
  """Basket Monetary Value for Loyalty Points calculations"""
  points: Int
  """
  Basket Monetary Value used for calculating base earn, overriding totalBasketValue. Adheres to basket discounts
  """
  baseEarn: Int!
  """Basket Monetary Value for Promotion Offer selections"""
  promotions: Int
  """Basket Monetary Value for Discount calculations"""
  discount: Int
  """Basket Monetary Value for Staff Discount or Promotions"""
  staff: Int
}


input TotalDiscountAmountInput {
  """
  Promotions Discount Amount. If basket adjustment adds to discounts, this amount will be added to discounts
  """
  promotions: Int
}


input BasketOptionsInput {
  adjustBasket: AdjustBasketInput
  analyseBasket: AnalyzeBaskedInput
  basketAdjudication: BasketAdjudicationInput
  adjudicatePointsSpend: AdjudicatePointsSpendInput
}


input AdjustBasketInput {
  """Whether to carry out Adjust basket"""
  enabled: Boolean!
  includeOpenOffers: Boolean = false
}


input AnalyzeBaskedInput {
  """Whether to carry out basket analysis"""
  enabled: Boolean!
  includeOpenOffers: Boolean = false
}


input BasketAdjudicationInput {
  """
  Optional flag to instruct AIR on which side the Basket
  Adjudication should happen. Default value is \`CLIENT\`
  and for that scenario Basket Adjudications should be
  performed on Client side using data returned by AIR and
  possibly additional data available to a POS. For
  \`SERVER\` mode AIR will perform full Basket Analyse,
  for \`CUSTOM' the calling application could provide
  additional filtering criteria for which account types
  AIR should perform Basket Analyse
  Currently CUSTOM option is TBC (to be confirmed). Please do NOT use
  """
  mode: AdjudicationMode = CLIENT
}


input AdjudicatePointsSpendInput {
  """
  Determine if points spend adjudication should be completed in the open call
  """
  enabled: Boolean!
  """
  Determine if open Spend Rate Modifier coupons should be included in the analysis
  """
  includeOpenOffers: Boolean = false
}


input OrderVoidSpendPointsInput {
  """
  A unique transaction reference which will be applied to the created wallet transaction
  """
  spendTransactionId: String
}


input BalancesInput {
  """
  The value to credit or spend in the intended operation. This value is the number of points to be spent.
  """
  current: Int
  """
  The value to add to the lifetime spend balance of the points account. Required if the operationType is 'spend'. This value is the number of points to be spent.
  """
  lifetimeSpend: Int
  """
  The value to add to the lifetime spend value balance field of the points account. Required if the operationType is 'spend'. This value is the monetary value of the points to be spent.
  """
  lifetimeSpendValue: Int
}


input RewardChannelOverridesEntityInput {
  "Overrides affecting the offer\\n"
  campaign: CampaignInput
  "Overrides affecting the offer\\n"
  continuity: ContinuityInput
  "Overrides affecting the offer\\n"
  offer: OfferInput
  "Overrides affecting the reward\\n"
  reward: OverridesRewardInput
}


"Overrides affecting the offer\\n"
input CampaignInput {
  "The campaigns rules\\n"
  rules: RulesInput
}


"The campaigns rules\\n"
input RulesInput {
  "The amount of times a coupon can be redeemed, 0 is unlimited, 1 is default. If this is not set it will revert to what the campaigns couponLimit is set to\\n"
  couponLimit: Int
}


"Overrides affecting the offer\\n"
input ContinuityInput {
  "Continuity qualification area of the offer\\n"
  qualification: QualificationInput
}


"Continuity qualification area of the offer\\n"
input QualificationInput {
  """The number of transactions needed to qualify for the reward"""
  totalTransactionCount: Int
  """The transaction spend amount needed to qualify for the reward"""
  totalTransactionSpend: Int
  """
  The number of units that are needed in the transaction to qualify for the reward.
  """
  totalTransactionUnits: Int
}


"Overrides affecting the offer\\n"
input OfferInput {
  "Reward area of the offer\\n"
  reward: RewardInput
}


"Reward area of the offer\\n"
input RewardInput {
  "The amount of points this account should earn when redeemed\\n"
  creditAmount: Int
}


"Overrides affecting the reward\\n"
input OverridesRewardInput {
  "The discount amount to apply to the basket total.\\n"
  discountAmount: Int
  "The discount value to increase with every interval.\\n"
  discountValue: Int
  "The final amount to set the basket total to.\\n"
  finalAmount: Int
  "A percentage amount to be discounted. This must be an integer unless \`allowDecimal\` is enabled in the Unit.\\n"
  percentageAmount: Float
}


type OrderValidateResponse {
  """
  Provides a list of all perks, cross-shops, quests, and personalized offers currently active for customer, and also sends points balance from their points account 
  """
  rewardChannels: [RewardChannelListItem]!
  "Provides spendable balance from customer's Cashpot account"
  spendAdjudicationResults: SpendAdjudicationResults!
  "Provides available offers and rewards based on basket content"
  analyseBasketResults: AnalyseBasketResults
}


type UnlockOfferResponse {
  """Offer state, managed per retailer base"""
  state: String!
  """Reward Channel Status"""
  status: RewardChannelStatus!
  """Reward Channel Type"""
  type: RewardChannelType!
  """Reward Channel ID"""
  rewardChannelID: String!
}


type OrderSubmitResponse {
  """Wallet Transaction(s) created as a result of this transaction"""
  transactions: [TransactionEntity]!
}


type OrderReturnResponse {
  """Return transaction details"""
  transactions: [TransactionEntity]!
}


type UpdateCustomerPointsResponse {
  "Description of the created transaction"
  transactions: [TransactionEntity]!
}


type OrderSpendPointsResponse {
  """Transaction(s) created as a result of this spend transaction"""
  transactions: [TransactionEntity]!
}


type OrderVoidSpendPointsResponse {
  """Transaction(s) created as a result of this void transaction"""
  transactions: [TransactionEntity]!
}


type OrderAvailablePointsResponse {
  spendAdjudicationResults: SpendAdjudicationResultsEntity
}


type CustomerOffersResponse {
  "Current page information"
  pagination: Pagination
  """List of the offers"""
  results: [RewardChannelListItem]
}


type CustomerPointsOrRewardsResponse {
  "Current page information"
  pagination: Pagination
  """Points/rewards balances with expiration dates"""
  results: [Balance]
}


type CustomerSegmentationResponse {
  "Updated customer segmentations"
  segmentation: [SegmentationListItem]
}


type CustomerPointsOrRewardsAvailableResponse {
  "Total currently available points/rewards amount"
  totalPointsAvailable: Int!
}


type CustomerResponse {
  Customer: Customer!
}


type CustomerTransactionsResponse {
  pagination: Pagination
  """Array of transactions"""
  transactions: [Transaction]
}


type TransactionEntity {
  basket: TransactionBasketEntity!
  """Channel used for Transaction creation or update"""
  channel: String!
  """Date this Wallet Transaction was created"""
  dateCreated: String!
  """
  Transaction Expiry Timestamp (date-time in ATOM format), when transaction should expiry and automatically be settled.
  """
  expiryDate: String!
  """Date this Wallet Transaction was last updated"""
  lastUpdated: String!
  """
  Key-Value object, please note key name length should be less then 255 characters and key values should be less then 255 characters
  """
  meta: JSON!
  """Parent Wallet Transaction ID"""
  parentTransactionId: String!
  """Calling party's reference to this transaction"""
  referenceTransactionId: String!
  """Transaction state"""
  state: String!
  """Transaction status"""
  status: TransactionStatus!
  """Transaction date-time in ATOM format"""
  transactionDateTime: String!
  """Transaction Type, defined per retailer"""
  type: String!
  """Transaction ID"""
  transactionId: String!
}


"Points or Rewards moviment values"
type PointsBasketEntity {
  pointsCredited: Int!
  pointsRedeemed: Int!
  pointsRefunded: Int!
}


type StandardBasketEntity {
  contents: [StandardBasketContentsCollectionEntityListItem]
  payment: [StandardPaymentEntityListItem]
  summary: BasketSummary
  type: BasketType
}


type StandardBasketContentsCollectionEntityListItem {
  adjustmentRules: AdjustmentRulesEntity
  """Product Name"""
  description: String
  """Item Price per unit, denominated to a smaller currency unit"""
  itemUnitCost: Int
  """Item Quantity"""
  itemUnitCount: Float
  """Discount per Item"""
  itemUnitDiscount: Int
  """The metric in which the item is measure (nullable)"""
  itemUnitMetric: ItemUnitMetric
  """
  Key-Value object, please note key name length should be less then 255 characters and key values should be less then 255 characters
  """
  meta: JSON
  qualifies: Qualifies
  """
  Recursive list of contents related to the parent item with the same schema as this object.
  """
  relatedContents: [RelatedContentsListItem]
  """\`SALE\`/\`REFUND\`/\`FULFIL\` Flag"""
  salesKey: SalesKey
  """Item SKU"""
  sku: String
  """Tax Amount for that item, denominated to a smallest currency unit"""
  taxAmount: Int
  """Tax Rate (Percentage)"""
  taxRate: Float
  """Total cost for this item"""
  totalUnitCost: Int
  """
  Total cost for this item after discount (please note this does not take into account whole basket discounts)
  """
  totalUnitCostAfterDiscount: Int
  """Item SKU"""
  upc: String
}


type RelatedContentsListItem {
  adjustmentRules: AdjustmentRulesEntity
  """Product Name"""
  description: String
  """Item Price per unit, denominated to a smaller currency unit"""
  itemUnitCost: Int
  """Item Quantity"""
  itemUnitCount: Float
  """Discount per Item"""
  itemUnitDiscount: Int
  """The metric in which the item is measure (nullable)"""
  itemUnitMetric: ItemUnitMetric
  """
  Key-Value object, please note key name length should be less then 255 characters and key values should be less then 255 characters
  """
  meta: JSON
  qualifies: Qualifies
  """
  Recursive list of contents related to the parent item with the same schema as this object.
  """
  relatedContents: JSON
  """\`SALE\`/\`REFUND\`/\`FULFIL\` Flag"""
  salesKey: SalesKey
  """Item SKU"""
  sku: String
  """Tax Amount for that item, denominated to a smallest currency unit"""
  taxAmount: Int
  """Tax Rate (Percentage)"""
  taxRate: Float
  """Total cost for this item"""
  totalUnitCost: Int
  """
  Total cost for this item after discount (please note this does not take into account whole basket discounts)
  """
  totalUnitCostAfterDiscount: Int
  """Item SKU"""
  upc: String
}


type StandardPaymentEntityListItem {
  """Monetary amount of payment in lowest unit of currency"""
  amount: Int!
  """The bin for the tender"""
  bin: String
  """
  An identifying value of what was scanned, could be a token, barcode, gift-card
  """
  identifier: String
  """Tender type - predefined by Eagle Eye"""
  tenderType: String!
}


type SpendAdjudicationResultsEntity {
  """SpendAdjudicationResults Date-Time in ATOM format"""
  analysedDateTime: String
  "Tier rules/details"
  appliedTier: SpendTierEntity
  "The balance after spending"
  balanceAfter: SpendBalancesAfterEntity
  """
  The number of points that cannot be spent due to the available tiers and stepping rules.
  """
  pointsRemainder: Int
  """
  The number of points that are allowed to be spent based on the number passed in.
  """
  pointsValue: Int
  "Full response from Order Points Validation request"
  operations: [SpendOperationsEntity]
}


type SpendTierEntity {
  """
  Spend Tier bonus to be added to the exchange value if this Tier definition is used.
  """
  bonus: Int
  """Spend Tier upper limit"""
  ceiling: Int
  """Spend Tier lower limit"""
  floor: Int
  """
  Spend Tier number of points to be credited back to the points account following a points spend transaction if this Tier definition is used.
  """
  pointsBack: Int
  """
  Spend Tier Exchange Rate (for example if \`rate=0.1\` would indicate each point is worth 1/10 of smallest currency denomination, i.e. 1/10 of a penny or a cent)
  """
  rate: Float
  """
  Spend Tier increments that points can be spent in (e.g. if points can be exchanged at 5,000, 10,000, 15,000 and so on, the \`step\` should be equal 5,000)
  """
  step: Int
}


"The object of balanceAfter.\\n"
type SpendBalancesAfterEntity {
  "The current balance.\\n"
  current: Int
  """The lifetime points earned."""
  lifetime: Int
  """The total amount that has been redeemed on this account"""
  lifetimeSpend: Int
  """
  The monetary value of the points that have been redeemed over the lifetime of this account.            
  """
  lifetimeSpendValue: Int
  "The usable balance."
  usable: Int
  "The pending balance."
  pending: Int
}


type SpendOperationsEntity {
  """
  The reward channel against which the determined operation is to be performed.
  """
  RewardChannelId: String
  """
  The balances of the account to be adjusted. If the operation type is \`spend\`, the \`current\`, \`lifetime_spend\`, and \`lifetime_spend_value\` are all required. If the operation is \`credit\`, the current value is  required, if the operation type is \`redeem\` this key is not required.
  """
  balances: BalancesInput
  """The type of operation to apply."""
  operationType: OperationType
  """The ID of the campaign or scheme related to this operation."""
  resourceId: String
  """The determination if this is a scheme or campaign based operation."""
  resourceType: ResourceType
  """The value of the operation to apply."""
  value: Int
}


type Schema {
  schemeId: String!
  status: SchemaStatus
  state: SchemaState!
}


"""
The type holds all information related to Customer.
Used as response in many functions (only related to functions or requested fields will be filled)
"""
type Customer {
  ID: String!
  "Additional information"
  Meta: MetaEntity
  "Current points amount"
  AvailablePoints: Int
  "Current reward amount"
  AvailableRewards: Int
  "List of points with experation dates"
  Points: [Points]
  "List of rewards with experation dates"
  Rewards: [Points]
  "Friendly name for the customer for visual identification"
  PreferredName: String
  "Customer segmentation list"
  Segmentation: [SegmentationListItem]
  "Current Customer state"
  State: String
  "Current Customer status"
  Status: CustomerStatus
  "Type of the Customer"
  Type: String
  "Tier to which Customer belongs to"
  Tier: [Tier]
}


type Balance {
  "Point/Reward balance"
  Amount: Int!
  "Expiration date for the balance"
  ExpiryDate: String!
}


type Offer {
  ExpirationDate: String
  Amount: String
  Type: RewardChannelType
  Status: RewardChannelStatus
  UsedDate: String
  IssuedDate: String
  ID: String
  rewardChannelID: String
}


type SpendAdjudicationResults {
  "Explain what loyalty account/schema was used and what was redeemed"
  operations: [OperationsListItem]
  """
  Any points that are not able to be spent due to spend rules configured against the scheme
  """
  pointsRemainder: Int
  """
  The total number of points available to spend aggregated from all rewards in Cashpot
  """
  pointsValue: Int
}


type OperationsListItem {
  """The account ID to apply the operation against."""
  rewardChannelId: String
  """Required if a operation type is spend or credit."""
  balances: BalancesInput
  """Key-value pairs to apply to the account transaction."""
  details: JSON
  operationType: OperationType
  """The ID of the campaign or scheme related to this operation."""
  resourceId: String
  resourceType: ResourceType
  """The value for which the intended operation should be completed."""
  value: Int
}


"""
Outlines the capabilities that a customer is allowed to complete in a transaction. This is an instruction to the POS, for example, to display the spend points options back to the customer
"""
type TransactionCapabilities {
  """
  Outlines the allowed capabilities of the customer for loyalty based operations
  """
  loyalty: Loyalty
}


"""
Outlines the allowed capabilities of the customer for loyalty based operations
"""
type Loyalty {
  """
  States if the customer is in a state of being able to earn points in a transaction
  """
  earn: Boolean
  """
  States if the customer is in a state of being able to spend points in the transaction
  """
  spend: Boolean
}


type AnalyseBasketResults {
  "Analized basket showing summary of adjudication and points that will be earned, and to which account (this basket element should be sent in the request in OrderSubmit)"
  basket: EnrichedBasketEntity
  "Discounts will not be used in Phase 1"
  discount: [DiscountListItem]
  "Shows how many points will be earned and to which account"
  points: [PointsEntityListItem]
}


type PointsEntityListItem {
  rewardChannelId: String
  """Operation Type"""
  operationType: OperationType
  """EES AIR Scheme ID"""
  resourceId: String
  """EES Resource Type (SCHEME)"""
  resourceType: ResourceType
  """Amount of points"""
  value: Int
}


type Details {
  """The offer type (list is examples more may be added)"""
  appliedAnalyseBasketType: AppliedAnalyseBasketType
}


type TenderListItem {
  """EES AIR Account Id"""
  accountId: String
  """EES AIR Campaign / Programme / Scheme ID"""
  campaignId: String
  """Campaign Name"""
  campaignName: String
  """Client defined account type"""
  clientType: String
  """Offer Id"""
  offerId: String
  """Offer Name"""
  offerName: String
  reward: Reward
  """EES AIR Account Type"""
  type: RewardChannelType
}


type DiscountListItem {
  rewardChannelId: String
  """EES AIR Campaign / Programme / Scheme ID"""
  campaignId: String
  """Campaign Name"""
  campaignName: String
  """Client defined account type"""
  clientType: String
  reward: Reward
  """RewardChannel Type"""
  type: RewardChannelType
}


type BounceBackEntityListItem {
  """EES AIR Account ID"""
  accountId: String
  bounceBacks: [BounceBacksListItem]
  """EES AIR Campaign ID"""
  campaignId: String
  """Campaign Name"""
  campaignName: String
  """Client defined account type"""
  clientType: String
  """Offer Id"""
  offerId: String
  """Offer Name"""
  offerName: String
  reward: Reward
  type: RewardChannelType
  """EES AIR Wallet ID"""
  walletId: String
}


type BounceBacksListItem {
  """EES AIR Resource ID (Campaign ID, Programme ID, Scheme ID)"""
  resourceId: String
  """EES Resource Type"""
  resourceType: ResourceType
}


type Reward {
  basket: JSON
  product: Product
  """Promo ID"""
  promoId: String
  standard: Standard
}


type Product {
  """Product"""
  product: String
  """Promo ID"""
  promoId: String
  standard: Standard
}


type Standard {
  """Discount Amount"""
  discountAmount: Int
  """Percentage Amount"""
  percentageAmount: Float
}


type EnrichedBasketEntity {
  type: BasketType
  summary: BasketSummary
  contents: [EnrichedBasketContentsCollectionEntityListItem]
  """
  Similar to standardPaymentEntity, except that any _tender_ offers used during adjustment, have an entry injected here, stipulating the tender amount to take off basket
  """
  payment: [EnrichedPaymentEntityListItem]
  """
  Basket Analysis Date-Time in ATOM format. Example: 2023-12-04T08:57:04+00:00
  """
  analysedDateTime: String
}


type EnrichedPaymentEntityListItem {
  """The EE AIR Account ID (only populated when tender is owned by EE)"""
  accountId: String
  """Monetary amount of payment/tender in lowest unit of currency"""
  amount: Int!
  """The bin for the tender"""
  bin: String
  """
  An identifying value of what was scanned, could be a token, barcode, gift-card
  """
  identifier: String
  """
  Tender type - predefined by Eagle Eye, including a further type of _tenderCoupon_
  """
  tenderType: String!
}


type EnrichedBasketContentsCollectionEntityListItem {
  adjudicationResults: [AdjudicationResultsListItem]
  adjustmentResults: [AdjustmentResultsEntityListItem]
  adjustmentRules: AdjustmentRulesEntity
  bounceBackResults: [BounceBackResultsEntityListItem]
  """
  If an offer was spend £30 get £5 off, this entity would be against each of the products contributing to the £5 off, with their combined 'value's adding up to the £5.
  """
  contributionResults: [ContributionResultsEntityListItem]
  """Product Name"""
  description: String
  """Number Of Items Fulfilled"""
  itemFulfilmentCount: Float
  """Item Price per unit, denominated to a smaller currency unit"""
  itemUnitCost: Int
  """Item Quantity"""
  itemUnitCount: Float
  """Discount per Item"""
  itemUnitDiscount: Int
  """The metric in which the item is measure (nullable)"""
  itemUnitMetric: ItemUnitMetric
  """
  Key-Value object, please note key name length should be less then 255 characters and key values should be less then 255 characters
  """
  meta: JSON
  qualifies: Qualifies
  """
  If an offer was buy a pizza and get a free garlic bread, the pizza would have this entity against it
  """
  qualifiesResults: [QualifiesResultsEntityListItem]
  """
  Recursive list of contents related to the parent item with the same schema as this object.
  """
  relatedContents: [EnrichedBasketContentsCollectionEntityListItem]
  """'SALE'/'REFUND'/'FULFIL' Flag"""
  salesKey: SalesKey
  """Item SKU"""
  sku: String
  """Tax Amount for that item, denominated to a smallest currency unit"""
  taxAmount: Int
  """The rate of tax being applied to this item (percentage)"""
  taxRate: Float
  tenderResults: [TenderResultsEntityListItem]
  """Total cost for this item"""
  totalUnitCost: Int
  """
  Total cost for this item after discount (please note this does not take into account whole basket discounts)
  """
  totalUnitCostAfterDiscount: Int
  """Item SKU"""
  upc: String
}


type Qualifies {
  """
  Determines if the item is eligible for basket level discounting. If false this item will not qualify for basket level discounts but still qualify for product level discounts.
  """
  discount: Boolean!
  """
  Determines if the item is eligible for Base Earn points. If false this item will not qualify for Base Earn points but still qualify for basket and product level discounts.
  """
  points: Boolean!
}


type ContributionResultsEntityListItem {
  """The reference back to the offer which these items contributed"""
  instanceId: String
  """The proportional contribution to the discount/points given"""
  value: Int
}


type BasketSummary {
  totalItems: Int!
  """
  Total Basket monetary Value after discounts, denominated to a
  smallest currency unit (e.g. for \`USD\` this value should be
  provided in \`cents\`)
  """
  totalBasketValue: Int!
  totalQualifyingAmount: TotalQualifyingAmount
  """
  Total Tax Amount denominated to a smallest currency unit
  (e.g. for \`USD\` this value should be provided in \`cents\`)
  """
  totalTaxAmount: Int
  totalDiscountAmount: TotalDiscountAmount
  """
  Records the base earn points rewarded to customer during mid fulfil requests.
  """
  fulfilledBaseEarn: [FulfilledBaseEarnEntityListItem]
  adjustmentRules: AdjustmentRulesEntity
  tenderResults: [TenderResultsEntityListItem]
  adjustmentResults: [AdjustmentResultsEntityListItem]
  bounceBackResults: [BounceBackResultsEntityListItem]
  """
  If an offer was buy a pizza and get a free garlic bread, the pizza would have this entity against it
  """
  qualifiesResults: [QualifiesResultsEntityListItem]
  adjudicationResults: [AdjudicationResultsListItem]
  results: EnrichedBasketSummaryResultsEntity
  """The redemption channel used for this request"""
  redemptionChannel: String
}


type EnrichedBasketSummaryResultsEntity {
  points: Points
}


type Points {
  """Total value of points credited during transaction"""
  credit: Int
  """Total value of points debited during transaction"""
  debit: Int
  """Total value of points earned during transaction"""
  earn: Int
  """The redemption channel used for this request"""
  redemptionChannel: String
  """Total value of points clawed-back during refund transaction"""
  refund: Int
  """Total value of points spent during transaction"""
  spend: Int
  """Sum of all positive balance actions (earn + credit)"""
  totalPointsGiven: Int
  """Sum of all negative balance actions (spend + debit + refund)"""
  totalPointsTaken: Int
}


type AdjudicationResultsListItem {
  """
  The object of balances. Some balances only apply to certain types of accounts. See notes below on balances.
  """
  balances: BalancesEntity
  """Boolean Flag indicating if this offer should be refundable"""
  isRefundable: Boolean
  """Boolean Flag indicating if this offer should be Unredeemable"""
  isUnredeemable: Boolean
  """The exact position the offer was triggered during analysis"""
  playOrderPosition: Int
  relatedAccounts: [String]
  """EES AIR Resource ID (Campaign ID, Programme ID, Scheme ID)"""
  resourceId: String
  """EES Resource Type"""
  resourceType: ResourceType
  success: Boolean
  """EES AIR Account ID"""
  targetedAccountId: String
  """The minimum number of products required to trigger offer"""
  totalMatchingUnits: Int
  """The number of units the reward applies to within this item."""
  totalRewardUnits: Int
  """Operation Type"""
  type: OperationType
  """
  Operation Amount (please note: value and balances attributes are mutually exclusive)
  """
  value: Int
}


type QualifiesResultsEntityListItem {
  """The reference back to the offer reward which these qualifiers relate"""
  instanceId: String
  """
  The monetary value this product contributes towards the offer's qualification
  """
  totalMatchingSpend: Int
  """The number of products forming part of the offer's qualification"""
  totalMatchingUnits: Int
}


type BounceBackResultsEntityListItem {
  """
  The object of balances. Some balances only apply to certain types of accounts. See notes below on balances.
  """
  balances: BalancesEntity
  """Boolean Flag indicating if this offer should be refundable"""
  isRefundable: Boolean
  """Boolean Flag indicating if this offer should be Unredeemable"""
  isUnredeemable: Boolean
  """The exact position the offer was triggered during analysis"""
  playOrderPosition: Int
  relatedAccounts: [String]
  """EES AIR Campaign Id"""
  resourceId: String
  """EES Resource Type"""
  resourceType: ResourceType
  success: Boolean
  """EES AIR Account ID"""
  targetAccountId: String
  type: OperationType
  """Value of transaction"""
  value: Int
}


type AdjustmentResultsEntityListItem {
  """
  A mechanism to distinguish each individual reward that has been given for any account
  """
  instanceId: String
  """Boolean Flag indicating if this offer should be Unredeemable"""
  isUnredeemable: Boolean
  multiItem: [String]
  """The exact position the offer was triggered during analysis"""
  playOrderPosition: Int
  relatedAccountIds: [String]
  """EES AIR Resource ID (Campaign ID, Programme ID, Scheme ID)"""
  resourceId: String
  """EES Resource Type"""
  resourceType: ResourceType
  success: Boolean
  """EES AIR Account ID"""
  targetedAccountId: String
  """EES AIR Wallet ID. Nullable"""
  targetedWalletId: String
  """The monetary effect of the discount in the lowest unit of currency"""
  totalDiscountAmount: Int
  """The number of products the adjustment was applied to"""
  totalMatchingUnits: Int
  """The number of units the reward applies to within this item."""
  totalRewardUnits: Int
  """Operation Type"""
  type: OperationType
  """Operation Amount"""
  value: Int
}


type TenderResultsEntityListItem {
  """Boolean Flag indicating if this offer should be Unredeemable"""
  isUnredeemable: Boolean
  """
  Used for coupons that can span multiple SKU's in a basket, links basket items together based on SKU
  """
  multiItem: [String]
  """The exact position the offer was triggered during analysis"""
  playOrderPosition: Int
  relatedAccountIds: [String]
  """EES AIR Resource ID (Campaign ID, Programme ID, Scheme ID)"""
  resourceId: String
  """EES Resource Type"""
  resourceType: ResourceType
  success: Boolean
  """EES AIR Account ID"""
  targetedAccountId: String
  """EES AIR Wallet ID. Nullable"""
  targetedWalletId: String
  """The amount of tender value in the lowest unit of currency"""
  totalTenderAmount: Int
  """Operation Type"""
  type: OperationType
  """Operation Amount"""
  value: Int
}


type AdjustmentRulesEntity {
  """
  If the object (summary/basket item) has been modified by the POS at all with information we don't know about
  """
  externalAdjustment: Boolean
  """The reason for externalAdjustment"""
  externalAdjustmentReason: String
  """Ignore object as if not sent"""
  ignore: Boolean
}


type FulfilledBaseEarnEntityListItem {
  """EES AIR Account ID."""
  targetedAccountId: String!
  """Total value of base earn points rewarded."""
  points: Int!
}


type TotalDiscountAmount {
  """
  Promotions Discount Amount. If basket adjustment adds to discounts, this amount will be added to
  """
  promotions: Int
  """Staff Discount Amount"""
  staff: Int
  """General Discount Amount"""
  general: Int
}


type TotalQualifyingAmount {
  """Basket Monetary Value for Loyalty Points calculations"""
  points: Int
  """
  Basket Monetary Value used for calculating base earn, overriding totalBasketValue. Adheres to basket discounts
  """
  baseEarn: Int
  """Basket Monetary Value for Promotion Offer selections"""
  promotions: Int
  """Basket Monetary Value for Discount calculations"""
  discount: Int
  """Basket Monetary Value for Staff Discount or Promotions"""
  staff: Int
}


type MetaEntity {
  """
  Meta 1 property, up to 255 characters; up to 255 characters for Key 1 Value
  """
  key1: String
  """
  Meta 2 property, up to 255 characters; up to 255 characters for Key 2 Value
  """
  key2: String
}


type SegmentListItem {
  """An optional base of segmentation that is being applied."""
  base: Base
  """
  The score of how likely the segmentation is to be correct. Valid values are floats less than or equal to 1.
  """
  confidence: Float
  """
  A place to store arbitrary domain-specific data against the segmentation object.
  """
  data: JSON
  """
  List of segment labels that the entity belongs to for the given segmentation entry. The list can be used to denote hierarchy, 
  lowest indexed items are higher in hierarchy terms. At least one item is required.
  """
  labels: [String]!
  """
  The relative importance of the segmentation entry, lower numbers are lighter and more important, higher numbers are heavier and sink lower.
  """
  weight: Int
}


type SegmentationListItem {
  """Customer defined name / category for the segment."""
  name: String!
  """It contains segment objects in the array."""
  segments: [SegmentListItem]!
}


type Transaction {
  SaleAmount: String!
  StoreId: String!
  TransactionDate: String!
  TransactionId: String!
  PersonID: String!
  TotalPointsAwarded: String!
  TotalTrxCount: String!
  TransactionStartDate: String!
  TransactionEndDate: String!
  TransactionChannel: String!
  "Transaction details list"
  Details: [TransactionDetail]
}


type TransactionDetail {
  SaleAmount: String!
  ReturnAmount: String!
  NumberofItems: String!
  ReturnQuantity: String!
  ProductName: String!
  Status: String!
}


"The object of balances. Some balances only apply to certain types of accounts. See notes below on balances.\\n"
type BalancesEntity {
  "The available balance. This is applicable for all account types, except POINTS and CONTINUITY, which uses its own balance keys. For ECOUPON account type this property will be returned and will be equal to zero.\\n"
  available: Int
  "The current balance. Applicable only to accounts of type POINTS and STAMP. If current is not provided on creation, this will be set to 0.\\n"
  current: Int
  """
  The lifetime balance. Applicable only to accounts of type POINTS and STAMP. If lifetime is not provided on creation, this will be set to 0.
  """
  lifetime: Int
  "The locked balance. Applicable only to accounts of type POINTS. If locked is not provided on creation, this will be set to 0.\\n"
  locked: Int
  "The refundable balance. This is applicable for all account types except POINTS and CONTINUITY, but is not used during account creation. For an Account Entity, the amount displayed here is the total refundable balance available. Please note for ECOUPON account type this property will be returned and equal to zero.\\n"
  refundable: Int
  "The total spend balance. Applicable only to accounts of type CONTINUITY.\\n"
  totalSpend: Int
  "The total units purchased balance. Applicable only to accounts of type CONTINUITY.\\n"
  totalUnits: Int
  "The transaction counter. Applicable only to accounts of type CONTINUITY.\\n"
  transactionCount: Int
  "The usable balance. Applicable only to accounts of type POINTS. If usable is not provided on creation, this will be set to 0.\\n"
  usable: Int
}


type DatesEntity {
  "End date of Reward Channel"
  end: String
  "Start date of Reward Channel"
  start: String
}


type Tier {
  id: String
}


type OrderBy {
  """Sort by column"""
  name: String!
  """Sorting order"""
  order: OrderDirection!
}


"The object of balanceAfter.\\n"
type SpendBalances {
  "The current balance.\\n"
  current: Int
  """The lifetime balance."""
  lifetime: Int
  """The amount that has been spent on this account it's lifetime."""
  lifetimeSpend: Int
  """
  The monetary value of the points that have been spent over the lifetime of this account.            
  """
  lifetimeSpendValue: Int
  "The locked balance.\\n"
  locked: Int
  "The usable balance.\\n"
  usable: Int
}


"""The campaign payload. See campaign documentation for details."""
type Campaign {
  """Reward Channel Type ID (EES Internal Type Reference)."""
  rewardChannelTypeId: Int
  """The Campaign ID for this reward or for this loyalty account."""
  campaignId: String
  """Determines if the campaign operates in open or restricted mode."""
  campaignMode: CampaignMode
  """The name of the campaign."""
  campaignName: String
  """Campaign Type ID (EES Internal Type Reference)"""
  campaignTypeId: String
  """Date that this campaign was created."""
  dateCreated: String
  """Start date of the campaign."""
  startDate: String
  """End date of the campaign."""
  endDate: String
  """Date that this campaign was last updated."""
  lastUpdated: String
  relationships: Relationships
  """The value of the barcode."""
  sequenceKey: String
  """The status of the Campaign (ie. ACTIVE, INACTIVE, EXPIRED)"""
  status: CampaignStatus
}


type Relationships {
  aGGREGATECHILD: AGGREGATECHILD
  aGGREGATECHILDOF: AGGREGATECHILDOF
  eNTITLEMENT: ENTITLEMENT
  eNTITLEMENTOF: ENTITLEMENTOF
  oBJECTIVE: OBJECTIVE
  oBJECTIVEOF: OBJECTIVEOF
  pROMOTION: PROMOTION
  pROMOTIONOF: PROMOTIONOF
}


type AGGREGATECHILD {
  sCHEME: [SCHEMEListItem]
}


type SCHEMEListItem {
  """The campaignId of the scheme that is a child of this scheme."""
  campaignId: String
  """The date that this relationship was created on."""
  dateCreated: String
}


type AGGREGATECHILDOF {
  sCHEME: [SCHEME2ListItem]
}


type SCHEME2ListItem {
  """The campaignId of the scheme that this is the child of."""
  campaignId: String
  """The date that this relationship was created on."""
  dateCreated: String
}


type ENTITLEMENT {
  cAMPAIGN: [CAMPAIGN3ListItem]
}


type CAMPAIGN3ListItem {
  """The campaignId that the entitlement accounts will be created from."""
  accountId: String
  """The date that this relationship was created on."""
  dateCreated: String
}


type ENTITLEMENTOF {
  pLAN: [PLANListItem]
}


type PLANListItem {
  """
  The campaignId of the plan that uses this campaign to create entitlement accounts.
  """
  campaignId: String
  """The date that this relationship was created on."""
  dateCreated: String
}


type OBJECTIVE {
  cAMPAIGN: [CAMPAIGN2ListItem]
}


type CAMPAIGN2ListItem {
  """The campaign ID of the objective campaign"""
  campaignId: String
  """The date that this relationship was created on."""
  dateCreated: String
}


type OBJECTIVEOF {
  cAMPAIGN: [CAMPAIGNListItem]
}


type CAMPAIGNListItem {
  """The ID of the campaign that this campaign is an objective of."""
  campaignId: String
  """The date that this relationship was created on."""
  dateCreated: String
}


type PROMOTION {
  cAMPAIGN: [CAMPAIGN4ListItem]
}


type CAMPAIGN4ListItem {
  """The campaignId of promotions a customer maybe eligible for.."""
  campaignId: String
  """The date that this relationship was created on."""
  dateCreated: String
}


type PROMOTIONOF {
  cAMPAIGN: [CAMPAIGN5ListItem]
}


type CAMPAIGN5ListItem {
  """
  The campaignId of the multi-discount coupon that triggers rewards from this campaign.
  """
  campaignId: String
  """The date that this relationship was created on."""
  dateCreated: String
}


type RewardChannelListItem {
  """
  (Please note for open offers this field will be null.  Open offers are available but not targeted specifically for customer.  When activated during a transaction, based on basket contents, a RewardChannelId is created and this offer becomes part of the customer's transaction.)
  """
  RewardChannelId: String!
  """
  Key-Value object, please note key name length should be less then 255 characters and key values should be less then 255 characters
  """
  meta: JSON!
  "Applied to loyalty accounts, this provides current balance, lifetime earn, and lifetime redeemed"
  balances: SpendBalances!
  "The campaign provides information about this reward channel's specifics, like name, status, and start/end dates."
  campaign: Campaign!
  """The Campaign ID for this reward or for this loyalty account."""
  campaignId: String!
  """
  RewardChannel Client types are managed by EE.  A list of enums will be made available (client type can be returned as null)
  """
  clientType: String!
  """RewardChannel Creation Date-Time (Atom format)"""
  dateCreated: String!
  "Start and End dates for this channel being available"
  dates: DatesEntity!
  "Provides additional information about this reward.  If channel is a loyalty account, it provides information like earn rates and redemption rates that have been set up"
  enriched: RewardChannelEnrichmentEntity!
  """RewardChannel Last Update Date-Time (Atom format)"""
  lastUpdated: String!
  """State shows whether reward is LOADED or UNLOADED"""
  state: RewardChannelState!
  """Reward Channel Status such as ACTIVE or INACTIVE"""
  status: RewardChannelStatus!
  """Reward Channel Type such as ECOUPON, CONTINUITY, STAMP_CARD, POINTS"""
  type: RewardChannelType!
}


type ProgrammeRewardChannelEnrichment {
  enrichmentType: EnrichmentType!
  """Programme Name"""
  programmeName: String!
  """Programme Reference"""
  programmeReference: String!
  """Token"""
  token: String
}


type PointsRewardChannelEnrichment {
  "Type would be POINTS"
  enrichmentType: EnrichmentType!
  properties: Properties
  """
  Scheme Name created in EE to provide earn and redemption rules for different tiers
  """
  schemeName: String!
  """Scheme Id"""
  schemeReference: String!
}


type Properties {
  """Scheme Base Earn"""
  baseEarn: JSON
  """Scheme Redemption Rates"""
  credit: JSON
  """Scheme Debit"""
  debit: JSON
  """Scheme Details"""
  details: JSON
  """Scheme Earn Rates"""
  earnRates: JSON
  """Scheme Goodwill"""
  goodwill: JSON
  pointsExpiry: PointsExpiry
  """Scheme Redemption Rates"""
  redemptionRates: JSON
}


type PointsExpiry {
  """Number of points."""
  points: Int
  """Time at which the points expire."""
  validTo: String
}


type StampRewardChannelEnrichment {
  enrichmentType: EnrichmentType!
  properties: JSON
  """Scheme Name"""
  schemeName: String!
  """Scheme Reference"""
  schemeReference: String!
}


type CampaignRewardChannelEnrichment {
  """Campaign Name"""
  campaignName: String!
  """Campaign Reference"""
  campaignReference: String!
  """
  Configured custom form fields in key-value pair format, grouped by form
  """
  custom: JSON
  enrichmentType: EnrichmentType!
  qualifier: [JSON]!
  redemptionWindows: RedemptionWindows
  restrictions: Restrictions
  reward: RewardOffer!
  """Token"""
  token: String
}


type RedemptionWindows {
  exclusions: [ExclusionWindowEntity]
  rolling: [WindowEntity]
}


type ExclusionWindowEntity {
  """Exclusion Window End (ATOM format)"""
  end: String!
  """Exclusion Window Start (ATOM format)"""
  start: String!
}


type WindowEntity {
  """Window definition End Day (Weekday name)"""
  endDay: EndDay!
  """Window definition End Time (in 24h format)"""
  endTime: String!
  """Window definition Start Day (Weekday name)"""
  startDay: StartDay!
  """Window definition Start Time (in 24h format)"""
  startTime: String!
}


type Restrictions {
  limits: Limits
}


type Limits {
  period: [PeriodListItem]
}


type PeriodListItem {
  """Numeric limit for this Redemption Restriction Type"""
  limit: Int
  """Remaining Redemptions for that particular Restriction Type"""
  remaining: Int
  """
  Information when next restriction cycle would start in ATOM date-time format
  """
  start: String
  """Redemption Restriction Type"""
  threshold: Threshold
  """Amount of Redemptions for that particular Restriction Type"""
  used: Int
}


type RewardOffer {
  """Offer ID"""
  offerId: String!
  """Offer Name"""
  offerName: String!
  """Offer reference (Promo Id)"""
  posReference: String!
}


type ContinuityRewardChannelEnrichment {
  """Campaign Name."""
  campaignName: String!
  """Campaign Reference."""
  campaignReference: String!
  """
  Configured custom form fields in key-value pair format, grouped by form
  """
  custom: JSON
  enrichmentType: EnrichmentType!
  """The campaign's qualifications"""
  qualifier: Qualifier
  redemptionWindows: RedemptionWindows
  restrictions: Restrictions
  reward: RewardOffer
  """The account's token"""
  token: String
}


"""The campaign's qualifications"""
type Qualifier {
  continuity: Continuity
}


type Continuity {
  """The number of transactions required to qualify for this coupon."""
  totalTransactionCount: Int
  """The total spend amount required to qualify for this coupon."""
  totalTransactionSpend: Int
  """
  RewardChannel override for totalTransactionUnits - Only valid if campaign uses totalTransactionUnits.
  """
  totalTransactionUnits: Int
}


enum RewardChannelType {
  ECOUPON
  VOUCHER
  STAMP_CARD
  PAPER
  DEBIT
  PLASTIC
  POINTS
  BASIC_SUBSCRIPTION
  STANDARD_SUBSCRIPTION
  CONTINUITY
}


enum EndDay {
  MONDAY
  TUESDAY
  WEDNESDAY
  THURSDAY
  FRIDAY
  SATURDAY
  SUNDAY
}


enum StartDay {
  MONDAY
  TUESDAY
  WEDNESDAY
  THURSDAY
  FRIDAY
  SATURDAY
  SUNDAY
}


enum Threshold {
  LIFETIME
  DAY
  WEEK
  MONTH
  YEAR
}


enum TransactionType {
  ADJUSTMENT
  SETTLE
  REFUND
}


enum EnrichmentType {
  PROGRAMME
  POINTS
  STAMP
  COUPON
  CONTINUITY
}


enum TransactionState {
  ORIGNAL
  MODIFIED
}


enum RewardChannelState {
  "The account will be used in adjudication during the next transaction"
  LOADED
  "The account will be excluded from adjudication"
  UNLOADED
  "A points account that can both earn and spend points"
  EARNBURN
}


enum RewardChannelStatus {
  ACTIVE
  BLOCKED
  CANCELLED
  EXPIRED
  INACTIVE
  INVALIDATED
  LOCKED
  STOLEN
  USED
}


enum CampaignMode {
  OPEN
  "Targeted"
  RESTRICTED
}


enum CampaignStatus {
  ACTIVE
  INACTIVE
  EXPIRED
  DELETED
  PENDING
  DRAFT
  REJECTED
  READY
  STOPPED
  SUSPENDED
}


enum PointsType {
  POINTS
  REWARDS
}


enum SchemaStatus {
  ACTIVE
  INACTIVE
}


enum SchemaState {
  LOADED
  UNLOADED
}


enum CustomerStatus {
  ACTIVE
  DELETED
  INACTIVE
  SUSPENDED
  TERMINATED
  MERGED
}


enum BasketType {
  STANDARD
  ENRICHED
}


enum AdjudicationMode {
  CLIENT
  SERVER
  CUSTOM
}


enum Base {
  DEM
}


enum SalesKey {
  SALE
  REFUND
  FULFIL
}


enum CacheControlScope {
  PUBLIC
  PRIVATE
}


enum OperationMode {
  ACTIVE
  PASSIVE
}


enum OperationType {
  REDEEM
  CREDIT
  DEBIT
  EARN
  SPEND
  STAMP
}


enum ResourceType {
  SCHEME
  CAMPAIGN
}


enum CampaignsStatus {
  ACTIVE
  INACTIVE
  PENDING
  EXPIRED
  DELETED
  DRAFT
  REJECTED
  READY
}


enum ItemUnitMetric {
  LITRES
  GRAMS
  MILLILITERS
  KILOGRAMS
  POUNDS
  OUNCES
  PIECE
  EACH
}


enum TransactionStatus {
  ACTIVE
  SETTLED
  EXPIRED
  CANCELLED
  DELETED
  PURGED
  FULFILLING
  FULFILLED
}


enum AppliedAnalyseBasketType {
  FIXED_POINTS
  FIXED_POINTS_BASKET
  FIXED_POINTS_PRODUCTS
  VARIABLE_POINTS_BASKET
  VARIABLE_POINTS_PRODUCTS
}


enum OrderDirection {
  ASC
  DESC
}


enum StoreType {
  RETAIL
  ONLINE
}


type Pagination {
  """Query string Pagination Limit"""
  limit: Int
  """Query string Pagination Offset"""
  offset: Int
  """Query string Order By"""
  orderBy: OrderBy
  """Total Results"""
  total: Int
}


union TransactionBasketEntity = StandardBasketEntity | EnrichedBasketEntity | PointsBasketEntity


union RewardChannelEnrichmentEntity = ProgrammeRewardChannelEnrichment | PointsRewardChannelEnrichment | StampRewardChannelEnrichment | CampaignRewardChannelEnrichment | ContinuityRewardChannelEnrichment


directive @cacheControl(maxAge: Int, scope: CacheControlScope, inheritMaxAge: Boolean) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION
`;class tv{constructor(n){De(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var or;(function(i){i.UNION="union",i.ARGUMENT="argument",i.FIELD="field"})(or||(or={}));function iv(i){const n=new Map;return rv(i,t=>{En(t)&&sv(t,s=>{const a=go(s.type);ao(n,a).references.push({kind:or.FIELD,parent:t,by:s}),av(s,l=>{const p=go(l.type);ao(n,p).references.push({kind:or.ARGUMENT,field:s,type:t,by:l})})}),Kn(t)&&t.getTypes().forEach(s=>{ao(n,s).references.push({kind:or.UNION,by:t})})}),new tv(n)}function rv(i,n){Object.entries(i.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function sv(i,n){Object.entries(i.getFields()).forEach(([,t])=>{n(t)})}function av(i,n){Object.entries(i.args).forEach(([,t])=>{n(t)})}function ao(i,n){let t=i.get(n.name);return t||(t={references:[]},i.set(n.name,t)),t}function go(i){return ln(i)||pi(i)?go(i.ofType):i}const fn=Tv(),yo=wo(bo.DIRECTIVES,[]);var Wc;const ov=Os((Wc=fn.getQueryType())==null?void 0:Wc.getFields());var Yc;const uv=Os((Yc=fn.getMutationType())==null?void 0:Yc.getFields());var Qc;const lv=Os((Qc=fn.getSubscriptionType())==null?void 0:Qc.getFields()),ko=Ct.keyBy(Vf(),i=>i.name.toLocaleLowerCase()),cv=Ct.mapValues(ko,i=>{const n=yo.find(t=>(t==null?void 0:t.name)===i.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?i.args:n.args.map(t=>i.args.find(s=>s.name===t)).filter(t=>!!t):[]}),fv=Os(fn.getTypeMap()),pv=iv(fn);function Os(i){return Ct.mapKeys(i||{},(n,t)=>t.toLocaleLowerCase())}function dv(){return Ct.size(fn.getTypeMap())<=10}function hv(){return[oo("Queries",fn.getQueryType()),oo("Mutations",fn.getMutationType()),oo("Subscriptions",fn.getSubscriptionType()),Dv(),yv()].filter(i=>!!i)}function oo(i,n){return gv(i,mv(n))}function mv(i){return Ct.sortBy((i==null?void 0:i.getFields())||{},n=>n.name)}function gv(i,n){return n.length===0?null:{type:"menu",title:i,children:n.map(t=>({type:"page",title:t.name,section:i,deprecated:!!t.deprecationReason,href:fr.joinUrlPaths(vs,i.toLocaleLowerCase(),t.name)}))}}function yv(){return dv()?null:{type:"menu",title:"Types",children:Ct.sortBy(Ct.map(fn.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:fr.joinUrlPaths(vs,"types",n.name)}))}}function Lv(){return!!fn.getQueryType()}function Bv(i){return ov[i.toLocaleLowerCase()]}function Pv(){return!!fn.getMutationType()}function Uv(i){return uv[i.toLocaleLowerCase()]}function Mv(){return!!fn.getSubscriptionType()}function $v(i){return lv[i.toLocaleLowerCase()]}function Vv(i){return fv[i.toLocaleLowerCase()]}function Ev(i){return ko[i.toLocaleLowerCase()]}function Gv(i){return Ev(i.name)!==void 0}function jv(){return Ct.size(ko)>0}function qv(i){return cv[i.name.toLocaleLowerCase()]||[]}function Wv(i){if(i)return pv.getFor(i)}function Yv(i){return Ct.flatMap(i.getFields(),n=>({field:n,possibleDescriptions:$f(n,i)}))}function $f(i,n){return i?i.description?[{description:i.description,from:n}]:En(n)?n.getInterfaces().flatMap(t=>$f(t.getFields()[i.name],t)):[]:[]}function Vf(){return yo.some(i=>(i==null?void 0:i.name)==="*")?fn.getDirectives().filter(i=>!["include","skip","deprecated","specifiedBy"].includes(i.name)):yo.filter(i=>!!(i!=null&&i.name)).map(({name:i})=>i?fn.getDirective(i):void 0).filter(i=>!!i)}function Tv(){return jc.trim().length===0?KI(JSON.parse(JSON.stringify({__schema:{types:[]}}))):nv(jc)}function Dv(){const i=Vf();return i.length===0?null:{type:"menu",title:"Directives",children:i.map(n=>({type:"page",title:n.name,href:fr.joinUrlPaths(vs,"directives",n.name),section:"Directives"}))}}const Qv=wo(bo.APP_TITLE,"GraphQL Documentation"),Gf=vv().concat(hv());Av(Gf);const Iv=Object.freeze(Gf),zv=_v();function vv(){return wo(bo.PAGES,wv()).filter(n=>!!n).map(n=>qf([],n))}function _v(){const i=bv();if(i)return i.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function Av(i){function n(s,a){for(const u of s){if(u.type==="page"){a(u);continue}u.type==="menu"&&n(u.children,a)}}let t;n(i,s=>{t&&(t.next={title:s.title,section:s.section,href:s.href},s.previous={title:t.title,section:t.section,href:t.href}),t=s})}function bv(){return jf(()=>!0)}function Jv(i){return jf(n=>n.href.toLocaleLowerCase()===i.toLocaleLowerCase())}function jf(i){function n(t){for(const s of t){if(s.type==="page"&&i(s))return s;if(s.type==="menu"){const a=n(s.children);if(a)return a}}return null}return n(Iv)}function qf(i,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:fr.joinUrlPaths(vs,...i,qc(n.title))};const t=i.concat([qc(n.title)]);return{type:"menu",title:n.title,children:n.content.map(s=>({...qf(t,s),section:n.title}))}}function qc(i){return fr.generatePathSegment(i,new tf)}function wv(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(i=>i.trim()).join(`
`)}]}]}export{Lv as A,tf as B,Bv as C,Mv as D,$v as E,aI as F,ln as G,pi as H,If as I,Df as J,Vv as K,Wv as L,Yv as M,Gv as N,_ as O,Rv as P,_s as Q,or as R,Xc as S,kv as T,tr as U,oD as V,Ct as _,Ov as a,wo as b,Jn as c,En as d,ct as e,cn as f,Jc as g,Jt as h,Zn as i,Kn as j,et as k,dv as l,Ie as m,Qv as n,xv as o,Iv as p,zv as q,Jv as r,fn as s,bo as t,fr as u,jv as v,Ev as w,qv as x,Pv as y,Uv as z};
