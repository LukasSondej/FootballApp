import React, { useState } from "react"
import type { NewMatch } from "../types";
import { useApi } from "../hooks/useApi";
import { useAddMatchMutation } from "../mutations/useAddMatchMutation";
import { FormMatch } from "./FormMatch";

export const AddMatch = () => {
const {mutate, isPending, error} = useAddMatchMutation()
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
 const onChange =(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    team1Score: values.team1Id,
    team2Score: values.team2Id
   })

}
return (
    <FormMatch values={values} onChange={onChange} onSubmit={onSubmit}></FormMatch>
)
}