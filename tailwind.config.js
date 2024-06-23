/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['DM Sans', 'sans-serif'],
			},
			borderRadius: {
				'ct': '2.5rem',
				'cts': '1.5rem',
			},
			colors: {
				primary: {
					'50': '#faffb3',
					'100': '#f6ff66',
					'200': '#f3ff1a',
					'300': '#ecf500',
					'400': '#d5e000',
					'500': '#EDFF00',
					'600': '#cad000',
					'700': '#a5a800',
					'800': '#818000',
					'900': '#666600',
				},
				secondary: {
					'50': '#e6e6e6',
					'100': '#cccccc',
					'200': '#999999',
					'300': '#666666',
					'400': '#060606',
					'500': '#000000',
				},
			},
			fontSize: {
				'dot': '1.6rem',
				'dot-sm': '1.2rem',
			},
			inset: {
				'dot': '0.2rem',
			}
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require('@tailwindcss/typography'),
		require("daisyui"),
	],
	daisyui: {
		themes: [
			{
				mytheme: {
					'primary': '#edff00',
					'primary-focus': '#d5e000',
					'primary-content': '#000000',
					'secondary': '#000000',
					'secondary-focus': '#0D0D0D',
					'secondary-content': '#ffffff',
					'accent': '#37cdbe',
					'neutral': '#3d4451',
					'base-100': '#ffffff',
					'info': '#2094f3',
					'success': '#009485',
					'warning': '#ff9900',
					'error': '#ff5724',
				},
			},
		],
	},
};
