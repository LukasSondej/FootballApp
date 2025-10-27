import { useDeletePlayerMutation } from "../mutations/useDeletePlayerMutation"
type PropsDel = {
    id: string;
}
export const DeletePlayer = ({id}: PropsDel) => {
const {mutate} = useDeletePlayerMutation(
)
const handleDeleteClick = (playerId: string) => {
    if (confirm("Na pewno usunąć?")) {
        mutate(playerId); 
    }}
return (
    <button onClick={()=>handleDeleteClick(id)}>Delete</button>
)
}