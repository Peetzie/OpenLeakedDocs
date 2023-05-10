"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6153],{61217:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=s(87462),o=(s(67294),s(3905)),i=s(26389),r=(s(94891),s(75190),s(47507),s(98685),s(63303),s(75035),s(85162));const a={id:"signs-out-the-current-user",title:"Signs out the current user",description:"This action can be performed by any authorized user. Once successfull the session cookie will be removed",sidebar_label:"Signs out the current user",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authorisations"],description:"This action can be performed by any authorized user. Once successfull the session cookie will be removed",responses:{200:{description:"Successfully signed out current user"},401:{description:"Could not end session for current user",headers:{"X-CUSTOM-AUTHENTICATE":{style:"simple",explode:!1,schema:{type:"string"}}}}},security:[{basicAuth:[]}],method:"post",path:"/api/auth/logout",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"localhost",description:"Local running server"},{url:"open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.7.1","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Signs out the current user",description:{content:"This action can be performed by any authorized user. Once successfull the session cookie will be removed",type:"text/plain"},url:{path:["api","auth","logout"],host:["{{baseUrl}}"],query:[],variable:[]},method:"POST",auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},u=void 0,c={unversionedId:"API/signs-out-the-current-user",id:"API/signs-out-the-current-user",title:"Signs out the current user",description:"This action can be performed by any authorized user. Once successfull the session cookie will be removed",source:"@site/docs/API/signs-out-the-current-user.api.mdx",sourceDirName:"API",slug:"/API/signs-out-the-current-user",permalink:"/OpenLeakedDocs/docs/API/signs-out-the-current-user",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"signs-out-the-current-user",title:"Signs out the current user",description:"This action can be performed by any authorized user. Once successfull the session cookie will be removed",sidebar_label:"Signs out the current user",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authorisations"],description:"This action can be performed by any authorized user. Once successfull the session cookie will be removed",responses:{200:{description:"Successfully signed out current user"},401:{description:"Could not end session for current user",headers:{"X-CUSTOM-AUTHENTICATE":{style:"simple",explode:!1,schema:{type:"string"}}}}},security:[{basicAuth:[]}],method:"post",path:"/api/auth/logout",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"localhost",description:"Local running server"},{url:"open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.7.1","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Signs out the current user",description:{content:"This action can be performed by any authorized user. Once successfull the session cookie will be removed",type:"text/plain"},url:{path:["api","auth","logout"],host:["{{baseUrl}}"],query:[],variable:[]},method:"POST",auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Authorise an existing user",permalink:"/OpenLeakedDocs/docs/API/authorise-an-existing-user"},next:{title:"Verify user",permalink:"/OpenLeakedDocs/docs/API/verify-user"}},l={},p=[{value:"Signs out the current user",id:"signs-out-the-current-user",level:2}],d={toc:p};function h(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"signs-out-the-current-user"},"Signs out the current user"),(0,o.kt)("p",null,"This action can be performed by any authorized user. Once successfull the session cookie will be removed"),(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"ApiTabs"},(0,o.kt)(r.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Successfully signed out current user")),(0,o.kt)("div",null)),(0,o.kt)(r.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Could not end session for current user")),(0,o.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Response Headers")),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)("li",{className:"schemaItem"},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"X-CUSTOM-AUTHENTICATE"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string")),(0,o.kt)("div",null)))),(0,o.kt)("div",null)))))}h.isMDXComponent=!0}}]);