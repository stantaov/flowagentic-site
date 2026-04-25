/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#101828',
        graphite: '#344054',
        cloud: '#F6F8FA',
        line: '#E4E7EC',
        teal: '#0F766E',
        cobalt: '#1D4ED8',
        mint: '#CCFBF1',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(16, 24, 40, 0.08)',
      },
    },
  },
  plugins: [],
};
