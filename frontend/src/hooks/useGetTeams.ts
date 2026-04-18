import { apiCall } from '../utils/apiCall'
import type { Team } from '../types'

export const teamsQueryOptions = {
  queryKey: ['teams'],
  queryFn: async () => {
    return apiCall<Team[]>('teams', { method: 'GET' })
  },
}
