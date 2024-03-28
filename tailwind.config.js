const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      current: "currentColor",
      primary: colors.purple["500"],
      secondary: colors.pink["500"],
      success: colors.green["500"],
      danger: colors.red["500"],
      warning: colors.yellow["500"],
      info: colors.cyan["500"],
      foreground: colors.gray["50"],
      background: colors.gray["950"],
    },
    extend: {},
  },
  plugins: [],
};
