<script>
import Code from '$lib/Code.svelte'
import Button from '$lib/Button.svelte'
import ExternalLinkIcon from '$lib/icons/ExternalLinkIcon.svelte'
import PlusIcon from '$lib/icons/PlusIcon.svelte'
</script>

<svelte:head>
  <title>Button Component &ndash; SŪIL</title>
</svelte:head>

<div class="span1 p2">
  <h1 class="h1 lh2 lsh">Button</h1>

  <div class="mt2 copy lh4">
    <p>Button component.</p>
  </div>

  <div class="mt2">
    <Button on:click={() => alert('Hello World')}>Hello World</Button>
  </div>

  <div class="mt2">
    <Code code={`<Button on:click={() => alert('Hello World')}>Hello World</Button>`} />
  </div>

  <h2 class="mt2 h2 lh2 lsh">Variants</h2>

  <div class="mt2 row-wrap gap1">
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="danger">Danger</Button>
    <Button color="current">CurrentColor</Button>
    <Button kind="outlined">Outlined</Button>
    <Button kind="ghost">Ghost</Button>
  </div>

  <div class="mt2 row-wrap gap1">
    <Button disabled>Disabled</Button>
    <Button kind="outlined" disabled>Disabled</Button>
    <Button kind="ghost" disabled>Disabled</Button>
    <Button loading>Loading</Button>
    <Button kind="outlined" loading>Loading</Button>
    <Button kind="ghost" loading>Loading</Button>
  </div>

  <div class="mt2 row-wrap gap1">
    <Button>
      <PlusIcon />
      Icon
    </Button>
    <Button><PlusIcon /></Button>
    <Button min><PlusIcon /></Button>
  </div>

  <div class="mt2 row-wrap gap1">
    <Button href="https://www.lemmonjuice.com/" target="_blank" rel="noopener">
      Link
      <ExternalLinkIcon style="margin-left: auto;" />
    </Button>
  </div>

  <h2 class="mt2 h2 lh2 lsh">Props</h2>

  <table class="mt2 table lh4">
    <thead>
      <tr>
        <th>Prop.</th>
        <th>Type</th>
        <th>Options</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>type</td>
        <td>string</td>
        <td>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type</td>
        <td>-</td>
      </tr>
      <tr>
        <td>href</td>
        <td>string</td>
        <td>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href</td>
        <td>-</td>
      </tr>
      <tr>
        <td>target</td>
        <td>string</td>
        <td>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rel</td>
        <td>string</td>
        <td>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel</td>
        <td>-</td>
      </tr>
      <tr>
        <td>color</td>
        <td>string</td>
        <td>primary, secondary, danger, current</td>
        <td>primary</td>
      </tr>
      <tr>
        <td>kind</td>
        <td>string</td>
        <td>outlined, ghost</td>
        <td>-</td>
      </tr>
      <tr>
        <td>min</td>
        <td>boolean</td>
        <td>true, false</td>
        <td>-</td>
      </tr>
      <tr>
        <td>size</td>
        <td>string</td>
        <td>sm, lg</td>
        <td>-</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>boolean</td>
        <td>true, false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>loading</td>
        <td>boolean</td>
        <td>true, false</td>
        <td>false</td>
      </tr>
    </tbody>
  </table>
</div>
