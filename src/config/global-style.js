import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${props => props.theme.body.background};
		padding: 0;
		margin: 0;
		border: 0;
	}
`

export default GlobalStyle;
