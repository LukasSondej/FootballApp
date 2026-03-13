
import { useSuspenseQuery } from "@tanstack/react-query";
import { SingleTeam } from "./SingleTeam"
import { teamsQueryOptions } from "../../hooks/useGetTeams";

export const ListTeams = () => {
const {data} = useSuspenseQuery(teamsQueryOptions)
  return (

    <>
   
       <ul>
        {data.map(el => <SingleTeam key={el.id} team={el}/>)}
       </ul>
   
   
    </>
  )
}