// @ts-check
import { defineConfig } from 'astro/config';

import tunnel from 'astro-tunnel';

// https://astro.build/config
export default defineConfig({
  site: "https://jakeystew.github.io",
  base: "Wedding-V2",
  integrations: [tunnel()]
});