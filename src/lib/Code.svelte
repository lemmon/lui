<script>
import options from './options'
import Field from './Field.svelte'
import CopyButton from './CopyButton.svelte'

/** @type {string} */
export let code = undefined
/** @type {string} */
export let label = undefined
/** @type {boolean} */
export let copy = true
/** @type {string} */
export let size = undefined
/** @type {"underlined" | "ghost" | "boxed" | "unboxed"} */
export let kind = options.codeKind
</script>

<Field {label} {size} {kind}>
  <pre class="suil-code"><code>{code}</code></pre>
  {#if copy}
    <div class="suil-code-controls"><CopyButton text={code} color="current" kind="ghost" /></div>
  {/if}
</Field>

<style>
.suil-code {
  overflow: clip;
  box-sizing: border-box;
  white-space: pre-wrap;
  word-break: normal;
  word-break: break-word; /* Safari */
  overflow-wrap: anywhere;
  flex: 1;
  padding: calc(var(--suil-size) - var(--suil-border-width));
  font-family: var(--suil-code-font-family);
  font-size: var(--suil-code-font-size);
  font-stretch: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: var(--suil-code-font-weight);
  line-height: var(--suil-code-line-height);
  text-align: inherit;
}

.suil-code-controls {
  padding: calc(var(--suil-size) - var(--suil-border-width) - var(--suil-button-size));
}
</style>
