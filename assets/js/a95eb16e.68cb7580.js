"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[312],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(i),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return i?n.createElement(h,o(o({ref:t},p),{},{components:i})):n.createElement(h,o({ref:t},p))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},88039:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const a={"sidebar-position":3},o="Redis - BloomFilter",l={unversionedId:"Database/BloomFilter",id:"Database/BloomFilter",title:"Redis - BloomFilter",description:"A brief introduction",source:"@site/docs/02-Database/BloomFilter.mdx",sourceDirName:"02-Database",slug:"/Database/BloomFilter",permalink:"/OpenLeakedDocs/docs/Database/BloomFilter",draft:!1,tags:[],version:"current",frontMatter:{"sidebar-position":3},sidebar:"tutorialSidebar",previous:{title:"Redis - Cache",permalink:"/OpenLeakedDocs/docs/Database/Cache"},next:{title:"Backend",permalink:"/OpenLeakedDocs/docs/Backend"}},s={},c=[{value:"A brief introduction",id:"a-brief-introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Creating the Filter",id:"creating-the-filter",level:2},{value:"Transfering / loading a previously created filter",id:"transfering--loading-a-previously-created-filter",level:3}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"redis---bloomfilter"},"Redis - BloomFilter"),(0,r.kt)("h2",{id:"a-brief-introduction"},"A brief introduction"),(0,r.kt)("p",null,"Not everybody is familar with Bloom Filters of which we give a short introduction in the following section. "),(0,r.kt)("p",null,"In addition to the cache, we make use of a Bloom Filter data structure to further improve the responsiveness of our application.\nA Bloom Filter is a well known solution providing probabilistic responses to queries regarding values in a set. "),(0,r.kt)("p",null,"A Bloom Filter can answer a simple query of whether a given value is part of a specific set.\nBy using byte arrays, the Bloom Filter can provide an accurate response that an element is ",(0,r.kt)("strong",{parentName:"p"},"not")," part of the set. Additionally, within a certain probabilistic range,\nthe Bloom Filter can provide a response that the element might be in the set. In the latter case, a lookup in the persistent storage layer is performed to determine whether the element is indeed part of the set. "),(0,r.kt)("p",null,"By utilises Bloom Filters, we can significantly improve the speed and effeciency of our systems operations, particularly given the size of our dataset. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The current data set is estimated to consume 1.5 TB of space. Yet much more data is easily available. Allowing the Bloom Filter to be apart of future proving for additional work.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Redis to the rescue - Redis, specifically the Redis Stack contains probabilistic data structures. This includes the\nBloom Filter and Cuckoo Filter.\nMaking use of the data strucutre is easily handled by the use of Docker containerization. "),(0,r.kt)("p",null,"Connecting the Bloom Filter is handled by ",(0,r.kt)("inlineCode",{parentName:"p"},"JedisPool")," which is specified in the associted service class in the ",(0,r.kt)("inlineCode",{parentName:"p"},"backend"),".\nHere we define the methods that we will utilize. "),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"BFExists"),(0,r.kt)("li",{parentName:"ul"},"Checks if an element is part of a set."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public long BFFExists(String key, String value) {\n        try (Jedis jedis = jedisPool.getResource()) {\n            return (long) jedis.sendCommand(RedisBloomProtocol.BloomFilterCommand.EXISTS, key, value);\n        } catch (Exception ignored) {\n            return -1;\n        }\n    }\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"An entire overview of commands possible to implement is listed on the Bloom Filter ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io/commands/?name=bf"},"documentation site"))),(0,r.kt)("h2",{id:"creating-the-filter"},"Creating the Filter"),(0,r.kt)("p",null,"Spring Boot does not build the filter. Instead this is done by a Python script.\nThe reason for this design is to allow users to reuse filters and allow server maintaince (the filter are lost upon server shutdown).\n",(0,r.kt)("inlineCode",{parentName:"p"},"RedisBloom"),"the module in Redis Stack contianing the Filter has methods available for dumping filters using Python and Loading them back in.\nBy the use of their documentation we have created a simple application using two python scripts; ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"builder.py")),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py")," to construct the filter. We load in TSV files. Essentially creating a filter for each searchable type.\nThe capacity of the filter is set with the variable; ",(0,r.kt)("inlineCode",{parentName:"p"},"BF_CAPACITY = 405635679")," - allowing plenty of capacity.\nOnce the filter(s) are build they can be utilized through the backend if build on the server or transfered to the server. "),(0,r.kt)("h3",{id:"transfering--loading-a-previously-created-filter"},"Transfering / loading a previously created filter"),(0,r.kt)("p",null,"The script ",(0,r.kt)("inlineCode",{parentName:"p"},"builder.py")," is a small terminal applciation that allows dumping and loading the filters to persistent storage.\nThe script makes use of Pandas dataframes to create python objects containing iterative dump strings. These are then deserialized to a Pickle file allowing for consize saving of the python object.\nWith the Pickle file you can transfer it to any server available. "),(0,r.kt)("p",null,"Using the same script you are able to reconstruct the filter. "),(0,r.kt)("p",null,"As a small terminal application the task of loading and dumping filters are made alot easier as it takes you through all steps required."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"It is difficult to make the dumping process be hanlded by other languages than python - the dumps are byte safe arrays which many compresses / alters when deserialized or saved to disk. ")))}d.isMDXComponent=!0}}]);