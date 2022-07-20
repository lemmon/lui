<script>
export let type = undefined
export let color = undefined
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
  --lui-size: var(--lui-size-md);
  --lui-color: currentColor;
  display: block;
  position: relative;
  appearance: none;
  padding: var(--lui-size);
  border: 0;
  width: initial;
  font: inherit;
  font-size: var(--lui-button-font-size, inherit);
  line-height: var(--lui-button-line-height, inherit);
  text-align: left;
  color: var(--lui-color);
  background-color: currentColor;
  min-width: var(--lui-button-width);
  outline: 0;
}

.button__label {
  display: block;
  color: var(--lui-color-white);
}

.button--primary {
  --lui-color: var(--lui-color-primary);
}

.button--secondary {
  --lui-color: var(--lui-color-secondary);
}

.button--danger {
  --lui-color: var(--lui-color-danger);
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
  --lui-size: var(--lui-size-sm);
}

.button--lg {
  --lui-size: var(--lui-size-lg);
}

.button:hover .button__label {
  text-decoration: underline;
}

.button:focus {
  outline: 2px solid var(--lui-color-outline);
  outline-offset: 1px;
}
</style>
