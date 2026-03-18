import { forwardRef } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { Input} from "./ui/input";
type PropsInputMatch = {
label: string,
type: string,
error?: string

}
export const FormInput = forwardRef<HTMLInputElement,PropsInputMatch & UseFormRegisterReturn>(
    ({label, type,error, ...register}, ref) => {
    return <div>
        <label >{label}</label>
        <Input type={type} ref={ref} {...register} />
        {error && <p>{error}</p>}
    </div>
})
