import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#232428",
        white: "#FFFFFF",
        darkwhite: "#383A41",
        lightwhite: "#D9D9D9",
        darkblue: "#0014F4",
      },
      fontFamily: {
        outfit: ['Outfit', 'serif'],
        manrop: ['Manrope', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;