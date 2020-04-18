import baseRooms from '../../assets/content/base/rooms'
import {shuffle, replicate} from "../../utils/list-utils";

const rooms = {
	base: baseRooms.rooms
}

let remainingRooms = []

const roomRepo = {
	reset: (games) => {
		const roomTemplates = games.flatMap(g => rooms[g])
		const allRooms = roomTemplates.flatMap(r => replicate(r))

		remainingRooms = shuffle(allRooms)
	},
	get: (count) => {
		let rooms = []

		for (let i = 0; i < count; i++) {
			if (remainingRooms.length > 0) {
				rooms[i] = remainingRooms.pop()
			}
		}

		return rooms
	}
}

roomRepo.reset(['base'])

export default roomRepo;
