import styled from "styled-components"
import type { Player } from "./types"
import { useState } from "react"

type PropsPlayer =  {
    player: Player
}
const StyledPlayer = styled.p`
background: ${props => props.theme.colors.background};
color: ${props => props.theme.colors.textPrimary}
`
const [isEdit, setIsEdit] = useState(false)
export const handleIsEdit  =() => {
setIsEdit(prev => !prev)
}
export const SinglePlayer = ({player}: PropsPlayer) => {
return (
    <StyledPlayer>
       {player.name} {player.lastName} 
       <button onClick={handleIsEdit}>EDIT</button>
       
    </StyledPlayer>
    
)
}