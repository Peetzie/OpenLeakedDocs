"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2899],{7902:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var n=a(87462),s=(a(67294),a(3905)),i=a(26389),r=a(94891),o=(a(75190),a(47507),a(98685)),h=(a(63303),a(75035),a(85162));const c={id:"checks-whether-or-not-the-username-is-existing-in-a-breach",title:"Checks whether or not the username is existing in a breach",description:"Checks whether or not the username is existing in a breach",sidebar_label:"Checks whether or not the username is existing in a breach",hide_title:!0,hide_table_of_contents:!0,api:{tags:["username"],requestBody:{content:{"application/json":{schema:{allOf:[{title:"UsernameRequestBody"},{type:"object",properties:{value:{type:"string",example:"username"}},example:{value:"username"},title:"Username"}]}}},required:!0},responses:{200:{description:"Username was found in a breach"},404:{description:"Username was not found in a breach"}},security:[{basicAuth:[]}],description:"Checks whether or not the username is existing in a breach",method:"post",path:"/api/Username/exists",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"localhost",description:"Local running server"},{url:"open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{value:"username"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.7.1","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Checks whether or not the username is existing in a breach",description:{type:"text/plain"},url:{path:["api","Username","exists"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},l=void 0,p={unversionedId:"API/checks-whether-or-not-the-username-is-existing-in-a-breach",id:"API/checks-whether-or-not-the-username-is-existing-in-a-breach",title:"Checks whether or not the username is existing in a breach",description:"Checks whether or not the username is existing in a breach",source:"@site/docs/API/checks-whether-or-not-the-username-is-existing-in-a-breach.api.mdx",sourceDirName:"API",slug:"/API/checks-whether-or-not-the-username-is-existing-in-a-breach",permalink:"/OpenLeakedDocs/docs/API/checks-whether-or-not-the-username-is-existing-in-a-breach",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"checks-whether-or-not-the-username-is-existing-in-a-breach",title:"Checks whether or not the username is existing in a breach",description:"Checks whether or not the username is existing in a breach",sidebar_label:"Checks whether or not the username is existing in a breach",hide_title:!0,hide_table_of_contents:!0,api:{tags:["username"],requestBody:{content:{"application/json":{schema:{allOf:[{title:"UsernameRequestBody"},{type:"object",properties:{value:{type:"string",example:"username"}},example:{value:"username"},title:"Username"}]}}},required:!0},responses:{200:{description:"Username was found in a breach"},404:{description:"Username was not found in a breach"}},security:[{basicAuth:[]}],description:"Checks whether or not the username is existing in a breach",method:"post",path:"/api/Username/exists",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"localhost",description:"Local running server"},{url:"open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{value:"username"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.7.1","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Checks whether or not the username is existing in a breach",description:{type:"text/plain"},url:{path:["api","Username","exists"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"username",permalink:"/OpenLeakedDocs/docs/API/username"},next:{title:"Finds associated breaches",permalink:"/OpenLeakedDocs/docs/API/finds-associated-breaches"}},u={},m=[{value:"Checks whether or not the username is existing in a breach",id:"checks-whether-or-not-the-username-is-existing-in-a-breach",level:2}],d={toc:m};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"checks-whether-or-not-the-username-is-existing-in-a-breach"},"Checks whether or not the username is existing in a breach"),(0,s.kt)("p",null,"Checks whether or not the username is existing in a breach"),(0,s.kt)(r.Z,{mdxType:"MimeTabs"},(0,s.kt)(h.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"username"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(h.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Username was found in a breach")),(0,s.kt)("div",null)),(0,s.kt)(h.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Username was not found in a breach")),(0,s.kt)("div",null)))))}b.isMDXComponent=!0}}]);