<script>
/** @type {string} */
let className = undefined
export { className as class }
/** @type {string} */
export let style = undefined
</script>

<svg
  class={className}
  {style}
  style:display="block"
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  stroke="currentColor"
  stroke-width="1"
>
  <line x1="10" y1="4" x2="10" y2="16" />
  <line x1="4" y1="10" x2="16" y2="10" />
</svg>
