import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import node from '@astrojs/node'
import AstroUnocss from '@unocss/astro';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  base: '/ok',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [AstroUnocss({ configFile: './unocss.config.ts' }), svelte()],
})
