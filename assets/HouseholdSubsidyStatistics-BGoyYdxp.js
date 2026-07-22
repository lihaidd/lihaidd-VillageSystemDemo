var M=(L,T,N)=>new Promise((b,f)=>{var H=r=>{try{g(N.next(r))}catch(m){f(m)}},S=r=>{try{g(N.throw(r))}catch(m){f(m)}},g=r=>r.done?b(r.value):Promise.resolve(r.value).then(H,S);g((N=N.apply(L,T)).next())});import{f as ne,g as ue,B as ie,D as ce,$ as pe,P as me,Z as he,l as ve,a8 as be,a9 as ye,N as B}from"./element-plus-core-DtFjj_wP.js";import{w as fe,ax as ge,ay as we,ad as x,ab as _e,g as $,a5 as Ce,a9 as A,l as z,s as l,aH as o,i as c,am as y,r as v,F as R,af as G,j,Z as xe}from"./vue-chunks-DUFRzBE-.js";import{S as $e}from"./index-Bpy5Nc97.js";import{k as Ae,h as Ne}from"./index-X4G8GPv_.js";import{e as He}from"./export2excel-Cb80QExH.js";import{a as ke}from"./index-DTTM75Uv.js";import"./utility-vendor-DnDVyXfL.js";import"./element-plus-icons-Dw4cNhHN.js";import"./xlsx-DyrS5Olb.js";import"./iconify-vendor-DPs8vxWM.js";import"./tauri-vendor-BBucQyPs.js";const Se={class:"household-subsidy-page"},Ie={class:"page-toolbar"},Fe={class:"title-wrap"},Te={class:"toolbar-actions"},Ee={class:"metric-label"},Me={class:"metric-value"},ze={class:"card-header"},De={class:"header-meta"},Ve=fe({__name:"HouseholdSubsidyStatistics",setup(L){const T=ge(),N=we(),b=new Date().getFullYear(),f=()=>({overview:{year:b,householdId:"",householdHeadName:"",householdHeadIdCard:"",villageGroup:"",householdMemberCount:0,subsidyMemberCount:0,recordCount:0,typeCount:0,approvedAmount:0,paidAmount:0},summaries:[],details:[]}),H=x(!1),S=x(!1),g=x(),r=x(f()),m=x([]),w=x(String(T.query.householdId||"")),_=x(null),C=_e({year:Number(T.query.year||b)||b}),q=$(()=>!!w.value),P=$(()=>{const a=new Set;for(let e=b+1;e>=b-6;e-=1)a.add(e);return a.add(C.year),Array.from(a).sort((e,t)=>t-e)}),O=$({get:()=>String(C.year||""),set:a=>{const e=Number(String(a||"").replace(/[^\d]/g,""));C.year=Number.isFinite(e)&&e>0?e:b}}),s=$(()=>r.value.overview),k=$(()=>{var e;return`${s.value.householdHeadName||((e=_.value)==null?void 0:e.householdHeadName)||"未选择"}户${C.year}年度政策性补贴统计表`}),D=$(()=>[s.value.villageGroup,s.value.householdHeadIdCard?`户主身份证：${s.value.householdHeadIdCard}`:"",s.value.householdId?`户编号：${s.value.householdId}`:""].filter(Boolean).join(" / ")),U=$(()=>[{label:"全户成员",value:h(s.value.householdMemberCount)},{label:"获补成员",value:h(s.value.subsidyMemberCount)},{label:"补贴类型",value:h(s.value.typeCount)},{label:"记录数",value:h(s.value.recordCount)},{label:"申报金额",value:p(s.value.approvedAmount)},{label:"实发金额",value:p(s.value.paidAmount)}]),h=a=>Number(a||0).toLocaleString("zh-CN",{maximumFractionDigits:0}),p=a=>Number(a||0).toLocaleString("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2}),Z=a=>{const e=a.householdHeadIdCard||"未填身份证",t=a.villageGroup?` / ${a.villageGroup}`:"";return`${a.householdHeadName} / ${e}${t}`},W=a=>{const e=String(a||"").trim();if(g.value&&window.clearTimeout(g.value),e.length<2){m.value=[];return}g.value=window.setTimeout(()=>M(null,null,function*(){S.value=!0;try{const t=yield Ae(e);m.value=Array.isArray(t.data)?t.data:[]}catch(t){console.error("搜索户主失败:",t),B.error("搜索户主失败")}finally{S.value=!1}}),250)},J=a=>{_.value=m.value.find(e=>e.householdId===a)||null,I()},K=()=>{_.value=null,r.value=f()},I=()=>M(null,null,function*(){if(!w.value){r.value=f();return}H.value=!0;try{const a=yield Ne({year:C.year,householdId:w.value});r.value=a.data||f(),!_.value&&r.value.overview.householdId&&(_.value={householdId:r.value.overview.householdId,householdHeadName:r.value.overview.householdHeadName,householdHeadIdCard:r.value.overview.householdHeadIdCard,villageGroup:r.value.overview.villageGroup,memberCount:r.value.overview.householdMemberCount},m.value=[_.value])}catch(a){console.error("获取全户补贴统计失败:",a),B.error((a==null?void 0:a.message)||"获取全户补贴统计失败")}finally{H.value=!1}}),Q=()=>{C.year=b,w.value="",_.value=null,m.value=[],r.value=f()},X=({columns:a,data:e})=>a.map((t,u)=>u===0?"":u===1?"合计":t.property==="recordCount"?h(s.value.recordCount):t.property==="memberCount"?h(s.value.subsidyMemberCount):t.label==="申报金额"?p(s.value.approvedAmount):t.label==="实发金额"?p(s.value.paidAmount):(e.length,"")),ee=()=>M(null,null,function*(){const a=r.value.summaries.map((t,u)=>[u+1,t.subsidyType,t.memberCount,t.recordCount,Number(Number(t.approvedAmount||0).toFixed(2)),Number(Number(t.paidAmount||0).toFixed(2))]),e=r.value.details.map((t,u)=>[u+1,t.name,t.idCard,t.subsidyType,t.batchNo,t.cardholder||"",t.bankAccount,Number(Number(t.approvedAmount||0).toFixed(2)),Number(Number(t.paidAmount||0).toFixed(2)),t.paymentDate]);yield He({data:[[k.value],[D.value],[],["年度补贴类型合计"],["序号","补贴类型","涉及成员","记录数","申报金额","实发金额"],...a,["","合计",s.value.subsidyMemberCount,s.value.recordCount,s.value.approvedAmount,s.value.paidAmount],[],["补贴明细"],["序号","成员姓名","身份证号","补贴类型","批次","持卡人","银行账号","申报金额","实发金额","发放日期"],...e],filename:k.value,autoWidth:!0,textColumns:[3,8]})}),n=a=>String(a!=null?a:"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),te=a=>{const e=document.createElement("iframe");e.style.position="fixed",e.style.right="0",e.style.bottom="0",e.style.width="0",e.style.height="0",e.style.border="0",e.style.opacity="0",document.body.appendChild(e);const t=e.contentWindow,u=t==null?void 0:t.document;if(!t||!u){e.remove(),B.error("打印初始化失败，请稍后重试");return}u.open(),u.write(a),u.close();const F=()=>{window.setTimeout(()=>{e.remove()},500)};t.onafterprint=F,window.setTimeout(()=>{t.focus(),t.print(),F()},120)},ae=()=>{const a=r.value.summaries.map((t,u)=>`
        <tr>
          <td class="center">${u+1}</td>
          <td>${n(t.subsidyType)}</td>
          <td class="number">${n(h(t.memberCount))}</td>
          <td class="number">${n(h(t.recordCount))}</td>
          <td class="number">${n(p(t.approvedAmount))}</td>
          <td class="number">${n(p(t.paidAmount))}</td>
        </tr>
      `).join(""),e=r.value.details.map((t,u)=>`
        <tr>
          <td class="center">${u+1}</td>
          <td>${n(t.name)}</td>
          <td>${n(t.idCard)}</td>
          <td>${n(t.subsidyType)}</td>
          <td>${n(t.batchNo)}</td>
          <td>${n(t.cardholder||"")}</td>
          <td>${n(t.bankAccount)}</td>
          <td class="number">${n(p(t.approvedAmount))}</td>
          <td class="number">${n(p(t.paidAmount))}</td>
          <td>${n(t.paymentDate)}</td>
        </tr>
      `).join("");te(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${n(k.value)}</title>
        <style>
          body { font-family: "Microsoft YaHei", Arial, sans-serif; color: #111827; margin: 24px; }
          h1 { text-align: center; font-size: 22px; margin: 0 0 10px; }
          .meta { text-align: center; color: #4b5563; font-size: 12px; margin-bottom: 14px; }
          h2 { font-size: 15px; margin: 16px 0 8px; }
          table { width: 100%; border-collapse: collapse; font-size: 12px; table-layout: fixed; }
          th, td { border: 1px solid #d0d5dd; padding: 7px 8px; text-align: left; word-break: break-all; }
          th { background: #f2f4f7; font-weight: 700; }
          .number { text-align: right; }
          .center { text-align: center; }
          .total td { font-weight: 700; background: #f8fafc; }
          @page { size: A4 landscape; margin: 12mm; }
          @media print { body { margin: 0; } }
        </style>
      </head>
      <body>
        <h1>${n(k.value)}</h1>
        <div class="meta">${n(D.value)}</div>
        <h2>年度补贴类型合计</h2>
        <table>
          <thead>
            <tr>
              <th style="width: 46px;">序号</th>
              <th>补贴类型</th>
              <th style="width: 72px;">涉及成员</th>
              <th style="width: 72px;">记录数</th>
              <th style="width: 110px;">申报金额</th>
              <th style="width: 110px;">实发金额</th>
            </tr>
          </thead>
          <tbody>
            ${a||'<tr><td colspan="6" class="center">暂无数据</td></tr>'}
            <tr class="total">
              <td></td>
              <td>合计</td>
              <td class="number">${n(h(s.value.subsidyMemberCount))}</td>
              <td class="number">${n(h(s.value.recordCount))}</td>
              <td class="number">${n(p(s.value.approvedAmount))}</td>
              <td class="number">${n(p(s.value.paidAmount))}</td>
            </tr>
          </tbody>
        </table>
        <h2>补贴明细</h2>
        <table>
          <thead>
            <tr>
              <th style="width: 46px;">序号</th>
              <th style="width: 72px;">成员姓名</th>
              <th>身份证号</th>
              <th>补贴类型</th>
              <th style="width: 70px;">批次</th>
              <th style="width: 72px;">持卡人</th>
              <th>银行账号</th>
              <th style="width: 92px;">申报金额</th>
              <th style="width: 92px;">实发金额</th>
              <th style="width: 84px;">发放日期</th>
            </tr>
          </thead>
          <tbody>${e||'<tr><td colspan="10" class="center">暂无数据</td></tr>'}</tbody>
        </table>
      </body>
    </html>
  `)},le=()=>{N.push("/rural-revitalization/agricultural-subsidy")};return Ce(()=>{w.value&&I()}),(a,e)=>{const t=ne,u=me,F=pe,V=ce,oe=ie,E=ue,re=ve,se=he,i=ye,Y=be;return A(),z("div",Se,[l($e,{class:"household-sticky-panel query-filter-sticky"},{default:o(()=>[c("div",Ie,[c("div",Fe,[e[3]||(e[3]=c("div",{class:"title-mark"},"户",-1)),c("div",null,[e[2]||(e[2]=c("h2",null,"全户补贴统计",-1)),c("p",null,y(k.value),1)])]),c("div",Te,[l(t,{onClick:le},{default:o(()=>e[4]||(e[4]=[v("返回台账")])),_:1}),l(t,{disabled:!q.value,onClick:ee},{default:o(()=>e[5]||(e[5]=[v("导出台账")])),_:1},8,["disabled"]),l(t,{disabled:!q.value,onClick:ae},{default:o(()=>e[6]||(e[6]=[v("打印台账")])),_:1},8,["disabled"]),l(t,{type:"primary",loading:H.value,onClick:I},{default:o(()=>e[7]||(e[7]=[v("刷新")])),_:1},8,["loading"])])]),l(E,{shadow:"never",class:"filter-card"},{default:o(()=>[l(oe,{model:C,"label-width":"78px",size:"small",class:"filter-form"},{default:o(()=>[l(V,{label:"年度"},{default:o(()=>[l(F,{modelValue:O.value,"onUpdate:modelValue":e[0]||(e[0]=d=>O.value=d),filterable:"","allow-create":"","default-first-option":"",style:{width:"140px"},onChange:I},{default:o(()=>[(A(!0),z(R,null,G(P.value,d=>(A(),j(u,{key:d,label:d,value:String(d)},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(V,{label:"户主姓名"},{default:o(()=>[l(F,{modelValue:w.value,"onUpdate:modelValue":e[1]||(e[1]=d=>w.value=d),clearable:"",filterable:"",remote:"","reserve-keyword":"","remote-method":W,loading:S.value,placeholder:"输入2个字搜索户主",style:{width:"280px"},onChange:J,onClear:K},{default:o(()=>[(A(!0),z(R,null,G(m.value,d=>(A(),j(u,{key:d.householdId,label:Z(d),value:d.householdId},null,8,["label","value"]))),128))]),_:1},8,["modelValue","loading"])]),_:1}),l(V,null,{default:o(()=>[l(t,{type:"primary",loading:H.value,onClick:I},{default:o(()=>e[8]||(e[8]=[v("查询")])),_:1},8,["loading"]),l(t,{onClick:Q},{default:o(()=>e[9]||(e[9]=[v("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),l(se,{gutter:12,class:"metric-row"},{default:o(()=>[(A(!0),z(R,null,G(U.value,(d,de)=>(A(),j(re,{key:d.label,xs:12,sm:8,md:4},{default:o(()=>[l(E,{shadow:"never",class:"metric-card"},{default:o(()=>[c("span",{class:xe(["metric-accent",`accent-${de%6}`])},null,2),c("div",Ee,y(d.label),1),c("div",Me,y(d.value),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),l(E,{shadow:"never",class:"ledger-card"},{header:o(()=>[c("div",ze,[c("span",null,y(k.value),1),c("span",De,y(D.value),1)])]),default:o(()=>[l(Y,{data:r.value.summaries,border:"",size:"small","show-summary":"","summary-method":X},{default:o(()=>[l(i,{type:"index",label:"序号",width:"60",align:"center"}),l(i,{prop:"subsidyType",label:"补贴类型","min-width":"180"}),l(i,{prop:"memberCount",label:"涉及成员",width:"100",align:"right"}),l(i,{prop:"recordCount",label:"记录数",width:"90",align:"right"}),l(i,{label:"申报金额",width:"140",align:"right"},{default:o(({row:d})=>[v(y(p(d.approvedAmount)),1)]),_:1}),l(i,{label:"实发金额",width:"140",align:"right"},{default:o(({row:d})=>[v(y(p(d.paidAmount)),1)]),_:1})]),_:1},8,["data"])]),_:1}),l(E,{shadow:"never",class:"ledger-card"},{header:o(()=>e[10]||(e[10]=[c("div",{class:"card-header"},[c("span",null,"补贴明细"),c("span",{class:"header-meta"},"按同一年度全户成员明细列示，不区分批次合并统计")],-1)])),default:o(()=>[l(Y,{data:r.value.details,border:"",size:"small"},{default:o(()=>[l(i,{type:"index",label:"序号",width:"60",align:"center"}),l(i,{prop:"name",label:"成员姓名",width:"100"}),l(i,{prop:"idCard",label:"身份证号","min-width":"170","show-overflow-tooltip":""}),l(i,{prop:"subsidyType",label:"补贴类型","min-width":"170"}),l(i,{prop:"batchNo",label:"批次",width:"100"}),l(i,{prop:"cardholder",label:"持卡人",width:"100"}),l(i,{prop:"bankAccount",label:"银行账号","min-width":"160","show-overflow-tooltip":""}),l(i,{label:"申报金额",width:"120",align:"right"},{default:o(({row:d})=>[v(y(p(d.approvedAmount)),1)]),_:1}),l(i,{label:"实发金额",width:"120",align:"right"},{default:o(({row:d})=>[v(y(p(d.paidAmount)),1)]),_:1}),l(i,{prop:"paymentDate",label:"发放日期",width:"120"})]),_:1},8,["data"])]),_:1})])}}}),Je=ke(Ve,[["__scopeId","data-v-02a87e2f"]]);export{Je as default};
