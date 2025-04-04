import fluid, { extract, screens, fontSize } from "fluid-tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", extract],
  theme: {
    screens,
    fontSize,
    extend: {},
  },
  plugins: [fluid, require("tailwindcss-animate")],
};
