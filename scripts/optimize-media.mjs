/**
 * Convierte las fotos pesadas de public/media a .webp.
 * Uso:  node scripts/optimize-media.mjs
 * Los originales quedan intactos en public/media/_originals/.
 */
import sharp from 'sharp';
import { readdir, mkdir, stat, rename } from 'node:fs/promises';
import path from 'node:path';

const MEDIA = path.resolve('public/media');
const BACKUP = path.join(MEDIA, '_originals');

// Ancho máximo por archivo (el resto usa el default).
const WIDTHS = {
  'hero1.png': 1920,
  'hero2.png': 1920,
  'hero3.png': 1920,
  'rosario.png': 1200,
  'bio.png': 1400,
  'bio_desk.png': 1600,
  'bio_mobile.png': 1000,
};
const DEFAULT_WIDTH = 1100;

// No tocar: iconos, logos y videos.
const SKIP = new Set([
  'appleicon.png',
  'iconrel.png',
  'logo.png',
  'logo_nav.png',
  'instagram.png',
  'whatsapp.png',
  'separador.png',
]);

const IMG = /\.(png|jpe?g)$/i;

await mkdir(BACKUP, { recursive: true });

const files = await readdir(MEDIA);
let saved = 0;

for (const file of files) {
  if (!IMG.test(file) || SKIP.has(file)) continue;

  const src = path.join(MEDIA, file);
  const info = await stat(src);
  if (!info.isFile()) continue;

  const out = path.join(MEDIA, file.replace(IMG, '.webp'));
  const width = WIDTHS[file] ?? DEFAULT_WIDTH;

  await sharp(src)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(out);

  const after = await stat(out);
  saved += info.size - after.size;

  await rename(src, path.join(BACKUP, file));

  const kb = (n) => (n / 1024).toFixed(0).padStart(5) + ' KB';
  console.log(`${file.padEnd(24)} ${kb(info.size)} →${kb(after.size)}`);
}

console.log(`\nTotal ahorrado: ${(saved / 1024 / 1024).toFixed(1)} MB`);
console.log(`Originales en:  ${BACKUP}`);
