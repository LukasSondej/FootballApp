import { z } from 'zod'

export const orderSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  lastName: z.string().min(3, 'Last name must be at least 3 characters long'),
  teamId: z
    .string()
    .nullable()
    .transform((val) => (val === '' ? null : val)),
})

export type OrderDataPlayer = z.infer<typeof orderSchema>
