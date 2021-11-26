module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#E60023',
				redHover: '#ad081b',
				dark: '#111111',
				light: '#EFEFEF',
				lightHover: '#d7d7d7',
				muted: '#717171'
			},
			cursor: {
				'zoom-in': 'zoom-in'
			},
			spacing: {
				'250px': '250px'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
