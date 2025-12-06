import { useGetPlayers } from "../hooks/useGetPlayers"
import { SinglePlayer } from "./SinglePlayer"

export const ListPlayers = () => {
const {data, isLoading, error}= useGetPlayers()
if(isLoading) return <p>Loading...</p>
if(!data) return <p>Loading...</p>
if(error) return <p>Wystąpił Błąd</p>
  return (

    <>
   
       <ul>
        {data.map(el =>
        <li key={el.id}>

<SinglePlayer   player={el}/>
        </li>
           )}
       </ul>
   
   
    </>
  )
}