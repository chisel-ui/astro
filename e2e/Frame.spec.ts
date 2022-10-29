import { expect, test } from '@playwright/test'

test.describe('<Frame />', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/frame')
  })

  test('screenshot', async ({ page }) => {
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      'frame.png'
    )
  })
})
