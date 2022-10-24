import { expect, test } from '@playwright/test';

test.describe('<PadBox />', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/padbox')
  })

  test('defaults', async ({ page }) => {
    const component = page.getByTestId('defaults')
    await expect(component, 'defaults to a <div>').toHaveJSProperty('tagName', 'DIV')
    await expect(component, 'includes child text').toHaveText('Default PadBox')
    await expect(component, 'has attr selector').toHaveAttribute('data-chisel-padbox', '')
  })

  test('built-in padding', async ({ page }) => {
    const component = page.getByTestId('md')
    await expect(component, 'has padding size').toHaveCSS('padding', '16px')
  })

  test('[padding]', async({ page }) => {
    const component = page.getByTestId('array-1')
    await expect(component, 'has padding size').toHaveCSS('padding', '24px')
  })

  test('[padding, padding]', async({ page }) => {
    const component = page.getByTestId('array-2')
    await expect(component, 'has padding size').toHaveCSS('padding', '24px 16px')
  })

  test('[padding, padding, padding]', async({ page }) => {
    const component = page.getByTestId('array-3')
    await expect(component, 'has padding size').toHaveCSS('padding', '24px 16px 10.6667px')
  })

  test('[padding, padding, padding, padding]', async({ page }) => {
    const component = page.getByTestId('array-4')
    await expect(component, 'has padding size').toHaveCSS('padding', '24px 16px 10.6667px 36px')
  })

  test('padding object', async({ page }) => {
    const component = page.getByTestId('object')
    await expect(component, 'has padding size').toHaveCSS('padding', '16px 16px 10.6667px 12px')
  })
})
