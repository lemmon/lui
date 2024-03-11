<script>
import { uid } from 'uid'
import options from './options'
import Label from './Label.svelte'

export let label = undefined
export let disabled = false
export let size = undefined
export let info = undefined
export let error = undefined
/** @type {"underlined" | "ghost" | "boxed" | "unboxed"} */
export let kind = options.fieldKind
/** @type {"start" | "end" | "left" | "right" | "center"} */
export let align = undefined

const id = 'suil-' + uid()
</script>

<div class="suil {$$props.class || ''}" style={$$props.style}>
  {#if label || $$slots.header}
    <div class="suil-field-header"
      >{#if label}<Label {id} {disabled}>{label}</Label>{/if}<slot name="header" /></div
    >
  {/if}
  <div
    class="suil-field"
    class:suil-field--error={!!error}
    class:suil-field--disabled={disabled}
    class:suil-field--underlined={kind === 'underlined'}
    class:suil-field--ghost={kind === 'ghost'}
    class:suil-field--boxed={kind === 'boxed'}
    class:suil-field--unboxed={kind === 'unboxed'}
    class:suil-xs={size === 'xs'}
    class:suil-sm={size === 'sm'}
    class:suil-md={size === 'md'}
    class:suil-lg={size === 'lg'}
    class:suil-xl={size === 'xl'}
    class:suil-align-start={align === 'start'}
    class:suil-align-end={align === 'end'}
    class:suil-align-left={align === 'left'}
    class:suil-align-right={align === 'right'}
    class:suil-align-center={align === 'center'}
  >
    <div class="suil-field__inner"><slot {id} /></div>
  </div>
  {#if error && typeof error === 'string'}
    <div class="suil-info suil-danger" class:suil-info--disabled={disabled}>{error}</div>
  {:else if info}
    <div class="suil-info" class:suil-info--disabled={disabled}>{info}</div>
  {/if}
</div>

<style>
.suil {
  font-family: var(--suil-font-family);
  font-size: var(--suil-font-size);
  font-stretch: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: var(--suil-font-weight);
  line-height: var(--suil-line-height);
}

.suil-info {
  box-sizing: border-box;
  display: block;
}

.suil-info {
  margin-top: 4px;
}

.suil-info:not(.suil-info--disabled, .suil-danger) {
  color: var(--suil-info-color, currentColor);
}

.suil-info--disabled {
  color: var(--suil-gray);
  opacity: 50%;
}

.suil-field-header {
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
}

.suil-field-header:empty {
  display: none;
}

.suil-field {
  --suil-button-size: clamp(var(--suil-border-width), calc(var(--suil-size) - 4px), var(--suil-size-sm));
  display: block;
  background-color: var(--suil-shade);
  color: var(--suil-text);
  border-style: solid;
  border-color: var(--suil-gray);
  border-width: 0;
  border-radius: var(--suil-border-radius);
  padding: var(--suil-border-width);
  overflow: clip;
}

.suil-field :global(.suil-button) {
  --suil-size: var(--suil-button-size);
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

.suil-field--disabled :global(.suil-field__icon) {
  color: var(--suil-gray);
  opacity: 0.5;
}

.suil-field :global(.suil-field__icon) {
  padding: calc(var(--suil-size) - var(--suil-border-width));
}

.suil-field--error:not(.suil-field--disabled),
.suil-field:not(.suil-field--unboxed):focus-within {
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
</style>
