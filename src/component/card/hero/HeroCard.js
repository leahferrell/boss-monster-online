import React from 'react'
import Card from '../common/Card'
import Header from './Header'
import styled from 'styled-components'
import Image from "./Image";
import Description from "./Description";
import Footer from "./Footer";

const HeroCardContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	background-color: ${props => props.theme.background};
	flex-direction: column;
`

const HeroCard = ({theme, title, type, image, description, health, playerIcon, treasureTypes, wound}) => {
	const heroCardTheme = theme.cards.hero

	return <Card theme={heroCardTheme} >
		<HeroCardContainer theme={heroCardTheme} >
			<Header title={title} theme={heroCardTheme.header} />
			<Image theme={heroCardTheme.image} image={image} />
			<Description theme={heroCardTheme.description} description={description} />
			<Footer theme={heroCardTheme.footer} health={health} playerIcon={playerIcon} treasureTypes={treasureTypes} wound={wound} />
		</HeroCardContainer>
	</Card>
}

export default HeroCard
