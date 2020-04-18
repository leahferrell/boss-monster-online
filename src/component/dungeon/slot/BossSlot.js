import React from 'react'
import styled from 'styled-components'
import NoStyleCard from "../../card/empty/NoStyleCard";
import BossCard from "../../card/boss/BossCard";

const BossSlotContainer = styled.div`

`

const BossSlot = ({boss, theme}) => {
  return (
		<BossSlotContainer>
			<NoStyleCard />
			<BossCard
				theme={theme}
				name={boss.name}
				title={boss.title}
				image={boss.image}
				levelUp={boss['level-up']}
				xp={boss.xp}
				treasureTypes={boss['treasure-types']}
			/>
		</BossSlotContainer>
	)
}

export default BossSlot
