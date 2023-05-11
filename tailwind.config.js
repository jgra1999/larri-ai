/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#ff842a',
				secondary: '#D9376E',
				lightGray: '#EFF0F3',
				newDark: '#0D0D0D'
			},

			animation: {
				typing: 'blink 1s steps(5, start) infinite'
			},

			keyframes: {
				blink: {
					to: { visibility: 'hidden' }
				}
			},

			fontFamily: {
				sans: ['var(--font-inter)', ...fontFamily.sans]
			}
		}
	},

	variants: {
		textColor: ['active, group-hover']
	},
	plugins: []
}
