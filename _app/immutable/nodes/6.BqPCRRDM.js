import{s as N,e as $,a as w,c as y,b as j,g as A,f as g,F as E,l as m,i as v,h as d,o as z,p as J,t as V,d as B,j as F,Q as K}from"../chunks/scheduler.BbWqj-TM.js";import{S as G,i as Q,c as b,a as k,m as P,t as h,b as _,d as q,f as L,g as O}from"../chunks/index.CK1LLnB4.js";import{e as T}from"../chunks/each.D6YF6ztN.js";import{g as R}from"../chunks/entry.CU-XI1Ay.js";/* empty css                                                          *//* empty css                                                     */import"../chunks/Carousel.svelte_svelte_type_style_lang.DUqvOW5A.js";import{T as D}from"../chunks/Typography.CC4i69qs.js";function U(r){let e=r[1].title+"",t;return{c(){t=V(e)},l(n){t=B(n,e)},m(n,a){v(n,t,a)},p(n,a){a&2&&e!==(e=n[1].title+"")&&F(t,e)},d(n){n&&g(t)}}}function W(r){let e=r[1].type+"",t;return{c(){t=V(e)},l(n){t=B(n,e)},m(n,a){v(n,t,a)},p(n,a){a&2&&e!==(e=n[1].type+"")&&F(t,e)},d(n){n&&g(t)}}}function X(r){let e,t,n,a,l,c,o,i,s,p,C;return c=new D({props:{type:"caption",_color:"var(--secondary-700)",$$slots:{default:[U]},$$scope:{ctx:r}}}),i=new D({props:{type:"body",_color:"var(--secondary-500)",$$slots:{default:[W]},$$scope:{ctx:r}}}),{c(){e=$("div"),t=$("img"),l=w(),b(c.$$.fragment),o=w(),b(i.$$.fragment),this.h()},l(u){e=y(u,"DIV",{class:!0,role:!0,tabindex:!0,"aria-label":!0});var f=j(e);t=y(f,"IMG",{src:!0,alt:!0,class:!0}),l=A(f),k(c.$$.fragment,f),o=A(f),k(i.$$.fragment,f),f.forEach(g),this.h()},h(){E(t.src,n=r[0].src)||m(t,"src",n),m(t,"alt",a=r[1].title),m(t,"class","svelte-gjil8j"),m(e,"class","card svelte-gjil8j"),m(e,"role","button"),m(e,"tabindex","0"),m(e,"aria-label","go to project")},m(u,f){v(u,e,f),d(e,t),d(e,l),P(c,e,null),d(e,o),P(i,e,null),s=!0,p||(C=z(e,"click",function(){J(r[2].click)&&r[2].click.apply(this,arguments)}),p=!0)},p(u,[f]){r=u,(!s||f&1&&!E(t.src,n=r[0].src))&&m(t,"src",n),(!s||f&2&&a!==(a=r[1].title))&&m(t,"alt",a);const I={};f&10&&(I.$$scope={dirty:f,ctx:r}),c.$set(I);const S={};f&10&&(S.$$scope={dirty:f,ctx:r}),i.$set(S)},i(u){s||(h(c.$$.fragment,u),h(i.$$.fragment,u),s=!0)},o(u){_(c.$$.fragment,u),_(i.$$.fragment,u),s=!1},d(u){u&&g(e),q(c),q(i),p=!1,C()}}}function Y(r,e,t){let{content:n}=e,{l10n:a}=e,{args:l}=e;return r.$$set=c=>{"content"in c&&t(0,n=c.content),"l10n"in c&&t(1,a=c.l10n),"args"in c&&t(2,l=c.args)},[n,a,l]}class Z extends G{constructor(e){super(),Q(this,e,Y,X,N,{content:0,l10n:1,args:2})}}function H(r,e,t){const n=r.slice();return n[2]=e[t],n[4]=t,n}function M(r){let e,t;function n(){return r[1](r[4])}return e=new Z({props:{content:{id:r[0][r[4]].id??"",src:r[0][r[4]].src??"https://picsum.photos/700"},l10n:{title:r[0][r[4]].title??"Project Name",type:r[0][r[4]].type??" Project Type"},args:{click:n}}}),{c(){b(e.$$.fragment)},l(a){k(e.$$.fragment,a)},m(a,l){P(e,a,l),t=!0},p(a,l){r=a},i(a){t||(h(e.$$.fragment,a),t=!0)},o(a){_(e.$$.fragment,a),t=!1},d(a){q(e,a)}}}function x(r){let e,t,n,a=T(Array(r[0].length)),l=[];for(let o=0;o<a.length;o+=1)l[o]=M(H(r,a,o));const c=o=>_(l[o],1,1,()=>{l[o]=null});return{c(){e=$("main"),t=$("div");for(let o=0;o<l.length;o+=1)l[o].c();this.h()},l(o){e=y(o,"MAIN",{class:!0});var i=j(e);t=y(i,"DIV",{class:!0});var s=j(t);for(let p=0;p<l.length;p+=1)l[p].l(s);s.forEach(g),i.forEach(g),this.h()},h(){m(t,"class","project svelte-1qruh0x"),m(e,"class","svelte-1qruh0x")},m(o,i){v(o,e,i),d(e,t);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(t,null);n=!0},p(o,[i]){if(i&1){a=T(Array(o[0].length));let s;for(s=0;s<a.length;s+=1){const p=H(o,a,s);l[s]?(l[s].p(p,i),h(l[s],1)):(l[s]=M(p),l[s].c(),h(l[s],1),l[s].m(t,null))}for(O(),s=a.length;s<l.length;s+=1)c(s);L()}},i(o){if(!n){for(let i=0;i<a.length;i+=1)h(l[i]);n=!0}},o(o){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)_(l[i]);n=!1},d(o){o&&g(e),K(l,o)}}}function ee(r){let e=[{id:"1",src:"/images/Projects/Helios.svg",title:"SPS Helios",type:"Commercial Project"}];return[e,n=>R(`/projects/${e[n].id}`)]}class ce extends G{constructor(e){super(),Q(this,e,ee,x,N,{})}}export{ce as component};