/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
  	extend: {
  		colors: {
  			'teddy-orange': '#EC6724',
        'teddy-white': "#F5F5F5",
  			'teddy-gray': {
  				primary: '#D9D9D9',
  				secondary: '#AAAAAA'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
