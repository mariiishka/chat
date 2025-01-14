/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        gray: {
          950: '#111214',
          900: '#1e1f22',
          800: '#232428',
          700: '#2b2d31',
          600: '#313338',
          500: '#36373d',
          400: '#3a3c42', // hover
          300: '#3d3e45', // active
          200: '#80848e', // text
          100: '#dbdee1' // hover/active text
        }
        // slate: {
        //   950: '#111214',
        //   900: '#1e1f22',
        //   800: '#232428',
        //   700: '#2b2d31',
        //   600: '#313338',
        //   500: '#36373d',
        //   400: '#3a3c42', // hover
        //   300: '#3d3e45', // active
        //   200: '#80848e', // text
        //   100: '#dbdee1' // hover/active text
        // }
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'}
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'}
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
