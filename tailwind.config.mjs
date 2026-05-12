export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        lemn: {
          50:  '#fdf8f0',
          100: '#faefd9',
          200: '#f3d9a8',
          300: '#e9bc6e',
          400: '#dd9a3c',
          500: '#c47d20',
          600: '#a66018',
          700: '#874716',
          800: '#6e3919',
          900: '#5a2f18',
        },
      },
      fontFamily: {
        sans: ['Georgia', 'Cambria', 'serif'],
      },
    },
  },
};
