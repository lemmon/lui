<script>
import Code from './Code.svelte'

export let data
</script>

<Code class={$$props.class} style={$$props.style} code={JSON.stringify(data, null, '  ')} />
