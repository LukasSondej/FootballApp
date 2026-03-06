import { useSuspenseQuery } from "@tanstack/react-query"
import { playersQueryOptions} from "../../hooks/useGetPlayers"
import { SinglePlayer } from "./SinglePlayer"

export const ListPlayers = () => {
const {data}= useSuspenseQuery(playersQueryOptions)
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