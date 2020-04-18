import React from 'react'
import EmptyCard from "../../card/empty/EmptyCard";
import Hero from "./Hero";

const BaitedHero = ({baitedHeroes, theme}) => {
	return (
		<Hero
			hero={baitedHeroes[0]}
			theme={theme}
			defaultCard={<EmptyCard theme={theme} placeholder="Dungeon Entrance"/>}
		/>
	)
}

export default BaitedHero
