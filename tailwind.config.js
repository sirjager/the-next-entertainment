import { themes } from "./lib/themes";

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	plugins: [
		require("@tailwindcss/container-queries"),
		require("@tailwindcss/typography"),
		require("tailwindcss-animate"),
		require("daisyui"),
	],

	content: [
		"./pages/**/*.{ts,tsx,md,mdx}",
		"./components/**/*.{ts,tsx,md,mdx}",
		"./app/**/*.{ts,tsx,md,mdx}",
		"./src/**/*.{ts,tsx,md,mdx}",
	],

	theme: {
		container: {
			center: true,
			padding: "2rem",
		},
	},

	daisyui: {
		themeRoot: ":root",
		base: true,
		styled: true,
		utils: true,
		logs: false,
		prefix: "",
		themes: themes,
	},
};
