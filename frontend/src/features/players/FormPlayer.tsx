import { teamsQueryOptions} from "../../hooks/useGetTeams"
import { useSuspenseQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { orderSchema, type OrderDataPlayer } from "./playerSchema";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";


type PropsPlayer =  {
   onSubmit: (data: OrderDataPlayer) => void
   defaultValues?: OrderDataPlayer
   onCancel: () => void
}


export const FormPlayer = ({onSubmit,defaultValues, onCancel}: PropsPlayer) =>{
const {register, handleSubmit, formState: {errors}} = useForm<OrderDataPlayer>({
    resolver: yupResolver(orderSchema),
    defaultValues: defaultValues || {
        name: "",
        lastName: "",
        teamId: null
    }
})
 const { data: teams = []} = useSuspenseQuery(teamsQueryOptions)

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="name" type="text" error={errors.name?.message} {...register("name")}/>
            <Input label="lastName" type="text" error={errors.lastName?.message} {...register("lastName")}/>
 
    <div>
        <label>Team:</label>
        <select {...register("teamId")}>
            <option value={""}>Brak druzyny</option>
{teams.map(el => (<option key={el.id} value={el.id}> {el.name}</option>))}

        </select>
    </div>
    <button type="button" onClick={onCancel}>Cancel</button>
    <button type="submit" name="button" >Submit</button>
    </form>
        </>
    )
}