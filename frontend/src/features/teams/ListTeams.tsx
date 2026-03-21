
import { useSuspenseQuery } from "@tanstack/react-query";
import { SingleTeam } from "./SingleTeam"
import { teamsQueryOptions } from "../../hooks/useGetTeams";

export const ListTeams = () => {
const {data} = useSuspenseQuery(teamsQueryOptions)
  return (

    <>
  
   <div className="p-4 w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(el => <SingleTeam key={el.id} team={el}/>)}
    </div>
</div>
   


 
    </>
  )
}