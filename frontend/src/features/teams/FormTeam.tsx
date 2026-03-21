import Select from "react-select";
import { useState } from "react";
import { FormInput } from "../../components/FormInput";
import { Controller, useForm } from "react-hook-form";
import { orderSchema} from "./teamsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { EditTeamPayload, Player } from "../../types";
import { ConfirmDeletion } from "../../components/ConfirmDeletion";
import useModalStore from "../../store/useModalStore";
import { Loader2 } from "lucide-react";

type PropsTeam = {
   onSubmit: (data: EditTeamPayload) => void;
   allPlayers?: Player[]
   handleDeleteTeam?: () => void;
   onCancel: () => void;
   defaultValues?: Partial<EditTeamPayload>;
   isLoading?: boolean;
}

type PlayerOption = {
    value: string,
    label: string
}

export const FormTeam = ({allPlayers= [], handleDeleteTeam, onSubmit, onCancel, defaultValues, isLoading}: PropsTeam) =>{
    const idEditTeam = useModalStore((state => state.idEditTeam))
    const [confirmedDeleleComp, isConfirmedDeleleComp] = useState<boolean>(false);
    
    const options: PlayerOption[] = allPlayers.filter(el => el.teamId == null || String(el.teamId) === String(idEditTeam)).map(player => ({
        value: player.id,
        label: `${player.name} ${player.lastName}`
    }));

    const {register, handleSubmit, formState: {errors}, control} = useForm<EditTeamPayload>({
      resolver: zodResolver(orderSchema),
        defaultValues: defaultValues
    })

    return (

      <div className="max-w-2xl mx-auto mt-6 p-6 sm:p-8 bg-white border border-gray-300 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-center mb-4">
                {idEditTeam ? "Edit Team" : "Add New Team"}
            </h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormInput label="Team Name" type="text" error={errors.name?.message} {...register("name")}/>
                <FormInput label="Year Established" type="number" error={errors.yearEstablished?.message} {...register("yearEstablished", {valueAsNumber: true})}/>
                <FormInput label="Location" type="text" error={errors.location?.message} {...register("location")}/>
                
                <div>
                    <label className="font-bold block mb-1 text-sm text-gray-700">Players</label>
                    <Controller
                        name="playerIds"
                        control={control}
                        render={({ field: { onChange, value} }) => (
                            <Select
                                isMulti
                                options={options}
                                hideSelectedOptions={true}
                                closeMenuOnSelect={false}
                                value={options.filter((c) => value?.includes(c.value))}
                                onChange={(selected)=> {
                                    const selectedIds = selected.map(el => el.value);
                                    onChange(selectedIds)
                                }}
                            />
                        )}
                    />
                    {errors.playerIds && (
    <p className="text-red-500 text-xs mt-1">{errors.playerIds.message}</p>
)}
                </div>
                
                <div className="flex gap-4 mt-4">
                    <button disabled={isLoading} type="button" onClick={onCancel} className="w-full bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-2 rounded transition-colors">
    Cancel
</button>
<button disabled={isLoading} type="submit" name="button" className="w-full inline-flex items-center justify-center border border-transparent bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 rounded transition-colors disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed">
    {isLoading ? (
        <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Saving...
        </>
    ) : (
        "Save"
    )}
</button>
                </div>

                {idEditTeam && (
                    <div className="mt-4 pt-4 border-t border-gray-300">
                        <button  disabled={isLoading} type="button" name="button" onClick={() => isConfirmedDeleleComp(true)} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded transition-colors">
                            Delete Team
                        </button>
                    </div>
                )}

                {confirmedDeleleComp && (
                    <ConfirmDeletion message="Do you want to delete this team?" 
                    handleDelete={() => {
                        if(handleDeleteTeam) handleDeleteTeam();
                        isConfirmedDeleleComp(false)
 
                    }}
                     onClose={() =>isConfirmedDeleleComp(false)} />
                )}
            </form>
        </div>
    )
}