
import { matchesQueryOptions } from "../../hooks/useGetMatches"

import { useEditMatchMutation } from "../../mutations/useEditMatchMutation"
import { FormMatch } from "./FormMatch"
import { teamsQueryOptions} from "../../hooks/useGetTeams"
import { useSuspenseQuery } from "@tanstack/react-query"
import type { OrderDataMatches } from "./matchesSchema"
import useModalStore from "../../store/useModalStore"



type Props = {
    matchId: string
}
export const EditMatch = ({matchId}: Props) => {
const setIdEditMatch = useModalStore(state => state.setIdEditMatch)
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
        onSuccess: () => setIdEditMatch(null)
    })

}
return <FormMatch onCancel={() => setIdEditMatch(null)}  onSubmit={onSubmit} teams={teams} defaultValues={matchEdit}/>

}
