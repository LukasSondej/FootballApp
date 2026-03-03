
import { useEditTeamMutation } from "../../mutations/useEditTeamMutation";
import { FormTeam } from "./FormTeam"; 
import { playersQueryOptions} from "../../hooks/useGetPlayers";
import { useEditPlayerMutation } from "../../mutations/useEditPlayerMutation";
import { useDeleteTeamMutation } from "../../mutations/useDeleteTeamMutation";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { OrderDataTeams } from "./teamsSchema";

type Props = {
  
      setIdEditTeam: (id: string | null) => void;
      idEditTeam: string;
  
}
export const EditTeam = ({setIdEditTeam,idEditTeam}: Props) => {
    const {data: allPlayers} = useSuspenseQuery(playersQueryOptions)
    const {mutateAsync: mutatePlayer} = useEditPlayerMutation()
    const {mutate} = useEditTeamMutation(idEditTeam)
    const {mutate: teamDelete} = useDeleteTeamMutation()

const onSubmit = async(data: OrderDataTeams) => {

const playersToDelete = allPlayers?.filter(el => (el.teamId == idEditTeam && !data.playersId.includes(el.id)))
const playersToAdd = allPlayers?.filter(el => data.playersId.includes(String(el.id)) && String(el.teamId) !== String(idEditTeam))
try{
    if (playersToDelete){
        await Promise.all(playersToDelete.map(player => mutatePlayer({...player, teamId: null})));
    }
 if (playersToAdd) {await Promise.all(playersToAdd.map(player => mutatePlayer({...player, teamId: String(idEditTeam)})))


 }

    mutate({
        name: data.name,
        yearEstablished: data.yearEstablished,
        location: data.location,
      playersId: data.playersId 

    },

    {
        onSuccess: () => {
     
            setIdEditTeam(null)
        }
    }
);
  
}catch(error) {
    console.error("Blond")
}

}
const handleDeleteTeam = () => {
    
             const playersDelete = allPlayers?.filter(el => (el.teamId == idEditTeam)).map(el => el.id) || []
      teamDelete(
        {teamId: idEditTeam, playersIds: playersDelete},
        { 
         onSuccess: () => {
     
            setIdEditTeam(null)
        }
    })
     
  
}
return(
<FormTeam handleDeleteTeam={handleDeleteTeam} allPlayers={allPlayers} idEditTeam={idEditTeam}  onSubmit={onSubmit}/>
)

}