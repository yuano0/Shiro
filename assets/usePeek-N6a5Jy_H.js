import{r as l,j as t,_ as u}from"./index-qegmBwH1.js";import{m as w}from"./visual-element-YIiczwVf.js";import{u as v,M as j,a as I,c as k,f as C,i as m,m as p}from"./motion-minimal-gJqnz197.js";import{u as P,b as M}from"./owner-4YVbz2PN.js";import"./toast-qMk_Ov--.js";import{a as f}from"./provider-jumr72cx.js";import{L as b}from"./StyledButton-Mj8l6PeD.js";import{u as y}from"./image-sZM8elMx.js";import{m as N}from"./spring--xEiX8r3.js";function _(e){const n=v(()=>w(e)),{isStatic:s}=l.useContext(j);if(s){const[,i]=l.useState(e);l.useEffect(()=>n.on("change",i),[])}return n}function V(e,n){const s=_(n()),i=()=>s.set(n());return i(),I(()=>{const r=()=>C.update(i,!1,!0),o=e.map(a=>a.on("change",r));return()=>{o.forEach(a=>a()),k(i)}}),s}function z(e,...n){const s=e.length;function i(){let r="";for(let o=0;o<s;o++){r+=e[o];const a=n[o];a&&(r+=m(a)?a.get():a)}return r}return V(n.filter(m),i)}var c=(e=>(e.Click="click",e.Interaction="interaction",e.Impression="impression",e))(c||{});const E=e=>{const{shouldTrack:n=!0,...s}=e;return n?t.jsx(x,{...s}):t.jsx(t.Fragment,{children:e.children})},x=l.memo(e=>{const[n,s]=l.useState(!1),i=P(),{ref:r}=y({initialInView:!1,triggerOnce:!0,onChange(o){if(o){if(s(!0),i)return;document.dispatchEvent(new CustomEvent("impression",{detail:{action:e.action??c.Impression,label:e.trackerMessage}})),e.onTrack?.()}}});return t.jsxs(t.Fragment,{children:[e.children,!n&&t.jsx("span",{ref:r})]})});x.displayName="ImpressionView";const d=e=>{const{dismissAll:n,dismissTop:s}=f();return t.jsxs("div",{className:"relative mx-auto mt-[10vh] max-w-full overflow-auto px-2 scrollbar-none lg:max-w-[65rem] lg:p-0",children:[t.jsx(E,{action:c.Impression,trackerMessage:"Peek Modal"}),t.jsx(p.div,{initial:{opacity:.5,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},transition:N,className:"scrollbar-none",children:e.children}),t.jsxs(p.div,{initial:!0,exit:{opacity:0},className:"fixed right-2 top-2 flex items-center gap-4",children:[t.jsxs(b,{className:"flex h-8 w-8 rounded-full p-1 shadow-sm ring-1 ring-zinc-200 center dark:ring-neutral-800",href:e.to,onClick:n,children:[t.jsx("i",{className:"icon-[mingcute--fullscreen-2-line] text-lg"}),t.jsx("span",{className:"sr-only",children:"Go to this link"})]}),t.jsxs("button",{className:"flex h-8 w-8 rounded-full p-1 shadow-sm ring-1 ring-zinc-200 center dark:ring-neutral-800",onClick:s,children:[t.jsx("i",{className:"icon-[mingcute--close-line] text-lg"}),t.jsx("span",{className:"sr-only",children:"Dimiss"})]})]})]})},W=()=>{const e=M(),{present:n}=f();return l.useCallback(s=>{if(e)return;const i={clickOutsideToDismiss:!0,title:"Preview",modalClassName:"relative mx-auto mt-[10vh] scrollbar-none max-w-full overflow-auto px-2 lg:max-w-[65rem] lg:p-0"};return s.startsWith("/notes/")?(requestAnimationFrame(async()=>{const r=await u(()=>import("./NotePreview-EmJiu6Nz.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42]),import.meta.url).then(o=>o.NotePreview);n({...i,CustomModalComponent:()=>t.jsx(d,{to:s,children:t.jsx(r,{noteId:parseInt(s.split("/").pop())})}),content:()=>null})}),!0):s.startsWith("/posts/")?(requestAnimationFrame(async()=>{const r=await u(()=>import("./PostPreview-eQezOeHD.js"),__vite__mapDeps([43,1,2,3,4,5,6,7,8,9,10,11,12,44,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,45]),import.meta.url).then(h=>h.PostPreview),o=s.split("/"),a=o.pop(),g=o.pop();n({...i,CustomModalComponent:()=>t.jsx(d,{to:s,children:t.jsx(r,{category:g,slug:a})}),content:()=>null})}),!0):!1},[e,n])};export{c as T,z as a,W as b,_ as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./NotePreview-EmJiu6Nz.js","./index-qegmBwH1.js","./index-SRCubG37.css","./useQuery-44y7CkOR.js","./owner-4YVbz2PN.js","./toast-qMk_Ov--.js","./init-a0893ef4-4662SO8Z.js","./helper-0r91fNX5.js","./StyledButton-Mj8l6PeD.js","./index-5Y6ZmVAf.js","./motion-minimal-gJqnz197.js","./store-gmK8mRDy.js","./env-y9k74Ds6.js","./utils-t32ZRaBl.js","./WrappedElementProvider-5243oAX6.js","./image-sZM8elMx.js","./use-is-unmounted-6i0OwE-p.js","./lodash-Y39_oLIE.js","./WrappedElementProvider-v7JdpuAw.css","./provider-jumr72cx.js","./spring--xEiX8r3.js","./use-event-callback-nMlqCkS7.js","./dom-NuJWIaAq.js","./visual-element-YIiczwVf.js","./Markdown-hVdCypI9.js","./script-SYgWefdU.js","./FloatPopover-1BpKQIdq.js","./use-is-client-IECHC2ux.js","./Gallery-MHeEsxti.js","./Gallery-ktaGTCNz.css","./LinkCard-r30gHz-0.js","./LinkCard-P0Jx4JBj.css","./SocialSourceLink-c8HgVvxv.js","./CodeHighlighter-Sy1nPjje.js","./use-is-dark-13kBJDHw.js","./CodeHighlighter-hcFZa2QO.css","./Collapse-Q-wSwlx_.js","./Markdown-B8lEAZHM.css","./CurrentPostDataProvider-sxwUfZTo.js","./AutoResizeHeight-pHZ_oyCK.js","./customParseFormat-3OBJgCTU.js","./FlexText-sued5-2E.js","./NotePreview-aX_R-inV.css","./PostPreview-eQezOeHD.js","./index-I7weg1Js.js","./PinIconToggle-aUENNNd6.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
