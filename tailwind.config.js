/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      's': '390px',
      'x': '768px',
      'l': '1024px',
      'm': '1920px'
    },
    extend: {
      backgroundImage: {
        'pre': 'url("../public/img/image-slide/img.png")',
        'end': 'url("../public/img/content/bgcontent.png")'
      },
      keyframes: {
        blo: {
          '0': { tranform: 'opacity(0)'},
          '1': { tranform: 'opacity(1)' }
        }
      },
      animation: {
        blo: 'blo .4s ease-in-out'
      }
    },
  },
  plugins: [],
}
