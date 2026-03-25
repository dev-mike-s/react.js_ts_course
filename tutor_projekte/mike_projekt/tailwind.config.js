// root/tailwind.config.js

module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        'accent': 'var(--color-accent)',

        'background-light': 'var(--color-background-light)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'bg-light': 'var(--color-bg-light)',          
        'white': 'var(--color-bg-white)',          
      },
    },
  },
  plugins: [],
};