import { createLazyFileRoute } from '@tanstack/react-router'
import { ParentTeamsComp } from '../ParentTeamsComp'

export const Route = createLazyFileRoute('/teams')({
  component: ParentTeamsComp,
})

