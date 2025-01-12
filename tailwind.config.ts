import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      "retro",
      "corporate",
      "cupcake",
      "bumblebee",
      "emerald",
      "night",
      "synthwave",
    ],
    darkTheme: "night",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        "float-around": {
          "0%, 100%": {
            transform: "translate(0, 0)",
          },
          "25%": {
            transform: "translate(10px, -10px)",
          },
          "50%": {
            transform: "translate(0, -30px)",
          },
          "75%": {
            transform: "translate(-10px, -10px)",
          },
        },
      },
      animation: {
        "float-around": "float-around 6s ease-in-out infinite",
        "float-around-mini-1":
          "float-around 6s 1s ease-in-out reverse infinite",
        "float-around-mini-2":
          "float-around 6s 1.7s ease-in-out reverse infinite",
        "float-around-mini-3":
          "float-around 6s 2.05s ease-in-out reverse infinite",
      },
    },
  },
} satisfies Config;
