/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      colors:{
        'black':'#000000',
        'grey':'#606060',
        'white':'#ffffff',

        //degradado

        'uno':'#FFC593',
        'dos': '#BC7198',
        'tres':'#5A77FF'

    }, 
    
    screens: {
        'md': '640px',
        // => @media (min-width: 640px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage:{
        'Black':'black',
        'grey':'#606060',
        'fondopieMb':"url('/src/assets/shared/mobile/bg-beta.webp')",
        'fondopieTb':"url('/src/assets/shared/tablet/bg-beta.webp')",
        'fondopieDt':"url('/src/assets/shared/desktop/bg-beta.webp')"
      }
    

    },
    
 
    plugins: [],
  }
