/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import BlogPostItemContent from "@theme/BlogPostItem/Content";
import BlogPostItemFooter from "@theme/BlogPostItem/Footer";
import type { Props } from "@theme/BlogPostItem";
import { FadeIn } from "@site/src/components/studio/components/FadeIn";
import { Border } from "@site/src/components/studio/components/Border";

// apply a bottom margin in list view
function useContainerClassName() {
  const { isBlogPostPage } = useBlogPost();
  return !isBlogPostPage ? "" : undefined;
}

export default function BlogPostItem({
  children,
  className,
}: Props): JSX.Element {
  const containerClassName = useContainerClassName();
  return (
    <FadeIn>
      <Border className="pt-10">
        <BlogPostItemContainer className={clsx(containerClassName, className)}>
          <BlogPostItemHeader children={children} />
          {/* <BlogPostItemContent>{children}</BlogPostItemContent> */}
          <BlogPostItemFooter />
        </BlogPostItemContainer>
      </Border>
    </FadeIn>
  );
}
