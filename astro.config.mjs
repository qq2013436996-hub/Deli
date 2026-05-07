// @ts-check
import {defineConfig} from 'astro/config'
import sanity from '@sanity/astro'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [
    sanity({
      projectId: 'm9yu1wff',
      dataset: 'production',
      useCdn: true,
      apiVersion: '2024-05-02',
    }),
  ],
})