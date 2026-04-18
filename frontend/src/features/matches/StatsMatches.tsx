import { useSuspenseQuery } from '@tanstack/react-query'
import { matchesQueryOptions } from '../../hooks/useGetMatches'
import { SingleMatch } from './SingleMatch'
import { teamsQueryOptions } from '../../hooks/useGetTeams'

export const StatsMatches = () => {
  const { data: matches } = useSuspenseQuery(matchesQueryOptions)
  const { data: teams } = useSuspenseQuery(teamsQueryOptions)

  const sortedMatches = [...matches].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
  const lastMatch = sortedMatches[0]

  const teamStats = teams.map((team) => {
    return { id: team.id, name: team.name, goals: 0 }
  })

  matches.forEach((match) => {
    const team1 = teamStats.find((t) => t.id === match.team1Id)
    if (team1) team1.goals += match.team1Score
    const team2 = teamStats.find((t) => t.id === match.team2Id)
    if (team2) team2.goals += match.team2Score
  })

  teamStats.sort((a, b) => b.goals - a.goals)
  const top3Teams = teamStats.slice(0, 3)

  return (
    <div className="flex flex-col gap-4">
      <div className="border border-gray-200 p-4 bg-white rounded-lg shadow-sm">
        <h2 className="text-lg font-bold mb-3 text-gray-800">Last Match</h2>
        {lastMatch ? (
          <SingleMatch matchData={lastMatch} allTeams={teams} />
        ) : (
          <p className="text-gray-500 italic text-sm">No matches yet.</p>
        )}
      </div>
      <div className="border border-gray-200 p-4 bg-white rounded-lg shadow-sm">
        <h2 className="text-lg font-bold mb-3 text-gray-800">Top 3 Scoring Teams</h2>
        <ul className="flex flex-col gap-1">
          {top3Teams.map((team, index) =>
            team.goals > 0 ? (
              <li
                key={team.id}
                className="flex justify-between items-center border-b border-gray-100 py-2 text-sm last:border-0"
              >
                <span className="text-gray-700">
                  <span className="font-bold text-gray-900 mr-2">{index + 1}.</span>
                  {team.name}
                </span>
                <span className="bg-gray-100 text-gray-800 font-bold px-2 py-1 rounded text-xs">
                  {team.goals} goals
                </span>
              </li>
            ) : null,
          )}
        </ul>
      </div>
    </div>
  )
}
