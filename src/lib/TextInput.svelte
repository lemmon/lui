<script>
import { uid } from 'uid'
import options from './options'

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

<div class="suil-field {$$props.class || ''}">
  {#if label}
    <label for={id} class="suil-label">{label}</label>
  {/if}
  <input
    {id}
    class="suil-control"
    class:suil-xs={size === 'xs'}
    class:suil-sm={size === 'sm'}
    class:suil-md={size === 'md'}
    class:suil-lg={size === 'lg'}
    class:suil-xl={size === 'xl'}
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
</div>

<style>
.suil-field {
  box-sizing: border-box;
  display: block;
}

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

.suil-control {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  box-sizing: border-box;
  display: block;
  background-color: hsl(220 10% 95%);
  border-style: solid;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-bottom-width: var(--suil-border-width);
  border-bottom-color: hsl(220 10% 50%);
  border-radius: 0;
  padding-left: var(--suil-size);
  padding-right: var(--suil-size);
  padding-top: var(--suil-size);
  padding-bottom: calc(var(--suil-size) - var(--suil-border-width));
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

.suil-control:focus {
  border-width: var(--suil-border-width);
  border-style: solid;
  border-color: var(--suil-focus-color);
  padding: calc(var(--suil-size) - var(--suil-border-width));
  outline: var(--suil-outline-width) solid var(--suil-outline-color);
  outline-offset: var(--suil-outline-offset);
}
</style>
