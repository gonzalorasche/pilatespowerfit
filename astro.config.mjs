// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Dominio donde esta montada hoy. Cambiar cuando se mude al definitivo:
  // de aca salen la canonical y las URLs absolutas de Open Graph.
  site: 'https://pilatespowerfit.vercel.app',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
