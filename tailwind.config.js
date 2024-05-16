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
        },
        lime: {
          950: '#2c8721',
          900: '#55ab32',
          800: '#6abf3c',
          700: '#81d547',
          600: '#91e64f',
          500: '#a3eb6c',
          400: '#b6f08a',
          300: '#ccf5ad',
          200: '#e0f9cd',
          100: '#f3fdeb'
        },
        blue: {
          950: '#253985',
          900: '#263FA9',
          800: '#2A4DD0',
          700: '#3662E3',
          600: '#4E80EE',
          500: '#70A3F3',
          400: '#9DC4F8',
          300: '#C4DAFB',
          200: '#DEE9FC',
          100: '#F0F6FE'
        },
        pink: {
          950: '#46212E',
          900: '#6A2D44',
          800: '#8E3A5A',
          700: '#AF4970',
          600: '#CB5D86',
          500: '#DF759B',
          400: '#ED90AF',
          300: '#F5ACC3',
          200: '#F9C8D6',
          100: '#FBE3EA'
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
