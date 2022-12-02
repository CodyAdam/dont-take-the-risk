module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	plugins: [require('tailwindcss-safe-area'), require("daisyui")],
	daisyui: {
		themes: ["light"],
	},
	darkMode: 'class',
}

