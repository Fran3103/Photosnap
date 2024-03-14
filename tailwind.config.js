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
    
    dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        'colores': [
            '#FFC593',
       
        ]
      }
    

    },
    
 
    plugins: [],
  }
