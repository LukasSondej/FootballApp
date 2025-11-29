import { useEffect, useState } from "react";
import { useGetSingleTeam } from "../hooks/useGetSingleTeam"
import { useEditTeamMutation } from "../mutations/useEditTeamMutation";
import { FormTeam } from "./FormTeam"; 
import type { NewTeam } from "../types";
import { useGetPlayers } from "../hooks/useGetPlayers";

type Props = {
    teamId: string,
      setIdEditTeam: (id: string | null) => void;
      idEditTeam: string;
  
}
export const EditTeam = ({setIdEditTeam,idEditTeam}: Props) => {
    const {data} = useGetSingleTeam(idEditTeam);
    const {data: allPlayers} = useGetPlayers()
    const {mutate} = useEditTeamMutation(idEditTeam)
    const [values, setValues] = useState<NewTeam>({
        name: "",
        yearEstablished: 0,
    
        location: "",
    playersId: []
    })



    useEffect(()=> {
        if(data && allPlayers){
            setValues({
                name: data.name,
                yearEstablished: data.yearEstablished,
                location: data.location,
                playersId: allPlayers.filter(player => String(player.teamId) === String(idEditTeam)).map(el => el.id)

        })
        }

    },[data, allPlayers])
    
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
const {name, type, value} = e.target;
setValues(prev => ({
    ...prev, 
    [name]: name === "yearEstablished" ? Number(value) : value
}))
}
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    return mutate({
        name: values.name,
        yearEstablished: values.yearEstablished,
        location: values.location,
      playersId: values.playersId 

    },
    {
        onSuccess: () => {
            setIdEditTeam(null)
        }
    }
)
  
}
const handleCheckboxChange = (playerIDs: string[]) => {
setValues(prev => ({
    ...prev,
    playersId: playerIDs
}))
}
return(
<FormTeam allPlayers={allPlayers} idEditTeam={idEditTeam} handleChange={handleChange} handleSubmit={handleSubmit} values={values} handleCheckboxChange={handleCheckboxChange}/>
)

}