import { useGetPlayers } from "../hooks/useGetPlayers";
import type { NewTeam } from "../types";

type PropsPlayer =  {
   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
values: NewTeam;


}
export const FormTeam = ({handleSubmit, handleChange, values}: PropsPlayer) =>{

 const { data: players = []} = useGetPlayers()

    return (
        <>
        <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={values.name} onChange={handleChange}></input>
    </div>
    <div>
        <label htmlFor="yearEstablished">yearEstablished</label>
        <input id="yearEstablished" name="yearEstablished" value={values.yearEstablished} onChange={handleChange}></input>
    </div>
    <div>
        <label htmlFor="location">location</label>
        <input id="location" name="location" value={values.location} onChange={handleChange}></input>
    </div>
   <div style={{ maxHeight: "200px", overflowY: "auto", border: "1px solid #ccc", padding: "8px" }}>

</div>

    <button type="submit" name="button" >Submit</button>
    </form>
        </>
    )
}