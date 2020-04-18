import React from 'react'
import styled from 'styled-components'
import Room from "../card/Room";
import NoStyleCard from "../../card/empty/NoStyleCard";
import Hero from "../card/Hero";

const RoomSlotContainer = styled.div`

`

const RoomSlot = ({roomSlot, theme}) => {
	const {hero, rooms} = roomSlot
	const room = <Room theme={theme} rooms={rooms}/>
	const heroSlot = <Hero
		hero={hero}
		theme={theme}
		defaultCard={<NoStyleCard />}
	/>

	return (
		<RoomSlotContainer>
			{heroSlot}
			{room}
		</RoomSlotContainer>
	)
}

export default RoomSlot
