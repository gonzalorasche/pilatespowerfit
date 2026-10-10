# Pilates Power Fit — Sitio (Astro)

Sitio principal. Vive en la raíz del repo y es lo que se publica.

La versión anterior (HTML plano) quedó archivada en **`legacy-v1/`**: no se
publica ni se compila, está solo para no perder el código. Su historial
completo sigue en git.

## Correr el proyecto

```bash
npm install
```

```bash
npm run dev
```

Abre en `http://localhost:4321`.

Para ver el sitio tal como se va a publicar:

```bash
npm run build
```

El resultado queda en `dist/` — esa carpeta es lo que se sube al hosting
(Netlify, Vercel, Cloudflare Pages o un FTP común; es HTML/CSS/JS estático,
sin servidor).

## Dónde se edita el contenido

Casi todo sale de un solo archivo: **`src/data/site.js`**.

| Qué querés cambiar | Dónde |
|---|---|
| WhatsApp, Instagram, dirección, mapa | `site` |
| Links del menú | `navLinks` |
| Frases del cartel que se desplaza | `tickerWords` |
| Los 4 pilares del método | `pillars` |
| Clases regulares y packs | `classCards` |
| **Clases especiales (Dua Lipa, Madonna…)** | `specialClasses` |
| Horario fijo de las especiales | `specialTime` |
| Testimonios | `testimonials` |
| Playlists de Spotify | `playlists` |
| Grilla de Instagram | `igGrid` |

### Cargar una clase especial nueva

En `specialClasses` agregá un objeto arriba de todo:

```js
{
  artist: 'Lady Gaga',
  edition: 'Chromatica Session',
  date: '2026-12-10',          // AAAA-MM-DD, siempre un jueves
  dateLabel: 'Jue 10 DIC',     // como se ve en el ticket
  time: '20:00 h',
  status: 'open',              // open | last | soldout | soon
  blurb: 'De qué va la clase...',
  hue: 'from-pink',            // from-pink | from-violet | from-gold | from-cyan
}
```

El contador regresivo del encabezado apunta solo a la primera clase con
estado `open` o `last`, y usa el horario de `specialTime`.

Los estados cambian el cartelito y el color:

- `open` → «Inscripción abierta» (verde, con puntito latiendo)
- `last` → «Últimos lugares» (naranja)
- `soldout` → «Agotada» (tarjeta atenuada, sin botón)
- `soon` → «Próximamente» (violeta)

## Fotos

Van en `public/media/` y se referencian como `/media/archivo.webp`.

Las imágenes originales pesaban ~30 MB en total; se convirtieron a `.webp`
(quedaron en ~1,3 MB). Los archivos originales están guardados en
`media-originals/` — esa carpeta no se publica.

Si agregás fotos nuevas y pesadas, corré:

```bash
node scripts/optimize-media.mjs
```

Convierte todo `.png`/`.jpg` de `public/media` a `.webp`, achica el ancho y
mueve los originales a `media-originals/`. No toca logos ni íconos.

## Notas de diseño

- Tipografías: **Big Shoulders Display** (títulos) + **Inter** (texto), desde Google Fonts.
- Paleta y medidas: `src/styles/global.css`, todo en variables CSS (`--violet`, `--lime`, `--ink`…).
- Animaciones: aparición al hacer scroll (`data-reveal`), parallax suave
  (`data-parallax`) y el cartel que se desplaza. Todo se apaga solo si el
  visitante tiene activado «reducir movimiento» en su sistema.
- Probado en escritorio, tablet, mobile vertical y mobile horizontal
  (este último tiene un layout propio en el hero para que entre en pantallas bajas).

## Publicar

Vercel está conectado al repo: cada push a `main` compila y publica solo.
La configuración está fijada en `vercel.json` (framework Astro,
`npm run build`, salida en `dist/`), así que no depende de lo que esté
seleccionado en el panel de Vercel.

Para publicar a mano en cualquier otro hosting: `npm run build` y subí el
contenido de `dist/`. Es HTML/CSS/JS estático, sin servidor.

El dominio sale de `site` en `astro.config.mjs` — de ahí se arman la URL
canónica y las imágenes de Open Graph. Hoy apunta al dominio de Vercel;
cuando se mude al definitivo se cambia esa sola línea.
