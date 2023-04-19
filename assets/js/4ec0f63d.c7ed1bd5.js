"use strict";(self.webpackChunkai_ops_pot=self.webpackChunkai_ops_pot||[]).push([[702],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:1},i="Overview",s={unversionedId:"Instana POT/WebSphere-DB2/overview",id:"Instana POT/WebSphere-DB2/overview",title:"Overview",description:"Introduction",source:"@site/docs/Instana POT/WebSphere-DB2/overview.md",sourceDirName:"Instana POT/WebSphere-DB2",slug:"/Instana POT/WebSphere-DB2/overview",permalink:"/aiops-pot/docs/Instana POT/WebSphere-DB2/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Lab 2: WebSphere & DB2",permalink:"/aiops-pot/docs/category/lab-2-websphere--db2"},next:{title:"Instana Agent Installation",permalink:"/aiops-pot/docs/Instana POT/WebSphere-DB2/agent-install"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Connecting to the Lab Environment",id:"connecting-to-the-lab-environment",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this Instana portion of the AIOps POT lab, you will be going through several\nkey exercises in order to learn more about how Instana monitors middleware applications.\nThe lab should be executed in the numbered order that you see on the left side of the screen.\nSome of the sections have dependencies on the previous section."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, you will be learning how to install the Instana agent on the Virtual Machine that includes the WebSphere Application and DB2 Database."),(0,o.kt)("li",{parentName:"ul"},"Then, you will learn how to update the agent configuration file to include the infrastucture Zone and verify it is showing the the Instana application."),(0,o.kt)("li",{parentName:"ul"},"Next, you will learn how to setup the Monitoring sensors for ",(0,o.kt)("strong",{parentName:"li"},"IBM DB2")," and\n",(0,o.kt)("strong",{parentName:"li"},"IBM WebSphere Application Server ","(","WAS",")")),(0,o.kt)("li",{parentName:"ul"},"Once you have the applications instrumented with Instana sensors, you will go\nthrough a series of exercises to explore Instana's capabilities"),(0,o.kt)("li",{parentName:"ul"},"Finally, you will learn how to use some of Instana's Administrative\ncapabilities.")),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"WebSphere_DB2_Arch",src:n(13361).Z,width:"1716",height:"944"})),(0,o.kt)("h2",{id:"connecting-to-the-lab-environment"},"Connecting to the Lab Environment"),(0,o.kt)("p",null,"After you request Instana PoT environment from Techzone, you will see all the components/VMs mentioned in the architecture as part of the lab environment setup. Here are the steps to get you started."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the link under ",(0,o.kt)("strong",{parentName:"li"},"Bastion Remote Desktop"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab_Env_Bastion_Host",src:n(63401).Z,width:"2022",height:"1662"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab_Env_All_VMs",src:n(65521).Z,width:"2434",height:"1694"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"You will see ",(0,o.kt)("strong",{parentName:"li"},"Recent Connections")," window. Expand the ",(0,o.kt)("strong",{parentName:"li"},"OCP Gym")," and click on the first link for ",(0,o.kt)("strong",{parentName:"li"},"Remote Desktop")," connection")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab_Env_Bastion_Host_Recent_Conections",src:n(24203).Z,width:"1470",height:"1094"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Now you will be taken to a bastion host remot desktop. Click on the ",(0,o.kt)("strong",{parentName:"li"},"Activities"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab_Env_Bastion_Host_Recent_Conections",src:n(31529).Z,width:"3408",height:"1868"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Next, click on ",(0,o.kt)("strong",{parentName:"li"},"Firefox")," and ",(0,o.kt)("strong",{parentName:"li"},"Terminal")," window from the ",(0,o.kt)("strong",{parentName:"li"},"Activities")," menu")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab_Env_Bastion_Host_Recent_Conections",src:n(96874).Z,width:"3416",height:"1922"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"You are all set to follow the lab instructions!")))}h.isMDXComponent=!0},13361:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/WebSphere-DB2-Arch-6aa788b0f759b7767cb07176d5c23df7.png"},31529:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lab_env_activities_menu-3eab9c84a4fd389b7e4ba21040f34cb1.png"},65521:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lab_env_all_VMs-fb0857d5b65006bfc4741625912635d9.png"},63401:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lab_env_bastion_host-9f00e88f08679e5e7b1ace0f65529263.png"},24203:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lab_env_bastion_host_recent_conections-0a3fcff6112f6040fb64afa90a015158.png"},96874:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lab_env_menu-77c9b2fc22fce0714d6b28c8198d2b09.png"}}]);