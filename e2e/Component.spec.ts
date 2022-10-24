import { expect, test } from '@playwright/test';

test.describe('<Component />', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/component')
  })

  test('defaults', async ({ page }) => {
    const component = page.getByTestId('defaults')
    await expect(component, 'defaults to a <div>').toHaveJSProperty('tagName', 'DIV')
    await expect(component, 'includes child text').toHaveText('Default component')
  })

  test('as', async ({ page }) => {
    const component = page.getByTestId('as')
    await expect(component, 'uses the as="" tag').toHaveJSProperty('tagName', 'ASIDE')
    await expect(component, 'includes child text').toHaveText('Aside component')
  })

  test('gap', async ({ page }) => {
    const component = page.getByTestId('gap')
    await expect(component, 'inlines gap styles').toHaveAttribute('style', '--gap-inline: var(--gap-sm);--gap-block: var(--gap-sm)')
  })

  test('gapInline', async({ page }) => {
    const component = page.getByTestId('gapInline')
    await expect(component, 'inlines gap styles').toHaveAttribute('style', '--gap-inline: 12px;--gap-block: 0px')
  })

  test('gapBlock', async({ page }) => {
    const component = page.getByTestId('gapBlock')
    await expect(component, 'inlines gap styles').toHaveAttribute('style', '--gap-inline: 0px;--gap-block: var(--gap-xl)')
  })
})
