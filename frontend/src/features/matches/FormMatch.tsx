import { useForm } from "react-hook-form";
import type { Team } from "../../types"
import { orderSchema, type OrderDataMatches } from "./matchesSchema";
import { FormInput } from "../../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import useModalStore from "@/store/useModalStore";
import { useState } from "react";
import { ConfirmDeletion } from "@/components/ConfirmDeletion";
import { Loader2 } from "lucide-react";

type PropsMatch = {
    onSubmit: (data: OrderDataMatches)=> void
    teams: Team[]
    defaultValues?: Partial<OrderDataMatches>
    handleDeleteMatch?: () => void;
    onCancel: () => void;
  isLoading?: boolean;
}

export const FormMatch = ({ onSubmit, teams, defaultValues, onCancel,handleDeleteMatch, isLoading}: PropsMatch) => {
    const idEditMatch = useModalStore((state => state.idEditMatch))
        const [confirmedDeleleComp, isConfirmedDeleleComp] = useState<boolean>(false);
    const {register, handleSubmit, formState: {errors}} = useForm<OrderDataMatches>({
        resolver: zodResolver(orderSchema),
        defaultValues: defaultValues
    })

    const handleFormSubmit = (data: OrderDataMatches) => {
        onSubmit(data);
    }

    return (
       <div className="max-w-2xl mx-auto mt-6 p-6 sm:p-8 bg-white border border-gray-300 rounded-lg shadow-sm">
            
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
    disabled={isLoading}
    onClick={onCancel}
    className="w-full bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-2 rounded transition-colors"
>
    Cancel
</button>

<button 
    type="submit"
    disabled={isLoading}
    className="w-full inline-flex items-center justify-center border border-transparent bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 rounded transition-colors disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed"
>
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
                {
                    idEditMatch && (
                         <div className="mt-4 pt-4 border-t border-gray-300">
                        <button disabled={isLoading} type="button" name="button" onClick={() => isConfirmedDeleleComp(true)} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded transition-colors">
                            Delete Match
                        </button>
                    </div>
                    )
                }
 {confirmedDeleleComp && (
                <ConfirmDeletion message="Do you want to delete this match?" handleDelete={handleDeleteMatch} onClose={() =>isConfirmedDeleleComp(false)} />
                )}
            </form>
        </div>
    )
}