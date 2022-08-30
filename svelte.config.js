import adapter from '@sveltejs/adapter-auto'
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  kit: {
    adapter: adapter(),
  },
  preprocess: [
    sveltePreprocess({
      postcss: true,
    }),
    mdsvex({
      layout: './src/mdsvex/Layout.svelte',
      highlight: {
        highlighter: (code, lang) => {
          return '<Code code={`' + code + '`} />'
        },
      },
    }),
  ],
}

export default config
