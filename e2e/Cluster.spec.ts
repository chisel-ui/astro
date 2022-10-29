import { expect, test } from '@playwright/test'

test.describe('<Cluster />', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/cluster')
  })

  test('screenshot', async ({ page }) => {
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      'cluster.png'
    )
  })
})
