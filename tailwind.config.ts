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
          // "popularity",
          "date",
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
        ]
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
};
export default config;
