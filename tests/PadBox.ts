import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { getComponentOutput } from 'astro-component-tester'

const PadBox = suite('PadBox')

async function render(props?: Record<string, any>) {
    const { html, ...result } = await getComponentOutput('./src/PadBox.astro', props)
    return {
        html: html.trim(),
        ...result
    }
}

PadBox('defaults', async () => {
    const { html }  = await render()
    assert.is(html, '<div data-chisel-padbox></div>')
})

PadBox('padding built-in', async () => {
    const { html } = await render({ padding: 'sm' })
    assert.is(html, `<div data-chisel-padbox id="chisel-1"></div>

<style>
    #chisel-1 {
        padding: var(--gap-sm);
    }
</style>`, 'adds an ID and style when padding is used')
})

PadBox('specific ID', async () => {
    const { html } = await render({ padding: 'sm', id: 'my-section' })
    assert.is(html, `<div data-chisel-padbox id="my-section"></div>

<style>
    #my-section {
        padding: var(--gap-sm);
    }
</style>`, "doesn't override user-provided IDs")
})

PadBox('padding array', async () => {
    const { html } = await render({ padding: ['sm', 'lg'] })
    assert.is(html, `<div data-chisel-padbox id="chisel-1"></div>

<style>
    #chisel-1 {
        padding-inline: var(--gap-lg);padding-block: var(--gap-sm);
    }
</style>`)
})

PadBox('padding object', async () => {
    const { html } = await render({ padding: { top: 12, inlineEnd: 'md' }})
    assert.is(html, `<div data-chisel-padbox id="chisel-1"></div>

<style>
    #chisel-1 {
        padding-inline-start: 12px; padding-inline-end: var(--gap-md);
    }
</style>`)
})

PadBox.run()
