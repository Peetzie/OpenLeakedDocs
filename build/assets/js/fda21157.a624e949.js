"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6837],{85723:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var s=i(87462),a=(i(67294),i(3905)),o=i(26389),n=i(94891),r=(i(75190),i(47507),i(98685)),l=(i(63303),i(75035),i(85162));const c={id:"subscribe-to-notifications",title:"Subscribe to notifications",description:"Adds the user to the database of subscribers",sidebar_label:"Subscribe to notifications",hide_title:!0,hide_table_of_contents:!0,api:{tags:["subscribe"],description:"Adds the user to the database of subscribers",requestBody:{content:{"application/json":{schema:{allOf:[{title:"Email Request Body"},{type:"object",properties:{Local:{type:"string",description:"First part of the email pre-@",example:"johndoe"},Domain:{type:"string",description:"Second part of the email post-@",example:"example.com"}},example:{local:"example",domain:"example.com"},title:"Email"}]}}},required:!0},responses:{200:{description:"Successfully added the user"},406:{description:"Email already exists in the subscribers database"},409:{description:"Verification already send"}},security:[{basicAuth:[]}],method:"post",path:"/api/subscribe/signup",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"localhost",description:"Local running server"},{url:"open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{local:"example",domain:"example.com"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.7.1","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Subscribe to notifications",description:{content:"Adds the user to the database of subscribers",type:"text/plain"},url:{path:["api","subscribe","signup"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},p=void 0,d={unversionedId:"API/subscribe-to-notifications",id:"API/subscribe-to-notifications",title:"Subscribe to notifications",description:"Adds the user to the database of subscribers",source:"@site/docs/API/subscribe-to-notifications.api.mdx",sourceDirName:"API",slug:"/API/subscribe-to-notifications",permalink:"/OpenLeakedDocs/docs/API/subscribe-to-notifications",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"subscribe-to-notifications",title:"Subscribe to notifications",description:"Adds the user to the database of subscribers",sidebar_label:"Subscribe to notifications",hide_title:!0,hide_table_of_contents:!0,api:{tags:["subscribe"],description:"Adds the user to the database of subscribers",requestBody:{content:{"application/json":{schema:{allOf:[{title:"Email Request Body"},{type:"object",properties:{Local:{type:"string",description:"First part of the email pre-@",example:"johndoe"},Domain:{type:"string",description:"Second part of the email post-@",example:"example.com"}},example:{local:"example",domain:"example.com"},title:"Email"}]}}},required:!0},responses:{200:{description:"Successfully added the user"},406:{description:"Email already exists in the subscribers database"},409:{description:"Verification already send"}},security:[{basicAuth:[]}],method:"post",path:"/api/subscribe/signup",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"localhost",description:"Local running server"},{url:"open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{local:"example",domain:"example.com"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.7.1","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Subscribe to notifications",description:{content:"Adds the user to the database of subscribers",type:"text/plain"},url:{path:["api","subscribe","signup"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Verify user",permalink:"/OpenLeakedDocs/docs/API/verify-user"},next:{title:"Unsubscribe from notificatons",permalink:"/OpenLeakedDocs/docs/API/unsubscribe-from-notificatons"}},u={},m=[{value:"Subscribe to notifications",id:"subscribe-to-notifications",level:2}],b={toc:m};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"subscribe-to-notifications"},"Subscribe to notifications"),(0,a.kt)("p",null,"Adds the user to the database of subscribers"),(0,a.kt)(n.Z,{mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(r.Z,{collapsible:!1,name:"Local",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"First part of the email pre-@",example:"johndoe"},mdxType:"SchemaItem"}),(0,a.kt)(r.Z,{collapsible:!1,name:"Domain",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Second part of the email post-@",example:"example.com"},mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Successfully added the user")),(0,a.kt)("div",null)),(0,a.kt)(l.Z,{label:"406",value:"406",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Email already exists in the subscribers database")),(0,a.kt)("div",null)),(0,a.kt)(l.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Verification already send")),(0,a.kt)("div",null)))))}h.isMDXComponent=!0}}]);