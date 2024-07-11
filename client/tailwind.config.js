import heroImage from "./src/assets/images/hero-image.png";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			oduda: "Oduda",
			montserrat: "Montserrat",
		},
		extend: {
			colors: {
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
				append: {
					from: { transform: "scaleY(0)", opacity: 0 },
					to: { transform: "scaleY(1)", opacity: 1 },
				},
			},
			animation: {
				append: "append 0.2s linear",
			},
		},
	},
	plugins: [],
};
