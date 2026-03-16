import styled from "styled-components"
import { DeletePlayer } from "./DeletePlayer"
import useModalStore from "../../store/useModalStore"
import type { Player } from "../../types"

type PropsPlayer =  {
    player: Player
}

const StyledPlayer = styled.div`
background: ${props => props.theme.colors.background};
color: ${props => props.theme.colors.textPrimary}
`

export const SinglePlayer = ({player}: PropsPlayer) => {
const setIdEditPlayer = useModalStore((state) => state.setIdEditPlayer)


return (
    <StyledPlayer>
       {player.name} {player.lastName} 

       <button type="button" onClick={() => setIdEditPlayer(player.id)}>{"Edit"}</button>
       <DeletePlayer teamId={player.teamId} id={player.id}/>
    </StyledPlayer>
    
)
}