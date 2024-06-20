import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      fontFamily: {
        nanumRg: ["NanumSquareRg", "sans-serif"],
        nanumBd: ["NanumSquareBd", "sans-serif"],
        wavePado: ["WavvePADO-Regular", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        bg_color: "#FCFBFA",
        tx_color: {
          "point-green": "#8DAA77", // point_text_green
          "menu-gray": "#AEAEAE", // menu_text_gray
          DEFAULT: "#000000", // normal_text_black
        },
      },
    },
  },
  plugins: [],
};
export default config;
