/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.tsx"],
	theme: {
		screens: {},
		fontFamily: {
			sans: ["SF Pro Display"],
		},
		colors: {
			primary: {
				background: "#1d2021",
    		foreground: "#ebdbb2"
			},

			normal: {
				black:   "#282828",
				red:     "#cc241d",
				green:   "#98971a",
				yellow:  "#d79921",
				blue:    "#458588",
				magenta: "#b16286",
				aqua:    "#689d6a",
				gray:    "#928374",
				orange:  "#d65d0e"
			},
			alt: {
				black:   "#3c3836",
				red:     "#fb4934",
				green:   "#b8bb26",
				yellow:  "#fabd2f",
				blue:    "#83a598",
				magenta: "#d3869b",
				aqua:    "#8ec97c",
				gray:    "#a89984",
				orange:  "#fe8919"
			}
		},
		spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
	},
	plugins: [],
};
