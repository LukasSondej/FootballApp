import { useSuspenseQuery } from "@tanstack/react-query";
import { matchesQueryOptions } from "../../hooks/useGetMatches"

import { SingleMatch } from "./SingleMatch";
import { teamsQueryOptions } from "../../hooks/useGetTeams";

export const StatsMatches = () => {
const {data: matches}= useSuspenseQuery(matchesQueryOptions)
const {data: teams} = useSuspenseQuery(teamsQueryOptions)

const copyMatches = [...matches];
const sortedCopyMatches = copyMatches.sort((a,b)=> 
{
    return new Date(b.date).getTime() - new Date(a.date).getTime();
})
const lastMatch = sortedCopyMatches[0];
const goalsMap: Record<string, number> = {};
matches.forEach(match => {
    const obecneGoleTeam1 = goalsMap[match.team1Id] || 0;
    goalsMap[match.team1Id] = obecneGoleTeam1 + match.team1Score;

    const obecneGoleTeam2 = goalsMap[match.team2Id] || 0;
    goalsMap[match.team2Id] = obecneGoleTeam2 + match.team2Score;
    
})
const top3Teams = Object.entries(goalsMap).sort((a,b)=> {
    return b[1] - a[1];
}).slice(0,3);
return (
    <>
    
        <div>
            <h2>Ostatnia rozgrywka</h2>
            
         
            {lastMatch ? (
                <SingleMatch matchData={lastMatch} allTeams={teams} />
            ) : (
                <p>Brak rozegranych meczów</p>
            )}

        </div>
        <div>
       <h2 style={{ marginTop: '20px' }}>Top 3 Strzelców</h2>
       <ul>
{top3Teams.map(([teamId, gole], index)=> {
    const teamName = teams.find(t => t.id === teamId)?.name || "Unnamed";
    return(
        <li key={teamId} style={{ listStyle: 'none', margin: '5px 0', fontSize: '18px' }}>
{index + 1}. <strong>{teamName}</strong>: {gole} goli
        </li>
    )
})}

       </ul>

        </div>
    </>
    
    )
}