"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([[398],{882:(e,t,a)=>{a.d(t,{V:()=>s});var r=a(4164),l=a(4848);function s(e){let{as:t,className:a,position:s="top",invert:i=!1,...n}=e,o=t??"div";return(0,l.jsx)(o,{className:(0,r.A)(a,"relative before:absolute after:absolute",i?"before:bg-white after:bg-white/10":"before:bg-neutral-950 after:bg-neutral-950/10","top"===s&&"before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px","left"===s&&"before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"),...n})}},4768:(e,t,a)=>{a.d(t,{$:()=>i});var r=a(8774),l=a(4164),s=a(4848);function i(e){let{className:t="",children:a,invert:i,...n}=e;t=(0,l.A)(t,"inline-flex rounded-full px-4 py-1.5 text-sm font-semibold  transition");let o=(0,s.jsx)("span",{className:(i?"":"text-black")+" relative top-px",children:a});return void 0===n.href?(0,s.jsx)("button",{className:`${i?" bg-black text-white dark:bg-white dark:text-black":""} ${t}`,...n,children:o}):(0,s.jsx)(r.A,{className:t,...n,children:o})}},4917:(e,t,a)=>{a.d(t,{c:()=>o});var r=a(4768),l=a(819),s=a(7851),i=a(5797),n=a(4848);function o(){return(0,n.jsx)(l.m,{className:"mt-24 sm:mt-32 lg:mt-40",children:(0,n.jsx)(s._,{className:"-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12",children:(0,n.jsx)("div",{className:"mx-auto max-w-4xl",children:(0,n.jsxs)("div",{className:"max-w-xl",children:[(0,n.jsx)("h2",{className:"font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl",children:"Tell us about your project"}),(0,n.jsx)("div",{className:"mt-6 flex",children:(0,n.jsx)(r.$,{invert:!1,className:"bg-white text-black hover:bg-neutral-300",href:"/contact",children:"Say Hej"})}),(0,n.jsxs)("div",{className:"mt-10 border-t border-white/10 pt-10",children:[(0,n.jsx)("h3",{className:"font-display text-base font-semibold text-white",children:"Our offices"}),(0,n.jsx)(i.W,{invert:!0,className:"mt-6 grid p-0 grid-cols-1 gap-8 sm:grid-cols-2"})]})]})})})})}},8948:(e,t,a)=>{a.d(t,{b:()=>n});var r=a(6540),l=a(922),s=a(4848);function i(e){let{x:t,y:a,...r}=e;return(0,s.jsx)(l.P.path,{transform:`translate(${-32*a+96*t} ${160*a})`,d:"M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",...r})}function n(e){let{yOffset:t=0,interactive:a=!1,...l}=e,n=(0,r.useId)(),o=(0,r.useRef)(null),c=(0,r.useRef)(),d=(0,r.useRef)(0),[m,x]=(0,r.useState)([]);return(0,r.useEffect)((()=>{if(a)return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)};function e(e){if(!o.current)return;let a=o.current.getBoundingClientRect(),r=e.clientX-a.left,l=e.clientY-a.top;r<0||l<0||r>a.width||l>a.height||(r=r-a.width/2-32,l-=t,r+=Math.tan(.2)*l,r=Math.floor(r/96),l=Math.floor(l/160),c.current?.[0]===r&&c.current?.[1]===l||(c.current=[r,l],x((e=>{let t=d.current++;return[...e,[r,l,t]].filter((e=>!(e[0]===r&&e[1]===l&&e[2]!==t)))}))))}}),[t,a]),(0,s.jsxs)("svg",{ref:o,"aria-hidden":"true",...l,children:[(0,s.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${n})`,strokeWidth:"0"}),(0,s.jsxs)("svg",{x:"50%",y:t,strokeWidth:"0",className:"overflow-visible",children:[[[1,1],[2,2],[4,3],[6,2],[7,4],[5,5]].map((e=>(0,s.jsx)(i,{x:e[0],y:e[1],className:" dark:fill-gray-800"},`${e}`))),m.map((e=>(0,s.jsx)(i,{className:" dark:fill-gray-800",x:e[0],y:e[1],animate:{opacity:[0,1,0]},transition:{duration:1,times:[0,0,1]},onAnimationComplete:()=>{x((t=>t.filter((t=>t[2]!==e[2]))))}},e[2])))]}),(0,s.jsx)("defs",{children:(0,s.jsx)("pattern",{id:n,width:"96",height:"480",x:"50%",patternUnits:"userSpaceOnUse",patternTransform:`translate(0 ${t})`,fill:"none",children:(0,s.jsx)("path",{d:"M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"})})})]})}},5797:(e,t,a)=>{a.d(t,{W:()=>i});var r=a(4164),l=a(4848);function s(e){let{name:t,children:a,invert:s=!1}=e;return(0,l.jsxs)("address",{className:(0,r.A)("text-sm not-italic",s?"text-neutral-300 dark:text-neutral-300":"text-neutral-600 dark:text-neutral-300"),children:[(0,l.jsx)("strong",{className:s?"text-white dark:text-neutral-50":"text-neutral-950 dark:text-neutral-50",children:t}),(0,l.jsx)("br",{}),a]})}function i(e){let{invert:t=!1,...a}=e;return(0,l.jsx)("ul",{role:"list",...a,children:(0,l.jsx)("li",{className:"list-none",children:(0,l.jsxs)(s,{name:"Hyderabad",invert:t,children:["3rd Floor, Mitti\u2019s Building, Near Divyashree Lanco Hills, Chaitanya Enclave",(0,l.jsx)("br",{}),"Manikonda, Hyderabad, Telangana - 500089"]})})})}},1579:(e,t,a)=>{a.d(t,{Y:()=>n});var r=a(4164),l=a(819),s=a(7851),i=a(4848);function n(e){let{eyebrow:t,title:a,children:n,centered:o=!1}=e;return(0,i.jsx)(l.m,{className:(0,r.A)("mt-24 sm:mt-32 lg:mt-40",o&&"text-center"),children:(0,i.jsxs)(s._,{children:[(0,i.jsxs)("h1",{children:[(0,i.jsx)("span",{className:"block font-display text-base font-semibold text-neutral-950 dark:text-neutral-50",children:t}),(0,i.jsx)("span",{className:"sr-only",children:" - "}),(0,i.jsx)("span",{className:(0,r.A)("mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 [text-wrap:balance] sm:text-6xl",o&&"mx-auto"),children:a})]}),(0,i.jsx)("div",{className:(0,r.A)("mt-6 max-w-3xl text-xl text-neutral-600 dark:text-neutral-300",o&&"mx-auto"),children:n})]})})}},5974:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});a(6540);var r=a(1579),l=a(819),s=a(7851),i=a(882),n=a(8774),o=a(4768),c=a(4917),d=a(8638),m=a(4485),x=a(922),u=a(8948),h=a(8922),f=a(4848);const b=[{title:"The Future of Web Development- Our Predictions for 2023",href:"/blog/how-to-use-css-variables-in-framer-motion",date:"2022-03-07",author:{name:"Tim",image:a(193).A,role:"Product Designer",href:"/blog/how-to-use-css-variables-in-framer-motion"},description:"Learn how to use CSS variables in Framer Motion, a powerful animation library that allows you to create beautiful and interactive animations in your web apps."},{title:"The Future of Web Development- Our Predictions for 2023",href:"/blog/how-to-use-css-variables-in-framer-motion",date:"2022-03-07",author:{name:"Tim",image:a(193).A,role:"Product Designer",href:"/blog/how-to-use-css-variables-in-framer-motion"},description:"Learn how to use CSS variables in Framer Motion, a powerful animation library that allows you to create beautiful and interactive animations in your web apps."},{title:"The Future of Web Development- Our Predictions for 2023",href:"/blog/how-to-use-css-variables-in-framer-motion",date:"2022-03-07",author:{name:"Tim",image:a(193).A,role:"Product Designer",href:"/blog/how-to-use-css-variables-in-framer-motion"},description:"Learn how to use CSS variables in Framer Motion, a powerful animation library that allows you to create beautiful and interactive animations in your web apps."}];const p=function(){let e=(0,d.I)();return(0,f.jsx)(h.A,{children:(0,f.jsx)(m.x,{transition:e?{duration:0}:void 0,children:(0,f.jsx)(x.P.div,{layout:!0,className:"relative isolate flex w-full flex-col pt-9",children:(0,f.jsxs)(x.P.div,{layout:!0,className:"relative isolate flex w-full flex-col pt-9",children:[(0,f.jsx)(u.b,{className:"absolute inset-x-0 -top-24 -z-10 h-[1000px] w-full fill-neutral-50  stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",yOffset:-96,interactive:!0}),(0,f.jsxs)("main",{className:"w-full mx-auto",children:[(0,f.jsx)(r.Y,{eyebrow:"Blog",title:"The latest articles and news",children:(0,f.jsx)("p",{children:"Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles."})}),(0,f.jsx)(l.m,{className:"mt-24 sm:mt-32 lg:mt-40",children:(0,f.jsx)("div",{className:"space-y-24 lg:space-y-32",children:b.map((e=>(0,f.jsx)(s._,{children:(0,f.jsx)("article",{children:(0,f.jsx)(i.V,{className:"pt-16",children:(0,f.jsx)("div",{className:"relative lg:-mx-4 lg:flex lg:justify-end",children:(0,f.jsxs)("div",{className:"pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0",children:[(0,f.jsx)("h2",{className:"font-display text-2xl font-semibold text-neutral-950",children:(0,f.jsx)(n.A,{href:e.href,children:e.title})}),(0,f.jsxs)("dl",{className:"lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4",children:[(0,f.jsx)("dt",{className:"sr-only",children:"Published"}),(0,f.jsx)("dd",{className:"absolute left-0 top-0 text-sm text-neutral-950 lg:static",children:(0,f.jsx)("time",{dateTime:e.date,children:e.date})}),(0,f.jsx)("dt",{className:"sr-only",children:"Author"}),(0,f.jsxs)("dd",{className:"mt-6 flex gap-x-4",children:[(0,f.jsx)("div",{className:"flex-none overflow-hidden rounded-xl bg-neutral-100",children:(0,f.jsx)("img",{src:e.author.image,alt:e.author.name,className:"h-12 w-12 object-cover grayscale"})}),(0,f.jsxs)("div",{className:"text-sm text-neutral-950",children:[(0,f.jsx)("div",{className:"font-semibold",children:e.author.name}),(0,f.jsx)("div",{children:e.author.role})]})]})]}),(0,f.jsx)("p",{className:"mt-6 max-w-2xl text-base text-neutral-600",children:e.description}),(0,f.jsx)(o.$,{href:e.href,"aria-label":`Read more: ${e.title}`,className:"mt-8",invert:!1,children:"Read more"})]})})})})},e.href)))})}),(0,f.jsx)(c.c,{})]})]})})})})}},4485:(e,t,a)=>{a.d(t,{x:()=>o});var r=a(4848),l=a(6540),s=a(5446),i=a(6442),n=a(8601);function o({children:e,isValidProp:t,...a}){t&&(0,i.D)(t),(a={...(0,l.useContext)(s.Q),...a}).isStatic=(0,n.M)((()=>a.isStatic));const o=(0,l.useMemo)((()=>a),[JSON.stringify(a.transition),a.transformPagePoint,a.reducedMotion]);return(0,r.jsx)(s.Q.Provider,{value:o,children:e})}}}]);