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
            DEFAULT: '#FBBD45',
            light: '#FCD56E',
            dark: '#E5A62A',
            pale: '#FFF8E6',
          },
          burgundy: {
            DEFAULT: '#B1020C',
            light: '#D4252E',
            dark: '#8A0109',
            pale: '#FFF0F1',
          },
          cream: {
            DEFAULT: '#FFFFFF',
            dark: '#F5F5F5',
            light: '#FFFFFF',
          },
          charcoal: {
            DEFAULT: '#1A1A1A',
            light: '#5C5C5C',
            dark: '#0D0D0D',
          }
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
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
