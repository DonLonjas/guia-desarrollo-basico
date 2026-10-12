// Categoria sin vista previa: JSON es un formato de datos, no codigo ejecutable
// en el navegador. `code` es JSON puro y valido, listo para ser parseado o
// intercambiado entre sistemas.
module.exports = [
  // ---------- Fundamentos ----------
  {
    slug: 'sintaxis',
    tag: '{}',
    name: 'Sintaxis',
    group: 'Fundamentos',
    description: 'JSON se escribe como un objeto entre llaves o un array entre corchetes. No admite comentarios.',
    code: '{\n  "nombre": "Ana",\n  "edad": 28\n}'
  },
  {
    slug: 'objeto',
    tag: 'object',
    name: 'Objeto',
    group: 'Fundamentos',
    description: 'Coleccion de pares clave-valor. Las claves deben ser strings entre comillas dobles.',
    code: '{\n  "nombre": "Ana Perez",\n  "email": "ana@example.com",\n  "activo": true\n}'
  },
  {
    slug: 'array',
    tag: 'array',
    name: 'Array',
    group: 'Fundamentos',
    description: 'Lista ordenada de valores. Puede contener strings, numeros, booleanos, objetos u otros arrays.',
    code: '[\n  "manzana",\n  "banana",\n  "cereza"\n]'
  },
  {
    slug: 'tipos-de-dato',
    tag: 'string, number, boolean, null',
    name: 'Tipos de dato',
    group: 'Fundamentos',
    description: 'JSON soporta strings, numeros, booleanos, null, objetos y arrays. No soporta funciones, undefined ni fechas como tipo nativo.',
    code: '{\n  "nombre": "Ana",\n  "edad": 28,\n  "activo": true,\n  "saldo": null\n}'
  },

  // ---------- Reglas y restricciones ----------
  {
    slug: 'comillas-dobles',
    tag: '""',
    name: 'Comillas dobles',
    group: 'Reglas y restricciones',
    description: 'Las claves y los strings deben usar comillas dobles. Las comillas simples no son validas.',
    code: '{\n  "mensaje": "Hola, mundo"\n}'
  },
  {
    slug: 'sin-comentarios',
    tag: '//',
    name: 'Sin comentarios',
    group: 'Reglas y restricciones',
    description: 'JSON no admite comentarios de linea ni de bloque. Cualquier comentario rompe el parser estandar.',
    code: '{\n  "nota": "Este objeto no puede contener comentarios"\n}'
  },
  {
    slug: 'claves',
    tag: 'keys',
    name: 'Claves',
    group: 'Reglas y restricciones',
    description: 'Las claves deben ser strings. No pueden ser numeros ni dejarse sin comillas, a diferencia de los objetos de JavaScript.',
    code: '{\n  "123": "clave valida como string",\n  "usuario_id": "u-482"\n}'
  },
  {
    slug: 'null',
    tag: 'null',
    name: 'null',
    group: 'Reglas y restricciones',
    description: 'Representa un valor nulo. No existe undefined en JSON; un campo omitido simplemente no aparece.',
    code: '{\n  "segundoNombre": null\n}'
  },

  // ---------- Anidacion ----------
  {
    slug: 'objeto-anidado',
    tag: 'nested object',
    name: 'Objeto anidado',
    group: 'Anidacion',
    description: 'Un valor puede ser otro objeto, permitiendo estructuras jerarquicas.',
    code: '{\n  "usuario": {\n    "nombre": "Ana",\n    "contacto": {\n      "email": "ana@example.com",\n      "telefono": "+57 300 123 4567"\n    }\n  }\n}'
  },
  {
    slug: 'array-de-objetos',
    tag: 'array of objects',
    name: 'Array de objetos',
    group: 'Anidacion',
    description: 'Un array puede contener varios objetos, una forma muy comun de representar listas de registros.',
    code: '[\n  {\n    "id": 1,\n    "nombre": "Ana"\n  },\n  {\n    "id": 2,\n    "nombre": "Luis"\n  }\n]'
  },

  // ---------- Uso en JavaScript ----------
  {
    slug: 'json-parse',
    tag: 'JSON.parse()',
    name: 'JSON.parse()',
    group: 'Uso en JavaScript',
    description: 'Convierte una cadena JSON en un objeto o array de JavaScript.',
    code: 'const texto = \'{"nombre":"Ana","edad":28}\';\nconst datos = JSON.parse(texto);\nconsole.log(datos.nombre);'
  },
  {
    slug: 'json-stringify',
    tag: 'JSON.stringify()',
    name: 'JSON.stringify()',
    group: 'Uso en JavaScript',
    description: 'Convierte un objeto o array de JavaScript en una cadena JSON valida.',
    code: 'const datos = { nombre: "Ana", edad: 28 };\nconst texto = JSON.stringify(datos);\nconsole.log(texto);'
  },

  // ---------- Validacion ----------
  {
    slug: 'json-schema',
    tag: 'JSON Schema',
    name: 'JSON Schema',
    group: 'Validacion',
    description: 'Estandar para describir la estructura esperada de un JSON: propiedades, tipos y restricciones.',
    code: '{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "type": "object",\n  "properties": {\n    "nombre": { "type": "string" },\n    "edad": { "type": "integer", "minimum": 0 }\n  },\n  "required": ["nombre", "edad"]\n}'
  },
  {
    slug: 'herramientas-validacion',
    tag: 'validadores',
    name: 'Validadores',
    group: 'Validacion',
    description: 'Herramientas como jsonlint, validadores online o librerias como ajv permiten verificar que un JSON cumple una estructura.',
    code: '{\n  "valid": true,\n  "errores": []\n}'
  }
];
