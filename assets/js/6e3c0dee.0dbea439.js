"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2320],{15188:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var i=s(87462),o=(s(67294),s(3905)),a=s(26389),n=s(94891),r=(s(75190),s(47507),s(98685)),c=(s(63303),s(75035),s(85162));const l={id:"unsubscribe-from-notificatons",title:"Unsubscribe from notificatons",description:"Removes the user from the subscribers database",sidebar_label:"Unsubscribe from notificatons",hide_title:!0,hide_table_of_contents:!0,api:{tags:["subscribe"],description:"Removes the user from the subscribers database",requestBody:{content:{"application/json":{schema:{allOf:[{title:"Email Request Body"},{type:"object",properties:{Domain:{type:"string",description:"Second part of the email post-@",example:"example.com"},Local:{type:"string",description:"First part of the email pre-@",example:"johndoe"}},example:{local:"example",domain:"example.com"},title:"Email"}]}}},required:!0},responses:{200:{description:"Successfully removed the user from the subscribers database"},404:{description:"Failed to remove the user - User is not in the subscribers table"}},security:[{basicAuth:[]}],method:"post",path:"/api/subscribe/unsubscribe",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"localhost",description:"Local running server"},{url:"open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{local:"example",domain:"example.com"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"2.0.1","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Unsubscribe from notificatons",description:{content:"Removes the user from the subscribers database",type:"text/plain"},url:{path:["api","subscribe","unsubscribe"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},p=void 0,u={unversionedId:"API/unsubscribe-from-notificatons",id:"API/unsubscribe-from-notificatons",title:"Unsubscribe from notificatons",description:"Removes the user from the subscribers database",source:"@site/docs/API/unsubscribe-from-notificatons.api.mdx",sourceDirName:"API",slug:"/API/unsubscribe-from-notificatons",permalink:"/OpenLeakedDocs/docs/API/unsubscribe-from-notificatons",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"unsubscribe-from-notificatons",title:"Unsubscribe from notificatons",description:"Removes the user from the subscribers database",sidebar_label:"Unsubscribe from notificatons",hide_title:!0,hide_table_of_contents:!0,api:{tags:["subscribe"],description:"Removes the user from the subscribers database",requestBody:{content:{"application/json":{schema:{allOf:[{title:"Email Request Body"},{type:"object",properties:{Domain:{type:"string",description:"Second part of the email post-@",example:"example.com"},Local:{type:"string",description:"First part of the email pre-@",example:"johndoe"}},example:{local:"example",domain:"example.com"},title:"Email"}]}}},required:!0},responses:{200:{description:"Successfully removed the user from the subscribers database"},404:{description:"Failed to remove the user - User is not in the subscribers table"}},security:[{basicAuth:[]}],method:"post",path:"/api/subscribe/unsubscribe",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"localhost",description:"Local running server"},{url:"open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{local:"example",domain:"example.com"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"2.0.1","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Unsubscribe from notificatons",description:{content:"Removes the user from the subscribers database",type:"text/plain"},url:{path:["api","subscribe","unsubscribe"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Subscribe to notifications",permalink:"/OpenLeakedDocs/docs/API/subscribe-to-notifications"},next:{title:"username",permalink:"/OpenLeakedDocs/docs/API/username"}},m={},d=[{value:"Unsubscribe from notificatons",id:"unsubscribe-from-notificatons",level:2}],b={toc:d};function h(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,i.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"unsubscribe-from-notificatons"},"Unsubscribe from notificatons"),(0,o.kt)("p",null,"Removes the user from the subscribers database"),(0,o.kt)(n.Z,{mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(r.Z,{collapsible:!1,name:"Domain",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Second part of the email post-@",example:"example.com"},mdxType:"SchemaItem"}),(0,o.kt)(r.Z,{collapsible:!1,name:"Local",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"First part of the email pre-@",example:"johndoe"},mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)(a.Z,{mdxType:"ApiTabs"},(0,o.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Successfully removed the user from the subscribers database")),(0,o.kt)("div",null)),(0,o.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Failed to remove the user - User is not in the subscribers table")),(0,o.kt)("div",null)))))}h.isMDXComponent=!0}}]);