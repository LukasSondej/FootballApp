import { createFileRoute } from '@tanstack/react-router'
import { playersQueryOptions } from '../hooks/useGetPlayers'

export const Route = createFileRoute('/players')({
  component: RouteComponent,
  loader: async({context}) => {
    const {queryClient } =context
    return queryClient.ensureQueryData(playersQueryOptions)
  }
})

function RouteComponent() {
  return <div>Hello "/players"!</div>
}
