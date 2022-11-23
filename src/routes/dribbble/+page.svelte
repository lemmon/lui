<script>
import TextInput from '$lib/TextInput.svelte'
import PasswordInput from '$lib/PasswordInput.svelte'
import NumberInput from '$lib/NumberInput.svelte'
import TextArea from '$lib/TextArea.svelte'
</script>

<div class="span1 col">
  <div class="view bg-blue bg-sat10 bg-lum80 col justify-center px4 ma">
    <div class="window bg-white">
      <div class="col gap1 p2">
        <TextInput label="Text" value="Hello World!" />
        <PasswordInput label="Password" value="12345678" error="Err, this password is no good." />
        <NumberInput label="Number" value={42} />
        <TextArea
          label="Text"
          info="Place for some helpful information."
          value="Mauris molestie purus egestas elit fermentum porta. Sed et placerat ligula, vel molestie nulla. Phasellus nisl nulla, pulvinar quis finibus eget, sollicitudin eu neque."
        />
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
