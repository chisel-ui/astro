import { expect, test } from '@playwright/test';

test.describe('<Split />', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/split')
  })

  test('screenshot', async ({ page }) => {
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('split.png');
  })
})
