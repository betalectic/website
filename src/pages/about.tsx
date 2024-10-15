import Layout from "@theme/Layout";
import { SectionIntro } from "../components/studio/components/SectionIntro";
import { Container } from "../components/studio/components/Container";
import {
  GridList,
  GridListItem,
} from "../components/studio/components/GridList";
import { PageIntro } from "../components/studio/components/PageIntro";
import {
  StatList,
  StatListItem,
} from "../components/studio/components/StatList";
import { FadeIn, FadeInStagger } from "../components/studio/components/FadeIn";
import { Border } from "../components/studio/components/Border";
import { ContactSection } from "../components/studio/components/ContactSection";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { GridPattern } from "../components/studio/components/GridPattern";

export default function About() {
  let shouldReduceMotion = useReducedMotion();

  function Culture() {
    return (
      <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
        <SectionIntro
          eyebrow="Our culture"
          title="Balance your passion with your passion for life."
          invert
        >
          <p>
            We are a group of like-minded people who share the same core values.
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <GridList>
            <GridListItem className="list-none" title="Loyalty" invert>
              Our team has been with us since the beginning because none of them
              are allowed to have LinkedIn profiles.
            </GridListItem>
            <GridListItem className="list-none" title="Trust" invert>
              We don’t care when our team works just as long as they are working
              every waking second.
            </GridListItem>
            <GridListItem className="list-none" title="Compassion" invert>
              You never know what someone is going through at home and we make
              sure to never find out.
            </GridListItem>
          </GridList>
        </Container>
      </div>
    );
  }

  const team = [
    {
      title: "Leadership",
      people: [
        {
          name: "Leslie Alexander",
          role: "Co-Founder / CEO",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Michael Foster",
          role: "Co-Founder / CTO",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Dries Vincent",
          role: "Partner & Business Relations",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
      ],
    },
    {
      title: "Team",
      people: [
        {
          name: "Chelsea Hagon",
          role: "Senior Developer",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Emma Dorsey",
          role: "Senior Designer",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Leonard Krasner",
          role: "VP, User Experience",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Blake Reid",
          role: "Junior Copywriter",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Kathryn Murphy",
          role: "VP, Human Resources",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Whitney Francis",
          role: "Content Specialist",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Jeffrey Webb",
          role: "Account Coordinator",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Benjamin Russel",
          role: "Senior Developer",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
        {
          name: "Angela Fisher",
          role: "Front-end Developer",
          image: {
            src: require("@site/static/img/favicon_betalectic.png").default,
          },
        },
      ],
    },
  ];

  function Team() {
    return (
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24">
          {team.map((group) => (
            <FadeInStagger key={group.title}>
              <Border as={FadeIn} />
              <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                <FadeIn>
                  <h2 className="font-display text-2xl font-semibold text-neutral-950 dark:text-neutral-50">
                    {group.title}
                  </h2>
                </FadeIn>
                <div className="lg:col-span-3">
                  <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                  >
                    {group.people.map((person) => (
                      <li key={person.name} className="list-none">
                        <FadeIn>
                          <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                            <img
                              {...person.image}
                              alt={person.name}
                              className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                            />

                            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                              <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                {person.name}
                              </p>
                              <p className="mt-2 text-sm text-white">
                                {person.role}
                              </p>
                            </div>
                          </div>
                        </FadeIn>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInStagger>
          ))}
        </div>
      </Container>
    );
  }
  return (
    <Layout title="About" description="About Betalectic">
      <MotionConfig
        transition={shouldReduceMotion ? { duration: 0 } : undefined}
      >
        <motion.div layout className="relative isolate flex w-full flex-col">
          <motion.div layout className="relative isolate flex w-full flex-col">
            <GridPattern
              className="absolute inset-x-0 -top-24 -z-10 h-[1000px] w-full fill-neutral-50  stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
              yOffset={-96}
              interactive
            />
            <div className="w-full mx-auto">
              <PageIntro
                eyebrow="About us"
                title="Our strength is collaboration"
              >
                <p>
                  We believe that our strength lies in our collaborative
                  approach, which puts our clients at the center of everything
                  we do.
                </p>
                <div className="mt-10 max-w-2xl space-y-6 text-base">
                  <p>
                    Studio was started by three friends who noticed that
                    developer studios were charging clients double what an
                    in-house team would cost. Since the beginning, we have been
                    committed to doing things differently by charging triple
                    instead.
                  </p>
                  <p>
                    At Studio, we’re more than just colleagues — we’re a family.
                    This means we pay very little and expect people to work
                    late. We want our employees to bring their whole selves to
                    work. In return, we just ask that they keep themselves there
                    until at least 6:30pm.
                  </p>
                </div>
              </PageIntro>
              <Container className="mt-16">
                <StatList>
                  <StatListItem value="35" label="Underpaid employees" />
                  <StatListItem value="52" label="Placated clients" />
                  <StatListItem value="$25M" label="Invoices billed" />
                </StatList>
              </Container>
              <Culture />

              <Team />

              <ContactSection />
            </div>
          </motion.div>
        </motion.div>
      </MotionConfig>
    </Layout>
  );
}
