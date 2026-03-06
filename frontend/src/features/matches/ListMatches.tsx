import { useSuspenseQuery } from "@tanstack/react-query";
import { matchesQueryOptions} from "../../hooks/useGetMatches"
import { teamsQueryOptions} from "../../hooks/useGetTeams";
import { SingleMatch } from "./SingleMatch";
    
export const ListMatches = () => {
const {data} = useSuspenseQuery(matchesQueryOptions)
const{data: teams} = useSuspenseQuery(teamsQueryOptions);
    if(!data || !teams) {
        return <p>Loading...</p>
    }
    return(
        <>
         <ul>
            {data.map(el => 
            <li key={el.id} style={{listStyleType: "none"}}>
                 <SingleMatch  matchData={el} allTeams= {teams}/>
                 
            </li>
           )}

        </ul>
        </>
       
    )
}