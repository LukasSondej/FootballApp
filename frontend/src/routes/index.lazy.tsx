import { Link, createLazyFileRoute } from '@tanstack/react-router'
import { ParentMatchesComp } from '../ParentMatchesComp'

export const Route = createLazyFileRoute('/')({
  component: ParentMatchesComp,
})


