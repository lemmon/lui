<script>
import options from './options'
import Code from './Code.svelte'

export let data
/** @type {string} */
export let label = undefined
/** @type {boolean} */
export let copy = true
/** @type {string} */
export let size = undefined
/** @type {"underlined" | "ghost" | "boxed" | "unboxed"} */
export let kind = options.codeKind
</script>

<Code
  class={$$props.class}
  style={$$props.style}
  {label}
  {copy}
  {size}
  {kind}
  code={JSON.stringify(data, null, '  ')}
/>
