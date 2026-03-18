import { useForm } from "react-hook-form";
import type {Team } from "../../types"
import { orderSchema, type OrderDataMatches } from "./matchesSchema";
import { FormInput } from "../../components/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";



type PropsMatch = {
 onSubmit: (data: OrderDataMatches)=> void

teams: Team[]
defaultValues?: Partial<OrderDataMatches>
onCancel: () => void
}


export const FormMatch = ({ onSubmit, teams,defaultValues, onCancel}: PropsMatch) => {
 

const {register, handleSubmit, formState: {errors}} = useForm<OrderDataMatches>(
  {resolver: yupResolver(orderSchema), defaultValues: defaultValues}
  
)

return (
<form onSubmit={handleSubmit(onSubmit)}>
  <FormInput label="Date" type="date" error={errors.date?.message} {...register("date")}/>
  <FormInput label="Place" type="text" error={errors.place?.message} {...register("place")}/>
  <FormInput label="Duration" type="number" error={errors.duration?.message} {...register("duration")}/>

<div>
  <label>Team 1:</label>
<select {...register("team1Id")}>
  <option value="">Wybierz druzyne</option>
  {teams.map(el => <option key={el.id} value={el.id}>{el.name}</option>)}
</select>

</div>
 <FormInput label="team1Score" type="number" error={errors.team1Score?.message} {...register("team1Score")}/>

<div>
  <label>Team 2:</label>
<select required {...register("team2Id")}>
  <option value="">Wybierz druzyne</option>
  {teams.map(el => <option key={el.id} value={el.id}>{el.name}</option>)}
</select>
</div>
 <FormInput label="team2Score" type="number" error={errors.team2Score?.message} {...register("team2Score")}/>

<button type="submit">Submit</button>
<button type="button" onClick={onCancel}>Cancel</button>
</form>

)

}