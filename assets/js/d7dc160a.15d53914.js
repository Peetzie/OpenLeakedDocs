"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[679],{52991:(e,t,n)=>{n.d(t,{Z:()=>A});var i=n(67294),r=n(86010),s=n(53438),o=n(39960),a=n(13919),c=n(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return i.createElement(o.Z,{href:t,className:(0,r.Z)("card padding--lg",l)},n)}function h(e){let{href:t,icon:n,title:s,description:o}=e;return i.createElement(m,{href:t},i.createElement("h2",{className:(0,r.Z)("text--truncate",u),title:s},n," ",s),o&&i.createElement("p",{className:(0,r.Z)("text--truncate",d),title:o},o))}function p(e){let{item:t}=e;const n=(0,s.Wl)(t);return n?i.createElement(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.xz)(t.docId??void 0);return i.createElement(h,{href:t.href,icon:n,title:t.label,description:r?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(f,{item:t});case"category":return i.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,s.jA)();return i.createElement(A,{items:n.items,className:t})}function A(e){const{items:t,className:n}=e;if(!t)return i.createElement(g,e);const o=(0,s.MN)(t);return i.createElement("section",{className:(0,r.Z)("row",n)},o.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(k,{item:e})))))}},89348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(87462),r=(n(67294),n(3905)),s=n(52991),o=n(53438);const a={id:"authorisations",title:"Authorisations",description:"Authorisations",custom_edit_url:null},c=void 0,l={unversionedId:"API/authorisations",id:"API/authorisations",title:"Authorisations",description:"Authorisations",source:"@site/docs/API/authorisations.tag.mdx",sourceDirName:"API",slug:"/API/authorisations",permalink:"/OpenLeakedDocs/docs/API/authorisations",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"authorisations",title:"Authorisations",description:"Authorisations",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Checks that the backend service is running",permalink:"/OpenLeakedDocs/docs/API/checks-that-the-backend-service-is-running"},next:{title:"Authorise an existing user",permalink:"/OpenLeakedDocs/docs/API/authorise-an-existing-user"}},u={},d=[],m={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Operations about user"),(0,r.kt)(s.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);