import React, { useState } from "react"
import type { NewMatch } from "../types";
import { useApi } from "../hooks/useApi";
import { useAddMatchMutation } from "../mutations/useAddMatchMutation";
import { FormMatch } from "./FormMatch";
import { useGetTeams } from "../hooks/useGetTeams";

export const AddMatch = () => {
const {mutate, isPending, error} = useAddMatchMutation()
const {data: teams, isLoading, error: errorTeams} = useGetTeams()
const [values, setValues] = useState<NewMatch>({
      date: "",
    place: "",
    duration: 0,
    team1Id: "",
    team2Id: "",
    team1Score: "",
    team2Score: ""
}
  
)
 const handleChange =(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setValues({
        ...values,
        [name]: name == "duration" ? Number(value) : value
    })
}
const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   mutate({
    date: values.date,
    place: values.place,
    duration: values.duration,
    team1Id: values.team1Id,
    team2Id: values.team2Id,
    team1Score: values.team1Score,
    team2Score: values.team2Score
   })

}
if(!teams){
    return <p>Loading Teams...</p>
}
return (
    <FormMatch teams={teams} values={values} handleChange={handleChange} onSubmit={onSubmit}></FormMatch>
)
}