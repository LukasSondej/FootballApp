import { useDeletePlayerMutation } from "../../mutations/useDeletePlayerMutation"
import { useNotificationStore } from "../../store/useNotificationStore";

type PropsDel = {
    id: string;
    teamId: string | null
}
export const DeletePlayer = ({id, teamId}: PropsDel) => {
    
const {mutate} = useDeletePlayerMutation()
const showNotification = useNotificationStore(state => state.showNotification);
const handleDelete = (playerId: string, teamId: string | null) => {
    if(teamId != null){
      showNotification("You must first delete a player from the team to remove them from the database");
    }
    else if (confirm("Are you sure to delete it?")) {
      mutate(id, {
                onSuccess: () => {
                    showNotification("The player has been permanently removed!");
                }
            });
    }}
return (
    <>
     <button onClick={()=>handleDelete(id, teamId)}>Delete</button>
    
    </>
   
)
}