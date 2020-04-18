import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
	display: flex;
	margin: 2px 5px;
	height: 15%;
	background-color: ${props => props.theme.background};
	flex-direction: column;
	justify-content: center;
`

const Title = styled.h2`
	font-family: "Andale Mono", sans-serif;
	font-size: x-small;
	color: ${props => props.theme.font};
	margin: 0;
	text-align: center;
`

const Subtitle = styled.h3`
	font-family: "Andale Mono", sans-serif;
	font-size: xx-small;
	color: ${props => props.theme.font};
	margin: 0;
	text-align: center;
`

const Header = ({theme, name, title}) => {
	return <HeaderContainer theme={theme}>
		<Title theme={theme}>{name}</Title>
		<Subtitle theme={theme}>{title}</Subtitle>
	</HeaderContainer>
}

export default Header
