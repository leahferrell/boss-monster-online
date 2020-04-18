const TREASURE_TYPES = {
	MAGE: {
		lowerCase: 'mage',
		regularCase: 'Mage',
		image: 'mage.png'
	},
	CLERIC: {
		lowerCase: 'cleric',
		regularCase: 'Cleric',
		image: 'cleric.png'
	},
	THIEF: {
		lowerCase: 'thief',
		regularCase: 'Thief',
		image: 'thief.png'
	},
	FIGHTER: {
		lowerCase: 'fighter',
		regularCase: 'Fighter',
		image: 'fighter.png'
	}
}

const getTreasureType = (treasureType) => {
	return TREASURE_TYPES[treasureType.toUpperCase()]
}

export default getTreasureType
