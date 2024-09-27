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
        darkGray: "#111217",
        lightOrange: "#E9A307",
        darkOrange: "#C98E07",
        brightYellow: "#d5c219",
        lightWhite: "#FAF8FA",
        darkPurple: "#1E1338",
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      borderRadius: {
        '12': '12px',
        '20': '20px',
        '150': '150px',
      },
      boxShadow: {
        'movieImageShadow': '0 0 0 1px #292B33, 124px 4px 124px 12px rgba(52, 52, 72, 0.25)',
      },
      backgroundImage: {
        'custom-gradient': 'radial-gradient(circle at 30% 30%, #7b4397, #1d2671 70%)',
      },
      padding: {
        '1/3': '33.333333%',
        '1/4': '25%',
        '1/5': '20%',
        '1/6': '16.666667%',
      },
      margin: {
        '1/3': '33.333333%',
        '1/4': '25%',
        '1/5': '20%',
        '1/6': '16.666667%',
      },
      aspectRatio: {
        '2/3': '2 / 3',
      },
    },
  },
  plugins: [],
};
export default config;
