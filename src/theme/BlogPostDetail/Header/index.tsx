/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import BlogPostItemHeaderTitle from "@theme/BlogPostItem/Header/Title";
import BlogPostDetailHeaderInfo from "./Info";
import BlogPostDetailHeaderAuthors from "./Authors";

import React from "react";

import type { Props } from "@theme/BlogPostItem";
import BlogPostDetailContent from "../Content";

export default function BlogPostDetailHeader({ children }: Props): JSX.Element {
  return (
    <header className="">
      <div className="">
        <BlogPostDetailHeaderInfo />
      </div>
      <div className="mt-24 sm:mt-32 lg:mt-40 ">
        <BlogPostDetailContent>{children}</BlogPostDetailContent>
      </div>
    </header>
  );
}
