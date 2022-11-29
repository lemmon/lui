<script>
import { page } from '$app/stores'
import ExternalLinkIcon from '$lib/icons/ExternalLinkIcon.svelte'

const nav = [
  {
    children: [
      {
        title: 'Home',
        href: '/',
      },
    ],
  },
  {
    title: 'Components',
    children: [
      {
        title: 'Button',
        href: '/components/button',
      },
      {
        title: 'Code',
        href: '/components/code',
      },
      {
        title: 'CopyButton',
        href: '/components/copybutton',
      },
      {
        title: 'Dump',
        href: '/components/dump',
      },
      {
        title: 'NumberInput',
        href: '/components/numberinput',
      },
      {
        title: 'PasswordInput',
        href: '/components/passwordinput',
      },
      {
        title: 'Select',
        href: '/components/select',
      },
      {
        title: 'TextArea',
        href: '/components/textarea',
      },
      {
        title: 'TextInput',
        href: '/components/textinput',
      },
    ],
  },
]
</script>

<div class="h6 rlh1" style:width="16rem">
  <nav class="p1">
    {#each nav as section}
      <div class="p05">
        {#if section.title}
          <h2 class="p05 gray">{section.title}</h2>
        {/if}
        <ul>
          {#each section.children as item (item.href)}
            <li
              ><a class="block p05 ul:hover" class:active={item.href === $page.url.pathname} href={item.href}
                >{item.title}</a
              ></li
            >
          {/each}
        </ul>
      </div>
    {/each}
  </nav>
  <nav class="p15">
    <ul>
      <li
        ><a
          class="row gap025 p05 ul:hover"
          href="https://github.com/lemmon/suil"
          target="_blank"
          rel="external noreferrer">GitHub <ExternalLinkIcon /></a
        ></li
      >
      <li
        ><a
          class="row gap025 p05 ul:hover"
          href="https://www.npmjs.com/package/suil"
          target="_blank"
          rel="external noreferrer">NPM <ExternalLinkIcon /></a
        ></li
      >
    </ul>
  </nav>
</div>

<style>
.active {
  color: var(--suil-color-primary);
  text-decoration: underline var(--suil-color-primary);
}
</style>
