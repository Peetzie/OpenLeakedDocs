"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5963],{69755:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>w,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var s=t(87462),r=(t(67294),t(3905)),n=t(26389),i=t(94891),o=(t(75190),t(47507),t(98685)),p=(t(63303),t(75035),t(85162));const l={id:"creates-a-new-user-in-the-users-database",title:"Creates a new user in the users database",description:"Creates a new user using JDBC and BCrypt in the users and authorities table",sidebar_label:"Creates a new user in the users database",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authorisations"],description:"Creates a new user using JDBC and BCrypt in the users and authorities table",requestBody:{content:{"application/json":{schema:{type:"object",properties:{emailID:{type:"object",properties:{Local:{type:"string",description:"First part of the email pre-@",example:"johndoe"},Domain:{type:"string",description:"Second part of the email post-@",example:"example.com"}},title:"RegisterNewUser_emailID"},password:{minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits and special characters",example:"drowssaP123#"},cPassword:{minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits and special characters.",example:"drowssaP123#"}},example:{emailID:{local:"example",domain:"example.com"},password:"password123",cPassword:"password123"},title:"RegisterNewUser"}}},required:!0},responses:{200:{description:"Successfully created a new user"},400:{description:"Could not create a new user"},409:{description:"Could not create a new user - Password has been found in a breach"}},method:"post",path:"/api/auth/register",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"https://localhost",description:"Local running server"},{url:"https://open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{emailID:{local:"example",domain:"example.com"},password:"password123",cPassword:"password123"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"3.0.0","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Creates a new user in the users database",description:{content:"Creates a new user using JDBC and BCrypt in the users and authorities table",type:"text/plain"},url:{path:["api","auth","register"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},d=void 0,c={unversionedId:"API/creates-a-new-user-in-the-users-database",id:"API/creates-a-new-user-in-the-users-database",title:"Creates a new user in the users database",description:"Creates a new user using JDBC and BCrypt in the users and authorities table",source:"@site/docs/API/creates-a-new-user-in-the-users-database.api.mdx",sourceDirName:"API",slug:"/API/creates-a-new-user-in-the-users-database",permalink:"/OpenLeakedDocs/docs/API/creates-a-new-user-in-the-users-database",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"creates-a-new-user-in-the-users-database",title:"Creates a new user in the users database",description:"Creates a new user using JDBC and BCrypt in the users and authorities table",sidebar_label:"Creates a new user in the users database",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authorisations"],description:"Creates a new user using JDBC and BCrypt in the users and authorities table",requestBody:{content:{"application/json":{schema:{type:"object",properties:{emailID:{type:"object",properties:{Local:{type:"string",description:"First part of the email pre-@",example:"johndoe"},Domain:{type:"string",description:"Second part of the email post-@",example:"example.com"}},title:"RegisterNewUser_emailID"},password:{minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits and special characters",example:"drowssaP123#"},cPassword:{minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits and special characters.",example:"drowssaP123#"}},example:{emailID:{local:"example",domain:"example.com"},password:"password123",cPassword:"password123"},title:"RegisterNewUser"}}},required:!0},responses:{200:{description:"Successfully created a new user"},400:{description:"Could not create a new user"},409:{description:"Could not create a new user - Password has been found in a breach"}},method:"post",path:"/api/auth/register",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"https://localhost",description:"Local running server"},{url:"https://open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{emailID:{local:"example",domain:"example.com"},password:"password123",cPassword:"password123"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"3.0.0","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Creates a new user in the users database",description:{content:"Creates a new user using JDBC and BCrypt in the users and authorities table",type:"text/plain"},url:{path:["api","auth","register"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Create a new password",permalink:"/OpenLeakedDocs/docs/API/create-a-new-password"},next:{title:"Tip",permalink:"/OpenLeakedDocs/docs/API/tip"}},u={},m=[{value:"Creates a new user in the users database",id:"creates-a-new-user-in-the-users-database",level:2}],h={toc:m};function w(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"creates-a-new-user-in-the-users-database"},"Creates a new user in the users database"),(0,r.kt)("p",null,"Creates a new user using JDBC and BCrypt in the users and authorities table"),(0,r.kt)(i.Z,{mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"emailID"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"Local",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"First part of the email pre-@",example:"johndoe"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"Domain",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Second part of the email post-@",example:"example.com"},mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{collapsible:!1,name:"password",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 8 characters`, Value must match regular expression `/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/`",schema:{minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits and special characters",example:"drowssaP123#"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"cPassword",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 8 characters`, Value must match regular expression `/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/`",schema:{minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits and special characters.",example:"drowssaP123#"},mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Successfully created a new user")),(0,r.kt)("div",null)),(0,r.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Could not create a new user")),(0,r.kt)("div",null)),(0,r.kt)(p.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Could not create a new user - Password has been found in a breach")),(0,r.kt)("div",null)))))}w.isMDXComponent=!0}}]);