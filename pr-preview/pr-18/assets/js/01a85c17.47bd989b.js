"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([[209],{4096:(e,t,a)=>{a.d(t,{in:()=>c,OU:()=>C,Ki:()=>w,kJ:()=>x,x:()=>l,e7:()=>m,J_:()=>f,Gx:()=>k});var s=a(6540),n=a(9532),r=a(6803),i=a(4848);function l(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const o=s.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const r=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,i.jsx)(o.Provider,{value:r,children:t})}function m(){const e=(0,s.useContext)(o);if(null===e)throw new n.dV("BlogPostProvider");return e}var d=a(6025),u=a(4586);const h=e=>new Date(e).toISOString();function g(e){const t=e.map(b);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:j({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function x(e){const{siteConfig:t}=(0,u.A)(),{withBaseUrl:a}=(0,d.hH)(),{metadata:{blogDescription:s,blogTitle:n,permalink:r}}=e,i=`${t.url}${r}`;return{"@context":"https://schema.org","@type":"Blog","@id":i,mainEntityOfPage:i,headline:n,description:s,blogPost:e.items.map((e=>function(e,t,a){const{assets:s,frontMatter:n,metadata:r}=e,{date:i,title:l,description:o,lastUpdatedAt:c}=r,m=s.image??n.image,d=n.keywords??[],u=`${t.url}${r.permalink}`,x=c?h(c):void 0;return{"@type":"BlogPosting","@id":u,mainEntityOfPage:u,url:u,headline:l,name:l,description:o,datePublished:i,...x?{dateModified:x}:{},...g(r.authors),...p(m,a,l),...d?{keywords:d}:{}}}(e.content,t,a)))}}function f(){const e=l(),{assets:t,metadata:a}=m(),{siteConfig:s}=(0,u.A)(),{withBaseUrl:n}=(0,d.hH)(),{date:r,title:i,description:o,frontMatter:c,lastUpdatedAt:x}=a,f=t.image??c.image,b=c.keywords??[],j=x?h(x):void 0,v=`${s.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:i,name:i,description:o,datePublished:r,...j?{dateModified:j}:{},...g(a.authors),...p(f,n,i),...b?{keywords:b}:{},isPartOf:{"@type":"Blog","@id":`${s.url}${e.blogBasePath}`,name:e.blogTitle}}}function b(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function j(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}var v=a(6347),y=a(8774),A=a(1682),N=a(9169);function k(e){const{pathname:t}=(0,v.zy)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,N.ys)(e.permalink,t))}(e,t)))),[e,t])}function w(e){const t=(0,A.$z)(e,(e=>`${new Date(e.date).getFullYear()}`)),a=Object.entries(t);return a.reverse(),a}function C(e){let{items:t,ulClassName:a,liClassName:s,linkClassName:n,linkActiveClassName:r}=e;return(0,i.jsx)("ul",{className:a,children:t.map((e=>(0,i.jsx)("li",{className:s,children:(0,i.jsx)(y.A,{isNavLink:!0,to:e.permalink,className:n,activeClassName:r,children:e.title})},e.permalink)))})}},9274:(e,t,a)=>{a.d(t,{A:()=>H});var s=a(6540),n=a(4581),r=a(4164),i=a(1312),l=a(4096),o=a(6342),c=a(1107),m=a(4848);function d(e){let{year:t,yearGroupHeadingClassName:a,children:s}=e;return(0,m.jsxs)("div",{role:"group",children:[(0,m.jsx)(c.A,{as:"h3",className:a,children:t}),s]})}function u(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:s}=e;if((0,o.p)().blog.sidebar.groupByYear){const e=(0,l.Ki)(t);return(0,m.jsx)(m.Fragment,{children:e.map((e=>{let[t,n]=e;return(0,m.jsx)(d,{year:t,yearGroupHeadingClassName:a,children:(0,m.jsx)(s,{items:n})},t)}))})}return(0,m.jsx)(s,{items:t})}const h=(0,s.memo)(u),g="sidebar_re4s",p="sidebarItemTitle_pO2u",x="sidebarItemList_Yudw",f="sidebarItem__DBe",b="sidebarItemLink_mo7H",j="sidebarItemLinkActive_I1ZP",v="yearGroupHeading_rMGB",y=e=>{let{items:t}=e;return(0,m.jsx)(l.OU,{items:t,ulClassName:(0,r.A)(x,"clean-list"),liClassName:f,linkClassName:b,linkActiveClassName:j})};function A(e){let{sidebar:t}=e;const a=(0,l.Gx)(t.items);return(0,m.jsx)("aside",{className:"col col--3",children:(0,m.jsxs)("nav",{className:(0,r.A)(g,"thin-scrollbar"),"aria-label":(0,i.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,m.jsx)("div",{className:(0,r.A)(p,"margin-bottom--md"),children:t.title}),(0,m.jsx)(h,{items:a,ListComponent:y,yearGroupHeadingClassName:v})]})})}const N=(0,s.memo)(A);var k=a(5600);const w="yearGroupHeading_QT03",C=e=>{let{items:t}=e;return(0,m.jsx)(l.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function _(e){let{sidebar:t}=e;const a=(0,l.Gx)(t.items);return(0,m.jsx)(h,{items:a,ListComponent:C,yearGroupHeadingClassName:w})}function P(e){return(0,m.jsx)(k.GX,{component:_,props:e})}const M=(0,s.memo)(P);function H(e){let{sidebar:t}=e;const a=(0,n.l)();return t?.items.length?"mobile"===a?(0,m.jsx)(M,{sidebar:t}):(0,m.jsx)(N,{sidebar:t}):null}},9158:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});a(6540);var s=a(4164),n=a(1312);const r=()=>(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=a(1213),l=a(7559),o=a(4370),c=a(6133),m=a(1107);const d={tag:"tag_Nnez"};var u=a(4848);function h(e){let{letterEntry:t}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(m.A,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,u.jsx)("li",{className:d.tag,children:(0,u.jsx)(c.A,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function g(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[s]=t;return a.localeCompare(s)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,u.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,u.jsx)(h,{letterEntry:e},e.letter)))})}var p=a(1463);function x(e){let{tags:t,sidebar:a}=e;const n=r();return(0,u.jsxs)(i.e3,{className:(0,s.A)(l.G.wrapper.blogPages,l.G.page.blogTagsListPage),children:[(0,u.jsx)(i.be,{title:n}),(0,u.jsx)(p.A,{tag:"blog_tags_list"}),(0,u.jsxs)(o.A,{sidebar:a,children:[(0,u.jsx)(m.A,{as:"h1",children:n}),(0,u.jsx)(g,{tags:t})]})]})}},6133:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(4164),n=a(8774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=a(4848);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,i.jsxs)(n.A,{href:t,title:o,className:(0,s.A)(r.tag,l?r.tagWithCount:r.tagRegular),children:[a,l&&(0,i.jsx)("span",{children:l})]})}},8948:(e,t,a)=>{a.d(t,{b:()=>l});var s=a(6540),n=a(7221),r=a(4848);function i(e){let{x:t,y:a,...s}=e;return(0,r.jsx)(n.P.path,{transform:`translate(${-32*a+96*t} ${160*a})`,d:"M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",...s})}function l(e){let{yOffset:t=0,interactive:a=!1,...n}=e,l=(0,s.useId)(),o=(0,s.useRef)(null),c=(0,s.useRef)(),m=(0,s.useRef)(0),[d,u]=(0,s.useState)([]);return(0,s.useEffect)((()=>{if(a)return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)};function e(e){if(!o.current)return;let a=o.current.getBoundingClientRect(),s=e.clientX-a.left,n=e.clientY-a.top;s<0||n<0||s>a.width||n>a.height||(s=s-a.width/2-32,n-=t,s+=Math.tan(.2)*n,s=Math.floor(s/96),n=Math.floor(n/160),c.current?.[0]===s&&c.current?.[1]===n||(c.current=[s,n],u((e=>{let t=m.current++;return[...e,[s,n,t]].filter((e=>!(e[0]===s&&e[1]===n&&e[2]!==t)))}))))}}),[t,a]),(0,r.jsxs)("svg",{ref:o,"aria-hidden":"true",...n,children:[(0,r.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${l})`,strokeWidth:"0"}),(0,r.jsxs)("svg",{x:"50%",y:t,strokeWidth:"0",className:"overflow-visible",children:[[[1,1],[2,2],[4,3],[6,2],[7,4],[5,5]].map((e=>(0,r.jsx)(i,{x:e[0],y:e[1],className:" dark:fill-gray-800"},`${e}`))),d.map((e=>(0,r.jsx)(i,{className:" dark:fill-gray-800",x:e[0],y:e[1],animate:{opacity:[0,1,0]},transition:{duration:1,times:[0,0,1]},onAnimationComplete:()=>{u((t=>t.filter((t=>t[2]!==e[2]))))}},e[2])))]}),(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:l,width:"96",height:"480",x:"50%",patternUnits:"userSpaceOnUse",patternTransform:`translate(0 ${t})`,fill:"none",children:(0,r.jsx)("path",{d:"M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"})})})]})}},1579:(e,t,a)=>{a.d(t,{Y:()=>l});var s=a(4164),n=a(819),r=a(7851),i=a(4848);function l(e){let{eyebrow:t,title:a,children:l,centered:o=!1}=e;return(0,i.jsx)(n.m,{className:(0,s.A)("mt-24 sm:mt-32 lg:mt-40",o&&"text-center"),children:(0,i.jsxs)(r._,{children:[(0,i.jsxs)("h1",{children:[(0,i.jsx)("span",{className:"block font-display text-base font-semibold text-neutral-950 dark:text-neutral-50",children:t}),(0,i.jsx)("span",{className:"sr-only",children:" - "}),(0,i.jsx)("span",{className:(0,s.A)("mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 [text-wrap:balance] sm:text-6xl",o&&"mx-auto"),children:a})]}),(0,i.jsx)("div",{className:(0,s.A)("mt-6 max-w-3xl text-xl text-neutral-600 dark:text-neutral-300",o&&"mx-auto"),children:l})]})})}},4370:(e,t,a)=>{a.d(t,{A:()=>d});a(6540);var s=a(4164),n=a(8922),r=a(9274),i=a(6347),l=a(1579),o=a(819),c=a(8948),m=a(4848);function d(e){const{sidebar:t,toc:a,children:d,...u}=e,h=t&&t.items.length>0,g=(0,i.zy)();return(0,m.jsx)(n.A,{...u,children:(0,m.jsx)("div",{className:"container margin-vert--lg",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)(r.A,{sidebar:t}),(0,m.jsx)(c.b,{className:"absolute inset-x-0 -top-24 -z-10 h-[1000px] w-full fill-neutral-50  stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",yOffset:-96,interactive:!0}),(0,m.jsxs)("main",{className:(0,s.A)("col",{"":h,"col--9 col--offset-1":!h}),children:["/blog"===g.pathname&&(0,m.jsx)(l.Y,{eyebrow:"Blog",title:"The latest articles and news",children:(0,m.jsx)("p",{children:"Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles."})}),(0,m.jsx)(o.m,{className:"mt-16 sm:mt-32 lg:mt-36",children:(0,m.jsx)("div",{className:"space-y-24 lg:space-y-32 w-full",children:d})})]}),a&&(0,m.jsx)("div",{className:"col col--2",children:a})]})})})}}}]);