import styled from "styled-components"

import { ListPlayers } from "./features/players/ListPlayers"
import { AddPlayer } from "./features/players/AddPlayer"
import useModalStore from "./store/useModalStore"
import { useShallow } from "zustand/react/shallow"
import { EditPlayer } from "./features/players/EditPlayer"

const StyledDiv = styled.div`
display: flex;

`
export const ParentPlayerComp = () => {
   const { idEditPlayer, isAddingPlayer, toggleIsAddingPlayer } = useModalStore(
        useShallow((state) => ({
            idEditPlayer: state.idEditPlayer,
            isAddingPlayer: state.isAddingPlayer,
            toggleIsAddingPlayer: state.toggleIsAddingPlayer
        }))
    )
     if(idEditPlayer){
        return (
<EditPlayer id={idEditPlayer}/>
        )
     }
    return (
        <StyledDiv>
        
         {!isAddingPlayer && <button onClick={toggleIsAddingPlayer}>Add Player</button>}
          
          {isAddingPlayer && <AddPlayer/>}
          <ListPlayers/>
        </StyledDiv>
    )
}