import { fetch, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, test } from 'vitest'

describe('Project Build and Run Test e2e', async () => {
  await setup({ server: true })

  test('Build and Run Health Check', async () => {
    const response = await fetch('/')
    expect(response.status).toBe(200)
  })
})
