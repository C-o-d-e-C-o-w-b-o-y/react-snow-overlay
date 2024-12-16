/*! For license information please see 70e09343.081121b8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[462],{2036:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"playground","title":"Playground","description":"","source":"@site/docs/playground.mdx","sourceDirName":".","slug":"/playground","permalink":"/react-snow-overlay/docs/playground","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Playground","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Props","permalink":"/react-snow-overlay/docs/props"}}');var o=r(5723),a=r(681),s=r(4544);const i={title:"Playground",sidebar_position:3},l="Playground",c={},u=[];function d(e){const t={h1:"h1",header:"header",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"playground",children:"Playground"})}),"\n",(0,o.jsx)(s.Q,{showCode:!0})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4544:(e,t,r)=>{r.d(t,{Q:()=>F});var n,o=r(1901),a=r(5165),s=r(8061),i=r(3137),l=r(5051),c=r(7225),u=r(3952),d=r(864),f=r(2155),h=e=>{throw TypeError(e)},p=(e,t,r)=>t.has(e)||h("Cannot "+r),m=(e,t,r)=>t.has(e)?h("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),y=(e,t,r)=>(p(e,t,"access private method"),r),w={exports:{}},g={};var v;var x=(v||(v=1,w.exports=function(){if(n)return g;n=1;var e=f,t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,n){var i,l={},c=null,u=null;for(i in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)o.call(r,i)&&!s.hasOwnProperty(i)&&(l[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===l[i]&&(l[i]=r[i]);return{$$typeof:t,type:e,key:c,ref:u,props:l,_owner:a.current}}return g.Fragment=r,g.jsx=i,g.jsxs=i,g}()),w.exports);const b=Object.freeze({color:"rgba(255, 255, 255, 0.8)",maxParticles:50,speed:"DEFAULT"}),O={DEFAULT:33,FAST:20,FASTER:10},P=2**31-1,j='(function(){"use strict";const g=Object.freeze({color:"rgba(255, 255, 255, 0.8)",maxParticles:50,speed:"DEFAULT"}),u={DEFAULT:33,FAST:20,FASTER:10},x=t=>t.type===0,M=t=>t.type===1,w=t=>t.type===2,P=t=>t.type===3,A=t=>t.type===4,F=t=>typeof t=="object"?t.msBetweenUpdates:u[t];let r={...g},o,d=0,y=-1/0,l=null,s,i,h=!1;self.onmessage=t=>{const{data:a}=t;if(x(a))s=a.canvas,i=s.getContext("2d"),s.width=a.width,s.height=a.height,r={...g,...a.options},o=Array.from({length:r.maxParticles},S);else if(M(a))s.width=a.width,s.height=a.height;else if(P(a)){const{type:m,...c}=a;r={...r,...c.options},O(r.maxParticles)}else if(w(a)){h=!0;const{width:m,height:c}=i.canvas;i.clearRect(0,0,m,c),l&&cancelAnimationFrame(l);return}else A(a)&&(h=!1);const p=()=>{const m=F(r.speed);if(performance.now()-y<m){l=requestAnimationFrame(p);return}const{width:c,height:f}=i.canvas;i.clearRect(0,0,c,f),i.fillStyle=r.color,i.beginPath();for(let n=0;n<r.maxParticles;n++){const e=o[n];i.moveTo(e.x,e.y),i.arc(e.x,e.y,e.r,0,Math.PI*2,!0)}i.fill(),d=(d+.01)%360;for(let n=0;n<r.maxParticles;n++){const e=o[n];e.y+=Math.cos(d+e.d)+1+e.r/2,e.x+=Math.sin(d)*2,(e.x>c+5||e.x<-5||e.y>f)&&(n%3>0?o[n]={x:Math.random()*c,y:-10,r:e.r,d:e.d}:Math.sin(d)>0?o[n]={x:-5,y:Math.random()*f,r:e.r,d:e.d}:o[n]={x:c+5,y:Math.random()*f,r:e.r,d:e.d})}y=performance.now(),h||(l=requestAnimationFrame(p))};l&&cancelAnimationFrame(l),h||requestAnimationFrame(p)};const O=t=>{const a=o.length;if(t!==a){if(t<a)return o.splice(t,a-t);o.push(...Array.from({length:t-a},S))}},S=()=>({x:Math.random()*s.width,y:Math.random()*-s.height,r:Math.random()*4+1,d:Math.random()*r.maxParticles})})();\n',S=typeof self<"u"&&self.Blob&&new Blob([j],{type:"text/javascript;charset=utf-8"});function E(e){let t;try{if(t=S&&(self.URL||self.webkitURL).createObjectURL(S),!t)throw"";const r=new Worker(t,{name:null==e?void 0:e.name});return r.addEventListener("error",(()=>{(self.URL||self.webkitURL).revokeObjectURL(t)})),r}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(j),{name:null==e?void 0:e.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}var T,R,k,A=(e=>(e[e.INIT=0]="INIT",e[e.UPDATE_SIZE=1]="UPDATE_SIZE",e[e.STOP=2]="STOP",e[e.UPDATE_OPTIONS=3]="UPDATE_OPTIONS",e[e.RESUME=4]="RESUME",e))(A||{});class U{constructor(e){m(this,R),m(this,T),((e,t,r,n)=>{p(e,t,"write to private field"),n?n.call(e,r):t.set(e,r)})(this,T,e)}init(e){y(this,R,k).call(this,{...e,type:A.INIT},[e.canvas])}updateSize(e){y(this,R,k).call(this,{...e,type:A.UPDATE_SIZE})}stop(){y(this,R,k).call(this,{type:A.STOP})}resume(){y(this,R,k).call(this,{type:A.RESUME})}updateOptions(e){y(this,R,k).call(this,{...e,type:A.UPDATE_OPTIONS})}}T=new WeakMap,R=new WeakSet,k=function(e,t){((e,t,r)=>(p(e,t,"read from private field"),r?r.call(e):t.get(e)))(this,T).postMessage(e,{transfer:t})};const _=(e,t)=>{if(e===t)return!0;if(null===e||null===t||"object"!=typeof e||"object"!=typeof t)return!1;const r=Object.keys(e),n=Object.keys(t);return!(r.length!==n.length||r.some((r=>!n.includes(r)||!_(e[r],t[r]))))},C=(0,f.memo)((function(e){let{zIndex:t=P,disabled:r,disabledOnSingleCpuDevices:n,...o}=e;const a=(0,f.useRef)(null),s=(0,f.useRef)(null),i=(0,f.useRef)(null),[l,c]=(0,f.useReducer)((()=>!0),!1),u=((e,t)=>{const r=(0,f.useRef)();return(!r.current||!_(t,r.current.key))&&(r.current={key:t,value:e()}),r.current.value})((()=>o),[o]),d=((e,t)=>{const r=(0,f.useRef)(null),n=(0,f.useCallback)((function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];null!==r.current&&clearTimeout(r.current),r.current=window.setTimeout((()=>{e(...o)}),t)}),[e,t]);return(0,f.useEffect)((()=>()=>{null!==r.current&&clearTimeout(r.current)})),n})((()=>{var e;if(!(typeof window>"u"||null==(e=a.current))&&e.transferControlToOffscreen){if(s.current??(s.current=a.current.transferControlToOffscreen()),!i.current){i.current=new U(new E),c();const e=s.current;return i.current.init({canvas:e,width:window.innerWidth,height:window.innerHeight,options:u})}i.current.updateSize({width:window.innerWidth,height:window.innerHeight})}}),50);(0,f.useEffect)((()=>(d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d))),[d]);const h=(0,f.useMemo)((()=>{const e=!!r,t=n&&typeof navigator<"u"&&1===navigator.hardwareConcurrency;return e||t}),[n,r]);return(0,f.useEffect)((()=>{if(l&&s.current&&i.current){if(h)return i.current.stop();i.current.updateOptions({options:u})}}),[h,u,l]),(0,f.useEffect)((()=>{var e;null==(e=i.current)||e[h?"stop":"resume"]()}),[h]),x.jsx("canvas",{"aria-hidden":"true",ref:a,style:{zIndex:t,pointerEvents:"none",userSelect:"none",position:"fixed",top:0,right:0,bottom:0,left:0,...h&&{display:"none"}}})}));var M=r(5723);const F=e=>{let{showCode:t}=e;const[r,n]=(0,f.useState)(b),[h]=(0,d.o)(r,100),p=(0,f.useMemo)((()=>{const e=Object.keys(h).map((e=>h[e]==b[e]?null:"object"==typeof h[e]?`${e}={${JSON.stringify(h[e],null,2)}}`:"string"==typeof h[e]?`${e}="${h[e]}"`:`${e}={${h[e]}}`)).filter(Boolean).join(" ");return`import { SnowOverlay } from 'react-snow-overlay';\n    \n<SnowOverlay ${e}${e.length?" ":""}/>`}),[h]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(C,{...h}),(0,M.jsx)("div",{style:{maxWidth:"min(100%, 464px)"},children:(0,M.jsxs)(a.s,{direction:"column",gap:"sm",maw:444,children:[(0,M.jsx)(s.Q,{allowNegative:!1,allowDecimal:!1,label:"Particle count",description:"The maximum number of snow particles displayed on the screen at once. Note: High values may cause performance issues.",value:r.maxParticles,onChange:e=>n((t=>({...t,maxParticles:Number(e)})))}),(0,M.jsx)(i.A,{format:"rgba",label:"Color",description:"Color of snow particles",placeholder:b.color,value:r.color,onChange:e=>n((t=>({...t,color:e})))}),(0,M.jsx)(l.l,{label:"Particle speed",description:"How fast snow falls down the screen",data:Object.keys(O),value:r.speed,onChange:e=>n((t=>({...t,speed:e})))}),(0,M.jsx)(c.$,{mt:"lg",onClick:()=>n(b),variant:"light",children:"Reset"}),t&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(u.c,{my:"xl"}),(0,M.jsx)(o.q,{language:"tsx",code:p,highlightOnClient:!0})]})]})})]})}}}]);