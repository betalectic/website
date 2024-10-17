import React from "react";
import { PageIntro } from "../components/studio/components/PageIntro";
import { Container } from "../components/studio/components/Container";
import { FadeIn } from "../components/studio/components/FadeIn";
import { Border } from "../components/studio/components/Border";
import Link from "@docusaurus/Link";
import { Button } from "../components/studio/components/Button";
import { ContactSection } from "../components/studio/components/ContactSection";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { GridPattern } from "../components/studio/components/GridPattern";
import Layout from "@theme/Layout";

const articles = [
  {
    title: "The Future of Web Development- Our Predictions for 2023",
    href: "/blog/how-to-use-css-variables-in-framer-motion",
    date: "2022-03-07",
    author: {
      name: "Tim",
      image: require("@site/static/img/favicon_betalectic.png").default,
      role: "Product Designer",
      href: "/blog/how-to-use-css-variables-in-framer-motion",
    },
    description:
      "Learn how to use CSS variables in Framer Motion, a powerful animation library that allows you to create beautiful and interactive animations in your web apps.",
  },
  {
    title: "The Future of Web Development- Our Predictions for 2023",
    href: "/blog/how-to-use-css-variables-in-framer-motion",
    date: "2022-03-07",
    author: {
      name: "Tim",
      image: require("@site/static/img/favicon_betalectic.png").default,
      role: "Product Designer",
      href: "/blog/how-to-use-css-variables-in-framer-motion",
    },
    description:
      "Learn how to use CSS variables in Framer Motion, a powerful animation library that allows you to create beautiful and interactive animations in your web apps.",
  },
  {
    title: "The Future of Web Development- Our Predictions for 2023",
    href: "/blog/how-to-use-css-variables-in-framer-motion",
    date: "2022-03-07",
    author: {
      name: "Tim",
      image: require("@site/static/img/favicon_betalectic.png").default,
      role: "Product Designer",
      href: "/blog/how-to-use-css-variables-in-framer-motion",
    },
    description:
      "Learn how to use CSS variables in Framer Motion, a powerful animation library that allows you to create beautiful and interactive animations in your web apps.",
  },
];

function Blog() {
  let shouldReduceMotion = useReducedMotion();

  return (
    <Layout>
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
              className="absolute inset-x-0 -top-24 -z-10 h-[1000px] w-full fill-neutral-50  stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
              yOffset={-96}
              interactive
            />
            <main className="w-full mx-auto">
              <PageIntro eyebrow="Blog" title="The latest articles and news">
                <p>
                  Stay up-to-date with the latest industry news as our marketing
                  teams finds new ways to re-purpose old CSS tricks articles.
                </p>
              </PageIntro>

              <Container className="mt-24 sm:mt-32 lg:mt-40">
                <div className="space-y-24 lg:space-y-32">
                  {articles.map((article) => (
                    <FadeIn key={article.href}>
                      <article>
                        <Border className="pt-16">
                          <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                            <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                                <Link href={article.href}>{article.title}</Link>
                              </h2>
                              <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                                <dt className="sr-only">Published</dt>
                                <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                                  <time dateTime={article.date}>
                                    {article.date}
                                  </time>
                                </dd>
                                <dt className="sr-only">Author</dt>
                                <dd className="mt-6 flex gap-x-4">
                                  <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                                    {/* <Image
                              alt=""
                              {...article.author.image}
                              className="h-12 w-12 object-cover grayscale"
                            /> */}
                                    <img
                                      src={article.author.image}
                                      alt={article.author.name}
                                      className="h-12 w-12 object-cover grayscale"
                                    />
                                  </div>
                                  <div className="text-sm text-neutral-950">
                                    <div className="font-semibold">
                                      {article.author.name}
                                    </div>
                                    <div>{article.author.role}</div>
                                  </div>
                                </dd>
                              </dl>
                              <p className="mt-6 max-w-2xl text-base text-neutral-600">
                                {article.description}
                              </p>
                              <Button
                                href={article.href}
                                aria-label={`Read more: ${article.title}`}
                                className="mt-8"
                                invert={false}
                              >
                                Read more
                              </Button>
                            </div>
                          </div>
                        </Border>
                      </article>
                    </FadeIn>
                  ))}
                </div>
              </Container>

              <ContactSection />
            </main>
          </motion.div>
        </motion.div>
      </MotionConfig>
    </Layout>
  );
}

export default Blog;
