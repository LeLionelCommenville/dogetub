/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        
      },
      fontFamily: {
        'sans': ['Comic-Sans-MS', 'sans-serif'],
        'sans-bold' : ['Comic-Sans-MS-Bold', 'sans-serif']
      },
    },
  },
  plugins: [],
}

