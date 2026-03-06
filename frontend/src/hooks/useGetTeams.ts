import type {Team } from "../types";

export const teamsQueryOptions = {
    queryKey: ['teams'],
    queryFn: async() => {
    const response = await fetch(`http://localhost:3000/teams`, {method: 'GET'})
    return response.json() as Promise<Team[]>

}
}