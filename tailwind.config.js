/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans', 'sans-serif'],
      },
      screens: {
        'sm': '640px', // Small devices (landscape phones, 640px and up)
        'md': '768px', // Medium devices (tablets, 768px and up)
        'lg': '1024px', // Large devices (desktops, 1024px and up)
        'xl': '1280px', // Extra large devices (large desktops, 1280px and up)
        '2xl': '1536px', // Extra extra large devices (large widescreen monitors, 1536px and up)
      },
      colors: {
        'white': '#fafafa',
        'blue': '#73A9AD',
        'green-dark': '#40513B',
        'light-green': '#9DC08B',
        'letter-blue': '#0D777F'
  
  
      },
      textShadow: {
        'custom': '2px 2px 4px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  variants: {},
  plugins: [],
}
