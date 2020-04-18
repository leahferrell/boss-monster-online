import React from 'react'
import styled from 'styled-components'
import BaitedHero from "../card/BaitedHero";

const DungeonTitle = styled.h2`
	text-align: left;
	padding: 0 10px;
	margin: 10px 0 30px 0;
	width: auto;
	font-family: "Andale Mono", sans-serif;
	color: white;
`

const Text = styled.p`
	text-align: left;
	margin: 0;
	padding: 10px;
	width: auto;
	font-size: small;
	font-family: "Andale Mono", sans-serif;
	color: white;
`

const EntranceContainer = styled.div`

`

const EntranceSlot = ({theme, baitedHeroes}) => {
  return (
		<EntranceContainer>
			<DungeonTitle>
				Your Dungeon
			</DungeonTitle>
			<BaitedHero
				baitedHeroes={baitedHeroes}
				theme={theme}
			/>
			<Text>
				Baited Heroes: {baitedHeroes.length}
			</Text>
		</EntranceContainer>
	)
}

export default EntranceSlot
