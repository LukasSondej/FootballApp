import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { NewPlayer, Player } from '../types'
import { apiCall } from '../utils/apiCall'

export const useEditPlayerMutation = () => {
  const queryClient = useQueryClient()
  const { mutate, mutateAsync, isPending, error } = useMutation({
    mutationKey: ['editPlayer'],
    mutationFn: async (updatedPlayer: Player) =>
      apiCall<Player, Player>(`players/${updatedPlayer.id}`, {
        method: 'PATCH',
        body: updatedPlayer,
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['players'] }),
  })
  return { mutate, isPending, error, mutateAsync }
}
