const path = require('path');
const express = require('express');

const categories = require('./data/categories');
const htmlTags = require('./data/html');
const cssTags = require('./data/css');
const jsTags = require('./data/js');
const jqueryTags = require('./data/jquery');
const nodejsTags = require('./data/nodejs');
const expressTags = require('./data/express');
const sqlTags = require('./data/sql');
const mongodbTags = require('./data/mongodb');
const jsonTags = require('./data/json');

const app = express();
const PORT = process.env.PORT || 3000;

const dataByCategory = {
  html: htmlTags,
  css: cssTags,
  js: jsTags,
  jquery: jqueryTags,
  nodejs: nodejsTags,
  express: expressTags,
  sql: sqlTags,
  mongodb: mongodbTags,
  json: jsonTags
};

// Categorias cuya vista previa necesita ejecutar scripts de verdad.
// Solo estas reciben sandbox="allow-scripts" en el iframe; HTML y CSS
// se quedan bloqueadas por seguridad, como siempre.
const SCRIPTABLE_CATEGORIES = new Set(['js', 'jquery']);

// Reset inyectado dentro del iframe de vista previa: sin esto el documento
// interno mantiene el fondo blanco por defecto del navegador aunque el
// <iframe> en si tenga otro color de fondo. Responde a prefers-color-scheme
// por su cuenta porque es un documento aparte: las variables CSS de la
// pagina principal no llegan hasta aqui.
const PREVIEW_RESET = '<style>html,body{margin:0;padding:16px;background:#F4F3F0;color:#191919;font-family:Georgia,"Times New Roman",serif;}@media (prefers-color-scheme: dark){html,body{background:#1C1C1E;color:#E9E8E4;}}</style>';

// jQuery se carga aparte para la categoria jquery: no se muestra en el
// bloque de codigo (eso mostraria una linea que el usuario no escribio),
// solo se inyecta en la vista previa, antes del reset de estilos.
const JQUERY_SCRIPT = '<script src="/vendor/jquery/jquery.min.js"></script>';

// Tailwind CSS se carga localmente para los ejemplos que usan clases de
// Tailwind dentro de la categoria CSS. El CSS compilado se sirve desde
// public/styles y se inyecta antes del HTML de ejemplo para que las clases
// se apliquen correctamente.
const TAILWIND_LINK = '<link rel="stylesheet" href="/styles/tailwind-preview.generated.css">';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/vendor/prism', express.static(path.join(__dirname, 'node_modules/prismjs')));
app.use('/vendor/fonts/jetbrains-mono', express.static(path.join(__dirname, 'node_modules/@fontsource/jetbrains-mono')));
app.use('/vendor/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.get('/', (req, res) => {
  res.render('home', { categories });
});

app.get('/:category', (req, res, next) => {
  const category = categories.find((c) => c.slug === req.params.category);
  const tags = dataByCategory[req.params.category];

  if (!category || !tags) return next();

  const groups = [];
  for (const t of tags) {
    let group = groups.find((g) => g.name === t.group);
    if (!group) {
      group = { name: t.group, tags: [] };
      groups.push(group);
    }
    group.tags.push(t);
  }

  res.render('category', { category, categories, groups });
});

app.get('/:category/:slug', (req, res, next) => {
  const category = categories.find((c) => c.slug === req.params.category);
  const tags = dataByCategory[req.params.category];
  const tagIndex = tags ? tags.findIndex((t) => t.slug === req.params.slug) : -1;

  if (!category || !tags || tagIndex === -1) return next();

  const tag = tags[tagIndex];
  const prevTag = tagIndex > 0 ? tags[tagIndex - 1] : null;
  const nextTag = tagIndex < tags.length - 1 ? tags[tagIndex + 1] : null;
  let previewPrefix = '';
  if (category.slug === 'jquery') {
    previewPrefix = JQUERY_SCRIPT;
  } else if (tag.framework === 'tailwind') {
    previewPrefix = TAILWIND_LINK;
  }

  res.render('tag', {
    category,
    categories,
    tag,
    prevTag,
    nextTag,
    position: tagIndex + 1,
    total: tags.length,
    previewReset: previewPrefix + PREVIEW_RESET,
    scriptable: SCRIPTABLE_CATEGORIES.has(category.slug)
  });
});

app.use((req, res) => {
  res.status(404).render('404', { categories });
});

app.listen(PORT, () => {
  console.log(`Guia de Desarrollo Basico corriendo en http://localhost:${PORT}`);
});
