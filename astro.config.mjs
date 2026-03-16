import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import compressor from 'astro-compressor';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: 'https://mylonics.com',
  // ASTRO_BASE can be set to a sub-path (e.g. '/v2') when deploying alongside
  // another site for comparison. Leave unset for the default root deployment.
  base: process.env.ASTRO_BASE,
  prefetch: true,
  integrations: [
    sitemap(),
    compressor({
      gzip: false,
      brotli: true,
    }),
    mdx(),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
