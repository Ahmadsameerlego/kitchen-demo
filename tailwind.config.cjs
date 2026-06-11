/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#059669',
          600: '#047857',
          700: '#065f46'
        },
        ink: {
          900: '#111827',
          700: '#374151',
          500: '#6b7280'
        },
        brass: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f97316',
          600: '#ea580c'
        }
      },
      boxShadow: {
        soft: '0 12px 32px rgba(17, 24, 39, 0.08)',
        panel: '0 1px 2px rgba(17, 24, 39, 0.06), 0 16px 40px rgba(17, 24, 39, 0.08)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial']
      }
    }
  },
  plugins: []
}
