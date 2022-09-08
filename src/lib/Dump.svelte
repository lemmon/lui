<script>
import Code from '$lib/Code.svelte'

export let data
</script>

<Code class={$$props.class} style={$$props.style} code={JSON.stringify(data, null, '  ')} />
