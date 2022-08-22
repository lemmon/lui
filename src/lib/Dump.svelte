<script>
import Code from '$lib/Code.svelte'

/** @type {string} */
let className = undefined
export { className as class }
/** @type {string} */
export let style = undefined
export let data
</script>

<Code class={className} {style} code={JSON.stringify(data, null, '  ')} />
