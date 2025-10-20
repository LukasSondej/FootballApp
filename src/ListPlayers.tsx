import { useGetPlayers } from "./hooks/useGetPlayers"
import { SinglePlayer } from "./SinglePlayer"

export const ListPlayers = () => {
const {data}= useGetPlayers()
if(!data) return <p>Loading...</p>
  return (

    <>
   
       <ul>
        {data.map(el => <SinglePlayer key={el.id} player={el}/>)}
       </ul>
   
   
    </>
  )
}