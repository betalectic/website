import Link from "@docusaurus/Link";
import clsx from "clsx";

export function Button({ className = "", children, invert, ...props }) {
  className = clsx(
    className,
    "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold  transition"
  );

  let inner = (
    <span className={`${invert ? "" : "text-black"} relative top-px`}>
      {children}
    </span>
  );

  if (typeof props.href === "undefined") {
    return (
      <button
        className={`${
          invert ? " bg-black text-white dark:bg-white dark:text-black" : ""
        } ${className}`}
        {...props}
      >
        {inner}
      </button>
    );
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  );
}
