/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f0f2f5',
        secondary: '#ff813f',
        third: '#222222',
        slate: {
        
        }
      }
    },
  },
  plugins: [],
}