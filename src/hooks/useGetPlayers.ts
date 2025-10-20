import { useQuery } from "@tanstack/react-query"
import type { Player } from "../types";
import { useApi } from "./useApi";



export const useGetPlayers = () => {
    const {getData} = useApi()
const {data, isLoading, error} = useQuery<Player[]>({
    queryKey: ['players'],
    queryFn: async() => {
    return getData<Player[]>("players")
    }
})
return {data, isLoading, error}
}