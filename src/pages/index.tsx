import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className="container py-10">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#9333ea] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>

        <div className="max-w-xl py-32 sm:py-40 lg:py-48">
          <div className="">
            <h1 className="text-5xl md:text-6xl lg:text-8xl py-3">
              {siteConfig.title}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
              Transforming Ideas into Digital Solutions
            </p>
            <p>
              Where innovation meets execution at full speed. we don’t just
              build software we engineer impact. Our team thrives on turning
              complex challenges into seamless, tailored solutions that move
              fast, scale effortlessly.
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
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#3b82f6] to-[#9333ea] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
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
