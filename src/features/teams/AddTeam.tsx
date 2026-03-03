import { useAddTeamMutation } from "../../mutations/useAddTeamMutation"
import { FormTeam } from "./FormTeam";
import type { OrderDataTeams } from "./teamsSchema";

export const AddTeam = () => {
const {mutate, error, isPending} = useAddTeamMutation();


const onSubmit = (data: OrderDataTeams) => {
    return mutate({
        name: data.name,
        yearEstablished: data.yearEstablished,
        location: data.location,
      playersId: data.playersId 
    })
}


return(
<FormTeam onSubmit={onSubmit}/>
)

}