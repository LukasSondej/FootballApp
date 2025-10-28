import { useState } from "react"
import { useAddPlayerMutation } from "../mutations/useAddPlayerMutation"
import { FormPlayer } from "./FormPlayer"

export const AddPlayer = () => {
 const {mutate, error, isPending} = useAddPlayerMutation();
 const [isAddForm, setIsAddForm] = useState(false)

 const [values, setValues] = useState({

    name: "",
    lastName: "",
    teamId: null
 })
 const handleChange =(e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const {name, value} = e.target;
    setValues(prev => ({
    ...prev,
    [name]: name == "teamId" ? value == "" ? null : Number(value) : value
    }))
}
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
mutate({
    name: values.name,
    lastName: values.lastName,
    teamId: values.teamId
}
)

setValues({
    name: "",
    lastName: "",
    teamId: null})
      setIsAddForm(false)
 }
const handleVisible = () => {
    setIsAddForm(prev => !prev)
}
 return (

 
 <>
 {isAddForm && <FormPlayer handleChange={handleChange} handleSubmit={handleSubmit} values={values}/>}
   
<button type="button" onClick={handleVisible}>{isAddForm ? "Cancel" : "Add player" }</button>
 </>
 )

}