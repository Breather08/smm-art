import { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5555FF",
        secondary: "#DDDDFF",
        accent: "#FCE93B",
        tertiary: "#FFFFFF",
        main: "#242464",
      },
    },
    typography: {
      DEFAULT: {
        css: {
          color: "#333",
          h1: {
            color: "#ff0000",
          },
        },
      },
    },
  },
  plugins: [typography()],
} as Config;

export default config;
