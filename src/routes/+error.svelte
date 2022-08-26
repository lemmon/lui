<script>
import { page } from '$app/stores'
</script>

<svelte:head>
  <title>SŪIL Error {$page.status}</title>
</svelte:head>

<div class="span1 p2">
  <h1 class="h1 lh2 lsh">Error {$page.status}</h1>

  <p class="mt2 lh4">{$page.error.message}</p>
</div>
