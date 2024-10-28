import type { Config } from "tailwindcss"

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primaryText: "#BFA78D",
				sand: {
					100: "#FDFBF6",
					200: "#FBF7EE",
					300: "#F5EEE2",
					400: "#EBE2D4",
					500: "#DFD2C2",
					600: "#BFA78D",
					700: "#A07E61",
					800: "#81593D",
					900: "#6B3F25",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
}
export default config
