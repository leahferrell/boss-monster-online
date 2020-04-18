import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
	background-color: ${props => props.theme.background};
	height: 100px;
	margin: 0 5px;
`

const Image = ({theme}) => {
	return <ImageContainer theme={theme}/>
}

export default Image
