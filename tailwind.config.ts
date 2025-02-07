import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff4500',
        'primary-light': '#f28c66',
        'secondary': '87ceeb',
        'secondary-light': '#fafcfd',
        'light': '#fffcfa',
        'dark': '#111',
        'grey-extra-light': '#eee',
        'grey-light': '#ccc',
        'grey-medium': '#999',
        'grey-dark': '#333',
      },
    },
  },
  plugins: [],
} satisfies Config
