import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useApi } from "../hooks/useApi"

export const useDeletePlayerMutation = () => {
    const queryClient = useQueryClient()
const {deleteData }= useApi()
const {mutate} = useMutation({
    mutationKey: ["deletePlayer"],
    mutationFn: async(id: string) => {
      
      return  deleteData(`players/${id}`)
    },
    onSuccess: () => {
queryClient.invalidateQueries({queryKey: ["players"]})
    }
})
return {mutate}
}