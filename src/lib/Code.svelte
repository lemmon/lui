<script>
import CopyButton from '$lib/CopyButton.svelte'

/** @type {string} */
let className = undefined
/** @type {string} */
export { className as class }
/** @type {string} */
export let style = undefined
/** @type {string} */
export let code
</script>

<div class="container {className || ''}" {style}>
  <pre class="code"><code>{code}</code></pre>
  <div class="button"><CopyButton text={code} size="sm" color="secondary" kind="ghost" /></div>
</div>

<style>
.container {
  font-family: JetBrains Mono, JetBrainsMono, Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 14px;
  line-height: 20px;
  background-color: hsl(220 10% 95%);
  display: flex;
  flex-direction: row;
}

.code {
  flex: 1;
  padding: var(--suil-size-md);
  font: inherit;
}

.button {
  padding: calc(var(--suil-size-md) - var(--suil-size-sm));
}
</style>
