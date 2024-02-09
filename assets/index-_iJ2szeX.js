import{r as f,c as ot,R as x,j as i,_ as $t}from"./index-qegmBwH1.js";import{s as pt}from"./index-wpIVlVRc.js";import{S as Ht,s as qt,E as it,F as Kt,e as gt,g as xt,u as le,k as me,H as Gt,I as Yt}from"./owner-4YVbz2PN.js";import{t as ke}from"./toast-qMk_Ov--.js";import{u as Ct,a as Qt,b as Jt,c as Re,d as Xt,e as $e,f as Zt,g as en,h as tn,i as bt,M as nn,j as Se,k as sn,l as rn,m as on,s as He,n as K,o as De,E as an,p as cn}from"./Comments-P8C4VA5P.js";import{p as at,A as vt}from"./AutoResizeHeight-pHZ_oyCK.js";import{a as ee,c as qe}from"./helper-0r91fNX5.js";import{c as ln,I as Et}from"./WrappedElementProvider-5243oAX6.js";import{s as un}from"./useQuery-44y7CkOR.js";import{c as dn,d as fn}from"./Markdown-hVdCypI9.js";import{j as Z}from"./store-gmK8mRDy.js";import{A as mn}from"./spring--xEiX8r3.js";import{m as Me}from"./motion-minimal-gJqnz197.js";import{b as yt,d as hn}from"./init-a0893ef4-4662SO8Z.js";import{F as wt}from"./FloatPopover-1BpKQIdq.js";import{T as pn,F as gn,a as xn}from"./FormInput-cQs6MTpb.js";import{p as Cn}from"./dom-NuJWIaAq.js";import{a as bn,g as vn}from"./provider-jumr72cx.js";import{S as ct,M as En}from"./StyledButton-Mj8l6PeD.js";import{u as yn}from"./utils-t32ZRaBl.js";import"./env-y9k74Ds6.js";import"./image-sZM8elMx.js";import"./use-is-dark-13kBJDHw.js";import"./FlexText-sued5-2E.js";import"./SocialSourceLink-c8HgVvxv.js";import"./PinIconToggle-aUENNNd6.js";import"./lodash-Y39_oLIE.js";import"./index-5Y6ZmVAf.js";import"./use-is-unmounted-6i0OwE-p.js";import"./script-SYgWefdU.js";import"./visual-element-YIiczwVf.js";import"./Gallery-MHeEsxti.js";import"./LinkCard-r30gHz-0.js";import"./usePeek-N6a5Jy_H.js";import"./use-is-client-IECHC2ux.js";import"./CodeHighlighter-Sy1nPjje.js";import"./Collapse-Q-wSwlx_.js";import"./use-event-callback-nMlqCkS7.js";import"./CurrentPostDataProvider-sxwUfZTo.js";import"./customParseFormat-3OBJgCTU.js";var wn=class extends Ht{constructor(e,t){super(),this.#t=void 0,this.#s=e,this.setOptions(t),this.bindMethods(),this.#r()}#s;#t;#e;#n;bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){const t=this.options;this.options=this.#s.defaultMutationOptions(e),qt(t,this.options)||this.#s.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#e,observer:this}),this.#e?.setOptions(this.options),t?.mutationKey&&this.options.mutationKey&&it(t.mutationKey)!==it(this.options.mutationKey)&&this.reset()}onUnsubscribe(){this.hasListeners()||this.#e?.removeObserver(this)}onMutationUpdate(e){this.#r(),this.#o(e)}getCurrentResult(){return this.#t}reset(){this.#e?.removeObserver(this),this.#e=void 0,this.#r(),this.#o()}mutate(e,t){return this.#n=t,this.#e?.removeObserver(this),this.#e=this.#s.getMutationCache().build(this.#s,this.options),this.#e.addObserver(this),this.#e.execute(e)}#r(){const e=this.#e?.state??Kt();this.#t={...e,isPending:e.status==="pending",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset}}#o(e){gt.batch(()=>{if(this.#n&&this.hasListeners()){const t=this.#t.variables,n=this.#t.context;e?.type==="success"?(this.#n.onSuccess?.(e.data,t,n),this.#n.onSettled?.(e.data,null,t,n)):e?.type==="error"&&(this.#n.onError?.(e.error,t,n),this.#n.onSettled?.(void 0,e.error,t,n))}this.listeners.forEach(t=>{t(this.#t)})})}};function Rn(e,t){const n=xt(t),[r]=f.useState(()=>new wn(n,e));f.useEffect(()=>{r.setOptions(e)},[r,e]);const s=f.useSyncExternalStore(f.useCallback(a=>r.subscribe(gt.batchCalls(a)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),o=f.useCallback((a,p)=>{r.mutate(a,p).catch(Sn)},[r]);if(s.error&&un(r.options.throwOnError,[s.error]))throw s.error;return{...s,mutate:o,mutateAsync:s.mutate}}function Sn(){}typeof window<"u"&&!window.global&&(window.global=typeof ot>"u"?window:ot);var Rt=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,jn=Object.getOwnPropertyNames,Tn=Object.prototype.hasOwnProperty,On=(e,t)=>{for(var n in t)Rt(e,n,{get:t[n],enumerable:!0})},lt=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of jn(t))!Tn.call(e,s)&&s!==n&&Rt(e,s,{get:()=>t[s],enumerable:!(r=_n(t,s))||r.enumerable});return e},kn=(e,t,n)=>(lt(e,t,"default"),n&&lt(n,t,"default")),Nn=()=>{try{return!1}catch{}return!1},An=()=>{try{return!0}catch{}return!1},ut=new Set,In=(e,t,n)=>{const r=Nn()||An(),s=n??e;ut.has(s)||r||(ut.add(s),console.warn(`Clerk - DEPRECATION WARNING: "${e}" is deprecated and will be removed in the next major release.
${t}`))},Ln={Expired:"expired",Failed:"failed"};new Proxy(Ln,{get(e,t,n){return In("MagicLinkErrorCode","Use `EmailLinkErrorCode` instead."),Reflect.get(e,t,n)}});const Pn="Clerk: You must wrap your application in a <ClerkProvider> component.",Dn=e=>`Clerk: You've passed multiple children components to <${e}/>. You can only pass a single child component or text.`,Mn=e=>t=>{try{return x.Children.only(e)}catch{throw new Error(Dn(t))}},Vn=(e,t)=>(e||(e=t),typeof e=="string"&&(e=x.createElement("button",null,e)),e),zn=e=>(...t)=>{if(e&&typeof e=="function")return e(...t)},oe=()=>{},W=oe(),we=Object,m=e=>e===W,H=e=>typeof e=="function",te=(e,t)=>({...e,...t}),Fn=e=>H(e.then),Ee=new WeakMap;let Wn=0;const ge=e=>{const t=typeof e,n=e&&e.constructor,r=n==Date;let s,o;if(we(e)===e&&!r&&n!=RegExp){if(s=Ee.get(e),s)return s;if(s=++Wn+"~",Ee.set(e,s),n==Array){for(s="@",o=0;o<e.length;o++)s+=ge(e[o])+",";Ee.set(e,s)}if(n==we){s="#";const a=we.keys(e).sort();for(;!m(o=a.pop());)m(e[o])||(s+=o+":"+ge(e[o])+",");Ee.set(e,s)}}else s=r?e.toJSON():t=="symbol"?e.toString():t=="string"?JSON.stringify(e):""+e;return s},G=new WeakMap,Ne={},ye={},Ke="undefined",_e=typeof window!=Ke,Ve=typeof document!=Ke,Un=()=>_e&&typeof window.requestAnimationFrame!=Ke,re=(e,t)=>{const n=G.get(e);return[()=>!m(t)&&e.get(t)||Ne,r=>{if(!m(t)){const s=e.get(t);t in ye||(ye[t]=s),n[5](t,te(s,r),s||Ne)}},n[6],()=>!m(t)&&t in ye?ye[t]:!m(t)&&e.get(t)||Ne]};let ze=!0;const Bn=()=>ze,[Fe,We]=_e&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[oe,oe],$n=()=>{const e=Ve&&document.visibilityState;return m(e)||e!=="hidden"},Hn=e=>(Ve&&document.addEventListener("visibilitychange",e),Fe("focus",e),()=>{Ve&&document.removeEventListener("visibilitychange",e),We("focus",e)}),qn=e=>{const t=()=>{ze=!0,e()},n=()=>{ze=!1};return Fe("online",t),Fe("offline",n),()=>{We("online",t),We("offline",n)}},Kn={isOnline:Bn,isVisible:$n},Gn={initFocus:Hn,initReconnect:qn},dt=!x.useId,xe=!_e||"Deno"in window,Yn=e=>Un()?window.requestAnimationFrame(e):setTimeout(e,1),pe=xe?f.useEffect:f.useLayoutEffect,Ae=typeof navigator<"u"&&navigator.connection,ft=!xe&&Ae&&(["slow-2g","2g"].includes(Ae.effectiveType)||Ae.saveData),ie=e=>{if(H(e))try{e=e()}catch{e=""}const t=e;return e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?ge(e):"",[e,t]};let Qn=0;const Ue=()=>++Qn,St=0,_t=1,jt=2,Jn=3;var he={__proto__:null,ERROR_REVALIDATE_EVENT:Jn,FOCUS_EVENT:St,MUTATE_EVENT:jt,RECONNECT_EVENT:_t};async function Tt(...e){const[t,n,r,s]=e,o=te({populateCache:!0,throwOnError:!0},typeof s=="boolean"?{revalidate:s}:s||{});let a=o.populateCache;const p=o.rollbackOnError;let h=o.optimisticData;const j=o.revalidate!==!1,E=T=>typeof p=="function"?p(T):p!==!1,C=o.throwOnError;if(H(n)){const T=n,w=[],O=t.keys();for(const V of O)!/^\$(inf|sub)\$/.test(V)&&T(t.get(V)._k)&&w.push(V);return Promise.all(w.map(u))}return u(n);async function u(T){const[w]=ie(T);if(!w)return;const[O,V]=re(t,w),[c,$,R,S]=G.get(t),N=c[w],z=()=>j&&(delete R[w],delete S[w],N&&N[0])?N[0](jt).then(()=>O().data):O().data;if(e.length<3)return z();let l=r,d;const y=Ue();$[w]=[y,0];const g=!m(h),A=O(),I=A.data,k=A._c,L=m(k)?I:k;if(g&&(h=H(h)?h(L,I):h,V({data:h,_c:L})),H(l))try{l=l(L)}catch(U){d=U}if(l&&Fn(l))if(l=await l.catch(U=>{d=U}),y!==$[w][0]){if(d)throw d;return l}else d&&g&&E(d)&&(a=!0,l=L,V({data:l,_c:W}));a&&(d||(H(a)&&(l=a(l,L)),V({data:l,error:W,_c:W}))),$[w][1]=Ue();const D=await z();if(V({_c:W}),d){if(C)throw d;return}return a?D:l}}const mt=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},Ot=(e,t)=>{if(!G.has(e)){const n=te(Gn,t),r={},s=Tt.bind(W,e);let o=oe;const a={},p=(E,C)=>{const u=a[E]||[];return a[E]=u,u.push(C),()=>u.splice(u.indexOf(C),1)},h=(E,C,u)=>{e.set(E,C);const T=a[E];if(T)for(const w of T)w(C,u)},j=()=>{if(!G.has(e)&&(G.set(e,[r,{},{},{},s,h,p]),!xe)){const E=n.initFocus(setTimeout.bind(W,mt.bind(W,r,St))),C=n.initReconnect(setTimeout.bind(W,mt.bind(W,r,_t)));o=()=>{E&&E(),C&&C(),G.delete(e)}}};return j(),[e,s,j,o]}return[e,G.get(e)[4]]},Xn=(e,t,n,r,s)=>{const o=n.errorRetryCount,a=s.retryCount,p=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!m(o)&&a>o||setTimeout(r,p,s)},Zn=(e,t)=>ge(e)==ge(t),[je,kt]=Ot(new Map),Nt=te({onLoadingSlow:oe,onSuccess:oe,onError:oe,onErrorRetry:Xn,onDiscarded:oe,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:ft?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:ft?5e3:3e3,compare:Zn,isPaused:()=>!1,cache:je,mutate:kt,fallback:{}},Kn),At=(e,t)=>{const n=te(e,t);if(t){const{use:r,fallback:s}=e,{use:o,fallback:a}=t;r&&o&&(n.use=r.concat(o)),s&&a&&(n.fallback=te(s,a))}return n},Be=f.createContext({}),es=e=>{const{value:t}=e,n=f.useContext(Be),r=H(t),s=f.useMemo(()=>r?t(n):t,[r,n,t]),o=f.useMemo(()=>r?s:At(n,s),[r,n,s]),a=s&&s.provider,p=f.useRef(W);a&&!p.current&&(p.current=Ot(a(o.cache||je),s));const h=p.current;return h&&(o.cache=h[0],o.mutate=h[1]),pe(()=>{if(h)return h[2]&&h[2](),h[3]},[]),f.createElement(Be.Provider,te(e,{value:o}))},It=_e&&window.__SWR_DEVTOOLS_USE__,ts=It?window.__SWR_DEVTOOLS_USE__:[],ns=()=>{It&&(window.__SWR_DEVTOOLS_REACT__=x)},Lt=e=>H(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}],Pt=()=>te(Nt,f.useContext(Be)),ss=(e,t)=>{const[n,r]=ie(e),[,,,s]=G.get(je);if(s[n])return s[n];const o=t(r);return s[n]=o,o},rs=e=>(t,n,r)=>e(t,n&&((...o)=>{const[a]=ie(t),[,,,p]=G.get(je),h=p[a];return m(h)?n(...o):(delete p[a],h)}),r),os=ts.concat(rs),is=e=>function(...n){const r=Pt(),[s,o,a]=Lt(n),p=At(r,a);let h=e;const{use:j}=p,E=(j||[]).concat(os);for(let C=E.length;C--;)h=E[C](h);return h(s,o||p.fetcher||null,p)},as=(e,t,n)=>{const r=t[e]||(t[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s>=0&&(r[s]=r[r.length-1],r.pop())}},cs=(e,t)=>(...n)=>{const[r,s,o]=Lt(n),a=(o.use||[]).concat(t);return e(r,s,{...o,use:a})};ns();const ls=e=>ie(e)[0],ht=x.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e)}),Ie={dedupe:!0},us=(e,t,n)=>{const{cache:r,compare:s,suspense:o,fallbackData:a,revalidateOnMount:p,revalidateIfStale:h,refreshInterval:j,refreshWhenHidden:E,refreshWhenOffline:C,keepPreviousData:u}=n,[T,w,O,V]=G.get(r),[c,$]=ie(e),R=f.useRef(!1),S=f.useRef(!1),N=f.useRef(c),z=f.useRef(t),l=f.useRef(n),d=()=>l.current,y=()=>d().isVisible()&&d().isOnline(),[g,A,I,k]=re(r,c),L=f.useRef({}).current,D=m(a)?n.fallback[c]:a,U=(b,v)=>{for(const M in L){const _=M;if(_==="data"){if(!s(b[_],v[_])&&(!m(b[_])||!s(ve,v[_])))return!1}else if(v[_]!==b[_])return!1}return!0},de=f.useMemo(()=>{const b=!c||!t?!1:m(p)?d().isPaused()||o?!1:m(h)?!0:h:p,v=F=>{const J=te(F);return delete J._k,b?{isValidating:!0,isLoading:!0,...J}:J},M=g(),_=k(),q=v(M),ce=M===_?q:v(_);let P=q;return[()=>{const F=v(g());return U(F,P)?(P.data=F.data,P.isLoading=F.isLoading,P.isValidating=F.isValidating,P.error=F.error,P):(P=F,F)},()=>ce]},[r,c]),ne=pt.useSyncExternalStore(f.useCallback(b=>I(c,(v,M)=>{U(M,v)||b()}),[r,c]),de[0],de[1]),Ce=!R.current,Y=T[c]&&T[c].length>0,se=ne.data,Q=m(se)?D:se,be=ne.error,Xe=f.useRef(Q),ve=u?m(se)?Xe.current:se:Q,Ze=Y&&!m(be)?!1:Ce&&!m(p)?p:d().isPaused()?!1:o?m(Q)?!1:h:m(Q)||h,et=!!(c&&t&&Ce&&Ze),Wt=m(ne.isValidating)?et:ne.isValidating,Ut=m(ne.isLoading)?et:ne.isLoading,fe=f.useCallback(async b=>{const v=z.current;if(!c||!v||S.current||d().isPaused())return!1;let M,_,q=!0;const ce=b||{},P=!O[c]||!ce.dedupe,F=()=>dt?!S.current&&c===N.current&&R.current:c===N.current,J={isValidating:!1,isLoading:!1},nt=()=>{A(J)},st=()=>{const B=O[c];B&&B[1]===_&&delete O[c]},rt={isValidating:!0};m(g().data)&&(rt.isLoading=!0);try{if(P&&(A(rt),n.loadingTimeout&&m(g().data)&&setTimeout(()=>{q&&F()&&d().onLoadingSlow(c,n)},n.loadingTimeout),O[c]=[v($),Ue()]),[M,_]=O[c],M=await M,P&&setTimeout(st,n.dedupingInterval),!O[c]||O[c][1]!==_)return P&&F()&&d().onDiscarded(c),!1;J.error=W;const B=w[c];if(!m(B)&&(_<=B[0]||_<=B[1]||B[1]===0))return nt(),P&&F()&&d().onDiscarded(c),!1;const X=g().data;J.data=s(X,M)?X:M,P&&F()&&d().onSuccess(M,c,n)}catch(B){st();const X=d(),{shouldRetryOnError:Te}=X;X.isPaused()||(J.error=B,P&&F()&&(X.onError(B,c,X),(Te===!0||H(Te)&&Te(B))&&y()&&X.onErrorRetry(B,c,X,Bt=>{const Oe=T[c];Oe&&Oe[0]&&Oe[0](he.ERROR_REVALIDATE_EVENT,Bt)},{retryCount:(ce.retryCount||0)+1,dedupe:!0})))}return q=!1,nt(),!0},[c,r]),tt=f.useCallback((...b)=>Tt(r,N.current,...b),[]);if(pe(()=>{z.current=t,l.current=n,m(se)||(Xe.current=se)}),pe(()=>{if(!c)return;const b=fe.bind(W,Ie);let v=0;const _=as(c,T,(q,ce={})=>{if(q==he.FOCUS_EVENT){const P=Date.now();d().revalidateOnFocus&&P>v&&y()&&(v=P+d().focusThrottleInterval,b())}else if(q==he.RECONNECT_EVENT)d().revalidateOnReconnect&&y()&&b();else{if(q==he.MUTATE_EVENT)return fe();if(q==he.ERROR_REVALIDATE_EVENT)return fe(ce)}});return S.current=!1,N.current=c,R.current=!0,A({_k:$}),Ze&&(m(Q)||xe?b():Yn(b)),()=>{S.current=!0,_()}},[c]),pe(()=>{let b;function v(){const _=H(j)?j(g().data):j;_&&b!==-1&&(b=setTimeout(M,_))}function M(){!g().error&&(E||d().isVisible())&&(C||d().isOnline())?fe(Ie).then(v):v()}return v(),()=>{b&&(clearTimeout(b),b=-1)}},[j,E,C,c]),f.useDebugValue(ve),o&&m(Q)&&c){if(!dt&&xe)throw new Error("Fallback data is required when using suspense in SSR.");z.current=t,l.current=n,S.current=!1;const b=V[c];if(!m(b)){const v=tt(b);ht(v)}if(m(be)){const v=fe(Ie);m(ve)||(v.status="fulfilled",v.value=!0),ht(v)}else throw be}return{mutate:tt,get data(){return L.data=!0,ve},get error(){return L.error=!0,be},get isValidating(){return L.isValidating=!0,Wt},get isLoading(){return L.isLoading=!0,Ut}}},Dt=we.defineProperty(es,"defaultValue",{value:Nt}),Ge=is(us),ds=Object.freeze(Object.defineProperty({__proto__:null,SWRConfig:Dt,default:Ge,mutate:kt,preload:ss,unstable_serialize:ls,useSWRConfig:Pt},Symbol.toStringTag,{value:"Module"})),fs="$inf$",ms=e=>ie(e?e(0,null):null)[0],Le=Promise.resolve(),hs=e=>(t,n,r)=>{const s=f.useRef(!1),{cache:o,initialSize:a=1,revalidateAll:p=!1,persistSize:h=!1,revalidateFirstPage:j=!0,revalidateOnMount:E=!1,parallel:C=!1}=r;let u;try{u=ms(t),u&&(u=fs+u)}catch{}const[T,w,O]=re(o,u),V=f.useCallback(()=>m(T()._l)?a:T()._l,[o,u,a]);pt.useSyncExternalStore(f.useCallback(l=>u?O(u,()=>{l()}):()=>{},[o,u]),V,V);const c=f.useCallback(()=>{const l=T()._l;return m(l)?a:l},[u,a]),$=f.useRef(c());pe(()=>{if(!s.current){s.current=!0;return}u&&w({_l:h?$.current:c()})},[u,o]);const R=E&&!s.current,S=e(u,async l=>{const d=T()._i,y=[],g=c(),[A]=re(o,l),I=A().data,k=[];let L=null;for(let D=0;D<g;++D){const[U,de]=ie(t(D,C?null:L));if(!U)break;const[ne,Ce]=re(o,U);let Y=ne().data;const se=p||d||m(Y)||j&&!D&&!m(I)||R||I&&!m(I[D])&&!r.compare(I[D],Y);if(n&&se){const Q=async()=>{Y=await n(de),Ce({data:Y,_k:de}),y[D]=Y};C?k.push(Q):await Q()}else y[D]=Y;C||(L=Y)}return C&&await Promise.all(k.map(D=>D())),w({_i:W}),y},r),N=f.useCallback(function(l,d){const y=typeof d=="boolean"?{revalidate:d}:d||{},g=y.revalidate!==!1;return u?(g&&(m(l)?w({_i:!0}):w({_i:!1})),arguments.length?S.mutate(l,{...y,revalidate:g}):S.mutate()):Le},[u,o]),z=f.useCallback(l=>{if(!u)return Le;const[,d]=re(o,u);let y;if(H(l)?y=l(c()):typeof l=="number"&&(y=l),typeof y!="number")return Le;d({_l:y}),$.current=y;const g=[],[A]=re(o,u);let I=null;for(let k=0;k<y;++k){const[L]=ie(t(k,I)),[D]=re(o,L),U=L?D().data:W;if(m(U))return N(A().data);g.push(U),I=U}return N(g)},[u,o,N,c]);return{size:c(),setSize:z,mutate:N,get data(){return S.data},get error(){return S.error},get isValidating(){return S.isValidating},get isLoading(){return S.isLoading}}},ps=cs(Ge,hs);function gs(e,t){if(!e)throw typeof t=="string"?new Error(t):new Error(`${t.displayName} not found`)}var ue=(e,t)=>{const{assertCtxFn:n=gs}=t||{},r=x.createContext(void 0);return r.displayName=e,[r,()=>{const a=x.useContext(r);return n(a,`${e} not found`),a.value},()=>{const a=x.useContext(r);return a?a.value:{}}]},Mt={};On(Mt,{SWRConfig:()=>Dt,useSWR:()=>Ge,useSWRInfinite:()=>ps});kn(Mt,ds);var[xs,Cs]=ue("ClerkInstanceContext"),[Lr,bs]=ue("UserContext");ue("ClientContext");ue("SessionContext");ue("OrganizationContext");typeof window<"u"?x.useLayoutEffect:x.useEffect;const[Pr,vs]=[xs,Cs];function Es(e){if(!e)throw new Error(Pn)}const ys=Object.freeze({noGuarantees:Object.freeze({guaranteedLoaded:!1}),guaranteedLoaded:Object.freeze({guaranteedLoaded:!0})}),Ye=x.createContext(void 0);Ye.displayName="StructureContext";const ws=()=>{const e=x.useContext(Ye);return Es(e),e},Rs=({children:e})=>ws().guaranteedLoaded?x.createElement(x.Fragment,null,e):x.createElement(Ye.Provider,{value:ys.guaranteedLoaded},e),ae=(e,t)=>{t=t||e.displayName||e.name||"Component",e.displayName=t;const n=r=>{const s=vs();return s.loaded?x.createElement(Rs,null,x.createElement(e,{...r,clerk:s})):null};return n.displayName=`withClerk(${t})`,n},[Dr,Vt]=ue("AuthContext");function zt(){const e=bs();return e===void 0?{isLoaded:!1,isSignedIn:void 0,user:void 0}:e===null?{isLoaded:!0,isSignedIn:!1,user:null}:{isLoaded:!0,isSignedIn:!0,user:e}}const Ss=({children:e})=>{const{userId:t}=Vt();return t?x.createElement(x.Fragment,null,e):null},_s=({children:e})=>{const{userId:t}=Vt();return t===null?x.createElement(x.Fragment,null,e):null};ae(({clerk:e,...t})=>{const{client:n,session:r}=e,{__unstable__environment:s}=e,o=n.activeSessions&&n.activeSessions.length>0;return x.useEffect(()=>{if(r===null&&o&&s){const{afterSignOutOneUrl:a}=s.displayConfig;e.navigate(a)}else e.redirectToSignIn(t)},[]),null},"RedirectToSignIn");ae(({clerk:e,...t})=>(x.useEffect(()=>{e.redirectToSignUp(t)},[]),null),"RedirectToSignUp");ae(({clerk:e})=>(x.useEffect(()=>{e.redirectToUserProfile()},[]),null),"RedirectToUserProfile");ae(({clerk:e})=>(x.useEffect(()=>{e.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile");ae(({clerk:e})=>(x.useEffect(()=>{e.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization");ae(({clerk:e,...t})=>(x.useEffect(()=>{e.handleRedirectCallback(t)},[]),null),"AuthenticateWithRedirectCallback");const js=ae(({clerk:e,children:t,...n})=>{const{afterSignInUrl:r,afterSignUpUrl:s,redirectUrl:o,mode:a,...p}=n;t=Vn(t,"Sign in");const h=Mn(t)("SignInButton"),j=()=>{const u={afterSignInUrl:r,afterSignUpUrl:s,redirectUrl:o};return a==="modal"?e.openSignIn(u):e.redirectToSignIn(u)},C={...p,onClick:async u=>(await zn(h.props.onClick)(u),j())};return x.cloneElement(h,C)},"SignInButton"),Ts=Ss,Os=_s;function ks({className:e}){return i.jsx("i",{className:ee("icon-[mingcute--send-plane-line]",e)})}const Ns=()=>{const e=tn(),t=bt();return i.jsxs("span",{className:ee("font-mono text-[10px]",e?"text-red-500":"text-zinc-500"),children:[t.length,"/",nn]})},As=()=>{const e=le(),t=$e(),n=yt(Re().isWhisper),r=Se();return e||t?null:i.jsxs("label",{className:"label mx-2 flex items-center",children:[i.jsx("input",{className:"checkbox-accent checkbox checkbox-sm mr-2",checked:n,type:"checkbox",onChange:s=>{const o=s.target.checked;r("isWhisper",o)}}),i.jsx("span",{className:"label-text text-sm",children:"悄悄话"})]})},Is=()=>{const e=le(),t=yt(Re().syncToRecently),n=Se(),r=$e();return!e||r?null:i.jsxs("label",{className:"label mx-2 flex items-center",children:[i.jsx("input",{className:"checkbox-accent checkbox checkbox-sm mr-2",checked:t,type:"checkbox",onChange:s=>{const o=s.target.checked;n("syncToRecently",o)}}),i.jsx("span",{className:"label-text text-sm",children:"同步到碎碎念"})]})},Qe=({className:e})=>{const t=Ct();return i.jsxs("footer",{className:qe("mt-3 flex h-5 w-full min-w-0 items-center justify-between",e),children:[i.jsxs("span",{className:ee("flex-1 select-none text-[10px] text-zinc-500 transition-opacity"),children:[i.jsxs("span",{className:"hidden md:inline",children:["支持 ",i.jsx("b",{children:"Markdown"})," 与"," ",i.jsx(dn,{href:"https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",children:"GFM"})]}),i.jsx(Qt,{})]}),i.jsx(mn,{children:t&&i.jsxs(Me.aside,{initial:{opacity:0,scale:.96,y:8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.98,y:8},className:"flex select-none items-center gap-2.5",children:[i.jsx(Ns,{}),i.jsx(As,{}),i.jsx(Is,{}),i.jsx(Ls,{})]},"send-button-wrapper")})]})},Ls=()=>{const e=Jt(),{text:t,author:n,mail:r,url:s,source:o,avatar:a,isWhisper:p,syncToRecently:h}=Re(),{afterSubmit:j}=Xt(),E=le(),C=xt(),u=$e(),T=Zt(),w=en(),O=R=>(w?.(R),R),{mutate:V,isPending:c}=Rn({mutationFn:async R=>{const S=Z.get(t),N=Z.get(n),z=Z.get(r),l=Z.get(a),d=Z.get(o),y=Z.get(s),g={text:S,author:N,mail:z,avatar:l,source:d,url:y};if(E&&delete g.avatar,Object.keys(g).forEach(k=>{g[k]===""&&delete g[k]}),u)return E?me.comment.proxy.master.reply(R).post({data:{text:S,source:d}}).then(O):me.comment.reply(R,g).then(O);const A=Z.get(p),I=Z.get(h);return E?me.comment.proxy.master.comment(R).post({data:{text:S,source:d}}).then(async k=>(I&&me.recently.proxy.post({data:{content:S,ref:R}}).then(()=>{ke.success("已同步到碎碎念")}),k)).then(O):(g.isWhispers=A,me.comment.comment(R,g).then(O))},mutationKey:[e,"comment"],onError(R){ke.error(Gt(R))},onSuccess(R){j?.();const S=E?"发表成功啦~":u?"感谢你的回复！":"感谢你的评论！",N=sn(T);ke.success(S),Z.set(t,""),C.setQueryData(N,z=>z&&(u?at(z,l=>{const d=(g,A,I)=>{if(g.id===A)return g.children||(g.children=[]),g.children.push({...I,new:!0}),!0;if(g.children){for(const k of g.children)if(d(k,A,I))return!0;return!1}},y={...R,new:!0};for(const g of l.pages)for(const A of g.data)if(d(A,e,y))break}):at(z,l=>{l.pages[0].data.unshift({...R,new:!0})})))}}),$=()=>{V(e)};return i.jsxs(Me.button,{className:"flex appearance-none items-center space-x-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",whileHover:{scale:1.05},whileTap:{scale:.95},type:"button",disabled:c,onClick:$,children:[i.jsx(ks,{className:"h-5 w-5 text-zinc-800 dark:text-zinc-200"}),i.jsx(Me.span,{className:"text-sm",layout:"size",children:c?"送信...":"送信"})]})},Ps=()=>{const e="bg-gray-200/50 dark:bg-zinc-800/50";return i.jsxs("div",{className:"flex animate-pulse gap-4",children:[i.jsx("div",{className:ee("h-12 w-12 self-end overflow-hidden rounded-full",e)}),i.jsx("div",{className:ee("h-[150px] w-full rounded-lg",e)})]})},Ds=fn(()=>$t(()=>import("./EmojiPicker-5MSXy1Rt.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(e=>e.EmojiPicker)),Je=()=>{const e=ln(()=>rn()),t=Se(),n=bt(),r=f.useRef(null),s=f.useCallback(o=>{if(!r.current)return;const a=r.current,p=a.selectionStart,h=a.selectionEnd;a.value=`${a.value.substring(0,p)} ${o} ${a.value.substring(h,a.value.length)}`,t("text",a.value),requestAnimationFrame(()=>{const j=p+o.length+2;a.selectionStart=j,a.selectionEnd=j,a.focus()})},[]);return f.useEffect(()=>{const o=r.current;o&&n!==o.value&&(o.value=n)},[n]),f.useLayoutEffect(()=>{const o=r.current;o&&(o.selectionStart=o.selectionEnd=o.value.length,o.focus())},[]),i.jsx(pn,{ref:r,defaultValue:n,onChange:o=>t("text",o.target.value),placeholder:e,children:i.jsx(on,{children:i.jsx(wt,{trigger:"click",TriggerComponent:Ms,headless:!0,children:i.jsx(Ds,{onEmojiSelect:s})})})})},Ms=()=>i.jsxs("button",{className:"ml-0 inline-flex h-5 w-5 translate-y-1 text-base center md:ml-4",onClick:Cn,children:[i.jsx("i",{className:"icon-[mingcute--emoji-2-line]"}),i.jsx("span",{className:"sr-only",children:"表情"})]}),Vs=()=>{const{user:e}=zt(),t=Se(),n=e?e.fullName||e.lastName||e.firstName||"Anonymous":"";return f.useEffect(()=>{if(!e)return;t("author",n),t("avatar",e.imageUrl),t("mail",e.primaryEmailAddress?.emailAddress||"");const r=e.primaryEmailAddress?.verification.strategy;r&&t("source",r)},[n,t,e]),e?i.jsxs("div",{className:"flex space-x-4",children:[i.jsx("div",{className:ee("mb-2 flex-shrink-0 select-none self-end overflow-hidden rounded-full",'dark:ring-zinc-800" bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800',"ml-[2px] backface-hidden"),children:i.jsx(Et,{className:"rounded-full object-cover",src:e.imageUrl,alt:`${n}'s avatar`,width:48,height:48})}),i.jsx("div",{className:"relative h-[150px] w-full rounded-lg bg-gray-200/50 pb-5 dark:bg-zinc-800/50",children:i.jsx(Je,{})}),i.jsx(Qe,{className:"absolute bottom-0 left-12 right-0 mb-2 ml-4 w-auto px-4"})]}):i.jsx(Ps,{})},zs=()=>le()?i.jsx(Us,{}):i.jsx(Ws,{}),Ft="relative h-[150px] w-full rounded-lg bg-gray-200/50 pb-5 dark:bg-zinc-800/50",Fs={author:"昵称",mail:"邮箱",url:"网址"},Pe=e=>{const{fieldKey:t,required:n}=e,[r,s]=hn(Re()[t]);return i.jsx(xn,{type:"text",value:r,onChange:o=>s(o.target.value),required:n,placeholder:Fs[t]+(n?" *":""),className:"border-0 bg-gray-200/50 dark:bg-zinc-800/50"})},Ws=()=>i.jsxs(gn,{className:"flex flex-col space-y-4 px-2 pt-2",showErrorMessage:!1,children:[i.jsxs("div",{className:"flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0",children:[i.jsx(Pe,{fieldKey:"author",required:!0}),i.jsx(Pe,{fieldKey:"mail",required:!0}),i.jsx(Pe,{fieldKey:"url"})]}),i.jsx("div",{className:qe(Ft,"pb-8"),children:i.jsx(Je,{})}),i.jsx(Qe,{className:"absolute bottom-4 left-0 right-4 mb-2 ml-4 w-auto px-4"})]}),Us=()=>{const e=Yt(t=>t.user);return i.jsxs("div",{className:"flex space-x-4",children:[i.jsx("div",{className:ee("mb-2 flex-shrink-0 select-none self-end overflow-hidden rounded-full",'dark:ring-zinc-800" bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800',"ml-[2px] backface-hidden"),children:i.jsx(Et,{className:"rounded-full object-cover",src:e.avatar,alt:`${e.name||e.username}'s avatar`,width:48,height:48})}),i.jsx("div",{className:Ft,children:i.jsx(Je,{})}),i.jsx(Qe,{className:"absolute bottom-0 left-12 right-0 mb-2 ml-4 w-auto px-4"})]})};function Bs(e){return i.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:i.jsx("path",{d:"M11 15H7C4.79086 15 3 16.7909 3 19C3 20.1046 3.89543 21 5 21H15M16.8744 13C16.2164 13.4935 15.6221 14.066 15.1049 14.7043C15.035 14.7906 15 14.8953 15 15M16.8744 17C16.2164 16.5065 15.6221 15.934 15.1049 15.2957C15.035 15.2094 15 15.1047 15 15M15 15H21M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function $s(){const e=vn(),{dismissAll:t}=bn();return i.jsxs("div",{className:"flex h-[150px] w-full space-x-4 rounded-lg bg-gray-100/80 center dark:bg-zinc-900/80",children:[i.jsx(ct,{variant:"secondary",type:"button",onClick:()=>{He(K.legacy)},children:"免登录评论"}),i.jsx(js,{mode:"modal",redirectUrl:yn(e).href,children:i.jsxs(ct,{onClick:()=>{t()},variant:"primary",type:"button",children:[i.jsx(Bs,{className:"mr-1 h-5 w-5"}),"登录后才可以留言噢"]})})]})}const Hs=()=>{const e=De(),t=`转换到${e===K.legacy?"新":"旧"}版评论`,n=Ct(),r=!!zt(),s=f.useRef(function(){const p=De();return i.jsxs(i.Fragment,{children:[i.jsx("i",{className:ee(p===K.legacy?"icon-[mingcute--user-4-line]":"icon-[material-symbols--dynamic-form-outline]")}),i.jsx("span",{className:"sr-only",children:t})]})}).current;return le()?null:i.jsx(En,{className:ee("absolute left-0 top-0 z-10 rounded-full text-sm","h-6 w-6 border border-slate-200 dark:border-neutral-800","bg-slate-100 dark:bg-neutral-900","flex cursor-pointer text-base-100/50 center","text-base-content/50","opacity-0 transition-opacity duration-200 group-[:hover]:opacity-100",e===K.legacy&&"bottom-0 top-auto",n||r&&e===K["with-auth"]&&"invisible opacity-0"),onClick:()=>{He(e===K.legacy?K["with-auth"]:K.legacy)},children:i.jsx(wt,{TriggerComponent:s,children:t})})},Mr=e=>{const{refId:t,className:n,afterSubmit:r,initialValue:s}=e,o=De(),a=le();return f.useEffect(()=>{a&&He(K.legacy)},[a]),i.jsx(an,{children:i.jsx(cn,{refId:t,afterSubmit:r,initialValue:s,children:i.jsxs("div",{className:qe("group relative w-full min-w-0",n),"data-hide-print":!0,children:[i.jsx(Hs,{}),i.jsx("div",{className:"relative w-full",children:o===K.legacy?i.jsx(qs,{}):i.jsx(Ks,{})})]})})})},qs=()=>i.jsx(vt,{children:i.jsx(zs,{})}),Ks=()=>i.jsxs(vt,{children:[i.jsx(Os,{children:i.jsx($s,{})}),i.jsx(Ts,{children:i.jsx(Vs,{})})]});export{Mr as CommentBoxRoot};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./EmojiPicker-5MSXy1Rt.js","./index-qegmBwH1.js","./index-SRCubG37.css","./use-is-dark-13kBJDHw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
