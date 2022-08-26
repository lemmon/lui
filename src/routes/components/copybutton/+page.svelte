<script>
import Code from '$lib/Code.svelte'
import CopyButton from '$lib/CopyButton.svelte'
</script>

<svelte:head>
  <title>CopyButton Component &ndash; SŪIL</title>
</svelte:head>

<div class="span1 p2">
  <h1 class="h1 lh2 lsh">CopyButton</h1>

  <div class="mt2 copy lh4">
    <p>CopyButton component.</p>
  </div>

  <div class="mt2">
    <CopyButton text="Hello World" />
  </div>

  <div class="mt2">
    <Code code={`<CopyButton text="Hello World" />`} />
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
        <td>text</td>
        <td>string</td>
        <td>text to copy</td>
        <td>required</td>
      </tr>
    </tbody>
  </table>
</div>
