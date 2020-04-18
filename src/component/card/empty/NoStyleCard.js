import React from 'react'
import styled from 'styled-components'

const NoStyleCardTemplate = styled.div`
	border: none;
	border-radius: 5px;
	padding: 5px;
	height: 210px;
	width: 150px;
	background: transparent;
	flex: 0 0 auto;
	margin-right: 10px;
`

const NoStyleCard = () => {
	return <NoStyleCardTemplate />
}

export default NoStyleCard
