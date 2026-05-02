/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        health: {
          blue: '#1e3a8a', // Deep blue
          lightBlue: '#3b82f6', // Bright blue
          green: '#10b981', // Emerald light green
        }
      }
    },
  },
  plugins: [],
}
