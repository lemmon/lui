<script>
import options from './options'
import Field from './Field.svelte'
import Button from './Button.svelte'
import EyeIcon from './icons/EyeIcon.svelte'
import AsteriskIcon from './icons/AsteriskIcon.svelte'
import PencilSlashIcon from './icons/PencilSlashIcon.svelte'

/** @type {string} */
export let name
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

let visible = false
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

function handleVisibilityToggle() {
  visible = !visible
}
</script>

<Field class={$$props.class} style={$$props.style} {label} {disabled} {size} {info} error={invalid || error} let:id>
  <input
    {id}
    class="suil-control"
    type={visible ? 'text' : 'password'}
    {name}
    {placeholder}
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
    <div class="suil-input-icon"><PencilSlashIcon /></div>
  {:else}
    <div class="suil-input-buttons">
      <Button type="button" min size="sm" color="secondary" kind="ghost" on:click={handleVisibilityToggle}
        >{#if visible}<AsteriskIcon />{:else}<EyeIcon />{/if}</Button
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

.suil-input-buttons {
  padding: calc(var(--suil-size) - var(--suil-border-width) - var(--suil-size-sm));
  display: flex;
  flex-direction: row;
}
</style>
