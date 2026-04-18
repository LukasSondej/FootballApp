import { forwardRef } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { Input } from './ui/input'

type PropsInputMatch = {
  label: string
  type: string
  error?: string
}

export const FormInput = forwardRef<HTMLInputElement, PropsInputMatch & UseFormRegisterReturn>(
  ({ label, type, error, ...register }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label className="font-medium text-sm text-gray-800">{label}</label>

        <Input type={type} ref={ref} {...register} className="bg-white" />

        {error && <p className="text-red-500 text-xs font-medium mt-0.5">{error}</p>}
      </div>
    )
  },
)
