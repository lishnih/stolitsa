import{d as m,x as l,c as a,e as _,t as d,I as f,J as i,w as h,f as e,h as b,i as y,F as k,M as C,N as v,C as N}from"./CpM2y4kC.js";import{_ as w}from"./CROqfaiD.js";const B={class:"absolute text-sm font-medium py-0.5 group-hover:border-primary-500 -top-1 border border-300 rounded-full bg-white px-3.5 text-gray-600 dark:bg-gray-800 dark:border-gray-500 dark:text-white"},F=m({__name:"Tag2",setup(t){const o=l();return(n,u)=>{var c,s,r;return a(),_("span",B,d((r=(s=(c=f(o))==null?void 0:c.directory)==null?void 0:s.featured)==null?void 0:r.labelForCard),1)}}}),T={class:"flex items-start"},$={class:"p-6"},V={class:"m-0 text-lg font-semibold dark:text-gray-50"},j={class:"line-clamp-4 mt-2"},D={class:"p-0 mt-2 flex gap-2"},z=m({__name:"CardTour",props:["item"],setup(t){var o,n;return(n=(o=l().directory)==null?void 0:o.grid)==null||n.card,(u,c)=>{const s=F,r=v,p=w,g=N;return a(),i(g,{to:t.item._path,class:"col-span-1 rounded relative group transition-all"},{default:h(()=>[e("div",T,[t.item.featured?(a(),i(s,{key:0,class:"ml-6"})):b("",!0),y(r,{sizes:"170px",alt:`${t.item.title} banner`,class:"rounded-t object-cover",src:t.item.card_image??"/mockup170x130.jpg"},null,8,["alt","src"]),e("div",$,[e("h3",V,d(t.item.title),1),e("p",j,d(t.item.description),1),e("div",D,[(a(!0),_(k,null,C(t.item.tags,x=>(a(),i(p,{tag:x},null,8,["tag"]))),256))])])])]),_:1},8,["to"])}}});export{z as _};