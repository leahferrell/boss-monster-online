import React from 'react'
import styled from 'styled-components'

const TownContainer = styled.div`

`

const Town = ({children}) => {
  return (
		<TownContainer>
			{children}
		</TownContainer>
	)
}

export default Town
