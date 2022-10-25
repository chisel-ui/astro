import { expect, test } from '@playwright/test'

test.describe('<Center />', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/center')
  })

  test('screenshot', async ({ page }) => {
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      'center.png'
    )
  })
})
