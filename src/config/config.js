import defaultTheme from './themes/default'

const determineTheme = (theme) => {
	switch (theme) {
		case 'dark': return defaultTheme
		case 'light': return defaultTheme
		default: return defaultTheme
	}
}

const config = {
	theme: determineTheme('default')
}

export default config
