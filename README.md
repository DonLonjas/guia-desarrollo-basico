# Guía de Desarrollo Básico

Sitio de documentación para aprender desarrollo web, backend y bases de datos
(HTML, CSS, JavaScript, jQuery, Node.js, Express, SQL, MongoDB y JSON). Cada
etiqueta incluye ejemplo en vivo, código fuente y descripción.

Originalmente era una app **Express + EJS con SSR**. Ahora se puede generar como
**sitio 100% estático** con el mismo contenido y las mismas plantillas, sin tocar
`views/` ni `data/`. El flujo estático convive con el servidor Express original.

## Requisitos

- Node.js (v18 o superior) y npm.

## Uso

```bash
npm install     # instala dependencias
npm run build   # genera dist/ (sitio estático listo para publicar)
npm start       # (opcional) levanta el servidor Express original en :3000
```

- `npm run build` renderiza las plantillas EJS y escribe el sitio completo en
  **`dist/`**: esa es la carpeta lista para publicar.
- `npm start` es opcional: arranca el modo Express original (`node server.js`).
  Sirve para desarrollar en caliente. No es necesario para desplegar.
- `npm run dev` hace lo mismo que `start` pero con recarga automática
  (`node --watch server.js`).

El build es local y determinista: solo usa `fs`, `path` y `ejs` (sin red ni
procesos externos) y replica exactamente la lógica de `server.js`.

## Despliegue en Vercel

La configuración vive en **`vercel.json`** (`buildCommand: npm run build`,
`outputDirectory: dist`, `framework: null`).

### Opción A — conectando un repositorio en GitHub

1. Sube el proyecto a GitHub.
2. En Vercel: **New Project → Import Git Repository** y elige el repositorio.
3. Vercel lee `vercel.json`, ejecuta `npm run build` y publica `dist/`.
   No hay que configurar nada más.
4. Cada push a la rama de producción vuelve a desplegar.

> Nota: hoy el proyecto **no es un repositorio git**. Esta opción requiere
> inicializarlo y subirlo a GitHub.

### Opción B — CLI de Vercel (sin git)

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # despliegue de producción
```

Con `vercel.json` presente, la CLI detecta `buildCommand` y `outputDirectory`:
no hace falta ejecutar el build a mano ni configurar nada en el dashboard.
Como el repositorio no es git hoy, esta opción no requiere inicializar git;
Vercel sube el directorio del proyecto directamente.

## Estructura del output (`dist/`)

```
dist/
├── index.html                        # home
├── 404.html                          # página no encontrada (Vercel la sirve sola)
├── {categoria}/index.html            # listado, p. ej. html/index.html
├── {categoria}/{slug}/index.html     # detalle,  p. ej. html/div/index.html
├── styles/ scripts/ fonts/           # copiados de public/
├── favicon.png  logo.png
└── vendor/                           # prism, jetbrains-mono y jquery,
                                      # con las mismas rutas URL que servía Express
```

El script imprime el desglose por categoría y el total de páginas al terminar
cada build (hoy son ~435 páginas). Si añades entradas en `data/`, re-ejecuta
`npm run build` y consulta ese log para ver el total actualizado.

## Notas de configuración (`vercel.json`)

- **`cleanUrls`: `false` (por defecto).** Las plantillas enlazan rutas sin
  extensión (`/html`, `/html/div`) y cada página vive en
  `{categoria}/{slug}/index.html`. Vercel resuelve el `index.html` de cada
  carpeta de forma automática, así que no hace falta `cleanUrls` (su función es
  quitar la extensión `.html`, que aquí no se usa).
- **`trailingSlash` no se fija.** Al quedar en su valor por defecto, tanto
  `/html/div` como `/html/div/` sirven el mismo contenido sin redirecciones,
  que es lo ideal porque los enlaces internos no llevan barra final.

## Mantenimiento

- **Nuevas etiquetas o categorías** en `data/*.js`: solo hay que re-ejecutar
  `npm run build`. El build lee los mismos datos que Express y regenera todo.
- **Nuevos componentes de Prism o una theme CSS**: hay que ampliar la lista de
  copias en `scripts/build.js` (`dist/vendor/prism/...`). Por defecto solo se
  copian los 7 componentes `.min.js` que referencia `views/tag.ejs`
  (`core, markup, clike, javascript, sql, mongodb, json`) y **ninguna** theme
  CSS, porque hoy no hay ninguna referenciada en las plantillas.
