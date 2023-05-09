"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4302],{92309:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var n=s(87462),i=(s(67294),s(3905)),a=s(26389),o=s(94891),r=(s(75190),s(47507),s(98685)),l=(s(63303),s(75035),s(85162));const d={id:"authorise-an-existing-user",title:"Authorise an existing user",description:"This action can be performed by anyone. If the user is currently already in an active session the session is extended.",sidebar_label:"Authorise an existing user",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authorisations"],description:"This action can be performed by anyone. If the user is currently already in an active session the session is extended.",requestBody:{description:"HTTP basic user authentication requestbody",content:{"application/json":{schema:{type:"object",properties:{email:{minLength:4,type:"string",description:"User supplied username",example:"johndoe@example.com"},password:{minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits and special characters",format:"password",example:"drowssaP123#"}},xml:{name:"User"},title:"User"}}},required:!0},responses:{200:{description:"Sucess",headers:{"X-Rate-Limit":{description:"calls per hour allowed by the user",style:"simple",explode:!1,schema:{type:"integer",format:"int32"}},"X-Expires-After":{description:"date in UTC when token expires",style:"simple",explode:!1,schema:{type:"string",format:"date-time"}}}},401:{description:"Unauthorised"}},method:"post",path:"/api/login/login",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.0.0",description:"SwaggerHub API Auto Mocking"},{url:"openleaked.compute.dtu.dk",description:"Default server"},{url:"localhost",description:"Local running server"}],jsonRequestBodyExample:{email:"johndoe@example.com",password:"drowssaP123#"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. A local API key may be optained from the vendor\n",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.0.0","x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"}},postman:{name:"Authorise an existing user",description:{content:"This action can be performed by anyone. If the user is currently already in an active session the session is extended.",type:"text/plain"},url:{path:["api","login","login"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},p=void 0,c={unversionedId:"API/authorise-an-existing-user",id:"API/authorise-an-existing-user",title:"Authorise an existing user",description:"This action can be performed by anyone. If the user is currently already in an active session the session is extended.",source:"@site/docs/API/authorise-an-existing-user.api.mdx",sourceDirName:"API",slug:"/API/authorise-an-existing-user",permalink:"/OpenLeakedDocs/docs/API/authorise-an-existing-user",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"authorise-an-existing-user",title:"Authorise an existing user",description:"This action can be performed by anyone. If the user is currently already in an active session the session is extended.",sidebar_label:"Authorise an existing user",hide_title:!0,hide_table_of_contents:!0,api:{tags:["authorisations"],description:"This action can be performed by anyone. If the user is currently already in an active session the session is extended.",requestBody:{description:"HTTP basic user authentication requestbody",content:{"application/json":{schema:{type:"object",properties:{email:{minLength:4,type:"string",description:"User supplied username",example:"johndoe@example.com"},password:{minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits and special characters",format:"password",example:"drowssaP123#"}},xml:{name:"User"},title:"User"}}},required:!0},responses:{200:{description:"Sucess",headers:{"X-Rate-Limit":{description:"calls per hour allowed by the user",style:"simple",explode:!1,schema:{type:"integer",format:"int32"}},"X-Expires-After":{description:"date in UTC when token expires",style:"simple",explode:!1,schema:{type:"string",format:"date-time"}}}},401:{description:"Unauthorised"}},method:"post",path:"/api/login/login",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.0.0",description:"SwaggerHub API Auto Mocking"},{url:"openleaked.compute.dtu.dk",description:"Default server"},{url:"localhost",description:"Local running server"}],jsonRequestBodyExample:{email:"johndoe@example.com",password:"drowssaP123#"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. A local API key may be optained from the vendor\n",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.0.0","x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"}},postman:{name:"Authorise an existing user",description:{content:"This action can be performed by anyone. If the user is currently already in an active session the session is extended.",type:"text/plain"},url:{path:["api","login","login"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Authorisations",permalink:"/OpenLeakedDocs/docs/API/authorisations"},next:{title:"Ends current the current",permalink:"/OpenLeakedDocs/docs/API/ends-current-the-current"}},m={},u=[{value:"Authorise an existing user",id:"authorise-an-existing-user",level:2}],h={toc:u};function g(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"authorise-an-existing-user"},"Authorise an existing user"),(0,i.kt)("p",null,"This action can be performed by anyone. If the user is currently already in an active session the session is extended."),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"HTTP basic user authentication requestbody"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 4 characters`",schema:{minLength:4,type:"string",description:"User supplied username",example:"johndoe@example.com"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"password",required:!1,schemaName:"password",qualifierMessage:"**Possible values:** `>= 8 characters`, Value must match regular expression `/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/`",schema:{minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits and special characters",format:"password",example:"drowssaP123#"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Sucess")),(0,i.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Response Headers")),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"X-Rate-Limit"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null,(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"calls per hour allowed by the user")))),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"X-Expires-After"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null,(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"date in UTC when token expires")))))),(0,i.kt)("div",null)),(0,i.kt)(l.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorised")),(0,i.kt)("div",null)))))}g.isMDXComponent=!0}}]);