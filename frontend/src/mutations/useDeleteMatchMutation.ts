import type { Match, NewMatch } from '@/types'
import { apiCall } from '@/utils/apiCall'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteMatchMutation = () => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationKey: ['matchDelete'],
    mutationFn: async (id: string) => await apiCall<Match>(`matches/${id}`, { method: 'DELETE' }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['matches'] }),
  })
  return { mutate }
}
