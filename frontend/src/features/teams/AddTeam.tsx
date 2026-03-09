import { useAddTeamMutation } from "../../mutations/useAddTeamMutation"
import type { EditTeamPayload } from "../../types";
import { FormTeam } from "./FormTeam";


export const AddTeam = () => {
const {mutate, error, isPending} = useAddTeamMutation();


const onSubmit = (data: EditTeamPayload) => {
    return mutate({
        name: data.name,
        yearEstablished: data.yearEstablished,
        location: data.location,
      playerIds: data.playerIds 
    })
}


return(
<FormTeam onSubmit={onSubmit}/>
)

}