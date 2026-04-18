import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiCall } from '../utils/apiCall'
import type { Player } from '../types'

export const useDeletePlayerMutation = () => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationKey: ['deletePlayer'],
    mutationFn: async (id: string) => apiCall<Player>(`players/${id}`, { method: 'DELETE' }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['players'] })
    },
  })
  return { mutate }
}
