import { useMutation, useQueryClient } from "@tanstack/react-query";
import type {Team } from "../types";
import { apiCall } from "../utils/apiCall";

type DeleteTeamPayload = {
    teamId: string;
  
}
export const useDeleteTeamMutation = () => {
    const queryClient = useQueryClient()
   const {mutate, error, isPending} = useMutation({
    mutationKey: ["deleteTeam"],
    mutationFn: async({teamId}:DeleteTeamPayload) => {
        return apiCall<Team>(`teams/${teamId}`, {method: "DELETE"})
    },
    onSuccess: async() => {
queryClient.invalidateQueries({queryKey: ["teams"]})
queryClient.invalidateQueries({queryKey: ["players"]})
    }


}) 
return {mutate, error, isPending}
}
