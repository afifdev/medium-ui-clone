module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      letterSpacing: {
        tightest: "-.0375em",
        tiny: "-.0175em",
      },
      fontSize: {
        "1.5xl": "1.375rem",
      },
      fontFamily: {
        doulos: ["Doulos", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
