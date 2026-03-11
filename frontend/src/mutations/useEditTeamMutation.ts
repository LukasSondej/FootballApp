import { useMutation, useQueryClient } from "@tanstack/react-query"
import { type EditTeamPayload, type Team } from "../types";
import { apiCall } from "../utils/apiCall";
import toast from "react-hot-toast";

export const useEditTeamMutation = (teamId: string) => {
    const queryClient = useQueryClient();
    const {mutate, isPending, error} = useMutation({
        mutationKey: ["teamEdit", teamId],
        mutationFn: async(editedTeam: EditTeamPayload) => 
            apiCall<Team, EditTeamPayload>(`teams/${teamId}`, {method: "PATCH", body: editedTeam}),
        onSuccess: async() => {
              toast.success("Team edited successfully!")
            await queryClient.invalidateQueries({ queryKey: ["teams"] });
            await queryClient.invalidateQueries({ queryKey: ["players"] });
        }
    })
    return {mutate, isPending, error}
}