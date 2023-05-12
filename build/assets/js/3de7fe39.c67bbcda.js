"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6684],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61866:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:2},o="Redis - Cache",s={unversionedId:"Database/Cache",id:"Database/Cache",title:"Redis - Cache",description:"To see how caching is enabled on certain entities check the Backend docs",source:"@site/docs/02-Database/Cache.md",sourceDirName:"02-Database",slug:"/Database/Cache",permalink:"/OpenLeakedDocs/docs/Database/Cache",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"MariaDB - Persistent storage",permalink:"/OpenLeakedDocs/docs/Database/MariaDB"},next:{title:"Redis - Bloom filter",permalink:"/OpenLeakedDocs/docs/Database/BloomFilter"}},l={},c=[],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"redis---cache"},"Redis - Cache"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To see how caching is enabled on certain entities check the ",(0,r.kt)("a",{parentName:"p",href:"../Backend#repositories"},"Backend docs"))),(0,r.kt)("p",null,"We implement caching as a means to improve the overall performance of our database. It is a requirement for fulfilling the constraints of a RESTful API. "),(0,r.kt)("p",null,"Caching works by temporarily storing a copy of the query and response in memory. This way, if the same request is send again within a specific timewindow, called the ",(0,r.kt)("inlineCode",{parentName:"p"},"Keep-Alive")," time, the response can be quickly retrieved from memory, rather than having to access the slower persistent user storage again.\nThis helps improve response times and reduce the load on the persistent layer. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"By default, our system sets the ",(0,r.kt)("inlineCode",{parentName:"p"},"keep-alive")," time for cached values to 10 minutes. However, this value can be adjust based on the available RAM and expected number of requests that are to be made within the ",(0,r.kt)("inlineCode",{parentName:"p"},"keep-alive")," time period.\nWe recommend configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"keep-alive")," time based on host-server specifications. ")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Adjusting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Keep Alive")," time period is performed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," configuration file for the backend. ")),(0,r.kt)("p",null,"It is important to note that not all variables stored in the persistance layer is suitable for caching as some of them are unlikely to be requsted again and may therefore not benefit from caching."),(0,r.kt)("p",null,"Based on the persistent data entity relationships we have identified the following variables that are suitable for caching:"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"BreachIDs"),(0,r.kt)("li",{parentName:"ul"},"List of Breaches"),(0,r.kt)("li",{parentName:"ul"},"Email Exists"),(0,r.kt)("li",{parentName:"ul"},"Password Exists"),(0,r.kt)("li",{parentName:"ul"},"Password Value"),(0,r.kt)("li",{parentName:"ul"},"Username Exists"),(0,r.kt)("li",{parentName:"ul"},"Username value"),(0,r.kt)("li",{parentName:"ul"},"Breaches associated with domain lookup"))),(0,r.kt)("p",null,"With the exception of ",(0,r.kt)("inlineCode",{parentName:"p"},"BreachIDs"),", all cached values in our system are associated with the type of Searchable which defines all types of credentials available for searching. "),(0,r.kt)("p",null,"To act as an in-memory database we used ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io"},"Redis"),".\nRedis is an open source - fitting the project, in-memory data storage solution which is adapted in several large projects, proving themselves as a trusted source. "),(0,r.kt)("p",null,"Redis provides configuration options for handling the overall data structure and suppors a persistence layer that can provide a backup in case of system failure.\nHowever to maintain current scope of the project a base configuration was implemented based on a ",(0,r.kt)("em",{parentName:"p"},"Getting started")," guide."))}d.isMDXComponent=!0}}]);