import React from 'react'
import styled from 'styled-components'
import BossSlot from "./slot/BossSlot";
import RoomSlot from "./slot/RoomSlot";
import EntranceSlot from "./slot/EntranceSlot";

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

const Dungeon = ({theme, boss, rooms, baitedHeroes}) => {
	const dungeonCards = rooms.map((r, i) => <RoomSlot roomSlot={r} theme={theme} key={`room-${i}`} />)

	return (
		<DungeonContainer theme={theme.dungeon}>
			<EntranceSlot theme={theme} baitedHeroes={baitedHeroes} />
			{dungeonCards}
			<BossSlot boss={boss} theme={theme} />
		</DungeonContainer>
	)
}

export default Dungeon
