import { useState } from "react"

import { ListTeams } from "./features/teams/ListTeams"
import { EditTeam } from "./features/teams/EditTeam"
import { AddTeam } from "./features/teams/AddTeam"

export const ParentTeamsComp = () => {
  const [idEditTeam, setIdEditTeam] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)
if (idEditTeam) {
      return <EditTeam  idEditTeam={idEditTeam} setIdEditTeam = {setIdEditTeam} />
  }
  return (
      <div>
      
          
      {!isAdding && <button onClick={() => setIsAdding(true)}>Add Team</button>}
      {isAdding && <AddTeam handleVisible={() => setIsAdding(false)} />}
          
          <hr style={{ margin: "10px 0" }} />
          
          <ListTeams setIdEditTeam={setIdEditTeam}/>
      </div>
  )
}