import React from 'react'
import Card from '../common/Card'
import Header from './Header'
import styled from 'styled-components'
import Image from "./Image";
import Description from "./Description";
import Footer from "./Footer";

const SpellCardContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	background-color: ${props => props.theme.background};
	flex-direction: column;
`

const SpellCard = ({theme, title, image, description, phaseIcons}) => {
	const spellCardTheme = theme.cards.spell

	return (
		<Card theme={spellCardTheme} >
			<SpellCardContainer theme={spellCardTheme} >
				<Header title={title} theme={spellCardTheme.header} />
				<Image theme={spellCardTheme.image} image={image} />
				<Description theme={spellCardTheme.description} description={description} />
				<Footer theme={spellCardTheme.footer} phaseIcons={phaseIcons} />
			</SpellCardContainer>
		</Card>
	)
}

export default SpellCard
