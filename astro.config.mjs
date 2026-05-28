import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';
import sitemap from '@astrojs/sitemap';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://insuranceexit.org',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@data': path.resolve(__dirname, 'src/data'),
      },
    },
  },
});
