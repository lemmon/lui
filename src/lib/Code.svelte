<script>
import CopyButton from './CopyButton.svelte'

/** @type {string} */
export let code
/** @type {string} */
export let size = undefined
</script>

<div
  class="suil-code {$$props.class || ''}"
  class:suil-xs={size === 'xs'}
  class:suil-sm={size === 'sm'}
  class:suil-md={size === 'md'}
  class:suil-lg={size === 'lg'}
  class:suil-xl={size === 'xl'}
  style={$$props.style}
>
  <pre><code>{code}</code></pre>
  <div><CopyButton text={code} size="sm" color="secondary" kind="ghost" /></div>
</div>

<style>
.suil-code {
  box-sizing: border-box;
  font-family: var(--suil-code-font-family);
  font-size: var(--suil-code-font-size);
  line-height: var(--suil-code-line-height);
  background-color: var(--suil-shade);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.suil-code > pre {
  box-sizing: border-box;
  flex: 1;
  padding: var(--suil-size);
  font: inherit;
}

.suil-code > div {
  padding: calc(var(--suil-size) - var(--suil-size-sm));
}
</style>
