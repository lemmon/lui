<script>
import Button from './Button.svelte'
import CopyIcon from '$lib/icons/CopyIcon.svelte'
import CheckIcon from '$lib/icons/CheckIcon.svelte'

export let text

/** @type {string} */
let className = undefined
export { className as class }
/** @type {string} */
export let style = undefined
/** @type {string} */
export let color = undefined
/** @type {string} */
export let kind = undefined
/** @type {string} */
export let size = undefined
/** @type {boolean} */
export let disabled = false

let copied = null

function handleCopy() {
  if (copied) {
    clearInterval(copied)
  }
  navigator.clipboard.writeText(text).then(() => {
    copied = setTimeout(() => {
      copied = null
    }, 1000)
  })
}
</script>

<Button
  {className}
  {style}
  {color}
  {kind}
  {size}
  {disabled}
  min
  on:click={handleCopy}
  on:hover
  on:focus
  on:mouseover
  on:mouseenter
  on:mouseleave
>
  <svelte:component this={!copied ? CopyIcon : CheckIcon} />
</Button>
