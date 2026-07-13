/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: {
            DEFAULT: '#9E7A44',
            light: '#C5B495',
            dark: '#7A5C2B',
            pale: '#F4EFE6',
          },
          burgundy: {
            DEFAULT: '#6B1D2F',
            light: '#8C2D43',
            dark: '#4A101C',
          },
          cream: {
            DEFAULT: '#FAF8F4',
            dark: '#F3EDE2',
            light: '#FCFBF9',
          },
          charcoal: {
            DEFAULT: '#222222',
            light: '#4A4A4A',
            dark: '#111111',
          }
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
