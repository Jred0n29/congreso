/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center:true,
      }
      ,
      fontFamily:{
        "inter":['Inter', 'sans-serif'],
      },
      colors:{
        "primary-color":"#86FFA0",
        "primary-black":"#262626",
        "green-primary": "#14421F",
        "green-secondary":"#78D700",

        "green-font": "#42D392",
        "primary-blue":"#224BA3",
        "primary-yellow":"#F7E99C",
        
      },
      fontSize: {
        small : ['80px'],
        
      },
      

    },
  },
  plugins: [],
}

