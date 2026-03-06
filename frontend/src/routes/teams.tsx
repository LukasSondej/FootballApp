import { createFileRoute } from '@tanstack/react-router'
import { teamsQueryOptions } from '../hooks/useGetTeams'

export const Route = createFileRoute('/teams')({
  component: RouteComponent,
  loader: async({context}) => {
    const {queryClient} = context
    return queryClient.ensureQueryData(teamsQueryOptions)
  }
})

function RouteComponent() {
  return <div>Hello "/teams"!</div>
}
