import Select from "react-select";


import { useState } from "react";

import { Input } from "../../components/Input";
import { Controller, useForm } from "react-hook-form";

import { orderSchema} from "./teamsSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import type { EditTeamPayload, Player } from "../../types";
import { ConfirmDeletion } from "../../components/ConfirmDeletion";


type PropsPlayer =  {
   onSubmit: (data: EditTeamPayload) => void;
 idEditTeam?: string;
 allPlayers?: Player[]
handleDeleteTeam?: () => void;


}
type PlayerOption = {
    value: string,
    label: string
}
export const FormTeam = ({allPlayers= [],idEditTeam,handleDeleteTeam, onSubmit}: PropsPlayer) =>{

const [confirmedDeleleComp, isConfirmedDeleleComp] = useState<boolean>(false);
 const options: PlayerOption[] = allPlayers.filter(el => el.teamId == null || String(el.teamId) === String(idEditTeam)).map(player => ({value: player.id,
     label: `${player.name} ${player.lastName}`}));

const {register, handleSubmit, formState: {errors}, control} = useForm<EditTeamPayload>({
    resolver: yupResolver(orderSchema),
   
})
    return (
       
        <>
    
        <form onSubmit={handleSubmit(onSubmit)}>
            
  <Input label="Name" type="text" error={errors.name?.message} {...register("name")}/>
  <Input label="yearEstablished" type="number" error={errors.yearEstablished?.message} {...register("yearEstablished")}/>
  <Input label="location" type="text" error={errors.location?.message} {...register("location")}/>
    <div>

<Controller
name="playerIds"
control={control}
render={({ field: { onChange, value, ref } }) => (
<Select

isMulti
options={options}
hideSelectedOptions={true}
closeMenuOnSelect={false}
value={options.filter((c) => value?.includes(c.value))}
onChange={(selected)=> {
  const selectedIds = selected.map(el => el.value);
  onChange(selectedIds)
 
}}

/>
 )}
  />
  </div>
    <button type="submit" name="button" >Submit</button>
        {
            idEditTeam && <button type="button" name="button" onClick={() => isConfirmedDeleleComp(true)}>Delete</button>
           
}
    {
          confirmedDeleleComp && <ConfirmDeletion message="Do you want delete this team?" handleDeleteTeam={handleDeleteTeam} onClose={() =>isConfirmedDeleleComp(false)} />

            
}
   </form>
        </>
    )
}