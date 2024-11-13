/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'minus-1': '-0.01em',
      }, fontSize: {
        '36px': '36px', // Add custom font size
      },
      fontWeight: {
        'extra-bold': 800, // Define custom weight 'extra-bold'
      },
      lineHeight: {
        '40px': '40px', // Add custom line height
      },
      textDecorationSkipInk: {
        'none': 'none', // Custom property for text decoration skip
      },
      textUnderlinePosition: {
        'from-font': 'from-font', // Custom property for text underline position
      },
    },
  },
  plugins: [],
}