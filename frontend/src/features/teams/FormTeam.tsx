import Select from "react-select";
import { useState } from "react";
import { FormInput } from "../../components/FormInput";
import { Controller, useForm } from "react-hook-form";
import { orderSchema} from "./teamsSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import type { EditTeamPayload, Player } from "../../types";
import { ConfirmDeletion } from "../../components/ConfirmDeletion";
import useModalStore from "../../store/useModalStore";

type PropsTeam = {
   onSubmit: (data: EditTeamPayload) => void;
   allPlayers?: Player[]
   handleDeleteTeam?: () => void;
   onCancel: () => void;
   defaultValues?: Partial<EditTeamPayload>;
}

type PlayerOption = {
    value: string,
    label: string
}

export const FormTeam = ({allPlayers= [], handleDeleteTeam, onSubmit, onCancel, defaultValues}: PropsTeam) =>{
    const idEditTeam = useModalStore((state => state.idEditTeam))
    const [confirmedDeleleComp, isConfirmedDeleleComp] = useState<boolean>(false);
    
    const options: PlayerOption[] = allPlayers.filter(el => el.teamId == null || String(el.teamId) === String(idEditTeam)).map(player => ({
        value: player.id,
        label: `${player.name} ${player.lastName}`
    }));

    const {register, handleSubmit, formState: {errors}, control} = useForm<EditTeamPayload>({
        resolver: yupResolver(orderSchema),
        defaultValues: defaultValues
    })

    return (

        <div className="max-w-lg mx-auto mt-4 p-4 bg-white border border-gray-300 rounded shadow-sm">
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
                </div>
                
                <div className="flex gap-4 mt-4">
                    <button type="button" onClick={onCancel} className="w-full bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 rounded transition-colors">
                        Cancel
                    </button>
                    <button type="submit" name="button" className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 rounded transition-colors">
                        Save Team
                    </button>
                </div>

                {idEditTeam && (
                    <div className="mt-4 pt-4 border-t border-gray-300">
                        <button type="button" name="button" onClick={() => isConfirmedDeleleComp(true)} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded transition-colors">
                            Delete Team
                        </button>
                    </div>
                )}

                {confirmedDeleleComp && (
                    <ConfirmDeletion message="Do you want to delete this team?" handleDelete={handleDeleteTeam} onClose={() =>isConfirmedDeleleComp(false)} />
                )}
            </form>
        </div>
    )
}