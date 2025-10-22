import { useQuery } from "@tanstack/react-query"
import type {Team } from "../types";
import { useApi } from "./useApi";



export const useGetTeams = () => {
    const {getData} = useApi()
const {data, isLoading, error} = useQuery<Team[]>({
    queryKey: ['players'],
    queryFn: async() => {
    return getData<Team[]>("teams")
    }
})
return {data, isLoading, error}
}