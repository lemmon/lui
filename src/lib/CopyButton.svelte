<script>
import Button from './Button.svelte'
import Icon from './Icon.svelte'
import CopyIcon from 'carbon-icons-svelte/lib/Copy.svelte'
import CheckmarkIcon from 'carbon-icons-svelte/lib/Checkmark.svelte'

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
  type="button"
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
  <Icon C={!copied ? CopyIcon : CheckmarkIcon} />
  <slot />
</Button>
