"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[530],{51946:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var i=o(87462),a=(o(67294),o(3905)),n=o(26389),r=o(94891),s=(o(75190),o(47507),o(98685)),d=(o(63303),o(75035),o(85162));const c={id:"verification-of-the-temporary-6-digit-code",title:"Verification of the temporary 6-digit code.",description:"Verification of the temporary 6-digit code.",sidebar_label:"Verification of the temporary 6-digit code.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authorisations"],requestBody:{content:{"application/json":{schema:{type:"object",properties:{Local:{type:"string",description:"First part of the email pre-@",example:"johndoe"},Domain:{type:"string",description:"Second part of the email post-@",example:"example.com"},verifyCode:{maxLength:6,minLength:6,type:"integer",description:"6-Digit randomly generated code",example:123456}},example:{Local:"johndoe",Domain:"example.com",verifyCode:123456},title:"Verify"}}},required:!0},responses:{200:{description:"OK"},400:{description:"Bad Request"}},description:"Verification of the temporary 6-digit code.",method:"post",path:"/api/login/verify",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.0.0",description:"SwaggerHub API Auto Mocking"},{url:"openleaked.compute.dtu.dk",description:"Default server"},{url:"localhost",description:"Local running server"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{Local:"johndoe",Domain:"example.com",verifyCode:123456},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. A local API key may be optained from the vendor\n",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.5.1","x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"}},postman:{name:"Verification of the temporary 6-digit code.",description:{type:"text/plain"},url:{path:["api","login","verify"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},p=void 0,l={unversionedId:"API/verification-of-the-temporary-6-digit-code",id:"API/verification-of-the-temporary-6-digit-code",title:"Verification of the temporary 6-digit code.",description:"Verification of the temporary 6-digit code.",source:"@site/docs/API/verification-of-the-temporary-6-digit-code.api.mdx",sourceDirName:"API",slug:"/API/verification-of-the-temporary-6-digit-code",permalink:"/OpenLeakedDocs/docs/API/verification-of-the-temporary-6-digit-code",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"verification-of-the-temporary-6-digit-code",title:"Verification of the temporary 6-digit code.",description:"Verification of the temporary 6-digit code.",sidebar_label:"Verification of the temporary 6-digit code.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authorisations"],requestBody:{content:{"application/json":{schema:{type:"object",properties:{Local:{type:"string",description:"First part of the email pre-@",example:"johndoe"},Domain:{type:"string",description:"Second part of the email post-@",example:"example.com"},verifyCode:{maxLength:6,minLength:6,type:"integer",description:"6-Digit randomly generated code",example:123456}},example:{Local:"johndoe",Domain:"example.com",verifyCode:123456},title:"Verify"}}},required:!0},responses:{200:{description:"OK"},400:{description:"Bad Request"}},description:"Verification of the temporary 6-digit code.",method:"post",path:"/api/login/verify",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.0.0",description:"SwaggerHub API Auto Mocking"},{url:"openleaked.compute.dtu.dk",description:"Default server"},{url:"localhost",description:"Local running server"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{Local:"johndoe",Domain:"example.com",verifyCode:123456},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. A local API key may be optained from the vendor\n",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.5.1","x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"}},postman:{name:"Verification of the temporary 6-digit code.",description:{type:"text/plain"},url:{path:["api","login","verify"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Ends current the current",permalink:"/OpenLeakedDocs/docs/API/ends-current-the-current"},next:{title:"Initiate recovery process",permalink:"/OpenLeakedDocs/docs/API/initiate-recovery-process"}},m={},h=[{value:"Verification of the temporary 6-digit code.",id:"verification-of-the-temporary-6-digit-code",level:2}],u={toc:h};function g(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"verification-of-the-temporary-6-digit-code"},"Verification of the temporary 6-digit code."),(0,a.kt)("p",null,"Verification of the temporary 6-digit code."),(0,a.kt)(r.Z,{mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(s.Z,{collapsible:!1,name:"Local",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"First part of the email pre-@",example:"johndoe"},mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"Domain",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Second part of the email post-@",example:"example.com"},mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"verifyCode",required:!1,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 6 characters` and `<= 6 characters`",schema:{maxLength:6,minLength:6,type:"integer",description:"6-Digit randomly generated code",example:123456},mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"OK")),(0,a.kt)("div",null)),(0,a.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Bad Request")),(0,a.kt)("div",null)))))}g.isMDXComponent=!0}}]);