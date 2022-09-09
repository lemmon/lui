<script>
import Button from './Button.svelte'
import CopyIcon from './icons/CopyIcon.svelte'
import CheckIcon from './icons/CheckIcon.svelte'

export let text

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
  class={$$props.class}
  style={$$props.style}
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
