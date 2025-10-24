import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { NewPlayer, Player } from "../types"
import { useApi } from "../hooks/useApi";

export const useEditPlayerMutation = (playerId: number) => {
    const queryClient = useQueryClient();
    const {patchData} = useApi()
    const {mutate, isPending, error} = useMutation({
        mutationKey: ["editPlayer", playerId],
        mutationFn: async(updatedPlayer: NewPlayer) => {
             
        return patchData<Player, NewPlayer>(`players/${playerId}`, updatedPlayer )
        },
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["players"]})
    })
    return {mutate, isPending, error}
}