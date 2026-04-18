import { describe, it, expect } from 'vitest'
import { orderSchema } from './matchesSchema'

describe('Match Form Validation', () => {
  it('should fail when a team plays against itself', () => {
    const invalidData = {
      date: '2024-05-12',
      place: 'London',
      duration: 90,
      team1Id: 'real-madrid-id',
      team1Score: 2,
      team2Id: 'real-madrid-id',
      team2Score: 1,
    }
    const result = orderSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('should fail when duration is negative', () => {
    const invalidData = {
      date: '2024-05-12',
      place: 'Manchester',
      duration: -10,
      team1Id: 'team-A',
      team1Score: 0,
      team2Id: 'team-B',
      team2Score: 0,
    }
    const result = orderSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('should pass when all data is valid', () => {
    const validData = {
      date: '2024-05-12',
      place: 'Liverpool',
      duration: 90,
      team1Id: 'team-A',
      team1Score: 3,
      team2Id: 'team-B',
      team2Score: 1,
    }
    const result = orderSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })
})
