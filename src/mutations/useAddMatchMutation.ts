import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi"
import type { Match, NewMatch } from "../types";

export const useAddMatchMutation =()=> {
    const queryClient = useQueryClient()
    const {postData} = useApi();
    const {mutate, isPending, error} = useMutation({
        mutationKey: ["matchAdd"],
        mutationFn: async(body: NewMatch) => {
        return postData<Match, NewMatch>("matches", body)
        },

        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ["matches"]})
        }
    })
    return {mutate, isPending, error}
}