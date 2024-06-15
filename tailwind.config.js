// @ts-check

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./{src,app}/**/*.{ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['var(--font-body)', ...defaultTheme.fontFamily.sans],
			mono: ['"DM Mono"', 'monospace'],
		},
		fontWeight: {
			light: 300,
			medium: 500,
		},
		extend: {
			colors: {
				cream: '#f2ebd4',
			},
		},
	},
	plugins: [
		{
			handler: tw => {
				tw.matchUtilities(
					{
						'text-glow': value => ({
							'text-shadow': `0 0 10px ${value}, 0 0 150px ${value}`,
						}),
						'glow': value => ({
							filter: `drop-shadow(0px 0px 7px ${value})`,
						}),
					},
				);
			},
		},
		require('@tailwindcss/typography')
	],
};
