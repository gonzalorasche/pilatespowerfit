/* ============================================================
   CONTENIDO EDITABLE — Pilates Power Fit
   Tocá solo este archivo para actualizar textos, fechas y links.
   ============================================================ */

export const site = {
  name: 'Pilates Power Fit',
  tagline: 'Esto no es pilates tradicional',
  instagram: 'https://www.instagram.com/pilatespower_fit/',
  instagramHandle: '@pilatespower_fit',
  whatsappNumber: '5491140917742',
  address: 'Casa Amenabar — Colegiales, CABA',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.210608469636!2d-58.446619124526265!3d-34.573537155904425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb52d6be35787%3A0x41f85030374a232f!2sPilates%20Power%20Fit!5e0!3m2!1ses!2sar!4v1774561191576!5m2!1ses!2sar',
  agency: { name: 'Brickell Lab', url: 'https://www.labbrickell.com.ar' },
};

export const wa = (msg = 'Hola! Me interesan las clases de Pilates Power Fit') =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;

/* ------------------------------------------------------------
   NAVEGACIÓN
------------------------------------------------------------ */
export const navLinks = [
  { label: 'Método', href: '#metodo' },
  { label: 'La profe', href: '#profe' },
  { label: 'Clases', href: '#clases' },
  { label: 'Especiales', href: '#especiales' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Comunidad', href: '#comunidad' },
];

/* ------------------------------------------------------------
   TICKER
------------------------------------------------------------ */
export const tickerWords = [
  'Fuerza real',
  'Alta intensidad',
  'Movilidad',
  'Cardio + Core',
  'Resultados visibles',
  'Colegiales · CABA',
  'Power Fit Method',
];

/* ------------------------------------------------------------
   MÉTODO — pilares
------------------------------------------------------------ */
export const pillars = [
  {
    n: '01',
    title: 'Fuerza + Movilidad',
    text: 'Secuencias que combinan carga real con rango articular. Se trabaja el cuerpo entero, no solo el abdomen.',
  },
  {
    n: '02',
    title: 'High Performance',
    text: 'Ritmo sostenido, cardio integrado y progresiones que suben de nivel clase a clase. Nunca es la misma rutina.',
  },
  {
    n: '03',
    title: 'Técnica obsesiva',
    text: 'Cada ejercicio tiene una intención biomecánica. Nada está puesto al azar y todo se corrige en el momento.',
  },
  {
    n: '04',
    title: 'Grupo reducido',
    text: 'Clases grupales con seguimiento uno a uno. Entrenás acompañada, con la exigencia ajustada a tu nivel.',
  },
];

/* ------------------------------------------------------------
   CLASES REGULARES
------------------------------------------------------------ */
export const classCards = [
  {
    tag: 'Presencial',
    title: 'Clase grupal',
    price: 'Lunes y jueves',
    features: [
      'Grupos reducidos con corrección uno a uno',
      'Fuerza, cardio y movilidad en un mismo bloque',
      'Progresiones adaptadas a tu nivel',
    ],
    cta: 'Reservar lugar',
    waMsg: 'Hola! Quiero sumarme a las clases grupales de Pilates Power Fit',
    featured: false,
  },
  {
    tag: 'Lo más elegido',
    title: 'Pack mensual',
    price: '4 u 8 clases',
    features: [
      'Packs de 4 u 8 clases por mes',
      'Seguimiento de tu progreso',
      'Prioridad para reservar horarios',
    ],
    cta: 'Quiero mi pack',
    waMsg: 'Hola! Quiero info sobre los packs mensuales de Pilates Power Fit',
    featured: true,
  },
  {
    tag: 'Primera vez',
    title: 'Clase de prueba',
    price: 'Probá el método',
    features: [
      'Una clase completa para sentir la intensidad',
      'Evaluación inicial de movilidad',
      'Sin compromiso de continuidad',
    ],
    cta: 'Pedir clase de prueba',
    waMsg: 'Hola! Me gustaría solicitar una clase de prueba en Pilates Power Fit',
    featured: false,
  },
];

/* ------------------------------------------------------------
   CLASES ESPECIALES (esporádicas, por única vez)
   status: 'open' | 'last' | 'soldout' | 'soon'
------------------------------------------------------------ */
export const specialClasses = [
  {
    artist: 'Dua Lipa',
    edition: 'Future Nostalgia',
    date: '2026-10-22',
    dateLabel: 'Jue 22 OCT',
    time: '20:00 h',
    status: 'open',
    blurb:
      'Tempo alto de principio a fin. Pensada para quienes ya vienen entrenando y quieren romperla.',
    hue: 'from-cyan',
  },
  {
    artist: 'Madonna',
    edition: 'Vogue Edition',
    date: '2026-11-26',
    dateLabel: 'Jue 26 NOV',
    time: '20:00 h',
    status: 'open',
    blurb:
      'Postura, líneas largas y actitud. Una clase con impronta de danza sobre los himnos de los 80 y 90.',
    hue: 'from-violet',
  },
  {
    artist: 'Sorpresa',
    edition: 'Edición sorpresa',
    date: '2026-12-17',
    dateLabel: 'Jue 17 DIC',
    time: '20:00 h',
    status: 'soon',
    blurb:
      'Cierre de año con artista secreto. Se revela unos días antes por Instagram.',
    hue: 'from-pink',
  },
];

/* Horario fijo de las clases especiales (jueves 20 h, hora de Buenos Aires) */
export const specialTime = { label: 'Jueves · 20:00 h', iso: 'T20:00:00-03:00' };

export const statusLabels = {
  open: 'Inscripción abierta',
  last: 'Últimos lugares',
  soldout: 'Agotada',
  soon: 'Próximamente',
};

/* ------------------------------------------------------------
   TESTIMONIOS
------------------------------------------------------------ */
export const testimonials = [
  {
    name: 'Gonza',
    time: '3 años entrenando',
    img: '/media/gon_opinion.webp',
    text: 'Hace tres años que entreno acá y nunca fue una clase fácil, pero justamente eso es lo que la hace distinta. Es intensa, te exige concentración y fuerza, y siempre sentís que el cuerpo trabaja de verdad.',
  },
  {
    name: 'Vivi',
    time: '3 años entrenando',
    img: '/media/vivi_opinion23.webp',
    text: 'Arranqué hace más de tres años y nunca encontré otra clase igual. No es pilates tradicional ni de cerca: es intensa, desafiante y muy consciente. Me dio fuerza, control y una base increíble para la acrobacia.',
  },
  {
    name: 'Mati',
    time: '3 años entrenando',
    img: '/media/matias_opinion.webp',
    text: 'Lo que más valoro es el nivel de detalle. Cada ejercicio tiene sentido, nada está puesto al azar. Si sos perfeccionista y te gusta entrenar bien, estas clases te atrapan.',
  },
  {
    name: 'Yani',
    time: 'Desde el año pasado',
    img: '/media/yani_opinion.webp',
    text: 'Empecé buscando algo que complemente la acrobacia y encontré mucho más. Es una clase intensa y dinámica, muy distinta al pilates que conocía.',
  },
  {
    name: 'Vale',
    time: 'Desde el año pasado',
    img: '/media/vale_opinion.webp',
    text: 'Llegué pensando que era pilates y me llevé una sorpresa. Es power, exigente y muy completa. Salís con el cuerpo trabajado de verdad y con mucha más energía.',
  },
];

/* ------------------------------------------------------------
   PLAYLISTS
------------------------------------------------------------ */
export const playlists = [
  { name: 'Power Flow', img: '/media/ro1.webp', url: 'https://open.spotify.com/playlist/7aUVXoiXjUCS9mdSg91seE?si=sgjfsNHTQLOWnm_CA1Fnnw&pi=xfr7vVb7Tl2Xm' },
  { name: 'Strength Mode', img: '/media/pilates1.webp', url: 'https://open.spotify.com/playlist/018UPp2Oi1j7rT0E2ZlUmq?si=rwcwxgy3SDGNp9lvBDToAA&pi=DbVjUaHWShyRz' },
  { name: 'Cardio Drive', img: '/media/pilates2.webp', url: 'https://open.spotify.com/playlist/6fPBd68BIRRjjtYSUaUp9p?si=E7uY3aAzRdSZL6F9ysJpjg' },
  { name: 'Focus & Control', img: '/media/pilates3.webp', url: 'https://open.spotify.com/playlist/7oW4EVsGvmxFIfCnBYCuk5?si=85L8ha_ASJGcQ9hKKUD9tw&pi=NBTM8HqVQduN-' },
  { name: 'Stretch & Release', img: '/media/pilates4.webp', url: 'https://open.spotify.com/playlist/2EzBDlwH9s67oFM05D2LlH?si=fFacoVLJQBeCoTzE93n_Zw&pi=FP6bmteWQgqNu' },
];

/* ------------------------------------------------------------
   GRILLA DE INSTAGRAM (reemplazar por posts reales)
------------------------------------------------------------ */
export const igGrid = [
  { img: '/media/pilates5.webp', caption: 'Bloque de fuerza · lunes' },
  { img: '/media/ro2.webp', caption: 'Técnica y control' },
  { img: '/media/pilates2.webp', caption: 'Clase completa' },
  { img: '/media/hero2.webp', caption: 'Core sin pausa' },
  { img: '/media/pilates1.webp', caption: 'Comunidad PPF' },
  { img: '/media/pilates4.webp', caption: 'Movilidad activa' },
];
