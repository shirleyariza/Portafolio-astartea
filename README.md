# Astartea · Portafolio de Shirley Ariza

Portafolio web de diseño de marca y gráfico. Es un sitio estático (HTML, CSS y JavaScript): no necesita instalación ni dependencias.

## Qué incluye

- `index.html`: la página completa (inicio, sobre mí, trabajos y contacto).
- `css/styles.css`: estilos. Los colores principales están al inicio, en `:root`.
- `js/main.js`: el video del libro, las galerías, el visor de imágenes y el cambio entre proyectos.
- `assets/img/`: imágenes de cada proyecto (`miron`, `addams`, `uniplata`), la foto de Sobre mí y la imagen para compartir el enlace (`og.jpg`).
- `assets/video/uniplata.mp4`: el recorrido de la app UniPlata.
- `404.html`, `favicon.svg`, `robots.txt`, `.nojekyll`, `.gitignore` y `LICENSE`.

## Publicar en GitHub Pages

1. En github.com crea un repositorio nuevo (por ejemplo `portafolio`) y déjalo público.
2. Sube **el contenido de esta carpeta** (no el `.zip`): en el repositorio elige *Add file > Upload files* y arrastra todo, incluidas las carpetas `assets`, `css` y `js`. Luego *Commit changes*.
3. Ve a *Settings > Pages*. En *Source* elige *Deploy from a branch*, en *Branch* elige `main` y la carpeta `/ (root)`, y guarda.
4. En uno o dos minutos el sitio aparece en `https://TU-USUARIO.github.io/portafolio/`.
   Si nombras el repositorio `TU-USUARIO.github.io`, la dirección queda `https://TU-USUARIO.github.io/`.

## Editar

- **Textos:** en `index.html`.
- **Imágenes:** reemplaza los archivos de `assets/img/` conservando el nombre. Las rutas están en el inicio de `js/main.js`.
- **Contacto:** correo e Instagram, al final de `index.html` (sección `id="contacto"`).

## Vista previa al compartir el enlace

Cuando el sitio ya esté publicado, en `index.html` cambia `content="assets/img/og.jpg"` (etiqueta `og:image`) por la dirección completa, por ejemplo `https://TU-USUARIO.github.io/portafolio/assets/img/og.jpg`.

## Derechos

© 2026 Shirley Ariza. Todos los derechos reservados. Las obras que aparecen en el sitio son originales y no se pueden usar sin autorización.
