var rl=Object.defineProperty,dl=Object.defineProperties;var il=Object.getOwnPropertyDescriptors;var xe=Object.getOwnPropertySymbols;var ul=Object.prototype.hasOwnProperty,pl=Object.prototype.propertyIsEnumerable;var Se=(U,b,V)=>b in U?rl(U,b,{enumerable:!0,configurable:!0,writable:!0,value:V}):U[b]=V,pe=(U,b)=>{for(var V in b||(b={}))ul.call(b,V)&&Se(U,V,b[V]);if(xe)for(var V of xe(b))pl.call(b,V)&&Se(U,V,b[V]);return U},me=(U,b)=>dl(U,il(b));var x=(U,b,V)=>new Promise((ee,H)=>{var le=S=>{try{O(V.next(S))}catch(I){H(I)}},ae=S=>{try{O(V.throw(S))}catch(I){H(I)}},O=S=>S.done?ee(S.value):Promise.resolve(S.value).then(le,ae);O((V=V.apply(U,b)).next())});import{B as ml,D as fl,r as vl,$ as cl,P as yl,H as gl,f as bl,a8 as _l,a9 as wl,ab as Vl,am as hl,S as Dl,g as kl,Z as Nl,l as Al,I as Ul,u as Tl,s as xl,t as Sl,af as Cl,ag as El,w as Ml,N as Y,O as Pl}from"./element-plus-core-DtFjj_wP.js";import{w as Rl,ay as zl,g as K,ad as w,ab as L,a5 as Il,a9 as r,l as _,i,am as u,s as a,aH as t,aJ as Yl,aK as Ce,F as k,af as N,j as g,r as v,k as M,aI as Bl}from"./vue-chunks-DUFRzBE-.js";import{j as Ee}from"./utility-vendor-DnDVyXfL.js";import{aj as Gl,v as fe,a as Ll}from"./index-B0wXDdYD.js";import{k as Ol,j as $l,u as jl,c as ql,i as Fl,a as Kl,e as Hl,n as Ql,o as Jl,g as Wl}from"./index-Dux5Coab.js";import"./element-plus-icons-Dw4cNhHN.js";import"./iconify-vendor-DPs8vxWM.js";import"./tauri-vendor-BBucQyPs.js";const Zl={class:"app-container governance-ledger query-page-compact"},Xl={class:"summary-grid"},ea={class:"summary-item pending"},la={class:"summary-item processing"},aa={class:"summary-item resolved"},ta={class:"summary-item closed"},oa={class:"summary-item archive"},na={key:0},sa={class:"pagination-wrap"},ra={class:"form-section"},da={class:"form-section"},ia={class:"option-extra"},ua={class:"option-extra"},pa={class:"form-section"},ma={class:"option-extra"},fa={class:"drawer-header"},va={key:0,class:"drawer-actions"},ca={key:0,class:"detail-panel governance-dispute-print"},ya={class:"detail-header"},ga={key:0},ba={key:1},_a={class:"operator"},wa={class:"form-section"},Va=Rl({__name:"index",setup(U){const b=Gl(),V=zl(),ee=K(()=>b.hasPermission("governanceDispute:add")),H=K(()=>b.hasPermission("governanceDispute:edit")),le=K(()=>b.hasPermission("governanceDispute:handle")),ae=K(()=>b.hasPermission("governanceDispute:delete")),O=K(()=>b.hasPermission("governanceDispute:export")),S=w(!1),I=w(!1),te=w(!1),ve=w([]),ce=w(0),$=w([]),c=L({page:1,pageSize:20,startDate:"",endDate:"",disputeType:"",status:"",hasMediationArchive:void 0,keyword:""}),E=L({pending:0,processing:0,resolved:0,closed:0,mediationResolved:0}),h=L({disputeTypes:[],sources:[],statuses:[],risks:[],methods:[],actions:[],villageGroups:[],gridNames:[]}),Me={disputeTypes:["邻里纠纷","土地纠纷","宅基地纠纷","婚姻家庭","赡养纠纷","经济纠纷","其他纠纷"].map(P),sources:["群众反映","入户排查","网格上报","村组干部发现","上级交办","其他来源"].map(P),statuses:["待化解","化解中","已化解","已销号","转调解"].map(P),risks:["一般","较大"].map(P),methods:["村组协调","人民调解","自行和解","上报乡镇","其他方式"].map(P),actions:["上门了解","电话沟通","村组协调","调解处理","上报","回访","销号"].map(P),villageGroups:[],gridNames:[]},B=w(!1),ye=w(),s=L(be()),Q=w([]),J=w(!1),W=w(""),Z=w(""),oe=w([]),ne=w(!1),se=w(""),j=w(!1),m=L({case:null,logs:[]}),q=w(!1),ge=w(),re=w(!1),C=L({actionDate:"",actionType:"上门了解",nextStatus:"",content:""}),Pe={discoveryDate:[{required:!0,message:"请选择排查日期",trigger:"change"}],disputeType:[{required:!0,message:"请选择纠纷类型",trigger:"change"}],partyAName:[{required:!0,message:"请输入甲方姓名",trigger:"blur"}],summary:[{required:!0,message:"请输入纠纷简况",trigger:"blur"}]},Re={actionType:[{required:!0,message:"请选择处理方式",trigger:"change"}],content:[{required:!0,message:"请输入处理内容",trigger:"blur"}]};function P(o){return{label:o,value:o}}function be(){return{discoveryDate:Ee().format("YYYY-MM-DD"),disputeType:"",sourceType:"群众反映",partyAResidentId:null,partyAName:"",partyAPhone:"",partyBResidentId:null,partyBName:"",partyBPhone:"",involvedCount:0,villageGroup:"",gridName:"",location:"",summary:"",riskLevel:"一般",responsiblePerson:"",resolveMethod:"",resolveResult:"",resolvedDate:"",closedDate:"",status:"待化解",mediationArchiveId:null,mediationArchiveNo:"",remark:""}}function de(){return{page:c.page,pageSize:c.pageSize,startDate:c.startDate||void 0,endDate:c.endDate||void 0,disputeType:c.disputeType||void 0,status:c.status||void 0,hasMediationArchive:c.hasMediationArchive,keyword:c.keyword||void 0}}function ze(){return x(this,null,function*(){Object.assign(h,Me);try{const[o,e,d]=yield Promise.all([fe("综合治理"),fe("村组"),fe("所属网格")]),n=Array.isArray(o==null?void 0:o.data)?o.data:[];G(n,"DISPUTE_TYPE","disputeTypes"),G(n,"DISPUTE_SOURCE","sources"),G(n,"DISPUTE_STATUS","statuses"),G(n,"DISPUTE_RISK","risks"),G(n,"DISPUTE_METHOD","methods"),G(n,"DISPUTE_ACTION","actions"),h.villageGroups=_e(e==null?void 0:e.data),h.gridNames=_e(d==null?void 0:d.data)}catch(o){}})}function G(o,e,d){const n=o.filter(p=>String(p.code||"").toUpperCase().startsWith(`${e}_`)).map(p=>String(p.value||p.label||"").trim()).filter(Boolean).map(P);n.length&&(h[d]=n)}function _e(o){return(Array.isArray(o)?o:[]).map(e=>String((e==null?void 0:e.value)||(e==null?void 0:e.label)||(e==null?void 0:e.name)||"").trim()).filter(Boolean).map(P)}function R(){return x(this,null,function*(){S.value=!0;try{const o=yield Ol(de());ve.value=Array.isArray(o==null?void 0:o.data)?o.data:[],ce.value=Number((o==null?void 0:o.total)||0),yield Ie()}catch(o){Y.error((o==null?void 0:o.message)||"读取矛盾纠纷台账失败")}finally{S.value=!1}})}function Ie(){return x(this,null,function*(){const o=yield $l(de()),e=(o==null?void 0:o.data)||{};E.pending=Number(e.pending||0),E.processing=Number(e.processing||0),E.resolved=Number(e.resolved||0),E.closed=Number(e.closed||0),E.mediationResolved=Number(e.mediationResolved||0)})}function we(){c.page=1,R()}function Ye(){Object.assign(c,{page:1,pageSize:20,startDate:"",endDate:"",disputeType:"",status:"",hasMediationArchive:void 0,keyword:""}),$.value=[],R()}function Be(){var o,e;c.startDate=((o=$.value)==null?void 0:o[0])||"",c.endDate=((e=$.value)==null?void 0:e[1])||""}function Ve(o){j.value=!1,Object.keys(s).forEach(e=>delete s[e]),Object.assign(s,be(),o||{}),se.value=(o==null?void 0:o.mediationArchiveNo)||"",W.value=(o==null?void 0:o.partyAName)||"",Z.value=(o==null?void 0:o.partyBName)||"",B.value=!0}function Ge(){return x(this,null,function*(){var o;yield(o=ye.value)==null?void 0:o.validate(),I.value=!0;try{const e=me(pe({},s),{operatorName:Ne()});s.id?yield jl(s.id,e):yield ql(e),Y.success("保存成功"),B.value=!1,yield R()}finally{I.value=!1}})}function he(o){return x(this,null,function*(){var d,n;if(B.value)return;const e=yield Fl(o.id);m.case=((d=e==null?void 0:e.data)==null?void 0:d.case)||null,m.logs=Array.isArray((n=e==null?void 0:e.data)==null?void 0:n.logs)?e.data.logs:[],j.value=!0})}function Le(){var o,e;Object.assign(C,{actionDate:Ee().format("YYYY-MM-DD"),actionType:((o=h.actions[0])==null?void 0:o.value)||"上门了解",nextStatus:Oe((e=m.case)==null?void 0:e.status),content:""}),q.value=!0}function Oe(o){const e=String(o||"").trim();return!e||e==="待化解"?"化解中":e}function $e(){return x(this,null,function*(){var o,e;if(yield(o=ge.value)==null?void 0:o.validate(),!!((e=m.case)!=null&&e.id)){re.value=!0;try{yield Kl(m.case.id,me(pe({},C),{operatorName:Ne()})),Y.success("保存成功"),q.value=!1,yield he(m.case),yield R()}finally{re.value=!1}}})}function je(o){return x(this,null,function*(){yield Pl.confirm(`确认删除 ${o.caseNo||"该记录"}？`,"删除确认",{type:"warning"}),yield Hl(o.id),Y.success("已删除"),j.value=!1,yield R()})}function De(o){return x(this,null,function*(){if(o){J.value=!0;try{const e=yield Ql(o);Q.value=Array.isArray(e==null?void 0:e.data)?e.data:[]}finally{J.value=!1}}})}function ke(o,e){const d=Q.value.find(n=>n.residentId===o);d&&(e==="A"?(Object.assign(s,{partyAResidentId:d.residentId,partyAName:d.name,partyAPhone:d.phone,villageGroup:s.villageGroup||d.villageGroup,gridName:s.gridName||d.gridName}),W.value=d.name):(Object.assign(s,{partyBResidentId:d.residentId,partyBName:d.name,partyBPhone:d.phone}),Z.value=d.name))}function qe(o){return x(this,null,function*(){if(o){ne.value=!0;try{const e=yield Jl(o);oe.value=Array.isArray(e==null?void 0:e.data)?e.data:[]}finally{ne.value=!1}}})}function Fe(o){const e=oe.value.find(d=>d.id===o);e&&(s.mediationArchiveId=e.id,s.mediationArchiveNo=e.archiveNo,s.resolveMethod||(s.resolveMethod="人民调解"))}function Ne(){const o=b.getUserInfo;return String((o==null?void 0:o.realName)||(o==null?void 0:o.username)||"").trim()}function Ke(o){const e=String(o||"").trim();if(!e)return null;const d=e.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:[ T](\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?$/);if(d){const[,p,y,A,D="0",F="0",T="0"]=d;return new Date(Number(p),Number(y)-1,Number(A),Number(D),Number(F),Number(T))}const n=new Date(e);return Number.isNaN(n.getTime())?null:n}function ie(o){const e=Ke(o);return e?e.toLocaleDateString():"-"}function He(o){const e=String(o||"").trim();e&&V.push(`/mediation/archive-detail/${encodeURIComponent(e)}`)}function Qe(){return x(this,null,function*(){te.value=!0;try{Je(yield Wl(de()))}finally{te.value=!1}})}function Je(o){const e=(o==null?void 0:o.data)||o,d=String((e==null?void 0:e.content)||"");if(!d)return Y.warning("暂无可导出的内容");const n=new Blob([d],{type:"text/csv;charset=utf-8"}),p=URL.createObjectURL(n),y=document.createElement("a");y.href=p,y.download=String((e==null?void 0:e.fileName)||`矛盾纠纷台账_${Date.now()}.csv`),document.body.appendChild(y),y.click(),document.body.removeChild(y),URL.revokeObjectURL(p)}function We(){const o=document.querySelector(".governance-dispute-print");if(!o){Y.error("未找到可打印内容");return}const e=document.createElement("iframe");e.style.position="fixed",e.style.right="0",e.style.bottom="0",e.style.width="0",e.style.height="0",e.style.border="0",e.style.opacity="0",document.body.appendChild(e);const d=e.contentWindow,n=d==null?void 0:d.document;if(!d||!n){e.remove(),Y.error("打印组件初始化失败，请稍后重试");return}const p=`<!doctype html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>矛盾纠纷详情</title>
        <style>
          @page {
            size: A4 portrait;
            margin: 12mm;
          }

          * {
            box-sizing: border-box;
          }

          html,
          body {
            width: 210mm;
            margin: 0;
            padding: 0;
            background: #fff;
            color: #000;
            font-family: "Microsoft YaHei", "SimSun", Arial, sans-serif;
            font-size: 12pt;
            line-height: 1.5;
          }

          .governance-dispute-print {
            width: 186mm;
            max-width: 186mm;
            margin: 0 auto;
            padding: 0;
            color: #000;
            background: #fff;
            font-size: 12pt;
          }

          .detail-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10mm;
            margin-bottom: 6mm;
          }

          .detail-header h3 {
            margin: 0 0 2mm;
            font-size: 16pt;
            line-height: 1.35;
          }

          .detail-header p {
            margin: 0;
            color: #333;
            font-size: 12pt;
          }

          .el-tag {
            display: inline-block;
            padding: 1mm 3mm;
            border: 1px solid #999;
            border-radius: 2mm;
            color: #000 !important;
            background: #fff !important;
            font-size: 10pt;
            line-height: 1.4;
            white-space: nowrap;
          }

          .el-button {
            border: 0 !important;
            background: transparent !important;
            padding: 0 !important;
            color: #000 !important;
            font: inherit !important;
            height: auto !important;
          }

          .el-descriptions,
          .el-descriptions__body,
          .el-descriptions__table {
            width: 100% !important;
          }

          .el-descriptions__table {
            table-layout: fixed;
            border-collapse: collapse;
          }

          .el-descriptions__cell {
            border: 1px solid #cfd3dc !important;
            padding: 3mm 4mm !important;
            color: #000 !important;
            font-size: 12pt !important;
            line-height: 1.45;
            vertical-align: top;
            word-break: break-word;
            overflow-wrap: anywhere;
          }

          .el-descriptions__label {
            width: 30mm;
            background: #f5f6f8 !important;
            color: #333 !important;
            font-weight: 600;
          }

          .timeline-title {
            margin: 8mm 0 4mm;
            font-size: 13pt;
            font-weight: 700;
          }

          .el-timeline {
            margin: 0;
            padding-left: 0;
            list-style: none;
          }

          .el-timeline-item {
            position: relative;
            padding: 0 0 5mm 7mm;
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .el-timeline-item::before {
            content: "";
            position: absolute;
            left: 1.8mm;
            top: 3mm;
            bottom: -2mm;
            border-left: 1px solid #dcdfe6;
          }

          .el-timeline-item__node {
            display: none;
          }

          .el-timeline-item__wrapper {
            padding-left: 0 !important;
          }

          .el-timeline-item__timestamp {
            margin-bottom: 2mm;
            color: #333;
            font-size: 11pt;
          }

          .el-card {
            border: 1px solid #dcdfe6 !important;
            box-shadow: none !important;
          }

          .el-card__body {
            padding: 3mm 4mm !important;
            color: #000;
            font-size: 12pt;
            line-height: 1.45;
            word-break: break-word;
            overflow-wrap: anywhere;
          }

          .el-card__body p {
            margin: 2mm 0 0;
          }

          .operator {
            margin-left: 3mm;
            color: #333;
          }
        </style>
      </head>
      <body>
        ${o.innerHTML}
      </body>
    </html>`;n.open(),n.write(p),n.close(),e.onload=()=>{d.focus(),d.print(),window.setTimeout(()=>e.remove(),300)}}function Ae(o){return o==="已销号"||o==="已化解"?"success":o==="化解中"?"warning":o==="转调解"?"primary":"info"}function Ze(o){return o==="较大"?"danger":"info"}return Il(()=>x(null,null,function*(){yield ze(),yield R()})),(o,e)=>{const d=vl,n=fl,p=yl,y=cl,A=gl,D=bl,F=ml,T=wl,ue=Vl,Xe=_l,el=Dl,Ue=kl,f=Al,X=Nl,ll=Ul,Te=Tl,z=Sl,al=xl,tl=El,ol=Cl,nl=Ml,sl=hl;return r(),_("div",Zl,[i("div",Xl,[i("div",ea,[e[45]||(e[45]=i("span",null,"待化解",-1)),i("strong",null,u(E.pending),1)]),i("div",la,[e[46]||(e[46]=i("span",null,"化解中",-1)),i("strong",null,u(E.processing),1)]),i("div",aa,[e[47]||(e[47]=i("span",null,"已化解",-1)),i("strong",null,u(E.resolved),1)]),i("div",ta,[e[48]||(e[48]=i("span",null,"已销号",-1)),i("strong",null,u(E.closed),1)]),i("div",oa,[e[49]||(e[49]=i("span",null,"规范调解",-1)),i("strong",null,u(E.mediationResolved),1)])]),a(Ue,{shadow:"never"},{default:t(()=>[a(F,{model:c,inline:!0,class:"query-form query-filter-sticky",onKeydown:Yl(Ce(we,["prevent"]),["enter"])},{default:t(()=>[a(n,{label:"日期"},{default:t(()=>[a(d,{modelValue:$.value,"onUpdate:modelValue":e[0]||(e[0]=l=>$.value=l),type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"YYYY-MM-DD",style:{width:"240px"},onChange:Be},null,8,["modelValue"])]),_:1}),a(n,{label:"类型"},{default:t(()=>[a(y,{modelValue:c.disputeType,"onUpdate:modelValue":e[1]||(e[1]=l=>c.disputeType=l),clearable:"",placeholder:"全部",style:{width:"140px"}},{default:t(()=>[(r(!0),_(k,null,N(h.disputeTypes,l=>(r(),g(p,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(n,{label:"状态"},{default:t(()=>[a(y,{modelValue:c.status,"onUpdate:modelValue":e[2]||(e[2]=l=>c.status=l),clearable:"",placeholder:"全部",style:{width:"120px"}},{default:t(()=>[(r(!0),_(k,null,N(h.statuses,l=>(r(),g(p,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(n,{label:"调解档案"},{default:t(()=>[a(y,{modelValue:c.hasMediationArchive,"onUpdate:modelValue":e[3]||(e[3]=l=>c.hasMediationArchive=l),clearable:"",placeholder:"全部",style:{width:"120px"}},{default:t(()=>[a(p,{label:"已关联",value:1}),a(p,{label:"未关联",value:0})]),_:1},8,["modelValue"])]),_:1}),a(n,{label:"关键词"},{default:t(()=>[a(A,{modelValue:c.keyword,"onUpdate:modelValue":e[4]||(e[4]=l=>c.keyword=l),clearable:"",placeholder:"编号/当事人/内容",style:{width:"210px"}},null,8,["modelValue"])]),_:1}),a(n,null,{default:t(()=>[a(D,{type:"primary",onClick:we},{default:t(()=>e[50]||(e[50]=[v("查询")])),_:1}),a(D,{onClick:Ye},{default:t(()=>e[51]||(e[51]=[v("重置")])),_:1}),ee.value?(r(),g(D,{key:0,type:"success",onClick:e[5]||(e[5]=l=>Ve())},{default:t(()=>e[52]||(e[52]=[v("新增")])),_:1})):M("",!0),O.value?(r(),g(D,{key:1,loading:te.value,onClick:Qe},{default:t(()=>e[53]||(e[53]=[v("导出")])),_:1},8,["loading"])):M("",!0)]),_:1})]),_:1},8,["model","onKeydown"]),Bl((r(),g(Xe,{data:ve.value,"row-key":"id",onRowClick:he},{default:t(()=>[a(T,{prop:"discoveryDate",label:"排查日期",width:"110"},{default:t(({row:l})=>[v(u(ie(l.discoveryDate)),1)]),_:1}),a(T,{prop:"caseNo",label:"编号",width:"140","show-overflow-tooltip":""}),a(T,{label:"当事人",width:"150","show-overflow-tooltip":""},{default:t(({row:l})=>[v(u(l.partyAName),1),l.partyBName?(r(),_("span",na," / "+u(l.partyBName),1)):M("",!0)]),_:1}),a(T,{prop:"villageGroup",label:"村组",width:"100","show-overflow-tooltip":""}),a(T,{prop:"disputeType",label:"类型",width:"120","show-overflow-tooltip":""}),a(T,{prop:"summary",label:"纠纷简况","min-width":"260","show-overflow-tooltip":""}),a(T,{prop:"riskLevel",label:"风险",width:"90",align:"center"},{default:t(({row:l})=>[a(ue,{type:Ze(l.riskLevel),effect:"plain"},{default:t(()=>[v(u(l.riskLevel||"-"),1)]),_:2},1032,["type"])]),_:1}),a(T,{prop:"status",label:"状态",width:"100",align:"center"},{default:t(({row:l})=>[a(ue,{type:Ae(l.status)},{default:t(()=>[v(u(l.status||"-"),1)]),_:2},1032,["type"])]),_:1}),a(T,{prop:"responsiblePerson",label:"责任人",width:"100","show-overflow-tooltip":""}),a(T,{prop:"mediationArchiveNo",label:"调解档案",width:"130","show-overflow-tooltip":""},{default:t(({row:l})=>[v(u(l.mediationArchiveNo||"-"),1)]),_:1})]),_:1},8,["data"])),[[sl,S.value]]),i("div",sa,[a(el,{"current-page":c.page,"onUpdate:currentPage":e[6]||(e[6]=l=>c.page=l),"page-size":c.pageSize,"onUpdate:pageSize":e[7]||(e[7]=l=>c.pageSize=l),"page-sizes":[10,20,50,100],total:ce.value,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:R,onCurrentChange:R},null,8,["current-page","page-size","total"])])]),_:1}),a(Te,{modelValue:B.value,"onUpdate:modelValue":e[34]||(e[34]=l=>B.value=l),title:s.id?"编辑矛盾纠纷":"新增矛盾纠纷",width:"70%",top:"6vh","destroy-on-close":"",class:"governance-compact-dialog"},{footer:t(()=>[a(D,{onClick:e[33]||(e[33]=l=>B.value=!1)},{default:t(()=>e[57]||(e[57]=[v("取消")])),_:1}),a(D,{type:"primary",loading:I.value,onClick:Ge},{default:t(()=>e[58]||(e[58]=[v("保存")])),_:1},8,["loading"])]),default:t(()=>[a(F,{ref_key:"formRef",ref:ye,model:s,rules:Pe,"label-width":"100px",size:"small",class:"compact-ledger-form"},{default:t(()=>[i("div",ra,[e[54]||(e[54]=i("div",{class:"section-title"},"排查信息",-1)),a(X,{gutter:16},{default:t(()=>[a(f,{span:8},{default:t(()=>[a(n,{label:"排查日期",prop:"discoveryDate"},{default:t(()=>[a(d,{modelValue:s.discoveryDate,"onUpdate:modelValue":e[8]||(e[8]=l=>s.discoveryDate=l),"value-format":"YYYY-MM-DD",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"纠纷类型",prop:"disputeType"},{default:t(()=>[a(y,{modelValue:s.disputeType,"onUpdate:modelValue":e[9]||(e[9]=l=>s.disputeType=l),style:{width:"100%"}},{default:t(()=>[(r(!0),_(k,null,N(h.disputeTypes,l=>(r(),g(p,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"来源"},{default:t(()=>[a(y,{modelValue:s.sourceType,"onUpdate:modelValue":e[10]||(e[10]=l=>s.sourceType=l),style:{width:"100%"}},{default:t(()=>[(r(!0),_(k,null,N(h.sources,l=>(r(),g(p,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"村组"},{default:t(()=>[a(y,{modelValue:s.villageGroup,"onUpdate:modelValue":e[11]||(e[11]=l=>s.villageGroup=l),filterable:"","allow-create":"","default-first-option":"",clearable:"",style:{width:"100%"}},{default:t(()=>[(r(!0),_(k,null,N(h.villageGroups,l=>(r(),g(p,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"网格"},{default:t(()=>[a(y,{modelValue:s.gridName,"onUpdate:modelValue":e[12]||(e[12]=l=>s.gridName=l),filterable:"","allow-create":"","default-first-option":"",clearable:"",style:{width:"100%"}},{default:t(()=>[(r(!0),_(k,null,N(h.gridNames,l=>(r(),g(p,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"发生地点"},{default:t(()=>[a(A,{modelValue:s.location,"onUpdate:modelValue":e[13]||(e[13]=l=>s.location=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),i("div",da,[e[55]||(e[55]=i("div",{class:"section-title"},"当事人",-1)),a(X,{gutter:16},{default:t(()=>[a(f,{span:8},{default:t(()=>[a(n,{label:"甲方居民"},{default:t(()=>[a(y,{modelValue:W.value,"onUpdate:modelValue":e[14]||(e[14]=l=>W.value=l),filterable:"",remote:"",clearable:"","reserve-keyword":"",placeholder:"姓名/证件/电话","remote-method":De,loading:J.value,style:{width:"100%"},onChange:e[15]||(e[15]=l=>ke(l,"A"))},{default:t(()=>[(r(!0),_(k,null,N(Q.value,l=>(r(),g(p,{key:l.residentId,label:`${l.name} ${l.idCard||""}`,value:l.residentId},{default:t(()=>[i("span",null,u(l.name),1),i("span",ia,u(l.idCard)+" "+u(l.villageGroup),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","loading"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"甲方姓名",prop:"partyAName"},{default:t(()=>[a(A,{modelValue:s.partyAName,"onUpdate:modelValue":e[16]||(e[16]=l=>s.partyAName=l)},null,8,["modelValue"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"甲方电话"},{default:t(()=>[a(A,{modelValue:s.partyAPhone,"onUpdate:modelValue":e[17]||(e[17]=l=>s.partyAPhone=l)},null,8,["modelValue"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"乙方居民"},{default:t(()=>[a(y,{modelValue:Z.value,"onUpdate:modelValue":e[18]||(e[18]=l=>Z.value=l),filterable:"",remote:"",clearable:"","reserve-keyword":"",placeholder:"姓名/证件/电话","remote-method":De,loading:J.value,style:{width:"100%"},onChange:e[19]||(e[19]=l=>ke(l,"B"))},{default:t(()=>[(r(!0),_(k,null,N(Q.value,l=>(r(),g(p,{key:l.residentId,label:`${l.name} ${l.idCard||""}`,value:l.residentId},{default:t(()=>[i("span",null,u(l.name),1),i("span",ua,u(l.idCard)+" "+u(l.villageGroup),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","loading"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"乙方姓名"},{default:t(()=>[a(A,{modelValue:s.partyBName,"onUpdate:modelValue":e[20]||(e[20]=l=>s.partyBName=l)},null,8,["modelValue"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"乙方电话"},{default:t(()=>[a(A,{modelValue:s.partyBPhone,"onUpdate:modelValue":e[21]||(e[21]=l=>s.partyBPhone=l)},null,8,["modelValue"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"涉及人数"},{default:t(()=>[a(ll,{modelValue:s.involvedCount,"onUpdate:modelValue":e[22]||(e[22]=l=>s.involvedCount=l),min:0,style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),i("div",pa,[e[56]||(e[56]=i("div",{class:"section-title"},"化解闭环",-1)),a(X,{gutter:16},{default:t(()=>[a(f,{span:8},{default:t(()=>[a(n,{label:"风险等级"},{default:t(()=>[a(y,{modelValue:s.riskLevel,"onUpdate:modelValue":e[23]||(e[23]=l=>s.riskLevel=l),style:{width:"100%"}},{default:t(()=>[(r(!0),_(k,null,N(h.risks,l=>(r(),g(p,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"状态"},{default:t(()=>[a(y,{modelValue:s.status,"onUpdate:modelValue":e[24]||(e[24]=l=>s.status=l),style:{width:"100%"}},{default:t(()=>[(r(!0),_(k,null,N(h.statuses,l=>(r(),g(p,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"责任人"},{default:t(()=>[a(A,{modelValue:s.responsiblePerson,"onUpdate:modelValue":e[25]||(e[25]=l=>s.responsiblePerson=l)},null,8,["modelValue"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"化解方式"},{default:t(()=>[a(y,{modelValue:s.resolveMethod,"onUpdate:modelValue":e[26]||(e[26]=l=>s.resolveMethod=l),clearable:"",style:{width:"100%"}},{default:t(()=>[(r(!0),_(k,null,N(h.methods,l=>(r(),g(p,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"化解日期"},{default:t(()=>[a(d,{modelValue:s.resolvedDate,"onUpdate:modelValue":e[27]||(e[27]=l=>s.resolvedDate=l),"value-format":"YYYY-MM-DD",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"销号日期"},{default:t(()=>[a(d,{modelValue:s.closedDate,"onUpdate:modelValue":e[28]||(e[28]=l=>s.closedDate=l),"value-format":"YYYY-MM-DD",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),a(f,{span:24},{default:t(()=>[a(n,{label:"纠纷简况",prop:"summary"},{default:t(()=>[a(A,{modelValue:s.summary,"onUpdate:modelValue":e[29]||(e[29]=l=>s.summary=l),type:"textarea",rows:3},null,8,["modelValue"])]),_:1})]),_:1}),a(f,{span:24},{default:t(()=>[a(n,{label:"化解结果"},{default:t(()=>[a(A,{modelValue:s.resolveResult,"onUpdate:modelValue":e[30]||(e[30]=l=>s.resolveResult=l),type:"textarea",rows:2},null,8,["modelValue"])]),_:1})]),_:1}),a(f,{span:24},{default:t(()=>[a(n,{label:"调解档案"},{default:t(()=>[a(y,{modelValue:se.value,"onUpdate:modelValue":e[31]||(e[31]=l=>se.value=l),filterable:"",remote:"",clearable:"","reserve-keyword":"",placeholder:"输入案卷号或当事人搜索","remote-method":qe,loading:ne.value,style:{width:"100%"},onChange:Fe},{default:t(()=>[(r(!0),_(k,null,N(oe.value,l=>(r(),g(p,{key:l.id,label:`${l.archiveNo} ${l.applicantNames||""}`,value:l.id},{default:t(()=>[i("span",null,u(l.archiveNo),1),i("span",ma,u(l.applicantNames)+" / "+u(l.respondentNames),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","loading"])]),_:1})]),_:1}),a(f,{span:24},{default:t(()=>[a(n,{label:"备注"},{default:t(()=>[a(A,{modelValue:s.remark,"onUpdate:modelValue":e[32]||(e[32]=l=>s.remark=l),type:"textarea",rows:2},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})])]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),a(nl,{modelValue:j.value,"onUpdate:modelValue":e[38]||(e[38]=l=>j.value=l),size:"760px",title:"纠纷详情","destroy-on-close":""},{header:t(()=>[i("div",fa,[e[63]||(e[63]=i("span",null,"纠纷详情",-1)),m.case?(r(),_("div",va,[H.value?(r(),g(D,{key:0,size:"small",onClick:e[35]||(e[35]=l=>Ve(m.case))},{default:t(()=>e[59]||(e[59]=[v("编辑")])),_:1})):M("",!0),le.value?(r(),g(D,{key:1,size:"small",type:"primary",onClick:Le},{default:t(()=>e[60]||(e[60]=[v("新增处理记录")])),_:1})):M("",!0),ae.value?(r(),g(D,{key:2,size:"small",type:"danger",plain:"",onClick:e[36]||(e[36]=l=>je(m.case))},{default:t(()=>e[61]||(e[61]=[v("删除")])),_:1})):M("",!0),a(D,{size:"small",onClick:We},{default:t(()=>e[62]||(e[62]=[v("打印")])),_:1})])):M("",!0)])]),default:t(()=>[m.case?(r(),_("div",ca,[i("div",ya,[i("div",null,[i("h3",null,u(m.case.caseNo),1),i("p",null,[v(u(m.case.partyAName),1),m.case.partyBName?(r(),_("span",ga," / "+u(m.case.partyBName),1)):M("",!0)])]),a(ue,{type:Ae(m.case.status)},{default:t(()=>[v(u(m.case.status),1)]),_:1},8,["type"])]),a(al,{column:2,border:""},{default:t(()=>[a(z,{label:"排查日期"},{default:t(()=>[v(u(ie(m.case.discoveryDate)),1)]),_:1}),a(z,{label:"类型"},{default:t(()=>[v(u(m.case.disputeType),1)]),_:1}),a(z,{label:"村组"},{default:t(()=>[v(u(m.case.villageGroup||"-"),1)]),_:1}),a(z,{label:"责任人"},{default:t(()=>[v(u(m.case.responsiblePerson||"-"),1)]),_:1}),a(z,{label:"化解方式"},{default:t(()=>[v(u(m.case.resolveMethod||"-"),1)]),_:1}),a(z,{label:"调解档案"},{default:t(()=>[m.case.mediationArchiveNo?(r(),g(D,{key:0,link:"",type:"primary",onClick:e[37]||(e[37]=Ce(l=>He(m.case.mediationArchiveNo),["stop"]))},{default:t(()=>[v(u(m.case.mediationArchiveNo),1)]),_:1})):(r(),_("span",ba,"-"))]),_:1}),a(z,{label:"纠纷简况",span:2},{default:t(()=>[v(u(m.case.summary||"-"),1)]),_:1}),a(z,{label:"化解结果",span:2},{default:t(()=>[v(u(m.case.resolveResult||"-"),1)]),_:1})]),_:1}),e[64]||(e[64]=i("div",{class:"timeline-title"},"处理记录",-1)),a(ol,null,{default:t(()=>[(r(!0),_(k,null,N(m.logs,l=>(r(),g(tl,{key:l.id,timestamp:ie(l.actionDate),placement:"top"},{default:t(()=>[a(Ue,{shadow:"never"},{default:t(()=>[i("strong",null,u(l.actionType),1),i("span",_a,u(l.operatorName),1),i("p",null,u(l.content),1)]),_:2},1024)]),_:2},1032,["timestamp"]))),128))]),_:1})])):M("",!0)]),_:1},8,["modelValue"]),a(Te,{modelValue:q.value,"onUpdate:modelValue":e[44]||(e[44]=l=>q.value=l),title:"新增处理记录",width:"760px",top:"12vh","destroy-on-close":"",class:"governance-compact-dialog governance-record-dialog"},{footer:t(()=>[a(D,{onClick:e[43]||(e[43]=l=>q.value=!1)},{default:t(()=>e[66]||(e[66]=[v("取消")])),_:1}),a(D,{type:"primary",loading:re.value,onClick:$e},{default:t(()=>e[67]||(e[67]=[v("保存")])),_:1},8,["loading"])]),default:t(()=>[a(F,{ref_key:"logFormRef",ref:ge,model:C,rules:Re,"label-width":"100px",size:"small",class:"compact-ledger-form"},{default:t(()=>[i("div",wa,[e[65]||(e[65]=i("div",{class:"section-title"},"处理信息",-1)),a(X,{gutter:16},{default:t(()=>[a(f,{span:8},{default:t(()=>[a(n,{label:"处理日期"},{default:t(()=>[a(d,{modelValue:C.actionDate,"onUpdate:modelValue":e[39]||(e[39]=l=>C.actionDate=l),"value-format":"YYYY-MM-DD",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"处理方式",prop:"actionType"},{default:t(()=>[a(y,{modelValue:C.actionType,"onUpdate:modelValue":e[40]||(e[40]=l=>C.actionType=l),style:{width:"100%"}},{default:t(()=>[(r(!0),_(k,null,N(h.actions,l=>(r(),g(p,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(f,{span:8},{default:t(()=>[a(n,{label:"流转状态"},{default:t(()=>[a(y,{modelValue:C.nextStatus,"onUpdate:modelValue":e[41]||(e[41]=l=>C.nextStatus=l),clearable:"",style:{width:"100%"}},{default:t(()=>[(r(!0),_(k,null,N(h.statuses,l=>(r(),g(p,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(f,{span:24},{default:t(()=>[a(n,{label:"处理内容",prop:"content"},{default:t(()=>[a(A,{modelValue:C.content,"onUpdate:modelValue":e[42]||(e[42]=l=>C.content=l),type:"textarea",rows:3},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})])]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}}),Ca=Ll(Va,[["__scopeId","data-v-b06783f7"]]);export{Ca as default};
