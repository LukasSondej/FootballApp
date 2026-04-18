import { createFileRoute } from '@tanstack/react-router'
import { playersQueryOptions } from '../hooks/useGetPlayers'

export const Route = createFileRoute('/players')({
  loader: async ({ context }) => {
    const { queryClient } = context
    return queryClient.ensureQueryData(playersQueryOptions)
  },
})
