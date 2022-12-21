<script>
import Select from '$lib/Select.svelte'
import Logo from './Logo.svelte'

export let theme = 'white'

const themes = [
  ['white', 'White'],
  ['gray10', 'Gray 10'],
  ['gray90', 'Gray 90'],
  ['gray100', 'Gray 100'],
]

function handleThemeChange() {
  document.cookie = `suiltheme=${this.value}; expires=Sun, 1 Jan 2025 00:00:00 UTC; samesite=lax; path=/`
}
</script>

<header class="suil-theme-gray100 relative sd:px1 row justify-between items-center">
  <figure class="px05"
    ><a class="block p05" href="/">
      <Logo />
    </a></figure
  >
  <Select class="span1 max20" name="theme" kind="ghost" bind:value={theme} on:change={handleThemeChange}>
    {#each themes as [id, label] (id)}
      <option value={id} selected={id === theme}>{label}</option>
    {/each}
  </Select>
  <nav class="px05 row">
    <a class="block p05" href="https://github.com/lemmon/suil" target="_blank" rel="external noreferrer"
      ><svg class="block" width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
        <path
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        />
      </svg></a
    >
    <a class="block p05" href="https://www.npmjs.com/package/suil" target="_blank" rel="external noreferrer"
      ><svg class="block" width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
        <path d="M0,16V0H16V16ZM3,3V13H8V5h3v8h2V3Z" />
      </svg></a
    >
  </nav>
</header>
