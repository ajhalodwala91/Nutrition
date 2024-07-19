/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{js,jsx}",
	],
	prefix: "",
	theme: {
		fontFamily: {
			oduda: "Oduda",
			montserrat: "Montserrat",
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: "#428e7c",
			},
			backgroundImage: {
				"hero-image": `url('./src/assets/images/hero-image.png')`,
				"nutritional-care":
					"url('./src/assets/images/nutritional-care.png')",
				"specialized-diets":
					"url('./src/assets/images/specialized-diets.jpg')",
				blogs: "url('./src/assets/images/blogs.png')",
			},
			boxShadow: {
				"4xl": "0 0 12px black",
				},
			dropShadow: {
				"4xl": "0 0 12px black",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
