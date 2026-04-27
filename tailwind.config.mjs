import { designTokens } from "./styles/theme.mjs";

const tokenEntries = Object.entries(designTokens.fontSize).reduce(
  (accumulator, [key, value]) => {
    accumulator[key] = [value.size, value.options];
    return accumulator;
  },
  {}
);

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
    "./hooks/**/*.{js,jsx}",
    "./styles/**/*.{css,js}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2.5rem",
        xl: "3.5rem"
      }
    },
    extend: {
      colors: designTokens.colors,
      borderRadius: designTokens.radius,
      boxShadow: designTokens.shadow,
      fontFamily: {
        sans: ["var(--font-sans)"]
      },
      fontSize: tokenEntries,
      maxWidth: {
        shell: "1200px",
        content: "1080px",
        text: "760px"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(255,107,46,0.12), transparent 32%), radial-gradient(circle at bottom right, rgba(25,39,88,0.15), transparent 35%)"
      },
      transitionTimingFunction: {
        productive: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
