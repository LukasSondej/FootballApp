import { describe, it, expect } from 'vitest'
import { orderSchema } from './teamsSchema'

describe('Team Form Validation', () => {
  it('should fail when team name is less than 3 characters', () => {
    const invalidData = {
      name: 'FC',
      yearEstablished: 2000,
      location: 'Warsaw',
      playerIds: [],
    }

    const result = orderSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('should pass when all data is valid', () => {
    const validData = {
      name: 'Real Madrid',
      yearEstablished: 1902,
      location: 'Madrid',
      playerIds: [],
    }

    const result = orderSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })
})
