
import styled from "styled-components";
import type { Match, Team } from "../types"

type PropsMatch ={
    matchData: Match;
    allTeams: Team[];
}
const MatchDiv = styled.div`

`

export const SingleMatch = ({matchData, allTeams}: PropsMatch) => {
    
    const team1 = allTeams.find(el => el.id === matchData.team1Id);
     const team2 = allTeams.find(el => el.id === matchData.team2Id);
     if(!team1 || !team2){
        return <p>Loading...</p>
     }
return(
<div>
    <h1>{team1.name} - {team2.name}</h1>
</div>
)
}