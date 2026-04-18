import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Team } from '../types'
import { apiCall } from '../utils/apiCall'
import { useNotificationStore } from '@/store/useNotificationStore'

type DeleteTeamPayload = {
  teamId: string
}
export const useDeleteTeamMutation = () => {
  const queryClient = useQueryClient()
  const showNotification = useNotificationStore((state) => state.showNotification)
  const { mutate, error, isPending } = useMutation({
    mutationKey: ['deleteTeam'],
    mutationFn: async ({ teamId }: DeleteTeamPayload) => {
      return apiCall<Team>(`teams/${teamId}`, { method: 'DELETE' })
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['teams'] })
      showNotification('Team deleted successfully!')
    },
    onError: (error) => {
      showNotification(
        'You cannot delete this team because it has played matches. Please delete its matches first.',
      )
    },
  })
  return { mutate, error, isPending }
}
