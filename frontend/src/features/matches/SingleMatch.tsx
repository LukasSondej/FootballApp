import type { Match} from "../../types"
import useModalStore from "../../store/useModalStore";

type PropsMatch ={
    matchData: Match;
}

export const SingleMatch = ({matchData}: PropsMatch) => {
    const setIdEditMatch = useModalStore(state => state.setIdEditMatch)


    return(
        <div className="bg-white border border-gray-200 rounded shadow-sm p-4 flex flex-col gap-3 hover:border-gray-300 transition-colors">

            <div className="text-center">
                <h1 className="text-lg font-bold text-gray-600">{matchData.team1.name} vs {matchData.team2.name}</h1>
                <h2 className="text-3xl font-black text-gray-900 mt-1">
                    {matchData.team1Score} - {matchData.team2Score}
                </h2>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600 bg-gray-50 p-2 rounded">
                <span>⏱️ Duration: {matchData.duration} min</span>
                <span>📍 {matchData.place}, {matchData.date.split('T')[0]}</span>
            </div>

            <div className="flex justify-end mt-2">
                <button 
                    onClick={() => setIdEditMatch(matchData.id)}
                    className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-1 px-4 rounded text-sm transition-colors"
                >
                    Edit
                </button>
            </div>
        </div>
    )
}