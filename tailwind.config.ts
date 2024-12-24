import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist:[
    { pattern: /bg-[a-z0-9-]+/ },
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbarinsMono)",
    },
    extend: {
      backgroundImage: {
        "gradient-header": "radial-gradient(circle, #292544, #191919  , #0d0d0d)",
      }, 

      colors: {
        primary: "#292544",
        blue: {
          DEFAULT: "#074FFE",
          hover: "#2665ff",
        },
      },
    },
  },
  plugins: [],
};
export default config;
