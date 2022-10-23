import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { getComponentOutput } from 'astro-component-tester'

const Component = suite('Component')

async function render(props?: Record<string, any>) {
    const { html, ...result } = await getComponentOutput('./src/Component.astro', props)
    return {
        html: html.trim(),
        ...result
    }
}

Component('defaults to <div>', async () => {
    const { html } = await render()
    assert.is(html, '<div></div>')
})

Component('as selector', async () => {
    const { html } = await render({ as: 'p' })
    assert.is(html, '<p></p>')
})

Component('gap', async () => {
    const { html } = await render({ gap: 12 })
    assert.is(html, '<div style="--gap-inline: 12px;--gap-block: 12px"></div>')
})

Component('gapInline', async () => {
    const { html } = await render({ gapInline: 'sm' })
    assert.is(html, '<div style="--gap-inline: var(--gap-sm)"></div>')
})

Component('gapBlock', async () => {
    const { html } = await render({ gapBlock: 'xl' })
    assert.is(html, '<div style="--gap-block: var(--gap-xl)"></div>')
})

Component('class', async () => {
    const { html } = await render({ class: 'block', as: 'aside' })
    assert.is(html, '<aside class="block"></aside>')
})

Component('style', async () => {
    const { html } = await render({ gapBlock: 12, style: 'color: red' })
    assert.is(html, '<div style="--gap-block: 12px;color: red"></div>')
})

Component('passes down HTML attributes', async () => {
    const { html } = await render({ class: 'block', 'aria-label': 'Content section' })
    assert.is(html, '<div class="block" aria-label="Content section"></div>')
})

//Component.run()
