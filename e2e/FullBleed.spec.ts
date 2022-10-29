import { expect, test } from '@playwright/test'

test.describe('<FullBleed />', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/fullbleed')
  })

  test('screenshot', async ({ page }) => {
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      'fullbleed.png'
    )
  })
})
