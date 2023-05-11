"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={},o="Backend",s={unversionedId:"Backend",id:"Backend",title:"Backend",description:"Overview",source:"@site/docs/03-Backend.md",sourceDirName:".",slug:"/Backend",permalink:"/OpenLeakedDocs/docs/Backend",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Redis - BloomFilter",permalink:"/OpenLeakedDocs/docs/Database/BloomFilter"},next:{title:"Authentication",permalink:"/OpenLeakedDocs/docs/Authentication"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Controllers",id:"controllers",level:3},{value:"Entrypoints",id:"entrypoints",level:3},{value:"Filters",id:"filters",level:3},{value:"Ratelimit",id:"ratelimit",level:4},{value:"Models",id:"models",level:3},{value:"Repositories",id:"repositories",level:3},{value:"Security",id:"security",level:3},{value:"Services",id:"services",level:3},{value:"Resources",id:"resources",level:3},{value:"Note on dependencies",id:"note-on-dependencies",level:4}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"backend"},"Backend"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The backend of the application is responsible for handling all the logical operations and functionalities.\nAs it contains various modules and components it can be quite complex to grasp. We provide a brief introduction to the folder structure of which we will explain its contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 src/\n\u2502   \u2514\u2500\u2500 main/\n\u2502       \u251c\u2500\u2500 java/\n\u2502       \u2502   \u251c\u2500\u2500 dk.dtu.openleaked.Backend/\n\u2502       \u2502   \u2502   \u251c\u2500\u2500 configuration/\n\u2502       \u2502   \u2502   \u251c\u2500\u2500 controllers/\n\u2502       \u2502   \u2502   \u251c\u2500\u2500 entrypoints/\n\u2502       \u2502   \u2502   \u251c\u2500\u2500 filters/\n\u2502       \u2502   \u2502   \u251c\u2500\u2500 models/\n\u2502       \u2502   \u2502   \u2502   \u251c\u2500\u2500 request/\n\u2502       \u2502   \u2502   \u2502   \u2514\u2500\u2500 response/\n\u2502       \u2502   \u2502   \u251c\u2500\u2500 repositories/\n\u2502       \u2502   \u2502   \u251c\u2500\u2500 security/\n\u2502       \u2502   \u2502   \u2514\u2500\u2500 services/\n\u2502       \u2502   \u2514\u2500\u2500 OpenLeakedBackendServerApplication\n\u2502       \u2514\u2500\u2500 Resources/\n\u2502           \u251c\u2500\u2500 mail/\n\u2502           \u2502   \u2514\u2500\u2500 html/\n\u2502           \u2514\u2500\u2500 application.yml\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 Dockerfile-production\n\u2514\u2500\u2500 pom.xml\n")),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"configuration")," folder contains configuration classes that defines behavior of the SMTP mail server and the Security Configuration. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Many of the global variables are set in the ",(0,i.kt)("inlineCode",{parentName:"p"},"application.yml")," to easily change values across multiple classes. ")),(0,i.kt)("h3",{id:"controllers"},"Controllers"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"controllers")," folder contains all the endpoints for the RESTful API. Each controller class contains one or more API endpoints. All endpoints are structured with the same boiler-plate: ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/<controller-type>/<end-point>"),", making it easy to find and add new endpoints to existing or new categories.\nKeep in mind that the ",(0,i.kt)("em",{parentName:"p"},"request")," and ",(0,i.kt)("em",{parentName:"p"},"responses")," are defined in the ",(0,i.kt)("a",{parentName:"p",href:"#models"},"models folder"),"."),(0,i.kt)("h3",{id:"entrypoints"},"Entrypoints"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"entrypoints")," folder contains the custom entry point used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"SecurityFilterChain"),". This is covered in ",(0,i.kt)("a",{parentName:"p",href:"./Authentication#the-security-chain"},"The Security Chain"),"."),(0,i.kt)("h3",{id:"filters"},"Filters"),(0,i.kt)("p",null,"Contain only one class - ",(0,i.kt)("inlineCode",{parentName:"p"},"RateLimitFilter")," which is responsible for providing rate-limiting functionality to the application. "),(0,i.kt)("h4",{id:"ratelimit"},"Ratelimit"),(0,i.kt)("p",null,"The rate-limit feature is implemented using the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Token_bucket"},(0,i.kt)("em",{parentName:"a"},"Token Bucket Algorithm")),". The rate-limit is based on user accounts, with each account assigned a capacity of tokens within a specified time period. This capacity is set upon ",(0,i.kt)("a",{parentName:"p",href:"./04-Authentication.mdx"},"authorization"),". Once a user's capacity is reach, all subsequent requests will be denied and the user will recieve ",(0,i.kt)("inlineCode",{parentName:"p"},"429 - Too Many Requests")," HTTP response. This feature provides an added layer of security to prevent brute-force attacks and DDoS attacks. "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The capacity and time-period of tokens is adjusted within the ",(0,i.kt)("inlineCode",{parentName:"p"},"application.yml"),"file.")),(0,i.kt)("h3",{id:"models"},"Models"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"models")," folder contains all objects used in the application, including those related to the databases. Each class is annotated to match the database entities.\nTo mark a class as an entity in MariaDB, we make use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Entity")," annotation.\nSome objects may contain additional information used in the backend, but not to be stored in persistent storage or in-memory. Theese variables are annotated using ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonIgnore"),". "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It is important to keep conistensy between class objects and entities in the database. Any changes made to the database should be reflected in the associated class objects, and vice versa.\nThis ensures that data is send and retrieved correclty. Failure to maintain consistency between the entities and class objects can result in errors and unexpected behavior. ")),(0,i.kt)("p",null,"There are two subdirectores located in the folder, namely;\nWithin the folder, there are two subdirectories contained; ",(0,i.kt)("inlineCode",{parentName:"p"},"request"),"and ",(0,i.kt)("inlineCode",{parentName:"p"},"response"),".\nTheese directories contain records that define the data that is send and retrieved using the RESTful API. ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," defines the data that the API sends to the server(backend). The ",(0,i.kt)("inlineCode",{parentName:"p"},"responses")," defines records that the server sends back to the client. "),(0,i.kt)("h3",{id:"repositories"},"Repositories"),(0,i.kt)("p",null,"In the ",(0,i.kt)("em",{parentName:"p"},"repositories")," folder, you find classes that provide the configuration of ",(0,i.kt)("a",{parentName:"p",href:"https://stackify.com/what-are-crud-operations/"},"CRUD")," functionality for the database.\nAdditionally, we enable ",(0,i.kt)("a",{parentName:"p",href:"./02-Database/Cache.mdx"},"caching")," of certain entities using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Cacheable")," annotation. "),(0,i.kt)("h3",{id:"security"},"Security"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"security")," folder contains the ",(0,i.kt)("em",{parentName:"p"},"Security service class"),". This enables the   ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/jdbc.html"},"JDBC")," authentication, i.e., using a database to store user credentials and authenticating users. "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In here we can define SSO authentication aswell to add it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Secuity Chain"),".")),(0,i.kt)("h3",{id:"services"},"Services"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"services")," folder contains services classes that provide helper functions and logic for various features of the application. This includes functions such as hashing, sending mails and defining custom functions to be used with the ",(0,i.kt)("a",{parentName:"p",href:"/OpenLeakedDocs/docs/Database/BloomFilter"},"Bloom filter"),".\nWe also define the general connection pool for and storage types for Redis. "),(0,i.kt)("h3",{id:"resources"},"Resources"),(0,i.kt)("p",null,"This folder, ",(0,i.kt)("em",{parentName:"p"},"resources"),", contains the globally defined variables within ",(0,i.kt)("inlineCode",{parentName:"p"},"application.yml"),". Many of the program settings are controlled from this file. An example of this is the SMTP configuration, rate-limiting and more. Additionally, there is a subdirectory containing a directory called ",(0,i.kt)("em",{parentName:"p"},"html"),", which contains all HTML-based templates for sending emails via ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://www.thymeleaf.org/"},"Thymeleaf"))),(0,i.kt)("h4",{id:"note-on-dependencies"},"Note on dependencies"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml"),"is the configuration file for ",(0,i.kt)("a",{parentName:"p",href:"https://maven.apache.org/"},"Maven")," which is used for dependency management and building the backend.It is found in the backend root folder.",(0,i.kt)("br",{parentName:"p"}),"\n","It is important to keep dependencies updated to ensure that any known vulnerabilites are patched - specifically the Security modules. "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-security</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.thymeleaf.extras</groupId>\n    <artifactId>thymeleaf-extras-springsecurity6</artifactId>\n    <version>3.1.1.RELEASE</version>\n</dependency>\n"))))}p.isMDXComponent=!0}}]);