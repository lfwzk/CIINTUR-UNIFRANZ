/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        "neon-blue": "#00D4FF",
        "neon-pink": "#FF006E",
        "neon-green": "#39FF14",
        "pink-virtus": "#00024D",
        "purple-virtus": "#CE27F3",
        virtus: "#111827",
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },

  plugins: [require("daisyui")],
};
