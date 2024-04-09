(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[393],{4850:function(e,t,r){"use strict";r.d(t,{q:function(){return S}});var n=r(7294),a=r(3967),u=r.n(a),l=r(7462),o=r(5360),i=r(9698),s=r(9981),d=r(5320);let f="Avatar",[c,p]=(0,o.b)(f),[v,m]=c(f),g=(0,n.forwardRef)((e,t)=>{let{__scopeAvatar:r,...a}=e,[u,o]=(0,n.useState)("idle");return(0,n.createElement)(v,{scope:r,imageLoadingStatus:u,onImageLoadingStatusChange:o},(0,n.createElement)(d.WV.span,(0,l.Z)({},a,{ref:t})))}),h=(0,n.forwardRef)((e,t)=>{let{__scopeAvatar:r,src:a,onLoadingStatusChange:u=()=>{},...o}=e,f=m("AvatarImage",r),c=$cddcb0b647441e34$var$useImageLoadingStatus(a),p=(0,i.W)(e=>{u(e),f.onImageLoadingStatusChange(e)});return(0,s.b)(()=>{"idle"!==c&&p(c)},[c,p]),"loaded"===c?(0,n.createElement)(d.WV.img,(0,l.Z)({},o,{ref:t,src:a})):null}),y=(0,n.forwardRef)((e,t)=>{let{__scopeAvatar:r,delayMs:a,...u}=e,o=m("AvatarFallback",r),[i,s]=(0,n.useState)(void 0===a);return(0,n.useEffect)(()=>{if(void 0!==a){let e=window.setTimeout(()=>s(!0),a);return()=>window.clearTimeout(e)}},[a]),i&&"loaded"!==o.imageLoadingStatus?(0,n.createElement)(d.WV.span,(0,l.Z)({},u,{ref:t})):null});function $cddcb0b647441e34$var$useImageLoadingStatus(e){let[t,r]=(0,n.useState)("idle");return(0,s.b)(()=>{if(!e){r("error");return}let t=!0,n=new window.Image,updateStatus=e=>()=>{t&&r(e)};return r("loading"),n.onload=updateStatus("loaded"),n.onerror=updateStatus("error"),n.src=e,()=>{t=!1}},[e]),t}var b=r(8291),w=r(6679),k=r(8219);let x={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:"3",responsive:!0},variant:{type:"enum",values:["solid","soft"],default:"soft"},color:{...b.m,default:void 0},highContrast:w.B,radius:k.C,fallback:{type:"ReactNode",default:void 0,required:!0}};var C=r(3843),E=r(6776);let S=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,C.FY)(e),{className:l,style:o,size:i=x.size.default,variant:s=x.variant.default,color:d=x.color.default,highContrast:f=x.highContrast.default,radius:c=x.radius.default,fallback:p,...v}=r,[m,b]=n.useState("idle");return n.createElement(g,{"data-accent-color":d,"data-radius":c,className:u()("rt-AvatarRoot",l,(0,E.g)(i,"rt-r-size"),`rt-variant-${s}`,{"rt-high-contrast":f},(0,C.we)(a)),style:o},"idle"===m||"loading"===m?n.createElement("span",{className:"rt-AvatarFallback"}):null,"error"===m?n.createElement(y,{className:u()("rt-AvatarFallback",{"rt-one-letter":"string"==typeof p&&1===p.length,"rt-two-letters":"string"==typeof p&&2===p.length}),delayMs:0},p):null,n.createElement(h,{ref:t,className:"rt-AvatarImage",...v,onLoadingStatusChange:e=>{var t;null===(t=v.onLoadingStatusChange)||void 0===t||t.call(v,e),b(e)}}))});S.displayName="Avatar"},3725:function(e,t,r){"use strict";r.d(t,{x:function(){return f}});var n=r(7294),a=r(3967),u=r.n(a),l=r(8426);let o={display:{type:"enum",values:["none","inline","inline-block","block"],default:void 0,responsive:!0}};var i=r(3843),s=r(134),d=r(6776);let f=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,i.FY)(e),{rest:f,...c}=(0,s.F8)(r),{className:p,asChild:v,display:m=o.display.default,...g}=f,h=v?l.g7:"div";return n.createElement(h,{...g,ref:t,className:u()("rt-Box",p,(0,d.g)(m,"rt-r-display"),(0,s.yt)(c),(0,i.we)(a))})});f.displayName="Box"},4152:function(e,t,r){"use strict";r.d(t,{z:function(){return v}});var n=r(7294),a=r(3967),u=r.n(a),l=r(8426),o=r(8291),i=r(6679),s=r(8219);let d={size:{type:"enum",values:["1","2","3","4"],default:"2",responsive:!0},variant:{type:"enum",values:["classic","solid","soft","surface","outline","ghost"],default:"solid"},color:o.m,highContrast:i.B,radius:s.C};var f=r(3843),c=r(6776);let p=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,f.FY)(e),{className:o,asChild:i=!1,size:s=d.size.default,variant:p=d.variant.default,color:v=d.color.default,highContrast:m=d.highContrast.default,radius:g=d.radius.default,...h}=r,y=i?l.g7:"button";return n.createElement(y,{"data-disabled":h.disabled||void 0,"data-accent-color":v,"data-radius":g,...h,ref:t,className:u()("rt-reset","rt-BaseButton",o,(0,c.g)(s,"rt-r-size"),`rt-variant-${p}`,{"rt-high-contrast":m},(0,f.we)(a))})});p.displayName="BaseButton";let v=n.forwardRef((e,t)=>n.createElement(p,{...e,ref:t,className:u()("rt-Button",e.className)}));v.displayName="Button"},5877:function(e,t,r){"use strict";r.d(t,{k:function(){return f}});var n=r(7294),a=r(3967),u=r.n(a),l=r(8426);let o={display:{type:"enum",values:["none","inline-flex","flex"],default:"flex",responsive:!0},direction:{type:"enum",values:["row","column","row-reverse","column-reverse"],default:void 0,responsive:!0},align:{type:"enum",values:["start","center","end","baseline","stretch"],default:void 0,responsive:!0},justify:{type:"enum",values:["start","center","end","between"],default:"start",responsive:!0},wrap:{type:"enum",values:["nowrap","wrap","wrap-reverse"],default:void 0,responsive:!0},gap:{type:"enum",values:["0","1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0}};var i=r(3843),s=r(134),d=r(6776);let f=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,i.FY)(e),{rest:f,...c}=(0,s.F8)(r),{className:p,asChild:v,display:m=o.display.default,direction:g=o.direction.default,align:h=o.align.default,justify:y=o.justify.default,wrap:b=o.wrap.default,gap:w=o.gap.default,...k}=f,x=v?l.g7:"div";return n.createElement(x,{...k,ref:t,className:u()("rt-Flex",p,(0,d.g)(m,"rt-r-display"),(0,d.g)(g,"rt-r-fd"),(0,d.g)(h,"rt-r-ai"),(0,d.g)(y,"rt-r-jc",{between:"space-between"}),(0,d.g)(b,"rt-r-fw"),(0,d.g)(w,"rt-r-gap"),(0,s.yt)(c),(0,i.we)(a))})});f.displayName="Flex"},1042:function(e,t,r){"use strict";r.d(t,{X:function(){return m}});var n=r(7294),a=r(3967),u=r.n(a),l=r(8426),o=r(3416),i=r(617),s=r(7361),d=r(8291),f=r(6679);o.b.values;let c={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:"6",responsive:!0},weight:{...o.b,default:"bold"},align:i.L,trim:s.a,color:d.m,highContrast:f.B};var p=r(3843),v=r(6776);let m=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,p.FY)(e),{children:o,className:i,asChild:s=!1,as:d="h1",size:f=c.size.default,weight:m=c.weight.default,align:g=c.align.default,trim:h=c.trim.default,color:y=c.color.default,highContrast:b=c.highContrast.default,...w}=r;return n.createElement(l.g7,{"data-accent-color":y,...w,ref:t,className:u()("rt-Heading",i,(0,v.g)(f,"rt-r-size"),(0,v.g)(m,"rt-r-weight"),(0,v.g)(g,"rt-r-ta"),(0,v.g)(h,"rt-r-lt"),{"rt-high-contrast":b},(0,p.we)(a))},s?o:n.createElement(d,null,o))});m.displayName="Heading"},2627:function(e,t,r){"use strict";r.d(t,{r:function(){return s}});var n=r(7294),a=r(3967),u=r.n(a),l=r(6445),o=r(3356);let i={size:o.S.size,weight:o.S.weight,trim:o.S.trim,underline:{type:"enum",values:["auto","hover","always"],default:"auto"},color:o.S.color,highContrast:o.S.highContrast},s=n.forwardRef((e,t)=>{let{children:r,className:a,asChild:o=!1,underline:s=i.underline.default,...d}=e;return n.createElement(l.x,{...d,ref:t,asChild:!0,className:u()("rt-reset","rt-Link",a,`rt-underline-${s}`)},o?r:n.createElement("a",null,r))});s.displayName="Link"},6293:function(e,t,r){"use strict";r.d(t,{c:function(){return l}});var n=r(7294),a=r(3967),u=r.n(a);let l=n.forwardRef((e,t)=>n.createElement("strong",{...e,ref:t,className:u()("rt-Strong",e.className)}));l.displayName="Strong"},6445:function(e,t,r){"use strict";r.d(t,{x:function(){return d}});var n=r(7294),a=r(3967),u=r.n(a),l=r(8426),o=r(3356),i=r(3843),s=r(6776);let d=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,i.FY)(e),{children:d,className:f,asChild:c=!1,as:p="span",size:v=o.S.size.default,weight:m=o.S.weight.default,align:g=o.S.align.default,trim:h=o.S.trim.default,color:y=o.S.color.default,highContrast:b=o.S.highContrast.default,...w}=r;return n.createElement(l.g7,{"data-accent-color":y,...w,ref:t,className:u()("rt-Text",f,(0,s.g)(v,"rt-r-size"),(0,s.g)(m,"rt-r-weight"),(0,s.g)(g,"rt-r-ta"),(0,s.g)(h,"rt-r-lt"),{"rt-high-contrast":b},(0,i.we)(a))},c?d:n.createElement(p,null,d))});d.displayName="Text"},3356:function(e,t,r){"use strict";r.d(t,{S:function(){return i}});var n=r(3416),a=r(617),u=r(7361),l=r(8291),o=r(6679);let i={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0},weight:n.b,align:a.L,trim:u.a,color:l.m,highContrast:o.B}},6776:function(e,t,r){"use strict";function withBreakpoints(e,t="",r){var n,a,u,l;let o=[];if("object"==typeof e){for(let u of Object.keys(e))if(u in e){let l=null===(n=e[u])||void 0===n?void 0:n.toString(),i=null==l?void 0:l.startsWith("-"),s=""===t?"":"-",d=i?`-${t}`:t,f=i?null==l?void 0:l.substring(1):l;if(void 0===f)continue;let c=null!==(a=null==r?void 0:r[f])&&void 0!==a?a:f,p="initial"===u?`${d}${s}${c}`:`${u}:${d}${s}${c}`;o.push(p)}}if("string"==typeof e){let n=e.startsWith("-"),a=""===t?"":"-",l=n?`-${t}`:t,i=n?e.substring(1):e,s=null!==(u=null==r?void 0:r[i])&&void 0!==u?u:i;o.push(`${l}${a}${s}`)}if("boolean"==typeof e){let n=""===t?"":"-",a=e.toString(),u=null!==(l=null==r?void 0:r[a])&&void 0!==l?l:a;o.push(`${t}${n}${u}`)}return o.join(" ")}r.d(t,{g:function(){return withBreakpoints}})},8291:function(e,t,r){"use strict";r.d(t,{m:function(){return a}});var n=r(269);let a={type:"enum",values:n.yT.accentColor.values,default:void 0}},6679:function(e,t,r){"use strict";r.d(t,{B:function(){return n}});let n={type:"boolean",default:void 0}},134:function(e,t,r){"use strict";r.d(t,{F8:function(){return extractLayoutProps},yt:function(){return withLayoutProps}});var n=r(6776);let a=["0","1","2","3","4","5","6","7","8","9"];function extractPaddingProps(e){let{p:t=o.p.default,px:r=o.px.default,py:n=o.py.default,pt:a=o.pt.default,pr:u=o.pr.default,pb:l=o.pb.default,pl:i=o.pl.default,...s}=e;return{p:t,px:r,py:n,pt:a,pr:u,pb:l,pl:i,rest:s}}function withPaddingProps(e){return[(0,n.g)(e.p,"rt-r-p"),(0,n.g)(e.px,"rt-r-px"),(0,n.g)(e.py,"rt-r-py"),(0,n.g)(e.pt,"rt-r-pt"),(0,n.g)(e.pr,"rt-r-pr"),(0,n.g)(e.pb,"rt-r-pb"),(0,n.g)(e.pl,"rt-r-pl")].filter(Boolean).join(" ")}let u=["auto","0","50%","100%"],l=["auto","min-content","max-content","100%","0","1","2","3","4","5","6","7","8","9"],o={p:{type:"enum",values:a,default:void 0,responsive:!0},px:{type:"enum",values:a,default:void 0,responsive:!0},py:{type:"enum",values:a,default:void 0,responsive:!0},pt:{type:"enum",values:a,default:void 0,responsive:!0},pr:{type:"enum",values:a,default:void 0,responsive:!0},pb:{type:"enum",values:a,default:void 0,responsive:!0},pl:{type:"enum",values:a,default:void 0,responsive:!0},position:{type:"enum",values:["static","relative","absolute","fixed","sticky"],default:void 0,responsive:!0},inset:{type:"enum",values:u,default:void 0,responsive:!0},top:{type:"enum",values:u,default:void 0,responsive:!0},right:{type:"enum",values:u,default:void 0,responsive:!0},bottom:{type:"enum",values:u,default:void 0,responsive:!0},left:{type:"enum",values:u,default:void 0,responsive:!0},width:{type:"enum",values:l,default:void 0,responsive:!0},height:{type:"enum",values:l,default:void 0,responsive:!0},shrink:{type:"enum",values:["0","1"],default:void 0,responsive:!0},grow:{type:"enum",values:["0","1"],default:void 0,responsive:!0}};function extractLayoutProps(e){let{rest:t,...r}=extractPaddingProps(e),{position:n=o.position.default,width:a=o.width.default,height:u=o.height.default,inset:l=o.inset.default,top:i=o.top.default,bottom:s=o.bottom.default,left:d=o.left.default,right:f=o.right.default,shrink:c=o.shrink.default,grow:p=o.grow.default,...v}=t;return{...r,position:n,width:a,height:u,inset:l,top:i,bottom:s,left:d,right:f,shrink:c,grow:p,rest:v}}function withLayoutProps(e){return[withPaddingProps(e),(0,n.g)(e.position,"rt-r-position"),(0,n.g)(e.shrink,"rt-r-fs"),(0,n.g)(e.grow,"rt-r-fg"),(0,n.g)(e.width,"rt-r-w"),(0,n.g)(e.height,"rt-r-h"),(0,n.g)(e.inset,"rt-r-inset"),(0,n.g)(e.top,"rt-r-top"),(0,n.g)(e.bottom,"rt-r-bottom"),(0,n.g)(e.left,"rt-r-left"),(0,n.g)(e.right,"rt-r-right")].filter(Boolean).join(" ")}},7361:function(e,t,r){"use strict";r.d(t,{a:function(){return n}});let n={type:"enum",values:["normal","start","end","both"],default:void 0,responsive:!0}},3843:function(e,t,r){"use strict";r.d(t,{FY:function(){return extractMarginProps},we:function(){return withMarginProps}});var n=r(6776);let a=["auto","0","1","2","3","4","5","6","7","8","9","-1","-2","-3","-4","-5","-6","-7","-8","-9"],u={m:{type:"enum",values:a,default:void 0,responsive:!0},mx:{type:"enum",values:a,default:void 0,responsive:!0},my:{type:"enum",values:a,default:void 0,responsive:!0},mt:{type:"enum",values:a,default:void 0,responsive:!0},mr:{type:"enum",values:a,default:void 0,responsive:!0},mb:{type:"enum",values:a,default:void 0,responsive:!0},ml:{type:"enum",values:a,default:void 0,responsive:!0}};function extractMarginProps(e){let{m:t=u.m.default,mx:r=u.mx.default,my:n=u.my.default,mt:a=u.mt.default,mr:l=u.mr.default,mb:o=u.mb.default,ml:i=u.ml.default,...s}=e;return{m:t,mx:r,my:n,mt:a,mr:l,mb:o,ml:i,rest:s}}function withMarginProps(e){return[(0,n.g)(e.m,"rt-r-m"),(0,n.g)(e.mx,"rt-r-mx"),(0,n.g)(e.my,"rt-r-my"),(0,n.g)(e.mt,"rt-r-mt"),(0,n.g)(e.mr,"rt-r-mr"),(0,n.g)(e.mb,"rt-r-mb"),(0,n.g)(e.ml,"rt-r-ml")].filter(Boolean).join(" ")}},8219:function(e,t,r){"use strict";r.d(t,{C:function(){return a}});var n=r(269);let a={type:"enum",values:n.yT.radius.values,default:void 0}},617:function(e,t,r){"use strict";r.d(t,{L:function(){return n}});let n={type:"enum",values:["left","center","right"],default:void 0,responsive:!0}},3416:function(e,t,r){"use strict";r.d(t,{b:function(){return n}});let n={type:"enum",values:["light","regular","medium","bold"],default:void 0,responsive:!0}},4297:function(e,t,r){"use strict";r.d(t,{Z:function(){return createLucideIcon}});var n=r(7294),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let toKebabCase=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),createLucideIcon=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:u=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:i="",children:s,...d},f)=>(0,n.createElement)("svg",{ref:f,...a,width:u,height:u,stroke:r,strokeWidth:o?24*Number(l)/Number(u):l,className:["lucide",`lucide-${toKebabCase(e)}`,i].join(" "),...d},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(s)?s:[s]]));return r.displayName=`${e}`,r}},8455:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]])},7838:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]])},8913:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("LayoutTemplate",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]])},9560:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]])},6953:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},3496:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("MessageCircleMore",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]])},726:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]])},7498:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return a},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return o},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return d}});let a="refresh",u="navigate",l="restore",o="server-patch",i="prefetch",s="fast-refresh",d="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(8754),a=n._(r(7294)),u=r(4450),l=r(2227),o=r(4364),i=r(109),s=r(3607),d=r(1823),f=r(9031),c=r(920),p=r(30),v=r(7192),m=r(7498),g=new Set;function prefetch(e,t,r,n,a,u){if(!u&&!(0,l.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let a=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,u=t+"%"+r+"%"+a;if(g.has(u))return;g.add(u)}let o=u?e.prefetch(t,a):e.prefetch(t,r,n);Promise.resolve(o).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,r,n,u,o,i,s,d,f){let{nodeName:c}=e.currentTarget,p="A"===c.toUpperCase();if(p&&(isModifiedEvent(e)||!d&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==i||i;"beforePopState"in t?t[u?"replace":"push"](r,n,{shallow:o,locale:s,scroll:e}):t[u?"replace":"push"](n||r,{forceOptimisticNavigation:!f,scroll:e})};d?a.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,o.formatUrl)(e)}let h=a.default.forwardRef(function(e,t){let r,n;let{href:l,as:o,children:g,prefetch:h=null,passHref:y,replace:b,shallow:w,scroll:k,locale:x,onClick:C,onMouseEnter:E,onTouchStart:S,legacyBehavior:_=!1,...N}=e;r=g,_&&("string"==typeof r||"number"==typeof r)&&(r=a.default.createElement("a",null,r));let L=a.default.useContext(d.RouterContext),j=a.default.useContext(f.AppRouterContext),M=null!=L?L:j,P=!L,R=!1!==h,A=null===h?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:O,as:I}=a.default.useMemo(()=>{if(!L){let e=formatStringOrUrl(l);return{href:e,as:o?formatStringOrUrl(o):e}}let[e,t]=(0,u.resolveHref)(L,l,!0);return{href:e,as:o?(0,u.resolveHref)(L,o):t||e}},[L,l,o]),T=a.default.useRef(O),$=a.default.useRef(I);_&&(n=a.default.Children.only(r));let z=_?n&&"object"==typeof n&&n.ref:t,[F,B,Z]=(0,c.useIntersection)({rootMargin:"200px"}),U=a.default.useCallback(e=>{($.current!==I||T.current!==O)&&(Z(),$.current=I,T.current=O),F(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[I,z,O,Z,F]);a.default.useEffect(()=>{M&&B&&R&&prefetch(M,O,I,{locale:x},{kind:A},P)},[I,O,B,x,R,null==L?void 0:L.locale,M,P,A]);let H={ref:U,onClick(e){_||"function"!=typeof C||C(e),_&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),M&&!e.defaultPrevented&&linkClicked(e,M,O,I,b,w,k,x,P,R)},onMouseEnter(e){_||"function"!=typeof E||E(e),_&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),M&&(R||!P)&&prefetch(M,O,I,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:A},P)},onTouchStart(e){_||"function"!=typeof S||S(e),_&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),M&&(R||!P)&&prefetch(M,O,I,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:A},P)}};if((0,i.isAbsoluteUrl)(I))H.href=I;else if(!_||y||"a"===n.type&&!("href"in n.props)){let e=void 0!==x?x:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&(0,p.getDomainLocale)(I,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);H.href=t||(0,v.addBasePath)((0,s.addLocale)(I,e,null==L?void 0:L.defaultLocale))}return _?a.default.cloneElement(n,H):a.default.createElement("a",{...N,...H},r)}),y=h;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(7294),a=r(3436),u="function"==typeof IntersectionObserver,l=new Map,o=[];function createObserver(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=o.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let a=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:u,elements:a},o.push(r),l.set(r,t),t}function observe(e,t,r){let{id:n,observer:a,elements:u}=createObserver(r);return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(n);let e=o.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&o.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:l}=e,o=l||!u,[i,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),f=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(u){if(o||i)return;let e=d.current;if(e&&e.tagName){let n=observe(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!i){let e=(0,a.requestIdleCallback)(()=>s(!0));return()=>(0,a.cancelIdleCallback)(e)}},[o,r,t,i,d.current]);let c=(0,n.useCallback)(()=>{s(!1)},[]);return[f,i,c]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,r){e.exports=r(9201)},1664:function(e,t,r){e.exports=r(5170)},3100:function(e,t,r){"use strict";r.d(t,{xu:function(){return l}});var n=r(296),a=r(5059),u=r(5893),l=(0,n.m)("div");l.displayName="Box";var o=(0,a.G)(function(e,t){let{size:r,centerContent:n=!0,...a}=e;return(0,u.jsx)(l,{ref:t,boxSize:r,__css:{...n?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...a})});o.displayName="Square",(0,a.G)(function(e,t){let{size:r,...n}=e;return(0,u.jsx)(o,{size:r,ref:t,borderRadius:"9999px",...n})}).displayName="Circle"}}]);