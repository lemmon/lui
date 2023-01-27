<script>
import EditOffIcon from 'carbon-icons-svelte/lib/EditOff.svelte'
import Icon from './Icon.svelte'
import Field from './Field.svelte'
import options from './options'

/** @type {string} */
export let type = 'text'
/** @type {string} */
export let name
/** @type {string|number} */
export let value = undefined
/** @type {string} */
export let placeholder = undefined
/** @type {string} */
export let pattern = undefined
/** @type {string} */
export let label = undefined
/** @type {string} */
export let info = undefined
/** @type {boolean|string} */
export let error = undefined
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
/** @type {"underlined" | "ghost" | "boxed"} */
export let kind = undefined
/** @type {string} */
export let size = undefined
/** @type {boolean} */
export let nullable = options.nullable
/** @type {boolean} */
export let trim = options.trim

let control
let invalid

// update validity
$: if (control && invalid) {
  control.value = value || ''
  if (control.validity.valid) {
    invalid = false
  } else if (!control.validity.valid) {
    control.checkValidity()
  }
}

// events

function handleInput({ target }) {
  value = target.value || (nullable ? null : target.value)
}

function handleBlur({ target }) {
  // sanitize value
  const origValue = target.value
  if (trim) target.value = target.value.trim()
  if (nullable && !target.value) target.value = null
  if (value !== origValue) {
    target.dispatchEvent(
      new CustomEvent('input', {
        bubbles: true,
        cancelable: true,
      })
    )
  }
  // check validity
  target.checkValidity()
}

function handleInvalid({ target }) {
  invalid = target.validationMessage
}
</script>

<Field
  class={$$props.class}
  style={$$props.style}
  {label}
  {disabled}
  {kind}
  {size}
  {info}
  error={invalid || error}
  let:id
>
  <input
    {id}
    class="suil-control"
    {type}
    {name}
    {placeholder}
    {pattern}
    {minlength}
    {maxlength}
    {required}
    {readonly}
    {disabled}
    value={value || ''}
    on:input={handleInput}
    on:blur={handleBlur}
    on:invalid|preventDefault={handleInvalid}
    on:focus
    on:blur
    on:input
    on:change
    bind:this={control}
  />
  {#if readonly}
    <div class="suil-input-icon"><Icon C={EditOffIcon} /></div>
  {/if}
</Field>

<style>
.suil-control {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  box-sizing: border-box;
  display: block;
  background-color: transparent;
  color: inherit;
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

.suil-input-icon {
  padding: calc(var(--suil-size) - var(--suil-border-width));
}
</style>
