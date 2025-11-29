import { useEffect, useState } from "react";
import { useGetSingleTeam } from "../hooks/useGetSingleTeam"
import { useEditTeamMutation } from "../mutations/useEditTeamMutation";
import { FormTeam } from "./FormTeam"; 
import type { NewTeam } from "../types";

type Props = {
    teamId: string
}
export const EditTeam = ({teamId}: Props) => {
    const {data} = useGetSingleTeam(teamId);
    const {mutate} = useEditTeamMutation(teamId)
    const [values, setValues] = useState<NewTeam>({
        name: "",
        yearEstablished: 0,
    
        location: "",
    playersId: []
    })
    useEffect(()=> {
        if(data){
            setValues({
                name: data.name,
                yearEstablished: data.yearEstablished,
                location: data.location,
                playersId: data.playersId || [] 

        })
        }

    },[data])
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

    })
}
const handleCheckboxChange = (playerIDs: string[]) => {
setValues(prev => ({
    ...prev,
    playersId: playerIDs
}))
}
return(
<FormTeam handleChange={handleChange} handleSubmit={handleSubmit} values={values} handleCheckboxChange={handleCheckboxChange}/>
)

}