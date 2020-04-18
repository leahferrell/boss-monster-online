import React from 'react'
import Card from '../common/Card'
import Header from './Header'
import styled from 'styled-components'
import Image from "./Image";
import Description from "./Description";
import Footer from "./Footer";

const BossCardContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	background-color: ${props => props.theme.background};
	flex-direction: column;
`

const BossCard = ({theme, name, title, image, levelUp, xp, treasureTypes}) => {
	const roomCardTheme = theme.cards.room

	return (
		<Card theme={roomCardTheme} >
			<BossCardContainer theme={roomCardTheme} >
				<Header name={name} title={title} theme={roomCardTheme.header} />
				<Image theme={roomCardTheme.image} image={image} />
				<Description theme={roomCardTheme.description} levelUp={levelUp} />
				<Footer theme={roomCardTheme.footer} xp={xp} treasureTypes={treasureTypes} />
			</BossCardContainer>
		</Card>
	)
}

export default BossCard
