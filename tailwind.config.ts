import type { Config } from "tailwindcss";

// Colours come from CSS variables in app/globals.css, so the whole theme
// can be changed in one place.
const withAlpha = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: withAlpha("primary"), soft: withAlpha("primary-soft") },
        secondary: { DEFAULT: withAlpha("secondary"), soft: withAlpha("secondary-soft") },
        accent: { DEFAULT: withAlpha("accent"), hover: withAlpha("accent-hover") },
        ink: withAlpha("ink"),
        paper: withAlpha("paper"),
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
