import { expect, test } from '@playwright/test'

test.describe('<Columns />', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/columns')
  })

  test('screenshot', async ({ page }) => {
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      'columns.png'
    )
  })
})
