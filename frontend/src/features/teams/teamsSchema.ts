import { z } from 'zod'

export const orderSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),

  yearEstablished: z
    .number({ invalid_type_error: 'Year established must be a valid number' })
    .min(1, 'Year must be greater than 0'),

  location: z.string().min(1, 'Location cannot be empty'),

  playerIds: z.array(z.string()).optional(),
})

export type OrderDataTeam = z.infer<typeof orderSchema>
