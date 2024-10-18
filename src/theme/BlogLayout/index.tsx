/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import BlogSidebar from "@theme/BlogSidebar";
import { useLocation } from "@docusaurus/router";
import type { Props } from "@theme/BlogLayout";
import { PageIntro } from "@site/src/components/studio/components/PageIntro";
import { Container } from "@site/src/components/studio/components/Container";
import { GridPattern } from "@site/src/components/studio/components/GridPattern";

export default function BlogLayout(props: Props): JSX.Element {
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  const location = useLocation();

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <BlogSidebar sidebar={sidebar} />
          <GridPattern
            className="absolute inset-x-0 -top-24 -z-10 h-[1000px] w-full fill-neutral-50  stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-96}
            interactive
          />
          <main
            className={clsx("col", {
              "": hasSidebar,
              "col--9 col--offset-1": !hasSidebar,
            })}
          >
            {location.pathname === "/blog" && (
              <PageIntro eyebrow="Blog" title="The latest articles and news">
                <p>
                  Stay up-to-date with the latest industry news as our marketing
                  teams finds new ways to re-purpose old CSS tricks articles.
                </p>
              </PageIntro>
            )}
            <Container className="mt-16 sm:mt-32 lg:mt-36">
              <div className="space-y-24 lg:space-y-32 w-full">{children}</div>
            </Container>
          </main>

          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
