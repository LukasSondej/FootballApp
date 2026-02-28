import { Link, createLazyFileRoute } from '@tanstack/react-router'
import { ParentMatchesComp } from '../features/matches/ParentMatchesComp'

export const Route = createLazyFileRoute('/')({
  component: ParentMatchesComp,
})


