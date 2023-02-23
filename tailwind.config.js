/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark:{
          100:'#374151',
          200:'#1F2937',
          300:'#111827',
        },
        grayME:'#6B7280',
        lightME:'#EEE',
        pinkME:'#EC4899',
        purpleME:'#8B5Cf6',
      }
    },
  },
  plugins: [],
}