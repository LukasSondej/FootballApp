import { useMutation, useQueryClient } from "@tanstack/react-query"

import type { Match, NewMatch } from "../types";
import { apiCall } from "../utils/apiCall";

export const useAddMatchMutation =()=> {
    const queryClient = useQueryClient()
    const {mutate, isPending, error} = useMutation({
        mutationKey: ["matchAdd"],
        mutationFn: async(body: NewMatch) => apiCall<Match, NewMatch>("matches", {method: 'POST', body: body}),

        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ["matches"]})
        }
    })
    return {mutate, isPending, error}
}