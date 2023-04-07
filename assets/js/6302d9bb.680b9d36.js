"use strict";(self.webpackChunkai_ops_pot=self.webpackChunkai_ops_pot||[]).push([[430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||h[m]||i;return n?a.createElement(g,p(p({ref:t},c),{},{components:n})):a.createElement(g,p({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:o,p[1]=r;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:7},p="End User Monitoring",r={unversionedId:"Instana POT/Monitoring a Cloud Native App/end-user-monitoring",id:"Instana POT/Monitoring a Cloud Native App/end-user-monitoring",title:"End User Monitoring",description:"1: Websites and Mobile App Monitoring",source:"@site/docs/Instana POT/Monitoring a Cloud Native App/end-user-monitoring.md",sourceDirName:"Instana POT/Monitoring a Cloud Native App",slug:"/Instana POT/Monitoring a Cloud Native App/end-user-monitoring",permalink:"/aiops-pot/docs/Instana POT/Monitoring a Cloud Native App/end-user-monitoring",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Define App Perspectives",permalink:"/aiops-pot/docs/Instana POT/Monitoring a Cloud Native App/define-app-perspective"},next:{title:"Troubleshoot an issue",permalink:"/aiops-pot/docs/Instana POT/Monitoring a Cloud Native App/simulate-failure"}},l={},s=[{value:"1: Websites and Mobile App Monitoring",id:"1-websites-and-mobile-app-monitoring",level:2},{value:"2: Analytics",id:"2-analytics",level:2}],c={toc:s},d="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"end-user-monitoring"},"End User Monitoring"),(0,o.kt)("h2",{id:"1-websites-and-mobile-app-monitoring"},"1: Websites and Mobile App Monitoring"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You should first generate some traffic in the monitored application."),(0,o.kt)("p",{parentName:"admonition"},"Navigate to the Quote Of The Day application with the route URL "),(0,o.kt)("p",{parentName:"admonition"},"You could use ",(0,o.kt)("a",{parentName:"p",href:"http://169.62.62.174:32000/"},"http://169.62.62.174:32000/")),(0,o.kt)("p",{parentName:"admonition"},"Use the application to navigate to generate randon quotes , PDFs, and to buy some engraving.")),(0,o.kt)("p",null,"Next, let's take a look at Website and Mobile Application Monitoring. In this environment, Instana does not include any native mobile applications, but know that Instana can gather End User Monitoring (EUM) data from Mobile Applications. For now, we'll investigate the website monitoring."),(0,o.kt)("p",null,"Using the left side navigation, select ",(0,o.kt)("strong",{parentName:"p"},"Websites & Mobile Apps")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 1"),"I"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 20",src:n(34605).Z,width:"284",height:"470"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Website monitoring"),", often called ",(0,o.kt)("strong",{parentName:"p"},"End-User Monitoring (EUM)")," or ",(0,o.kt)("strong",{parentName:"p"},"Real-User Monitoring (RUM)"),", is an important tool to understand digital user experience."),(0,o.kt)("p",null,"Instana supports website monitoring by analyzing actual browser request times and route loading times. It allows detailed insights into the web browsing experience of users, and deep visibility into application call paths. The Instana website monitoring solution works by using a lightweight JavaScript agent, which is embedded into the monitored website."),(0,o.kt)("p",null,"To Configure ",(0,o.kt)("strong",{parentName:"p"},"EUM*,  Click on "),'"Add Website"** '),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 2"),"\n",(0,o.kt)("img",{alt:"explore application 21",src:n(44436).Z,width:"1885",height:"225"})),(0,o.kt)("p",null,"Type in the name as ",(0,o.kt)("strong",{parentName:"p"},'"QOTD"')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 3"),"\n",(0,o.kt)("img",{alt:"explore application 23",src:n(7551).Z,width:"1883",height:"724"})),(0,o.kt)("p",null,"Copy the 3 values as shown in ",(0,o.kt)("strong",{parentName:"p"},"Image 3")," to add these to the environment variables of the ",(0,o.kt)("strong",{parentName:"p"},"QOTD")," app deployment."),(0,o.kt)("p",null,"Login to the qotd master vm "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"ssh -p 2022 cocuser@169.62.62.174\n\n")),(0,o.kt)("p",null,"Edit the qotd deployment to add the env variables you copied - refer  ",(0,o.kt)("strong",{parentName:"p"},"Image 3")," above"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"kubectl -n qotd edit deployment qotd-web\n\n")),(0,o.kt)("p",null,"Scroll down the file to the to the section as shown here"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  creationTimestamp: null\n  labels:\n    app: qotd-web\nspec:\n  containers:\n  - env:\n    - name: LOG_LEVEL\n      value: info\n    - name: ENABLE_INSTANA\n      value: "true"\n    - name: INSTANA_REPORTING_URL\n    - name: INSTANA_ENUM_MIN_JS_URL\n    - name: INSTANA_KEY\n    - name: USE_REQ_TOKEN\n      value: "true"\n    - name: POLLING_FREQUENCY\n      value: "5000"\n    - name: ANOMALY_GENERATOR_URL\n      value: http://169.62.62.164:3012/services/web\n    - name: QUOTE_SVC\n      value: http://169.62.62.165:3001\n')),(0,o.kt)("p",null,"Add values which were copied earlier as shown in ",(0,o.kt)("strong",{parentName:"p"},"Image 4")," below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  creationTimestamp: null\n  labels:\n    app: qotd-web\nspec:\n  containers:\n  - env:\n    - name: LOG_LEVEL\n      value: info\n    - name: ENABLE_INSTANA\n      value: "true"\n    - name: INSTANA_REPORTING_URL\n      value: https://169.62.62.167.nip.io:446/eum/\n    - name: INSTANA_ENUM_MIN_JS_URL\n      value: https://169.62.62.167.nip.io:446/eum/eum.min.js"\n    - name: INSTANA_KEY\n      value: 1Xd7bMjqSe2SEn5-6kl71Q\n    - name: USE_REQ_TOKEN\n      value: "true"\n    - name: POLLING_FREQUENCY\n      value: "5000"\n    - name: ANOMALY_GENERATOR_URL\n      value: http://169.62.62.164:3012/services/web\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 4")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 24",src:n(80538).Z,width:"616",height:"334"})),(0,o.kt)("p",null,"Once you save and close the file, the pod will restart.\nWait for a min and go to instana home page\n",(0,o.kt)("a",{parentName:"p",href:"https://169.62.62.167.nip.io/"},"https://169.62.62.167.nip.io/")),(0,o.kt)("p",null,"Using the left side navigation again, select Websites & Mobile Apps"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 5")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 20",src:n(34605).Z,width:"284",height:"470"})),(0,o.kt)("p",null,"You will see a list of websites that are being monitored. In this environment, you'll see the ",(0,o.kt)("strong",{parentName:"p"},'Quote Of The Day"')," application website you just configured. Click on the blue link for the website to drill down for more details."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 6")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 26",src:n(39764).Z,width:"1905",height:"434"})),(0,o.kt)("p",null,"Explore the additional data available within the website monitoring by clicking on some of the other tabs."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 7")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 27",src:n(74953).Z,width:"1806",height:"771"})),(0,o.kt)("p",null,"Next, explore the ",(0,o.kt)("strong",{parentName:"p"},"Filters")," that you see at the top of the screen.\nIn this environment, the filters will not be very interesting because there is only automated workload coming from a single location. But, usually, you can use this information to filter the web traffic down to specific browser types, OS's, geographic locations and key metadata tags. This can be very useful in identifying whether specific network locations, browser, or OS's are having performance problems. If you want to see typical EUM data, you can look at one of the IBM sales or Business Partner demo environments."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 8")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 28",src:n(78941).Z,width:"842",height:"216"})),(0,o.kt)("p",null,"At the top of the screen, click on the ",(0,o.kt)("strong",{parentName:"p"},"Analyze Page Loads button")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 9"),"\n",(0,o.kt)("img",{alt:"explore application 29",src:n(4164).Z,width:"426",height:"153"})),(0,o.kt)("p",null,"You will see a detailed list of the web requests grouped by URL path."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 10")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 30",src:n(18312).Z,width:"1774",height:"823"})),(0,o.kt)("p",null,"Next, select one of the requests. You will see a detailed page showing the EUM data and more. At the top of the page, you'll notice that you can see the user that made the request. This sensitive data can be omitted by Instana if the customer desires. You'll also see the Browser version and operating system that was used to access the web page. Depending on the environment, you'll also see geolocation data for where the person accessed the application. In some cases the private IP addresses are not mapped and the ",(0,o.kt)("strong",{parentName:"p"},"User Location")," data will be empty.\nexample select here is ",(0,o.kt)("strong",{parentName:"p"},"order/92")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 11")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 31",src:n(8350).Z,width:"1543",height:"808"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 12")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 32",src:n(19469).Z,width:"1775",height:"804"})),(0,o.kt)("p",null,"Scroll down on the page and you'll see a detailed breakdown of the request including timings for the key page content."),(0,o.kt)("p",null,"Expand one of the entries on the right by clicking the down arrow to view more details.\n",(0,o.kt)("strong",{parentName:"p"},"Image 13")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 33",src:n(82257).Z,width:"1420",height:"619"}),"\nIf you click on the View Backend Trace button, you can investigate the backend trace data that you saw earlier in the lab."),(0,o.kt)("h3",{id:""}),(0,o.kt)("h2",{id:"2-analytics"},"2: Analytics"),(0,o.kt)("p",null,"Next, we're going to investigate Instana's unbounded analytics. Navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Analytics")," using the left side navigation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 14")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 34",src:n(53681).Z,width:"314",height:"641"})),(0,o.kt)("p",null,"Initially, you will see a screen showing 100% of the ",(0,o.kt)("strong",{parentName:"p"},"Application Calls")," that are happening in the environment."),(0,o.kt)("p",null,"Select the dropdown at the top of the page labeled ",(0,o.kt)("strong",{parentName:"p"},"Applications / Calls")," to view other options. For example, you could analyze the traces, websites, mobile applications, or profiles. For now, close the dialog and we'll analyze the ",(0,o.kt)("strong",{parentName:"p"},"Application Calls")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 15")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 35",src:n(72055).Z,width:"808",height:"601"}),"\nOne of the key Instana capabilities is ",(0,o.kt)("strong",{parentName:"p"},"unbounded analytics"),". This allows you to apply ad-hoc queries to easily find the data you are looking for. On the screen, you'll see a couple of different ways that you can query/filter the metrics."),(0,o.kt)("p",null,"One the left side, you'll see a number of about of the box filters. Expand the dropdown arrows to see the options. Then, select one of the checkboxes to filter the data. (in this example select ",(0,o.kt)("strong",{parentName:"p"},"Quote Of The Day"),")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 16")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 36",src:n(74276).Z,width:"659",height:"891"})),(0,o.kt)("p",null,"Now, uncheck the checkbox to remove the filter."),(0,o.kt)("p",null,"Another option is to use the ",(0,o.kt)("strong",{parentName:"p"},"Filter")," and ",(0,o.kt)("strong",{parentName:"p"},"Group")," options at the top of the page. Let's try out an example. Let's say you want to find the slowest SQL statements in the environment. Let's try to implement a ",(0,o.kt)("strong",{parentName:"p"},"Filter")," and ",(0,o.kt)("strong",{parentName:"p"},"Group")," to accomplish that."),(0,o.kt)("p",null,"Select the ",(0,o.kt)("strong",{parentName:"p"},"Add Filter")," button at the top of the page. Then, select ",(0,o.kt)("strong",{parentName:"p"},"Call Type")," and select ",(0,o.kt)("strong",{parentName:"p"},"Database")),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Add Group")," button. Then, type ",(0,o.kt)("strong",{parentName:"p"},"database statement")," in the filter box and select ",(0,o.kt)("strong",{parentName:"p"},"Database >Statement")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 17")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 37",src:n(23648).Z,width:"1380",height:"735"})),(0,o.kt)("p",null,"This will group all of the Database statements by unique SQL statements. You can then sort these statements by latency, erroneous calls, etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 18")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 38",src:n(14243).Z,width:"1530",height:"674"})),(0,o.kt)("p",null,"Note: You also have the option ",(0,o.kt)("strong",{parentName:"p"},"select metrics")," to choose the metrics that you want to see on the screen. For example, change latency from Average to 95th percentile."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now, let's explore one more key capability within Instana."),(0,o.kt)("p",null,"In the upper right corner of the screen, there is an icon of a chain link. Click on the link and a dialog will open. By clicking the Copy button, you can send a link to a team member. When they open the link, it will take them to a screen with the exact same context that you are looking at. This can be very valuable when collaborating with team members to diagnose a problem. Within the dialog, you'll see that there is a checkbox to ",(0,o.kt)("strong",{parentName:"p"},"Lock current time range"),". By locking the current time range, when the link it opened, it will take the person to a view with the exact same time range that you are looking at. Otherwise, they are taken to the most recent time range."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image 19")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 39",src:n(14453).Z,width:"782",height:"309"})),(0,o.kt)("p",null,"That completes the ",(0,o.kt)("strong",{parentName:"p"},"End User Monitoring")," section,  of the lab."),(0,o.kt)("hr",null))}h.isMDXComponent=!0},34605:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_20-ce172a8512a45f46b9e1e0f46acdd98c.jpg"},44436:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_21-3d6a42a24a093e3f0763d149b2e6bcf9.jpg"},7551:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_23-e16a77ab8af3908a845f16d7689c01c0.jpg"},80538:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_24-d85cf1496891bf7360db9bc0bf60d16a.jpg"},39764:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_26-9f8305cfda67311d692b52d4a1773824.jpg"},74953:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_27-bdaaeb0819ba8fd18c9280103b166ac2.jpg"},78941:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_28-1da6c193add86ef3a197c73300afb289.jpg"},4164:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_29-5718ea4cceadb95cd3f37bfdb60d1cc2.jpg"},18312:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_30-8c3d3264b5038dc1b03a55e2b31d89e4.jpg"},8350:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_31-e455bd6d7d2070e426f8804c1a45fe9d.jpg"},19469:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_32-daeb9ec905bd03f8cbbd083f4d53f980.jpg"},82257:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_33-3b900fb4aa00fcf11c5a085f2ccba70f.jpg"},53681:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_34-24dce4fabf00c8f648d93c69514c22ad.jpg"},72055:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_35-1290332f25614bc2d972b41e532bddc0.jpg"},74276:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_36-660b945512e75a857056383db5e9a524.jpg"},23648:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_37-05d6019f29259006542db7d17a1f9376.jpg"},14243:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_38-a59b2573ac530776b6a2a9a9ecd35d0a.jpg"},14453:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_39-a1f6765cc530e00610218851186b945b.jpg"}}]);