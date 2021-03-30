const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./**/*.html', './**/*.tsx', './**/*.ts'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
		},
		colors: {
			transparent: 'transparent',
			gray: colors.trueGray,
			emerald: colors.emerald,
			'special-b': '#00aaff',
			'special-g': '#00ffaa',
			'muted-g': '#008f5f',
			'transparent-special-g': 'rgba(0, 255, 170, 0.1)',
			'transparent-grey-500': 'rgba(115, 115, 115, 0.1)',
			muted: 'rgb(163, 163, 163)',
			mutedLight: 'rgb(201, 201, 201)',
		},
		extend: {
			minHeight: {
				'screen-80': '80vh',
				md: '28rem',
			},
			maxWidth: {
				'1/3': '33.333333%',
				'2/3': '66.666667%',
			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			textColor: {
				muted: 'rgb(163, 163, 163)',
				mutedLight: 'rgb(201, 201, 201)',
				'special-b': '#00aaff',
				'special-g': '#00ffaa',
				'muted-g': '#008f5f',
				twitter: '#1DA1F2',
				linkedin: '#0e76a8',
				github: '#333333',
			},
			boxShadow: {
				button: '-10px 8px #ffffff',
				'special-g': '0 0 10px #00ffaa',
				'special-b': '0 0 10px #00aaff',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
