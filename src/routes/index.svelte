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

  <div class="mt2 row-wrap gap1">
    <Button kind="outlined" href="https://github.com/lemmon/suil" target="_blank" rel="external noopener">
      GitHub
      <ExternalLinkIcon style="margin-left: auto;" />
    </Button>
    <Button kind="outlined" href="https://www.npmjs.com/package/suil" target="_blank" rel="external noopener">
      NPM
      <ExternalLinkIcon style="margin-left: auto;" />
    </Button>
  </div>

  <h2 class="mt2 h2 lh2 lsh">Usage</h2>

  <h3 class="mt2 h3 lh2 lsh">CSS StyleSheet</h3>

  <pre class="mt2 code f2 rlh1 bg-gray bg-lum90 p1"><code>{`import 'suil/css/all.css'`}</code></pre>

  <h3 class="mt2 h3 lh2 lsh">Importing components</h3>

  <pre class="mt2 code f2 rlh1 bg-gray bg-lum90 p1"
    ><code
      >{`<script>
import Button from 'suil\/Button.svelte'
<\/script>

<Button>Hello World<\/Button>`}</code
    ></pre
  >
</div>
