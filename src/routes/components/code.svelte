<script>
import Code from '$lib/Code.svelte'
</script>

<svelte:head>
  <title>Code Component &ndash; SŪIL</title>
</svelte:head>

<div class="span1 p2">
  <h1 class="h1 lh2 lsh">Code</h1>

  <div class="mt2 copy lh4">
    <p>Code component.</p>
  </div>

  <div class="mt2">
    <Code code={`<Code code="your code goes here" />`} />
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
        <td>code</td>
        <td>string</td>
        <td>code</td>
        <td>required</td>
      </tr>
    </tbody>
  </table>
</div>
