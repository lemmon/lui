<script>
export let id = undefined
export let disabled = undefined
</script>

<label for={id} class="suil-label {$$props.class || ''}" class:suil-label--disabled={disabled} style={$$props.style}
  ><slot /></label
>

<style>
.suil-label {
  box-sizing: border-box;
  display: block;
  font-family: var(--suil-font-family);
  font-size: var(--suil-font-size);
  font-stretch: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: var(--suil-font-weight);
  line-height: var(--suil-line-height);
}

.suil-label--disabled {
  color: var(--suil-gray);
  opacity: 50%;
}
</style>
