<script>
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
    class="suil-button {$$props.class || ''}"
    class:suil-button--primary={color === 'primary'}
    class:suil-button--secondary={color === 'secondary'}
    class:suil-button--danger={color === 'danger'}
    class:suil-button--outlined={kind === 'outlined'}
    class:suil-button--ghost={kind === 'ghost'}
    class:suil-button--minimal={min}
    class:suil-xs={size === 'xs'}
    class:suil-sm={size === 'sm'}
    class:suil-md={size === 'md'}
    class:suil-lg={size === 'lg'}
    class:suil-xl={size === 'xl'}
    style={$$props.style}
    on:click
    on:hover
    on:focus
    on:mouseover
    on:mouseenter
    on:mouseleave
  >
    <span class="suil-button__label"><slot /></span>
  </a>
{:else}
  <button
    {type}
    disabled={disabled || loading}
    class="suil-button {$$props.class || ''}"
    class:suil-button--loading={loading}
    class:suil-button--primary={color === 'primary'}
    class:suil-button--secondary={color === 'secondary'}
    class:suil-button--danger={color === 'danger'}
    class:suil-button--outlined={kind === 'outlined'}
    class:suil-button--ghost={kind === 'ghost'}
    class:suil-button--minimal={min}
    class:suil-xs={size === 'xs'}
    class:suil-sm={size === 'sm'}
    class:suil-md={size === 'md'}
    class:suil-lg={size === 'lg'}
    class:suil-xl={size === 'xl'}
    style={$$props.style}
    on:click
    on:hover
    on:focus
    on:mouseover
    on:mouseenter
    on:mouseleave
  >
    <span class="suil-button__label"><slot /></span>
    {#if loading}
      <span class="suil-button__loader" />
    {/if}
  </button>
{/if}

<style>
.suil-button {
  --suil-color: currentColor;
  --suil-label: var(--suil-color-contrast);
  box-sizing: border-box;
  display: block;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
  padding: calc(var(--suil-size) - var(--suil-border-width));
  border: var(--suil-border-width) solid transparent;
  border-radius: 0;
  width: initial;
  height: calc(20px + 2 * var(--suil-size)); /* Safari fix */
  font-family: var(--suil-font-family);
  font-size: var(--suil-font-size);
  font-stretch: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: var(--suil-line-height);
  text-decoration: none;
  text-align: left;
  background-color: var(--suil-color);
  transition: initial;
  min-width: var(--suil-button-width);
  cursor: pointer;
  outline: 0;
}

.suil-button__label {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  color: var(--suil-label);
}

.suil-button--primary {
  --suil-color: var(--suil-color-primary);
}

.suil-button--secondary {
  --suil-color: var(--suil-color-secondary);
}

.suil-button--danger {
  --suil-color: var(--suil-color-danger);
}

.suil-button--outlined {
  --suil-label: var(--suil-color);
  background-color: transparent;
  border-color: var(--suil-color);
}

.suil-button--ghost {
  --suil-label: var(--suil-color);
  background-color: transparent;
}

.suil-button--minimal {
  min-width: auto;
}

.suil-button:hover:not(:disabled) .suil-button__label {
  text-decoration: underline;
}

.suil-button:focus:not(:disabled) {
  outline: var(--suil-outline-width) solid var(--suil-outline-color);
  outline-offset: var(--suil-outline-offset);
  border-color: var(--suil-focus-color, var(--suil-color));
}

.suil-button:focus:not(:disabled, .suil-button--outlined, .suil-button--ghost) {
  box-shadow: inset 0 0 0 var(--suil-focus-inset-width) var(--suil-bg);
}

.suil-button:disabled:not(.suil-button--loading) {
  --suil-color: var(--suil-color-gray);
  color: var(--suil-color);
  opacity: 50%;
  cursor: not-allowed;
}

.suil-button:disabled:not(.suil-button--outlined, .suil-button--ghost, .suil-button--loading) .suil-button__label {
  opacity: 50%;
}

.suil-button--loading {
  cursor: progress;
}

.suil-button--loading .suil-button__label {
  visibility: hidden;
}

.suil-button--loading .suil-button__loader {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.suil-button--loading .suil-button__loader::before {
  content: '';
  box-sizing: border-box;
  display: block;
  width: var(--suil-line-height);
  height: var(--suil-line-height);
  border-width: var(--suil-border-width);
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
