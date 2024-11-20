import defaultTheme from 'tailwindcss/defaultTheme';
import fluid, { extract, fontSize } from 'fluid-tailwind'
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: {
		files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
		extract,
	},
	daisyui: {
		themes: ["cupcake"],
	},
	theme: {
		fontSize,
		extend: {
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans],
				gambarino: ['Gambarino', 'Robot', ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [daisyui, fluid],
}
