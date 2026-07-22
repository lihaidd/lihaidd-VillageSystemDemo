var _a=Object.defineProperty,va=Object.defineProperties;var ya=Object.getOwnPropertyDescriptors;var ft=Object.getOwnPropertySymbols;var ha=Object.prototype.hasOwnProperty,ba=Object.prototype.propertyIsEnumerable;var _t=(S,w,k)=>w in S?_a(S,w,{enumerable:!0,configurable:!0,writable:!0,value:k}):S[w]=k,W=(S,w)=>{for(var k in w||(w={}))ha.call(w,k)&&_t(S,k,w[k]);if(ft)for(var k of ft(w))ba.call(w,k)&&_t(S,k,w[k]);return S},te=(S,w)=>va(S,ya(w));var Z=(S,w,k)=>new Promise((ye,B)=>{var Y=E=>{try{q(k.next(E))}catch(ne){B(ne)}},ae=E=>{try{q(k.throw(E))}catch(ne){B(ne)}},q=E=>E.done?ye(E.value):Promise.resolve(E.value).then(Y,ae);q((k=k.apply(S,w)).next())});import{ab as wa,f as Va,aa as ka,a7 as xa,B as Aa,Z as Fa,l as Ua,D as Da,H as Sa,$ as Ca,P as Ia,r as Ea,a as za,af as Ra,ag as Pa,g as Ta,E as $a,F as qa,o as Ma,X as Ba,V as Na,ak as La,u as Ya,N as x}from"./element-plus-core-DtFjj_wP.js";import{w as Oa,ax as ja,ay as Ha,g as V,ad as F,ab as _e,a5 as Ga,aF as vt,a9 as v,l as y,s as n,aH as s,i as a,am as u,r as b,j as T,at as I,k as K,F as D,af as $,aI as Wa,aD as Za}from"./vue-chunks-DUFRzBE-.js";import{x as Ka,K as De,q as yt,L as ve,a as Xa,d as Ja}from"./element-plus-icons-Dw4cNhHN.js";import{c as re}from"./tauri-vendor-BBucQyPs.js";import{k as Qa,l as en,u as tn,s as an,g as nn}from"./index-CqF599lB.js";import{aj as ln,v as ht,M as de,r as on,a2 as sn,R as rn,a as dn}from"./index-B0wXDdYD.js";import{s as pn}from"./index-oC8Eh4vr.js";import"./utility-vendor-DnDVyXfL.js";import"./iconify-vendor-DPs8vxWM.js";const cn={class:"archive-detail-container"},un={class:"archive-header"},mn={class:"archive-info"},gn={class:"archive-actions"},fn={class:"participant-section"},_n={class:"section-title"},vn={class:"participant-header"},yn={class:"participant-index"},hn={class:"resident-option"},bn={class:"resident-name"},wn={class:"resident-info"},Vn={class:"participant-section"},kn={class:"section-title"},xn={class:"participant-header"},An={class:"participant-index"},Fn={class:"resident-option"},Un={class:"resident-name"},Dn={class:"resident-info"},Sn={class:"form-actions application-actions"},Cn={key:0,class:"records-timeline"},In={class:"timeline-header"},En={class:"timeline-title"},zn={class:"timeline-actions"},Rn={class:"timeline-content"},Pn={key:0,class:"record-images"},Tn={class:"record-images-grid"},$n=["onClick"],qn=["src","alt"],Mn={class:"new-record-section"},Bn={class:"section-title",style:{margin:"0",cursor:"pointer"}},Nn={class:"agreement-content-editor"},Ln={class:"form-actions"},Yn={id:"applicationPrintArea",class:"application-print-page"},On={class:"application-print-lines"},jn={class:"application-inline-row"},Hn={class:"application-line application-line-name"},Gn={class:"application-line application-line-short"},Wn={class:"application-line application-line-short"},Zn={class:"application-line application-line-short"},Kn={class:"application-inline-row"},Xn={class:"application-line application-line-occupation"},Jn={class:"application-line application-line-contact"},Qn={class:"application-inline-row"},el={class:"application-line application-line-full"},tl={class:"application-inline-row"},al={class:"application-line application-line-name"},nl={class:"application-line application-line-short"},ll={class:"application-line application-line-short"},ol={class:"application-line application-line-short"},sl={class:"application-inline-row"},il={class:"application-line application-line-occupation"},rl={class:"application-line application-line-contact"},dl={class:"application-inline-row"},pl={class:"application-line application-line-full"},cl={class:"application-block-row"},ul={class:"application-long-line application-dispute-first-line"},ml={class:"application-dispute-full-lines"},gl={class:"application-request-section"},fl={class:"application-numbered-lines"},_l={class:"application-long-line"},vl={class:"application-date-row"},yl={class:"application-date-line"},hl={class:"application-date-line"},bl={class:"application-date-line"},wl={id:"printArea",class:"agreement-print"},Vl={class:"print-header"},kl={class:"print-number"},xl={class:"party-section"},Al={class:"party-row"},Fl={class:"party-value"},Ul={class:"party-value short"},Dl={class:"party-value"},Sl={class:"party-value short"},Cl={class:"party-row"},Il={class:"party-value"},El={class:"party-value long"},zl={class:"party-row"},Rl={class:"party-value full"},Pl={class:"party-section"},Tl={class:"party-row"},$l={class:"party-value"},ql={class:"party-value short"},Ml={class:"party-value"},Bl={class:"party-value short"},Nl={class:"party-row"},Ll={class:"party-value"},Yl={class:"party-value long"},Ol={class:"party-row"},jl={class:"party-value full"},Hl={class:"content-section"},Gl={class:"content-section"},Wl={class:"content-section"},Zl={class:"print-line-row"},Kl={class:"copies-section"},Xl={class:"signature-section"},Jl={class:"signature-row"},Ql={class:"signature-value"},eo={class:"signature-value"},to={class:"signature-row"},ao={class:"signature-value"},no={class:"footer-section"},lo={class:"seal-area"},oo={class:"date-area"},so={class:"date-text"},io={class:"image-preview-body"},ro=["src"],po=["src"],co=5*1024*1024,uo=`
  @page {
    size: A4;
    margin: 2.54cm 3.18cm;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background: #fff;
  }

  body {
    font-family: 'FangSong', '仿宋', 'STFangsong', 'FangSong_GB2312', serif;
    color: #000;
  }

  .application-print-page {
    width: 21cm;
    min-height: 29.7cm;
    margin: 0 auto;
    padding: 2.54cm 3.18cm;
    overflow: hidden;
    font-family: 'FangSong', '仿宋', 'STFangsong', 'FangSong_GB2312', serif;
    font-size: 14pt;
    line-height: 28pt;
    color: #000;
  }

  .application-print-title {
    margin: 0 0 0.72cm;
    padding: 0;
    text-align: center;
    font-size: 18pt;
    font-weight: 700;
    line-height: 28pt;
    letter-spacing: 0;
  }

  .application-print-lines {
    width: 100%;
  }

  .application-inline-row,
  .application-block-row,
  .application-numbered-row,
  .application-signature-row,
  .application-date-row {
    display: flex;
    align-items: baseline;
    width: 100%;
  }

  .application-inline-row {
    min-height: 28pt;
  }

  .application-label {
    flex: none;
    white-space: nowrap;
    font-size: 14pt;
  }

  .application-line,
  .application-long-line,
  .application-signature-line,
  .application-date-line {
    display: inline-block;
    min-height: 24pt;
    padding: 0 0.05cm;
    border-bottom: 1px solid #000;
    vertical-align: baseline;
    overflow: hidden;
    white-space: nowrap;
  }

  .application-line-name {
    width: 1.75cm;
  }

  .application-line-short {
    width: 1.02cm;
  }

  .application-line-occupation {
    width: 3.95cm;
  }

  .application-line-contact {
    width: 3.55cm;
    flex: none;
    min-width: 0;
  }

  .application-line-full {
    flex: 1;
  }

  .application-block-row {
    align-items: flex-start;
    margin-top: 0.08cm;
  }

  .application-dispute-first-line {
    flex: 1;
    height: 28pt;
    line-height: 28pt;
  }

  .application-dispute-full-lines .application-long-line {
    display: block;
    width: 100%;
    height: 28pt;
    line-height: 28pt;
  }

  .application-request-section {
    margin-top: 0.92cm;
  }

  .application-request-label {
    margin-bottom: 0.08cm;
  }

  .application-numbered-row {
    min-height: 28pt;
    padding-left: 0.7cm;
  }

  .application-numbered-row > span:first-child {
    width: 0.48cm;
    flex: none;
  }

  .application-numbered-row .application-long-line {
    flex: 1;
    height: 24pt;
    line-height: 24pt;
  }

  .application-notice {
    margin: 0.08cm 0 0;
    text-indent: 0.72cm;
    line-height: 28pt;
    font-size: 14pt;
  }

  .application-signature-row {
    justify-content: flex-end;
    margin-top: 0.65cm;
  }

  .application-signature-line {
    width: 2.75cm;
    height: 24pt;
    line-height: 24pt;
  }

  .application-date-row {
    justify-content: flex-end;
    margin-top: 0.12cm;
  }

  .application-date-line {
    width: 1.28cm;
    height: 24pt;
    line-height: 24pt;
    text-align: center;
  }
`,mo=`
  @page {
    size: A4;
    margin: 25mm;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    overflow: visible !important;
    background: #fff;
  }

  body {
    font-family: 'FangSong', '仿宋', 'STFangsong', 'FangSong_GB2312', serif;
    color: #000;
  }

  .agreement-print {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0;
    overflow: visible !important;
    font-family: 'FangSong', '仿宋', 'STFangsong', 'FangSong_GB2312', serif;
    font-size: 14pt;
    line-height: 1.8;
    page-break-inside: auto;
    break-inside: auto;
  }

  .print-header {
    position: relative;
    margin-bottom: 30px;
    text-align: center;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .print-title {
    margin: 0 0 20px 0;
    font-size: 22pt;
    font-weight: bold;
    letter-spacing: 8px;
  }

  .print-number {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 12pt;
  }

  .party-section,
  .copies-section,
  .footer-section {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .party-section {
    margin-bottom: 15px;
  }

  .party-title,
  .section-title-text {
    font-size: 12pt;
    font-weight: bold;
  }

  .party-title {
    margin-bottom: 8px;
  }

  .party-row,
  .signature-row {
    display: flex;
    align-items: center;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .party-row {
    flex-wrap: wrap;
    margin-bottom: 8px;
  }

  .party-label,
  .signature-label {
    white-space: nowrap;
    font-size: 12pt;
  }

  .party-label {
    margin-right: 5px;
  }

  .party-value {
    min-width: 60px;
    min-height: 20px;
    margin-right: 15px;
    padding: 0 5px;
    border-bottom: 1px solid #000;
    font-size: 12pt;
    text-align: center;
  }

  .party-value.short {
    width: 40px;
    min-width: 40px;
  }

  .party-value.long {
    flex: 1;
    min-width: 200px;
    text-align: left;
  }

  .party-value.full {
    flex: 1;
    min-width: 300px;
    text-align: left;
  }

  .content-section {
    margin: 20px 0;
    page-break-inside: auto;
    break-inside: auto;
  }

  .section-title-text {
    margin-bottom: 10px;
  }

  .print-line-row {
    min-height: 2em;
    padding: 0 5px;
    border-bottom: 1px solid #000;
    font-size: 12pt;
    line-height: 2;
    overflow-wrap: anywhere;
    white-space: pre-wrap;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .copies-section {
    margin: 20px 0;
    font-size: 12pt;
    text-align: left;
  }

  .signature-section {
    margin-top: 0;
    page-break-before: always;
    break-before: page;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .signature-row {
    justify-content: space-between;
    margin-bottom: 20px;
    font-size: 12pt;
  }

  .signature-value {
    min-width: 100px;
    border-bottom: 1px solid #000;
    text-align: center;
  }

  .footer-section {
    margin-top: 60px;
    margin-right: 2cm;
    text-align: right;
  }

  .seal-area,
  .date-area {
    font-size: 12pt;
  }

  .seal-area {
    margin-bottom: 20px;
  }
`,go=Oa({__name:"detail",setup(S){const w=ja(),k=Ha(),ye=ln(),B=V(()=>String(w.params.id||"")),Y=V(()=>w.query.mode!=="edit"),ae=V(()=>ye.hasPermission("mediation:edit")),q=F([]),E=F([]),ne=["婚姻家庭纠纷","邻里纠纷","合同纠纷","损害赔偿纠纷","劳动争议","其他纠纷"],bt=e=>{var l,o,d,p,f,U;const t=String((d=(o=(l=e==null?void 0:e.value)!=null?l:e==null?void 0:e.label)!=null?o:e==null?void 0:e.code)!=null?d:"").trim();return t?{label:String((U=(f=(p=e==null?void 0:e.label)!=null?p:e==null?void 0:e.value)!=null?f:e==null?void 0:e.code)!=null?U:t).trim()||t,value:t}:null},he=e=>{const t=String(e||"").trim();t&&(q.value.some(i=>i.value===t)||(q.value=[...q.value,{label:t,value:t}]))},z=_e({archive_id:"",status:"pending"}),X=()=>({name:"",id_card:"",phone:"",gender:"",nation:"汉族",age:"",occupation:"",address:""}),c=_e({dispute_type:"",apply_date:"",occurrence_date:"",occurrence_location:"",dispute_description:"",request_content:"",applicants:[X()],respondents:[X()]}),R=F([]),O=F(!1),_=_e({record_id:0,mediation_date:"",mediation_location:"",mediators:"",process_record:"",mediation_result:"",agreement:"no"}),J=F(0),j=F([]),g=_e({agreement_date:"",agreement_content:"",performance_period:"",breach_liability:"",party_a_sign:"",party_b_sign:"",mediator_sign:""}),pe=F([]),le=F(!1),ce=F(!1),be=F(!1),we=F(""),Se=F("image"),ue=F(""),Q=e=>{if(e===!0||e===1||e==="是"||e==="已达成协议")return!0;if(typeof e=="string"){const t=e.trim().toLowerCase();return["yes","y","true","1"].includes(t)}return!1},me=V(()=>R.value.some(e=>Q(e==null?void 0:e.agreement))),wt=V(()=>!!(g.agreement_date||g.agreement_content||g.performance_period||g.breach_liability||g.party_a_sign||g.party_b_sign||g.mediator_sign)),Ce=V(()=>me.value||Q(_.agreement)?!0:wt.value),oe=V(()=>me.value),Vt=V(()=>{const e={};return pe.value.filter(t=>{var l,o;const i=Number((o=(l=t==null?void 0:t.record_id)!=null?l:t==null?void 0:t.recordId)!=null?o:0);return t&&Number.isFinite(i)&&i>0}).forEach(t=>{var l;const i=String(Number((l=t.record_id)!=null?l:t.recordId));e[i]||(e[i]=[]),e[i].push(t)}),e}),Ie=e=>{const t=C(e);return t?Vt.value[String(t)]||[]:[]},Ee=V(()=>c.dispute_description?c.dispute_description.split(/\n/).map(e=>e.trim()).filter(e=>e.length>0):[]),kt=(e,t,i=30)=>{const l=String(e||"").replace(/\r/g,"").split(`
`).map(p=>p.trim()).filter(Boolean).join("  "),o=[];let d=l;for(;d&&o.length<t;){const p=Array.isArray(i)?i[o.length]||i[i.length-1]||30:i;o.length===t-1?(o.push(d.slice(0,p)),d=""):(o.push(d.slice(0,p)),d=d.slice(p))}for(;o.length<t;)o.push("");return o},ze=e=>{const t=String(e||"").trim(),i=t?t.split(/\r?\n/).map(l=>l.replace(/^\s*\d+[、.．]?\s*/,"").trim()).filter(Boolean):[];return[0,1,2].map(l=>i[l]||"")},Ve=e=>{const t=ze(e);return[0,1,2].map(i=>`${i+1}${t[i]?` ${t[i]}`:""}`).join(`
`)},xt=()=>{c.request_content=Ve(c.request_content)},Re=V(()=>kt(c.dispute_description,6,[21,29,29,29,29,29])),At=V(()=>ze(c.request_content)),Pe=V(()=>g.agreement_content?g.agreement_content.split(/\n/).map(e=>e.trim()).filter(e=>e.length>0):[]),Ft=V(()=>g.agreement_date?new Date(g.agreement_date).getFullYear():"____"),Ut=V(()=>g.agreement_date?new Date(g.agreement_date).getMonth()+1:"____"),Dt=V(()=>g.agreement_date?new Date(g.agreement_date).getDate():"____"),ee=V(()=>c.apply_date||new Date().toISOString().slice(0,10)),St=V(()=>ee.value?new Date(ee.value).getFullYear():""),Ct=V(()=>ee.value?new Date(ee.value).getMonth()+1:""),It=V(()=>ee.value?new Date(ee.value).getDate():""),Te=V(()=>{const e=E.value.map(t=>String(t.value||t.label||"").trim()).filter(Boolean);return e.find(t=>t.includes("调解委员会"))||e.find(t=>t.includes("调解"))||"人民调解委员会"}),Et=e=>{var l,o,d,p,f,U;const t=String((d=(o=(l=e==null?void 0:e.value)!=null?l:e==null?void 0:e.label)!=null?o:e==null?void 0:e.code)!=null?d:"").trim();return t?{label:String((U=(f=(p=e==null?void 0:e.label)!=null?p:e==null?void 0:e.value)!=null?f:e==null?void 0:e.code)!=null?U:t).trim()||t,value:t}:null},zt=()=>Z(null,null,function*(){try{const e=yield ht("使用单位"),t=Array.isArray(e.data)?e.data:[];E.value=t.map(i=>Et(i)).filter(i=>!!i)}catch(e){console.error("加载使用单位字典失败:",e),E.value=[]}}),Rt=()=>Z(null,null,function*(){try{const e=["纠纷类型","人民调解纠纷类型"];for(const t of e){const i=yield ht(t),l=Array.isArray(i.data)?i.data:[];if(l.length>0){q.value=l.map(o=>bt(o)).filter(o=>!!o),he(c.dispute_type);return}}}catch(e){console.error("加载纠纷类型字典失败:",e)}q.value=ne.map(e=>({label:e,value:e})),he(c.dispute_type)}),ke=F(!1),H=F("application"),Pt=()=>{z.archive_id="",z.status="pending",c.dispute_type="",c.apply_date="",c.occurrence_date="",c.occurrence_location="",c.dispute_description="",c.request_content="",c.applicants=[X()],c.respondents=[X()],R.value=[],_.mediation_date="",_.record_id=0,_.mediation_location="",_.mediators="",_.process_record="",_.mediation_result="",_.agreement="no",J.value=0,j.value=[],O.value=!1,g.agreement_date="",g.agreement_content="",g.performance_period="",g.breach_liability="",g.party_a_sign="",g.party_b_sign="",g.mediator_sign="",pe.value=[],H.value="application"},Tt=e=>e==="completed"?"success":e==="in_progress"?"warning":"info",$t=e=>e==="completed"?"已完成":e==="in_progress"?"处理中":e==="draft"?"草稿":"待处理",qt=e=>e?e.substring(0,10):"",se=e=>{const t=String(e||"").trim().replace(/\\/g,"/");return t&&(/^[a-zA-Z]:\//.test(t)||t.startsWith("//"))?t:""},$e=e=>!!se(e),qe=e=>{const t=String(e||"").trim().replace(/\\/g,"/");if(!t||!ue.value)return"";const i=t.startsWith("/")?t.slice(1):t;if(!/^uploads\//i.test(i))return"";const l=i.slice(8);return l?`${ue.value}/${l}`.replace(/\/{2,}/g,"/"):""},Me=e=>{const t=String(e||"").trim().replace(/\\/g,"/");if(!t)return"";const i=t.toLowerCase(),o=i.indexOf("/uploads/");if(o>=0)return t.slice(o);if(i.startsWith("uploads/"))return`/${t}`;const d=t.split("/").pop()||"";return d?`/uploads/archive-images/${d}`:""},xe=e=>{if(!e)return"";const t=String(e).trim().replace(/\\/g,"/"),i=t.toLowerCase().indexOf("/uploads/");if(i>=0)return t.slice(i);if(t.startsWith("/uploads/")||t.startsWith("/archives/"))return t;if(/^uploads\/|^archives\//i.test(t))return`/${t}`;const l=rn(t);if(/^https?:\/\//i.test(l)||l.startsWith("/"))return l;if(de()){const p=se(t);if(p)return re(p);const f=qe(t);if(f)return re(f)}const o=se(l);if(o&&de())return re(o);const d=qe(l);return d&&de()?re(d):/^[a-z][a-z\d+\-.]*:\/\//i.test(l)?l:`/${l}`},Be=e=>{if(de()){const o=[e==null?void 0:e.fileLocalPath,e==null?void 0:e.file_local_path];for(const d of o){const p=String(d||""),f=se(p);if(f)return re(f)}}const t=[e==null?void 0:e.filePath,e==null?void 0:e.file_path];for(const o of t){const d=String(o||"");if(!d||$e(d))continue;const p=xe(d);if(p)return p}const i=[e==null?void 0:e.fileLocalPath,e==null?void 0:e.file_local_path];for(const o of i){const d=Me(String(o||"")),p=xe(d);if(p)return p}const l=[e==null?void 0:e.filePath,e==null?void 0:e.file_path,e==null?void 0:e.fileLocalPath,e==null?void 0:e.file_local_path];for(const o of l){const d=String(o||"");if(!d)continue;const p=$e(d)?Me(d):d,f=xe(p);if(f)return f}return""},Mt=()=>Z(null,null,function*(){if(de())try{const e=yield on(),t=se((e==null?void 0:e.sqlitePath)||"");if(!t)return;const l=t.replace(/\/[^/]+$/,"").replace(/\/[^/]+$/,"");if(!l)return;ue.value=`${l}/uploads`.replace(/\/{2,}/g,"/")}catch(e){ue.value=""}}),Bt=(e,t)=>{e&&(Se.value=t,we.value=e,be.value=!0)},Nt=()=>{if(!ae.value){x.warning("当前账号没有编辑权限");return}k.replace({path:w.path,query:te(W({},w.query),{mode:"edit"})})},Lt=()=>{c.applicants.push(X())},Yt=e=>{c.applicants.length>1&&c.applicants.splice(e,1)},Ot=()=>{c.respondents.push(X())},jt=e=>{c.respondents.length>1&&c.respondents.splice(e,1)},Ne=(e,t)=>{if(!e||e.length<1){t([]);return}pn({keyword:e,page:1,pageSize:10}).then(i=>{var d;const o=(Array.isArray(i.data)?i.data:((d=i.data)==null?void 0:d.items)||[]).map(p=>W({value:p.name},p));t(o)}).catch(()=>{t([])})},Le=(e,t,i)=>{const l=t==="applicant"?c.applicants[i]:c.respondents[i];l.name=e.name,l.id_card=e.idCard||e.id_card||"",l.phone=e.phoneNumber||e.phone||"",l.gender=e.gender||"",l.nation=e.ethnicity||e.nation||"汉族",l.address=e.homeAddress||e.address||"",l.occupation=e.occupation||"",l.id_card&&l.id_card.length===18&&(l.age=String(Ae(l.id_card)))},Ye=e=>{var U,N,A;const t=e.id_card||e.idCard||e.resident_id_card||"",i=e.nation||e.ethnicity||e.resident_ethnicity||"汉族",l=e.phone||e.resident_phone||e.phoneNumber||"",o=e.address||e.resident_address||e.homeAddress||e.Home_address||"",d=e.gender||e.resident_gender||"",p=e.occupation||e.resident_occupation||"";let f=e.age||"";return!f&&t&&t.length===18&&(f=String(Ae(t))),te(W({},e),{id_card:t,nation:i,phone:l,address:o,gender:d,occupation:p,age:f,residentId:(N=(U=e.residentId)!=null?U:e.resident_id)!=null?N:null,isResident:(A=e.isResident)!=null?A:!!(e.residentId||e.resident_id)})},Oe=e=>{var t,i,l;return te(W({},e),{idCard:e.idCard||e.id_card||"",ethnicity:e.ethnicity||e.nation||"汉族",residentId:(i=(t=e.residentId)!=null?t:e.resident_id)!=null?i:null,isResident:(l=e.isResident)!=null?l:!!(e.residentId||e.resident_id)})},Ht=(e={})=>({dispute_type:e.dispute_type||e.disputeType||"",apply_date:e.apply_date||e.applyDate||"",occurrence_date:e.occurrence_date||e.occurrenceDate||"",occurrence_location:e.occurrence_location||e.occurrenceLocation||"",dispute_description:e.dispute_description||e.disputeDescription||"",request_content:Ve(e.request_content||e.requestContent||""),applicants:c.applicants,respondents:c.respondents}),Gt=(e={})=>({agreement_date:e.agreement_date||e.agreementDate||"",agreement_content:e.agreement_content||e.agreementContent||"",performance_period:e.performance_period||e.performancePeriod||"",breach_liability:e.breach_liability||e.breachLiability||"",party_a_sign:e.party_a_sign||e.partyASign||"",party_b_sign:e.party_b_sign||e.partyBSign||"",mediator_sign:e.mediator_sign||e.mediatorSign||""}),je=(e,t,i)=>{if(e&&e.length===18){const l=t==="applicant"?c.applicants[i]:c.respondents[i],o=parseInt(e.substring(16,17));l.gender=o%2===0?"女":"男",l.age=String(Ae(e))}},Ae=e=>{const t=parseInt(e.substring(6,10)),i=parseInt(e.substring(10,12)),l=parseInt(e.substring(12,14)),o=new Date;let d=o.getFullYear()-t;const p=o.getMonth()+1-i;return(p<0||p===0&&o.getDate()<l)&&d--,d},He=()=>{var e;return((e=c.applicants[0])==null?void 0:e.name)||""},Ge=()=>{var e;return((e=c.applicants[0])==null?void 0:e.gender)||""},We=()=>{var e;return((e=c.applicants[0])==null?void 0:e.nation)||""},Ze=()=>{var e;return((e=c.applicants[0])==null?void 0:e.age)||""},Ke=()=>{var e;return((e=c.applicants[0])==null?void 0:e.occupation)||""},Xe=()=>{var e;return((e=c.applicants[0])==null?void 0:e.phone)||""},Je=()=>{var e;return((e=c.applicants[0])==null?void 0:e.address)||""},Qe=()=>{var e;return((e=c.respondents[0])==null?void 0:e.name)||""},et=()=>{var e;return((e=c.respondents[0])==null?void 0:e.gender)||""},tt=()=>{var e;return((e=c.respondents[0])==null?void 0:e.nation)||""},at=()=>{var e;return((e=c.respondents[0])==null?void 0:e.age)||""},nt=()=>{var e;return((e=c.respondents[0])==null?void 0:e.occupation)||""},lt=()=>{var e;return((e=c.respondents[0])==null?void 0:e.phone)||""},ot=()=>{var e;return((e=c.respondents[0])==null?void 0:e.address)||""},Wt=()=>{if(oe.value){x.warning("已达成协议，不能再新增调解记录");return}O.value=!O.value},st=e=>{const t=it(e);return t?t.type&&!t.type.startsWith("image/")?`"${t.name}" 不是图片文件，已跳过`:t.size>co?`"${t.name}" 超过 5MB，已跳过，请压缩后再上传`:"":""},Zt=(e,t)=>{const i=[],l=t.filter(p=>{const f=st(p);return f?(i.push(f),!1):!0});j.value=l;const o=st(e),d=Array.from(new Set(o?[o,...i]:i));d.length>0&&x.warning(d.join("；"))},Kt=(e,t)=>{j.value=t},it=e=>{if(!e)return null;const i=[e,e.raw,e.file,e.originFileObj].find(l=>l?typeof File!="undefined"&&l instanceof File?!0:typeof l.name=="string"&&typeof l.size=="number"&&typeof l.arrayBuffer=="function":!1);return i||null},Xt=()=>{_.record_id=0,_.mediation_date="",_.mediation_location="",_.mediators="",_.process_record="",_.mediation_result="",_.agreement="no",J.value=0,j.value=[]},Jt=e=>{if(me.value){x.warning("已达成协议，不能修改调解记录");return}const t=C(e);if(!t){x.warning("调解记录ID不正确，无法修改");return}J.value=t,_.record_id=t,_.mediation_date=e.mediation_date||"",_.mediation_location=e.mediation_location||"",_.mediators=e.mediators||"",_.process_record=e.process_record||"",_.mediation_result=e.mediation_result||"",_.agreement=Q(e.agreement)?"yes":"no",j.value=[],O.value=!1},Qt=e=>{Y.value&&k.replace({path:w.path,query:te(W({},w.query),{mode:"edit"})}),Jt(e)},ea=()=>String(_.mediation_date||"").trim()?String(_.process_record||"").trim()?!0:(x.warning("请输入调解过程"),!1):(x.warning("请选择调解日期"),!1),C=e=>{var t,i,l;return Number((l=(i=(t=e==null?void 0:e.id)!=null?t:e==null?void 0:e.recordId)!=null?i:e==null?void 0:e.record_id)!=null?l:0)},ie=e=>String(e!=null?e:"").trim(),ta=(e,t,i)=>{if(Number.isFinite(e)&&e>0){const o=R.value.find(d=>C(d)===e);if(o)return o}const l=R.value.filter(o=>!t.has(C(o)));return l.length===1?l[0]:l.find(o=>["mediation_date","mediation_location","mediators","process_record","mediation_result"].some(d=>ie(i[d])&&ie(o==null?void 0:o[d])===ie(i[d])))||l.sort((o,d)=>C(d)-C(o))[0]},aa=(e,t)=>{if(!e)throw new Error("调解记录未回读到，请检查数据库状态");const i={mediation_date:"调解日期",mediation_location:"调解地点",mediators:"调解员",process_record:"调解过程",mediation_result:"调解结果"},l=Object.keys(i).filter(o=>{const d=ie(t[o]);return d?ie(e==null?void 0:e[o])!==d:!1});if(l.length>0)throw new Error(`调解记录已提交但字段未正确回显：${l.map(o=>i[o]).join("、")}`)},na=e=>{var l;const i=[e==null?void 0:e.data,(l=e==null?void 0:e.data)==null?void 0:l.data,e==null?void 0:e.payload,e].find(o=>Array.isArray(o));return Array.isArray(i)?i:[]},rt=e=>!Number.isFinite(e)||e<=0?0:pe.value.filter(t=>{var i,l;return Number((l=(i=t==null?void 0:t.record_id)!=null?i:t==null?void 0:t.recordId)!=null?l:0)===e}).length,la=()=>{le.value=!0},oa=()=>{ce.value=!0},dt=e=>`<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <title>人民调解申请书</title>
    <style>${uo}</style>
  </head>
  <body>${e}</body>
</html>`,pt=()=>{window.setTimeout(()=>{document.querySelector(".el-dialog__wrapper, .el-dialog")||(document.querySelectorAll(".el-overlay, .v-modal").forEach(t=>t.remove()),document.body.classList.remove("el-popup-parent--hidden"),document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right"))},0)},ct=e=>{pt();const t=document.createElement("iframe");t.style.position="fixed",t.style.right="0",t.style.bottom="0",t.style.width="0",t.style.height="0",t.style.border="0",document.body.appendChild(t);const i=t.contentWindow,l=i==null?void 0:i.document;if(!i||!l){t.remove();return}l.open(),l.write(e),l.close();const o=()=>{setTimeout(()=>{t.remove(),pt()},500)};i.onafterprint=o,setTimeout(()=>{i.focus(),i.print(),o()},100)},sa=()=>{const e=document.getElementById("applicationPrintArea");if(!e){x.error("未找到申请书打印内容");return}le.value=!1,ct(dt(e.outerHTML))},ia=()=>Z(null,null,function*(){const e=document.getElementById("applicationPrintArea");if(!e){x.error("未找到申请书导出内容");return}const t=dt(e.outerHTML),i=new Blob(["\uFEFF",t],{type:"application/msword;charset=utf-8"}),l=`${z.archive_id||"人民调解"}_申请书.doc`,o=yield sn(i,l,{filters:[{name:"Word 文档",extensions:["doc"]},{name:"HTML 文档",extensions:["html"]}]});o.saved?x.success(o.filePath?`导出成功：${o.filePath}`:"导出成功"):o.canceled?x.info("已取消导出"):x.error(o.error||"导出失败")}),ra=()=>{const e=document.getElementById("printArea");e&&ct(`
    <!doctype html>
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8" />
        <title>人民调解协议书</title>
        <style>${mo}</style>
      </head>
      <body>${e.outerHTML}</body>
    </html>
  `)},ge=()=>Z(null,null,function*(){try{const t=(yield nn(B.value)).data||{},i=t&&typeof t=="object"&&!Array.isArray(t)&&t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t,l=i.archive||i;z.archive_id=(l==null?void 0:l.archive_id)||"",z.status=(l==null?void 0:l.status)||"pending",i.application&&(Object.assign(c,Ht(i.application)),he(c.dispute_type)),i.applicants&&i.applicants.length>0&&(c.applicants=i.applicants.map(o=>Ye(o))),i.respondents&&i.respondents.length>0&&(c.respondents=i.respondents.map(o=>Ye(o))),i.records&&Array.isArray(i.records)&&(R.value=i.records.sort((o,d)=>{const p=new Date(o.mediation_date||"").getTime(),f=new Date(d.mediation_date||"").getTime();return Number.isFinite(p)&&Number.isFinite(f)&&p!==f?f-p:Number.isFinite(p)!==Number.isFinite(f)?Number.isFinite(f)?1:-1:C(d)-C(o)})),i.agreement&&Object.assign(g,Gt(i.agreement)),pe.value=Array.isArray(i.attachments)?i.attachments:[]}catch(e){console.error("加载档案详情失败:",e),x.error("加载档案详情失败")}}),da=()=>Z(null,null,function*(){var e,t,i;ke.value=!0;try{if(H.value==="application"){const l=te(W({},c),{request_content:Ve(c.request_content),applicants:c.applicants.map(o=>Oe(o)),respondents:c.respondents.map(o=>Oe(o))});yield Qa(B.value,l),x.success("申请书保存成功")}else if(H.value==="record"){if(oe.value){x.warning("已达成协议，不能再新增调解记录");return}if(!ea())return;const l=Q(_.agreement),o=R.value.length,d=new Set(R.value.map(P=>C(P))),p=W({},_),f=yield en(B.value,p),U=Number((i=(t=(e=f==null?void 0:f.data)==null?void 0:e.id)!=null?t:f==null?void 0:f.id)!=null?i:0),N=J.value||U;if(yield ge(),!J.value&&R.value.length<=o)throw new Error("调解记录未写入，请检查服务端日志或数据库状态");const A=ta(N,d,p);aa(A,p);const G=C(A);if(x.success("调解记录保存成功"),j.value.length>0)try{const P=rt(G),L=j.value.map(M=>it(M)).filter(M=>!!M);if(L.length>0){const M=new FormData;Number.isFinite(G)&&G>0&&M.append("recordId",String(G)),L.forEach(fe=>{M.append("files",fe)});const Fe=yield tn(B.value,M);if(na(Fe).length===0)throw new Error("图片未写入上传目录或附件表");if(yield ge(),rt(G)<P+L.length)throw new Error("图片已上传但未绑定到本次调解记录，请检查附件表");x.success("图片上传成功")}else throw new Error("已选择图片但未识别到可上传文件，请重新选择后再保存")}catch(P){const L=P instanceof Error&&P.message?P.message:"图片上传失败";throw new Error(`调解记录已保存，但现场图片上传失败：${L}`)}Xt(),yield ge(),l&&(H.value="agreement")}else H.value==="agreement"&&(yield an(B.value,g),x.success("调解协议保存成功"))}catch(l){console.error("保存失败:",l);const o=l instanceof Error&&l.message?l.message:"保存失败";x.error(o)}finally{ke.value=!1}}),pa=()=>{k.push("/mediation/archive")};return Ga(()=>{Rt(),zt(),Mt()}),vt(B,e=>{e&&(Pt(),ge())},{immediate:!0}),vt(oe,e=>{e&&(O.value=!0)},{immediate:!0}),(e,t)=>{const i=wa,l=Va,o=Sa,d=Da,p=Ua,f=Ia,U=Ca,N=Ea,A=Fa,G=za,P=Aa,L=xa,M=Ta,Fe=Pa,ut=Ra,fe=$a,mt=qa,gt=Na,ca=Ba,ua=La,ma=Ma,ga=ka,Ue=Ya;return v(),y("div",cn,[n(M,null,{default:s(()=>[a("div",un,[a("div",mn,[a("h2",null,"调解档案 - "+u(z.archive_id),1),n(i,{type:Tt(z.status),size:"large"},{default:s(()=>[b(u($t(z.status)),1)]),_:1},8,["type"])]),a("div",gn,[n(l,{onClick:pa},{default:s(()=>t[26]||(t[26]=[b("返回列表")])),_:1}),Y.value&&ae.value?(v(),T(l,{key:0,type:"primary",icon:I(Ka),onClick:Nt},{default:s(()=>t[27]||(t[27]=[b("编辑")])),_:1},8,["icon"])):K("",!0),Y.value?K("",!0):(v(),T(l,{key:1,type:"primary",loading:ke.value,disabled:H.value==="record"&&oe.value,onClick:da},{default:s(()=>t[28]||(t[28]=[b("保存")])),_:1},8,["loading","disabled"]))])]),n(ga,{modelValue:H.value,"onUpdate:modelValue":t[20]||(t[20]=r=>H.value=r),class:"archive-tabs"},{default:s(()=>[n(L,{label:"调解申请书",name:"application"},{default:s(()=>[n(P,{disabled:Y.value,"label-width":"100px"},{default:s(()=>[t[31]||(t[31]=a("h4",{class:"section-title"},"档案基本信息",-1)),n(A,{gutter:20},{default:s(()=>[n(p,{span:8},{default:s(()=>[n(d,{label:"档案编号"},{default:s(()=>[n(o,{modelValue:z.archive_id,"onUpdate:modelValue":t[0]||(t[0]=r=>z.archive_id=r),disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),n(p,{span:8},{default:s(()=>[n(d,{label:"纠纷类型"},{default:s(()=>[n(U,{modelValue:c.dispute_type,"onUpdate:modelValue":t[1]||(t[1]=r=>c.dispute_type=r),placeholder:"请选择",style:{width:"100%"}},{default:s(()=>[(v(!0),y(D,null,$(q.value,r=>(v(),T(f,{key:r.value,label:r.label,value:r.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),n(p,{span:8},{default:s(()=>[n(d,{label:"发生日期"},{default:s(()=>[n(N,{modelValue:c.occurrence_date,"onUpdate:modelValue":t[2]||(t[2]=r=>c.occurrence_date=r),type:"date",placeholder:"选择日期","value-format":"YYYY-MM-DD",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),n(A,{gutter:20},{default:s(()=>[n(p,{span:8},{default:s(()=>[n(d,{label:"申请日期"},{default:s(()=>[n(N,{modelValue:c.apply_date,"onUpdate:modelValue":t[3]||(t[3]=r=>c.apply_date=r),type:"date",placeholder:"选择日期","value-format":"YYYY-MM-DD",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),n(p,{span:16},{default:s(()=>[n(d,{label:"发生地点"},{default:s(()=>[n(o,{modelValue:c.occurrence_location,"onUpdate:modelValue":t[4]||(t[4]=r=>c.occurrence_location=r),placeholder:"请输入地点"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),a("div",fn,[a("h4",_n,[t[29]||(t[29]=b(" 申请人信息 ")),n(l,{type:"primary",size:"small",icon:I(De),circle:"",onClick:Lt},null,8,["icon"])]),(v(!0),y(D,null,$(c.applicants,(r,h)=>(v(),y("div",{key:`app-${h}`,class:"participant-card"},[a("div",vn,[a("span",yn,"申请人 "+u(h+1),1),c.applicants.length>1?(v(),T(l,{key:0,type:"danger",size:"small",icon:I(yt),circle:"",onClick:m=>Yt(h)},null,8,["icon","onClick"])):K("",!0)]),n(A,{gutter:12},{default:s(()=>[n(p,{span:6},{default:s(()=>[n(d,{label:"姓名"},{default:s(()=>[n(G,{modelValue:r.name,"onUpdate:modelValue":m=>r.name=m,"fetch-suggestions":Ne,placeholder:"请输入姓名",clearable:"","trigger-on-focus":!1,onSelect:m=>Le(m,"applicant",h)},{default:s(({item:m})=>[a("div",hn,[a("span",bn,u(m.name),1),a("span",wn,u(m.idCard)+" | "+u(m.phone),1)])]),_:2},1032,["modelValue","onUpdate:modelValue","onSelect"])]),_:2},1024)]),_:2},1024),n(p,{span:8},{default:s(()=>[n(d,{label:"身份证号"},{default:s(()=>[n(o,{modelValue:r.id_card,"onUpdate:modelValue":m=>r.id_card=m,placeholder:"身份证号",onInput:m=>je(m,"applicant",h)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:2},1024)]),_:2},1024),n(p,{span:5},{default:s(()=>[n(d,{label:"联系电话"},{default:s(()=>[n(o,{modelValue:r.phone,"onUpdate:modelValue":m=>r.phone=m,placeholder:"联系电话"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),n(p,{span:5},{default:s(()=>[n(d,{label:"性别"},{default:s(()=>[n(U,{modelValue:r.gender,"onUpdate:modelValue":m=>r.gender=m,placeholder:"请选择",style:{width:"100%"}},{default:s(()=>[n(f,{label:"男",value:"男"}),n(f,{label:"女",value:"女"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),n(A,{gutter:12},{default:s(()=>[n(p,{span:5},{default:s(()=>[n(d,{label:"民族"},{default:s(()=>[n(o,{modelValue:r.nation,"onUpdate:modelValue":m=>r.nation=m,placeholder:"民族"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),n(p,{span:4},{default:s(()=>[n(d,{label:"年龄"},{default:s(()=>[n(o,{modelValue:r.age,"onUpdate:modelValue":m=>r.age=m,placeholder:"年龄"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),n(p,{span:6},{default:s(()=>[n(d,{label:"职业/职务"},{default:s(()=>[n(o,{modelValue:r.occupation,"onUpdate:modelValue":m=>r.occupation=m,placeholder:"职业或职务"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),n(p,{span:9},{default:s(()=>[n(d,{label:"单位或住址"},{default:s(()=>[n(o,{modelValue:r.address,"onUpdate:modelValue":m=>r.address=m,placeholder:"单位或住址"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]))),128))]),a("div",Vn,[a("h4",kn,[t[30]||(t[30]=b(" 被申请人信息 ")),n(l,{type:"primary",size:"small",icon:I(De),circle:"",onClick:Ot},null,8,["icon"])]),(v(!0),y(D,null,$(c.respondents,(r,h)=>(v(),y("div",{key:`res-${h}`,class:"participant-card"},[a("div",xn,[a("span",An,"被申请人 "+u(h+1),1),c.respondents.length>1?(v(),T(l,{key:0,type:"danger",size:"small",icon:I(yt),circle:"",onClick:m=>jt(h)},null,8,["icon","onClick"])):K("",!0)]),n(A,{gutter:12},{default:s(()=>[n(p,{span:6},{default:s(()=>[n(d,{label:"姓名"},{default:s(()=>[n(G,{modelValue:r.name,"onUpdate:modelValue":m=>r.name=m,"fetch-suggestions":Ne,placeholder:"请输入姓名",clearable:"","trigger-on-focus":!1,onSelect:m=>Le(m,"respondent",h)},{default:s(({item:m})=>[a("div",Fn,[a("span",Un,u(m.name),1),a("span",Dn,u(m.idCard)+" | "+u(m.phone),1)])]),_:2},1032,["modelValue","onUpdate:modelValue","onSelect"])]),_:2},1024)]),_:2},1024),n(p,{span:8},{default:s(()=>[n(d,{label:"身份证号"},{default:s(()=>[n(o,{modelValue:r.id_card,"onUpdate:modelValue":m=>r.id_card=m,placeholder:"身份证号",onInput:m=>je(m,"respondent",h)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:2},1024)]),_:2},1024),n(p,{span:5},{default:s(()=>[n(d,{label:"联系电话"},{default:s(()=>[n(o,{modelValue:r.phone,"onUpdate:modelValue":m=>r.phone=m,placeholder:"联系电话"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),n(p,{span:5},{default:s(()=>[n(d,{label:"性别"},{default:s(()=>[n(U,{modelValue:r.gender,"onUpdate:modelValue":m=>r.gender=m,placeholder:"请选择",style:{width:"100%"}},{default:s(()=>[n(f,{label:"男",value:"男"}),n(f,{label:"女",value:"女"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),n(A,{gutter:12},{default:s(()=>[n(p,{span:5},{default:s(()=>[n(d,{label:"民族"},{default:s(()=>[n(o,{modelValue:r.nation,"onUpdate:modelValue":m=>r.nation=m,placeholder:"民族"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),n(p,{span:4},{default:s(()=>[n(d,{label:"年龄"},{default:s(()=>[n(o,{modelValue:r.age,"onUpdate:modelValue":m=>r.age=m,placeholder:"年龄"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),n(p,{span:6},{default:s(()=>[n(d,{label:"职业/职务"},{default:s(()=>[n(o,{modelValue:r.occupation,"onUpdate:modelValue":m=>r.occupation=m,placeholder:"职业或职务"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),n(p,{span:9},{default:s(()=>[n(d,{label:"单位或住址"},{default:s(()=>[n(o,{modelValue:r.address,"onUpdate:modelValue":m=>r.address=m,placeholder:"单位或住址"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]))),128))]),t[32]||(t[32]=a("h4",{class:"section-title"},"纠纷详情",-1)),n(d,{label:"纠纷描述"},{default:s(()=>[n(o,{modelValue:c.dispute_description,"onUpdate:modelValue":t[5]||(t[5]=r=>c.dispute_description=r),type:"textarea",rows:4,placeholder:"请详细描述纠纷情况",maxlength:"500","show-word-limit":""},null,8,["modelValue"])]),_:1}),n(d,{label:"申请事项"},{default:s(()=>[n(o,{modelValue:c.request_content,"onUpdate:modelValue":t[6]||(t[6]=r=>c.request_content=r),type:"textarea",rows:3,placeholder:`1
2
3`,maxlength:"500","show-word-limit":"",onFocus:xt},null,8,["modelValue"])]),_:1})]),_:1},8,["disabled"]),a("div",Sn,[n(l,{icon:I(ve),onClick:la},{default:s(()=>t[33]||(t[33]=[b("调解申请书")])),_:1},8,["icon"])])]),_:1}),n(L,{label:"调解记录",name:"record"},{default:s(()=>[R.value.length>0?(v(),y("div",Cn,[t[40]||(t[40]=a("h4",{class:"section-title"},"历史调解记录",-1)),n(ut,null,{default:s(()=>[(v(!0),y(D,null,$(R.value,(r,h)=>(v(),T(Fe,{key:C(r)||h,timestamp:qt(r.mediation_date),placement:"top",type:"primary"},{default:s(()=>[n(M,{shadow:"hover"},{default:s(()=>[a("div",In,[a("span",En,"调解记录 #"+u(R.value.length-h),1),a("div",zn,[n(i,{type:Q(r.agreement)?"success":"info",size:"small"},{default:s(()=>[b(u(Q(r.agreement)?"已达成协议":"未达成协议"),1)]),_:2},1032,["type"]),ae.value&&!me.value?(v(),T(l,{key:0,type:"primary",link:"",size:"small",onClick:m=>Qt(r)},{default:s(()=>t[34]||(t[34]=[b(" 修改 ")])),_:2},1032,["onClick"])):K("",!0)])]),a("div",Rn,[a("p",null,[t[35]||(t[35]=a("strong",null,"调解地点：",-1)),b(u(r.mediation_location),1)]),a("p",null,[t[36]||(t[36]=a("strong",null,"调解员：",-1)),b(u(r.mediators),1)]),a("p",null,[t[37]||(t[37]=a("strong",null,"调解过程：",-1)),b(u(r.process_record),1)]),a("p",null,[t[38]||(t[38]=a("strong",null,"调解结果：",-1)),b(u(r.mediation_result),1)]),Ie(r).length?(v(),y("div",Pn,[t[39]||(t[39]=a("div",{class:"record-images-label"},"现场图片：",-1)),a("div",Tn,[(v(!0),y(D,null,$(Ie(r),(m,fa)=>(v(),y("div",{key:m.id||`${C(r)}-img-${fa}`,class:"record-image-item",onClick:fo=>Bt(Be(m),"image")},[a("img",{src:Be(m),alt:m.file_name},null,8,qn)],8,$n))),128))])])):K("",!0)])]),_:2},1024)]),_:2},1032,["timestamp"]))),128))]),_:1})])):K("",!0),a("div",Mn,[oe.value?(v(),T(fe,{key:0,title:"已达成协议，不能再新增调解记录",type:"warning",closable:!1,"show-icon":""})):(v(),y(D,{key:1},[a("div",{class:"section-header",onClick:Wt},[a("h4",Bn,u(O.value?"展开":"收起")+u(J.value?"修改调解记录":"新增调解记录"),1),n(mt,{size:18,style:{cursor:"pointer"}},{default:s(()=>[O.value?(v(),T(I(Xa),{key:0})):(v(),T(I(Ja),{key:1}))]),_:1})]),n(ma,null,{default:s(()=>[Wa(a("div",null,[n(P,{model:_,"label-width":"100px",disabled:Y.value},{default:s(()=>[n(A,{gutter:20},{default:s(()=>[n(p,{span:12},{default:s(()=>[n(d,{label:"调解日期",required:""},{default:s(()=>[n(N,{modelValue:_.mediation_date,"onUpdate:modelValue":t[7]||(t[7]=r=>_.mediation_date=r),type:"date",placeholder:"选择调解日期","value-format":"YYYY-MM-DD",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),n(p,{span:12},{default:s(()=>[n(d,{label:"调解地点"},{default:s(()=>[n(o,{modelValue:_.mediation_location,"onUpdate:modelValue":t[8]||(t[8]=r=>_.mediation_location=r),placeholder:"请输入调解地点"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),n(d,{label:"调解员"},{default:s(()=>[n(o,{modelValue:_.mediators,"onUpdate:modelValue":t[9]||(t[9]=r=>_.mediators=r),placeholder:"请输入调解员姓名，多个用逗号分隔",type:"textarea",rows:2},null,8,["modelValue"])]),_:1}),n(d,{label:"调解过程",required:""},{default:s(()=>[n(o,{modelValue:_.process_record,"onUpdate:modelValue":t[10]||(t[10]=r=>_.process_record=r),type:"textarea",rows:6,placeholder:"请详细记录调解过程",maxlength:"1000","show-word-limit":""},null,8,["modelValue"])]),_:1}),n(d,{label:"调解结果"},{default:s(()=>[n(o,{modelValue:_.mediation_result,"onUpdate:modelValue":t[11]||(t[11]=r=>_.mediation_result=r),type:"textarea",rows:4,placeholder:"请输入调解结果",maxlength:"500","show-word-limit":""},null,8,["modelValue"])]),_:1}),n(d,{label:"是否达成协议"},{default:s(()=>[n(ca,{modelValue:_.agreement,"onUpdate:modelValue":t[12]||(t[12]=r=>_.agreement=r)},{default:s(()=>[n(gt,{value:"yes"},{default:s(()=>t[41]||(t[41]=[b("是")])),_:1}),n(gt,{value:"no"},{default:s(()=>t[42]||(t[42]=[b("否")])),_:1})]),_:1},8,["modelValue"])]),_:1}),n(d,{label:"现场图片"},{default:s(()=>[n(ua,{action:"#","list-type":"picture-card","auto-upload":!1,"file-list":j.value,"on-change":Zt,"on-remove":Kt,accept:"image/*"},{tip:s(()=>t[43]||(t[43]=[a("div",{class:"el-upload__tip"},"只能上传图片文件，单个文件不超过5MB",-1)])),default:s(()=>[n(mt,null,{default:s(()=>[n(I(De))]),_:1})]),_:1},8,["file-list"])]),_:1})]),_:1},8,["model","disabled"])],512),[[Za,!O.value]])]),_:1})],64))])]),_:1}),n(L,{label:"调解协议书",name:"agreement",disabled:!Ce.value},{default:s(()=>[Ce.value?(v(),y(D,{key:1},[n(P,{disabled:Y.value,"label-width":"120px"},{default:s(()=>[n(A,{gutter:20},{default:s(()=>[n(p,{span:12},{default:s(()=>[n(d,{label:"协议日期",required:""},{default:s(()=>[n(N,{modelValue:g.agreement_date,"onUpdate:modelValue":t[13]||(t[13]=r=>g.agreement_date=r),type:"date",placeholder:"选择协议日期","value-format":"YYYY-MM-DD",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),n(p,{span:12},{default:s(()=>[n(d,{label:"履行期限"},{default:s(()=>[n(o,{modelValue:g.performance_period,"onUpdate:modelValue":t[14]||(t[14]=r=>g.performance_period=r),placeholder:"请输入履行期限"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),n(d,{label:"协议内容",required:""},{default:s(()=>[a("div",Nn,[t[44]||(t[44]=a("div",{class:"agreement-content-prefix"},"经调解，自愿达成如下协议：",-1)),n(o,{modelValue:g.agreement_content,"onUpdate:modelValue":t[15]||(t[15]=r=>g.agreement_content=r),type:"textarea",rows:8,placeholder:"请输入具体协议内容，无需重复填写上方固定文字",maxlength:"2000","show-word-limit":""},null,8,["modelValue"])])]),_:1}),n(d,{label:"违约责任"},{default:s(()=>[n(o,{modelValue:g.breach_liability,"onUpdate:modelValue":t[16]||(t[16]=r=>g.breach_liability=r),type:"textarea",rows:4,placeholder:"请输入违约责任条款",maxlength:"500","show-word-limit":""},null,8,["modelValue"])]),_:1}),n(A,{gutter:20},{default:s(()=>[n(p,{span:8},{default:s(()=>[n(d,{label:"甲方（签章）"},{default:s(()=>[n(o,{modelValue:g.party_a_sign,"onUpdate:modelValue":t[17]||(t[17]=r=>g.party_a_sign=r),placeholder:"请输入甲方签章"},null,8,["modelValue"])]),_:1})]),_:1}),n(p,{span:8},{default:s(()=>[n(d,{label:"乙方（签章）"},{default:s(()=>[n(o,{modelValue:g.party_b_sign,"onUpdate:modelValue":t[18]||(t[18]=r=>g.party_b_sign=r),placeholder:"请输入乙方签章"},null,8,["modelValue"])]),_:1})]),_:1}),n(p,{span:8},{default:s(()=>[n(d,{label:"调解员（签章）"},{default:s(()=>[n(o,{modelValue:g.mediator_sign,"onUpdate:modelValue":t[19]||(t[19]=r=>g.mediator_sign=r),placeholder:"请输入调解员签章"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["disabled"]),a("div",Ln,[n(l,{type:"warning",icon:I(ve),onClick:oa},{default:s(()=>t[45]||(t[45]=[b("打印协议")])),_:1},8,["icon"])])],64)):(v(),T(fe,{key:0,title:"只有在调解记录中选择了「是」达成协议后才能填写协议书",type:"info",closable:!1,"show-icon":""}))]),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1}),n(Ue,{modelValue:le.value,"onUpdate:modelValue":t[22]||(t[22]=r=>le.value=r),title:"调解申请书",width:"900px",modal:!1,"close-on-click-modal":!1,class:"application-print-dialog"},{footer:s(()=>[n(l,{onClick:t[21]||(t[21]=r=>le.value=!1)},{default:s(()=>t[68]||(t[68]=[b("关闭")])),_:1}),n(l,{onClick:ia},{default:s(()=>t[69]||(t[69]=[b("导出")])),_:1}),n(l,{type:"primary",icon:I(ve),onClick:sa},{default:s(()=>t[70]||(t[70]=[b("打印")])),_:1},8,["icon"])]),default:s(()=>[a("div",Yn,[t[67]||(t[67]=a("h1",{class:"application-print-title"},"人民调解申请书",-1)),a("div",On,[a("div",jn,[t[46]||(t[46]=a("span",{class:"application-label"},"申请人姓名",-1)),a("span",Hn,u(He()),1),t[47]||(t[47]=a("span",{class:"application-label"},"性别",-1)),a("span",Gn,u(Ge()),1),t[48]||(t[48]=a("span",{class:"application-label"},"民族",-1)),a("span",Wn,u(We()),1),t[49]||(t[49]=a("span",{class:"application-label"},"年龄",-1)),a("span",Zn,u(Ze()),1)]),a("div",Kn,[t[50]||(t[50]=a("span",{class:"application-label"},"职业或职务",-1)),a("span",Xn,u(Ke()),1),t[51]||(t[51]=a("span",{class:"application-label"},"联系方式",-1)),a("span",Jn,u(Xe()),1)]),a("div",Qn,[t[52]||(t[52]=a("span",{class:"application-label"},"单位或住址",-1)),a("span",el,u(Je()),1)]),a("div",tl,[t[53]||(t[53]=a("span",{class:"application-label"},"被申请人姓名",-1)),a("span",al,u(Qe()),1),t[54]||(t[54]=a("span",{class:"application-label"},"性别",-1)),a("span",nl,u(et()),1),t[55]||(t[55]=a("span",{class:"application-label"},"民族",-1)),a("span",ll,u(tt()),1),t[56]||(t[56]=a("span",{class:"application-label"},"年龄",-1)),a("span",ol,u(at()),1)]),a("div",sl,[t[57]||(t[57]=a("span",{class:"application-label"},"职业或职务",-1)),a("span",il,u(nt()),1),t[58]||(t[58]=a("span",{class:"application-label"},"联系方式",-1)),a("span",rl,u(lt()),1)]),a("div",dl,[t[59]||(t[59]=a("span",{class:"application-label"},"单位或住址",-1)),a("span",pl,u(ot()),1)]),a("div",cl,[t[60]||(t[60]=a("span",{class:"application-label"},"纠纷简要情况：",-1)),a("span",ul,u(Re.value[0]),1)]),a("div",ml,[(v(!0),y(D,null,$(Re.value.slice(1),(r,h)=>(v(),y("div",{key:`app-dispute-${h+1}`,class:"application-long-line"},u(r),1))),128))]),a("div",gl,[t[61]||(t[61]=a("div",{class:"application-label application-request-label"},"当事人申请事项：",-1)),a("div",fl,[(v(!0),y(D,null,$(At.value,(r,h)=>(v(),y("div",{key:`app-request-${h}`,class:"application-numbered-row"},[a("span",null,u(h+1),1),a("span",_l,u(r),1)]))),128))])]),t[65]||(t[65]=a("p",{class:"application-notice"}," 人民调解委员会已将申请人民调解的相关规定告知我，现自愿申请人民调解委员会进行调解。 ",-1)),t[66]||(t[66]=a("div",{class:"application-signature-row"},[a("span",null,"申请人（签名盖章或按指印）："),a("span",{class:"application-signature-line"})],-1)),a("div",vl,[a("span",yl,u(St.value),1),t[62]||(t[62]=a("span",null,"年",-1)),a("span",hl,u(Ct.value),1),t[63]||(t[63]=a("span",null,"月",-1)),a("span",bl,u(It.value),1),t[64]||(t[64]=a("span",null,"日",-1))])])])]),_:1},8,["modelValue"]),n(Ue,{modelValue:ce.value,"onUpdate:modelValue":t[24]||(t[24]=r=>ce.value=r),title:"打印预览 - 人民调解协议书",width:"900px","close-on-click-modal":!1},{footer:s(()=>[n(l,{onClick:t[23]||(t[23]=r=>ce.value=!1)},{default:s(()=>t[98]||(t[98]=[b("关闭")])),_:1}),n(l,{type:"primary",icon:I(ve),onClick:ra},{default:s(()=>t[99]||(t[99]=[b("打印")])),_:1},8,["icon"])]),default:s(()=>[a("div",wl,[a("div",Vl,[t[71]||(t[71]=a("h1",{class:"print-title"},"人民调解协议书",-1)),a("div",kl,"编号："+u(z.archive_id),1)]),a("div",xl,[t[79]||(t[79]=a("div",{class:"party-title"},"当事人（甲方）",-1)),a("div",Al,[t[72]||(t[72]=a("span",{class:"party-label"},"姓名",-1)),a("span",Fl,u(He()),1),t[73]||(t[73]=a("span",{class:"party-label"},"性别",-1)),a("span",Ul,u(Ge()),1),t[74]||(t[74]=a("span",{class:"party-label"},"民族",-1)),a("span",Dl,u(We()),1),t[75]||(t[75]=a("span",{class:"party-label"},"年龄",-1)),a("span",Sl,u(Ze()),1)]),a("div",Cl,[t[76]||(t[76]=a("span",{class:"party-label"},"职业或职务",-1)),a("span",Il,u(Ke()),1),t[77]||(t[77]=a("span",{class:"party-label"},"联系方式",-1)),a("span",El,u(Xe()),1)]),a("div",zl,[t[78]||(t[78]=a("span",{class:"party-label"},"单位或住址",-1)),a("span",Rl,u(Je()),1)])]),a("div",Pl,[t[87]||(t[87]=a("div",{class:"party-title"},"当事人（乙方）",-1)),a("div",Tl,[t[80]||(t[80]=a("span",{class:"party-label"},"姓名",-1)),a("span",$l,u(Qe()),1),t[81]||(t[81]=a("span",{class:"party-label"},"性别",-1)),a("span",ql,u(et()),1),t[82]||(t[82]=a("span",{class:"party-label"},"民族",-1)),a("span",Ml,u(tt()),1),t[83]||(t[83]=a("span",{class:"party-label"},"年龄",-1)),a("span",Bl,u(at()),1)]),a("div",Nl,[t[84]||(t[84]=a("span",{class:"party-label"},"职业或职务",-1)),a("span",Ll,u(nt()),1),t[85]||(t[85]=a("span",{class:"party-label"},"联系方式",-1)),a("span",Yl,u(lt()),1)]),a("div",Ol,[t[86]||(t[86]=a("span",{class:"party-label"},"单位或住址",-1)),a("span",jl,u(ot()),1)])]),a("div",Hl,[t[88]||(t[88]=a("div",{class:"section-title-text"},"纠纷主要事实、争议事项：",-1)),(v(!0),y(D,null,$(Ee.value,(r,h)=>(v(),y("div",{key:`dispute-${h}`,class:"print-line-row"},u(r),1))),128)),(v(!0),y(D,null,$(Math.max(5-Ee.value.length,0),r=>(v(),y("div",{key:`empty-${r}`,class:"print-line-row"}))),128))]),a("div",Gl,[t[89]||(t[89]=a("div",{class:"section-title-text"},"经调解，自愿达成如下协议：",-1)),(v(!0),y(D,null,$(Pe.value,(r,h)=>(v(),y("div",{key:`agree-${h}`,class:"print-line-row"},u(r),1))),128)),(v(!0),y(D,null,$(Math.max(4-Pe.value.length,0),r=>(v(),y("div",{key:`aempty-${r}`,class:"print-line-row"}))),128))]),a("div",Wl,[t[90]||(t[90]=a("div",{class:"section-title-text"},"履行方式、时限",-1)),a("div",Zl,u(g.performance_period||""),1)]),a("div",Kl,[t[91]||(t[91]=b(" 本协议一式")),t[92]||(t[92]=a("u",null,"  三  ",-1)),b("份，当事人、"+u(Te.value)+"各持一份。 ",1)]),a("div",Xl,[a("div",Jl,[t[93]||(t[93]=a("span",{class:"signature-label"},"当事人（签名盖章或按指印）",-1)),a("span",Ql,u(g.party_a_sign||""),1),t[94]||(t[94]=a("span",{class:"signature-label"},"人民调解员（签名）",-1)),a("span",eo,u(g.mediator_sign||""),1)]),a("div",to,[t[95]||(t[95]=a("span",{class:"signature-label"},"当事人（签名盖章或按指印）",-1)),a("span",ao,u(g.party_b_sign||""),1),t[96]||(t[96]=a("span",{class:"signature-label"},"记录人（签名）",-1)),t[97]||(t[97]=a("span",{class:"signature-value"},null,-1))])]),a("div",no,[a("div",lo,u(Te.value),1),a("div",oo,[a("span",so,u(Ft.value)+"年"+u(Ut.value)+"月"+u(Dt.value)+"日",1)])])])]),_:1},8,["modelValue"]),n(Ue,{modelValue:be.value,"onUpdate:modelValue":t[25]||(t[25]=r=>be.value=r),width:"80%","show-close":!1,"close-on-click-modal":!0,"close-on-press-escape":!0,class:"image-preview-dialog"},{default:s(()=>[a("div",io,[Se.value==="image"?(v(),y("img",{key:0,src:we.value,alt:"预览图片"},null,8,ro)):(v(),y("iframe",{key:1,class:"preview-iframe",src:we.value,frameborder:"0"},null,8,po))])]),_:1},8,["modelValue"])])}}}),Fo=dn(go,[["__scopeId","data-v-76700547"]]);export{Fo as default};
