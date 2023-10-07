/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-yellow': '#FFB800',
        'black-1': '#1F1F1F',
        'white-transparent': 'rgba(255, 255, 255, 0.5)',
        'grey-1': 'rgba(217, 217, 217, 1)',
        'grey-2': 'rgba(45, 45, 45, 0.5)'
      },
      fontSize: {
        '1xxl': ['175px', {lineHeight: '1'}],
        '1.5xxl': ['175px', {lineHeight: '1'}]
      },
      backgroundPosition: {
        'center-left': '0px center',
      },
      backgroundImage: {
        'paper': "url('@/assets/images/bg-paper.png')",
        'arrow-white': "url('@/assets/images/arrow-white.png')",
        'arrow-yellow': "url('@/assets/images/arrow-yellow.png')",
        'about': "url('@/assets/images/bg-content-about.png')",
        'product': "url('@/assets/images/bg-content-product.png')",
        'contact': "url('@/assets/images/bg-content-contact.png')",
        'next-white': "url('@/assets/images/next-white.png')",
        'next-yellow': "url('@/assets/images/next-yellow.png')",
        'arrow-back-white': "url('@/assets/images/arrow-back-white.png')",
        'arrow-back-black': "url('@/assets/images/arrow-back-black.png')",
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(1,-0.01,0,1)',
      },
      keyframes: {
        textLoad: {
          '0%': { width: '0' },
        '100%': { width: '100%' },
        },
      },
      animation: {
        textLoad: 'textLoad .8s cubic-bezier(1,-0.01,0,1) alternate infinite',
      }
    }
  },
  plugins: [],
}

