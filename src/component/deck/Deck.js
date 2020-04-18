import React from 'react'
import styled from 'styled-components'

const DeckContainer = styled.div`

`

const Deck = ({children}) => {
  return (
		<DeckContainer>
			{children}
		</DeckContainer>
	)
}

export default Deck
