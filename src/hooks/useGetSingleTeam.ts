import { useQuery } from "@tanstack/react-query";
import { useApi } from "./useApi"
import type { Team } from "../types";

export const useGetSingleTeam = (teamId: string) => {
    const {getData} = useApi();
     const {data, isLoading, error} = useQuery<Team>({
        queryKey: ["singleTeam", teamId],
        queryFn: async() => {
            return getData<Team>(`teams/${teamId}`)

        }

     })
 return {data, isLoading, error}    
}
