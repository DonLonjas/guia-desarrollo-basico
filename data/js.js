// Cada entrada: `code` es la unica fuente de verdad, alimenta el bloque
// de codigo Y la vista previa en iframe. El HTML objetivo siempre va ANTES
// del <script> que lo busca con getElementById: si el script se ejecutara
// primero, el elemento todavia no existiria en el documento.
module.exports = [
  // ---------- Sentencias y palabras clave ----------
  {
    slug: 'let',
    tag: 'let',
    name: 'let',
    group: 'Sentencias y palabras clave',
    description: 'Declara una variable cuyo valor puede reasignarse mas adelante, con alcance de bloque: solo existe dentro de las llaves { } donde se declaro.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  let contador = 1;\n  contador = contador + 1;\n  document.getElementById("salida").textContent = contador;\n</script>'
  },
  {
    slug: 'const',
    tag: 'const',
    name: 'const',
    group: 'Sentencias y palabras clave',
    description: 'Declara una variable cuyo valor no puede reasignarse. Si el valor es un objeto o array, su contenido si puede modificarse; lo que no cambia es la referencia.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const lista = ["cafe"];\n  lista.push("te");\n  document.getElementById("salida").textContent = lista.join(", ");\n</script>'
  },
  {
    slug: 'var',
    tag: 'var',
    name: 'var',
    group: 'Sentencias y palabras clave',
    description: 'Forma antigua de declarar variables, con alcance de funcion en vez de bloque. Hoy se prefiere let o const, que evitan errores comunes de var.',
    note: 'Se documenta por ser habitual en codigo antiguo. Para codigo nuevo, usa let o const.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  var mensaje = "hola";\n  document.getElementById("salida").textContent = mensaje;\n</script>'
  },
  {
    slug: 'function',
    tag: 'function',
    name: 'Declaracion de funcion',
    group: 'Sentencias y palabras clave',
    description: 'Define un bloque de codigo reutilizable que puede recibir parametros y devolver un valor con return.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  function saludar(nombre) {\n    return "Hola, " + nombre;\n  }\n  document.getElementById("salida").textContent = saludar("Ana");\n</script>'
  },
  {
    slug: 'arrow-function',
    tag: '=>',
    name: 'Funcion flecha',
    group: 'Sentencias y palabras clave',
    description: 'Sintaxis compacta para escribir funciones, sin su propio this. Muy usada como callback en metodos como map o filter.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const doblar = n => n * 2;\n  document.getElementById("salida").textContent = doblar(21);\n</script>'
  },
  {
    slug: 'if-else',
    tag: 'if / else',
    name: 'if, else',
    group: 'Sentencias y palabras clave',
    description: 'Ejecuta un bloque de codigo solo si una condicion es verdadera, con un bloque alternativo opcional para cuando no lo es.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const hora = 14;\n  let texto;\n  if (hora < 12) {\n    texto = "Buenos dias";\n  } else {\n    texto = "Buenas tardes";\n  }\n  document.getElementById("salida").textContent = texto;\n</script>'
  },
  {
    slug: 'switch',
    tag: 'switch',
    name: 'switch',
    group: 'Sentencias y palabras clave',
    description: 'Compara un valor contra varios casos posibles y ejecuta el bloque que coincide, en vez de encadenar varios if/else.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const dia = 3;\n  let nombre;\n  switch (dia) {\n    case 1: nombre = "Lunes"; break;\n    case 2: nombre = "Martes"; break;\n    case 3: nombre = "Miercoles"; break;\n    default: nombre = "Otro dia";\n  }\n  document.getElementById("salida").textContent = nombre;\n</script>'
  },
  {
    slug: 'for',
    tag: 'for',
    name: 'for',
    group: 'Sentencias y palabras clave',
    description: 'Repite un bloque de codigo mientras se cumpla una condicion, controlando explicitamente un contador de inicio, limite y paso.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  let total = 0;\n  for (let i = 1; i <= 5; i++) {\n    total += i;\n  }\n  document.getElementById("salida").textContent = total;\n</script>'
  },
  {
    slug: 'for-of',
    tag: 'for...of',
    name: 'for...of',
    group: 'Sentencias y palabras clave',
    description: 'Recorre los valores de un elemento iterable, como un array o un string, sin necesidad de manejar un indice manualmente.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const frutas = ["manzana", "banana", "cereza"];\n  let resultado = "";\n  for (const fruta of frutas) {\n    resultado += fruta + " ";\n  }\n  document.getElementById("salida").textContent = resultado;\n</script>'
  },
  {
    slug: 'for-in',
    tag: 'for...in',
    name: 'for...in',
    group: 'Sentencias y palabras clave',
    description: 'Recorre las claves enumerables de un objeto. Para arrays se prefiere for...of, ya que for...in recorre los indices como texto.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const persona = { nombre: "Ana", edad: 28 };\n  let resultado = "";\n  for (const clave in persona) {\n    resultado += clave + ": " + persona[clave] + " ";\n  }\n  document.getElementById("salida").textContent = resultado;\n</script>'
  },
  {
    slug: 'while',
    tag: 'while',
    name: 'while',
    group: 'Sentencias y palabras clave',
    description: 'Repite un bloque de codigo mientras una condicion sea verdadera, sin una estructura fija de inicio y paso como el for.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  let n = 5;\n  let resultado = "";\n  while (n > 0) {\n    resultado += n + " ";\n    n--;\n  }\n  document.getElementById("salida").textContent = resultado;\n</script>'
  },
  {
    slug: 'try-catch',
    tag: 'try / catch',
    name: 'try, catch',
    group: 'Sentencias y palabras clave',
    description: 'Ejecuta un bloque de codigo y captura cualquier error que ocurra dentro, sin que la ejecucion del programa se detenga por completo.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  let resultado;\n  try {\n    resultado = JSON.parse("esto no es JSON valido");\n  } catch (error) {\n    resultado = "Error capturado: " + error.message;\n  }\n  document.getElementById("salida").textContent = resultado;\n</script>'
  },
  {
    slug: 'class',
    tag: 'class',
    name: 'class',
    group: 'Sentencias y palabras clave',
    description: 'Define una plantilla para crear objetos con propiedades y metodos compartidos, usando el constructor para inicializar cada instancia.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  class Persona {\n    constructor(nombre) {\n      this.nombre = nombre;\n    }\n    saludar() {\n      return "Hola, soy " + this.nombre;\n    }\n  }\n  const ana = new Persona("Ana");\n  document.getElementById("salida").textContent = ana.saludar();\n</script>'
  },

  // ---------- Operadores ----------
  {
    slug: 'spread',
    tag: '...',
    name: 'Operador spread',
    group: 'Operadores',
    description: 'Expande los elementos de un array o de un objeto en otro array, objeto o lista de argumentos.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const base = [1, 2, 3];\n  const extendido = [...base, 4, 5];\n  document.getElementById("salida").textContent = extendido.join(", ");\n</script>'
  },
  {
    slug: 'destructuring',
    tag: '{ } / [ ]',
    name: 'Desestructuracion',
    group: 'Operadores',
    description: 'Extrae valores de un array o propiedades de un objeto y los asigna directamente a variables, en una sola linea.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const persona = { nombre: "Ana", ciudad: "Bogota" };\n  const { nombre, ciudad } = persona;\n  document.getElementById("salida").textContent = nombre + " vive en " + ciudad;\n</script>'
  },
  {
    slug: 'optional-chaining',
    tag: '?.',
    name: 'Encadenamiento opcional',
    group: 'Operadores',
    description: 'Accede a una propiedad anidada sin que el programa falle si alguno de los pasos intermedios es null o undefined.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const usuario = { perfil: null };\n  const ciudad = usuario.perfil?.ciudad ?? "sin definir";\n  document.getElementById("salida").textContent = ciudad;\n</script>'
  },
  {
    slug: 'nullish-coalescing',
    tag: '??',
    name: 'Coalescencia nula',
    group: 'Operadores',
    description: 'Devuelve el valor de la derecha solo si el de la izquierda es null o undefined, a diferencia de || que tambien reemplaza 0 o una cadena vacia.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const cantidad = 0;\n  const conOr = cantidad || 10;\n  const conNullish = cantidad ?? 10;\n  document.getElementById("salida").textContent = "|| da " + conOr + ", ?? da " + conNullish;\n</script>'
  },
  {
    slug: 'strict-equality',
    tag: '===',
    name: 'Igualdad estricta',
    group: 'Operadores',
    description: 'Compara valor y tipo sin conversion automatica, a diferencia de == que primero intenta convertir los tipos. Se recomienda usar siempre === .',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const comparacionSuelta = (1 == "1");\n  const comparacionEstricta = (1 === "1");\n  document.getElementById("salida").textContent = "== da " + comparacionSuelta + ", === da " + comparacionEstricta;\n</script>'
  },
  {
    slug: 'ternario',
    tag: '? :',
    name: 'Operador ternario',
    group: 'Operadores',
    description: 'Version compacta de if/else en una sola expresion: condicion ? valorSiVerdadero : valorSiFalso.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const edad = 20;\n  const mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";\n  document.getElementById("salida").textContent = mensaje;\n</script>'
  },
  {
    slug: 'template-literals',
    tag: '`${ }`',
    name: 'Template literals',
    group: 'Operadores',
    description: 'Cadenas de texto delimitadas por comillas invertidas que permiten insertar variables y expresiones directamente con ${ }.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const nombre = "Ana";\n  const edad = 28;\n  const texto = `${nombre} tiene ${edad} anios`;\n  document.getElementById("salida").textContent = texto;\n</script>'
  },
  {
    slug: 'typeof',
    tag: 'typeof',
    name: 'typeof',
    group: 'Operadores',
    description: 'Devuelve una cadena de texto con el tipo de dato de un valor: "string", "number", "boolean", "object", "function", "undefined".',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const valores = [42, "texto", true, undefined];\n  const tipos = valores.map(v => typeof v);\n  document.getElementById("salida").textContent = tipos.join(", ");\n</script>'
  },

  // ---------- Metodos de Array ----------
  {
    slug: 'array-map',
    tag: '.map()',
    name: 'Array.map()',
    group: 'Metodos de Array',
    description: 'Crea un nuevo array aplicando una funcion a cada elemento del array original, sin modificar el original.',
    attributes: [
      { name: 'callback(elemento, indice, array)', description: 'Funcion aplicada a cada elemento; solo elemento es obligatorio.' }
    ],
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const numeros = [1, 2, 3, 4];\n  const dobles = numeros.map(n => n * 2);\n  document.getElementById("salida").textContent = dobles.join(", ");\n</script>'
  },
  {
    slug: 'array-filter',
    tag: '.filter()',
    name: 'Array.filter()',
    group: 'Metodos de Array',
    description: 'Crea un nuevo array solo con los elementos que cumplen una condicion, sin modificar el array original.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const numeros = [1, 2, 3, 4, 5, 6];\n  const pares = numeros.filter(n => n % 2 === 0);\n  document.getElementById("salida").textContent = pares.join(", ");\n</script>'
  },
  {
    slug: 'array-reduce',
    tag: '.reduce()',
    name: 'Array.reduce()',
    group: 'Metodos de Array',
    description: 'Reduce todos los elementos de un array a un unico valor, acumulando el resultado en cada paso segun una funcion.',
    attributes: [
      { name: 'callback(acumulado, elemento, indice)', description: 'Funcion que combina el acumulado con cada elemento.' },
      { name: 'valorInicial', description: 'Valor inicial del acumulado (opcional, pero recomendado).' }
    ],
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const numeros = [1, 2, 3, 4];\n  const suma = numeros.reduce((acumulado, n) => acumulado + n, 0);\n  document.getElementById("salida").textContent = suma;\n</script>'
  },
  {
    slug: 'array-foreach',
    tag: '.forEach()',
    name: 'Array.forEach()',
    group: 'Metodos de Array',
    description: 'Ejecuta una funcion por cada elemento del array. A diferencia de map, no devuelve un array nuevo: se usa por sus efectos secundarios.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const frutas = ["manzana", "banana"];\n  let resultado = "";\n  frutas.forEach(fruta => {\n    resultado += fruta.toUpperCase() + " ";\n  });\n  document.getElementById("salida").textContent = resultado;\n</script>'
  },
  {
    slug: 'array-find',
    tag: '.find()',
    name: 'Array.find()',
    group: 'Metodos de Array',
    description: 'Devuelve el primer elemento del array que cumple una condicion, o undefined si ninguno la cumple.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const numeros = [4, 9, 15, 22];\n  const primerMayorDiez = numeros.find(n => n > 10);\n  document.getElementById("salida").textContent = primerMayorDiez;\n</script>'
  },
  {
    slug: 'array-includes',
    tag: '.includes()',
    name: 'Array.includes()',
    group: 'Metodos de Array',
    description: 'Devuelve true o false segun si el array contiene un valor especifico.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const colores = ["rojo", "verde", "azul"];\n  const tiene = colores.includes("verde");\n  document.getElementById("salida").textContent = tiene;\n</script>'
  },
  {
    slug: 'array-push-pop',
    tag: '.push() / .pop()',
    name: 'Array.push(), pop()',
    group: 'Metodos de Array',
    description: 'push anade un elemento al final del array y devuelve la nueva longitud. pop quita y devuelve el ultimo elemento. Ambos modifican el array original.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const lista = ["a", "b"];\n  lista.push("c");\n  const quitado = lista.pop();\n  document.getElementById("salida").textContent = "lista: " + lista.join(",") + " / quitado: " + quitado;\n</script>'
  },
  {
    slug: 'array-shift-unshift',
    tag: '.shift() / .unshift()',
    name: 'Array.shift(), unshift()',
    group: 'Metodos de Array',
    description: 'shift quita y devuelve el primer elemento del array. unshift anade uno o mas elementos al inicio. Ambos modifican el array original.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const lista = ["b", "c"];\n  lista.unshift("a");\n  const quitado = lista.shift();\n  document.getElementById("salida").textContent = "lista: " + lista.join(",") + " / quitado: " + quitado;\n</script>'
  },
  {
    slug: 'array-slice',
    tag: '.slice()',
    name: 'Array.slice()',
    group: 'Metodos de Array',
    description: 'Devuelve una copia parcial del array entre dos indices, sin modificar el original.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const numeros = [10, 20, 30, 40, 50];\n  const parte = numeros.slice(1, 4);\n  document.getElementById("salida").textContent = parte.join(", ");\n</script>'
  },
  {
    slug: 'array-sort',
    tag: '.sort()',
    name: 'Array.sort()',
    group: 'Metodos de Array',
    description: 'Ordena los elementos del array en el propio array. Sin una funcion de comparacion, ordena como texto; para numeros conviene pasar (a, b) => a - b.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const numeros = [40, 5, 100, 25];\n  numeros.sort((a, b) => a - b);\n  document.getElementById("salida").textContent = numeros.join(", ");\n</script>'
  },
  {
    slug: 'array-join',
    tag: '.join()',
    name: 'Array.join()',
    group: 'Metodos de Array',
    description: 'Une todos los elementos de un array en una sola cadena de texto, separados por el caracter indicado.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const palabras = ["Hola", "mundo"];\n  const frase = palabras.join(" ");\n  document.getElementById("salida").textContent = frase;\n</script>'
  },

  // ---------- Metodos de String ----------
  {
    slug: 'string-split',
    tag: '.split()',
    name: 'String.split()',
    group: 'Metodos de String',
    description: 'Divide una cadena de texto en un array de subcadenas, usando el separador indicado.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const frase = "uno,dos,tres";\n  const partes = frase.split(",");\n  document.getElementById("salida").textContent = partes.join(" | ");\n</script>'
  },
  {
    slug: 'string-slice',
    tag: '.slice()',
    name: 'String.slice()',
    group: 'Metodos de String',
    description: 'Devuelve una parte de la cadena entre dos indices, sin modificar el texto original.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const texto = "JavaScript";\n  const parte = texto.slice(0, 4);\n  document.getElementById("salida").textContent = parte;\n</script>'
  },
  {
    slug: 'string-trim',
    tag: '.trim()',
    name: 'String.trim()',
    group: 'Metodos de String',
    description: 'Elimina los espacios en blanco al inicio y al final de una cadena de texto, sin afectar los espacios internos.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const texto = "   hola mundo   ";\n  const limpio = texto.trim();\n  document.getElementById("salida").textContent = "[" + limpio + "]";\n</script>'
  },
  {
    slug: 'string-replace',
    tag: '.replace()',
    name: 'String.replace()',
    group: 'Metodos de String',
    description: 'Devuelve una nueva cadena con la primera coincidencia reemplazada. Para reemplazar todas las coincidencias se usa replaceAll o una expresion regular con la bandera g.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const texto = "el gato y el perro";\n  const nuevo = texto.replace("gato", "raton");\n  document.getElementById("salida").textContent = nuevo;\n</script>'
  },
  {
    slug: 'string-includes',
    tag: '.includes()',
    name: 'String.includes()',
    group: 'Metodos de String',
    description: 'Devuelve true o false segun si la cadena contiene el texto indicado.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const frase = "Aprendiendo JavaScript";\n  const tiene = frase.includes("Script");\n  document.getElementById("salida").textContent = tiene;\n</script>'
  },
  {
    slug: 'string-case',
    tag: '.toUpperCase() / .toLowerCase()',
    name: 'toUpperCase(), toLowerCase()',
    group: 'Metodos de String',
    description: 'Devuelven una copia de la cadena en mayusculas o en minusculas, sin modificar el texto original.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const texto = "Hola Mundo";\n  document.getElementById("salida").textContent = texto.toUpperCase() + " / " + texto.toLowerCase();\n</script>'
  },
  {
    slug: 'string-startswith-endswith',
    tag: '.startsWith() / .endsWith()',
    name: 'startsWith(), endsWith()',
    group: 'Metodos de String',
    description: 'Devuelven true o false segun si la cadena empieza o termina con el texto indicado.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const archivo = "imagen.png";\n  const esImagen = archivo.endsWith(".png");\n  document.getElementById("salida").textContent = esImagen;\n</script>'
  },
  {
    slug: 'string-repeat',
    tag: '.repeat()',
    name: 'String.repeat()',
    group: 'Metodos de String',
    description: 'Devuelve una nueva cadena con el texto original repetido las veces indicadas.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const risa = "ja".repeat(3);\n  document.getElementById("salida").textContent = risa;\n</script>'
  },
  {
    slug: 'string-padstart-padend',
    tag: '.padStart() / .padEnd()',
    name: 'padStart(), padEnd()',
    group: 'Metodos de String',
    description: 'Rellenan una cadena hasta alcanzar una longitud especifica, agregando caracteres al inicio o al final. Muy usado para formatear numeros con ceros.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const numero = "7";\n  const relleno = numero.padStart(3, "0");\n  document.getElementById("salida").textContent = relleno;\n</script>'
  },

  // ---------- Metodos de Object ----------
  {
    slug: 'object-keys',
    tag: 'Object.keys()',
    name: 'Object.keys()',
    group: 'Metodos de Object',
    description: 'Devuelve un array con los nombres de las propiedades propias de un objeto.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const persona = { nombre: "Ana", edad: 28 };\n  const claves = Object.keys(persona);\n  document.getElementById("salida").textContent = claves.join(", ");\n</script>'
  },
  {
    slug: 'object-values',
    tag: 'Object.values()',
    name: 'Object.values()',
    group: 'Metodos de Object',
    description: 'Devuelve un array con los valores de las propiedades propias de un objeto.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const persona = { nombre: "Ana", edad: 28 };\n  const valores = Object.values(persona);\n  document.getElementById("salida").textContent = valores.join(", ");\n</script>'
  },
  {
    slug: 'object-entries',
    tag: 'Object.entries()',
    name: 'Object.entries()',
    group: 'Metodos de Object',
    description: 'Devuelve un array de pares [clave, valor] a partir de un objeto, util para recorrerlo con for...of o transformarlo con map.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const persona = { nombre: "Ana", edad: 28 };\n  let resultado = "";\n  for (const [clave, valor] of Object.entries(persona)) {\n    resultado += clave + "=" + valor + " ";\n  }\n  document.getElementById("salida").textContent = resultado;\n</script>'
  },
  {
    slug: 'object-assign',
    tag: 'Object.assign()',
    name: 'Object.assign()',
    group: 'Metodos de Object',
    description: 'Copia las propiedades de uno o mas objetos hacia un objeto destino, util para combinar objetos o crear copias superficiales.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const base = { color: "rojo" };\n  const extra = { tamanio: "M" };\n  const combinado = Object.assign({}, base, extra);\n  document.getElementById("salida").textContent = JSON.stringify(combinado);\n</script>'
  },
  {
    slug: 'object-freeze',
    tag: 'Object.freeze()',
    name: 'Object.freeze()',
    group: 'Metodos de Object',
    description: 'Impide que se anadan, eliminen o modifiquen propiedades de un objeto. Los intentos de cambio se ignoran silenciosamente fuera de modo estricto.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const config = Object.freeze({ version: 1 });\n  config.version = 2;\n  document.getElementById("salida").textContent = "version sigue siendo: " + config.version;\n</script>'
  },

  // ---------- Utilidades globales ----------
  {
    slug: 'json-stringify',
    tag: 'JSON.stringify()',
    name: 'JSON.stringify()',
    group: 'Utilidades globales',
    description: 'Convierte un valor de JavaScript (objeto, array) en una cadena de texto en formato JSON, util para guardarlo o enviarlo por red.',
    attributes: [
      { name: 'valor', description: 'El dato a convertir en texto JSON.' },
      { name: 'espacio', description: 'Numero de espacios de indentacion, para un JSON legible (opcional).' }
    ],
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const persona = { nombre: "Ana", activo: true };\n  const texto = JSON.stringify(persona);\n  document.getElementById("salida").textContent = texto;\n</script>'
  },
  {
    slug: 'json-parse',
    tag: 'JSON.parse()',
    name: 'JSON.parse()',
    group: 'Utilidades globales',
    description: 'Convierte una cadena de texto en formato JSON de vuelta a un valor de JavaScript (objeto, array).',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const texto = `{"nombre":"Ana","edad":28}`;\n  const persona = JSON.parse(texto);\n  document.getElementById("salida").textContent = persona.nombre + " tiene " + persona.edad;\n</script>'
  },
  {
    slug: 'math-random',
    tag: 'Math.random()',
    name: 'Math.random()',
    group: 'Utilidades globales',
    description: 'Devuelve un numero decimal aleatorio entre 0 (incluido) y 1 (no incluido). Se combina con Math.floor para generar enteros en un rango.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const aleatorio = Math.floor(Math.random() * 10) + 1;\n  document.getElementById("salida").textContent = "Numero entre 1 y 10: " + aleatorio;\n</script>'
  },
  {
    slug: 'math-min-max',
    tag: 'Math.min() / Math.max()',
    name: 'Math.min(), Math.max()',
    group: 'Utilidades globales',
    description: 'Devuelven el menor o el mayor valor entre los argumentos recibidos.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const menor = Math.min(4, 9, 1, 7);\n  const mayor = Math.max(4, 9, 1, 7);\n  document.getElementById("salida").textContent = "min: " + menor + " / max: " + mayor;\n</script>'
  },
  {
    slug: 'math-floor-round',
    tag: 'Math.floor() / Math.round()',
    name: 'Math.floor(), Math.round()',
    group: 'Utilidades globales',
    description: 'Math.floor redondea siempre hacia abajo. Math.round redondea al entero mas cercano, segun las reglas de redondeo habituales.',
    code: '<p>Resultado: <strong id="salida"></strong></p>\n<script>\n  const numero = 4.7;\n  document.getElementById("salida").textContent = "floor: " + Math.floor(numero) + " / round: " + Math.round(numero);\n</script>'
  },
  {
    slug: 'console-log',
    tag: 'console.log()',
    name: 'console.log()',
    group: 'Utilidades globales',
    description: 'Escribe un mensaje en la consola del navegador, la herramienta principal para inspeccionar valores mientras se escribe o depura codigo.',
    note: 'El mensaje aparece en la consola del navegador (F12 o clic derecho > Inspeccionar), no dentro de esta vista previa.',
    code: '<p><span id="salida"></span></p>\n<script>\n  console.log("Este mensaje aparece en la consola del navegador");\n  document.getElementById("salida").textContent = "Revisa la consola con F12 para ver el mensaje";\n</script>'
  },
  {
    slug: 'settimeout',
    tag: 'setTimeout()',
    name: 'setTimeout()',
    group: 'Utilidades globales',
    description: 'Ejecuta una funcion una sola vez despues de un tiempo determinado, sin bloquear el resto del programa mientras espera.',
    code: '<p><span id="salida"></span></p>\n<script>\n  document.getElementById("salida").textContent = "Esperando...";\n  setTimeout(() => {\n    document.getElementById("salida").textContent = "Pasaron 1.2 segundos";\n  }, 1200);\n</script>'
  },

  // ---------- DOM y eventos ----------
  {
    slug: 'query-selector',
    tag: 'document.querySelector()',
    name: 'querySelector()',
    group: 'DOM y eventos',
    description: 'Devuelve el primer elemento del documento que coincide con un selector CSS, o null si no encuentra ninguno.',
    code: '<p id="objetivo">Texto original</p>\n<script>\n  const elemento = document.querySelector("#objetivo");\n  elemento.textContent = "Texto cambiado con querySelector";\n</script>'
  },
  {
    slug: 'query-selector-all',
    tag: 'document.querySelectorAll()',
    name: 'querySelectorAll()',
    group: 'DOM y eventos',
    description: 'Devuelve todos los elementos del documento que coinciden con un selector CSS, como una lista recorrible con forEach.',
    code: '<ul>\n  <li class="item">Uno</li>\n  <li class="item">Dos</li>\n  <li class="item">Tres</li>\n</ul>\n<script>\n  document.querySelectorAll(".item").forEach(el => {\n    el.style.fontWeight = "800";\n  });\n</script>'
  },
  {
    slug: 'add-event-listener',
    tag: 'addEventListener()',
    name: 'addEventListener()',
    group: 'DOM y eventos',
    description: 'Registra una funcion que se ejecuta cuando ocurre un evento especifico sobre un elemento, como un clic o el envio de un formulario.',
    attributes: [
      { name: 'tipo', description: 'Nombre del evento a escuchar, por ejemplo "click" o "submit".' },
      { name: 'funcion', description: 'Se ejecuta cuando el evento ocurre.' }
    ],
    code: '<button id="boton" style="padding:8px 16px;">Haz clic</button>\n<p id="salida"></p>\n<script>\n  document.getElementById("boton").addEventListener("click", () => {\n    document.getElementById("salida").textContent = "Hiciste clic";\n  });\n</script>'
  },
  {
    slug: 'classlist',
    tag: 'classList',
    name: 'classList',
    group: 'DOM y eventos',
    description: 'Permite agregar, quitar o alternar clases CSS de un elemento sin manipular directamente el atributo class como texto.',
    code: '<button id="boton" style="padding:8px 16px;">Alternar clase</button>\n<p id="caja" style="margin-top:8px;padding:10px;">Caja</p>\n<style>\n  .resaltada { font-weight: 800; text-decoration: underline; }\n</style>\n<script>\n  document.getElementById("boton").addEventListener("click", () => {\n    document.getElementById("caja").classList.toggle("resaltada");\n  });\n</script>'
  },
  {
    slug: 'innerhtml-textcontent',
    tag: 'innerHTML / textContent',
    name: 'innerHTML, textContent',
    group: 'DOM y eventos',
    description: 'Ambos leen o cambian el contenido de un elemento. textContent trata todo como texto plano; innerHTML interpreta el contenido como HTML.',
    note: 'Insertar HTML de una fuente no confiable con innerHTML puede abrir una vulnerabilidad XSS; para texto plano usa siempre textContent.',
    code: '<p id="salida">Original</p>\n<script>\n  document.getElementById("salida").innerHTML = "Con <strong>innerHTML</strong>";\n</script>'
  },
  {
    slug: 'create-element',
    tag: 'document.createElement()',
    name: 'createElement()',
    group: 'DOM y eventos',
    description: 'Crea un nuevo elemento HTML en memoria, que luego se puede configurar y agregar al documento con appendChild.',
    code: '<div id="contenedor"></div>\n<script>\n  const parrafo = document.createElement("p");\n  parrafo.textContent = "Creado con createElement";\n  document.getElementById("contenedor").appendChild(parrafo);\n</script>'
  },
  {
    slug: 'dataset',
    tag: 'dataset',
    name: 'dataset',
    group: 'DOM y eventos',
    description: 'Permite leer los atributos data-* de un elemento como propiedades de un objeto, sin necesidad de getAttribute.',
    code: '<p id="objetivo" data-usuario="ana">Elemento con data-usuario</p>\n<script>\n  const elemento = document.getElementById("objetivo");\n  elemento.textContent = "Usuario: " + elemento.dataset.usuario;\n</script>'
  },

  // ---------- Asincronia ----------
  {
    slug: 'promise',
    tag: 'Promise',
    name: 'Promise',
    group: 'Asincronia',
    description: 'Representa un valor que estara disponible en el futuro: se resuelve con exito o se rechaza con un error, y se maneja con then/catch.',
    code: '<p><span id="salida"></span></p>\n<script>\n  document.getElementById("salida").textContent = "Cargando...";\n  const esperar = new Promise(resolver => {\n    setTimeout(() => resolver("Listo"), 1000);\n  });\n  esperar.then(resultado => {\n    document.getElementById("salida").textContent = resultado;\n  });\n</script>'
  },
  {
    slug: 'async-await',
    tag: 'async / await',
    name: 'async, await',
    group: 'Asincronia',
    description: 'Sintaxis para trabajar con promesas como si fueran codigo sincrono: await pausa la funcion hasta que la promesa se resuelve, sin bloquear el resto de la pagina.',
    code: '<p><span id="salida"></span></p>\n<script>\n  function esperar(ms) {\n    return new Promise(resolver => setTimeout(resolver, ms));\n  }\n  async function iniciar() {\n    document.getElementById("salida").textContent = "Esperando...";\n    await esperar(1000);\n    document.getElementById("salida").textContent = "Listo despues de esperar";\n  }\n  iniciar();\n</script>'
  }
];
