import { type Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.tsx"],
  corePlugins: { preflight: false },
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
