import { useAddTeamMutation } from "../../mutations/useAddTeamMutation"
import type { EditTeamPayload } from "../../types";
import { FormTeam } from "./FormTeam";

type Props = {
    handleVisible: () => void;
}

export const AddTeam = ({handleVisible}: Props) => {
const {mutate, error, isPending} = useAddTeamMutation();


const onSubmit = (data: EditTeamPayload) => {
    return mutate({
        name: data.name,
        yearEstablished: data.yearEstablished,
        location: data.location,
      playerIds: data.playerIds 
    },{
      onSuccess: () => handleVisible()
    })
}


return(
<FormTeam onSubmit={onSubmit} onCancel={handleVisible}/>
)

}