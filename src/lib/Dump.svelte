<script>
import options from './options'
import Code from './Code.svelte'

export let data
/** @type {boolean} */
export let copy = true
/** @type {string} */
export let size = undefined
/** @type {null | "ghost" | "boxed"} */
export let kind = options.codeKind
</script>

<Code class={$$props.class} style={$$props.style} {copy} {size} {kind} code={JSON.stringify(data, null, '  ')} />
