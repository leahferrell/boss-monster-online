import React from 'react'
import Card from '../common/Card'
import Header from './Header'
import styled from 'styled-components'
import Image from "./Image";
import Description from "./Description";
import Footer from "./Footer";

const RoomCardContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	background-color: ${props => props.theme.background};
	flex-direction: column;
`

const RoomCard = ({theme, title, type, isAdvanced, image, description, baseDamage, treasureValue}) => {
	const roomCardTheme = theme.cards.room

	return (
		<Card theme={roomCardTheme} >
			<RoomCardContainer theme={roomCardTheme} >
				<Header isAdvanced={isAdvanced} title={title} type={type} theme={roomCardTheme.header} />
				<Image theme={roomCardTheme.image} image={image} />
				<Description theme={roomCardTheme.description} description={description} />
				<Footer theme={roomCardTheme.footer} baseDamage={baseDamage} treasureValue={treasureValue} />
			</RoomCardContainer>
		</Card>
	)
}

export default RoomCard
