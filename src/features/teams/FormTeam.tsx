import Select, { type MultiValue } from "react-select";

import type { NewTeam, Player } from "../../types";
import { useState } from "react";
import { ConfirmDeletion } from "../../components/ConfirmDeletion";

type PropsPlayer =  {
   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
values: NewTeam;
handleCheckboxChange: (playersIDs: string[]) => void
 idEditTeam?: string;
 allPlayers?: Player[]
handleDeleteTeam?: () => void;
}
type PlayerOption = {
    value: string,
    label: string
}
export const FormTeam = ({allPlayers= [],idEditTeam, handleSubmit, handleChange, values, handleCheckboxChange,handleDeleteTeam}: PropsPlayer) =>{


const [confirmedDeleleComp, isConfirmedDeleleComp] = useState<boolean>(false);
 const options: PlayerOption[] = allPlayers.filter(el => el.teamId == null || String(el.teamId) === String(idEditTeam)).map(player => ({value: player.id,
     label: `${player.name} ${player.lastName}`}));


    return (
       
        <>
    
        <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={values.name} onChange={handleChange}></input>
    </div>
    <div>
        <label htmlFor="yearEstablished">yearEstablished</label>
        <input id="yearEstablished" name="yearEstablished" type="number" value={values.yearEstablished} onChange={handleChange}></input>
    </div>
    <div>
        <label htmlFor="location">location</label>
        <input id="location" name="location" value={values.location} onChange={handleChange}></input>
    </div>
    <div>
<Select
isMulti
options={options}
hideSelectedOptions={true}
closeMenuOnSelect={false}

onChange={(selected)=> {
  const selectedIds = selected.map(el => el.value);
  handleCheckboxChange(selectedIds);
}}
value={options.filter(option => 
   
    values.playersId.map(String).includes(String(option.value))
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