import { createFileRoute } from '@tanstack/react-router'
import { matchesQueryOptions } from '../hooks/useGetMatches'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  loader: async({context}) => {
    const {queryClient} = context
    return queryClient.ensureQueryData(matchesQueryOptions)
  }
})

function RouteComponent() {
  return <div>Hello "/"!</div>
}
