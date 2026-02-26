import { createLazyFileRoute } from '@tanstack/react-router'
import { ParentPlayerComp } from '../ParentPlayerComp'

export const Route = createLazyFileRoute('/players')({
  component: ParentPlayerComp,
})

