import{r as s,j as t,R as u}from"./index-qegmBwH1.js";import{c as m,a as d}from"./helper-0r91fNX5.js";import{i as g}from"./index-5Y6ZmVAf.js";import{m as x}from"./motion-minimal-gJqnz197.js";const i=s.forwardRef(({children:e,...a},r)=>t.jsx(x.button,{initial:!0,whileFocus:{scale:1.02},whileHover:{scale:1.02},whileTap:{scale:.95},...a,ref:r,children:e}));i.displayName="MotionButtonBase";const b=s.forwardRef(({className:e,children:a,...r},n)=>t.jsx(i,{ref:n,className:m("inline-flex rounded-full bg-accent p-2 text-center leading-none center hover:opacity-90",e),...r,children:a}));b.displayName="RoundedIconButton";const p=e=>u.createElement("a",e,e.children),l=g({base:"inline-flex select-none cursor-default items-center gap-2 justify-center rounded-lg py-2 px-3 text-sm outline-offset-2 transition active:transition-none",variants:{variant:{primary:d("bg-accent text-zinc-100","active:contrast-125 hover:contrast-[1.10]","font-semibold","disabled:bg-gray-400 disabled:opacity-30 disabled:dark:bg-gray-800 disabled:dark:text-slate-50 disabled:cursor-not-allowed","dark:text-neutral-800"),secondary:d("group rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20","disabled:bg-gray-400 disabled:opacity-30 disabled:dark:bg-gray-800 disabled:dark:text-slate-50 disabled:cursor-not-allowed")}}}),v=({variant:e="primary",className:a,isLoading:r,href:n,...o})=>{const c=r?f:s.Fragment;return t.jsx(c,{children:n?t.jsx(p,{href:n,className:l({variant:e,className:a}),...o}):t.jsx(i,{className:l({variant:e,className:a}),...o})})},f=({children:e})=>t.jsxs("div",{className:"relative",children:[e,t.jsx("div",{className:"absolute inset-0 z-[1] flex items-center justify-center",children:t.jsx("div",{className:"loading loading-spinner h-5 w-5"})})]});export{p as L,i as M,v as S};
