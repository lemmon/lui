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
export let value
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
/** @type {boolean} */
export let nullable = options.nullable
/** @type {boolean} */
export let trim = options.trim

const id = 'suil-' + uid()

function handleInput({ target }) {
  value = target.value || null
}

function handleChange({ target }) {
  value = target.value.trim() || null
}
</script>

<div class="suil-field">
  {#if label}
    <label for={id} class="suil-label">{label}</label>
  {/if}
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
  --suil-size: var(--suil-size-md);
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
  border-bottom-width: 1px;
  border-bottom-color: hsl(220 10% 50%);
  border-radius: 0;
  padding-left: var(--suil-size);
  padding-right: var(--suil-size);
  padding-top: var(--suil-size);
  padding-bottom: calc(var(--suil-size) - 1px);
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
  border: 1px solid var(--suil-color-primary);
  padding: calc(var(--suil-size) - 1px);
  outline: 1px solid var(--suil-color-primary);
}
</style>
