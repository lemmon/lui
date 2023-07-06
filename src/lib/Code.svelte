<script>
import options from './options'
import CopyButton from './CopyButton.svelte'

/** @type {string} */
export let code
/** @type {string} */
export let size = undefined
/** @type {null | "ghost" | "boxed"} */
export let kind = options.codeKind
</script>

<div
  class="suil-code {$$props.class || ''}"
  class:suil-code--ghost={kind === 'ghost'}
  class:suil-code--boxed={kind === 'boxed'}
  class:suil-xs={size === 'xs'}
  class:suil-sm={size === 'sm'}
  class:suil-md={size === 'md'}
  class:suil-lg={size === 'lg'}
  class:suil-xl={size === 'xl'}
  style={$$props.style}
>
  <pre><code>{code}</code></pre>
  <div><CopyButton text={code} color="current" kind="ghost" /></div>
</div>

<style>
.suil-code {
  --suil-button-size: min(var(--suil-size-sm), calc(var(--suil-size) - 3px));
  box-sizing: border-box;
  font-family: var(--suil-code-font-family);
  font-size: var(--suil-code-font-size);
  line-height: var(--suil-code-line-height);
  background-color: var(--suil-shade);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-style: solid;
  border-color: var(--suil-gray);
  border-width: 0;
  border-radius: var(--suil-border-radius);
  padding: var(--suil-border-width);
  overflow: clip;
}

.suil-code :global(.suil-button) {
  --suil-size: var(--suil-button-size);
}

.suil-code--ghost {
  background-color: transparent;
}

.suil-code--boxed {
  border-width: var(--suil-border-width);
  padding: 0;
}

.suil-code > pre {
  box-sizing: border-box;
  white-space: pre-wrap;
  word-break: normal;
  word-break: break-word; /* Safari */
  overflow-wrap: anywhere;
  flex: 1;
  padding: calc(var(--suil-size) - var(--suil-border-width));
  font: inherit;
}

.suil-code > div {
  padding: calc(var(--suil-size) - var(--suil-border-width) - var(--suil-button-size));
}
</style>
