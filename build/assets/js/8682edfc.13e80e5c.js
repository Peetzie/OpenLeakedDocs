"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2969],{75433:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>b,frontMatter:()=>h,metadata:()=>l,toc:()=>m});var a=i(87462),n=(i(67294),i(3905)),o=i(26389),s=i(94891),r=(i(75190),i(47507),i(98685)),c=(i(63303),i(75035),i(85162));const h={id:"checks-whether-or-not-the-domain-is-existing-in-a-breach",title:"Checks whether or not the domain is existing in a breach",description:"Checks whether or not the domain is existing in a breach",sidebar_label:"Checks whether or not the domain is existing in a breach",hide_title:!0,hide_table_of_contents:!0,api:{tags:["domain"],requestBody:{content:{"application/json":{schema:{allOf:[{title:"DomainRequestBody"},{type:"object",properties:{value:{type:"string",example:"example.com"}},example:"example.com",title:"Domain"}]}}},required:!0},responses:{200:{description:"Domain was found in a breach"},404:{description:"Domain was not found in a breach"}},security:[{basicAuth:[]}],description:"Checks whether or not the domain is existing in a breach",method:"post",path:"/api/domain/exists",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"localhost",description:"Local running server"},{url:"open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:"example.com",info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.7.1","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Checks whether or not the domain is existing in a breach",description:{type:"text/plain"},url:{path:["api","domain","exists"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},p=void 0,l={unversionedId:"API/checks-whether-or-not-the-domain-is-existing-in-a-breach",id:"API/checks-whether-or-not-the-domain-is-existing-in-a-breach",title:"Checks whether or not the domain is existing in a breach",description:"Checks whether or not the domain is existing in a breach",source:"@site/docs/API/checks-whether-or-not-the-domain-is-existing-in-a-breach.api.mdx",sourceDirName:"API",slug:"/API/checks-whether-or-not-the-domain-is-existing-in-a-breach",permalink:"/OpenLeakedDocs/docs/API/checks-whether-or-not-the-domain-is-existing-in-a-breach",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"checks-whether-or-not-the-domain-is-existing-in-a-breach",title:"Checks whether or not the domain is existing in a breach",description:"Checks whether or not the domain is existing in a breach",sidebar_label:"Checks whether or not the domain is existing in a breach",hide_title:!0,hide_table_of_contents:!0,api:{tags:["domain"],requestBody:{content:{"application/json":{schema:{allOf:[{title:"DomainRequestBody"},{type:"object",properties:{value:{type:"string",example:"example.com"}},example:"example.com",title:"Domain"}]}}},required:!0},responses:{200:{description:"Domain was found in a breach"},404:{description:"Domain was not found in a breach"}},security:[{basicAuth:[]}],description:"Checks whether or not the domain is existing in a breach",method:"post",path:"/api/domain/exists",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"localhost",description:"Local running server"},{url:"open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:"example.com",info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.7.1","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Checks whether or not the domain is existing in a breach",description:{type:"text/plain"},url:{path:["api","domain","exists"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Finds associated breaches",permalink:"/OpenLeakedDocs/docs/API/finds-associated-breaches"},next:{title:"authenticationstatus",permalink:"/OpenLeakedDocs/docs/API/authenticationstatus"}},d={},m=[{value:"Checks whether or not the domain is existing in a breach",id:"checks-whether-or-not-the-domain-is-existing-in-a-breach",level:2}],u={toc:m};function b(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"checks-whether-or-not-the-domain-is-existing-in-a-breach"},"Checks whether or not the domain is existing in a breach"),(0,n.kt)("p",null,"Checks whether or not the domain is existing in a breach"),(0,n.kt)(s.Z,{mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(r.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"example.com"},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(o.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Domain was found in a breach")),(0,n.kt)("div",null)),(0,n.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Domain was not found in a breach")),(0,n.kt)("div",null)))))}b.isMDXComponent=!0}}]);