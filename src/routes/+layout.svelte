<script>
import '../css/index.css'
import '$lib/styles.css'
import { dev } from '$app/env'
import Header from './Header.svelte'
import Sidebar from './Sidebar.svelte'
</script>

<svelte:head>
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  {#if !dev}
    <script defer data-domain="suil.vercel.app" src="https://plausible.io/js/plausible.js"></script>
  {/if}
</svelte:head>

<div class="minvh col">
  <Header />
  <div class="span1 row">
    <Sidebar />
    <div class="span1 col">
      <slot />
    </div>
  </div>
</div>
