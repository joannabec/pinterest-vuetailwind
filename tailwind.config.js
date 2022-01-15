function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: withOpacityValue('--color-primary'),
				primaryHover: withOpacityValue('--color-primary-hover'),
				dark: withOpacityValue('--color-dark'),
				light: withOpacityValue('--color-light'),
				lightHover: withOpacityValue('--color-light-hover'),
				muted: withOpacityValue('--color-muted'),
			},
			cursor: {
				'zoom-in': 'zoom-in'
			},
			columns: {
				'250px': '250px'
			},
			screens: {
				'max': {'max': '767px'}
			},
			boxShadow: {
				'pin': '0 0 8px rgb(0 0 0/0.1)'
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
