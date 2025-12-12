import { useState } from "react"
import type { Match, NewMatch } from "../types"

type PropsMatch = {
  values: NewMatch;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>)=> void

}
export const FormMatch = ({values, onChange, onSubmit}: PropsMatch) => {
return (
<form onSubmit={onSubmit}>

<div>



  
</div>


</form>

)

}