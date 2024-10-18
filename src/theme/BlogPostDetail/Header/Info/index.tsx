/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import { translate } from "@docusaurus/Translate";
import { usePluralForm } from "@docusaurus/theme-common";
import { useDateTimeFormat } from "@docusaurus/theme-common/internal";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import type { Props } from "@theme/BlogPostItem/Header/Info";

import styles from "./styles.module.css";

// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
  const { selectMessage } = usePluralForm();
  return (readingTimeFloat: number) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: "theme.blog.post.readingTime.plurals",
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: "One min read|{readingTime} min read",
        },
        { readingTime }
      )
    );
  };
}

function ReadingTime({ readingTime }: { readingTime: number }) {
  const readingTimePlural = useReadingTimePlural();
  return <>{readingTimePlural(readingTime)}</>;
}

function DateTime({
  date,
  formattedDate,
}: {
  date: string;
  formattedDate: string;
}) {
  return <time dateTime={date}>{formattedDate}</time>;
}

function Spacer() {
  return <>{" · "}</>;
}

export default function BlogPostDetailHeaderInfo({
  className,
}: Props): JSX.Element {
  const { metadata } = useBlogPost();
  const { date, readingTime } = metadata;
  console.log("metadata in Detail", metadata);

  const dateTimeFormat = useDateTimeFormat({
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  const formatDate = (blogDate: string) =>
    dateTimeFormat.format(new Date(blogDate));

  return (
    <div className={clsx(styles.container, "", className)}>
      <header className="mx-auto flex max-w-5xl flex-col text-center">
        <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
          {metadata.title}
        </h1>
        <time
          dateTime={metadata.date}
          className="order-first text-sm text-neutral-950"
        >
          {formatDate(metadata.date)}
        </time>
        <p className="mt-6 text-sm font-semibold text-neutral-950">
          by{" "}
          {metadata.authors
            .map((author) => `${author.name}, ${author.title}`)
            .join(", ")}
          {/* by {metadata.author.name}, {eme.author.role} */}
        </p>
      </header>
    </div>
  );
}
