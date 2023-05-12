"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4537],{61532:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>p,metadata:()=>d,toc:()=>m});var a=i(87462),r=(i(67294),i(3905)),o=i(26389),n=i(94891),s=(i(75190),i(47507),i(98685)),c=(i(63303),i(75035),i(85162));const p={id:"verify-user",title:"Verify user",description:"Authenticate the user by checking the entered verification code.",sidebar_label:"Verify user",hide_title:!0,hide_table_of_contents:!0,api:{tags:["subscribe"],description:"Authenticate the user by checking the entered verification code.",requestBody:{content:{"application/json":{schema:{allOf:[{title:"VerifySubscribeRequestBody"},{type:"object",properties:{Local:{type:"string",description:"First part of the email pre-@",example:"johndoe"},Domain:{type:"string",description:"Second part of the email post-@",example:"example.com"},verifyCode:{maxLength:6,minLength:6,type:"string",description:"6-Digit randomly generated code",example:"123456"}},example:{local:"example",domain:"example.com",verifycode:123456},title:"Subscribe"}]}}},required:!0},responses:{200:{description:"Successfully verified user - Entered was correct"},400:{description:"Could not verify - Entered was incorrect"}},security:[{basicAuth:[]}],method:"post",path:"/api/subscribe/verify",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"localhost",description:"Local running server"},{url:"open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{local:"example",domain:"example.com",verifycode:123456},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"2.0.1","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Verify user",description:{content:"Authenticate the user by checking the entered verification code.",type:"text/plain"},url:{path:["api","subscribe","verify"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},l=void 0,d={unversionedId:"API/verify-user",id:"API/verify-user",title:"Verify user",description:"Authenticate the user by checking the entered verification code.",source:"@site/docs/API/verify-user.api.mdx",sourceDirName:"API",slug:"/API/verify-user",permalink:"/OpenLeakedDocs/docs/API/verify-user",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"verify-user",title:"Verify user",description:"Authenticate the user by checking the entered verification code.",sidebar_label:"Verify user",hide_title:!0,hide_table_of_contents:!0,api:{tags:["subscribe"],description:"Authenticate the user by checking the entered verification code.",requestBody:{content:{"application/json":{schema:{allOf:[{title:"VerifySubscribeRequestBody"},{type:"object",properties:{Local:{type:"string",description:"First part of the email pre-@",example:"johndoe"},Domain:{type:"string",description:"Second part of the email post-@",example:"example.com"},verifyCode:{maxLength:6,minLength:6,type:"string",description:"6-Digit randomly generated code",example:"123456"}},example:{local:"example",domain:"example.com",verifycode:123456},title:"Subscribe"}]}}},required:!0},responses:{200:{description:"Successfully verified user - Entered was correct"},400:{description:"Could not verify - Entered was incorrect"}},security:[{basicAuth:[]}],method:"post",path:"/api/subscribe/verify",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"localhost",description:"Local running server"},{url:"open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{local:"example",domain:"example.com",verifycode:123456},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"2.0.1","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Verify user",description:{content:"Authenticate the user by checking the entered verification code.",type:"text/plain"},url:{path:["api","subscribe","verify"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Signs out the current user",permalink:"/OpenLeakedDocs/docs/API/signs-out-the-current-user"},next:{title:"Initiate recovery process",permalink:"/OpenLeakedDocs/docs/API/initiate-recovery-process"}},u={},m=[{value:"Verify user",id:"verify-user",level:2}],h={toc:m};function y(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"verify-user"},"Verify user"),(0,r.kt)("p",null,"Authenticate the user by checking the entered verification code."),(0,r.kt)(n.Z,{mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(s.Z,{collapsible:!1,name:"Local",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"First part of the email pre-@",example:"johndoe"},mdxType:"SchemaItem"}),(0,r.kt)(s.Z,{collapsible:!1,name:"Domain",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Second part of the email post-@",example:"example.com"},mdxType:"SchemaItem"}),(0,r.kt)(s.Z,{collapsible:!1,name:"verifyCode",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 6 characters` and `<= 6 characters`",schema:{maxLength:6,minLength:6,type:"string",description:"6-Digit randomly generated code",example:"123456"},mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(o.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Successfully verified user - Entered was correct")),(0,r.kt)("div",null)),(0,r.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Could not verify - Entered was incorrect")),(0,r.kt)("div",null)))))}y.isMDXComponent=!0}}]);