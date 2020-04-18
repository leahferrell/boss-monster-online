import React from 'react'
import styled from 'styled-components'

const EmptyCardTemplate = styled.div`
	border: ${props => props.theme.border} dashed 1px;
	border-radius: 5px;
	padding: 5px;
	height: 210px;
	width: 150px;
	background: ${props => props.theme.border};
	flex: 0 0 auto;
	margin-right: 10px;
`

const EmptyText = styled.p`
	text-align: center;
	align-items: stretch;
	font-family: "Andale Mono", sans-serif;
`

const EmptyCard = ({theme, placeholder}) => {
	const emptyCardTheme = theme.cards.empty

	return <EmptyCardTemplate theme={emptyCardTheme} >
		<EmptyText>
			{placeholder}
		</EmptyText>
	</EmptyCardTemplate>
}

export default EmptyCard
