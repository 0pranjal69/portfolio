/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main':'linear-gradient(43deg, rgba(0,0,0,1) 3%, rgba(63,13,90,1) 12%, rgba(136,29,193,0) 50%, rgba(136,29,193,0.6702586206896552) 75%, rgba(173,47,172,1) 100%);',
        'custom-radial': ' radial-gradient(circle, rgba(75,45,80,1) 0%, rgba(75,45,80,1) 12%, rgba(27,27,27,1) 100%);',
        'project-bg':'linear-gradient(90deg, rgba(57,27,92,1) 0%, rgba(32,33,32,1) 50%, rgba(64,31,102,1) 100%);',
         'footer-bg': 'linear-gradient(0deg, rgba(15,15,15,1) 16%, rgba(0,0,0,1) 33%, rgba(7,7,7,1) 52%, rgba(15,15,15,1) 61%, rgba(56,57,57,1) 99%, rgba(15,15,15,1) 100%, rgba(104,106,106,1) 100%);'
      },
     
      colors:{
        gradientStart: "rgb(47,58,208)",
        gradientMid1: "rgba(123,51,186,1)",
        gradientMid2: "rgba(173,47,172,1)",
        gradientEnd1: "rgba(125,42,156,1)",
        gradientEnd2: "rgba(87,38,144,1)",
      },

      strokeDasharray: {
        'dash-1': '50',
        'offset1': '50'
      },
      
      fontFamily: {
        Josefin: ['Josefin Sans'],
      },
      animation: {

        anime: 'anime 2s ease forwards ',
      },
      keyframes: {

        anime: {
          '50%': { fill: 'transparent' },
          '100%': { strokeDashoffset: '0', fill: '#fff' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.stroke-dash-1': { 'stroke-dasharray': '50' },
        '.offset1': { 'stroke-dashoffset': '50' },
        '.delayy': { animationDelay: '1s' },
        '.mask-cover': { maskSize: 'cover' },
        '.mask-contain': { maskSize: 'contain' },
        '.mask-invert': { maskImage: 'invert(1)' },
        '.mask-repeat-none': { maskRepeat: 'no-repeat' },
        '.mask-center': { maskPosition: 'center' },
        '.mask': {
          maskImage: "url('/vid1.gif')",
        }
      });
    }
  ],
}

