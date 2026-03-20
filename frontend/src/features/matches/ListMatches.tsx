import { useSuspenseQuery } from "@tanstack/react-query";
import { matchesQueryOptions} from "../../hooks/useGetMatches"
import { SingleMatch } from "./SingleMatch";
    
export const ListMatches = () => {
const {data} = useSuspenseQuery(matchesQueryOptions)
    if(!data) {
        return <p>Loading...</p>
    }
    return(
        <>
         <ul>
            {data.map(el => 
            <li key={el.id} style={{listStyleType: "none"}}>
                 <SingleMatch  matchData={el}/>
                 
            </li>
           )}

        </ul>
        </>
       
    )
}