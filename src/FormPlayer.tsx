import { useState } from "react"
import type { Player } from "./types"

type PropsPlayer =  {
    player: Player
}
export const FormPlayer = ({player}: PropsPlayer) =>{
    const[name,setName] = useState(player.name)
    const[lastName,setLastName] = useState(player.lastName)
    
    return (
        <>
    <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" ></input>
    </div>
    <div>
        <label htmlFor="lastName">Name</label>
        <input id="lastName" name="lastName" ></input>
    </div>
        </>
    )
}