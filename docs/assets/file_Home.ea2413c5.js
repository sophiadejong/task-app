import{u as $,r as O,o as d,a as c,b as t,d as T,w as U,t as v,e as x,f as y,g as V,h as F,s as g,i as m,j as f,v as C,k as S,l as E,m as M,n as I,_ as B,F as H,p as q,q as P}from"./file_index.89cf4de1.js";const j={class:"main-container"},z={id:"main-menu",class:"main-menu container-header"},J=t("h2",null,"TO-DO TASK APP",-1),K={id:"welcomemsg",class:""},L=t("u",null,"Username:",-1),R=y("\xA0"),G=y("Today is: "),Q={__name:"Header",setup(l){const s=V(),o=$(),u=Date.now(),i=new Date(u),p=o.user.email,e=async()=>{try{await $().signOut(),s.push({path:"/auth/login"})}catch(a){errorMsg.value=a.message,setTimeout(()=>{errorMsg.value=null},5e3)}};return(a,n)=>{const h=O("router-link");return d(),c("div",j,[t("div",null,[t("div",z,[T(h,{to:"/"},{default:U(()=>[J]),_:1}),t("p",K,[L,t("b",null,[R,t("span",null,v(x(p)),1)])]),t("p",null,[G,t("b",null,v(x(i).toDateString()),1)]),t("button",{onClick:e,type:"button",id:"btnsignout"},"Sign Out")])])])}}},_=F("task",{state:()=>({tasks:[]}),actions:{async getTasks(){const{data:l}=await g.from("task").select("*").order("id",{ascending:!1});return this.tasks=l,this.tasks},async addTask(l,s){console.log($().user.id),await g.from("task").insert([{user_id:$().user.id,title:l,is_completed:!1,description:s}])},async editTask(l,s,o){await g.from("task").update({title:l,description:s}).eq("id",o)},async deleteTask(l){await g.from("task").delete().match({id:l})},async completedTask(l,s){await g.from("task").update({is_completed:s}).match({id:l})}}});const W={class:"container-tasks"},X={class:"task-form",id:"formInputs"},Y=t("div",{class:"title-add"},"Add a new task",-1),Z={class:"show-error"},tt={key:0,class:"",role:"alert"},et=["onClick"],st={__name:"NewTask",emits:["childEmitTask"],setup(l,{emit:s}){_();const o=m(""),u=m(""),i=m(!1),r=m(null),p=()=>{if(o.value.length===0||u.value.length===0)i.value=!0,r.value="Task needs a title and description to be saved",setTimeout(()=>{i.value=!1},5e3);else{const e={title:o.value,description:u.value};s("childEmitTask",e),o.value="",u.value="",id.value=""}};return(e,a)=>(d(),c("div",W,[t("div",X,[Y,f(t("input",{type:"text",id:"form3Example1",class:"",placeholder:"New task title","onUpdate:modelValue":a[0]||(a[0]=n=>o.value=n)},null,512),[[C,o.value]]),t("div",null,[f(t("textarea",{type:"text",id:"form3Example2",class:"",placeholder:"Description","onUpdate:modelValue":a[1]||(a[1]=n=>u.value=n)},null,512),[[C,u.value]])]),t("div",Z,[i.value?(d(),c("p",tt,v(r.value),1)):S("",!0),t("button",{onClick:E(p,["prevent"]),class:"btn-add-task"},"Add a task",8,et)])])]))}};const ot={class:"date-item"},at={class:"time"},lt={class:"title"},nt={class:"description"},it={class:"buttons-container"},dt=y(" Completed task "),ct={key:0},ut={key:1,class:""},rt=y(" Show edit "),_t=t("i",{class:""},null,-1),mt=[rt,_t],pt=y(" Delete task "),vt=t("i",{class:""},null,-1),kt=[pt,vt],ht={key:0,class:"edit-container"},gt=["onSubmit"],Tt=["placeholder"],ft=["placeholder"],yt={class:"edit-close-btns"},bt={key:0,class:"",role:"alert"},wt=["onClick"],$t={__name:"TaskItem",props:["item"],emits:["childEditStatus","childEmitTask","childToggleStatus","childDeleteStatus"],setup(l,{emit:s}){const o=l,u=()=>{p.value=!p.value},i=m(o.item.title),r=m(o.item.description),p=m(!1),e=m(!1),a=M(()=>new Date(o.item.created_at).toDateString()),n=()=>{if(i.value.length===0||r.value.length===0)h.value=!0,D.value="Task needs a title and description to be saved",setTimeout(()=>{h.value=!1},5e3);else{const b={title:i.value,description:r.value,id:o.item.id};s("childEditStatus",b),i.value="",r.value=""}},h=m(!1),D=m(null),A=b=>{e.value=!e.value,s("childToggleStatus",o.item.id)},N=()=>{s("childDeleteStatus",o.item.id)};return(b,k)=>(d(),c("div",{class:I(["item-container",{"completed-task-bg":l.item.is_completed}])},[t("div",ot,[t("div",at,v(x(a)),1)]),t("h3",lt,v(l.item.title),1),t("p",nt,v(l.item.description),1),t("div",it,[t("button",{type:"button",class:"completed-task","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Mark as complete",onClick:A},[dt,e.value?(d(),c("span",ut)):(d(),c("span",ct))]),t("button",{type:"button",class:"show-edit","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Edit",onClick:u},mt),t("button",{type:"button",class:"delete-task","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Delete",onClick:N},kt)]),p.value?(d(),c("div",ht,[t("form",{onSubmit:E(n,["prevent"]),class:"edit-task"},[f(t("input",{type:"text",id:"form3Example20",class:"",placeholder:o.item.title,"onUpdate:modelValue":k[0]||(k[0]=w=>i.value=w)},null,8,Tt),[[C,i.value]]),t("div",null,[f(t("textarea",{type:"text",id:"form3Example21",class:"",placeholder:o.item.description,"onUpdate:modelValue":k[1]||(k[1]=w=>r.value=w)},null,8,ft),[[C,r.value]])]),t("div",yt,[h.value?(d(),c("p",bt,v(D.value),1)):S("",!0),t("button",{onClick:E(n,["prevent"]),type:"submit",id:"btnEdit",class:"edit-btn"},"Edit task",8,wt),t("button",{onClick:k[2]||(k[2]=w=>p.value=!1),type:"",id:"closeEdit",class:"close-edit-btn"},"Close edit task")])],40,gt)])):S("",!0)],2))}};const xt={},Ct=t("div",{class:"footer"},[t("div",null,[t("p",null,[t("b",null,"Sophia de Jong")])]),t("div",null,[t("p",null,"2022")]),t("div",null,[t("p",null,[t("b",null,"Ironhack BCN")])])],-1),St=[Ct];function Et(l,s){return d(),c("footer",null,St)}const Dt=B(xt,[["render",Et]]);const Mt={class:"all-items"},At={class:"show-filters"},Nt={class:"container-old-items"},Ut={__name:"Home",setup(l){const s=m("showAll");_().getTasks();const o=async e=>{await _().addTask(e.title,e.description),_().getTasks()},u=M(()=>_().tasks),i=async(e,a)=>{a=!a,await _().completedTask(e,a),_().getTasks()},r=async e=>{await _().editTask(e.title,e.description,e.id),console.log(e),_().getTasks()},p=async e=>{await _().deleteTask(e),_().getTasks()};return(e,a)=>(d(),c("body",null,[T(Q),t("div",Mt,[t("div",At,[t("button",{onClick:a[0]||(a[0]=n=>s.value="showAll")},"Show all"),t("button",{onClick:a[1]||(a[1]=n=>s.value="completedTasks")},"Completed"),t("button",{onClick:a[2]||(a[2]=n=>s.value="incompletedTasks")},"Incompleted")]),t("div",Nt,[T(st,{onChildEmitTask:o}),(d(!0),c(H,null,q(x(u),n=>f((d(),c("div",{key:n.id},[T($t,{item:n,onChildToggleStatus:i,onChildEditStatus:r,onChildDeleteStatus:p},null,8,["item"])])),[[P,s.value==="showAll"?!0:s.value==="completedTasks"?n.is_completed:!n.is_completed]])),128))])]),T(Dt)]))}};export{Ut as default};