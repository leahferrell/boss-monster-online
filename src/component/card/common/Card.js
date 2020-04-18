import React from 'react'
import styled from 'styled-components'

const CardTemplate = styled.div`
	border: ${props => props.theme.border} solid 1px;
	border-radius: 5px;
	padding: 5px;
	height: 210px;
	width: 150px;
	background: ${props => props.theme.border};
	flex: 0 0 auto;
	margin-right: 10px;
	box-shadow: 0 0 5px #161616;

	&:hover {
		box-shadow: 0 0 5px #ffffff;
		border: #ffffff solid 1px;
		cursor: pointer;
	}

	&:active {
		box-shadow: 0 0 5px #fff486;
		border: #fff486 solid 1px;
		cursor: pointer;
	}
`

const Card = ({theme, children}) => {
	return <CardTemplate theme={theme}>
		{children}
	</CardTemplate>
}

export default Card
