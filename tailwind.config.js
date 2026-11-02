/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFBF7',
          100: '#FAF7F0',
          200: '#F5EFE6',
          300: '#EDE5D8',
          400: '#E2D5C3',
          500: '#D5C4AD',
        },
        champagne: {
          light: '#F4ECE0',
          DEFAULT: '#E8D9BE',
          dark: '#D9C5A0',
          border: 'rgba(232, 217, 190, 0.45)',
        },
        gold: {
          light: '#D4C29A',
          DEFAULT: '#B69A62',
          antique: '#9E8148',
          metallic: '#C5A869',
          deep: '#7A6232',
        },
        espresso: {
          light: '#4E3E34',
          DEFAULT: '#382C25',
          dark: '#241C17',
          charcoal: '#1A1411',
        },
        beige: {
          soft: '#EDE5D8',
          warm: '#E4DACB',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Didot', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        script: ['"Pinyon Script"', 'cursive'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 50px -15px rgba(56, 44, 37, 0.08)',
        'luxury-hover': '0 25px 60px -10px rgba(182, 154, 98, 0.15)',
        'inner-gold': 'inset 0 0 0 1px rgba(182, 154, 98, 0.3)',
      },
      letterSpacing: {
        'widest-luxury': '0.25em',
        'super-wide': '0.35em',
      },
      animation: {
        'subtle-float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
