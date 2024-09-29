/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Playwrite:"Playwrite DE Grund",
      Edu: "Edu AU VIC WA NT Guides",
      Greater: "Great Vibes",
      japanease: "Noto Serif JP",
      Abel: "Abel",
    },
    extend: {
      backgroundImage: {
        'frontImage-pattern-wt': "url('')",
        'frontImage-pattern-dt': "url('')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
};
