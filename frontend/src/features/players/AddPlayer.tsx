import { useAddPlayerMutation } from "../../mutations/useAddPlayerMutation"
import useModalStore from "../../store/useModalStore";
import { useNotificationStore } from "../../store/useNotificationStore";
import { FormPlayer } from "./FormPlayer"
import type { OrderDataPlayer } from "./playerSchema";

export const AddPlayer = () => {
 const {mutate, error, isPending} = useAddPlayerMutation();
 const showNotification = useNotificationStore(state => state.showNotification)

const setIsAddingPlayer = useModalStore(state => state.setIsAddingPlayer)
 const onSubmit = (data: OrderDataPlayer) => {

mutate({
    name: data.name,
    lastName: data.lastName,
    teamId: data.teamId
},
{onSuccess: () => {
                setIsAddingPlayer(false); 
               
                showNotification("Player successfully added!"); 
            }}
)

    
 }

 return (

 
 <>
 <FormPlayer isLoading={isPending} onCancel={() => setIsAddingPlayer(false)} onSubmit={onSubmit}/>
 </>
 )

}