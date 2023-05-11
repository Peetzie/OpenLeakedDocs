"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4977],{40617:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>h,metadata:()=>c,toc:()=>u});var a=s(87462),i=(s(67294),s(3905)),o=s(26389),n=s(94891),r=(s(75190),s(47507),s(98685)),p=(s(63303),s(75035),s(85162));const h={id:"checks-whether-or-not-the-password-is-existing-in-a-breach",title:"Checks whether or not the password is existing in a breach",description:"Checks whether or not the password is existing in a breach",sidebar_label:"Checks whether or not the password is existing in a breach",hide_title:!0,hide_table_of_contents:!0,api:{tags:["password"],requestBody:{content:{"application/json":{schema:{allOf:[{title:"Password RequestBody"},{type:"object",properties:{value:{type:"string",description:"Unhashed password",example:"password"}},example:{value:"password"},title:"Password"}]}}},required:!0},responses:{200:{description:"Password was found in a breach"},404:{description:"Password was not found in a breach"}},security:[{basicAuth:[]}],description:"Checks whether or not the password is existing in a breach",method:"post",path:"/api/password/exists",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"localhost",description:"Local running server"},{url:"open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{value:"password"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.7.1","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Checks whether or not the password is existing in a breach",description:{type:"text/plain"},url:{path:["api","password","exists"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},d=void 0,c={unversionedId:"API/checks-whether-or-not-the-password-is-existing-in-a-breach",id:"API/checks-whether-or-not-the-password-is-existing-in-a-breach",title:"Checks whether or not the password is existing in a breach",description:"Checks whether or not the password is existing in a breach",source:"@site/docs/API/checks-whether-or-not-the-password-is-existing-in-a-breach.api.mdx",sourceDirName:"API",slug:"/API/checks-whether-or-not-the-password-is-existing-in-a-breach",permalink:"/OpenLeakedDocs/docs/API/checks-whether-or-not-the-password-is-existing-in-a-breach",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"checks-whether-or-not-the-password-is-existing-in-a-breach",title:"Checks whether or not the password is existing in a breach",description:"Checks whether or not the password is existing in a breach",sidebar_label:"Checks whether or not the password is existing in a breach",hide_title:!0,hide_table_of_contents:!0,api:{tags:["password"],requestBody:{content:{"application/json":{schema:{allOf:[{title:"Password RequestBody"},{type:"object",properties:{value:{type:"string",description:"Unhashed password",example:"password"}},example:{value:"password"},title:"Password"}]}}},required:!0},responses:{200:{description:"Password was found in a breach"},404:{description:"Password was not found in a breach"}},security:[{basicAuth:[]}],description:"Checks whether or not the password is existing in a breach",method:"post",path:"/api/password/exists",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"localhost",description:"Local running server"},{url:"open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{value:"password"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.7.1","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Checks whether or not the password is existing in a breach",description:{type:"text/plain"},url:{path:["api","password","exists"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"password",permalink:"/OpenLeakedDocs/docs/API/password"},next:{title:"Finds associated breaches",permalink:"/OpenLeakedDocs/docs/API/finds-associated-breaches"}},l={},u=[{value:"Checks whether or not the password is existing in a breach",id:"checks-whether-or-not-the-password-is-existing-in-a-breach",level:2}],w={toc:u};function m(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},w,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"checks-whether-or-not-the-password-is-existing-in-a-breach"},"Checks whether or not the password is existing in a breach"),(0,i.kt)("p",null,"Checks whether or not the password is existing in a breach"),(0,i.kt)(n.Z,{mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unhashed password",example:"password"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Password was found in a breach")),(0,i.kt)("div",null)),(0,i.kt)(p.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Password was not found in a breach")),(0,i.kt)("div",null)))))}m.isMDXComponent=!0}}]);