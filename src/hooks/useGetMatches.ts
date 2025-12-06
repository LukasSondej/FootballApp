import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useApi } from "./useApi"
import type { Match } from "../types"

export const useGetMatches = () => {
    const {getData} = useApi()
    const {data, isLoading, error}= useQuery<Match[]>({
     queryKey: ["matches"],
     queryFn: async()=>{
        return getData<Match[]>(`matches`);
     }
    })
    return{data, isLoading, error}
}