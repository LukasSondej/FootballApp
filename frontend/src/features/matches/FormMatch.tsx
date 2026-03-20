import { useForm } from "react-hook-form";
import type { Team } from "../../types"
import { orderSchema, type OrderDataMatches } from "./matchesSchema";
import { FormInput } from "../../components/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import useModalStore from "@/store/useModalStore";
import { useState } from "react";
import { ConfirmDeletion } from "@/components/ConfirmDeletion";

type PropsMatch = {
    onSubmit: (data: OrderDataMatches)=> void
    teams: Team[]
    defaultValues?: Partial<OrderDataMatches>
    handleDeleteMatch?: () => void;
    onCancel: () => void
}

export const FormMatch = ({ onSubmit, teams, defaultValues, onCancel,handleDeleteMatch}: PropsMatch) => {
    const idEditMatch = useModalStore((state => state.idEditMatch))
        const [confirmedDeleleComp, isConfirmedDeleleComp] = useState<boolean>(false);
    const {register, handleSubmit, formState: {errors}} = useForm<OrderDataMatches>({
        resolver: yupResolver(orderSchema), 
        defaultValues: defaultValues
    })

    const handleFormSubmit = (data: OrderDataMatches) => {
        onSubmit(data);
    }

    return (
        <div className="max-w-lg mx-auto mt-4 p-4 border border-gray-300 bg-white rounded shadow-sm">
            
            <h2 className="text-xl font-bold text-center mb-4">
                {defaultValues ? "Edit Match" : "Add New Match"}
            </h2>
  
            <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4">
                
                <FormInput label="Date" type="date" error={errors.date?.message} {...register("date")} />
                <FormInput label="Place" type="text" error={errors.place?.message} {...register("place")} />
                <FormInput label="Duration (min)" type="number" error={errors.duration?.message} {...register("duration", { valueAsNumber: true })} />

                <div>
                    <label className="font-bold mb-1 block text-sm text-gray-700">Team 1</label>
                    <select 
                        {...register("team1Id")}
      
                        className="w-full border border-gray-400 rounded p-2 bg-white text-sm"
                    >
                        <option value="">-- Select Team --</option>
                        {teams.map(el => <option key={el.id} value={el.id}>{el.name}</option>)}
                    </select>
                    <p className="text-red-500 text-sm mt-1">{errors.team1Id?.message}</p>
                </div>

                <FormInput label="Team 1 Score" type="number" error={errors.team1Score?.message} {...register("team1Score", { valueAsNumber: true })} />

                <div>
                    <label className="font-bold mb-1 block text-sm text-gray-700">Team 2</label>
                    <select 
                        {...register("team2Id")}
                        className="w-full border border-gray-400 rounded p-2 bg-white text-sm"
                    >
                        <option value="">-- Select Team --</option>
                        {teams.map(el => <option key={el.id} value={el.id}>{el.name}</option>)}
                    </select>
                    <p className="text-red-500 text-sm mt-1">{errors.team2Id?.message}</p>
                </div>

                <FormInput label="Team 2 Score" type="number" error={errors.team2Score?.message} {...register("team2Score", { valueAsNumber: true })} />

                <div className="flex gap-4 mt-4">
                    <button 
                        type="button" 
                        onClick={onCancel}
                    
                        className="w-full bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 rounded transition-colors"
                    >
                        Cancel
                    </button>

                    <button 
                        type="submit"
                      
                        className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 rounded transition-colors"
                    >
                        Save Match
                    </button>
                </div>
                {
                    idEditMatch && (
                         <div className="mt-4 pt-4 border-t border-gray-300">
                        <button type="button" name="button" onClick={() => isConfirmedDeleleComp(true)} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded transition-colors">
                            Delete Match
                        </button>
                    </div>
                    )
                }
 {confirmedDeleleComp && (
                    <ConfirmDeletion message="Do you want to delete this team?" handleDelete={handleDeleteMatch} onClose={() =>isConfirmedDeleleComp(false)} />
                )}
            </form>
        </div>
    )
}