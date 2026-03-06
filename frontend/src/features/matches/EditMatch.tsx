import { useEffect, useState } from "react"
import { matchesQueryOptions } from "../../hooks/useGetMatches"

import { useEditMatchMutation } from "../../mutations/useEditMatchMutation"
import { FormMatch } from "./FormMatch"
import { teamsQueryOptions} from "../../hooks/useGetTeams"
import { useSuspenseQuery } from "@tanstack/react-query"
import type { OrderDataMatches } from "./matchesSchema"


type Props = {
    matchId: string
   handleVisible: () => void
}
export const EditMatch = ({matchId, handleVisible}: Props) => {


    const {mutate, isPending, error} = useEditMatchMutation(matchId)
    const {data: allMatches} = useSuspenseQuery(matchesQueryOptions)
    const {data: teams=[]} = useSuspenseQuery(teamsQueryOptions)
    const matchEdit = allMatches?.find(e=> e.id == matchId);
    if (!matchEdit) {
        return <p>Nie znaleziono meczu do edycji.</p> 
    }
   
const onSubmit = (data: OrderDataMatches) => {
    mutate({

date: data.date,
 place: data.place,
    duration: data.duration,
    team1Id: data.team1Id,
    team2Id: data.team2Id,
    team1Score: data.team1Score,
    team2Score: data.team2Score
    },
    {
        onSuccess: () => {
            handleVisible()
        }
    })

}
return <FormMatch handleVisible={handleVisible}  onSubmit={onSubmit} teams={teams} defaultValues={matchEdit}/>

}
