import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Player, Team } from "../types";
import { apiCall } from "../utils/apiCall";

type DeleteTeamPayload = {
    teamId: string;
    playersIds: string[];
}
export const useDeleteTeamMutation = () => {
    const queryClient = useQueryClient()
   const {mutate, error, isPending} = useMutation({
    mutationKey: ["deleteTeam"],
    mutationFn: async({teamId, playersIds}:DeleteTeamPayload) => {
        return apiCall<Team>(`teams/${teamId}`, {method: "DELETE"})
    },
    onSuccess: async(data, variables) => {
await Promise.all(variables.playersIds.map(el =>apiCall<Player, {teamId: string | null}>(`players/${el}`, {method: "PATCH", body: {teamId: null}})))
queryClient.invalidateQueries({queryKey: ["teams"]})
queryClient.invalidateQueries({queryKey: ["players"]})
    }


}) 
return {mutate, error, isPending}
}
