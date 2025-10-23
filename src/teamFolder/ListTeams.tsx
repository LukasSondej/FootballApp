import { useGetTeams } from "../hooks/useGetTeams"
import { SingleTeam } from "./SingleTeam"

export const ListTeams = () => {
const {data, isLoading, error} = useGetTeams()
if(isLoading) return <p>Loading...</p>
if(!data) return <p>Loading...</p>
if(error) return <p>Wystąpił Błąd</p>
  return (

    <>
   
       <ul>
        {data.map(el => <SingleTeam  key={el.id} team={el}/>)}
       </ul>
   
   
    </>
  )
}