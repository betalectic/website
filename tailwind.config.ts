import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.tsx",
    "./blog/**/*.mdx",
    "./blog/**/*.md",
  ],
  corePlugins: { preflight: false },
  // important: "#tailwind_preflight",
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2.25rem" }],
      "3xl": ["1.75rem", { lineHeight: "2.25rem" }],
      "4xl": ["2rem", { lineHeight: "2.5rem" }],
      "5xl": ["2.5rem", { lineHeight: "3rem" }],
      "6xl": ["3rem", { lineHeight: "3.5rem" }],
      "7xl": ["4rem", { lineHeight: "4.5rem" }],
    },
    extend: {
      borderRadius: {
        "4xl": "2.5rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: [
          ["Inter", ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
    },
  },
} satisfies Config;
