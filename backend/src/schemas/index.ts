import { z } from 'zod'

export const teamSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  yearEstablished: z.number().int().positive('Year must be a positive number'),
  location: z.string().min(1, 'Location is required'),
  playerIds: z.array(z.string()).optional(),
})

export const playerSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  lastName: z.string().min(3, 'Last name must be at least 3 characters long'),
  teamId: z.string().nullable().optional(),
})

export const matchSchema = z.object({
  date: z.string().min(1, 'Date is required'),
  place: z.string().min(1, 'Place is required'),
  duration: z.number().int().positive('Duration must be greater than 0'),
  team1Id: z.string().min(1, 'Team 1 ID is required'),
  team2Id: z.string().min(1, 'Team 2 ID is required'),
  team1Score: z.number().int().nonnegative('Score cannot be negative'),
  team2Score: z.number().int().nonnegative('Score cannot be negative'),
})
