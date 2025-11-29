import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi";
import { type NewTeam, type Player, type Team } from "../types";

export const useEditTeamMutation= (teamId: string) => {
    const {patchData} = useApi();
    const queryClient = useQueryClient();
    const {mutate, isPending, error} = useMutation({
        mutationKey: ["teamEdit", teamId],
        mutationFn: async(editedTeam: NewTeam) => {
         return patchData<Team, NewTeam>(`teams/${teamId}`, editedTeam)
        
        },
        onSuccess: async(addedTeam, variables) => {
            const playersIdsToUpdate = variables.playersId;
            const newTeamId = addedTeam.id;
            if(playersIdsToUpdate && newTeamId){
                const updatePromises = playersIdsToUpdate.map(playerId => {
                    return patchData<Player, {teamId: string}>(`players/${playerId}`, {teamId: newTeamId})
                })
           await Promise.all(updatePromises)
            }
              await queryClient.invalidateQueries({ queryKey: ["teams"] });
    await queryClient.invalidateQueries({ queryKey: ["players"] });
        }
        
    })
     return {mutate, isPending, error}
}