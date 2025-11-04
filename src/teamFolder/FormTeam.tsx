import Select, { type MultiValue } from "react-select";
import { useGetPlayers } from "../hooks/useGetPlayers";
import type { NewTeam } from "../types";

type PropsPlayer =  {
   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
values: NewTeam;
handleCheckboxChange: (playersIDs: string[]) => void

}
type PlayerOption = {
    value: string,
    label: string
}
export const FormTeam = ({handleSubmit, handleChange, values, handleCheckboxChange}: PropsPlayer) =>{


 const { data: players = [], error, isLoading} = useGetPlayers();
 const options: PlayerOption[] = players.filter(el => el.teamId == null).map(player => ({value: player.id,
     label: `${player.name} ${player.lastName}`}));

 if(error) return( <p style={{color: "red"}}>Błąd</p>)
if(isLoading) return(<p> Loading...</p>)

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
defaultValue={options}
onChange={(selected)=> {
  const selectedIds = selected.map(el => el.value);
  handleCheckboxChange(selectedIds);
}}
value={options.filter(option => values.playersId.includes(option.value)
)}

/>
    </div>
    
    
    
    
   

    <button type="submit" name="button" >Submit</button>
    </form>
        </>
    )
}