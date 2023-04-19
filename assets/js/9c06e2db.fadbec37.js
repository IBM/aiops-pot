"use strict";(self.webpackChunkai_ops_pot=self.webpackChunkai_ops_pot||[]).push([[294],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=i.createContext({}),r=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=r(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=r(a),p=o,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||n;return a?i.createElement(m,l(l({ref:t},u),{},{components:a})):i.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var r=2;r<n;r++)l[r]=a[r];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},67952:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>r});var i=a(87462),o=(a(67294),a(3905));const n={sidebar_position:7},l="Policies ~ 30 minutes",s={unversionedId:"Turbonomic POT/policies",id:"Turbonomic POT/policies",title:"Policies ~ 30 minutes",description:"In the \u201cTaking action\u201d lab, you\u2019ve learned how to take actions manually. But what if we wanted to automate this? Once we validate that it is safe and good to take a certain action and we trust it, we can allow the entities to act on their own decisions.",source:"@site/docs/Turbonomic POT/policies.md",sourceDirName:"Turbonomic POT",slug:"/Turbonomic POT/policies",permalink:"/aiops-pot/docs/Turbonomic POT/policies",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Actions ~ 30 minutes",permalink:"/aiops-pot/docs/Turbonomic POT/actions"},next:{title:"Planning ~ 30 minutes",permalink:"/aiops-pot/docs/Turbonomic POT/planning"}},c={},r=[{value:"What are policies in Turbonomic?",id:"what-are-policies-in-turbonomic",level:2},{value:"\u2022\tPlacement Policies",id:"placement-policies",level:3},{value:"\u2022\tAutomation Policies",id:"automation-policies",level:3},{value:"Lab - Explore existing policies",id:"lab---explore-existing-policies",level:2},{value:"As a reminder, please ensure that you are logged in with an Administrator user. If you havent&#39;t logged out of your demo users, you will not have the necessary permissions to run through the labs.",id:"as-a-reminder-please-ensure-that-you-are-logged-in-with-an-administrator-user-if-you-haventt-logged-out-of-your-demo-users-you-will-not-have-the-necessary-permissions-to-run-through-the-labs",level:3},{value:"Lab - Create an Automation Policy",id:"lab---create-an-automation-policy",level:2},{value:"Move Virtual Machines",id:"move-virtual-machines",level:3},{value:"Scale Cloud Volume",id:"scale-cloud-volume",level:3},{value:"Lab - Scheduled Policies",id:"lab---scheduled-policies",level:2}],u={toc:r},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"policies--30-minutes"},"Policies ~ 30 minutes"),(0,o.kt)("p",null,"In the \u201cTaking action\u201d lab, you\u2019ve learned how to take actions manually. But what if we wanted to automate this? Once we validate that it is safe and good to take a certain action and we trust it, we can allow the entities to act on their own decisions. "),(0,o.kt)("p",null,"In this lab, you will learn about the two types of policies in Turbonomic, explore policies in your environment, and then create an automation policy. "),(0,o.kt)("h2",{id:"what-are-policies-in-turbonomic"},"What are policies in Turbonomic?"),(0,o.kt)("p",null,"Policies set business rules to control how Turbonomic analyzes resource allocation, how it displays resource status, and how it recommends or executes actions. Turbonomic includes two fundamental types of policies:"),(0,o.kt)("h3",{id:"placement-policies"},"\u2022\tPlacement Policies"),(0,o.kt)("p",null,"To optimize your environment, Turbonomic recommends actions to place workloads such as applications, containers, or VMs on their providers. Turbonomic can recommend these actions or execute them automatically."),(0,o.kt)("h3",{id:"automation-policies"},"\u2022\tAutomation Policies"),(0,o.kt)("p",null,"As Turbonomic gathers metrics, it compares the metric values against specified constraint and capacity settings to determine whether a metric exhibits a problem, and what actions to recommend or execute to avoid a problem. Turbonomic uses Automation Policies to guide its analysis and resulting actions."),(0,o.kt)("h2",{id:"lab---explore-existing-policies"},"Lab - Explore existing policies"),(0,o.kt)("h3",{id:"as-a-reminder-please-ensure-that-you-are-logged-in-with-an-administrator-user-if-you-haventt-logged-out-of-your-demo-users-you-will-not-have-the-necessary-permissions-to-run-through-the-labs"},"As a reminder, please ensure that you are logged in with an Administrator user. If you havent't logged out of your demo users, you will not have the necessary permissions to run through the labs."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Navigate to "Settings", then "Policies". In this page, you will see a list of all existing policies.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"policy1",src:a(14262).Z,width:"3110",height:"1746"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'From the list to the left, select "Defaults". This will show a list of all system default policies. ')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tip:")," These default policies remain effective unless user creates a policy affecting same resources but with different criteria. User defined policy overrides the default policy."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"defaultpolicy",src:a(35759).Z,width:"3110",height:"1746"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},'Recall in "Actions" lab in the "Explore action modes" section where you saw some actions are blocked by policy and are set on recommend mode? Let\'s take a closer look at the policy responsible for that. The action you saw in that lab was a resize down action for storage. ')),(0,o.kt)("p",null,'Scroll down in default policy list and click on "Storage Defaults". Now notice that this policy sets the "Resize" action acceptance are set to recommend. This will result in all resize actions generated for storage to be set to recommend only and be unable to execute within Turbonomic. '),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"storage1",src:a(48852).Z,width:"3200",height:"1742"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Respectively, for the action that you explored for a cloud VM where you could manually accept and execute it within Turbonomic, there is a default policy set that defines that:")),(0,o.kt)("p",null,'Navigate to "Virtual Machine Defaults" policy from the default policies list. You can see that all cloud scaling actions are set to "Manual" which allows them to be accepted and executed (assuming there are no prerequisits for them).'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"vm1",src:a(75331).Z,width:"3200",height:"1742"})),(0,o.kt)("h2",{id:"lab---create-an-automation-policy"},"Lab - Create an Automation Policy"),(0,o.kt)("p",null,"In this lab, you will create an automation policy to define how you'd like Turbonomic to treat actions as they appear. Keep in mind, user defined policies will override system default policies that affect the same entity."),(0,o.kt)("h3",{id:"move-virtual-machines"},"Move Virtual Machines"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Navigate to "Policies" from "Settings". Then click on "New Automation Policy" on the top right side of the window.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"auto1",src:a(25228).Z,width:"3200",height:"1742"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'Scroll down the list and click on "Virtual Machine". Once you do the Policy Editor window will appear.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"vmmove1",src:a(49430).Z,width:"3200",height:"1742"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"In the Policy editor, give your policy a unique name like ",(0,o.kt)("strong",{parentName:"li"},"vm_move_YourInitials"),'. Then under "Scope" click on "Select group of virtual machines". This will specify which group of VMs will be affected by this policy.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"vmmove2",src:a(37169).Z,width:"3200",height:"1742"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},'In the search bar type "vsphere" and from the list select the group named "vsphere-DC20-DC01_VM" and click on "Select".')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"vmmove3",src:a(40453).Z,width:"3200",height:"1742"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},'In the policy editor, then click on "Automation and Orchestration" then click on "Add Action". This section will allow you to select which actions are accepted and how. Fill out the information as shown below. The automation piece is applied when you select "Automatic" for "Action Acceptance". You can leave the orchestration settings as default then click "Submit"')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"vmmove4",src:a(81046).Z,width:"3163",height:"1742"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},'In your policy editor, double check for entered information and the click on "Save Policy". You may recieve a message saying it may take 10 minutes for the policy to become effective, click "Yes" to proceed.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"vmmove5",src:a(65266).Z,width:"3200",height:"1742"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"To check if your policy is created try searching for your policy's name in the list. you can make changes and edit it as necessary from here as well.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"vmmove6",src:a(53749).Z,width:"3200",height:"1742"})),(0,o.kt)("p",null,"Congratulations! You succesfully created a policy to automate move actions for VMs in selected scope."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"scale-cloud-volume"},"Scale Cloud Volume"),(0,o.kt)("p",null,'In this section you will create an automation policy to automate scaling of cloud volume actions. Let\'s automate volumes whose scaling actions are non-disruptive, reversible and offer cost savings (because they offer the lowest risk and highest reward).\nDo you recall in the "Actions" lab we executed a similar action manually? Now you will automate the same one.'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Navigate to "Policies" from "Settings". Then click on "New Automation Policy" on the top right side of the window. Select "Volumes" from the list.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"scale1",src:a(44095).Z,width:"3187",height:"1742"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'Because our focus is scaling cloud volumes, select cloud from the list on the left, then select "akachkaev-test-action_group" form the list and click on the submit button.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"scale2",src:a(47088).Z,width:"3184",height:"1742"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'This will open up the "Configure Volume Policy" page. '),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"scale3",src:a(36570).Z,width:"3200",height:"1742"})),(0,o.kt)("p",{parentName:"li"},'1- Give your policy a unique name like "cloud_scale_YourInitials". '),(0,o.kt)("p",{parentName:"li"},"2- Notice how the scope is set to the group of volumes you selected. "),(0,o.kt)("p",{parentName:"li"},'3- We want this policy to be effective always and immediately so we will leave the "Policy Schedule" empty.'),(0,o.kt)("p",{parentName:"li"},'4- Toggle the "Volume Scaling Actions" on to enable these actions.'),(0,o.kt)("p",{parentName:"li"},'5- Since we want to automate the lowest risk actions, use the pencil icon next to "Non-Disrubtive Revesible Scaling" to edit the "Action Acceptance" and set it to "Automatic". Leave the Orchestration settings as default. click on "Submit" to go back to the policy editor.'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"scale4",src:a(74303).Z,width:"3200",height:"1742"})),(0,o.kt)("p",{parentName:"li"},'6- Scroll down and ensure "Disruptive Reversible Scaling" is set to "manual" since you\'d like to plan for the downtime resulting from this action before taking it.'),(0,o.kt)("p",{parentName:"li"},'7- Set "Disruptive Irreversible Scaling" to "Recommend". '),(0,o.kt)("p",{parentName:"li"},"8- Since our goal is to maximize savings, choose that option."),(0,o.kt)("p",{parentName:"li"},'9- Allow generation of "Volume Deletion Actions" by toggling it to green and set its action acceptance to "Manual". '),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"scale5",src:a(14838).Z,width:"3200",height:"1742"})),(0,o.kt)("p",{parentName:"li"},"10- Scroll further down until you see a graph of and its settings below it. Do you recall when exploring the action details there was a chart showing the 95th pecentile of the utilization over 30 day observation period? That is a default in Turbonomic but if you wanted to change that this section is where you do it for the specified group of resources. The chart in this page will show the effect of changing each setting."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'- **Aggressiveness** - Defines what is the percentile you want the utilization of the resource to be before taking and action. Leave it at P95 for this lab.\n- **Min Observation Period** - This Lets Turbonomic know what the shortest amount of time is it needs to monitor a resource before generating actions to optimize it. Leave this setting as "None".\n- **Max Observation Period** - This settings tells Turbonomic how long we want it to monitor the resource before generating an action. Leave this setting as "30 days".\n')),(0,o.kt)("p",{parentName:"li"},'11- You can leave the rest of the settings in the policy editor as is and then click on "Save and Apply". If a window pops up, click "Apply".'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"scale6",src:a(91888).Z,width:"3200",height:"1742"})),(0,o.kt)("p",{parentName:"li"},"Congratulations! You succesfully created a policy to automate cloud volume scaling actions."))),(0,o.kt)("h2",{id:"lab---scheduled-policies"},"Lab - Scheduled Policies"),(0,o.kt)("p",null,"You can set a schedule for an automation policy, which sets a window of time when the policy takes effect.\nIn addition, a scheduled policy can include scheduled actions. When the policy is in effect, Turbonomic recommends or automatically executes those actions as they are generated. Some of those actions could be disruptive so you may want to defer their execution to a non-critical time window. In this case, you will need to set an action execution schedule within the scheduled policy."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Create a new policy using the "New Automation Policy" button.'),(0,o.kt)("li",{parentName:"ol"},'Scroll down the list and click on "Virtual Machine". '),(0,o.kt)("li",{parentName:"ol"},"In the Policy editor, give your policy a unique name like ",(0,o.kt)("strong",{parentName:"li"},"schedule_YourInitials"),'. Then under "Scope" click on "Select group of virtual machines". This will specify which group of VMs will be affected by this policy.'),(0,o.kt)("li",{parentName:"ol"},'In the search bar type "vsphere" and from the list select the group named "vsphere-DC25-DC01_VM" and click on "Select".'),(0,o.kt)("li",{parentName:"ol"},'Expand "Policy Schedule" and click on "Attach Schedule". Then click on "New Schedule"')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"schedule1",src:a(56698).Z,width:"3186",height:"1742"}),"\n",(0,o.kt)("img",{alt:"schedule2",src:a(53812).Z,width:"3186",height:"1742"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"This section will define when your policy is on effect. "),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Give your policy schedule a name like ",(0,o.kt)("strong",{parentName:"li"},"policy_schedule_YourInitials"),". "),(0,o.kt)("li",{parentName:"ol"},'Select "Weekly" under Recurrence.'),(0,o.kt)("li",{parentName:"ol"},"Set to repeat every week only on Saturdays and Sundays."),(0,o.kt)("li",{parentName:"ol"},'Select today\'s date as start date and "None" as end date. '),(0,o.kt)("li",{parentName:"ol"},"Set 12:00 as start time and 12 for duration hours. ",(0,o.kt)("strong",{parentName:"li"},"Please Note")," if you are completing this lab after noon local time, you may want to adjust this time from 12:00 to few hours after your current time. The reason is that the system will not allow you to create a policy in the past."),(0,o.kt)("li",{parentName:"ol"},"Select your timezone."),(0,o.kt)("li",{parentName:"ol"},"Check the Summary and click on Submit.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"schedule3",src:a(91306).Z,width:"1132",height:"1742"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Select your newly created schedule and click "Set"\n',(0,o.kt)("img",{alt:"schedule4",src:a(27946).Z,width:"3196",height:"1742"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Expand "Automation and Orchestration" and click on "Add Action".\n',(0,o.kt)("img",{alt:"schedule5",src:a(34111).Z,width:"3196",height:"1742"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'For action type select "VCPU-Resize-Down", for action acceptance select "Automatic" and then click on "Add Schedule" under Execution Schedule. This section will define the ',(0,o.kt)("strong",{parentName:"p"},"action schedule"),". Create a new schedule to assign to the ",(0,o.kt)("strong",{parentName:"p"},"action"),'. Click on "Add Schedule" under "Execution Schedule" and then click on "New Schedule" to create a different schedule for your action.'))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tip")," - In this scenario, we want the policy to be effective on Saturdays and Sundays from 12:00PM - midnight. But we want to automatically accept and execute VCPU resize actions ONLY on Sundays from 12:00PM - 6:00PM where we know the load is at its lowest.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"schedule6",src:a(78621).Z,width:"3196",height:"1742"})),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"Type in a name for your schedule like ",(0,o.kt)("strong",{parentName:"li"},"action_schedule_YourInitials"),' and fill in the information as specified in the image below. Once done click on "Submit". Make sure to select Sunday only and set the start date as the upcoming Sunday. (Remember, you can\'t create a policy in the past. It should start from a date in the future)')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"schedule7",src:a(94681).Z,width:"1136",height:"1742"})),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},'Select your newly created action schedule and click on "Save". This will return you to "Automation and Orchestration" page. Click "Submit" for this page'),(0,o.kt)("li",{parentName:"ol"},'Now you should be back in "Virtual Machines Policy" page. check all the information and ensure their accuracy. Once done, click on "Save Policy".')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"schedule8",src:a(62976).Z,width:"3194",height:"1742"})),(0,o.kt)("p",null,"Congratulations! You succesfully created a scheduled policy with scheduled automated actions."))}h.isMDXComponent=!0},25228:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/auto1-340d3c729c5f1b9e18027a27fbcb7544.png"},35759:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/defaultpolicy-5247595fca372801e80c523c0b8354db.png"},14262:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/policy1-aac495ff78a92313f4d5e97dfb0b902a.png"},44095:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/scale1-02270169ca64b59a1c9352bbaf101e41.png"},47088:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/scale2-b42f1fa69340fb12823a8b238c4bf8f2.png"},36570:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/scale3-1b6d611f6df9fd24147ed30f4f6d087b.png"},74303:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/scale4-29e31fe35cd0a42cf90100edaab3cad9.png"},14838:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/scale5-b56c44900bce5c5f6da78e8a1bdee676.png"},91888:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/scale6-38af33d2c77d560a8e3b9dd35d7e21be.png"},56698:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/schedule1-1c0772674d73aeea1aef24c1d9c00315.png"},53812:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/schedule2-184086a309f3fdef74a7419f8a16e0d0.png"},91306:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/schedule3-a794ed9cd831eb5461a9c77047333a29.png"},27946:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/schedule4-5c0cd863eb6efef12adc714e2750be22.png"},34111:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/schedule5-517bd453d9ba850b0a6d0cb461f23caa.png"},78621:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/schedule6-772ff7d8e1a1f2c48971bca04b39f60c.png"},94681:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/schedule7-ce8b34f395a74bafcea731dcacc320a3.png"},62976:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/schedule8-23059890e56234768c2a4736e64fc029.png"},48852:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/storage1-7d73eb94eb44adb971e35eb808ce9c0a.png"},75331:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/vm1-b66957935bc45eaa37d72983a3cfd0e9.png"},49430:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/vmmove1-0dd926d473a169c400b1579b86138088.png"},37169:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/vmmove2-61a0a30bfd0dde71762842f1cf2eba37.png"},40453:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/vmmove3-50649ae140ff30b6c571087c0f24dd7c.png"},81046:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/vmmove4-b2a21bddcf14eff065cf8555d0ea93eb.png"},65266:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/vmmove5-cc8b54ebc61363e074debf26e2439e80.png"},53749:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/vmmove6-b3338ebc37a7b1e9a60ec7eae863a46f.png"}}]);