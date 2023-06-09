<script>
import options from './options'
import Code from './Code.svelte'

export let data
/** @type {string} */
export let size = undefined
/** @type {null | "ghost" | "boxed"} */
export let kind = options.codeKind
</script>

<Code class={$$props.class} style={$$props.style} {size} {kind} code={JSON.stringify(data, null, '  ')} />
