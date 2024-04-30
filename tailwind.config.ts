import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        "card": [
          "image",
          "title",
          "overview",
          "date",
          "popularity",
          "votes",
          "button",
        ],
        "homePageMobile": [
          "greeting",
          "title",
          "image1",
          "link1",
          "image2",
          "link2",
        ],
        "homePageMedium": [
          "greeting greeting greeting",
          "title title title",
          "image1 . image2",
          "link1 . link2",
        ],
        "watchlistPlaceholder": [
          ". . .",
          ". text .",
          ". . .",
        ],
        "topLinksMobile": [
          "home . favorites",
          "movies . people",
          ". tv ."
        ],
        "topLinksMobileFavorites": [
          "home . tv",
          "movies . people",
          ". clear ."
        ],
        "topLinksLarge": [
          "title links search",
        ],
        "topLinksDetails": [
          "title links",
        ],
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
};
export default config;
