/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import BlogPostItemHeaderTitle from "@theme/BlogPostItem/Header/Title";
import BlogPostItemHeaderInfo from "@theme/BlogPostItem/Header/Info";
import BlogPostItemHeaderAuthors from "@theme/BlogPostItem/Header/Authors";
import BlogPostItemContent from "@theme/BlogPostItem/Content";

import React from "react";

import type { Props } from "@theme/BlogPostItem";

export default function BlogPostItemHeader({ children }: Props): JSX.Element {
  return (
    <header className="flex justify-center gap-8">
      <div className="w-1/3">
        <BlogPostItemHeaderInfo />
        <BlogPostItemHeaderAuthors />
      </div>
      <div className="w-2/3">
        <BlogPostItemHeaderTitle />
        <BlogPostItemContent>{children}</BlogPostItemContent>
      </div>
    </header>
  );
}
