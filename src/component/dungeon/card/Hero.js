import React from 'react'
import HeroCard from "../../card/hero/HeroCard";

const Hero = ({hero, theme, defaultCard}) => {
	return (hero && hero.title)
		?
		<HeroCard
			theme={theme}
			title={hero.title}
			type={hero.type}
			image={hero.image}
			description={hero.description}
			health={hero.health}
			playerIcon={hero['player-icon']}
			treasureTypes={hero['treasure-types']}
			wound={hero.wound}
		/>
		: defaultCard
}

export default Hero
