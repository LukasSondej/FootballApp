import { teamsQueryOptions } from "../../hooks/useGetTeams"
import { useSuspenseQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { orderSchema, type OrderDataPlayer } from "./playerSchema";
import { FormInput } from "../../components/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import useModalStore from "@/store/useModalStore";
import { ConfirmDeletion } from "@/components/ConfirmDeletion";
import { useNotificationStore } from "@/store/useNotificationStore";

type PropsPlayer = {
   onSubmit: (data: OrderDataPlayer) => void
   defaultValues?: OrderDataPlayer
   handleDeletePlayer: () => void;
   onCancel: () => void
}

export const FormPlayer = ({onSubmit, defaultValues, onCancel,handleDeletePlayer}: PropsPlayer) => {
      const idEditPlayer = useModalStore((state => state.idEditPlayer))
     const [confirmedDeleleComp, isConfirmedDeleleComp] = useState<boolean>(false);
    const {register, handleSubmit, formState: {errors}} = useForm<OrderDataPlayer>({
        resolver: yupResolver(orderSchema),
        defaultValues: defaultValues || {
            name: "",
            lastName: "",
            teamId: null
        }
    })
    const { data: teams = []} = useSuspenseQuery(teamsQueryOptions)
const showNotification = useNotificationStore(state => state.showNotification)
const handleDeleteClick = () => {
    if(defaultValues?.teamId){
         showNotification("You must first delete a player from the team to remove them from the database");
    }else{
isConfirmedDeleleComp(true)
    }
}
    return (
        
       <div className="max-w-2xl mx-auto mt-6 p-6 sm:p-8 bg-white border border-gray-300 rounded-lg shadow-sm">
           <h2 className="text-2xl font-bold text-center mb-6">
                {defaultValues?.name ? "Edit Player" : "Add New Player"}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormInput label="First Name" type="text" error={errors.name?.message} {...register("name")}/>
                <FormInput label="Last Name" type="text" error={errors.lastName?.message} {...register("lastName")}/>
     
                <div>
                    <label className="font-bold block mb-1 text-sm text-gray-700">Team</label>
                    <select {...register("teamId")} className="w-full border border-gray-400 rounded p-2 bg-white text-sm">
                        <option value={""}>-- No Team --</option>
                        {teams.map(el => (<option key={el.id} value={el.id}>{el.name}</option>))}
                    </select>
                </div>

                <div className="flex gap-4 mt-4">
                    
                    <button type="button" onClick={onCancel} className="w-full bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 rounded transition-colors">
                        Cancel
                    </button>
                    <button type="submit" name="button" className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 rounded transition-colors">
                        Save Player
                    </button>
                </div>
                   {idEditPlayer && (
                                    <div className="mt-4 pt-4 border-t border-gray-300">
                                        <button type="button" name="button" onClick={handleDeleteClick} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded transition-colors">
                                            Delete Player
                                        </button>
                                    </div>
                                )}
                
                                {(confirmedDeleleComp && defaultValues) && (
                                    <ConfirmDeletion message="Do you want to delete this Player?" handleDelete={handleDeletePlayer} onClose={() =>isConfirmedDeleleComp(false)} />
                                )}
            </form>
        </div>
    )
}