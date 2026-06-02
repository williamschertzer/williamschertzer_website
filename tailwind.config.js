/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101827',
        slate: '#53606f',
        paper: '#f4f1ea',
        teal: '#176b70',
        copper: '#b76333',
        smoke: '#e2e7ea',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(16, 24, 39, 0.12)',
      },
    },
  },
  plugins: [],
};
