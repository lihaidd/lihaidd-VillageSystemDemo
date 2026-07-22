var be=Object.defineProperty,he=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var De=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var X=(f,p,o)=>p in f?be(f,p,{enumerable:!0,configurable:!0,writable:!0,value:o}):f[p]=o,P=(f,p)=>{for(var o in p||(p={}))De.call(p,o)&&X(f,o,p[o]);if(G)for(var o of G(p))we.call(p,o)&&X(f,o,p[o]);return f},$=(f,p)=>he(f,ve(p));var w=(f,p,o)=>new Promise((u,_)=>{var k=b=>{try{g(o.next(b))}catch(x){_(x)}},q=b=>{try{g(o.throw(b))}catch(x){_(x)}},g=b=>b.done?u(b.value):Promise.resolve(b.value).then(k,q);g((o=o.apply(f,p)).next())});import{B as ke,D as xe,r as Se,$ as Ae,P as Ve,f as Ce,H as Ee,X as Me,V as qe,a8 as Ne,a9 as Pe,g as $e,u as Ue,N as m,O as Ye}from"./element-plus-core-DtFjj_wP.js";import{w as Be,ay as ze,ab as J,ad as A,g as U,a5 as Te,a9 as h,l as V,s as r,aH as s,i as n,F as E,af as M,j as B,r as y,am as i,Y as Le}from"./vue-chunks-DUFRzBE-.js";import{g as K}from"./index-4Drg_J-Y.js";import{s as Re,b as Fe,e as Oe,f as Ie}from"./index-CWQQpDJt.js";import{a as We}from"./index-DTTM75Uv.js";import"./utility-vendor-DnDVyXfL.js";import"./element-plus-icons-Dw4cNhHN.js";import"./iconify-vendor-DPs8vxWM.js";import"./tauri-vendor-BBucQyPs.js";const He={class:"public-welfare-summary"},je={class:"card-header"},Ge={class:"query-form query-filter-sticky"},Xe={id:"print-area",class:"print-content"},Je={class:"print-header"},Ke={class:"print-info"},Qe={class:"report-meta-line"},Ze={class:"screen-only"},et={class:"print-only"},tt={class:"print-attendance-days"},nt={class:"table-summary"},at={class:"print-header"},lt={class:"print-info"},ot={class:"report-meta-line"},rt={class:"report-table"},st={class:"table-summary"},it=Be({__name:"Summary",setup(f){const p=ze(),o=J({month:new Date().toISOString().slice(0,7),department:"农业农村部门"}),u=J({title:"",reportingUnit:"",reportDate:new Date().toISOString().slice(0,10)}),_=A([]),k=A(!1),q=A([]),g=A([]),b=A(!1),x=A(!1),z=A(null),T=["人社部门","农业农村部门"],L=U(()=>{if(!o.month)return"";const[t,e]=o.month.split("-");return`${t}年${e}月`}),R=U(()=>`乡村公益性岗位出勤天数和拟拨付岗位补贴金额汇总表（${L.value}）`),F=U(()=>{if(!u.reportDate)return"____年____月____日";const[t,e,a]=u.reportDate.split("-");return`${t}年${e}月${a}日`}),Y=t=>Number(t||0).toFixed(2),N=U(()=>{const t=_.value.reduce((e,a)=>e+Number(a.subsidyAmount||0),0);return{personCount:_.value.length,amount:Y(t)}}),O=t=>{const e=Number(t.attendanceDays||0),a=Number(t.subsidyStandard||0),d=Number(t.requiredAttendanceDays||30);return d<=0?0:a/d*e},Q=t=>{t.subsidyAmount=O(t)},Z=()=>{b.value||(u.title=R.value)},ee=()=>{p.push("/rural-revitalization/public-welfare-post")},te=()=>{if(!_.value.length){m.warning("暂无可预览数据");return}x.value=!0},ne=()=>w(null,null,function*(){var d;yield Le();const t=z.value;if(!t){m.error("未找到汇总表预览内容");return}const e=document.createElement("iframe");e.style.position="fixed",e.style.right="0",e.style.bottom="0",e.style.width="0",e.style.height="0",e.style.border="0",document.body.appendChild(e);const a=e.contentDocument||((d=e.contentWindow)==null?void 0:d.document);if(!a||!e.contentWindow){document.body.removeChild(e),m.error("打印预览初始化失败");return}a.open(),a.write(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${u.title||"公益性岗位汇总表"}</title>
        <style>${ae("landscape")}</style>
      </head>
      <body>${t.outerHTML}</body>
    </html>
  `),a.close(),window.setTimeout(()=>{var c,v;(c=e.contentWindow)==null||c.focus(),(v=e.contentWindow)==null||v.print(),window.setTimeout(()=>{var C;(C=e.parentNode)==null||C.removeChild(e)},1200)},200)}),ae=t=>`
  @page {
    size: A4 ${t};
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
    font-size: 18pt;
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
  .report-meta-line {
    display: flex;
    gap: 5em;
    align-items: center;
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
  .report-sign-line {
    display: flex;
    gap: 2em;
    margin-top: 20px;
    color: #000;
    font-size: 12pt;
    line-height: 1.8;
  }
  .sign-field {
    display: inline-flex;
    align-items: center;
  }
  .sign-reporter .sign-blank {
    display: inline-block;
    width: 4em;
  }
  .sign-phone .sign-blank {
    display: inline-block;
    width: 14ch;
  }
`,le=()=>{if(!o.month)return null;const[t,e]=o.month.split("-").map(Number);if(!t||!e)return null;const a=new Date(t,e-1,1),d=new Date(t,e,0);return{start:a,end:d}},I=t=>{if(!t)return null;const[e,a,d]=t.split("-").map(Number);return!e||!a||!d?null:new Date(e,a-1,d)},W=t=>{const e=le();if(!e)return!0;const a=I(t.contractStartDate),d=I(t.contractEndDate);return!a||!d?!1:a<=e.end&&d>=e.start},oe=()=>w(null,null,function*(){try{const t=yield K("使用单位");q.value=(t.data||[]).map(e=>e.value).filter(Boolean)}catch(t){m.error((t==null?void 0:t.message)||"加载使用单位字典失败")}}),re=()=>w(null,null,function*(){try{const e=((yield K("公益性岗位开发主管部门")).data||[]).map(a=>a.value).filter(Boolean);g.value=e.length?e:T}catch(t){g.value=T,m.error((t==null?void 0:t.message)||"加载公益性岗位开发主管部门字典失败")}o.department&&!g.value.includes(o.department)&&g.value.length&&(o.department=g.value[0])}),se=()=>w(null,null,function*(){if(_.value.length===0){m.warning("没有可保存的台账数据");return}if(ie()){m.warning("不可保存未来月份台账");return}try{const t=_.value.map(a=>({personId:a.id,name:a.name,idCard:a.idCard,postName:a.postName,attendanceDays:a.attendanceDays,requiredAttendanceDays:Number(a.requiredAttendanceDays||30),dailySubsidy:Number(a.subsidyStandard)/Number(a.requiredAttendanceDays||30),subsidyAmount:a.subsidyAmount,contractStartDate:a.contractStartDate,contractEndDate:a.contractEndDate})),e=yield Re(o.month,o.department,t);m.success(e),k.value=!0}catch(t){m.error((t==null?void 0:t.message)||"保存台账失败")}}),ie=()=>{if(!o.month)return!1;const[t,e]=o.month.split("-").map(Number);if(!t||!e)return!1;const a=new Date,d=new Date(a.getFullYear(),a.getMonth(),1);return new Date(t,e-1,1)>d},de=()=>w(null,null,function*(){if(!k.value){m.warning("当前月份没有已保存的台账");return}try{yield Ye.confirm(`确定要删除 ${L.value} ${o.department} 的台账吗？此操作不可恢复。`,"删除确认",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const t=yield Fe(o.month,o.department);m.success(t),k.value=!1}catch(t){t!=="cancel"&&m.error((t==null?void 0:t.message)||"删除台账失败")}}),ue=()=>w(null,null,function*(){try{const t=yield Oe(o.month,o.department);k.value=t.total>0,k.value&&(_.value=t.data.map(e=>$(P({},e),{requiredAttendanceDays:e.requiredAttendanceDays||30,subsidyStandard:e.dailySubsidy*(e.requiredAttendanceDays||30)})).filter(W))}catch(t){console.error("检查台账状态失败:",t)}}),pe=()=>w(null,null,function*(){const t=[];let e=1,a=0;const d=200;for(;;){const c=yield Ie({page:e,pageSize:d,department:o.department,activeMonth:o.month}),v=c.data||[];if(t.push(...v),a=Number(c.total||a||0)||0,v.length===0||a>0&&t.length>=a)break;e+=1}return a>0?t.slice(0,a):t}),H=()=>w(null,null,function*(){if(yield ue(),!k.value)try{const t=yield pe();_.value=t.filter(W).map(e=>$(P({},e),{requiredAttendanceDays:e.requiredAttendanceDays||30,attendanceDays:e.requiredAttendanceDays||30,subsidyAmount:O($(P({},e),{requiredAttendanceDays:e.requiredAttendanceDays||30,attendanceDays:e.requiredAttendanceDays||30}))}))}catch(t){m.error((t==null?void 0:t.message)||"加载数据失败")}});return Te(()=>{u.title=R.value,Promise.all([oe(),re()]).then(()=>H())}),(t,e)=>{const a=Ce,d=Se,c=xe,v=Ve,C=Ae,j=ke,ce=Ee,me=qe,ye=Me,S=Pe,fe=Ne,_e=$e,ge=Ue;return h(),V("div",He,[r(_e,{shadow:"never"},{header:s(()=>[n("div",je,[e[13]||(e[13]=n("span",null,"乡村公益性岗位出勤天数和拟拨付岗位补贴金额汇总表",-1)),n("div",null,[r(a,{onClick:ee},{default:s(()=>e[9]||(e[9]=[y("返回列表")])),_:1}),r(a,{type:"primary",onClick:se},{default:s(()=>e[10]||(e[10]=[y("保存台账")])),_:1}),r(a,{type:"danger",onClick:de},{default:s(()=>e[11]||(e[11]=[y("删除台账")])),_:1}),r(a,{type:"primary",onClick:te},{default:s(()=>e[12]||(e[12]=[y("生成预览")])),_:1})])])]),default:s(()=>[n("div",Ge,[r(j,{inline:!0,model:o},{default:s(()=>[r(c,{label:"选择月份"},{default:s(()=>[r(d,{modelValue:o.month,"onUpdate:modelValue":e[0]||(e[0]=l=>o.month=l),type:"month",placeholder:"选择月份",format:"YYYY-MM","value-format":"YYYY-MM",onChange:Z},null,8,["modelValue"])]),_:1}),r(c,{label:"开发主管部门"},{default:s(()=>[r(C,{modelValue:o.department,"onUpdate:modelValue":e[1]||(e[1]=l=>o.department=l),placeholder:"全部",clearable:"",style:{width:"150px"}},{default:s(()=>[(h(!0),V(E,null,M(g.value,l=>(h(),B(v,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(c,null,{default:s(()=>[r(a,{type:"primary",onClick:H},{default:s(()=>e[14]||(e[14]=[y("查询")])),_:1})]),_:1})]),_:1},8,["model"]),r(j,{inline:!0,model:u,class:"report-form"},{default:s(()=>[r(c,{label:"报表名称"},{default:s(()=>[r(ce,{modelValue:u.title,"onUpdate:modelValue":e[2]||(e[2]=l=>u.title=l),clearable:"",style:{width:"360px"},onInput:e[3]||(e[3]=l=>b.value=!0)},null,8,["modelValue"])]),_:1}),r(c,{label:"填报单位"},{default:s(()=>[r(C,{modelValue:u.reportingUnit,"onUpdate:modelValue":e[4]||(e[4]=l=>u.reportingUnit=l),filterable:"","allow-create":"",clearable:"",placeholder:"请选择使用单位",style:{width:"220px"}},{default:s(()=>[(h(!0),V(E,null,M(q.value,l=>(h(),B(v,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(c,{label:"填报时间"},{default:s(()=>[r(d,{modelValue:u.reportDate,"onUpdate:modelValue":e[5]||(e[5]=l=>u.reportDate=l),type:"date","value-format":"YYYY-MM-DD",style:{width:"160px"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),n("div",Xe,[n("div",Je,[n("h2",null,i(u.title),1),n("div",Ke,[n("p",Qe,[n("span",null,"填报单位（盖章）："+i(u.reportingUnit||"________________________"),1),n("span",null,"填报时间："+i(F.value),1)]),n("p",null,[n("span",Ze,[e[15]||(e[15]=y(" 开发主管部门： ")),r(ye,{modelValue:o.department,"onUpdate:modelValue":e[6]||(e[6]=l=>o.department=l)},{default:s(()=>[(h(!0),V(E,null,M(g.value,l=>(h(),B(me,{key:l,label:l},{default:s(()=>[y(i(l),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),n("span",et,"开发主管部门："+i(o.department||""),1)])])]),r(fe,{data:_.value,border:""},{default:s(()=>[r(S,{type:"index",label:"序号",width:"60",align:"center"}),r(S,{prop:"name",label:"姓名",width:"100",align:"center"}),r(S,{prop:"idCard",label:"身份证号码","min-width":"180"}),r(S,{prop:"requiredAttendanceDays",label:"规定出勤天数（天）",width:"130",align:"center"}),r(S,{label:"本月累计出勤天数（天）",width:"160",align:"center"},{default:s(({row:l})=>[r(C,{modelValue:l.attendanceDays,"onUpdate:modelValue":D=>l.attendanceDays=D,size:"small",style:{width:"80px"},onChange:D=>Q(l)},{default:s(()=>[(h(),V(E,null,M(31,D=>r(v,{key:D,label:D,value:D},null,8,["label","value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"]),n("span",tt,i(l.attendanceDays||l.requiredAttendanceDays||30),1)]),_:1}),r(S,{label:"补贴金额（元）",width:"120",align:"right"},{default:s(({row:l})=>[y(i(Y(l.subsidyAmount)),1)]),_:1}),r(S,{label:"协议起止时间","min-width":"180"},{default:s(({row:l})=>[y(i(l.contractStartDate||"-")+" 至 "+i(l.contractEndDate||"-"),1)]),_:1})]),_:1},8,["data"]),n("div",nt," 合计："+i(N.value.personCount)+"人，"+i(N.value.amount)+"元 ",1),e[16]||(e[16]=n("div",{class:"print-footer"},[n("p",{style:{color:"#666","font-size":"12px"}}," 默认按规定出勤天数满勤计算，可在表格中逐人修改。补贴金额 = 月补贴标准 ÷ 规定出勤天数 × 实际出勤天数 ")],-1))])]),_:1}),r(ge,{modelValue:x.value,"onUpdate:modelValue":e[8]||(e[8]=l=>x.value=l),title:"汇总表预览",width:"96%",top:"3vh",class:"report-preview-dialog","destroy-on-close":""},{footer:s(()=>[r(a,{onClick:e[7]||(e[7]=l=>x.value=!1)},{default:s(()=>e[20]||(e[20]=[y("关闭")])),_:1}),r(a,{type:"primary",onClick:ne},{default:s(()=>e[21]||(e[21]=[y("打印")])),_:1})]),default:s(()=>[n("div",{ref_key:"previewRef",ref:z,class:"report-print-page summary-print-page"},[n("div",at,[n("h2",null,i(u.title),1),n("div",lt,[n("p",ot,[n("span",null,"填报单位（盖章）："+i(u.reportingUnit||"________________________"),1),n("span",null,"填报时间："+i(F.value),1)]),n("p",null,"开发主管部门："+i(o.department||""),1)])]),n("table",rt,[e[17]||(e[17]=n("colgroup",null,[n("col",{style:{width:"7%"}}),n("col",{style:{width:"10%"}}),n("col",{style:{width:"25%"}}),n("col",{style:{width:"16%"}}),n("col",{style:{width:"12%"}}),n("col",{style:{width:"15%"}}),n("col",{style:{width:"15%"}})],-1)),e[18]||(e[18]=n("thead",null,[n("tr",null,[n("th",null,"序号"),n("th",null,"姓名"),n("th",null,"身份证号码"),n("th",null,"本月累计出勤天数（天）"),n("th",null,"补贴金额（元）"),n("th",{colspan:"2"},"协议时间起止时间")])],-1)),n("tbody",null,[(h(!0),V(E,null,M(_.value,(l,D)=>(h(),V("tr",{key:l.id||D},[n("td",null,i(D+1),1),n("td",null,i(l.name),1),n("td",null,i(l.idCard),1),n("td",null,i(l.attendanceDays||l.requiredAttendanceDays||30),1),n("td",null,i(Y(l.subsidyAmount))+"元",1),n("td",null,i(l.contractStartDate||"-"),1),n("td",null,i(l.contractEndDate||"-"),1)]))),128))])]),n("div",st," 合计："+i(N.value.personCount)+"人，"+i(N.value.amount)+"元 ",1),e[19]||(e[19]=n("div",{class:"report-sign-line"},[n("span",{class:"sign-field sign-reporter"},[y("填报人："),n("span",{class:"sign-blank"})]),n("span",{class:"sign-field sign-phone"},[y("联系电话："),n("span",{class:"sign-blank"})]),n("span",{class:"sign-field"},"审核人（签字）：")],-1))],512)]),_:1},8,["modelValue"])])}}}),ht=We(it,[["__scopeId","data-v-3c91b3e6"]]);export{ht as default};
