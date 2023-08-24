/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';


export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#ecfeff',
					100: '#cffafe',
					200: '#a5f3fc',
					300: '#67e8f9',
					400: '#22d3ee',
					500: '#06b6d4',
					600: '#0891b2',
					700: '#0e7490',
					800: '#155e75',
					900: '#164e63',
					950: '#083344'
				},
				greenCream: {
					darkGreen: '#233938',
					offCream: '#D9D9D9',
					buttonText: '#233938',
					cream: '#CFCCBD',
					lightCream: '#fffce9'
				}
			},
			fontFamily: {
				body: [
					'playfair-roman',
					'Merriweather',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'system-ui',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'Noto Sans',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji'
				],
				sans: [
					'playfair-roman', ...defaultTheme.fontFamily.sans
					// 'Merriweather',
					// 'ui-sans-serif',
					// 'system-ui',
					// '-apple-system',
					// 'system-ui',
					// 'Segoe UI',
					// 'Roboto',
					// 'Helvetica Neue',
					// 'Arial',
					// 'Noto Sans',
					// 'sans-serif',
					// 'Apple Color Emoji',
					// 'Segoe UI Emoji',
					// 'Segoe UI Symbol',
					// 'Noto Color Emoji'
				],
				"playfair-italic": ['playfair-italic', 'cursive'],
				"playfair-roman": ['playfair-roman', 'serif']
			}
		}
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography'),
		require('tailwindcss-dotted-background')
	]
};
