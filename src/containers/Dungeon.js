import React from 'react'
import styled from 'styled-components'
import RoomCard from "../component/card/room/RoomCard";
import BossCard from "../component/card/boss/BossCard";
import EmptyCard from "../component/card/empty/EmptyCard";
import NoStyleCard from "../component/card/empty/NoStyleCard";
import HeroCard from "../component/card/hero/HeroCard";

const DungeonContainer = styled.div`
	background-color: ${props => props.theme.background};
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	justify-content: space-between;
	align-items: stretch;
	margin: 20px;
	padding: 20px;
	overflow: scroll;
`

const DungeonTitle = styled.h2`
	text-align: left;
	padding: 0 10px;
	margin: 10px 0 30px 0;
	width: auto;
	font-family: "Andale Mono", sans-serif;
	color: white;
`

const Text = styled.p`
	text-align: left;
	margin: 0;
	padding: 10px;
	width: auto;
	font-size: small;
	font-family: "Andale Mono", sans-serif;
	color: white;
`

const generateRoom = (rooms, theme) => {
	if (rooms.length === 0) {
		return <EmptyCard theme={theme} placeholder="Room Card"/>
	} else {
		const room = rooms[rooms.length - 1]

		return <RoomCard
			theme={theme}
			title={room.title}
			type={room.type}
			isAdvanced={room['is-advanced']}
			image={room.image}
			description={room.description}
			baseDamage={room['base-damage']}
			treasureValue={room['treasure-value']}
		/>
	}
}

const generateHero = (hero, theme, defaultCard) => {
	return (hero && hero.title)
		? <HeroCard
			theme={theme}
			title={hero.title}
			type={hero.type}
			image={hero.image}
			description={hero.description}
			health={hero.health}
			playerIcon={hero['player-icon']}
			treasureTypes={hero['treasure-types']}
			wound={hero.wound}
		  />
		: defaultCard
}

const generateRoomSlot = (roomSlot, theme, key) => {
	const {hero, rooms} = roomSlot
	const room = generateRoom(rooms, theme)
	const heroSlot = generateHero(hero, theme, <NoStyleCard />)

	return <div key={key}>
		{heroSlot}
		{room}
	</div>
}

const generateBaitedHeroes = (baitedHeroes, theme) => {
	return generateHero(baitedHeroes[0], theme, <EmptyCard theme={theme} placeholder="Dungeon Entrance"/>)
}

const Dungeon = ({theme, boss, rooms, baitedHeroes}) => {
	const dungeonCards = rooms.map((r, i) => generateRoomSlot(r, theme, `room-${i}`))

	return <DungeonContainer theme={theme.dungeon}>
		<div>
			<DungeonTitle>
				Your Dungeon
			</DungeonTitle>
			{generateBaitedHeroes(baitedHeroes, theme)}
			<Text>
				Baited Heroes: {baitedHeroes.length}
			</Text>
		</div>
		{dungeonCards}
		<div>
			<NoStyleCard />
			<BossCard
				theme={theme}
				name={boss.name}
				title={boss.title}
				image={boss.image}
				levelUp={boss['level-up']}
				xp={boss.xp}
				treasureTypes={boss['treasure-types']}
			/>
		</div>
	</DungeonContainer>
}

export default Dungeon
