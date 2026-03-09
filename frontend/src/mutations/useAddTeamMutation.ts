import { useMutation, useQueryClient } from "@tanstack/react-query";
import {  type EditTeamPayload, type Team} from "../types";
import { apiCall } from "../utils/apiCall";


export const useAddTeamMutation = () => {
    const queryClient = useQueryClient()
    const {mutate, error, isPending} = useMutation({
        mutationKey: ["addTeam"],
        mutationFn: async(addedTeam: EditTeamPayload)=> apiCall<Team, EditTeamPayload>(`teams`, {method: "POST", body: addedTeam}),
        
        onSuccess: async() => {
           await queryClient.invalidateQueries({ queryKey: ["teams"] });
           await queryClient.invalidateQueries({ queryKey: ["players"] });

        }
    })
    return {mutate, error, isPending}
}