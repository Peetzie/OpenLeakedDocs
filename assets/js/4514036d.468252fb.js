"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3416],{50979:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));const s={sidebar_position:1},i="Introduction",r={unversionedId:"Database/Introduction",id:"Database/Introduction",title:"Introduction",description:"This section aims to cover the different subjects of our CORE database design.",source:"@site/docs/02-Database/Introduction.md",sourceDirName:"02-Database",slug:"/Database/Introduction",permalink:"/OpenLeakedDocs/docs/Database/Introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Docker containers",permalink:"/OpenLeakedDocs/docs/Docker"},next:{title:"MariaDB - Persistent storage",permalink:"/OpenLeakedDocs/docs/Database/MariaDB"}},d={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"This section aims to cover the different subjects of our CORE database design.\nThe section is further divded into segmented databases, as the entire database design evolves around multiple parts aiding one another to improve response times over one simple solution. "),(0,n.kt)("p",null,"Our database design is based on two different categories ",(0,n.kt)("em",{parentName:"p"},"persistent data storage")," i.e, storage that won't be deleted by a server-shut down and in-memory based storage. "),(0,n.kt)("p",null,"A further segmentation can be performed on the in-memory based storage, where we are utlizing both a cache and a Bloom filter. "),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Bloom filters are technically not a database, but a probabilistic data structure. However their functionality is to reduce database times and they are often associated with database designs")))}p.isMDXComponent=!0}}]);