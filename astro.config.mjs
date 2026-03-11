import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/ai-pulse',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  }
});
