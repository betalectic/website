import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { GridPattern } from "../components/GridPattern";
import { motion, MotionConfig } from "framer-motion";

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

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
