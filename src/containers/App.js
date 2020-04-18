import React from 'react'
import GameTable from '../component/layout/GameTable'
import GlobalStyle from '../config/global-style'
import config from '../config/config'
import bossRepo from "../service/repo/boss-repo";
import roomRepo from "../service/repo/room-repo";
import spellRepo from "../service/repo/spells-repo";
import heroRepo from "../service/repo/hero-repo";

const initPlayer = () => {
	return {
		boss: bossRepo.get(),
		hand: {
			rooms: roomRepo.get(5),
			spells: spellRepo.get(2),
		},
		dungeon: {
			baitedHeroes: heroRepo.get(1),
			roomSlots: [
				{
					hero: {},
					rooms: []
				},
				{
					hero: heroRepo.get(1)[0],
					rooms: []
				},
				{
					hero: {},
					rooms: []
				},
				{
					hero: {},
					rooms: []
				},
				{
					hero: {},
					rooms: []
				}
			]
		}
	}
}

const initState = (numOfPlayers) => {
	let players = []

	for (let i = 0; i < numOfPlayers; i++) {
		players[i] = initPlayer()
	}

	return {
		town: [],
		players
	}
}

const App = props => {
	const gameState = initState(2)

	return (
		<div>
			<GlobalStyle theme={config.theme} />
			<GameTable theme={config.theme} gameState={gameState} />
		</div>
	)
}

export default App
