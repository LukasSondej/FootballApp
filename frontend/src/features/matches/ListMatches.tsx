import { useSuspenseQuery } from "@tanstack/react-query";
import { matchesQueryOptions} from "../../hooks/useGetMatches"
import { SingleMatch } from "./SingleMatch";
    
export const ListMatches = () => {
const {data} = useSuspenseQuery(matchesQueryOptions)

    return(
        <>
     <div className="p-4 w-full max-w-4xl mx-auto flex flex-col gap-4">
    {data.map(el => (
        <SingleMatch key={el.id} matchData={el}/>
    ))}
</div>
        </>
       
    )
}