import{_ as b}from"./yac0UicS.js";import{d as k,x as v,I as n,c as a,J as s,w as _,h as C,e as f,t as o,f as e,F as w,M as N,n as B,g as F,N as T,C as V}from"./n2cBHswC.js";import{_ as $}from"./RKqRcXcj.js";const j={key:2,class:"w-full h-48 flex justify-center items-center rounded-t font-bold text-2xl bg-gray-200 dark:bg-gray-600"},z={class:"p-6"},D={class:"m-0 text-lg font-semibold dark:text-gray-50"},I={class:"line-clamp-4 mt-2"},L={class:"p-0 mt-2 flex gap-2"},A={class:"inline-flex gap-2 items-center"},E=["src"],J={class:"font-semibold dark:text-gray-50"},M={class:"text-gray-600 dark:text-gray-300"},H=k({__name:"Card",props:["item"],setup(t){var i,c;const r=(c=(i=v().directory)==null?void 0:i.grid)==null?void 0:c.card;return(S,d)=>{var m,g,u;const h=b,y=T,x=$,l=V;return((m=n(r))==null?void 0:m.type)!=="bullet"?(a(),s(l,{key:0,to:t.item._path,class:B(["border col-span-1 border-gray-200 dark:border-gray-500 hover:border-primary-400 hover:border-solid dark:hover:border-primary-300 rounded relative group transition-all",((g=n(r))==null?void 0:g.type)==="shadow"?"shadow-sm":((u=n(r))==null?void 0:u.type)==="dashed"?"border-dashed":""])},{default:_(()=>[t.item.featured?(a(),s(h,{key:0,class:"ml-6"})):C("",!0),t.item.card_image?(a(),s(y,{key:1,sizes:"400px",alt:`${t.item.title} banner`,class:"w-full h-48 rounded-t object-cover",src:t.item.card_image??"/logo.png"},null,8,["alt","src"])):(a(),f("div",j,o(t.item.title),1)),e("div",z,[e("h3",D,o(t.item.title),1),e("p",I,o(t.item.description),1),e("div",L,[(a(!0),f(w,null,N(t.item.tags,p=>(a(),s(x,{tag:p},null,8,["tag"]))),256))])])]),_:1},8,["to","class"])):(a(),s(l,{key:1,to:t.item._path},{default:_(()=>[e("div",A,[e("img",{class:"h-5 w-5",src:t.item.cover??"/logo.png"},null,8,E),e("span",J,o(t.item.title),1),d[0]||(d[0]=F(" - ")),e("span",M,o(t.item.description),1)])]),_:1},8,["to"]))}}});export{H as _};
