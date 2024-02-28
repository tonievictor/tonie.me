import { defineConfig } from 'astro/config';

import icon from "astro-icon";
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [icon(), mdx(), sitemap()]
});