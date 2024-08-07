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
      warning: colors.yellow["300"],
      info: colors.cyan["500"],
      light: colors.gray["50"],
      gray: colors.gray["500"],
      dark: colors.gray["950"],
    },
    extend: {
      keyframes: {
        move: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(var(--tw-move,100%),0,0)" },
        },
        deepPulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        deepBounce: {
          "0%, 100%": { transform: "translateY(-50%)" },
          "50%": { transform: "translateY(0)" },
        },
        around: {
          "0%": { transform: "translate3d(12%,-12%,0)" },
          "25%": { transform: "translate3d(12%,12%,0)" },
          "50%": { transform: "translate3d(-12%,12%,0)" },
          "75%": { transform: "translate3d(-12%,-12%,0)" },
          "100%": { transform: "translate3d(0,0,0)" },
        },
      },
      animation: {
        move: "move 30s alternate linear infinite",
        deepPulse: "deepPulse 1s alternate infinite",
        deepBounce: "deepBounce 1s infinite",
        around: "around 1s infinite",
      },
    },
  },
  plugins: [],
};
