import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { NewPlayer, Player } from "../types"
import { useApi } from "../hooks/useApi"

export const useAddPlayerMutation = () => {
     const queryClient = useQueryClient();
    const {postData} = useApi();
    const {mutate, error, isPending} = useMutation({
        mutationKey: ["addPlayer"],
        mutationFn: async(addedPlayer: NewPlayer) => {
            return postData<Player, NewPlayer>(`players`, addedPlayer)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["players"]})
        }
    })
    return {mutate, error, isPending}
}