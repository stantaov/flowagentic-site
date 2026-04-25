/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#040506',
        graphite: '#2D2F35',
        cloud: '#FFF7F8',
        line: '#F1DDE3',
        teal: '#EA4B71',
        cobalt: '#8B5CF6',
        mint: '#FFFFFF',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(4, 5, 6, 0.10)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(234,75,113,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(234,75,113,0.10) 1px, transparent 1px)',
      },
      backgroundSize: {
        'hero-grid': '64px 64px',
      },
    },
  },
  plugins: [],
};
