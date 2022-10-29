import { expect, test } from '@playwright/test'

test.describe('<Cover />', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/cover')
  })

  test('screenshot', async ({ page }) => {
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      'cover.png'
    )
  })
})
