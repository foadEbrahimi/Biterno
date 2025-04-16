import fluid, { extract, screens, fontSize } from "fluid-tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", extract],
  theme: {
    screens,
    fontSize,
    extend: {
      colors: {
        primary: "#009b87",
        textColor: "var(--text-color)",
      },
      fontFamily: {
        arial: ["Arial"],
        vazirBold: ["vazir-bold"],
        vazirRegular: ["vazir-regular"],
        vazirDemiBold: ["vazir-demiBold"],
        vazirMedium: ["vazir-medium"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.5s ease-out",
        "accordion-up": "accordion-up 0.5s ease-out",
      },
    },
  },
  plugins: [fluid, require("tailwindcss-animate")],
};
