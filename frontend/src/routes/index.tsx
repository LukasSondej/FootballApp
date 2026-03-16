import { createFileRoute } from '@tanstack/react-router'
import { matchesQueryOptions } from '../hooks/useGetMatches'

export const Route = createFileRoute('/')({
  loader: async({context}) => {
    const {queryClient} = context
    return queryClient.ensureQueryData(matchesQueryOptions)
  }
})


