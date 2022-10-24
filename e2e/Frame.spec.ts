import { expect, test } from '@playwright/test';

test.describe('<Frame />', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/frame')
  })

  test('16/9', async ({ page }) => {
    const component = page.getByTestId('fraction-str')
    const image = component.locator('img')
    const boundingBox = await image.boundingBox()
    expect(boundingBox).toBeDefined()
    expect(boundingBox!.width / boundingBox!.height).toBeCloseTo(16/9)
  })

  test('16:9', async ({ page }) => {
    const component = page.getByTestId('ratio-str')
    const image = component.locator('img')
    const boundingBox = await image.boundingBox()
    expect(boundingBox).toBeDefined()
    expect(boundingBox!.width / boundingBox!.height).toBeCloseTo(16/9)
  })

  test('[16, 9]', async ({ page }) => {
    const component = page.getByTestId('array')
    const image = component.locator('img')
    const boundingBox = await image.boundingBox()
    expect(boundingBox).toBeDefined()
    expect(boundingBox!.width / boundingBox!.height).toBeCloseTo(16/9)
  })
})
