import{d as c,x as r,K as p,c as _,e as l,t as m,n as d,I as g,k as u}from"./n2cBHswC.js";const f=c({__name:"Tag",props:["tag"],setup(s){const a=r().directory.tags,o=s,t=a==null?void 0:a.find(e=>e.name===o.tag),n=p(()=>t!=null&&t.color?`${t.color}-tag`:"gray-tag");return(e,i)=>(_(),l("span",{class:d(g(n))},m(s.tag),3))}}),C=u(f,[["__scopeId","data-v-024f4efd"]]);export{C as _};