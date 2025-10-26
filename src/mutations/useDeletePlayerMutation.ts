import { useMutation } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi"

export const useDeletePlayerMutation = (id: number) => {
const {deleteData }= useApi()
const {mutate} = useMutation({
    mutationKey: ["deletePlayer"],
    mutationFn: async() => {
        deleteData("players")
    }
})
}