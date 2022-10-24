import { expect, test } from '@playwright/test';

test.describe('<PadBox />', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/padbox')
  })

  test('screenshot', async ({ page }) => {
    expect(await page.screenshot()).toMatchSnapshot('padbox.png');
  })
})
