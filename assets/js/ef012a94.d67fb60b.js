"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[169],{52991:(e,t,i)=>{i.d(t,{Z:()=>E});var n=i(67294),r=i(86010),a=i(53438),c=i(39960),s=i(13919),o=i(95999);const l="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:i}=e;return n.createElement(c.Z,{href:t,className:(0,r.Z)("card padding--lg",l)},i)}function p(e){let{href:t,icon:i,title:a,description:c}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",d),title:a},i," ",a),c&&n.createElement("p",{className:(0,r.Z)("text--truncate",m),title:c},c))}function f(e){let{item:t}=e;const i=(0,a.Wl)(t);return i?n.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const i=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:i,title:t.label,description:r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const i=(0,a.jA)();return n.createElement(E,{items:i.items,className:t})}function E(e){const{items:t,className:i}=e;if(!t)return n.createElement(k,e);const c=(0,a.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",i)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},57425:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var n=i(87462),r=(i(67294),i(3905)),a=i(52991),c=i(53438);const s={id:"tip",title:"Tip",description:"Tip",custom_edit_url:null},o=void 0,l={unversionedId:"API/tip",id:"API/tip",title:"Tip",description:"Tip",source:"@site/docs/API/tip.tag.mdx",sourceDirName:"API",slug:"/API/tip",permalink:"/OpenLeakedDocs/docs/API/tip",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"tip",title:"Tip",description:"Tip",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Authorise an existing user",permalink:"/OpenLeakedDocs/docs/API/authorise-an-existing-user"},next:{title:"Allows a user to tip the maintainers with additional breaches",permalink:"/OpenLeakedDocs/docs/API/allows-a-user-to-tip-the-maintainers-with-additional-breaches"}},d={},m=[],u={toc:m};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Endpoints for all functionality related to tipping the system maintainers"),(0,r.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);