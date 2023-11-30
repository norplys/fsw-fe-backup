/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserrat' : ['Montserrat', 'sans-serif'],
      },
      colors:{
        DARKBLUE05: '#6148FF',
        DARKBLUE04: '#6148FF57',
        DARKBLUE03: '#489CFF',
        DARKBLUE02: '#D0B7E6',
        DARKBLUE01: '#E2D4F0',
        'alert-green': '#73CA5C',
        'alert-red': '#FF0000',
        'check-border' : '#B4BDC4',
        'check-fill' : '#E8F1FF',
        'progress-plat': '#D9D9D9',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
