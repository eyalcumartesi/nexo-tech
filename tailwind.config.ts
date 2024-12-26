import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			primary: {
				light: "#60A5FA", // Modern blue
				DEFAULT: "#2563EB",
				dark: "#1E40AF",
			},
			secondary: {
				light: "#A78BFA", // Soft purple
				DEFAULT: "#7C3AED",
				dark: "#5B21B6",
			},
			accent: {
				light: "#34D399", // Fresh mint
				DEFAULT: "#10B981",
				dark: "#059669",
			},
			neutral: {
				50: "#F8FAFC",
				100: "#F1F5F9",
				200: "#E2E8F0",
				300: "#CBD5E1",
				400: "#94A3B8",
				500: "#64748B",
				600: "#475569",
				700: "#334155",
				800: "#1E293B",
				900: "#0F172A",
			},
		},
	},
	plugins: [],
};
export default config;
