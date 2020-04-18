import React from 'react'
import styled from 'styled-components'
import RoomCard from "../card/room/RoomCard";
import SpellCard from '../card/spell/SpellCard';

const HandContainer = styled.div`
	background-color: ${props => props.theme.background};
	text-align: center;
	padding: 25px 75px;
	margin: 20px;
`

const CarouselContainer = styled.div`
	background-color: transparent;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	justify-content: space-between;
	flex-basis: 0;
	padding-bottom: 15px;
`

const HandTitle = styled.h2`
	text-align: left;
	padding: 0 10px;
	margin: 10px 0;
	width: auto;
	font-family: "Andale Mono", sans-serif;
	color: white;
`

const Hand = ({theme, rooms, spells, playerName}) => {
	const roomCards = rooms.map((c, i) =>
		<RoomCard
			theme={theme}
			title={c.title}
			type={c.type}
			isAdvanced={c['is-advanced']}
			image={c.image}
			description={c.description}
			baseDamage={c['base-damage']}
			treasureValue={c['treasure-value']}
			key={`room-${i}`}
		/>)

	const spellCards = spells.map((c, i) =>
		<SpellCard
			theme={theme}
			title={c.title}
			image={c.image}
			description={c.description}
			phaseIcons={c['phase-icons']}
			key={`spell-${i}`}
		/>)

	return (
		<HandContainer theme={theme.hand}>
			<HandTitle>{playerName} Cards:</HandTitle>
			<CarouselContainer>
				{roomCards}
				{spellCards}
			</CarouselContainer>
		</HandContainer>
	)
}

export default Hand
