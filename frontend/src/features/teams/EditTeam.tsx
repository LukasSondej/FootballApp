
import { useEditTeamMutation } from "../../mutations/useEditTeamMutation";
import { FormTeam } from "./FormTeam"; 
import { playersQueryOptions} from "../../hooks/useGetPlayers";
import { useDeleteTeamMutation } from "../../mutations/useDeleteTeamMutation";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { EditTeamPayload } from "../../types";
import useModalStore from "../../store/useModalStore";
import { useNotificationStore } from "../../store/useNotificationStore";
import { teamsQueryOptions } from "../../hooks/useGetTeams";
type Props = {
      idEditTeam: string;
  
}
export const EditTeam = ({idEditTeam}: Props) => {
    const showNotification = useNotificationStore(state => state.showNotification);
    const setIdEditTeam = useModalStore((state => state.setIdEditTeam))
    const {data: allPlayers} = useSuspenseQuery(playersQueryOptions)
    const {data: allTeams} = useSuspenseQuery(teamsQueryOptions)

    const {mutate} = useEditTeamMutation(idEditTeam)
    const {mutate: teamDelete} = useDeleteTeamMutation()

const teamToEdit  = allTeams.find(el => el.id === idEditTeam)
if (!teamToEdit) return <p>Team not found</p>;

const teamPlayerIds = allPlayers.filter(p => p.teamId === idEditTeam).map(el => el.id);
const defaultValues: Partial<EditTeamPayload> = {
    name: teamToEdit.name,
        yearEstablished: teamToEdit.yearEstablished,
        location: teamToEdit.location,
        playerIds: teamPlayerIds

}
const onSubmit = (data: EditTeamPayload) => {

    mutate({
        name: data.name,
        yearEstablished: data.yearEstablished,
        location: data.location,
      playerIds: data.playerIds

    }, {
         onSuccess: () => {
                setIdEditTeam(null);
                showNotification("Team details updated successfully!"); 
            }
            }
);
}



const handleDeleteTeam = () => {
      teamDelete(
        {teamId: idEditTeam},
        { 
        onSuccess: () => {
                    setIdEditTeam(null);
                    showNotification("Team successfully deleted!"); 
                }
    })
     
  
}
return(
<FormTeam defaultValues={defaultValues} handleDeleteTeam={handleDeleteTeam} allPlayers={allPlayers}  onSubmit={onSubmit} onCancel={() => setIdEditTeam(null)}/>
)

}