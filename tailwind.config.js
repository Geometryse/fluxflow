/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			opacity: {
				high: '.87'
			},
			backgroundColor: {
				dark: '#1C1C1E'
			},
			textColor: {
				dim: '#95959C'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['dark'],
		logs: false
	}
};
