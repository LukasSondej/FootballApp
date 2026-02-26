
import type { NewPlayer } from "../../types"
import { useGetTeams } from "../../hooks/useGetTeams"


type PropsPlayer =  {
   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
values: NewPlayer;

}
export const FormPlayer = ({handleSubmit, handleChange, values}: PropsPlayer) =>{

 const { data: teams = []} = useGetTeams()

    return (
        <>
        <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={values.name} onChange={handleChange}></input>
    </div>
    <div>
        <label htmlFor="lastName">LastName</label>
        <input id="lastName" name="lastName" value={values.lastName} onChange={handleChange}></input>
    </div>
    <div>
        <label>Team:</label>
        <select  name="teamId" id="team" value={values.teamId ?? ""} onChange={handleChange}>
            <option value={""}>Brak druzyny</option>
{teams.map(el => (<option key={el.id} value={el.id}> {el.name}</option>))}

        </select>
    </div>
    <button type="submit" name="button" >Submit</button>
    </form>
        </>
    )
}