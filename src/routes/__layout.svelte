<script>
import '../css/index.css'
import '$lib/css/all.css'
import ExternalLinkIcon from '$lib/icons/ExternalLinkIcon.svelte'
</script>

<div class="minvh row">
  <div style:width="16rem">
    <header class="p2">
      <h1 class="h1 lh2 lsh"><a class="block" href="/">SŪIL</a></h1>
    </header>
    <nav class="p15 rlh1">
      <ul>
        <li><a class="block p05 ul:hover" href="/">Home</a></li>
      </ul>
      <h2 class="p05 gray">Components</h2>
      <ul>
        <li><a class="block p05 ul:hover" href="/components/button">Button</a></li>
        <li><a class="block p05 ul:hover" href="/components/copybutton">CopyButton</a></li>
      </ul>
    </nav>
    <nav class="p15 rlh1">
      <ul>
        <li
          ><a
            class="row gap025 p05 ul:hover"
            href="https://github.com/lemmon/suil"
            target="_blank"
            rel="external noopener">GitHub <ExternalLinkIcon /></a
          ></li
        >
        <li
          ><a
            class="row gap025 p05 ul:hover"
            href="https://www.npmjs.com/package/suil"
            target="_blank"
            rel="external noopener">NPM <ExternalLinkIcon /></a
          ></li
        >
      </ul>
    </nav>
  </div>
  <div class="span1 col">
    <slot />
  </div>
</div>
