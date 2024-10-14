// import Image, { type ImageProps } from 'next/image'
import clsx from "clsx";

import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { GridPattern } from "./GridPattern";

export function Testimonial({
  children,
  client,
  className,
}: {
  children: React.ReactNode;
  client: { logo: string; name: string };
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative isolate bg-neutral-50 dark:bg-neutral-900 py-16 sm:py-28 md:py-32",
        className
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl border-l-0">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption className="mt-10 flex">
              <img src={client.logo} alt={client.name} className="w-16 h-16" />
              <p className="my-auto text-xl font-bold">{client.name}</p>
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  );
}
