import { useState } from "react"
import type { Match, NewMatch, Team } from "../../types"

type PropsMatch = {
  values: NewMatch;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>)=> void
teams: Team[]
 handleVisible: () => void
}
export const FormMatch = ({values, handleChange, onSubmit, teams, handleVisible}: PropsMatch) => {
return (
<form onSubmit={onSubmit}>
<div>
<label htmlFor="date">Date</label>
<input type="date" name="date" id="date" value={values.date} onChange={handleChange}/>

</div>

<div>
<label htmlFor="place">Place</label>
<input type="text" name="place" id="place" value={values.place} onChange={handleChange}/>

</div>

<div>
  <label htmlFor="duration">Duration</label>
  <input type="text" name="duration" id="duration" value={values.duration} onChange={handleChange}/>
</div>
<div>
  <label>Team 1:</label>
<select required name="team1Id" id="team1Id" value={values.team1Id} onChange={handleChange}>
  <option value="">Wybierz druzyne</option>
  {teams.map(el => <option key={el.id} value={el.id}>{el.name}</option>)}
</select>

</div>
<div>
  <label htmlFor="team1Score">team1Score:</label>
  <input type="number" name="team1Score" id="team1Score" value={values.team1Score} onChange={handleChange}/>
</div>
<div>
  <label>Team 2:</label>
<select required name="team2Id" id="team2Id" value={values.team2Id} onChange={handleChange}>
  <option value="">Wybierz druzyne</option>
  {teams.map(el => <option key={el.id} value={el.id}>{el.name}</option>)}
</select>
</div>
<div>
  <label htmlFor="team2Score">team2Score:</label>
  <input type="number" name="team2Score" id="team2Score" value={values.team2Score} onChange={handleChange}/>
</div>

<button type="submit">Add</button>
<button type="button" onClick={handleVisible}>Cancel</button>
</form>

)

}