<script>
import Code from '$lib/Code.svelte'
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

  <h2 class="mt2 h2 lh2 lsh">Install</h2>

  <div class="mt2">
    <Code code={`npm install suil --save-dev`} />
  </div>

  <h2 class="mt2 h2 lh2 lsh">Usage</h2>

  <h3 class="mt2 h3 lh2 lsh">CSS StyleSheet</h3>

  <div class="mt2">
    <Code code={`import 'suil/styles.css'`} />
  </div>

  <h3 class="mt2 h3 lh2 lsh">Importing components</h3>

  <div class="mt2">
    <Code
      code={`<script>
import { Button } from 'suil'
<\/script>

<Button>Hello World<\/Button>`}
    />
  </div>
</div>
