import{_ as g}from"./2G9OSQye.js";import{q as h,d as w,x as b,m as _,L as C,K as v,c as x,J as L,I as i}from"./n2cBHswC.js";import{u as q}from"./BrnIzs0g.js";import"./C5DlTw4B.js";import"./DdL9_jpU.js";import"./yac0UicS.js";import"./RKqRcXcj.js";function A(){return q("board",()=>{const e=h("/dir");return e.where({_extension:"md"}),e.only(["featured","card_image","description","title","_path"]),e.sort({featured:1}).find()})}const P=w({__name:"DirectoryGrid",async setup(f){let e,n;const a=b().directory.grid,c=_("search"),u=_("tags"),{data:l}=([e,n]=C(()=>A()),e=await e,n(),e),y=v(()=>{let t=l.value;return t?(c.value&&(t=t==null?void 0:t.filter(o=>{var s,r;return(((s=o.title)==null?void 0:s.toLowerCase())+((r=o.description)==null?void 0:r.toLowerCase())).includes(c.value.toLowerCase())})),u.value.length>0&&(t=t==null?void 0:t.filter(o=>u.value.every(s=>{var r;return(r=o.tags)==null?void 0:r.includes(s)}))),t):[]});return(t,o)=>{var r,m,p,d;const s=g;return x(),L(s,{listings:i(y)??[],"show-submit":(m=(r=i(a))==null?void 0:r.submit)==null?void 0:m.show,"submit-first":(d=(p=i(a))==null?void 0:p.submit)==null?void 0:d.first},null,8,["listings","show-submit","submit-first"])}}});export{P as default};