<script>
import AddIcon from 'carbon-icons-svelte/lib/Add.svelte'
import SubtractIcon from 'carbon-icons-svelte/lib/Subtract.svelte'
import EditOffIcon from 'carbon-icons-svelte/lib/EditOff.svelte'
import Icon from './Icon.svelte'
import options from './options'
import Field from './Field.svelte'
import Button from './Button.svelte'
import formatNumber from './format-number'

/** @type {string} */
export let name = undefined
/** @type {string|number} */
export let value = undefined
/** @type {string} */
export let placeholder = undefined
/** @type {string} */
export let label = undefined
/** @type {string} */
export let info = undefined
/** @type {boolean|string} */
export let error = undefined
/** @type {number} */
export let min = undefined
/** @type {number} */
export let max = undefined
/** @type {number} */
export let step = undefined
/** @type {number} */
export let dec = step?.toString().match(/(?<=\.)\d+$/)[0].length || 0
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

let inputValue = valueFormatted(value)
let control
let focused = false
let invalid

// update validity
$: if (control && invalid) {
  control.value = value
  if (control.validity.valid) {
    invalid = false
  } else if (!control.validity.valid) {
    control.checkValidity()
  }
}

// format input value

$: if (!focused) {
  inputValue = valueFormatted(value)
}

function valueFormatted(value) {
  return typeof value === 'number' ? formatNumber(value, dec) : ''
}

// events

function handleInput({ target }) {
  value = target.value.replace(/\s+/, '').replaceAll(options.thousandsSep, '').replace(options.decPoint, '.')
  value = parseFloat(value)
  value = !isNaN(value) ? value : null
}

function handleMinus({ target }) {
  if (min && value <= min) return
  value = parseFloat((value - ((step && parseFloat(step)) || 1)).toFixed(dec))
  target.dispatchEvent(new CustomEvent('input', { bubbles: true, cancelable: true }))
  target.dispatchEvent(new CustomEvent('change', { bubbles: true, cancelable: true }))
}

function handlePlus({ target }) {
  if (max && value >= max) return
  value = parseFloat(((value || 0) + ((step && parseFloat(step)) || 1)).toFixed(dec))
  target.dispatchEvent(new CustomEvent('input', { bubbles: true, cancelable: true }))
  target.dispatchEvent(new CustomEvent('change', { bubbles: true, cancelable: true }))
}

function handleFocus() {
  focused = true
}

function handleBlur() {
  focused = false
  // check validity
  control.checkValidity()
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
    {name}
    {placeholder}
    {readonly}
    {disabled}
    value={inputValue}
    on:input={handleInput}
    on:focus={handleFocus}
    on:blur={handleBlur}
    on:focus
    on:blur
    on:input
    on:change
  />
  <input
    class="suil-control suil-control--hidden"
    type="number"
    {min}
    {max}
    {step}
    {required}
    {disabled}
    on:invalid={handleInvalid}
    bind:this={control}
    bind:value
  />
  {#if readonly}
    <div class="suil-input-icon"><Icon C={EditOffIcon} /></div>
  {:else}
    <div class="suil-input-buttons">
      <Button type="button" min size="sm" color="current" kind="ghost" {disabled} on:click={handleMinus}
        ><Icon C={SubtractIcon} /></Button
      >
      <Button type="button" min size="sm" color="current" kind="ghost" {disabled} on:click={handlePlus}
        ><Icon C={AddIcon} /></Button
      >
    </div>
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

.suil-control--hidden {
  position: absolute;
  left: 0;
  width: 0;
  z-index: -1;
  visibility: hidden;
}

.suil-input-buttons {
  padding: calc(var(--suil-size) - var(--suil-border-width) - var(--suil-size-sm));
  display: flex;
  flex-direction: row;
}

.suil-input-icon {
  padding: calc(var(--suil-size) - var(--suil-border-width));
}
</style>
