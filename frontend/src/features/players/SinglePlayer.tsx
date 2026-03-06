import styled from "styled-components"
import type { Player } from "../../types"
import { useState } from "react"

import { FormEditPlayer } from "./FormEditPlayer"
import { DeletePlayer } from "./DeletePlayer"

type PropsPlayer =  {
    player: Player
}

const StyledPlayer = styled.div`
background: ${props => props.theme.colors.background};
color: ${props => props.theme.colors.textPrimary}
`

export const SinglePlayer = ({player}: PropsPlayer) => {
const [isEdit, setIsEdit] = useState(false)
const handleIsEdit  =() => {
setIsEdit(prev => !prev)
}


return (
    <StyledPlayer>
       {player.name} {player.lastName} 
       <button type="button" onClick={handleIsEdit}>{isEdit ? "Zamknij" : "Edytuj"}</button>
       <DeletePlayer teamId={player.teamId} id={player.id}/>
    {isEdit && <FormEditPlayer player={player} onClose = {() => setIsEdit(false)}/>}
    </StyledPlayer>
    
)
}