<script>
import '$lib/styles.css'
import '../css/index.css'
import { dev } from '$app/environment'
import PageLoader from './PageLoader.svelte'
import Header from './Header.svelte'
import Sidebar from './Sidebar.svelte'

export let data
</script>

<svelte:head>
  {#if !dev}
    <script defer data-domain="suil.vercel.app" src="https://plausible.io/js/plausible.js"></script>
  {/if}
</svelte:head>

<PageLoader />

<Header bind:theme={data.theme} />

<div class="span1 md:row-reverse suil-theme-{data.theme}">
  <div class="span1 col">
    <slot />
  </div>
  <Sidebar />
</div>
