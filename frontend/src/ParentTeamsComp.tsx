import { useState } from "react"

import { ListTeams } from "./features/teams/ListTeams"
import { EditTeam } from "./features/teams/EditTeam"
import { AddTeam } from "./features/teams/AddTeam"
import useModalStore from "./store/useModalStore"
import { useShallow } from "zustand/shallow"

export const ParentTeamsComp = () => {

const { idEditTeam, isAdding, setIsAdding } = useModalStore(
    useShallow((state) => ({
      idEditTeam: state.idEditTeam,
      isAdding: state.isAdding,
      setIsAdding: state.setIsAdding
    })))
if (idEditTeam) {
      return <EditTeam  idEditTeam={idEditTeam}/>
  }
  return (
      <div>
      
          
      {!isAdding && <button onClick={() => setIsAdding(true)}>Add Team</button>}
      {isAdding && <AddTeam handleVisible={() => setIsAdding(false)} />}
          
          <hr style={{ margin: "10px 0" }} />
          
          <ListTeams/>
      </div>
  )
}