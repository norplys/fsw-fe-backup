/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			colors: {

				secret : {
					darkblue:'#14A7A0',
					grey1: '#808080',
					cyan: '#51DACF',
					text : '#212529',
					text2: '#808080',
					text3: '#212529',
					text4: '#6C757D',
					background : '#EBF3FC',
					pink : '#FF8696',
					green : '#73CA5C',
					blue : '#E8F1FF',
					red : "#FF0000",
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
