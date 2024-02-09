var lr=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,P=r=>!r||typeof r!="object"||Object.keys(r).length===0,Sr=(r,t)=>JSON.stringify(r)===JSON.stringify(t);function br(r,t){r.forEach(function(e){Array.isArray(e)?br(e,t):t.push(e)})}function gr(r){let t=[];return br(r,t),t}var vr=(...r)=>gr(r).filter(Boolean),mr=(r,t)=>{let e={},o=Object.keys(r),l=Object.keys(t);for(let a of o)if(l.includes(a)){let n=r[a],s=t[a];typeof n=="object"&&typeof s=="object"?e[a]=mr(n,s):Array.isArray(n)||Array.isArray(s)?e[a]=vr(s,n):e[a]=s+" "+n}else e[a]=r[a];for(let a of l)o.includes(a)||(e[a]=t[a]);return e},cr=r=>!r||typeof r!="string"?r:r.replace(/\s+/g," ").trim();function zr(){for(var r=0,t,e,o="";r<arguments.length;)(t=arguments[r++])&&(e=yr(t))&&(o&&(o+=" "),o+=e);return o}function yr(r){if(typeof r=="string")return r;for(var t,e="",o=0;o<r.length;o++)r[o]&&(t=yr(r[o]))&&(e&&(e+=" "),e+=t);return e}var ar="-";function Gr(r){var t=jr(r),e=r.conflictingClassGroups,o=r.conflictingClassGroupModifiers,l=o===void 0?{}:o;function a(s){var c=s.split(ar);return c[0]===""&&c.length!==1&&c.shift(),hr(c,t)||Ir(s)}function n(s,c){var m=e[s]||[];return c&&l[s]?[].concat(m,l[s]):m}return{getClassGroupId:a,getConflictingClassGroupIds:n}}function hr(r,t){if(r.length===0)return t.classGroupId;var e=r[0],o=t.nextPart.get(e),l=o?hr(r.slice(1),o):void 0;if(l)return l;if(t.validators.length!==0){var a=r.join(ar);return t.validators.find(function(n){var s=n.validator;return s(a)})?.classGroupId}}var dr=/^\[(.+)\]$/;function Ir(r){if(dr.test(r)){var t=dr.exec(r)[1],e=t?.substring(0,t.indexOf(":"));if(e)return"arbitrary.."+e}}function jr(r){var t=r.theme,e=r.prefix,o={nextPart:new Map,validators:[]},l=Rr(Object.entries(r.classGroups),e);return l.forEach(function(a){var n=a[0],s=a[1];er(s,o,n,t)}),o}function er(r,t,e,o){r.forEach(function(l){if(typeof l=="string"){var a=l===""?t:ur(t,l);a.classGroupId=e;return}if(typeof l=="function"){if(Pr(l)){er(l(o),t,e,o);return}t.validators.push({validator:l,classGroupId:e});return}Object.entries(l).forEach(function(n){var s=n[0],c=n[1];er(c,ur(t,s),e,o)})})}function ur(r,t){var e=r;return t.split(ar).forEach(function(o){e.nextPart.has(o)||e.nextPart.set(o,{nextPart:new Map,validators:[]}),e=e.nextPart.get(o)}),e}function Pr(r){return r.isThemeGetter}function Rr(r,t){return t?r.map(function(e){var o=e[0],l=e[1],a=l.map(function(n){return typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(function(s){var c=s[0],m=s[1];return[t+c,m]})):n});return[o,a]}):r}function Tr(r){if(r<1)return{get:function(){},set:function(){}};var t=0,e=new Map,o=new Map;function l(a,n){e.set(a,n),t++,t>r&&(t=0,o=e,e=new Map)}return{get:function(n){var s=e.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return l(n,s),s},set:function(n,s){e.has(n)?e.set(n,s):l(n,s)}}}var wr="!";function Nr(r){var t=r.separator||":",e=t.length===1,o=t[0],l=t.length;return function(n){for(var s=[],c=0,m=0,b,y=0;y<n.length;y++){var k=n[y];if(c===0){if(k===o&&(e||n.slice(y,y+l)===t)){s.push(n.slice(m,y)),m=y+l;continue}if(k==="/"){b=y;continue}}k==="["?c++:k==="]"&&c--}var G=s.length===0?n:n.substring(m),S=G.startsWith(wr),C=S?G.substring(1):G,I=b&&b>m?b-m:void 0;return{modifiers:s,hasImportantModifier:S,baseClassName:C,maybePostfixModifierPosition:I}}}function Or(r){if(r.length<=1)return r;var t=[],e=[];return r.forEach(function(o){var l=o[0]==="[";l?(t.push.apply(t,e.sort().concat([o])),e=[]):e.push(o)}),t.push.apply(t,e.sort()),t}function Er(r){return{cache:Tr(r.cacheSize),splitModifiers:Nr(r),...Gr(r)}}var Wr=/\s+/;function Vr(r,t){var e=t.splitModifiers,o=t.getClassGroupId,l=t.getConflictingClassGroupIds,a=new Set;return r.trim().split(Wr).map(function(n){var s=e(n),c=s.modifiers,m=s.hasImportantModifier,b=s.baseClassName,y=s.maybePostfixModifierPosition,k=o(y?b.substring(0,y):b),G=!!y;if(!k){if(!y)return{isTailwindClass:!1,originalClassName:n};if(k=o(b),!k)return{isTailwindClass:!1,originalClassName:n};G=!1}var S=Or(c).join(":"),C=m?S+wr:S;return{isTailwindClass:!0,modifierId:C,classGroupId:k,originalClassName:n,hasPostfixModifier:G}}).reverse().filter(function(n){if(!n.isTailwindClass)return!0;var s=n.modifierId,c=n.classGroupId,m=n.hasPostfixModifier,b=s+c;return a.has(b)?!1:(a.add(b),l(c,m).forEach(function(y){return a.add(s+y)}),!0)}).reverse().map(function(n){return n.originalClassName}).join(" ")}function tr(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];var o,l,a,n=s;function s(m){var b=t[0],y=t.slice(1),k=y.reduce(function(G,S){return S(G)},b());return o=Er(k),l=o.cache.get,a=o.cache.set,n=c,c(m)}function c(m){var b=l(m);if(b)return b;var y=Vr(m,o);return a(m,y),y}return function(){return n(zr.apply(null,arguments))}}function x(r){var t=function(o){return o[r]||[]};return t.isThemeGetter=!0,t}var xr=/^\[(?:([a-z-]+):)?(.+)\]$/i,Lr=/^\d+\/\d+$/,$r=new Set(["px","full","screen"]),Br=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ur=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Fr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function N(r){return E(r)||$r.has(r)||Lr.test(r)||or(r)}function or(r){return W(r,"length",Qr)}function Jr(r){return W(r,"size",Ar)}function qr(r){return W(r,"position",Ar)}function Zr(r){return W(r,"url",Yr)}function _(r){return W(r,"number",E)}function E(r){return!Number.isNaN(Number(r))}function Hr(r){return r.endsWith("%")&&E(r.slice(0,-1))}function Z(r){return fr(r)||W(r,"number",fr)}function f(r){return xr.test(r)}function H(){return!0}function O(r){return Br.test(r)}function Xr(r){return W(r,"",_r)}function W(r,t,e){var o=xr.exec(r);return o?o[1]?o[1]===t:e(o[2]):!1}function Qr(r){return Ur.test(r)}function Ar(){return!1}function Yr(r){return r.startsWith("url(")}function fr(r){return Number.isInteger(Number(r))}function _r(r){return Fr.test(r)}function nr(){var r=x("colors"),t=x("spacing"),e=x("blur"),o=x("brightness"),l=x("borderColor"),a=x("borderRadius"),n=x("borderSpacing"),s=x("borderWidth"),c=x("contrast"),m=x("grayscale"),b=x("hueRotate"),y=x("invert"),k=x("gap"),G=x("gradientColorStops"),S=x("gradientColorStopPositions"),C=x("inset"),I=x("margin"),w=x("opacity"),R=x("padding"),L=x("saturate"),$=x("scale"),Y=x("sepia"),B=x("skew"),U=x("space"),F=x("translate"),V=function(){return["auto","contain","none"]},J=function(){return["auto","hidden","clip","visible","scroll"]},q=function(){return["auto",f,t]},i=function(){return[f,t]},u=function(){return["",N]},d=function(){return["auto",E,f]},g=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},p=function(){return["solid","dashed","dotted","double","none"]},v=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},h=function(){return["start","end","center","between","around","evenly","stretch"]},A=function(){return["","0",f]},M=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},T=function(){return[E,_]},j=function(){return[E,f]};return{cacheSize:500,theme:{colors:[H],spacing:[N],blur:["none","",O,f],brightness:T(),borderColor:[r],borderRadius:["none","","full",O,f],borderSpacing:i(),borderWidth:u(),contrast:T(),grayscale:A(),hueRotate:j(),invert:A(),gap:i(),gradientColorStops:[r],gradientColorStopPositions:[Hr,or],inset:q(),margin:q(),opacity:T(),padding:i(),saturate:T(),scale:T(),sepia:A(),skew:j(),space:i(),translate:i()},classGroups:{aspect:[{aspect:["auto","square","video",f]}],container:["container"],columns:[{columns:[O]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(g(),[f])}],overflow:[{overflow:J()}],"overflow-x":[{"overflow-x":J()}],"overflow-y":[{"overflow-y":J()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[C]}],"inset-x":[{"inset-x":[C]}],"inset-y":[{"inset-y":[C]}],start:[{start:[C]}],end:[{end:[C]}],top:[{top:[C]}],right:[{right:[C]}],bottom:[{bottom:[C]}],left:[{left:[C]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Z]}],basis:[{basis:q()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",f]}],grow:[{grow:A()}],shrink:[{shrink:A()}],order:[{order:["first","last","none",Z]}],"grid-cols":[{"grid-cols":[H]}],"col-start-end":[{col:["auto",{span:["full",Z]},f]}],"col-start":[{"col-start":d()}],"col-end":[{"col-end":d()}],"grid-rows":[{"grid-rows":[H]}],"row-start-end":[{row:["auto",{span:[Z]},f]}],"row-start":[{"row-start":d()}],"row-end":[{"row-end":d()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",f]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",f]}],gap:[{gap:[k]}],"gap-x":[{"gap-x":[k]}],"gap-y":[{"gap-y":[k]}],"justify-content":[{justify:["normal"].concat(h())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(h(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(h(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[R]}],px:[{px:[R]}],py:[{py:[R]}],ps:[{ps:[R]}],pe:[{pe:[R]}],pt:[{pt:[R]}],pr:[{pr:[R]}],pb:[{pb:[R]}],pl:[{pl:[R]}],m:[{m:[I]}],mx:[{mx:[I]}],my:[{my:[I]}],ms:[{ms:[I]}],me:[{me:[I]}],mt:[{mt:[I]}],mr:[{mr:[I]}],mb:[{mb:[I]}],ml:[{ml:[I]}],"space-x":[{"space-x":[U]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[U]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",f,t]}],"min-w":[{"min-w":["min","max","fit",f,N]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[O]},O,f]}],h:[{h:[f,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",f,N]}],"max-h":[{"max-h":[f,t,"min","max","fit"]}],"font-size":[{text:["base",O,or]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",_]}],"font-family":[{font:[H]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",f]}],"line-clamp":[{"line-clamp":["none",E,_]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",f,N]}],"list-image":[{"list-image":["none",f]}],"list-style-type":[{list:["none","disc","decimal",f]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[w]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[w]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(p(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",N]}],"underline-offset":[{"underline-offset":["auto",f,N]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:i()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",f]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",f]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[w]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(g(),[qr])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Jr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Zr]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[G]}],"gradient-via":[{via:[G]}],"gradient-to":[{to:[G]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[w]}],"border-style":[{border:[].concat(p(),["hidden"])}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[w]}],"divide-style":[{divide:p()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:[""].concat(p())}],"outline-offset":[{"outline-offset":[f,N]}],"outline-w":[{outline:[N]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:u()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[w]}],"ring-offset-w":[{"ring-offset":[N]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",O,Xr]}],"shadow-color":[{shadow:[H]}],opacity:[{opacity:[w]}],"mix-blend":[{"mix-blend":v()}],"bg-blend":[{"bg-blend":v()}],filter:[{filter:["","none"]}],blur:[{blur:[e]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",O,f]}],grayscale:[{grayscale:[m]}],"hue-rotate":[{"hue-rotate":[b]}],invert:[{invert:[y]}],saturate:[{saturate:[L]}],sepia:[{sepia:[Y]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[e]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[m]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b]}],"backdrop-invert":[{"backdrop-invert":[y]}],"backdrop-opacity":[{"backdrop-opacity":[w]}],"backdrop-saturate":[{"backdrop-saturate":[L]}],"backdrop-sepia":[{"backdrop-sepia":[Y]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[n]}],"border-spacing-x":[{"border-spacing-x":[n]}],"border-spacing-y":[{"border-spacing-y":[n]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",f]}],duration:[{duration:j()}],ease:[{ease:["linear","in","out","in-out",f]}],delay:[{delay:j()}],animate:[{animate:["none","spin","ping","pulse","bounce",f]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[$]}],"scale-x":[{"scale-x":[$]}],"scale-y":[{"scale-y":[$]}],rotate:[{rotate:[Z,f]}],"translate-x":[{"translate-x":[F]}],"translate-y":[{"translate-y":[F]}],"skew-x":[{"skew-x":[B]}],"skew-y":[{"skew-y":[B]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",f]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",f]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":i()}],"scroll-mx":[{"scroll-mx":i()}],"scroll-my":[{"scroll-my":i()}],"scroll-ms":[{"scroll-ms":i()}],"scroll-me":[{"scroll-me":i()}],"scroll-mt":[{"scroll-mt":i()}],"scroll-mr":[{"scroll-mr":i()}],"scroll-mb":[{"scroll-mb":i()}],"scroll-ml":[{"scroll-ml":i()}],"scroll-p":[{"scroll-p":i()}],"scroll-px":[{"scroll-px":i()}],"scroll-py":[{"scroll-py":i()}],"scroll-ps":[{"scroll-ps":i()}],"scroll-pe":[{"scroll-pe":i()}],"scroll-pt":[{"scroll-pt":i()}],"scroll-pr":[{"scroll-pr":i()}],"scroll-pb":[{"scroll-pb":i()}],"scroll-pl":[{"scroll-pl":i()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",f]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[N,_]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}function Dr(r,t){for(var e in t)Cr(r,e,t[e]);return r}var Kr=Object.prototype.hasOwnProperty,re=new Set(["string","number","boolean"]);function Cr(r,t,e){if(!Kr.call(r,t)||re.has(typeof e)||e===null){r[t]=e;return}if(Array.isArray(e)&&Array.isArray(r[t])){r[t]=r[t].concat(e);return}if(typeof e=="object"&&typeof r[t]=="object"){if(r[t]===null){r[t]=e;return}for(var o in e)Cr(r[t],o,e[o])}}function ee(r){for(var t=arguments.length,e=new Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return typeof r=="function"?tr.apply(void 0,[nr,r].concat(e)):tr.apply(void 0,[function(){return Dr(nr(),r)}].concat(e))}var te=tr(nr),oe={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},kr=r=>r||void 0,Q=(...r)=>kr(gr(r).filter(Boolean).join(" ")),rr=null,D={},ir=!1,X=(...r)=>t=>t.twMerge?((!rr||ir)&&(ir=!1,rr=P(D)?te:ee(D)),kr(rr(Q(r)))):Q(r),pr=(r,t)=>{for(let e in t)r.hasOwnProperty(e)?r[e]=Q(r[e],t[e]):r[e]=t[e];return r},ne=(r,t)=>{let{extend:e=null,slots:o={},variants:l={},compoundVariants:a=[],compoundSlots:n=[],defaultVariants:s={}}=r,c={...oe,...t},m=e!=null&&e.base?Q(e.base,r?.base):r?.base,b=e!=null&&e.variants&&!P(e.variants)?mr(l,e.variants):l,y=e!=null&&e.defaultVariants&&!P(e.defaultVariants)?{...e.defaultVariants,...s}:s;!P(c.twMergeConfig)&&!Sr(c.twMergeConfig,D)&&(ir=!0,D=c.twMergeConfig);let k=P(e?.slots),G=P(o)?{}:{base:Q(r?.base,k&&e?.base),...o},S=k?G:pr({...e?.slots},P(G)?{base:r?.base}:G),C=w=>{if(P(b)&&P(o)&&k)return X(m,w?.class,w?.className)(c);if(a&&!Array.isArray(a))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof a}`);if(n&&!Array.isArray(n))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof n}`);let R=(i,u,d=[],g)=>{let p=d;if(typeof u=="string")p=p.concat(cr(u).split(" ").map(v=>`${i}:${v}`));else if(Array.isArray(u))p=p.concat(u.reduce((v,h)=>v.concat(`${i}:${h}`),[]));else if(typeof u=="object"&&typeof g=="string"){for(let v in u)if(u.hasOwnProperty(v)&&v===g){let h=u[v];if(h&&typeof h=="string"){let A=cr(h);p[g]?p[g]=p[g].concat(A.split(" ").map(M=>`${i}:${M}`)):p[g]=A.split(" ").map(M=>`${i}:${M}`)}else Array.isArray(h)&&h.length>0&&(p[g]=h.reduce((A,M)=>A.concat(`${i}:${M}`),[]))}}return p},L=(i,u=b,d=null,g=null)=>{var p;let v=u[i];if(!v||P(v))return null;let h=(p=g?.[i])!=null?p:w?.[i];if(h===null)return null;let A=lr(h),M=Array.isArray(c.responsiveVariants)&&c.responsiveVariants.length>0||c.responsiveVariants===!0,T=y?.[i],j=[];if(typeof A=="object"&&M)for(let[K,sr]of Object.entries(A)){let Mr=v[sr];if(K==="initial"){T=sr;continue}Array.isArray(c.responsiveVariants)&&!c.responsiveVariants.includes(K)||(j=R(K,Mr,j,d))}let z=v[A]||v[lr(T)];return typeof j=="object"&&typeof d=="string"&&j[d]?pr(j,z):j.length>0?(j.push(z),j):z},$=()=>b?Object.keys(b).map(i=>L(i,b)):null,Y=(i,u)=>{if(!b||typeof b!="object")return null;let d=new Array;for(let g in b){let p=L(g,b,i,u),v=i==="base"&&typeof p=="string"?p:p&&p[i];v&&(d[d.length]=v)}return d},B={};for(let i in w)w[i]!==void 0&&(B[i]=w[i]);let U=(i,u)=>{var d;let g=typeof w?.[i]=="object"?{[i]:(d=w[i])==null?void 0:d.initial}:{};return{...y,...B,...g,...u}},F=(i=[],u)=>{let d=[];for(let{class:g,className:p,...v}of i){let h=!0;for(let[A,M]of Object.entries(v)){let T=U(A,u);if(Array.isArray(M)){if(!M.includes(T[A])){h=!1;break}}else if(T[A]!==M){h=!1;break}}h&&(g&&d.push(g),p&&d.push(p))}return d},V=i=>{let u=F(a,i),d=F(e?.compoundVariants,i);return vr(d,u)},J=i=>{let u=V(i);if(!Array.isArray(u))return u;let d={};for(let g of u)if(typeof g=="string"&&(d.base=X(d.base,g)(c)),typeof g=="object")for(let[p,v]of Object.entries(g))d[p]=X(d[p],v)(c);return d},q=i=>{if(n.length<1)return null;let u={};for(let{slots:d=[],class:g,className:p,...v}of n){if(!P(v)){let h=!0;for(let A of Object.keys(v)){let M=U(A,i)[A];if(M===void 0||(Array.isArray(v[A])?!v[A].includes(M):v[A]!==M)){h=!1;break}}if(!h)continue}for(let h of d)u[h]=u[h]||[],u[h].push([g,p])}return u};if(!P(o)||!k){let i={};if(typeof S=="object"&&!P(S))for(let u of Object.keys(S))i[u]=d=>{var g,p;return X(S[u],Y(u,d),((g=J(d))!=null?g:[])[u],((p=q(d))!=null?p:[])[u],d?.class,d?.className)(c)};return i}return X(m,$(),V(),w?.class,w?.className)(c)},I=()=>{if(!(!b||typeof b!="object"))return Object.keys(b)};return C.variantKeys=I(),C.extend=e,C.base=m,C.slots=S,C.variants=b,C.defaultVariants=y,C.compoundSlots=n,C.compoundVariants=a,C};export{ne as i};
