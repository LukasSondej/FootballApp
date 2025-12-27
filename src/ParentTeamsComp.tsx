import { useState } from "react"

import { ListTeams } from "./teamFolder/ListTeams"
import { EditTeam } from "./teamFolder/EditTeam"

export const ParentTeamsComp = () => {
  const [idEditTeam, setIdEditTeam] = useState<string | null>(null)
  
if (idEditTeam) {
      return <EditTeam  idEditTeam={idEditTeam} setIdEditTeam = {setIdEditTeam} teamId={idEditTeam} />
  }

  return (
      <ListTeams setIdEditTeam={setIdEditTeam}/>
  )
}