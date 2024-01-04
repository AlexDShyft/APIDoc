var Fy=Object.defineProperty;var Ny=(i,n,t)=>n in i?Fy(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var De=(i,n,t)=>(Ny(i,typeof n!="symbol"?n+"":n,t),t),Cy=(i,n,t)=>{if(!n.has(i))throw TypeError("Cannot "+t)};var ea=(i,n,t)=>{if(n.has(i))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(i):n.set(i,t)};var ss=(i,n,t)=>(Cy(i,n,"access private method"),t);import{b as _s}from"./paths.7c6ba9fd.js";import{S as Be,i as Pe,a as te,t as ue,g as Ft,c as Nt,b as Wt,d as ci,m as Qt,e as zt}from"./index.012ade26.js";import{s as Ne,e as tn,i as _e,d as K,r as nt,u as Yc,f as Oe,g as xe,h as qe,a4 as ds,x as tt,y as it,z as rt,R as ur,q as cc,l as ya,m as Ta,n as Da,H as Xe,j as gn,G as wt,a as Ia,c as _a,U as ky,V as Oy,a7 as fc,o as xy}from"./scheduler.88297443.js";function ct(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Jc(i,n){const t={},s={},o={$$scope:1};let u=i.length;for(;u--;){const l=i[u],p=n[u];if(p){for(const d in l)d in p||(s[d]=1);for(const d in p)o[d]||(t[d]=p[d],o[d]=1);i[u]=p}else for(const d in l)o[d]=1}for(const l in s)l in t||(t[l]=void 0);return t}function k_(i){return typeof i=="object"&&i!==null?i:{}}function la(...i){return"/"+i.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}function ca(i){return i.startsWith("/")||i.startsWith("#")}function Hc(i,n){return n.slug(i).replace(/--+/g,"-")}function na(i){let n,t;const s=i[5].default,o=nt(s,i,i[4],null);let u=[{id:i[1]}],l={};for(let p=0;p<u.length;p+=1)l=Yc(l,u[p]);return{c(){n=Oe(`h${i[0].depth}`),o&&o.c(),this.h()},l(p){n=xe(p,(`h${i[0].depth}`||"null").toUpperCase(),{id:!0});var d=qe(n);o&&o.l(d),d.forEach(K),this.h()},h(){ds(`h${i[0].depth}`)(n,l)},m(p,d){_e(p,n,d),o&&o.m(n,null),t=!0},p(p,d){o&&o.p&&(!t||d&16)&&tt(o,s,p,p[4],t?rt(s,p[4],d,null):it(p[4]),null),ds(`h${p[0].depth}`)(n,l=Jc(u,[(!t||d&2)&&{id:p[1]}]))},i(p){t||(te(o,p),t=!0)},o(p){ue(o,p),t=!1},d(p){p&&K(n),o&&o.d(p)}}}function Ry(i){let n=`h${i[0].depth}`,t,s,o=`h${i[0].depth}`&&na(i);return{c(){o&&o.c(),t=tn()},l(u){o&&o.l(u),t=tn()},m(u,l){o&&o.m(u,l),_e(u,t,l),s=!0},p(u,[l]){`h${u[0].depth}`?n?Ne(n,`h${u[0].depth}`)?(o.d(1),o=na(u),n=`h${u[0].depth}`,o.c(),o.m(t.parentNode,t)):o.p(u,l):(o=na(u),n=`h${u[0].depth}`,o.c(),o.m(t.parentNode,t)):n&&(o.d(1),o=null,n=`h${u[0].depth}`)},i(u){s||(te(o,u),s=!0)},o(u){ue(o,u),s=!1},d(u){u&&K(t),o&&o.d(u)}}}function Ly(i,n,t){let{$$slots:s={},$$scope:o}=n,{token:u}=n,{options:l}=n;const p=void 0;let d;return i.$$set=E=>{"token"in E&&t(0,u=E.token),"options"in E&&t(2,l=E.options),"$$scope"in E&&t(4,o=E.$$scope)},i.$$.update=()=>{i.$$.dirty&5&&t(1,d=Hc(u.text,l.slugger))},[u,d,l,p,o,s]}class By extends Be{constructor(n){super(),Pe(this,n,Ly,Ry,Ne,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function Py(i){let n,t;const s=i[4].default,o=nt(s,i,i[3],null);return{c(){n=Oe("blockquote"),o&&o.c()},l(u){n=xe(u,"BLOCKQUOTE",{});var l=qe(n);o&&o.l(l),l.forEach(K)},m(u,l){_e(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(o,u),t=!0)},o(u){ue(o,u),t=!1},d(u){u&&K(n),o&&o.d(u)}}}function $y(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class Uy extends Be{constructor(n){super(),Pe(this,n,$y,Py,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function pc(i,n,t){const s=i.slice();return s[3]=n[t],s}function dc(i){let n,t,s=ct(i[0]),o=[];for(let l=0;l<s.length;l+=1)o[l]=hc(pc(i,s,l));const u=l=>ue(o[l],1,1,()=>{o[l]=null});return{c(){for(let l=0;l<o.length;l+=1)o[l].c();n=tn()},l(l){for(let p=0;p<o.length;p+=1)o[p].l(l);n=tn()},m(l,p){for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(l,p);_e(l,n,p),t=!0},p(l,p){if(p&7){s=ct(l[0]);let d;for(d=0;d<s.length;d+=1){const E=pc(l,s,d);o[d]?(o[d].p(E,p),te(o[d],1)):(o[d]=hc(E),o[d].c(),te(o[d],1),o[d].m(n.parentNode,n))}for(Ft(),d=s.length;d<o.length;d+=1)u(d);Nt()}},i(l){if(!t){for(let p=0;p<s.length;p+=1)te(o[p]);t=!0}},o(l){o=o.filter(Boolean);for(let p=0;p<o.length;p+=1)ue(o[p]);t=!1},d(l){l&&K(n),ur(o,l)}}}function hc(i){let n,t;return n=new Xc({props:{token:i[3],renderers:i[1],options:i[2]}}),{c(){Wt(n.$$.fragment)},l(s){ci(n.$$.fragment,s)},m(s,o){Qt(n,s,o),t=!0},p(s,o){const u={};o&1&&(u.token=s[3]),o&2&&(u.renderers=s[1]),o&4&&(u.options=s[2]),n.$set(u)},i(s){t||(te(n.$$.fragment,s),t=!0)},o(s){ue(n.$$.fragment,s),t=!1},d(s){zt(n,s)}}}function My(i){let n,t,s=i[0]&&dc(i);return{c(){s&&s.c(),n=tn()},l(o){s&&s.l(o),n=tn()},m(o,u){s&&s.m(o,u),_e(o,n,u),t=!0},p(o,[u]){o[0]?s?(s.p(o,u),u&1&&te(s,1)):(s=dc(o),s.c(),te(s,1),s.m(n.parentNode,n)):s&&(Ft(),ue(s,1,1,()=>{s=null}),Nt())},i(o){t||(te(s),t=!0)},o(o){ue(s),t=!1},d(o){o&&K(n),s&&s.d(o)}}}function Vy(i,n,t){let{tokens:s}=n,{renderers:o}=n,{options:u}=n;return i.$$set=l=>{"tokens"in l&&t(0,s=l.tokens),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,u=l.options)},[s,o,u]}class vs extends Be{constructor(n){super(),Pe(this,n,Vy,My,Ne,{tokens:0,renderers:1,options:2})}}function mc(i){let n,t,s;var o=i[1][i[0].type];function u(l,p){return{props:{token:l[0],options:l[2],renderers:l[1],$$slots:{default:[qy]},$$scope:{ctx:l}}}}return o&&(n=cc(o,u(i))),{c(){n&&Wt(n.$$.fragment),t=tn()},l(l){n&&ci(n.$$.fragment,l),t=tn()},m(l,p){n&&Qt(n,l,p),_e(l,t,p),s=!0},p(l,p){if(p&3&&o!==(o=l[1][l[0].type])){if(n){Ft();const d=n;ue(d.$$.fragment,1,0,()=>{zt(d,1)}),Nt()}o?(n=cc(o,u(l)),Wt(n.$$.fragment),te(n.$$.fragment,1),Qt(n,t.parentNode,t)):n=null}else if(o){const d={};p&1&&(d.token=l[0]),p&4&&(d.options=l[2]),p&2&&(d.renderers=l[1]),p&15&&(d.$$scope={dirty:p,ctx:l}),n.$set(d)}},i(l){s||(n&&te(n.$$.fragment,l),s=!0)},o(l){n&&ue(n.$$.fragment,l),s=!1},d(l){l&&K(t),n&&zt(n,l)}}}function jy(i){let n=i[0].raw+"",t;return{c(){t=ya(n)},l(s){t=Ta(s,n)},m(s,o){_e(s,t,o)},p(s,o){o&1&&n!==(n=s[0].raw+"")&&Da(t,n)},i:Xe,o:Xe,d(s){s&&K(t)}}}function Gy(i){let n,t;return n=new vs({props:{tokens:i[0].tokens,renderers:i[1],options:i[2]}}),{c(){Wt(n.$$.fragment)},l(s){ci(n.$$.fragment,s)},m(s,o){Qt(n,s,o),t=!0},p(s,o){const u={};o&1&&(u.tokens=s[0].tokens),o&2&&(u.renderers=s[1]),o&4&&(u.options=s[2]),n.$set(u)},i(s){t||(te(n.$$.fragment,s),t=!0)},o(s){ue(n.$$.fragment,s),t=!1},d(s){zt(n,s)}}}function qy(i){let n,t,s,o;const u=[Gy,jy],l=[];function p(d,E){return"tokens"in d[0]&&d[0].tokens?0:1}return n=p(i),t=l[n]=u[n](i),{c(){t.c(),s=tn()},l(d){t.l(d),s=tn()},m(d,E){l[n].m(d,E),_e(d,s,E),o=!0},p(d,E){let y=n;n=p(d),n===y?l[n].p(d,E):(Ft(),ue(l[y],1,1,()=>{l[y]=null}),Nt(),t=l[n],t?t.p(d,E):(t=l[n]=u[n](d),t.c()),te(t,1),t.m(s.parentNode,s))},i(d){o||(te(t),o=!0)},o(d){ue(t),o=!1},d(d){d&&K(s),l[n].d(d)}}}function Wy(i){let n,t,s=i[1][i[0].type]&&mc(i);return{c(){s&&s.c(),n=tn()},l(o){s&&s.l(o),n=tn()},m(o,u){s&&s.m(o,u),_e(o,n,u),t=!0},p(o,[u]){o[1][o[0].type]?s?(s.p(o,u),u&3&&te(s,1)):(s=mc(o),s.c(),te(s,1),s.m(n.parentNode,n)):s&&(Ft(),ue(s,1,1,()=>{s=null}),Nt())},i(o){t||(te(s),t=!0)},o(o){ue(s),t=!1},d(o){o&&K(n),s&&s.d(o)}}}function Qy(i,n,t){let{token:s}=n,{renderers:o}=n,{options:u}=n;return i.$$set=l=>{"token"in l&&t(0,s=l.token),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,u=l.options)},[s,o,u]}class Xc extends Be{constructor(n){super(),Pe(this,n,Qy,Wy,Ne,{token:0,renderers:1,options:2})}}function gc(i,n,t){const s=i.slice();return s[4]=n[t],s}function Ec(i){let n,t;return n=new Xc({props:{token:{...i[4]},options:i[1],renderers:i[2]}}),{c(){Wt(n.$$.fragment)},l(s){ci(n.$$.fragment,s)},m(s,o){Qt(n,s,o),t=!0},p(s,o){const u={};o&1&&(u.token={...s[4]}),o&2&&(u.options=s[1]),o&4&&(u.renderers=s[2]),n.$set(u)},i(s){t||(te(n.$$.fragment,s),t=!0)},o(s){ue(n.$$.fragment,s),t=!1},d(s){zt(n,s)}}}function ta(i){let n,t,s,o=ct(i[0].items),u=[];for(let E=0;E<o.length;E+=1)u[E]=Ec(gc(i,o,E));const l=E=>ue(u[E],1,1,()=>{u[E]=null});let p=[{start:t=i[0].start||1}],d={};for(let E=0;E<p.length;E+=1)d=Yc(d,p[E]);return{c(){n=Oe(i[3]);for(let E=0;E<u.length;E+=1)u[E].c();this.h()},l(E){n=xe(E,(i[3]||"null").toUpperCase(),{start:!0});var y=qe(n);for(let I=0;I<u.length;I+=1)u[I].l(y);y.forEach(K),this.h()},h(){ds(i[3])(n,d)},m(E,y){_e(E,n,y);for(let I=0;I<u.length;I+=1)u[I]&&u[I].m(n,null);s=!0},p(E,y){if(y&7){o=ct(E[0].items);let I;for(I=0;I<o.length;I+=1){const w=gc(E,o,I);u[I]?(u[I].p(w,y),te(u[I],1)):(u[I]=Ec(w),u[I].c(),te(u[I],1),u[I].m(n,null))}for(Ft(),I=o.length;I<u.length;I+=1)l(I);Nt()}ds(E[3])(n,d=Jc(p,[(!s||y&1&&t!==(t=E[0].start||1))&&{start:t}]))},i(E){if(!s){for(let y=0;y<o.length;y+=1)te(u[y]);s=!0}},o(E){u=u.filter(Boolean);for(let y=0;y<u.length;y+=1)ue(u[y]);s=!1},d(E){E&&K(n),ur(u,E)}}}function zy(i){let n=i[3],t,s=i[3]&&ta(i);return{c(){s&&s.c(),t=tn()},l(o){s&&s.l(o),t=tn()},m(o,u){s&&s.m(o,u),_e(o,t,u)},p(o,[u]){o[3]?n?Ne(n,o[3])?(s.d(1),s=ta(o),n=o[3],s.c(),s.m(t.parentNode,t)):s.p(o,u):(s=ta(o),n=o[3],s.c(),s.m(t.parentNode,t)):n&&(s.d(1),s=null,n=o[3])},i:Xe,o(o){ue(s,o)},d(o){o&&K(t),s&&s.d(o)}}}function Yy(i,n,t){let{token:s}=n,{options:o}=n,{renderers:u}=n,l;return i.$$set=p=>{"token"in p&&t(0,s=p.token),"options"in p&&t(1,o=p.options),"renderers"in p&&t(2,u=p.renderers)},i.$$.update=()=>{i.$$.dirty&1&&t(3,l=s.ordered?"ol":"ul")},[s,o,u,l]}class Jy extends Be{constructor(n){super(),Pe(this,n,Yy,zy,Ne,{token:0,options:1,renderers:2})}}function Hy(i){let n,t;const s=i[4].default,o=nt(s,i,i[3],null);return{c(){n=Oe("li"),o&&o.c()},l(u){n=xe(u,"LI",{});var l=qe(n);o&&o.l(l),l.forEach(K)},m(u,l){_e(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(o,u),t=!0)},o(u){ue(o,u),t=!1},d(u){u&&K(n),o&&o.d(u)}}}function Xy(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class Ky extends Be{constructor(n){super(),Pe(this,n,Xy,Hy,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Zy(i){let n;return{c(){n=Oe("br")},l(t){n=xe(t,"BR",{})},m(t,s){_e(t,n,s)},p:Xe,i:Xe,o:Xe,d(t){t&&K(n)}}}function eT(i,n,t){return[void 0,void 0,void 0]}class nT extends Be{constructor(n){super(),Pe(this,n,eT,Zy,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function tT(i){let n,t,s=i[0].text+"",o,u;return{c(){n=Oe("pre"),t=Oe("code"),o=ya(s),this.h()},l(l){n=xe(l,"PRE",{});var p=qe(n);t=xe(p,"CODE",{class:!0});var d=qe(t);o=Ta(d,s),d.forEach(K),p.forEach(K),this.h()},h(){gn(t,"class",u=`lang-${i[0].lang}`)},m(l,p){_e(l,n,p),wt(n,t),wt(t,o)},p(l,[p]){p&1&&s!==(s=l[0].text+"")&&Da(o,s),p&1&&u!==(u=`lang-${l[0].lang}`)&&gn(t,"class",u)},i:Xe,o:Xe,d(l){l&&K(n)}}}function iT(i,n,t){let{token:s}=n;const o=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class rT extends Be{constructor(n){super(),Pe(this,n,iT,tT,Ne,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function sT(i){let n,t=i[0].raw.slice(1,i[0].raw.length-1)+"",s;return{c(){n=Oe("code"),s=ya(t)},l(o){n=xe(o,"CODE",{});var u=qe(n);s=Ta(u,t),u.forEach(K)},m(o,u){_e(o,n,u),wt(n,s)},p(o,[u]){u&1&&t!==(t=o[0].raw.slice(1,o[0].raw.length-1)+"")&&Da(s,t)},i:Xe,o:Xe,d(o){o&&K(n)}}}function oT(i,n,t){let{token:s}=n;const o=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class aT extends Be{constructor(n){super(),Pe(this,n,oT,sT,Ne,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function yc(i,n,t){const s=i.slice();return s[3]=n[t],s}function Tc(i,n,t){const s=i.slice();return s[6]=n[t],s}function Dc(i,n,t){const s=i.slice();return s[9]=n[t],s}function Ic(i){let n,t,s,o;return t=new vs({props:{tokens:i[9].tokens,options:i[1],renderers:i[2]}}),{c(){n=Oe("th"),Wt(t.$$.fragment),s=Ia(),this.h()},l(u){n=xe(u,"TH",{scope:!0});var l=qe(n);ci(t.$$.fragment,l),s=_a(l),l.forEach(K),this.h()},h(){gn(n,"scope","col")},m(u,l){_e(u,n,l),Qt(t,n,null),wt(n,s),o=!0},p(u,l){const p={};l&1&&(p.tokens=u[9].tokens),l&2&&(p.options=u[1]),l&4&&(p.renderers=u[2]),t.$set(p)},i(u){o||(te(t.$$.fragment,u),o=!0)},o(u){ue(t.$$.fragment,u),o=!1},d(u){u&&K(n),zt(t)}}}function _c(i){let n,t,s;return t=new vs({props:{tokens:i[6].tokens,options:i[1],renderers:i[2]}}),{c(){n=Oe("td"),Wt(t.$$.fragment)},l(o){n=xe(o,"TD",{});var u=qe(n);ci(t.$$.fragment,u),u.forEach(K)},m(o,u){_e(o,n,u),Qt(t,n,null),s=!0},p(o,u){const l={};u&1&&(l.tokens=o[6].tokens),u&2&&(l.options=o[1]),u&4&&(l.renderers=o[2]),t.$set(l)},i(o){s||(te(t.$$.fragment,o),s=!0)},o(o){ue(t.$$.fragment,o),s=!1},d(o){o&&K(n),zt(t)}}}function vc(i){let n,t,s,o=ct(i[3]),u=[];for(let p=0;p<o.length;p+=1)u[p]=_c(Tc(i,o,p));const l=p=>ue(u[p],1,1,()=>{u[p]=null});return{c(){n=Oe("tr");for(let p=0;p<u.length;p+=1)u[p].c();t=Ia()},l(p){n=xe(p,"TR",{});var d=qe(n);for(let E=0;E<u.length;E+=1)u[E].l(d);t=_a(d),d.forEach(K)},m(p,d){_e(p,n,d);for(let E=0;E<u.length;E+=1)u[E]&&u[E].m(n,null);wt(n,t),s=!0},p(p,d){if(d&7){o=ct(p[3]);let E;for(E=0;E<o.length;E+=1){const y=Tc(p,o,E);u[E]?(u[E].p(y,d),te(u[E],1)):(u[E]=_c(y),u[E].c(),te(u[E],1),u[E].m(n,t))}for(Ft(),E=o.length;E<u.length;E+=1)l(E);Nt()}},i(p){if(!s){for(let d=0;d<o.length;d+=1)te(u[d]);s=!0}},o(p){u=u.filter(Boolean);for(let d=0;d<u.length;d+=1)ue(u[d]);s=!1},d(p){p&&K(n),ur(u,p)}}}function uT(i){let n,t,s,o,u,l,p=ct(i[0].header),d=[];for(let O=0;O<p.length;O+=1)d[O]=Ic(Dc(i,p,O));const E=O=>ue(d[O],1,1,()=>{d[O]=null});let y=ct(i[0].rows),I=[];for(let O=0;O<y.length;O+=1)I[O]=vc(yc(i,y,O));const w=O=>ue(I[O],1,1,()=>{I[O]=null});return{c(){n=Oe("table"),t=Oe("thead"),s=Oe("tr");for(let O=0;O<d.length;O+=1)d[O].c();o=Ia(),u=Oe("tbody");for(let O=0;O<I.length;O+=1)I[O].c()},l(O){n=xe(O,"TABLE",{});var R=qe(n);t=xe(R,"THEAD",{});var L=qe(t);s=xe(L,"TR",{});var X=qe(s);for(let je=0;je<d.length;je+=1)d[je].l(X);X.forEach(K),L.forEach(K),o=_a(R),u=xe(R,"TBODY",{});var he=qe(u);for(let je=0;je<I.length;je+=1)I[je].l(he);he.forEach(K),R.forEach(K)},m(O,R){_e(O,n,R),wt(n,t),wt(t,s);for(let L=0;L<d.length;L+=1)d[L]&&d[L].m(s,null);wt(n,o),wt(n,u);for(let L=0;L<I.length;L+=1)I[L]&&I[L].m(u,null);l=!0},p(O,[R]){if(R&7){p=ct(O[0].header);let L;for(L=0;L<p.length;L+=1){const X=Dc(O,p,L);d[L]?(d[L].p(X,R),te(d[L],1)):(d[L]=Ic(X),d[L].c(),te(d[L],1),d[L].m(s,null))}for(Ft(),L=p.length;L<d.length;L+=1)E(L);Nt()}if(R&7){y=ct(O[0].rows);let L;for(L=0;L<y.length;L+=1){const X=yc(O,y,L);I[L]?(I[L].p(X,R),te(I[L],1)):(I[L]=vc(X),I[L].c(),te(I[L],1),I[L].m(u,null))}for(Ft(),L=y.length;L<I.length;L+=1)w(L);Nt()}},i(O){if(!l){for(let R=0;R<p.length;R+=1)te(d[R]);for(let R=0;R<y.length;R+=1)te(I[R]);l=!0}},o(O){d=d.filter(Boolean);for(let R=0;R<d.length;R+=1)ue(d[R]);I=I.filter(Boolean);for(let R=0;R<I.length;R+=1)ue(I[R]);l=!1},d(O){O&&K(n),ur(d,O),ur(I,O)}}}function lT(i,n,t){let{token:s}=n,{options:o}=n,{renderers:u}=n;return i.$$set=l=>{"token"in l&&t(0,s=l.token),"options"in l&&t(1,o=l.options),"renderers"in l&&t(2,u=l.renderers)},[s,o,u]}class cT extends Be{constructor(n){super(),Pe(this,n,lT,uT,Ne,{token:0,options:1,renderers:2})}}function fT(i){let n,t=i[0].text+"",s;return{c(){n=new ky(!1),s=tn(),this.h()},l(o){n=Oy(o,!1),s=tn(),this.h()},h(){n.a=s},m(o,u){n.m(t,o,u),_e(o,s,u)},p(o,[u]){u&1&&t!==(t=o[0].text+"")&&n.p(t)},i:Xe,o:Xe,d(o){o&&(K(s),n.d())}}}function pT(i,n,t){let{token:s}=n;const o=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class dT extends Be{constructor(n){super(),Pe(this,n,pT,fT,Ne,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function hT(i){let n,t;const s=i[4].default,o=nt(s,i,i[3],null);return{c(){n=Oe("p"),o&&o.c()},l(u){n=xe(u,"P",{});var l=qe(n);o&&o.l(l),l.forEach(K)},m(u,l){_e(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(o,u),t=!0)},o(u){ue(o,u),t=!1},d(u){u&&K(n),o&&o.d(u)}}}function mT(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class gT extends Be{constructor(n){super(),Pe(this,n,mT,hT,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function ET(i){let n,t,s,o;const u=i[4].default,l=nt(u,i,i[3],null);return{c(){n=Oe("a"),l&&l.c(),this.h()},l(p){n=xe(p,"A",{href:!0,title:!0});var d=qe(n);l&&l.l(d),d.forEach(K),this.h()},h(){gn(n,"href",t=ca(i[0].href)?la(i[1].baseUrl,i[0].href):i[0].href),gn(n,"title",s=i[0].title)},m(p,d){_e(p,n,d),l&&l.m(n,null),o=!0},p(p,[d]){l&&l.p&&(!o||d&8)&&tt(l,u,p,p[3],o?rt(u,p[3],d,null):it(p[3]),null),(!o||d&3&&t!==(t=ca(p[0].href)?la(p[1].baseUrl,p[0].href):p[0].href))&&gn(n,"href",t),(!o||d&1&&s!==(s=p[0].title))&&gn(n,"title",s)},i(p){o||(te(l,p),o=!0)},o(p){ue(l,p),o=!1},d(p){p&&K(n),l&&l.d(p)}}}function yT(i,n,t){let{$$slots:s={},$$scope:o}=n,{token:u}=n,{options:l}=n;const p=void 0;return i.$$set=d=>{"token"in d&&t(0,u=d.token),"options"in d&&t(1,l=d.options),"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class TT extends Be{constructor(n){super(),Pe(this,n,yT,ET,Ne,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function DT(i){let n;const t=i[4].default,s=nt(t,i,i[3],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,u){s&&s.m(o,u),n=!0},p(o,[u]){s&&s.p&&(!n||u&8)&&tt(s,t,o,o[3],n?rt(t,o[3],u,null):it(o[3]),null)},i(o){n||(te(s,o),n=!0)},o(o){ue(s,o),n=!1},d(o){s&&s.d(o)}}}function IT(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class _T extends Be{constructor(n){super(),Pe(this,n,IT,DT,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function vT(i){let n,t;const s=i[4].default,o=nt(s,i,i[3],null);return{c(){n=Oe("dfn"),o&&o.c()},l(u){n=xe(u,"DFN",{});var l=qe(n);o&&o.l(l),l.forEach(K)},m(u,l){_e(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(o,u),t=!0)},o(u){ue(o,u),t=!1},d(u){u&&K(n),o&&o.d(u)}}}function AT(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class bT extends Be{constructor(n){super(),Pe(this,n,AT,vT,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function ST(i){let n,t;const s=i[4].default,o=nt(s,i,i[3],null);return{c(){n=Oe("del"),o&&o.c()},l(u){n=xe(u,"DEL",{});var l=qe(n);o&&o.l(l),l.forEach(K)},m(u,l){_e(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(o,u),t=!0)},o(u){ue(o,u),t=!1},d(u){u&&K(n),o&&o.d(u)}}}function wT(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class FT extends Be{constructor(n){super(),Pe(this,n,wT,ST,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function NT(i){let n,t;const s=i[4].default,o=nt(s,i,i[3],null);return{c(){n=Oe("em"),o&&o.c()},l(u){n=xe(u,"EM",{});var l=qe(n);o&&o.l(l),l.forEach(K)},m(u,l){_e(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(o,u),t=!0)},o(u){ue(o,u),t=!1},d(u){u&&K(n),o&&o.d(u)}}}function CT(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class kT extends Be{constructor(n){super(),Pe(this,n,CT,NT,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function OT(i){let n;return{c(){n=Oe("hr")},l(t){n=xe(t,"HR",{})},m(t,s){_e(t,n,s)},p:Xe,i:Xe,o:Xe,d(t){t&&K(n)}}}function xT(i,n,t){return[void 0,void 0,void 0]}class RT extends Be{constructor(n){super(),Pe(this,n,xT,OT,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function LT(i){let n,t;const s=i[4].default,o=nt(s,i,i[3],null);return{c(){n=Oe("strong"),o&&o.c()},l(u){n=xe(u,"STRONG",{});var l=qe(n);o&&o.l(l),l.forEach(K)},m(u,l){_e(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(o,u),t=!0)},o(u){ue(o,u),t=!1},d(u){u&&K(n),o&&o.d(u)}}}function BT(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class PT extends Be{constructor(n){super(),Pe(this,n,BT,LT,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function $T(i){let n,t,s,o;return{c(){n=Oe("img"),this.h()},l(u){n=xe(u,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){fc(n.src,t=i[0].href)||gn(n,"src",t),gn(n,"title",s=i[0].title),gn(n,"alt",o=i[0].text),gn(n,"class","markdown-image svelte-z38cge")},m(u,l){_e(u,n,l)},p(u,[l]){l&1&&!fc(n.src,t=u[0].href)&&gn(n,"src",t),l&1&&s!==(s=u[0].title)&&gn(n,"title",s),l&1&&o!==(o=u[0].text)&&gn(n,"alt",o)},i:Xe,o:Xe,d(u){u&&K(n)}}}function UT(i,n,t){let{token:s}=n;const o=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class MT extends Be{constructor(n){super(),Pe(this,n,UT,$T,Ne,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function VT(i){let n;const t=i[4].default,s=nt(t,i,i[3],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,u){s&&s.m(o,u),n=!0},p(o,[u]){s&&s.p&&(!n||u&8)&&tt(s,t,o,o[3],n?rt(t,o[3],u,null):it(o[3]),null)},i(o){n||(te(s,o),n=!0)},o(o){ue(s,o),n=!1},d(o){s&&s.d(o)}}}function jT(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,p=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class Ac extends Be{constructor(n){super(),Pe(this,n,jT,VT,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function va(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let fi=va();function Kc(i){fi=i}const Zc=/[&<>"']/,GT=new RegExp(Zc.source,"g"),ef=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,qT=new RegExp(ef.source,"g"),WT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bc=i=>WT[i];function Sn(i,n){if(n){if(Zc.test(i))return i.replace(GT,bc)}else if(ef.test(i))return i.replace(qT,bc);return i}const QT=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function zT(i){return i.replace(QT,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const YT=/(^|[^\[])\^/g;function ye(i,n){i=typeof i=="string"?i:i.source,n=n||"";const t={replace:(s,o)=>(o=typeof o=="object"&&"source"in o?o.source:o,o=o.replace(YT,"$1"),i=i.replace(s,o),t),getRegex:()=>new RegExp(i,n)};return t}function Sc(i){try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const hs={exec:()=>null};function wc(i,n){const t=i.replace(/\|/g,(u,l,p)=>{let d=!1,E=l;for(;--E>=0&&p[E]==="\\";)d=!d;return d?"|":" |"}),s=t.split(/ \|/);let o=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),n)if(s.length>n)s.splice(n);else for(;s.length<n;)s.push("");for(;o<s.length;o++)s[o]=s[o].trim().replace(/\\\|/g,"|");return s}function ia(i,n,t){const s=i.length;if(s===0)return"";let o=0;for(;o<s;){const u=i.charAt(s-o-1);if(u===n&&!t)o++;else if(u!==n&&t)o++;else break}return i.slice(0,s-o)}function JT(i,n){if(i.indexOf(n[1])===-1)return-1;let t=0;for(let s=0;s<i.length;s++)if(i[s]==="\\")s++;else if(i[s]===n[0])t++;else if(i[s]===n[1]&&(t--,t<0))return s;return-1}function Fc(i,n,t,s){const o=n.href,u=n.title?Sn(n.title):null,l=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){s.state.inLink=!0;const p={type:"link",raw:t,href:o,title:u,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,p}return{type:"image",raw:t,href:o,title:u,text:Sn(l)}}function HT(i,n){const t=i.match(/^(\s+)(?:```)/);if(t===null)return n;const s=t[1];return n.split(`
`).map(o=>{const u=o.match(/^\s+/);if(u===null)return o;const[l]=u;return l.length>=s.length?o.slice(s.length):o}).join(`
`)}class ms{constructor(n){De(this,"options");De(this,"rules");De(this,"lexer");this.options=n||fi}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const s=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:ia(s,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const s=t[0],o=HT(s,t[3]||"");return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:o}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let s=t[2].trim();if(/#$/.test(s)){const o=ia(s,"#");(this.options.pedantic||!o||/ $/.test(o))&&(s=o.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){const s=t[0].replace(/^ *>[ \t]?/gm,""),o=this.lexer.state.top;this.lexer.state.top=!0;const u=this.lexer.blockTokens(s);return this.lexer.state.top=o,{type:"blockquote",raw:t[0],tokens:u,text:s}}}list(n){let t=this.rules.block.list.exec(n);if(t){let s=t[1].trim();const o=s.length>1,u={type:"list",raw:"",ordered:o,start:o?+s.slice(0,-1):"",loose:!1,items:[]};s=o?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=o?s:"[*+-]");const l=new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`);let p="",d="",E=!1;for(;n;){let y=!1;if(!(t=l.exec(n))||this.rules.block.hr.test(n))break;p=t[0],n=n.substring(p.length);let I=t[2].split(`
`,1)[0].replace(/^\t+/,he=>" ".repeat(3*he.length)),w=n.split(`
`,1)[0],O=0;this.options.pedantic?(O=2,d=I.trimStart()):(O=t[2].search(/[^ ]/),O=O>4?1:O,d=I.slice(O),O+=t[1].length);let R=!1;if(!I&&/^ *$/.test(w)&&(p+=w+`
`,n=n.substring(w.length+1),y=!0),!y){const he=new RegExp(`^ {0,${Math.min(3,O-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),je=new RegExp(`^ {0,${Math.min(3,O-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),be=new RegExp(`^ {0,${Math.min(3,O-1)}}(?:\`\`\`|~~~)`),Ce=new RegExp(`^ {0,${Math.min(3,O-1)}}#`);for(;n;){const Re=n.split(`
`,1)[0];if(w=Re,this.options.pedantic&&(w=w.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),be.test(w)||Ce.test(w)||he.test(w)||je.test(n))break;if(w.search(/[^ ]/)>=O||!w.trim())d+=`
`+w.slice(O);else{if(R||I.search(/[^ ]/)>=4||be.test(I)||Ce.test(I)||je.test(I))break;d+=`
`+w}!R&&!w.trim()&&(R=!0),p+=Re+`
`,n=n.substring(Re.length+1),I=w.slice(O)}}u.loose||(E?u.loose=!0:/\n *\n *$/.test(p)&&(E=!0));let L=null,X;this.options.gfm&&(L=/^\[[ xX]\] /.exec(d),L&&(X=L[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),u.items.push({type:"list_item",raw:p,task:!!L,checked:X,loose:!1,text:d,tokens:[]}),u.raw+=p}u.items[u.items.length-1].raw=p.trimEnd(),u.items[u.items.length-1].text=d.trimEnd(),u.raw=u.raw.trimEnd();for(let y=0;y<u.items.length;y++)if(this.lexer.state.top=!1,u.items[y].tokens=this.lexer.blockTokens(u.items[y].text,[]),!u.loose){const I=u.items[y].tokens.filter(O=>O.type==="space"),w=I.length>0&&I.some(O=>/\n.*\n/.test(O.raw));u.loose=w}if(u.loose)for(let y=0;y<u.items.length;y++)u.items[y].loose=!0;return u}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const s=t[1].toLowerCase().replace(/\s+/g," "),o=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",u=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:o,title:u}}}table(n){const t=this.rules.block.table.exec(n);if(t){if(!/[:|]/.test(t[2]))return;const s={type:"table",raw:t[0],header:wc(t[1]).map(o=>({text:o,tokens:[]})),align:t[2].replace(/^\||\| *$/g,"").split("|"),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(s.header.length===s.align.length){let o=s.align.length,u,l,p,d;for(u=0;u<o;u++){const E=s.align[u];E&&(/^ *-+: *$/.test(E)?s.align[u]="right":/^ *:-+: *$/.test(E)?s.align[u]="center":/^ *:-+ *$/.test(E)?s.align[u]="left":s.align[u]=null)}for(o=s.rows.length,u=0;u<o;u++)s.rows[u]=wc(s.rows[u],s.header.length).map(E=>({text:E,tokens:[]}));for(o=s.header.length,l=0;l<o;l++)s.header[l].tokens=this.lexer.inline(s.header[l].text);for(o=s.rows.length,l=0;l<o;l++)for(d=s.rows[l],p=0;p<d.length;p++)d[p].tokens=this.lexer.inline(d[p].text);return s}}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:Sn(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const s=t[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const l=ia(s.slice(0,-1),"\\");if((s.length-l.length)%2===0)return}else{const l=JT(t[2],"()");if(l>-1){const d=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,d).trim(),t[3]=""}}let o=t[2],u="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);l&&(o=l[1],u=l[3])}else u=t[3]?t[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(s)?o=o.slice(1):o=o.slice(1,-1)),Fc(t,{href:o&&o.replace(this.rules.inline._escapes,"$1"),title:u&&u.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(n,t){let s;if((s=this.rules.inline.reflink.exec(n))||(s=this.rules.inline.nolink.exec(n))){let o=(s[2]||s[1]).replace(/\s+/g," ");if(o=t[o.toLowerCase()],!o){const u=s[0].charAt(0);return{type:"text",raw:u,text:u}}return Fc(s,o,s[0],this.lexer)}}emStrong(n,t,s=""){let o=this.rules.inline.emStrong.lDelim.exec(n);if(!o||o[3]&&s.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!s||this.rules.inline.punctuation.exec(s)){const l=[...o[0]].length-1;let p,d,E=l,y=0;const I=o[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(I.lastIndex=0,t=t.slice(-1*n.length+o[0].length-1);(o=I.exec(t))!=null;){if(p=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!p)continue;if(d=[...p].length,o[3]||o[4]){E+=d;continue}else if((o[5]||o[6])&&l%3&&!((l+d)%3)){y+=d;continue}if(E-=d,E>0)continue;d=Math.min(d,d+E+y);const w=[...n].slice(0,l+o.index+d+1).join("");if(Math.min(l,d)%2){const R=w.slice(1,-1);return{type:"em",raw:w,text:R,tokens:this.lexer.inlineTokens(R)}}const O=w.slice(2,-2);return{type:"strong",raw:w,text:O,tokens:this.lexer.inlineTokens(O)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let s=t[2].replace(/\n/g," ");const o=/[^ ]/.test(s),u=/^ /.test(s)&&/ $/.test(s);return o&&u&&(s=s.substring(1,s.length-1)),s=Sn(s,!0),{type:"codespan",raw:t[0],text:s}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let s,o;return t[2]==="@"?(s=Sn(t[1]),o="mailto:"+s):(s=Sn(t[1]),o=s),{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}url(n){let t;if(t=this.rules.inline.url.exec(n)){let s,o;if(t[2]==="@")s=Sn(t[0]),o="mailto:"+s;else{let u;do u=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(u!==t[0]);s=Sn(t[0]),t[1]==="www."?o="http://"+t[0]:o=t[0]}return{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let s;return this.lexer.state.inRawBlock?s=t[0]:s=Sn(t[0]),{type:"text",raw:t[0],text:s}}}}const W={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:hs,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};W._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;W._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;W.def=ye(W.def).replace("label",W._label).replace("title",W._title).getRegex();W.bullet=/(?:[*+-]|\d{1,9}[.)])/;W.listItemStart=ye(/^( *)(bull) */).replace("bull",W.bullet).getRegex();W.list=ye(W.list).replace(/bull/g,W.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+W.def.source+")").getRegex();W._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";W._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;W.html=ye(W.html,"i").replace("comment",W._comment).replace("tag",W._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();W.lheading=ye(W.lheading).replace(/bull/g,W.bullet).getRegex();W.paragraph=ye(W._paragraph).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.blockquote=ye(W.blockquote).replace("paragraph",W.paragraph).getRegex();W.normal={...W};W.gfm={...W.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};W.gfm.table=ye(W.gfm.table).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.gfm.paragraph=ye(W._paragraph).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",W.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.pedantic={...W.normal,html:ye(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",W._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:hs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ye(W.normal._paragraph).replace("hr",W.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",W.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const $={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:hs,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:hs,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};$._punctuation="\\p{P}$+<=>`^|~";$.punctuation=ye($.punctuation,"u").replace(/punctuation/g,$._punctuation).getRegex();$.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;$.anyPunctuation=/\\[punct]/g;$._escapes=/\\([punct])/g;$._comment=ye(W._comment).replace("(?:-->|$)","-->").getRegex();$.emStrong.lDelim=ye($.emStrong.lDelim,"u").replace(/punct/g,$._punctuation).getRegex();$.emStrong.rDelimAst=ye($.emStrong.rDelimAst,"gu").replace(/punct/g,$._punctuation).getRegex();$.emStrong.rDelimUnd=ye($.emStrong.rDelimUnd,"gu").replace(/punct/g,$._punctuation).getRegex();$.anyPunctuation=ye($.anyPunctuation,"gu").replace(/punct/g,$._punctuation).getRegex();$._escapes=ye($._escapes,"gu").replace(/punct/g,$._punctuation).getRegex();$._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;$._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;$.autolink=ye($.autolink).replace("scheme",$._scheme).replace("email",$._email).getRegex();$._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;$.tag=ye($.tag).replace("comment",$._comment).replace("attribute",$._attribute).getRegex();$._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;$._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;$._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;$.link=ye($.link).replace("label",$._label).replace("href",$._href).replace("title",$._title).getRegex();$.reflink=ye($.reflink).replace("label",$._label).replace("ref",W._label).getRegex();$.nolink=ye($.nolink).replace("ref",W._label).getRegex();$.reflinkSearch=ye($.reflinkSearch,"g").replace("reflink",$.reflink).replace("nolink",$.nolink).getRegex();$.normal={...$};$.pedantic={...$.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ye(/^!?\[(label)\]\((.*?)\)/).replace("label",$._label).getRegex(),reflink:ye(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",$._label).getRegex()};$.gfm={...$.normal,escape:ye($.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};$.gfm.url=ye($.gfm.url,"i").replace("email",$.gfm._extended_email).getRegex();$.breaks={...$.gfm,br:ye($.br).replace("{2,}","*").getRegex(),text:ye($.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class Jn{constructor(n){De(this,"tokens");De(this,"options");De(this,"state");De(this,"tokenizer");De(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||fi,this.options.tokenizer=this.options.tokenizer||new ms,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:W.normal,inline:$.normal};this.options.pedantic?(t.block=W.pedantic,t.inline=$.pedantic):this.options.gfm&&(t.block=W.gfm,this.options.breaks?t.inline=$.breaks:t.inline=$.gfm),this.tokenizer.rules=t}static get rules(){return{block:W,inline:$}}static lex(n,t){return new Jn(t).lex(n)}static lexInline(n,t){return new Jn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(n,t=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(p,d,E)=>d+"    ".repeat(E.length));let s,o,u,l;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(p=>(s=p.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(n)){n=n.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(s=this.tokenizer.fences(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(u=n,this.options.extensions&&this.options.extensions.startBlock){let p=1/0;const d=n.slice(1);let E;this.options.extensions.startBlock.forEach(y=>{E=y.call({lexer:this},d),typeof E=="number"&&E>=0&&(p=Math.min(p,E))}),p<1/0&&p>=0&&(u=n.substring(0,p+1))}if(this.state.top&&(s=this.tokenizer.paragraph(u))){o=t[t.length-1],l&&o.type==="paragraph"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s),l=u.length!==n.length,n=n.substring(s.raw.length);continue}if(s=this.tokenizer.text(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(n){const p="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let s,o,u,l=n,p,d,E;if(this.tokens.links){const y=Object.keys(this.tokens.links);if(y.length>0)for(;(p=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)y.includes(p[0].slice(p[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(p=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(p=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,p.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(d||(E=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(y=>(s=y.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.escape(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.link(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(n,l,E)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(n)){n=n.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(n))){n=n.substring(s.raw.length),t.push(s);continue}if(u=n,this.options.extensions&&this.options.extensions.startInline){let y=1/0;const I=n.slice(1);let w;this.options.extensions.startInline.forEach(O=>{w=O.call({lexer:this},I),typeof w=="number"&&w>=0&&(y=Math.min(y,w))}),y<1/0&&y>=0&&(u=n.substring(0,y+1))}if(s=this.tokenizer.inlineText(u)){n=n.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(E=s.raw.slice(-1)),d=!0,o=t[t.length-1],o&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(n){const y="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return t}}class gs{constructor(n){De(this,"options");this.options=n||fi}code(n,t,s){var u;const o=(u=(t||"").match(/^\S*/))==null?void 0:u[0];return n=n.replace(/\n$/,"")+`
`,o?'<pre><code class="language-'+Sn(o)+'">'+(s?n:Sn(n,!0))+`</code></pre>
`:"<pre><code>"+(s?n:Sn(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,t){return n}heading(n,t,s){return`<h${t}>${n}</h${t}>
`}hr(){return`<hr>
`}list(n,t,s){const o=t?"ol":"ul",u=t&&s!==1?' start="'+s+'"':"";return"<"+o+u+`>
`+n+"</"+o+`>
`}listitem(n,t,s){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(n){return`<p>${n}</p>
`}table(n,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+t+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,t){const s=t.header?"th":"td";return(t.align?`<${s} align="${t.align}">`:`<${s}>`)+n+`</${s}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,t,s){const o=Sc(n);if(o===null)return s;n=o;let u='<a href="'+n+'"';return t&&(u+=' title="'+t+'"'),u+=">"+s+"</a>",u}image(n,t,s){const o=Sc(n);if(o===null)return s;n=o;let u=`<img src="${n}" alt="${s}"`;return t&&(u+=` title="${t}"`),u+=">",u}text(n){return n}}class Aa{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,s){return""+s}image(n,t,s){return""+s}br(){return""}}class ft{constructor(n){De(this,"options");De(this,"renderer");De(this,"textRenderer");this.options=n||fi,this.options.renderer=this.options.renderer||new gs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Aa}static parse(n,t){return new ft(t).parse(n)}static parseInline(n,t){return new ft(t).parseInline(n)}parse(n,t=!0){let s="";for(let o=0;o<n.length;o++){const u=n[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]){const l=u,p=this.options.extensions.renderers[l.type].call({parser:this},l);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){s+=p||"";continue}}switch(u.type){case"space":continue;case"hr":{s+=this.renderer.hr();continue}case"heading":{const l=u;s+=this.renderer.heading(this.parseInline(l.tokens),l.depth,zT(this.parseInline(l.tokens,this.textRenderer)));continue}case"code":{const l=u;s+=this.renderer.code(l.text,l.lang,!!l.escaped);continue}case"table":{const l=u;let p="",d="";for(let y=0;y<l.header.length;y++)d+=this.renderer.tablecell(this.parseInline(l.header[y].tokens),{header:!0,align:l.align[y]});p+=this.renderer.tablerow(d);let E="";for(let y=0;y<l.rows.length;y++){const I=l.rows[y];d="";for(let w=0;w<I.length;w++)d+=this.renderer.tablecell(this.parseInline(I[w].tokens),{header:!1,align:l.align[w]});E+=this.renderer.tablerow(d)}s+=this.renderer.table(p,E);continue}case"blockquote":{const l=u,p=this.parse(l.tokens);s+=this.renderer.blockquote(p);continue}case"list":{const l=u,p=l.ordered,d=l.start,E=l.loose;let y="";for(let I=0;I<l.items.length;I++){const w=l.items[I],O=w.checked,R=w.task;let L="";if(w.task){const X=this.renderer.checkbox(!!O);E?w.tokens.length>0&&w.tokens[0].type==="paragraph"?(w.tokens[0].text=X+" "+w.tokens[0].text,w.tokens[0].tokens&&w.tokens[0].tokens.length>0&&w.tokens[0].tokens[0].type==="text"&&(w.tokens[0].tokens[0].text=X+" "+w.tokens[0].tokens[0].text)):w.tokens.unshift({type:"text",text:X+" "}):L+=X+" "}L+=this.parse(w.tokens,E),y+=this.renderer.listitem(L,R,!!O)}s+=this.renderer.list(y,p,d);continue}case"html":{const l=u;s+=this.renderer.html(l.text,l.block);continue}case"paragraph":{const l=u;s+=this.renderer.paragraph(this.parseInline(l.tokens));continue}case"text":{let l=u,p=l.tokens?this.parseInline(l.tokens):l.text;for(;o+1<n.length&&n[o+1].type==="text";)l=n[++o],p+=`
`+(l.tokens?this.parseInline(l.tokens):l.text);s+=t?this.renderer.paragraph(p):p;continue}default:{const l='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}parseInline(n,t){t=t||this.renderer;let s="";for(let o=0;o<n.length;o++){const u=n[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]){const l=this.options.extensions.renderers[u.type].call({parser:this},u);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(u.type)){s+=l||"";continue}}switch(u.type){case"escape":{const l=u;s+=t.text(l.text);break}case"html":{const l=u;s+=t.html(l.text);break}case"link":{const l=u;s+=t.link(l.href,l.title,this.parseInline(l.tokens,t));break}case"image":{const l=u;s+=t.image(l.href,l.title,l.text);break}case"strong":{const l=u;s+=t.strong(this.parseInline(l.tokens,t));break}case"em":{const l=u;s+=t.em(this.parseInline(l.tokens,t));break}case"codespan":{const l=u;s+=t.codespan(l.text);break}case"br":{s+=t.br();break}case"del":{const l=u;s+=t.del(this.parseInline(l.tokens,t));break}case"text":{const l=u;s+=t.text(l.text);break}default:{const l='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}}class or{constructor(n){De(this,"options");this.options=n||fi}preprocess(n){return n}postprocess(n){return n}}De(or,"passThroughHooks",new Set(["preprocess","postprocess"]));var cr,fa,Is,nf;class XT{constructor(...n){ea(this,cr);ea(this,Is);De(this,"defaults",va());De(this,"options",this.setOptions);De(this,"parse",ss(this,cr,fa).call(this,Jn.lex,ft.parse));De(this,"parseInline",ss(this,cr,fa).call(this,Jn.lexInline,ft.parseInline));De(this,"Parser",ft);De(this,"parser",ft.parse);De(this,"Renderer",gs);De(this,"TextRenderer",Aa);De(this,"Lexer",Jn);De(this,"lexer",Jn.lex);De(this,"Tokenizer",ms);De(this,"Hooks",or);this.use(...n)}walkTokens(n,t){var o,u;let s=[];for(const l of n)switch(s=s.concat(t.call(this,l)),l.type){case"table":{const p=l;for(const d of p.header)s=s.concat(this.walkTokens(d.tokens,t));for(const d of p.rows)for(const E of d)s=s.concat(this.walkTokens(E.tokens,t));break}case"list":{const p=l;s=s.concat(this.walkTokens(p.items,t));break}default:{const p=l;(u=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&u[p.type]?this.defaults.extensions.childTokens[p.type].forEach(d=>{s=s.concat(this.walkTokens(p[d],t))}):p.tokens&&(s=s.concat(this.walkTokens(p.tokens,t)))}}return s}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(s=>{const o={...s};if(o.async=this.defaults.async||o.async||!1,s.extensions&&(s.extensions.forEach(u=>{if(!u.name)throw new Error("extension name required");if("renderer"in u){const l=t.renderers[u.name];l?t.renderers[u.name]=function(...p){let d=u.renderer.apply(this,p);return d===!1&&(d=l.apply(this,p)),d}:t.renderers[u.name]=u.renderer}if("tokenizer"in u){if(!u.level||u.level!=="block"&&u.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=t[u.level];l?l.unshift(u.tokenizer):t[u.level]=[u.tokenizer],u.start&&(u.level==="block"?t.startBlock?t.startBlock.push(u.start):t.startBlock=[u.start]:u.level==="inline"&&(t.startInline?t.startInline.push(u.start):t.startInline=[u.start]))}"childTokens"in u&&u.childTokens&&(t.childTokens[u.name]=u.childTokens)}),o.extensions=t),s.renderer){const u=this.defaults.renderer||new gs(this.defaults);for(const l in s.renderer){const p=s.renderer[l],d=l,E=u[d];u[d]=(...y)=>{let I=p.apply(u,y);return I===!1&&(I=E.apply(u,y)),I||""}}o.renderer=u}if(s.tokenizer){const u=this.defaults.tokenizer||new ms(this.defaults);for(const l in s.tokenizer){const p=s.tokenizer[l],d=l,E=u[d];u[d]=(...y)=>{let I=p.apply(u,y);return I===!1&&(I=E.apply(u,y)),I}}o.tokenizer=u}if(s.hooks){const u=this.defaults.hooks||new or;for(const l in s.hooks){const p=s.hooks[l],d=l,E=u[d];or.passThroughHooks.has(l)?u[d]=y=>{if(this.defaults.async)return Promise.resolve(p.call(u,y)).then(w=>E.call(u,w));const I=p.call(u,y);return E.call(u,I)}:u[d]=(...y)=>{let I=p.apply(u,y);return I===!1&&(I=E.apply(u,y)),I}}o.hooks=u}if(s.walkTokens){const u=this.defaults.walkTokens,l=s.walkTokens;o.walkTokens=function(p){let d=[];return d.push(l.call(this,p)),u&&(d=d.concat(u.call(this,p))),d}}this.defaults={...this.defaults,...o}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}}cr=new WeakSet,fa=function(n,t){return(s,o)=>{const u={...o},l={...this.defaults,...u};this.defaults.async===!0&&u.async===!1&&(l.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),l.async=!0);const p=ss(this,Is,nf).call(this,!!l.silent,!!l.async);if(typeof s>"u"||s===null)return p(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return p(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(l.hooks&&(l.hooks.options=l),l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(s):s).then(d=>n(d,l)).then(d=>l.walkTokens?Promise.all(this.walkTokens(d,l.walkTokens)).then(()=>d):d).then(d=>t(d,l)).then(d=>l.hooks?l.hooks.postprocess(d):d).catch(p);try{l.hooks&&(s=l.hooks.preprocess(s));const d=n(s,l);l.walkTokens&&this.walkTokens(d,l.walkTokens);let E=t(d,l);return l.hooks&&(E=l.hooks.postprocess(E)),E}catch(d){return p(d)}}},Is=new WeakSet,nf=function(n,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const o="<p>An error occurred:</p><pre>"+Sn(s.message+"",!0)+"</pre>";return t?Promise.resolve(o):o}if(t)return Promise.reject(s);throw s}};const ui=new XT;function Ie(i,n){return ui.parse(i,n)}Ie.options=Ie.setOptions=function(i){return ui.setOptions(i),Ie.defaults=ui.defaults,Kc(Ie.defaults),Ie};Ie.getDefaults=va;Ie.defaults=fi;Ie.use=function(...i){return ui.use(...i),Ie.defaults=ui.defaults,Kc(Ie.defaults),Ie};Ie.walkTokens=function(i,n){return ui.walkTokens(i,n)};Ie.parseInline=ui.parseInline;Ie.Parser=ft;Ie.parser=ft.parse;Ie.Renderer=gs;Ie.TextRenderer=Aa;Ie.Lexer=Jn;Ie.lexer=Jn.lex;Ie.Tokenizer=ms;Ie.Hooks=or;Ie.parse=Ie;Ie.options;Ie.setOptions;Ie.use;Ie.walkTokens;Ie.parseInline;ft.parse;Jn.lex;const KT=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,ZT=Object.hasOwnProperty;class tf{constructor(){this.occurrences,this.reset()}slug(n,t){const s=this;let o=eD(n,t===!0);const u=o;for(;ZT.call(s.occurrences,o);)s.occurrences[u]++,o=u+"-"+s.occurrences[u];return s.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function eD(i,n){return typeof i!="string"?"":(n||(i=i.toLowerCase()),i.replace(KT,"").replace(/ /g,"-"))}function nD(i){return new Jn().lex(i)}const tD=()=>({heading:By,blockquote:Uy,list:Jy,list_item:Ky,br:nT,code:rT,codespan:aT,table:cT,html:dT,paragraph:gT,link:TT,text:_T,def:bT,del:FT,em:kT,hr:RT,strong:PT,image:MT,space:Ac,escape:Ac}),iD=()=>({baseUrl:"/",slugger:new tf});function rD(){const i=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||i(n)},xy(()=>{console.warn=i})}function sD(i){let n,t;return n=new vs({props:{tokens:i[0],renderers:i[1],options:i[2]}}),{c(){Wt(n.$$.fragment)},l(s){ci(n.$$.fragment,s)},m(s,o){Qt(n,s,o),t=!0},p(s,[o]){const u={};o&1&&(u.tokens=s[0]),o&2&&(u.renderers=s[1]),o&4&&(u.options=s[2]),n.$set(u)},i(s){t||(te(n.$$.fragment,s),t=!0)},o(s){ue(n.$$.fragment,s),t=!1},d(s){zt(n,s)}}}function oD(i,n,t){rD();let{source:s}=n,{options:o={}}=n,{renderers:u={}}=n,l,p,d;return i.$$set=E=>{"source"in E&&t(3,s=E.source),"options"in E&&t(4,o=E.options),"renderers"in E&&t(5,u=E.renderers)},i.$$.update=()=>{i.$$.dirty&56&&(t(0,l=nD(s)),t(1,p={...tD(),...u}),t(2,d={...iD(),...o}))},[l,p,d,s,o,u]}class O_ extends Be{constructor(n){super(),Pe(this,n,oD,sD,Ne,{source:3,options:4,renderers:5})}}const fr={joinUrlPaths:la,isRelative:ca,generatePathSegment:Hc};var tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function aD(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function os(){return{convert:i=>i==null||i===""?null:String(i),asString:i=>String(i),type:i=>i.string().optional()}}function Nc(i){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(i(n).optional()).optional()}}function as(i){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(i(n)).optional()}}function Cc(i){return{convert:n=>n==null||!i.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(i).optional()}}function bn(i,n){const t=s=>n.convert(s[i]);return{name:uD(i),key:i,asEnv:s=>({[i]:n.asString(s)}),zod:{type:n.type},get:t,getOrDefault:(s,o)=>t(s)??o}}function uD(i){return i.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}var ba={APP_LOGO:bn("APP_LOGO",os()),APP_TITLE:bn("APP_TITLE",os()),APP_FAVICON:bn("APP_FAVICON",os()),SITE_ROOT:bn("SITE_ROOT",os()),SITE_META:bn("SITE_META",Nc(i=>i.string())),CUSTOM_STYLES:bn("CUSTOM_STYLES",as(i=>i.string())),FIELDS_SORTING:bn("FIELDS_SORTING",Cc(["default","alphabetical"])),ARGUMENTS_SORTING:bn("ARGUMENTS_SORTING",Cc(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:bn("QUERY_GENERATION_FACTORIES",Nc(i=>i.union([i.string(),i.boolean(),i.number(),i.null(),i.record(i.unknown())]))),PAGES:bn("PAGES",as(i=>{const n=i.lazy(()=>i.object({title:i.string().min(1),content:i.union([i.array(n),i.string().min(1)])}));return n})),EXTERNAL_LINKS:bn("EXTERNAL_LINKS",as(i=>i.object({label:i.string().min(1),href:i.string().min(1),position:i.union([i.literal("header"),i.literal("navigation")]).optional(),kind:i.string().min(1).optional(),group:i.string().min(1).optional()}))),DIRECTIVES:bn("DIRECTIVES",as(i=>i.object({name:i.string().min(1),args:i.array(i.string())})))};function lD(){return{convert:i=>{if(i===null||i===void 0)return null;switch(typeof i){case"boolean":return i;case"string":const n=i.toLowerCase().trim();return n==="true"||n==="t"||n==="1";case"number":return i!==0;default:return null}},asString:i=>String(i),type:i=>i.boolean().optional()}}bn("MAGIDOC_GENERATE",lD());var Es={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Es.exports;(function(i,n){(function(){var t,s="4.17.21",o=200,u="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",p="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",E=500,y="__lodash_placeholder__",I=1,w=2,O=4,R=1,L=2,X=1,he=2,je=4,be=8,Ce=16,Re=32,rn=64,Ke=128,mt=256,k=512,Z=30,sn="...",xt=800,Ht=16,hr=1,di=2,mr=3,ot=1/0,Mn=9007199254740991,hi=17976931348623157e292,Xt=0/0,wn=4294967295,S=wn-1,V=wn>>>1,P=[["ary",Ke],["bind",X],["bindKey",he],["curry",be],["curryRight",Ce],["flip",k],["partial",Re],["partialRight",rn],["rearg",mt]],U="[object Arguments]",me="[object Array]",$e="[object AsyncFunction]",ge="[object Boolean]",Fn="[object Date]",Li="[object DOMException]",Rt="[object Error]",Ze="[object Function]",xa="[object GeneratorFunction]",Vn="[object Map]",Bi="[object Number]",Wf="[object Null]",gt="[object Object]",Ra="[object Promise]",Qf="[object Proxy]",Pi="[object RegExp]",jn="[object Set]",$i="[object String]",gr="[object Symbol]",zf="[object Undefined]",Ui="[object WeakMap]",Yf="[object WeakSet]",Mi="[object ArrayBuffer]",mi="[object DataView]",Os="[object Float32Array]",xs="[object Float64Array]",Rs="[object Int8Array]",Ls="[object Int16Array]",Bs="[object Int32Array]",Ps="[object Uint8Array]",$s="[object Uint8ClampedArray]",Us="[object Uint16Array]",Ms="[object Uint32Array]",Jf=/\b__p \+= '';/g,Hf=/\b(__p \+=) '' \+/g,Xf=/(__e\(.*?\)|\b__t\)) \+\n'';/g,La=/&(?:amp|lt|gt|quot|#39);/g,Ba=/[&<>"']/g,Kf=RegExp(La.source),Zf=RegExp(Ba.source),ep=/<%-([\s\S]+?)%>/g,np=/<%([\s\S]+?)%>/g,Pa=/<%=([\s\S]+?)%>/g,tp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ip=/^\w*$/,rp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vs=/[\\^$.*+?()[\]{}|]/g,sp=RegExp(Vs.source),js=/^\s+/,op=/\s/,ap=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,up=/\{\n\/\* \[wrapped with (.+)\] \*/,lp=/,? & /,cp=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,fp=/[()=,{}\[\]\/\s]/,pp=/\\(\\)?/g,dp=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,$a=/\w*$/,hp=/^[-+]0x[0-9a-f]+$/i,mp=/^0b[01]+$/i,gp=/^\[object .+?Constructor\]$/,Ep=/^0o[0-7]+$/i,yp=/^(?:0|[1-9]\d*)$/,Tp=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Er=/($^)/,Dp=/['\n\r\u2028\u2029\\]/g,yr="\\ud800-\\udfff",Ip="\\u0300-\\u036f",_p="\\ufe20-\\ufe2f",vp="\\u20d0-\\u20ff",Ua=Ip+_p+vp,Ma="\\u2700-\\u27bf",Va="a-z\\xdf-\\xf6\\xf8-\\xff",Ap="\\xac\\xb1\\xd7\\xf7",bp="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Sp="\\u2000-\\u206f",wp=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ja="A-Z\\xc0-\\xd6\\xd8-\\xde",Ga="\\ufe0e\\ufe0f",qa=Ap+bp+Sp+wp,Gs="['’]",Fp="["+yr+"]",Wa="["+qa+"]",Tr="["+Ua+"]",Qa="\\d+",Np="["+Ma+"]",za="["+Va+"]",Ya="[^"+yr+qa+Qa+Ma+Va+ja+"]",qs="\\ud83c[\\udffb-\\udfff]",Cp="(?:"+Tr+"|"+qs+")",Ja="[^"+yr+"]",Ws="(?:\\ud83c[\\udde6-\\uddff]){2}",Qs="[\\ud800-\\udbff][\\udc00-\\udfff]",gi="["+ja+"]",Ha="\\u200d",Xa="(?:"+za+"|"+Ya+")",kp="(?:"+gi+"|"+Ya+")",Ka="(?:"+Gs+"(?:d|ll|m|re|s|t|ve))?",Za="(?:"+Gs+"(?:D|LL|M|RE|S|T|VE))?",eu=Cp+"?",nu="["+Ga+"]?",Op="(?:"+Ha+"(?:"+[Ja,Ws,Qs].join("|")+")"+nu+eu+")*",xp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Rp="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",tu=nu+eu+Op,Lp="(?:"+[Np,Ws,Qs].join("|")+")"+tu,Bp="(?:"+[Ja+Tr+"?",Tr,Ws,Qs,Fp].join("|")+")",Pp=RegExp(Gs,"g"),$p=RegExp(Tr,"g"),zs=RegExp(qs+"(?="+qs+")|"+Bp+tu,"g"),Up=RegExp([gi+"?"+za+"+"+Ka+"(?="+[Wa,gi,"$"].join("|")+")",kp+"+"+Za+"(?="+[Wa,gi+Xa,"$"].join("|")+")",gi+"?"+Xa+"+"+Ka,gi+"+"+Za,Rp,xp,Qa,Lp].join("|"),"g"),Mp=RegExp("["+Ha+yr+Ua+Ga+"]"),Vp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,jp=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Gp=-1,we={};we[Os]=we[xs]=we[Rs]=we[Ls]=we[Bs]=we[Ps]=we[$s]=we[Us]=we[Ms]=!0,we[U]=we[me]=we[Mi]=we[ge]=we[mi]=we[Fn]=we[Rt]=we[Ze]=we[Vn]=we[Bi]=we[gt]=we[Pi]=we[jn]=we[$i]=we[Ui]=!1;var Se={};Se[U]=Se[me]=Se[Mi]=Se[mi]=Se[ge]=Se[Fn]=Se[Os]=Se[xs]=Se[Rs]=Se[Ls]=Se[Bs]=Se[Vn]=Se[Bi]=Se[gt]=Se[Pi]=Se[jn]=Se[$i]=Se[gr]=Se[Ps]=Se[$s]=Se[Us]=Se[Ms]=!0,Se[Rt]=Se[Ze]=Se[Ui]=!1;var qp={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Wp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qp={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},zp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Yp=parseFloat,Jp=parseInt,iu=typeof tr=="object"&&tr&&tr.Object===Object&&tr,Hp=typeof self=="object"&&self&&self.Object===Object&&self,Je=iu||Hp||Function("return this")(),Ys=n&&!n.nodeType&&n,Kt=Ys&&!0&&i&&!i.nodeType&&i,ru=Kt&&Kt.exports===Ys,Js=ru&&iu.process,Nn=function(){try{var D=Kt&&Kt.require&&Kt.require("util").types;return D||Js&&Js.binding&&Js.binding("util")}catch{}}(),su=Nn&&Nn.isArrayBuffer,ou=Nn&&Nn.isDate,au=Nn&&Nn.isMap,uu=Nn&&Nn.isRegExp,lu=Nn&&Nn.isSet,cu=Nn&&Nn.isTypedArray;function Tn(D,b,A){switch(A.length){case 0:return D.call(b);case 1:return D.call(b,A[0]);case 2:return D.call(b,A[0],A[1]);case 3:return D.call(b,A[0],A[1],A[2])}return D.apply(b,A)}function Xp(D,b,A,M){for(var ee=-1,de=D==null?0:D.length;++ee<de;){var We=D[ee];b(M,We,A(We),D)}return M}function Cn(D,b){for(var A=-1,M=D==null?0:D.length;++A<M&&b(D[A],A,D)!==!1;);return D}function Kp(D,b){for(var A=D==null?0:D.length;A--&&b(D[A],A,D)!==!1;);return D}function fu(D,b){for(var A=-1,M=D==null?0:D.length;++A<M;)if(!b(D[A],A,D))return!1;return!0}function Lt(D,b){for(var A=-1,M=D==null?0:D.length,ee=0,de=[];++A<M;){var We=D[A];b(We,A,D)&&(de[ee++]=We)}return de}function Dr(D,b){var A=D==null?0:D.length;return!!A&&Ei(D,b,0)>-1}function Hs(D,b,A){for(var M=-1,ee=D==null?0:D.length;++M<ee;)if(A(b,D[M]))return!0;return!1}function Fe(D,b){for(var A=-1,M=D==null?0:D.length,ee=Array(M);++A<M;)ee[A]=b(D[A],A,D);return ee}function Bt(D,b){for(var A=-1,M=b.length,ee=D.length;++A<M;)D[ee+A]=b[A];return D}function Xs(D,b,A,M){var ee=-1,de=D==null?0:D.length;for(M&&de&&(A=D[++ee]);++ee<de;)A=b(A,D[ee],ee,D);return A}function Zp(D,b,A,M){var ee=D==null?0:D.length;for(M&&ee&&(A=D[--ee]);ee--;)A=b(A,D[ee],ee,D);return A}function Ks(D,b){for(var A=-1,M=D==null?0:D.length;++A<M;)if(b(D[A],A,D))return!0;return!1}var ed=Zs("length");function nd(D){return D.split("")}function td(D){return D.match(cp)||[]}function pu(D,b,A){var M;return A(D,function(ee,de,We){if(b(ee,de,We))return M=de,!1}),M}function Ir(D,b,A,M){for(var ee=D.length,de=A+(M?1:-1);M?de--:++de<ee;)if(b(D[de],de,D))return de;return-1}function Ei(D,b,A){return b===b?hd(D,b,A):Ir(D,du,A)}function id(D,b,A,M){for(var ee=A-1,de=D.length;++ee<de;)if(M(D[ee],b))return ee;return-1}function du(D){return D!==D}function hu(D,b){var A=D==null?0:D.length;return A?no(D,b)/A:Xt}function Zs(D){return function(b){return b==null?t:b[D]}}function eo(D){return function(b){return D==null?t:D[b]}}function mu(D,b,A,M,ee){return ee(D,function(de,We,ve){A=M?(M=!1,de):b(A,de,We,ve)}),A}function rd(D,b){var A=D.length;for(D.sort(b);A--;)D[A]=D[A].value;return D}function no(D,b){for(var A,M=-1,ee=D.length;++M<ee;){var de=b(D[M]);de!==t&&(A=A===t?de:A+de)}return A}function to(D,b){for(var A=-1,M=Array(D);++A<D;)M[A]=b(A);return M}function sd(D,b){return Fe(b,function(A){return[A,D[A]]})}function gu(D){return D&&D.slice(0,Du(D)+1).replace(js,"")}function Dn(D){return function(b){return D(b)}}function io(D,b){return Fe(b,function(A){return D[A]})}function Vi(D,b){return D.has(b)}function Eu(D,b){for(var A=-1,M=D.length;++A<M&&Ei(b,D[A],0)>-1;);return A}function yu(D,b){for(var A=D.length;A--&&Ei(b,D[A],0)>-1;);return A}function od(D,b){for(var A=D.length,M=0;A--;)D[A]===b&&++M;return M}var ad=eo(qp),ud=eo(Wp);function ld(D){return"\\"+zp[D]}function cd(D,b){return D==null?t:D[b]}function yi(D){return Mp.test(D)}function fd(D){return Vp.test(D)}function pd(D){for(var b,A=[];!(b=D.next()).done;)A.push(b.value);return A}function ro(D){var b=-1,A=Array(D.size);return D.forEach(function(M,ee){A[++b]=[ee,M]}),A}function Tu(D,b){return function(A){return D(b(A))}}function Pt(D,b){for(var A=-1,M=D.length,ee=0,de=[];++A<M;){var We=D[A];(We===b||We===y)&&(D[A]=y,de[ee++]=A)}return de}function _r(D){var b=-1,A=Array(D.size);return D.forEach(function(M){A[++b]=M}),A}function dd(D){var b=-1,A=Array(D.size);return D.forEach(function(M){A[++b]=[M,M]}),A}function hd(D,b,A){for(var M=A-1,ee=D.length;++M<ee;)if(D[M]===b)return M;return-1}function md(D,b,A){for(var M=A+1;M--;)if(D[M]===b)return M;return M}function Ti(D){return yi(D)?Ed(D):ed(D)}function Gn(D){return yi(D)?yd(D):nd(D)}function Du(D){for(var b=D.length;b--&&op.test(D.charAt(b)););return b}var gd=eo(Qp);function Ed(D){for(var b=zs.lastIndex=0;zs.test(D);)++b;return b}function yd(D){return D.match(zs)||[]}function Td(D){return D.match(Up)||[]}var Dd=function D(b){b=b==null?Je:Di.defaults(Je.Object(),b,Di.pick(Je,jp));var A=b.Array,M=b.Date,ee=b.Error,de=b.Function,We=b.Math,ve=b.Object,so=b.RegExp,Id=b.String,kn=b.TypeError,vr=A.prototype,_d=de.prototype,Ii=ve.prototype,Ar=b["__core-js_shared__"],br=_d.toString,Te=Ii.hasOwnProperty,vd=0,Iu=function(){var e=/[^.]+$/.exec(Ar&&Ar.keys&&Ar.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Sr=Ii.toString,Ad=br.call(ve),bd=Je._,Sd=so("^"+br.call(Te).replace(Vs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),wr=ru?b.Buffer:t,$t=b.Symbol,Fr=b.Uint8Array,_u=wr?wr.allocUnsafe:t,Nr=Tu(ve.getPrototypeOf,ve),vu=ve.create,Au=Ii.propertyIsEnumerable,Cr=vr.splice,bu=$t?$t.isConcatSpreadable:t,ji=$t?$t.iterator:t,Zt=$t?$t.toStringTag:t,kr=function(){try{var e=ri(ve,"defineProperty");return e({},"",{}),e}catch{}}(),wd=b.clearTimeout!==Je.clearTimeout&&b.clearTimeout,Fd=M&&M.now!==Je.Date.now&&M.now,Nd=b.setTimeout!==Je.setTimeout&&b.setTimeout,Or=We.ceil,xr=We.floor,oo=ve.getOwnPropertySymbols,Cd=wr?wr.isBuffer:t,Su=b.isFinite,kd=vr.join,Od=Tu(ve.keys,ve),Qe=We.max,en=We.min,xd=M.now,Rd=b.parseInt,wu=We.random,Ld=vr.reverse,ao=ri(b,"DataView"),Gi=ri(b,"Map"),uo=ri(b,"Promise"),_i=ri(b,"Set"),qi=ri(b,"WeakMap"),Wi=ri(ve,"create"),Rr=qi&&new qi,vi={},Bd=si(ao),Pd=si(Gi),$d=si(uo),Ud=si(_i),Md=si(qi),Lr=$t?$t.prototype:t,Qi=Lr?Lr.valueOf:t,Fu=Lr?Lr.toString:t;function h(e){if(Le(e)&&!ne(e)&&!(e instanceof le)){if(e instanceof On)return e;if(Te.call(e,"__wrapped__"))return Nl(e)}return new On(e)}var Ai=function(){function e(){}return function(r){if(!ke(r))return{};if(vu)return vu(r);e.prototype=r;var a=new e;return e.prototype=t,a}}();function Br(){}function On(e,r){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}h.templateSettings={escape:ep,evaluate:np,interpolate:Pa,variable:"",imports:{_:h}},h.prototype=Br.prototype,h.prototype.constructor=h,On.prototype=Ai(Br.prototype),On.prototype.constructor=On;function le(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=wn,this.__views__=[]}function Vd(){var e=new le(this.__wrapped__);return e.__actions__=pn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=pn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=pn(this.__views__),e}function jd(){if(this.__filtered__){var e=new le(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Gd(){var e=this.__wrapped__.value(),r=this.__dir__,a=ne(e),c=r<0,f=a?e.length:0,m=nm(0,f,this.__views__),g=m.start,T=m.end,_=T-g,F=c?T:g-1,N=this.__iteratees__,x=N.length,B=0,G=en(_,this.__takeCount__);if(!a||!c&&f==_&&G==_)return Ku(e,this.__actions__);var J=[];e:for(;_--&&B<G;){F+=r;for(var re=-1,H=e[F];++re<x;){var oe=N[re],fe=oe.iteratee,vn=oe.type,un=fe(H);if(vn==di)H=un;else if(!un){if(vn==hr)continue e;break e}}J[B++]=H}return J}le.prototype=Ai(Br.prototype),le.prototype.constructor=le;function ei(e){var r=-1,a=e==null?0:e.length;for(this.clear();++r<a;){var c=e[r];this.set(c[0],c[1])}}function qd(){this.__data__=Wi?Wi(null):{},this.size=0}function Wd(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}function Qd(e){var r=this.__data__;if(Wi){var a=r[e];return a===d?t:a}return Te.call(r,e)?r[e]:t}function zd(e){var r=this.__data__;return Wi?r[e]!==t:Te.call(r,e)}function Yd(e,r){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=Wi&&r===t?d:r,this}ei.prototype.clear=qd,ei.prototype.delete=Wd,ei.prototype.get=Qd,ei.prototype.has=zd,ei.prototype.set=Yd;function Et(e){var r=-1,a=e==null?0:e.length;for(this.clear();++r<a;){var c=e[r];this.set(c[0],c[1])}}function Jd(){this.__data__=[],this.size=0}function Hd(e){var r=this.__data__,a=Pr(r,e);if(a<0)return!1;var c=r.length-1;return a==c?r.pop():Cr.call(r,a,1),--this.size,!0}function Xd(e){var r=this.__data__,a=Pr(r,e);return a<0?t:r[a][1]}function Kd(e){return Pr(this.__data__,e)>-1}function Zd(e,r){var a=this.__data__,c=Pr(a,e);return c<0?(++this.size,a.push([e,r])):a[c][1]=r,this}Et.prototype.clear=Jd,Et.prototype.delete=Hd,Et.prototype.get=Xd,Et.prototype.has=Kd,Et.prototype.set=Zd;function yt(e){var r=-1,a=e==null?0:e.length;for(this.clear();++r<a;){var c=e[r];this.set(c[0],c[1])}}function eh(){this.size=0,this.__data__={hash:new ei,map:new(Gi||Et),string:new ei}}function nh(e){var r=Jr(this,e).delete(e);return this.size-=r?1:0,r}function th(e){return Jr(this,e).get(e)}function ih(e){return Jr(this,e).has(e)}function rh(e,r){var a=Jr(this,e),c=a.size;return a.set(e,r),this.size+=a.size==c?0:1,this}yt.prototype.clear=eh,yt.prototype.delete=nh,yt.prototype.get=th,yt.prototype.has=ih,yt.prototype.set=rh;function ni(e){var r=-1,a=e==null?0:e.length;for(this.__data__=new yt;++r<a;)this.add(e[r])}function sh(e){return this.__data__.set(e,d),this}function oh(e){return this.__data__.has(e)}ni.prototype.add=ni.prototype.push=sh,ni.prototype.has=oh;function qn(e){var r=this.__data__=new Et(e);this.size=r.size}function ah(){this.__data__=new Et,this.size=0}function uh(e){var r=this.__data__,a=r.delete(e);return this.size=r.size,a}function lh(e){return this.__data__.get(e)}function ch(e){return this.__data__.has(e)}function fh(e,r){var a=this.__data__;if(a instanceof Et){var c=a.__data__;if(!Gi||c.length<o-1)return c.push([e,r]),this.size=++a.size,this;a=this.__data__=new yt(c)}return a.set(e,r),this.size=a.size,this}qn.prototype.clear=ah,qn.prototype.delete=uh,qn.prototype.get=lh,qn.prototype.has=ch,qn.prototype.set=fh;function Nu(e,r){var a=ne(e),c=!a&&oi(e),f=!a&&!c&&Gt(e),m=!a&&!c&&!f&&Fi(e),g=a||c||f||m,T=g?to(e.length,Id):[],_=T.length;for(var F in e)(r||Te.call(e,F))&&!(g&&(F=="length"||f&&(F=="offset"||F=="parent")||m&&(F=="buffer"||F=="byteLength"||F=="byteOffset")||_t(F,_)))&&T.push(F);return T}function Cu(e){var r=e.length;return r?e[Do(0,r-1)]:t}function ph(e,r){return Hr(pn(e),ti(r,0,e.length))}function dh(e){return Hr(pn(e))}function lo(e,r,a){(a!==t&&!Wn(e[r],a)||a===t&&!(r in e))&&Tt(e,r,a)}function zi(e,r,a){var c=e[r];(!(Te.call(e,r)&&Wn(c,a))||a===t&&!(r in e))&&Tt(e,r,a)}function Pr(e,r){for(var a=e.length;a--;)if(Wn(e[a][0],r))return a;return-1}function hh(e,r,a,c){return Ut(e,function(f,m,g){r(c,f,a(f),g)}),c}function ku(e,r){return e&&ut(r,ze(r),e)}function mh(e,r){return e&&ut(r,hn(r),e)}function Tt(e,r,a){r=="__proto__"&&kr?kr(e,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[r]=a}function co(e,r){for(var a=-1,c=r.length,f=A(c),m=e==null;++a<c;)f[a]=m?t:Wo(e,r[a]);return f}function ti(e,r,a){return e===e&&(a!==t&&(e=e<=a?e:a),r!==t&&(e=e>=r?e:r)),e}function xn(e,r,a,c,f,m){var g,T=r&I,_=r&w,F=r&O;if(a&&(g=f?a(e,c,f,m):a(e)),g!==t)return g;if(!ke(e))return e;var N=ne(e);if(N){if(g=im(e),!T)return pn(e,g)}else{var x=nn(e),B=x==Ze||x==xa;if(Gt(e))return nl(e,T);if(x==gt||x==U||B&&!f){if(g=_||B?{}:Dl(e),!T)return _?Qh(e,mh(g,e)):Wh(e,ku(g,e))}else{if(!Se[x])return f?e:{};g=rm(e,x,T)}}m||(m=new qn);var G=m.get(e);if(G)return G;m.set(e,g),Jl(e)?e.forEach(function(H){g.add(xn(H,r,a,H,e,m))}):zl(e)&&e.forEach(function(H,oe){g.set(oe,xn(H,r,a,oe,e,m))});var J=F?_?ko:Co:_?hn:ze,re=N?t:J(e);return Cn(re||e,function(H,oe){re&&(oe=H,H=e[oe]),zi(g,oe,xn(H,r,a,oe,e,m))}),g}function gh(e){var r=ze(e);return function(a){return Ou(a,e,r)}}function Ou(e,r,a){var c=a.length;if(e==null)return!c;for(e=ve(e);c--;){var f=a[c],m=r[f],g=e[f];if(g===t&&!(f in e)||!m(g))return!1}return!0}function xu(e,r,a){if(typeof e!="function")throw new kn(l);return er(function(){e.apply(t,a)},r)}function Yi(e,r,a,c){var f=-1,m=Dr,g=!0,T=e.length,_=[],F=r.length;if(!T)return _;a&&(r=Fe(r,Dn(a))),c?(m=Hs,g=!1):r.length>=o&&(m=Vi,g=!1,r=new ni(r));e:for(;++f<T;){var N=e[f],x=a==null?N:a(N);if(N=c||N!==0?N:0,g&&x===x){for(var B=F;B--;)if(r[B]===x)continue e;_.push(N)}else m(r,x,c)||_.push(N)}return _}var Ut=ol(at),Ru=ol(po,!0);function Eh(e,r){var a=!0;return Ut(e,function(c,f,m){return a=!!r(c,f,m),a}),a}function $r(e,r,a){for(var c=-1,f=e.length;++c<f;){var m=e[c],g=r(m);if(g!=null&&(T===t?g===g&&!_n(g):a(g,T)))var T=g,_=m}return _}function yh(e,r,a,c){var f=e.length;for(a=ie(a),a<0&&(a=-a>f?0:f+a),c=c===t||c>f?f:ie(c),c<0&&(c+=f),c=a>c?0:Xl(c);a<c;)e[a++]=r;return e}function Lu(e,r){var a=[];return Ut(e,function(c,f,m){r(c,f,m)&&a.push(c)}),a}function He(e,r,a,c,f){var m=-1,g=e.length;for(a||(a=om),f||(f=[]);++m<g;){var T=e[m];r>0&&a(T)?r>1?He(T,r-1,a,c,f):Bt(f,T):c||(f[f.length]=T)}return f}var fo=al(),Bu=al(!0);function at(e,r){return e&&fo(e,r,ze)}function po(e,r){return e&&Bu(e,r,ze)}function Ur(e,r){return Lt(r,function(a){return vt(e[a])})}function ii(e,r){r=Vt(r,e);for(var a=0,c=r.length;e!=null&&a<c;)e=e[lt(r[a++])];return a&&a==c?e:t}function Pu(e,r,a){var c=r(e);return ne(e)?c:Bt(c,a(e))}function on(e){return e==null?e===t?zf:Wf:Zt&&Zt in ve(e)?em(e):dm(e)}function ho(e,r){return e>r}function Th(e,r){return e!=null&&Te.call(e,r)}function Dh(e,r){return e!=null&&r in ve(e)}function Ih(e,r,a){return e>=en(r,a)&&e<Qe(r,a)}function mo(e,r,a){for(var c=a?Hs:Dr,f=e[0].length,m=e.length,g=m,T=A(m),_=1/0,F=[];g--;){var N=e[g];g&&r&&(N=Fe(N,Dn(r))),_=en(N.length,_),T[g]=!a&&(r||f>=120&&N.length>=120)?new ni(g&&N):t}N=e[0];var x=-1,B=T[0];e:for(;++x<f&&F.length<_;){var G=N[x],J=r?r(G):G;if(G=a||G!==0?G:0,!(B?Vi(B,J):c(F,J,a))){for(g=m;--g;){var re=T[g];if(!(re?Vi(re,J):c(e[g],J,a)))continue e}B&&B.push(J),F.push(G)}}return F}function _h(e,r,a,c){return at(e,function(f,m,g){r(c,a(f),m,g)}),c}function Ji(e,r,a){r=Vt(r,e),e=Al(e,r);var c=e==null?e:e[lt(Ln(r))];return c==null?t:Tn(c,e,a)}function $u(e){return Le(e)&&on(e)==U}function vh(e){return Le(e)&&on(e)==Mi}function Ah(e){return Le(e)&&on(e)==Fn}function Hi(e,r,a,c,f){return e===r?!0:e==null||r==null||!Le(e)&&!Le(r)?e!==e&&r!==r:bh(e,r,a,c,Hi,f)}function bh(e,r,a,c,f,m){var g=ne(e),T=ne(r),_=g?me:nn(e),F=T?me:nn(r);_=_==U?gt:_,F=F==U?gt:F;var N=_==gt,x=F==gt,B=_==F;if(B&&Gt(e)){if(!Gt(r))return!1;g=!0,N=!1}if(B&&!N)return m||(m=new qn),g||Fi(e)?El(e,r,a,c,f,m):Kh(e,r,_,a,c,f,m);if(!(a&R)){var G=N&&Te.call(e,"__wrapped__"),J=x&&Te.call(r,"__wrapped__");if(G||J){var re=G?e.value():e,H=J?r.value():r;return m||(m=new qn),f(re,H,a,c,m)}}return B?(m||(m=new qn),Zh(e,r,a,c,f,m)):!1}function Sh(e){return Le(e)&&nn(e)==Vn}function go(e,r,a,c){var f=a.length,m=f,g=!c;if(e==null)return!m;for(e=ve(e);f--;){var T=a[f];if(g&&T[2]?T[1]!==e[T[0]]:!(T[0]in e))return!1}for(;++f<m;){T=a[f];var _=T[0],F=e[_],N=T[1];if(g&&T[2]){if(F===t&&!(_ in e))return!1}else{var x=new qn;if(c)var B=c(F,N,_,e,r,x);if(!(B===t?Hi(N,F,R|L,c,x):B))return!1}}return!0}function Uu(e){if(!ke(e)||um(e))return!1;var r=vt(e)?Sd:gp;return r.test(si(e))}function wh(e){return Le(e)&&on(e)==Pi}function Fh(e){return Le(e)&&nn(e)==jn}function Nh(e){return Le(e)&&ts(e.length)&&!!we[on(e)]}function Mu(e){return typeof e=="function"?e:e==null?mn:typeof e=="object"?ne(e)?Gu(e[0],e[1]):ju(e):uc(e)}function Eo(e){if(!Zi(e))return Od(e);var r=[];for(var a in ve(e))Te.call(e,a)&&a!="constructor"&&r.push(a);return r}function Ch(e){if(!ke(e))return pm(e);var r=Zi(e),a=[];for(var c in e)c=="constructor"&&(r||!Te.call(e,c))||a.push(c);return a}function yo(e,r){return e<r}function Vu(e,r){var a=-1,c=dn(e)?A(e.length):[];return Ut(e,function(f,m,g){c[++a]=r(f,m,g)}),c}function ju(e){var r=xo(e);return r.length==1&&r[0][2]?_l(r[0][0],r[0][1]):function(a){return a===e||go(a,e,r)}}function Gu(e,r){return Lo(e)&&Il(r)?_l(lt(e),r):function(a){var c=Wo(a,e);return c===t&&c===r?Qo(a,e):Hi(r,c,R|L)}}function Mr(e,r,a,c,f){e!==r&&fo(r,function(m,g){if(f||(f=new qn),ke(m))kh(e,r,g,a,Mr,c,f);else{var T=c?c(Po(e,g),m,g+"",e,r,f):t;T===t&&(T=m),lo(e,g,T)}},hn)}function kh(e,r,a,c,f,m,g){var T=Po(e,a),_=Po(r,a),F=g.get(_);if(F){lo(e,a,F);return}var N=m?m(T,_,a+"",e,r,g):t,x=N===t;if(x){var B=ne(_),G=!B&&Gt(_),J=!B&&!G&&Fi(_);N=_,B||G||J?ne(T)?N=T:Ue(T)?N=pn(T):G?(x=!1,N=nl(_,!0)):J?(x=!1,N=tl(_,!0)):N=[]:nr(_)||oi(_)?(N=T,oi(T)?N=Kl(T):(!ke(T)||vt(T))&&(N=Dl(_))):x=!1}x&&(g.set(_,N),f(N,_,c,m,g),g.delete(_)),lo(e,a,N)}function qu(e,r){var a=e.length;if(a)return r+=r<0?a:0,_t(r,a)?e[r]:t}function Wu(e,r,a){r.length?r=Fe(r,function(m){return ne(m)?function(g){return ii(g,m.length===1?m[0]:m)}:m}):r=[mn];var c=-1;r=Fe(r,Dn(Y()));var f=Vu(e,function(m,g,T){var _=Fe(r,function(F){return F(m)});return{criteria:_,index:++c,value:m}});return rd(f,function(m,g){return qh(m,g,a)})}function Oh(e,r){return Qu(e,r,function(a,c){return Qo(e,c)})}function Qu(e,r,a){for(var c=-1,f=r.length,m={};++c<f;){var g=r[c],T=ii(e,g);a(T,g)&&Xi(m,Vt(g,e),T)}return m}function xh(e){return function(r){return ii(r,e)}}function To(e,r,a,c){var f=c?id:Ei,m=-1,g=r.length,T=e;for(e===r&&(r=pn(r)),a&&(T=Fe(e,Dn(a)));++m<g;)for(var _=0,F=r[m],N=a?a(F):F;(_=f(T,N,_,c))>-1;)T!==e&&Cr.call(T,_,1),Cr.call(e,_,1);return e}function zu(e,r){for(var a=e?r.length:0,c=a-1;a--;){var f=r[a];if(a==c||f!==m){var m=f;_t(f)?Cr.call(e,f,1):vo(e,f)}}return e}function Do(e,r){return e+xr(wu()*(r-e+1))}function Rh(e,r,a,c){for(var f=-1,m=Qe(Or((r-e)/(a||1)),0),g=A(m);m--;)g[c?m:++f]=e,e+=a;return g}function Io(e,r){var a="";if(!e||r<1||r>Mn)return a;do r%2&&(a+=e),r=xr(r/2),r&&(e+=e);while(r);return a}function se(e,r){return $o(vl(e,r,mn),e+"")}function Lh(e){return Cu(Ni(e))}function Bh(e,r){var a=Ni(e);return Hr(a,ti(r,0,a.length))}function Xi(e,r,a,c){if(!ke(e))return e;r=Vt(r,e);for(var f=-1,m=r.length,g=m-1,T=e;T!=null&&++f<m;){var _=lt(r[f]),F=a;if(_==="__proto__"||_==="constructor"||_==="prototype")return e;if(f!=g){var N=T[_];F=c?c(N,_,T):t,F===t&&(F=ke(N)?N:_t(r[f+1])?[]:{})}zi(T,_,F),T=T[_]}return e}var Yu=Rr?function(e,r){return Rr.set(e,r),e}:mn,Ph=kr?function(e,r){return kr(e,"toString",{configurable:!0,enumerable:!1,value:Yo(r),writable:!0})}:mn;function $h(e){return Hr(Ni(e))}function Rn(e,r,a){var c=-1,f=e.length;r<0&&(r=-r>f?0:f+r),a=a>f?f:a,a<0&&(a+=f),f=r>a?0:a-r>>>0,r>>>=0;for(var m=A(f);++c<f;)m[c]=e[c+r];return m}function Uh(e,r){var a;return Ut(e,function(c,f,m){return a=r(c,f,m),!a}),!!a}function Vr(e,r,a){var c=0,f=e==null?c:e.length;if(typeof r=="number"&&r===r&&f<=V){for(;c<f;){var m=c+f>>>1,g=e[m];g!==null&&!_n(g)&&(a?g<=r:g<r)?c=m+1:f=m}return f}return _o(e,r,mn,a)}function _o(e,r,a,c){var f=0,m=e==null?0:e.length;if(m===0)return 0;r=a(r);for(var g=r!==r,T=r===null,_=_n(r),F=r===t;f<m;){var N=xr((f+m)/2),x=a(e[N]),B=x!==t,G=x===null,J=x===x,re=_n(x);if(g)var H=c||J;else F?H=J&&(c||B):T?H=J&&B&&(c||!G):_?H=J&&B&&!G&&(c||!re):G||re?H=!1:H=c?x<=r:x<r;H?f=N+1:m=N}return en(m,S)}function Ju(e,r){for(var a=-1,c=e.length,f=0,m=[];++a<c;){var g=e[a],T=r?r(g):g;if(!a||!Wn(T,_)){var _=T;m[f++]=g===0?0:g}}return m}function Hu(e){return typeof e=="number"?e:_n(e)?Xt:+e}function In(e){if(typeof e=="string")return e;if(ne(e))return Fe(e,In)+"";if(_n(e))return Fu?Fu.call(e):"";var r=e+"";return r=="0"&&1/e==-ot?"-0":r}function Mt(e,r,a){var c=-1,f=Dr,m=e.length,g=!0,T=[],_=T;if(a)g=!1,f=Hs;else if(m>=o){var F=r?null:Hh(e);if(F)return _r(F);g=!1,f=Vi,_=new ni}else _=r?[]:T;e:for(;++c<m;){var N=e[c],x=r?r(N):N;if(N=a||N!==0?N:0,g&&x===x){for(var B=_.length;B--;)if(_[B]===x)continue e;r&&_.push(x),T.push(N)}else f(_,x,a)||(_!==T&&_.push(x),T.push(N))}return T}function vo(e,r){return r=Vt(r,e),e=Al(e,r),e==null||delete e[lt(Ln(r))]}function Xu(e,r,a,c){return Xi(e,r,a(ii(e,r)),c)}function jr(e,r,a,c){for(var f=e.length,m=c?f:-1;(c?m--:++m<f)&&r(e[m],m,e););return a?Rn(e,c?0:m,c?m+1:f):Rn(e,c?m+1:0,c?f:m)}function Ku(e,r){var a=e;return a instanceof le&&(a=a.value()),Xs(r,function(c,f){return f.func.apply(f.thisArg,Bt([c],f.args))},a)}function Ao(e,r,a){var c=e.length;if(c<2)return c?Mt(e[0]):[];for(var f=-1,m=A(c);++f<c;)for(var g=e[f],T=-1;++T<c;)T!=f&&(m[f]=Yi(m[f]||g,e[T],r,a));return Mt(He(m,1),r,a)}function Zu(e,r,a){for(var c=-1,f=e.length,m=r.length,g={};++c<f;){var T=c<m?r[c]:t;a(g,e[c],T)}return g}function bo(e){return Ue(e)?e:[]}function So(e){return typeof e=="function"?e:mn}function Vt(e,r){return ne(e)?e:Lo(e,r)?[e]:Fl(Ee(e))}var Mh=se;function jt(e,r,a){var c=e.length;return a=a===t?c:a,!r&&a>=c?e:Rn(e,r,a)}var el=wd||function(e){return Je.clearTimeout(e)};function nl(e,r){if(r)return e.slice();var a=e.length,c=_u?_u(a):new e.constructor(a);return e.copy(c),c}function wo(e){var r=new e.constructor(e.byteLength);return new Fr(r).set(new Fr(e)),r}function Vh(e,r){var a=r?wo(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}function jh(e){var r=new e.constructor(e.source,$a.exec(e));return r.lastIndex=e.lastIndex,r}function Gh(e){return Qi?ve(Qi.call(e)):{}}function tl(e,r){var a=r?wo(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}function il(e,r){if(e!==r){var a=e!==t,c=e===null,f=e===e,m=_n(e),g=r!==t,T=r===null,_=r===r,F=_n(r);if(!T&&!F&&!m&&e>r||m&&g&&_&&!T&&!F||c&&g&&_||!a&&_||!f)return 1;if(!c&&!m&&!F&&e<r||F&&a&&f&&!c&&!m||T&&a&&f||!g&&f||!_)return-1}return 0}function qh(e,r,a){for(var c=-1,f=e.criteria,m=r.criteria,g=f.length,T=a.length;++c<g;){var _=il(f[c],m[c]);if(_){if(c>=T)return _;var F=a[c];return _*(F=="desc"?-1:1)}}return e.index-r.index}function rl(e,r,a,c){for(var f=-1,m=e.length,g=a.length,T=-1,_=r.length,F=Qe(m-g,0),N=A(_+F),x=!c;++T<_;)N[T]=r[T];for(;++f<g;)(x||f<m)&&(N[a[f]]=e[f]);for(;F--;)N[T++]=e[f++];return N}function sl(e,r,a,c){for(var f=-1,m=e.length,g=-1,T=a.length,_=-1,F=r.length,N=Qe(m-T,0),x=A(N+F),B=!c;++f<N;)x[f]=e[f];for(var G=f;++_<F;)x[G+_]=r[_];for(;++g<T;)(B||f<m)&&(x[G+a[g]]=e[f++]);return x}function pn(e,r){var a=-1,c=e.length;for(r||(r=A(c));++a<c;)r[a]=e[a];return r}function ut(e,r,a,c){var f=!a;a||(a={});for(var m=-1,g=r.length;++m<g;){var T=r[m],_=c?c(a[T],e[T],T,a,e):t;_===t&&(_=e[T]),f?Tt(a,T,_):zi(a,T,_)}return a}function Wh(e,r){return ut(e,Ro(e),r)}function Qh(e,r){return ut(e,yl(e),r)}function Gr(e,r){return function(a,c){var f=ne(a)?Xp:hh,m=r?r():{};return f(a,e,Y(c,2),m)}}function bi(e){return se(function(r,a){var c=-1,f=a.length,m=f>1?a[f-1]:t,g=f>2?a[2]:t;for(m=e.length>3&&typeof m=="function"?(f--,m):t,g&&an(a[0],a[1],g)&&(m=f<3?t:m,f=1),r=ve(r);++c<f;){var T=a[c];T&&e(r,T,c,m)}return r})}function ol(e,r){return function(a,c){if(a==null)return a;if(!dn(a))return e(a,c);for(var f=a.length,m=r?f:-1,g=ve(a);(r?m--:++m<f)&&c(g[m],m,g)!==!1;);return a}}function al(e){return function(r,a,c){for(var f=-1,m=ve(r),g=c(r),T=g.length;T--;){var _=g[e?T:++f];if(a(m[_],_,m)===!1)break}return r}}function zh(e,r,a){var c=r&X,f=Ki(e);function m(){var g=this&&this!==Je&&this instanceof m?f:e;return g.apply(c?a:this,arguments)}return m}function ul(e){return function(r){r=Ee(r);var a=yi(r)?Gn(r):t,c=a?a[0]:r.charAt(0),f=a?jt(a,1).join(""):r.slice(1);return c[e]()+f}}function Si(e){return function(r){return Xs(oc(sc(r).replace(Pp,"")),e,"")}}function Ki(e){return function(){var r=arguments;switch(r.length){case 0:return new e;case 1:return new e(r[0]);case 2:return new e(r[0],r[1]);case 3:return new e(r[0],r[1],r[2]);case 4:return new e(r[0],r[1],r[2],r[3]);case 5:return new e(r[0],r[1],r[2],r[3],r[4]);case 6:return new e(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new e(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var a=Ai(e.prototype),c=e.apply(a,r);return ke(c)?c:a}}function Yh(e,r,a){var c=Ki(e);function f(){for(var m=arguments.length,g=A(m),T=m,_=wi(f);T--;)g[T]=arguments[T];var F=m<3&&g[0]!==_&&g[m-1]!==_?[]:Pt(g,_);if(m-=F.length,m<a)return dl(e,r,qr,f.placeholder,t,g,F,t,t,a-m);var N=this&&this!==Je&&this instanceof f?c:e;return Tn(N,this,g)}return f}function ll(e){return function(r,a,c){var f=ve(r);if(!dn(r)){var m=Y(a,3);r=ze(r),a=function(T){return m(f[T],T,f)}}var g=e(r,a,c);return g>-1?f[m?r[g]:g]:t}}function cl(e){return It(function(r){var a=r.length,c=a,f=On.prototype.thru;for(e&&r.reverse();c--;){var m=r[c];if(typeof m!="function")throw new kn(l);if(f&&!g&&Yr(m)=="wrapper")var g=new On([],!0)}for(c=g?c:a;++c<a;){m=r[c];var T=Yr(m),_=T=="wrapper"?Oo(m):t;_&&Bo(_[0])&&_[1]==(Ke|be|Re|mt)&&!_[4].length&&_[9]==1?g=g[Yr(_[0])].apply(g,_[3]):g=m.length==1&&Bo(m)?g[T]():g.thru(m)}return function(){var F=arguments,N=F[0];if(g&&F.length==1&&ne(N))return g.plant(N).value();for(var x=0,B=a?r[x].apply(this,F):N;++x<a;)B=r[x].call(this,B);return B}})}function qr(e,r,a,c,f,m,g,T,_,F){var N=r&Ke,x=r&X,B=r&he,G=r&(be|Ce),J=r&k,re=B?t:Ki(e);function H(){for(var oe=arguments.length,fe=A(oe),vn=oe;vn--;)fe[vn]=arguments[vn];if(G)var un=wi(H),An=od(fe,un);if(c&&(fe=rl(fe,c,f,G)),m&&(fe=sl(fe,m,g,G)),oe-=An,G&&oe<F){var Me=Pt(fe,un);return dl(e,r,qr,H.placeholder,a,fe,Me,T,_,F-oe)}var Qn=x?a:this,bt=B?Qn[e]:e;return oe=fe.length,T?fe=hm(fe,T):J&&oe>1&&fe.reverse(),N&&_<oe&&(fe.length=_),this&&this!==Je&&this instanceof H&&(bt=re||Ki(bt)),bt.apply(Qn,fe)}return H}function fl(e,r){return function(a,c){return _h(a,e,r(c),{})}}function Wr(e,r){return function(a,c){var f;if(a===t&&c===t)return r;if(a!==t&&(f=a),c!==t){if(f===t)return c;typeof a=="string"||typeof c=="string"?(a=In(a),c=In(c)):(a=Hu(a),c=Hu(c)),f=e(a,c)}return f}}function Fo(e){return It(function(r){return r=Fe(r,Dn(Y())),se(function(a){var c=this;return e(r,function(f){return Tn(f,c,a)})})})}function Qr(e,r){r=r===t?" ":In(r);var a=r.length;if(a<2)return a?Io(r,e):r;var c=Io(r,Or(e/Ti(r)));return yi(r)?jt(Gn(c),0,e).join(""):c.slice(0,e)}function Jh(e,r,a,c){var f=r&X,m=Ki(e);function g(){for(var T=-1,_=arguments.length,F=-1,N=c.length,x=A(N+_),B=this&&this!==Je&&this instanceof g?m:e;++F<N;)x[F]=c[F];for(;_--;)x[F++]=arguments[++T];return Tn(B,f?a:this,x)}return g}function pl(e){return function(r,a,c){return c&&typeof c!="number"&&an(r,a,c)&&(a=c=t),r=At(r),a===t?(a=r,r=0):a=At(a),c=c===t?r<a?1:-1:At(c),Rh(r,a,c,e)}}function zr(e){return function(r,a){return typeof r=="string"&&typeof a=="string"||(r=Bn(r),a=Bn(a)),e(r,a)}}function dl(e,r,a,c,f,m,g,T,_,F){var N=r&be,x=N?g:t,B=N?t:g,G=N?m:t,J=N?t:m;r|=N?Re:rn,r&=~(N?rn:Re),r&je||(r&=~(X|he));var re=[e,r,f,G,x,J,B,T,_,F],H=a.apply(t,re);return Bo(e)&&bl(H,re),H.placeholder=c,Sl(H,e,r)}function No(e){var r=We[e];return function(a,c){if(a=Bn(a),c=c==null?0:en(ie(c),292),c&&Su(a)){var f=(Ee(a)+"e").split("e"),m=r(f[0]+"e"+(+f[1]+c));return f=(Ee(m)+"e").split("e"),+(f[0]+"e"+(+f[1]-c))}return r(a)}}var Hh=_i&&1/_r(new _i([,-0]))[1]==ot?function(e){return new _i(e)}:Xo;function hl(e){return function(r){var a=nn(r);return a==Vn?ro(r):a==jn?dd(r):sd(r,e(r))}}function Dt(e,r,a,c,f,m,g,T){var _=r&he;if(!_&&typeof e!="function")throw new kn(l);var F=c?c.length:0;if(F||(r&=~(Re|rn),c=f=t),g=g===t?g:Qe(ie(g),0),T=T===t?T:ie(T),F-=f?f.length:0,r&rn){var N=c,x=f;c=f=t}var B=_?t:Oo(e),G=[e,r,a,c,f,N,x,m,g,T];if(B&&fm(G,B),e=G[0],r=G[1],a=G[2],c=G[3],f=G[4],T=G[9]=G[9]===t?_?0:e.length:Qe(G[9]-F,0),!T&&r&(be|Ce)&&(r&=~(be|Ce)),!r||r==X)var J=zh(e,r,a);else r==be||r==Ce?J=Yh(e,r,T):(r==Re||r==(X|Re))&&!f.length?J=Jh(e,r,a,c):J=qr.apply(t,G);var re=B?Yu:bl;return Sl(re(J,G),e,r)}function ml(e,r,a,c){return e===t||Wn(e,Ii[a])&&!Te.call(c,a)?r:e}function gl(e,r,a,c,f,m){return ke(e)&&ke(r)&&(m.set(r,e),Mr(e,r,t,gl,m),m.delete(r)),e}function Xh(e){return nr(e)?t:e}function El(e,r,a,c,f,m){var g=a&R,T=e.length,_=r.length;if(T!=_&&!(g&&_>T))return!1;var F=m.get(e),N=m.get(r);if(F&&N)return F==r&&N==e;var x=-1,B=!0,G=a&L?new ni:t;for(m.set(e,r),m.set(r,e);++x<T;){var J=e[x],re=r[x];if(c)var H=g?c(re,J,x,r,e,m):c(J,re,x,e,r,m);if(H!==t){if(H)continue;B=!1;break}if(G){if(!Ks(r,function(oe,fe){if(!Vi(G,fe)&&(J===oe||f(J,oe,a,c,m)))return G.push(fe)})){B=!1;break}}else if(!(J===re||f(J,re,a,c,m))){B=!1;break}}return m.delete(e),m.delete(r),B}function Kh(e,r,a,c,f,m,g){switch(a){case mi:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case Mi:return!(e.byteLength!=r.byteLength||!m(new Fr(e),new Fr(r)));case ge:case Fn:case Bi:return Wn(+e,+r);case Rt:return e.name==r.name&&e.message==r.message;case Pi:case $i:return e==r+"";case Vn:var T=ro;case jn:var _=c&R;if(T||(T=_r),e.size!=r.size&&!_)return!1;var F=g.get(e);if(F)return F==r;c|=L,g.set(e,r);var N=El(T(e),T(r),c,f,m,g);return g.delete(e),N;case gr:if(Qi)return Qi.call(e)==Qi.call(r)}return!1}function Zh(e,r,a,c,f,m){var g=a&R,T=Co(e),_=T.length,F=Co(r),N=F.length;if(_!=N&&!g)return!1;for(var x=_;x--;){var B=T[x];if(!(g?B in r:Te.call(r,B)))return!1}var G=m.get(e),J=m.get(r);if(G&&J)return G==r&&J==e;var re=!0;m.set(e,r),m.set(r,e);for(var H=g;++x<_;){B=T[x];var oe=e[B],fe=r[B];if(c)var vn=g?c(fe,oe,B,r,e,m):c(oe,fe,B,e,r,m);if(!(vn===t?oe===fe||f(oe,fe,a,c,m):vn)){re=!1;break}H||(H=B=="constructor")}if(re&&!H){var un=e.constructor,An=r.constructor;un!=An&&"constructor"in e&&"constructor"in r&&!(typeof un=="function"&&un instanceof un&&typeof An=="function"&&An instanceof An)&&(re=!1)}return m.delete(e),m.delete(r),re}function It(e){return $o(vl(e,t,Ol),e+"")}function Co(e){return Pu(e,ze,Ro)}function ko(e){return Pu(e,hn,yl)}var Oo=Rr?function(e){return Rr.get(e)}:Xo;function Yr(e){for(var r=e.name+"",a=vi[r],c=Te.call(vi,r)?a.length:0;c--;){var f=a[c],m=f.func;if(m==null||m==e)return f.name}return r}function wi(e){var r=Te.call(h,"placeholder")?h:e;return r.placeholder}function Y(){var e=h.iteratee||Jo;return e=e===Jo?Mu:e,arguments.length?e(arguments[0],arguments[1]):e}function Jr(e,r){var a=e.__data__;return am(r)?a[typeof r=="string"?"string":"hash"]:a.map}function xo(e){for(var r=ze(e),a=r.length;a--;){var c=r[a],f=e[c];r[a]=[c,f,Il(f)]}return r}function ri(e,r){var a=cd(e,r);return Uu(a)?a:t}function em(e){var r=Te.call(e,Zt),a=e[Zt];try{e[Zt]=t;var c=!0}catch{}var f=Sr.call(e);return c&&(r?e[Zt]=a:delete e[Zt]),f}var Ro=oo?function(e){return e==null?[]:(e=ve(e),Lt(oo(e),function(r){return Au.call(e,r)}))}:Ko,yl=oo?function(e){for(var r=[];e;)Bt(r,Ro(e)),e=Nr(e);return r}:Ko,nn=on;(ao&&nn(new ao(new ArrayBuffer(1)))!=mi||Gi&&nn(new Gi)!=Vn||uo&&nn(uo.resolve())!=Ra||_i&&nn(new _i)!=jn||qi&&nn(new qi)!=Ui)&&(nn=function(e){var r=on(e),a=r==gt?e.constructor:t,c=a?si(a):"";if(c)switch(c){case Bd:return mi;case Pd:return Vn;case $d:return Ra;case Ud:return jn;case Md:return Ui}return r});function nm(e,r,a){for(var c=-1,f=a.length;++c<f;){var m=a[c],g=m.size;switch(m.type){case"drop":e+=g;break;case"dropRight":r-=g;break;case"take":r=en(r,e+g);break;case"takeRight":e=Qe(e,r-g);break}}return{start:e,end:r}}function tm(e){var r=e.match(up);return r?r[1].split(lp):[]}function Tl(e,r,a){r=Vt(r,e);for(var c=-1,f=r.length,m=!1;++c<f;){var g=lt(r[c]);if(!(m=e!=null&&a(e,g)))break;e=e[g]}return m||++c!=f?m:(f=e==null?0:e.length,!!f&&ts(f)&&_t(g,f)&&(ne(e)||oi(e)))}function im(e){var r=e.length,a=new e.constructor(r);return r&&typeof e[0]=="string"&&Te.call(e,"index")&&(a.index=e.index,a.input=e.input),a}function Dl(e){return typeof e.constructor=="function"&&!Zi(e)?Ai(Nr(e)):{}}function rm(e,r,a){var c=e.constructor;switch(r){case Mi:return wo(e);case ge:case Fn:return new c(+e);case mi:return Vh(e,a);case Os:case xs:case Rs:case Ls:case Bs:case Ps:case $s:case Us:case Ms:return tl(e,a);case Vn:return new c;case Bi:case $i:return new c(e);case Pi:return jh(e);case jn:return new c;case gr:return Gh(e)}}function sm(e,r){var a=r.length;if(!a)return e;var c=a-1;return r[c]=(a>1?"& ":"")+r[c],r=r.join(a>2?", ":" "),e.replace(ap,`{
/* [wrapped with `+r+`] */
`)}function om(e){return ne(e)||oi(e)||!!(bu&&e&&e[bu])}function _t(e,r){var a=typeof e;return r=r??Mn,!!r&&(a=="number"||a!="symbol"&&yp.test(e))&&e>-1&&e%1==0&&e<r}function an(e,r,a){if(!ke(a))return!1;var c=typeof r;return(c=="number"?dn(a)&&_t(r,a.length):c=="string"&&r in a)?Wn(a[r],e):!1}function Lo(e,r){if(ne(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||_n(e)?!0:ip.test(e)||!tp.test(e)||r!=null&&e in ve(r)}function am(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function Bo(e){var r=Yr(e),a=h[r];if(typeof a!="function"||!(r in le.prototype))return!1;if(e===a)return!0;var c=Oo(a);return!!c&&e===c[0]}function um(e){return!!Iu&&Iu in e}var lm=Ar?vt:Zo;function Zi(e){var r=e&&e.constructor,a=typeof r=="function"&&r.prototype||Ii;return e===a}function Il(e){return e===e&&!ke(e)}function _l(e,r){return function(a){return a==null?!1:a[e]===r&&(r!==t||e in ve(a))}}function cm(e){var r=es(e,function(c){return a.size===E&&a.clear(),c}),a=r.cache;return r}function fm(e,r){var a=e[1],c=r[1],f=a|c,m=f<(X|he|Ke),g=c==Ke&&a==be||c==Ke&&a==mt&&e[7].length<=r[8]||c==(Ke|mt)&&r[7].length<=r[8]&&a==be;if(!(m||g))return e;c&X&&(e[2]=r[2],f|=a&X?0:je);var T=r[3];if(T){var _=e[3];e[3]=_?rl(_,T,r[4]):T,e[4]=_?Pt(e[3],y):r[4]}return T=r[5],T&&(_=e[5],e[5]=_?sl(_,T,r[6]):T,e[6]=_?Pt(e[5],y):r[6]),T=r[7],T&&(e[7]=T),c&Ke&&(e[8]=e[8]==null?r[8]:en(e[8],r[8])),e[9]==null&&(e[9]=r[9]),e[0]=r[0],e[1]=f,e}function pm(e){var r=[];if(e!=null)for(var a in ve(e))r.push(a);return r}function dm(e){return Sr.call(e)}function vl(e,r,a){return r=Qe(r===t?e.length-1:r,0),function(){for(var c=arguments,f=-1,m=Qe(c.length-r,0),g=A(m);++f<m;)g[f]=c[r+f];f=-1;for(var T=A(r+1);++f<r;)T[f]=c[f];return T[r]=a(g),Tn(e,this,T)}}function Al(e,r){return r.length<2?e:ii(e,Rn(r,0,-1))}function hm(e,r){for(var a=e.length,c=en(r.length,a),f=pn(e);c--;){var m=r[c];e[c]=_t(m,a)?f[m]:t}return e}function Po(e,r){if(!(r==="constructor"&&typeof e[r]=="function")&&r!="__proto__")return e[r]}var bl=wl(Yu),er=Nd||function(e,r){return Je.setTimeout(e,r)},$o=wl(Ph);function Sl(e,r,a){var c=r+"";return $o(e,sm(c,mm(tm(c),a)))}function wl(e){var r=0,a=0;return function(){var c=xd(),f=Ht-(c-a);if(a=c,f>0){if(++r>=xt)return arguments[0]}else r=0;return e.apply(t,arguments)}}function Hr(e,r){var a=-1,c=e.length,f=c-1;for(r=r===t?c:r;++a<r;){var m=Do(a,f),g=e[m];e[m]=e[a],e[a]=g}return e.length=r,e}var Fl=cm(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(rp,function(a,c,f,m){r.push(f?m.replace(pp,"$1"):c||a)}),r});function lt(e){if(typeof e=="string"||_n(e))return e;var r=e+"";return r=="0"&&1/e==-ot?"-0":r}function si(e){if(e!=null){try{return br.call(e)}catch{}try{return e+""}catch{}}return""}function mm(e,r){return Cn(P,function(a){var c="_."+a[0];r&a[1]&&!Dr(e,c)&&e.push(c)}),e.sort()}function Nl(e){if(e instanceof le)return e.clone();var r=new On(e.__wrapped__,e.__chain__);return r.__actions__=pn(e.__actions__),r.__index__=e.__index__,r.__values__=e.__values__,r}function gm(e,r,a){(a?an(e,r,a):r===t)?r=1:r=Qe(ie(r),0);var c=e==null?0:e.length;if(!c||r<1)return[];for(var f=0,m=0,g=A(Or(c/r));f<c;)g[m++]=Rn(e,f,f+=r);return g}function Em(e){for(var r=-1,a=e==null?0:e.length,c=0,f=[];++r<a;){var m=e[r];m&&(f[c++]=m)}return f}function ym(){var e=arguments.length;if(!e)return[];for(var r=A(e-1),a=arguments[0],c=e;c--;)r[c-1]=arguments[c];return Bt(ne(a)?pn(a):[a],He(r,1))}var Tm=se(function(e,r){return Ue(e)?Yi(e,He(r,1,Ue,!0)):[]}),Dm=se(function(e,r){var a=Ln(r);return Ue(a)&&(a=t),Ue(e)?Yi(e,He(r,1,Ue,!0),Y(a,2)):[]}),Im=se(function(e,r){var a=Ln(r);return Ue(a)&&(a=t),Ue(e)?Yi(e,He(r,1,Ue,!0),t,a):[]});function _m(e,r,a){var c=e==null?0:e.length;return c?(r=a||r===t?1:ie(r),Rn(e,r<0?0:r,c)):[]}function vm(e,r,a){var c=e==null?0:e.length;return c?(r=a||r===t?1:ie(r),r=c-r,Rn(e,0,r<0?0:r)):[]}function Am(e,r){return e&&e.length?jr(e,Y(r,3),!0,!0):[]}function bm(e,r){return e&&e.length?jr(e,Y(r,3),!0):[]}function Sm(e,r,a,c){var f=e==null?0:e.length;return f?(a&&typeof a!="number"&&an(e,r,a)&&(a=0,c=f),yh(e,r,a,c)):[]}function Cl(e,r,a){var c=e==null?0:e.length;if(!c)return-1;var f=a==null?0:ie(a);return f<0&&(f=Qe(c+f,0)),Ir(e,Y(r,3),f)}function kl(e,r,a){var c=e==null?0:e.length;if(!c)return-1;var f=c-1;return a!==t&&(f=ie(a),f=a<0?Qe(c+f,0):en(f,c-1)),Ir(e,Y(r,3),f,!0)}function Ol(e){var r=e==null?0:e.length;return r?He(e,1):[]}function wm(e){var r=e==null?0:e.length;return r?He(e,ot):[]}function Fm(e,r){var a=e==null?0:e.length;return a?(r=r===t?1:ie(r),He(e,r)):[]}function Nm(e){for(var r=-1,a=e==null?0:e.length,c={};++r<a;){var f=e[r];c[f[0]]=f[1]}return c}function xl(e){return e&&e.length?e[0]:t}function Cm(e,r,a){var c=e==null?0:e.length;if(!c)return-1;var f=a==null?0:ie(a);return f<0&&(f=Qe(c+f,0)),Ei(e,r,f)}function km(e){var r=e==null?0:e.length;return r?Rn(e,0,-1):[]}var Om=se(function(e){var r=Fe(e,bo);return r.length&&r[0]===e[0]?mo(r):[]}),xm=se(function(e){var r=Ln(e),a=Fe(e,bo);return r===Ln(a)?r=t:a.pop(),a.length&&a[0]===e[0]?mo(a,Y(r,2)):[]}),Rm=se(function(e){var r=Ln(e),a=Fe(e,bo);return r=typeof r=="function"?r:t,r&&a.pop(),a.length&&a[0]===e[0]?mo(a,t,r):[]});function Lm(e,r){return e==null?"":kd.call(e,r)}function Ln(e){var r=e==null?0:e.length;return r?e[r-1]:t}function Bm(e,r,a){var c=e==null?0:e.length;if(!c)return-1;var f=c;return a!==t&&(f=ie(a),f=f<0?Qe(c+f,0):en(f,c-1)),r===r?md(e,r,f):Ir(e,du,f,!0)}function Pm(e,r){return e&&e.length?qu(e,ie(r)):t}var $m=se(Rl);function Rl(e,r){return e&&e.length&&r&&r.length?To(e,r):e}function Um(e,r,a){return e&&e.length&&r&&r.length?To(e,r,Y(a,2)):e}function Mm(e,r,a){return e&&e.length&&r&&r.length?To(e,r,t,a):e}var Vm=It(function(e,r){var a=e==null?0:e.length,c=co(e,r);return zu(e,Fe(r,function(f){return _t(f,a)?+f:f}).sort(il)),c});function jm(e,r){var a=[];if(!(e&&e.length))return a;var c=-1,f=[],m=e.length;for(r=Y(r,3);++c<m;){var g=e[c];r(g,c,e)&&(a.push(g),f.push(c))}return zu(e,f),a}function Uo(e){return e==null?e:Ld.call(e)}function Gm(e,r,a){var c=e==null?0:e.length;return c?(a&&typeof a!="number"&&an(e,r,a)?(r=0,a=c):(r=r==null?0:ie(r),a=a===t?c:ie(a)),Rn(e,r,a)):[]}function qm(e,r){return Vr(e,r)}function Wm(e,r,a){return _o(e,r,Y(a,2))}function Qm(e,r){var a=e==null?0:e.length;if(a){var c=Vr(e,r);if(c<a&&Wn(e[c],r))return c}return-1}function zm(e,r){return Vr(e,r,!0)}function Ym(e,r,a){return _o(e,r,Y(a,2),!0)}function Jm(e,r){var a=e==null?0:e.length;if(a){var c=Vr(e,r,!0)-1;if(Wn(e[c],r))return c}return-1}function Hm(e){return e&&e.length?Ju(e):[]}function Xm(e,r){return e&&e.length?Ju(e,Y(r,2)):[]}function Km(e){var r=e==null?0:e.length;return r?Rn(e,1,r):[]}function Zm(e,r,a){return e&&e.length?(r=a||r===t?1:ie(r),Rn(e,0,r<0?0:r)):[]}function eg(e,r,a){var c=e==null?0:e.length;return c?(r=a||r===t?1:ie(r),r=c-r,Rn(e,r<0?0:r,c)):[]}function ng(e,r){return e&&e.length?jr(e,Y(r,3),!1,!0):[]}function tg(e,r){return e&&e.length?jr(e,Y(r,3)):[]}var ig=se(function(e){return Mt(He(e,1,Ue,!0))}),rg=se(function(e){var r=Ln(e);return Ue(r)&&(r=t),Mt(He(e,1,Ue,!0),Y(r,2))}),sg=se(function(e){var r=Ln(e);return r=typeof r=="function"?r:t,Mt(He(e,1,Ue,!0),t,r)});function og(e){return e&&e.length?Mt(e):[]}function ag(e,r){return e&&e.length?Mt(e,Y(r,2)):[]}function ug(e,r){return r=typeof r=="function"?r:t,e&&e.length?Mt(e,t,r):[]}function Mo(e){if(!(e&&e.length))return[];var r=0;return e=Lt(e,function(a){if(Ue(a))return r=Qe(a.length,r),!0}),to(r,function(a){return Fe(e,Zs(a))})}function Ll(e,r){if(!(e&&e.length))return[];var a=Mo(e);return r==null?a:Fe(a,function(c){return Tn(r,t,c)})}var lg=se(function(e,r){return Ue(e)?Yi(e,r):[]}),cg=se(function(e){return Ao(Lt(e,Ue))}),fg=se(function(e){var r=Ln(e);return Ue(r)&&(r=t),Ao(Lt(e,Ue),Y(r,2))}),pg=se(function(e){var r=Ln(e);return r=typeof r=="function"?r:t,Ao(Lt(e,Ue),t,r)}),dg=se(Mo);function hg(e,r){return Zu(e||[],r||[],zi)}function mg(e,r){return Zu(e||[],r||[],Xi)}var gg=se(function(e){var r=e.length,a=r>1?e[r-1]:t;return a=typeof a=="function"?(e.pop(),a):t,Ll(e,a)});function Bl(e){var r=h(e);return r.__chain__=!0,r}function Eg(e,r){return r(e),e}function Xr(e,r){return r(e)}var yg=It(function(e){var r=e.length,a=r?e[0]:0,c=this.__wrapped__,f=function(m){return co(m,e)};return r>1||this.__actions__.length||!(c instanceof le)||!_t(a)?this.thru(f):(c=c.slice(a,+a+(r?1:0)),c.__actions__.push({func:Xr,args:[f],thisArg:t}),new On(c,this.__chain__).thru(function(m){return r&&!m.length&&m.push(t),m}))});function Tg(){return Bl(this)}function Dg(){return new On(this.value(),this.__chain__)}function Ig(){this.__values__===t&&(this.__values__=Hl(this.value()));var e=this.__index__>=this.__values__.length,r=e?t:this.__values__[this.__index__++];return{done:e,value:r}}function _g(){return this}function vg(e){for(var r,a=this;a instanceof Br;){var c=Nl(a);c.__index__=0,c.__values__=t,r?f.__wrapped__=c:r=c;var f=c;a=a.__wrapped__}return f.__wrapped__=e,r}function Ag(){var e=this.__wrapped__;if(e instanceof le){var r=e;return this.__actions__.length&&(r=new le(this)),r=r.reverse(),r.__actions__.push({func:Xr,args:[Uo],thisArg:t}),new On(r,this.__chain__)}return this.thru(Uo)}function bg(){return Ku(this.__wrapped__,this.__actions__)}var Sg=Gr(function(e,r,a){Te.call(e,a)?++e[a]:Tt(e,a,1)});function wg(e,r,a){var c=ne(e)?fu:Eh;return a&&an(e,r,a)&&(r=t),c(e,Y(r,3))}function Fg(e,r){var a=ne(e)?Lt:Lu;return a(e,Y(r,3))}var Ng=ll(Cl),Cg=ll(kl);function kg(e,r){return He(Kr(e,r),1)}function Og(e,r){return He(Kr(e,r),ot)}function xg(e,r,a){return a=a===t?1:ie(a),He(Kr(e,r),a)}function Pl(e,r){var a=ne(e)?Cn:Ut;return a(e,Y(r,3))}function $l(e,r){var a=ne(e)?Kp:Ru;return a(e,Y(r,3))}var Rg=Gr(function(e,r,a){Te.call(e,a)?e[a].push(r):Tt(e,a,[r])});function Lg(e,r,a,c){e=dn(e)?e:Ni(e),a=a&&!c?ie(a):0;var f=e.length;return a<0&&(a=Qe(f+a,0)),is(e)?a<=f&&e.indexOf(r,a)>-1:!!f&&Ei(e,r,a)>-1}var Bg=se(function(e,r,a){var c=-1,f=typeof r=="function",m=dn(e)?A(e.length):[];return Ut(e,function(g){m[++c]=f?Tn(r,g,a):Ji(g,r,a)}),m}),Pg=Gr(function(e,r,a){Tt(e,a,r)});function Kr(e,r){var a=ne(e)?Fe:Vu;return a(e,Y(r,3))}function $g(e,r,a,c){return e==null?[]:(ne(r)||(r=r==null?[]:[r]),a=c?t:a,ne(a)||(a=a==null?[]:[a]),Wu(e,r,a))}var Ug=Gr(function(e,r,a){e[a?0:1].push(r)},function(){return[[],[]]});function Mg(e,r,a){var c=ne(e)?Xs:mu,f=arguments.length<3;return c(e,Y(r,4),a,f,Ut)}function Vg(e,r,a){var c=ne(e)?Zp:mu,f=arguments.length<3;return c(e,Y(r,4),a,f,Ru)}function jg(e,r){var a=ne(e)?Lt:Lu;return a(e,ns(Y(r,3)))}function Gg(e){var r=ne(e)?Cu:Lh;return r(e)}function qg(e,r,a){(a?an(e,r,a):r===t)?r=1:r=ie(r);var c=ne(e)?ph:Bh;return c(e,r)}function Wg(e){var r=ne(e)?dh:$h;return r(e)}function Qg(e){if(e==null)return 0;if(dn(e))return is(e)?Ti(e):e.length;var r=nn(e);return r==Vn||r==jn?e.size:Eo(e).length}function zg(e,r,a){var c=ne(e)?Ks:Uh;return a&&an(e,r,a)&&(r=t),c(e,Y(r,3))}var Yg=se(function(e,r){if(e==null)return[];var a=r.length;return a>1&&an(e,r[0],r[1])?r=[]:a>2&&an(r[0],r[1],r[2])&&(r=[r[0]]),Wu(e,He(r,1),[])}),Zr=Fd||function(){return Je.Date.now()};function Jg(e,r){if(typeof r!="function")throw new kn(l);return e=ie(e),function(){if(--e<1)return r.apply(this,arguments)}}function Ul(e,r,a){return r=a?t:r,r=e&&r==null?e.length:r,Dt(e,Ke,t,t,t,t,r)}function Ml(e,r){var a;if(typeof r!="function")throw new kn(l);return e=ie(e),function(){return--e>0&&(a=r.apply(this,arguments)),e<=1&&(r=t),a}}var Vo=se(function(e,r,a){var c=X;if(a.length){var f=Pt(a,wi(Vo));c|=Re}return Dt(e,c,r,a,f)}),Vl=se(function(e,r,a){var c=X|he;if(a.length){var f=Pt(a,wi(Vl));c|=Re}return Dt(r,c,e,a,f)});function jl(e,r,a){r=a?t:r;var c=Dt(e,be,t,t,t,t,t,r);return c.placeholder=jl.placeholder,c}function Gl(e,r,a){r=a?t:r;var c=Dt(e,Ce,t,t,t,t,t,r);return c.placeholder=Gl.placeholder,c}function ql(e,r,a){var c,f,m,g,T,_,F=0,N=!1,x=!1,B=!0;if(typeof e!="function")throw new kn(l);r=Bn(r)||0,ke(a)&&(N=!!a.leading,x="maxWait"in a,m=x?Qe(Bn(a.maxWait)||0,r):m,B="trailing"in a?!!a.trailing:B);function G(Me){var Qn=c,bt=f;return c=f=t,F=Me,g=e.apply(bt,Qn),g}function J(Me){return F=Me,T=er(oe,r),N?G(Me):g}function re(Me){var Qn=Me-_,bt=Me-F,lc=r-Qn;return x?en(lc,m-bt):lc}function H(Me){var Qn=Me-_,bt=Me-F;return _===t||Qn>=r||Qn<0||x&&bt>=m}function oe(){var Me=Zr();if(H(Me))return fe(Me);T=er(oe,re(Me))}function fe(Me){return T=t,B&&c?G(Me):(c=f=t,g)}function vn(){T!==t&&el(T),F=0,c=_=f=T=t}function un(){return T===t?g:fe(Zr())}function An(){var Me=Zr(),Qn=H(Me);if(c=arguments,f=this,_=Me,Qn){if(T===t)return J(_);if(x)return el(T),T=er(oe,r),G(_)}return T===t&&(T=er(oe,r)),g}return An.cancel=vn,An.flush=un,An}var Hg=se(function(e,r){return xu(e,1,r)}),Xg=se(function(e,r,a){return xu(e,Bn(r)||0,a)});function Kg(e){return Dt(e,k)}function es(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new kn(l);var a=function(){var c=arguments,f=r?r.apply(this,c):c[0],m=a.cache;if(m.has(f))return m.get(f);var g=e.apply(this,c);return a.cache=m.set(f,g)||m,g};return a.cache=new(es.Cache||yt),a}es.Cache=yt;function ns(e){if(typeof e!="function")throw new kn(l);return function(){var r=arguments;switch(r.length){case 0:return!e.call(this);case 1:return!e.call(this,r[0]);case 2:return!e.call(this,r[0],r[1]);case 3:return!e.call(this,r[0],r[1],r[2])}return!e.apply(this,r)}}function Zg(e){return Ml(2,e)}var e0=Mh(function(e,r){r=r.length==1&&ne(r[0])?Fe(r[0],Dn(Y())):Fe(He(r,1),Dn(Y()));var a=r.length;return se(function(c){for(var f=-1,m=en(c.length,a);++f<m;)c[f]=r[f].call(this,c[f]);return Tn(e,this,c)})}),jo=se(function(e,r){var a=Pt(r,wi(jo));return Dt(e,Re,t,r,a)}),Wl=se(function(e,r){var a=Pt(r,wi(Wl));return Dt(e,rn,t,r,a)}),n0=It(function(e,r){return Dt(e,mt,t,t,t,r)});function t0(e,r){if(typeof e!="function")throw new kn(l);return r=r===t?r:ie(r),se(e,r)}function i0(e,r){if(typeof e!="function")throw new kn(l);return r=r==null?0:Qe(ie(r),0),se(function(a){var c=a[r],f=jt(a,0,r);return c&&Bt(f,c),Tn(e,this,f)})}function r0(e,r,a){var c=!0,f=!0;if(typeof e!="function")throw new kn(l);return ke(a)&&(c="leading"in a?!!a.leading:c,f="trailing"in a?!!a.trailing:f),ql(e,r,{leading:c,maxWait:r,trailing:f})}function s0(e){return Ul(e,1)}function o0(e,r){return jo(So(r),e)}function a0(){if(!arguments.length)return[];var e=arguments[0];return ne(e)?e:[e]}function u0(e){return xn(e,O)}function l0(e,r){return r=typeof r=="function"?r:t,xn(e,O,r)}function c0(e){return xn(e,I|O)}function f0(e,r){return r=typeof r=="function"?r:t,xn(e,I|O,r)}function p0(e,r){return r==null||Ou(e,r,ze(r))}function Wn(e,r){return e===r||e!==e&&r!==r}var d0=zr(ho),h0=zr(function(e,r){return e>=r}),oi=$u(function(){return arguments}())?$u:function(e){return Le(e)&&Te.call(e,"callee")&&!Au.call(e,"callee")},ne=A.isArray,m0=su?Dn(su):vh;function dn(e){return e!=null&&ts(e.length)&&!vt(e)}function Ue(e){return Le(e)&&dn(e)}function g0(e){return e===!0||e===!1||Le(e)&&on(e)==ge}var Gt=Cd||Zo,E0=ou?Dn(ou):Ah;function y0(e){return Le(e)&&e.nodeType===1&&!nr(e)}function T0(e){if(e==null)return!0;if(dn(e)&&(ne(e)||typeof e=="string"||typeof e.splice=="function"||Gt(e)||Fi(e)||oi(e)))return!e.length;var r=nn(e);if(r==Vn||r==jn)return!e.size;if(Zi(e))return!Eo(e).length;for(var a in e)if(Te.call(e,a))return!1;return!0}function D0(e,r){return Hi(e,r)}function I0(e,r,a){a=typeof a=="function"?a:t;var c=a?a(e,r):t;return c===t?Hi(e,r,t,a):!!c}function Go(e){if(!Le(e))return!1;var r=on(e);return r==Rt||r==Li||typeof e.message=="string"&&typeof e.name=="string"&&!nr(e)}function _0(e){return typeof e=="number"&&Su(e)}function vt(e){if(!ke(e))return!1;var r=on(e);return r==Ze||r==xa||r==$e||r==Qf}function Ql(e){return typeof e=="number"&&e==ie(e)}function ts(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Mn}function ke(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}function Le(e){return e!=null&&typeof e=="object"}var zl=au?Dn(au):Sh;function v0(e,r){return e===r||go(e,r,xo(r))}function A0(e,r,a){return a=typeof a=="function"?a:t,go(e,r,xo(r),a)}function b0(e){return Yl(e)&&e!=+e}function S0(e){if(lm(e))throw new ee(u);return Uu(e)}function w0(e){return e===null}function F0(e){return e==null}function Yl(e){return typeof e=="number"||Le(e)&&on(e)==Bi}function nr(e){if(!Le(e)||on(e)!=gt)return!1;var r=Nr(e);if(r===null)return!0;var a=Te.call(r,"constructor")&&r.constructor;return typeof a=="function"&&a instanceof a&&br.call(a)==Ad}var qo=uu?Dn(uu):wh;function N0(e){return Ql(e)&&e>=-Mn&&e<=Mn}var Jl=lu?Dn(lu):Fh;function is(e){return typeof e=="string"||!ne(e)&&Le(e)&&on(e)==$i}function _n(e){return typeof e=="symbol"||Le(e)&&on(e)==gr}var Fi=cu?Dn(cu):Nh;function C0(e){return e===t}function k0(e){return Le(e)&&nn(e)==Ui}function O0(e){return Le(e)&&on(e)==Yf}var x0=zr(yo),R0=zr(function(e,r){return e<=r});function Hl(e){if(!e)return[];if(dn(e))return is(e)?Gn(e):pn(e);if(ji&&e[ji])return pd(e[ji]());var r=nn(e),a=r==Vn?ro:r==jn?_r:Ni;return a(e)}function At(e){if(!e)return e===0?e:0;if(e=Bn(e),e===ot||e===-ot){var r=e<0?-1:1;return r*hi}return e===e?e:0}function ie(e){var r=At(e),a=r%1;return r===r?a?r-a:r:0}function Xl(e){return e?ti(ie(e),0,wn):0}function Bn(e){if(typeof e=="number")return e;if(_n(e))return Xt;if(ke(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=ke(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=gu(e);var a=mp.test(e);return a||Ep.test(e)?Jp(e.slice(2),a?2:8):hp.test(e)?Xt:+e}function Kl(e){return ut(e,hn(e))}function L0(e){return e?ti(ie(e),-Mn,Mn):e===0?e:0}function Ee(e){return e==null?"":In(e)}var B0=bi(function(e,r){if(Zi(r)||dn(r)){ut(r,ze(r),e);return}for(var a in r)Te.call(r,a)&&zi(e,a,r[a])}),Zl=bi(function(e,r){ut(r,hn(r),e)}),rs=bi(function(e,r,a,c){ut(r,hn(r),e,c)}),P0=bi(function(e,r,a,c){ut(r,ze(r),e,c)}),$0=It(co);function U0(e,r){var a=Ai(e);return r==null?a:ku(a,r)}var M0=se(function(e,r){e=ve(e);var a=-1,c=r.length,f=c>2?r[2]:t;for(f&&an(r[0],r[1],f)&&(c=1);++a<c;)for(var m=r[a],g=hn(m),T=-1,_=g.length;++T<_;){var F=g[T],N=e[F];(N===t||Wn(N,Ii[F])&&!Te.call(e,F))&&(e[F]=m[F])}return e}),V0=se(function(e){return e.push(t,gl),Tn(ec,t,e)});function j0(e,r){return pu(e,Y(r,3),at)}function G0(e,r){return pu(e,Y(r,3),po)}function q0(e,r){return e==null?e:fo(e,Y(r,3),hn)}function W0(e,r){return e==null?e:Bu(e,Y(r,3),hn)}function Q0(e,r){return e&&at(e,Y(r,3))}function z0(e,r){return e&&po(e,Y(r,3))}function Y0(e){return e==null?[]:Ur(e,ze(e))}function J0(e){return e==null?[]:Ur(e,hn(e))}function Wo(e,r,a){var c=e==null?t:ii(e,r);return c===t?a:c}function H0(e,r){return e!=null&&Tl(e,r,Th)}function Qo(e,r){return e!=null&&Tl(e,r,Dh)}var X0=fl(function(e,r,a){r!=null&&typeof r.toString!="function"&&(r=Sr.call(r)),e[r]=a},Yo(mn)),K0=fl(function(e,r,a){r!=null&&typeof r.toString!="function"&&(r=Sr.call(r)),Te.call(e,r)?e[r].push(a):e[r]=[a]},Y),Z0=se(Ji);function ze(e){return dn(e)?Nu(e):Eo(e)}function hn(e){return dn(e)?Nu(e,!0):Ch(e)}function eE(e,r){var a={};return r=Y(r,3),at(e,function(c,f,m){Tt(a,r(c,f,m),c)}),a}function nE(e,r){var a={};return r=Y(r,3),at(e,function(c,f,m){Tt(a,f,r(c,f,m))}),a}var tE=bi(function(e,r,a){Mr(e,r,a)}),ec=bi(function(e,r,a,c){Mr(e,r,a,c)}),iE=It(function(e,r){var a={};if(e==null)return a;var c=!1;r=Fe(r,function(m){return m=Vt(m,e),c||(c=m.length>1),m}),ut(e,ko(e),a),c&&(a=xn(a,I|w|O,Xh));for(var f=r.length;f--;)vo(a,r[f]);return a});function rE(e,r){return nc(e,ns(Y(r)))}var sE=It(function(e,r){return e==null?{}:Oh(e,r)});function nc(e,r){if(e==null)return{};var a=Fe(ko(e),function(c){return[c]});return r=Y(r),Qu(e,a,function(c,f){return r(c,f[0])})}function oE(e,r,a){r=Vt(r,e);var c=-1,f=r.length;for(f||(f=1,e=t);++c<f;){var m=e==null?t:e[lt(r[c])];m===t&&(c=f,m=a),e=vt(m)?m.call(e):m}return e}function aE(e,r,a){return e==null?e:Xi(e,r,a)}function uE(e,r,a,c){return c=typeof c=="function"?c:t,e==null?e:Xi(e,r,a,c)}var tc=hl(ze),ic=hl(hn);function lE(e,r,a){var c=ne(e),f=c||Gt(e)||Fi(e);if(r=Y(r,4),a==null){var m=e&&e.constructor;f?a=c?new m:[]:ke(e)?a=vt(m)?Ai(Nr(e)):{}:a={}}return(f?Cn:at)(e,function(g,T,_){return r(a,g,T,_)}),a}function cE(e,r){return e==null?!0:vo(e,r)}function fE(e,r,a){return e==null?e:Xu(e,r,So(a))}function pE(e,r,a,c){return c=typeof c=="function"?c:t,e==null?e:Xu(e,r,So(a),c)}function Ni(e){return e==null?[]:io(e,ze(e))}function dE(e){return e==null?[]:io(e,hn(e))}function hE(e,r,a){return a===t&&(a=r,r=t),a!==t&&(a=Bn(a),a=a===a?a:0),r!==t&&(r=Bn(r),r=r===r?r:0),ti(Bn(e),r,a)}function mE(e,r,a){return r=At(r),a===t?(a=r,r=0):a=At(a),e=Bn(e),Ih(e,r,a)}function gE(e,r,a){if(a&&typeof a!="boolean"&&an(e,r,a)&&(r=a=t),a===t&&(typeof r=="boolean"?(a=r,r=t):typeof e=="boolean"&&(a=e,e=t)),e===t&&r===t?(e=0,r=1):(e=At(e),r===t?(r=e,e=0):r=At(r)),e>r){var c=e;e=r,r=c}if(a||e%1||r%1){var f=wu();return en(e+f*(r-e+Yp("1e-"+((f+"").length-1))),r)}return Do(e,r)}var EE=Si(function(e,r,a){return r=r.toLowerCase(),e+(a?rc(r):r)});function rc(e){return zo(Ee(e).toLowerCase())}function sc(e){return e=Ee(e),e&&e.replace(Tp,ad).replace($p,"")}function yE(e,r,a){e=Ee(e),r=In(r);var c=e.length;a=a===t?c:ti(ie(a),0,c);var f=a;return a-=r.length,a>=0&&e.slice(a,f)==r}function TE(e){return e=Ee(e),e&&Zf.test(e)?e.replace(Ba,ud):e}function DE(e){return e=Ee(e),e&&sp.test(e)?e.replace(Vs,"\\$&"):e}var IE=Si(function(e,r,a){return e+(a?"-":"")+r.toLowerCase()}),_E=Si(function(e,r,a){return e+(a?" ":"")+r.toLowerCase()}),vE=ul("toLowerCase");function AE(e,r,a){e=Ee(e),r=ie(r);var c=r?Ti(e):0;if(!r||c>=r)return e;var f=(r-c)/2;return Qr(xr(f),a)+e+Qr(Or(f),a)}function bE(e,r,a){e=Ee(e),r=ie(r);var c=r?Ti(e):0;return r&&c<r?e+Qr(r-c,a):e}function SE(e,r,a){e=Ee(e),r=ie(r);var c=r?Ti(e):0;return r&&c<r?Qr(r-c,a)+e:e}function wE(e,r,a){return a||r==null?r=0:r&&(r=+r),Rd(Ee(e).replace(js,""),r||0)}function FE(e,r,a){return(a?an(e,r,a):r===t)?r=1:r=ie(r),Io(Ee(e),r)}function NE(){var e=arguments,r=Ee(e[0]);return e.length<3?r:r.replace(e[1],e[2])}var CE=Si(function(e,r,a){return e+(a?"_":"")+r.toLowerCase()});function kE(e,r,a){return a&&typeof a!="number"&&an(e,r,a)&&(r=a=t),a=a===t?wn:a>>>0,a?(e=Ee(e),e&&(typeof r=="string"||r!=null&&!qo(r))&&(r=In(r),!r&&yi(e))?jt(Gn(e),0,a):e.split(r,a)):[]}var OE=Si(function(e,r,a){return e+(a?" ":"")+zo(r)});function xE(e,r,a){return e=Ee(e),a=a==null?0:ti(ie(a),0,e.length),r=In(r),e.slice(a,a+r.length)==r}function RE(e,r,a){var c=h.templateSettings;a&&an(e,r,a)&&(r=t),e=Ee(e),r=rs({},r,c,ml);var f=rs({},r.imports,c.imports,ml),m=ze(f),g=io(f,m),T,_,F=0,N=r.interpolate||Er,x="__p += '",B=so((r.escape||Er).source+"|"+N.source+"|"+(N===Pa?dp:Er).source+"|"+(r.evaluate||Er).source+"|$","g"),G="//# sourceURL="+(Te.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Gp+"]")+`
`;e.replace(B,function(H,oe,fe,vn,un,An){return fe||(fe=vn),x+=e.slice(F,An).replace(Dp,ld),oe&&(T=!0,x+=`' +
__e(`+oe+`) +
'`),un&&(_=!0,x+=`';
`+un+`;
__p += '`),fe&&(x+=`' +
((__t = (`+fe+`)) == null ? '' : __t) +
'`),F=An+H.length,H}),x+=`';
`;var J=Te.call(r,"variable")&&r.variable;if(!J)x=`with (obj) {
`+x+`
}
`;else if(fp.test(J))throw new ee(p);x=(_?x.replace(Jf,""):x).replace(Hf,"$1").replace(Xf,"$1;"),x="function("+(J||"obj")+`) {
`+(J?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(T?", __e = _.escape":"")+(_?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+x+`return __p
}`;var re=ac(function(){return de(m,G+"return "+x).apply(t,g)});if(re.source=x,Go(re))throw re;return re}function LE(e){return Ee(e).toLowerCase()}function BE(e){return Ee(e).toUpperCase()}function PE(e,r,a){if(e=Ee(e),e&&(a||r===t))return gu(e);if(!e||!(r=In(r)))return e;var c=Gn(e),f=Gn(r),m=Eu(c,f),g=yu(c,f)+1;return jt(c,m,g).join("")}function $E(e,r,a){if(e=Ee(e),e&&(a||r===t))return e.slice(0,Du(e)+1);if(!e||!(r=In(r)))return e;var c=Gn(e),f=yu(c,Gn(r))+1;return jt(c,0,f).join("")}function UE(e,r,a){if(e=Ee(e),e&&(a||r===t))return e.replace(js,"");if(!e||!(r=In(r)))return e;var c=Gn(e),f=Eu(c,Gn(r));return jt(c,f).join("")}function ME(e,r){var a=Z,c=sn;if(ke(r)){var f="separator"in r?r.separator:f;a="length"in r?ie(r.length):a,c="omission"in r?In(r.omission):c}e=Ee(e);var m=e.length;if(yi(e)){var g=Gn(e);m=g.length}if(a>=m)return e;var T=a-Ti(c);if(T<1)return c;var _=g?jt(g,0,T).join(""):e.slice(0,T);if(f===t)return _+c;if(g&&(T+=_.length-T),qo(f)){if(e.slice(T).search(f)){var F,N=_;for(f.global||(f=so(f.source,Ee($a.exec(f))+"g")),f.lastIndex=0;F=f.exec(N);)var x=F.index;_=_.slice(0,x===t?T:x)}}else if(e.indexOf(In(f),T)!=T){var B=_.lastIndexOf(f);B>-1&&(_=_.slice(0,B))}return _+c}function VE(e){return e=Ee(e),e&&Kf.test(e)?e.replace(La,gd):e}var jE=Si(function(e,r,a){return e+(a?" ":"")+r.toUpperCase()}),zo=ul("toUpperCase");function oc(e,r,a){return e=Ee(e),r=a?t:r,r===t?fd(e)?Td(e):td(e):e.match(r)||[]}var ac=se(function(e,r){try{return Tn(e,t,r)}catch(a){return Go(a)?a:new ee(a)}}),GE=It(function(e,r){return Cn(r,function(a){a=lt(a),Tt(e,a,Vo(e[a],e))}),e});function qE(e){var r=e==null?0:e.length,a=Y();return e=r?Fe(e,function(c){if(typeof c[1]!="function")throw new kn(l);return[a(c[0]),c[1]]}):[],se(function(c){for(var f=-1;++f<r;){var m=e[f];if(Tn(m[0],this,c))return Tn(m[1],this,c)}})}function WE(e){return gh(xn(e,I))}function Yo(e){return function(){return e}}function QE(e,r){return e==null||e!==e?r:e}var zE=cl(),YE=cl(!0);function mn(e){return e}function Jo(e){return Mu(typeof e=="function"?e:xn(e,I))}function JE(e){return ju(xn(e,I))}function HE(e,r){return Gu(e,xn(r,I))}var XE=se(function(e,r){return function(a){return Ji(a,e,r)}}),KE=se(function(e,r){return function(a){return Ji(e,a,r)}});function Ho(e,r,a){var c=ze(r),f=Ur(r,c);a==null&&!(ke(r)&&(f.length||!c.length))&&(a=r,r=e,e=this,f=Ur(r,ze(r)));var m=!(ke(a)&&"chain"in a)||!!a.chain,g=vt(e);return Cn(f,function(T){var _=r[T];e[T]=_,g&&(e.prototype[T]=function(){var F=this.__chain__;if(m||F){var N=e(this.__wrapped__),x=N.__actions__=pn(this.__actions__);return x.push({func:_,args:arguments,thisArg:e}),N.__chain__=F,N}return _.apply(e,Bt([this.value()],arguments))})}),e}function ZE(){return Je._===this&&(Je._=bd),this}function Xo(){}function ey(e){return e=ie(e),se(function(r){return qu(r,e)})}var ny=Fo(Fe),ty=Fo(fu),iy=Fo(Ks);function uc(e){return Lo(e)?Zs(lt(e)):xh(e)}function ry(e){return function(r){return e==null?t:ii(e,r)}}var sy=pl(),oy=pl(!0);function Ko(){return[]}function Zo(){return!1}function ay(){return{}}function uy(){return""}function ly(){return!0}function cy(e,r){if(e=ie(e),e<1||e>Mn)return[];var a=wn,c=en(e,wn);r=Y(r),e-=wn;for(var f=to(c,r);++a<e;)r(a);return f}function fy(e){return ne(e)?Fe(e,lt):_n(e)?[e]:pn(Fl(Ee(e)))}function py(e){var r=++vd;return Ee(e)+r}var dy=Wr(function(e,r){return e+r},0),hy=No("ceil"),my=Wr(function(e,r){return e/r},1),gy=No("floor");function Ey(e){return e&&e.length?$r(e,mn,ho):t}function yy(e,r){return e&&e.length?$r(e,Y(r,2),ho):t}function Ty(e){return hu(e,mn)}function Dy(e,r){return hu(e,Y(r,2))}function Iy(e){return e&&e.length?$r(e,mn,yo):t}function _y(e,r){return e&&e.length?$r(e,Y(r,2),yo):t}var vy=Wr(function(e,r){return e*r},1),Ay=No("round"),by=Wr(function(e,r){return e-r},0);function Sy(e){return e&&e.length?no(e,mn):0}function wy(e,r){return e&&e.length?no(e,Y(r,2)):0}return h.after=Jg,h.ary=Ul,h.assign=B0,h.assignIn=Zl,h.assignInWith=rs,h.assignWith=P0,h.at=$0,h.before=Ml,h.bind=Vo,h.bindAll=GE,h.bindKey=Vl,h.castArray=a0,h.chain=Bl,h.chunk=gm,h.compact=Em,h.concat=ym,h.cond=qE,h.conforms=WE,h.constant=Yo,h.countBy=Sg,h.create=U0,h.curry=jl,h.curryRight=Gl,h.debounce=ql,h.defaults=M0,h.defaultsDeep=V0,h.defer=Hg,h.delay=Xg,h.difference=Tm,h.differenceBy=Dm,h.differenceWith=Im,h.drop=_m,h.dropRight=vm,h.dropRightWhile=Am,h.dropWhile=bm,h.fill=Sm,h.filter=Fg,h.flatMap=kg,h.flatMapDeep=Og,h.flatMapDepth=xg,h.flatten=Ol,h.flattenDeep=wm,h.flattenDepth=Fm,h.flip=Kg,h.flow=zE,h.flowRight=YE,h.fromPairs=Nm,h.functions=Y0,h.functionsIn=J0,h.groupBy=Rg,h.initial=km,h.intersection=Om,h.intersectionBy=xm,h.intersectionWith=Rm,h.invert=X0,h.invertBy=K0,h.invokeMap=Bg,h.iteratee=Jo,h.keyBy=Pg,h.keys=ze,h.keysIn=hn,h.map=Kr,h.mapKeys=eE,h.mapValues=nE,h.matches=JE,h.matchesProperty=HE,h.memoize=es,h.merge=tE,h.mergeWith=ec,h.method=XE,h.methodOf=KE,h.mixin=Ho,h.negate=ns,h.nthArg=ey,h.omit=iE,h.omitBy=rE,h.once=Zg,h.orderBy=$g,h.over=ny,h.overArgs=e0,h.overEvery=ty,h.overSome=iy,h.partial=jo,h.partialRight=Wl,h.partition=Ug,h.pick=sE,h.pickBy=nc,h.property=uc,h.propertyOf=ry,h.pull=$m,h.pullAll=Rl,h.pullAllBy=Um,h.pullAllWith=Mm,h.pullAt=Vm,h.range=sy,h.rangeRight=oy,h.rearg=n0,h.reject=jg,h.remove=jm,h.rest=t0,h.reverse=Uo,h.sampleSize=qg,h.set=aE,h.setWith=uE,h.shuffle=Wg,h.slice=Gm,h.sortBy=Yg,h.sortedUniq=Hm,h.sortedUniqBy=Xm,h.split=kE,h.spread=i0,h.tail=Km,h.take=Zm,h.takeRight=eg,h.takeRightWhile=ng,h.takeWhile=tg,h.tap=Eg,h.throttle=r0,h.thru=Xr,h.toArray=Hl,h.toPairs=tc,h.toPairsIn=ic,h.toPath=fy,h.toPlainObject=Kl,h.transform=lE,h.unary=s0,h.union=ig,h.unionBy=rg,h.unionWith=sg,h.uniq=og,h.uniqBy=ag,h.uniqWith=ug,h.unset=cE,h.unzip=Mo,h.unzipWith=Ll,h.update=fE,h.updateWith=pE,h.values=Ni,h.valuesIn=dE,h.without=lg,h.words=oc,h.wrap=o0,h.xor=cg,h.xorBy=fg,h.xorWith=pg,h.zip=dg,h.zipObject=hg,h.zipObjectDeep=mg,h.zipWith=gg,h.entries=tc,h.entriesIn=ic,h.extend=Zl,h.extendWith=rs,Ho(h,h),h.add=dy,h.attempt=ac,h.camelCase=EE,h.capitalize=rc,h.ceil=hy,h.clamp=hE,h.clone=u0,h.cloneDeep=c0,h.cloneDeepWith=f0,h.cloneWith=l0,h.conformsTo=p0,h.deburr=sc,h.defaultTo=QE,h.divide=my,h.endsWith=yE,h.eq=Wn,h.escape=TE,h.escapeRegExp=DE,h.every=wg,h.find=Ng,h.findIndex=Cl,h.findKey=j0,h.findLast=Cg,h.findLastIndex=kl,h.findLastKey=G0,h.floor=gy,h.forEach=Pl,h.forEachRight=$l,h.forIn=q0,h.forInRight=W0,h.forOwn=Q0,h.forOwnRight=z0,h.get=Wo,h.gt=d0,h.gte=h0,h.has=H0,h.hasIn=Qo,h.head=xl,h.identity=mn,h.includes=Lg,h.indexOf=Cm,h.inRange=mE,h.invoke=Z0,h.isArguments=oi,h.isArray=ne,h.isArrayBuffer=m0,h.isArrayLike=dn,h.isArrayLikeObject=Ue,h.isBoolean=g0,h.isBuffer=Gt,h.isDate=E0,h.isElement=y0,h.isEmpty=T0,h.isEqual=D0,h.isEqualWith=I0,h.isError=Go,h.isFinite=_0,h.isFunction=vt,h.isInteger=Ql,h.isLength=ts,h.isMap=zl,h.isMatch=v0,h.isMatchWith=A0,h.isNaN=b0,h.isNative=S0,h.isNil=F0,h.isNull=w0,h.isNumber=Yl,h.isObject=ke,h.isObjectLike=Le,h.isPlainObject=nr,h.isRegExp=qo,h.isSafeInteger=N0,h.isSet=Jl,h.isString=is,h.isSymbol=_n,h.isTypedArray=Fi,h.isUndefined=C0,h.isWeakMap=k0,h.isWeakSet=O0,h.join=Lm,h.kebabCase=IE,h.last=Ln,h.lastIndexOf=Bm,h.lowerCase=_E,h.lowerFirst=vE,h.lt=x0,h.lte=R0,h.max=Ey,h.maxBy=yy,h.mean=Ty,h.meanBy=Dy,h.min=Iy,h.minBy=_y,h.stubArray=Ko,h.stubFalse=Zo,h.stubObject=ay,h.stubString=uy,h.stubTrue=ly,h.multiply=vy,h.nth=Pm,h.noConflict=ZE,h.noop=Xo,h.now=Zr,h.pad=AE,h.padEnd=bE,h.padStart=SE,h.parseInt=wE,h.random=gE,h.reduce=Mg,h.reduceRight=Vg,h.repeat=FE,h.replace=NE,h.result=oE,h.round=Ay,h.runInContext=D,h.sample=Gg,h.size=Qg,h.snakeCase=CE,h.some=zg,h.sortedIndex=qm,h.sortedIndexBy=Wm,h.sortedIndexOf=Qm,h.sortedLastIndex=zm,h.sortedLastIndexBy=Ym,h.sortedLastIndexOf=Jm,h.startCase=OE,h.startsWith=xE,h.subtract=by,h.sum=Sy,h.sumBy=wy,h.template=RE,h.times=cy,h.toFinite=At,h.toInteger=ie,h.toLength=Xl,h.toLower=LE,h.toNumber=Bn,h.toSafeInteger=L0,h.toString=Ee,h.toUpper=BE,h.trim=PE,h.trimEnd=$E,h.trimStart=UE,h.truncate=ME,h.unescape=VE,h.uniqueId=py,h.upperCase=jE,h.upperFirst=zo,h.each=Pl,h.eachRight=$l,h.first=xl,Ho(h,function(){var e={};return at(h,function(r,a){Te.call(h.prototype,a)||(e[a]=r)}),e}(),{chain:!1}),h.VERSION=s,Cn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){h[e].placeholder=h}),Cn(["drop","take"],function(e,r){le.prototype[e]=function(a){a=a===t?1:Qe(ie(a),0);var c=this.__filtered__&&!r?new le(this):this.clone();return c.__filtered__?c.__takeCount__=en(a,c.__takeCount__):c.__views__.push({size:en(a,wn),type:e+(c.__dir__<0?"Right":"")}),c},le.prototype[e+"Right"]=function(a){return this.reverse()[e](a).reverse()}}),Cn(["filter","map","takeWhile"],function(e,r){var a=r+1,c=a==hr||a==mr;le.prototype[e]=function(f){var m=this.clone();return m.__iteratees__.push({iteratee:Y(f,3),type:a}),m.__filtered__=m.__filtered__||c,m}}),Cn(["head","last"],function(e,r){var a="take"+(r?"Right":"");le.prototype[e]=function(){return this[a](1).value()[0]}}),Cn(["initial","tail"],function(e,r){var a="drop"+(r?"":"Right");le.prototype[e]=function(){return this.__filtered__?new le(this):this[a](1)}}),le.prototype.compact=function(){return this.filter(mn)},le.prototype.find=function(e){return this.filter(e).head()},le.prototype.findLast=function(e){return this.reverse().find(e)},le.prototype.invokeMap=se(function(e,r){return typeof e=="function"?new le(this):this.map(function(a){return Ji(a,e,r)})}),le.prototype.reject=function(e){return this.filter(ns(Y(e)))},le.prototype.slice=function(e,r){e=ie(e);var a=this;return a.__filtered__&&(e>0||r<0)?new le(a):(e<0?a=a.takeRight(-e):e&&(a=a.drop(e)),r!==t&&(r=ie(r),a=r<0?a.dropRight(-r):a.take(r-e)),a)},le.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},le.prototype.toArray=function(){return this.take(wn)},at(le.prototype,function(e,r){var a=/^(?:filter|find|map|reject)|While$/.test(r),c=/^(?:head|last)$/.test(r),f=h[c?"take"+(r=="last"?"Right":""):r],m=c||/^find/.test(r);f&&(h.prototype[r]=function(){var g=this.__wrapped__,T=c?[1]:arguments,_=g instanceof le,F=T[0],N=_||ne(g),x=function(oe){var fe=f.apply(h,Bt([oe],T));return c&&B?fe[0]:fe};N&&a&&typeof F=="function"&&F.length!=1&&(_=N=!1);var B=this.__chain__,G=!!this.__actions__.length,J=m&&!B,re=_&&!G;if(!m&&N){g=re?g:new le(this);var H=e.apply(g,T);return H.__actions__.push({func:Xr,args:[x],thisArg:t}),new On(H,B)}return J&&re?e.apply(this,T):(H=this.thru(x),J?c?H.value()[0]:H.value():H)})}),Cn(["pop","push","shift","sort","splice","unshift"],function(e){var r=vr[e],a=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",c=/^(?:pop|shift)$/.test(e);h.prototype[e]=function(){var f=arguments;if(c&&!this.__chain__){var m=this.value();return r.apply(ne(m)?m:[],f)}return this[a](function(g){return r.apply(ne(g)?g:[],f)})}}),at(le.prototype,function(e,r){var a=h[r];if(a){var c=a.name+"";Te.call(vi,c)||(vi[c]=[]),vi[c].push({name:r,func:a})}}),vi[qr(t,he).name]=[{name:"wrapper",func:t}],le.prototype.clone=Vd,le.prototype.reverse=jd,le.prototype.value=Gd,h.prototype.at=yg,h.prototype.chain=Tg,h.prototype.commit=Dg,h.prototype.next=Ig,h.prototype.plant=vg,h.prototype.reverse=Ag,h.prototype.toJSON=h.prototype.valueOf=h.prototype.value=bg,h.prototype.first=h.prototype.head,ji&&(h.prototype[ji]=_g),h},Di=Dd();Kt?((Kt.exports=Di)._=Di,Ys._=Di):Je._=Di}).call(tr)})(Es,Es.exports);var cD=Es.exports;const Ct=aD(cD),fD="/APIDoc",pD="Loayly and Promo",dD="https://assets.petco.com/petco/image/upload/f_auto,q_auto:best,dpr_2.0,w_139/hp-shop-by-pet-type-small-pet-562x562",hD='[{"title":"Loayly and Promo","content":"\\n  # Loayly and Promo GraphQL API documentations\\n  This is draft version\\n \\n  "}]',mD="true",rf={SITE_ROOT:fD,APP_TITLE:pD,APP_LOGO:dD,PAGES:hD,MAGIDOC_GENERATE:mD};function x_(i){return i.get(rf)}function Sa(i,n){return i.getOrDefault(rf,n)}function pe(i,n){if(!!!i)throw new Error(n)}function kt(i){return typeof i=="object"&&i!==null}function Xn(i,n){if(!!!i)throw new Error(n??"Unexpected invariant triggered.")}const gD=/\r\n|[\n\r]/g;function pa(i,n){let t=0,s=1;for(const o of i.body.matchAll(gD)){if(typeof o.index=="number"||Xn(!1),o.index>=n)break;t=o.index+o[0].length,s+=1}return{line:s,column:n+1-t}}function ED(i){return sf(i.source,pa(i.source,i.start))}function sf(i,n){const t=i.locationOffset.column-1,s="".padStart(t)+i.body,o=n.line-1,u=i.locationOffset.line-1,l=n.line+u,p=n.line===1?t:0,d=n.column+p,E=`${i.name}:${l}:${d}
`,y=s.split(/\r\n|[\n\r]/g),I=y[o];if(I.length>120){const w=Math.floor(d/80),O=d%80,R=[];for(let L=0;L<I.length;L+=80)R.push(I.slice(L,L+80));return E+kc([[`${l} |`,R[0]],...R.slice(1,w+1).map(L=>["|",L]),["|","^".padStart(O)],["|",R[w+1]]])}return E+kc([[`${l-1} |`,y[o-1]],[`${l} |`,I],["|","^".padStart(d)],[`${l+1} |`,y[o+1]]])}function kc(i){const n=i.filter(([s,o])=>o!==void 0),t=Math.max(...n.map(([s])=>s.length));return n.map(([s,o])=>s.padStart(t)+(o?" "+o:"")).join(`
`)}function yD(i){const n=i[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:i[1],positions:i[2],path:i[3],originalError:i[4],extensions:i[5]}:n}class q extends Error{constructor(n,...t){var s,o,u;const{nodes:l,source:p,positions:d,path:E,originalError:y,extensions:I}=yD(t);super(n),this.name="GraphQLError",this.path=E??void 0,this.originalError=y??void 0,this.nodes=Oc(Array.isArray(l)?l:l?[l]:void 0);const w=Oc((s=this.nodes)===null||s===void 0?void 0:s.map(R=>R.loc).filter(R=>R!=null));this.source=p??(w==null||(o=w[0])===null||o===void 0?void 0:o.source),this.positions=d??(w==null?void 0:w.map(R=>R.start)),this.locations=d&&p?d.map(R=>pa(p,R)):w==null?void 0:w.map(R=>pa(R.source,R.start));const O=kt(y==null?void 0:y.extensions)?y==null?void 0:y.extensions:void 0;this.extensions=(u=I??O)!==null&&u!==void 0?u:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),y!=null&&y.stack?Object.defineProperty(this,"stack",{value:y.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,q):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+ED(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+sf(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function Oc(i){return i===void 0||i.length===0?void 0:i}function Ye(i,n,t){return new q(`Syntax Error: ${t}`,{source:i,positions:[n]})}class TD{constructor(n,t,s){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class of{constructor(n,t,s,o,u,l){this.kind=n,this.start=t,this.end=s,this.line=o,this.column=u,this.value=l,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const af={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},DD=new Set(Object.keys(af));function xc(i){const n=i==null?void 0:i.kind;return typeof n=="string"&&DD.has(n)}var Pn;(function(i){i.QUERY="query",i.MUTATION="mutation",i.SUBSCRIPTION="subscription"})(Pn||(Pn={}));var z;(function(i){i.QUERY="QUERY",i.MUTATION="MUTATION",i.SUBSCRIPTION="SUBSCRIPTION",i.FIELD="FIELD",i.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",i.FRAGMENT_SPREAD="FRAGMENT_SPREAD",i.INLINE_FRAGMENT="INLINE_FRAGMENT",i.VARIABLE_DEFINITION="VARIABLE_DEFINITION",i.SCHEMA="SCHEMA",i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.FIELD_DEFINITION="FIELD_DEFINITION",i.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.ENUM_VALUE="ENUM_VALUE",i.INPUT_OBJECT="INPUT_OBJECT",i.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(z||(z={}));var v;(function(i){i.NAME="Name",i.DOCUMENT="Document",i.OPERATION_DEFINITION="OperationDefinition",i.VARIABLE_DEFINITION="VariableDefinition",i.SELECTION_SET="SelectionSet",i.FIELD="Field",i.ARGUMENT="Argument",i.FRAGMENT_SPREAD="FragmentSpread",i.INLINE_FRAGMENT="InlineFragment",i.FRAGMENT_DEFINITION="FragmentDefinition",i.VARIABLE="Variable",i.INT="IntValue",i.FLOAT="FloatValue",i.STRING="StringValue",i.BOOLEAN="BooleanValue",i.NULL="NullValue",i.ENUM="EnumValue",i.LIST="ListValue",i.OBJECT="ObjectValue",i.OBJECT_FIELD="ObjectField",i.DIRECTIVE="Directive",i.NAMED_TYPE="NamedType",i.LIST_TYPE="ListType",i.NON_NULL_TYPE="NonNullType",i.SCHEMA_DEFINITION="SchemaDefinition",i.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",i.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",i.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",i.FIELD_DEFINITION="FieldDefinition",i.INPUT_VALUE_DEFINITION="InputValueDefinition",i.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",i.UNION_TYPE_DEFINITION="UnionTypeDefinition",i.ENUM_TYPE_DEFINITION="EnumTypeDefinition",i.ENUM_VALUE_DEFINITION="EnumValueDefinition",i.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",i.DIRECTIVE_DEFINITION="DirectiveDefinition",i.SCHEMA_EXTENSION="SchemaExtension",i.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",i.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",i.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",i.UNION_TYPE_EXTENSION="UnionTypeExtension",i.ENUM_TYPE_EXTENSION="EnumTypeExtension",i.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(v||(v={}));function da(i){return i===9||i===32}function lr(i){return i>=48&&i<=57}function uf(i){return i>=97&&i<=122||i>=65&&i<=90}function wa(i){return uf(i)||i===95}function lf(i){return uf(i)||lr(i)||i===95}function ID(i){var n;let t=Number.MAX_SAFE_INTEGER,s=null,o=-1;for(let l=0;l<i.length;++l){var u;const p=i[l],d=_D(p);d!==p.length&&(s=(u=s)!==null&&u!==void 0?u:l,o=l,l!==0&&d<t&&(t=d))}return i.map((l,p)=>p===0?l:l.slice(t)).slice((n=s)!==null&&n!==void 0?n:0,o+1)}function _D(i){let n=0;for(;n<i.length&&da(i.charCodeAt(n));)++n;return n}function vD(i,n){const t=i.replace(/"""/g,'\\"""'),s=t.split(/\r\n|[\n\r]/g),o=s.length===1,u=s.length>1&&s.slice(1).every(O=>O.length===0||da(O.charCodeAt(0))),l=t.endsWith('\\"""'),p=i.endsWith('"')&&!l,d=i.endsWith("\\"),E=p||d,y=!(n!=null&&n.minimize)&&(!o||i.length>70||E||u||l);let I="";const w=o&&da(i.charCodeAt(0));return(y&&!w||u)&&(I+=`
`),I+=t,(y||E)&&(I+=`
`),'"""'+I+'"""'}var C;(function(i){i.SOF="<SOF>",i.EOF="<EOF>",i.BANG="!",i.DOLLAR="$",i.AMP="&",i.PAREN_L="(",i.PAREN_R=")",i.SPREAD="...",i.COLON=":",i.EQUALS="=",i.AT="@",i.BRACKET_L="[",i.BRACKET_R="]",i.BRACE_L="{",i.PIPE="|",i.BRACE_R="}",i.NAME="Name",i.INT="Int",i.FLOAT="Float",i.STRING="String",i.BLOCK_STRING="BlockString",i.COMMENT="Comment"})(C||(C={}));class AD{constructor(n){const t=new of(C.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==C.EOF)do if(n.next)n=n.next;else{const t=SD(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===C.COMMENT);return n}}function bD(i){return i===C.BANG||i===C.DOLLAR||i===C.AMP||i===C.PAREN_L||i===C.PAREN_R||i===C.SPREAD||i===C.COLON||i===C.EQUALS||i===C.AT||i===C.BRACKET_L||i===C.BRACKET_R||i===C.BRACE_L||i===C.PIPE||i===C.BRACE_R}function xi(i){return i>=0&&i<=55295||i>=57344&&i<=1114111}function As(i,n){return cf(i.charCodeAt(n))&&ff(i.charCodeAt(n+1))}function cf(i){return i>=55296&&i<=56319}function ff(i){return i>=56320&&i<=57343}function li(i,n){const t=i.source.body.codePointAt(n);if(t===void 0)return C.EOF;if(t>=32&&t<=126){const s=String.fromCodePoint(t);return s==='"'?`'"'`:`"${s}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function Ge(i,n,t,s,o){const u=i.line,l=1+t-i.lineStart;return new of(n,t,s,u,l,o)}function SD(i,n){const t=i.source.body,s=t.length;let o=n;for(;o<s;){const u=t.charCodeAt(o);switch(u){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++i.line,i.lineStart=o;continue;case 13:t.charCodeAt(o+1)===10?o+=2:++o,++i.line,i.lineStart=o;continue;case 35:return wD(i,o);case 33:return Ge(i,C.BANG,o,o+1);case 36:return Ge(i,C.DOLLAR,o,o+1);case 38:return Ge(i,C.AMP,o,o+1);case 40:return Ge(i,C.PAREN_L,o,o+1);case 41:return Ge(i,C.PAREN_R,o,o+1);case 46:if(t.charCodeAt(o+1)===46&&t.charCodeAt(o+2)===46)return Ge(i,C.SPREAD,o,o+3);break;case 58:return Ge(i,C.COLON,o,o+1);case 61:return Ge(i,C.EQUALS,o,o+1);case 64:return Ge(i,C.AT,o,o+1);case 91:return Ge(i,C.BRACKET_L,o,o+1);case 93:return Ge(i,C.BRACKET_R,o,o+1);case 123:return Ge(i,C.BRACE_L,o,o+1);case 124:return Ge(i,C.PIPE,o,o+1);case 125:return Ge(i,C.BRACE_R,o,o+1);case 34:return t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34?xD(i,o):ND(i,o)}if(lr(u)||u===45)return FD(i,o,u);if(wa(u))return RD(i,o);throw Ye(i.source,o,u===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:xi(u)||As(t,o)?`Unexpected character: ${li(i,o)}.`:`Invalid character: ${li(i,o)}.`)}return Ge(i,C.EOF,s,s)}function wD(i,n){const t=i.source.body,s=t.length;let o=n+1;for(;o<s;){const u=t.charCodeAt(o);if(u===10||u===13)break;if(xi(u))++o;else if(As(t,o))o+=2;else break}return Ge(i,C.COMMENT,n,o,t.slice(n+1,o))}function FD(i,n,t){const s=i.source.body;let o=n,u=t,l=!1;if(u===45&&(u=s.charCodeAt(++o)),u===48){if(u=s.charCodeAt(++o),lr(u))throw Ye(i.source,o,`Invalid number, unexpected digit after 0: ${li(i,o)}.`)}else o=ra(i,o,u),u=s.charCodeAt(o);if(u===46&&(l=!0,u=s.charCodeAt(++o),o=ra(i,o,u),u=s.charCodeAt(o)),(u===69||u===101)&&(l=!0,u=s.charCodeAt(++o),(u===43||u===45)&&(u=s.charCodeAt(++o)),o=ra(i,o,u),u=s.charCodeAt(o)),u===46||wa(u))throw Ye(i.source,o,`Invalid number, expected digit but got: ${li(i,o)}.`);return Ge(i,l?C.FLOAT:C.INT,n,o,s.slice(n,o))}function ra(i,n,t){if(!lr(t))throw Ye(i.source,n,`Invalid number, expected digit but got: ${li(i,n)}.`);const s=i.source.body;let o=n+1;for(;lr(s.charCodeAt(o));)++o;return o}function ND(i,n){const t=i.source.body,s=t.length;let o=n+1,u=o,l="";for(;o<s;){const p=t.charCodeAt(o);if(p===34)return l+=t.slice(u,o),Ge(i,C.STRING,n,o+1,l);if(p===92){l+=t.slice(u,o);const d=t.charCodeAt(o+1)===117?t.charCodeAt(o+2)===123?CD(i,o):kD(i,o):OD(i,o);l+=d.value,o+=d.size,u=o;continue}if(p===10||p===13)break;if(xi(p))++o;else if(As(t,o))o+=2;else throw Ye(i.source,o,`Invalid character within String: ${li(i,o)}.`)}throw Ye(i.source,o,"Unterminated string.")}function CD(i,n){const t=i.source.body;let s=0,o=3;for(;o<12;){const u=t.charCodeAt(n+o++);if(u===125){if(o<5||!xi(s))break;return{value:String.fromCodePoint(s),size:o}}if(s=s<<4|ir(u),s<0)break}throw Ye(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+o)}".`)}function kD(i,n){const t=i.source.body,s=Rc(t,n+2);if(xi(s))return{value:String.fromCodePoint(s),size:6};if(cf(s)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const o=Rc(t,n+8);if(ff(o))return{value:String.fromCodePoint(s,o),size:12}}throw Ye(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function Rc(i,n){return ir(i.charCodeAt(n))<<12|ir(i.charCodeAt(n+1))<<8|ir(i.charCodeAt(n+2))<<4|ir(i.charCodeAt(n+3))}function ir(i){return i>=48&&i<=57?i-48:i>=65&&i<=70?i-55:i>=97&&i<=102?i-87:-1}function OD(i,n){const t=i.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Ye(i.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function xD(i,n){const t=i.source.body,s=t.length;let o=i.lineStart,u=n+3,l=u,p="";const d=[];for(;u<s;){const E=t.charCodeAt(u);if(E===34&&t.charCodeAt(u+1)===34&&t.charCodeAt(u+2)===34){p+=t.slice(l,u),d.push(p);const y=Ge(i,C.BLOCK_STRING,n,u+3,ID(d).join(`
`));return i.line+=d.length-1,i.lineStart=o,y}if(E===92&&t.charCodeAt(u+1)===34&&t.charCodeAt(u+2)===34&&t.charCodeAt(u+3)===34){p+=t.slice(l,u),l=u+1,u+=4;continue}if(E===10||E===13){p+=t.slice(l,u),d.push(p),E===13&&t.charCodeAt(u+1)===10?u+=2:++u,p="",l=u,o=u;continue}if(xi(E))++u;else if(As(t,u))u+=2;else throw Ye(i.source,u,`Invalid character within String: ${li(i,u)}.`)}throw Ye(i.source,u,"Unterminated string.")}function RD(i,n){const t=i.source.body,s=t.length;let o=n+1;for(;o<s;){const u=t.charCodeAt(o);if(lf(u))++o;else break}return Ge(i,C.NAME,n,o,t.slice(n,o))}const LD=10,pf=2;function Q(i){return bs(i,[])}function bs(i,n){switch(typeof i){case"string":return JSON.stringify(i);case"function":return i.name?`[function ${i.name}]`:"[function]";case"object":return BD(i,n);default:return String(i)}}function BD(i,n){if(i===null)return"null";if(n.includes(i))return"[Circular]";const t=[...n,i];if(PD(i)){const s=i.toJSON();if(s!==i)return typeof s=="string"?s:bs(s,t)}else if(Array.isArray(i))return UD(i,t);return $D(i,t)}function PD(i){return typeof i.toJSON=="function"}function $D(i,n){const t=Object.entries(i);return t.length===0?"{}":n.length>pf?"["+MD(i)+"]":"{ "+t.map(([o,u])=>o+": "+bs(u,n)).join(", ")+" }"}function UD(i,n){if(i.length===0)return"[]";if(n.length>pf)return"[Array]";const t=Math.min(LD,i.length),s=i.length-t,o=[];for(let u=0;u<t;++u)o.push(bs(i[u],n));return s===1?o.push("... 1 more item"):s>1&&o.push(`... ${s} more items`),"["+o.join(", ")+"]"}function MD(i){const n=Object.prototype.toString.call(i).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof i.constructor=="function"){const t=i.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const ht=globalThis.process?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var s;const o=t.prototype[Symbol.toStringTag],u=Symbol.toStringTag in n?n[Symbol.toStringTag]:(s=n.constructor)===null||s===void 0?void 0:s.name;if(o===u){const l=Q(n);throw new Error(`Cannot use ${o} "${l}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class df{constructor(n,t="GraphQL request",s={line:1,column:1}){typeof n=="string"||pe(!1,`Body must be a string. Received: ${Q(n)}.`),this.body=n,this.name=t,this.locationOffset=s,this.locationOffset.line>0||pe(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||pe(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function VD(i){return ht(i,df)}function jD(i,n){return new hf(i,n).parseDocument()}function GD(i,n){const t=new hf(i,n);t.expectToken(C.SOF);const s=t.parseValueLiteral(!1);return t.expectToken(C.EOF),s}class hf{constructor(n,t={}){const s=VD(n)?n:new df(n);this._lexer=new AD(s),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(C.NAME);return this.node(n,{kind:v.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:v.DOCUMENT,definitions:this.many(C.SOF,this.parseDefinition,C.EOF)})}parseDefinition(){if(this.peek(C.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===C.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw Ye(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(C.BRACE_L))return this.node(n,{kind:v.OPERATION_DEFINITION,operation:Pn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let s;return this.peek(C.NAME)&&(s=this.parseName()),this.node(n,{kind:v.OPERATION_DEFINITION,operation:t,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(C.NAME);switch(n.value){case"query":return Pn.QUERY;case"mutation":return Pn.MUTATION;case"subscription":return Pn.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(C.PAREN_L,this.parseVariableDefinition,C.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:v.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(C.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(C.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(C.DOLLAR),this.node(n,{kind:v.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:v.SELECTION_SET,selections:this.many(C.BRACE_L,this.parseSelection,C.BRACE_R)})}parseSelection(){return this.peek(C.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let s,o;return this.expectOptionalToken(C.COLON)?(s=t,o=this.parseName()):o=t,this.node(n,{kind:v.FIELD,alias:s,name:o,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(C.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(C.PAREN_L,t,C.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,s=this.parseName();return this.expectToken(C.COLON),this.node(t,{kind:v.ARGUMENT,name:s,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(C.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(C.NAME)?this.node(n,{kind:v.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:v.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:v.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:v.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case C.BRACKET_L:return this.parseList(n);case C.BRACE_L:return this.parseObject(n);case C.INT:return this.advanceLexer(),this.node(t,{kind:v.INT,value:t.value});case C.FLOAT:return this.advanceLexer(),this.node(t,{kind:v.FLOAT,value:t.value});case C.STRING:case C.BLOCK_STRING:return this.parseStringLiteral();case C.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:v.BOOLEAN,value:!0});case"false":return this.node(t,{kind:v.BOOLEAN,value:!1});case"null":return this.node(t,{kind:v.NULL});default:return this.node(t,{kind:v.ENUM,value:t.value})}case C.DOLLAR:if(n)if(this.expectToken(C.DOLLAR),this._lexer.token.kind===C.NAME){const s=this._lexer.token.value;throw Ye(this._lexer.source,t.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:v.STRING,value:n.value,block:n.kind===C.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:v.LIST,values:this.any(C.BRACKET_L,t,C.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:v.OBJECT,fields:this.any(C.BRACE_L,t,C.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,s=this.parseName();return this.expectToken(C.COLON),this.node(t,{kind:v.OBJECT_FIELD,name:s,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(C.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(C.AT),this.node(t,{kind:v.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(C.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(C.BRACKET_R),t=this.node(n,{kind:v.LIST_TYPE,type:s})}else t=this.parseNamedType();return this.expectOptionalToken(C.BANG)?this.node(n,{kind:v.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:v.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(C.STRING)||this.peek(C.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),o=this.many(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);return this.node(n,{kind:v.SCHEMA_DEFINITION,description:t,directives:s,operationTypes:o})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(C.COLON);const s=this.parseNamedType();return this.node(n,{kind:v.OPERATION_TYPE_DEFINITION,operation:t,type:s})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),o=this.parseConstDirectives();return this.node(n,{kind:v.SCALAR_TYPE_DEFINITION,description:t,name:s,directives:o})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),o=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:v.OBJECT_TYPE_DEFINITION,description:t,name:s,interfaces:o,directives:u,fields:l})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(C.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(C.BRACE_L,this.parseFieldDefinition,C.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName(),o=this.parseArgumentDefs();this.expectToken(C.COLON);const u=this.parseTypeReference(),l=this.parseConstDirectives();return this.node(n,{kind:v.FIELD_DEFINITION,description:t,name:s,arguments:o,type:u,directives:l})}parseArgumentDefs(){return this.optionalMany(C.PAREN_L,this.parseInputValueDef,C.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName();this.expectToken(C.COLON);const o=this.parseTypeReference();let u;this.expectOptionalToken(C.EQUALS)&&(u=this.parseConstValueLiteral());const l=this.parseConstDirectives();return this.node(n,{kind:v.INPUT_VALUE_DEFINITION,description:t,name:s,type:o,defaultValue:u,directives:l})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),o=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:v.INTERFACE_TYPE_DEFINITION,description:t,name:s,interfaces:o,directives:u,fields:l})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),o=this.parseConstDirectives(),u=this.parseUnionMemberTypes();return this.node(n,{kind:v.UNION_TYPE_DEFINITION,description:t,name:s,directives:o,types:u})}parseUnionMemberTypes(){return this.expectOptionalToken(C.EQUALS)?this.delimitedMany(C.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),o=this.parseConstDirectives(),u=this.parseEnumValuesDefinition();return this.node(n,{kind:v.ENUM_TYPE_DEFINITION,description:t,name:s,directives:o,values:u})}parseEnumValuesDefinition(){return this.optionalMany(C.BRACE_L,this.parseEnumValueDefinition,C.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseEnumValueName(),o=this.parseConstDirectives();return this.node(n,{kind:v.ENUM_VALUE_DEFINITION,description:t,name:s,directives:o})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Ye(this._lexer.source,this._lexer.token.start,`${us(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),o=this.parseConstDirectives(),u=this.parseInputFieldsDefinition();return this.node(n,{kind:v.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:s,directives:o,fields:u})}parseInputFieldsDefinition(){return this.optionalMany(C.BRACE_L,this.parseInputValueDef,C.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===C.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),s=this.optionalMany(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);if(t.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:v.SCHEMA_EXTENSION,directives:t,operationTypes:s})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(n,{kind:v.SCALAR_TYPE_EXTENSION,name:t,directives:s})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&o.length===0&&u.length===0)throw this.unexpected();return this.node(n,{kind:v.OBJECT_TYPE_EXTENSION,name:t,interfaces:s,directives:o,fields:u})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&o.length===0&&u.length===0)throw this.unexpected();return this.node(n,{kind:v.INTERFACE_TYPE_EXTENSION,name:t,interfaces:s,directives:o,fields:u})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseUnionMemberTypes();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:v.UNION_TYPE_EXTENSION,name:t,directives:s,types:o})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:v.ENUM_TYPE_EXTENSION,name:t,directives:s,values:o})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:v.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:s,fields:o})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(C.AT);const s=this.parseName(),o=this.parseArgumentDefs(),u=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const l=this.parseDirectiveLocations();return this.node(n,{kind:v.DIRECTIVE_DEFINITION,description:t,name:s,arguments:o,repeatable:u,locations:l})}parseDirectiveLocations(){return this.delimitedMany(C.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(z,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new TD(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw Ye(this._lexer.source,t.start,`Expected ${mf(n)}, found ${us(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===C.NAME&&t.value===n)this.advanceLexer();else throw Ye(this._lexer.source,t.start,`Expected "${n}", found ${us(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===C.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return Ye(this._lexer.source,t.start,`Unexpected ${us(t)}.`)}any(n,t,s){this.expectToken(n);const o=[];for(;!this.expectOptionalToken(s);)o.push(t.call(this));return o}optionalMany(n,t,s){if(this.expectOptionalToken(n)){const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(s));return o}return[]}many(n,t,s){this.expectToken(n);const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(s));return o}delimitedMany(n,t){this.expectOptionalToken(n);const s=[];do s.push(t.call(this));while(this.expectOptionalToken(n));return s}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==C.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw Ye(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function us(i){const n=i.value;return mf(i.kind)+(n!=null?` "${n}"`:"")}function mf(i){return bD(i)?`"${i}"`:i}const qD=5;function Ss(i,n){const[t,s]=n?[i,n]:[void 0,i];let o=" Did you mean ";t&&(o+=t+" ");const u=s.map(d=>`"${d}"`);switch(u.length){case 0:return"";case 1:return o+u[0]+"?";case 2:return o+u[0]+" or "+u[1]+"?"}const l=u.slice(0,qD),p=l.pop();return o+l.join(", ")+", or "+p+"?"}function Lc(i){return i}function ki(i,n){const t=Object.create(null);for(const s of i)t[n(s)]=s;return t}function ai(i,n,t){const s=Object.create(null);for(const o of i)s[n(o)]=t(o);return s}function St(i,n){const t=Object.create(null);for(const s of Object.keys(i))t[s]=n(i[s],s);return t}function WD(i,n){let t=0,s=0;for(;t<i.length&&s<n.length;){let o=i.charCodeAt(t),u=n.charCodeAt(s);if(ls(o)&&ls(u)){let l=0;do++t,l=l*10+o-ha,o=i.charCodeAt(t);while(ls(o)&&l>0);let p=0;do++s,p=p*10+u-ha,u=n.charCodeAt(s);while(ls(u)&&p>0);if(l<p)return-1;if(l>p)return 1}else{if(o<u)return-1;if(o>u)return 1;++t,++s}}return i.length-n.length}const ha=48,QD=57;function ls(i){return!isNaN(i)&&ha<=i&&i<=QD}function ws(i,n){const t=Object.create(null),s=new zD(i),o=Math.floor(i.length*.4)+1;for(const u of n){const l=s.measure(u,o);l!==void 0&&(t[u]=l)}return Object.keys(t).sort((u,l)=>{const p=t[u]-t[l];return p!==0?p:WD(u,l)})}class zD{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=Bc(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const s=n.toLowerCase();if(this._inputLowerCase===s)return 1;let o=Bc(s),u=this._inputArray;if(o.length<u.length){const y=o;o=u,u=y}const l=o.length,p=u.length;if(l-p>t)return;const d=this._rows;for(let y=0;y<=p;y++)d[0][y]=y;for(let y=1;y<=l;y++){const I=d[(y-1)%3],w=d[y%3];let O=w[0]=y;for(let R=1;R<=p;R++){const L=o[y-1]===u[R-1]?0:1;let X=Math.min(I[R]+1,w[R-1]+1,I[R-1]+L);if(y>1&&R>1&&o[y-1]===u[R-2]&&o[y-2]===u[R-1]){const he=d[(y-2)%3][R-2];X=Math.min(X,he+1)}X<O&&(O=X),w[R]=X}if(O>t)return}const E=d[l%3][p];return E<=t?E:void 0}}function Bc(i){const n=i.length,t=new Array(n);for(let s=0;s<n;++s)t[s]=i.charCodeAt(s);return t}function Un(i){if(i==null)return Object.create(null);if(Object.getPrototypeOf(i)===null)return i;const n=Object.create(null);for(const[t,s]of Object.entries(i))n[t]=s;return n}function YD(i){return`"${i.replace(JD,HD)}"`}const JD=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function HD(i){return XD[i.charCodeAt(0)]}const XD=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],rr=Object.freeze({});function gf(i,n,t=af){const s=new Map;for(const he of Object.values(v))s.set(he,Ef(n,he));let o,u=Array.isArray(i),l=[i],p=-1,d=[],E=i,y,I;const w=[],O=[];do{p++;const he=p===l.length,je=he&&d.length!==0;if(he){if(y=O.length===0?void 0:w[w.length-1],E=I,I=O.pop(),je)if(u){E=E.slice();let Ce=0;for(const[Re,rn]of d){const Ke=Re-Ce;rn===null?(E.splice(Ke,1),Ce++):E[Ke]=rn}}else{E=Object.defineProperties({},Object.getOwnPropertyDescriptors(E));for(const[Ce,Re]of d)E[Ce]=Re}p=o.index,l=o.keys,d=o.edits,u=o.inArray,o=o.prev}else if(I){if(y=u?p:l[p],E=I[y],E==null)continue;w.push(y)}let be;if(!Array.isArray(E)){var R,L;xc(E)||pe(!1,`Invalid AST Node: ${Q(E)}.`);const Ce=he?(R=s.get(E.kind))===null||R===void 0?void 0:R.leave:(L=s.get(E.kind))===null||L===void 0?void 0:L.enter;if(be=Ce==null?void 0:Ce.call(n,E,y,I,w,O),be===rr)break;if(be===!1){if(!he){w.pop();continue}}else if(be!==void 0&&(d.push([y,be]),!he))if(xc(be))E=be;else{w.pop();continue}}if(be===void 0&&je&&d.push([y,E]),he)w.pop();else{var X;o={inArray:u,index:p,keys:l,edits:d,prev:o},u=Array.isArray(E),l=u?E:(X=t[E.kind])!==null&&X!==void 0?X:[],p=-1,d=[],I&&O.push(I),I=E}}while(o!==void 0);return d.length!==0?d[d.length-1][1]:i}function KD(i){const n=new Array(i.length).fill(null),t=Object.create(null);for(const s of Object.values(v)){let o=!1;const u=new Array(i.length).fill(void 0),l=new Array(i.length).fill(void 0);for(let d=0;d<i.length;++d){const{enter:E,leave:y}=Ef(i[d],s);o||(o=E!=null||y!=null),u[d]=E,l[d]=y}if(!o)continue;const p={enter(...d){const E=d[0];for(let I=0;I<i.length;I++)if(n[I]===null){var y;const w=(y=u[I])===null||y===void 0?void 0:y.apply(i[I],d);if(w===!1)n[I]=E;else if(w===rr)n[I]=rr;else if(w!==void 0)return w}},leave(...d){const E=d[0];for(let I=0;I<i.length;I++)if(n[I]===null){var y;const w=(y=l[I])===null||y===void 0?void 0:y.apply(i[I],d);if(w===rr)n[I]=rr;else if(w!==void 0&&w!==!1)return w}else n[I]===E&&(n[I]=null)}};t[s]=p}return t}function Ef(i,n){const t=i[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:i.enter,leave:i.leave}}function pt(i){return gf(i,eI)}const ZD=80,eI={Name:{leave:i=>i.value},Variable:{leave:i=>"$"+i.name},Document:{leave:i=>j(i.definitions,`

`)},OperationDefinition:{leave(i){const n=ce("(",j(i.variableDefinitions,", "),")"),t=j([i.operation,j([i.name,n]),j(i.directives," ")]," ");return(t==="query"?"":t+" ")+i.selectionSet}},VariableDefinition:{leave:({variable:i,type:n,defaultValue:t,directives:s})=>i+": "+n+ce(" = ",t)+ce(" ",j(s," "))},SelectionSet:{leave:({selections:i})=>zn(i)},Field:{leave({alias:i,name:n,arguments:t,directives:s,selectionSet:o}){const u=ce("",i,": ")+n;let l=u+ce("(",j(t,", "),")");return l.length>ZD&&(l=u+ce(`(
`,ps(j(t,`
`)),`
)`)),j([l,j(s," "),o]," ")}},Argument:{leave:({name:i,value:n})=>i+": "+n},FragmentSpread:{leave:({name:i,directives:n})=>"..."+i+ce(" ",j(n," "))},InlineFragment:{leave:({typeCondition:i,directives:n,selectionSet:t})=>j(["...",ce("on ",i),j(n," "),t]," ")},FragmentDefinition:{leave:({name:i,typeCondition:n,variableDefinitions:t,directives:s,selectionSet:o})=>`fragment ${i}${ce("(",j(t,", "),")")} on ${n} ${ce("",j(s," ")," ")}`+o},IntValue:{leave:({value:i})=>i},FloatValue:{leave:({value:i})=>i},StringValue:{leave:({value:i,block:n})=>n?vD(i):YD(i)},BooleanValue:{leave:({value:i})=>i?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:i})=>i},ListValue:{leave:({values:i})=>"["+j(i,", ")+"]"},ObjectValue:{leave:({fields:i})=>"{"+j(i,", ")+"}"},ObjectField:{leave:({name:i,value:n})=>i+": "+n},Directive:{leave:({name:i,arguments:n})=>"@"+i+ce("(",j(n,", "),")")},NamedType:{leave:({name:i})=>i},ListType:{leave:({type:i})=>"["+i+"]"},NonNullType:{leave:({type:i})=>i+"!"},SchemaDefinition:{leave:({description:i,directives:n,operationTypes:t})=>ce("",i,`
`)+j(["schema",j(n," "),zn(t)]," ")},OperationTypeDefinition:{leave:({operation:i,type:n})=>i+": "+n},ScalarTypeDefinition:{leave:({description:i,name:n,directives:t})=>ce("",i,`
`)+j(["scalar",n,j(t," ")]," ")},ObjectTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:s,fields:o})=>ce("",i,`
`)+j(["type",n,ce("implements ",j(t," & ")),j(s," "),zn(o)]," ")},FieldDefinition:{leave:({description:i,name:n,arguments:t,type:s,directives:o})=>ce("",i,`
`)+n+(Pc(t)?ce(`(
`,ps(j(t,`
`)),`
)`):ce("(",j(t,", "),")"))+": "+s+ce(" ",j(o," "))},InputValueDefinition:{leave:({description:i,name:n,type:t,defaultValue:s,directives:o})=>ce("",i,`
`)+j([n+": "+t,ce("= ",s),j(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:s,fields:o})=>ce("",i,`
`)+j(["interface",n,ce("implements ",j(t," & ")),j(s," "),zn(o)]," ")},UnionTypeDefinition:{leave:({description:i,name:n,directives:t,types:s})=>ce("",i,`
`)+j(["union",n,j(t," "),ce("= ",j(s," | "))]," ")},EnumTypeDefinition:{leave:({description:i,name:n,directives:t,values:s})=>ce("",i,`
`)+j(["enum",n,j(t," "),zn(s)]," ")},EnumValueDefinition:{leave:({description:i,name:n,directives:t})=>ce("",i,`
`)+j([n,j(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:i,name:n,directives:t,fields:s})=>ce("",i,`
`)+j(["input",n,j(t," "),zn(s)]," ")},DirectiveDefinition:{leave:({description:i,name:n,arguments:t,repeatable:s,locations:o})=>ce("",i,`
`)+"directive @"+n+(Pc(t)?ce(`(
`,ps(j(t,`
`)),`
)`):ce("(",j(t,", "),")"))+(s?" repeatable":"")+" on "+j(o," | ")},SchemaExtension:{leave:({directives:i,operationTypes:n})=>j(["extend schema",j(i," "),zn(n)]," ")},ScalarTypeExtension:{leave:({name:i,directives:n})=>j(["extend scalar",i,j(n," ")]," ")},ObjectTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:s})=>j(["extend type",i,ce("implements ",j(n," & ")),j(t," "),zn(s)]," ")},InterfaceTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:s})=>j(["extend interface",i,ce("implements ",j(n," & ")),j(t," "),zn(s)]," ")},UnionTypeExtension:{leave:({name:i,directives:n,types:t})=>j(["extend union",i,j(n," "),ce("= ",j(t," | "))]," ")},EnumTypeExtension:{leave:({name:i,directives:n,values:t})=>j(["extend enum",i,j(n," "),zn(t)]," ")},InputObjectTypeExtension:{leave:({name:i,directives:n,fields:t})=>j(["extend input",i,j(n," "),zn(t)]," ")}};function j(i,n=""){var t;return(t=i==null?void 0:i.filter(s=>s).join(n))!==null&&t!==void 0?t:""}function zn(i){return ce(`{
`,ps(j(i,`
`)),`
}`)}function ce(i,n,t=""){return n!=null&&n!==""?i+n+t:""}function ps(i){return ce("  ",i.replace(/\n/g,`
  `))}function Pc(i){var n;return(n=i==null?void 0:i.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function ma(i,n){switch(i.kind){case v.NULL:return null;case v.INT:return parseInt(i.value,10);case v.FLOAT:return parseFloat(i.value);case v.STRING:case v.ENUM:case v.BOOLEAN:return i.value;case v.LIST:return i.values.map(t=>ma(t,n));case v.OBJECT:return ai(i.fields,t=>t.name.value,t=>ma(t.value,n));case v.VARIABLE:return n==null?void 0:n[i.name.value]}}function st(i){if(i!=null||pe(!1,"Must provide name."),typeof i=="string"||pe(!1,"Expected name to be a string."),i.length===0)throw new q("Expected name to be a non-empty string.");for(let n=1;n<i.length;++n)if(!lf(i.charCodeAt(n)))throw new q(`Names must only contain [_a-zA-Z0-9] but "${i}" does not.`);if(!wa(i.charCodeAt(0)))throw new q(`Names must start with [_a-zA-Z] but "${i}" does not.`);return i}function nI(i){if(i==="true"||i==="false"||i==="null")throw new q(`Enum values cannot be named: ${i}`);return st(i)}function Fa(i){return Jt(i)||yn(i)||cn(i)||Kn(i)||Zn(i)||et(i)||pi(i)||ln(i)}function Jt(i){return ht(i,Ot)}function yn(i){return ht(i,dt)}function tI(i){if(!yn(i))throw new Error(`Expected ${Q(i)} to be a GraphQL Object type.`);return i}function cn(i){return ht(i,ys)}function iI(i){if(!cn(i))throw new Error(`Expected ${Q(i)} to be a GraphQL Interface type.`);return i}function Kn(i){return ht(i,Ts)}function Zn(i){return ht(i,Oi)}function et(i){return ht(i,Ds)}function pi(i){return ht(i,En)}function ln(i){return ht(i,ae)}function yf(i){return Jt(i)||Zn(i)||et(i)||Na(i)&&yf(i.ofType)}function Tf(i){return Jt(i)||yn(i)||cn(i)||Kn(i)||Zn(i)||Na(i)&&Tf(i.ofType)}function Df(i){return Jt(i)||Zn(i)}function rI(i){return cn(i)||Kn(i)}class En{constructor(n){Fa(n)||pe(!1,`Expected ${Q(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class ae{constructor(n){If(n)||pe(!1,`Expected ${Q(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Na(i){return pi(i)||ln(i)}function If(i){return Fa(i)&&!ln(i)}function sI(i){if(!If(i))throw new Error(`Expected ${Q(i)} to be a GraphQL nullable type.`);return i}function R_(i){return Jt(i)||yn(i)||cn(i)||Kn(i)||Zn(i)||et(i)}function oI(i){if(i){let n=i;for(;Na(n);)n=n.ofType;return n}}function _f(i){return typeof i=="function"?i():i}function vf(i){return typeof i=="function"?i():i}class Ot{constructor(n){var t,s,o,u;const l=(t=n.parseValue)!==null&&t!==void 0?t:Lc;this.name=st(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(s=n.serialize)!==null&&s!==void 0?s:Lc,this.parseValue=l,this.parseLiteral=(o=n.parseLiteral)!==null&&o!==void 0?o:(p,d)=>l(ma(p,d)),this.extensions=Un(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(u=n.extensionASTNodes)!==null&&u!==void 0?u:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||pe(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${Q(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||pe(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||pe(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class dt{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=Un(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>bf(n),this._interfaces=()=>Af(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||pe(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${Q(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:wf(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Af(i){var n;const t=_f((n=i.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||pe(!1,`${i.name} interfaces must be an Array or a function which returns an Array.`),t}function bf(i){const n=vf(i.fields);return Ci(n)||pe(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),St(n,(t,s)=>{var o;Ci(t)||pe(!1,`${i.name}.${s} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||pe(!1,`${i.name}.${s} field resolver must be a function if provided, but got: ${Q(t.resolve)}.`);const u=(o=t.args)!==null&&o!==void 0?o:{};return Ci(u)||pe(!1,`${i.name}.${s} args must be an object with argument names as keys.`),{name:st(s),description:t.description,type:t.type,args:Sf(u),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Un(t.extensions),astNode:t.astNode}})}function Sf(i){return Object.entries(i).map(([n,t])=>({name:st(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Un(t.extensions),astNode:t.astNode}))}function Ci(i){return kt(i)&&!Array.isArray(i)}function wf(i){return St(i,n=>({description:n.description,type:n.type,args:Ff(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function Ff(i){return ai(i,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function aI(i){return ln(i.type)&&i.defaultValue===void 0}class ys{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Un(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=bf.bind(void 0,n),this._interfaces=Af.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||pe(!1,`${this.name} must provide "resolveType" as a function, but got: ${Q(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:wf(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Ts{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Un(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=uI.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||pe(!1,`${this.name} must provide "resolveType" as a function, but got: ${Q(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function uI(i){const n=_f(i.types);return Array.isArray(n)||pe(!1,`Must provide Array of types or a function which returns such an array for Union ${i.name}.`),n}class Oi{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.extensions=Un(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=lI(this.name,n.values),this._valueLookup=new Map(this._values.map(s=>[s.value,s])),this._nameLookup=ki(this._values,s=>s.name)}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return this._values}getValue(n){return this._nameLookup[n]}serialize(n){const t=this._valueLookup.get(n);if(t===void 0)throw new q(`Enum "${this.name}" cannot represent value: ${Q(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const s=Q(n);throw new q(`Enum "${this.name}" cannot represent non-string value: ${s}.`+cs(this,s))}const t=this.getValue(n);if(t==null)throw new q(`Value "${n}" does not exist in "${this.name}" enum.`+cs(this,n));return t.value}parseLiteral(n,t){if(n.kind!==v.ENUM){const o=pt(n);throw new q(`Enum "${this.name}" cannot represent non-enum value: ${o}.`+cs(this,o),{nodes:n})}const s=this.getValue(n.value);if(s==null){const o=pt(n);throw new q(`Value "${o}" does not exist in "${this.name}" enum.`+cs(this,o),{nodes:n})}return s.value}toConfig(){const n=ai(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function cs(i,n){const t=i.getValues().map(o=>o.name),s=ws(n,t);return Ss("the enum value",s)}function lI(i,n){return Ci(n)||pe(!1,`${i} values must be an object with value names as keys.`),Object.entries(n).map(([t,s])=>(Ci(s)||pe(!1,`${i}.${t} must refer to an object with a "value" key representing an internal value but got: ${Q(s)}.`),{name:nI(t),description:s.description,value:s.value!==void 0?s.value:t,deprecationReason:s.deprecationReason,extensions:Un(s.extensions),astNode:s.astNode}))}class Ds{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.extensions=Un(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=cI.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=St(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function cI(i){const n=vf(i.fields);return Ci(n)||pe(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),St(n,(t,s)=>(!("resolve"in t)||pe(!1,`${i.name}.${s} field has a resolve property, but Input Types cannot define resolvers.`),{name:st(s),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Un(t.extensions),astNode:t.astNode}))}const sa=2147483647,oa=-2147483648,fI=new Ot({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(i){const n=pr(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new q(`Int cannot represent non-integer value: ${Q(n)}`);if(t>sa||t<oa)throw new q("Int cannot represent non 32-bit signed integer value: "+Q(n));return t},parseValue(i){if(typeof i!="number"||!Number.isInteger(i))throw new q(`Int cannot represent non-integer value: ${Q(i)}`);if(i>sa||i<oa)throw new q(`Int cannot represent non 32-bit signed integer value: ${i}`);return i},parseLiteral(i){if(i.kind!==v.INT)throw new q(`Int cannot represent non-integer value: ${pt(i)}`,{nodes:i});const n=parseInt(i.value,10);if(n>sa||n<oa)throw new q(`Int cannot represent non 32-bit signed integer value: ${i.value}`,{nodes:i});return n}}),pI=new Ot({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(i){const n=pr(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new q(`Float cannot represent non numeric value: ${Q(n)}`);return t},parseValue(i){if(typeof i!="number"||!Number.isFinite(i))throw new q(`Float cannot represent non numeric value: ${Q(i)}`);return i},parseLiteral(i){if(i.kind!==v.FLOAT&&i.kind!==v.INT)throw new q(`Float cannot represent non numeric value: ${pt(i)}`,i);return parseFloat(i.value)}}),Ve=new Ot({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(i){const n=pr(i);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new q(`String cannot represent value: ${Q(i)}`)},parseValue(i){if(typeof i!="string")throw new q(`String cannot represent a non string value: ${Q(i)}`);return i},parseLiteral(i){if(i.kind!==v.STRING)throw new q(`String cannot represent a non string value: ${pt(i)}`,{nodes:i});return i.value}}),$n=new Ot({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(i){const n=pr(i);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new q(`Boolean cannot represent a non boolean value: ${Q(n)}`)},parseValue(i){if(typeof i!="boolean")throw new q(`Boolean cannot represent a non boolean value: ${Q(i)}`);return i},parseLiteral(i){if(i.kind!==v.BOOLEAN)throw new q(`Boolean cannot represent a non boolean value: ${pt(i)}`,{nodes:i});return i.value}}),Nf=new Ot({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(i){const n=pr(i);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new q(`ID cannot represent value: ${Q(i)}`)},parseValue(i){if(typeof i=="string")return i;if(typeof i=="number"&&Number.isInteger(i))return i.toString();throw new q(`ID cannot represent value: ${Q(i)}`)},parseLiteral(i){if(i.kind!==v.STRING&&i.kind!==v.INT)throw new q("ID cannot represent a non-string and non-integer value: "+pt(i),{nodes:i});return i.value}}),Fs=Object.freeze([Ve,fI,pI,$n,Nf]);function dI(i){return Fs.some(({name:n})=>i.name===n)}function pr(i){if(kt(i)){if(typeof i.valueOf=="function"){const n=i.valueOf();if(!kt(n))return n}if(typeof i.toJSON=="function")return i.toJSON()}return i}function hI(i){return ht(i,Yt)}class Yt{constructor(n){var t,s;this.name=st(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Un(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||pe(!1,`@${n.name} locations must be an Array.`);const o=(s=n.args)!==null&&s!==void 0?s:{};kt(o)&&!Array.isArray(o)||pe(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=Sf(o)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:Ff(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const mI=new Yt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[z.FIELD,z.FRAGMENT_SPREAD,z.INLINE_FRAGMENT],args:{if:{type:new ae($n),description:"Included when true."}}}),gI=new Yt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[z.FIELD,z.FRAGMENT_SPREAD,z.INLINE_FRAGMENT],args:{if:{type:new ae($n),description:"Skipped when true."}}}),EI="No longer supported",Cf=new Yt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[z.FIELD_DEFINITION,z.ARGUMENT_DEFINITION,z.INPUT_FIELD_DEFINITION,z.ENUM_VALUE],args:{reason:{type:Ve,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:EI}}}),kf=new Yt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[z.SCALAR],args:{url:{type:new ae(Ve),description:"The URL that specifies the behavior of this scalar."}}}),Ri=Object.freeze([mI,gI,Cf,kf]);function yI(i){return typeof i=="object"&&typeof(i==null?void 0:i[Symbol.iterator])=="function"}function sr(i,n){if(ln(n)){const t=sr(i,n.ofType);return(t==null?void 0:t.kind)===v.NULL?null:t}if(i===null)return{kind:v.NULL};if(i===void 0)return null;if(pi(n)){const t=n.ofType;if(yI(i)){const s=[];for(const o of i){const u=sr(o,t);u!=null&&s.push(u)}return{kind:v.LIST,values:s}}return sr(i,t)}if(et(n)){if(!kt(i))return null;const t=[];for(const s of Object.values(n.getFields())){const o=sr(i[s.name],s.type);o&&t.push({kind:v.OBJECT_FIELD,name:{kind:v.NAME,value:s.name},value:o})}return{kind:v.OBJECT,fields:t}}if(Df(n)){const t=n.serialize(i);if(t==null)return null;if(typeof t=="boolean")return{kind:v.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const s=String(t);return $c.test(s)?{kind:v.INT,value:s}:{kind:v.FLOAT,value:s}}if(typeof t=="string")return Zn(n)?{kind:v.ENUM,value:t}:n===Nf&&$c.test(t)?{kind:v.INT,value:t}:{kind:v.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${Q(t)}.`)}Xn(!1,"Unexpected input type: "+Q(n))}const $c=/^-?(?:0|[1-9][0-9]*)$/,Ca=new dt({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Ve,resolve:i=>i.description},types:{description:"A list of all types supported by this server.",type:new ae(new En(new ae(Hn))),resolve(i){return Object.values(i.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new ae(Hn),resolve:i=>i.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Hn,resolve:i=>i.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Hn,resolve:i=>i.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new ae(new En(new ae(Of))),resolve:i=>i.getDirectives()}})}),Of=new dt({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new ae(Ve),resolve:i=>i.name},description:{type:Ve,resolve:i=>i.description},isRepeatable:{type:new ae($n),resolve:i=>i.isRepeatable},locations:{type:new ae(new En(new ae(xf))),resolve:i=>i.locations},args:{type:new ae(new En(new ae(Ns))),args:{includeDeprecated:{type:$n,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}}})}),xf=new Oi({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:z.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:z.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:z.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:z.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:z.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:z.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:z.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:z.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:z.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:z.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:z.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:z.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:z.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:z.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:z.UNION,description:"Location adjacent to a union definition."},ENUM:{value:z.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:z.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:z.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:z.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Hn=new dt({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new ae(Bf),resolve(i){if(Jt(i))return Ae.SCALAR;if(yn(i))return Ae.OBJECT;if(cn(i))return Ae.INTERFACE;if(Kn(i))return Ae.UNION;if(Zn(i))return Ae.ENUM;if(et(i))return Ae.INPUT_OBJECT;if(pi(i))return Ae.LIST;if(ln(i))return Ae.NON_NULL;Xn(!1,`Unexpected type: "${Q(i)}".`)}},name:{type:Ve,resolve:i=>"name"in i?i.name:void 0},description:{type:Ve,resolve:i=>"description"in i?i.description:void 0},specifiedByURL:{type:Ve,resolve:i=>"specifiedByURL"in i?i.specifiedByURL:void 0},fields:{type:new En(new ae(Rf)),args:{includeDeprecated:{type:$n,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(yn(i)||cn(i)){const t=Object.values(i.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},interfaces:{type:new En(new ae(Hn)),resolve(i){if(yn(i)||cn(i))return i.getInterfaces()}},possibleTypes:{type:new En(new ae(Hn)),resolve(i,n,t,{schema:s}){if(rI(i))return s.getPossibleTypes(i)}},enumValues:{type:new En(new ae(Lf)),args:{includeDeprecated:{type:$n,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(Zn(i)){const t=i.getValues();return n?t:t.filter(s=>s.deprecationReason==null)}}},inputFields:{type:new En(new ae(Ns)),args:{includeDeprecated:{type:$n,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(et(i)){const t=Object.values(i.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},ofType:{type:Hn,resolve:i=>"ofType"in i?i.ofType:void 0}})}),Rf=new dt({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new ae(Ve),resolve:i=>i.name},description:{type:Ve,resolve:i=>i.description},args:{type:new ae(new En(new ae(Ns))),args:{includeDeprecated:{type:$n,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}},type:{type:new ae(Hn),resolve:i=>i.type},isDeprecated:{type:new ae($n),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ve,resolve:i=>i.deprecationReason}})}),Ns=new dt({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new ae(Ve),resolve:i=>i.name},description:{type:Ve,resolve:i=>i.description},type:{type:new ae(Hn),resolve:i=>i.type},defaultValue:{type:Ve,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(i){const{type:n,defaultValue:t}=i,s=sr(t,n);return s?pt(s):null}},isDeprecated:{type:new ae($n),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ve,resolve:i=>i.deprecationReason}})}),Lf=new dt({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new ae(Ve),resolve:i=>i.name},description:{type:Ve,resolve:i=>i.description},isDeprecated:{type:new ae($n),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ve,resolve:i=>i.deprecationReason}})});var Ae;(function(i){i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.INPUT_OBJECT="INPUT_OBJECT",i.LIST="LIST",i.NON_NULL="NON_NULL"})(Ae||(Ae={}));const Bf=new Oi({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:Ae.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:Ae.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:Ae.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:Ae.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:Ae.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:Ae.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:Ae.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:Ae.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new ae(Ca);new ae(Ve);new ae(Ve);const Cs=Object.freeze([Ca,Of,xf,Hn,Rf,Ns,Lf,Bf]);function TI(i){return Cs.some(({name:n})=>i.name===n)}class Pf{constructor(n){var t,s;this.__validationErrors=n.assumeValid===!0?[]:void 0,kt(n)||pe(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||pe(!1,`"types" must be Array if provided but got: ${Q(n.types)}.`),!n.directives||Array.isArray(n.directives)||pe(!1,`"directives" must be Array if provided but got: ${Q(n.directives)}.`),this.description=n.description,this.extensions=Un(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(s=n.directives)!==null&&s!==void 0?s:Ri;const o=new Set(n.types);if(n.types!=null)for(const u of n.types)o.delete(u),Yn(u,o);this._queryType!=null&&Yn(this._queryType,o),this._mutationType!=null&&Yn(this._mutationType,o),this._subscriptionType!=null&&Yn(this._subscriptionType,o);for(const u of this._directives)if(hI(u))for(const l of u.args)Yn(l.type,o);Yn(Ca,o),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const u of o){if(u==null)continue;const l=u.name;if(l||pe(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[l]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${l}".`);if(this._typeMap[l]=u,cn(u)){for(const p of u.getInterfaces())if(cn(p)){let d=this._implementationsMap[p.name];d===void 0&&(d=this._implementationsMap[p.name]={objects:[],interfaces:[]}),d.interfaces.push(u)}}else if(yn(u)){for(const p of u.getInterfaces())if(cn(p)){let d=this._implementationsMap[p.name];d===void 0&&(d=this._implementationsMap[p.name]={objects:[],interfaces:[]}),d.objects.push(u)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case Pn.QUERY:return this.getQueryType();case Pn.MUTATION:return this.getMutationType();case Pn.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return Kn(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let s=this._subTypeMap[n.name];if(s===void 0){if(s=Object.create(null),Kn(n))for(const o of n.getTypes())s[o.name]=!0;else{const o=this.getImplementations(n);for(const u of o.objects)s[u.name]=!0;for(const u of o.interfaces)s[u.name]=!0}this._subTypeMap[n.name]=s}return s[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Yn(i,n){const t=oI(i);if(!n.has(t)){if(n.add(t),Kn(t))for(const s of t.getTypes())Yn(s,n);else if(yn(t)||cn(t)){for(const s of t.getInterfaces())Yn(s,n);for(const s of Object.values(t.getFields())){Yn(s.type,n);for(const o of s.args)Yn(o.type,n)}}else if(et(t))for(const s of Object.values(t.getFields()))Yn(s.type,n)}return n}function DI(i){return i.kind===v.SCHEMA_DEFINITION||dr(i)||i.kind===v.DIRECTIVE_DEFINITION}function dr(i){return i.kind===v.SCALAR_TYPE_DEFINITION||i.kind===v.OBJECT_TYPE_DEFINITION||i.kind===v.INTERFACE_TYPE_DEFINITION||i.kind===v.UNION_TYPE_DEFINITION||i.kind===v.ENUM_TYPE_DEFINITION||i.kind===v.INPUT_OBJECT_TYPE_DEFINITION}function II(i){return i.kind===v.SCHEMA_EXTENSION||ka(i)}function ka(i){return i.kind===v.SCALAR_TYPE_EXTENSION||i.kind===v.OBJECT_TYPE_EXTENSION||i.kind===v.INTERFACE_TYPE_EXTENSION||i.kind===v.UNION_TYPE_EXTENSION||i.kind===v.ENUM_TYPE_EXTENSION||i.kind===v.INPUT_OBJECT_TYPE_EXTENSION}function _I(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():Ri;for(const l of s)n[l.name]=l.args.map(p=>p.name);const o=i.getDocument().definitions;for(const l of o)if(l.kind===v.DIRECTIVE_DEFINITION){var u;const p=(u=l.arguments)!==null&&u!==void 0?u:[];n[l.name.value]=p.map(d=>d.name.value)}return{Directive(l){const p=l.name.value,d=n[p];if(l.arguments&&d)for(const E of l.arguments){const y=E.name.value;if(!d.includes(y)){const I=ws(y,d);i.reportError(new q(`Unknown argument "${y}" on directive "@${p}".`+Ss(I),{nodes:E}))}}return!1}}}function vI(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():Ri;for(const u of s)n[u.name]=u.locations;const o=i.getDocument().definitions;for(const u of o)u.kind===v.DIRECTIVE_DEFINITION&&(n[u.name.value]=u.locations.map(l=>l.value));return{Directive(u,l,p,d,E){const y=u.name.value,I=n[y];if(!I){i.reportError(new q(`Unknown directive "@${y}".`,{nodes:u}));return}const w=AI(E);w&&!I.includes(w)&&i.reportError(new q(`Directive "@${y}" may not be used on ${w}.`,{nodes:u}))}}}function AI(i){const n=i[i.length-1];switch("kind"in n||Xn(!1),n.kind){case v.OPERATION_DEFINITION:return bI(n.operation);case v.FIELD:return z.FIELD;case v.FRAGMENT_SPREAD:return z.FRAGMENT_SPREAD;case v.INLINE_FRAGMENT:return z.INLINE_FRAGMENT;case v.FRAGMENT_DEFINITION:return z.FRAGMENT_DEFINITION;case v.VARIABLE_DEFINITION:return z.VARIABLE_DEFINITION;case v.SCHEMA_DEFINITION:case v.SCHEMA_EXTENSION:return z.SCHEMA;case v.SCALAR_TYPE_DEFINITION:case v.SCALAR_TYPE_EXTENSION:return z.SCALAR;case v.OBJECT_TYPE_DEFINITION:case v.OBJECT_TYPE_EXTENSION:return z.OBJECT;case v.FIELD_DEFINITION:return z.FIELD_DEFINITION;case v.INTERFACE_TYPE_DEFINITION:case v.INTERFACE_TYPE_EXTENSION:return z.INTERFACE;case v.UNION_TYPE_DEFINITION:case v.UNION_TYPE_EXTENSION:return z.UNION;case v.ENUM_TYPE_DEFINITION:case v.ENUM_TYPE_EXTENSION:return z.ENUM;case v.ENUM_VALUE_DEFINITION:return z.ENUM_VALUE;case v.INPUT_OBJECT_TYPE_DEFINITION:case v.INPUT_OBJECT_TYPE_EXTENSION:return z.INPUT_OBJECT;case v.INPUT_VALUE_DEFINITION:{const t=i[i.length-3];return"kind"in t||Xn(!1),t.kind===v.INPUT_OBJECT_TYPE_DEFINITION?z.INPUT_FIELD_DEFINITION:z.ARGUMENT_DEFINITION}default:Xn(!1,"Unexpected kind: "+Q(n.kind))}}function bI(i){switch(i){case Pn.QUERY:return z.QUERY;case Pn.MUTATION:return z.MUTATION;case Pn.SUBSCRIPTION:return z.SUBSCRIPTION}}function SI(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);for(const u of i.getDocument().definitions)dr(u)&&(s[u.name.value]=!0);const o=[...Object.keys(t),...Object.keys(s)];return{NamedType(u,l,p,d,E){const y=u.name.value;if(!t[y]&&!s[y]){var I;const w=(I=E[2])!==null&&I!==void 0?I:p,O=w!=null&&wI(w);if(O&&Uc.includes(y))return;const R=ws(y,O?Uc.concat(o):o);i.reportError(new q(`Unknown type "${y}".`+Ss(R),{nodes:u}))}}}}const Uc=[...Fs,...Cs].map(i=>i.name);function wI(i){return"kind"in i&&(DI(i)||II(i))}function FI(i){var n,t,s;const o=i.getSchema(),u=(n=(t=(s=o==null?void 0:o.astNode)!==null&&s!==void 0?s:o==null?void 0:o.getQueryType())!==null&&t!==void 0?t:o==null?void 0:o.getMutationType())!==null&&n!==void 0?n:o==null?void 0:o.getSubscriptionType();let l=0;return{SchemaDefinition(p){if(u){i.reportError(new q("Cannot define a new schema within a schema extension.",{nodes:p}));return}l>0&&i.reportError(new q("Must provide only one schema definition.",{nodes:p})),++l}}}function NI(i){const n=i.getSchema(),t=Object.create(null);for(const o of i.getDocument().definitions)dr(o)&&(t[o.name.value]=o);return{ScalarTypeExtension:s,ObjectTypeExtension:s,InterfaceTypeExtension:s,UnionTypeExtension:s,EnumTypeExtension:s,InputObjectTypeExtension:s};function s(o){const u=o.name.value,l=t[u],p=n==null?void 0:n.getType(u);let d;if(l?d=CI[l.kind]:p&&(d=kI(p)),d){if(d!==o.kind){const E=OI(o.kind);i.reportError(new q(`Cannot extend non-${E} type "${u}".`,{nodes:l?[l,o]:o}))}}else{const E=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),y=ws(u,E);i.reportError(new q(`Cannot extend type "${u}" because it is not defined.`+Ss(y),{nodes:o.name}))}}}const CI={[v.SCALAR_TYPE_DEFINITION]:v.SCALAR_TYPE_EXTENSION,[v.OBJECT_TYPE_DEFINITION]:v.OBJECT_TYPE_EXTENSION,[v.INTERFACE_TYPE_DEFINITION]:v.INTERFACE_TYPE_EXTENSION,[v.UNION_TYPE_DEFINITION]:v.UNION_TYPE_EXTENSION,[v.ENUM_TYPE_DEFINITION]:v.ENUM_TYPE_EXTENSION,[v.INPUT_OBJECT_TYPE_DEFINITION]:v.INPUT_OBJECT_TYPE_EXTENSION};function kI(i){if(Jt(i))return v.SCALAR_TYPE_EXTENSION;if(yn(i))return v.OBJECT_TYPE_EXTENSION;if(cn(i))return v.INTERFACE_TYPE_EXTENSION;if(Kn(i))return v.UNION_TYPE_EXTENSION;if(Zn(i))return v.ENUM_TYPE_EXTENSION;if(et(i))return v.INPUT_OBJECT_TYPE_EXTENSION;Xn(!1,"Unexpected type: "+Q(i))}function OI(i){switch(i){case v.SCALAR_TYPE_EXTENSION:return"scalar";case v.OBJECT_TYPE_EXTENSION:return"object";case v.INTERFACE_TYPE_EXTENSION:return"interface";case v.UNION_TYPE_EXTENSION:return"union";case v.ENUM_TYPE_EXTENSION:return"enum";case v.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Xn(!1,"Unexpected kind: "+Q(i))}}function xI(i){var n;const t=Object.create(null),s=i.getSchema(),o=(n=s==null?void 0:s.getDirectives())!==null&&n!==void 0?n:Ri;for(const p of o)t[p.name]=ki(p.args.filter(aI),d=>d.name);const u=i.getDocument().definitions;for(const p of u)if(p.kind===v.DIRECTIVE_DEFINITION){var l;const d=(l=p.arguments)!==null&&l!==void 0?l:[];t[p.name.value]=ki(d.filter(RI),E=>E.name.value)}return{Directive:{leave(p){const d=p.name.value,E=t[d];if(E){var y;const I=(y=p.arguments)!==null&&y!==void 0?y:[],w=new Set(I.map(O=>O.name.value));for(const[O,R]of Object.entries(E))if(!w.has(O)){const L=Fa(R.type)?Q(R.type):pt(R.type);i.reportError(new q(`Directive "@${d}" argument "${O}" of type "${L}" is required, but it was not provided.`,{nodes:p}))}}}}}}function RI(i){return i.type.kind===v.NON_NULL_TYPE&&i.defaultValue==null}function qt(i,n,t){if(i){if(i.kind===v.VARIABLE){const s=i.name.value;if(t==null||t[s]===void 0)return;const o=t[s];return o===null&&ln(n)?void 0:o}if(ln(n))return i.kind===v.NULL?void 0:qt(i,n.ofType,t);if(i.kind===v.NULL)return null;if(pi(n)){const s=n.ofType;if(i.kind===v.LIST){const u=[];for(const l of i.values)if(Mc(l,t)){if(ln(s))return;u.push(null)}else{const p=qt(l,s,t);if(p===void 0)return;u.push(p)}return u}const o=qt(i,s,t);return o===void 0?void 0:[o]}if(et(n)){if(i.kind!==v.OBJECT)return;const s=Object.create(null),o=ki(i.fields,u=>u.name.value);for(const u of Object.values(n.getFields())){const l=o[u.name];if(!l||Mc(l.value,t)){if(u.defaultValue!==void 0)s[u.name]=u.defaultValue;else if(ln(u.type))return;continue}const p=qt(l.value,u.type,t);if(p===void 0)return;s[u.name]=p}return s}if(Df(n)){let s;try{s=n.parseLiteral(i,t)}catch{return}return s===void 0?void 0:s}Xn(!1,"Unexpected input type: "+Q(n))}}function Mc(i,n){return i.kind===v.VARIABLE&&(n==null||n[i.name.value]===void 0)}function LI(i,n,t){var s;const o={},u=(s=n.arguments)!==null&&s!==void 0?s:[],l=ki(u,p=>p.name.value);for(const p of i.args){const d=p.name,E=p.type,y=l[d];if(!y){if(p.defaultValue!==void 0)o[d]=p.defaultValue;else if(ln(E))throw new q(`Argument "${d}" of required type "${Q(E)}" was not provided.`,{nodes:n});continue}const I=y.value;let w=I.kind===v.NULL;if(I.kind===v.VARIABLE){const R=I.name.value;if(t==null||!BI(t,R)){if(p.defaultValue!==void 0)o[d]=p.defaultValue;else if(ln(E))throw new q(`Argument "${d}" of required type "${Q(E)}" was provided the variable "$${R}" which was not provided a runtime value.`,{nodes:I});continue}w=t[R]==null}if(w&&ln(E))throw new q(`Argument "${d}" of non-null type "${Q(E)}" must not be null.`,{nodes:I});const O=qt(I,E,t);if(O===void 0)throw new q(`Argument "${d}" has invalid value ${pt(I)}.`,{nodes:I});o[d]=O}return o}function $f(i,n,t){var s;const o=(s=n.directives)===null||s===void 0?void 0:s.find(u=>u.name.value===i.name);if(o)return LI(i,o,t)}function BI(i,n){return Object.prototype.hasOwnProperty.call(i,n)}function Uf(i,n){const t=new Map;for(const s of i){const o=n(s),u=t.get(o);u===void 0?t.set(o,[s]):u.push(s)}return t}function PI(i){return{DirectiveDefinition(s){var o;const u=(o=s.arguments)!==null&&o!==void 0?o:[];return t(`@${s.name.value}`,u)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(s){var o;const u=s.name.value,l=(o=s.fields)!==null&&o!==void 0?o:[];for(const d of l){var p;const E=d.name.value,y=(p=d.arguments)!==null&&p!==void 0?p:[];t(`${u}.${E}`,y)}return!1}function t(s,o){const u=Uf(o,l=>l.name.value);for(const[l,p]of u)p.length>1&&i.reportError(new q(`Argument "${s}(${l}:)" can only be defined once.`,{nodes:p.map(d=>d.name)}));return!1}}function $I(i){return{Field:n,Directive:n};function n(t){var s;const o=(s=t.arguments)!==null&&s!==void 0?s:[],u=Uf(o,l=>l.name.value);for(const[l,p]of u)p.length>1&&i.reportError(new q(`There can be only one argument named "${l}".`,{nodes:p.map(d=>d.name)}))}}function UI(i){const n=Object.create(null),t=i.getSchema();return{DirectiveDefinition(s){const o=s.name.value;if(t!=null&&t.getDirective(o)){i.reportError(new q(`Directive "@${o}" already exists in the schema. It cannot be redefined.`,{nodes:s.name}));return}return n[o]?i.reportError(new q(`There can be only one directive named "@${o}".`,{nodes:[n[o],s.name]})):n[o]=s.name,!1}}}function MI(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():Ri;for(const p of s)n[p.name]=!p.isRepeatable;const o=i.getDocument().definitions;for(const p of o)p.kind===v.DIRECTIVE_DEFINITION&&(n[p.name.value]=!p.repeatable);const u=Object.create(null),l=Object.create(null);return{enter(p){if(!("directives"in p)||!p.directives)return;let d;if(p.kind===v.SCHEMA_DEFINITION||p.kind===v.SCHEMA_EXTENSION)d=u;else if(dr(p)||ka(p)){const E=p.name.value;d=l[E],d===void 0&&(l[E]=d=Object.create(null))}else d=Object.create(null);for(const E of p.directives){const y=E.name.value;n[y]&&(d[y]?i.reportError(new q(`The directive "@${y}" can only be used once at this location.`,{nodes:[d[y],E]})):d[y]=E)}}}}function VI(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{EnumTypeDefinition:o,EnumTypeExtension:o};function o(u){var l;const p=u.name.value;s[p]||(s[p]=Object.create(null));const d=(l=u.values)!==null&&l!==void 0?l:[],E=s[p];for(const y of d){const I=y.name.value,w=t[p];Zn(w)&&w.getValue(I)?i.reportError(new q(`Enum value "${p}.${I}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:y.name})):E[I]?i.reportError(new q(`Enum value "${p}.${I}" can only be defined once.`,{nodes:[E[I],y.name]})):E[I]=y.name}return!1}}function jI(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{InputObjectTypeDefinition:o,InputObjectTypeExtension:o,InterfaceTypeDefinition:o,InterfaceTypeExtension:o,ObjectTypeDefinition:o,ObjectTypeExtension:o};function o(u){var l;const p=u.name.value;s[p]||(s[p]=Object.create(null));const d=(l=u.fields)!==null&&l!==void 0?l:[],E=s[p];for(const y of d){const I=y.name.value;GI(t[p],I)?i.reportError(new q(`Field "${p}.${I}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:y.name})):E[I]?i.reportError(new q(`Field "${p}.${I}" can only be defined once.`,{nodes:[E[I],y.name]})):E[I]=y.name}return!1}}function GI(i,n){return yn(i)||cn(i)||et(i)?i.getFields()[n]!=null:!1}function qI(i){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const s=n.pop();s||Xn(!1),t=s}},ObjectField(s){const o=s.name.value;t[o]?i.reportError(new q(`There can be only one input field named "${o}".`,{nodes:[t[o],s.name]})):t[o]=s.name}}}function WI(i){const n=i.getSchema(),t=Object.create(null),s=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:o,SchemaExtension:o};function o(u){var l;const p=(l=u.operationTypes)!==null&&l!==void 0?l:[];for(const d of p){const E=d.operation,y=t[E];s[E]?i.reportError(new q(`Type for ${E} already defined in the schema. It cannot be redefined.`,{nodes:d})):y?i.reportError(new q(`There can be only one ${E} type in schema.`,{nodes:[y,d]})):t[E]=d}return!1}}function QI(i){const n=Object.create(null),t=i.getSchema();return{ScalarTypeDefinition:s,ObjectTypeDefinition:s,InterfaceTypeDefinition:s,UnionTypeDefinition:s,EnumTypeDefinition:s,InputObjectTypeDefinition:s};function s(o){const u=o.name.value;if(t!=null&&t.getType(u)){i.reportError(new q(`Type "${u}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:o.name}));return}return n[u]?i.reportError(new q(`There can be only one type named "${u}".`,{nodes:[n[u],o.name]})):n[u]=o.name,!1}}const zI=Object.freeze([FI,WI,QI,VI,jI,PI,UI,SI,vI,MI,NI,_I,$I,qI,xI]);class YI{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const s of this.getDocument().definitions)s.kind===v.FRAGMENT_DEFINITION&&(t[s.name.value]=s);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const s=[n];let o;for(;o=s.pop();)for(const u of o.selections)u.kind===v.FRAGMENT_SPREAD?t.push(u):u.selectionSet&&s.push(u.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const s=Object.create(null),o=[n.selectionSet];let u;for(;u=o.pop();)for(const l of this.getFragmentSpreads(u)){const p=l.name.value;if(s[p]!==!0){s[p]=!0;const d=this.getFragment(p);d&&(t.push(d),o.push(d.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class JI extends YI{constructor(n,t,s){super(n,s),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function HI(i,n,t=zI){const s=[],o=new JI(i,n,l=>{s.push(l)}),u=t.map(l=>l(o));return gf(i,KD(u)),s}function XI(i){const n=HI(i);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function KI(i,n){kt(i)&&kt(i.__schema)||pe(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${Q(i)}.`);const t=i.__schema,s=ai(t.types,k=>k.name,k=>w(k));for(const k of[...Fs,...Cs])s[k.name]&&(s[k.name]=k);const o=t.queryType?y(t.queryType):null,u=t.mutationType?y(t.mutationType):null,l=t.subscriptionType?y(t.subscriptionType):null,p=t.directives?t.directives.map(mt):[];return new Pf({description:t.description,query:o,mutation:u,subscription:l,types:Object.values(s),directives:p,assumeValid:n==null?void 0:n.assumeValid});function d(k){if(k.kind===Ae.LIST){const Z=k.ofType;if(!Z)throw new Error("Decorated type deeper than introspection query.");return new En(d(Z))}if(k.kind===Ae.NON_NULL){const Z=k.ofType;if(!Z)throw new Error("Decorated type deeper than introspection query.");const sn=d(Z);return new ae(sI(sn))}return E(k)}function E(k){const Z=k.name;if(!Z)throw new Error(`Unknown type reference: ${Q(k)}.`);const sn=s[Z];if(!sn)throw new Error(`Invalid or incomplete schema, unknown type: ${Z}. Ensure that a full introspection query is used in order to build a client schema.`);return sn}function y(k){return tI(E(k))}function I(k){return iI(E(k))}function w(k){if(k!=null&&k.name!=null&&k.kind!=null)switch(k.kind){case Ae.SCALAR:return O(k);case Ae.OBJECT:return L(k);case Ae.INTERFACE:return X(k);case Ae.UNION:return he(k);case Ae.ENUM:return je(k);case Ae.INPUT_OBJECT:return be(k)}const Z=Q(k);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${Z}.`)}function O(k){return new Ot({name:k.name,description:k.description,specifiedByURL:k.specifiedByURL})}function R(k){if(k.interfaces===null&&k.kind===Ae.INTERFACE)return[];if(!k.interfaces){const Z=Q(k);throw new Error(`Introspection result missing interfaces: ${Z}.`)}return k.interfaces.map(I)}function L(k){return new dt({name:k.name,description:k.description,interfaces:()=>R(k),fields:()=>Ce(k)})}function X(k){return new ys({name:k.name,description:k.description,interfaces:()=>R(k),fields:()=>Ce(k)})}function he(k){if(!k.possibleTypes){const Z=Q(k);throw new Error(`Introspection result missing possibleTypes: ${Z}.`)}return new Ts({name:k.name,description:k.description,types:()=>k.possibleTypes.map(y)})}function je(k){if(!k.enumValues){const Z=Q(k);throw new Error(`Introspection result missing enumValues: ${Z}.`)}return new Oi({name:k.name,description:k.description,values:ai(k.enumValues,Z=>Z.name,Z=>({description:Z.description,deprecationReason:Z.deprecationReason}))})}function be(k){if(!k.inputFields){const Z=Q(k);throw new Error(`Introspection result missing inputFields: ${Z}.`)}return new Ds({name:k.name,description:k.description,fields:()=>rn(k.inputFields)})}function Ce(k){if(!k.fields)throw new Error(`Introspection result missing fields: ${Q(k)}.`);return ai(k.fields,Z=>Z.name,Re)}function Re(k){const Z=d(k.type);if(!Tf(Z)){const sn=Q(Z);throw new Error(`Introspection must provide output type for fields, but received: ${sn}.`)}if(!k.args){const sn=Q(k);throw new Error(`Introspection result missing field args: ${sn}.`)}return{description:k.description,deprecationReason:k.deprecationReason,type:Z,args:rn(k.args)}}function rn(k){return ai(k,Z=>Z.name,Ke)}function Ke(k){const Z=d(k.type);if(!yf(Z)){const xt=Q(Z);throw new Error(`Introspection must provide input type for arguments, but received: ${xt}.`)}const sn=k.defaultValue!=null?qt(GD(k.defaultValue),Z):void 0;return{description:k.description,type:Z,defaultValue:sn,deprecationReason:k.deprecationReason}}function mt(k){if(!k.args){const Z=Q(k);throw new Error(`Introspection result missing directive args: ${Z}.`)}if(!k.locations){const Z=Q(k);throw new Error(`Introspection result missing directive locations: ${Z}.`)}return new Yt({name:k.name,description:k.description,isRepeatable:k.isRepeatable,locations:k.locations.slice(),args:rn(k.args)})}}function ZI(i,n,t){var s,o,u,l;const p=[],d=Object.create(null),E=[];let y;const I=[];for(const S of n.definitions)if(S.kind===v.SCHEMA_DEFINITION)y=S;else if(S.kind===v.SCHEMA_EXTENSION)I.push(S);else if(dr(S))p.push(S);else if(ka(S)){const V=S.name.value,P=d[V];d[V]=P?P.concat([S]):[S]}else S.kind===v.DIRECTIVE_DEFINITION&&E.push(S);if(Object.keys(d).length===0&&p.length===0&&E.length===0&&I.length===0&&y==null)return i;const w=Object.create(null);for(const S of i.types)w[S.name]=je(S);for(const S of p){var O;const V=S.name.value;w[V]=(O=Vc[V])!==null&&O!==void 0?O:wn(S)}const R={query:i.query&&X(i.query),mutation:i.mutation&&X(i.mutation),subscription:i.subscription&&X(i.subscription),...y&&sn([y]),...sn(I)};return{description:(s=y)===null||s===void 0||(o=s.description)===null||o===void 0?void 0:o.value,...R,types:Object.values(w),directives:[...i.directives.map(he),...E.map(hr)],extensions:Object.create(null),astNode:(u=y)!==null&&u!==void 0?u:i.astNode,extensionASTNodes:i.extensionASTNodes.concat(I),assumeValid:(l=t==null?void 0:t.assumeValid)!==null&&l!==void 0?l:!1};function L(S){return pi(S)?new En(L(S.ofType)):ln(S)?new ae(L(S.ofType)):X(S)}function X(S){return w[S.name]}function he(S){const V=S.toConfig();return new Yt({...V,args:St(V.args,Z)})}function je(S){if(TI(S)||dI(S))return S;if(Jt(S))return Re(S);if(yn(S))return rn(S);if(cn(S))return Ke(S);if(Kn(S))return mt(S);if(Zn(S))return Ce(S);if(et(S))return be(S);Xn(!1,"Unexpected type: "+Q(S))}function be(S){var V;const P=S.toConfig(),U=(V=d[P.name])!==null&&V!==void 0?V:[];return new Ds({...P,fields:()=>({...St(P.fields,me=>({...me,type:L(me.type)})),...ot(U)}),extensionASTNodes:P.extensionASTNodes.concat(U)})}function Ce(S){var V;const P=S.toConfig(),U=(V=d[S.name])!==null&&V!==void 0?V:[];return new Oi({...P,values:{...P.values,...Mn(U)},extensionASTNodes:P.extensionASTNodes.concat(U)})}function Re(S){var V;const P=S.toConfig(),U=(V=d[P.name])!==null&&V!==void 0?V:[];let me=P.specifiedByURL;for(const ge of U){var $e;me=($e=jc(ge))!==null&&$e!==void 0?$e:me}return new Ot({...P,specifiedByURL:me,extensionASTNodes:P.extensionASTNodes.concat(U)})}function rn(S){var V;const P=S.toConfig(),U=(V=d[P.name])!==null&&V!==void 0?V:[];return new dt({...P,interfaces:()=>[...S.getInterfaces().map(X),...hi(U)],fields:()=>({...St(P.fields,k),...di(U)}),extensionASTNodes:P.extensionASTNodes.concat(U)})}function Ke(S){var V;const P=S.toConfig(),U=(V=d[P.name])!==null&&V!==void 0?V:[];return new ys({...P,interfaces:()=>[...S.getInterfaces().map(X),...hi(U)],fields:()=>({...St(P.fields,k),...di(U)}),extensionASTNodes:P.extensionASTNodes.concat(U)})}function mt(S){var V;const P=S.toConfig(),U=(V=d[P.name])!==null&&V!==void 0?V:[];return new Ts({...P,types:()=>[...S.getTypes().map(X),...Xt(U)],extensionASTNodes:P.extensionASTNodes.concat(U)})}function k(S){return{...S,type:L(S.type),args:S.args&&St(S.args,Z)}}function Z(S){return{...S,type:L(S.type)}}function sn(S){const V={};for(const U of S){var P;const me=(P=U.operationTypes)!==null&&P!==void 0?P:[];for(const $e of me)V[$e.operation]=xt($e.type)}return V}function xt(S){var V;const P=S.name.value,U=(V=Vc[P])!==null&&V!==void 0?V:w[P];if(U===void 0)throw new Error(`Unknown type: "${P}".`);return U}function Ht(S){return S.kind===v.LIST_TYPE?new En(Ht(S.type)):S.kind===v.NON_NULL_TYPE?new ae(Ht(S.type)):xt(S)}function hr(S){var V;return new Yt({name:S.name.value,description:(V=S.description)===null||V===void 0?void 0:V.value,locations:S.locations.map(({value:P})=>P),isRepeatable:S.repeatable,args:mr(S.arguments),astNode:S})}function di(S){const V=Object.create(null);for(const me of S){var P;const $e=(P=me.fields)!==null&&P!==void 0?P:[];for(const ge of $e){var U;V[ge.name.value]={type:Ht(ge.type),description:(U=ge.description)===null||U===void 0?void 0:U.value,args:mr(ge.arguments),deprecationReason:fs(ge),astNode:ge}}}return V}function mr(S){const V=S??[],P=Object.create(null);for(const me of V){var U;const $e=Ht(me.type);P[me.name.value]={type:$e,description:(U=me.description)===null||U===void 0?void 0:U.value,defaultValue:qt(me.defaultValue,$e),deprecationReason:fs(me),astNode:me}}return P}function ot(S){const V=Object.create(null);for(const me of S){var P;const $e=(P=me.fields)!==null&&P!==void 0?P:[];for(const ge of $e){var U;const Fn=Ht(ge.type);V[ge.name.value]={type:Fn,description:(U=ge.description)===null||U===void 0?void 0:U.value,defaultValue:qt(ge.defaultValue,Fn),deprecationReason:fs(ge),astNode:ge}}}return V}function Mn(S){const V=Object.create(null);for(const me of S){var P;const $e=(P=me.values)!==null&&P!==void 0?P:[];for(const ge of $e){var U;V[ge.name.value]={description:(U=ge.description)===null||U===void 0?void 0:U.value,deprecationReason:fs(ge),astNode:ge}}}return V}function hi(S){return S.flatMap(V=>{var P,U;return(P=(U=V.interfaces)===null||U===void 0?void 0:U.map(xt))!==null&&P!==void 0?P:[]})}function Xt(S){return S.flatMap(V=>{var P,U;return(P=(U=V.types)===null||U===void 0?void 0:U.map(xt))!==null&&P!==void 0?P:[]})}function wn(S){var V;const P=S.name.value,U=(V=d[P])!==null&&V!==void 0?V:[];switch(S.kind){case v.OBJECT_TYPE_DEFINITION:{var me;const Ze=[S,...U];return new dt({name:P,description:(me=S.description)===null||me===void 0?void 0:me.value,interfaces:()=>hi(Ze),fields:()=>di(Ze),astNode:S,extensionASTNodes:U})}case v.INTERFACE_TYPE_DEFINITION:{var $e;const Ze=[S,...U];return new ys({name:P,description:($e=S.description)===null||$e===void 0?void 0:$e.value,interfaces:()=>hi(Ze),fields:()=>di(Ze),astNode:S,extensionASTNodes:U})}case v.ENUM_TYPE_DEFINITION:{var ge;const Ze=[S,...U];return new Oi({name:P,description:(ge=S.description)===null||ge===void 0?void 0:ge.value,values:Mn(Ze),astNode:S,extensionASTNodes:U})}case v.UNION_TYPE_DEFINITION:{var Fn;const Ze=[S,...U];return new Ts({name:P,description:(Fn=S.description)===null||Fn===void 0?void 0:Fn.value,types:()=>Xt(Ze),astNode:S,extensionASTNodes:U})}case v.SCALAR_TYPE_DEFINITION:{var Li;return new Ot({name:P,description:(Li=S.description)===null||Li===void 0?void 0:Li.value,specifiedByURL:jc(S),astNode:S,extensionASTNodes:U})}case v.INPUT_OBJECT_TYPE_DEFINITION:{var Rt;const Ze=[S,...U];return new Ds({name:P,description:(Rt=S.description)===null||Rt===void 0?void 0:Rt.value,fields:()=>ot(Ze),astNode:S,extensionASTNodes:U})}}}}const Vc=ki([...Fs,...Cs],i=>i.name);function fs(i){const n=$f(Cf,i);return n==null?void 0:n.reason}function jc(i){const n=$f(kf,i);return n==null?void 0:n.url}function e_(i,n){i!=null&&i.kind===v.DOCUMENT||pe(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&XI(i);const s=ZI({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},i,n);if(s.astNode==null)for(const u of s.types)switch(u.name){case"Query":s.query=u;break;case"Mutation":s.mutation=u;break;case"Subscription":s.subscription=u;break}const o=[...s.directives,...Ri.filter(u=>s.directives.every(l=>l.name!==u.name))];return new Pf({...s,directives:o})}function n_(i,n){const t=jD(i,{noLocation:n==null?void 0:n.noLocation,allowLegacyFragmentVariables:n==null?void 0:n.allowLegacyFragmentVariables});return e_(t,{assumeValidSDL:n==null?void 0:n.assumeValidSDL,assumeValid:n==null?void 0:n.assumeValid})}const Gc=`
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
  This API method allows calling applications to retrieve a total number of the available points
  This end point is only applicable to schemes where Points Expiry is enabled. 
  Equivalent to GET /wallet/accounts + /wallet/{walletId}/account/{accountId}/points/available (or sum of the previous call response)
  """
  CustomerPointsOrRewardsAvailable(identityValue: String!, type: PointsType): CustomerPointsOrRewardsAvailableResponse @cacheControl(maxAge: 10, scope: PRIVATE)
  """
  Retrieve Consumer details by identityValue
  Equivalent to GET /wallet + /wallet/{walletId}/consumer
  """
  CustomerLoyaltyAccount(identityValue: String!): CustomerResponse @cacheControl(maxAge: 10, scope: PRIVATE)
  """
  the same calls different types in request
  Equivalent to GET /wallet/{walletId}/accounts
  """
  CustomerOffersList(identityValue: String!, input: RewardChannelInput): CustomerOffersResponse
  CustomerPointsOrRewardsList(identityValue: String!, type: PointsType, input: RewardChannelInput): CustomerPointsOrRewardsResponse
  """
  This API method allows the calling application to retrieve a paginated list of Transactions for a specific wallet.
  Equivalent to GET /wallet/{walletId}/transactions
  """
  CustomerTransactions(customerTransactionsInput: CustomerTransactionsInput!): CustomerTransactionsResponse @cacheControl(maxAge: 10, scope: PRIVATE)
}


type Mutation {
  """
  Create Wallet and Customer in it
  Equivalent to POST /services/wallet/accounts
  """
  CreateCustomerLoyaltyAccount(customerCreateInput: CustomerCreateInput!): CustomerResponse
  """aka PATCH wallet/{walletId}/consumer/{consumerId}"""
  UpdateCustomerSegmentationList(identityValue: String!, segmentation: [SegmentationListItem]): CustomerSegmentationResponse
  """
  Only update the status
  PATCH /wallet/{walletId}/suspend
  """
  UpdateCustomer(identityValue: String!, updateCustomerInput: UpdateCustomerInput): CustomerResponse
  """Equivalent to POST /services/wallet/backendpoints"""
  UpdateCustomerPointsOrRewards(identityValue: String!, updateCustomerPointsInput: UpdateCustomerPointsInput): Response
  """
  This API method allows the calling application to open a wallet by providing an identity value, walletid, basket content and transactionId
  It also includes options to adjust basket, analyze basket and adjudicate points spend
  POST /connect/wallet/open
  """
  OrderValidate(identityValue: String!, orderValidateInput: OrderValidateInput): OrderValidateResponse
  """
  This API endpoint allows the calling application to work out the financial value of points based on the rules configured against the points scheme. These points are converted using the floor, ceiling, rate, step, bonus and pointsBack values.
  Equivalent to POST /connect/wallet/spend/calculate
  """
  OrderVerifyAvailablePoints(identityValue: String!, orderAvailablePointsInput: OrderAvailablePointsInput): OrderAvailablePointsResponse
  """
  This API applies the calculated operations from the spend-calculate API to a wallet and spends points from a customer's points account. This creates an active Wallet Transaction in the wallet found by the identity passed into the request.
  
  Equivalent to POST /connect/wallet/spend
  """
  OrderSpendPoints(identityValue: String!, orderSpendPointsInput: OrderSpendPointsInput): OrderSpendPointsResponse
  """
  Void an ACTIVE spend transaction against the given wallet and undo the spending of points. This call is used in the case of a cancelled transaction where a customer has spent points but does not wish to complete the settle.
  
  Equivalent to POST /connect/wallet/spend/void
  """
  OrderVoidSpendPoints(identityValue: String!, orderVoidSpendPointsInput: OrderVoidSpendPointsInput): OrderVoidSpendPointsResponse
  """
  This API endpoint allows the calling application to record in AIR a Consumer Transaction, by recording all Account's operations (like Coupon Redemption, Stored Value Credit/Debit amount, Loyalty Points Earn/Spend or Stamp received). Please note each operation on an Account will create an  Account Transaction while overarching Wallet Transaction would link a Consumer's Transaction to individual AIR Account Transactions.
  
  Equivalent to POST /connect/wallet/settle
  """
  OrderSubmit(identityValue: String!, orderSubmitInput: OrderSubmitInput): OrderSubmitResponse
  """
  This API endpoint allows the calling application to record within AIR a refund (return) transaction. Request attribute \`basket\` should contain only a list of returned items (please note each returned item should have the attribute \`salesKey=REFUND\`), allowing  AIR to update the original transaction. If one or more returned items had triggered an offer redemption, then AIR will unredeem appropriate COUPON(s) and depending on a Campaign setting (\`unredeemable\`) will put them back into the Consumer Wallet or Cancel them. Likewise, if loyalty points were earned in the original transaction, then depending on Scheme configuration (\`isRefundable\`)  AIR will debit the difference arisen from the basket differences.
    Please note \`location\` provided to this endpoint will only be used to record where this refund happened (in which Store or Outlet); Settle's transaction location will be used for basket re-analysis, if applicable.
  
  Equivalent to POST /connect/wallet/refund
  """
  OrderReturn(identityValue: String!, orderReturnInput: OrderReturnInput): OrderReturnResponse
  """
  This API method allows the calling application to load a Wallet Account. Currently available for Stored Value account types. If the account is INACTIVE, the load will activate it by default.
  
  Equivalent to PATCH /wallet/{walletId}/account/{accountId}/load
  """
  UnlockOffer(identityValue: String!, rewardChannelID: String!, unlockOfferInput: UnlockOfferInput): UnlockOfferResponse
}


input CustomerTransactionsInput {
  startDate: String
  endDate: String
  pagination: Pagination
  """
  Optional Query parameter for result filtering by Wallet Transaction State(s)
  """
  state: String
  """
  Optional Query parameter for result filtering by Wallet Transaction Status(es)
  """
  status: String
  """
  Query string for Result Filtering by a single store ID (outlet incoming identifier). This can be provided by itself or with storeParentId. This  cannot be used in combination with any other query parameters except for status.
  """
  storeId: String
  """
  Optional Query parameter for result filtering by Wallet Transaction Type(s)
  """
  type: String
  """
  Optional Query parameter for result filtering by Wallet Transaction ID(s)
  """
  transactionId: String
}


input UnlockOfferInput {
  rewardChannelID: String!
  details: DetailsEntityInput
  location: LocationEntityInput
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
  basket: StandardBasketEntityInput!
  location: LocationEntityInput!
  originalTransaction: OriginalTransactionInput!
  """Refund Transaction Reference"""
  reference: String!
}


input StandardBasketEntityInput {
  contents: [StandardBasketContentsCollectionEntityListItem]
  payment: [StandardPaymentEntityListItem]
  summary: RefundSummaryInput
  type: String!
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
  """Settle Transaction Reference"""
  reference: String!
}


type OrderSubmitResponse {
  """Wallet Transaction(s) created as a result of this transaction"""
  transactions: [TransactionEntity]!
}


input OrderSubmitInput {
  basket: EnrichedBasketEntity
  location: LocationEntityInput!
  meta: JSON
  """Mode of operation"""
  mode: OperationMode
  """
  Please note&#58; \`balances\` and \`amount\` are mutually exclusive Request Parameters. The account, to perform the operation on, 
  must be identified by either a \`token\` or an \`accountId\` / \`walletId\` combination.
  """
  operations: [OperationsListItemInput]
  """details TBC"""
  options: JSON
  """Merchant Reference (please note this reference has to be unique)"""
  reference: String!
  transactionDetails: JSON
  """
  If passed, the EES Wallet ID to associate the wallet transaction to. Optional
  """
  walletId: String
  "Contains key-value pairs that are used to override some default transaction values. If the value or the key is not configured for the unit or invalid then it will fallback to the default.\\n"
  transactionOverride: TransactionOverrideEntityInput
  """
  This optional Request attribute allows the calling application to instruct EES AIR to complete the stated operation against a previously created wallet transaction
  """
  transactions: [TransactionsListItemInput]
}


input TransactionsListItemInput {
  """
  Flag to determine if the wallet transaction should be linked as a child of the settle transaction
  """
  link: Boolean!
  """
  The operation to perform against the wallet transaction
    - SETTLE: Mark this wallet transaction as settled
  """
  operationType: OperationType
  """
  Overrides to be used instead of the previous spend wallet transaction's.
  """
  overrides: [OverridesListItemInput]
  """The reference for the transaction to operate upon"""
  reference: String!
  """
  The walletId in which the wallet transaction resides. Provides an element of protection that the correct wallet transaction is being operated upon.
  """
  walletId: String!
}


input OverridesListItemInput {
  """The id of the account the points are being spent from."""
  channelRewardId: String!
  """The balances to override."""
  balances: BalancesInput!
}


"Contains key-value pairs that are used to override some default transaction values. If the value or the key is not configured for the unit or invalid then it will fallback to the default.\\n"
input TransactionOverrideEntityInput {
  """Wallet transaction type"""
  type: String
}


input LocationEntityInput {
  """
  Optional Outlet Incoming Identifier allowing to override location arisen from used API Key of where this transaction has happened
  """
  incomingIdentifier: String!
  """
  Outlet's Parent unit Incoming Identifier allowing to uniquely identify an Outlet override arisen from used API Key location where this transaction has happened. Please note this optional JSON attribute should be used in case incoming identifiers are not unique within a Client's Hierarchy
  """
  parentIncomingIdentifier: String
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
  Optional boolean flag, allowing the calling application to instruct AIR to lock verified Accounts. If provided as true no operations (e.g. spending points or redeeming accounts) will be performed until you Settle the transaction, otherwise operations will be performed.
  """
  lock: Boolean
  """
  The reference of the open transaction to link to as the parent of this spend transaction.
  """
  parentWalletTransactionReference: String
  """
  A unique transaction reference which will be applied to the created wallet transaction
  """
  reference: String
  spendAdjudicationResults: SpendAdjudicationResultsEntityInput
}


input SpendAdjudicationResultsEntityInput {
  """SpendAdjudicationResults Date-Time in ATOM format"""
  analysedDateTime: String
  appliedTier: SpendTierEntityInput
  "The object of balanceAfter.\\n"
  balanceAfter: SpendBalancesAfterEntityInput
  """
  A list of all Scheme Ids which exclude products with their corresponding product identifiers.
  """
  excludedProducts: JSON
  """
  The monetary value of the points that are available to be spent in relation to \`pointsValue\`. This includes any available bonuses applied.
  """
  monetaryValue: Int
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


"The object of balanceAfter.\\n"
input SpendBalancesAfterEntityInput {
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


input SpendOperationsEntityInput {
  """The account against which the determined operation is to be performed."""
  accountId: String
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
  """The walletId in which the account resides."""
  walletId: String
}


input OrderAvailablePointsInput {
  basket: TransactionBasketEntity!
  """
  The currency value for which to use to calculate the points value. Either monetaryValue or pointsValue must be passed in the request.
  """
  monetaryValue: Int!
  """
  Allows the calling application to override the response from the state machine and request a response on the spend calculations regardless of the state machine output.
  """
  overrideTransactionCapabilities: Boolean
  """
  The number of points for which to calculate the financial value. Either monetaryValue or pointsValue must be passed in the request.
  """
  pointsValue: Int!
  """
  The details of the points scheme to find accounts in the target wallet. Either \`id\` or \`reference\` must be passed and not empty
  """
  scheme: SchemeInput
}


"""
The details of the points scheme to find accounts in the target wallet. Either \`id\` or \`reference\` must be passed and not empty
"""
input SchemeInput {
  """
  The schemeId to use to lookup a points account in the wallet associated to the identity passed.
  """
  id: String
  """
  The scheme reference to use to lookup a points account in the wallet associated to the identity passed
  """
  reference: String
}


input UpdateCustomerPointsInput {
  transactionMeta: MetaEntity
  """
  Specifies the amount of points to give to the wallet (value can be negative)
  """
  pointsValue: String!
  """
  The scheme from which points are awarded from - Can be either schemeId or schemeReference
  """
  schemeId: String!
  """A reference the scheme from which points are awarded from"""
  schemeReference: String
  """Wallet ID"""
  walletId: String!
  """Designates the start date of the transaction"""
  transactionDate: String
  """The description of the transaction"""
  transactionDescription: String
  """The referenceId for the transaction."""
  transactionReference: String
  """Designates the state of the transaction"""
  transactionState: String
  """Designates the type of the transaction"""
  transactionType: String
}


input RewardChannelInput {
  """
  Query string for Result Filtering by Campaign Status. Please note enum below contains all possible Campaign statuses
  """
  campaignsStatus: CampaignsStatus
  pagination: Pagination
  state: String
  status: RewardChannelStatus
  """
  Query string for Result filtering by Account Type(s). For single value square brackets could be omitted.
  """
  type: [RewardChannelType]
  """
  Query string for Result Filtering by Account Valid From explicit date-time value or date-time range, for range named key attributes needs to be provided (validFrom[to]=... and/or validFrom[from]=...)
  """
  validFrom: String
  """
  Query string for Result Filtering by Account Valid To explicit date-time value or date-time range, for range named key attributes needs to be provided (validTo[to]=... and/or validTo[from]=...)
  """
  validTo: String
}


input CustomerCreateInput {
  """
  AddressLine1: String
  AddressLine2: String
  Brand: String
  Channel: String
  City: String
  ContactCreatedDate: String
  ContactUpdatedDate: String
  Country: String
  DoNotCall: String
  DoNotEmail: String
  DoNotMail: String
  DoNotPush: String
  DoNotSMS: String
  EcommerceRecordId: String
  EmailAddress: String
  EnrolledDate: String
  FirstName: String
  GroomSMSOptinFlg: String
  HonePhone: String
  LastName: String
  MembershipStatus: String
  MyStoreNumber: String
  OnlineUserId: String
  PalsId: String!
  PgrId: String!
  PreferredName: String
  State: String
  Status: CustomerStatus
  StoreId: String
  ZipCode: String
  """
  friendlyName: String!
  segmentation: [SegmentationListItem]
  channels: [RewardChannelsInput]
  shemas: [Schema]
}


input UpdateCustomerInput {
  """
  AddressLine1: String
  AddressLine2: String
  Brand: String
  Channel: String
  City: String
  ContactCreatedDate: String
  ContactUpdatedDate: String
  Country: String
  DoNotCall: String
  DoNotEmail: String
  DoNotMail: String
  DoNotPush: String
  DoNotSMS: String
  EcommerceRecordId: String
  EmailAddress: String
  EnrolledDate: String
  
  GroomSMSOptinFlg: String
  HonePhone: String
  LastName: String
  MembershipStatus: String
  MyStoreNumber: String
  OnlineUserId: String
  PalsId: String!
  PgrId: String!
  PreferredName: String
  State: String
  StoreId: String
  ZipCode: String
  segmentation: arry SegmentationListItem
  channels: RewardChannelsInput
  """
  Status: CustomerStatus
}


input StandardBasketInput {
  type: BasketType = STANDARD
  summmary: BasketSummaryInput
  contents: [StandardBasketContentsInput!]!
}


input RewardChannelsInput {
  campaign: [RewardChannelCreationInput]
  scheme: [CustomerSchemePayloadInput]
}


input RewardChannelCreationInput {
  """
  The object of balances. Some balances only apply to certain types of accounts. See notes below on balances.
  """
  balances: BalancesEntity
  """Campaign ID"""
  campaignId: String
  """Campaign Tag"""
  campaignTag: String
  currency: String
  dates: DatesEntity
  details: DetailsEntityInput
  location: LocationEntityInput
  meta: MetaEntity
  "The object of overrides. A campaign must allow overrides."
  overrides: RewardChannelOverridesEntityInput
  """Account state"""
  state: String
  """Account Status"""
  status: RewardChannelStatus
  """
  Token Code please note that this will not work if a value is provided for campaignTag, only campaignId
  """
  tokenCode: String
}


input CustomerSchemePayloadInput {
  """
  The object of balances. Some balances only apply to certain types of accounts. See notes below on balances.
  """
  balances: BalancesEntity
  dates: DatesEntity
  details: DetailsEntityInput
  location: LocationEntityInput
  meta: MetaEntity
  schemeId: String!
  """Account state"""
  state: String
  """Account Status"""
  status: RewardChannelStatus
}


input OrderValidateInput {
  """
  Merchant Reference (transaction at pos) (please note this reference has to be unique).
  In combination with \`lock\`, analysed accounts can be locked using this reference
  """
  reference: String!
  """
  Optional boolean flag, allowing the calling application to instruct AIR to lock the accounts in the transaction.
  A \`reference\` must be passed which will be used to lock the transactions
  """
  lock: Boolean!
  """Store Location information from where this call originates"""
  location: LocationEntityInput
  """
  Additionally the calling application could instruct us to perform Analyse Basket and to return back a list of suggestions 
  of what are the applicable offers for that Consumer, based on configured rules and provided Consumer's Basket Content 
  or even request a more sophisticated action like Adjudicate Basket where we would return adjudicated Basket Object 
  with applied applicable promotions, offers, etc.
  """
  options: BasketOptionsInput
  """Contains customer basket information"""
  basket: StandardBasketInput!
}


input StandardBasketContentsInput {
  """Sku of the product in the basket"""
  sku: String
  """Universal product code of the product in the basket"""
  upc: String!
  """SALE/REFUND/FULFIL Flag"""
  salesKey: SalesKey!
  """Product Name"""
  description: String!
  """Item Price per unit, denominated to a smaller currency unit"""
  itemUnitCost: Int!
  """The metric in which the item is measured"""
  itemUnitMetric: ItemUnitMetric
  """Item Quantity"""
  itemUnitCount: Int!
  """Discount per item"""
  itemUnitDiscount: Int!
  """Total cost for this item"""
  totalUnitCost: Int!
  """
  Total cost for this item after discount (please note this does
  not take into account whole basket discounts)
  """
  totalUnitCostAfterDiscount: Int!
  """Tax Rate Percentage"""
  taxRate: Float!
  """Tax Amount for that item, denominated to a smallest currency unit"""
  taxAmount: Int!
  qualifies: QualifiesInput
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
  totalDiscountAmount: TotalDiscountAmountInput
  """Total number of items in the basket"""
  totalItems: Int!
  """
  Total Basket monetary Value after discounts, denominated to a
  smallest currency unit (e.g. for \`USD\` this value should be provided in \`cents\`)
  """
  totalBasketValue: Int!
  totalQualifyingAmount: TotalQualifyingAmountInput
  """
  Total Tax Amount denominated to a smallest currency unit (e.g.
  for \`USD\` this value should be provided in \`cents\`)
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
  """Staff Discount Amount"""
  staff: Int
  """General Discount Amount"""
  general: Int
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
  """
  If set to true, the spend adjudication will be completed regardless of the output from the
  transactionCapabilities analysis. If set to false, analysis will only be performed if
  transactionCapabilities.loyalty.spend is true.
  """
  overrideTransactionCapabilities: Boolean = false
}


input OrderVoidSpendPointsInput {
  """
  A unique transaction reference which will be applied to the created wallet transaction
  """
  reference: String
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
  Outlines the capabilities that a customer is allowed to complete in a transaction. This is an instruction to the POS, for example, to display the spend points options back to the customer
  """
  transactionCapabilities: TransactionCapabilities
  spendAdjudicationResults: SpendAdjudicationResults!
  analyseBasketResults: AnalyseBasketResults
}


type UnlockOfferResponse {
  """
  Account state, managed per retailer base, list of possible enum values could be set-up as part of the Onboarding process.
  """
  state: String!
  """Account Status"""
  status: RewardChannelStatus!
  """EES AIR Account Type."""
  type: RewardChannelType!
  """EES AIR Account ID"""
  rewardChannelID: String!
}


type OrderReturnResponse {
  """Wallet Transaction(s) created as a result of this transaction"""
  transactions: [TransactionEntity]!
}


type OrderSpendPointsResponse {
  """Wallet Transaction(s) created as a result of this settle transaction"""
  transactions: [TransactionEntity]!
}


type OrderVoidSpendPointsResponse {
  """Wallet Transaction(s) created as a result of this settle transaction"""
  transactions: [TransactionEntity]!
}


type OrderAvailablePointsResponse {
  spendAdjudicationResults: SpendAdjudicationResultsEntity
  """
  This object outlines the operations which the customer is allowed to complete in relation to loyalty operations.
  """
  transactionCapabilities: TransactionCapabilities
}


type CustomerOffersResponse {
  pagination: Pagination
  """Array of walletAccountEntities"""
  results: [Offer]
}


type CustomerPointsOrRewardsResponse {
  pagination: Pagination
  """Array of walletAccountEntities"""
  results: [Balance]
}


type CustomerSegmentationResponse {
  segmentation: [SegmentationListItem]
}


type CustomerPointsOrRewardsAvailableResponse {
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
  reference: String!
  """Transaction state"""
  state: String!
  """Transaction status"""
  status: TransactionStatus!
  """Transaction date-time in ATOM format"""
  transactionDateTime: String!
  """Transaction Type, defined per retailer"""
  type: String!
  """Wallet ID"""
  walletId: String!
  """Wallet Transaction ID"""
  transactionId: String!
}


type StandardBasketEntity {
  contents: [StandardBasketContentsCollectionEntityListItem]
  payment: [StandardPaymentEntityListItem]
  summary: BasketSummary
  type: String!
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
  appliedTier: SpendTierEntity
  "The object of balanceAfter.\\n"
  balanceAfter: SpendBalancesAfterEntity
  """
  ?????
  A list of all Scheme Ids which exclude products with their corresponding product identifiers.
  """
  excludedProducts: JSON
  """
  The monetary value of the points that are available to be spent in relation to \`pointsValue\`. This includes any available bonuses applied.
  """
  monetaryValue: Int
  operations: [SpendOperationsEntity]
  """
  The number of points that cannot be spent due to the available tiers and stepping rules.
  """
  pointsRemainder: Int
  """
  The number of points that are allowed to be spent based on the number passed in.
  """
  pointsValue: Int
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


type SpendOperationsEntity {
  """The account against which the determined operation is to be performed."""
  RewardChannelId: String
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
  """The walletId in which the account resides."""
  walletId: String
}


type Schema {
  schemeId: String!
  status: SchemaStatus
  state: SchemaState!
}


type Customer {
  ID: String!
  FirstName: String
  LastName: String
  Meta: MetaEntity
  AvailablePoints: Int
  AvailableRewards: Int
  Offers: [Offer]
  Points: [Points]
  Rewards: [Points]
  PreferredName: String
  Segmentation: [SegmentationListItem]
  State: String
  Status: String
  Type: String
  Tier: [Tier]
  Transactions: [Transaction]
  Shemas: [Schema]
}


type Balance {
  Amount: Int!
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
  """
  A list of all Scheme Ids which exclude products with their corresponding product identifiers.
  """
  excludedProducts: JSON
  """
  The calculated financial value of the points. This will be calculated from the rules configured against the relevant points schemes for each points account.
  """
  monetaryValue: Int
  operations: [OperationsListItem]
  """
  Any points that are not able to be spent due to spend rules configured against the scheme
  """
  pointsRemainder: Int
  """
  The total number of points available to spend aggregated from ALL available points accounts
  """
  pointsValue: Int
}


type OperationsListItem {
  """The account ID to apply the operation against."""
  accountId: String
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
  """The wallet id in which the target account is housed."""
  walletId: String
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
  basket: EnrichedBasketEntity
  bounceBack: [BounceBackEntityListItem]
  discount: [DiscountListItem]
  points: [PointsEntityListItem]
  tender: [TenderListItem]
}


type PointsEntityListItem {
  """EES AIR Account ID"""
  accountId: String
  details: Details
  """Operation Type"""
  operationType: OperationType
  """EES AIR Scheme ID"""
  relatedSchemeId: String
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
  """EES AIR Wallet Id"""
  walletId: String
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
  """Monetary value of points using Scheme rules"""
  totalMonetaryValue: Int
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
  List of segment labels that the entity belongs to for the given segmentation entry. The list can be used to denote hierarchy, lowest indexed items are higher in hierarchy terms. At least one item is required.
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
  Details: [TransactionDetail]
}


type TransactionDetail {
  SaleAmount: String!
  ReturnAmount: String!
  NumberofItems: String!
  ReturnQuantity: String!
  ProductName: String!
  Status: String!
  StoreId: String!
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
  end: String
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


enum PointsType {
  POINTS
  REWARDS
}


enum SchemaStatus {
  ACTIVE
  INACTIVE
}


enum SchemaState {
  EARNBURN
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


interface IResponseStatus {
  responseStatus: ResponseStatus
}


type Response implements IResponseStatus {
  responseStatus: ResponseStatus
}


type ResponseStatus {
  ErrorCode: String
  ErrorMessage: String
  SuccessCode: String
  SuccessMessage: String
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


union TransactionBasketEntity = StandardBasketEntity | EnrichedBasketEntity


directive @cacheControl(maxAge: Int, scope: CacheControlScope, inheritMaxAge: Boolean) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION
`;class t_{constructor(n){De(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var ar;(function(i){i.UNION="union",i.ARGUMENT="argument",i.FIELD="field"})(ar||(ar={}));function i_(i){const n=new Map;return r_(i,t=>{yn(t)&&s_(t,s=>{const o=ga(s.type);aa(n,o).references.push({kind:ar.FIELD,parent:t,by:s}),o_(s,l=>{const p=ga(l.type);aa(n,p).references.push({kind:ar.ARGUMENT,field:s,type:t,by:l})})}),Kn(t)&&t.getTypes().forEach(s=>{aa(n,s).references.push({kind:ar.UNION,by:t})})}),new t_(n)}function r_(i,n){Object.entries(i.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function s_(i,n){Object.entries(i.getFields()).forEach(([,t])=>{n(t)})}function o_(i,n){Object.entries(i.args).forEach(([,t])=>{n(t)})}function aa(i,n){let t=i.get(n.name);return t||(t={references:[]},i.set(n.name,t)),t}function ga(i){return ln(i)||pi(i)?ga(i.ofType):i}const fn=T_(),Ea=Sa(ba.DIRECTIVES,[]);var Wc;const a_=ks((Wc=fn.getQueryType())==null?void 0:Wc.getFields());var Qc;const u_=ks((Qc=fn.getMutationType())==null?void 0:Qc.getFields());var zc;const l_=ks((zc=fn.getSubscriptionType())==null?void 0:zc.getFields()),Oa=Ct.keyBy(Vf(),i=>i.name.toLocaleLowerCase()),c_=Ct.mapValues(Oa,i=>{const n=Ea.find(t=>(t==null?void 0:t.name)===i.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?i.args:n.args.map(t=>i.args.find(s=>s.name===t)).filter(t=>!!t):[]}),f_=ks(fn.getTypeMap()),p_=i_(fn);function ks(i){return Ct.mapKeys(i||{},(n,t)=>t.toLocaleLowerCase())}function d_(){return Ct.size(fn.getTypeMap())<=10}function h_(){return[ua("Queries",fn.getQueryType()),ua("Mutations",fn.getMutationType()),ua("Subscriptions",fn.getSubscriptionType()),D_(),E_()].filter(i=>!!i)}function ua(i,n){return g_(i,m_(n))}function m_(i){return Ct.sortBy((i==null?void 0:i.getFields())||{},n=>n.name)}function g_(i,n){return n.length===0?null:{type:"menu",title:i,children:n.map(t=>({type:"page",title:t.name,section:i,deprecated:!!t.deprecationReason,href:fr.joinUrlPaths(_s,i.toLocaleLowerCase(),t.name)}))}}function E_(){return d_()?null:{type:"menu",title:"Types",children:Ct.sortBy(Ct.map(fn.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:fr.joinUrlPaths(_s,"types",n.name)}))}}function L_(){return!!fn.getQueryType()}function B_(i){return a_[i.toLocaleLowerCase()]}function P_(){return!!fn.getMutationType()}function $_(i){return u_[i.toLocaleLowerCase()]}function U_(){return!!fn.getSubscriptionType()}function M_(i){return l_[i.toLocaleLowerCase()]}function V_(i){return f_[i.toLocaleLowerCase()]}function y_(i){return Oa[i.toLocaleLowerCase()]}function j_(i){return y_(i.name)!==void 0}function G_(){return Ct.size(Oa)>0}function q_(i){return c_[i.name.toLocaleLowerCase()]||[]}function W_(i){if(i)return p_.getFor(i)}function Q_(i){return Ct.flatMap(i.getFields(),n=>({field:n,possibleDescriptions:Mf(n,i)}))}function Mf(i,n){return i?i.description?[{description:i.description,from:n}]:yn(n)?n.getInterfaces().flatMap(t=>Mf(t.getFields()[i.name],t)):[]:[]}function Vf(){return Ea.some(i=>(i==null?void 0:i.name)==="*")?fn.getDirectives().filter(i=>!["include","skip","deprecated","specifiedBy"].includes(i.name)):Ea.filter(i=>!!(i!=null&&i.name)).map(({name:i})=>i?fn.getDirective(i):void 0).filter(i=>!!i)}function T_(){return Gc.trim().length===0?KI(JSON.parse(JSON.stringify({__schema:{types:[]}}))):n_(Gc)}function D_(){const i=Vf();return i.length===0?null:{type:"menu",title:"Directives",children:i.map(n=>({type:"page",title:n.name,href:fr.joinUrlPaths(_s,"directives",n.name),section:"Directives"}))}}const z_=Sa(ba.APP_TITLE,"GraphQL Documentation"),jf=__().concat(h_());A_(jf);const I_=Object.freeze(jf),Y_=v_();function __(){return Sa(ba.PAGES,S_()).filter(n=>!!n).map(n=>qf([],n))}function v_(){const i=b_();if(i)return i.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function A_(i){function n(s,o){for(const u of s){if(u.type==="page"){o(u);continue}u.type==="menu"&&n(u.children,o)}}let t;n(i,s=>{t&&(t.next={title:s.title,section:s.section,href:s.href},s.previous={title:t.title,section:t.section,href:t.href}),t=s})}function b_(){return Gf(()=>!0)}function J_(i){return Gf(n=>n.href.toLocaleLowerCase()===i.toLocaleLowerCase())}function Gf(i){function n(t){for(const s of t){if(s.type==="page"&&i(s))return s;if(s.type==="menu"){const o=n(s.children);if(o)return o}}return null}return n(I_)}function qf(i,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:fr.joinUrlPaths(_s,...i,qc(n.title))};const t=i.concat([qc(n.title)]);return{type:"menu",title:n.title,children:n.content.map(s=>({...qf(t,s),section:n.title}))}}function qc(i){return fr.generatePathSegment(i,new tf)}function S_(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(i=>i.trim()).join(`
`)}]}]}export{L_ as A,tf as B,B_ as C,U_ as D,M_ as E,oI as F,ln as G,pi as H,If as I,Df as J,V_ as K,W_ as L,Q_ as M,j_ as N,v as O,R_ as P,vs as Q,ar as R,Xc as S,O_ as T,tr as U,aD as V,Ct as _,k_ as a,Sa as b,Jn as c,yn as d,ct as e,cn as f,Jc as g,Jt as h,Zn as i,Kn as j,et as k,d_ as l,Ie as m,z_ as n,x_ as o,I_ as p,Y_ as q,J_ as r,fn as s,ba as t,fr as u,G_ as v,y_ as w,q_ as x,P_ as y,$_ as z};
