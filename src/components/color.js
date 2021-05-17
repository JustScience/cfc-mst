import theme from './_THEME.js';

const brand = {
	primary: 'hsla(' + theme.brand.hue.primary + ', 90%, 24%, 1)',
	secondary: 'hsla(' + theme.brand.hue.secondary + ', 60%, 60%, 1)',
	accent: theme.brand.accent,

	white: theme.greyscale.white,
	offWhite: theme.greyscale.offWhite,
	black: theme.greyscale.black,
	offBlack: theme.greyscale.offBlack,
}

const color = {
	primary: {
		base: 'hsla(' + theme.brand.hue.primary + ', 90%, 24%, 1)',
		light: 'hsla(' + theme.brand.hue.primary + ', 90%, 30%, 1)',
		dark: 'hsla(' + theme.brand.hue.primary + ', 90%, 15%, 1)',
		gradient: 'linear-gradient(to bottom right, hsla(' + theme.brand.hue.primary + ', 90%, 24%, 1), hsla(' + theme.brand.hue.primary + ', 90%, 12%, 1))',
	},
	secondary: {
		base: 'hsla(' + theme.brand.hue.secondary + ', 60%, 50%, 1)',
		light: 'hsla(' + theme.brand.hue.secondary + ', 60%, 60%, 1)',
		dark: 'hsla(' + theme.brand.hue.secondary + ', 60%, 54%, 1)',
		gradient: 'linear-gradient(to bottom right, hsla(' + theme.brand.hue.secondary + ', 60%, 60%, 1), hsla(' + theme.brand.hue.secondary + ', 60%, 54%, 1))',
	},
	accent: 'hsla(' + theme.brand.hue.accent + ', 90%, 60%, 1)',

	white: theme.greyscale.white,
	offWhite: theme.greyscale.offWhite,
	ltGrey: theme.greyscale.ltGrey,
	mdGrey: theme.greyscale.MdGrey,
	dkGrey: theme.greyscale.DkGrey,
	black: theme.greyscale.black,
	offBlack: theme.greyscale.offBlack,

	shadowLt: 'rgba(0,0,0,0.' + theme.shadow.light + ')',
	shadowMd: 'rgba(0,0,0,0.' + theme.shadow.medium + ')',
	shadowDk: 'rgba(0,0,0,0.' + theme.shadow.dark + ')',

	header: {
		bg: brand.white,
		link: {
			bg: 'none',
			text: 'hsla(' + theme.brand.hue.primary + ', 90%, 24%, 1)',
			hover: {
				bg: 'hsla(' + theme.brand.hue.secondary + ', 60%, 60%, 1)',
				text: brand.white,
			},
		},
	},

	link: 'hsla(' + theme.brand.hue.primary + ', 90%, 24%, 1)',
	linkHover: 'hsla(' + theme.brand.hue.secondary + ', 60%, 54%, 1)',
	linkFocus: 'hsla(' + theme.brand.hue.secondary + ', 60%, 60%, 1)',

	footer: brand.black,
	footerText: brand.white,
}

export default color;
