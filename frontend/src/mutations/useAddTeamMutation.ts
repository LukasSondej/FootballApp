import { useMutation, useQueryClient } from '@tanstack/react-query'
import { type EditTeamPayload, type Team } from '../types'
import { apiCall } from '../utils/apiCall'
import toast from 'react-hot-toast'

export const useAddTeamMutation = () => {
  const queryClient = useQueryClient()
  const { mutate, error, isPending } = useMutation({
    mutationKey: ['addTeam'],
    mutationFn: async (addedTeam: EditTeamPayload) =>
      apiCall<Team, EditTeamPayload>(`teams`, { method: 'POST', body: addedTeam }),

    onSuccess: async () => {
      toast.success('Team added successfully!')
      await queryClient.invalidateQueries({ queryKey: ['teams'] })
      await queryClient.invalidateQueries({ queryKey: ['players'] })
    },
    onError: () => {
      toast.error('Failed to add team. Please try again.')
    },
  })
  return { mutate, error, isPending }
}
