import { useState } from "react"

import { ListTeams } from "./features/teams/ListTeams"
import { EditTeam } from "./features/teams/EditTeam"

export const ParentTeamsComp = () => {
  const [idEditTeam, setIdEditTeam] = useState<string | null>(null)
  
if (idEditTeam) {
      return <EditTeam  idEditTeam={idEditTeam} setIdEditTeam = {setIdEditTeam} />
  }
  return (
      <ListTeams setIdEditTeam={setIdEditTeam}/>
  )
}