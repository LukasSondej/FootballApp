import type { Match} from "../../types"
import useModalStore from "../../store/useModalStore";

type PropsMatch ={
    matchData: Match;
}

export const SingleMatch = ({matchData}: PropsMatch) => {
    const setIdEditMatch = useModalStore(state => state.setIdEditMatch)


    return(
       <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 flex flex-col gap-4 hover:shadow-md transition-shadow">

            <div className="text-center">
                <h1 className="text-lg font-bold text-gray-700 leading-tight">
                    {matchData.team1.name} <span className="text-gray-400 font-normal mx-1">vs</span> {matchData.team2.name}
                </h1>
                <h2 className="text-3xl font-black text-gray-900 mt-2 tracking-tight">
                    {matchData.team1Score} <span className="text-gray-300 mx-1">-</span> {matchData.team2Score}
                </h2>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 justify-between items-center text-sm text-gray-600 bg-gray-50 p-3 rounded-md border border-gray-100">
                <span className="flex items-center gap-1 font-medium">
                    ⏱️ Time: {matchData.duration} min
                </span>
                <span className="flex items-center gap-1 text-center sm:text-right">
                    📍 {matchData.place}, {matchData.date.split('T')[0]}
                </span>
            </div>

            <div className="flex justify-end mt-1">
                <button 
                    onClick={() => setIdEditMatch(matchData.id)}
                    className="w-full sm:w-auto shrink-0 bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100 font-medium py-1.5 px-5 rounded-md text-sm transition-colors"
                >
                    Edit
                </button>
            </div>
        </div>
    )
}