/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0A192F",
				secondary: "#ed6b11",
				tertiary: "#54D6BB",
				normal: "white",
			},
		},
		screens: {
			"2xl": { max: "1535px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1500px" },
			// => @media (max-width: 1023px) { ... }

			sm: { max: "1000px" },
			// => @media (max-width: 1000px) { ... }
		},
	},
	plugins: [],
};

// colors: {
// 				primary: "#0A192F",
// 				secondary: "#F97316",
// 				tertiary: "#54D6BB",
// 				normal: "white",
// 			},
