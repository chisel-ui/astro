import { expect, test } from '@playwright/test'

test.describe('<Grid />', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/grid')
  })

  test('screenshot', async ({ page }) => {
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      'grid.png'
    )
  })
})
