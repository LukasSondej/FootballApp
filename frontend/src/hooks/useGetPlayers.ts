import type { Player } from "../types";

export const playersQueryOptions = {
    queryKey: ['players'],
    queryFn: async() => {
    const response = await fetch(`http://localhost:3000/players`)
    return response.json() as Promise<Player[]>
    }


}