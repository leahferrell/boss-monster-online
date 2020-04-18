import React from 'react'
import styled from 'styled-components'
import Hand from "../hand/Hand";

const HandContainerItem = styled.div`
	flex-grow: 1;
`

const HandPanel = ({theme, playerHand, playerName}) => {
  return (
		<HandContainerItem>
			<Hand
				theme={theme}
				rooms={playerHand.rooms}
				spells={playerHand.spells}
				playerName="Your"
			/>
		</HandContainerItem>
	)
}

export default HandPanel
