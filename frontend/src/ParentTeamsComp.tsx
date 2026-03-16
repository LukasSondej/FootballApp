import { ListTeams } from "./features/teams/ListTeams"
import { EditTeam } from "./features/teams/EditTeam"
import { AddTeam } from "./features/teams/AddTeam"
import useModalStore from "./store/useModalStore"
import { useShallow } from "zustand/react/shallow"


export const ParentTeamsComp = () => {

const { idEditTeam, isAddingTeam, setIsAddingTeam } = useModalStore(
    useShallow((state) => ({
      idEditTeam: state.idEditTeam,
      isAddingTeam: state.isAddingTeam,
      setIsAddingTeam: state.setIsAddingTeam
    })))
if (idEditTeam) {
      return <EditTeam  idEditTeam={idEditTeam}/>
  }
  return (
      <div>
      
          
      {!isAddingTeam && <button onClick={() => setIsAddingTeam(true)}>Add Team</button>}
      {isAddingTeam && <AddTeam/>}
          
          <hr style={{ margin: "10px 0" }} />
        
          <ListTeams/>
      </div>
  )
}