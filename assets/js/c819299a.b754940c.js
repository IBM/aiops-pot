"use strict";(self.webpackChunkai_ops_pot=self.webpackChunkai_ops_pot||[]).push([[109],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,u=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(u,r(r({ref:t},h),{},{components:a})):n.createElement(u,r({ref:t},h))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},63834:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={sidebar_position:1},r="Overview",s={unversionedId:"Instana POT/Monitoring a Cloud Native App/overview",id:"Instana POT/Monitoring a Cloud Native App/overview",title:"Overview",description:"Introduction",source:"@site/docs/Instana POT/Monitoring a Cloud Native App/overview.md",sourceDirName:"Instana POT/Monitoring a Cloud Native App",slug:"/Instana POT/Monitoring a Cloud Native App/overview",permalink:"/aiops-pot/docs/Instana POT/Monitoring a Cloud Native App/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Lab 1: Cloud Native",permalink:"/aiops-pot/docs/category/lab-1-cloud-native"},next:{title:"Instana Agent Installation",permalink:"/aiops-pot/docs/Instana POT/Monitoring a Cloud Native App/k8s-agent-install"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Using the Bastion and Guacomole Interface",id:"using-the-bastion-and-guacomole-interface",level:3},{value:"Using the Clipboard",id:"using-the-clipboard",level:4},{value:"Using the terminal",id:"using-the-terminal",level:4},{value:"Using the WireGuard VPN",id:"using-the-wireguard-vpn",level:3},{value:"Start Middleware",id:"start-middleware",level:2},{value:"Verify Applications",id:"verify-applications",level:2},{value:"Robot Shop",id:"robot-shop",level:3},{value:"Quote of the Day",id:"quote-of-the-day",level:3},{value:"Number Factory",id:"number-factory",level:3},{value:"Anomaly Generator",id:"anomaly-generator",level:3},{value:"Summary of links and credentials",id:"summary-of-links-and-credentials",level:3}],h={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this lab, you will be going through several key exercises in order to learn more setting up Instana and using it to monitor a Cloud Native Application. The Cloud Native application has already been deployed for your convenience. The lab should be executed in the numbered order that you see on the left side of the screen. Some of the sections have dependencies on the previous section."),(0,o.kt)("p",null,"Please review the Architecture (below) to understand the environment before proceeding with the actual lab. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First, you will learn how to Install the Instana Agent into a variety of environments (Kubernetes, Docker, and Linux server)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You will next learn how to navigate the Instana UI and get familiar with the Instana interface including reviewing the different monitoring sensors.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Once you are familiar with the application, you will define an "Application Perspective" (i.e. learn how to group your application components) ')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once you have the applications instrumented with Instana sensors, you will go through a series of troubleshooting use cases to explore Instana's capabilities"))),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"This PoT environment consists of number of VMs and Kubernetes clusters which host Cloud Native (microservice) applications, load generators (to provide a constant stream of data) and middleware components. There are three separate and independent demo applications that are deployed across a number of hosts;"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Robotshop"),(0,o.kt)("li",{parentName:"ul"},"Quote of the Day"),(0,o.kt)("li",{parentName:"ul"},"Number Factory")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Robotshop")," is the traditional demo app for Instana.  It was originally created before the IBM aquisition as a polyglot application (multiple languages and technologies) that shows off most of Instana's features.   ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/instana/robot-shop"},"https://github.com/instana/robot-shop")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Quote of the Day")," (QotD) is an application created by the IBM Americas Center of Competency (CoC) specifically for use with AI Manager, and Log anomaly detection.  It is actively being maintained, and has been extended to show off specific Instana features as well.  While not as comprehensive as RobotShop when it comes to Instana features it is a close second.  ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.com/quote-of-the-day"},"https://gitlab.com/quote-of-the-day")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Number Factory")," is a light weight microservice application, based on the same framework as QotD, but its UI is minimal, and all traffic is limited to small json objects.  "),(0,o.kt)("p",null,"The actual functionality of these applications is not that important, other than to say they represent small Cloud Native applications with many serivces that communicate with each other over HTTP REST.  They also provide metrics, traces and logs for Instana to collect and monitor.  The services implemented in Node.js and Java have the Instana Collector installed which enables Instana to get tracing data that is used to capture the flows, identify services, service dependencies and topology aspects."),(0,o.kt)("p",null,"Each of these applications has a load generator that executes the functionaly of the application through the main user interface of each application, thereby simulating constant user traffic to the application.  "),(0,o.kt)("p",null,"There are 8 separate VMs supporting this environment.  The distribution of the application's components are shown below.\n",(0,o.kt)("img",{alt:"app comp distribution",src:a(42619).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"This environment hosts two separate Kubernetes clusters (each cluster has a single master and worker node).  On one cluster the entire Robot Shop application is running (including load generator).  On the second Kubernetes cluster some of the Quote of the Day and Number Factory components are running."),(0,o.kt)("p",null,"A separate VM hosts some more of the components as containers.  Another VM hosts a MariaDB database and several other Node.js running as native apps on the VM (with ",(0,o.kt)("a",{parentName:"p",href:"https://pm2.io"},"PM2"),").  "),(0,o.kt)("p",null,"Another VM hosts middleware components including App Connect Enterprise (ACE) and a Message Queue.  The engraving component of the Quote of the Day application puts a new message on the message queue by calling a REST API provided by ACE.  "),(0,o.kt)("p",null,"Finally there is a separate VM that hosts the load generators for the Quote of the Day and Number Factory applications.  These load generators use a headless instance of Selenium Chrome web driver.  This enables the execution of the End User Monitoring functionality of Instana."),(0,o.kt)("p",null,"In summary; this distribution of microservice components and IBM middleware represent, on a small scale, the architecture of real world Cloud Native applications and the configurations they might be found in."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Once the environment has been provisioned you can access the applications in one of two ways.  The simplest way is to use the bastion machine's user interface through a web brower.  This requires no additional software to be installed on your machine.  The other way is to use the TechZone supplied VPN.  This requires you to install the ",(0,o.kt)("a",{parentName:"p",href:"https://www.wireguard.com/"},"WireGuard")," VPN client.  The advantage of doing this is that your local machine's browsers (and terminal clients) will directly access the environments without having to go through the web based user interface emulation (which can be awkward, especially when cutting and pasting snippets)."),(0,o.kt)("h3",{id:"using-the-bastion-and-guacomole-interface"},"Using the Bastion and Guacomole Interface"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the Reservation card when the Status is ",(0,o.kt)("strong",{parentName:"p"},"Ready"),".\n",(0,o.kt)("img",{alt:"status ready",src:a(37303).Z,width:"840",height:"710"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Bastion Remote Desktop")," link.\n",(0,o.kt)("img",{alt:"bastion link",src:a(41139).Z,width:"1546",height:"854"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Expand the tree and select the ",(0,o.kt)("strong",{parentName:"p"},"Remote Desktop")," item.\n",(0,o.kt)("img",{alt:"remote desktop link",src:a(48856).Z,width:"2258",height:"884"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will see the bastion machines desktop.  This is a RedHat Enterprise Linux machine.\n",(0,o.kt)("img",{alt:"rhel",src:a(94300).Z,width:"2256",height:"1616"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open up the web browser by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"Activities")," button at the upper left corner, then click on the FireFox icon.\n",(0,o.kt)("img",{alt:"firefox icon",src:a(9644).Z,width:"1244",height:"706"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Since this is the first time the browser was activated on this bastion machine, you will want to ",(0,o.kt)("strong",{parentName:"p"},"Refresh")," it.  Press the ",(0,o.kt)("strong",{parentName:"p"},"Refresh Firefox")," button.\n",(0,o.kt)("img",{alt:"refresh firefox",src:a(45298).Z,width:"2260",height:"1164"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Confirm the rest to default settings.\n",(0,o.kt)("img",{alt:"confirm reset",src:a(9811).Z,width:"1048",height:"474"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finally press the ",(0,o.kt)("strong",{parentName:"p"},"Let's go!")," button to restore the tabs.\n",(0,o.kt)("img",{alt:"restore windows",src:a(17825).Z,width:"2270",height:"1282"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The default web page will be shown the browser.\n",(0,o.kt)("img",{alt:"def page",src:a(34735).Z,width:"2258",height:"1162"})))),(0,o.kt)("h4",{id:"using-the-clipboard"},"Using the Clipboard"),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In order to use the clipboard with this UI emulation, you will need to use ",(0,o.kt)("a",{parentName:"p",href:"https://community.microstrategy.com/s/article/How-to-Use-Guacamole-to-Copy-and-Paste-Text-or-File-in-MicroStrategy-on-AWS?language=en_US"},"a separate popup window")," to paste text from your local laptop/workstation to the environments.  To open up this popup, on a Mac laptop;  press the ",(0,o.kt)("strong",{parentName:"p"},"Shift+Control+Option")," keys simultaneously.  On a Windows machine use ",(0,o.kt)("strong",{parentName:"p"},"Ctrl+Command+Shift"),".\n",(0,o.kt)("img",{alt:"clipboard",src:a(82172).Z,width:"2244",height:"1520"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the URL: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://169.62.62.167.nip.io/#/home")," with your local workstation then paste it into the clipboard popup you just exposed.\n",(0,o.kt)("img",{alt:"clipboard with text",src:a(38384).Z,width:"1212",height:"1368"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can collapse the clipboard popup with the same set of keys you used to open it.  Then place the cursor in the address bar of the web browser and use the context menu to paste the contents.\n",(0,o.kt)("img",{alt:"paste",src:a(98566).Z,width:"2228",height:"920"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Accept the security risk warning (it is because we are using self signed certs on Instana).  Press the ",(0,o.kt)("strong",{parentName:"p"},"Advanced")," button.\n",(0,o.kt)("img",{alt:"risk 1",src:a(58809).Z,width:"2200",height:"1558"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press the ",(0,o.kt)("strong",{parentName:"p"},"Accept the Risk and Continue")," button.\n",(0,o.kt)("img",{alt:"risk 2",src:a(26136).Z,width:"2166",height:"1564"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the clipboard popup and paste in the user and password information.  Then press the ",(0,o.kt)("strong",{parentName:"p"},"Sign In")," button.  The E-mail value is ",(0,o.kt)("inlineCode",{parentName:"p"},"admin@instana.local")," and the Password is ",(0,o.kt)("inlineCode",{parentName:"p"},"lfQTxDwLRW"),".\n",(0,o.kt)("img",{alt:"paste pass",src:a(61892).Z,width:"1258",height:"852"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the login to make it easier in the future.\n",(0,o.kt)("img",{alt:"save",src:a(47424).Z,width:"2200",height:"1084"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"At the bottom right press the ",(0,o.kt)("strong",{parentName:"p"},"Go to Instana!")," button.\n",(0,o.kt)("img",{alt:"log in",src:a(1177).Z,width:"822",height:"432"})))),(0,o.kt)("h4",{id:"using-the-terminal"},"Using the terminal"),(0,o.kt)("p",null,"Some of the lab instructions require the use of a Terminal (for direct login to host machines).  To open up a terminal on the bastion machine simply;"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press the ",(0,o.kt)("strong",{parentName:"p"},"Activities")," button then select the Terminal tool from the toolbar.\n",(0,o.kt)("img",{alt:"select term",src:a(86246).Z,width:"371",height:"640"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Test test the terminal with a simple Linux command like ",(0,o.kt)("inlineCode",{parentName:"p"},"uname -a"),".\n",(0,o.kt)("img",{alt:"uname",src:a(25361).Z,width:"1402",height:"946"})))),(0,o.kt)("p",null,"You have successfully logged into the Instana server via the bastion machine, and opened up a Terminal widow.  If you are not going to use the WireGuard VPN, then skip to the Verify Applications section."),(0,o.kt)("h3",{id:"using-the-wireguard-vpn"},"Using the WireGuard VPN"),(0,o.kt)("p",null,"Using the WireGuard VPN allows you to use your laptop or workstation's browser directly with with the Instana server as well as the UIs of the demo apps.  It also enables you to use your local Terminal to shell into the VMs as is required in some of the lab steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the WireGuard VPN client appropriate to your local operating system from: ",(0,o.kt)("a",{parentName:"p",href:"https://www.wireguard.com/install/"},"https://www.wireguard.com/install/"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the reservation page of your environment press the blue ",(0,o.kt)("strong",{parentName:"p"},"Download Wireguard VPN config")," button.  Save this file somewhere on your local workstation.\n",(0,o.kt)("img",{alt:"download config",src:a(28206).Z,width:"641",height:"488"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the WireGuard VPN client.  Press the ",(0,o.kt)("strong",{parentName:"p"},"Import tunnel(s) from file"),".  Select the file you just downloaded.\n",(0,o.kt)("img",{alt:"import",src:a(23883).Z,width:"795",height:"503"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You may be prompted to allow this configuration.  Press the ",(0,o.kt)("strong",{parentName:"p"},"Allow")," button.\n",(0,o.kt)("img",{alt:"allow",src:a(90508).Z,width:"256",height:"245"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Activate the VPN by pressing the ",(0,o.kt)("strong",{parentName:"p"},"Activate")," button.\n",(0,o.kt)("img",{alt:"activate",src:a(30752).Z,width:"797",height:"502"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The tunnel status should change to ",(0,o.kt)("strong",{parentName:"p"},"Active"),".  You can turn it off by pressing the ",(0,o.kt)("strong",{parentName:"p"},"Deactivate")," button whenyou are finished using it.\n",(0,o.kt)("img",{alt:"active",src:a(79661).Z,width:"798",height:"502"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can now verify that it is working by opening up a local web browser and naviating to one of the environments URLs, for example the Robot Shop application: ",(0,o.kt)("a",{parentName:"p",href:"http://169.62.62.185:31965"},"http://169.62.62.185:31965"),".\n",(0,o.kt)("img",{alt:"rs local",src:a(89010).Z,width:"1213",height:"748"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify your local terminal application works by shelling into one of the VMs. All of the VMs in this environment use the user/pwd ",(0,o.kt)("inlineCode",{parentName:"p"},"cocuser/**see password file**")," for access.  All of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," ports are set to 2022 instead of the default value 22 for security reasons.  You can test log into one of the VMs with the command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -p 2022 cocuser@169.62.62.187\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"screen shot",src:a(5620).Z,width:"974",height:"562"})))),(0,o.kt)("h2",{id:"start-middleware"},"Start Middleware"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," In the current version of this enviroment the middleware services need to be manually started.  The following instructions step you through this process."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open up a terminal window.  Shell into the ACE/MQ VM with the following command."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -p 2022 cocuser@169.62.62.188\n")),(0,o.kt)("p",{parentName:"li"},"Answer ",(0,o.kt)("strong",{parentName:"p"},"yes")," to the fingerprint prompt (2), and provide the password ",(0,o.kt)("inlineCode",{parentName:"p"},"***see password file**")," (3).\n",(0,o.kt)("img",{alt:"login",src:a(66812).Z,width:"1398",height:"948"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the following command to start the services."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /etc/init.d/middleware.sh start\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"strt middleware",src:a(87856).Z,width:"1464",height:"272"})))),(0,o.kt)("h2",{id:"verify-applications"},"Verify Applications"),(0,o.kt)("p",null,"You should verify that all the components are running properly before starting any of the labs."),(0,o.kt)("h3",{id:"robot-shop"},"Robot Shop"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open up a web browser on the URL: ",(0,o.kt)("a",{parentName:"li",href:"http://169.62.62.185:31965"},"http://169.62.62.185:31965"),". Explore the functionality of the app to make sure all services are functioning.\n",(0,o.kt)("img",{alt:"robot shop",src:a(42324).Z,width:"2256",height:"1430"}))),(0,o.kt)("h3",{id:"quote-of-the-day"},"Quote of the Day"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new tab in the browser and open up the URL: ",(0,o.kt)("a",{parentName:"p",href:"http://169.62.62.174:32000"},"http://169.62.62.174:32000"),".  This is the Quote of the Day home page.  Make sure there are no errors.  Note: the specific quote will be different every day.\n",(0,o.kt)("img",{alt:"qotd home",src:a(4537).Z,width:"2260",height:"1378"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify the Random Quote function by pressing the ",(0,o.kt)("strong",{parentName:"p"},"Random Quote")," button.\n",(0,o.kt)("img",{alt:"random",src:a(78920).Z,width:"2244",height:"1336"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the author link to navigate to the author bio page.  Verify the image is displayed with text content.  Then press the ",(0,o.kt)("strong",{parentName:"p"},"Home")," button.\n",(0,o.kt)("img",{alt:"author",src:a(72478).Z,width:"2260",height:"1398"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press the ",(0,o.kt)("strong",{parentName:"p"},"QR Code")," button to display the QR code of the quote.  Then use the browser back button to get back to the home page.\n",(0,o.kt)("img",{alt:"qr code",src:a(61725).Z,width:"2278",height:"1574"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press the ",(0,o.kt)("strong",{parentName:"p"},"PDF")," button to display (or download depending on browser settings) the quote as a PDF.  Then use the browser back button to return to the app home page.\n",(0,o.kt)("img",{alt:"pdf",src:a(66674).Z,width:"2258",height:"1428"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press the ",(0,o.kt)("strong",{parentName:"p"},"Order Engraving")," button.\n",(0,o.kt)("img",{alt:"order 1",src:a(97974).Z,width:"2260",height:"1368"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press the blue ",(0,o.kt)("strong",{parentName:"p"},"Order Engraving")," button.  If the ACE and MQ services are running it should respond with a conformation dialog.\n",(0,o.kt)("img",{alt:"order 2",src:a(62389).Z,width:"2268",height:"962"})))),(0,o.kt)("h3",{id:"number-factory"},"Number Factory"),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Create a new tab in the browser and open up the URL: ",(0,o.kt)("a",{parentName:"li",href:"http://169.62.62.187:5000"},"http://169.62.62.187:5000"),".  Press the blue generate buttons to generate and display of number of the given type.  If any should fail it would indicate one or more services are not working.\n",(0,o.kt)("img",{alt:"nf",src:a(87141).Z,width:"2256",height:"1598"}))),(0,o.kt)("h3",{id:"anomaly-generator"},"Anomaly Generator"),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new tab in the browser and open up the URL: ",(0,o.kt)("a",{parentName:"p",href:"http://169.62.62.164:3012"},"http://169.62.62.164:3012"),".  This is the home page of the Anomaly Generator.  It is used  to induce anomalous behaviour in the Quote of the Day and Number Factory applications.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"anomaly home",src:a(98042).Z,width:"2262",height:"1624"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Services")," link at the top of the page.  This page shows all the microservices that are reporting in to the anomaly generator.  Ensure that all the values for ",(0,o.kt)("strong",{parentName:"p"},"Last Checkin")," are just a few seconds old.\n",(0,o.kt)("img",{alt:"anom 2",src:a(91158).Z,width:"2254",height:"1622"})))),(0,o.kt)("h3",{id:"summary-of-links-and-credentials"},"Summary of links and credentials"),(0,o.kt)("p",null,"Robot Shop: ",(0,o.kt)("a",{parentName:"p",href:"http://169.62.62.185:31965"},"http://169.62.62.185:31965")),(0,o.kt)("p",null,"QotD Home: ",(0,o.kt)("a",{parentName:"p",href:"http://169.62.62.174:32000"},"http://169.62.62.174:32000")),(0,o.kt)("p",null,"Number Factory Home: ",(0,o.kt)("a",{parentName:"p",href:"http://169.62.62.187:5000"},"http://169.62.62.187:5000")),(0,o.kt)("p",null,"Anomaly Generator: ",(0,o.kt)("a",{parentName:"p",href:"http://169.62.62.164:3012"},"http://169.62.62.164:3012")),(0,o.kt)("p",null,"Instana Server: ",(0,o.kt)("a",{parentName:"p",href:"https://169.62.62.167.nip.io/#/home"},"https://169.62.62.167.nip.io/#/home")),(0,o.kt)("p",null,"Instana Server credentials:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'**E-Mail:** admin@instana.local\n\n**Password:** "please refer to credentials.pdf" on the Instana server\n')),(0,o.kt)("p",null,"The username and password for all of the VM's is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'**user:** cocuser\n\n**password:** "please refer to credentials.pdf" on the Instana server\n')))}d.isMDXComponent=!0},34735:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/10_refreshed_firefox-5c8b6402f3e42ee4c332082ae12c3a25.png"},82172:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/11_clipboard-1c69e7eed1a9643c73e7592b5352ef53.png"},38384:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/12_clipboard_with_data-de2d806088dea0fbc4e6d42fccf88daa.png"},98566:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/13_paste_into_address-d8a62170f3430d82b7c138c115c2e3e9.png"},58809:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/14_security_risk_1-21435f989cbbad96be8354da6f98a8ad.png"},26136:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/15_security_risk_2-6357db1f8653d4f521d5550e22d4e6ba.png"},61892:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/17_paste_instana_pwd-c29b9818b43a8d135793b1153043a49e.png"},47424:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/18_save_login-150368a3ea74f15c2f377f71f6b0b32c.png"},1177:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/19_go_to_instana-602b6acb78eb803cd222210cabcda10b.png"},37303:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1_reservation_ready-359990859dd69979ce4af4663624bbc0.png"},86246:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/21_terminal_tool-fc74117602c41fd22cf9be70e7eefe68.png"},25361:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/22_terminal_test-acaee0eb1ddcd5e58d21bb006244c129.png"},66812:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/23_logged_in_mqace-06f3be31c1d82fea6864d7cd9c609ec1.png"},87856:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/24_start_middleware-eaa4167971a3f1339cef623d4b6252e0.png"},42324:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/25_robotshop-f2225dc6efc017e85cfdc797662f88f1.png"},4537:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/26_qotd_home-1a9e9e1a89e0ec0668569e5a521f118f.png"},78920:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/27_qotd_random-aa594fe3c513bb1dfdcbd8a737d04139.png"},72478:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/28_qotd_author-1abf4b87aacc9c9c8e05c558be87fa4f.png"},61725:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/29_qotd_qrcode-d803c8561d49cd9c4f1361a361aa6238.png"},41139:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2_environment_details-85a90a27eaf70c37a61a424f3e278406.png"},66674:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/30_qotd_pdf-039c686c8f65a518ffa24872719bd3b1.png"},97974:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/31_qotd_order_1-73e6ad7371a3a89b189751e55dce53f0.png"},62389:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/32_qotd_order_2-9f39fc1dd76413730db89343a74e4598.png"},87141:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/33_number_factory-18d522a0b4ba970a060d139bafada2d8.png"},98042:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/34_anomaly_generator_home-abe410378675da91d0a2e7bb055cc852.png"},91158:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/35_anomaly_generator_services-17aeab4373e47df05fda2f06e3742937.png"},28206:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/36_download_wireguard_config-681edc984a2a43336c4ba97ae37bc66e.png"},23883:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/37_import_tunnel-dd92730826415b3a08b135c54765760c.png"},90508:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/38_allow config-dd832b7213c785dc262a8d5bb7f5b473.png"},30752:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/39_activate_tunnel-7165a5f13adec7e8eea959823f8ae744.png"},79661:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/40_activated_wireguard-57731db519f00236a38801caa4511464.png"},89010:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/41_robotshop_local-6ce58feb0e54d23f817ee269d017959d.png"},5620:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/42_terminal_local-b8c891cee39dfdac41de3f2963bc3f75.png"},48856:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4_guacamole_connections-0960e60810fda8d0f00789b2318b5fda.png"},94300:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/5_rhel_desktop-ad6f4809011e6f7e215f6065127ac857.png"},9644:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/6_open_firefox-d9c4ce2b192f18e5d966bd1838028b60.png"},45298:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/7_refresh_firefox_1-f3cc741ac5f09302da2dcc6778d52b72.png"},9811:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/8_refresh_firefox_2-39aa0a3fb2c9fa34fae06141c888edc9.png"},17825:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/9_refresh_firefox_3-0b4961158ab02ae1d7ae28c26ce1929e.png"},42619:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/instana_pot-023e10229ec30a493edc38265579439c.png"}}]);