<script>
import { uid } from 'uid'
import Label from './Label.svelte'
import Button from './Button.svelte'
import PencilSlashIcon from './icons/PencilSlashIcon.svelte'
import MinusIcon from './icons/MinusIcon.svelte'
import PlusIcon from './icons/PlusIcon.svelte'
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
/** @type {string} */
export let size = undefined

const id = 'suil-' + uid()

let inputValue = valueFormatted(value)
let inputError = null
let invalid = new Set()
let focused = false
let control

// update validity
$: if (control && invalid.has(control.id)) {
  control.value = value
  if (control.validity.valid) {
    invalid.delete(control.id)
    invalid = invalid
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

function handleInputFocus() {
  focused = true
}

function handleInputBlur() {
  focused = false
}

function handleFocus() {}

function handleBlur() {
  control.checkValidity()
}

function handleInvalid({ target }) {
  inputError = target.validationMessage || null
  invalid.add(target.id)
  invalid = invalid
}

function handleInput({ target }) {
  value = target.value.replace(/[\s,]/g, '')
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
</script>

<div class={$$props.class || ''}>
  {#if label}
    <Label {id} {disabled}>{label}</Label>
  {/if}
  <label
    class="suil-field"
    class:suil-field--error={!!error || invalid.size > 0}
    class:suil-field--disabled={disabled}
    class:suil-xs={size === 'xs'}
    class:suil-sm={size === 'sm'}
    class:suil-md={size === 'md'}
    class:suil-lg={size === 'lg'}
    class:suil-xl={size === 'xl'}
    on:focus|capture={handleFocus}
    on:blur|capture={handleBlur}
    on:invalid|capture|preventDefault={handleInvalid}
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
      on:focus={handleInputFocus}
      on:blur={handleInputBlur}
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
      bind:this={control}
      bind:value
    />
    {#if readonly}
      <div class="suil-field__icon"><PencilSlashIcon /></div>
    {/if}
    {#if true}
      <div class="suil-field__buttons">
        <Button min size="sm" color="secondary" kind="ghost" on:click={handleMinus}><MinusIcon /></Button>
        <Button min size="sm" color="secondary" kind="ghost" on:click={handlePlus}><PlusIcon /></Button>
      </div>
    {/if}
  </label>
  {#if error && typeof error === 'string'}
    <div class="suil-info suil-danger" class:suil-info--disabled={disabled}>{error}</div>
  {:else if (error || invalid.size > 0) && inputError}
    <div class="suil-info suil-danger" class:suil-info--disabled={disabled}>{inputError}</div>
  {:else if info}
    <div class="suil-info" class:suil-info--disabled={disabled}>{info}</div>
  {/if}
</div>

<style>
.suil-info {
  box-sizing: border-box;
  display: block;
  font-family: var(--suil-font-family);
  font-size: var(--suil-font-size);
  font-stretch: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: var(--suil-line-height);
}

.suil-info {
  margin-top: 4px;
}

.suil-info--disabled {
  color: var(--suil-gray);
  opacity: 50%;
}

.suil-field {
  position: relative;
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

.suil-field__buttons {
  padding: calc(var(--suil-size) - var(--suil-border-width) - var(--suil-size-sm));
  display: flex;
  flex-direction: row;
}

.suil-field--error:not(.suil-field--disabled),
.suil-field:focus-within {
  border-width: var(--suil-border-width);
  border-style: solid;
  border-color: var(--suil-focus-color);
  outline: var(--suil-outline-width) solid var(--suil-outline-color);
  outline-offset: var(--suil-outline-offset);
  padding: 0;
}

.suil-field--error:not(:focus-within) {
  --suil-focus-color: var(--suil-color-danger);
  --suil-outline-color: var(--suil-color-danger);
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

.suil-control--hidden {
  position: absolute;
  left: 0;
  width: 0;
  z-index: -1;
  visibility: hidden;
}
</style>
