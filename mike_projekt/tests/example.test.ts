// root/tests/example.test.ts
// @docs: https://medium.com/@kimtai.developer/react-typescript-vite-testing-with-vitest-react-testing-library-rtl-and-mock-service-worker-6f5790eedf84

import { describe, it, expect } from 'vitest'

describe('Basic example tests', () => 
{
  it('adds numbers', () => {
    expect(1 + 2).toBe(3)
  })

  it.todo('should implement more examples here')

  it.skip('skipped: not implemented yet', () => {
    throw new Error('not implemented')
  })
})
