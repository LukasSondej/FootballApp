import { useQuery } from "@tanstack/react-query";
import type { Team } from "../types";
import { apiCall } from "../utils/apiCall";

export const useGetSingleTeam = (teamId: string) => {
     const {data, isLoading, error} = useQuery<Team>({
        queryKey: ["singleTeam", teamId],
        queryFn: async() => {
            return apiCall<Team>(`teams/${teamId}`, {method: "GET"})

        }

     })
 return {data, isLoading, error}    
}
