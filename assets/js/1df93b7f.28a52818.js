"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[583],{6189:(e,t,n)=>{n.d(t,{f:()=>U});var a=n(1901),r=n(5165),s=n(5723),o=n(2604),i=n(6896);n(2155);function l(e,t){return n=>{if("string"!=typeof n||0===n.trim().length)throw new Error(t);return`${e}-${n}`}}var c=n(5844),d=n(617),u=n(7),m=n(2867);function h(e,t){return"boolean"==typeof e?e:t.autoContrast}var f=n(3335),p=n(5647),v=n(3939),y=n(267),b=n(7357);const[g,w]=(0,b.F)("Tabs component was not found in the tree");var x={root:"m_89d60db1","list--default":"m_576c9d4",list:"m_89d33d6d",panel:"m_b0c91715",tab:"m_4ec4dce6",tabSection:"m_fc420b1f","tab--default":"m_539e827b","list--outline":"m_6772fbd5","tab--outline":"m_b59ab47c","tab--pills":"m_c3381914"};const j={},T=(0,y.P9)(((e,t)=>{const n=(0,f.Y)("TabsList",j,e),{children:a,className:r,grow:o,justify:i,classNames:l,styles:c,style:d,mod:u,...m}=n,h=w();return(0,s.jsx)(v.a,{...m,...h.getStyles("list",{className:r,style:d,classNames:l,styles:c,props:n,variant:h.variant}),ref:t,role:"tablist",variant:h.variant,mod:[{grow:o,orientation:h.orientation,placement:"vertical"===h.orientation&&h.placement,inverted:h.inverted},u],"aria-orientation":h.orientation,__vars:{"--tabs-justify":i},children:a})}));T.classes=x,T.displayName="@mantine/core/TabsList";const S={},P=(0,y.P9)(((e,t)=>{const n=(0,f.Y)("TabsPanel",S,e),{children:a,className:r,value:o,classNames:i,styles:l,style:c,mod:d,keepMounted:u,...m}=n,h=w(),p=h.value===o,y=h.keepMounted||u||p?a:null;return(0,s.jsx)(v.a,{...m,...h.getStyles("panel",{className:r,classNames:i,styles:l,style:[c,p?void 0:{display:"none"}],props:n}),ref:t,mod:[{orientation:h.orientation},d],role:"tabpanel",id:h.getPanelId(o),"aria-labelledby":h.getTabId(o),children:y})}));function N(e,t){let n=e;for(;(n=n.parentElement)&&!n.matches(t););return n}function k({parentSelector:e,siblingSelector:t,onKeyDown:n,loop:a=!0,activateOnFocus:r=!1,dir:s="rtl",orientation:o}){return i=>{n?.(i);const l=Array.from(N(i.currentTarget,e)?.querySelectorAll(t)||[]).filter((t=>function(e,t,n){return N(e,n)===N(t,n)}(i.currentTarget,t,e))),c=l.findIndex((e=>i.currentTarget===e)),d=function(e,t,n){for(let a=e+1;a<t.length;a+=1)if(!t[a].disabled)return a;if(n)for(let a=0;a<t.length;a+=1)if(!t[a].disabled)return a;return e}(c,l,a),u=function(e,t,n){for(let a=e-1;a>=0;a-=1)if(!t[a].disabled)return a;if(n)for(let a=t.length-1;a>-1;a-=1)if(!t[a].disabled)return a;return e}(c,l,a),m="rtl"===s?u:d,h="rtl"===s?d:u;switch(i.key){case"ArrowRight":"horizontal"===o&&(i.stopPropagation(),i.preventDefault(),l[m].focus(),r&&l[m].click());break;case"ArrowLeft":"horizontal"===o&&(i.stopPropagation(),i.preventDefault(),l[h].focus(),r&&l[h].click());break;case"ArrowUp":"vertical"===o&&(i.stopPropagation(),i.preventDefault(),l[u].focus(),r&&l[u].click());break;case"ArrowDown":"vertical"===o&&(i.stopPropagation(),i.preventDefault(),l[d].focus(),r&&l[d].click());break;case"Home":i.stopPropagation(),i.preventDefault(),!l[0].disabled&&l[0].focus();break;case"End":{i.stopPropagation(),i.preventDefault();const e=l.length-1;!l[e].disabled&&l[e].focus();break}}}}P.classes=x,P.displayName="@mantine/core/TabsPanel";var A=n(7979),I=n(2691),O=n(2017);const C={},E=(0,y.P9)(((e,t)=>{const n=(0,f.Y)("TabsTab",C,e),{className:a,children:r,rightSection:o,leftSection:i,value:l,onClick:c,onKeyDown:d,disabled:m,color:h,style:p,classNames:v,styles:y,vars:b,mod:g,tabIndex:x,...j}=n,T=(0,A.xd)(),{dir:S}=(0,I.jH)(),P=w(),N=l===P.value,E={classNames:v,styles:y,props:n};return(0,s.jsxs)(O.N,{...j,...P.getStyles("tab",{className:a,style:p,variant:P.variant,...E}),disabled:m,unstyled:P.unstyled,variant:P.variant,mod:[{active:N,disabled:m,orientation:P.orientation,inverted:P.inverted,placement:"vertical"===P.orientation&&P.placement},g],ref:t,role:"tab",id:P.getTabId(l),"aria-selected":N,tabIndex:x||N||null===P.value?0:-1,"aria-controls":P.getPanelId(l),onClick:e=>{P.onChange(P.allowTabDeactivation&&l===P.value?null:l),c?.(e)},__vars:{"--tabs-color":h?(0,u.r)(h,T):void 0},onKeyDown:k({siblingSelector:'[role="tab"]',parentSelector:'[role="tablist"]',activateOnFocus:P.activateTabWithKeyboard,loop:P.loop,orientation:P.orientation||"horizontal",dir:S,onKeyDown:d}),children:[i&&(0,s.jsx)("span",{...P.getStyles("tabSection",E),"data-position":"left",children:i}),r&&(0,s.jsx)("span",{...P.getStyles("tabLabel",E),children:r}),o&&(0,s.jsx)("span",{...P.getStyles("tabSection",E),"data-position":"right",children:o})]})}));E.classes=x,E.displayName="@mantine/core/TabsTab";const D="Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value",_={keepMounted:!0,orientation:"horizontal",loop:!0,activateTabWithKeyboard:!0,allowTabDeactivation:!1,unstyled:!1,inverted:!1,variant:"default",placement:"left"},L=(0,d.V)(((e,{radius:t,color:n,autoContrast:a})=>({root:{"--tabs-radius":(0,c.nJ)(t),"--tabs-color":(0,u.r)(n,e),"--tabs-text-color":h(a,e)?(0,m.w)({color:n,theme:e,autoContrast:a}):void 0}}))),M=(0,y.P9)(((e,t)=>{const n=(0,f.Y)("Tabs",_,e),{defaultValue:a,value:r,onChange:c,orientation:d,children:u,loop:m,id:h,activateTabWithKeyboard:y,allowTabDeactivation:b,variant:w,color:j,radius:T,inverted:S,placement:P,keepMounted:N,classNames:k,styles:A,unstyled:I,className:O,style:C,vars:E,autoContrast:M,mod:R,...U}=n,F=(0,o.B)(h),[z,W]=(0,i.Z)({value:r,defaultValue:a,finalValue:null,onChange:c}),$=(0,p.I)({name:"Tabs",props:n,classes:x,className:O,style:C,classNames:k,styles:A,unstyled:I,vars:E,varsResolver:L});return(0,s.jsx)(g,{value:{placement:P,value:z,orientation:d,id:F,loop:m,activateTabWithKeyboard:y,getTabId:l(`${F}-tab`,D),getPanelId:l(`${F}-panel`,D),onChange:W,allowTabDeactivation:b,variant:w,color:j,radius:T,inverted:S,keepMounted:N,unstyled:I,getStyles:$},children:(0,s.jsx)(v.a,{ref:t,id:F,variant:w,mod:[{orientation:d,inverted:"horizontal"===d&&S,placement:"vertical"===d&&P},R],...$("root"),...U,children:u})})}));M.classes=x,M.displayName="@mantine/core/Tabs",M.Tab=E,M.Panel=P,M.List=T;var R=function(e){return e.NPM="npm",e.YARN="yarn",e.PNPM="pnpm",e}(R||{});const U=()=>(0,s.jsxs)(r.s,{direction:"column",maw:"100%",children:[(0,s.jsxs)(M,{defaultValue:R.NPM,children:[(0,s.jsx)(M.List,{children:Object.values(R).map((e=>(0,s.jsx)(M.Tab,{value:e,children:e},e)))}),(0,s.jsx)(M.Panel,{value:R.NPM,children:(0,s.jsx)(a.q,{mt:"sm",language:"bash",code:"npm install react-snow-overlay"})}),(0,s.jsx)(M.Panel,{value:R.YARN,children:(0,s.jsx)(a.q,{mt:"sm",language:"bash",code:"yarn add react-snow-overlay"})}),(0,s.jsx)(M.Panel,{value:R.PNPM,children:(0,s.jsx)(a.q,{mt:"sm",language:"bash",code:"pnpm add react-snow-overlay"})})]}),(0,s.jsx)(a.q,{mt:"lg",code:"import { SnowOverlay } from 'react-snow-overlay';\n    \n<SnowOverlay />",highlightOnClient:!0})]})},4436:(e,t,n)=>{n.d(t,{Q:()=>f});var a=n(1901),r=n(5165),s=n(8061),o=n(3137),i=n(5051),l=n(7225),c=n(3952),d=n(864),u=n(2155),m=n(840),h=n(5723);const f=e=>{let{showCode:t}=e;const[n,f]=(0,u.useState)(m.XD),[p]=(0,d.o)(n,100),v=(0,u.useMemo)((()=>{const e=Object.keys(p).map((e=>p[e]==m.XD[e]?null:"object"==typeof p[e]?`${e}={${JSON.stringify(p[e],null,2)}}`:"string"==typeof p[e]?`${e}="${p[e]}"`:`${e}={${p[e]}}`)).filter(Boolean).join(" ");return`import { SnowOverlay } from 'react-snow-overlay';\n    \n<SnowOverlay ${e}${e.length?" ":""}/>`}),[p]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m.ou,{...p}),(0,h.jsx)("div",{style:{maxWidth:"min(100%, 464px)"},children:(0,h.jsxs)(r.s,{direction:"column",gap:"sm",maw:444,children:[(0,h.jsx)(s.Q,{allowNegative:!1,allowDecimal:!1,label:"Particle count",description:"The maximum number of snow particles displayed on the screen at once. Note: High values may cause performance issues.",value:n.maxParticles,onChange:e=>f((t=>({...t,maxParticles:Number(e)})))}),(0,h.jsx)(o.A,{format:"rgba",label:"Color",description:"Color of snow particles",placeholder:m.XD.color,value:n.color,onChange:e=>f((t=>({...t,color:e})))}),(0,h.jsx)(i.l,{label:"Particle speed",description:"How fast snow falls down the screen",data:Object.keys(m.gc),value:n.speed,onChange:e=>f((t=>({...t,speed:e})))}),(0,h.jsx)(l.$,{mt:"lg",onClick:()=>f(m.XD),variant:"light",children:"Reset"}),t&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.c,{my:"xl"}),(0,h.jsx)(a.q,{language:"tsx",code:v,highlightOnClient:!0})]})]})})]})}},4085:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var a=n(9455),r=n(5723),s=(n(2155),n(5844)),o=n(617),i=n(3335),l=n(5647),c=n(3939),d=n(267),u=n(7357);const[m,h]=(0,u.F)("List component was not found in tree");var f={root:"m_abbac491",item:"m_abb6bec2",itemWrapper:"m_75cd9f71",itemIcon:"m_60f83e5b"};const p={},v=(0,d.P9)(((e,t)=>{const n=(0,i.Y)("ListItem",p,e),{classNames:a,className:s,style:o,styles:l,vars:d,icon:u,children:m,mod:f,...v}=n,y=h(),b=u||y.icon,g={classNames:a,styles:l};return(0,r.jsx)(c.a,{...y.getStyles("item",{...g,className:s,style:o}),component:"li",mod:[{"with-icon":!!b,centered:y.center},f],ref:t,...v,children:(0,r.jsxs)("div",{...y.getStyles("itemWrapper",g),children:[b&&(0,r.jsx)("span",{...y.getStyles("itemIcon",g),children:b}),(0,r.jsx)("span",{...y.getStyles("itemLabel",g),children:m})]})})}));v.classes=f,v.displayName="@mantine/core/ListItem";const y={type:"unordered"},b=(0,o.V)(((e,{size:t,spacing:n})=>({root:{"--list-fz":(0,s.ny)(t),"--list-lh":(0,s.ks)(t),"--list-spacing":(0,s.GY)(n)}}))),g=(0,d.P9)(((e,t)=>{const n=(0,i.Y)("List",y,e),{classNames:a,className:s,style:o,styles:d,unstyled:u,vars:h,children:p,type:v,withPadding:g,icon:w,spacing:x,center:j,listStyleType:T,mod:S,...P}=n,N=(0,l.I)({name:"List",classes:f,props:n,className:s,style:o,classNames:a,styles:d,unstyled:u,vars:h,varsResolver:b});return(0,r.jsx)(m,{value:{center:j,icon:w,getStyles:N},children:(0,r.jsx)(c.a,{...N("root",{style:{listStyleType:T}}),component:"unordered"===v?"ul":"ol",mod:[{"with-padding":g},S],ref:t,...P,children:p})})}));g.classes=f,g.displayName="@mantine/core/List",g.Item=v;var w=n(5165),x=n(4436),j=n(1482),T=n(7226),S=n(851);const P={heroBanner:"heroBanner_qdFl",headingTitle:"headingTitle_ffvy",headingSubtitle:"headingSubtitle_Ojqc"};var N=n(6189);function k(){const{siteConfig:e}=(0,a.A)();return(0,r.jsx)("header",{className:(0,S.A)("hero hero--primary",P.heroBanner),children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)(j.A,{as:"h1",className:(0,S.A)("hero__title",P.headingTitle),children:["\ud83c\udf28\ufe0f ",e.title]}),(0,r.jsx)("p",{className:(0,S.A)("hero__subtitle",P.headingSubtitle),children:e.tagline}),(0,r.jsxs)(g,{icon:"\u2705",styles:{root:{textAlign:"left",margin:"0 auto",width:"fit-content"}},children:[(0,r.jsx)(g.Item,{children:"Web Workers + Offscreen Canvas to keep your main thread chilling \ud83d\ude0e"}),(0,r.jsx)(g.Item,{children:"No performance impact to your website \u26a1\ufe0f"}),(0,r.jsx)(g.Item,{children:"0 dependencies \u2728"}),(0,r.jsx)(g.Item,{children:"Customizable \ud83c\udfa8 "}),(0,r.jsx)(g.Item,{children:"Adds some festive fun \u2603\ufe0f"})]})]})})}function A(){const{siteConfig:e}=(0,a.A)();return(0,r.jsxs)(T.A,{title:e.title,description:"A performant snowfall effect for your website using canvas and web workers",children:[(0,r.jsx)(k,{}),(0,r.jsx)("main",{children:(0,r.jsxs)(w.s,{wrap:"wrap",maw:"100%",p:"sm",gap:"lg",children:[(0,r.jsx)(N.f,{}),(0,r.jsx)(x.Q,{})]})})]})}},840:(e,t,n)=>{n.d(t,{XD:()=>h,gc:()=>f,ou:()=>j});var a,r,s,o=n(5723),i=n(2155),l=e=>{throw TypeError(e)},c=(e,t,n)=>t.has(e)||l("Cannot "+n),d=(e,t,n)=>(c(e,t,"read from private field"),n?n.call(e):t.get(e)),u=(e,t,n)=>t.has(e)?l("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),m=(e,t,n)=>(c(e,t,"access private method"),n);const h=Object.freeze({color:"rgba(255, 255, 255, 0.8)",maxParticles:50,speed:"DEFAULT"}),f={DEFAULT:33,FAST:20,FASTER:10},p=2**31-1,v='!function(){"use strict";const t=Object.freeze({color:"rgba(255, 255, 255, 0.8)",maxParticles:50,speed:"DEFAULT"}),e={DEFAULT:33,FAST:20,FASTER:10};let a,r,n,o={...t},i=0,s=-1/0,c=null,h=!1;self.onmessage=m=>{const{data:f}=m;if(0===f.type)r=f.canvas,n=r.getContext("2d"),r.width=f.width,r.height=f.height,o={...t,...f.options},a=Array.from({length:o.maxParticles},l);else if((t=>1===t.type)(f))r.width=f.width,r.height=f.height;else if((t=>3===t.type)(f)){const{type:t,...e}=f;o={...o,...e.options},d(o.maxParticles)}else{if((t=>2===t.type)(f)){h=!0;const{width:t,height:e}=n.canvas;return n.clearRect(0,0,t,e),void(c&&cancelAnimationFrame(c))}(t=>4===t.type)(f)&&(h=!1)}const y=()=>{const t="object"==typeof(r=o.speed)?r.msBetweenUpdates:e[r];var r;if(performance.now()-s<t)return void(c=requestAnimationFrame(y));const{width:d,height:l}=n.canvas;n.clearRect(0,0,d,l),n.fillStyle=o.color,n.beginPath();for(let e=0;e<o.maxParticles;e++){const t=a[e];n.moveTo(t.x,t.y),n.arc(t.x,t.y,t.r,0,2*Math.PI,!0)}n.fill(),i=(i+.01)%360;for(let e=0;e<o.maxParticles;e++){const t=a[e];if(t.y+=Math.cos(i+t.d)+1+t.r/2,t.x+=2*Math.sin(i),t.x>d+5||t.x<-5||t.y>l)if(e%3>0)a[e]={x:Math.random()*d,y:-10,r:t.r,d:t.d};else{const r=Math.random()*d;Math.sin(i)>0?a[e]={x:-5-r,y:Math.random()*l,r:t.r,d:t.d}:a[e]={x:d+5+r,y:Math.random()*l,r:t.r,d:t.d}}}s=performance.now(),h||(c=requestAnimationFrame(y))};c&&cancelAnimationFrame(c),h||requestAnimationFrame(y)};const d=t=>{const e=a.length;if(t!==e)return t<e?a.splice(t,e-t):void a.push(...Array.from({length:t-e},l))},l=()=>({x:Math.random()*r.width,y:Math.random()*-r.height,r:4*Math.random()+1,d:Math.random()*o.maxParticles})}();\n',y="undefined"!=typeof self&&self.Blob&&new Blob([v],{type:"text/javascript;charset=utf-8"});function b(e){let t;try{if(t=y&&(self.URL||self.webkitURL).createObjectURL(y),!t)throw"";const n=new Worker(t,{name:null==e?void 0:e.name});return n.addEventListener("error",(()=>{(self.URL||self.webkitURL).revokeObjectURL(t)})),n}catch(n){return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(v),{name:null==e?void 0:e.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}var g=(e=>(e[e.INIT=0]="INIT",e[e.UPDATE_SIZE=1]="UPDATE_SIZE",e[e.STOP=2]="STOP",e[e.UPDATE_OPTIONS=3]="UPDATE_OPTIONS",e[e.RESUME=4]="RESUME",e))(g||{});class w{constructor(e){var t,n,s,o;u(this,r),u(this,a),s=e,c(t=this,n=a,"write to private field"),o?o.call(t,s):n.set(t,s)}init(e){m(this,r,s).call(this,{...e,type:g.INIT},[e.canvas])}updateSize(e){m(this,r,s).call(this,{...e,type:g.UPDATE_SIZE})}stop(){m(this,r,s).call(this,{type:g.STOP})}resume(){m(this,r,s).call(this,{type:g.RESUME})}updateOptions(e){m(this,r,s).call(this,{...e,type:g.UPDATE_OPTIONS})}terminate(){d(this,a).terminate()}}a=new WeakMap,r=new WeakSet,s=function(e,t){d(this,a).postMessage(e,{transfer:t})};const x=(e,t)=>{if(e===t)return!0;if(null===e||null===t||"object"!=typeof e||"object"!=typeof t)return!1;const n=Object.keys(e),a=Object.keys(t);return n.length===a.length&&!n.some((n=>!a.includes(n)||!x(e[n],t[n])))},j=(0,i.memo)((function(e){let{zIndex:t=p,disabled:n,disabledOnSingleCpuDevices:a,...r}=e;const s=(0,i.useRef)(null),l=(0,i.useRef)(null),c=(0,i.useRef)(null),[d,u]=(0,i.useReducer)((()=>!0),!1),m=((e,t)=>{const n=(0,i.useRef)(null);return n.current&&x(t,n.current.key)||(n.current={key:t,value:e()}),n.current.value})((()=>r),[r]),h=((e,t)=>{const n=(0,i.useRef)(null),a=(0,i.useCallback)((function(){for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];null!==n.current&&clearTimeout(n.current),n.current=window.setTimeout((()=>{e(...r)}),t)}),[e,t]);return(0,i.useEffect)((()=>()=>{null!==n.current&&clearTimeout(n.current)})),a})((()=>{var e;if("undefined"!=typeof window&&(null==(e=s.current)?void 0:e.transferControlToOffscreen)){if(l.current??(l.current=s.current.transferControlToOffscreen()),!c.current){c.current=new w(new b),u();const e=l.current;return c.current.init({canvas:e,width:window.innerWidth,height:window.innerHeight,options:m})}c.current.updateSize({width:window.innerWidth,height:window.innerHeight})}}),50);(0,i.useEffect)((()=>(h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h))),[h]);const f=(0,i.useMemo)((()=>{const e=Boolean(n),t=a&&"undefined"!=typeof navigator&&1===navigator.hardwareConcurrency;return e||t}),[a,n]);return(0,i.useEffect)((()=>{if(d&&l.current&&c.current)return f?c.current.stop():void c.current.updateOptions({options:m})}),[f,m,d]),(0,i.useEffect)((()=>{var e;null==(e=c.current)||e[f?"stop":"resume"]()}),[f]),(0,i.useEffect)((()=>{var e;return null==(e=c.current)?void 0:e.terminate}),[]),(0,o.jsx)("canvas",{"aria-hidden":"true",ref:s,style:{zIndex:t,pointerEvents:"none",userSelect:"none",position:"fixed",top:0,right:0,bottom:0,left:0,...f&&{display:"none"}}})}))}}]);