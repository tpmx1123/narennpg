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
          green: {
            DEFAULT: '#0F3D2E',
            light: '#1A5C45',
            dark: '#0A2E22',
            pale: '#E8F2EE',
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
        sans: ['Montserrat', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
