import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				barlow: ['var(--font-barlow)'],
				fraunces: ['var(--font-fraunces)'],
			},
			colors: {
				DarkCyan: '#0E8784',
				DarkGreyBlue: '#333D4B',
				PaleOrange: '#FDD6BA',
				LightCream: '#FEFCF7',
				Grey: '#83888F',
			},
			spacing: {
				13: '54px',
			},
		},
	},
	plugins: [],
};
export default config;
