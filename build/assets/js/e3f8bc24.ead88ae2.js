"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5925],{52991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),i=n(86010),s=n(53438),a=n(39960),c=n(13919),o=n(95999);const l="cardContainer_fWXF",m="cardTitle_rnsV",u="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},n)}function p(e){let{href:t,icon:n,title:s,description:a}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",m),title:s},n," ",s),a&&r.createElement("p",{className:(0,i.Z)("text--truncate",u),title:a},a))}function f(e){let{item:t}=e;const n=(0,s.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:i?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,s.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const a=(0,s.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(k,{item:e})))))}},88107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),s=n(52991),a=n(53438);const c={id:"username",title:"username",description:"username",custom_edit_url:null},o=void 0,l={unversionedId:"API/username",id:"API/username",title:"username",description:"username",source:"@site/docs/API/username.tag.mdx",sourceDirName:"API",slug:"/API/username",permalink:"/OpenLeakedDocs/docs/API/username",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"username",title:"username",description:"username",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Unsubscribe",permalink:"/OpenLeakedDocs/docs/API/unsubscribe"},next:{title:"Simple lookup in the database",permalink:"/OpenLeakedDocs/docs/API/simple-lookup-in-the-database"}},m={},u=[],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All endpoints associated with the username service"),(0,i.kt)(s.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);