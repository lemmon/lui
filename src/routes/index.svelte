<script>
import Button from '$lib/Button.svelte'
import ExternalLinkIcon from '$lib/icons/ExternalLinkIcon.svelte'
</script>

<svelte:head>
  <title>SŪIL &ndash; Svelte UI Library</title>
</svelte:head>

<div class="span1 p2">
  <h1 class="h1 lh2 lsh">Svelte UI Library</h1>
  <p class="mt2 lh4">Components library inspired by Carbon Design System.</p>
  <div class="mt2 row">
    <Button kind="outlined" href="https://github.com/lemmon/suil" target="_blank" rel="external noopener">
      Github
      <ExternalLinkIcon style="margin-left: auto;" />
    </Button>
  </div>
</div>
