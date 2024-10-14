import React from "react";
import Footer from "@theme-original/Footer";
import type FooterType from "@theme/Footer";
import type { WrapperProps } from "@docusaurus/types";
import { Footer as NewFooter } from "@site/src/components/studio/components/Footer";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      <div className="bg-neutral-50 dark:bg-neutral-900 mt-10">
        <NewFooter />
      </div>
      {/* <Footer {...props} /> */}
    </>
  );
}
