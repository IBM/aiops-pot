"use strict";(self.webpackChunkai_ops_pot=self.webpackChunkai_ops_pot||[]).push([[844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||s;return n?a.createElement(g,o(o({ref:t},h),{},{components:n})):a.createElement(g,o({ref:t},h))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const s={sidebar_position:7},o="Troubleshoot an issue",r={unversionedId:"Instana POT/MQ-ACE/Troubleshoot-an-issue",id:"Instana POT/MQ-ACE/Troubleshoot-an-issue",title:"Troubleshoot an issue",description:"In this section of the lab, you will learn how Instana can help you get to root cause of a problem in a quick and intuitive manner.",source:"@site/docs/Instana POT/MQ-ACE/Troubleshoot-an-issue.md",sourceDirName:"Instana POT/MQ-ACE",slug:"/Instana POT/MQ-ACE/Troubleshoot-an-issue",permalink:"/aiops-pot/docs/Instana POT/MQ-ACE/Troubleshoot-an-issue",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Explore Instana",permalink:"/aiops-pot/docs/Instana POT/MQ-ACE/Explore/"},next:{title:"Turbonomic POT",permalink:"/aiops-pot/docs/category/turbonomic-pot"}},l={},c=[{value:"Evaluate the Events via an Incident",id:"evaluate-the-events-via-an-incident",level:2},{value:"Analyze the Calls",id:"analyze-the-calls",level:2},{value:"Summary",id:"summary",level:2}],h={toc:c},u="wrapper";function p(e){let{components:t,...s}=e;return(0,i.kt)(u,(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"troubleshoot-an-issue"},"Troubleshoot an issue"),(0,i.kt)("h2",{id:""}),(0,i.kt)("p",null,"In this section of the lab, you will learn how Instana can help you get to root cause of a problem in a quick and intuitive manner."),(0,i.kt)("h2",{id:"evaluate-the-events-via-an-incident"},"Evaluate the Events via an Incident"),(0,i.kt)("p",null,"On the left side, select ",(0,i.kt)("strong",{parentName:"p"},"\u201cEvents\u201d")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"events",src:n(68637).Z,width:"2554",height:"1208"})),(0,i.kt)("p",null,"This will open up a panel showing all of the Incidents that are affecting the monitored systems and applications. Incidents are the raw Events that have been correlated via Analytics into an Incident."),(0,i.kt)("p",null,"Make sure that the time selection in the upper right corner is set to ",(0,i.kt)("strong",{parentName:"p"},"\u201cLast hour\u201d")),(0,i.kt)("p",null,"As seen in the previous picture, select the Incident that is triggering on the ",(0,i.kt)("strong",{parentName:"p"},"\u201cQOTD High Erroneous Call Rate\u201d")," request on entity vader-acemq.coc-ibm.com-BK1:EG2. It indicates that there are large numbers of erroneous/failed requests."),(0,i.kt)("p",null,"You will see the details related to raw Events that were correlated via analytics into an Incident."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"incident",src:n(55553).Z,width:"2560",height:"1528"})),(0,i.kt)("p",null,"In this case, you should see the Triggering Event and a few Related Events. The Triggering Event is the first event that starts to impact a service or a website. The Related Events are events that Instana determined are related by leveraging analytics including the relationships that exist between the various entities, services, and endpoints."),(0,i.kt)("p",null,"Within the Incident, you can see when the Incident opened and in some cases, when it closed. And, you can see the Incident Timeline. This is the time when each event opened and closed. If the event is still open, it will be color coded with the event severity."),(0,i.kt)("p",null,"On the right side, click on the ",(0,i.kt)("strong",{parentName:"p"},"\u201d+\u201d")," symbol to expand the Triggering Event."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"single incident",src:n(48939).Z,width:"2550",height:"1526"})),(0,i.kt)("p",null,"You can see in the historical graph that there are periods of time where erroneous (failed) calls are high."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(38359).Z,width:"1152",height:"341"})),(0,i.kt)("h2",{id:"analyze-the-calls"},"Analyze the Calls"),(0,i.kt)("p",null,"Next, click the \u201cAnalyze Calls\u201d button to analyze the calls."),(0,i.kt)("p",null,"You will be taken to an analytics screen where you can see all of the failed calls for ",(0,i.kt)("strong",{parentName:"p"},"\u201cPOST /order\u201d"),". gen.supplychain is the ACE flow. You can also see latency for the calls is high and you can see a number of calls are failing."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(34467).Z,width:"1872",height:"1198"})),(0,i.kt)("p",null,"Select one of the failing ",(0,i.kt)("strong",{parentName:"p"},"\u201cPOST /order\u201d")," calls"),(0,i.kt)("p",null,"You will be taken to a screen where you can see the Call Stack and Stack Trace data. You explored this previously, but you did it with a good transaction. Now you are examining a failed transaction."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(99502).Z,width:"2304",height:"1352"})),(0,i.kt)("p",null,"Scroll to the bottom of the page where you see the ",(0,i.kt)("strong",{parentName:"p"},"\u201cCalls\u201d"),". This shows you the timeline of the calls for this single transaction."),(0,i.kt)("p",null,"You\u2019ll notice that there are plus signs. Click on the plus signs to expand the call stack."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(52208).Z,width:"1368",height:"594"})),(0,i.kt)("p",null,"When you see errors, normally you go to the bottom of the call stack. That\u2019s because the error in the last call is likely affecting the upstream calls."),(0,i.kt)("p",null,"Click on the last call and examine the information on the right side. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(46959).Z,width:"1398",height:"706"})),(0,i.kt)("p",null,"In your spare time, you can click on other types of transactions in the Call Stack."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(16198).Z,width:"821",height:"961"})),(0,i.kt)("p",null,"That completes this section of the lab."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In this lab, you learned how to diagnose a problem in Instana, determining that the queue was full and preventing transactions from completing."),(0,i.kt)("p",null,"To continue with the labs, select one of the lab exercises in the upper left corner or select one of the images below."))}p.isMDXComponent=!0},99502:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/badCall-5ace6bb52b4cede5cb8ab5da094142b8.png"},52208:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/callStack-e00e8f8db81dcb844bb80423e7d75904.png"},16198:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/econnerefused-5ae71a88ec35c73dd5f76694e01ffb80.png"},38359:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/erroneous-1492faefdd1e99aed8b1771f825bf093.png"},68637:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/erroneousBK1-70b33baed3f8d641fa8468fc20e1fe0b.png"},55553:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/incident-6f75695e478c746d11da662a033c13d7.png"},46959:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/postError-1baa05113c80082b489f241882965cb1.png"},34467:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/selectCall-f58aee382e122be9630bb01a3a59b039.png"},48939:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/singleIncident-93a9cb25dbcddf360e9e78e1256ebc44.png"}}]);