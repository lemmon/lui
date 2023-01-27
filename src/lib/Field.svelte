<script>
import { uid } from 'uid'
import Label from './Label.svelte'
import options from './options'

export let label = undefined
export let disabled = false
export let size = undefined
export let info = undefined
export let error = undefined
/** @type {"underlined" | "ghost" | "boxed"} */
export let kind = options.fieldKind

const id = 'suil-' + uid()
</script>

<div class={$$props.class}>
  {#if label}
    <Label {id} {disabled}>{label}</Label>
  {/if}
  <label
    class="suil-field"
    class:suil-field--error={!!error}
    class:suil-field--disabled={disabled}
    class:suil-field--underlined={kind === 'underlined'}
    class:suil-field--ghost={kind === 'ghost'}
    class:suil-field--boxed={kind === 'boxed'}
    class:suil-xs={size === 'xs'}
    class:suil-sm={size === 'sm'}
    class:suil-md={size === 'md'}
    class:suil-lg={size === 'lg'}
    class:suil-xl={size === 'xl'}
  >
    <div class="suil-field__inner"><slot {id} /></div>
  </label>
  {#if error && typeof error === 'string'}
    <div class="suil-info suil-danger" class:suil-info--disabled={disabled}>{error}</div>
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
  display: block;
  background-color: var(--suil-shade);
  color: var(--suil-text);
  border-style: solid;
  border-color: var(--suil-gray);
  border-width: 0;
  padding: var(--suil-border-width);
}

.suil-field__inner {
  display: flex;
  flex-direction: row;
  position: relative;
}

.suil-field--underlined {
  padding-bottom: 0;
  border-bottom-width: var(--suil-border-width);
}

.suil-field--ghost {
  background-color: transparent;
}

.suil-field--boxed {
  border-width: var(--suil-border-width);
  padding: 0;
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
