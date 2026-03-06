import { forwardRef } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
type PropsInputMatch = {
label: string,
type: string,
error?: string

}
export const Input = forwardRef<HTMLInputElement,PropsInputMatch & UseFormRegisterReturn>(
    ({label, type,error, ...register}, ref) => {
    return <div>
        <label >{label}</label>
        <input type={type} ref={ref} {...register} />
        {error && <p>{error}</p>}
    </div>
})
