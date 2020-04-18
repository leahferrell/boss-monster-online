import COLORS from "../colors";

const defaultTheme = {
	body: {
		background: COLORS.GREY,
		font: COLORS.GREY
	},
	dungeon: {
		background: COLORS.GREY_30,
		font: COLORS.GREY
	},
	gameTable: {
		background: COLORS.GREY,
		font: COLORS.GREY
	},
	card: {
		background: COLORS.BLACK,
		font: COLORS.BLACK
	},
	hand: {
		background: COLORS.GREY_70,
		font: COLORS.BLACK
	},
	cards: {
		room: {
			border: COLORS.BLACK,
			background: COLORS.RED,
			header: {
				background: COLORS.BLACK,
				font: COLORS.WHITE
			},
			image: {
				background: COLORS.GREY
			},
			description: {
				background: COLORS.BLACK,
				font: COLORS.WHITE
			},
			footer: {
				background: COLORS.TRANSPARENT
			}
		},
		boss: {},
		spell: {
			border: COLORS.BLACK,
			background: COLORS.BLUE,
			header: {
				background: COLORS.BLACK,
				font: COLORS.WHITE
			},
			image: {
				background: COLORS.GREY
			},
			description: {
				background: COLORS.BLACK,
				font: COLORS.WHITE
			},
			footer: {
				background: COLORS.TRANSPARENT
			}
		},
		hero: {
			border: COLORS.BLACK,
			background: COLORS.RED,
			header: {
				background: COLORS.BLACK,
				font: COLORS.WHITE
			},
			image: {
				background: COLORS.GREY
			},
			description: {
				background: COLORS.BLACK,
				font: COLORS.WHITE
			},
			footer: {
				background: COLORS.TRANSPARENT
			}
		},
		epichero: {}
	}
}

export default defaultTheme
