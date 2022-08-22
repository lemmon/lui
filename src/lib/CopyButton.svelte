<script>
import Button from './Button.svelte'
import CopyIcon from '$lib/icons/CopyIcon.svelte'
import CheckIcon from '$lib/icons/CheckIcon.svelte'

export let text

let className = undefined
export { className as class }
export let style = undefined
export let color = undefined
export let kind = undefined
export let size = undefined
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
