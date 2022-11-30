<script>
export let title
</script>

<svelte:head>
  <title>{title} &ndash; SŪIL</title>
</svelte:head>

<div class="span1 px1 py2 sd:p2">
  <div class="copy h6 lh2">
    <slot />
  </div>
</div>
