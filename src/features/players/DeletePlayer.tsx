import { useState } from "react";
import { useDeletePlayerMutation } from "../../mutations/useDeletePlayerMutation"
import { Notification } from "../../components/Notification";
type PropsDel = {
    id: string;
    teamId: string | null
}
export const DeletePlayer = ({id, teamId}: PropsDel) => {
    const [isNotification, setIsNotification] = useState(false);
const {mutate} = useDeletePlayerMutation()
const handleDeleteClick = (playerId: string, teamId: string | null) => {
    if(teamId != null){
        setIsNotification(true)
    }
    else if (confirm("Na pewno usunąć?")) {
        mutate(playerId); 
    }}
return (
    <>
     <button onClick={()=>handleDeleteClick(id, teamId)}>Delete</button>
    {isNotification && <Notification message="Zawodnik ma druzyne" onClose={() => setIsNotification(false)}/>}
    </>
   
)
}