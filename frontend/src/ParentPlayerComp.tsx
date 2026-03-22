import { ListPlayers } from "./features/players/ListPlayers"
import { AddPlayer } from "./features/players/AddPlayer"
import useModalStore from "./store/useModalStore"
import { useShallow } from "zustand/react/shallow"
import { EditPlayer } from "./features/players/EditPlayer"
import { Users } from "lucide-react"

export const ParentPlayerComp = () => {
   const { idEditPlayer, isAddingPlayer, toggleIsAddingPlayer } = useModalStore(
        useShallow((state) => ({
            idEditPlayer: state.idEditPlayer,
            isAddingPlayer: state.isAddingPlayer,
            toggleIsAddingPlayer: state.toggleIsAddingPlayer
        }))
    )
    if(idEditPlayer){
        return <EditPlayer id={idEditPlayer}/>
    }

    return (
        <div className="max-w-4xl mx-auto p-4 flex flex-col gap-6 mt-4">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                    <Users className="w-8 h-8 text-gray-600" />
                    Players
                </h1>

                {!isAddingPlayer && (
                    <button onClick={toggleIsAddingPlayer} className="mt-4 sm:mt-0 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg shadow-sm transition-all cursor-pointer">
                        + Add Player
                    </button>
                )}
            </div>
            {isAddingPlayer && <AddPlayer/>}
            <ListPlayers/>
        </div>
    )
}