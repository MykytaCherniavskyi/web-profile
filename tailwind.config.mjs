import defaultTheme from 'tailwindcss/defaultTheme';
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: {
		files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	},
	daisyui: {
		themes: ["cupcake"],
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans],
				gambarino: ['Gambarino', 'Robot', ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [daisyui],
}
