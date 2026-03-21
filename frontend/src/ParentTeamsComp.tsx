import { ListTeams } from "./features/teams/ListTeams"
import { EditTeam } from "./features/teams/EditTeam"
import { AddTeam } from "./features/teams/AddTeam"
import useModalStore from "./store/useModalStore"
import { useShallow } from "zustand/react/shallow"
import { Shield } from "lucide-react"

export const ParentTeamsComp = () => {
    const { idEditTeam, isAddingTeam, setIsAddingTeam } = useModalStore(
        useShallow((state) => ({
          idEditTeam: state.idEditTeam,
          isAddingTeam: state.isAddingTeam,
          setIsAddingTeam: state.setIsAddingTeam
        }))
    )

    if (idEditTeam) {
        return <EditTeam idEditTeam={idEditTeam} />
    }

    return (
        <div className="max-w-4xl mx-auto p-4 flex flex-col gap-6 mt-4">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-gray-600" />
                    Teams
                </h1>

                {!isAddingTeam && (
                    <button 
                        onClick={() => setIsAddingTeam(true)} 
                        className="mt-4 sm:mt-0 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg shadow-sm transition-all"
                    >
                        + Add Team
                    </button>
                )}
            </div>
            {isAddingTeam && <AddTeam/>}
            <ListTeams/>
        </div>
    )
}