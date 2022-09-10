module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-dark-blue": "rgba(2,0,36,1) 0%",
        "dark-blue": "rgba(2,26,52,1) 100%",
        "dark-light-blue": "#02274f",
        splashIntro: "#161616",
      },
    },
    screens: {
      sm: "480px",
      // => @media (min-width: 480px) { Mobile }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("daisyui")],
};
