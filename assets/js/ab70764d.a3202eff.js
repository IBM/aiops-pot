"use strict";(self.webpackChunkai_ops_pot=self.webpackChunkai_ops_pot||[]).push([[953],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||h[m]||i;return a?n.createElement(k,p(p({ref:t},c),{},{components:a})):n.createElement(k,p({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,p[1]=o;for(var l=2;l<i;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33382:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:3},p="Create an Application Perspective",o={unversionedId:"Instana POT/WebSphere-DB2/define-app-perspective",id:"Instana POT/WebSphere-DB2/define-app-perspective",title:"Create an Application Perspective",description:"Introduction",source:"@site/docs/Instana POT/WebSphere-DB2/define-app-perspective.md",sourceDirName:"Instana POT/WebSphere-DB2",slug:"/Instana POT/WebSphere-DB2/define-app-perspective",permalink:"/aiops-pot/docs/Instana POT/WebSphere-DB2/define-app-perspective",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Instana Agent Installation",permalink:"/aiops-pot/docs/Instana POT/WebSphere-DB2/agent-install"},next:{title:"Explore Instana",permalink:"/aiops-pot/docs/Instana POT/WebSphere-DB2/ui-tour"}},s={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Start the Stock Trader application",id:"start-the-stock-trader-application",level:2},{value:"Test the Stock Trader Application",id:"test-the-stock-trader-application",level:2},{value:"Apply a load Generator",id:"apply-a-load-generator",level:2},{value:"Create the Application Perspective",id:"create-the-application-perspective",level:2},{value:"Explore the Application Perspective",id:"explore-the-application-perspective",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:l},d="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-an-application-perspective"},"Create an Application Perspective"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this section of the lab, you will verify the Stock Trader application. The application is pre-configured to include any required chnages needed to enable monitoring. Some technologies such as java don't require any configuration, but others require monitor configuration changes so that the application can be monitored. "),(0,r.kt)("h2",{id:"start-the-stock-trader-application"},"Start the Stock Trader application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign in to the Bastion host and select the Terminal icon from the Activities menu. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"ssh to the ipot-was Virtual Machine"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ssh -p 2022 cocadmin@ipot-was\n")),(0,r.kt)("p",{parentName:"li"},"Enter the password for the cocadmin user.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sudo to the root user"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo -i\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify the Websphere Application server is in Active status"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl status was\n")),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{alt:"Start_Services",src:a(16540).Z,width:"1420",height:"736"})))),(0,r.kt)("h2",{id:"test-the-stock-trader-application"},"Test the Stock Trader Application"),(0,r.kt)("p",null,"In this section you will verify the Stock Trader application by logging in as a trader and submitting a test stock trading request."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign in to the ",(0,r.kt)("strong",{parentName:"p"},"Bastion host")," and select the ",(0,r.kt)("strong",{parentName:"p"},"Firefix")," Web Browser from the ",(0,r.kt)("strong",{parentName:"p"},"Activities")," menu. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the URL to the trader application homepage\nhttp://ipot-was:9080/trade"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{alt:"Trader_App_Homepage",src:a(76326).Z,width:"2560",height:"1306"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Go Trade")," application link."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Perspective_Gotrade",src:a(43009).Z,width:"1592",height:"802"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login with the user ",(0,r.kt)("strong",{parentName:"p"},"uid:0")," and password ",(0,r.kt)("strong",{parentName:"p"},"xxx")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Perspective_Rrader_Welcome",src:a(81908).Z,width:"1642",height:"1050"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the quotes button to load sample stock quotes."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Perspective_Stocks",src:a(46270).Z,width:"1648",height:"1190"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Buy")," button for any of the five stocks to create a new trade."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Perspective_Stocks_Quotes",src:a(74322).Z,width:"1624",height:"1176"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The stock order confirmation page shows the new trade order."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Perspective_Stocks_Buy",src:a(16705).Z,width:"1642",height:"774"})))),(0,r.kt)("h2",{id:"apply-a-load-generator"},"Apply a load Generator"),(0,r.kt)("p",null,"In this section you will generate sample load that will request stock quotes and creat trade orders in the application."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the terminal window, create the load generator script that creates a request to the http://ipot-was:9080/trade/scenario page"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cat << 'EOF' > load.sh\n#!/bin/bash\n\ncat << 'EOFSTOCKS' > stocks.txt\n0\n1\n2\n3\n4\nEOFSTOCKS\n\nstocks=($(cat stocks.txt))\n\nwhile true; do sleep 1; curl -s -o /dev/null http://ipot-was:9080/trade/scenario;rand=${stocks[RANDOM % ${#stocks[@]}]}; curl -s -o /dev/null -d \"action=buy&symbol=s%${rand}&quantity=100\" -X POST http://ipot-was:9080/trade/scenario;\ndone\nEOF\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the script permissions."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"chmod 755 load.sh\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Launch the script so that it runs as a background process."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./load.sh &\n")))),(0,r.kt)("h2",{id:"create-the-application-perspective"},"Create the Application Perspective"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the Instana left navigation menu, select the ",(0,r.kt)("strong",{parentName:"li"},"Applications")," icon and select the ",(0,r.kt)("strong",{parentName:"li"},"ADD")," icon at the bottom right of the page.")),(0,r.kt)("p",null,"   ",(0,r.kt)("img",{alt:"Instana_Applications",src:a(33251).Z,width:"1956",height:"884"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"New Application Perspective")," option to load the Application perspective wizard"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Instana_App_Perspective",src:a(21648).Z,width:"2464",height:"1120"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Services and Endpoints")," template in the left navigation and select ",(0,r.kt)("strong",{parentName:"p"},"Next"),"."),(0,r.kt)("p",{parentName:"li"},"The Application Perspective menu presents the wide range of templates (see above) for rapidly creating Perspectives for different use cases. These templates were created for common use cases that many of our customers implement and have been continuously improved by feedback from them. There\u2019s also a selection for Custom Tags which lets you assign the information that Instana captures in any way that meets your requirements."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"App_Perspective_Wizard",src:a(40606).Z,width:"2036",height:"1056"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Add Filter")," button to create a new filter and select the ",(0,r.kt)("strong",{parentName:"p"},"Zone")," attribute"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"App_Perspective_Fitler",src:a(32880).Z,width:"2034",height:"1058"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"ipot-was")," Zone. This is the zone name that was used in the previous section. "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"App_Perspective_Ipot-Was_Zone",src:a(21232).Z,width:"2110",height:"1210"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"All downstream services")," and select Next. This option will automatically include all the services that from the entire end-to-end dependency chain of the core set of services.\\\nThe preview panel information is also carried along to show the services that were selected. This is shown in the figure as follows.\n",(0,r.kt)("img",{alt:"App_Perspective_Zone",src:a(73655).Z,width:"2036",height:"1050"})))),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a name for the Application perspective select ",(0,r.kt)("strong",{parentName:"p"},"Create"),". The ",(0,r.kt)("strong",{parentName:"p"},"All Calls")," options with monitor calls made to the applcation and internal application calls."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"App_Perspective_Name",src:a(84253).Z,width:"2026",height:"1046"})))),(0,r.kt)("h2",{id:"explore-the-application-perspective"},"Explore the Application Perspective"),(0,r.kt)("p",null,"After creating the application, your screen should have automatically changed context to show the Application Perspective that you just defined."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initially, you probably won\u2019t see any metrics on the screen. Change the timeframe in the ",(0,r.kt)("strong",{parentName:"p"},"Time Picker")," to ",(0,r.kt)("strong",{parentName:"p"},"Last minute")," as shown below so that you can see the metrics populated in the perspective."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"Update_Time_Picker",src:a(83755).Z,width:"557",height:"190"})))),(0,r.kt)("p",{parentName:"li"},"Alternatively, in the upper right corner, click the ",(0,r.kt)("strong",{parentName:"p"},"Live")," button and within a short amount of time you should start to see metrics in the widgets.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will see something similar to the following screen. Note the columns on this dashboard including columns for each application key performance indicator: ",(0,r.kt)("strong",{parentName:"p"},"Calls, Latency and Erroneous Call Rate")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Application_Perspective",src:a(96384).Z,width:"2550",height:"1396"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You\u2019ll notice a number of tabs across the top of the screen. Explore these tabs. In particular, let\u2019s take a look at the ",(0,r.kt)("strong",{parentName:"p"},"Depedencies")," tab. On the dependencies tab, you\u2019ll see a complete topology of the application services. This topology is discovered automatically. You can see transactions flowing between the different nodes in the topology. "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"App_Perspective_Dependencies",src:a(18522).Z,width:"2344",height:"1148"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select on ",(0,r.kt)("strong",{parentName:"p"},"Upstream/Downsteam")," near the top of the page. This will allow you to see a list of Upstream and Downstream services for the application."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"App_Perspective_Upstream",src:a(88255).Z,width:"2434",height:"1222"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Stack")," where you can view the Application, Kubernetes, and Infrastructure stack that makes up the application.\\"),(0,r.kt)("p",{parentName:"li"},"All of this contextual and relationship data helps you analyze and debug you applications to get to root cause as quickly as possible. In addition, our built-in analytics uses this data to automatically group multiple related ",(0,r.kt)("strong",{parentName:"p"},"Events")," into a single ",(0,r.kt)("strong",{parentName:"p"},"Incident")," for diagnosis."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"App_Perspective_Stack",src:a(62302).Z,width:"2432",height:"1204"})),(0,r.kt)("p",{parentName:"li"},"Close the Stack dialog by either selecting the Stack button or anywhere on the background of the Instana page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Services")," Tab. Under Services, note the number of services included in each Application Perspective."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"App_Perspective_Services",src:a(94389).Z,width:"2440",height:"968"})))),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Note additional information provided for each service: ",(0,r.kt)("strong",{parentName:"p"},"type, technology, latency, endpoints, and health"),". ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on any column header to sort the list based on that column\u2019s value. Note the different filtering options available on the right above the list: ",(0,r.kt)("strong",{parentName:"p"},"type, technology, and text-based search"),". ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Notice the dashboard filtering options (upper pane, right side, next to ",(0,r.kt)("strong",{parentName:"p"},"Analyze Services"),"). Click on the ",(0,r.kt)("strong",{parentName:"p"},"Type")," box and select *",(0,r.kt)("strong",{parentName:"p"},"*Http")," from the drop down. Notice the information shown on the dashboard based on the ",(0,r.kt)("strong",{parentName:"p"},"type")," filter."))),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you do not see data in ",(0,r.kt)("strong",{parentName:"p"},"Application Perspecive")," immediately after creation, make sure to adjust the ",(0,r.kt)("strong",{parentName:"p"},"time picker")," to ",(0,r.kt)("strong",{parentName:"p"},"Live")," or ",(0,r.kt)("strong",{parentName:"p"},"Last Minute")," and give a few seconds and you will see the data flowing.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Even after following the step 1, if you still don't see the data immediately and/or lose data after working on the lab for few hours, then please contact your lab instructor. It is possible that the  data retention has caused the space to run out on Instana backend. "))),(0,r.kt)("p",null,"Alternatively,"),(0,r.kt)("p",null,"In the later case, you can try setting ",(0,r.kt)("strong",{parentName:"p"},"time picker")," to past time frame - such as to last 6 hrs, last 12 hrs or provide past dates t0 see the data. However, note that, by doing this, you will be looking at the old data set."))}h.isMDXComponent=!0},18522:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/app_perspective_dependencies-6ce007c6936e485ba4dc2b4351ef82df.png"},32880:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/app_perspective_filter-16d2519fd1ceba15647683a98e5dab26.png"},21232:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/app_perspective_ipot-was_zone-b806449f62ce9854327585bb9b9465ad.png"},84253:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/app_perspective_name-1b29c18e860801be2e670fb26f752fd2.png"},94389:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/app_perspective_services-b34ba87937c9cede565703a17e92dd02.png"},62302:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/app_perspective_stack-41e2006aec5b994e3189e3028f988096.png"},88255:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/app_perspective_upstream-0d4fc37eae9fa8cdef83c49478ec9243.png"},40606:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/app_perspective_wizard-9ac8761d0c4450085048d3dc63f0ae27.png"},73655:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/app_perspective_zone-928f4170230a069620dd58340f305b64.png"},96384:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/application_perspective-1a0ac3b9837cc1ea4c5386088bbbb22b.png"},21648:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/instana_app_perspective-472d06c6f7035efba58dd36c058f9ebf.png"},33251:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/instana_applications-56eef8ea170974b0028db0e9123e7d51.png"},43009:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/perspective_gotrade-73ab26ef2869ee7f4602daab3bbaa9c9.png"},46270:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/perspective_stocks-3516a2691640bbccb0b502d51aec5201.png"},16705:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/perspective_stocks_buy-42765ab5e19e654547cf0ac956516f77.png"},74322:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/perspective_stocks_quotes-28c795b79e52c9fd9295c152d9c36ce6.png"},81908:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/perspective_trader_welcome-54adaa66babc7f8f3d971377f8d7ef05.png"},16540:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/start_services-5ada14e3dd3a65af43ba0dae43732f0b.png"},76326:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trader_app_homepage-c85800daa54a2876ebd16b8255a0d1ea.png"},83755:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/update_time_picker-3ebefd917bbb70da85872e957d0c9549.png"}}]);