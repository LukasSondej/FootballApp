import styled from "styled-components"
import type { Player } from "./types"

type PropsPlayer =  {
    player: Player
}
const StyledPlayer = styled.p`
background: ${props => props.theme.colors.background};

`
export const SinglePlayer = ({player}: PropsPlayer) => {
return (
    <StyledPlayer>
       {player.name} {player.lastName} 
    </StyledPlayer>
    
)
}