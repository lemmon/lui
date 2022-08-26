<script>
import Code from '$lib/Code.svelte'
import Dump from '$lib/Dump.svelte'
</script>

<svelte:head>
  <title>Dump Component &ndash; SŪIL</title>
</svelte:head>

<div class="span1 p2">
  <h1 class="h1 lh2 lsh">Dump</h1>

  <div class="mt2 copy lh4">
    <p>Dump component.</p>
  </div>

  <div class="mt2">
    <Dump data={{ a: 1, b: true }} />
  </div>

  <div class="mt2">
    <Code code={`<Dump data={{ a: 1, b: true }} />`} />
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
        <td>data</td>
        <td>any</td>
        <td>json serializable data</td>
        <td>required</td>
      </tr>
    </tbody>
  </table>
</div>
