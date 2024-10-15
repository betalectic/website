import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const BASE_URL =
  process.env.PR_NUMBER !== undefined
    ? `/pr-preview/pr-${process.env.PR_NUMBER}/`
    : "/";

const config: Config = {
  title: "Betalectic",
  tagline: "Some tagline to keep things simple",
  favicon: "img/favicon_betalectic.png",

  // Set the production url of your site here
  url: "https://betalectic.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: BASE_URL,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Betalectic", // Usually your GitHub org/user name.
  projectName: "betalectic", // Usually your repo name.
  deploymentBranch: "main",
  trailingSlash: false,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  plugins: ["docusaurus-tailwindcss-loader"],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        gtag: {
          trackingID: "G-RPRDEYF37G",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes("/page/"));
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap", // Adjust weights as needed
      },
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/betalectic_logo.png",
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "My Site Logo",
        src: "img/betalectic_logo.png",
        href: "/",
      },
      items: [
        { to: "/about", label: "About Us", position: "right" },
        { to: "/contact", label: "Contact", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [],
        },
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/betalectic/",
            },
            {
              label: "Twitter",
              href: "https://x.com/betalectic/",
            },
          ],
        },
        {
          title: "Contact us",
          items: [
            {
              label: "Email",
              href: "mailto:contact@betalectic.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Betalectic.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
