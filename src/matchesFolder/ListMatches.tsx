import { useGetMatches } from "../hooks/useGetMatches"
import { useGetTeams } from "../hooks/useGetTeams";
import { SingleMatch } from "./SingleMatch";
    
export const ListMatches = () => {
const {data, isLoading, error} = useGetMatches();
const{data: teams} = useGetTeams();
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