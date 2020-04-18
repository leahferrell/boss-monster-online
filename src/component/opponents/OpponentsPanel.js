import React from 'react'
import styled from 'styled-components'

const OpponentsPanelContainer = styled.div`

`

const OpponentsPanel = ({children}) => {
  return (
		<OpponentsPanelContainer>
			{children}
		</OpponentsPanelContainer>
	)
}

export default OpponentsPanel
