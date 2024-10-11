import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { GridPattern } from "../components/GridPattern";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { Container } from "../components/studio/components/Container";
import { FadeIn, FadeInStagger } from "../components/studio/components/FadeIn";
import { SectionIntro } from "../components/studio/components/SectionIntro";
import { title } from "framer-motion/client";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className="container max-w-7xl py-10">
      <div className="relative isolate px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 -z-100 h-[630px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
          <MotionConfig reducedMotion="user">
            <motion.div
              layout
              style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
              className="relative flex flex-auto overflow-hidden bg-white pt-14"
            >
              <motion.div
                layout
                className="relative isolate flex w-full flex-col pt-9"
              >
                <GridPattern
                  className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
                  yOffset={-96}
                  interactive
                />

                <div className="max-w-7xl px-6 py-16 sm:py-36">
                  <div className="">
                    <h1 className="text-5xl md:text-6xl lg:text-8xl py-3">
                      {siteConfig.title}
                    </h1>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                      Transforming Ideas into Digital Solutions
                    </p>
                    <p className="max-w-xl">
                      Where innovation meets execution at full speed. we don’t
                      just build software we engineer impact. Our team thrives
                      on turning complex challenges into seamless, tailored
                      solutions that move fast, scale effortlessly.
                    </p>

                    <div className="mt-10 flex items-center gap-x-6">
                      <Link
                        to="/contact"
                        className="relative inline-block px-6 py-3 text-[#212121] font-extrabold text-[17px] 
        bg-[#e8e8e8] rounded-[15px] shadow-lg overflow-hidden 
        transition-all duration-300 ease-in-out group no-underline"
                      >
                        <span
                          className="absolute inset-0 w-0 h-full bg-[#212121] rounded-[15px] 
        transition-all duration-300 ease-in-out group-hover:w-full"
                        ></span>
                        <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-[#e8e8e8] no-underline">
                          Contact us
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </MotionConfig>

          {/* <GridPattern
            className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-270}
          /> */}
        </div>
      </div>
    </header>
  );
}

function CaseStudies({ caseStudies }: any) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <img
                      src={
                        require("@site/static/img/favicon_betalectic.png")
                          .default
                      }
                      className="w-16 h-16"
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split("-")[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split("-")[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  );
}

// function Services() {
//   return (
//     <>
//       <SectionIntro
//         eyebrow="Services"
//         title="We help you identify, explore and respond to new opportunities."
//         className="mt-24 sm:mt-32 lg:mt-40"
//       >
//         <p>
//           As long as those opportunities involve giving us money to re-purpose
//           old projects — we can come up with an endless number of those.
//         </p>
//       </SectionIntro>
//       <Container className="mt-16">
//         <div className="lg:flex lg:items-center lg:justify-end">
//           <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
//             <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
//               <StylizedImage
//                 src={imageLaptop}
//                 sizes="(min-width: 1024px) 41rem, 31rem"
//                 className="justify-center lg:justify-end"
//               />
//             </FadeIn>
//           </div>
//           <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
//             <ListItem title="Web development">
//               We specialise in crafting beautiful, high quality marketing pages.
//               The rest of the website will be a shell that uses lorem ipsum
//               everywhere.
//             </ListItem>
//             <ListItem title="Application development">
//               We have a team of skilled developers who are experts in the latest
//               app frameworks, like Angular 1 and Google Web Toolkit.
//             </ListItem>
//             <ListItem title="E-commerce">
//               We are at the forefront of modern e-commerce development. Which
//               mainly means adding your logo to the Shopify store template we’ve
//               used for the past six years.
//             </ListItem>
//             <ListItem title="Custom content management">
//               At Studio we understand the importance of having a robust and
//               customised CMS. That’s why we run all of our client projects out
//               of a single, enormous Joomla instance.
//             </ListItem>
//           </List>
//         </div>
//       </Container>
//     </>
//   );
// }

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  let shouldReduceMotion = useReducedMotion();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
      wrapperClassName="rajiv"
    >
      {/* <HomepageHeader /> */}

      <MotionConfig
        transition={shouldReduceMotion ? { duration: 0 } : undefined}
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <motion.div
            layout
            className="relative isolate flex w-full flex-col pt-9"
          >
            <GridPattern
              className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
              yOffset={-96}
              interactive
            />

            <main>
              <Container className="mt-12 sm:mt-20 md:mt-40">
                <FadeIn className="max-w-3xl">
                  <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                    Award-winning development studio based in Denmark.
                  </h1>
                  <p className="mt-6 text-xl text-neutral-600">
                    We are a development studio working at the intersection of
                    design and technology. It’s a really busy intersection
                    though — a lot of our staff have been involved in hit and
                    runs.
                  </p>
                </FadeIn>
              </Container>

              <CaseStudies
                caseStudies={[
                  {
                    href: "/",
                    date: "2023-11-01",
                    title: "Transforming ideas into digital solutions",
                    description:
                      "Where innovation meets execution at full speed. we don’t just build software we engineer impact. Our team thrives on turning complex challenges into seamless, tailored solutions that move fast, scale effortlessly.",
                  },
                ]}
              />
            </main>
          </motion.div>
        </motion.div>
      </MotionConfig>
    </Layout>
  );
}
