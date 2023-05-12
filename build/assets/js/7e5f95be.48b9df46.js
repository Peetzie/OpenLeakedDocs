"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5241],{98033:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var a=i(87462),n=(i(67294),i(3905)),s=i(26389),o=i(94891),r=(i(75190),i(47507),i(98685)),l=(i(63303),i(75035),i(85162));const d={id:"allows-a-user-to-tip-the-maintainers-with-additional-breaches",title:"Allows a user to tip the maintainers with additional breaches",description:"Allows a user to tip the maintainers with additional breaches",sidebar_label:"Allows a user to tip the maintainers with additional breaches",hide_title:!0,hide_table_of_contents:!0,api:{tags:["tip"],requestBody:{content:{"application/json":{schema:{allOf:[{title:"Tip rqeust Body"},{type:"object",properties:{desc:{type:"string",description:"Any discription for the data leak. Could be context, types of data or perhabs any password if compressed with password.",example:"Description Example"},size:{type:"integer",description:"The size of the databreach.",example:114,default:0},unit:{type:"string",description:"The unit of the previously entered size. This might be GB | No. of records or Unknown.",example:"No. of Records",default:"Unknown"},date:{type:"number",description:"The date in float",example:1683577685},magnetLink:{type:"string",description:"Unique identifier for the database. Cannot be left empty - No default value. Can be any type of link, not only magnetLinks are allowed.",example:"magnet:?xt=urn:btih:d136b1adde531f38311fbf43fb96fc26df1a34cd&dn=Collection+%232-%235+%26+Antipublic"}},example:{desc:"description",size:114,unit:"GB",date:1683577685,magnetLink:"magnet:?xt=urn:btih:d136b1adde531f38311fbf43fb96fc26df1a34cd&dn=Collection+%232-%235+%26+Antipublic"},title:"Tip"}]}}},required:!0},responses:{200:{description:"Successfully send tip to maintainers"},409:{description:"Breach already exists in database"}},security:[{basicAuth:[]}],description:"Allows a user to tip the maintainers with additional breaches",method:"post",path:"/api/tip/send",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"localhost",description:"Local running server"},{url:"open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{desc:"description",size:114,unit:"GB",date:1683577685,magnetLink:"magnet:?xt=urn:btih:d136b1adde531f38311fbf43fb96fc26df1a34cd&dn=Collection+%232-%235+%26+Antipublic"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"2.0.1","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Allows a user to tip the maintainers with additional breaches",description:{type:"text/plain"},url:{path:["api","tip","send"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},p=void 0,c={unversionedId:"API/allows-a-user-to-tip-the-maintainers-with-additional-breaches",id:"API/allows-a-user-to-tip-the-maintainers-with-additional-breaches",title:"Allows a user to tip the maintainers with additional breaches",description:"Allows a user to tip the maintainers with additional breaches",source:"@site/docs/API/allows-a-user-to-tip-the-maintainers-with-additional-breaches.api.mdx",sourceDirName:"API",slug:"/API/allows-a-user-to-tip-the-maintainers-with-additional-breaches",permalink:"/OpenLeakedDocs/docs/API/allows-a-user-to-tip-the-maintainers-with-additional-breaches",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"allows-a-user-to-tip-the-maintainers-with-additional-breaches",title:"Allows a user to tip the maintainers with additional breaches",description:"Allows a user to tip the maintainers with additional breaches",sidebar_label:"Allows a user to tip the maintainers with additional breaches",hide_title:!0,hide_table_of_contents:!0,api:{tags:["tip"],requestBody:{content:{"application/json":{schema:{allOf:[{title:"Tip rqeust Body"},{type:"object",properties:{desc:{type:"string",description:"Any discription for the data leak. Could be context, types of data or perhabs any password if compressed with password.",example:"Description Example"},size:{type:"integer",description:"The size of the databreach.",example:114,default:0},unit:{type:"string",description:"The unit of the previously entered size. This might be GB | No. of records or Unknown.",example:"No. of Records",default:"Unknown"},date:{type:"number",description:"The date in float",example:1683577685},magnetLink:{type:"string",description:"Unique identifier for the database. Cannot be left empty - No default value. Can be any type of link, not only magnetLinks are allowed.",example:"magnet:?xt=urn:btih:d136b1adde531f38311fbf43fb96fc26df1a34cd&dn=Collection+%232-%235+%26+Antipublic"}},example:{desc:"description",size:114,unit:"GB",date:1683577685,magnetLink:"magnet:?xt=urn:btih:d136b1adde531f38311fbf43fb96fc26df1a34cd&dn=Collection+%232-%235+%26+Antipublic"},title:"Tip"}]}}},required:!0},responses:{200:{description:"Successfully send tip to maintainers"},409:{description:"Breach already exists in database"}},security:[{basicAuth:[]}],description:"Allows a user to tip the maintainers with additional breaches",method:"post",path:"/api/tip/send",servers:[{url:"https://virtserver.swaggerhub.com/Peetzie/OpenLeaked/1.7.1",description:"SwaggerHub API Auto Mocking"},{url:"localhost",description:"Local running server"},{url:"open-leaked.compute.dtu.dk",description:"DTU Compute VPN Required"}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{desc:"description",size:114,unit:"GB",date:1683577685,magnetLink:"magnet:?xt=urn:btih:d136b1adde531f38311fbf43fb96fc26df1a34cd&dn=Collection+%232-%235+%26+Antipublic"},info:{title:"Open Leaked YAML",description:"## Introduction\nThis API is documented in **OpenAPI** format. \n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\n\n## Authentication\nThe application makes uses of build in authentication. Some of the client calls will be restricted. Use the HTTP basic form to authorize. ",contact:{name:"Open Leaked",url:"https://github.com/Open-Leaked/Monorepo",email:"openleaked@gmail.com"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"2.0.1","x-logo":{url:"https://raw.githubusercontent.com/Open-Leaked/Monorepo/main/Assets/logo/png/logo-white.png?token=GHSAT0AAAAAACB2FNOUZBLHC6LN6IMED47EZC3SB3Q",altText:"Open-Leaked Logo"}},postman:{name:"Allows a user to tip the maintainers with additional breaches",description:{type:"text/plain"},url:{path:["api","tip","send"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"docs/API/open-leaked-yaml",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Tip",permalink:"/OpenLeakedDocs/docs/API/tip"},next:{title:"email",permalink:"/OpenLeakedDocs/docs/API/email"}},h={},u=[{value:"Allows a user to tip the maintainers with additional breaches",id:"allows-a-user-to-tip-the-maintainers-with-additional-breaches",level:2}],m={toc:u};function b(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"allows-a-user-to-tip-the-maintainers-with-additional-breaches"},"Allows a user to tip the maintainers with additional breaches"),(0,n.kt)("p",null,"Allows a user to tip the maintainers with additional breaches"),(0,n.kt)(o.Z,{mdxType:"MimeTabs"},(0,n.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(r.Z,{collapsible:!1,name:"desc",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Any discription for the data leak. Could be context, types of data or perhabs any password if compressed with password.",example:"Description Example"},mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"size",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The size of the databreach.",example:114,default:0},mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"unit",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The unit of the previously entered size. This might be GB | No. of records or Unknown.",example:"No. of Records",default:"Unknown"},mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"date",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The date in float",example:1683577685},mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"magnetLink",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique identifier for the database. Cannot be left empty - No default value. Can be any type of link, not only magnetLinks are allowed.",example:"magnet:?xt=urn:btih:d136b1adde531f38311fbf43fb96fc26df1a34cd&dn=Collection+%232-%235+%26+Antipublic"},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Successfully send tip to maintainers")),(0,n.kt)("div",null)),(0,n.kt)(l.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Breach already exists in database")),(0,n.kt)("div",null)))))}b.isMDXComponent=!0}}]);