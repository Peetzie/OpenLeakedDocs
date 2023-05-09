"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[746],{52991:(e,t,i)=>{i.d(t,{Z:()=>w});var n=i(67294),a=i(86010),r=i(53438),c=i(39960),s=i(13919),l=i(95999);const o="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:i}=e;return n.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",o)},i)}function p(e){let{href:t,icon:i,title:r,description:c}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:r},i," ",r),c&&n.createElement("p",{className:(0,a.Z)("text--truncate",d),title:c},c))}function h(e){let{item:t}=e;const i=(0,r.Wl)(t);return i?n.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const i=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,r.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:i,title:t.label,description:a?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const i=(0,r.jA)();return n.createElement(w,{items:i.items,className:t})}function w(e){const{items:t,className:i}=e;if(!t)return n.createElement(g,e);const c=(0,r.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",i)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(k,{item:e})))))}},16808:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=i(87462),a=(i(67294),i(3905)),r=i(52991),c=i(53438);const s={id:"email",title:"email",description:"email",custom_edit_url:null},l=void 0,o={unversionedId:"API/email",id:"API/email",title:"email",description:"email",source:"@site/docs/API/email.tag.mdx",sourceDirName:"API",slug:"/API/email",permalink:"/OpenLeakedDocs/docs/API/email",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"email",title:"email",description:"email",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Allows a user to tip the maintainers with additional breaches",permalink:"/OpenLeakedDocs/docs/API/allows-a-user-to-tip-the-maintainers-with-additional-breaches"},next:{title:"Finds associated breaches",permalink:"/OpenLeakedDocs/docs/API/finds-associated-breaches"}},m={},d=[],u={toc:d};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All endpoints associated with email lookup"),(0,a.kt)(r.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);