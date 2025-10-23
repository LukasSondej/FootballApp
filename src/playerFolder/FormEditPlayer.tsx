import { FormPlayer } from "./FormPlayer"
import type { Player, Team } from "../types"

type PropsPlayer =  {
    player: Player
   
}
export const FormEditPlayer = ({player}: PropsPlayer) => {
    

return (
    <>
    <FormPlayer player={player}/>
    
    
    </>
)
}