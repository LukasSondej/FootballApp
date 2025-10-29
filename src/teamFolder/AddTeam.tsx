import React, { useState, type ChangeEvent } from "react";
import { useAddTeamMutation } from "../mutations/useAddTeamMutation"
import { FormTeam } from "./FormTeam";

export const AddTeam = () => {
const {mutate, error, isPending} = useAddTeamMutation();
const [values, setValues] = useState({
    name: "",
    yearEstablished: 0,

    location: "",
playersId: []
})
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
const {name, type, value} = e.target;
setValues(prev => ({
    ...prev, 
    [name]: name === "yearEstablished" ? Number(value) : value
}))
}
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return mutate({
        name: values.name,
        yearEstablished: values.yearEstablished,
        location: values.location,
      playersId: values.playersId 
    })
}

return(
<FormTeam handleChange={handleChange} handleSubmit={handleSubmit} values={values} />
)

}