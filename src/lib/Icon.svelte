<script>
import options from './options'

export let C
export let size = options.iconSize
</script>

<div class="suil-icon" style="--size: {size}px; {$$props.style || ''}"><svelte:component this={C} {size} /></div>

<style global>
.suil-icon {
  padding: calc((var(--suil-line-height) - var(--size)) / 2);
}

.suil-icon svg {
  display: block;
}
</style>
