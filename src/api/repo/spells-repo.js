import baseSpells from '../../assets/content/base/spells'
import {shuffle} from "../../utils/list-utils";

const spells = {
	base: baseSpells.spells
}

let remainingSpells = []

const spellRepo = {
	reset: (games) => {
		remainingSpells = shuffle(games.flatMap(g => spells[g]))
	},
	get: (count) => {
		let spells = []

		for (let i = 0; i < count; i++) {
			if (remainingSpells.length > 0) {
				spells[i] = remainingSpells.pop()
			}
		}

		return spells
	}
}

spellRepo.reset(['base'])

export default spellRepo;
