
import { useSuspenseQuery } from "@tanstack/react-query";
import { SingleTeam } from "./SingleTeam"
import { teamsQueryOptions } from "../../hooks/useGetTeams";
type Props = {
  setIdEditTeam: (teamId: string) => void;
  
}
export const ListTeams = ({setIdEditTeam}: Props) => {
const {data} = useSuspenseQuery(teamsQueryOptions)
  return (

    <>
   
       <ul>
        {data.map(el => <SingleTeam setIdEditTeam={setIdEditTeam} key={el.id} team={el}/>)}
       </ul>
   
   
    </>
  )
}