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
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBlack: "#0a0b0e",
        list: "#111217",
        listRowBorder: "#0a0b0e",
        starFill: "#E9A307",
        starStroke: "#C98E07",
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'], // Use the custom Inter font
      },
      borderRadius: {
        '12': '12px',
        '150': '150px',
      },
      boxShadow: {
        'poster': '0 0 0 1px #292B33, 124px 4px 124px 12px rgba(52, 52, 72, 0.25)', // Thin outline + large spread shadow
      },
    },
  },
  plugins: [],
};
export default config;
