import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { NewPlayer, Player } from "../types"
import { useApi } from "../hooks/useApi";

export const useEditPlayerMutation = () => {
    const queryClient = useQueryClient();
    const {patchData} = useApi()
    const {mutate,mutateAsync, isPending, error} = useMutation({
        mutationKey: ["editPlayer"],
        mutationFn: async(updatedPlayer: Player) => {
             
        return patchData<Player, Player>(`players/${updatedPlayer.id}`, updatedPlayer )
        },
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["players"]})
    })
    return {mutate, isPending, error, mutateAsync}
}