import { useState } from "react"
import { useAddPlayerMutation } from "../../mutations/useAddPlayerMutation"
import { FormPlayer } from "./FormPlayer"
import type { OrderDataPlayer } from "./playerSchema";

export const AddPlayer = () => {
 const {mutate, error, isPending} = useAddPlayerMutation();
 const [isAddForm, setIsAddForm] = useState(false)

 const onSubmit = (data: OrderDataPlayer) => {

mutate({
    name: data.name,
    lastName: data.lastName,
    teamId: data.teamId
}
)

      setIsAddForm(false)
 }
const handleVisible = () => {
    setIsAddForm(prev => !prev)
}
 return (

 
 <>
 {isAddForm && <FormPlayer  onSubmit={onSubmit}/>}
   
<button type="button" onClick={handleVisible}>{isAddForm ? "Cancel" : "Add player" }</button>
 </>
 )

}