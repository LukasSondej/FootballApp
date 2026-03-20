import type { Player } from "../types";
import { apiCall } from "../utils/apiCall";

export const playersQueryOptions = {
    queryKey: ['players'],
    queryFn: async () => {
        return apiCall<Player[]>('players', {method: "GET"});
    }
}