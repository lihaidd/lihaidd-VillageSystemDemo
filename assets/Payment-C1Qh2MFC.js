var it=Object.defineProperty,st=Object.defineProperties;var dt=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var ut=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable;var Y=(c,d,r)=>d in c?it(c,d,{enumerable:!0,configurable:!0,writable:!0,value:r}):c[d]=r,V=(c,d)=>{for(var r in d||(d={}))ut.call(d,r)&&Y(c,r,d[r]);if(U)for(var r of U(d))pt.call(d,r)&&Y(c,r,d[r]);return c},P=(c,d)=>st(c,dt(d));var x=(c,d,r)=>new Promise((u,y)=>{var C=_=>{try{w(r.next(_))}catch(b){y(b)}},v=_=>{try{w(r.throw(_))}catch(b){y(b)}},w=_=>_.done?u(_.value):Promise.resolve(_.value).then(C,v);w((r=r.apply(c,d)).next())});import{B as ct,D as _t,r as mt,f as yt,$ as ft,P as bt,a6 as ht,H as gt,a8 as vt,a9 as wt,g as xt,u as Dt,N as D}from"./element-plus-core-DtFjj_wP.js";import{w as kt,ay as Ct,ab as B,ad as S,g as z,a5 as Tt,a9 as k,l as E,s as o,aH as i,i as n,r as g,F as $,af as F,j as At,am as s,Y as St}from"./vue-chunks-DUFRzBE-.js";import{g as Et}from"./index-4Drg_J-Y.js";import{f as Vt}from"./index-CWQQpDJt.js";import{a as Pt}from"./index-DTTM75Uv.js";import"./utility-vendor-DnDVyXfL.js";import"./element-plus-icons-Dw4cNhHN.js";import"./iconify-vendor-DPs8vxWM.js";import"./tauri-vendor-BBucQyPs.js";const It={class:"public-welfare-payment"},Nt={class:"card-header"},qt={class:"query-form query-filter-sticky"},Mt={id:"print-area",class:"print-content"},Ut={class:"print-header"},Yt={class:"print-info"},Bt={class:"table-summary"},zt={class:"print-footer"},$t={class:"print-header"},Ft={class:"print-info"},Rt={class:"report-table"},Wt={class:"table-summary"},Lt={class:"print-footer"},R="publicWelfarePost.payment.publicityText",I="公示期间，如对公示名单有异议，可向县振兴乡村局、县人力资源社会保障局反应，电话12345678，邮箱12345678@126.com。",Ot=kt({__name:"Payment",setup(c){const d=Ct(),r=B({month:new Date().toISOString().slice(0,7)}),u=B({publicityUnit:"",publicityText:I,maskIdCard:!0}),y=S([]),C=S([]),v=S(!1),w=S(null),_=z(()=>{if(!r.month)return"";const[e,t]=r.month.split("-");return`${e}年${t}月`}),b=e=>Number(e||0).toFixed(2),W=e=>{const t=String(e||"").trim();return!u.maskIdCard||t.length<14?t:`${t.slice(0,6)}********${t.slice(14)}`},T=z(()=>{const e=y.value.reduce((t,l)=>t+Number(l.subsidyAmount||0),0);return{personCount:y.value.length,amount:b(e)}}),L=e=>{const t=Number(e.attendanceDays||e.requiredAttendanceDays),l=Number(e.requiredAttendanceDays),p=Number(e.subsidyStandard||0);return l<=0?0:p/l*t},O=()=>{const e=window.localStorage.getItem(R);u.publicityText=e||I},H=()=>{window.localStorage.setItem(R,u.publicityText||I)},X=()=>x(null,null,function*(){try{const e=yield Et("使用单位");C.value=(e.data||[]).map(t=>t.value).filter(Boolean)}catch(e){D.error((e==null?void 0:e.message)||"加载使用单位字典失败")}}),j=()=>{d.push("/rural-revitalization/public-welfare-post")},G=()=>{if(!y.value.length){D.warning("暂无可预览数据");return}v.value=!0},K=()=>x(null,null,function*(){var p;yield St();const e=w.value;if(!e){D.error("未找到公示表预览内容");return}const t=document.createElement("iframe");t.style.position="fixed",t.style.right="0",t.style.bottom="0",t.style.width="0",t.style.height="0",t.style.border="0",document.body.appendChild(t);const l=t.contentDocument||((p=t.contentWindow)==null?void 0:p.document);if(!l||!t.contentWindow){document.body.removeChild(t),D.error("打印预览初始化失败");return}l.open(),l.write(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${_.value||""}乡村公益性岗位补贴发放公示表</title>
        <style>${J("portrait")}</style>
      </head>
      <body>${e.outerHTML}</body>
    </html>
  `),l.close(),window.setTimeout(()=>{var m,f;(m=t.contentWindow)==null||m.focus(),(f=t.contentWindow)==null||f.print(),window.setTimeout(()=>{var A;(A=t.parentNode)==null||A.removeChild(t)},1200)},200)}),J=e=>`
  @page {
    size: A4 ${e};
    margin: 15mm 10mm;
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    color: #000;
    background: #fff;
    font-family: "Microsoft YaHei", "SimSun", Arial, sans-serif;
    font-size: 12pt;
  }
  .report-print-page {
    width: 100%;
  }
  .print-header {
    margin-bottom: 12px;
    text-align: center;
  }
  .print-header h2 {
    margin: 0 0 20pt;
    font-size: 22pt;
    font-weight: 700;
    line-height: 1.3;
  }
  .print-info {
    text-align: left;
  }
  .print-info p {
    margin: 6px 0;
    font-size: 12pt;
    line-height: 1.5;
  }
  .report-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    page-break-inside: auto;
  }
  .report-table thead {
    display: table-header-group;
  }
  .report-table tbody {
    display: table-row-group;
  }
  .report-table tr {
    page-break-inside: avoid;
    break-inside: avoid;
  }
  .report-table th,
  .report-table td {
    height: 28pt;
    border: 1px solid #000;
    padding: 0 6px;
    color: #000;
    font-size: 14pt;
    font-weight: 400;
    line-height: 28pt;
    text-align: center;
    vertical-align: middle;
    word-break: break-all;
  }
  .report-table thead th {
    font-weight: 400 !important;
  }
  .table-summary {
    margin-top: 10px;
    color: #000;
    font-size: 14pt;
    font-weight: 700;
    text-align: right;
  }
  .print-footer {
    margin-top: 20px;
  }
  .print-footer p {
    margin: 0;
    color: #000;
    font-size: 12pt;
    line-height: 1.8;
  }
`,Q=()=>{if(!r.month)return null;const[e,t]=r.month.split("-").map(Number);if(!e||!t)return null;const l=new Date(e,t-1,1),p=new Date(e,t,0);return{start:l,end:p}},N=e=>{if(!e)return null;const[t,l,p]=e.split("-").map(Number);return!t||!l||!p?null:new Date(t,l-1,p)},Z=e=>{const t=Q();if(!t)return!0;const l=N(e.contractStartDate),p=N(e.contractEndDate);return!l||!p?!1:l<=t.end&&p>=t.start},tt=()=>x(null,null,function*(){const e=[];let t=1,l=0;const p=200;for(;;){const m=yield Vt({page:t,pageSize:p,activeMonth:r.month}),f=m.data||[];if(e.push(...f),l=Number(m.total||l||0)||0,f.length===0||l>0&&e.length>=l)break;t+=1}return l>0?e.slice(0,l):e}),q=()=>x(null,null,function*(){try{const e=yield tt();y.value=e.filter(Z).map(t=>P(V({},t),{requiredAttendanceDays:t.requiredAttendanceDays||30,attendanceDays:t.requiredAttendanceDays||30,subsidyAmount:L(P(V({},t),{requiredAttendanceDays:t.requiredAttendanceDays||30}))}))}catch(e){D.error((e==null?void 0:e.message)||"加载数据失败")}});return Tt(()=>{O(),Promise.all([X(),q()])}),(e,t)=>{const l=yt,p=mt,m=_t,f=ct,A=bt,et=ft,nt=ht,lt=gt,h=wt,at=vt,ot=xt,rt=Dt;return k(),E("div",It,[o(ot,{shadow:"never"},{header:i(()=>[n("div",Nt,[t[8]||(t[8]=n("span",null,"乡村公益性岗位补贴发放公示表",-1)),n("div",null,[o(l,{onClick:j},{default:i(()=>t[6]||(t[6]=[g("返回列表")])),_:1}),o(l,{type:"primary",onClick:G},{default:i(()=>t[7]||(t[7]=[g("生成预览")])),_:1})])])]),default:i(()=>[n("div",qt,[o(f,{inline:!0,model:r},{default:i(()=>[o(m,{label:"选择月份"},{default:i(()=>[o(p,{modelValue:r.month,"onUpdate:modelValue":t[0]||(t[0]=a=>r.month=a),type:"month",placeholder:"选择月份",format:"YYYY-MM","value-format":"YYYY-MM"},null,8,["modelValue"])]),_:1}),o(m,null,{default:i(()=>[o(l,{type:"primary",onClick:q},{default:i(()=>t[9]||(t[9]=[g("查询")])),_:1})]),_:1})]),_:1},8,["model"]),o(f,{model:u,class:"payment-form","label-width":"92px"},{default:i(()=>[o(m,{label:"公示单位"},{default:i(()=>[o(et,{modelValue:u.publicityUnit,"onUpdate:modelValue":t[1]||(t[1]=a=>u.publicityUnit=a),filterable:"","allow-create":"",clearable:"",placeholder:"请选择使用单位",style:{width:"260px"}},{default:i(()=>[(k(!0),E($,null,F(C.value,a=>(k(),At(A,{key:a,label:a,value:a},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(m,{label:"身份证脱敏"},{default:i(()=>[o(nt,{modelValue:u.maskIdCard,"onUpdate:modelValue":t[2]||(t[2]=a=>u.maskIdCard=a),"active-text":"脱敏","inactive-text":"正常显示"},null,8,["modelValue"])]),_:1}),o(m,{label:"公示文案"},{default:i(()=>[o(lt,{modelValue:u.publicityText,"onUpdate:modelValue":t[3]||(t[3]=a=>u.publicityText=a),type:"textarea",rows:2,onBlur:H},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),n("div",Mt,[n("div",Ut,[n("h2",null,s(_.value)+"乡村公益性岗位补贴发放公示表",1),n("div",Yt,[n("p",null,"公示单位（盖章）："+s(u.publicityUnit||"________________________"),1),t[10]||(t[10]=n("p",null,"公示时间：____年____月____日 至 ____年____月____日（共____天）",-1))])]),o(at,{data:y.value,border:""},{default:i(()=>[o(h,{type:"index",label:"序号","min-width":"56",align:"center"}),o(h,{prop:"name",label:"姓名","min-width":"90",align:"center"}),o(h,{prop:"idCard",label:"身份证号码","min-width":"210"}),o(h,{prop:"postName",label:"岗位名称","min-width":"150"}),o(h,{prop:"requiredAttendanceDays",label:"规定出勤天数（天）","min-width":"130",align:"center"}),o(h,{label:"本月累计出勤天数（天）","min-width":"150",align:"center"},{default:i(({row:a})=>[g(s(a.attendanceDays||a.requiredAttendanceDays||30),1)]),_:1}),o(h,{label:"补贴金额（元）","min-width":"120",align:"right"},{default:i(({row:a})=>[g(s(b(a.subsidyAmount)),1)]),_:1})]),_:1},8,["data"]),n("div",Bt," 合计："+s(T.value.personCount)+"人，"+s(T.value.amount)+"元 ",1),n("div",zt,[n("p",null,s(u.publicityText),1)])])]),_:1}),o(rt,{modelValue:v.value,"onUpdate:modelValue":t[5]||(t[5]=a=>v.value=a),title:"公示表预览",width:"96%",top:"3vh",class:"report-preview-dialog","destroy-on-close":""},{footer:i(()=>[o(l,{onClick:t[4]||(t[4]=a=>v.value=!1)},{default:i(()=>t[14]||(t[14]=[g("关闭")])),_:1}),o(l,{type:"primary",onClick:K},{default:i(()=>t[15]||(t[15]=[g("打印")])),_:1})]),default:i(()=>[n("div",{ref_key:"previewRef",ref:w,class:"report-print-page payment-print-page"},[n("div",$t,[n("h2",null,s(_.value)+"乡村公益性岗位补贴发放公示表",1),n("div",Ft,[n("p",null,"公示单位（盖章）："+s(u.publicityUnit||"________________________"),1),t[11]||(t[11]=n("p",null,"公示时间：____年____月____日 至 ____年____月____日（共____天）",-1))])]),n("table",Rt,[t[12]||(t[12]=n("colgroup",null,[n("col",{style:{width:"7%"}}),n("col",{style:{width:"10%"}}),n("col",{style:{width:"28%"}}),n("col",{style:{width:"20%"}}),n("col",{style:{width:"17%"}}),n("col",{style:{width:"18%"}})],-1)),t[13]||(t[13]=n("thead",null,[n("tr",null,[n("th",null,"序号"),n("th",null,"姓名"),n("th",null,"身份证号码"),n("th",null,"岗位名称"),n("th",null,"本月累计出勤天数（天）"),n("th",null,"补贴金额（元）")])],-1)),n("tbody",null,[(k(!0),E($,null,F(y.value,(a,M)=>(k(),E("tr",{key:a.id||M},[n("td",null,s(M+1),1),n("td",null,s(a.name),1),n("td",null,s(W(a.idCard)),1),n("td",null,s(a.postName),1),n("td",null,s(a.attendanceDays||a.requiredAttendanceDays||30),1),n("td",null,s(b(a.subsidyAmount))+"元",1)]))),128))])]),n("div",Wt," 合计："+s(T.value.personCount)+"人，"+s(T.value.amount)+"元 ",1),n("div",Lt,[n("p",null,s(u.publicityText),1)])],512)]),_:1},8,["modelValue"])])}}}),ne=Pt(Ot,[["__scopeId","data-v-d06671b3"]]);export{ne as default};
