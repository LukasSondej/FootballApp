import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import type { Player, Team } from "../types";

type DeleteTeamPayload = {
    teamId: string;
    playersIds: string[];
}
export const useDeleteTeamMutation = () => {
    const queryClient = useQueryClient()
    const {deleteData, patchData} = useApi()
 
   const {mutate, error, isPending} = useMutation({
    mutationKey: ["deleteTeam"],
    mutationFn: async({teamId, playersIds}:DeleteTeamPayload) => {
        return deleteData<Team>(`teams/${teamId}`)
    },
    onSuccess: async(data, variables) => {
await Promise.all(variables.playersIds.map(el => {
    return patchData<Player, {teamId: string | null}>(`players/${el}`, {teamId: null})
}))
queryClient.invalidateQueries({queryKey: ["teams"]})
queryClient.invalidateQueries({queryKey: ["players"]})
    }


}) 
return {mutate, error, isPending}
}
