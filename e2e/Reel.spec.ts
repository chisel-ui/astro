import { expect, test } from '@playwright/test'

test.describe('<Reel />', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/reel')
  })

  test('screenshot', async ({ page }) => {
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      'reel.png'
    )
  })
})
