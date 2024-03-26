import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["var(--font-barlow)"],
        fraunces: ["var(--font-fraunces)"],
      },
      colors: {
        DarkCyan: "#0E8784",
        CyanHover: "#66D2CF",
        DarkGreyBlue: "#333D4B",
        PaleOrange: "#FDD6BA",
        LightCream: "#FEFCF7",
        Grey: "#83888F",
      },
      spacing: {
        13: "54px",
        15: "60px",
        18: "72px",
        21: "86px",
        25: "100px",
        70: "280px",
      },
      fontSize: {
        lm: ["15px", "25px"],
        xxl: ["28px", "28px"],
      },
      keyframes: {
        loading: {
          "0%": { left: "0" },
          "30%": { width: "20%" },
          "65%": { width: "25%" },
          "90%": { width: "15%" },
          "100%": { left: "100%" },
        },
        hide: {
          "0%": { top: "0" },
          "100%": { top: "-107px" },
        },
        show: {
          "0%": { top: "-107px" },
          "100%": { top: "0" },
        },
        hideNavItems: {
          "0%": { right: "0" },
          "100%": { right: "-100%" },
        },
        showNavItems: {
          "0%": { right: "-100%" },
          "100%": { right: "0" },
        },
      },
      animation: {
        loading: "loading 1s ease-in-out infinite",
        hide: "hide .3s ease-in-out forwards",
        show: "show .3s ease-in-out forwards",
        hideNavItems: "hideNavItems .3s ease-in-out forwards",
        showNavItems: "showNavItems .3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
