/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f1f9fe',
          '100': '#e1f1fd',
          '200': '#bde4fa',
          '300': '#83cef6',
          '400': '#47b8f0',
          '500': '#189cdf',
          '600': '#0b7dbe',
          '700': '#0a649a',
          '800': '#0d547f',
          '900': '#10476a',
          '950': '#0b2d46',
      },
      'secondary': {
        '50': '#effef2',
        '100': '#d8ffe4',
        '200': '#b4fec9',
        '300': '#7afba1',
        '400': '#47f07a',
        '500': '#0fd84c',
        '600': '#06b33b',
        '700': '#098c32',
        '800': '#0d6e2c',
        '900': '#0d5a27',
        '950': '#003312',
      }
      }
    },
  },
  plugins: [],
};
