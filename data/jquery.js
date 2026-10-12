// Cada entrada: `code` es la unica fuente de verdad, alimenta el bloque
// de codigo Y la vista previa en iframe. El elemento HTML objetivo siempre
// va ANTES del <script> que lo selecciona con $(): si el script se
// ejecutara primero, el elemento todavia no existiria en el documento.
// jQuery mismo se carga aparte, inyectado por el servidor solo para esta
// categoria: el codigo mostrado aqui no incluye ese <script src>.
module.exports = [
  // ---------- Seleccion y recorrido ----------
  {
    slug: 'jquery-selector',
    tag: '$()',
    name: 'Selector jQuery',
    group: 'Seleccion y recorrido',
    description: 'Selecciona uno o mas elementos usando la misma sintaxis de selectores CSS, envueltos en un objeto jQuery con metodos propios.',
    code: '<p class="item">Uno</p>\n<p class="item">Dos</p>\n<script>\n  $(".item").css("font-weight", "800");\n</script>'
  },
  {
    slug: 'find',
    tag: '.find()',
    name: 'jQuery .find()',
    group: 'Seleccion y recorrido',
    description: 'Busca descendientes de los elementos seleccionados que coincidan con otro selector, sin importar cuan profundo esten anidados.',
    code: '<div id="caja">\n  <p>Texto normal</p>\n  <p class="destacado">Texto a destacar</p>\n</div>\n<script>\n  $("#caja").find(".destacado").css("text-decoration", "underline");\n</script>'
  },
  {
    slug: 'parent-children',
    tag: '.parent() / .children()',
    name: 'parent(), children()',
    group: 'Seleccion y recorrido',
    description: 'parent() sube al elemento padre directo. children() baja a los elementos hijos directos. Ninguno de los dos busca mas alla de un nivel.',
    code: '<div id="caja" style="padding:10px;border:1px solid #999;">\n  <p id="hijo">Hijo directo</p>\n</div>\n<p id="salida"></p>\n<script>\n  const totalHijos = $("#caja").children().length;\n  $("#salida").text("La caja tiene " + totalHijos + " hijo(s) directo(s)");\n</script>'
  },
  {
    slug: 'siblings',
    tag: '.siblings()',
    name: 'jQuery .siblings()',
    group: 'Seleccion y recorrido',
    description: 'Selecciona todos los elementos que comparten el mismo padre que el elemento actual, sin incluirlo a el mismo.',
    code: '<ul>\n  <li id="actual">Actual</li>\n  <li>Hermano uno</li>\n  <li>Hermano dos</li>\n</ul>\n<script>\n  $("#actual").siblings().css("font-style", "italic");\n</script>'
  },
  {
    slug: 'eq-first-last',
    tag: '.eq() / .first() / .last()',
    name: 'eq(), first(), last()',
    group: 'Seleccion y recorrido',
    description: 'Reducen la seleccion a un unico elemento por su posicion: eq(indice) elige uno especifico, first() el primero, last() el ultimo.',
    code: '<ul>\n  <li class="fila">Uno</li>\n  <li class="fila">Dos</li>\n  <li class="fila">Tres</li>\n</ul>\n<script>\n  $(".fila").first().css("font-weight", "800");\n  $(".fila").last().css("font-style", "italic");\n</script>'
  },
  {
    slug: 'filter-jq',
    tag: '.filter()',
    name: 'jQuery .filter()',
    group: 'Seleccion y recorrido',
    description: 'Reduce la seleccion actual a los elementos que cumplen una condicion o coinciden con otro selector, sin buscar fuera de la seleccion original.',
    code: '<ul>\n  <li class="fila" data-vip="si">Cliente VIP</li>\n  <li class="fila">Cliente normal</li>\n</ul>\n<script>\n  $(".fila").filter("[data-vip=si]").css("font-weight", "800");\n</script>'
  },
  {
    slug: 'is',
    tag: '.is()',
    name: 'jQuery .is()',
    group: 'Seleccion y recorrido',
    description: 'Devuelve true o false segun si al menos un elemento de la seleccion coincide con el selector o condicion indicada.',
    code: '<p id="objetivo" class="activo">Elemento</p>\n<p id="salida"></p>\n<script>\n  const activo = $("#objetivo").is(".activo");\n  $("#salida").text("Es .activo: " + activo);\n</script>'
  },
  {
    slug: 'not',
    tag: '.not()',
    name: 'jQuery .not()',
    group: 'Seleccion y recorrido',
    description: 'Quita de la seleccion actual los elementos que coinciden con el selector indicado, dejando el resto.',
    code: '<ul>\n  <li class="fila descartar">Se descarta</li>\n  <li class="fila">Se mantiene</li>\n  <li class="fila">Se mantiene</li>\n</ul>\n<script>\n  $(".fila").not(".descartar").css("text-decoration", "underline");\n</script>'
  },

  // ---------- Manipulacion de contenido ----------
  {
    slug: 'html-text',
    tag: '.html() / .text()',
    name: 'html(), text()',
    group: 'Manipulacion de contenido',
    description: 'Leen o cambian el contenido de un elemento. text() trata todo como texto plano; html() interpreta el contenido como HTML, igual que innerHTML.',
    code: '<p id="salida">Original</p>\n<script>\n  $("#salida").html("Con <strong>jQuery html()</strong>");\n</script>'
  },
  {
    slug: 'val',
    tag: '.val()',
    name: 'jQuery .val()',
    group: 'Manipulacion de contenido',
    description: 'Lee o cambia el valor de un campo de formulario: input, select o textarea.',
    code: '<input id="campo" type="text">\n<p id="salida"></p>\n<script>\n  $("#campo").val("Texto puesto con jQuery");\n  $("#salida").text("Valor actual: " + $("#campo").val());\n</script>'
  },
  {
    slug: 'attr',
    tag: '.attr()',
    name: 'jQuery .attr()',
    group: 'Manipulacion de contenido',
    description: 'Lee o cambia el valor de un atributo HTML del elemento, como href, src o cualquier atributo personalizado.',
    code: '<a id="enlace" href="#">Enlace</a>\n<script>\n  $("#enlace").attr("href", "https://developer.mozilla.org").text("Enlace actualizado");\n</script>'
  },
  {
    slug: 'prop',
    tag: '.prop()',
    name: 'jQuery .prop()',
    group: 'Manipulacion de contenido',
    description: 'Lee o cambia una propiedad booleana del elemento en el DOM, como checked o disabled. Para esos casos se prefiere prop() sobre attr().',
    code: '<input id="casilla" type="checkbox">\n<label for="casilla">Opcion</label>\n<script>\n  $("#casilla").prop("checked", true);\n</script>'
  },
  {
    slug: 'append-prepend',
    tag: '.append() / .prepend()',
    name: 'append(), prepend()',
    group: 'Manipulacion de contenido',
    description: 'Insertan contenido dentro de un elemento: append() al final, prepend() al inicio, despues de su contenido existente.',
    code: '<ul id="lista">\n  <li>Elemento original</li>\n</ul>\n<script>\n  $("#lista").append("<li>Agregado al final</li>");\n  $("#lista").prepend("<li>Agregado al inicio</li>");\n</script>'
  },
  {
    slug: 'remove',
    tag: '.remove()',
    name: 'jQuery .remove()',
    group: 'Manipulacion de contenido',
    description: 'Elimina los elementos seleccionados del documento por completo, junto con sus datos y eventos asociados.',
    code: '<ul>\n  <li>Se mantiene</li>\n  <li class="quitar">Se elimina</li>\n</ul>\n<script>\n  $(".quitar").remove();\n</script>'
  },
  {
    slug: 'empty',
    tag: '.empty()',
    name: 'jQuery .empty()',
    group: 'Manipulacion de contenido',
    description: 'Elimina todo el contenido interno de un elemento, sin eliminar el elemento mismo.',
    code: '<div id="caja"><p>Contenido que se va a vaciar</p></div>\n<script>\n  $("#caja").empty();\n  $("#caja").text("(vaciado con empty)");\n</script>'
  },
  {
    slug: 'css-jq',
    tag: '.css()',
    name: 'jQuery .css()',
    group: 'Manipulacion de contenido',
    description: 'Lee o cambia una o varias propiedades CSS directamente en el atributo style del elemento.',
    code: '<p id="objetivo">Texto de ejemplo</p>\n<script>\n  $("#objetivo").css({ fontWeight: "800", textDecoration: "underline" });\n</script>'
  },
  {
    slug: 'addclass-removeclass-toggleclass',
    tag: '.addClass() / .removeClass() / .toggleClass()',
    name: 'addClass(), removeClass(), toggleClass()',
    group: 'Manipulacion de contenido',
    description: 'Agregan, quitan o alternan una clase CSS del elemento: la forma mas comun de cambiar estilos con jQuery.',
    code: '<style>\n  .resaltado { background: #dad8d2; padding: 4px 8px; }\n</style>\n<p id="objetivo">Elemento</p>\n<script>\n  $("#objetivo").addClass("resaltado");\n</script>'
  },
  {
    slug: 'width-height',
    tag: '.width() / .height()',
    name: 'width(), height()',
    group: 'Manipulacion de contenido',
    description: 'Leen o cambian el ancho o el alto del contenido de un elemento, sin incluir su padding ni su borde.',
    code: '<div id="caja" style="background:#eee;"></div>\n<p id="salida"></p>\n<script>\n  $("#caja").width(150).height(60);\n  $("#salida").text("Ancho: " + $("#caja").width() + "px");\n</script>'
  },

  // ---------- Eventos ----------
  {
    slug: 'ready',
    tag: '$(document).ready()',
    name: 'ready()',
    group: 'Eventos',
    description: 'Ejecuta una funcion cuando el documento HTML esta completamente cargado y listo, antes de que carguen imagenes u otros recursos externos.',
    code: '<p id="salida"></p>\n<script>\n  $(document).ready(function () {\n    $("#salida").text("El documento esta listo");\n  });\n</script>'
  },
  {
    slug: 'on',
    tag: '.on()',
    name: 'jQuery .on()',
    group: 'Eventos',
    description: 'Registra una funcion que se ejecuta cuando ocurre un evento sobre el elemento. Es la forma general de escuchar cualquier tipo de evento en jQuery.',
    code: '<button id="boton">Pasa el mouse</button>\n<p id="salida"></p>\n<script>\n  $("#boton").on("mouseenter", function () {\n    $("#salida").text("Mouse encima del boton");\n  });\n</script>'
  },
  {
    slug: 'click',
    tag: '.click()',
    name: 'jQuery .click()',
    group: 'Eventos',
    description: 'Atajo de .on("click", ...) para registrar una funcion que se ejecuta cuando se hace clic en el elemento.',
    code: '<button id="boton">Haz clic</button>\n<p id="salida"></p>\n<script>\n  $("#boton").click(function () {\n    $("#salida").text("Hiciste clic");\n  });\n</script>'
  },
  {
    slug: 'each',
    tag: '.each()',
    name: 'jQuery .each()',
    group: 'Eventos',
    description: 'Ejecuta una funcion por cada elemento de la seleccion, con acceso al indice y al elemento actual en cada vuelta.',
    code: '<ul>\n  <li class="fila">a</li>\n  <li class="fila">b</li>\n  <li class="fila">c</li>\n</ul>\n<script>\n  $(".fila").each(function (indice) {\n    $(this).text($(this).text() + " (" + indice + ")");\n  });\n</script>'
  },

  // ---------- Efectos y animacion ----------
  {
    slug: 'hide-show',
    tag: '.hide() / .show()',
    name: 'hide(), show()',
    group: 'Efectos y animacion',
    description: 'Ocultan o muestran un elemento cambiando su display, de forma instantanea, sin transicion.',
    code: '<button id="boton">Ocultar</button>\n<p id="objetivo">Este texto se puede ocultar</p>\n<script>\n  $("#boton").click(function () {\n    $("#objetivo").hide();\n  });\n</script>'
  },
  {
    slug: 'fadein-fadeout',
    tag: '.fadeIn() / .fadeOut()',
    name: 'fadeIn(), fadeOut()',
    group: 'Efectos y animacion',
    description: 'Muestran u ocultan un elemento con una transicion de opacidad animada, en vez del cambio instantaneo de show/hide.',
    code: '<button id="boton">Desvanecer</button>\n<p id="objetivo">Este texto se desvanece</p>\n<script>\n  $("#boton").click(function () {\n    $("#objetivo").fadeOut();\n  });\n</script>'
  },
  {
    slug: 'slidetoggle',
    tag: '.slideToggle()',
    name: 'jQuery .slideToggle()',
    group: 'Efectos y animacion',
    description: 'Muestra u oculta un elemento con una animacion de deslizamiento vertical, alternando entre los dos estados en cada llamada.',
    code: '<button id="boton">Deslizar</button>\n<div id="panel" style="background:#eee;padding:10px;margin-top:8px;">Panel deslizable</div>\n<script>\n  $("#boton").click(function () {\n    $("#panel").slideToggle();\n  });\n</script>'
  },
  {
    slug: 'toggle-effect',
    tag: '.toggle()',
    name: 'jQuery .toggle()',
    group: 'Efectos y animacion',
    description: 'Alterna la visibilidad de un elemento: lo oculta si esta visible, y lo muestra si esta oculto.',
    code: '<button id="boton">Alternar</button>\n<p id="objetivo">Este texto aparece y desaparece</p>\n<script>\n  $("#boton").click(function () {\n    $("#objetivo").toggle();\n  });\n</script>'
  },
  {
    slug: 'animate',
    tag: '.animate()',
    name: 'jQuery .animate()',
    group: 'Efectos y animacion',
    description: 'Anima propiedades CSS numericas de un elemento hacia nuevos valores durante un tiempo determinado, como el ancho, la opacidad o el margen.',
    code: '<button id="boton">Animar</button>\n<div id="caja" style="background:#191919;width:40px;height:40px;margin-top:8px;"></div>\n<script>\n  $("#boton").click(function () {\n    $("#caja").animate({ width: "160px" }, 500);\n  });\n</script>'
  }
];
