<script>
/** @type {string} */
let className = undefined
export { className as class }
/** @type {string} */
export let style = undefined
/** @type {string} */
export let type = undefined
/** @type {string} */
export let href = undefined
/** @type {string} */
export let target = undefined
/** @type {string} */
export let rel = undefined
/** @type {string} */
export let color = 'primary'
/** @type {string} */
export let kind = undefined
/** @type {boolean} */
export let min = false
/** @type {string} */
export let size = undefined
/** @type {boolean} */
export let disabled = false
/** @type {boolean} */
export let loading = false
</script>

{#if href}
  <a
    {href}
    {target}
    {rel}
    {disabled}
    class="button {className || ''}"
    class:button--primary={color === 'primary'}
    class:button--secondary={color === 'secondary'}
    class:button--danger={color === 'danger'}
    class:button--outlined={kind === 'outlined'}
    class:button--ghost={kind === 'ghost'}
    class:button--minimal={min}
    class:button--sm={size === 'sm'}
    class:button--lg={size === 'lg'}
    {style}
    on:click
    on:hover
    on:focus
    on:mouseover
    on:mouseenter
    on:mouseleave
  >
    <span class="button__label"><slot /></span>
  </a>
{:else}
  <button
    {type}
    disabled={disabled || loading}
    class="button {className || ''}"
    class:button--loading={loading}
    class:button--primary={color === 'primary'}
    class:button--secondary={color === 'secondary'}
    class:button--danger={color === 'danger'}
    class:button--outlined={kind === 'outlined'}
    class:button--ghost={kind === 'ghost'}
    class:button--minimal={min}
    class:button--sm={size === 'sm'}
    class:button--lg={size === 'lg'}
    {style}
    on:click
    on:hover
    on:focus
    on:mouseover
    on:mouseenter
    on:mouseleave
  >
    <span class="button__label"><slot /></span>
    {#if loading}
      <span class="button__loader" />
    {/if}
  </button>
{/if}

<style>
.button {
  --suil-size: var(--suil-size-md);
  --suil-color: currentColor;
  --suil-label: var(--suil-color-white);
  display: block;
  position: relative;
  appearance: none;
  padding: calc(var(--suil-size) - 1px);
  border: 1px solid transparent;
  border-radius: 0;
  width: initial;
  font-family: var(--suil-font-family);
  font-size: var(--suil-font-size);
  font-stretch: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: var(--suil-line-height);
  text-align: left;
  background-color: var(--suil-color);
  transition: initial;
  min-width: var(--suil-button-width);
  cursor: pointer;
  outline: 0;
}

.button__label {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  color: var(--suil-label);
}

.button--primary {
  --suil-color: var(--suil-color-primary);
}

.button--secondary {
  --suil-color: var(--suil-color-secondary);
}

.button--danger {
  --suil-color: var(--suil-color-danger);
}

.button--outlined {
  --suil-label: var(--suil-color);
  background-color: transparent;
  border-color: var(--suil-color);
}

.button--ghost {
  --suil-label: var(--suil-color);
  background-color: transparent;
}

.button--minimal {
  min-width: auto;
}

.button--sm {
  --suil-size: var(--suil-size-sm);
}

.button--lg {
  --suil-size: var(--suil-size-lg);
}

.button:hover:not(:disabled) .button__label {
  text-decoration: underline;
}

.button:focus:not(:disabled) {
  outline: 1px solid var(--suil-color-primary);
  border-color: var(--suil-color-primary);
  box-shadow: inset 0 0 0 1px var(--suil-bg);
}

.button:focus:not(:disabled, .button--outlined, .button--ghost) {
  box-shadow: inset 0 0 0 1px var(--suil-bg);
}

.button:disabled:not(.button--loading) {
  --suil-color: var(--suil-color-gray);
  color: var(--suil-color);
  opacity: 50%;
  cursor: not-allowed;
}

.button:disabled:not(.button--outlined, .button--ghost, .button--loading) .button__label {
  opacity: 50%;
}

.button--loading {
  cursor: progress;
}

.button--loading .button__label {
  visibility: hidden;
}

.button--loading .button__loader {
  display: block;
  position: absolute;
  left: calc(50% - 20px / 2);
  top: calc(50% - 20px / 2);
  width: 20px;
  height: 20px;
  border-width: 2px;
  border-style: solid;
  border-color: var(--suil-label) var(--suil-label) transparent transparent;
  border-radius: 100%;
  animation: rotate 0.5s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotateZ(-360deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
</style>
