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
          "title",
          "image1",
          "link1",
          "image2",
          "link2",
        ],
        "homePageMedium": [
          "title title title",
          "image1 . image2",
          "link1 . link2",
        ],
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
};
export default config;
