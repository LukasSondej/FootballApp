import { useGetTeams } from "../../hooks/useGetTeams"
import { SingleTeam } from "./SingleTeam"
type Props = {
  setIdEditTeam: (teamId: string) => void;
  
}
export const ListTeams = ({setIdEditTeam}: Props) => {
const {data, isLoading, error} = useGetTeams()
if(isLoading) return <p>Loading...</p>
if(!data) return <p>Loading...</p>
if(error) return <p>Wystąpił Błąd</p>
  return (

    <>
   
       <ul>
        {data.map(el => <SingleTeam setIdEditTeam={setIdEditTeam} key={el.id} team={el}/>)}
       </ul>
   
   
    </>
  )
}