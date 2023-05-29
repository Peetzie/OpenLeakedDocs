"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[373],{17554:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var i=o(87462),a=(o(67294),o(3905)),n=o(26389),s=o(94891),r=(o(75190),o(47507),o(98685)),p=(o(63303),o(75035),o(85162));const c={id:"initiate-recovery-process",title:"Initiate recovery process",description:"Initiates the recovery process by sending an email to the entered email adress",sidebar_label:"Initiate recovery process",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authorisations"],description:"Initiates the recovery process by sending an email to the entered email adress",requestBody:{content:{"application/json":{schema:{type:"object",properties:{Domain:{type:"string",description:"Second part of the email post-@",example:"example.com"},Local:{type:"string",description:"First part of the email pre-@",example:"johndoe"}},example:{Domain:"example.com",Local:"johndoe"},title:"Recover"}}},required:!0},responses:{200:{description:"Successfully send verification code to user"},400:{description:"Could not send verification code"}},method:"post",path:"/api/auth/recover",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"https://localhost",description:"Local running server"},{url:"https://open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{Domain:"example.com",Local:"johndoe"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"3.0.0","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Initiate recovery process",description:{content:"Initiates the recovery process by sending an email to the entered email adress",type:"text/plain"},url:{path:["api","auth","recover"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},l=void 0,d={unversionedId:"API/initiate-recovery-process",id:"API/initiate-recovery-process",title:"Initiate recovery process",description:"Initiates the recovery process by sending an email to the entered email adress",source:"@site/docs/API/initiate-recovery-process.api.mdx",sourceDirName:"API",slug:"/API/initiate-recovery-process",permalink:"/OpenLeakedDocs/docs/API/initiate-recovery-process",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"initiate-recovery-process",title:"Initiate recovery process",description:"Initiates the recovery process by sending an email to the entered email adress",sidebar_label:"Initiate recovery process",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authorisations"],description:"Initiates the recovery process by sending an email to the entered email adress",requestBody:{content:{"application/json":{schema:{type:"object",properties:{Domain:{type:"string",description:"Second part of the email post-@",example:"example.com"},Local:{type:"string",description:"First part of the email pre-@",example:"johndoe"}},example:{Domain:"example.com",Local:"johndoe"},title:"Recover"}}},required:!0},responses:{200:{description:"Successfully send verification code to user"},400:{description:"Could not send verification code"}},method:"post",path:"/api/auth/recover",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"https://localhost",description:"Local running server"},{url:"https://open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{Domain:"example.com",Local:"johndoe"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"3.0.0","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Initiate recovery process",description:{content:"Initiates the recovery process by sending an email to the entered email adress",type:"text/plain"},url:{path:["api","auth","recover"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Verify user",permalink:"/OpenLeakedDocs/docs/API/verify-user"},next:{title:"Create a new password",permalink:"/OpenLeakedDocs/docs/API/create-a-new-password"}},m={},u=[{value:"Initiate recovery process",id:"initiate-recovery-process",level:2}],h={toc:u};function y(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"initiate-recovery-process"},"Initiate recovery process"),(0,a.kt)("p",null,"Initiates the recovery process by sending an email to the entered email adress"),(0,a.kt)(s.Z,{mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(r.Z,{collapsible:!1,name:"Domain",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Second part of the email post-@",example:"example.com"},mdxType:"SchemaItem"}),(0,a.kt)(r.Z,{collapsible:!1,name:"Local",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"First part of the email pre-@",example:"johndoe"},mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Successfully send verification code to user")),(0,a.kt)("div",null)),(0,a.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Could not send verification code")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);