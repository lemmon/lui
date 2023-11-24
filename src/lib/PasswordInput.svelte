<script>
import ViewIcon from 'carbon-icons-svelte/lib/View.svelte'
import ViewOffIcon from 'carbon-icons-svelte/lib/ViewOff.svelte'
import EditOffIcon from 'carbon-icons-svelte/lib/EditOff.svelte'
import options from './options'
import Icon from './Icon.svelte'
import Field from './Field.svelte'
import Button from './Button.svelte'

/** @type {string} */
export let name = undefined
/** @type {string|number} */
export let value = undefined
/** @type {string} */
export let placeholder = undefined
/** @type {string} */
export let pattern = undefined
/** @type {string} */
export let autocomplete = undefined
/** @type {string|boolean} */
export let autofocus = undefined
/** @type {string} */
export let label = undefined
/** @type {string} */
export let info = undefined
/** @type {boolean|string} */
export let error = undefined
/** @type {boolean} */
export let controls = true
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
/** @type {"start" | "end" | "left" | "right" | "center"} */
export let align = undefined
/** @type {boolean} */
export let counter = false
/** @type {boolean} */
export let nullable = options.nullable
/** @type {boolean} */
export let trim = options.trim
/** @type {boolean} */
export let validateTouched = options.validateTouched
/** @type {boolean} */
export let visible = false

let control
let changed = false
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
  value = target.value
  if (trim) value = value.trim()
  if (nullable && !value) value = null
  changed = true
}

function handleBlur({ target }) {
  // check validity
  if (changed || validateTouched) {
    target.checkValidity()
  }
}

function handleInvalid({ target }) {
  invalid = target.validationMessage
}

function handleVisibilityToggle() {
  visible = !visible
}
</script>

<!-- svelte-ignore a11y-autofocus -->
<Field
  class={$$props.class}
  style={$$props.style}
  {label}
  {disabled}
  {kind}
  {size}
  {align}
  {info}
  error={invalid || error}
  let:id
>
  <svelte:fragment slot="header"
    >{#if counter}<div class="suil-counter"
        >{value?.length || 0}{#if maxlength}/{maxlength}{/if}</div
      >{/if}</svelte:fragment
  >
  <input
    {id}
    class="suil-control"
    type={visible ? 'text' : 'password'}
    {name}
    {placeholder}
    {pattern}
    {autocomplete}
    {autofocus}
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
    <div class="suil-field__icon"><Icon C={EditOffIcon} /></div>
  {:else if controls}
    <div class="suil-input-controls">
      <Button type="button" min size="sm" color="current" kind="ghost" {disabled} on:click={handleVisibilityToggle}
        ><Icon C={visible ? ViewOffIcon : ViewIcon} /></Button
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
  border-radius: var(--suil-border-radius);
  padding: calc(var(--suil-size) - var(--suil-border-width));
  padding-right: calc(var(--suil-line-height) + 2 * (var(--suil-size) - var(--suil-border-width)));
  margin: 0;
  width: 100%;
  font-family: var(--suil-font-family);
  font-size: var(--suil-font-size);
  font-stretch: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: var(--suil-font-weight);
  line-height: var(--suil-line-height);
  text-align: inherit;
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

.suil-counter {
  margin-left: auto;
}

.suil-field__icon,
.suil-input-controls {
  position: absolute;
  right: 0;
}

.suil-input-controls {
  padding: calc(var(--suil-size) - var(--suil-border-width) - var(--suil-button-size));
  display: flex;
  flex-direction: row;
}
</style>
