"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:1},i="Getting started in 5 minutes \u23f1\ufe0f",s={unversionedId:"intro",id:"intro",title:"Getting started in 5 minutes \u23f1\ufe0f",description:"Introduction",source:"@site/docs/00-intro.md",sourceDirName:".",slug:"/intro",permalink:"/OpenLeakedDocs/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Docker containers",permalink:"/OpenLeakedDocs/docs/Docker"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"\u2693 Requirements",id:"-requirements",level:2},{value:"\u2728 Installation",id:"-installation",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-in-5-minutes-\ufe0f"},"Getting started in 5 minutes \u23f1\ufe0f"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:n(5646).Z,width:"375"})),(0,o.kt)("p",null,"This site serves as the official documentaion for the Open-Leaked project. "),(0,o.kt)("p",null,"The project was developed by Niels Kj\xe6r Ersb\xf8ll and Frederik Peetz-Schou Larsen as part of a bachelor's thesis. "),(0,o.kt)("p",null,"The documentation covers a range of topics, including the original design ideas and a detaield walkthrough of the project's structure. Much of this content is also included in the thesis. "),(0,o.kt)("p",null,"As an added benefit, we have taken the opportunity to document the RESTful API to its full extend. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hosting")),(0,o.kt)("p",null,"The application is currently being hosted on a server located at the Compute Department of the Technical University of Denmark.\nTherfore access is restricted by a VPN. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To get a full overview of the project please read through the entire documentation - however we have included a guide to getting you setup running the application on your own machine - Please check ",(0,o.kt)("a",{parentName:"p",href:"#installation-1st-time"},"Installation (1st time)"))),(0,o.kt)("h2",{id:"-requirements"},"\u2693 Requirements"),(0,o.kt)("p",null,"Getting started only requires ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")),(0,o.kt)("h2",{id:"-installation"},"\u2728 Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Begin by downloading the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Open-Leaked/Monorepo"},"Github Repository")," into your preffered location. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Open-Leaked/Monorepo.git\ncd Monorepo\n")),(0,o.kt)("p",{parentName:"li"},"Once you open the Monorepo folder, you should observe a folder structure that looks like this:\nthis. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 Assets/\n\u2502   \u251c\u2500\u2500 guideline/\n\u2502   \u2502   \u2514\u2500\u2500 fonts\n\u2502   \u2514\u2500\u2500 logo/\n\u251c\u2500\u2500 backend/\n\u2502   \u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 main/\n\u2502   \u2502   \u251c\u2500\u2500 java/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 dk.dtu.openleaked.Backend/\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 configuration/\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 controllers/\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 entrypoints/\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 filters/\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 models/\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 request/\n\u2502   \u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 response/\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 repositories/\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 security/\n\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 services/\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 OpenLeakedBackendServerApplication\n\u2502   \u2502   \u2514\u2500\u2500 Resources/\n\u2502   \u2502       \u251c\u2500\u2500 mail/\n\u2502   \u2502       \u2502   \u2514\u2500\u2500 html/\n\u251c\u2500\u2500 dataparsing/\n\u2502   \u251c\u2500\u2500 filterbuilder/\n\u2502   \u251c\u2500\u2500 newDataIndexer/\n\u2502   \u251c\u2500\u2500 Parser/\n\u2502   \u251c\u2500\u2500 Transformer\n\u251c\u2500\u2500 frontend/\n\u2502   \u251c\u2500\u2500 public/\n\u2502   \u251c\u2500\u2500 src/\n\u2502   \u2502   \u251c\u2500\u2500 api/\n\u2502   \u2502   \u251c\u2500\u2500 components/\n\u2502   \u2502   \u251c\u2500\u2500 hooks/\n\u2502   \u2502   \u251c\u2500\u2500 types/\n\u2502   \u2514\u2500\u2500 DockerFile\n\u251c\u2500\u2500 mariadb/\n\u2502   \u251c\u2500\u2500 config/\n\u2502   \u251c\u2500\u2500 db/\n\u2502   \u2502   \u251c\u2500\u2500 mysql/\n\u2502   \u2502   \u251c\u2500\u2500 OPEN_LEAKED/\n\u2502   \u2502   \u251c\u2500\u2500 performance_schema/\n\u2502   \u2502   \u2514\u2500\u2500 sys/\n\u2502   \u251c\u2500\u2500 initdb/\n\u251c\u2500\u2500 performance-testing/\n\u251c\u2500\u2500 proxy/\n\u251c\u2500\u2500 target/\n\u2502   \u251c\u2500\u2500 classes/\n\u2502   \u251c\u2500\u2500 generated-sources/\n\u2502   \u2514\u2500\u2500 maven-status/\n")),(0,o.kt)("p",{parentName:"li"},"Each primary folder (e.g., backend, frontend, proxy etc.) contains a Dockerfile, which is primarily responsible for controlling volume mounting for each image type, copying required files from the Host-OS and installing packages. "),(0,o.kt)("p",{parentName:"li"},"You can choose one of the trhee ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker Compose")," structures located in the Monorepo folder: "),(0,o.kt)("p",{parentName:"li"},"For more information of which one to choose, click ",(0,o.kt)("a",{parentName:"p",href:"/OpenLeakedDocs/docs/Docker"},"here.")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose-production")," "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose-import-database")," "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To initiate the installation and launch the application services, simply launch all Docker containers. The Dockerfiles manage the installation's definitions and structure. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose -f <Docker-Compose-File> up --build  \n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<Docker-Compose-File>")," specifies a path to a Docker Compose file. "),(0,o.kt)("p",{parentName:"li"},"Example usage: "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose -f docker-compose.yml up --build  \n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open your preferred web browser and navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),"."),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You dont have to specify ports in the URL, this is handled by the proxy")),(0,o.kt)("p",{parentName:"li"},"\ud83c\udf8a Congratulations! The application and its services are now up and running on your local machine. \ud83c\udf8a"),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"No users are added by default. To login and use the system, simply use the registration form.\nIn addition there is no data in the database. See ",(0,o.kt)("a",{parentName:"p",href:"loading"},"Filling the databas")," section to get more information")))))}d.isMDXComponent=!0},5646:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/openleaked-f9e3baada28bf73712459f3516c0aad8.png"}}]);