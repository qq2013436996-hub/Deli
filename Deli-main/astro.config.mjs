// @ts-check
import {defineConfig} from 'astro/config'
import sanity from '@sanity/astro'
import vercel from '@astrojs/vercel'

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'm9yu1wff'
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production'

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [
    sanity({
      projectId,
      dataset,
      useCdn: true,
      apiVersion: '2024-05-02',
    }),
  ],
})