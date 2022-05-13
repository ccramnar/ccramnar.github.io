import{P as K,S as ue,i as de,s as ce,e as g,k as N,c as b,a as I,m as O,d as T,b as n,M as ne,g as x,G as c,Q,R as fe,T as he,U as _e,V as pe,W as le,X as me,t as ve,L as ge,h as be,Y as ye,q as Te,r as Ee,p as ke,o as we,Z as Me,n as Ue}from"../../chunks/index-69f66be9.js";import{c as L}from"../../chunks/singletons-d1fb5791.js";L.disable_scroll_handling;L.goto;const Ne=L.invalidate;L.prefetch;L.prefetch_routes;L.before_navigate;L.after_navigate;function W(i,{pending:e,error:t,result:a}={}){let f;async function v(_){const s=f={};_.preventDefault();const u=new FormData(i);e&&e({data:u,form:i});try{const h=await fetch(i.action,{method:i.method,headers:{accept:"application/json"},body:u});if(s!==f)return;if(h.ok){a&&a({data:u,form:i,response:h});const o=new URL(i.action);o.search=o.hash="",Ne(o.href)}else t?t({data:u,form:i,error:null,response:h}):console.error(await h.text())}catch(h){if(t&&h instanceof Error)t({data:u,form:i,error:h,response:null});else throw h}}return i.addEventListener("submit",v),{destroy(){i.removeEventListener("submit",v)}}}function ie(i){const e=i-1;return e*e*e+1}function oe(i,{delay:e=0,duration:t=400,easing:a=ie,start:f=0,opacity:v=0}={}){const _=getComputedStyle(i),s=+_.opacity,u=_.transform==="none"?"":_.transform,h=1-f,o=s*(1-v);return{delay:e,duration:t,easing:a,css:(w,E)=>`
			transform: ${u} scale(${1-h*E});
			opacity: ${s-o*E}
		`}}function Oe(i,{from:e,to:t},a={}){const f=getComputedStyle(i),v=f.transform==="none"?"":f.transform,[_,s]=f.transformOrigin.split(" ").map(parseFloat),u=e.left+e.width*_/t.width-(t.left+_),h=e.top+e.height*s/t.height-(t.top+s),{delay:o=0,duration:w=M=>Math.sqrt(M)*120,easing:E=ie}=a;return{delay:o,duration:K(w)?w(Math.sqrt(u*u+h*h)):w,easing:E,css:(M,p)=>{const y=p*u,R=p*h,r=M+p*e.width/t.width,l=M+p*e.height/t.height;return`transform: ${v} translate(${y}px, ${R}px) scale(${r}, ${l});`}}}function se(i,e,t){const a=i.slice();return a[3]=e[t],a[4]=e,a[5]=t,a}function re(i,e){let t,a,f,v,_,s,u,h,o,w,E,M,p,y,R,r,l,d,S,C,A,P,D,H,X,F,V,j,Y,q,Z,z=Ue,U,J,ee;function te(...k){return e[1](e[3],e[4],e[5],...k)}function ae(){return e[2](e[3],e[4],e[5])}return{key:i,first:null,c(){t=g("div"),a=g("form"),f=g("input"),_=N(),s=g("input"),h=N(),o=g("button"),M=N(),p=g("form"),y=g("input"),r=N(),l=g("input"),S=N(),C=g("button"),A=N(),P=g("form"),D=g("input"),X=N(),F=g("button"),Y=N(),this.h()},l(k){t=b(k,"DIV",{class:!0});var m=I(t);a=b(m,"FORM",{action:!0,method:!0});var B=I(a);f=b(B,"INPUT",{type:!0,name:!0,class:!0}),_=O(B),s=b(B,"INPUT",{type:!0,name:!0,class:!0}),h=O(B),o=b(B,"BUTTON",{class:!0,"aria-label":!0}),I(o).forEach(T),B.forEach(T),M=O(m),p=b(m,"FORM",{class:!0,action:!0,method:!0});var $=I(p);y=b($,"INPUT",{type:!0,name:!0,class:!0}),r=O($),l=b($,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),S=O($),C=b($,"BUTTON",{class:!0,"aria-label":!0}),I(C).forEach(T),$.forEach(T),A=O(m),P=b(m,"FORM",{action:!0,method:!0});var G=I(P);D=b(G,"INPUT",{type:!0,name:!0,class:!0}),X=O(G),F=b(G,"BUTTON",{class:!0,"aria-label":!0}),I(F).forEach(T),G.forEach(T),Y=O(m),m.forEach(T),this.h()},h(){n(f,"type","hidden"),n(f,"name","uid"),f.value=v=e[3].uid,n(f,"class","svelte-16nsat"),n(s,"type","hidden"),n(s,"name","done"),s.value=u=e[3].done?"":"true",n(s,"class","svelte-16nsat"),n(o,"class","toggle svelte-16nsat"),n(o,"aria-label",w="Mark todo as "+(e[3].done?"not done":"done")),n(a,"action","/todos?_method=PATCH"),n(a,"method","post"),n(y,"type","hidden"),n(y,"name","uid"),y.value=R=e[3].uid,n(y,"class","svelte-16nsat"),n(l,"aria-label","Edit todo"),n(l,"type","text"),n(l,"name","text"),l.value=d=e[3].text,n(l,"class","svelte-16nsat"),n(C,"class","save svelte-16nsat"),n(C,"aria-label","Save todo"),n(p,"class","text svelte-16nsat"),n(p,"action","/todos?_method=PATCH"),n(p,"method","post"),n(D,"type","hidden"),n(D,"name","uid"),D.value=H=e[3].uid,n(D,"class","svelte-16nsat"),n(F,"class","delete svelte-16nsat"),n(F,"aria-label","Delete todo"),F.disabled=V=e[3].pending_delete,n(P,"action","/todos?_method=DELETE"),n(P,"method","post"),n(t,"class","todo svelte-16nsat"),ne(t,"done",e[3].done),this.first=t},m(k,m){x(k,t,m),c(t,a),c(a,f),c(a,_),c(a,s),c(a,h),c(a,o),c(t,M),c(t,p),c(p,y),c(p,r),c(p,l),c(p,S),c(p,C),c(t,A),c(t,P),c(P,D),c(P,X),c(P,F),c(t,Y),U=!0,J||(ee=[Q(E=W.call(null,a,{pending:te})),Q(W.call(null,p)),Q(j=W.call(null,P,{pending:ae}))],J=!0)},p(k,m){e=k,(!U||m&1&&v!==(v=e[3].uid))&&(f.value=v),(!U||m&1&&u!==(u=e[3].done?"":"true"))&&(s.value=u),(!U||m&1&&w!==(w="Mark todo as "+(e[3].done?"not done":"done")))&&n(o,"aria-label",w),E&&K(E.update)&&m&1&&E.update.call(null,{pending:te}),(!U||m&1&&R!==(R=e[3].uid))&&(y.value=R),(!U||m&1&&d!==(d=e[3].text)&&l.value!==d)&&(l.value=d),(!U||m&1&&H!==(H=e[3].uid))&&(D.value=H),(!U||m&1&&V!==(V=e[3].pending_delete))&&(F.disabled=V),j&&K(j.update)&&m&1&&j.update.call(null,{pending:ae}),m&1&&ne(t,"done",e[3].done)},r(){Z=t.getBoundingClientRect()},f(){fe(t),z(),he(t,Z)},a(){z(),z=_e(t,Z,Oe,{duration:200})},i(k){U||(k&&pe(()=>{q||(q=le(t,oe,{start:.7},!0)),q.run(1)}),U=!0)},o(k){k&&(q||(q=le(t,oe,{start:.7},!1)),q.run(0)),U=!1},d(k){k&&T(t),k&&q&&q.end(),J=!1,me(ee)}}}function Pe(i){let e,t,a,f,v,_,s,u,h,o=[],w=new Map,E,M,p,y=i[0];const R=r=>r[3].uid;for(let r=0;r<y.length;r+=1){let l=se(i,y,r),d=R(l);w.set(d,o[r]=re(d,l))}return{c(){e=g("meta"),t=N(),a=g("div"),f=g("h1"),v=ve("Todos"),_=N(),s=g("form"),u=g("input"),h=N();for(let r=0;r<o.length;r+=1)o[r].c();this.h()},l(r){const l=ge('[data-svelte="svelte-aw2gey"]',document.head);e=b(l,"META",{name:!0,content:!0}),l.forEach(T),t=O(r),a=b(r,"DIV",{class:!0});var d=I(a);f=b(d,"H1",{});var S=I(f);v=be(S,"Todos"),S.forEach(T),_=O(d),s=b(d,"FORM",{class:!0,action:!0,method:!0});var C=I(s);u=b(C,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),C.forEach(T),h=O(d);for(let A=0;A<o.length;A+=1)o[A].l(d);d.forEach(T),this.h()},h(){document.title="Todos",n(e,"name","description"),n(e,"content","A todo list app"),n(u,"name","text"),n(u,"aria-label","Add todo"),n(u,"placeholder","+ tap to add a todo"),n(u,"class","svelte-16nsat"),n(s,"class","new svelte-16nsat"),n(s,"action","/todos"),n(s,"method","post"),n(a,"class","todos svelte-16nsat")},m(r,l){c(document.head,e),x(r,t,l),x(r,a,l),c(a,f),c(f,v),c(a,_),c(a,s),c(s,u),c(a,h);for(let d=0;d<o.length;d+=1)o[d].m(a,null);E=!0,M||(p=Q(W.call(null,s,{result:Ie})),M=!0)},p(r,[l]){if(l&1){y=r[0],we();for(let d=0;d<o.length;d+=1)o[d].r();o=ye(o,l,R,1,r,y,w,a,Me,re,null,se);for(let d=0;d<o.length;d+=1)o[d].a();Te()}},i(r){if(!E){for(let l=0;l<y.length;l+=1)Ee(o[l]);E=!0}},o(r){for(let l=0;l<o.length;l+=1)ke(o[l]);E=!1},d(r){T(e),r&&T(t),r&&T(a);for(let l=0;l<o.length;l+=1)o[l].d();M=!1,p()}}}const Ie=async({form:i})=>{i.reset()};function Re(i,e,t){let{todos:a}=e;const f=(_,s,u,{data:h})=>{t(0,s[u].done=!!h.get("done"),a)},v=(_,s,u)=>t(0,s[u].pending_delete=!0,a);return i.$$set=_=>{"todos"in _&&t(0,a=_.todos)},[a,f,v]}class Fe extends ue{constructor(e){super(),de(this,e,Re,Pe,ce,{todos:0})}}export{Fe as default};