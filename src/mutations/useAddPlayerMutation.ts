import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { NewPlayer, Player } from "../types"
import { apiCall } from "../utils/apiCall";

export const useAddPlayerMutation = () => {
     const queryClient = useQueryClient();
    const {mutate, error, isPending} = useMutation({
        mutationKey: ["addPlayer"],
        mutationFn: async(addedPlayer: NewPlayer) => 
           apiCall<Player, NewPlayer>("players", {method: "POST", body: addedPlayer}),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["players"]})
        }
    })
    return {mutate, error, isPending}
}