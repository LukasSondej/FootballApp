
import type { Match } from "../types"
import { apiCall } from "../utils/apiCall"


export const matchesQueryOptions = {
     queryKey: ["matches"],
     queryFn: async()=>{
return apiCall<Match[]>(`matches`, {method: "GET"})

     }
  
}