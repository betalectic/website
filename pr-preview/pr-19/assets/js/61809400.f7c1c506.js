"use strict";(self.webpackChunkbetalectic_website=self.webpackChunkbetalectic_website||[]).push([[327],{882:(e,t,l)=>{l.d(t,{V:()=>r});var a=l(4164),s=l(4848);function r(e){let{as:t,className:l,position:r="top",invert:n=!1,...i}=e,o=t??"div";return(0,s.jsx)(o,{className:(0,a.A)(l,"relative before:absolute after:absolute",n?"before:bg-white after:bg-white/10":"before:bg-neutral-950 after:bg-neutral-950/10","top"===r&&"before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px","left"===r&&"before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"),...i})}},4768:(e,t,l)=>{l.d(t,{$:()=>n});var a=l(8774),s=l(4164),r=l(4848);function n(e){let{className:t="",children:l,invert:n,...i}=e;t=(0,s.A)(t,"inline-flex rounded-full px-4 py-1.5 text-sm font-semibold  transition");let o=(0,r.jsx)("span",{className:(n?"":"text-black")+" relative top-px",children:l});return void 0===i.href?(0,r.jsx)("button",{className:`${n?" bg-black text-white dark:bg-white dark:text-black":""} ${t}`,...i,children:o}):(0,r.jsx)(a.A,{className:t,...i,children:o})}},4917:(e,t,l)=>{l.d(t,{c:()=>o});var a=l(4768),s=l(819),r=l(7851),n=l(5797),i=l(4848);function o(){return(0,i.jsx)(s.m,{className:"mt-24 sm:mt-32 lg:mt-40",children:(0,i.jsx)(r._,{className:"-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12",children:(0,i.jsx)("div",{className:"mx-auto max-w-4xl",children:(0,i.jsxs)("div",{className:"max-w-xl",children:[(0,i.jsx)("h2",{className:"font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl",children:"Tell us about your project"}),(0,i.jsx)("div",{className:"mt-6 flex",children:(0,i.jsx)(a.$,{invert:!1,className:"bg-white text-black hover:bg-neutral-300",href:"/contact",children:"Say Hej"})}),(0,i.jsxs)("div",{className:"mt-10 border-t border-white/10 pt-10",children:[(0,i.jsx)("h3",{className:"font-display text-base font-semibold text-white",children:"Our offices"}),(0,i.jsx)(n.W,{invert:!0,className:"mt-6 grid p-0 grid-cols-1 gap-8 sm:grid-cols-2"})]})]})})})})}},8948:(e,t,l)=>{l.d(t,{b:()=>i});var a=l(6540),s=l(7221),r=l(4848);function n(e){let{x:t,y:l,...a}=e;return(0,r.jsx)(s.P.path,{transform:`translate(${-32*l+96*t} ${160*l})`,d:"M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",...a})}function i(e){let{yOffset:t=0,interactive:l=!1,...s}=e,i=(0,a.useId)(),o=(0,a.useRef)(null),c=(0,a.useRef)(),d=(0,a.useRef)(0),[x,m]=(0,a.useState)([]);return(0,a.useEffect)((()=>{if(l)return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)};function e(e){if(!o.current)return;let l=o.current.getBoundingClientRect(),a=e.clientX-l.left,s=e.clientY-l.top;a<0||s<0||a>l.width||s>l.height||(a=a-l.width/2-32,s-=t,a+=Math.tan(.2)*s,a=Math.floor(a/96),s=Math.floor(s/160),c.current?.[0]===a&&c.current?.[1]===s||(c.current=[a,s],m((e=>{let t=d.current++;return[...e,[a,s,t]].filter((e=>!(e[0]===a&&e[1]===s&&e[2]!==t)))}))))}}),[t,l]),(0,r.jsxs)("svg",{ref:o,"aria-hidden":"true",...s,children:[(0,r.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${i})`,strokeWidth:"0"}),(0,r.jsxs)("svg",{x:"50%",y:t,strokeWidth:"0",className:"overflow-visible",children:[[[1,1],[2,2],[4,3],[6,2],[7,4],[5,5]].map((e=>(0,r.jsx)(n,{x:e[0],y:e[1],className:" dark:fill-gray-800"},`${e}`))),x.map((e=>(0,r.jsx)(n,{className:" dark:fill-gray-800",x:e[0],y:e[1],animate:{opacity:[0,1,0]},transition:{duration:1,times:[0,0,1]},onAnimationComplete:()=>{m((t=>t.filter((t=>t[2]!==e[2]))))}},e[2])))]}),(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:i,width:"96",height:"480",x:"50%",patternUnits:"userSpaceOnUse",patternTransform:`translate(0 ${t})`,fill:"none",children:(0,r.jsx)("path",{d:"M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"})})})]})}},5797:(e,t,l)=>{l.d(t,{W:()=>n});var a=l(4164),s=l(4848);function r(e){let{name:t,children:l,invert:r=!1}=e;return(0,s.jsxs)("address",{className:(0,a.A)("text-sm not-italic",r?"text-neutral-300 dark:text-neutral-300":"text-neutral-600 dark:text-neutral-300"),children:[(0,s.jsx)("strong",{className:r?"text-white dark:text-neutral-50":"text-neutral-950 dark:text-neutral-50",children:t}),(0,s.jsx)("br",{}),l]})}function n(e){let{invert:t=!1,...l}=e;return(0,s.jsx)("ul",{role:"list",...l,children:(0,s.jsx)("li",{className:"list-none",children:(0,s.jsxs)(r,{name:"Hyderabad",invert:t,children:["3rd Floor, Mitti\u2019s Building, Near Divyashree Lanco Hills, Chaitanya Enclave",(0,s.jsx)("br",{}),"Manikonda, Hyderabad, Telangana - 500089"]})})})}},1579:(e,t,l)=>{l.d(t,{Y:()=>i});var a=l(4164),s=l(819),r=l(7851),n=l(4848);function i(e){let{eyebrow:t,title:l,children:i,centered:o=!1}=e;return(0,n.jsx)(s.m,{className:(0,a.A)("mt-24 sm:mt-32 lg:mt-40",o&&"text-center"),children:(0,n.jsxs)(r._,{children:[(0,n.jsxs)("h1",{children:[(0,n.jsx)("span",{className:"block font-display text-base font-semibold text-neutral-950 dark:text-neutral-50",children:t}),(0,n.jsx)("span",{className:"sr-only",children:" - "}),(0,n.jsx)("span",{className:(0,a.A)("mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 [text-wrap:balance] sm:text-6xl",o&&"mx-auto"),children:l})]}),(0,n.jsx)("div",{className:(0,a.A)("mt-6 max-w-3xl text-xl text-neutral-600 dark:text-neutral-300",o&&"mx-auto"),children:i})]})})}},9501:(e,t,l)=>{l.d(t,{Y:()=>i});var a=l(4164),s=l(819),r=l(7851),n=l(4848);function i(e){let{title:t,eyebrow:l,children:i,smaller:o=!1,invert:c=!1,...d}=e;return(0,n.jsx)(s.m,{...d,children:(0,n.jsxs)(r._,{className:"max-w-2xl",children:[(0,n.jsxs)("h2",{className:"text-neutral-900 dark:text-neutral-50",children:[l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:(0,a.A)("mb-6 block font-display text-base font-semibold text-neutral-900 dark:text-neutral-50"),children:l}),(0,n.jsx)("span",{className:"sr-only",children:" - "})]}),(0,n.jsx)("span",{className:(0,a.A)("block font-display tracking-tight text-neutral-900 dark:text-neutral-50 [text-wrap:balance]",o?"text-2xl font-semibold":"text-4xl font-medium sm:text-5xl",c?"text-white":"text-neutral-950"),children:t})]}),i&&(0,n.jsx)("div",{className:(0,a.A)("mt-6 text-xl",c?"text-neutral-300":"text-neutral-600"),children:i})]})})}},6406:(e,t,l)=>{l.r(t),l.d(t,{default:()=>v});var a=l(8922),s=l(9501),r=l(819),n=l(4164),i=l(882),o=l(7851),c=l(4848);function d(e){let{children:t,className:l}=e;return(0,c.jsx)(o.L,{children:(0,c.jsx)("ul",{role:"list",className:(0,n.A)("grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3",l),children:t})})}function x(e){let{title:t,children:l,className:a,invert:s=!1}=e;return(0,c.jsx)("li",{className:(0,n.A)("text-base",s?"text-neutral-300 before:bg-white after:bg-white/10":"text-neutral-600 before:bg-neutral-950 after:bg-neutral-100",a),children:(0,c.jsx)(o._,{children:(0,c.jsxs)(i.V,{position:"left",className:"pl-8",invert:s,children:[(0,c.jsxs)("strong",{className:(0,n.A)("font-semibold",s?"text-white":"text-neutral-950"),children:[t,"."]})," ",l]})})})}var m=l(1579);function h(e){let{children:t,...l}=e;return(0,c.jsx)(o.L,{...l,children:(0,c.jsx)("dl",{className:"grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none",children:t})})}function u(e){let{label:t,value:l}=e;return(0,c.jsxs)(i.V,{as:o._,position:"left",className:"flex flex-col-reverse pl-8",children:[(0,c.jsx)("dt",{className:"mt-2 text-base text-neutral-600 dark:text-neutral-300",children:t}),(0,c.jsx)("dd",{className:"font-display text-3xl font-semibold text-neutral-950 dark:text-neutral-50 sm:text-4xl",children:l})]})}var f=l(4917),p=l(8638),g=l(4485),b=l(7221),j=l(8948);function v(){let e=(0,p.I)();function t(){return(0,c.jsxs)("div",{className:"mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32",children:[(0,c.jsx)(s.Y,{eyebrow:"Our culture",title:"Balance your passion with your passion for life.",invert:!0,children:(0,c.jsx)("p",{children:"We are a group of like-minded people who share the same core values."})}),(0,c.jsx)(r.m,{className:"mt-16",children:(0,c.jsxs)(d,{children:[(0,c.jsx)(x,{className:"list-none",title:"Loyalty",invert:!0,children:"Our team has been with us since the beginning because none of them are allowed to have LinkedIn profiles."}),(0,c.jsx)(x,{className:"list-none",title:"Trust",invert:!0,children:"We don\u2019t care when our team works just as long as they are working every waking second."}),(0,c.jsx)(x,{className:"list-none",title:"Compassion",invert:!0,children:"You never know what someone is going through at home and we make sure to never find out."})]})})]})}const n=[{title:"Leadership",people:[{name:"Leslie Alexander",role:"Co-Founder / CEO",image:{src:l(193).A}},{name:"Michael Foster",role:"Co-Founder / CTO",image:{src:l(193).A}},{name:"Dries Vincent",role:"Partner & Business Relations",image:{src:l(193).A}}]},{title:"Team",people:[{name:"Chelsea Hagon",role:"Senior Developer",image:{src:l(193).A}},{name:"Emma Dorsey",role:"Senior Designer",image:{src:l(193).A}},{name:"Leonard Krasner",role:"VP, User Experience",image:{src:l(193).A}},{name:"Blake Reid",role:"Junior Copywriter",image:{src:l(193).A}},{name:"Kathryn Murphy",role:"VP, Human Resources",image:{src:l(193).A}},{name:"Whitney Francis",role:"Content Specialist",image:{src:l(193).A}},{name:"Jeffrey Webb",role:"Account Coordinator",image:{src:l(193).A}},{name:"Benjamin Russel",role:"Senior Developer",image:{src:l(193).A}},{name:"Angela Fisher",role:"Front-end Developer",image:{src:l(193).A}}]}];function v(){return(0,c.jsx)(r.m,{className:"mt-24 sm:mt-32 lg:mt-40",children:(0,c.jsx)("div",{className:"space-y-24",children:n.map((e=>(0,c.jsxs)(o.L,{children:[(0,c.jsx)(i.V,{as:o._}),(0,c.jsxs)("div",{className:"grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8",children:[(0,c.jsx)(o._,{children:(0,c.jsx)("h2",{className:"font-display text-2xl font-semibold text-neutral-950 dark:text-neutral-50",children:e.title})}),(0,c.jsx)("div",{className:"lg:col-span-3",children:(0,c.jsx)("ul",{role:"list",className:"grid grid-cols-1 gap-6 sm:grid-cols-2 p-0 lg:grid-cols-3 xl:gap-8",children:e.people.map((e=>(0,c.jsx)("li",{className:"list-none",children:(0,c.jsx)(o._,{children:(0,c.jsxs)("div",{className:"group relative overflow-hidden rounded-3xl bg-neutral-100",children:[(0,c.jsx)("img",{...e.image,alt:e.name,className:"h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"}),(0,c.jsxs)("div",{className:"absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6",children:[(0,c.jsx)("p",{className:"font-display text-base/6 font-semibold tracking-wide text-white",children:e.name}),(0,c.jsx)("p",{className:"mt-2 text-sm text-white",children:e.role})]})]})})},e.name)))})})]})]},e.title)))})})}return(0,c.jsx)(a.A,{title:"About",description:"About Betalectic",children:(0,c.jsx)(g.x,{transition:e?{duration:0}:void 0,children:(0,c.jsx)(b.P.div,{layout:!0,className:"relative isolate flex w-full flex-col",children:(0,c.jsxs)(b.P.div,{layout:!0,className:"relative isolate flex w-full flex-col",children:[(0,c.jsx)(j.b,{className:"absolute inset-x-0 -top-24 -z-10 h-[1000px] w-full fill-neutral-50  stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",yOffset:-96,interactive:!0}),(0,c.jsxs)("div",{className:"w-full mx-auto",children:[(0,c.jsxs)(m.Y,{eyebrow:"About us",title:"Our strength is collaboration",children:[(0,c.jsx)("p",{children:"We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do."}),(0,c.jsxs)("div",{className:"mt-10 max-w-2xl space-y-6 text-base",children:[(0,c.jsx)("p",{children:"Studio was started by three friends who noticed that developer studios were charging clients double what an in-house team would cost. Since the beginning, we have been committed to doing things differently by charging triple instead."}),(0,c.jsx)("p",{children:"At Studio, we\u2019re more than just colleagues \u2014 we\u2019re a family. This means we pay very little and expect people to work late. We want our employees to bring their whole selves to work. In return, we just ask that they keep themselves there until at least 6:30pm."})]})]}),(0,c.jsx)(r.m,{className:"mt-16",children:(0,c.jsxs)(h,{children:[(0,c.jsx)(u,{value:"35",label:"Underpaid employees"}),(0,c.jsx)(u,{value:"52",label:"Placated clients"}),(0,c.jsx)(u,{value:"$25M",label:"Invoices billed"})]})}),(0,c.jsx)(t,{}),(0,c.jsx)(v,{}),(0,c.jsx)(f.c,{})]})]})})})})}},4485:(e,t,l)=>{l.d(t,{x:()=>o});var a=l(4848),s=l(6540),r=l(5446),n=l(6442),i=l(8601);function o({children:e,isValidProp:t,...l}){t&&(0,n.D)(t),(l={...(0,s.useContext)(r.Q),...l}).isStatic=(0,i.M)((()=>l.isStatic));const o=(0,s.useMemo)((()=>l),[JSON.stringify(l.transition),l.transformPagePoint,l.reducedMotion]);return(0,a.jsx)(r.Q.Provider,{value:o,children:e})}}}]);