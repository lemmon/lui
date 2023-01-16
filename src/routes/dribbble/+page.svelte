<script>
import Select from '$lib/Select.svelte'
import Logo from '../Logo.svelte'
</script>

<div class="span1 col">
  <div class="view suil-theme-gray90 col justify-center px4 ma">
    <div class="w100 max30 mx col gap3">
      <Select label="This is <Select />" value="Hello World!" />
      <div class="row items-center gap1">
        <Logo />
        <div class="div" style="width: 2rem;" />
        <h2 class="h4">Svelte Components</h2>
      </div>
    </div>
  </div>
</div>

<style>
.view {
  width: 800px;
  height: 600px;
}
</style>
