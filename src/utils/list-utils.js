export const shuffle = (list) => {
	const newList = list.slice()
	let temporaryValue, randomIx

	for (let currentIx = newList.length; 0 !== currentIx; currentIx--) {
		randomIx = Math.floor(Math.random() * currentIx)

		temporaryValue = newList[currentIx-1]
		newList[currentIx-1] = newList[randomIx]
		newList[randomIx] = temporaryValue
	}

	return newList
}

export const replicate = (obj) => {
	return Array(obj.count).fill(obj)
}
