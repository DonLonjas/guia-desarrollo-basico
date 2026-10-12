'use strict';

// Generador estatico: replica exactamente lo que sirve server.js (Express + EJS)
// y escribe el resultado en dist/ listo para desplegar en cualquier hosting
// estatico (Vercel incluido). No hay red ni proceso externo: solo fs, path y ejs.

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const ROOT = path.join(__dirname, '..');
const VIEWS_DIR = path.join(ROOT, 'views');
const PUBLIC_DIR = path.join(ROOT, 'public');
const DIST_DIR = path.join(ROOT, 'dist');
const NODE_MODULES = path.join(ROOT, 'node_modules');

// --- Datos: mismo mapeo que server.js:4-28 -------------------------------
const categories = require('../data/categories');
const dataByCategory = {
  html: require('../data/html'),
  css: require('../data/css'),
  js: require('../data/js'),
  jquery: require('../data/jquery'),
  nodejs: require('../data/nodejs'),
  express: require('../data/express'),
  sql: require('../data/sql'),
  mongodb: require('../data/mongodb'),
  json: require('../data/json')
};

// --- Constantes replicadas de server.js:33-51 ----------------------------
const SCRIPTABLE_CATEGORIES = new Set(['js', 'jquery']);

const PREVIEW_RESET = '<style>html,body{margin:0;padding:16px;background:#F4F3F0;color:#191919;font-family:Georgia,"Times New Roman",serif;}@media (prefers-color-scheme: dark){html,body{background:#1C1C1E;color:#E9E8E4;}}</style>';

const JQUERY_SCRIPT = '<script src="/vendor/jquery/jquery.min.js"></script>';

const TAILWIND_LINK = '<link rel="stylesheet" href="/styles/tailwind-preview.generated.css">';

// --- Helpers de sistema de archivos ---------------------------------------
function resetDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(from, to);
    } else {
      copyFile(from, to);
    }
  }
}

function writePage(filePath, html) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html);
}

// Render sincrono con resolucion de includes relativa a views/ (igual que
// hace Express al resolver las plantillas).
function render(templateName, locals) {
  const file = path.join(VIEWS_DIR, templateName + '.ejs');
  const source = fs.readFileSync(file, 'utf8');
  return ejs.render(source, locals, { filename: file });
}

// --- 0. Sanity-checks: fallar pronto y con mensaje accionable -------------
function requirePath(target, message) {
  if (!fs.existsSync(target)) {
    throw new Error(message);
  }
}

requirePath(
  path.join(NODE_MODULES, 'prismjs', 'components'),
  'Falta node_modules/prismjs/components. Ejecuta primero "npm install".'
);
requirePath(
  path.join(NODE_MODULES, '@fontsource', 'jetbrains-mono'),
  'Falta node_modules/@fontsource/jetbrains-mono. Ejecuta primero "npm install".'
);
requirePath(
  path.join(NODE_MODULES, 'jquery', 'dist', 'jquery.min.js'),
  'Falta node_modules/jquery/dist/jquery.min.js. Ejecuta primero "npm install".'
);
requirePath(
  path.join(PUBLIC_DIR, 'styles', 'tailwind-preview.generated.css'),
  'Falta public/styles/tailwind-preview.generated.css. Ejecuta "npm install" y, si aun falta el CSS, "npm run build:tailwind".'
);

// --- 1. Limpiar/recrear dist/ --------------------------------------------
resetDir(DIST_DIR);

// --- 2. Copiar public/ -> dist/ (mismas rutas URL) -----------------------
copyDir(PUBLIC_DIR, DIST_DIR);

// --- 3. Copiar assets de node_modules -> dist/vendor/ ---------------------
// Mismas rutas URL que monta server.js:57-59.

// prism: componentes base que tag.ejs incluye siempre (tag.ejs:63-66) mas un
// componente por cada `language` declarado en las categorias, que tag.ejs:67-75
// emite cuando codeLanguage === category.language. Derivarlo de los datos evita
// pedir /vendor/prism/components/prism-X.min.js inexistente si manana se anade
// una categoria con un `language` nuevo.
const PRISM_BASE_COMPONENTS = [
  'prism-core',
  'prism-markup',
  'prism-clike',
  'prism-javascript'
];
const PRISM_LANGUAGE_COMPONENTS = categories
  .filter((c) => c.language)
  .map((c) => 'prism-' + c.language);
const PRISM_COMPONENTS = [...new Set([...PRISM_BASE_COMPONENTS, ...PRISM_LANGUAGE_COMPONENTS])];
for (const name of PRISM_COMPONENTS) {
  const from = path.join(NODE_MODULES, 'prismjs', 'components', name + '.min.js');
  const to = path.join(DIST_DIR, 'vendor', 'prism', 'components', name + '.min.js');
  copyFile(from, to);
}

// jetbrains-mono: index.css + solo los archivos (woff2/woff) que referencia.
const FONT_SRC = path.join(NODE_MODULES, '@fontsource', 'jetbrains-mono');
const FONT_DEST = path.join(DIST_DIR, 'vendor', 'fonts', 'jetbrains-mono');
const fontCss = fs.readFileSync(path.join(FONT_SRC, 'index.css'), 'utf8');
copyFile(path.join(FONT_SRC, 'index.css'), path.join(FONT_DEST, 'index.css'));
const fontRefs = new Set();
for (const match of fontCss.matchAll(/url\(([^)]+)\)/g)) {
  const ref = match[1].trim().replace(/^['"]|['"]$/g, '');
  if (ref.startsWith('.')) {
    fontRefs.add(path.normalize(path.join(FONT_SRC, ref)));
  }
}
for (const from of fontRefs) {
  copyFile(from, path.join(FONT_DEST, path.relative(FONT_SRC, from)));
}

// jquery: dist/jquery.min.js (referenciado en el srcdoc de jquery, server.js:45).
copyFile(
  path.join(NODE_MODULES, 'jquery', 'dist', 'jquery.min.js'),
  path.join(DIST_DIR, 'vendor', 'jquery', 'jquery.min.js')
);

// --- 4. Renderizar las mismas vistas con las mismas variables ------------
let totalPages = 0;

// Home -> dist/index.html (server.js:61-63)
writePage(path.join(DIST_DIR, 'index.html'), render('home', { categories }));
totalPages += 1;

const perCategory = [];

for (const category of categories) {
  const tags = dataByCategory[category.slug];
  if (!category || !tags) continue; // mismo guard que server.js:65-69 / 84-89

  // Listado de categoria -> dist/{category}/index.html (server.js:71-81)
  const groups = [];
  for (const t of tags) {
    let group = groups.find((g) => g.name === t.group);
    if (!group) {
      group = { name: t.group, tags: [] };
      groups.push(group);
    }
    group.tags.push(t);
  }

  writePage(
    path.join(DIST_DIR, category.slug, 'index.html'),
    render('category', { category, categories, groups })
  );

  // Detalle de cada etiqueta -> dist/{category}/{slug}/index.html (server.js:84-111)
  const seenSlugs = new Set();
  tags.forEach((tag, tagIndex) => {
    if (seenSlugs.has(tag.slug)) {
      throw new Error(
        `Slug duplicado en la categoria "${category.slug}": "${tag.slug}". ` +
        `Express sirve el primero (findIndex), pero el build no puede escribir dos veces ` +
        `dist/${category.slug}/${tag.slug}/index.html. ` +
        `Corrige el slug repetido en el catalogo de la categoria (data/${category.slug}.js).`
      );
    }
    seenSlugs.add(tag.slug);

    const prevTag = tagIndex > 0 ? tags[tagIndex - 1] : null;
    const nextTag = tagIndex < tags.length - 1 ? tags[tagIndex + 1] : null;

    let previewPrefix = '';
    if (category.slug === 'jquery') {
      previewPrefix = JQUERY_SCRIPT;
    } else if (tag.framework === 'tailwind') {
      previewPrefix = TAILWIND_LINK;
    }

    writePage(
      path.join(DIST_DIR, category.slug, tag.slug, 'index.html'),
      render('tag', {
        category,
        categories,
        tag,
        prevTag,
        nextTag,
        position: tagIndex + 1,
        total: tags.length,
        previewReset: previewPrefix + PREVIEW_RESET,
        scriptable: SCRIPTABLE_CATEGORIES.has(category.slug)
      })
    );
  });

  perCategory.push({ slug: category.slug, tags: tags.length });
  totalPages += 1 + tags.length;
}

// 404 -> dist/404.html (Vercel lo sirve automaticamente) (server.js:114-116)
writePage(path.join(DIST_DIR, '404.html'), render('404', { categories }));
totalPages += 1;

// --- 5. Log de progreso ---------------------------------------------------
console.log('Generando sitio estatico en dist/...\n');
for (const row of perCategory) {
  console.log(`  ${row.slug.padEnd(9)} ${String(row.tags).padStart(3)} etiquetas + 1 portada de categoria`);
}
console.log(`\nCategorias: ${perCategory.length}`);
console.log(`Paginas HTML generadas: ${totalPages} (index + ${perCategory.length} categorias + ${totalPages - perCategory.length - 2} etiquetas + 404)`);
console.log('Listo: dist/');
