import { useEffect, useState } from "react";
import { useGetSingleTeam } from "../../hooks/useGetSingleTeam"
import { useEditTeamMutation } from "../../mutations/useEditTeamMutation";
import { FormTeam } from "./FormTeam"; 
import type { NewTeam } from "../../types";
import { playersQueryOptions} from "../../hooks/useGetPlayers";
import { useEditPlayerMutation } from "../../mutations/useEditPlayerMutation";
import { useDeleteTeamMutation } from "../../mutations/useDeleteTeamMutation";
import { useSuspenseQuery } from "@tanstack/react-query";

type Props = {
  
      setIdEditTeam: (id: string | null) => void;
      idEditTeam: string;
  
}
export const EditTeam = ({setIdEditTeam,idEditTeam}: Props) => {
    const {data} = useGetSingleTeam(idEditTeam);
    const {data: allPlayers} = useSuspenseQuery(playersQueryOptions)
    const {mutateAsync: mutatePlayer} = useEditPlayerMutation()
    const {mutate} = useEditTeamMutation(idEditTeam)
    const {mutate: teamDelete} = useDeleteTeamMutation()
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
const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
const playersToDelete = allPlayers?.filter(el => (el.teamId == idEditTeam && !values.playersId.includes(el.id)))
const playersToAdd = allPlayers?.filter(el => values.playersId.includes(String(el.id)) && String(el.teamId) !== String(idEditTeam))
try{
    if (playersToDelete){
        await Promise.all(playersToDelete.map(player => mutatePlayer({...player, teamId: null})));
    }
 if (playersToAdd) {await Promise.all(playersToAdd.map(player => mutatePlayer({...player, teamId: String(idEditTeam)})))


 }

    mutate({
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
);
  
}catch(error) {
    console.error("Blond")
}
}
const handleCheckboxChange = (playerIDs: string[]) => {
setValues(prev => ({
    ...prev,
    playersId: playerIDs
}))
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
<FormTeam handleDeleteTeam={handleDeleteTeam} allPlayers={allPlayers} idEditTeam={idEditTeam} handleChange={handleChange} handleSubmit={handleSubmit} values={values} handleCheckboxChange={handleCheckboxChange}/>
)

}