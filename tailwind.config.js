module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon': '#32CD32',
      },
      fontFamily: {
       
        nova: ["NOVA", "cursive"],
        downlinkBold: ["DOWNLINK","cursive"],
      },
      spacing: {
        '100': '26rem',
        '110': '30rem',
      },
      borderRadius: {
        extraLarge: '6rem'
      }
    },
  },
  plugins: [],
}
