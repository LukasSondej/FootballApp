import { AddMatch } from './features/matches/AddMatch'
import { ListMatches } from './features/matches/ListMatches'
import { StatsMatches } from './features/matches/StatsMatches'
import useModalStore from './store/useModalStore'
import { useShallow } from 'zustand/react/shallow'
import { EditMatch } from './features/matches/EditMatch'
import { Trophy } from 'lucide-react'
import { Suspense } from 'react'
import { LoadingSpinner } from './components/LoadingSpinner'

export const ParentMatchesComp = () => {
  const { isAddingMatch, toggleIsAddingMatch, idEditMatch } = useModalStore(
    useShallow((state) => ({
      isAddingMatch: state.isAddingMatch,
      toggleIsAddingMatch: state.toggleIsAddingMatch,
      idEditMatch: state.idEditMatch,
    })),
  )

  if (idEditMatch) {
    return <EditMatch matchId={idEditMatch} />
  }

  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col gap-6 mt-4">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <Trophy className="w-8 h-8 text-gray-600" />
          Matches
        </h1>

        {!isAddingMatch && (
          <button
            type="button"
            onClick={toggleIsAddingMatch}
            className="mt-4 sm:mt-0 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg shadow-sm transition-all cursor-pointer"
          >
            + Add Match
          </button>
        )}
      </div>
      {isAddingMatch && <AddMatch />}

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-2/3">
          <Suspense fallback={<LoadingSpinner message="Loading matches..." />}>
            <ListMatches />
          </Suspense>
        </div>
        <div className="w-full md:w-1/3">
          <Suspense
            fallback={
              <LoadingSpinner
                message="
Loading statistics..."
              />
            }
          >
            <StatsMatches />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
