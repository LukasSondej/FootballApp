import { useMutation, useQueryClient } from "@tanstack/react-query"
import { type NewTeam, type Player, type Team } from "../types";
import { apiCall } from "../utils/apiCall";

export const useEditTeamMutation= (teamId: string) => {
 
    const queryClient = useQueryClient();
    const {mutate, isPending, error} = useMutation({
        mutationKey: ["teamEdit", teamId],
        mutationFn: async(editedTeam: NewTeam) => apiCall<Team, NewTeam>(`teams/${teamId}`, {method: "PATCH", body: editedTeam}
         ),
        onSuccess: async(addedTeam, variables) => {
            const playersIdsToUpdate = variables.playersId;
            const newTeamId = addedTeam.id;
            if(playersIdsToUpdate && newTeamId){
                const updatePromises = playersIdsToUpdate.map(playerId => apiCall<Player, {teamId: string}>(`players/${playerId}`, {method: "PATCH", body: {teamId: newTeamId}})
                )
           await Promise.all(updatePromises)
            }
              await queryClient.invalidateQueries({ queryKey: ["teams"] });
    await queryClient.invalidateQueries({ queryKey: ["players"] });
        }
        
    })
     return {mutate, isPending, error}
}