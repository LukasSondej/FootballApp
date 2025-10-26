import { FormPlayer } from "./FormPlayer"
import type { Player} from "../types"
import { useState } from "react"

import { useEditPlayerMutation } from "../mutations/useEditPlayerMutation"

type PropsPlayer =  {
    player: Player
   
}
export const FormEditPlayer = ({player}: PropsPlayer) => {
     console.log("typeof player.id:", typeof player.id)
    const [values, setValues] = useState({
        name: player.name,
        lastName: player.lastName,
        teamId: player.teamId
    }
    )
    

 const {mutate }= useEditPlayerMutation(player.id);

const handleChange= (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const {name,value} = e.target;
setValues(prev => ({
...prev,
[name]: name === "teamId" ? value ==="" ? null : Number(value) : value,

}))

}


const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    mutate({
       name: values.name,
       lastName: values.lastName,
       teamId: values.teamId
    })

}


  
return (
    
    <FormPlayer handleChange={handleChange} handleSubmit={handleSubmit} values={values} />
    
    
  
)
}