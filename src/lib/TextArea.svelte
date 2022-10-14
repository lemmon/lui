<script>
import { uid } from 'uid'
import options from './options'
import Label from './Label.svelte'
import PencilSlashIcon from './icons/PencilSlashIcon.svelte'

/** @type {string} */
export let type = 'text'
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
/** @type {number} */
export let minlines = 3
/** @type {string} */
export let size = undefined
/** @type {boolean} */
export let nullable = options.nullable
/** @type {boolean} */
export let trim = options.trim

const id = 'suil-' + uid()

let inputError = null
let invalid = new Set()

function handleFocus() {}

function handleBlur({ target }) {
  target.checkValidity()
}

function handleInvalid({ target }) {
  inputError = target.validationMessage || null
  invalid.add(target.name)
  invalid = invalid
}

function handleInput({ target }) {
  value = target.value || (nullable ? null : target.value)
  inputError = target.validationMessage || null
  // clear invalid
  if (target.validity.valid && invalid.has(target.name)) {
    invalid.delete(target.name)
    invalid = invalid
  }
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
    <div class="suil-textarea" style="--suil-min-lines: {minlines};">
      <div class="suil-textarea__preview">{value || ''}.</div>
      <textarea
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
        on:focus
        on:blur
        on:input
        on:change
      />
    </div>
    {#if readonly}
      <div class="suil-field__icon"><PencilSlashIcon /></div>
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

.suil-textarea {
  flex: 1;
  position: relative;
  min-height: calc(var(--suil-min-lines) * var(--suil-line-height) + 2 * (var(--suil-size) - var(--suil-border-width)));
}

.suil-textarea__preview,
.suil-control {
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
}

.suil-textarea__preview {
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: normal;
  visibility: hidden;
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
  resize: none;
  outline: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
}

.suil-control:disabled {
  color: var(--suil-gray);
  opacity: 50%;
  cursor: not-allowed;
}
</style>
