
import { useGetPlayers } from "../hooks/useGetPlayers";
import type { NewTeam } from "../types";

type PropsPlayer =  {
   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
values: NewTeam;
handleCheckbox: (playerId: string, checked: boolean) => void

}
export const FormTeam = ({handleSubmit, handleChange, values, handleCheckbox}: PropsPlayer) =>{

 const { data: players = [], error, isLoading} = useGetPlayers()

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
{
    players.filter(el => el.teamId == null)
    .map(player=> <label key={player.id}><input type="checkbox" checked={values.playersId.includes(player.id)} onChange={(e) => handleCheckbox(player.id, e.target.checked)}/>{player.name} {player.lastName}</label>)
}


</div>
    <button type="submit" name="button" >Submit</button>
    </form>
        </>
    )
}