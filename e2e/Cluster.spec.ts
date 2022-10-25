import { expect, test } from '@playwright/test'

test.describe('<Cluster />', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/fr')
  })

  test('screenshot', async ({ page }) => {
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      'cluster.png'
    )
  })
})
