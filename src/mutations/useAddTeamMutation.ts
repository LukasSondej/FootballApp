import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi"
import {  type NewTeam, type Player, type Team} from "../types";

export const useAddTeamMutation = () => {
    const {postData} = useApi();
    const {patchData} = useApi();
    const queryClient = useQueryClient()
    const {mutate, error, isPending} = useMutation({
        mutationKey: ["addTeam"],
        mutationFn: async(addedTeam: NewTeam)=> {
            return postData<Team, NewTeam>(`teams`, addedTeam);
        },
        onSuccess: async(createdTeam, variables) => {
const playersIdsToUpdate = variables.playersId;
const newTeamId = createdTeam.id;
if(playersIdsToUpdate && newTeamId) {
    const updatePromises = playersIdsToUpdate.map(playerId => {

        return patchData<Player, {teamId: string}>(`players/${playerId}`, {teamId: newTeamId})
    })
    await Promise.all(updatePromises)
}



           await queryClient.invalidateQueries({ queryKey: ["teams"] });
    await queryClient.invalidateQueries({ queryKey: ["players"] });

        }
    })
    return {mutate, error, isPending}
}