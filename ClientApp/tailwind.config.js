const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    '../Views/**/*.cshtml',
    '../themes/**/Views/**/*.cshtml',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.vue'
  ],
  theme: {
    screens: {
      sm: '768px',
      md: '960px',
      lg: '1280px',
      xl: '1440px',
      '2xl': '1536px'
    },
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },
    extend: {
      colors: {
        cyan: colors.cyan,
        'brand-light': 'var(--color-brand-light)',
        'brand': 'var(--color-brand)',
        'brand-dark': 'var(--color-brand-dark)',
        'brand-100': 'var(--color-brand-100)',
        'brand-200': 'var(--color-brand-200)',
        'brand-300': 'var(--color-brand-300)',
        'brand-400': 'var(--color-brand-400)',
        secondary: 'var(--color-secondary)',
        secondarydarker: 'var(--color-secondarydarker)',
        success: 'var(--color-success)',
        indicator: 'var(--color-indicator)',
        oddbutton: 'var(--color-oddbutton)',
        oddup: 'var(--color-oddup)',
        odddown: 'var(--color-odddown)',
        //'light-100': 'rgba(var(--color-light-100), var(--tw-bg-opacity))',
        'light-100': 'var(--color-light-100)',
        'light-200': 'var(--color-light-200)',
        'light-300': 'var(--color-light-300)',
        'light-400': 'var(--color-light-400)', // DO NOT USE
        'light-500': 'var(--color-light-500)',
        'light-600': 'var(--color-light-600)',
        info: 'var(--color-info)',
        'dark-100': 'var(--color-dark-100)',
        'dark-200': 'var(--color-dark-200)',
        'dark-300': 'var(--color-dark-300)'
      },
      fontSize: {
        xxxs: '0.5625rem',
        xxs: '0.625rem'
      },
      opacity: {
        '8': '.08',
      },
      transitionDuration: {
        '400': '400ms'
      },
      minWidth: {
        '16': '4rem',
      },
      maxWidth: {
        '16': '5rem'
      },
      borderRadius: {
        '4xl': '3rem'
      },
      scale: {
        '40': '0.4',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
};