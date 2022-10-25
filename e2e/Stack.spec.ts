import { expect, test } from '@playwright/test'

test.describe('<Stack />', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/stack')
  })

  test('screenshot', async ({ page }) => {
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      'stack.png'
    )
  })
})
