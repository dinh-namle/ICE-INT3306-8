/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main1: {
          1: '#0B121F',
          2: '#182232',
          3: '#A4B1CD'
        },
        main2: {
          1: '#9FEF00',
          2: '#86D477',
        },
        sub: {
          1: '#FF4545',
        }
      }
    }
  },
  plugins: [],
}