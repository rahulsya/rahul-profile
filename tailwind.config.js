module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins"],
    },
    extend: {
      colors: {
        gelap: {
          primary: "#333333",
          secondary: "#4F4F4F",
          third: "#828282",
        },
        terang: {
          primary: "#FFFFFF",
          secondary: "#F2F2F2",
          third: "#E0E0E0",
        },
      },
      animation: {
        bounce: "bounce 0.5s infinite",
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
};
