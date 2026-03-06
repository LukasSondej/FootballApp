
import type { Match } from "../types"

export const matchesQueryOptions = {
     queryKey: ["matches"],
     queryFn: async()=>{
const response = await fetch(`http://localhost:3000/matches`)
return response.json() as Promise<Match[]>
     }
  
}