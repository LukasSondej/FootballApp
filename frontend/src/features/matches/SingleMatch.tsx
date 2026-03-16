
import styled from "styled-components";
import type { Match, Team } from "../../types"
import { useState } from "react";
import { EditMatch } from "./EditMatch";
import useModalStore from "../../store/useModalStore";

type PropsMatch ={
    matchData: Match;
    allTeams: Team[];
}

const StyledDiv = styled.div`
  background-color: grey; 
  padding: 12px;
  color: white;
  border-radius: 8px; 
  margin-bottom: 10px; 
`
export const SingleMatch = ({matchData, allTeams}: PropsMatch) => {
const setIdEditMatch = useModalStore(state => state.setIdEditMatch)
    const team1 = allTeams.find(el => el.id === matchData.team1Id);
     const team2 = allTeams.find(el => el.id === matchData.team2Id);
     if(!team1 || !team2){
        return <p>Loading...</p>
     }
    

return(
    
<StyledDiv>
    <h1>{team1.name} - {team2.name}</h1>
    <h2>{matchData.team1Score} - {matchData.team2Score}</h2>
    <h3>Duration: {matchData.duration} min</h3>
    <p>{matchData.place}, {matchData.date}</p>
    <button onClick={() => setIdEditMatch(matchData.id)}>EDIT</button>

</StyledDiv>


  

)
}