/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': '"rubik"'
      },
      backgroundImage: {
        'bg-herosec': "url('./public/assets/images/png/bg-hero.png')",
        'bg-footer': "url('./public/assets/images/png/bg-footer.png')",
        'secsevenbg': "url('./public/assets/images/png/secsevenbg.png')",
        'bg-sec3': "url('./public/assets/images/png/bd-sec3.png')",
        'bluegreen': 'linear-gradient(136deg, #0076BE 3.65%, #48BF91 89.63%)',
        'blueellipse': 'linear-gradient(134deg, #0076BE 11.95%, #95D8EB 100%)',
        'bluesec': ' linear-gradient(141deg, #48BF91 11.98%, #8BD9C7 83.25%)',
        'cardellipse': 'linear-gradient(136deg, #0076BE 3.65%, #48BF91 89.63%)',
      },
      textColor: {
        'textgradient': ' linear-gradient(134deg, #0076BE 11.95 %, #95D8EB 100 %)',
      },
      borderColor: {
        'bordergradient': ' linear-gradient(136deg, rgba(0, 118, 190, 0.05) 3.65%, rgba(72, 191, 145, 0.05) 89.63%)'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

