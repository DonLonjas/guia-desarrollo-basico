// Cada entrada: `code` es la unica fuente de verdad, alimenta el bloque
// de codigo Y la vista previa en iframe. Para CSS, code combina un bloque
// <style> con el HTML minimo necesario para demostrar la propiedad o el
// selector en vivo.
module.exports = [
  // ---------- Selectores ----------
  {
    slug: 'selector-clase',
    tag: '.clase',
    name: 'Selector de clase',
    group: 'Selectores',
    description: 'Selecciona todos los elementos que tengan ese valor en su atributo class. Es el selector mas usado para aplicar estilos reutilizables.',
    code: '<style>\n  .destacado { font-weight: 800; }\n</style>\n<p>Texto normal y <span class="destacado">texto con la clase destacado</span>.</p>'
  },
  {
    slug: 'selector-id',
    tag: '#id',
    name: 'Selector de ID',
    group: 'Selectores',
    description: 'Selecciona el elemento con ese valor en su atributo id. Un id debe ser unico en toda la pagina, a diferencia de una clase.',
    code: '<style>\n  #titulo-principal { text-decoration: underline; }\n</style>\n<h3 id="titulo-principal">Titulo con id unico</h3>'
  },
  {
    slug: 'selector-universal',
    tag: '*',
    name: 'Selector universal',
    group: 'Selectores',
    description: 'Selecciona todos los elementos del documento. Se usa comunmente para resets, como quitar margenes por defecto.',
    code: '<style>\n  * { box-sizing: border-box; }\n  .caja { width: 200px; padding: 20px; border: 2px solid; }\n</style>\n<div class="caja">Esta caja mide exactamente 200px gracias al reset universal.</div>'
  },
  {
    slug: 'selector-atributo',
    tag: '[attr]',
    name: 'Selector de atributo',
    group: 'Selectores',
    description: 'Selecciona elementos que tengan un atributo especifico, opcionalmente con un valor exacto o parcial: [href], [type="email"], [class^="ico-"].',
    code: '<style>\n  [data-estado="activo"] { font-weight: 800; }\n</style>\n<p data-estado="activo">Este parrafo tiene data-estado="activo"</p>\n<p data-estado="inactivo">Este no</p>'
  },
  {
    slug: 'combinador-descendiente',
    tag: 'A B',
    name: 'Combinador descendiente',
    group: 'Selectores',
    description: 'Selecciona B en cualquier nivel de profundidad dentro de A, sin importar cuantos elementos haya entre medio.',
    code: '<style>\n  article em { text-decoration: underline; }\n</style>\n<article>\n  <p>Un <em>enfasis</em> dentro del articulo.</p>\n</article>\n<em>Este enfasis esta fuera y no se subraya.</em>'
  },
  {
    slug: 'combinador-hijo',
    tag: 'A > B',
    name: 'Combinador de hijo directo',
    group: 'Selectores',
    description: 'Selecciona B unicamente cuando es hijo directo de A, sin pasar por ningun elemento intermedio.',
    code: '<style>\n  .lista > li { font-weight: 800; }\n</style>\n<ul class="lista">\n  <li>Hijo directo, en negrita</li>\n  <li>Otro hijo directo\n    <ul><li>Nieto, no afectado</li></ul>\n  </li>\n</ul>'
  },
  {
    slug: 'combinador-hermano-adyacente',
    tag: 'A + B',
    name: 'Combinador de hermano adyacente',
    group: 'Selectores',
    description: 'Selecciona B unicamente cuando aparece justo despues de A, al mismo nivel.',
    code: '<style>\n  h3 + p { font-style: italic; }\n</style>\n<h3>Titulo</h3>\n<p>Este parrafo va justo despues del titulo, en cursiva.</p>\n<p>Este segundo parrafo no se ve afectado.</p>'
  },
  {
    slug: 'combinador-hermano-general',
    tag: 'A ~ B',
    name: 'Combinador de hermanos generales',
    group: 'Selectores',
    description: 'Selecciona todos los B que compartan el mismo padre que A y aparezcan despues de A, sin importar la distancia.',
    code: '<style>\n  h3 ~ p { color: inherit; text-decoration: underline; }\n</style>\n<h3>Titulo</h3>\n<p>Subrayado, viene despues del titulo.</p>\n<p>Tambien subrayado.</p>'
  },
  {
    slug: 'pseudo-hover',
    tag: ':hover',
    name: 'Pseudo-clase hover',
    group: 'Selectores',
    description: 'Aplica estilos mientras el cursor esta sobre el elemento. Funciona sin JavaScript y responde en tiempo real.',
    code: '<style>\n  .boton:hover { background: #000; color: #fff; }\n</style>\n<button class="boton" style="padding:10px 18px;border:2px solid;background:transparent;cursor:pointer;">Pasa el cursor aqui</button>'
  },
  {
    slug: 'pseudo-focus',
    tag: ':focus',
    name: 'Pseudo-clase focus',
    group: 'Selectores',
    description: 'Aplica estilos mientras un elemento de formulario tiene el foco del teclado o del cursor. Fundamental para la accesibilidad.',
    code: '<style>\n  input:focus { outline: 3px solid; outline-offset: 2px; }\n</style>\n<input type="text" placeholder="Haz clic o usa Tab" style="padding:8px;">'
  },
  {
    slug: 'pseudo-nth-child',
    tag: ':nth-child()',
    name: 'Pseudo-clase nth-child',
    group: 'Selectores',
    description: 'Selecciona elementos segun su posicion entre sus hermanos, usando una formula: nth-child(2), nth-child(odd), nth-child(3n).',
    code: '<style>\n  li:nth-child(odd) { font-weight: 800; }\n</style>\n<ul>\n  <li>Uno (negrita)</li>\n  <li>Dos</li>\n  <li>Tres (negrita)</li>\n  <li>Cuatro</li>\n</ul>'
  },
  {
    slug: 'pseudo-elemento-before-after',
    tag: '::before / ::after',
    name: 'Pseudo-elementos before y after',
    group: 'Selectores',
    description: 'Insertan contenido generado antes o despues del contenido real de un elemento, definido con la propiedad content.',
    code: '<style>\n  .etiqueta::before { content: "\\2605  "; }\n  .etiqueta::after { content: "  \\2605"; }\n</style>\n<span class="etiqueta">Destacado</span>'
  },
  {
    slug: 'pseudo-not',
    tag: ':not()',
    name: 'Pseudo-clase not',
    group: 'Selectores',
    description: 'Selecciona los elementos que NO coinciden con el selector indicado dentro de los parentesis.',
    code: '<style>\n  li:not(.activo) { opacity: 0.5; }\n</style>\n<ul>\n  <li class="activo">Elemento activo</li>\n  <li>Elemento apagado</li>\n  <li>Otro apagado</li>\n</ul>'
  },
  {
    slug: 'pseudo-first-last-child',
    tag: ':first-child / :last-child',
    name: 'Primer y ultimo hijo',
    group: 'Selectores',
    description: 'Seleccionan el primer o el ultimo elemento hijo dentro de su contenedor, sin necesidad de una formula.',
    code: '<style>\n  li:first-child { text-decoration: underline; }\n  li:last-child { font-style: italic; }\n</style>\n<ul>\n  <li>Primero (subrayado)</li>\n  <li>Del medio</li>\n  <li>Ultimo (cursiva)</li>\n</ul>'
  },

  // ---------- Color y fondos ----------
  {
    slug: 'color',
    tag: 'color',
    name: 'color',
    group: 'Color y fondos',
    description: 'Define el color del texto de un elemento. Acepta nombres de color, hexadecimal, rgb(), hsl() y la palabra clave inherit.',
    attributes: [
      { name: '#hex / rgb() / hsl()', description: 'Notaciones numericas del color.' },
      { name: 'nombre de color', description: 'Palabras clave como red, black, transparent.' }
    ],
    code: '<style>\n  .texto { color: #2563eb; }\n</style>\n<p class="texto">Este texto usa un color especifico.</p>'
  },
  {
    slug: 'background-color',
    tag: 'background-color',
    name: 'background-color',
    group: 'Color y fondos',
    description: 'Define el color de fondo de un elemento, detras de su contenido y de su padding.',
    code: '<style>\n  .caja { background-color: #eee; padding: 16px; }\n</style>\n<div class="caja">Caja con fondo de color</div>'
  },
  {
    slug: 'opacity',
    tag: 'opacity',
    name: 'opacity',
    group: 'Color y fondos',
    description: 'Controla la opacidad de un elemento completo, incluido su contenido, en un rango de 0 (invisible) a 1 (totalmente visible).',
    code: '<style>\n  .medio { opacity: 0.5; }\n</style>\n<p>Texto normal</p>\n<p class="medio">Texto con la mitad de opacidad</p>'
  },
  {
    slug: 'background-image',
    tag: 'background-image',
    name: 'background-image',
    group: 'Color y fondos',
    description: 'Coloca una o mas imagenes o degradados como fondo de un elemento, encima de background-color.',
    code: '<style>\n  .caja { background-image: linear-gradient(135deg, #999, #eee); height: 100px; }\n</style>\n<div class="caja"></div>'
  },
  {
    slug: 'background-size',
    tag: 'background-size',
    name: 'background-size',
    group: 'Color y fondos',
    description: 'Controla el tamanio de la imagen de fondo: cover la recorta para cubrir todo el elemento, contain la ajusta sin recortar.',
    code: '<style>\n  .caja {\n    height: 120px;\n    background-image: linear-gradient(45deg, #ccc 25%, transparent 25%);\n    background-size: 20px 20px;\n  }\n</style>\n<div class="caja"></div>'
  },
  {
    slug: 'background-position',
    tag: 'background-position',
    name: 'background-position',
    group: 'Color y fondos',
    description: 'Define en que parte del elemento se ubica la imagen de fondo: center, top right, o coordenadas en porcentaje/px.',
    code: '<style>\n  .caja {\n    height: 100px;\n    background-image: radial-gradient(circle, #333 20%, transparent 21%);\n    background-position: right bottom;\n    background-repeat: no-repeat;\n  }\n</style>\n<div class="caja"></div>'
  },
  {
    slug: 'border',
    tag: 'border',
    name: 'border',
    group: 'Color y fondos',
    description: 'Propiedad abreviada para definir el grosor, estilo y color del borde de un elemento en una sola linea.',
    code: '<style>\n  .caja { border: 3px solid #191919; padding: 12px; }\n</style>\n<div class="caja">Caja con borde</div>'
  },
  {
    slug: 'border-radius',
    tag: 'border-radius',
    name: 'border-radius',
    group: 'Color y fondos',
    description: 'Redondea las esquinas de un elemento. Un valor alto y simetrico en un elemento cuadrado produce un circulo.',
    code: '<style>\n  .caja { width: 80px; height: 80px; background: #ccc; border-radius: 16px; }\n  .circulo { width: 80px; height: 80px; background: #999; border-radius: 50%; margin-top: 10px; }\n</style>\n<div class="caja"></div>\n<div class="circulo"></div>'
  },
  {
    slug: 'box-shadow',
    tag: 'box-shadow',
    name: 'box-shadow',
    group: 'Color y fondos',
    description: 'Anade una o mas sombras alrededor del elemento: desplazamiento horizontal, vertical, difuminado, expansion y color.',
    code: '<style>\n  .caja { width: 120px; height: 80px; background: #eee; box-shadow: 4px 4px 0 #191919; margin: 10px; }\n</style>\n<div class="caja"></div>'
  },
  {
    slug: 'outline',
    tag: 'outline',
    name: 'outline',
    group: 'Color y fondos',
    description: 'Dibuja un contorno alrededor del elemento que no ocupa espacio en el layout, a diferencia del border. Muy usado para el estado focus.',
    code: '<style>\n  .caja { padding: 10px; outline: 3px dashed #191919; outline-offset: 4px; }\n</style>\n<div class="caja">Caja con outline</div>'
  },

  // ---------- Layout ----------
  {
    slug: 'display',
    tag: 'display',
    name: 'display',
    group: 'Layout',
    description: 'Define el tipo de caja que genera un elemento: block, inline, flex, grid o none, entre otros. Es la base de todo layout en CSS.',
    attributes: [
      { name: 'block', description: 'Ocupa todo el ancho disponible y empieza en una linea nueva.' },
      { name: 'inline', description: 'Ocupa solo el ancho de su contenido, en el flujo del texto.' },
      { name: 'flex / grid', description: 'Convierte al elemento en contenedor flexible o de cuadricula.' },
      { name: 'none', description: 'Elimina el elemento del layout por completo.' }
    ],
    code: '<style>\n  .caja { display: inline-block; background: #eee; padding: 8px 14px; margin: 4px; }\n</style>\n<span class="caja">Caja uno</span><span class="caja">Caja dos</span>'
  },
  {
    slug: 'position',
    tag: 'position',
    name: 'position',
    group: 'Layout',
    description: 'Define como se posiciona un elemento: static (por defecto), relative, absolute, fixed o sticky.',
    attributes: [
      { name: 'relative', description: 'Se desplaza respecto a su posicion normal, sin sacarlo del flujo.' },
      { name: 'absolute', description: 'Se posiciona respecto al ancestro posicionado mas cercano.' },
      { name: 'fixed', description: 'Se posiciona respecto a la ventana, sin moverse al hacer scroll.' },
      { name: 'sticky', description: 'Se comporta como relative hasta que cruza un umbral, y luego se fija.' }
    ],
    code: '<style>\n  .contenedor { position: relative; height: 80px; border: 1px solid #999; }\n  .flotante { position: absolute; top: 10px; right: 10px; background: #191919; color: #fff; padding: 4px 10px; }\n</style>\n<div class="contenedor">\n  <span class="flotante">Posicionado</span>\n</div>'
  },
  {
    slug: 'top-right-bottom-left',
    tag: 'top / right / bottom / left',
    name: 'top, right, bottom, left',
    group: 'Layout',
    description: 'Definen el desplazamiento de un elemento posicionado (relative, absolute, fixed o sticky) respecto a cada borde de su contenedor de referencia.',
    code: '<style>\n  .contenedor { position: relative; height: 80px; border: 1px solid #999; }\n  .esquina { position: absolute; bottom: 8px; left: 8px; }\n</style>\n<div class="contenedor">\n  <span class="esquina">Anclado abajo a la izquierda</span>\n</div>'
  },
  {
    slug: 'z-index',
    tag: 'z-index',
    name: 'z-index',
    group: 'Layout',
    description: 'Controla el orden de apilado de elementos posicionados que se superponen: un numero mayor queda por encima.',
    code: '<style>\n  .caja { position: absolute; width: 80px; height: 80px; }\n  .atras { background: #ccc; top: 0; left: 0; z-index: 1; }\n  .adelante { background: #191919; top: 20px; left: 20px; z-index: 2; }\n</style>\n<div style="position:relative;height:120px;">\n  <div class="caja atras"></div>\n  <div class="caja adelante"></div>\n</div>'
  },
  {
    slug: 'width-height',
    tag: 'width / height',
    name: 'width, height',
    group: 'Layout',
    description: 'Definen el ancho y el alto de un elemento. Aceptan unidades fijas (px), relativas (%, vw, vh) o palabras clave como auto.',
    code: '<style>\n  .caja { width: 200px; height: 60px; background: #eee; }\n</style>\n<div class="caja">200 x 60 px</div>'
  },
  {
    slug: 'max-min-width',
    tag: 'max-width / min-width',
    name: 'max-width, min-width',
    group: 'Layout',
    description: 'Limitan el ancho de un elemento hacia arriba o hacia abajo, incluso si su contenido o su width intentan superar ese limite.',
    code: '<style>\n  .caja { max-width: 220px; background: #eee; padding: 10px; }\n</style>\n<div class="caja">Este texto es largo pero la caja nunca crece mas de 220px de ancho, sin importar cuanto contenido tenga adentro.</div>'
  },
  {
    slug: 'margin',
    tag: 'margin',
    name: 'margin',
    group: 'Layout',
    description: 'Define el espacio exterior de un elemento, fuera de su borde. Separa un elemento de los que lo rodean.',
    code: '<style>\n  .caja { background: #eee; padding: 6px; }\n  .separada { margin-top: 20px; }\n</style>\n<div class="caja">Caja uno</div>\n<div class="caja separada">Caja dos, separada 20px de la anterior</div>'
  },
  {
    slug: 'padding',
    tag: 'padding',
    name: 'padding',
    group: 'Layout',
    description: 'Define el espacio interior de un elemento, entre su contenido y su borde.',
    code: '<style>\n  .sin { border: 1px solid #191919; }\n  .con { border: 1px solid #191919; padding: 20px; margin-top: 10px; }\n</style>\n<div class="sin">Sin padding</div>\n<div class="con">Con 20px de padding</div>'
  },
  {
    slug: 'box-sizing',
    tag: 'box-sizing',
    name: 'box-sizing',
    group: 'Layout',
    description: 'Define si el width y height de un elemento incluyen su padding y border (border-box) o no (content-box, el valor por defecto).',
    code: '<style>\n  .caja { width: 150px; padding: 15px; border: 5px solid; box-sizing: border-box; }\n</style>\n<div class="caja">Esta caja mide exactamente 150px de ancho total, padding y borde incluidos.</div>'
  },
  {
    slug: 'overflow',
    tag: 'overflow',
    name: 'overflow',
    group: 'Layout',
    description: 'Controla que sucede cuando el contenido de un elemento no cabe en su area: visible, hidden, scroll o auto.',
    code: '<style>\n  .caja { height: 60px; overflow: auto; border: 1px solid #999; padding: 8px; }\n</style>\n<div class="caja">Este contenido es mas alto que la caja, asi que aparece una barra de scroll interna en vez de desbordarse.</div>'
  },
  {
    slug: 'float',
    tag: 'float',
    name: 'float',
    group: 'Layout',
    description: 'Saca un elemento del flujo normal y lo empuja hacia un lado, dejando que el contenido siguiente lo rodee. Hoy se usa poco, reemplazado por flex y grid.',
    code: '<style>\n  .flotante { float: left; width: 60px; height: 60px; background: #ccc; margin-right: 10px; }\n</style>\n<div class="flotante"></div>\n<p>El texto rodea la caja flotante, fluyendo a su alrededor como en un periodico impreso.</p>'
  },
  {
    slug: 'flex',
    tag: 'display: flex',
    name: 'Flexbox',
    group: 'Layout',
    description: 'Convierte a un elemento en contenedor flexible: sus hijos directos se acomodan en una fila o columna y se reparten el espacio disponible.',
    code: '<style>\n  .fila { display: flex; gap: 8px; }\n  .item { background: #eee; padding: 10px; flex: 1; text-align: center; }\n</style>\n<div class="fila">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>'
  },
  {
    slug: 'flex-direction',
    tag: 'flex-direction',
    name: 'flex-direction',
    group: 'Layout',
    description: 'Define el eje principal de un contenedor flex: row (fila, por defecto), column, row-reverse o column-reverse.',
    code: '<style>\n  .columna { display: flex; flex-direction: column; gap: 6px; }\n  .item { background: #eee; padding: 8px; }\n</style>\n<div class="columna">\n  <div class="item">Arriba</div>\n  <div class="item">Al medio</div>\n  <div class="item">Abajo</div>\n</div>'
  },
  {
    slug: 'justify-content',
    tag: 'justify-content',
    name: 'justify-content',
    group: 'Layout',
    description: 'Distribuye los elementos flex a lo largo del eje principal: flex-start, center, space-between, space-around, entre otros.',
    code: '<style>\n  .fila { display: flex; justify-content: space-between; border: 1px dashed #999; padding: 6px; }\n  .item { background: #eee; padding: 8px 14px; }\n</style>\n<div class="fila">\n  <div class="item">Izquierda</div>\n  <div class="item">Derecha</div>\n</div>'
  },
  {
    slug: 'align-items',
    tag: 'align-items',
    name: 'align-items',
    group: 'Layout',
    description: 'Alinea los elementos flex a lo largo del eje transversal: stretch (por defecto), flex-start, center, flex-end.',
    code: '<style>\n  .fila { display: flex; align-items: center; height: 80px; border: 1px dashed #999; gap: 8px; }\n  .item { background: #eee; padding: 8px; }\n</style>\n<div class="fila">\n  <div class="item" style="height:20px;">Bajo</div>\n  <div class="item" style="height:50px;">Alto</div>\n</div>'
  },
  {
    slug: 'gap',
    tag: 'gap',
    name: 'gap',
    group: 'Layout',
    description: 'Define el espacio entre elementos dentro de un contenedor flex o grid, sin necesidad de margenes en los hijos.',
    code: '<style>\n  .fila { display: flex; gap: 16px; }\n  .item { background: #eee; padding: 10px 16px; }\n</style>\n<div class="fila">\n  <div class="item">A</div>\n  <div class="item">B</div>\n  <div class="item">C</div>\n</div>'
  },
  {
    slug: 'grid-template-columns',
    tag: 'grid-template-columns',
    name: 'grid-template-columns',
    group: 'Layout',
    description: 'Define el numero y el tamanio de las columnas de un contenedor grid, por ejemplo con valores fijos, fr o repeat().',
    code: '<style>\n  .cuadricula { display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 8px; }\n  .item { background: #eee; padding: 10px; text-align: center; }\n</style>\n<div class="cuadricula">\n  <div class="item">1fr</div>\n  <div class="item">2fr</div>\n  <div class="item">1fr</div>\n</div>'
  },

  // ---------- Tipografia ----------
  {
    slug: 'font-family',
    tag: 'font-family',
    name: 'font-family',
    group: 'Tipografia',
    description: 'Define la tipografia del texto, con una lista de opciones separadas por comas como respaldo si la primera no esta disponible.',
    code: '<style>\n  .serif { font-family: Georgia, serif; }\n  .mono { font-family: "Courier New", monospace; }\n</style>\n<p class="serif">Texto con tipografia serif</p>\n<p class="mono">Texto con tipografia monoespaciada</p>'
  },
  {
    slug: 'font-size',
    tag: 'font-size',
    name: 'font-size',
    group: 'Tipografia',
    description: 'Define el tamanio del texto. Puede usarse en px, rem, em o unidades relativas al viewport como vw.',
    code: '<style>\n  .chico { font-size: 0.8rem; }\n  .grande { font-size: 2rem; }\n</style>\n<p class="chico">Texto chico</p>\n<p class="grande">Texto grande</p>'
  },
  {
    slug: 'font-weight',
    tag: 'font-weight',
    name: 'font-weight',
    group: 'Tipografia',
    description: 'Define el grosor del trazo del texto, de 100 (muy fino) a 900 (muy grueso), o palabras clave como normal y bold.',
    code: '<style>\n  .fino { font-weight: 300; }\n  .grueso { font-weight: 800; }\n</style>\n<p class="fino">Texto con peso fino</p>\n<p class="grueso">Texto con peso grueso</p>'
  },
  {
    slug: 'font-style',
    tag: 'font-style',
    name: 'font-style',
    group: 'Tipografia',
    description: 'Define si el texto se muestra en cursiva (italic), oblicua (oblique) o normal.',
    code: '<style>\n  .cursiva { font-style: italic; }\n</style>\n<p class="cursiva">Este texto esta en cursiva</p>'
  },
  {
    slug: 'line-height',
    tag: 'line-height',
    name: 'line-height',
    group: 'Tipografia',
    description: 'Define la altura de cada linea de texto. Un valor comodo para lectura suele estar entre 1.4 y 1.6.',
    code: '<style>\n  .apretado { line-height: 1; }\n  .amplio { line-height: 2; }\n</style>\n<p class="apretado">Lineas apretadas, una encima de la otra, dificil de leer en parrafos largos.</p>\n<p class="amplio">Lineas amplias, con mas aire entre cada renglon del texto.</p>'
  },
  {
    slug: 'text-align',
    tag: 'text-align',
    name: 'text-align',
    group: 'Tipografia',
    description: 'Alinea el texto dentro de su contenedor: left, right, center o justify.',
    code: '<style>\n  .centrado { text-align: center; }\n</style>\n<p class="centrado">Este texto esta centrado</p>'
  },
  {
    slug: 'text-decoration',
    tag: 'text-decoration',
    name: 'text-decoration',
    group: 'Tipografia',
    description: 'Anade o quita lineas decorativas al texto: underline, line-through, overline o none.',
    code: '<style>\n  .subrayado { text-decoration: underline; }\n  .tachado { text-decoration: line-through; }\n</style>\n<p class="subrayado">Texto subrayado</p>\n<p class="tachado">Texto tachado</p>'
  },
  {
    slug: 'letter-spacing',
    tag: 'letter-spacing',
    name: 'letter-spacing',
    group: 'Tipografia',
    description: 'Ajusta el espacio horizontal entre caracteres. Valores negativos acercan las letras, positivos las separan.',
    code: '<style>\n  .separado { letter-spacing: 0.2em; }\n</style>\n<p class="separado">TEXTO ESPACIADO</p>'
  },
  {
    slug: 'text-transform',
    tag: 'text-transform',
    name: 'text-transform',
    group: 'Tipografia',
    description: 'Cambia la capitalizacion visual del texto sin alterar el texto real: uppercase, lowercase o capitalize.',
    code: '<style>\n  .mayus { text-transform: uppercase; }\n</style>\n<p class="mayus">este texto se ve en mayusculas</p>'
  },
  {
    slug: 'white-space',
    tag: 'white-space',
    name: 'white-space',
    group: 'Tipografia',
    description: 'Controla como se manejan los espacios en blanco y los saltos de linea dentro del texto: normal, nowrap, pre.',
    code: '<style>\n  .sin-salto { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px; }\n</style>\n<p class="sin-salto">Este texto es demasiado largo para la caja y no se parte en varias lineas</p>'
  },

  // ---------- Animacion y transformacion ----------
  {
    slug: 'transition',
    tag: 'transition',
    name: 'transition',
    group: 'Animacion y transformacion',
    description: 'Anima el cambio entre dos valores de una propiedad a lo largo de un tiempo determinado, en vez de que el cambio sea instantaneo.',
    code: '<style>\n  .boton { padding: 10px 18px; background: #eee; transition: background 0.3s ease; }\n  .boton:hover { background: #191919; color: #fff; }\n</style>\n<button class="boton">Pasa el cursor lentamente</button>'
  },
  {
    slug: 'transform',
    tag: 'transform',
    name: 'transform',
    group: 'Animacion y transformacion',
    description: 'Aplica transformaciones geometricas a un elemento: rotate(), scale(), translate() o skew(), combinables entre si.',
    code: '<style>\n  .caja { width: 60px; height: 60px; background: #eee; transition: transform 0.3s ease; }\n  .caja:hover { transform: rotate(15deg) scale(1.1); }\n</style>\n<div class="caja"></div>'
  },
  {
    slug: 'transform-origin',
    tag: 'transform-origin',
    name: 'transform-origin',
    group: 'Animacion y transformacion',
    description: 'Define el punto desde el cual se aplican las transformaciones, como rotate o scale. Por defecto es el centro del elemento.',
    code: '<style>\n  .caja { width: 60px; height: 60px; background: #eee; transform-origin: bottom left; transition: transform 0.3s ease; }\n  .caja:hover { transform: rotate(20deg); }\n</style>\n<div class="caja"></div>'
  },
  {
    slug: 'animation',
    tag: 'animation',
    name: 'animation',
    group: 'Animacion y transformacion',
    description: 'Aplica una animacion definida con @keyframes a un elemento: nombre, duracion, funcion de tiempo, repeticion.',
    code: '<style>\n  @keyframes pulso {\n    0%, 100% { transform: scale(1); }\n    50% { transform: scale(1.2); }\n  }\n  .caja { width: 50px; height: 50px; background: #191919; animation: pulso 1.2s ease-in-out infinite; }\n</style>\n<div class="caja"></div>'
  },
  {
    slug: 'keyframes',
    tag: '@keyframes',
    name: '@keyframes',
    group: 'Animacion y transformacion',
    description: 'Define las etapas de una animacion mediante puntos porcentuales (0%, 50%, 100%), que luego se activan con la propiedad animation.',
    code: '<style>\n  @keyframes deslizar {\n    from { transform: translateX(0); }\n    to { transform: translateX(120px); }\n  }\n  .caja { width: 40px; height: 40px; background: #191919; animation: deslizar 1.5s ease-in-out infinite alternate; }\n</style>\n<div class="caja"></div>'
  },
  {
    slug: 'cursor',
    tag: 'cursor',
    name: 'cursor',
    group: 'Animacion y transformacion',
    description: 'Define el icono del puntero del mouse al pasar sobre un elemento: pointer, not-allowed, grab, text, entre otros.',
    code: '<style>\n  .apuntador { cursor: pointer; padding: 10px; border: 1px dashed #999; }\n  .bloqueado { cursor: not-allowed; padding: 10px; border: 1px dashed #999; opacity: 0.6; }\n</style>\n<div class="apuntador">Cursor pointer</div>\n<div class="bloqueado">Cursor not-allowed</div>'
  },

  // ---------- At-rules ----------
  {
    slug: 'media',
    tag: '@media',
    name: '@media',
    group: 'At-rules',
    description: 'Aplica un bloque de estilos solo cuando se cumple una condicion, como un ancho maximo de pantalla. Es la base del diseno responsive.',
    note: 'El efecto se ve al angostar la ventana del navegador: la vista previa hereda el ancho real del contenedor.',
    code: '<style>\n  .caja { background: #eee; padding: 12px; }\n  @media (max-width: 480px) {\n    .caja { background: #191919; color: #fff; }\n  }\n</style>\n<div class="caja">Cambia de color en pantallas angostas</div>'
  },
  {
    slug: 'font-face',
    tag: '@font-face',
    name: '@font-face',
    group: 'At-rules',
    description: 'Declara una tipografia personalizada a partir de un archivo, para poder usarla con font-family aunque no venga instalada en el sistema del usuario.',
    note: 'El resultado visual depende de que el archivo de fuente indicado en src este disponible.',
    code: '<style>\n  @font-face {\n    font-family: "MiFuente";\n    src: url("/fuentes/mi-fuente.woff2") format("woff2");\n  }\n  .personalizada { font-family: "MiFuente", sans-serif; }\n</style>\n<p class="personalizada">Texto con tipografia personalizada</p>'
  },
  {
    slug: 'import',
    tag: '@import',
    name: '@import',
    group: 'At-rules',
    description: 'Importa reglas de otra hoja de estilos dentro de la actual. Debe ir al principio del archivo, antes de cualquier otra regla.',
    code: '<style>\n  @import url("data:text/css,.importado{font-weight:800;font-style:italic;}");\n</style>\n<p class="importado">Estilo cargado mediante @import</p>'
  },
  {
    slug: 'supports',
    tag: '@supports',
    name: '@supports',
    group: 'At-rules',
    description: 'Aplica un bloque de estilos solo si el navegador soporta la propiedad o el valor indicado. Sirve para usar caracteristicas nuevas con una salida de emergencia.',
    code: '<style>\n  @supports (display: grid) {\n    .caja { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }\n  }\n</style>\n<div class="caja">\n  <div style="border:1px solid #999;padding:8px;">Uno</div>\n  <div style="border:1px solid #999;padding:8px;">Dos</div>\n</div>'
  },

  // ---------- Tailwind CSS ----------
  {
    slug: "tailwind-container",
    tag: "container",
    name: "container",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Centra el contenido y le asigna un ancho maximo responsivo, adaptandose a los breakpoints de Tailwind.",
    code: "<div class=\"container mx-auto px-4\">\n  <p class=\"text-center\">Contenido centrado con ancho maximo</p>\n</div>"
  },

  {
    slug: "tailwind-block-inline",
    tag: "block / inline / inline-block",
    name: "block, inline, inline-block",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Controla si un elemento ocupa toda la linea o solo el espacio de su contenido.",
    code: "<div class=\"space-y-2\">\n  <div class=\"block bg-gray-200 p-2\">Elemento block</div>\n  <span class=\"inline bg-blue-200 p-2\">Elemento inline</span>\n  <span class=\"inline-block bg-green-200 p-2\">Elemento inline-block</span>\n</div>"
  },

  {
    slug: "tailwind-hidden",
    tag: "hidden",
    name: "hidden",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Oculta un elemento por completo. Se combina con clases responsivas como md:flex para mostrarlo en ciertos tamaños.",
    code: "<div class=\"hidden md:block bg-purple-200 p-2\">\n  Este texto aparece solo en pantallas medianas o grandes.\n</div>"
  },

  {
    slug: "tailwind-overflow",
    tag: "overflow",
    name: "overflow",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Controla el comportamiento del contenido que excede el tamaño de su contenedor.",
    code: "<div class=\"h-24 overflow-auto bg-gray-100 p-2\">\n  <p class=\"h-40\">Contenido largo que genera scroll vertical dentro de este contenedor.</p>\n</div>"
  },

  {
    slug: "tailwind-flex",
    tag: "flex",
    name: "flex",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Convierte un contenedor en un flexbox, permitiendo alinear y distribuir sus hijos.",
    code: "<div class=\"flex gap-4 bg-gray-100 p-4\">\n  <div class=\"bg-blue-400 text-white px-4 py-2\">A</div>\n  <div class=\"bg-blue-500 text-white px-4 py-2\">B</div>\n  <div class=\"bg-blue-600 text-white px-4 py-2\">C</div>\n</div>"
  },

  {
    slug: "tailwind-flex-direction",
    tag: "flex-row / flex-col",
    name: "flex-row, flex-col",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Define la direccion principal de los elementos flex: en fila o en columna.",
    code: "<div class=\"flex flex-col gap-2 bg-gray-100 p-4\">\n  <div class=\"bg-red-400 text-white px-4 py-2\">Primero</div>\n  <div class=\"bg-red-500 text-white px-4 py-2\">Segundo</div>\n</div>"
  },

  {
    slug: "tailwind-justify-content",
    tag: "justify-*",
    name: "justify-content",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Alinea los elementos a lo largo del eje principal: start, center, end, between, around, evenly.",
    code: "<div class=\"flex justify-between bg-gray-100 p-4\">\n  <div class=\"bg-green-400 px-4 py-2\">Izquierda</div>\n  <div class=\"bg-green-500 px-4 py-2\">Derecha</div>\n</div>"
  },

  {
    slug: "tailwind-align-items",
    tag: "items-*",
    name: "align-items",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Alinea los elementos a lo largo del eje transversal: start, center, end, stretch.",
    code: "<div class=\"flex items-center h-32 bg-gray-100 p-4 gap-4\">\n  <div class=\"bg-yellow-400 px-4 py-2\">Centrado</div>\n  <div class=\"bg-yellow-500 px-4 py-8\">Verticalmente</div>\n</div>"
  },

  {
    slug: "tailwind-gap",
    tag: "gap-*",
    name: "gap",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Define el espacio entre los elementos de un contenedor flex o grid.",
    code: "<div class=\"flex gap-8 bg-gray-100 p-4\">\n  <div class=\"bg-indigo-400 text-white px-4 py-2\">Uno</div>\n  <div class=\"bg-indigo-500 text-white px-4 py-2\">Dos</div>\n</div>"
  },

  {
    slug: "tailwind-grid",
    tag: "grid",
    name: "grid",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Convierte un contenedor en grid, permitiendo distribuir hijos en filas y columnas.",
    code: "<div class=\"grid grid-cols-3 gap-2 bg-gray-100 p-4\">\n  <div class=\"bg-pink-400 text-white p-4 text-center\">1</div>\n  <div class=\"bg-pink-500 text-white p-4 text-center\">2</div>\n  <div class=\"bg-pink-600 text-white p-4 text-center\">3</div>\n</div>"
  },

  {
    slug: "tailwind-grid-cols",
    tag: "grid-cols-*",
    name: "grid-cols",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Define cuantas columnas tendra el grid. Se puede combinar con responsive: md:grid-cols-2.",
    code: "<div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 p-4\">\n  <div class=\"bg-teal-400 text-white p-4 text-center\">Columna 1</div>\n  <div class=\"bg-teal-500 text-white p-4 text-center\">Columna 2</div>\n</div>"
  },

  {
    slug: "tailwind-col-span",
    tag: "col-span-*",
    name: "col-span",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Hace que un elemento ocupe varias columnas del grid.",
    code: "<div class=\"grid grid-cols-3 gap-2 bg-gray-100 p-4\">\n  <div class=\"col-span-2 bg-orange-400 text-white p-4 text-center\">Ocupa 2 columnas</div>\n  <div class=\"bg-orange-500 text-white p-4 text-center\">1</div>\n</div>"
  },

  {
    slug: "tailwind-padding",
    tag: "p-*",
    name: "padding",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Agrega espacio interno alrededor del contenido. p-4, px-4, py-4, pt-4, etc.",
    code: "<div class=\"bg-gray-200\">\n  <div class=\"p-6 bg-blue-500 text-white\">Padding interno de 1.5rem</div>\n</div>"
  },

  {
    slug: "tailwind-margin",
    tag: "m-*",
    name: "margin",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Agrega espacio externo alrededor del elemento. m-4, mx-auto, mt-2, etc.",
    code: "<div class=\"bg-gray-100\">\n  <div class=\"m-4 bg-green-500 text-white p-2\">Margen externo de 1rem</div>\n</div>"
  },

  {
    slug: "tailwind-width",
    tag: "w-*",
    name: "width",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Define el ancho del elemento. w-full, w-1/2, w-64, w-screen.",
    code: "<div class=\"w-1/2 bg-purple-500 text-white p-2 text-center\">Mitad de ancho</div>"
  },

  {
    slug: "tailwind-height",
    tag: "h-*",
    name: "height",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Define la altura del elemento. h-full, h-32, h-screen.",
    code: "<div class=\"h-32 bg-yellow-400 flex items-center justify-center\">Altura fija de 8rem</div>"
  },

  {
    slug: "tailwind-text-size",
    tag: "text-*",
    name: "text-size",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Cambia el tamaño de la fuente. text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, etc.",
    code: "<div class=\"space-y-1\">\n  <p class=\"text-xs\">Texto extra pequeño</p>\n  <p class=\"text-base\">Texto base</p>\n  <p class=\"text-xl\">Texto extra grande</p>\n</div>"
  },

  {
    slug: "tailwind-font-weight",
    tag: "font-*",
    name: "font-weight",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Controla el grosor de la fuente: font-light, font-normal, font-bold, font-extrabold.",
    code: "<p class=\"font-bold text-lg\">Texto en negrita</p>\n<p class=\"font-light\">Texto ligero</p>"
  },

  {
    slug: "tailwind-text-align",
    tag: "text-*",
    name: "text-align",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Alinea el texto: text-left, text-center, text-right, text-justify.",
    code: "<p class=\"text-center bg-gray-100 p-2\">Texto centrado</p>"
  },

  {
    slug: "tailwind-text-color",
    tag: "text-*",
    name: "text-color",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Cambia el color del texto. text-blue-500, text-red-600, text-gray-900.",
    code: "<p class=\"text-blue-600\">Texto azul</p>\n<p class=\"text-red-600\">Texto rojo</p>"
  },

  {
    slug: "tailwind-background-color",
    tag: "bg-*",
    name: "background-color",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Define el color de fondo del elemento. bg-blue-500, bg-gray-100, bg-white.",
    code: "<div class=\"bg-blue-500 text-white p-4\">Fondo azul con texto blanco</div>"
  },

  {
    slug: "tailwind-border-color",
    tag: "border-*",
    name: "border-color",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Define el color de los bordes. border-blue-500, border-gray-300.",
    code: "<div class=\"border-2 border-blue-500 p-4\">Borde azul de 2px</div>"
  },

  {
    slug: "tailwind-border-radius",
    tag: "rounded-*",
    name: "border-radius",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Redondea las esquinas. rounded, rounded-md, rounded-full, rounded-lg.",
    code: "<div class=\"rounded-lg bg-green-500 text-white p-4\">Esquinas redondeadas</div>"
  },

  {
    slug: "tailwind-shadow",
    tag: "shadow-*",
    name: "shadow",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Anade sombra al elemento. shadow, shadow-md, shadow-lg, shadow-none.",
    code: "<div class=\"shadow-lg bg-white p-4 rounded\">Sombra grande</div>"
  },

  {
    slug: "tailwind-opacity",
    tag: "opacity-*",
    name: "opacity",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Controla la transparencia del elemento. opacity-0, opacity-50, opacity-100.",
    code: "<div class=\"opacity-50 bg-blue-500 text-white p-2\">50% de opacidad</div>"
  },

  {
    slug: "tailwind-responsive",
    tag: "sm: / md: / lg: / xl:",
    name: "Responsive prefixes",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Aplica una clase solo a partir de un breakpoint. movil primero: sin prefijo es base, md: aplica en pantallas medianas.",
    code: "<div class=\"bg-gray-200 p-4 md:bg-blue-500 md:text-white\">\n  Gris en movil, azul en pantallas medianas o mayores.\n</div>"
  },

  {
    slug: "tailwind-hover-focus",
    tag: "hover: / focus:",
    name: "hover, focus",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Aplica estilos cuando el usuario pasa el cursor o enfoca el elemento.",
    code: "<button class=\"bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300\">\n  Pasa el cursor o haz foco\n</button>"
  },

  {
    slug: "tailwind-arbitrary-values",
    tag: "[valor]",
    name: "Valores arbitrarios",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Permite usar valores personalizados entre corchetes cuando los de la escala no sirven.",
    code: "<div class=\"w-[123px] h-[80px] bg-[#1e293b] text-[#f8fafc] flex items-center justify-center\">\n  123px x 80px\n</div>"
  },

  {
    slug: "tailwind-gradient",
    tag: "bg-gradient-*",
    name: "Gradientes",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Crea fondos degradados con direccion y colores. bg-gradient-to-r, from-*, via-*, to-*.",
    code: "<div class=\"h-24 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white\">\n  Gradiente horizontal\n</div>"
  },
  {
    slug: "tailwind-object-fit",
    tag: "object-*",
    name: "object-fit",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Controla como una imagen o video se ajusta dentro de su contenedor: cover, contain, fill, none, scale-down.",
    code: "<div class=\"w-40 h-24 bg-gray-200\">\n  <img src=\"https://placehold.co/200x100\" alt=\"Ejemplo\" class=\"w-full h-full object-cover\">\n</div>"
  },
  {
    slug: "tailwind-cursor",
    tag: "cursor-*",
    name: "cursor",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Cambia el cursor del raton. cursor-pointer, cursor-not-allowed, cursor-text, cursor-wait.",
    code: "<button class=\"cursor-pointer bg-blue-500 text-white px-4 py-2 rounded\">Pointer</button>\n<button class=\"cursor-not-allowed bg-gray-400 text-white px-4 py-2 rounded ml-2\" disabled>No permitido</button>"
  },
  {
    slug: "tailwind-outline",
    tag: "outline-*",
    name: "outline",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Anade o quita un contorno alrededor del elemento. Util para indicar foco sin afectar el layout.",
    code: "<button class=\"outline outline-2 outline-offset-2 outline-blue-500 bg-white px-4 py-2 rounded\">\n  Con contorno azul\n</button>"
  },
  {
    slug: "tailwind-ring",
    tag: "ring-*",
    name: "ring",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Anade un anillo tipo box-shadow para enfocar elementos. ring-2, ring-offset-2, ring-color.",
    code: "<button class=\"ring-2 ring-offset-2 ring-purple-500 bg-white px-4 py-2 rounded\">\n  Anillo morado\n</button>"
  },
  {
    slug: "tailwind-position",
    tag: "static / relative / absolute / fixed / sticky",
    name: "position",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Define el esquema de posicionamiento del elemento. Se combina con inset-*, top-*, left-*, etc.",
    code: "<div class=\"relative h-24 bg-gray-100 p-4\">\n  <div class=\"absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded\">\n    Esquina superior derecha\n  </div>\n</div>"
  },
  {
    slug: "tailwind-z-index",
    tag: "z-*",
    name: "z-index",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Controla la profundidad de apilamiento de elementos posicionados. z-0, z-10, z-50, z-auto.",
    code: "<div class=\"relative h-24 bg-gray-100\">\n  <div class=\"absolute top-4 left-4 w-20 h-20 bg-blue-500 z-10\">z-10</div>\n  <div class=\"absolute top-8 left-8 w-20 h-20 bg-red-500\">sin z</div>\n</div>"
  },
  {
    slug: "tailwind-truncate",
    tag: "truncate / text-ellipsis",
    name: "truncate",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Corta el texto largo con puntos suspensivos. Requiere overflow-hidden, whitespace-nowrap o line-clamp.",
    code: "<p class=\"truncate w-48 bg-gray-100 p-2\">\n  Este texto es muy largo y se cortara con puntos suspensivos.\n</p>"
  },
  {
    slug: "tailwind-decoration",
    tag: "underline / line-through / decoration-*",
    name: "text-decoration",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Subraya, tacha o decora el texto. underline, line-through, no-underline, decoration-wavy, underline-offset-*.",
    code: "<p class=\"underline decoration-blue-500 decoration-2 underline-offset-4\">\n  Texto subrayado y decorado\n</p>"
  },
  {
    slug: "tailwind-aspect-ratio",
    tag: "aspect-*",
    name: "aspect-ratio",
    group: "Tailwind CSS",
    framework: 'tailwind',
    description: "Mantiene una proporcion de aspecto fija: square, video, auto. Util para imagenes, videos o contenedores.",
    code: "<div class=\"w-40 aspect-video bg-gray-800 flex items-center justify-center text-white text-sm rounded\">\n  16:9\n</div>"
  },

  // ---------- Tailwind CSS - Animaciones ----------
  {
    slug: "tailwind-transition",
    tag: "transition / duration / ease / delay",
    name: "Transiciones",
    group: "Tailwind CSS - Animaciones",
    framework: 'tailwind',
    description: "Controla cambios suaves entre estados. transition define las propiedades animadas, duration la duracion, ease la curva y delay el retraso.",
    code: "<button class=\"bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300 ease-in-out delay-100\">\n  Pasa el cursor\n</button>"
  },
  {
    slug: "tailwind-transition-property",
    tag: "transition-*",
    name: "transition-property",
    group: "Tailwind CSS - Animaciones",
    framework: 'tailwind',
    description: "Limita la transicion a ciertas propiedades: all, colors, transform, opacity, shadow. Por defecto transition aplica las comunes.",
    code: "<button class=\"bg-blue-500 hover:bg-red-500 text-white px-4 py-2 rounded transition-colors duration-500\">\n  Solo cambia el color\n</button>"
  },
  {
    slug: "tailwind-transform",
    tag: "transform / scale / rotate / translate",
    name: "Transformaciones",
    group: "Tailwind CSS - Animaciones",
    framework: 'tailwind',
    description: "Aplica transformaciones 2D a un elemento. Requiere la clase transform para activar las transformaciones.",
    code: "<div class=\"flex gap-4\">\n  <div class=\"w-16 h-16 bg-red-500 transform hover:scale-110 transition\">scale</div>\n  <div class=\"w-16 h-16 bg-green-500 transform hover:rotate-12 transition\">rotate</div>\n  <div class=\"w-16 h-16 bg-yellow-500 transform hover:translate-x-2 transition\">translate</div>\n</div>"
  },
  {
    slug: "tailwind-animate",
    tag: "animate-*",
    name: "Animaciones prefabricadas",
    group: "Tailwind CSS - Animaciones",
    framework: 'tailwind',
    description: "Incluye animaciones listas para usar: spin (giro continuo), ping (eco), pulse (parpadeo) y bounce (rebote).",
    code: "<div class=\"flex items-center gap-6\">\n  <div class=\"w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin\"></div>\n  <div class=\"w-4 h-4 bg-green-500 rounded-full animate-ping\"></div>\n  <div class=\"w-8 h-8 bg-purple-500 rounded animate-pulse\"></div>\n  <div class=\"w-4 h-4 bg-orange-500 rounded-full animate-bounce\"></div>\n</div>"
  },
  {
    slug: "tailwind-will-change",
    tag: "will-change-*",
    name: "will-change",
    group: "Tailwind CSS - Animaciones",
    framework: 'tailwind',
    description: "Aviso al navegador que un elemento se va a animar, para que optimice su renderizado. Usar con moderacion.",
    code: "<div class=\"w-16 h-16 bg-blue-500 will-change-transform transform hover:scale-125 transition\">\n  suave\n</div>"
  },
  {
    slug: "tailwind-motion-reduce",
    tag: "motion-reduce:*",
    name: "motion-reduce",
    group: "Tailwind CSS - Animaciones",
    framework: 'tailwind',
    description: "Aplica un estilo cuando el usuario ha activado la preferencia de reducir movimiento en su sistema. Mejora la accesibilidad.",
    code: "<div class=\"w-16 h-16 bg-green-500 animate-spin motion-reduce:animate-none\">\n  sin animacion si reduces movimiento\n</div>"
  },
  {
    slug: "tailwind-duration",
    tag: "duration-*",
    name: "duration",
    group: "Tailwind CSS - Animaciones",
    framework: 'tailwind',
    description: "Define la duracion de una transicion. Valores: 75, 100, 150, 200, 300, 500, 700, 1000 (en milisegundos).",
    code: "<div class=\"flex gap-4\">\n  <button class=\"bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-150\">150ms</button>\n  <button class=\"bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-700\">700ms</button>\n</div>"
  },
  {
    slug: "tailwind-delay",
    tag: "delay-*",
    name: "delay",
    group: "Tailwind CSS - Animaciones",
    framework: 'tailwind',
    description: "Retrasa el inicio de una transicion. Valores: 75, 100, 150, 200, 300, 500, 700, 1000 (en milisegundos).",
    code: "<button class=\"bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded transition delay-300 duration-300\">\n  Espera 300ms antes de animar\n</button>"
  },
  {
    slug: "tailwind-ease",
    tag: "ease-*",
    name: "ease",
    group: "Tailwind CSS - Animaciones",
    framework: 'tailwind',
    description: "Define la curva de aceleracion de una transicion. linear, in, out, in-out son las opciones principales.",
    code: "<div class=\"flex gap-4\">\n  <button class=\"bg-blue-500 hover:translate-x-4 text-white px-4 py-2 rounded transition duration-500 ease-linear transform\">linear</button>\n  <button class=\"bg-green-500 hover:translate-x-4 text-white px-4 py-2 rounded transition duration-500 ease-out transform\">ease-out</button>\n  <button class=\"bg-red-500 hover:translate-x-4 text-white px-4 py-2 rounded transition duration-500 ease-in-out transform\">in-out</button>\n</div>"
  },
  {
    slug: "tailwind-animate-none",
    tag: "animate-none",
    name: "animate-none",
    group: "Tailwind CSS - Animaciones",
    framework: 'tailwind',
    description: "Desactiva cualquier animacion aplicada al elemento. Util para anular animaciones heredadas o condicionales.",
    code: "<div class=\"flex items-center gap-6\">\n  <div class=\"w-8 h-8 bg-blue-500 rounded-full animate-spin\"></div>\n  <div class=\"w-8 h-8 bg-gray-500 rounded-full animate-spin animate-none\">detenido</div>\n</div>"
  },
  {
    slug: "tailwind-custom-animation",
    tag: "animate-[...]",
    name: "Animacion arbitraria",
    group: "Tailwind CSS - Animaciones",
    framework: 'tailwind',
    description: "Crea una animacion rapida usando valores arbitrarios entre corchetes. Reutiliza los keyframes de spin, ping, pulse o bounce.",
    code: "<div class=\"flex items-center gap-6\">\n  <div class=\"w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-[spin_3s_linear_infinite]\"></div>\n  <div class=\"w-8 h-8 bg-green-500 rounded animate-[bounce_2s_infinite]\"></div>\n</div>"
  },
  {
    slug: "tailwind-hover-animation",
    tag: "hover:animate-*",
    name: "hover:animate",
    group: "Tailwind CSS - Animaciones",
    framework: 'tailwind',
    description: "Activa una animacion solo cuando el usuario pasa el cursor sobre el elemento. Combina con las clases animate-*.",
    code: "<button class=\"bg-blue-500 hover:animate-pulse text-white px-4 py-2 rounded\">\n  Pasa el cursor para animar\n</button>"
  },
  {
    slug: "tailwind-origin",
    tag: "origin-*",
    name: "origin",
    group: "Tailwind CSS - Animaciones",
    framework: 'tailwind',
    description: "Cambia el punto de origen de una transformacion. origin-center, origin-top, origin-bottom-left, origin-top-right.",
    code: "<div class=\"flex gap-4\">\n  <div class=\"w-16 h-16 bg-red-500 transform hover:rotate-45 transition origin-top-left\">top-left</div>\n  <div class=\"w-16 h-16 bg-green-500 transform hover:rotate-45 transition origin-bottom-right\">bottom-right</div>\n</div>"
  },
  {
    slug: "tailwind-motion-safe",
    tag: "motion-safe:*",
    name: "motion-safe",
    group: "Tailwind CSS - Animaciones",
    framework: 'tailwind',
    description: "Aplica un estilo cuando el usuario NO ha activado la preferencia de reducir movimiento. Es el complemento de motion-reduce.",
    code: "<div class=\"w-16 h-16 bg-purple-500 motion-safe:animate-bounce\">\n  solo anima si movimiento esta permitido\n</div>"
  }
];
