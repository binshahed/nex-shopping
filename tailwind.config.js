/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem"
      }
    },
    extend: {},
    colors: {
      transparent: "transparent",
      primary: colors.black,
      ...colors
    }
  },
  plugins: []
};
