import React from 'react'
import styled from 'styled-components'
import Dungeon from "./Dungeon";
import Hand from "./Hand";

const GameTableContainer = styled.div`
	background-color: ${props => props.theme.gameTable.background};
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const DungeonContainerItem = styled.div`
	flex-grow: 1;
	overflow: scroll;
`

const HandContainerItem = styled.div`
	flex-grow: 1;
`

const GameTable = ({theme, gameState}) => {
	const dungeons = gameState.players.map((p, i) =>
		<Dungeon
			key={`player-${i}`}
			boss={p.boss}
			rooms={p.dungeon.roomSlots}
			baitedHeroes={p.dungeon.baitedHeroes}
			theme={theme}
		/>)

	const playerHand = gameState.players[0].hand

	return <GameTableContainer theme={theme}>
		<DungeonContainerItem>
			{dungeons}
		</DungeonContainerItem>
		<HandContainerItem>
			<Hand
				theme={theme}
				rooms={playerHand.rooms}
				spells={playerHand.spells}
				playerName="Your"
			/>
		</HandContainerItem>
	</GameTableContainer>
}

export default GameTable
