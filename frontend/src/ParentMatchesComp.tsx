import { useState } from "react"
import { AddMatch } from "./features/matches/AddMatch"
import { ListMatches } from "./features/matches/ListMatches"
import styled from "styled-components"
import { StatsMatches } from "./features/matches/StatsMatches"
import useModalStore from "./store/useModalStore"
import { useShallow } from "zustand/react/shallow"
import { EditMatch } from "./features/matches/EditMatch"
const StyledDiv = styled.div`
    display: flex;
    gap: 20px; 
    align-items: flex-start;
`
export const ParentMatchesComp = () => {
const {isAddingMatch,toggleIsAddingMatch, idEditMatch} = useModalStore(useShallow((state) => ({isAddingMatch: state.isAddingMatch, toggleIsAddingMatch: state.toggleIsAddingMatch, idEditMatch: state.idEditMatch})))
if(idEditMatch) {
    return(
        <EditMatch matchId={idEditMatch}/>
    )
}
    return(
        <StyledDiv>
             <ListMatches/> 
       {!isAddingMatch && <button type="button" onClick={toggleIsAddingMatch}>{"Add Match" }</button>}
{isAddingMatch && <AddMatch/>}
<StatsMatches></StatsMatches>
        </StyledDiv>
  
    )
  
}