import baseHeroes from '../../assets/content/base/heroes'
import {shuffle} from "../../utils/list-utils";

const heroes = {
	base: baseHeroes.heroes
}

let remainingHeroes = []
let remainingEpicHeroes = []

const heroRepo = {
	reset: (games) => {
		const allHeroes = games.flatMap(g => heroes[g])

		remainingHeroes = shuffle(allHeroes.filter(h => h.type === 'ordinary'))
		remainingEpicHeroes = shuffle(allHeroes.filter(h => h.type === 'epic'))
	},
	get: (count) => {
		let heroes = []

		for (let i = 0; i < count; i++) {
			if (remainingHeroes.length > 0) {
				heroes[i] = remainingHeroes.pop()
			} else if (remainingEpicHeroes.length > 0) {
				heroes[i] = remainingEpicHeroes.pop()
			}
		}

		return heroes
	}
}

heroRepo.reset(['base'])

export default heroRepo;
