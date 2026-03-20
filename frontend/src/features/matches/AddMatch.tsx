import { useAddMatchMutation } from "../../mutations/useAddMatchMutation";
import { FormMatch } from "./FormMatch";
import { teamsQueryOptions} from "../../hooks/useGetTeams";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { OrderDataMatches } from "./matchesSchema";
import useModalStore from "../../store/useModalStore";
import { useNotificationStore } from "../../store/useNotificationStore";

export const AddMatch = () => {
const {mutate, isPending} = useAddMatchMutation()
const {data: teams} = useSuspenseQuery(teamsQueryOptions)
const setIsAddingMatch = useModalStore(state => state.setIsAddingMatch)
const showNotification = useNotificationStore(state => state.showNotification);
const onSubmit = (data: OrderDataMatches) => {
   mutate({
    date: data.date,
    place: data.place,
    duration: data.duration,
    team1Id: data.team1Id,
    team2Id: data.team2Id,
    team1Score: Number(data.team1Score),
    team2Score: Number(data.team2Score)
   }, 
   {onSuccess: () => {
                setIsAddingMatch(false);
                showNotification("Match successfully added!"); 
            }})

}
return (
    <FormMatch isLoading={isPending} teams={teams} onCancel={() => setIsAddingMatch(false)}  onSubmit={onSubmit}/>
)
}