/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
		},
		extend: {
			fontFamily:{
				sans: ["var(--font-NotoSansJP)"]
			}
		}
	},
	plugins: [require('@tailwindcss/typography')],
};
export default config;
