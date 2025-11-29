import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi";
import type { NewTeam, Team } from "../types";

export const useEditTeamMutation= (teamId: string) => {
    const {patchData} = useApi();
    const queryClient = useQueryClient();
    const {mutate, isPending, error} = useMutation({
        mutationKey: ["teamEdit", teamId],
        mutationFn: async(editedTeam: NewTeam) => {
         return patchData<Team, NewTeam>(`teams/${teamId}`, editedTeam)
        
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["teams"]})
        }
        
    })
     return {mutate, isPending, error}
}