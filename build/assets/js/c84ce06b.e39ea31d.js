"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6023],{17554:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var i=o(87462),n=(o(67294),o(3905)),a=o(26389),r=o(94891),s=(o(75190),o(47507),o(24310)),c=(o(63303),o(75035),o(85162));const l={id:"initiate-recovery-process",title:"Initiate recovery process",description:"Initiates the recovery process by sending an email to the entered email adress",sidebar_label:"Initiate recovery process",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authorisations"],description:"Initiates the recovery process by sending an email to the entered email adress",requestBody:{content:{"application/json":{schema:{type:"object",properties:{Domain:{type:"string"},Local:{type:"string"}},example:{Local:"johndoe",Domain:"example.com"},title:"Recover"}}},required:!0},responses:{200:{description:"OK"},400:{description:"Failed"}},method:"post",path:"/api/login/recover",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.0.0",description:"SwaggerHub API Auto Mocking"},{url:"openleaked.compute.dtu.dk",description:"Default server"},{url:"localhost",description:"Local running server"}],jsonRequestBodyExample:{Local:"johndoe",Domain:"example.com"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. A local API key may be optained from the vendor\n",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.0.0","x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"}},postman:{name:"Initiate recovery process",description:{content:"Initiates the recovery process by sending an email to the entered email adress",type:"text/plain"},url:{path:["api","login","recover"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},p=void 0,d={unversionedId:"API/initiate-recovery-process",id:"API/initiate-recovery-process",title:"Initiate recovery process",description:"Initiates the recovery process by sending an email to the entered email adress",source:"@site/docs/API/initiate-recovery-process.api.mdx",sourceDirName:"API",slug:"/API/initiate-recovery-process",permalink:"/OpenLeakedDocs/docs/API/initiate-recovery-process",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"initiate-recovery-process",title:"Initiate recovery process",description:"Initiates the recovery process by sending an email to the entered email adress",sidebar_label:"Initiate recovery process",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authorisations"],description:"Initiates the recovery process by sending an email to the entered email adress",requestBody:{content:{"application/json":{schema:{type:"object",properties:{Domain:{type:"string"},Local:{type:"string"}},example:{Local:"johndoe",Domain:"example.com"},title:"Recover"}}},required:!0},responses:{200:{description:"OK"},400:{description:"Failed"}},method:"post",path:"/api/login/recover",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.0.0",description:"SwaggerHub API Auto Mocking"},{url:"openleaked.compute.dtu.dk",description:"Default server"},{url:"localhost",description:"Local running server"}],jsonRequestBodyExample:{Local:"johndoe",Domain:"example.com"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. A local API key may be optained from the vendor\n",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.0.0","x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"}},postman:{name:"Initiate recovery process",description:{content:"Initiates the recovery process by sending an email to the entered email adress",type:"text/plain"},url:{path:["api","login","recover"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Verification of the temporary 6-digit code.",permalink:"/OpenLeakedDocs/docs/API/verification-of-the-temporary-6-digit-code"},next:{title:"Create a new password",permalink:"/OpenLeakedDocs/docs/API/create-a-new-password"}},m={},h=[{value:"Initiate recovery process",id:"initiate-recovery-process",level:2}],u={toc:h};function g(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"initiate-recovery-process"},"Initiate recovery process"),(0,n.kt)("p",null,"Initiates the recovery process by sending an email to the entered email adress"),(0,n.kt)(r.Z,{mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(s.Z,{collapsible:!1,name:"Domain",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(s.Z,{collapsible:!1,name:"Local",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null)),(0,n.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Failed")),(0,n.kt)("div",null)))))}g.isMDXComponent=!0}}]);