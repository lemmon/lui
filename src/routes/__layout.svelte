<script>
import '../css/index.css'
import '$lib/all.css'
</script>

<div class="minvh row">
  <div style:width="16rem">
    <header class="p2">
      <h1 class="h1 lh2 lsh">SŪIL</h1>
    </header>
    <nav class="p15">
      <ul>
        <li><a class="block p05 ul:hover" href="/">Home</a></li>
      </ul>
      <h2 class="p05 gray">Components</h2>
      <ul>
        <li><a class="block p05 ul:hover" href="/components/button">Button</a></li>
      </ul>
    </nav>
  </div>
  <div class="span1 col">
    <slot />
  </div>
</div>
