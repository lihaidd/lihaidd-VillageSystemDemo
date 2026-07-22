var ln=Object.defineProperty,on=Object.defineProperties;var sn=Object.getOwnPropertyDescriptors;var Bt=Object.getOwnPropertySymbols;var rn=Object.prototype.hasOwnProperty,dn=Object.prototype.propertyIsEnumerable;var Mt=(b,p,T)=>p in b?ln(b,p,{enumerable:!0,configurable:!0,writable:!0,value:T}):b[p]=T,U=(b,p)=>{for(var T in p||(p={}))rn.call(p,T)&&Mt(b,T,p[T]);if(Bt)for(var T of Bt(p))dn.call(p,T)&&Mt(b,T,p[T]);return b},j=(b,p)=>on(b,sn(p));var I=(b,p,T)=>new Promise((De,Ce)=>{var Be=H=>{try{de(T.next(H))}catch(ie){Ce(ie)}},se=H=>{try{de(T.throw(H))}catch(ie){Ce(ie)}},de=H=>H.done?De(H.value):Promise.resolve(H.value).then(Be,se);de((T=T.apply(b,p)).next())});import{aa as un,a7 as mn,B as pn,D as cn,H as gn,$ as fn,P as vn,f as hn,r as bn,i as yn,ad as wn,X as _n,W as kn,Q as Sn,a as Tn,a8 as In,a9 as Dn,ab as Cn,am as xn,g as Vn,N as c,O as $n}from"./element-plus-core-DtFjj_wP.js";import{w as Pn,ab as Te,ad as P,g as N,aF as Ie,a5 as Un,a9 as m,l as g,s as o,aH as d,i as s,F as x,af as R,j as G,r as S,k as V,am as k,Z as Lt,aK as fe,aJ as Nn,aI as An,Y as Gt}from"./vue-chunks-DUFRzBE-.js";import{b as Rn}from"./index-BuwyIpEC.js";import{X as O,ak as Fn,v as En,a2 as jn,a as zn}from"./index-B0wXDdYD.js";import{j as Bn}from"./index-oC8Eh4vr.js";import"./utility-vendor-DnDVyXfL.js";import"./element-plus-icons-Dw4cNhHN.js";import"./iconify-vendor-DPs8vxWM.js";import"./tauri-vendor-BBucQyPs.js";const Mn=()=>{var p;const b=Number((p=Fn().getUserInfo)==null?void 0:p.id);return Number.isFinite(b)&&b>0?b:null},oe=b=>{const p=Mn();if(!p)throw new Error("current user is not logged in");return j(U({},b),{userId:p})},Ht=b=>I(null,null,function*(){const p=yield O.post({url:"/proof-documents",data:oe(b)});return(p==null?void 0:p.data)||p}),Ot=(b,p)=>I(null,null,function*(){const T=yield O.put({url:`/proof-documents/${b}`,data:oe(p)});return(T==null?void 0:T.data)||T}),Ln=b=>I(null,null,function*(){const p=yield O.post({url:`/proof-documents/${b}/issue`,data:oe({id:b})});return(p==null?void 0:p.data)||p}),Gn=(b,p)=>I(null,null,function*(){const T=yield O.post({url:`/proof-documents/${b}/void`,data:oe({id:b,reason:p})});return(T==null?void 0:T.data)||T}),Hn=b=>I(null,null,function*(){const p=yield O.get({url:"/proof-documents",params:b});return(p==null?void 0:p.data)||p}),On=b=>I(null,null,function*(){const p=yield O.post({url:`/proof-documents/${b}/export`,data:oe({id:b})});return(p==null?void 0:p.data)||p}),Yn=b=>I(null,null,function*(){const p=yield O.post({url:`/proof-documents/${b}/print`,data:oe({id:b})});return(p==null?void 0:p.data)||p}),Wn=b=>I(null,null,function*(){const p=yield O.get({url:"/proof-templates",params:b});return(p==null?void 0:p.data)||p||[]}),qn=b=>I(null,null,function*(){const p=yield O.post({url:"/proof-templates",data:oe(b)});return(p==null?void 0:p.data)||p}),Jn=(b,p)=>I(null,null,function*(){const T=yield O.put({url:`/proof-templates/${b}`,data:oe(j(U({},p),{id:b}))});return(T==null?void 0:T.data)||T}),Kn=b=>I(null,null,function*(){yield O.delete({url:`/proof-templates/${b}`})}),Yt=b=>I(null,null,function*(){const p=yield O.post({url:"/proof-templates/render",data:b});return(p==null?void 0:p.data)||p}),Xn="/lihaidd-VillageSystemDemo/assets/party-organization-stamp-Bx7lYYS-.png",Zn="/lihaidd-VillageSystemDemo/assets/village-committee-stamp-BrU6EkO9.png",Qn={class:"utility-tools-page"},el={key:0,class:"editor-layout"},tl={class:"editor-panel"},al={class:"template-row"},nl={class:"toolbar-actions"},ll={class:"grid-2"},ol={class:"usage-unit-panel"},sl={class:"usage-unit-toolbar"},il={class:"usage-unit-list"},rl={key:0,class:"usage-unit-empty"},dl={class:"usage-unit-meta"},ul={class:"usage-unit-bind"},ml={class:"stamp-enable-row"},pl={class:"stamp-config-panel"},cl={class:"stamp-config-card"},gl={class:"stamp-config-name"},fl={class:"stamp-config-card"},vl={class:"stamp-config-name"},hl={class:"grid-2"},bl={class:"preview-panel print-area"},yl={class:"preview-toolbar no-print"},wl={class:"preview-title"},_l={class:"preview-toolbar-actions"},kl={class:"notice-title"},Sl={class:"notice-body"},Tl={class:"salutation"},Il={class:"notice-intro"},Dl={key:0,class:"item"},Cl={key:1,class:"item"},xl={class:"contact"},Vl={class:"signature"},$l={class:"signature-slot signature-slot-left"},Pl={key:0,class:"signature-block signature-block-left"},Ul={class:"signature-name"},Nl=["src","alt"],Al={class:"signature-slot signature-slot-right"},Rl={key:0,class:"signature-block signature-block-right"},Fl={class:"signature-name"},El=["src","alt"],jl={class:"signature-row signature-date-row"},zl={class:"signature-slot signature-slot-right"},Bl={class:"signature-block signature-block-right signature-date"},Ml={key:0,class:"attachments"},Ll={key:1,class:"editor-layout"},Gl={class:"editor-panel"},Hl={class:"proof-subtabs"},Ol={class:"template-row"},Yl={class:"toolbar-actions"},Wl={class:"grid-2"},ql={class:"proof-subject-list"},Jl={class:"proof-subject-header"},Kl={class:"grid-2"},Xl={class:"grid-2"},Zl={class:"proof-field-insert-panel"},Ql={key:0,class:"proof-field-insert-empty"},eo={class:"proof-content-actions"},to={class:"grid-2"},ao={class:"toolbar-actions"},no={key:0,class:"proof-current-meta"},lo={key:0},oo={key:1},so={key:2},io={class:"proof-ledger-filter"},ro={class:"preview-panel print-area"},uo={class:"notice-title"},mo={class:"notice-body proof-body"},po={class:"notice-intro"},co={key:0,class:"proof-id-card-field"},go={class:"signature proof-signature"},fo={class:"signature-row"},vo={class:"signature-slot signature-slot-right"},ho={class:"signature-block signature-block-right"},bo={class:"signature-name"},yo=["src","alt"],wo={class:"signature-row signature-date-row"},_o={class:"signature-slot signature-slot-right"},ko={class:"signature-block signature-block-right signature-date"},So={key:0,class:"proof-document-no"},To={key:2,class:"editor-layout"},Io={class:"editor-panel"},Do={class:"image-editor-list"},Co={class:"image-editor-header"},xo={class:"image-editor-title"},Vo={class:"image-upload-box"},$o=["onChange"],Po=["src","alt"],Uo={key:1,class:"image-upload-empty"},No={class:"preview-panel print-area"},Ao={class:"preview-toolbar no-print"},Ro={class:"preview-title"},Fo={class:"preview-toolbar-actions"},Eo={class:"image-paper-frame"},jo=["src","alt"],zo={key:0,class:"image-paper-caption"},Bo={key:0,class:"image-paper-empty"},Mo=Pn({__name:"index",setup(b){const p={templates:"utilityTools.noticeTemplates.v2",proofTemplates:"utilityTools.proofTemplates.v1",stampAssets:"utilityTools.noticeStampAssets.v1"},T=["村委会","社区服务中心","卫生院","派出所","民政办公室"],De=["一","二","三","四","五","六","七","八","九","十"],Ce=t=>{const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${n}`},Be=t=>`${t.getFullYear()}年${t.getMonth()+1}月${t.getDate()}日`,se=()=>{const t=new Date,e=new Date(t);return e.setDate(e.getDate()+1),{notificationDate:Be(t),meetingDate:Ce(e)}},de=()=>({meetingTitle:"关于召开党员大会的通知",salutation:"各位党员同志：",intro:"为深入学习贯彻上级党组织有关要求，研究近期支部重点工作，经党支部委员会研究，决定召开党员大会，现将有关事项通知如下：",meetingDate:se().meetingDate,meetingStartTime:"09:00",meetingPlace:"村委会二楼党员活动室",participants:`党支部全体党员。
入党积极分子、发展对象可列席会议。`,agenda:`学习上级党组织有关文件精神。
听取党支部近期工作报告。
研究党员发展和组织生活有关事项。
部署下一阶段党建重点工作。`,notes:`无特殊情况不得缺席，确需请假的须提前向党支部书记履行请假手续。
请全体参会人员提前10分钟到场签到，并佩戴党员徽章。
请自带学习记录本和相关会议资料。`,contact:"联系人：组织委员，电话：77446064",notificationDate:se().notificationDate,attachments:"附件：党员大会会议议程",enableStamp:!1}),H=()=>`proof-subject-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,ie=()=>({localId:H(),residentId:null,name:"",gender:"",idCard:"",phone:"",address:"",villageGroup:"",politicalStatus:"",ethnicity:"",birthDate:"",householdHeadName:"",relationship:"",residentFields:{}}),xe=()=>({proofType:"证 明",subjectResidentId:null,subjectName:"",subjectIdCard:"",subjectPhone:"",subjectAddress:"",subjectItems:[ie()],content:`兹证明：
张三，性别：男，身份证号：110011198810121237，家庭住址：朝阳区幸福街道88号。
张小三，性别：男，身份证号：110011201512301115，家庭住址：朝阳区幸福街道88号。
二人为父子关系。特此证明，情况属实。`,issuingUnit:"朝阳区幸福居委会",plannedIssuedAt:new Date().toISOString().slice(0,10),stampType:"villageResident",stampEnabled:!0}),Me=[{id:"builtin-notice-party-meeting",name:"会议通知",updatedAt:"内置模板",builtin:!0,form:de(),selectedUsageUnits:["中共朝阳区幸福居委会支部委员会","朝阳区幸福居委会"]}],Le=[{id:"builtin-proof-document",name:"常用证明模板（内置）",updatedAt:"内置模板",builtin:!0,form:xe()}],f=Te(de()),Y=P("meetingNotice"),ae=P(""),Q=P(""),z=P([]),B=P(""),W=P(""),M=P([]),ee=P([]),Ge=P(!1),He=P(),Oe=P(),Ye=P(),Ve=P([]),q=P(["村委会"]),$e=P(""),ue=P(!1),$=Te({party:{url:"",fileName:"",source:"builtin"},villageResident:{url:"",fileName:"",source:"builtin"}}),J=Te([{id:"meeting-image-1",fileName:"",url:"",caption:""},{id:"meeting-image-2",fileName:"",url:"",caption:""}]),me=P("create"),i=Te(xe()),w=P(null),pe=P(!1),K=P(!1),We=P(!1),it=P([]),Pe=P(0),rt=P(),ce=P(null),ne=Te({page:1,pageSize:20,status:"",keyword:""}),qe=t=>String(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),ve=t=>{const e=String(t||"").trim();return e?e.replace(/\s/g,"")==="证明"?"证 明":e:"证 明"},Wt=t=>String(t!=null?t:""),he=t=>{const e=Wt(t);return e?e.startsWith("db-")?{source:"db",id:e.slice(3)}:e.startsWith("local-")?{source:"local",id:e.slice(6)}:{source:"local",id:e}:{source:"",id:""}},qt=()=>{try{const t=window.localStorage.getItem(p.templates),e=t?JSON.parse(t):[],a=new Map;Me.forEach(n=>{a.set(n.id,j(U({},n),{form:U({},n.form),selectedUsageUnits:[...n.selectedUsageUnits]}))}),(Array.isArray(e)?e:[]).forEach(n=>{n!=null&&n.id&&(Me.some(r=>r.id===n.id)||a.set(String(n.id),j(U({},n),{builtin:!1})))}),z.value=Array.from(a.values())}catch(t){z.value=Me.map(e=>j(U({},e),{form:U({},e.form),selectedUsageUnits:[...e.selectedUsageUnits]}))}},ge=t=>j(U({},t),{proofType:ve(t.proofType),subjectItems:(Array.isArray(t.subjectItems)?t.subjectItems:[]).map(e=>j(U(U({},ie()),e),{localId:H(),villageGroup:String(e.villageGroup||"")}))}),Jt=()=>{try{const t=window.localStorage.getItem(p.proofTemplates),e=t?JSON.parse(t):[],a=new Map;Le.forEach(n=>{a.set(n.id,j(U({},n),{form:ge(n.form)}))}),(Array.isArray(e)?e:[]).forEach(n=>{!(n!=null&&n.id)||!(n!=null&&n.name)||!(n!=null&&n.form)||Le.some(r=>r.id===n.id)||a.set(n.id,j(U({},n),{form:ge(n.form)}))}),M.value=Array.from(a.values())}catch(t){console.error("读取证明模板失败:",t),M.value=Le.map(e=>j(U({},e),{form:ge(e.form)}))}},Ue=()=>I(null,null,function*(){Ge.value=!0;try{const t=yield Wn();ee.value=t||[]}catch(t){console.error("加载数据库证明模板失败:",t),ee.value=[]}finally{Ge.value=!1}}),Kt=t=>I(null,null,function*(){const e=ee.value.find(a=>String(a.id)===t);if(!e)return!1;try{const a=++Pe.value,n=yield Yt({templateId:e.id,subjectItems:i.subjectItems.map(nt),family:Nt(),customFields:{issuingUnit:i.issuingUnit||"",proofType:i.proofType||""}});return a!==Pe.value||(i.content=n.fullContent,K.value=!1,i.issuingUnit=e.issuingUnit||"村委会",i.stampEnabled=e.stampEnabled,i.stampType=e.stampType||"villageResident",B.value=e.name),!0}catch(a){return console.error("渲染模板失败:",a),c.error("模板渲染失败"),!1}}),Xt=()=>{var t,e,a,n,r,u;try{const _=window.localStorage.getItem(p.stampAssets),v=_?JSON.parse(_):{};$.party.url=String(((t=v==null?void 0:v.party)==null?void 0:t.url)||""),$.party.fileName=String(((e=v==null?void 0:v.party)==null?void 0:e.fileName)||""),$.party.source=((a=v==null?void 0:v.party)==null?void 0:a.source)==="custom"?"custom":"builtin",$.villageResident.url=String(((n=v==null?void 0:v.villageResident)==null?void 0:n.url)||""),$.villageResident.fileName=String(((r=v==null?void 0:v.villageResident)==null?void 0:r.fileName)||""),$.villageResident.source=((u=v==null?void 0:v.villageResident)==null?void 0:u.source)==="custom"?"custom":"builtin"}catch(_){$.party.url="",$.party.fileName="",$.party.source="builtin",$.villageResident.url="",$.villageResident.fileName="",$.villageResident.source="builtin"}},Je=()=>{const t=z.value.filter(e=>!e.builtin);window.localStorage.setItem(p.templates,JSON.stringify(t))},Ke=()=>{const t=M.value.filter(e=>!e.builtin);window.localStorage.setItem(p.proofTemplates,JSON.stringify(t))},dt=()=>{window.localStorage.setItem(p.stampAssets,JSON.stringify({party:U({},$.party),villageResident:U({},$.villageResident)}))},ut=t=>new Promise((e,a)=>{const n=new Image;n.onerror=()=>a(new Error("印章图片解析失败")),n.onload=()=>{const r=document.createElement("canvas"),u=1063;r.width=u,r.height=u;const _=r.getContext("2d",{willReadFrequently:!0});if(!_){a(new Error("浏览器不支持印章处理"));return}const v=Math.min(u/n.width,u/n.height),h=n.width*v,F=n.height*v,L=(u-h)/2,le=(u-F)/2;_.clearRect(0,0,u,u),_.drawImage(n,L,le,h,F);const te=_.getImageData(0,0,u,u),X=te.data;for(let Z=0;Z<X.length;Z+=4){const ke=X[Z],je=X[Z+1],E=X[Z+2],ze=X[Z+3];if(ze){if(ke>=242&&je>=242&&E>=242){X[Z+3]=0;continue}ke>=220&&je>=220&&E>=220&&(X[Z+3]=Math.round(ze*.28))}}_.putImageData(te,0,0),e(r.toDataURL("image/png"))},n.src=t}),mt=(t,e,a)=>I(null,null,function*(){if(!$[t].url)try{$[t].url=yield ut(e),$[t].fileName=a,$[t].source="builtin"}catch(n){console.error("加载内置印章失败:",n)}}),Zt=()=>I(null,null,function*(){yield mt("party",Xn,"党组织印章.png"),yield mt("villageResident",Zn,"村委章.png"),dt()}),Qt=t=>{const e=String(t||"").trim().match(/^(\d{4})年(\d{1,2})月(\d{1,2})日$/);if(!e)return"";const[,a,n,r]=e,u=new Date(Number(a),Number(n)-1,Number(r));if(Number.isNaN(u.getTime()))return"";u.setDate(u.getDate()+1);const _=u.getFullYear(),v=String(u.getMonth()+1).padStart(2,"0"),h=String(u.getDate()).padStart(2,"0");return`${_}-${v}-${h}`},pt=()=>`notice-template-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,ea=t=>U(U({},t),se()),ct=t=>{Object.assign(f,t)},gt=t=>t.replace(/^（[一二三四五六七八九十]+）\s*/,"").trim(),Ne=t=>t<De.length?`（${De[t]}）`:`（${t+1}）`,Xe=t=>String(t||"").split(/\r?\n/).map(e=>gt(e)).filter(Boolean).map((e,a)=>`<p class="item">${Ne(a)}${qe(e)}</p>`).join(""),Ze=t=>String(t||"").split(/\r?\n/).map(e=>gt(e)).filter(Boolean);N(()=>String(f.intro||"").split(/\r?\n/).map(t=>`<p>${qe(t)||"&nbsp;"}</p>`).join(""));const ta=N(()=>String(f.intro||"").split(/\r?\n/).map(t=>t||"")),Ae=t=>{if(!t)return"";const[e,a,n]=t.split("-").map(Number);return!e||!a||!n?"":`${e}年${a}月${n}日`},aa=t=>{if(!t)return"";const e=new Date(`${t}T00:00:00`);return Number.isNaN(e.getTime())?"":["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][e.getDay()]},na=t=>{if(!t)return"";const e=Number(t.split(":")[0]);return e<12?"上午":e<18?"下午":"晚上"},Qe=N(()=>{const t=Ae(f.meetingDate),e=aa(f.meetingDate),a=na(f.meetingStartTime),n=f.meetingStartTime?`${a}${f.meetingStartTime}`:"";return`${t}${e?`（${e}）`:""}${n}`.trim()}),ft=N(()=>Y.value==="meetingNotice"?"会议通知":Y.value==="proofDocument"?"证明材料":Y.value==="meetingImage"?"会议图片":"实用工具"),vt=N(()=>J.filter(t=>t.url)),la=t=>{const e=String(t||"").replace(/\r/g,""),a=e.split(`
`).filter(v=>v.trim());if(a.length>1)return a;const n=a[0]||e;if(!n.trim())return["会议通知"];if(n.length<=16)return[n];const r=(v,h)=>{const F=["，","、","暨","和","关于","通知"];let L=h;return F.forEach(le=>{const te=v.indexOf(le,Math.max(0,h-4));te>0&&Math.abs(te+1-h)<Math.abs(L-h)&&(L=le.length>1?te+le.length:te+1)}),Math.min(Math.max(L,6),v.length-6)};if(n.length<=28){const v=r(n,Math.round(n.length/2));return[n.slice(0,v),n.slice(v)]}const u=r(n,Math.round(n.length/3)),_=r(n,Math.round(n.length*2/3));return[n.slice(0,u),n.slice(u,_),n.slice(_)].filter(Boolean)},oa=N(()=>la(f.meetingTitle)),sa=N(()=>f.meetingTitle.replace(/\s/g,"")==="证明"),A=N(()=>{var t,e;return((t=w.value)==null?void 0:t.status)==="issued"||((e=w.value)==null?void 0:e.status)==="voided"});N(()=>{let t=String(i.content||"").replace(/身份证号\s*[:：]?\s*(\d{17}[\dXx]|\d{15})/g,"__ID_START__身份证号：$1__ID_END__");return t=qe(t).replace(/__ID_START__/g,'<span class="proof-id-card-field">').replace(/__ID_END__/g,"</span>"),t.split(/\r?\n/).map(e=>`<p>${e||"&nbsp;"}</p>`).join("")});const ia=N(()=>String(i.content||"").split(/\r?\n/).map(e=>{if(!e)return[{text:" ",highlight:!1}];const a=e.match(/(\d{17}[\dXx]|\d{15})/);if(!a||a.index===void 0)return[{text:e,highlight:!1}];const n=a.index,r=n+a[0].length;return[{text:e.slice(0,n),highlight:!1},{text:a[0],highlight:!0},{text:e.slice(r),highlight:!1}].filter(u=>u.text)})),ra=N(()=>ve(i.proofType)),da=N(()=>{var a;const e=(((a=w.value)==null?void 0:a.issuedAt)||"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(e)?Ae(e):/^\d{4}-\d{2}-\d{2}$/.test(i.plannedIssuedAt)?Ae(i.plannedIssuedAt):Ae(new Date().toISOString().slice(0,10))}),ht=N(()=>i.stampEnabled?i.stampType==="party"?$.party.url:i.stampType==="villageResident"?$.villageResident.url:"":"");N(()=>Xe(f.participants)),N(()=>Xe(f.agenda)),N(()=>Xe(f.notes));const bt=N(()=>Ze(f.participants)),yt=N(()=>Ze(f.agenda)),wt=N(()=>Ze(f.notes)),ua=N(()=>!!(Qe.value||f.meetingPlace.trim())),ma=N(()=>bt.value.length>0),pa=N(()=>yt.value.length>0),ca=N(()=>wt.value.length>0),ga=t=>String(t||"").replace(/\s/g,"").replace(/[（）()【】\[\]《》<>“”"']/g,"").trim(),_t=t=>{const e=ga(t);return e?/支委会|支部委员会|党委会|党委|党支部|总支委员会|总支部委员会/.test(e)?"party":/居委|村委|居民委员会|村民委员会|社区居民委员会|社区委员会|社区/.test(e)?"villageResident":"none":"none"},fa=t=>{const e=_t(t);return e==="party"?"自动绑定：党组织印章":e==="villageResident"?"自动绑定：村/居委会印章":"未识别印章类型：请在单位名称中包含党支部、党委、村委、居委或社区"},kt=t=>$[t].fileName||(t==="party"?"党组织印章":"村/居委会印章"),Re=t=>{const e=_t(t);return{name:t,stampUrl:f.enableStamp?e==="party"?$.party.url:e==="villageResident"?$.villageResident.url:"":""}},va=N(()=>{const t=q.value.filter(Boolean);if(t.length<=1)return[{left:null,right:t[0]?Re(t[0]):null}];const e=[];for(let a=0;a<t.length;a+=2){const n=t[a]||"",r=t[a+1]||"";r?e.push({left:Re(n),right:Re(r)}):e.push({left:null,right:Re(n)})}return e}),St=t=>{const e=new Map;return(Array.isArray(t)?t:[]).forEach(a=>{const n=String((a==null?void 0:a.value)||(a==null?void 0:a.label)||"").trim();!n||e.has(n)||e.set(n,{label:n,value:n})}),Array.from(e.values())},ha=()=>I(null,null,function*(){try{const t=yield En("使用单位");let e=St((t==null?void 0:t.data)||[]);if(!e.length){const a=yield Rn({category:"使用单位",include_all:1});e=St((a==null?void 0:a.data)||[])}Ve.value=e.length?e:T.map(a=>({label:a,value:a}))}catch(t){console.error("加载使用单位字典失败:",t),Ve.value=T.map(e=>({label:e,value:e}))}}),ba=()=>{const t=$e.value.trim();if(!t){c.warning("请先选择一个使用单位");return}if(q.value.includes(t)){c.warning("该使用单位已添加");return}q.value.push(t),$e.value=""},ya=t=>{q.value=q.value.filter(e=>e!==t)},wa=t=>new Promise((e,a)=>{const n=new FileReader;n.onerror=()=>a(new Error("印章文件读取失败")),n.onload=()=>{ut(String(n.result||"")).then(e).catch(a)},n.readAsDataURL(t)}),Tt=(t,e)=>I(null,null,function*(){var r;const a=t.target,n=(r=a.files)==null?void 0:r[0];if(n){try{const u=yield wa(n);$[e].url=u,$[e].fileName=n.name.replace(/\.[^.]+$/,"")+".png",$[e].source="custom",dt(),c.success(e==="party"?"党组织印章已更新":"村/居委会印章已更新"),a.value=""}catch(u){console.error("印章处理失败:",u),c.error("印章处理失败，请重新上传清晰图片")}a.value=""}}),It=(t,e)=>{if(!t.type.startsWith("image/")){c.warning("仅支持上传图片文件");return}const a=new FileReader;a.onload=()=>{J[e].url=String(a.result||""),J[e].fileName=t.name},a.readAsDataURL(t)},_a=(t,e)=>{var r;const a=t.target,n=(r=a.files)==null?void 0:r[0];n&&(It(n,e),a.value="")},Dt=t=>{J[t].url="",J[t].fileName="",J[t].caption=""},ka=()=>{J.forEach((t,e)=>Dt(e))},Ct=t=>t==="draft"?"草稿":t==="issued"?"已出具":t==="voided"?"已作废":t||"-",Sa=t=>t==="issued"?"success":t==="voided"?"danger":"info",be=t=>j(U({},t),{name:String(t.name||"").trim(),gender:String(t.gender||"").trim(),idCard:String(t.idCard||"").trim(),phone:String(t.phone||"").trim(),address:String(t.address||"").trim(),villageGroup:String(t.villageGroup||"").trim(),politicalStatus:String(t.politicalStatus||"").trim(),ethnicity:String(t.ethnicity||"").trim(),birthDate:String(t.birthDate||"").trim(),householdHeadName:String(t.householdHeadName||"").trim(),relationship:String(t.relationship||"").trim()}),et=[{key:"name",label:"姓名",aliases:["name"]},{key:"gender",label:"性别",aliases:["gender"]},{key:"idCard",label:"身份证号",aliases:["idCard","id_card"]},{key:"phone",label:"联系电话",aliases:["phone","phoneNumber","phone_number"]},{key:"ethnicity",label:"民族",aliases:["ethnicity","nation"]},{key:"birthDate",label:"出生日期",aliases:["birthDate","dateOfBirth","date_of_birth"]},{key:"age",label:"年龄",aliases:["age"]},{key:"villageGroup",label:"村组",aliases:["villageGroup","village_group"]},{key:"address",label:"住址",aliases:["address","homeAddress","home_address","Home_address"]},{key:"registeredAddress",label:"户籍地址",aliases:["registeredAddress","registered_address"]},{key:"residentType",label:"居民类型",aliases:["residentType","resident_type"]},{key:"householdId",label:"家庭ID",aliases:["householdId","household_id"]},{key:"householdHeadId",label:"户主ID",aliases:["householdHeadId","household_head_id"]},{key:"householdHeadName",label:"户主姓名",aliases:["householdHeadName","household_head_name","householderName"]},{key:"householdNumber",label:"户号",aliases:["householdNumber","household_number"]},{key:"householdAttribute",label:"户属性",aliases:["householdAttribute","household_attribute"]},{key:"gridName",label:"网格",aliases:["gridName","grid_name"]},{key:"relationship",label:"与户主关系",aliases:["relationship","relationshipToHead","relationship_to_head","relation"]},{key:"status",label:"状态",aliases:["status"]},{key:"equityShares",label:"股权份额",aliases:["equityShares","equity_shares"]},{key:"bankCard",label:"银行卡号",aliases:["bankCard","bank_card"]},{key:"bankName",label:"开户银行",aliases:["bankName","bank_name"]},{key:"occupation",label:"职业",aliases:["occupation"]},{key:"maritalStatus",label:"婚姻状况",aliases:["maritalStatus","marital_status"]},{key:"politicalStatus",label:"政治面貌",aliases:["politicalStatus","political_status"]},{key:"militaryService",label:"兵役状况",aliases:["militaryService","military_service"]},{key:"educationLevel",label:"文化程度",aliases:["educationLevel","education_level"]},{key:"healthStatus",label:"健康状态",aliases:["healthStatus","health_status"]},{key:"residenceStatus",label:"居住状态",aliases:["residenceStatus","residence_status"]},{key:"createTime",label:"创建时间",aliases:["createTime","created_at"]}],tt=(t,e)=>{for(const a of e){const n=t==null?void 0:t[a];if(n!=null&&String(n).trim())return String(n).trim()}return""},xt=t=>et.reduce((e,a)=>(e[a.key]=tt(t,a.aliases),e),{}),Vt=(t,e)=>{const a=[e.key,...e.aliases];return tt(t,a)||tt(t.residentFields||{},a)},$t=t=>{const e=be(t);return et.map(a=>j(U({},a),{value:Vt(e,a)})).filter(a=>a.value)},Pt=t=>{const e=be(t);return et.map(a=>j(U({},a),{value:Vt(e,a)}))},Ta=t=>{const e=["name","gender","idCard","address"];return Pt(t).filter(a=>e.includes(a.key))},at=()=>i.subjectItems.map(be).filter(t=>t.name),Ut=(t,e)=>{if(!t)return;const a=be(t);if(!(!a.name&&!a.idCard&&!a.phone&&!a.address))return{name:a.name||void 0,idCard:a.idCard||void 0,phone:a.phone||void 0,address:a.address||void 0,relation:e}},Nt=()=>{const t=i.subjectItems.map(be);return{father:Ut(t[1],"父亲"),mother:Ut(t[2],"母亲")}},Ia=()=>{const t=he(W.value);if(t.source!=="db"||!t.id)return null;const e=parseInt(t.id,10);return Number.isFinite(e)&&ee.value.find(a=>a.id===e)||null},ye=()=>{var e;const t=at()[0];i.subjectResidentId=(e=t==null?void 0:t.residentId)!=null?e:null,i.subjectName=(t==null?void 0:t.name)||"",i.subjectIdCard=(t==null?void 0:t.idCard)||"",i.subjectPhone=(t==null?void 0:t.phone)||"",i.subjectAddress=(t==null?void 0:t.address)||""},Da=t=>{const e=[t.name];return t.gender&&e.push(`性别：${t.gender}`),t.idCard&&e.push(`身份证号：${t.idCard}`),t.address&&e.push(`家庭住址：${t.address}`),`${e.join("，")}。`},Ca=()=>{const t=at(),e=t.map(Da),a=t.length>1?"上述人员关系情况属实。":"该居民情况属实。";return["兹证明：",...e,`${a}特此证明。`].filter(n=>n.trim()).join(`
`)},xa=(t=!1)=>I(null,null,function*(){ye();const e=Ia();if(!e)return!1;if(A.value||!t&&K.value)return!0;const a=++Pe.value;try{const n=yield Yt({templateId:e.id,subjectItems:i.subjectItems.map(nt),family:Nt(),customFields:{issuingUnit:i.issuingUnit||"",proofType:i.proofType||""}});return a!==Pe.value||(i.content=n.fullContent,K.value=!1),!0}catch(n){return console.error("重新渲染证明模板失败:",n),c.error("模板渲染失败"),!0}}),we=(t=!1)=>I(null,null,function*(){(yield xa(t))||(ye(),!A.value&&(!t&&K.value||(i.content=Ca(),K.value=!1)))}),Va=()=>{we(!0)},At=()=>{var e;const t=(e=rt.value)==null?void 0:e.$el;return(t==null?void 0:t.querySelector("textarea"))||null},Fe=()=>{var e;const t=At();t&&(ce.value=(e=t.selectionStart)!=null?e:i.content.length)},$a=()=>{K.value=!0,Gt(Fe)},Rt=(t,e)=>I(null,null,function*(){if(!e||A.value)return;const a=$t(t).find(v=>v.key===e);if(!(a!=null&&a.value))return;const n=`；${a.label}：${a.value}`,r=String(i.content||""),u=ce.value===null?r.length:Math.max(0,Math.min(ce.value,r.length));i.content=`${r.slice(0,u)}${n}${r.slice(u)}`,ce.value=u+n.length,K.value=!0,yield Gt();const _=At();_&&(_.focus(),_.setSelectionRange(ce.value,ce.value))}),_e=()=>{we(!0)},nt=t=>({residentId:t.residentId,name:String(t.name||"").trim(),gender:String(t.gender||"").trim(),idCard:String(t.idCard||"").trim(),phone:String(t.phone||"").trim(),address:String(t.address||"").trim(),villageGroup:String(t.villageGroup||"").trim()}),Pa=t=>{var e;return{localId:H(),residentId:(e=t.residentId)!=null?e:null,name:t.name||"",gender:t.gender||"",idCard:t.idCard||"",phone:t.phone||"",address:t.address||"",villageGroup:t.villageGroup||"",politicalStatus:"",ethnicity:"",birthDate:"",householdHeadName:"",relationship:"",residentFields:{}}},Ua=t=>{var e;return Array.isArray(t.subjectItems)&&t.subjectItems.length?t.subjectItems.map(Pa):[{localId:H(),residentId:(e=t.subjectResidentId)!=null?e:null,name:t.subjectName||"",gender:"",idCard:t.subjectIdCard||"",phone:t.subjectPhone||"",address:t.subjectAddress||"",villageGroup:"",politicalStatus:"",ethnicity:"",birthDate:"",householdHeadName:"",relationship:"",residentFields:{}}]},Na=()=>{i.subjectItems.push(ie()),we(!0)},Aa=t=>{i.subjectItems.length<=1||(i.subjectItems.splice(t,1),we(!0))},Ra=t=>j(U({},t),{value:`${t.name||""}${t.idCard||t.id_card?`（${t.idCard||t.id_card}）`:""}`,name:t.name||"",gender:t.gender||"",idCard:t.idCard||t.id_card||"",phone:t.phoneNumber||t.phone_number||t.phone||"",address:t.address||t.Home_address||t.homeAddress||"",villageGroup:t.villageGroup||t.village_group||"",politicalStatus:t.politicalStatus||t.political_status||"",ethnicity:t.ethnicity||t.nation||"",birthDate:t.birthDate||t.dateOfBirth||t.date_of_birth||"",householdHeadName:t.householdHeadName||t.household_head_name||"",relationship:t.relationship||t.relationshipToHead||t.relationship_to_head||t.householdRelationship||t.household_relationship||"",residentFields:xt(t)}),Fa=(t,e)=>{const a=t.trim();if(!a){e([]);return}Bn({pageNum:1,pageSize:10,name:a}).then(n=>{const r=Array.isArray(n==null?void 0:n.data)?n.data:[];e(r.map(Ra))}).catch(()=>e([]))},Ea=(t,e)=>{const a=i.subjectItems[t];a&&(a.residentId=Number(e.id)||null,a.name=e.name||"",a.gender=e.gender||"",a.idCard=e.idCard||"",a.phone=e.phone||"",a.address=e.address||"",a.villageGroup=e.villageGroup||"",a.politicalStatus=e.politicalStatus||"",a.ethnicity=e.ethnicity||"",a.birthDate=e.birthDate||"",a.householdHeadName=e.householdHeadName||"",a.relationship=e.relationship||"",a.residentFields=e.residentFields||xt(e),we(!0))},ja=()=>{Object.assign(i,xe()),w.value=null,me.value="create",K.value=!1},Ft=t=>{Object.assign(i,ge(t)),i.proofType=ve(i.proofType),ye(),K.value=!0},Ee=t=>{var e,a;i.proofType=ve(t.proofType),i.subjectResidentId=(e=t.subjectResidentId)!=null?e:null,i.subjectName=t.subjectName,i.subjectIdCard=t.subjectIdCard,i.subjectPhone=t.subjectPhone,i.subjectAddress=t.subjectAddress,i.subjectItems=Ua(t),i.content=t.content,i.issuingUnit=t.issuingUnit,i.plannedIssuedAt=t.plannedIssuedAt||((a=t.issuedAt)==null?void 0:a.slice(0,10))||"",i.stampType=t.stampType||"villageResident",i.stampEnabled=!!t.stampEnabled,K.value=!0},lt=()=>(ye(),i.proofType=ve(i.proofType),{proofType:i.proofType,subjectResidentId:i.subjectResidentId,subjectName:i.subjectName,subjectIdCard:i.subjectIdCard,subjectPhone:i.subjectPhone,subjectAddress:i.subjectAddress,subjectItems:at().map(nt),content:i.content,issuingUnit:i.issuingUnit,plannedIssuedAt:i.plannedIssuedAt,stampType:i.stampType,stampEnabled:i.stampEnabled}),Et=()=>(ye(),i.subjectName.trim()?i.content.trim()?i.proofType.trim()?i.issuingUnit.trim()?!0:(c.warning("请填写出具单位"),!1):(c.warning("请填写材料标题"),!1):(c.warning("请填写证明正文"),!1):(c.warning("请填写被证明人"),!1)),za=()=>I(null,null,function*(){var t;if(Et()){if(A.value){c.warning("已出具或已作废证明不能修改");return}pe.value=!0;try{const e=lt(),a=((t=w.value)==null?void 0:t.status)==="draft"?yield Ot(w.value.id,e):yield Ht(e);w.value=a,Ee(a),c.success("证明草稿已保存"),re()}catch(e){c.error((e==null?void 0:e.message)||"保存证明草稿失败")}finally{pe.value=!1}}}),Ba=()=>I(null,null,function*(){if(Et()){pe.value=!0;try{let t=w.value;!t||t.status!=="draft"?t=yield Ht(lt()):t=yield Ot(t.id,lt());const e=yield Ln(t.id);w.value=e,Ee(e),c.success(`证明已正式出具：${e.documentNo}`),re()}catch(t){c.error((t==null?void 0:t.message)||"正式出具证明失败")}finally{pe.value=!1}}}),Ma=()=>I(null,null,function*(){if(!(!w.value||w.value.status!=="issued"))try{const t=yield $n.prompt("请输入作废原因","作废证明",{confirmButtonText:"确认作废",cancelButtonText:"取消",inputType:"textarea",inputValidator:n=>!!String(n||"").trim()||"作废原因不能为空"}),e=String(t.value||"").trim(),a=yield Gn(w.value.id,e);w.value=a,Ee(a),c.success("证明已作废"),re()}catch(t){if(t==="cancel")return;c.error((t==null?void 0:t.message)||"作废证明失败")}}),re=()=>I(null,null,function*(){We.value=!0;try{const t=yield Hn({page:ne.page,pageSize:ne.pageSize,status:ne.status||void 0,keyword:ne.keyword||void 0});it.value=t.data||[]}catch(t){c.error((t==null?void 0:t.message)||"读取证明台账失败")}finally{We.value=!1}}),jt=t=>{w.value=t,Ee(t),me.value="create"},La=()=>I(null,null,function*(){const t=B.value.trim();if(!t){c.warning("请先输入模板名称");return}try{const e=i.proofType.trim()||"证明",a={name:t,category:e,bodyTemplate:i.content,headContent:"",tailContent:"",fieldConfigJson:"{}",stampEnabled:i.stampEnabled,stampType:i.stampType,issuingUnit:i.issuingUnit};yield qn(a),c.success(`模板已保存到数据库：${t}`),Ue()}catch(e){console.warn("保存到数据库失败，降级到本地存储:",e);const a=M.value.find(r=>r.name===t),n={id:(a==null?void 0:a.id)||pt(),name:t,updatedAt:new Date().toLocaleString("zh-CN",{hour12:!1}),form:ge(i)};a?(M.value=M.value.map(r=>r.id===a.id?n:r),W.value="local-"+a.id,c.success(`已更新本地模板：${t}`)):(M.value.unshift(n),W.value="local-"+n.id,c.success(`模板已保存到本地：${t}`)),Ke()}}),Ga=()=>I(null,null,function*(){const t=he(W.value);if(!t.id){c.warning("请先选择模板");return}if(t.source==="db"){const e=parseInt(t.id,10),a=ee.value.find(r=>r.id===e);if(!a){c.warning("模板不存在");return}(yield Kt(String(e)))&&(B.value=a.name,w.value=null,c.success(`已应用模板：${a.name}`))}else if(t.source==="local"){const e=M.value.find(a=>a.id===t.id);if(!e){c.warning("模板不存在");return}B.value=e.name,Ft(e.form),w.value=null,c.success(`已应用本地模板：${e.name}`)}}),Ha=()=>I(null,null,function*(){const t=he(W.value);if(!t.id){c.warning("请先选择需要覆盖的模板");return}if(t.source==="db"){const n=parseInt(t.id,10),r=ee.value.find(u=>u.id===n);if(!r){c.warning("模板不存在");return}if(r!=null&&r.isDefault){c.warning("系统预设模板不支持修改");return}try{yield Jn(n,{id:n,name:B.value.trim()||r.name,category:r.category||i.proofType.trim()||"证明",headContent:r.headContent||"",bodyTemplate:i.content,tailContent:r.tailContent||"",fieldConfigJson:r.fieldConfigJson||"{}",stampEnabled:i.stampEnabled,stampType:i.stampType,issuingUnit:i.issuingUnit}),c.success("模板已更新"),Ue()}catch(u){c.error((u==null?void 0:u.message)||"更新模板失败")}return}const e=M.value.find(n=>n.id===t.id);if(!e){c.warning("模板不存在");return}if(e.builtin){c.warning("内置模板不支持直接覆盖，请另存为新模板");return}const a=B.value.trim()||e.name;e.name=a,e.updatedAt=new Date().toLocaleString("zh-CN",{hour12:!1}),e.form=ge(i),B.value=a,Ke(),c.success(`已覆盖本地模板：${a}`)}),Oa=()=>I(null,null,function*(){const t=he(W.value);if(!t.id){c.warning("请先选择要删除的模板");return}if(t.source==="db"){const a=parseInt(t.id,10),n=ee.value.find(r=>r.id===a);if(!n){c.warning("模板不存在");return}if(n!=null&&n.isDefault){c.warning("系统预设模板不支持删除");return}try{yield Kn(a),c.success("模板已删除"),W.value="",B.value="",Ue()}catch(r){c.error((r==null?void 0:r.message)||"删除模板失败")}return}const e=M.value.find(a=>a.id===t.id);if(!e){c.warning("模板不存在");return}if(e.builtin){c.warning("内置模板不支持删除");return}M.value=M.value.filter(a=>a.id!==t.id),Ke(),W.value="",B.value="",c.success(`已删除本地模板：${e.name}`)}),Ya=()=>{Ft(xe()),w.value=null,c.success("已恢复样例内容")},Wa=t=>{var a;ue.value=!1;const e=Array.from(((a=t.dataTransfer)==null?void 0:a.files)||[]).filter(n=>n.type.startsWith("image/"));if(!e.length){c.warning("请拖入图片文件");return}e.slice(0,2).forEach((n,r)=>{const u=J.findIndex(v=>!v.url),_=u>=0?u:r;_>=0&&_<J.length&&It(n,_)})},qa=()=>{const t=ae.value.trim();if(!t){c.warning("请先输入模板名称");return}const e=z.value.find(n=>n.name===t),a={id:(e==null?void 0:e.id)||pt(),name:t,updatedAt:new Date().toLocaleString("zh-CN",{hour12:!1}),form:U({},f),selectedUsageUnits:[...q.value]};e?(z.value=z.value.map(n=>n.id===e.id?a:n),Q.value=e.id,c.success(`已更新模板：${t}`)):(z.value.unshift(a),Q.value=a.id,c.success(`模板已保存：${t}`)),Je()},Ja=()=>{const t=z.value.find(e=>e.id===Q.value);if(!t){c.warning("请先选择模板");return}ae.value=t.name,ct(ea(t.form)),q.value=[...t.selectedUsageUnits||[]],c.success(`已应用模板：${t.name}`)},Ka=()=>{const t=z.value.find(a=>a.id===Q.value);if(!t){c.warning("请先选择需要覆盖的模板");return}if(t.builtin){c.warning("内置模板不支持直接覆盖，请另存为新模板");return}const e=ae.value.trim()||t.name;t.name=e,t.updatedAt=new Date().toLocaleString("zh-CN",{hour12:!1}),t.form=U({},f),t.selectedUsageUnits=[...q.value],ae.value=e,Je(),c.success(`已覆盖模板：${e}`)},Xa=()=>{const t=z.value.find(e=>e.id===Q.value);if(!t){c.warning("请先选择要删除的模板");return}if(t.builtin){c.warning("内置模板不支持删除");return}z.value=z.value.filter(e=>e.id!==t.id),Je(),Q.value="",ae.value="",c.success(`已删除模板：${t.name}`)},Za=()=>{ct({meetingTitle:"关于召开党员大会的通知",salutation:"各位党员同志：",intro:"为深入学习贯彻上级党组织有关要求，研究近期支部重点工作，经党支部委员会研究，决定召开党员大会，现将有关事项通知如下：",meetingDate:se().meetingDate,meetingStartTime:"09:00",meetingPlace:"村委会二楼党员活动室",participants:`党支部全体党员。
入党积极分子、发展对象可列席会议。`,agenda:`学习上级党组织有关文件精神。
听取党支部近期工作报告。
研究党员发展和组织生活有关事项。
部署下一阶段党建重点工作。`,notes:`无特殊情况不得缺席，确需请假的须提前向党支部书记履行请假手续。
请全体参会人员提前10分钟到场签到，并佩戴党员徽章。
请自带学习记录本和相关会议资料。`,contact:"联系人：组织委员，电话：77446064",notificationDate:se().notificationDate,attachments:"附件：党员大会会议议程",enableStamp:!1}),q.value=["中共朝阳区幸福居委会支部委员会","朝阳区幸福居委会"],c.success("已恢复样例内容")},ot=(t=Y.value)=>{var h;const e=t==="meetingImage"?Ye.value:t==="proofDocument"?Oe.value:He.value;if(!e){c.error("未找到可打印的预览内容");return}t==="proofDocument"&&w.value&&Yn(w.value.id).then(F=>{w.value=F}).catch(F=>{c.error((F==null?void 0:F.message)||"记录打印失败")});const a=t==="meetingImage"?`
    <style>
      @page {
        size: A4;
        margin: 5mm;
      }
      html, body {
        margin: 0;
        padding: 0;
        background: #fff;
      }
      .image-paper {
        width: 200mm;
        height: 287mm;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: #fff;
        display: grid;
        grid-template-rows: repeat(2, minmax(0, 1fr));
        gap: 6mm;
        overflow: hidden;
        page-break-inside: avoid;
        break-inside: avoid;
      }
      .image-paper-item {
        display: grid;
        justify-items: center;
        grid-template-rows: minmax(0, 1fr) auto;
        min-height: 0;
        overflow: hidden;
      }
      .image-paper-frame {
        width: 200mm;
        height: 100%;
        display: grid;
        place-items: center;
        overflow: hidden;
      }
      .image-paper-preview {
        width: 100%;
        height: 100%;
        max-width: 200mm;
        max-height: 138mm;
        object-fit: contain;
      }
      .image-paper-caption {
        width: 200mm;
        margin-top: 2mm;
        text-align: left;
        white-space: pre-wrap;
        word-break: break-word;
        overflow: hidden;
        font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
        font-size: 15pt;
        line-height: 22pt;
        max-height: 66pt;
      }
      .image-paper-empty {
        width: 200mm;
        min-height: 287mm;
        grid-row: 1 / span 2;
        display: grid;
        place-items: center;
        margin: 0 auto;
        color: #667085;
        font-size: 14pt;
      }
    </style>
  `:`
    <style>
      @page {
        size: A4;
        margin: ${t==="proofDocument"?"30mm":"20mm"} 27mm 25mm 27mm;
      }
      html, body {
        margin: 0;
        padding: 0;
        background: #fff;
      }
      body {
        color: #000;
      }
      .notice-paper {
        position: relative;
        width: 156mm;
        min-height: 252mm;
        margin: 0;
        padding: 0;
        background: #fff;
        color: #000;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        page-break-inside: avoid;
        break-inside: avoid;
      }
      .proof-paper {
        page: proof-document;
        justify-content: flex-start;
      }
      @page proof-document {
        size: A4;
        margin: 30mm 27mm 25mm 27mm;
      }
      .notice-title {
        margin: 0 0 8mm;
        text-align: center;
        color: #000;
        font-family:
          "Times New Roman",
          "FZXiaoBiaoSong-B05S",
          "方正小标宋简体",
          "STZhongsong",
          serif;
        font-size: 22pt;
        line-height: 30pt;
        font-weight: 700;
      }
      .proof-paper .notice-title {
        margin-bottom: 18mm;
      }
      .notice-title-line {
        display: block;
        white-space: pre-wrap;
      }
      .notice-body {
        width: 156mm;
        color: #000;
        font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
        font-size: 16pt;
        line-height: 28pt;
      }
      .salutation {
        margin: 0 0 2mm;
      }
      .notice-body p {
        margin: 0;
        color: #000;
        text-indent: 2em;
      }
      .notice-intro p {
        white-space: pre-wrap;
      }
      .proof-id-card-field {
        white-space: nowrap;
        word-break: keep-all;
        overflow-wrap: normal;
      }
      .item {
        margin: 0;
        text-indent: 2em;
      }
      .heading-level-1 {
        margin: 0 0 2mm;
        text-indent: 2em;
        font-family: "Times New Roman", SimHei, "黑体", sans-serif;
        font-size: 16pt;
        font-weight: 700;
      }
      .heading-level-2 {
        margin: 0 0 2mm;
        text-indent: 2em;
        font-family: "Times New Roman", KaiTi, "楷体", KaiTi_GB2312, serif;
        font-size: 16pt;
        font-weight: 700;
      }
      .heading-level-3,
      .heading-level-4 {
        margin: 0 0 2mm;
        text-indent: 2em;
        font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
        font-size: 16pt;
        font-weight: 700;
      }
      .contact {
        font-weight: 700;
      }
      .signature {
        --signature-indent: 3em;
        --signature-width: 16em;
        width: 156mm;
        margin-top: 10mm;
        color: #000;
        font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
        font-size: 16pt;
        line-height: 28pt;
        page-break-inside: avoid;
        break-inside: avoid;
      }
      .signature-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 28pt;
        page-break-inside: avoid;
        break-inside: avoid;
      }
      .signature-slot {
        min-width: 0;
        display: flex;
      }
      .signature-slot-left {
        justify-content: flex-start;
      }
      .signature-slot-right {
        justify-content: flex-end;
      }
      .signature-block {
        position: relative;
        width: calc(100% - var(--signature-indent));
        max-width: 18em;
        min-height: 28pt;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .signature-block-left {
        margin-left: var(--signature-indent);
      }
      .signature-block-right {
        margin-right: var(--signature-indent);
        margin-left: auto;
      }
      .signature-date {
        margin-top: 0;
      }
      .signature-name {
        display: block;
        position: relative;
        z-index: 1;
        width: 100%;
        padding: 0 0.3em;
        color: #000;
        white-space: normal;
        word-break: break-all;
        line-height: 28pt;
        text-align: center;
      }
      .signature-stamp {
        position: absolute;
        width: 45mm;
        height: 45mm;
        object-fit: contain;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-12deg);
        opacity: 0.58;
        mix-blend-mode: multiply;
        filter: saturate(1.12) contrast(1.04);
        pointer-events: none;
      }
      .attachments {
        margin-top: 7mm;
        width: 156mm;
        font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
        font-size: 16pt;
        line-height: 28pt;
        page-break-inside: avoid;
        break-inside: avoid;
      }
      ${t==="proofDocument"?`
      .proof-document-no {
        display: none !important;
      }
      `:""}
    </style>
  `,n=document.createElement("iframe");n.style.position="fixed",n.style.right="0",n.style.bottom="0",n.style.width="0",n.style.height="0",n.style.border="0",n.style.opacity="0",document.body.appendChild(n);const r=n.contentDocument||((h=n.contentWindow)==null?void 0:h.document),u=`
    <!doctype html>
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8" />
        <title>${t==="meetingImage"?"会议图片打印预览":t==="proofDocument"?"证明材料打印预览":"会议通知打印预览"}</title>
        ${a}
      </head>
      <body>
        ${e.outerHTML}
      </body>
    </html>
  `;if(!r||!n.contentWindow){n.remove(),c.error("打印组件初始化失败，请稍后重试");return}r.open(),r.write(u),r.close();const _=()=>{window.setTimeout(()=>{n.remove()},1e3)},v=n.contentWindow;v.onafterprint=_,window.setTimeout(()=>{v.focus(),v.print(),_()},300)},Qa=()=>`
  <style>
    @page {
      size: A4;
      margin: 5mm;
    }
    html, body {
      margin: 0;
      padding: 0;
      background: #fff;
    }
    .image-paper {
      width: 200mm;
      height: 287mm;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background: #fff;
      display: grid;
      grid-template-rows: repeat(2, minmax(0, 1fr));
      gap: 6mm;
      overflow: hidden;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .image-paper-item {
      display: grid;
      justify-items: center;
      grid-template-rows: minmax(0, 1fr) auto;
      min-height: 0;
      overflow: hidden;
    }
    .image-paper-frame {
      width: 200mm;
      height: 100%;
      display: grid;
      place-items: center;
      overflow: hidden;
    }
    .image-paper-preview {
      width: 100%;
      height: 100%;
      max-width: 200mm;
      max-height: 138mm;
      object-fit: contain;
    }
    .image-paper-caption {
      width: 200mm;
      margin-top: 2mm;
      text-align: left;
      white-space: pre-wrap;
      word-break: break-word;
      overflow: hidden;
      font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
      font-size: 15pt;
      line-height: 22pt;
      max-height: 66pt;
    }
    .image-paper-empty {
      width: 200mm;
      min-height: 287mm;
      grid-row: 1 / span 2;
      display: grid;
      place-items: center;
      margin: 0 auto;
      color: #667085;
      font-size: 14pt;
    }
  </style>
`,en=()=>`
  <style>
    @page {
      size: A4;
      margin: 20mm 27mm 25mm 27mm;
    }
    html, body {
      margin: 0;
      padding: 0;
      background: #fff;
    }
    body {
      color: #000;
    }
    .notice-paper {
      position: relative;
      width: 156mm;
      min-height: 252mm;
      margin: 0;
      padding: 0;
      background: #fff;
      color: #000;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .proof-paper {
      justify-content: flex-start;
    }
    .notice-title {
      margin: 0 0 8mm;
      text-align: center;
      color: #000;
      font-family: "Times New Roman", "FZXiaoBiaoSong-B05S", "方正小标宋简体", "STZhongsong", serif;
      font-size: 22pt;
      line-height: 30pt;
      font-weight: 700;
    }
    .proof-paper .notice-title {
      margin-bottom: 18mm;
    }
    .notice-title-line {
      display: block;
      white-space: pre-wrap;
    }
    .notice-body {
      width: 156mm;
      color: #000;
      font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
      font-size: 16pt;
      line-height: 28pt;
    }
    .salutation {
      margin: 0 0 2mm;
    }
    .notice-body p {
      margin: 0;
      color: #000;
      text-indent: 2em;
    }
    .notice-intro p {
      white-space: pre-wrap;
    }
    .proof-id-card-field {
      white-space: nowrap;
      word-break: keep-all;
      overflow-wrap: normal;
    }
    .item {
      margin: 0;
      text-indent: 2em;
    }
    .heading-level-1 {
      margin: 0 0 2mm;
      text-indent: 2em;
      font-family: "Times New Roman", SimHei, "黑体", sans-serif;
      font-size: 16pt;
      font-weight: 700;
    }
    .contact {
      font-weight: 700;
    }
    .signature {
      --signature-indent: 3em;
      --signature-width: 16em;
      width: 156mm;
      margin-top: 10mm;
      color: #000;
      font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
      font-size: 16pt;
      line-height: 24pt;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .signature-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 24pt;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .signature-slot {
      min-width: 0;
      display: flex;
    }
    .signature-slot-left {
      justify-content: flex-start;
    }
    .signature-slot-right {
      justify-content: flex-end;
    }
    .signature-block {
      position: relative;
      width: calc(100% - var(--signature-indent));
      max-width: 18em;
      min-height: 24pt;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .signature-block-left {
      margin-left: var(--signature-indent);
    }
    .signature-block-right {
      margin-right: var(--signature-indent);
      margin-left: auto;
    }
    .signature-date {
      margin-top: 0;
    }
    .signature-name {
      display: block;
      position: relative;
      z-index: 1;
      width: 100%;
      padding: 0 0.3em;
      color: #000;
      white-space: normal;
      word-break: break-all;
      line-height: 24pt;
      text-align: center;
    }
    .signature-stamp {
      position: absolute;
      width: 45mm;
      height: 45mm;
      object-fit: contain;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(-12deg);
      opacity: 0.58;
      mix-blend-mode: multiply;
      filter: saturate(1.12) contrast(1.04);
      pointer-events: none;
    }
    .attachments {
      margin-top: 7mm;
      width: 156mm;
      font-family: "Times New Roman", FangSong, "仿宋", FangSong_GB2312, serif;
      font-size: 16pt;
      line-height: 24pt;
      page-break-inside: avoid;
      break-inside: avoid;
    }
  </style>
`,st=(...e)=>I(null,[...e],function*(t=Y.value){var F;const a=t==="meetingImage"?Ye.value:t==="proofDocument"?Oe.value:He.value;if(!a){c.error("未找到可导出的预览内容");return}const n=t==="meetingImage"?"会议图片":t==="proofDocument"?"证明材料":"会议通知",r=t==="meetingImage"?Qa():en(),u=`<!doctype html>
  <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="UTF-8" />
      <title>${n}</title>
      ${r}
    </head>
    <body>
      ${a.outerHTML}
    </body>
  </html>`,_=new Blob(["\uFEFF",u],{type:"application/msword"}),v=t==="proofDocument"&&((F=w.value)!=null&&F.documentNo)?`${n}-${w.value.documentNo}.doc`:`${n}-${new Date().toISOString().slice(0,10)}.doc`,h=yield jn(_,v,{filters:[{name:"Word 文档",extensions:["doc"]},{name:"所有文件",extensions:["*"]}]});if(!h.canceled){if(!h.saved){c.error(h.error||"导出 Word 失败");return}if(t==="proofDocument"&&w.value)try{w.value=yield On(w.value.id)}catch(L){c.error((L==null?void 0:L.message)||"记录导出失败");return}c.success(h.filePath?`Word 已导出：${h.filePath}`:"Word 已导出")}});return Ie(Q,t=>{const e=z.value.find(a=>a.id===t);ae.value=(e==null?void 0:e.name)||""}),Ie(W,t=>{const e=he(t);if(!e.id){B.value="";return}if(e.source==="db"){const a=parseInt(e.id,10),n=ee.value.find(r=>r.id===a);B.value=(n==null?void 0:n.name)||""}else if(e.source==="local"){const a=M.value.find(n=>n.id===e.id);B.value=(a==null?void 0:a.name)||""}}),Ie(Y,(t,e)=>{t==="meetingImage"&&e!=="meetingImage"&&ka(),t==="proofDocument"&&re(),e==="meetingImage"&&t!=="meetingImage"&&(ue.value=!1)}),Ie(me,t=>{t==="ledger"&&re()}),Ie(()=>f.notificationDate,(t,e)=>{if(!t||t===e)return;const a=Qt(t);a&&(f.meetingDate=a)}),Un(()=>I(null,null,function*(){qt(),Jt(),Xt(),yield Zt(),ha(),Ue()})),(t,e)=>{const a=mn,n=un,r=gn,u=cn,_=vn,v=fn,h=hn,F=pn,L=bn,le=yn,te=wn,X=kn,Z=_n,ke=Sn,je=Tn,E=Dn,ze=Cn,tn=In,an=Vn,nn=xn;return m(),g("div",Qn,[o(an,{class:"editor-card no-print",shadow:"never"},{header:d(()=>e[40]||(e[40]=[s("div",{class:"card-header"},[s("div",null,[s("div",{class:"card-title"},"实用工具"),s("div",{class:"card-subtitle"}," 当前支持会议通知和会议图片，后续可继续扩展其他实用工具并与页面标签联动。 ")])],-1)])),default:d(()=>{var zt;return[o(n,{modelValue:Y.value,"onUpdate:modelValue":e[0]||(e[0]=l=>Y.value=l),class:"tool-tabs no-print"},{default:d(()=>[o(a,{label:"会议通知",name:"meetingNotice"}),o(a,{label:"会议图片",name:"meetingImage"}),o(a,{label:"证明材料",name:"proofDocument"})]),_:1},8,["modelValue"]),Y.value==="meetingNotice"?(m(),g("div",el,[s("div",tl,[e[53]||(e[53]=s("div",{class:"section-title"},"模板管理",-1)),o(F,{"label-position":"top"},{default:d(()=>[s("div",al,[o(u,{label:"模板名称"},{default:d(()=>[o(r,{modelValue:ae.value,"onUpdate:modelValue":e[1]||(e[1]=l=>ae.value=l),placeholder:"例如：乡镇干部大会模板"},null,8,["modelValue"])]),_:1}),o(u,{label:"已保存模板"},{default:d(()=>[o(v,{modelValue:Q.value,"onUpdate:modelValue":e[2]||(e[2]=l=>Q.value=l),clearable:"",placeholder:"请选择模板"},{default:d(()=>[(m(!0),g(x,null,R(z.value,l=>(m(),G(_,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),s("div",nl,[o(h,{type:"primary",onClick:qa},{default:d(()=>e[41]||(e[41]=[S("保存为模板")])),_:1}),o(h,{onClick:Ja},{default:d(()=>e[42]||(e[42]=[S("应用模板")])),_:1}),o(h,{onClick:Ka},{default:d(()=>e[43]||(e[43]=[S("覆盖当前模板")])),_:1}),o(h,{type:"danger",plain:"",onClick:Xa},{default:d(()=>e[44]||(e[44]=[S("删除模板")])),_:1}),o(h,{onClick:Za},{default:d(()=>e[45]||(e[45]=[S("恢复样例")])),_:1})])]),_:1}),e[54]||(e[54]=s("div",{class:"section-title"},"通知内容",-1)),o(F,{"label-position":"top"},{default:d(()=>[o(u,{label:"通知标题"},{default:d(()=>[o(r,{modelValue:f.meetingTitle,"onUpdate:modelValue":e[3]||(e[3]=l=>f.meetingTitle=l),type:"textarea",rows:2,placeholder:"支持直接换行，标题过长时建议手动断行"},null,8,["modelValue"])]),_:1}),s("div",ll,[o(u,{label:"称谓"},{default:d(()=>[o(r,{modelValue:f.salutation,"onUpdate:modelValue":e[4]||(e[4]=l=>f.salutation=l)},null,8,["modelValue"])]),_:1}),o(u,{label:"通知日期"},{default:d(()=>[o(L,{modelValue:f.notificationDate,"onUpdate:modelValue":e[5]||(e[5]=l=>f.notificationDate=l),type:"date","value-format":"YYYY年M月D日",format:"YYYY年M月D日",placeholder:"选择通知日期"},null,8,["modelValue"])]),_:1})]),o(u,{label:"落款单位（引用“使用单位”字典）"},{default:d(()=>[s("div",ol,[s("div",sl,[o(v,{modelValue:$e.value,"onUpdate:modelValue":e[6]||(e[6]=l=>$e.value=l),class:"usage-unit-select",clearable:"",placeholder:"请选择使用单位"},{default:d(()=>[(m(!0),g(x,null,R(Ve.value,l=>(m(),G(_,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),o(h,{class:"usage-unit-add-button",onClick:ba},{default:d(()=>e[46]||(e[46]=[S("添加单位")])),_:1})]),s("div",il,[q.value.length===0?(m(),g("div",rl," 暂未选择落款单位 ")):V("",!0),(m(!0),g(x,null,R(q.value,l=>(m(),g("div",{key:l,class:"usage-unit-item"},[s("div",dl,[s("span",null,k(l),1),s("span",ul,k(fa(l)),1)]),o(h,{link:"",type:"danger",onClick:D=>ya(l)},{default:d(()=>e[47]||(e[47]=[S("移除")])),_:2},1032,["onClick"])]))),128))])])]),_:1}),o(u,{label:"印章配置"},{default:d(()=>[e[52]||(e[52]=s("div",{class:"stamp-config-summary"}," 党组织印章自动绑定名称含“支委会、支部委员会、党委、党委会、党支部”等单位；村/居委会印章自动绑定名称含“村委、村民委员会、居委、居民委员会、社区”的单位。上传新图片后直接覆盖当前印章。 ",-1)),s("div",ml,[o(le,{modelValue:f.enableStamp,"onUpdate:modelValue":e[7]||(e[7]=l=>f.enableStamp=l)},{default:d(()=>e[48]||(e[48]=[S("加盖印章")])),_:1},8,["modelValue"]),e[49]||(e[49]=s("span",{class:"stamp-enable-tip"},"默认不加盖，勾选后按单位类型自动盖章",-1))]),s("div",pl,[s("div",cl,[e[50]||(e[50]=s("div",{class:"stamp-config-title"},"党组织印章",-1)),s("div",gl,"当前印章："+k(kt("party")),1),s("input",{type:"file",accept:"image/*",onChange:e[8]||(e[8]=l=>Tt(l,"party"))},null,32)]),s("div",fl,[e[51]||(e[51]=s("div",{class:"stamp-config-title"},"村/居委会印章",-1)),s("div",vl," 当前印章："+k(kt("villageResident")),1),s("input",{type:"file",accept:"image/*",onChange:e[9]||(e[9]=l=>Tt(l,"villageResident"))},null,32)])])]),_:1}),o(u,{label:"开头说明"},{default:d(()=>[o(r,{modelValue:f.intro,"onUpdate:modelValue":e[10]||(e[10]=l=>f.intro=l),type:"textarea",rows:3},null,8,["modelValue"])]),_:1}),s("div",hl,[o(u,{label:"会议日期"},{default:d(()=>[o(L,{modelValue:f.meetingDate,"onUpdate:modelValue":e[11]||(e[11]=l=>f.meetingDate=l),type:"date","value-format":"YYYY-MM-DD",placeholder:"选择日期"},null,8,["modelValue"])]),_:1}),o(u,{label:"开始时间"},{default:d(()=>[o(te,{modelValue:f.meetingStartTime,"onUpdate:modelValue":e[12]||(e[12]=l=>f.meetingStartTime=l),format:"HH:mm","value-format":"HH:mm",placeholder:"选择时间"},null,8,["modelValue"])]),_:1})]),o(u,{label:"会议地点"},{default:d(()=>[o(r,{modelValue:f.meetingPlace,"onUpdate:modelValue":e[13]||(e[13]=l=>f.meetingPlace=l)},null,8,["modelValue"])]),_:1}),o(u,{label:"参会人员（一行一项，预览自动加（一）（二））"},{default:d(()=>[o(r,{modelValue:f.participants,"onUpdate:modelValue":e[14]||(e[14]=l=>f.participants=l),type:"textarea",rows:4},null,8,["modelValue"])]),_:1}),o(u,{label:"会议议程（一行一项，预览自动加（一）（二））"},{default:d(()=>[o(r,{modelValue:f.agenda,"onUpdate:modelValue":e[15]||(e[15]=l=>f.agenda=l),type:"textarea",rows:4},null,8,["modelValue"])]),_:1}),o(u,{label:"注意事项（一行一项，预览自动加（一）（二））"},{default:d(()=>[o(r,{modelValue:f.notes,"onUpdate:modelValue":e[16]||(e[16]=l=>f.notes=l),type:"textarea",rows:4},null,8,["modelValue"])]),_:1}),o(u,{label:"联系方式"},{default:d(()=>[o(r,{modelValue:f.contact,"onUpdate:modelValue":e[17]||(e[17]=l=>f.contact=l)},null,8,["modelValue"])]),_:1}),o(u,{label:"附件说明"},{default:d(()=>[o(r,{modelValue:f.attachments,"onUpdate:modelValue":e[18]||(e[18]=l=>f.attachments=l)},null,8,["modelValue"])]),_:1})]),_:1})]),s("div",bl,[s("div",yl,[s("div",wl,k(ft.value)+"打印预览",1),s("div",_l,[e[57]||(e[57]=s("div",{class:"preview-tip"},"联合落款按两单位一行排版，通知日期固定对齐右侧单位。",-1)),o(h,{onClick:e[19]||(e[19]=l=>st("meetingNotice"))},{default:d(()=>e[55]||(e[55]=[S("导出 Word")])),_:1}),o(h,{type:"primary",onClick:e[20]||(e[20]=l=>ot("meetingNotice"))},{default:d(()=>e[56]||(e[56]=[S("打印预览")])),_:1})])]),s("article",{ref_key:"printPaperRef",ref:He,class:Lt(["notice-paper",{"proof-paper":sa.value}])},[s("h2",kl,[(m(!0),g(x,null,R(oa.value,(l,D)=>(m(),g("span",{key:`${l}-${D}`,class:"notice-title-line"},k(l),1))),128))]),s("div",Sl,[s("div",Tl,k(f.salutation||"各位同事："),1),s("div",Il,[(m(!0),g(x,null,R(ta.value,(l,D)=>(m(),g("p",{key:`intro-${D}`},k(l||" "),1))),128))]),ua.value?(m(),g(x,{key:0},[e[58]||(e[58]=s("div",{class:"heading-level-1"},"一、会议时间及地点",-1)),Qe.value?(m(),g("p",Dl,"时间："+k(Qe.value),1)):V("",!0),f.meetingPlace.trim()?(m(),g("p",Cl,"地点："+k(f.meetingPlace),1)):V("",!0)],64)):V("",!0),ma.value?(m(),g(x,{key:1},[e[59]||(e[59]=s("div",{class:"heading-level-1"},"二、参会人员",-1)),s("div",null,[(m(!0),g(x,null,R(bt.value,(l,D)=>(m(),g("p",{key:`participant-${D}`,class:"item"},k(Ne(D))+k(l),1))),128))])],64)):V("",!0),pa.value?(m(),g(x,{key:2},[e[60]||(e[60]=s("div",{class:"heading-level-1"},"三、会议议程",-1)),s("div",null,[(m(!0),g(x,null,R(yt.value,(l,D)=>(m(),g("p",{key:`agenda-${D}`,class:"item"},k(Ne(D))+k(l),1))),128))])],64)):V("",!0),ca.value?(m(),g(x,{key:3},[e[61]||(e[61]=s("div",{class:"heading-level-1"},"四、其他事项",-1)),s("div",null,[(m(!0),g(x,null,R(wt.value,(l,D)=>(m(),g("p",{key:`note-${D}`,class:"item"},k(Ne(D))+k(l),1))),128))])],64)):V("",!0),s("p",xl,k(f.contact),1)]),s("div",Vl,[(m(!0),g(x,null,R(va.value,(l,D)=>(m(),g("div",{key:`${l.left}-${l.right}-${D}`,class:"signature-row"},[s("div",$l,[l.left?(m(),g("div",Pl,[s("div",Ul,k(l.left.name),1),l.left.stampUrl?(m(),g("img",{key:0,class:"signature-stamp",src:l.left.stampUrl,alt:`${l.left.name}印章`},null,8,Nl)):V("",!0)])):V("",!0)]),s("div",Al,[l.right?(m(),g("div",Rl,[s("div",Fl,k(l.right.name),1),l.right.stampUrl?(m(),g("img",{key:0,class:"signature-stamp",src:l.right.stampUrl,alt:`${l.right.name}印章`},null,8,El)):V("",!0)])):V("",!0)])]))),128)),s("div",jl,[e[62]||(e[62]=s("div",{class:"signature-slot signature-slot-left"},null,-1)),s("div",zl,[s("div",Bl,k(f.notificationDate),1)])])]),f.attachments?(m(),g("div",Ml,k(f.attachments),1)):V("",!0)],2)])])):Y.value==="proofDocument"?(m(),g("div",Ll,[s("div",Gl,[s("div",Hl,[o(Z,{modelValue:me.value,"onUpdate:modelValue":e[21]||(e[21]=l=>me.value=l)},{default:d(()=>[o(X,{label:"create"},{default:d(()=>e[63]||(e[63]=[S("新建证明")])),_:1}),o(X,{label:"ledger"},{default:d(()=>e[64]||(e[64]=[S("历史记录")])),_:1})]),_:1},8,["modelValue"])]),me.value==="create"?(m(),g(x,{key:0},[e[81]||(e[81]=s("div",{class:"section-title"},"模板管理",-1)),o(F,{"label-position":"top"},{default:d(()=>[s("div",Ol,[o(u,{label:"模板名称"},{default:d(()=>[o(r,{modelValue:B.value,"onUpdate:modelValue":e[22]||(e[22]=l=>B.value=l),placeholder:"例如：亲属关系证明模板"},null,8,["modelValue"])]),_:1}),o(u,{label:"已保存模板"},{default:d(()=>[o(v,{modelValue:W.value,"onUpdate:modelValue":e[23]||(e[23]=l=>W.value=l),clearable:"",placeholder:"请选择模板",loading:Ge.value},{default:d(()=>[o(ke,{label:"数据库模板"},{default:d(()=>[(m(!0),g(x,null,R(ee.value,l=>(m(),G(_,{key:"db-"+l.id,label:l.name+(l.isDefault?" (系统预设)":""),value:"db-"+l.id},null,8,["label","value"]))),128))]),_:1}),o(ke,{label:"本地模板"},{default:d(()=>[(m(!0),g(x,null,R(M.value,l=>(m(),G(_,{key:"local-"+l.id,label:l.name+(l.builtin?" (内置)":""),value:"local-"+l.id},null,8,["label","value"]))),128))]),_:1})]),_:1},8,["modelValue","loading"])]),_:1})]),s("div",Yl,[o(h,{type:"primary",onClick:La},{default:d(()=>e[65]||(e[65]=[S("保存为模板")])),_:1}),o(h,{onClick:Ga},{default:d(()=>e[66]||(e[66]=[S("应用模板")])),_:1}),o(h,{onClick:Ha},{default:d(()=>e[67]||(e[67]=[S("覆盖当前模板")])),_:1}),o(h,{type:"danger",plain:"",onClick:Oa},{default:d(()=>e[68]||(e[68]=[S("删除模板")])),_:1}),o(h,{onClick:Ya},{default:d(()=>e[69]||(e[69]=[S("恢复样例")])),_:1})])]),_:1}),e[82]||(e[82]=s("div",{class:"section-title"},"证明信息",-1)),o(F,{"label-position":"top"},{default:d(()=>{var l,D;return[s("div",Wl,[o(u,{label:"材料标题"},{default:d(()=>[o(r,{modelValue:i.proofType,"onUpdate:modelValue":e[24]||(e[24]=y=>i.proofType=y),disabled:A.value,placeholder:"例如：证 明、情况说明"},null,8,["modelValue","disabled"])]),_:1}),o(u,{label:"出具单位"},{default:d(()=>[o(v,{modelValue:i.issuingUnit,"onUpdate:modelValue":e[25]||(e[25]=y=>i.issuingUnit=y),filterable:"","allow-create":"","default-first-option":"",disabled:A.value,placeholder:"请选择使用单位"},{default:d(()=>[(m(!0),g(x,null,R(Ve.value,y=>(m(),G(_,{key:y.value,label:y.label,value:y.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1})]),o(u,{label:"开具证明时间"},{default:d(()=>[o(L,{modelValue:i.plannedIssuedAt,"onUpdate:modelValue":e[26]||(e[26]=y=>i.plannedIssuedAt=y),type:"date","value-format":"YYYY-MM-DD",placeholder:"选择开具日期",disabled:A.value},null,8,["modelValue","disabled"])]),_:1}),o(u,{label:"被证明人信息"},{default:d(()=>[s("div",ql,[(m(!0),g(x,null,R(i.subjectItems,(y,Se)=>(m(),g("div",{key:y.localId,class:"proof-subject-item"},[s("div",Jl,[s("span",null,"被证明人"+k(Se+1),1),i.subjectItems.length>1?(m(),G(h,{key:0,link:"",type:"danger",disabled:A.value,onClick:C=>Aa(Se)},{default:d(()=>e[70]||(e[70]=[S(" 移除 ")])),_:2},1032,["disabled","onClick"])):V("",!0)]),s("div",Kl,[o(u,{label:"姓名"},{default:d(()=>[o(je,{modelValue:y.name,"onUpdate:modelValue":C=>y.name=C,"value-key":"value","fetch-suggestions":Fa,disabled:A.value,clearable:"",placeholder:"输入姓名自动搜索居民",onSelect:C=>Ea(Se,C),onInput:_e},null,8,["modelValue","onUpdate:modelValue","disabled","onSelect"])]),_:2},1024),o(u,{label:"性别"},{default:d(()=>[o(r,{modelValue:y.gender,"onUpdate:modelValue":C=>y.gender=C,disabled:A.value,onInput:_e},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024)]),s("div",Xl,[o(u,{label:"身份证号"},{default:d(()=>[o(r,{modelValue:y.idCard,"onUpdate:modelValue":C=>y.idCard=C,disabled:A.value,onInput:_e},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024),o(u,{label:"联系电话"},{default:d(()=>[o(r,{modelValue:y.phone,"onUpdate:modelValue":C=>y.phone=C,disabled:A.value,onInput:_e},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024)]),o(u,{label:"住址"},{default:d(()=>[o(r,{modelValue:y.address,"onUpdate:modelValue":C=>y.address=C,disabled:A.value,onInput:_e},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024),s("div",Zl,[e[71]||(e[71]=s("span",{class:"proof-field-insert-label"},"插入到正文",-1)),(m(!0),g(x,null,R(Ta(y),C=>(m(),G(h,{key:C.key,size:"small",disabled:A.value||!C.value,onMousedown:e[27]||(e[27]=fe(()=>{},["prevent"])),onClick:Lo=>Rt(y,C.key)},{default:d(()=>[S(k(C.label),1)]),_:2},1032,["disabled","onClick"]))),128)),o(v,{"model-value":"",class:"proof-field-insert-select",size:"small",clearable:"",disabled:A.value,placeholder:"更多字段",onChange:C=>Rt(y,C)},{default:d(()=>[(m(!0),g(x,null,R(Pt(y),C=>(m(),G(_,{key:C.key,disabled:!C.value,label:C.value?`${C.label}：${C.value}`:`${C.label}：未填写`,value:C.key},null,8,["disabled","label","value"]))),128))]),_:2},1032,["disabled","onChange"]),$t(y).length?V("",!0):(m(),g("span",Ql," 先搜索选择居民，字段会自动可插入 "))])]))),128)),o(h,{disabled:A.value,onClick:Na},{default:d(()=>e[72]||(e[72]=[S("添加被证明人")])),_:1},8,["disabled"])])]),_:1}),o(u,{label:"证明正文"},{default:d(()=>[o(r,{ref_key:"proofContentInputRef",ref:rt,modelValue:i.content,"onUpdate:modelValue":e[28]||(e[28]=y=>i.content=y),type:"textarea",rows:9,disabled:A.value,onClick:Fe,onKeyup:Fe,onSelect:Fe,onInput:$a},null,8,["modelValue","disabled"]),s("div",eo,[o(h,{disabled:A.value,onClick:Va},{default:d(()=>e[73]||(e[73]=[S(" 根据被证明人重新生成正文 ")])),_:1},8,["disabled"])])]),_:1}),s("div",to,[o(u,{label:"印章类型"},{default:d(()=>[o(v,{modelValue:i.stampType,"onUpdate:modelValue":e[29]||(e[29]=y=>i.stampType=y),clearable:"",disabled:A.value},{default:d(()=>[o(_,{label:"村/居委会印章",value:"villageResident"}),o(_,{label:"党组织印章",value:"party"})]),_:1},8,["modelValue","disabled"])]),_:1}),o(u,{label:"盖章"},{default:d(()=>[o(le,{modelValue:i.stampEnabled,"onUpdate:modelValue":e[30]||(e[30]=y=>i.stampEnabled=y),disabled:A.value},{default:d(()=>e[74]||(e[74]=[S(" 加盖印章 ")])),_:1},8,["modelValue","disabled"])]),_:1})]),s("div",ao,[o(h,{onClick:ja},{default:d(()=>e[75]||(e[75]=[S("新建")])),_:1}),A.value?V("",!0):(m(),G(h,{key:0,type:"primary",loading:pe.value,onClick:za},{default:d(()=>e[76]||(e[76]=[S(" 保存草稿 ")])),_:1},8,["loading"])),((l=w.value)==null?void 0:l.status)==="draft"?(m(),G(h,{key:1,type:"success",loading:pe.value,onClick:Ba},{default:d(()=>e[77]||(e[77]=[S(" 正式出具 ")])),_:1},8,["loading"])):V("",!0),o(h,{disabled:!w.value||w.value.status==="voided",onClick:e[31]||(e[31]=y=>st("proofDocument"))},{default:d(()=>e[78]||(e[78]=[S(" 导出 Word ")])),_:1},8,["disabled"]),o(h,{disabled:!w.value||w.value.status==="voided",onClick:e[32]||(e[32]=y=>ot("proofDocument"))},{default:d(()=>e[79]||(e[79]=[S(" 打印预览 ")])),_:1},8,["disabled"]),((D=w.value)==null?void 0:D.status)==="issued"?(m(),G(h,{key:2,type:"danger",plain:"",onClick:Ma},{default:d(()=>e[80]||(e[80]=[S(" 作废 ")])),_:1})):V("",!0)]),w.value?(m(),g("div",no,[s("span",null,"状态："+k(Ct(w.value.status)),1),w.value.documentNo?(m(),g("span",lo,"编号："+k(w.value.documentNo),1)):V("",!0),w.value.issuedByRealName?(m(),g("span",oo," 出具人："+k(w.value.issuedByRealName),1)):V("",!0),w.value.issuedAt?(m(),g("span",so,"出具时间："+k(w.value.issuedAt),1)):V("",!0)])):V("",!0)]}),_:1})],64)):(m(),g(x,{key:1},[e[85]||(e[85]=s("div",{class:"section-title"},"历史记录",-1)),s("div",io,[o(r,{modelValue:ne.keyword,"onUpdate:modelValue":e[33]||(e[33]=l=>ne.keyword=l),clearable:"",placeholder:"搜索编号、姓名、身份证号、正文",onKeyup:Nn(re,["enter"])},null,8,["modelValue"]),o(v,{modelValue:ne.status,"onUpdate:modelValue":e[34]||(e[34]=l=>ne.status=l),clearable:"",placeholder:"状态"},{default:d(()=>[o(_,{label:"草稿",value:"draft"}),o(_,{label:"已出具",value:"issued"}),o(_,{label:"已作废",value:"voided"})]),_:1},8,["modelValue"]),o(h,{type:"primary",onClick:re},{default:d(()=>e[83]||(e[83]=[S("查询")])),_:1})]),An((m(),G(tn,{class:"proof-ledger-table",data:it.value,size:"small",height:"560",onRowClick:jt},{default:d(()=>[o(E,{prop:"documentNo",label:"证明编号",width:"170"},{default:d(({row:l})=>[S(k(l.documentNo||"草稿"),1)]),_:1}),o(E,{prop:"subjectName",label:"被证明人",width:"120"}),o(E,{prop:"subjectIdCardMasked",label:"身份证号",width:"180"}),o(E,{prop:"subjectPhone",label:"联系电话",width:"130"}),o(E,{prop:"subjectAddress",label:"住址",width:"220","show-overflow-tooltip":""}),o(E,{prop:"status",label:"状态",width:"90"},{default:d(({row:l})=>[o(ze,{type:Sa(l.status)},{default:d(()=>[S(k(Ct(l.status)),1)]),_:2},1032,["type"])]),_:1}),o(E,{prop:"issuedAt",label:"开具时间",width:"170"}),o(E,{prop:"issuedByRealName",label:"开具人",width:"110"}),o(E,{prop:"createdAt",label:"创建时间",width:"170"}),o(E,{prop:"exportCount",label:"导出次数",width:"90"}),o(E,{prop:"printCount",label:"打印次数",width:"90"}),o(E,{prop:"voidReason",label:"作废原因",width:"180","show-overflow-tooltip":""}),o(E,{label:"操作",width:"100",fixed:"right"},{default:d(({row:l})=>[o(h,{link:"",type:"primary",onClick:fe(D=>jt(l),["stop"])},{default:d(()=>e[84]||(e[84]=[S("查看")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[nn,We.value]])],64))]),s("div",ro,[e[88]||(e[88]=s("div",{class:"preview-toolbar no-print"},[s("div",{class:"preview-title"},"证明材料打印预览"),s("div",{class:"preview-toolbar-actions"},[s("div",{class:"preview-tip"},"正式出具后正文冻结，修改需作废后重新出具。")])],-1)),s("article",{ref_key:"proofPaperRef",ref:Oe,class:"notice-paper proof-paper"},[s("h2",uo,k(ra.value),1),s("div",mo,[s("div",po,[(m(!0),g(x,null,R(ia.value,(l,D)=>(m(),g("p",{key:`proof-${D}`},[(m(!0),g(x,null,R(l,(y,Se)=>(m(),g(x,{key:`proof-${D}-${Se}`},[y.highlight?(m(),g("span",co,k(y.text),1)):(m(),g(x,{key:1},[S(k(y.text),1)],64))],64))),128))]))),128))])]),s("div",go,[s("div",fo,[e[86]||(e[86]=s("div",{class:"signature-slot signature-slot-left"},null,-1)),s("div",vo,[s("div",ho,[s("div",bo,k(i.issuingUnit),1),ht.value?(m(),g("img",{key:0,class:"signature-stamp",src:ht.value,alt:`${i.issuingUnit}印章`},null,8,yo)):V("",!0)])])]),s("div",wo,[e[87]||(e[87]=s("div",{class:"signature-slot signature-slot-left"},null,-1)),s("div",_o,[s("div",ko,k(da.value),1)])])]),(zt=w.value)!=null&&zt.documentNo?(m(),g("div",So," 编号："+k(w.value.documentNo),1)):V("",!0)],512)])])):Y.value==="meetingImage"?(m(),g("div",To,[s("div",Io,[e[91]||(e[91]=s("div",{class:"section-title"},"图片编辑",-1)),e[92]||(e[92]=s("div",{class:"image-tool-note"}," 支持直接拖拽图片到下方区域，也可分别上传两张会议图片。本工具不做本地保存。 ",-1)),s("div",{class:Lt(["image-dropzone",{"is-dragover":ue.value}]),onDragenter:e[35]||(e[35]=fe(l=>ue.value=!0,["prevent"])),onDragover:e[36]||(e[36]=fe(l=>ue.value=!0,["prevent"])),onDragleave:e[37]||(e[37]=fe(l=>ue.value=!1,["prevent"])),onDrop:fe(Wa,["prevent"])},e[89]||(e[89]=[s("div",{class:"image-dropzone-title"},"拖拽图片到这里",-1),s("div",{class:"image-dropzone-desc"}," 可一次拖入 1-2 张图片，按顺序填充到图片一、图片二。 ",-1)]),34),s("div",Do,[(m(!0),g(x,null,R(J,(l,D)=>(m(),g("div",{key:l.id,class:"image-editor-card"},[s("div",Co,[s("div",xo,"图片"+k(D+1),1),l.url?(m(),G(h,{key:0,link:"",type:"danger",onClick:y=>Dt(D)},{default:d(()=>e[90]||(e[90]=[S(" 清除 ")])),_:2},1032,["onClick"])):V("",!0)]),s("label",Vo,[s("input",{class:"image-upload-input",type:"file",accept:"image/*",onChange:y=>_a(y,D)},null,40,$o),l.url?(m(),g("img",{key:0,class:"image-upload-preview",src:l.url,alt:`会议图片${D+1}`},null,8,Po)):(m(),g("div",Uo,"点击上传图片"+k(D+1),1))]),o(r,{modelValue:l.caption,"onUpdate:modelValue":y=>l.caption=y,type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"输入图片说明，留空则预览不显示"},null,8,["modelValue","onUpdate:modelValue"])]))),128))])]),s("div",No,[s("div",Ao,[s("div",Ro,k(ft.value)+"打印预览",1),s("div",Fo,[e[95]||(e[95]=s("div",{class:"preview-tip"},"A4 纵向最多显示两张图片，说明文字为空时不显示。",-1)),o(h,{onClick:e[38]||(e[38]=l=>st("meetingImage"))},{default:d(()=>e[93]||(e[93]=[S("导出 Word")])),_:1}),o(h,{type:"primary",onClick:e[39]||(e[39]=l=>ot("meetingImage"))},{default:d(()=>e[94]||(e[94]=[S("打印预览")])),_:1})])]),s("article",{ref_key:"imagePaperRef",ref:Ye,class:"image-paper"},[(m(!0),g(x,null,R(vt.value,(l,D)=>(m(),g("div",{key:l.id,class:"image-paper-item"},[s("div",Eo,[s("img",{class:"image-paper-preview",src:l.url,alt:`会议图片${D+1}`},null,8,jo)]),l.caption.trim()?(m(),g("div",zo,k(l.caption),1)):V("",!0)]))),128)),vt.value.length===0?(m(),g("div",Bo," 请上传或拖入会议图片 ")):V("",!0)],512)])])):V("",!0)]}),_:1})])}}}),Qo=zn(Mo,[["__scopeId","data-v-491704cd"]]);export{Qo as default};
