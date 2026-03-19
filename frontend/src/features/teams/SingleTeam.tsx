// ZMIANA: Usunięto import styled-components, ponieważ przechodzimy w 100% na Tailwind CSS.
import type { Team } from "../../types"
import useModalStore from "../../store/useModalStore";

type PropsTeam =  {
    team: Team
}

export const SingleTeam = ({team}: PropsTeam) => {
    const setIdEditTeam = useModalStore((state) => state.setIdEditTeam)
    
    return (
    
        <div className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow"> 
           
            <p className="text-lg font-semibold text-gray-800">
               {team.name} 
            </p>

            <button 
                type="button" 
                onClick={() => setIdEditTeam(team.id)}
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-1 px-4 rounded text-sm transition-colors"
            >
                Edit
            </button>
        </div>
    )
}