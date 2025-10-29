import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi"
import type { NewTeam, Team} from "../types";

export const useAddTeamMutation = () => {
    const {postData} = useApi();
    const queryClient = useQueryClient()
    const {mutate, error, isPending} = useMutation({
        mutationKey: ["addTeam"],
        mutationFn: async(addedTeam: NewTeam)=> {
            return postData<Team, NewTeam>(`teams`, addedTeam);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["teams"]})
        }
    })
    return {mutate, error, isPending}
}