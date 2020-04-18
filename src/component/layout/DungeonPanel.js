import React from 'react'
import styled from 'styled-components'
import Dungeon from "../dungeon/Dungeon";

const DungeonContainerItem = styled.div`
	flex-grow: 1;
	overflow: scroll;
`

const DungeonPanel = ({players, theme}) => {
	const dungeons = players.map((p, i) =>
		<Dungeon
			key={`player-${i}`}
			boss={p.boss}
			rooms={p.dungeon.roomSlots}
			baitedHeroes={p.dungeon.baitedHeroes}
			theme={theme}
		/>)

  return (
		<DungeonContainerItem>
			{dungeons}
		</DungeonContainerItem>
	)
}

export default DungeonPanel
