import { useAddPlayerMutation } from "../../mutations/useAddPlayerMutation"
import useModalStore from "../../store/useModalStore";
import { FormPlayer } from "./FormPlayer"
import type { OrderDataPlayer } from "./playerSchema";

export const AddPlayer = () => {
 const {mutate, error, isPending} = useAddPlayerMutation();

const setIsAddingPlayer = useModalStore(state => state.setIsAddingPlayer)
 const onSubmit = (data: OrderDataPlayer) => {

mutate({
    name: data.name,
    lastName: data.lastName,
    teamId: data.teamId
},
{onSuccess: () => setIsAddingPlayer(false)}
)

    
 }

 return (

 
 <>
 <FormPlayer onCancel={() => setIsAddingPlayer(false)} onSubmit={onSubmit}/>
 </>
 )

}