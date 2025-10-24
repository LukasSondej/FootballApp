import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { NewPlayer, Player } from "../types"
import { useApi } from "../hooks/useApi";

export const useEditPlayerMutation = () => {
    const queryClient = useQueryClient();
    const {patchData} = useApi()
    const {mutate, isPending, error} = useMutation({
        mutationKey: ["editPlayer"],
        mutationFn: async(updatedPlayer: Player) => {
              const { id, ...body } = updatedPlayer
        return patchData<Player, Partial<Player>>(`players/${updatedPlayer.id}`, body)
        },
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["players"]})
    })
    return {mutate, isPending, error}
}