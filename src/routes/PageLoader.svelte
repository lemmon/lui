<script>
import { navigating } from '$app/stores'

export let color = undefined

function width() {
  return {
    duration: 500,
    css: (t) => {
      return `width: ${t * 100}%;`
    },
  }
}
</script>

{#if $navigating}
  <div class={color} in:width />
{/if}

<style>
div {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 4px;
  background-color: var(--suil-color-primary, currentColor);
  z-index: 99999;
}
</style>
