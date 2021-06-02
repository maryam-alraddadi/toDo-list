module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    theme: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
      },
    },
    extend: {
      colors: {
        violet: {
          500: "#5c5fe4",
          600: "5356cd",
          700: "4a4cb6",
        },
        eggshell: "#fdfdff",
        orange: {
          500: "#f96567",
          550: "e05b5d",
          700: "c75152",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
