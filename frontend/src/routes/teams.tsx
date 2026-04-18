import { createFileRoute } from '@tanstack/react-router'
import { teamsQueryOptions } from '../hooks/useGetTeams'

export const Route = createFileRoute('/teams')({
  loader: async ({ context }) => {
    const { queryClient } = context
    return queryClient.ensureQueryData(teamsQueryOptions)
  },
})
