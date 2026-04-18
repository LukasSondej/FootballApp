import { describe, it, expect } from 'vitest'
import { orderSchema } from './playerSchema'

describe('Player Form Validation', () => {
  it('should fail when name is less than 3 characters', () => {
    const invalidData = {
      name: 'Jo',
      lastName: 'Smith',
      teamId: 'team-123',
    }
    const result = orderSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('should fail when last name is less than 3 characters', () => {
    const invalidData = {
      name: 'John',
      lastName: 'Do',
      teamId: 'team-123',
    }
    const result = orderSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('should pass when all data is valid', () => {
    const validData = {
      name: 'Robert',
      lastName: 'Lewandowski',
      teamId: 'team-123',
    }
    const result = orderSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('should pass when teamId is empty string (transforms to null)', () => {
    const validData = {
      name: 'Peter',
      lastName: 'Crouch',
      teamId: '',
    }
    const result = orderSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })
})
