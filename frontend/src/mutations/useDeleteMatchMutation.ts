import type { Match, NewMatch } from "@/types"
import { apiCall } from "@/utils/apiCall"
import { QueryClient, useMutation } from "@tanstack/react-query"

export const useDeleteMatchMutation = () => {
    const queryClient= new QueryClient()
    const {mutate} = useMutation({
mutationKey: ["matchDelete"],
mutationFn: async(id: string) => await apiCall<Match>(`matches/${id}`,{method: "DELETE"}),
onSuccess: () => 

    queryClient.invalidateQueries({queryKey: ["matches"]})


    })
}