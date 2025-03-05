/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    //
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './src/app.vue',
  ],
  theme: {
    darkMode: 'selector',
    fontFamily: {
      sans: ['SF Pro Display', 'sans-serif'],
      rounded: ['SF Pro Rounded', 'sans-serif'],
      unbounded: ['Unbounded', 'sans-serif'],
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1344px',
        '2xl': '1344px', // Limit the container width to 1440px at 2xl and above
      },
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#DFF671',
          400: '#DFF671',
          500: '#DFF671',
          600: '#D0EB4F',
        },
        yellow: {
          DEFAULT: '#FACF06',
          400: '#FACF06',
          500: '#FACF06',
        },
        peach: '#FAF2E6',
        red: {
          DEFAULT: '#FF0000',
          400: '#FF0000',
          500: '#FF0000',
        },
        pink: '#ED2079',
        purple: {
          DEFAULT: '#6910E0',
          100: '#0025CD',
          400: '#6910E0',
          500: '#6910E0',
          600: '#B47CFF',
          700: '#8A2DFF',
        },
        blue: {
          DEFAULT: '#0685F8',
          100: '#0025CD',
          400: '#0685F8',
          500: '#0685F8',
        },
        black: {
          DEFAULT: '#000000',
          100: '#F9F9F9',
          200: '#BDBDBD',
          300: '#636060',
          400: '#000000',
          500: '#000000',
          600: '#1B1B1B',
          700: '#130425',
          800: '#F8F7F7',
          900: '#E2E2E2',
          950: '#ECECEC',
          1000: '#8C8C8C',
          1100: '#EBEBEB',
          1200: '#D9D9D9',
          1300: '#DBDBDB',
        },
      },
    },
  },
  plugins: [],
}
