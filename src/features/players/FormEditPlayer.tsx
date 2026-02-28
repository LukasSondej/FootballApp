import { FormPlayer } from "./FormPlayer"
import type { Player} from "../../types"
import { useState } from "react"

import { useEditPlayerMutation } from "../../mutations/useEditPlayerMutation"
import type { OrderDataPlayer } from "./playerSchema"

type PropsPlayer =  {
    player: Player;
    onClose: () => void;
   
}
export const FormEditPlayer = ({player, onClose}: PropsPlayer) => {
 const {mutate }= useEditPlayerMutation();
const onSubmit = (data: OrderDataPlayer)=> {
    mutate({
       id: player.id,
       name: data.name,
       lastName: data.lastName,
       teamId: data.teamId 
    })
    onClose()

}
return (
    <FormPlayer  onSubmit={onSubmit} defaultValues={{name: player.name, lastName: player.lastName, teamId: player.teamId}}/>
    
)
}