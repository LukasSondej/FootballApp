import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Match, NewMatch } from "../types";
import { apiCall } from "../utils/apiCall";

export const useEditMatchMutation = () => {
    const queryClient = useQueryClient()
    const {mutate, isPending, error} = useMutation({
mutationKey: ["editMatch"],
mutationFn: async(updatedMatch: Match) =>apiCall<Match, Match>(`matches/${updatedMatch.id}`, {method: "PATCH", body: updatedMatch}),
onSuccess: () => {
queryClient.invalidateQueries({queryKey: ["matches"]})
}
    });
    return {mutate, isPending, error}
    }
