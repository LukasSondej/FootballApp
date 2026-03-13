
import { useEditTeamMutation } from "../../mutations/useEditTeamMutation";
import { FormTeam } from "./FormTeam"; 
import { playersQueryOptions} from "../../hooks/useGetPlayers";
import { useDeleteTeamMutation } from "../../mutations/useDeleteTeamMutation";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { EditTeamPayload } from "../../types";

type Props = {
  
      setIdEditTeam: (id: string | null) => void;
      idEditTeam: string;
  
}
export const EditTeam = ({setIdEditTeam,idEditTeam}: Props) => {
    const {data: allPlayers} = useSuspenseQuery(playersQueryOptions)
    const {mutate} = useEditTeamMutation(idEditTeam)
    const {mutate: teamDelete} = useDeleteTeamMutation()

const onSubmit = (data: EditTeamPayload) => {

    mutate({
        name: data.name,
        yearEstablished: data.yearEstablished,
        location: data.location,
      playerIds: data.playerIds

    }, {
         onSuccess: () => {
                setIdEditTeam(null);
        
       }
            }

);
}



const handleDeleteTeam = () => {
      teamDelete(
        {teamId: idEditTeam},
        { 
         onSuccess: () => {
     
            setIdEditTeam(null)
        }
    })
     
  
}
return(
<FormTeam handleDeleteTeam={handleDeleteTeam} allPlayers={allPlayers}  onSubmit={onSubmit} onCancel={() => setIdEditTeam(null)}/>
)

}