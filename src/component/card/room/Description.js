import React from 'react'
import styled from 'styled-components'

const DescriptionContainer = styled.div`
	background-color: ${props => props.theme.background};
	color: ${props => props.theme.font};
	height: 20%;
	margin: 2px 5px;
	font-family: "Andale Mono", sans-serif;
	font-size: 5pt;
	text-align: center;
	padding: 5px;
`

const DescriptionText = styled.p`
	margin: 0;
`

const Description = ({theme, description}) => {
	return (
		<DescriptionContainer theme={theme}>
			{description.map((l, i) => <DescriptionText key={i}>{l}</DescriptionText>)}
		</DescriptionContainer>
	)
}

export default Description
