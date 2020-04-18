import React from 'react'
import styled from 'styled-components'

const generateSubtitle = (type, isAdvanced) => {
	const advancedText = isAdvanced ? 'Advanced ' : ''
	return `${advancedText}${type} Room`
}

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

const Header = ({theme, title, type, isAdvanced}) => {
	return (
		<HeaderContainer theme={theme}>
			<Title theme={theme}>{title}</Title>
			<Subtitle theme={theme}>{generateSubtitle(type, isAdvanced)}</Subtitle>
		</HeaderContainer>
	)
}

export default Header
