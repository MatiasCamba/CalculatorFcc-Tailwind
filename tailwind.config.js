/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      background:"#32373d",
      clearbtn:"#d64218",
      btn:"#605d5c",
      operatorsbtn : "#a5abaf",
      
    }
  },
  screens: {
    'sm': '340px',  // Pequeñas pantallas (móviles)
    'md': '768px',  // Pantallas medianas (tabletas)
    'lg': '1024px', // Pantallas grandes (laptops)
    'xl': '1280px', // Pantallas extra grandes (monitores grandes)
    '2xl': '1536px' // Pantallas 2x extra grandes (monitores muy grandes)
  },
  plugins: [
    require('daisyui'),
  ],
}