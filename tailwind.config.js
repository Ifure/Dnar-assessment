/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        // base: "#18151D",
        blue: {
          mid: '#3F6EFF'
        },
        purple: {
          dark: '#18151D',
          mid: '#241F2A',
          light: '#7C31F5',

        },
        green: {
          light: '#47888C'
        }
      },
      height: {
        '128': '32rem',
      }

    },
  },
  plugins: [],
}
