"use strict";(self.webpackChunkai_ops_pot=self.webpackChunkai_ops_pot||[]).push([[83],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?i.createElement(g,s(s({ref:t},p),{},{components:n})):i.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={sidebar_position:7},s="Troubleshoot an issue",r={unversionedId:"Instana POT/Monitoring a Cloud Native App/simulate-failure",id:"Instana POT/Monitoring a Cloud Native App/simulate-failure",title:"Troubleshoot an issue",description:"Troubleshooting Ratings Endpoint Failures",source:"@site/docs/Instana POT/Monitoring a Cloud Native App/simulate-failure.md",sourceDirName:"Instana POT/Monitoring a Cloud Native App",slug:"/Instana POT/Monitoring a Cloud Native App/simulate-failure",permalink:"/aiops-pot/docs/Instana POT/Monitoring a Cloud Native App/simulate-failure",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"End User Monitoring",permalink:"/aiops-pot/docs/Instana POT/Monitoring a Cloud Native App/end-user-monitoring"},next:{title:"Alerts and Alert channels",permalink:"/aiops-pot/docs/Instana POT/Monitoring a Cloud Native App/alerts-channel"}},l={},c=[{value:"Troubleshooting Ratings Endpoint Failures",id:"troubleshooting-ratings-endpoint-failures",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshoot-an-issue"},"Troubleshoot an issue"),(0,a.kt)("h2",{id:"troubleshooting-ratings-endpoint-failures"},"Troubleshooting Ratings Endpoint Failures"),(0,a.kt)("p",null,"We are going to simulate the following (Ratings Endpoint Failures) failures in the system using Anomaly Generator running at ",(0,a.kt)("a",{parentName:"p",href:"http://169.62.62.164:3012"},"http://169.62.62.164:3012"),"\nPlease visit the URL: ",(0,a.kt)("a",{parentName:"p",href:"http://169.62.62.164:3012"},"http://169.62.62.164:3012")),(0,a.kt)("p",null,"Double Click on qotd-rating Endpoint Failures as shown below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Click_on_Ratings_Endpoint_Failures",src:n(66398).Z,width:"1458",height:"833"})),(0,a.kt)("p",null,'Now Click on "Start" whenever you are ready to inject the following failures as shown below in the picture.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Click_on_Start",src:n(22470).Z,width:"1292",height:"765"})),(0,a.kt)("p",null,"Now the system will take time to simulate the failures. Please give atleast 3-5 minutes for the system to simulate the failures."),(0,a.kt)("p",null,"All of these failures will be in the qotd-rating service. There are going to be 4 failure scenarios in teh qotd-rating service."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Rating service failing with 500/404 errors half of the time."),(0,a.kt)("li",{parentName:"ol"},"Increase latency in primary GET /ratings/:id to 0.9 seconds"),(0,a.kt)("li",{parentName:"ol"},"Start new independent log - unknown code every 4 seconds in quote service"),(0,a.kt)("li",{parentName:"ol"},"Start new dependent logger on /ratings/:id endpoint.")),(0,a.kt)("p",null,"Our troubleshooting can start with looking at the qotd-rating service in Applications. Please set the time duration to the last 10 minutes and go to Ratings service in Applications view."),(0,a.kt)("p",null,"Our goal is to show you the steps to troubleshoot this scenario. Please click on Applications as shown in the picture below. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Click_On_Applications1",src:n(65383).Z,width:"1856",height:"482"})),(0,a.kt)("p",null,"Please click on qotd-rating application as shown in the picture below. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Click_on_qotd_rating",src:n(55324).Z,width:"1874",height:"433"})),(0,a.kt)("p",null,"Now we will surface only the 4XX and 5XX errors from these services as shown in the picture below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"4XX_5XX_response_codes",src:n(61281).Z,width:"1869",height:"915"})),(0,a.kt)("p",null,"Now we will try to drag and drop into the time period where the errors were being produced and the time period on the top right corner will get changed on its own from 10 minutes to the drag and drop time period as shown below. We are trying go back in time to see the errors. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Drag_drop_erroneous_spikes",src:n(99429).Z,width:"1866",height:"866"})),(0,a.kt)("p",null,"Now we are going to look at qotd-rating application and verify all the simulated failure conditions based on the information we see in the graphs. For example: we can see the latency spike to 0.9 second as shown in Step 2 and Step 3. This proves Condition 2 in the failures section. You can see this from the picture below. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Validating_failures_part2",src:n(4616).Z,width:"1869",height:"1001"})),(0,a.kt)("p",null,"Now we can see all the end points getting errors as shown in the picture below which satisfies Condition 1. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"see_all_failures_with_GET_Ratings",src:n(28229).Z,width:"1860",height:"963"})),(0,a.kt)("p",null,"Now we have to analyze all the failures by from the qotd-rating service as shown in the picture below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GET_Ratings",src:n(31079).Z,width:"1877",height:"993"})),(0,a.kt)("p",null,"In this Analytics screen you can see that we are automatically looking at qotd-rating service and trying to expose only the 4XX and 5XX response codes as shown in the picture below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"4XX_5XX_Analytics",src:n(71118).Z,width:"1867",height:"1008"})),(0,a.kt)("p",null,"Now we are selecting the top group which has the most 4XX and 5XX errors. Notice you did not have to type any SQL query to get to this result since Instana automatically knows the context of your troubleshooting scenario."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select_Group",src:n(5474).Z,width:"1877",height:"1003"})),(0,a.kt)("p",null,"Now we have all the traces with 4XX and 5XX response codes and we can select any one of them to see what is going on inside our code."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"select_red_color",src:n(43017).Z,width:"1874",height:"994"})),(0,a.kt)("p",null,"you can see the 500 response code and warning Log message below along with the stack trace which will tell you the exact code with the line number responsible for the problem."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"STACK_TRACE_Error_Logs",src:n(12463).Z,width:"1878",height:"997"})),(0,a.kt)("p",null,"Lastly you can see the log message which the simulation injected. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Log_message",src:n(92891).Z,width:"1854",height:"953"})))}d.isMDXComponent=!0},71118:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/4XX_5XX_Analytics-fa203471ab23a4ca9efcb0b51ed6c57d.png"},61281:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/4XX_5XX_response_codes-2fb0cbf431378cdf97730c1c4e5c36de.png"},65383:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Click_On_Applications1-e7fc29934724aa9b510dcf23ac103ec8.png"},66398:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Click_on_Ratings_Endpoint_Failures-8a2496cdeec3818706669260b7d34095.png"},22470:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Click_on_Start-7a27e3f48442732a36e1e6b1274a464f.png"},55324:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Click_on_qotd_rating-544da7bf3c841b4bbc2f768b63c71cf4.png"},99429:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Drag_drop_erroneous_spikes-fb40bdaadd35d7cd02cd9bb681390d76.png"},31079:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/GET_Ratings-b855dd6671afe1b0774b1950c2ebff38.png"},92891:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Log_message-7d48e791eca91a54d279080c2d21dea5.png"},12463:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/STACK_TRACE_Error_Logs-06c907a541815d77b0cc3bead5179cf6.png"},5474:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Select_Group-7a375337fa0b8a4d3e72071eaedfeb07.png"},4616:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Validating_failures_part2-abe113a9676f1e3025da1d9e525e144a.png"},28229:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/see_all_failures_with_GET_Ratings-004a742db9e848ca8a092047c80a589b.png"},43017:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/select_red_color-498d408da3cae0bd02e24cd3a43c298a.png"}}]);