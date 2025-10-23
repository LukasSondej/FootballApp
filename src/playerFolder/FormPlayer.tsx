import { useState } from "react"
import type { Player } from "../types"
import { useGetTeams } from "../hooks/useGetTeams"

type PropsPlayer =  {
    player: Player
   
}
export const FormPlayer = ({player}: PropsPlayer) =>{
    const[name,setName] = useState(player.name)
    const[lastName,setLastName] = useState(player.lastName)
    const [teamId, setTeamId] = useState<number | null>(player.teamId ?? null)
   const { data: teams = [], error, isLoading} = useGetTeams()
   


const handleTeam = (e: React.ChangeEvent<HTMLSelectElement>) => {
const v = e.target.value
setTeamId(v === ""? null : Number(v))
}
const handleName = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setName(e.target.value)
}
const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
}



   if(isLoading) return <p>Loading...</p>
   if(error) return <p>Blond</p>
    return (
        <>
    <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={name} onChange={handleName}></input>
    </div>
    <div>
        <label htmlFor="lastName">LastName</label>
        <input id="lastName" name="lastName" value={lastName} onChange={handleLastName}></input>
    </div>
    <div>
        <label>Team:</label>
        <select  name="selectTeam" id="team" value={teamId ?? ""} onChange={handleTeam}>
            <option value={""}>Brak druzyny</option>
{teams.map(el => (<option key={el.id} value={el.id}> {el.name}</option>))}

        </select>
    </div>
        </>
    )
}