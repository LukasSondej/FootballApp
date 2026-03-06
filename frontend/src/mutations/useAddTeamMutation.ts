import { useMutation, useQueryClient } from "@tanstack/react-query";
import {  type NewTeam, type Player, type Team} from "../types";
import { apiCall } from "../utils/apiCall";


export const useAddTeamMutation = () => {
    const queryClient = useQueryClient()
    const {mutate, error, isPending} = useMutation({
        mutationKey: ["addTeam"],
        mutationFn: async(addedTeam: NewTeam)=> apiCall<Team, NewTeam>(`teams`, {method: "POST", body: addedTeam}),
        
        onSuccess: async(createdTeam, variables) => {
const playersIdsToUpdate = variables.playersId;
const newTeamId = createdTeam.id;
if(playersIdsToUpdate && newTeamId) {
    const updatePromises = playersIdsToUpdate.map(playerId => {

        return apiCall<Player, {teamId: string}>(`players/${playerId}`, {method: "PATCH", body: {teamId: newTeamId}} )
    })
    await Promise.all(updatePromises)
}



           await queryClient.invalidateQueries({ queryKey: ["teams"] });
    await queryClient.invalidateQueries({ queryKey: ["players"] });

        }
    })
    return {mutate, error, isPending}
}