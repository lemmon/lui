<script>
import Button from '$lib/Button.svelte'
import ExternalLinkIcon from '$lib/icons/ExternalLinkIcon.svelte'
</script>

<div class="span1 col justify-center items-center">
  <div class="p1 lh4">Svelte UI Library</div>
  <div class="p1">
    <Button kind="outlined" href="https://github.com/lemmon/suil" target="_blank" rel="external noopener">
      Github
      <ExternalLinkIcon style="margin-left: auto;" />
    </Button>
  </div>
</div>
