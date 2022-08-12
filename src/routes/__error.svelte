<script context="module">
export function load({ error, status }) {
  return {
    props: {
      error,
      status,
    },
  }
}
</script>

<script>
export let error
export let status
</script>

<svelte:head>
  <title>SŪIL Error</title>
</svelte:head>

<div class="span1 p2">
  <h1 class="h1 lh2 lsh">Error {status}</h1>

  <p class="mt2 lh4">{error.message}</p>
</div>
