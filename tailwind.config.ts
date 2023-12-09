import { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "470px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#5555FF",
        secondary: "#DDDDFF",
        "secondary-light": "#F1F1FF",
        "main-grey": "#6F6F6F",
        accent: "#FCE93B",
        "accent-red": "#FF1C6D",
        tertiary: "#FFFFFF",
        main: "#242464",
        "back-base": "#fafafa",
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
