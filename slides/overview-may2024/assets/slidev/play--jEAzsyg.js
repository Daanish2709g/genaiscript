const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-BKV2Ai_S.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-zPWmprhc.js","assets/modules/unplugin-icons-q7ISIrw2.js","assets/modules/vue-BW8j4VIF.js","assets/modules/shiki-CBF4I9Zt.js","assets/modules/shiki-BPvBenZD.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-BxVEtjLA.js","assets/index-qEAf0ON5.js","assets/index-CPvdaSZh.css","assets/DrawingPreview-eFkihJlH.css","assets/slidev/useWakeLock-CloqEC1U.js","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-BnR_PTQ2.js","assets/slidev/context-DfVTNorR.js","assets/useWakeLock-H454Y214.css","assets/DrawingControls-C5T1oZL5.css"])))=>i.map(i=>d[i]);
import{d as v,O as D,o as s,c as u,A as e,b as _,e as n,f as B,i as C,g as i,a3 as R,E as M,k as h,B as P,a4 as $,U as k,l as m,F as z,x as E,v as A,h as O,t as T}from"../modules/vue-BW8j4VIF.js";import{h as b,l as N,M as W,N as x,O as w,P as H,Q as I,s as V,R as L,E as S,S as U,T as F}from"../index-qEAf0ON5.js";import{b as G,G as j,c as K,u as Q,r as X,a as Y,S as q,_ as J,o as Z}from"./useWakeLock-CloqEC1U.js";import{u as ee,b as te}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-BxVEtjLA.js";import{A as se}from"../modules/unplugin-icons-q7ISIrw2.js";import"../modules/shiki-CBF4I9Zt.js";import"./IconButton.vue_vue_type_script_setup_true_lang-BnR_PTQ2.js";import"./context-DfVTNorR.js";const oe="/genaiscript/slides/overview-may2024/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},le=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(p,{emit:r}){const a=p,l=D(a,"modelValue",r);function d(){l.value=!1}return(f,o)=>(s(),u(R,null,[e(l)?(s(),_("div",ae,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=c=>d())}),n("div",{class:C(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[B(f.$slots,"default")],2)])):i("v-if",!0)],1024))}}),ne={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ie=["innerHTML"],re=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(p,{emit:r}){const l=D(p,"modelValue",r),d=M(()=>typeof b.info=="string");return(f,o)=>(s(),u(le,{modelValue:e(l),"onUpdate:modelValue":o[0]||(o[0]=c=>$(l)?l.value=c:null),class:"px-6 py-4"},{default:h(()=>[n("div",ne,[d.value?(s(),_("div",{key:0,class:"mb-4",innerHTML:e(b).info},null,8,ie)):i("v-if",!0),o[1]||(o[1]=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:oe,alt:"Slidev logo"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),P("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),ue=v({__name:"Controls",setup(p){const{isEmbedded:r}=N(),a=!b.drawings.presenterOnly&&!r.value,t=k();a&&W(()=>import("./DrawingControls-BKV2Ai_S.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(f=>t.value=f.default);const l=k(),d=k();return(f,o)=>(s(),_(z,null,[e(a)&&t.value?(s(),u(e(t),{key:0})):i("v-if",!0),m(G),m(j),l.value?(s(),u(e(l),{key:1})):i("v-if",!0),d.value?(s(),u(e(d),{key:2,modelValue:e(x),"onUpdate:modelValue":o[0]||(o[0]=c=>$(x)?x.value=c:null)},null,8,["modelValue"])):i("v-if",!0),e(b).info?(s(),u(re,{key:3,modelValue:e(w),"onUpdate:modelValue":o[1]||(o[1]=c=>$(w)?w.value=c:null)},null,8,["modelValue"])):i("v-if",!0),m(K)],64))}}),de=v({__name:"PrintStyle",setup(p){function r(a,{slots:t}){if(t.default)return A("style",t.default())}return(a,t)=>(s(),u(r,null,{default:h(()=>[P(" @page { size: "+E(e(H))+"px "+E(e(I))+"px; margin: 0px; } ",1)]),_:1}))}}),ce={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},me=v({__name:"PresenterMouse",setup(p){return(r,a)=>{const t=se;return e(V).cursor?(s(),_("div",ce,[m(t,{class:"absolute stroke-white dark:stroke-black",style:O({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):i("v-if",!0)}}}),be=v({__name:"play",setup(p){const{next:r,prev:a,isPrintMode:t}=N(),{isDrawing:l}=ee(),d=T();function f(y){var g;S.value||y.button===0&&((g=y.target)==null?void 0:g.id)==="slide-container"&&(y.pageX/window.innerWidth>.5?r():a())}Q(d),X(),Y();const o=M(()=>L.value||S.value),c=k();return(y,g)=>(s(),_(z,null,[e(t)?(s(),u(de,{key:0})):i("v-if",!0),n("div",{id:"page-root",ref_key:"root",ref:d,class:C(["grid",e(F)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[m(te,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(t)?e(U).width.value:void 0,"is-main":"",onPointerdown:f,onContextmenu:e(Z)},{default:h(()=>[m(q,{"render-context":"slide"}),m(me)]),controls:h(()=>[e(t)?i("v-if",!0):(s(),_("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"!opacity-100 right-0":"opacity-0 p-2",e(l)?"pointer-events-none":""]])},[m(J,{persist:o.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(S)?(s(),u(e(c),{key:0,resize:!0})):i("v-if",!0)],2),e(t)?i("v-if",!0):(s(),u(ue,{key:1})),g[0]||(g[0]=n("div",{id:"twoslash-container"},null,-1))],64))}});export{be as default};
