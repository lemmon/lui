<script>
import { uid } from 'uid'
import options from './options'
import PencilSlashIcon from './icons/PencilSlashIcon.svelte'

/** @type {string} */
export let label = undefined
/** @type {string} */
export let type = 'text'
/** @type {string} */
export let name
/** @type {string|number} */
export let value = undefined
/** @type {string} */
export let placeholder = undefined
/** @type {number} */
export let minlength = undefined
/** @type {number} */
export let maxlength = undefined
/** @type {boolean} */
export let required = false
/** @type {boolean} */
export let readonly = false
/** @type {boolean} */
export let disabled = false
/** @type {string} */
export let size = undefined
/** @type {boolean} */
export let nullable = options.nullable
/** @type {boolean} */
export let trim = options.trim

const id = 'suil-' + uid()

function handleInput({ target }) {
  value = target.value || (nullable ? null : target.value)
}

function handleChange({ target }) {
  const origValue = target.value
  if (trim) target.value = target.value.trim()
  handleInput({ target })
  if (value !== origValue) {
    target.dispatchEvent(
      new CustomEvent('input', {
        bubbles: true,
        cancelable: true,
      })
    )
  }
}
</script>

<div class={$$props.class || ''}>
  {#if label}
    <label for={id} class="suil-label" class:suil-label--disabled={disabled}>{label}</label>
  {/if}
  <label
    class="suil-field"
    class:suil-field--disabled={disabled}
    class:suil-xs={size === 'xs'}
    class:suil-sm={size === 'sm'}
    class:suil-md={size === 'md'}
    class:suil-lg={size === 'lg'}
    class:suil-xl={size === 'xl'}
  >
    <input
      {id}
      class="suil-control"
      {type}
      {name}
      {placeholder}
      {minlength}
      {maxlength}
      {required}
      {readonly}
      {disabled}
      value={value || ''}
      on:input={handleInput}
      on:change={handleChange}
      on:input
      on:change
    />
    {#if readonly}
      <div class="suil-field__icon"><PencilSlashIcon /></div>
    {/if}
  </label>
</div>

<style>
.suil-label {
  box-sizing: border-box;
  display: block;
  font-family: var(--suil-font-family);
  font-size: var(--suil-font-size);
  font-stretch: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: var(--suil-line-height);
  margin-bottom: 4px;
}

.suil-label--disabled {
  color: var(--suil-gray);
  opacity: 50%;
}

.suil-field {
  display: flex;
  flex-direction: row;
  background-color: var(--suil-shade);
  border-style: solid;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-bottom-width: var(--suil-border-width);
  border-bottom-color: var(--suil-gray);
  padding-left: var(--suil-border-width);
  padding-right: var(--suil-border-width);
  padding-top: var(--suil-border-width);
  padding-bottom: 0;
}

.suil-field--disabled {
  border-color: transparent;
  cursor: not-allowed;
}

.suil-field__icon {
  padding: calc(var(--suil-size) - var(--suil-border-width));
}

.suil-field:focus-within {
  border-width: var(--suil-border-width);
  border-style: solid;
  border-color: var(--suil-focus-color);
  outline: var(--suil-outline-width) solid var(--suil-outline-color);
  outline-offset: var(--suil-outline-offset);
  padding: 0;
}

.suil-control {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  box-sizing: border-box;
  display: block;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  padding: calc(var(--suil-size) - var(--suil-border-width));
  margin: 0;
  width: 100%;
  font-family: var(--suil-font-family);
  font-size: var(--suil-font-size);
  font-stretch: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: var(--suil-line-height);
  text-align: left;
  outline: 0;
}

.suil-control::-webkit-inner-spin-button,
.suil-control::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}

.suil-control:disabled {
  color: var(--suil-gray);
  opacity: 50%;
  cursor: not-allowed;
}
</style>
