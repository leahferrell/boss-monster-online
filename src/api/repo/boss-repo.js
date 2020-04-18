import baseBosses from '../../assets/content/base/bosses'
import {shuffle} from "../../utils/list-utils";

const bosses = {
	base: baseBosses.bosses
}

let remainingBosses = []

const bossRepo = {
	reset: (games) => {
		remainingBosses = shuffle(games.flatMap(g => bosses[g]))
	},
	get: () => {
		return remainingBosses.pop()
	}
}

bossRepo.reset(['base'])

export default bossRepo;
