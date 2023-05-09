"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7396],{31671:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var s=o(87462),a=(o(67294),o(3905)),r=o(26389),n=o(94891),i=(o(75190),o(47507),o(24310)),p=(o(63303),o(75035),o(85162));const d={id:"create-a-new-password",title:"Create a new password",description:"Allows the user to create a new password after verification if previous was forgotton. Is a part of the recovery process",sidebar_label:"Create a new password",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authorisations"],description:"Allows the user to create a new password after verification if previous was forgotton. Is a part of the recovery process",requestBody:{content:{"application/json":{schema:{type:"object",properties:{email:{type:"string"},password:{type:"string"},cPassword:{type:"string"}},example:{email:"johndoe@example.com",password:"password",cPassword:"password"},title:"userNewPassword"}}},required:!0},responses:{200:{description:"OK"},400:{description:"Failed"}},method:"post",path:"/api/login/newPassword",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.0.0",description:"SwaggerHub API Auto Mocking"},{url:"openleaked.compute.dtu.dk",description:"Default server"},{url:"localhost",description:"Local running server"}],jsonRequestBodyExample:{email:"johndoe@example.com",password:"password",cPassword:"password"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. A local API key may be optained from the vendor\n",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.0.0","x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"}},postman:{name:"Create a new password",description:{content:"Allows the user to create a new password after verification if previous was forgotton. Is a part of the recovery process",type:"text/plain"},url:{path:["api","login","newPassword"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},l=void 0,c={unversionedId:"API/create-a-new-password",id:"API/create-a-new-password",title:"Create a new password",description:"Allows the user to create a new password after verification if previous was forgotton. Is a part of the recovery process",source:"@site/docs/API/create-a-new-password.api.mdx",sourceDirName:"API",slug:"/API/create-a-new-password",permalink:"/OpenLeakedDocs/docs/API/create-a-new-password",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-a-new-password",title:"Create a new password",description:"Allows the user to create a new password after verification if previous was forgotton. Is a part of the recovery process",sidebar_label:"Create a new password",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authorisations"],description:"Allows the user to create a new password after verification if previous was forgotton. Is a part of the recovery process",requestBody:{content:{"application/json":{schema:{type:"object",properties:{email:{type:"string"},password:{type:"string"},cPassword:{type:"string"}},example:{email:"johndoe@example.com",password:"password",cPassword:"password"},title:"userNewPassword"}}},required:!0},responses:{200:{description:"OK"},400:{description:"Failed"}},method:"post",path:"/api/login/newPassword",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.0.0",description:"SwaggerHub API Auto Mocking"},{url:"openleaked.compute.dtu.dk",description:"Default server"},{url:"localhost",description:"Local running server"}],jsonRequestBodyExample:{email:"johndoe@example.com",password:"password",cPassword:"password"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. A local API key may be optained from the vendor\n",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.0.0","x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"}},postman:{name:"Create a new password",description:{content:"Allows the user to create a new password after verification if previous was forgotton. Is a part of the recovery process",type:"text/plain"},url:{path:["api","login","newPassword"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Initiate recovery process",permalink:"/OpenLeakedDocs/docs/API/initiate-recovery-process"},next:{title:"Authorise an existing user",permalink:"/OpenLeakedDocs/docs/API/authorise-an-existing-user"}},m={},u=[{value:"Create a new password",id:"create-a-new-password",level:2}],w={toc:u};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,s.Z)({},w,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-a-new-password"},"Create a new password"),(0,a.kt)("p",null,"Allows the user to create a new password after verification if previous was forgotton. Is a part of the recovery process"),(0,a.kt)(n.Z,{mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(i.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(i.Z,{collapsible:!1,name:"password",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(i.Z,{collapsible:!1,name:"cPassword",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"OK")),(0,a.kt)("div",null)),(0,a.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Failed")),(0,a.kt)("div",null)))))}h.isMDXComponent=!0}}]);