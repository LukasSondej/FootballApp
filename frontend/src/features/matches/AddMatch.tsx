import { useAddMatchMutation } from "../../mutations/useAddMatchMutation";
import { FormMatch } from "./FormMatch";
import { teamsQueryOptions} from "../../hooks/useGetTeams";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { OrderDataMatches } from "./matchesSchema";
type Props = {
    handleVisible: () => void
}
export const AddMatch = ({handleVisible}: Props) => {
const {mutate} = useAddMatchMutation()
const {data: teams} = useSuspenseQuery(teamsQueryOptions)


const onSubmit = (data: OrderDataMatches) => {
   mutate({
    date: data.date,
    place: data.place,
    duration: data.duration,
    team1Id: data.team1Id,
    team2Id: data.team2Id,
    team1Score: Number(data.team1Score),
    team2Score: Number(data.team2Score)
   })

}
return (
    <FormMatch handleVisible={handleVisible} teams={teams}  onSubmit={onSubmit}/>
)
}