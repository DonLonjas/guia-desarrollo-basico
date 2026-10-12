// Cada etiqueta: `code` es la unica fuente de verdad, alimenta el bloque
// de codigo Y la vista previa en iframe. No dupliques el ejemplo en otro campo.
module.exports = [
  // ---------- Estructura ----------
  {
    slug: 'html',
    tag: '<html>',
    name: 'html',
    group: 'Estructura',
    description: 'Elemento raiz de todo documento HTML. Envuelve <head> y <body> y define el idioma con el atributo lang.',
    attributes: [
      { name: 'lang', description: 'Idioma del documento, por ejemplo "es" o "en".' }
    ],
    code: '<html lang="es">\n  <head>\n    <title>Mi pagina</title>\n  </head>\n  <body>\n    <p>Contenido de la pagina</p>\n  </body>\n</html>'
  },
  {
    slug: 'head',
    tag: '<head>',
    name: 'head',
    group: 'Estructura',
    description: 'Contiene metadatos del documento: titulo, enlaces a estilos, charset y configuracion que no se muestra directamente en la pagina.',
    code: '<head>\n  <meta charset="UTF-8">\n  <title>Mi pagina</title>\n  <meta name="description" content="Ejemplo de head">\n</head>'
  },
  {
    slug: 'body',
    tag: '<body>',
    name: 'body',
    group: 'Estructura',
    description: 'Contiene todo el contenido visible de la pagina: texto, imagenes, enlaces, tablas y demas elementos.',
    code: '<body>\n  <h1>Bienvenido</h1>\n  <p>Este es el contenido visible de la pagina.</p>\n</body>'
  },
  {
    slug: 'div',
    tag: '<div>',
    name: 'div',
    group: 'Estructura',
    description: 'Contenedor generico de bloque sin significado semantico propio. Se usa para agrupar elementos y aplicar estilos o layout.',
    code: '<div style="padding:12px;border:1px solid #ccc;border-radius:6px;">\n  <p>Contenido agrupado dentro de un div</p>\n</div>'
  },
  {
    slug: 'span',
    tag: '<span>',
    name: 'span',
    group: 'Estructura',
    description: 'Contenedor generico en linea, sin significado semantico propio. Util para aplicar estilos a una parte de un texto.',
    code: '<p>Este es un <span style="color:#e06c75;font-weight:bold;">texto resaltado</span> dentro de un parrafo.</p>'
  },
  {
    slug: 'header',
    tag: '<header>',
    name: 'header',
    group: 'Estructura',
    description: 'Representa la cabecera de una pagina o de una seccion: suele contener el logo, el titulo y la navegacion principal.',
    code: '<header style="padding:10px;background:#eee;border-radius:6px;">\n  <h2 style="margin:0;">Mi sitio web</h2>\n</header>'
  },
  {
    slug: 'footer',
    tag: '<footer>',
    name: 'footer',
    group: 'Estructura',
    description: 'Representa el pie de una pagina o de una seccion: suele contener creditos, enlaces legales o datos de contacto.',
    code: '<footer style="padding:10px;background:#eee;border-radius:6px;text-align:center;">\n  &copy; 2026 Mi sitio\n</footer>'
  },
  {
    slug: 'main',
    tag: '<main>',
    name: 'main',
    group: 'Estructura',
    description: 'Marca el contenido principal y unico de la pagina, excluyendo cabeceras, pies y barras laterales repetidas.',
    code: '<main>\n  <h2>Contenido principal</h2>\n  <p>Aqui va la informacion central de la pagina.</p>\n</main>'
  },
  {
    slug: 'section',
    tag: '<section>',
    name: 'section',
    group: 'Estructura',
    description: 'Agrupa contenido tematicamente relacionado, normalmente con su propio encabezado.',
    code: '<section>\n  <h2>Nuestros servicios</h2>\n  <p>Descripcion de los servicios ofrecidos.</p>\n</section>'
  },
  {
    slug: 'article',
    tag: '<article>',
    name: 'article',
    group: 'Estructura',
    description: 'Representa contenido independiente y autocontenido, como un post de blog o una noticia, que tiene sentido por si solo.',
    code: '<article>\n  <h2>Titulo del articulo</h2>\n  <p>Contenido independiente que podria distribuirse por separado.</p>\n</article>'
  },
  {
    slug: 'aside',
    tag: '<aside>',
    name: 'aside',
    group: 'Estructura',
    description: 'Contenido relacionado pero secundario respecto al contenido principal, como una barra lateral o notas relacionadas.',
    code: '<aside style="padding:10px;border-left:3px solid #569cd6;">\n  <p>Dato relacionado o enlace recomendado.</p>\n</aside>'
  },
  {
    slug: 'nav',
    tag: '<nav>',
    name: 'nav',
    group: 'Estructura',
    description: 'Agrupa un conjunto de enlaces de navegacion principal, como el menu del sitio.',
    code: '<nav>\n  <a href="#inicio" style="margin-right:10px;">Inicio</a>\n  <a href="#servicios" style="margin-right:10px;">Servicios</a>\n  <a href="#contacto">Contacto</a>\n</nav>'
  },

  // ---------- Metadatos ----------
  {
    slug: 'title',
    tag: '<title>',
    name: 'title',
    group: 'Metadatos',
    description: 'Define el titulo del documento, mostrado en la pestania del navegador y usado por los buscadores.',
    note: 'No tiene representacion visual dentro del cuerpo de la pagina.',
    code: '<title>Mi pagina web</title>\n<p>La etiqueta title no se muestra aqui: define el texto de la pestania del navegador.</p>'
  },
  {
    slug: 'meta',
    tag: '<meta>',
    name: 'meta',
    group: 'Metadatos',
    description: 'Define metadatos del documento como el charset, la descripcion para buscadores o el viewport para moviles.',
    note: 'No tiene representacion visual: su efecto es invisible en el contenido.',
    attributes: [
      { name: 'charset', description: 'Codificacion de caracteres del documento, por ejemplo "UTF-8".' },
      { name: 'name / content', description: 'Par clave-valor para metadatos como description o viewport.' }
    ],
    code: '<meta name="description" content="Ejemplo de meta">\n<p>La etiqueta meta no se muestra: aqui define la descripcion para buscadores.</p>'
  },
  {
    slug: 'link',
    tag: '<link>',
    name: 'link',
    group: 'Metadatos',
    description: 'Enlaza recursos externos al documento, como hojas de estilo CSS o el favicon.',
    note: 'No tiene representacion visual directa en el contenido.',
    attributes: [
      { name: 'rel', description: 'Relacion con el recurso, por ejemplo "stylesheet" o "icon".' },
      { name: 'href', description: 'Ruta del recurso enlazado.' }
    ],
    code: '<link rel="icon" href="favicon.ico">\n<p>La etiqueta link no se muestra: aqui enlaza el favicon del sitio.</p>'
  },
  {
    slug: 'style',
    tag: '<style>',
    name: 'style',
    group: 'Metadatos',
    description: 'Define reglas CSS directamente dentro del documento, sin necesidad de un archivo externo.',
    code: '<style>\n  .demo { color: #e06c75; font-weight: bold; }\n</style>\n<p class="demo">Texto con estilos definidos en un bloque style.</p>'
  },
  {
    slug: 'base',
    tag: '<base>',
    name: 'base',
    group: 'Metadatos',
    description: 'Define la URL base que se usara para resolver todas las URLs relativas de la pagina.',
    note: 'No tiene representacion visual directa en el contenido.',
    code: '<base href="https://example.com/">\n<p>La etiqueta base no se muestra: define la URL base para enlaces relativos.</p>'
  },

  // ---------- Texto ----------
  {
    slug: 'h1',
    tag: '<h1>-<h6>',
    name: 'Encabezados',
    group: 'Texto',
    description: 'Seis niveles de encabezado, de h1 (mas importante) a h6 (menos importante). Definen la jerarquia del contenido.',
    code: '<h1>Encabezado nivel 1</h1>\n<h2>Encabezado nivel 2</h2>\n<h3>Encabezado nivel 3</h3>\n<h4>Encabezado nivel 4</h4>\n<h5>Encabezado nivel 5</h5>\n<h6>Encabezado nivel 6</h6>'
  },
  {
    slug: 'p',
    tag: '<p>',
    name: 'p',
    group: 'Texto',
    description: 'Define un parrafo de texto. Los navegadores anaden margen vertical automatico entre parrafos.',
    code: '<p>Este es un parrafo de ejemplo con texto normal para mostrar como se comporta el elemento p.</p>\n<p>Este es un segundo parrafo, separado del anterior por el margen por defecto.</p>'
  },
  {
    slug: 'strong',
    tag: '<strong>',
    name: 'strong',
    group: 'Texto',
    description: 'Indica que el texto tiene fuerte importancia. Los navegadores lo muestran en negrita por defecto.',
    code: '<p>Este texto es normal, pero <strong>esta parte es muy importante</strong>.</p>'
  },
  {
    slug: 'em',
    tag: '<em>',
    name: 'em',
    group: 'Texto',
    description: 'Da enfasis al texto que envuelve. Los navegadores lo muestran en cursiva por defecto.',
    code: '<p>Este texto es normal, pero <em>esta parte tiene enfasis</em>.</p>'
  },
  {
    slug: 'b',
    tag: '<b>',
    name: 'b',
    group: 'Texto',
    description: 'Resalta texto visualmente en negrita sin implicar importancia adicional, a diferencia de strong.',
    code: '<p>Un termino tecnico como <b>API</b> resaltado sin dar a entender importancia.</p>'
  },
  {
    slug: 'i',
    tag: '<i>',
    name: 'i',
    group: 'Texto',
    description: 'Muestra texto en cursiva para indicar una voz o animo distinto, como un termino tecnico o un pensamiento, sin implicar enfasis.',
    code: '<p>El termino <i>lorem ipsum</i> se usa como texto de relleno.</p>'
  },
  {
    slug: 'u',
    tag: '<u>',
    name: 'u',
    group: 'Texto',
    description: 'Muestra texto subrayado, util para indicar errores ortograficos o anotaciones, sin ser un enlace.',
    code: '<p>Esta palabra contiene un <u>error</u> marcado.</p>'
  },
  {
    slug: 'small',
    tag: '<small>',
    name: 'small',
    group: 'Texto',
    description: 'Reduce el tamanio del texto, tipicamente usado para notas legales o aclaraciones secundarias.',
    code: '<p>Precio: $100 <small>(impuestos no incluidos)</small></p>'
  },
  {
    slug: 'mark',
    tag: '<mark>',
    name: 'mark',
    group: 'Texto',
    description: 'Resalta texto con un fondo amarillo por defecto, como si estuviera marcado con un resaltador.',
    code: '<p>Busca la palabra <mark>importante</mark> en este parrafo.</p>'
  },
  {
    slug: 'del',
    tag: '<del>',
    name: 'del',
    group: 'Texto',
    description: 'Marca texto que fue eliminado de un documento, mostrado tachado por defecto.',
    code: '<p>Precio: <del>$50</del> ahora $35</p>'
  },
  {
    slug: 'ins',
    tag: '<ins>',
    name: 'ins',
    group: 'Texto',
    description: 'Marca texto que fue insertado o anadido a un documento, mostrado subrayado por defecto.',
    code: '<p>El texto <ins>agregado recientemente</ins> se muestra subrayado.</p>'
  },
  {
    slug: 'sub',
    tag: '<sub>',
    name: 'sub',
    group: 'Texto',
    description: 'Muestra texto en subindice, desplazado hacia abajo, comun en formulas quimicas.',
    code: '<p>La formula del agua es H<sub>2</sub>O</p>'
  },
  {
    slug: 'sup',
    tag: '<sup>',
    name: 'sup',
    group: 'Texto',
    description: 'Muestra texto en superindice, desplazado hacia arriba, comun en notas al pie o potencias.',
    code: '<p>La ecuacion es x<sup>2</sup> + y<sup>2</sup></p>'
  },
  {
    slug: 'blockquote',
    tag: '<blockquote>',
    name: 'blockquote',
    group: 'Texto',
    description: 'Representa una cita larga proveniente de otra fuente, mostrada con sangria por defecto.',
    code: '<blockquote style="border-left:3px solid #999;margin:0;padding-left:12px;">\n  El unico modo de hacer un gran trabajo es amar lo que haces.\n</blockquote>'
  },
  {
    slug: 'q',
    tag: '<q>',
    name: 'q',
    group: 'Texto',
    description: 'Representa una cita corta en linea, el navegador anade comillas automaticamente.',
    code: '<p>Como dijo el autor: <q>la simplicidad es la maxima sofisticacion</q>.</p>'
  },
  {
    slug: 'cite',
    tag: '<cite>',
    name: 'cite',
    group: 'Texto',
    description: 'Indica el titulo de una obra citada, como un libro, articulo o pelicula. Se muestra en cursiva por defecto.',
    code: '<p><cite>Cien anios de soledad</cite>, de Gabriel Garcia Marquez.</p>'
  },
  {
    slug: 'code',
    tag: '<code>',
    name: 'code',
    group: 'Texto',
    description: 'Marca un fragmento de codigo dentro del texto, mostrado en fuente monoespaciada.',
    code: '<p>Usa la funcion <code>console.log()</code> para depurar.</p>'
  },
  {
    slug: 'pre',
    tag: '<pre>',
    name: 'pre',
    group: 'Texto',
    description: 'Mantiene el formato exacto del texto, incluyendo espacios y saltos de linea, en fuente monoespaciada.',
    code: '<pre>function saludar() {\n  return "Hola";\n}</pre>'
  },
  {
    slug: 'kbd',
    tag: '<kbd>',
    name: 'kbd',
    group: 'Texto',
    description: 'Representa una entrada de teclado del usuario, mostrada en fuente monoespaciada.',
    code: '<p>Presiona <kbd>Ctrl</kbd> + <kbd>C</kbd> para copiar.</p>'
  },
  {
    slug: 'samp',
    tag: '<samp>',
    name: 'samp',
    group: 'Texto',
    description: 'Representa la salida de ejemplo de un programa o sistema, mostrada en fuente monoespaciada.',
    code: '<p>La consola mostro: <samp>Archivo guardado correctamente</samp></p>'
  },
  {
    slug: 'var',
    tag: '<var>',
    name: 'var',
    group: 'Texto',
    description: 'Representa una variable en un contexto matematico o de programacion, mostrada en cursiva.',
    code: '<p>La ecuacion usa las variables <var>x</var> y <var>y</var>.</p>'
  },
  {
    slug: 'abbr',
    tag: '<abbr>',
    name: 'abbr',
    group: 'Texto',
    description: 'Marca una abreviatura o sigla; el atributo title muestra el significado completo al pasar el cursor.',
    attributes: [
      { name: 'title', description: 'Texto completo que representa la abreviatura.' }
    ],
    code: '<p><abbr title="HyperText Markup Language">HTML</abbr> es el lenguaje base de la web.</p>'
  },
  {
    slug: 'address',
    tag: '<address>',
    name: 'address',
    group: 'Texto',
    description: 'Contiene informacion de contacto del autor o duenio del documento, mostrada en cursiva por defecto.',
    code: '<address>\n  Escrito por Ana Perez.<br>\n  Contacto: <a href="mailto:ana@ejemplo.com">ana@ejemplo.com</a>\n</address>'
  },
  {
    slug: 'time',
    tag: '<time>',
    name: 'time',
    group: 'Texto',
    description: 'Representa una fecha u hora legible por humanos, con un valor legible por maquina en el atributo datetime.',
    attributes: [
      { name: 'datetime', description: 'Fecha/hora en formato estandar ISO 8601.' }
    ],
    code: '<p>Publicado el <time datetime="2026-08-01">1 de agosto de 2026</time></p>'
  },
  {
    slug: 'br',
    tag: '<br>',
    name: 'br',
    group: 'Texto',
    description: 'Inserta un salto de linea dentro de un bloque de texto. Es un elemento vacio, sin etiqueta de cierre.',
    code: '<p>Primera linea<br>Segunda linea</p>'
  },
  {
    slug: 'hr',
    tag: '<hr>',
    name: 'hr',
    group: 'Texto',
    description: 'Inserta una linea horizontal que representa un cambio tematico entre dos secciones de contenido.',
    code: '<p>Primer tema.</p>\n<hr>\n<p>Segundo tema, separado visualmente.</p>'
  },

  // ---------- Listas ----------
  {
    slug: 'ul',
    tag: '<ul>',
    name: 'ul',
    group: 'Listas',
    description: 'Lista desordenada. Cada elemento hijo debe ser un <li> y se muestra con una vineta.',
    code: '<ul>\n  <li>Primer elemento</li>\n  <li>Segundo elemento</li>\n  <li>Tercer elemento</li>\n</ul>'
  },
  {
    slug: 'ol',
    tag: '<ol>',
    name: 'ol',
    group: 'Listas',
    description: 'Lista ordenada. Cada elemento hijo debe ser un <li> y se numera automaticamente.',
    code: '<ol>\n  <li>Paso uno</li>\n  <li>Paso dos</li>\n  <li>Paso tres</li>\n</ol>'
  },
  {
    slug: 'li',
    tag: '<li>',
    name: 'li',
    group: 'Listas',
    description: 'Elemento de lista. Debe estar dentro de un <ul>, <ol> o <menu>.',
    code: '<ul>\n  <li>Un elemento de lista independiente</li>\n</ul>'
  },
  {
    slug: 'dl',
    tag: '<dl>',
    name: 'dl',
    group: 'Listas',
    description: 'Lista de descripcion, agrupa pares termino-definicion mediante <dt> y <dd>.',
    code: '<dl>\n  <dt>HTML</dt>\n  <dd>Lenguaje de marcado para estructurar paginas web.</dd>\n</dl>'
  },
  {
    slug: 'dt',
    tag: '<dt>',
    name: 'dt',
    group: 'Listas',
    description: 'Define el termino dentro de una lista de descripcion <dl>.',
    code: '<dl>\n  <dt>CSS</dt>\n  <dd>Lenguaje para dar estilo a las paginas web.</dd>\n</dl>'
  },
  {
    slug: 'dd',
    tag: '<dd>',
    name: 'dd',
    group: 'Listas',
    description: 'Define la descripcion o definicion del termino anterior en una lista <dl>.',
    code: '<dl>\n  <dt>JavaScript</dt>\n  <dd>Lenguaje de programacion para dar interactividad a la web.</dd>\n</dl>'
  },

  // ---------- Enlaces y medios ----------
  {
    slug: 'a',
    tag: '<a>',
    name: 'a',
    group: 'Enlaces y medios',
    description: 'Crea un hiperenlace a otra pagina, recurso o seccion de la misma pagina mediante el atributo href.',
    attributes: [
      { name: 'href', description: 'URL de destino del enlace.' },
      { name: 'target', description: 'Donde abrir el enlace, por ejemplo "_blank" para una pestania nueva.' }
    ],
    code: '<a href="https://developer.mozilla.org" target="_blank">Visitar MDN</a>'
  },
  {
    slug: 'img',
    tag: '<img>',
    name: 'img',
    group: 'Enlaces y medios',
    description: 'Incrusta una imagen en la pagina. Es un elemento vacio (sin etiqueta de cierre) que requiere src y alt.',
    attributes: [
      { name: 'src', description: 'Ruta o URL de la imagen.' },
      { name: 'alt', description: 'Texto alternativo para accesibilidad y cuando la imagen no carga.' }
    ],
    code: '<img src="https://placehold.co/300x150" alt="Imagen de ejemplo" style="max-width:100%;border-radius:6px;">'
  },
  {
    slug: 'figure',
    tag: '<figure>',
    name: 'figure',
    group: 'Enlaces y medios',
    description: 'Agrupa contenido multimedia autonomo, como una imagen, junto con su leyenda mediante <figcaption>.',
    code: '<figure>\n  <img src="https://placehold.co/300x150" alt="Ejemplo" style="max-width:100%;border-radius:6px;">\n  <figcaption>Descripcion de la imagen</figcaption>\n</figure>'
  },
  {
    slug: 'figcaption',
    tag: '<figcaption>',
    name: 'figcaption',
    group: 'Enlaces y medios',
    description: 'Define la leyenda o pie de un elemento <figure>.',
    code: '<figure>\n  <img src="https://placehold.co/300x150" alt="Grafico" style="max-width:100%;border-radius:6px;">\n  <figcaption>Figura 1: crecimiento anual</figcaption>\n</figure>'
  },
  {
    slug: 'picture',
    tag: '<picture>',
    name: 'picture',
    group: 'Enlaces y medios',
    description: 'Permite ofrecer varias versiones de una imagen segun el dispositivo, usando <source> con una <img> de respaldo.',
    code: '<picture>\n  <source srcset="https://placehold.co/300x150/222/fff" media="(min-width: 1px)">\n  <img src="https://placehold.co/300x150" alt="Imagen con picture" style="max-width:100%;border-radius:6px;">\n</picture>'
  },
  {
    slug: 'source',
    tag: '<source>',
    name: 'source',
    group: 'Enlaces y medios',
    description: 'Especifica un recurso multimedia alternativo dentro de <picture>, <video> o <audio>.',
    code: '<picture>\n  <source srcset="https://placehold.co/300x150/222/fff" media="(min-width: 1px)">\n  <img src="https://placehold.co/300x150" alt="Imagen con source" style="max-width:100%;border-radius:6px;">\n</picture>'
  },

  // ---------- Multimedia ----------
  {
    slug: 'audio',
    tag: '<audio>',
    name: 'audio',
    group: 'Multimedia',
    description: 'Incrusta contenido de audio con controles nativos de reproduccion.',
    attributes: [
      { name: 'controls', description: 'Muestra los controles de reproduccion del navegador.' }
    ],
    code: '<audio controls>\n  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" type="audio/mpeg">\n  Tu navegador no soporta audio.\n</audio>'
  },
  {
    slug: 'video',
    tag: '<video>',
    name: 'video',
    group: 'Multimedia',
    description: 'Incrusta contenido de video con controles nativos de reproduccion.',
    attributes: [
      { name: 'controls', description: 'Muestra los controles de reproduccion del navegador.' },
      { name: 'poster', description: 'Imagen mostrada antes de reproducir el video.' }
    ],
    code: '<video controls width="260" poster="https://placehold.co/300x150">\n  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">\n  Tu navegador no soporta video.\n</video>'
  },
  {
    slug: 'track',
    tag: '<track>',
    name: 'track',
    group: 'Multimedia',
    description: 'Anade subtitulos, capitulos u otras pistas de texto sincronizadas a un <video> o <audio>.',
    code: '<video controls width="260">\n  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">\n  <track kind="captions" srclang="es" label="Espaniol" default>\n</video>'
  },
  {
    slug: 'iframe',
    tag: '<iframe>',
    name: 'iframe',
    group: 'Multimedia',
    description: 'Incrusta otro documento HTML dentro de la pagina actual, en su propio contexto de navegacion.',
    attributes: [
      { name: 'src / srcdoc', description: 'URL o HTML en linea del contenido a incrustar.' },
      { name: 'sandbox', description: 'Restringe permisos del contenido incrustado por seguridad.' }
    ],
    code: '<iframe srcdoc="<p style=\'font-family:sans-serif;padding:10px;\'>Contenido incrustado</p>" width="100%" height="80" style="border:1px solid #999;border-radius:6px;"></iframe>'
  },
  {
    slug: 'embed',
    tag: '<embed>',
    name: 'embed',
    group: 'Multimedia',
    description: 'Incrusta contenido externo gestionado por un plugin del navegador, como imagenes, PDF o video.',
    code: '<embed src="https://placehold.co/200x100" type="image/png" width="200" height="100">'
  },
  {
    slug: 'object',
    tag: '<object>',
    name: 'object',
    group: 'Multimedia',
    description: 'Incrusta un recurso externo, como una imagen, PDF u otro documento, con contenido de respaldo si falla.',
    code: '<object data="https://placehold.co/200x100" type="image/png" width="200" height="100">\n  Tu navegador no soporta este recurso.\n</object>'
  },
  {
    slug: 'param',
    tag: '<param>',
    name: 'param',
    group: 'Multimedia',
    description: 'Define un parametro de configuracion para un elemento <object>, usado principalmente en recursos heredados.',
    code: '<object data="about:blank" width="200" height="60">\n  <param name="autoplay" value="false">\n  Parametro configurado para un recurso incrustado.\n</object>'
  },

  // ---------- Tablas ----------
  {
    slug: 'table',
    tag: '<table>',
    name: 'table',
    group: 'Tablas',
    description: 'Define una tabla de datos. Se compone de filas <tr> con celdas <th> (encabezado) o <td> (dato).',
    code: '<table border="1" cellpadding="6" style="border-collapse:collapse;">\n  <tr>\n    <th>Nombre</th>\n    <th>Edad</th>\n  </tr>\n  <tr>\n    <td>Ana</td>\n    <td>28</td>\n  </tr>\n  <tr>\n    <td>Luis</td>\n    <td>34</td>\n  </tr>\n</table>'
  },
  {
    slug: 'thead',
    tag: '<thead>',
    name: 'thead',
    group: 'Tablas',
    description: 'Agrupa las filas de encabezado de una tabla, separandolas del cuerpo de datos.',
    code: '<table border="1" cellpadding="6" style="border-collapse:collapse;">\n  <thead>\n    <tr><th>Producto</th><th>Precio</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Cafe</td><td>$3</td></tr>\n  </tbody>\n</table>'
  },
  {
    slug: 'tbody',
    tag: '<tbody>',
    name: 'tbody',
    group: 'Tablas',
    description: 'Agrupa las filas que forman el cuerpo principal de datos de una tabla.',
    code: '<table border="1" cellpadding="6" style="border-collapse:collapse;">\n  <thead>\n    <tr><th>Producto</th><th>Precio</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Te</td><td>$2</td></tr>\n    <tr><td>Cafe</td><td>$3</td></tr>\n  </tbody>\n</table>'
  },
  {
    slug: 'tfoot',
    tag: '<tfoot>',
    name: 'tfoot',
    group: 'Tablas',
    description: 'Agrupa las filas de pie de una tabla, usadas comunmente para totales o resumenes.',
    code: '<table border="1" cellpadding="6" style="border-collapse:collapse;">\n  <tbody>\n    <tr><td>Cafe</td><td>$3</td></tr>\n    <tr><td>Te</td><td>$2</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><td>Total</td><td>$5</td></tr>\n  </tfoot>\n</table>'
  },
  {
    slug: 'tr',
    tag: '<tr>',
    name: 'tr',
    group: 'Tablas',
    description: 'Define una fila dentro de una tabla, contenedora de celdas <th> o <td>.',
    code: '<table border="1" cellpadding="6" style="border-collapse:collapse;">\n  <tr><td>Fila unica</td><td>Otra celda</td></tr>\n</table>'
  },
  {
    slug: 'th',
    tag: '<th>',
    name: 'th',
    group: 'Tablas',
    description: 'Define una celda de encabezado de tabla, mostrada en negrita y centrada por defecto.',
    code: '<table border="1" cellpadding="6" style="border-collapse:collapse;">\n  <tr><th>Encabezado</th><td>Dato normal</td></tr>\n</table>'
  },
  {
    slug: 'td',
    tag: '<td>',
    name: 'td',
    group: 'Tablas',
    description: 'Define una celda de datos estandar dentro de una fila de tabla.',
    code: '<table border="1" cellpadding="6" style="border-collapse:collapse;">\n  <tr><th>Nombre</th><td>Ana</td></tr>\n</table>'
  },
  {
    slug: 'caption',
    tag: '<caption>',
    name: 'caption',
    group: 'Tablas',
    description: 'Define un titulo o leyenda para una tabla, mostrado por encima de esta.',
    code: '<table border="1" cellpadding="6" style="border-collapse:collapse;">\n  <caption>Tabla de precios</caption>\n  <tr><th>Producto</th><th>Precio</th></tr>\n  <tr><td>Te</td><td>$2</td></tr>\n</table>'
  },
  {
    slug: 'colgroup',
    tag: '<colgroup>',
    name: 'colgroup',
    group: 'Tablas',
    description: 'Agrupa una o mas columnas de una tabla para aplicarles estilo en conjunto mediante <col>.',
    code: '<table border="1" cellpadding="6" style="border-collapse:collapse;">\n  <colgroup>\n    <col style="background:#fdecc8;">\n    <col>\n  </colgroup>\n  <tr><th>Producto</th><th>Precio</th></tr>\n  <tr><td>Cafe</td><td>$3</td></tr>\n</table>'
  },
  {
    slug: 'col',
    tag: '<col>',
    name: 'col',
    group: 'Tablas',
    description: 'Define las propiedades de una columna especifica dentro de un <colgroup>.',
    code: '<table border="1" cellpadding="6" style="border-collapse:collapse;">\n  <colgroup>\n    <col span="1" style="background:#e8f0fe;">\n  </colgroup>\n  <tr><th>Destacado</th><th>Normal</th></tr>\n  <tr><td>A</td><td>B</td></tr>\n</table>'
  },

  // ---------- Formularios ----------
  {
    slug: 'form',
    tag: '<form>',
    name: 'form',
    group: 'Formularios',
    description: 'Contenedor para elementos interactivos que envian datos, como campos de texto y botones.',
    code: '<form>\n  <label>Nombre:\n    <input type="text" placeholder="Escribe tu nombre">\n  </label>\n  <br><br>\n  <button type="button">Enviar</button>\n</form>'
  },
  {
    slug: 'input',
    tag: '<input>',
    name: 'input',
    group: 'Formularios',
    description: 'Campo de entrada de datos. El atributo type determina su comportamiento: texto, numero, casilla, etc.',
    attributes: [
      { name: 'type', description: 'Tipo de campo: text, number, checkbox, email, password...' },
      { name: 'placeholder', description: 'Texto de ejemplo mostrado cuando el campo esta vacio.' }
    ],
    code: '<input type="text" placeholder="Texto">\n<br><br>\n<input type="checkbox" id="acepto">\n<label for="acepto">Acepto los terminos</label>'
  },
  {
    slug: 'textarea',
    tag: '<textarea>',
    name: 'textarea',
    group: 'Formularios',
    description: 'Campo de texto multilinea, util para comentarios o mensajes largos.',
    code: '<textarea rows="3" cols="30" placeholder="Escribe un comentario..."></textarea>'
  },
  {
    slug: 'select',
    tag: '<select>',
    name: 'select',
    group: 'Formularios',
    description: 'Crea una lista desplegable de opciones, definidas mediante elementos <option>.',
    code: '<select>\n  <option value="mx">Mexico</option>\n  <option value="co">Colombia</option>\n  <option value="ar">Argentina</option>\n</select>'
  },
  {
    slug: 'option',
    tag: '<option>',
    name: 'option',
    group: 'Formularios',
    description: 'Define una opcion individual dentro de un <select>, <optgroup> o <datalist>.',
    code: '<select>\n  <option value="1">Uno</option>\n  <option value="2" selected>Dos</option>\n  <option value="3">Tres</option>\n</select>'
  },
  {
    slug: 'optgroup',
    tag: '<optgroup>',
    name: 'optgroup',
    group: 'Formularios',
    description: 'Agrupa varias opciones relacionadas dentro de un <select> bajo una misma etiqueta.',
    code: '<select>\n  <optgroup label="Frutas">\n    <option>Manzana</option>\n    <option>Banana</option>\n  </optgroup>\n  <optgroup label="Verduras">\n    <option>Zanahoria</option>\n  </optgroup>\n</select>'
  },
  {
    slug: 'button',
    tag: '<button>',
    name: 'button',
    group: 'Formularios',
    description: 'Boton clicable. Puede enviar un formulario, resetearlo o ejecutar codigo segun su atributo type.',
    attributes: [
      { name: 'type', description: '"submit", "reset" o "button" (por defecto dentro de un form es submit).' }
    ],
    code: '<button type="button" style="padding:8px 16px;border-radius:6px;background:#569cd6;color:white;border:none;">Haz clic</button>'
  },
  {
    slug: 'label',
    tag: '<label>',
    name: 'label',
    group: 'Formularios',
    description: 'Asocia un texto descriptivo a un campo de formulario, mejorando la accesibilidad y el area clicable.',
    attributes: [
      { name: 'for', description: 'ID del campo de formulario asociado.' }
    ],
    code: '<label for="correo">Correo electronico:</label>\n<input type="email" id="correo" placeholder="tucorreo@ejemplo.com">'
  },
  {
    slug: 'fieldset',
    tag: '<fieldset>',
    name: 'fieldset',
    group: 'Formularios',
    description: 'Agrupa visualmente varios campos relacionados de un formulario dentro de un recuadro.',
    code: '<fieldset>\n  <legend>Datos personales</legend>\n  <label>Nombre: <input type="text"></label>\n</fieldset>'
  },
  {
    slug: 'legend',
    tag: '<legend>',
    name: 'legend',
    group: 'Formularios',
    description: 'Define el titulo de un elemento <fieldset>.',
    code: '<fieldset>\n  <legend>Direccion de envio</legend>\n  <label>Ciudad: <input type="text"></label>\n</fieldset>'
  },
  {
    slug: 'datalist',
    tag: '<datalist>',
    name: 'datalist',
    group: 'Formularios',
    description: 'Ofrece una lista de sugerencias predefinidas para un <input>, combinando texto libre con autocompletado.',
    code: '<input list="frutas" placeholder="Elige una fruta">\n<datalist id="frutas">\n  <option value="Manzana"></option>\n  <option value="Banana"></option>\n  <option value="Cereza"></option>\n</datalist>'
  },
  {
    slug: 'output',
    tag: '<output>',
    name: 'output',
    group: 'Formularios',
    description: 'Muestra el resultado de un calculo o de una accion del usuario dentro de un formulario.',
    code: '<form>\n  <input type="number" value="5"> +\n  <input type="number" value="3"> =\n  <output>8</output>\n</form>'
  },
  {
    slug: 'progress',
    tag: '<progress>',
    name: 'progress',
    group: 'Formularios',
    description: 'Muestra el progreso de una tarea, como la descarga de un archivo, mediante una barra visual.',
    attributes: [
      { name: 'value / max', description: 'Valor actual y valor maximo del progreso.' }
    ],
    code: '<progress value="70" max="100"></progress>'
  },
  {
    slug: 'meter',
    tag: '<meter>',
    name: 'meter',
    group: 'Formularios',
    description: 'Representa una medicion escalar dentro de un rango conocido, como el uso de disco o una calificacion.',
    attributes: [
      { name: 'value / min / max', description: 'Valor actual y limites del rango medido.' }
    ],
    code: '<meter value="0.6" min="0" max="1">60%</meter>'
  },

  // ---------- Interactivos ----------
  {
    slug: 'details',
    tag: '<details>',
    name: 'details',
    group: 'Interactivos',
    description: 'Crea un widget que el usuario puede expandir o contraer para mostrar u ocultar contenido, sin necesidad de JavaScript.',
    code: '<details open>\n  <summary>Haz clic para expandir</summary>\n  <p>Contenido oculto que se muestra al expandir.</p>\n</details>'
  },
  {
    slug: 'summary',
    tag: '<summary>',
    name: 'summary',
    group: 'Interactivos',
    description: 'Define el titulo visible y clicable de un elemento <details>.',
    code: '<details>\n  <summary>Ver mas informacion</summary>\n  <p>Aqui va el contenido adicional.</p>\n</details>'
  },
  {
    slug: 'dialog',
    tag: '<dialog>',
    name: 'dialog',
    group: 'Interactivos',
    description: 'Representa una ventana de dialogo o modal, que puede mostrarse u ocultarse mediante el atributo open.',
    code: '<dialog open style="border-radius:8px;">\n  <p>Este es un dialog abierto.</p>\n</dialog>'
  },

  // ---------- Scripting ----------
  {
    slug: 'script',
    tag: '<script>',
    name: 'script',
    group: 'Scripting',
    description: 'Incrusta o enlaza codigo JavaScript ejecutable dentro del documento.',
    note: 'Por seguridad, la vista previa desactiva la ejecucion de scripts; el codigo se muestra pero no se ejecuta aqui.',
    code: '<script>\n  document.body.insertAdjacentHTML("beforeend", "<p>Generado por JavaScript</p>");\n</script>\n<p>El script intenta aniadir un parrafo (bloqueado en esta vista previa por seguridad).</p>'
  },
  {
    slug: 'noscript',
    tag: '<noscript>',
    name: 'noscript',
    group: 'Scripting',
    description: 'Define contenido alternativo que se muestra cuando JavaScript esta deshabilitado en el navegador.',
    code: '<script>\n  document.write("<p>Este texto solo aparece si JavaScript esta activo.</p>");\n</script>\n<noscript>\n  <p>JavaScript esta desactivado, asi que ves este mensaje alternativo.</p>\n</noscript>'
  },
  {
    slug: 'canvas',
    tag: '<canvas>',
    name: 'canvas',
    group: 'Scripting',
    description: 'Ofrece una superficie para dibujar graficos, animaciones o juegos mediante JavaScript.',
    note: 'Por seguridad, la vista previa desactiva la ejecucion de scripts, por lo que el canvas se muestra vacio.',
    code: '<canvas width="200" height="100" style="border:1px solid #999;"></canvas>\n<p>El canvas esta vacio aqui: normalmente se dibuja mediante JavaScript.</p>'
  },

  // ---------- Obsoletas ----------
  {
    slug: 'marquee',
    tag: '<marquee>',
    name: 'marquee',
    group: 'Obsoletas',
    description: 'Hacia que el texto se desplazara automaticamente en pantalla, como un letrero animado.',
    note: 'Eliminada del estandar. Usa animaciones CSS en su lugar.',
    deprecated: true,
    code: '<marquee>Este texto se desplazaba automaticamente</marquee>'
  },
  {
    slug: 'blink',
    tag: '<blink>',
    name: 'blink',
    group: 'Obsoletas',
    description: 'Hacia que el texto parpadeara. Nunca fue un estandar oficial y ningun navegador moderno la soporta.',
    note: 'Eliminada de los estandares. Los navegadores actuales ignoran el efecto y muestran el texto normal.',
    deprecated: true,
    code: '<blink>Texto parpadeante (ya no funciona en navegadores modernos)</blink>'
  },
  {
    slug: 'center',
    tag: '<center>',
    name: 'center',
    group: 'Obsoletas',
    description: 'Centraba horizontalmente su contenido en la pagina.',
    note: 'Obsoleta. Usa CSS (text-align: center) en su lugar.',
    deprecated: true,
    code: '<center>Texto centrado con la etiqueta center</center>'
  },
  {
    slug: 'font',
    tag: '<font>',
    name: 'font',
    group: 'Obsoletas',
    description: 'Definia el color, tamanio y tipografia del texto directamente en el HTML.',
    note: 'Obsoleta. Usa CSS (color, font-size, font-family) en su lugar.',
    deprecated: true,
    code: '<font color="#e06c75" size="5">Texto con font (obsoleto)</font>'
  },
  {
    slug: 'big',
    tag: '<big>',
    name: 'big',
    group: 'Obsoletas',
    description: 'Aumentaba el tamanio del texto un nivel respecto al texto circundante.',
    note: 'Obsoleta. Usa CSS font-size en su lugar.',
    deprecated: true,
    code: '<p>Texto normal <big>y texto grande con big</big></p>'
  },
  {
    slug: 'tt',
    tag: '<tt>',
    name: 'tt',
    group: 'Obsoletas',
    description: 'Mostraba el texto en fuente monoespaciada, simulando una maquina de escribir (teletype).',
    note: 'Obsoleta. Usa <code> o CSS font-family: monospace.',
    deprecated: true,
    code: '<p>Texto normal <tt>y texto monoespaciado con tt</tt></p>'
  },
  {
    slug: 'strike',
    tag: '<strike>',
    name: 'strike',
    group: 'Obsoletas',
    description: 'Mostraba el texto tachado, indicando que ya no era valido o relevante.',
    note: 'Obsoleta. Usa <s> para texto que ya no es preciso, o <del> para indicar una eliminacion.',
    deprecated: true,
    code: '<p><strike>Texto tachado con strike</strike></p>'
  },
  {
    slug: 'acronym',
    tag: '<acronym>',
    name: 'acronym',
    group: 'Obsoletas',
    description: 'Marcaba un acronimo, mostrando su significado completo mediante el atributo title.',
    note: 'Obsoleta. Usa <abbr> en su lugar, que cubre tanto acronimos como abreviaturas.',
    deprecated: true,
    code: '<p><acronym title="HyperText Markup Language">HTML</acronym></p>'
  },
  {
    slug: 'applet',
    tag: '<applet>',
    name: 'applet',
    group: 'Obsoletas',
    description: 'Incrustaba un applet de Java dentro de la pagina.',
    note: 'Obsoleta y eliminada. Los applets de Java ya no son soportados por ningun navegador moderno.',
    deprecated: true,
    code: '<applet code="Ejemplo.class" width="200" height="60">\n  Tu navegador no soporta applets de Java.\n</applet>'
  },
  {
    slug: 'frameset',
    tag: '<frameset>',
    name: 'frameset',
    group: 'Obsoletas',
    description: 'Dividia la ventana del navegador en varios paneles independientes, cada uno con su propio documento.',
    note: 'Eliminada del estandar HTML5 vivo. Los navegadores modernos ya no dividen la ventana en frames.',
    deprecated: true,
    code: '<frameset cols="50%,50%">\n  <frame src="about:blank">\n  <frame src="about:blank">\n</frameset>'
  },
  {
    slug: 'frame',
    tag: '<frame>',
    name: 'frame',
    group: 'Obsoletas',
    description: 'Definia un panel individual dentro de un <frameset>, cargando un documento independiente.',
    note: 'Obsoleta junto con frameset. Usa <iframe> para incrustar documentos dentro de una pagina moderna.',
    deprecated: true,
    code: '<frameset cols="30%,70%">\n  <frame src="about:blank" name="menu">\n  <frame src="about:blank" name="contenido">\n</frameset>'
  },
  {
    slug: 'noframes',
    tag: '<noframes>',
    name: 'noframes',
    group: 'Obsoletas',
    description: 'Mostraba contenido alternativo para navegadores que no soportaban <frameset>.',
    note: 'Obsoleta junto con frameset y frame, ya sin uso en la web moderna.',
    deprecated: true,
    code: '<frameset cols="100%">\n  <frame src="about:blank">\n  <noframes>\n    <body><p>Tu navegador no soporta frames.</p></body>\n  </noframes>\n</frameset>'
  }
];
