import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
	background-color: ${props => props.theme.background};
	height: 10%;
	margin: 0 5px;
`

const Footer = ({theme, baseDamage, treasureValue}) => {
	return <FooterContainer theme={theme}/>
}

export default Footer
