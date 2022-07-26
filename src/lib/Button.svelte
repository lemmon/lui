<script>
export let type = undefined
export let color = 'primary'
export let kind = undefined
export let min = false
export let size = undefined
export let disabled = false
export let loading = false
</script>

<button
  {type}
  disabled={disabled || loading}
  class="button"
  class:button--loading={loading}
  class:button--primary={color === 'primary'}
  class:button--secondary={color === 'secondary'}
  class:button--danger={color === 'danger'}
  class:button--outlined={kind === 'outlined'}
  class:button--ghost={kind === 'ghost'}
  class:button--minimal={min}
  class:button--sm={size === 'sm'}
  class:button--lg={size === 'lg'}
>
  <span class="button__label"><slot /></span>
  <span class="button__loader" />
</button>

<style>
.button {
  --suil-size: var(--suil-size-md);
  --suil-color: currentColor;
  --suil-label: var(--suil-color-white);
  display: block;
  position: relative;
  appearance: none;
  padding: var(--suil-size);
  border: 0;
  width: initial;
  font: inherit;
  font-size: var(--suil-button-font-size, inherit);
  line-height: var(--suil-button-line-height, inherit);
  text-align: left;
  color: var(--suil-color);
  background-color: currentColor;
  min-width: var(--suil-button-width);
  outline: 0;
}

.button__label {
  display: block;
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
  --suil-label: currentColor;
  background-color: transparent;
  box-shadow: inset 0 0 0 1px currentColor;
}

.button--ghost {
  --suil-label: currentColor;
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
  outline: 2px solid var(--suil-color-outline);
  outline-offset: 1px;
}

.button:disabled:not(.button--loading) {
  --suil-color: var(--suil-color-gray);
  opacity: 50%;
  cursor: not-allowed;
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
