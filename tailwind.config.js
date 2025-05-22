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
        'primary-dark': '#000080',
				'primary-medium': '#2121b3',
        'primary-light': '#b3e1f8',
        'secondary-dark': '#ff4500',
				'secondary-light': '#f28c66',
  			'light': '#fcfeff',
  			'dark': '#111',
  			'grey-extra-light': '#eee',
  			'grey-light': '#ccc',
  			'grey-medium': '#999',
  			'grey-dark': '#333',
      }
    },
  },
  plugins: [],
}

