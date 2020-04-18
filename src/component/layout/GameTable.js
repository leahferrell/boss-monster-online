import React from 'react'
import styled from 'styled-components'
import HandPanel from "./HandPanel";
import DungeonPanel from "./DungeonPanel";

const GameTableContainer = styled.div`
	background-color: ${props => props.theme.gameTable.background};
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const GameTable = ({theme, gameState}) => {
	return (
		<GameTableContainer theme={theme}>
			<DungeonPanel theme={theme} players={gameState.players} />
			<HandPanel theme={theme} playerHand={gameState.players[0].hand} playerName="Your" />
		</GameTableContainer>
	)
}

export default GameTable
