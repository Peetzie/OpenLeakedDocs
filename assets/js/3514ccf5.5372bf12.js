"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1761],{52991:(e,t,r)=>{r.d(t,{Z:()=>g});var s=r(67294),i=r(86010),n=r(53438),c=r(39960),a=r(13919),o=r(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return s.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},r)}function b(e){let{href:t,icon:r,title:n,description:c}=e;return s.createElement(m,{href:t},s.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:n},r," ",n),c&&s.createElement("p",{className:(0,i.Z)("text--truncate",d),title:c},c))}function p(e){let{item:t}=e;const r=(0,n.Wl)(t);return r?s.createElement(b,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.xz)(t.docId??void 0);return s.createElement(b,{href:t.href,icon:r,title:t.label,description:i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return s.createElement(f,{item:t});case"category":return s.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const r=(0,n.jA)();return s.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return s.createElement(k,e);const c=(0,n.MN)(t);return s.createElement("section",{className:(0,i.Z)("row",r)},c.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(h,{item:e})))))}},69781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=r(87462),i=(r(67294),r(3905)),n=r(52991),c=r(53438);const a={id:"subscribe",title:"subscribe",description:"subscribe",custom_edit_url:null},o=void 0,l={unversionedId:"API/subscribe",id:"API/subscribe",title:"subscribe",description:"subscribe",source:"@site/docs/API/subscribe.tag.mdx",sourceDirName:"API",slug:"/API/subscribe",permalink:"/OpenLeakedDocs/docs/API/subscribe",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"subscribe",title:"subscribe",description:"subscribe",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Finds associated breaches",permalink:"/OpenLeakedDocs/docs/API/finds-associated-breaches"},next:{title:"Verify user",permalink:"/OpenLeakedDocs/docs/API/verify-user"}},u={},d=[],m={toc:d};function b(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All endpoints associated with the subscribe service"),(0,i.kt)(n.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}b.isMDXComponent=!0}}]);