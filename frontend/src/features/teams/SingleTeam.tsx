import type { Team } from '../../types'
import useModalStore from '../../store/useModalStore'

type PropsTeam = {
  team: Team
}

export const SingleTeam = ({ team }: PropsTeam) => {
  const setIdEditTeam = useModalStore((state) => state.setIdEditTeam)

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-1 min-w-0">
        <p className="text-lg font-bold text-gray-900 mb-2 truncate">{team.name}</p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
          <span className="flex items-center gap-1">📍 {team.location}</span>
          <span className="flex items-center gap-1">📅 Year: {team.yearEstablished}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIdEditTeam(team.id)}
        className="shrink-0 w-full sm:w-auto bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100 font-medium py-1.5 px-4 rounded-md text-sm transition-colors"
      >
        Edit
      </button>
    </div>
  )
}
