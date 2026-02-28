import React, { useEffect, useState } from "react"
import { matchesQueryOptions } from "../../hooks/useGetMatches"

import { useEditMatchMutation } from "../../mutations/useEditMatchMutation"
import { FormMatch } from "./FormMatch"
import { teamsQueryOptions} from "../../hooks/useGetTeams"
import { useSuspenseQuery } from "@tanstack/react-query"


type Props = {
    matchId: string
   handleVisible: () => void
}
export const EditMatch = ({matchId, handleVisible}: Props) => {

 const [values, setValues] = useState({
    id: "",
    date: "",
    place: "",
    duration: 0,
    team1Id: "",
    team2Id: "",
    team1Score: 0,
    team2Score: 0})

    const {mutate, isPending, error} = useEditMatchMutation()
    const {data: allMatches} = useSuspenseQuery(matchesQueryOptions)
    const {data: teams=[]} = useSuspenseQuery(teamsQueryOptions)
    const matchEdit = allMatches?.find(e=> e.id == matchId);
   
            useEffect(()=>{
                 if(matchEdit){
    setValues({
    id: matchEdit.id,
    date: matchEdit.date,
    place: matchEdit.place,
    duration: matchEdit.duration,
    team1Id: matchEdit.team1Id,
    team2Id: matchEdit.team2Id,
    team1Score: matchEdit.team1Score,
    team2Score: matchEdit.team2Score
              })
                    }
                }
,[matchEdit])   
    
 




 if(!allMatches){
        return <p>Loading...</p>
    }
        if(!matchEdit){
        return <p>Loading...</p>
    }


const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
const {name, value, type} = e.target;

setValues((prev)=> ({
...prev,
[name]: name =="duration" || name =="team1Score" || name =="team2Score" ? Number(value) : value
}))
}
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
id: values.id,
date: values.date,
 place: values.place,
    duration: values.duration,
    team1Id: values.team1Id,
    team2Id: values.team2Id,
    team1Score: values.team1Score,
    team2Score: values.team2Score
    },
    {
        onSuccess: () => {
            handleVisible()
        }
    })

}
return <FormMatch handleVisible={handleVisible}  handleChange={handleChange} onSubmit={handleSubmit} teams={teams} values={values}></FormMatch>

}
