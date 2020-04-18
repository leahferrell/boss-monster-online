import React from 'react'
import EmptyCard from "../../card/empty/EmptyCard";
import RoomCard from "../../card/room/RoomCard";

const Room = ({rooms, theme}) => {
	if (rooms.length === 0) {
		return <EmptyCard theme={theme} placeholder="Room Card"/>
	} else {
		const room = rooms[rooms.length - 1]

		return (
			<RoomCard
				theme={theme}
				title={room.title}
				type={room.type}
				isAdvanced={room['is-advanced']}
				image={room.image}
				description={room.description}
				baseDamage={room['base-damage']}
				treasureValue={room['treasure-value']}
			/>
		)
	}
}

export default Room
