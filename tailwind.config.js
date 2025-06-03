/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#008080',
        'support': '#ff4500',
        'light:': '#fffcfa',
        'dark': '#111',
        'grey-light-extra': '#eee',
        'grey-light': '#ccc',
        'grey-medium': '#898989',
        'grey-dark': '#333',
      }
    },
  },
  plugins: [],
}

