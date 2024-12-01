/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#081e40',
        primaryHover: '#1d6fa5',
        mainContent: '#ededed',
        tosca: '#3edad8'
      },
    },
     
  },
  plugins: [
  ], 
}

