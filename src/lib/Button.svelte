<script>
export let type = undefined
export let color = 'primary'
export let kind = undefined
export let min = false
export let size = undefined
</script>

<button
  {type}
  class="button"
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
</button>

<style>
.button {
  --suil-size: var(--suil-size-md);
  --suil-color: currentColor;
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
  color: var(--suil-color-white);
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
  background-color: transparent;
  box-shadow: inset 0 0 0 1px currentColor;
}

.button--outlined .button__label {
  color: currentColor;
}

.button--ghost {
  background-color: transparent;
}

.button--ghost .button__label {
  color: currentColor;
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

.button:hover .button__label {
  text-decoration: underline;
}

.button:focus {
  outline: 2px solid var(--suil-color-outline);
  outline-offset: 1px;
}
</style>
