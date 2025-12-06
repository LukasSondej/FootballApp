import { useGetMatches } from "../hooks/useGetMatches"
import { SingleMatch } from "./SingleMatch";

export const ListMatches = () => {
    const {data, isLoading, error} = useGetMatches();
    return(
        <ul>
            {data?.map(el => <SingleMatch key={el.id} matchData={el}/>)}
        </ul>
    )
}