import{u as V,d as e,ay as fe,i as n,az as xe,aA as be,y as p,aB as pe,aC as $e,aD as _e,F,aE as we,aF as ye,aG as Ce,aH as Pe,aI as B,K as x,aJ as Se,aK as Te,aL as Le,aM as Ee,aN as Z,aO as ge,aP as q,aQ as K,_ as Ie,t as m,aR as Ne,aS as re,S as R,aT as D,aU as ve,aV as G,aa as A,L as Q,an as De,A as se,z as Me,a6 as ke,b as Oe,v as Ae,o as Fe,w as Ue,B as Y,aW as le,ae as je,aX as Be,aY as ie,aZ as ae,a_ as ce,a$ as oe,j as Re}from"./index-BewbZUDr.js";import{f as He}from"./global-BGc_Sk0a.js";import{C as O}from"./ConfigTitle-BXbEYRqT.js";var Ye=m('<div class="flex flex-col gap-4"><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div class="flex flex-col"><input class="input input-bordered w-full"></div><div><input type=number class="input input-bordered w-full"></div><div class="flex flex-col"><input class="input input-bordered w-full"></div><div><select class="select select-bordered w-full"></select></div><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div><select class="select select-bordered w-full">'),ze=m('<option class="flex items-center gap-2">'),Xe=m("<option>");const Ke=l=>{const[r]=V();return e(Ie,{ref:t=>{var i;return(i=l.ref)==null?void 0:i.call(l,t)},get icon(){return e(fe,{size:24})},get title(){return r("proxiesSettings")},get children(){var t=Ye(),i=t.firstChild,c=i.firstChild,u=c.firstChild,g=i.nextSibling,y=g.firstChild,o=g.nextSibling,M=o.firstChild,b=o.nextSibling,P=b.firstChild,S=b.nextSibling,$=S.firstChild,v=S.nextSibling,T=v.firstChild,L=T.firstChild,C=v.nextSibling,E=C.firstChild,z=E.firstChild,X=C.nextSibling,j=X.firstChild;return n(i,e(O,{withDivider:!0,get children(){return r("autoCloseConns")}}),c),u.addEventListener("change",d=>xe(d.target.checked)),n(g,e(O,{withDivider:!0,get children(){return r("urlForLatencyTest")}}),y),y.addEventListener("change",d=>be(d.target.value)),n(o,e(O,{withDivider:!0,get children(){return[p(()=>r("latencyTestTimeoutDuration"))," (",p(()=>r("ms")),")"]}}),M),M.addEventListener("change",d=>pe(Number(d.target.value))),n(b,e(O,{withDivider:!0,get children(){return r("urlForIPv6SupportTest")}}),P),P.addEventListener("change",d=>{var f;return $e((f=d.target.value)==null?void 0:f.trim())}),n(S,e(O,{withDivider:!0,get children(){return r("proxiesSorting")}}),$),$.addEventListener("change",d=>_e(d.target.value)),n($,e(F,{get each(){return Object.values(we)},children:d=>(()=>{var f=ze();return f.value=d,n(f,()=>r(d)),f})()})),n(v,e(O,{withDivider:!0,get children(){return r("hideUnAvailableProxies")}}),T),L.addEventListener("change",d=>ye(d.target.checked)),n(C,e(O,{withDivider:!0,get children(){return r("renderInTwoColumns")}}),E),z.addEventListener("change",d=>Ce(d.target.checked)),n(X,e(O,{withDivider:!0,get children(){return r("proxiesPreviewType")}}),j),j.addEventListener("change",d=>Pe(d.target.value)),n(j,e(F,{get each(){return Object.values(B)},children:d=>(()=>{var f=Xe();return f.value=d,n(f,()=>r(d)),f})()})),x(()=>u.checked=Se()),x(()=>y.value=Te()),x(()=>M.value=Le()),x(()=>P.value=Ee()),x(()=>$.value=Z()),x(()=>L.checked=ge()),x(()=>z.checked=q()),x(()=>j.value=K()),t}})},de=l=>{const r=()=>K()===B.OFF,t=p(()=>l.proxyNameList.length<=10),i=p(()=>{const u=K();return u===B.BAR||u===B.Auto&&!t()}),c=p(()=>{const u=K();return u===B.DOTS||u===B.Auto&&t()});return e(R,{get when(){return!r()},get children(){return e(Ne,{get children(){return[e(re,{get when(){return i()},get children(){return e(Ve,{get proxyNameList(){return l.proxyNameList},get now(){return l.now}})}}),e(re,{get when(){return c()},get children(){return e(qe,{get proxyNameList(){return l.proxyNameList},get now(){return l.now}})}})]}})}})};var Qe=m('<div class="flex items-center gap-2 py-2"><div class="my-2 flex flex-1 items-center justify-center overflow-hidden rounded-2xl [&amp;>*]:h-2"><div class=bg-success></div><div class=bg-warning></div><div class=bg-error></div><div class=bg-neutral>');const Ve=l=>{const{latencyMap:r}=G(),t=p(()=>l.proxyNameList.map(o=>r()[o])),i=p(()=>t().length),c=p(()=>t().filter(o=>o>D().NOT_CONNECTED&&o<=D().MEDIUM).length),u=p(()=>t().filter(o=>o>D().MEDIUM&&o<=D().HIGH).length),g=p(()=>t().filter(o=>o>D().HIGH).length),y=p(()=>t().filter(o=>o===D().NOT_CONNECTED).length);return(()=>{var o=Qe(),M=o.firstChild,b=M.firstChild,P=b.nextSibling,S=P.nextSibling,$=S.nextSibling;return n(o,e(ve,{get name(){return l.now}}),null),x(v=>{var T=`${c()*100/i()}%`,L=`${u()*100/i()}%`,C=`${g()*100/i()}%`,E=`${y()*100/i()}%`;return T!==v.e&&((v.e=T)!=null?b.style.setProperty("width",T):b.style.removeProperty("width")),L!==v.t&&((v.t=L)!=null?P.style.setProperty("width",L):P.style.removeProperty("width")),C!==v.a&&((v.a=C)!=null?S.style.setProperty("width",C):S.style.removeProperty("width")),E!==v.o&&((v.o=E)!=null?$.style.setProperty("width",E):$.style.removeProperty("width")),v},{e:void 0,t:void 0,a:void 0,o:void 0}),o})()};var We=m("<div>"),Je=m('<div class="flex items-center gap-2 py-2"><div class="flex flex-1 flex-wrap items-center gap-1">');const Ze=l=>{let r=l.selected?"bg-white border-4 border-success":"bg-success";return typeof l.latency!="number"||l.latency===D().NOT_CONNECTED?r=l.selected?"bg-white border-4 border-neutral":"bg-neutral":l.latency>D().HIGH?r=l.selected?"bg-white border-4 border-error":"bg-error":l.latency>D().MEDIUM&&(r=l.selected?"bg-white border-4 border-warning":"bg-warning"),(()=>{var t=We();return x(i=>{var c=A("h-4 w-4 rounded-full",r),u=l.name;return c!==i.e&&Q(t,i.e=c),u!==i.t&&De(t,"title",i.t=u),i},{e:void 0,t:void 0}),t})()},qe=l=>{const{latencyMap:r}=G();return(()=>{var t=Je(),i=t.firstChild;return n(i,e(F,{get each(){return l.proxyNameList.map(c=>[c,r()[c]])},children:([c,u])=>{const g=l.now===c;return e(Ze,{name:c,latency:u,selected:g})}})),n(t,e(ve,{get name(){return l.now}}),null),t})()};var Ge=m("<progress class=progress max=100>"),et=m('<div class="text-sm text-slate-500"> / <!> ( <!>% )'),tt=m('<div class="text-sm text-slate-500">: ');const nt=l=>{const{Download:r=0,Upload:t=0,Total:i=0,Expire:c=0}=l,u=se(i,{units:"iec"}),g=se(r+t,{units:"iec"}),y=Me.toFinite(((r+t)/i*100).toFixed(2));return{total:u,used:g,percentage:y,expirePrefix:()=>{const[b]=V();return b("expire")},expireStr:()=>{const[b]=V();return c===0?b("noExpire"):ke(c*1e3).format("YYYY-MM-DD")}}},rt=l=>{if(!l.subscriptionInfo)return;const r=nt(l.subscriptionInfo);return[(()=>{var t=Ge();return x(()=>t.value=r.percentage),t})(),(()=>{var t=et(),i=t.firstChild,c=i.nextSibling,u=c.nextSibling,g=u.nextSibling;return g.nextSibling,n(t,()=>`${r.used}`,i),n(t,()=>`${r.total}`,c),n(t,()=>r.percentage,g),t})(),(()=>{var t=tt(),i=t.firstChild;return n(t,()=>r.expirePrefix(),i),n(t,()=>r.expireStr(),null),t})()]};var ue=m("<div>"),st=m('<div class="flex h-full flex-col gap-2"><div class="flex items-center gap-2"><div class="tabs-boxed tabs gap-2"></div><div class=ml-auto></div></div><div class="flex-1 overflow-y-auto">'),lt=m('<button><span></span><div class="badge badge-sm">'),it=m('<div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><span></span><div class="badge badge-sm">'),at=m('<div class="text-sm text-slate-500"> '),ct=m('<div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><span></span><div class="badge badge-sm"></div></div><div class="flex items-center gap-2">'),ot=m('<div class="text-sm text-slate-500"> :: <!> ');const vt=()=>{const l=Oe();if(!Ae())return l("/setup",{replace:!0}),null;let r;const[t]=V(),{fetchProxies:i,proxies:c,selectProxyInGroup:u,latencyMap:g,proxyGroupNames:y,proxyProviders:o,updateProviderByProviderName:M,updateAllProvider:b,proxyGroupLatencyTest:P,proxyProviderLatencyTest:S,collapsedMap:$,setCollapsedMap:v,proxyGroupLatencyTestingMap:T,proxyProviderLatencyTestingMap:L,isAllProviderUpdating:C,updatingMap:E}=G();Fe(i);const z=async(_,I)=>{_.stopPropagation(),P(I)},X=(_,I)=>{_.stopPropagation(),S(I)},j=(_,I)=>{_.stopPropagation(),M(I)},d=async _=>{_.stopPropagation(),b()},[f,he]=Ue("proxies"),me=()=>[{type:"proxies",name:t("proxies"),count:c().length},{type:"proxyProviders",name:t("proxyProviders"),count:o().length}];return(()=>{var _=st(),I=_.firstChild,ee=I.firstChild,te=ee.nextSibling,ne=I.nextSibling;return n(ee,e(F,{get each(){return me()},children:h=>(()=>{var s=lt(),k=s.firstChild,H=k.nextSibling;return s.$$click=()=>he(h.type),n(k,()=>h.name),n(H,()=>h.count),x(()=>Q(s,A(f()===h.type&&"tab-active","tab-sm sm:tab-md tab gap-2 px-2"))),s})()})),n(I,e(R,{get when(){return f()==="proxyProviders"},get children(){return e(Y,{class:"btn btn-circle btn-sm",get disabled(){return C()},onClick:h=>d(h),get icon(){return e(le,{get class(){return A(C()&&"animate-spin text-success")}})}})}}),te),n(te,e(Y,{class:"btn-circle btn-sm sm:btn-md",onClick:()=>r==null?void 0:r.showModal(),get icon(){return e(je,{})}})),n(ne,e(R,{get when(){return f()==="proxies"},get children(){var h=ue();return n(h,e(F,{get each(){return c()},children:s=>{const k=p(()=>Be(ie(s.all??[],g(),Z(),y()),g(),y(),ge())),H=[(()=>{var a=it(),N=a.firstChild,w=N.firstChild,W=w.nextSibling;return n(w,()=>s.name),n(W,()=>{var U;return(U=s.all)==null?void 0:U.length}),n(a,e(Y,{class:"btn-circle btn-sm",get disabled(){return T()[s.name]},onClick:U=>z(U,s.name),get icon(){return e(ae,{get class(){return A(T()[s.name]&&"animate-pulse text-success")}})}}),null),a})(),(()=>{var a=at(),N=a.firstChild;return n(a,()=>s.type,N),n(a,()=>{var w;return((w=s.now)==null?void 0:w.length)>0&&` :: ${s.now}`},null),a})(),e(R,{get when(){return!$()[s.name]},get children(){return e(de,{get proxyNameList(){return k()},get now(){return s.now}})}})];return e(ce,{get isOpen(){return $()[s.name]},title:H,onCollapse:a=>v(s.name,a),get children(){return e(F,{get each(){return k()},children:a=>e(oe,{proxyName:a,get isSelected(){return s.now===a},onClick:()=>void u(s,a)})})}})}})),x(()=>Q(h,A("grid grid-cols-1 place-items-start gap-2",q()?"sm:grid-cols-2":"sm:grid-cols-1"))),h}}),null),n(ne,e(R,{get when(){return f()==="proxyProviders"},get children(){var h=ue();return n(h,e(F,{get each(){return o()},children:s=>{const k=p(()=>ie(s.proxies.map(a=>a.name)??[],g(),Z(),void 0)),H=[(()=>{var a=ct(),N=a.firstChild,w=N.firstChild,W=w.nextSibling,U=N.nextSibling;return n(w,()=>s.name),n(W,()=>s.proxies.length),n(U,e(Y,{class:"btn btn-circle btn-sm",get disabled(){return E()[s.name]},onClick:J=>j(J,s.name),get icon(){return e(le,{get class(){return A(E()[s.name]&&"animate-spin text-success")}})}}),null),n(U,e(Y,{class:"btn btn-circle btn-sm",get disabled(){return L()[s.name]},onClick:J=>X(J,s.name),get icon(){return e(ae,{get class(){return A(L()[s.name]&&"animate-pulse text-success")}})}}),null),a})(),e(rt,{get subscriptionInfo(){return s.subscriptionInfo}}),(()=>{var a=ot(),N=a.firstChild,w=N.nextSibling;return w.nextSibling,n(a,()=>s.vehicleType,N),n(a,()=>t("updated"),w),n(a,()=>He(s.updatedAt),null),a})(),e(R,{get when(){return!$()[s.name]},get children(){return e(de,{get proxyNameList(){return k()}})}})];return e(ce,{get isOpen(){return $()[s.name]},title:H,onCollapse:a=>v(s.name,a),get children(){return e(F,{get each(){return k()},children:a=>e(oe,{proxyName:a})})}})}})),x(()=>Q(h,A("grid grid-cols-1 place-items-start gap-2",q()?"sm:grid-cols-2":"sm:grid-cols-1"))),h}}),null),n(_,e(Ke,{ref:h=>r=h}),null),_})()};Re(["click"]);export{vt as default};
