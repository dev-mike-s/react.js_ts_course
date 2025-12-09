import { describe, it, expect } from 'vitest'

describe('Basic example tests', () => {
  it('adds numbers', () => {
    expect(1 + 2).toBe(3)
  })

  // Placeholder for an unimplemented test (shows as TODO in Vitest)
  it.todo('should implement more examples here')

  // If you have code that currently throws `new Error('not implemented')`,
  // mark the test skipped so it doesn't produce an error during runs:
  it.skip('skipped: not implemented yet', () => {
    throw new Error('not implemented')
  })
})
