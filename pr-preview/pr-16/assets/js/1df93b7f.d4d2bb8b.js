"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([[583],{882:(e,t,l)=>{l.d(t,{V:()=>r});var s=l(4164),a=l(4848);function r(e){let{as:t,className:l,position:r="top",invert:n=!1,...i}=e,o=t??"div";return(0,a.jsx)(o,{className:(0,s.A)(l,"relative before:absolute after:absolute",n?"before:bg-white after:bg-white/10":"before:bg-neutral-950 after:bg-neutral-950/10","top"===r&&"before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px","left"===r&&"before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"),...i})}},4768:(e,t,l)=>{l.d(t,{$:()=>n});var s=l(8774),a=l(4164),r=l(4848);function n(e){let{className:t="",children:l,invert:n,...i}=e;t=(0,a.A)(t,"inline-flex rounded-full px-4 py-1.5 text-sm font-semibold  transition");let o=(0,r.jsx)("span",{className:(n?"":"text-black")+" relative top-px",children:l});return void 0===i.href?(0,r.jsx)("button",{className:`${n?" bg-black text-white dark:bg-white dark:text-black":""} ${t}`,...i,children:o}):(0,r.jsx)(s.A,{className:t,...i,children:o})}},4917:(e,t,l)=>{l.d(t,{c:()=>o});var s=l(4768),a=l(819),r=l(7851),n=l(5797),i=l(4848);function o(){return(0,i.jsx)(a.m,{className:"mt-24 sm:mt-32 lg:mt-40",children:(0,i.jsx)(r._,{className:"-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12",children:(0,i.jsx)("div",{className:"mx-auto max-w-4xl",children:(0,i.jsxs)("div",{className:"max-w-xl",children:[(0,i.jsx)("h2",{className:"font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl",children:"Tell us about your project"}),(0,i.jsx)("div",{className:"mt-6 flex",children:(0,i.jsx)(s.$,{invert:!1,className:"bg-white text-black hover:bg-neutral-300",href:"/contact",children:"Say Hej"})}),(0,i.jsxs)("div",{className:"mt-10 border-t border-white/10 pt-10",children:[(0,i.jsx)("h3",{className:"font-display text-base font-semibold text-white",children:"Our offices"}),(0,i.jsx)(n.W,{invert:!0,className:"mt-6 grid p-0 grid-cols-1 gap-8 sm:grid-cols-2"})]})]})})})})}},8948:(e,t,l)=>{l.d(t,{b:()=>i});var s=l(6540),a=l(922),r=l(4848);function n(e){let{x:t,y:l,...s}=e;return(0,r.jsx)(a.P.path,{transform:`translate(${-32*l+96*t} ${160*l})`,d:"M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",...s})}function i(e){let{yOffset:t=0,interactive:l=!1,...a}=e,i=(0,s.useId)(),o=(0,s.useRef)(null),c=(0,s.useRef)(),d=(0,s.useRef)(0),[h,m]=(0,s.useState)([]);return(0,s.useEffect)((()=>{if(l)return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)};function e(e){if(!o.current)return;let l=o.current.getBoundingClientRect(),s=e.clientX-l.left,a=e.clientY-l.top;s<0||a<0||s>l.width||a>l.height||(s=s-l.width/2-32,a-=t,s+=Math.tan(.2)*a,s=Math.floor(s/96),a=Math.floor(a/160),c.current?.[0]===s&&c.current?.[1]===a||(c.current=[s,a],m((e=>{let t=d.current++;return[...e,[s,a,t]].filter((e=>!(e[0]===s&&e[1]===a&&e[2]!==t)))}))))}}),[t,l]),(0,r.jsxs)("svg",{ref:o,"aria-hidden":"true",...a,children:[(0,r.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${i})`,strokeWidth:"0"}),(0,r.jsxs)("svg",{x:"50%",y:t,strokeWidth:"0",className:"overflow-visible",children:[[[1,1],[2,2],[4,3],[6,2],[7,4],[5,5]].map((e=>(0,r.jsx)(n,{x:e[0],y:e[1],className:" dark:fill-gray-800"},`${e}`))),h.map((e=>(0,r.jsx)(n,{className:" dark:fill-gray-800",x:e[0],y:e[1],animate:{opacity:[0,1,0]},transition:{duration:1,times:[0,0,1]},onAnimationComplete:()=>{m((t=>t.filter((t=>t[2]!==e[2]))))}},e[2])))]}),(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:i,width:"96",height:"480",x:"50%",patternUnits:"userSpaceOnUse",patternTransform:`translate(0 ${t})`,fill:"none",children:(0,r.jsx)("path",{d:"M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"})})})]})}},5797:(e,t,l)=>{l.d(t,{W:()=>n});var s=l(4164),a=l(4848);function r(e){let{name:t,children:l,invert:r=!1}=e;return(0,a.jsxs)("address",{className:(0,s.A)("text-sm not-italic",r?"text-neutral-300 dark:text-neutral-300":"text-neutral-600 dark:text-neutral-300"),children:[(0,a.jsx)("strong",{className:r?"text-white dark:text-neutral-50":"text-neutral-950 dark:text-neutral-50",children:t}),(0,a.jsx)("br",{}),l]})}function n(e){let{invert:t=!1,...l}=e;return(0,a.jsx)("ul",{role:"list",...l,children:(0,a.jsx)("li",{className:"list-none",children:(0,a.jsxs)(r,{name:"Hyderabad",invert:t,children:["3rd Floor, Mitti\u2019s Building, Near Divyashree Lanco Hills, Chaitanya Enclave",(0,a.jsx)("br",{}),"Manikonda, Hyderabad, Telangana - 500089"]})})})}},9501:(e,t,l)=>{l.d(t,{Y:()=>i});var s=l(4164),a=l(819),r=l(7851),n=l(4848);function i(e){let{title:t,eyebrow:l,children:i,smaller:o=!1,invert:c=!1,...d}=e;return(0,n.jsx)(a.m,{...d,children:(0,n.jsxs)(r._,{className:"max-w-2xl",children:[(0,n.jsxs)("h2",{className:"text-neutral-900 dark:text-neutral-50",children:[l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:(0,s.A)("mb-6 block font-display text-base font-semibold text-neutral-900 dark:text-neutral-50"),children:l}),(0,n.jsx)("span",{className:"sr-only",children:" - "})]}),(0,n.jsx)("span",{className:(0,s.A)("block font-display tracking-tight text-neutral-900 dark:text-neutral-50 [text-wrap:balance]",o?"text-2xl font-semibold":"text-4xl font-medium sm:text-5xl",c?"text-white":"text-neutral-950"),children:t})]}),i&&(0,n.jsx)("div",{className:(0,s.A)("mt-6 text-xl",c?"text-neutral-300":"text-neutral-600"),children:i})]})})}},8611:(e,t,l)=>{l.r(t),l.d(t,{default:()=>H});var s=l(8774),a=l(8922),r=l(4164),n=l(882),i=l(7851),o=l(4848);function c(e){let{children:t,className:l}=e;return(0,o.jsx)(i.L,{children:(0,o.jsx)("ul",{role:"list",className:(0,r.A)("text-base text-neutral-600",l),children:t})})}function d(e){let{children:t,title:l}=e;return(0,o.jsx)("li",{className:"group mt-10 first:mt-0",children:(0,o.jsx)(i._,{children:(0,o.jsxs)(n.V,{className:"pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden",children:[l&&(0,o.jsx)("strong",{className:"font-semibold text-neutral-950 dark:text-neutral-50",children:`${l}. `}),t]})})})}var h=l(6540);const m=[{width:655,height:680,path:"M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"},{width:719,height:680,path:"M89.827 9.245A11.5 11.5 0 0 1 101.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 138.87 151H75.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Zm-64 321A11.5 11.5 0 0 1 37.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 472H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128ZM526.795 470a15.999 15.999 0 0 0-15.689 12.862l-32.032 160.159c-4.3 21.502-23.18 36.979-45.107 36.979H115.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C177.096 91.477 195.975 76 217.902 76h318.465c29.028 0 50.8 26.557 45.107 55.021l-33.768 168.841c-1.98 9.901 5.592 19.138 15.689 19.138h17.075l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 644.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 311H623c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 554.87 470h-28.075Z"},{width:719,height:680,path:"M632.827 9.245A11.5 11.5 0 0 1 644.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-95.832 479.159c-4.3 21.502-23.18 36.979-45.107 36.979H178.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C240.096 91.477 258.975 76 280.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm0 479A11.5 11.5 0 0 1 644.104 479h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 630h-63.366c-7.257 0-12.7-6.639-11.277-13.755l25.6-128ZM37.104 159a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C-1.196 303.361 4.247 310 11.504 310H74.87a11.5 11.5 0 0 0 11.277-9.245l24.76-123.798a.03.03 0 0 1 .052-.012c.015.021.048.012.052-.014C114.016 158.98 120.134 151 143 151h58.87a11.5 11.5 0 0 0 11.277-9.245l25.6-128C240.17 6.64 234.727 0 227.47 0h-63.366a11.5 11.5 0 0 0-11.277 9.245l-24.754 123.771c-.002.011-.016.015-.024.006-.007-.009-.021-.005-.023.007-3.469 18.452-13.551 25.107-24.88 25.981-.848.065-1.699 0-2.549-.009l-.127-.001H37.104Z"}];function x(e){let{shape:t=0,className:l,...s}=e,a=(0,h.useId)(),{width:n,height:i,path:c}=m[t];return(0,o.jsx)("div",{className:(0,r.A)(l,"relative flex aspect-[719/680] w-full grayscale"),children:(0,o.jsxs)("svg",{viewBox:`0 0 ${n} ${i}`,fill:"none",className:"h-full",children:[(0,o.jsxs)("g",{clipPath:`url(#${a}-clip)`,className:"group",children:[(0,o.jsx)("g",{className:"origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105",children:(0,o.jsx)("foreignObject",{width:n,height:i,children:(0,o.jsx)("img",{className:"w-full",alt:"Betalectic Logo",...s})})}),(0,o.jsx)("use",{href:`#${a}-shape`,strokeWidth:"2",className:"stroke-neutral-950/10 dark:stroke-neutral-50/10"})]}),(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:`${a}-clip`,children:(0,o.jsx)("path",{id:`${a}-shape`,d:c,fillRule:"evenodd",clipRule:"evenodd"})})})]})})}var u=l(8638),f=l(4485),p=l(922),g=l(819),j=l(9501),b=l(8948);function v(e){let{children:t,client:l,className:s}=e;return(0,o.jsxs)("div",{className:(0,r.A)("relative isolate bg-neutral-50 dark:bg-neutral-900 py-16 sm:py-28 md:py-32",s),children:[(0,o.jsx)(b.b,{className:"absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]",yOffset:-256}),(0,o.jsx)(g.m,{children:(0,o.jsx)(i._,{children:(0,o.jsxs)("figure",{className:"mx-auto max-w-4xl",children:[(0,o.jsx)("blockquote",{className:"relative font-display text-3xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl border-l-0",children:(0,o.jsx)("p",{className:"before:content-['\u201c'] after:content-['\u201d'] sm:before:absolute sm:before:right-full",children:t})}),(0,o.jsxs)("figcaption",{className:"mt-10 flex",children:[(0,o.jsx)("img",{src:l.logo,alt:l.name,className:"w-16 h-16"}),(0,o.jsx)("p",{className:"my-auto text-xl font-bold",children:l.name})]})]})})})]})}var w=l(4917);function N(e){let{caseStudies:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j.Y,{title:"Harnessing technology for a brighter future",className:"mt-24 sm:mt-32 lg:mt-40 text-neutral-900 dark:text-neutral-50",children:(0,o.jsx)("p",{className:"text-neutral-700 dark:text-neutral-300",children:"We believe technology is the answer to the world\u2019s greatest challenges. It\u2019s also the cause, so we find ourselves in bit of a catch 22 situation."})}),(0,o.jsx)(g.m,{className:"my-20",children:(0,o.jsx)(i.L,{className:"grid grid-cols-1 gap-8 lg:grid-cols-3",children:t.map((e=>(0,o.jsx)(i._,{className:"flex",children:(0,o.jsxs)("article",{className:"relative flex w-full flex-col rounded-3xl p-6 dark:bg-neutral-900 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 dark:hover:bg-neutral-800 sm:p-8",children:[(0,o.jsx)("h3",{children:(0,o.jsxs)(s.A,{href:e.href,children:[(0,o.jsx)("span",{className:"absolute inset-0 rounded-3xl"}),(0,o.jsx)("img",{alt:"Betalectic Logo",src:l(193).A,className:"w-16 h-16"})]})}),(0,o.jsxs)("p",{className:"mt-6 flex gap-x-2 text-sm text-neutral-950 dark:text-neutral-50",children:[(0,o.jsx)("time",{dateTime:e.date.split("-")[0],className:"font-semibold",children:e.date.split("-")[0]}),(0,o.jsx)("span",{className:"text-neutral-300","aria-hidden":"true",children:"/"}),(0,o.jsx)("span",{children:"Case study"})]}),(0,o.jsx)("p",{className:"mt-6 font-display text-2xl font-semibold text-neutral-950 dark:text-neutral-50",children:e.title}),(0,o.jsx)("p",{className:"mt-4 text-base text-neutral-600 dark:text-neutral-300",children:e.description})]})},e.href)))})})]})}const y=[["Phobia"],["Family Fund"],["Unseal"],["Mail Smirk"],["Home Work"],["Green Life"],["Bright Path"],["North Adventures"]];function k(){return(0,o.jsx)("div",{className:"mt-44 rounded-4xl bg-neutral-950 py-20 sm:mt-44 sm:py-32 lg:mt-56",children:(0,o.jsxs)(g.m,{children:[(0,o.jsxs)(i._,{className:"flex items-center gap-x-8",children:[(0,o.jsx)("h2",{className:"text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left",children:"We\u2019ve worked with hundreds of amazing people"}),(0,o.jsx)("div",{className:"h-px flex-auto bg-neutral-800"})]}),(0,o.jsx)(i.L,{faster:!0,children:(0,o.jsx)("ul",{role:"list",className:"mt-10 grid grid-cols-2 gap-x-8 gap-y-10 p-0 lg:grid-cols-4",children:y.map((e=>{let[t]=e;return(0,o.jsx)("li",{className:"list-none",children:(0,o.jsx)(i._,{children:(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)("img",{alt:t,src:l(193).A,className:"w-12 h-12"}),(0,o.jsx)("p",{className:"my-auto ml-4 text-neutral-50 font-bold",children:t})]})})},t)}))})})]})})}function A(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j.Y,{eyebrow:"Services",title:"We help you identify, explore and respond to new opportunities.",className:"mt-24 sm:mt-32 lg:mt-40",children:(0,o.jsx)("p",{className:"text-neutral-700 dark:text-neutral-300",children:"As long as those opportunities involve giving us money to re-purpose old projects \u2014 we can come up with an endless number of those."})}),(0,o.jsx)(g.m,{className:"mt-16",children:(0,o.jsxs)("div",{className:"lg:flex lg:items-center lg:justify-end",children:[(0,o.jsx)("div",{className:"flex justify-center lg:w-1/2 lg:justify-end lg:pr-12",children:(0,o.jsx)(i._,{className:"w-[26.75rem] flex-none lg:w-[45rem]",children:(0,o.jsx)(x,{src:l(4207).A,sizes:"(min-width: 1024px) 41rem, 31rem",className:"justify-center lg:justify-end"})})}),(0,o.jsxs)(c,{className:"mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] text-neutral-700 dark:text-neutral-300 lg:pl-4 pl-0 list-none",children:[(0,o.jsx)(d,{title:"Web development",children:"We specialise in crafting beautiful, high quality marketing pages. The rest of the website will be a shell that uses lorem ipsum everywhere."}),(0,o.jsx)(d,{title:"Application development",children:"We have a team of skilled developers who are experts in the latest app frameworks, like Angular 1 and Google Web Toolkit."}),(0,o.jsx)(d,{title:"E-commerce",children:"We are at the forefront of modern e-commerce development. Which mainly means adding your logo to the Shopify store template we\u2019ve used for the past six years."}),(0,o.jsx)(d,{title:"Custom content management",children:"At Studio we understand the importance of having a robust and customised CMS. That\u2019s why we run all of our client projects out of a single, enormous Joomla instance."})]})]})})]})}function H(){let e=(0,u.I)();return(0,o.jsx)(a.A,{title:"Home",description:"We are a digital solutions powerhouse, where innovation meets execution at full speed. At this crossroads of creativity and technology, ",wrapperClassName:"rajiv",children:(0,o.jsx)(f.x,{transition:e?{duration:0}:void 0,children:(0,o.jsx)(p.P.div,{layout:!0,className:"relative isolate flex w-full flex-col pt-9",children:(0,o.jsxs)(p.P.div,{layout:!0,className:"relative isolate flex w-full flex-col pt-9",children:[(0,o.jsx)(b.b,{className:"absolute inset-x-0 -top-24 -z-10 h-[1000px] w-full fill-neutral-50  stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",yOffset:-96,interactive:!0}),(0,o.jsxs)("main",{children:[(0,o.jsx)(g.m,{className:"mt-12 sm:mt-20 md:mt-40",children:(0,o.jsxs)(i._,{className:"max-w-3xl",children:[(0,o.jsx)("h1",{className:"font-display text-5xl font-bold tracking-tight text-neutral-950 dark:text-gray-50 [text-wrap:balance] sm:text-7xl",children:"Betalectic"}),(0,o.jsx)("p",{className:"mt-6 text-xl text-neutral-600 dark:text-neutral-300",children:"We are a digital solutions powerhouse, where innovation meets execution at full speed. At this crossroads of creativity and technology, we don\u2019t just build software \u2014 we engineer impact. Our team thrives on turning complex challenges into seamless, tailored solutions that move fast, scale effortlessly"})]})}),(0,o.jsx)("div",{className:"mt-96",children:(0,o.jsx)(k,{})}),(0,o.jsx)(N,{caseStudies:[{href:"/",date:"2023-11-01",title:"Transforming ideas into digital solutions",description:"Where innovation meets execution at full speed. we don\u2019t just build software we engineer impact. Our team thrives on turning complex challenges into seamless, tailored solutions that move fast, scale effortlessly."},{href:"/",date:"2024-11-01",title:"Transforming ideas into digital solutions",description:"Where innovation meets execution at full speed. we don\u2019t just build software we engineer impact. Our team thrives on turning complex challenges into seamless, tailored solutions that move fast, scale effortlessly."},{href:"/",date:"2025-11-01",title:"Transforming ideas into digital solutions",description:"Where innovation meets execution at full speed. we don\u2019t just build software we engineer impact. Our team thrives on turning complex challenges into seamless, tailored solutions that move fast, scale effortlessly."}]}),(0,o.jsx)(v,{className:"mt-24 sm:mt-32 lg:mt-40",client:{name:"Betalectic",logo:l(193).A},children:"The team at Studio went above and beyond with our onboarding, even finding a way to access the user\u2019s microphone without triggering one of those annoying permission dialogs."}),(0,o.jsx)(A,{}),(0,o.jsx)(w.c,{})]})]})})})})}},4207:(e,t,l)=>{l.d(t,{A:()=>s});const s=l.p+"assets/images/laptop-0980f3b786d57c3bf147ab17ce5c023b.jpg"},4485:(e,t,l)=>{l.d(t,{x:()=>o});var s=l(4848),a=l(6540),r=l(5446),n=l(6442),i=l(8601);function o({children:e,isValidProp:t,...l}){t&&(0,n.D)(t),(l={...(0,a.useContext)(r.Q),...l}).isStatic=(0,i.M)((()=>l.isStatic));const o=(0,a.useMemo)((()=>l),[JSON.stringify(l.transition),l.transformPagePoint,l.reducedMotion]);return(0,s.jsx)(r.Q.Provider,{value:o,children:e})}}}]);