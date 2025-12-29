import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../hooks/useApi";
import type { Match, NewMatch } from "../types";

export const useEditMatchMutation = () => {
    const queryClient = useQueryClient()
    const {patchData} = useApi()
    const {mutate, isPending, error} = useMutation({
mutationKey: ["editMatch"],
mutationFn: async(updatedMatch: Match) => {
return patchData<Match, Match>(`matches/${updatedMatch.id}`, updatedMatch)

 
},
onSuccess: () => {
queryClient.invalidateQueries({queryKey: ["matches"]})
}
    });
    return {mutate, isPending, error}
    }
