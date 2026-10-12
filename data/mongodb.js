// Categoria sin vista previa: MongoDB corre en su propio servidor o shell,
// no en el navegador. `code` es codigo puro para mongosh o el shell de MongoDB.
module.exports = [
  // ---------- CRUD: crear ----------
  {
    slug: 'insert-one',
    tag: 'insertOne()',
    name: 'insertOne()',
    group: 'CRUD: crear',
    description: 'Inserta un solo documento en una coleccion. MongoDB genera el campo _id automaticamente si no se proporciona.',
    attributes: [
      { name: 'documento', description: 'Objeto JSON con los campos del documento a insertar.' }
    ],
    code: "db.usuarios.insertOne({\n  nombre: 'Ana Perez',\n  email: 'ana@example.com',\n  edad: 28,\n  activo: true\n});"
  },
  {
    slug: 'insert-many',
    tag: 'insertMany()',
    name: 'insertMany()',
    group: 'CRUD: crear',
    description: 'Inserta varios documentos en una sola operacion. Recibe un array de documentos.',
    code: "db.usuarios.insertMany([\n  { nombre: 'Luis Gomez', email: 'luis@example.com', edad: 34 },\n  { nombre: 'Sara Diaz', email: 'sara@example.com', edad: 22 }\n]);"
  },

  // ---------- CRUD: leer ----------
  {
    slug: 'find',
    tag: 'find()',
    name: 'find()',
    group: 'CRUD: leer',
    description: 'Recupera todos los documentos que coinciden con un filtro. Sin filtro, devuelve todos los documentos de la coleccion.',
    code: "db.usuarios.find({ activo: true });"
  },
  {
    slug: 'find-one',
    tag: 'findOne()',
    name: 'findOne()',
    group: 'CRUD: leer',
    description: 'Devuelve solo el primer documento que coincide con el filtro, o null si no encuentra ninguno.',
    code: "db.usuarios.findOne({ email: 'ana@example.com' });"
  },
  {
    slug: 'count-documents',
    tag: 'countDocuments()',
    name: 'countDocuments()',
    group: 'CRUD: leer',
    description: 'Cuenta cuantos documentos cumplen el filtro. Requiere un filtro explicito; para contar toda la coleccion, usa {}.',
    code: "db.usuarios.countDocuments({ activo: true });"
  },
  {
    slug: 'estimated-document-count',
    tag: 'estimatedDocumentCount()',
    name: 'estimatedDocumentCount()',
    group: 'CRUD: leer',
    description: 'Estima el numero total de documentos en una coleccion usando metadatos, mas rapido que countDocuments sin filtro.',
    code: "db.usuarios.estimatedDocumentCount();"
  },

  // ---------- CRUD: actualizar ----------
  {
    slug: 'update-one',
    tag: 'updateOne()',
    name: 'updateOne()',
    group: 'CRUD: actualizar',
    description: 'Modifica el primer documento que coincida con el filtro. Usa operadores como $set, $unset o $inc.',
    code: "db.usuarios.updateOne(\n  { email: 'ana@example.com' },\n  { $set: { edad: 29 } }\n);"
  },
  {
    slug: 'update-many',
    tag: 'updateMany()',
    name: 'updateMany()',
    group: 'CRUD: actualizar',
    description: 'Modifica todos los documentos que coincidan con el filtro.',
    code: "db.usuarios.updateMany(\n  { ciudad: 'Bogota' },\n  { $set: { pais: 'Colombia' } }\n);"
  },
  {
    slug: 'replace-one',
    tag: 'replaceOne()',
    name: 'replaceOne()',
    group: 'CRUD: actualizar',
    description: 'Reemplaza completamente el primer documento que coincida con el filtro, manteniendo su _id.',
    code: "db.usuarios.replaceOne(\n  { email: 'ana@example.com' },\n  { nombre: 'Ana Perez', edad: 29, email: 'ana@example.com' }\n);"
  },

  // ---------- CRUD: eliminar ----------
  {
    slug: 'delete-one',
    tag: 'deleteOne()',
    name: 'deleteOne()',
    group: 'CRUD: eliminar',
    description: 'Elimina el primer documento que coincida con el filtro.',
    code: "db.usuarios.deleteOne({ email: 'ana@example.com' });"
  },
  {
    slug: 'delete-many',
    tag: 'deleteMany()',
    name: 'deleteMany()',
    group: 'CRUD: eliminar',
    description: 'Elimina todos los documentos que coincidan con el filtro. Sin filtro, vacia la coleccion.',
    code: "db.usuarios.deleteMany({ activo: false });"
  },

  // ---------- Filtros y operadores ----------
  {
    slug: 'operadores-comparacion',
    tag: '$eq, $ne, $gt, $gte, $lt, $lte',
    name: 'Operadores de comparacion',
    group: 'Filtros y operadores',
    description: 'Comparan valores de campos: igual, distinto, mayor, mayor o igual, menor, menor o igual.',
    code: "db.usuarios.find({\n  edad: { $gte: 18, $lte: 30 }\n});"
  },
  {
    slug: 'in-nin',
    tag: '$in / $nin',
    name: '$in, $nin',
    group: 'Filtros y operadores',
    description: '$in selecciona documentos cuyo campo coincide con alguno de los valores de una lista. $nin excluye esos valores.',
    code: "db.usuarios.find({\n  ciudad: { $in: ['Bogota', 'Mexico', 'Madrid'] }\n});"
  },
  {
    slug: 'and-or-nor',
    tag: '$and / $or / $nor',
    name: '$and, $or, $nor',
    group: 'Filtros y operadores',
    description: 'Combinan varias condiciones. $and exige que todas se cumplan, $or con que se cumpla al menos una, $nor excluye todas.',
    code: "db.usuarios.find({\n  $or: [\n    { edad: { $lt: 18 } },\n    { edad: { $gt: 65 } }\n  ]\n});"
  },
  {
    slug: 'exists',
    tag: '$exists',
    name: '$exists',
    group: 'Filtros y operadores',
    description: 'Selecciona documentos donde un campo existe o no existe, independientemente de su valor.',
    code: "db.usuarios.find({\n  telefono: { $exists: true }\n});"
  },
  {
    slug: 'regex',
    tag: '$regex',
    name: '$regex',
    group: 'Filtros y operadores',
    description: 'Busca documentos cuyo campo coincida con una expresion regular.',
    code: "db.usuarios.find({\n  nombre: { $regex: '^Ana', $options: 'i' }\n});"
  },
  {
    slug: 'not',
    tag: '$not',
    name: '$not',
    group: 'Filtros y operadores',
    description: ' niega el resultado de una expresion de consulta.',
    code: "db.usuarios.find({\n  edad: { $not: { $gte: 18 } }\n});"
  },

  // ---------- Proyeccion, orden y paginacion ----------
  {
    slug: 'projection',
    tag: 'projection',
    name: 'Proyeccion',
    group: 'Proyeccion, orden y paginacion',
    description: 'Limita los campos devueltos por una consulta. 1 incluye el campo, 0 lo excluye.',
    code: "db.usuarios.find(\n  { activo: true },\n  { nombre: 1, email: 1, _id: 0 }\n);"
  },
  {
    slug: 'sort',
    tag: 'sort()',
    name: 'sort()',
    group: 'Proyeccion, orden y paginacion',
    description: 'Ordena los documentos segun uno o varios campos: 1 ascendente, -1 descendente.',
    code: "db.usuarios.find().sort({ edad: -1 });"
  },
  {
    slug: 'limit-skip',
    tag: 'limit() / skip()',
    name: 'limit(), skip()',
    group: 'Proyeccion, orden y paginacion',
    description: 'limit() reduce la cantidad de documentos devueltos; skip() omite los primeros, util para paginar.',
    code: "db.usuarios.find()\n  .sort({ edad: -1 })\n  .skip(10)\n  .limit(5);"
  },

  // ---------- Agregacion ----------
  {
    slug: 'aggregate',
    tag: 'aggregate()',
    name: 'aggregate()',
    group: 'Agregacion',
    description: 'Ejecuta un pipeline de etapas para transformar, filtrar, agrupar y calcular datos.',
    code: "db.ventas.aggregate([\n  { $match: { estado: 'completado' } },\n  { $group: { _id: '$producto', total: { $sum: '$cantidad' } } },\n  { $sort: { total: -1 } }\n]);"
  },
  {
    slug: 'match',
    tag: '$match',
    name: '$match',
    group: 'Agregacion',
    description: 'Filtra documentos en una etapa de agregacion, igual que un find().',
    code: "db.ventas.aggregate([\n  { $match: { estado: 'completado' } }\n]);"
  },
  {
    slug: 'group',
    tag: '$group',
    name: '$group',
    group: 'Agregacion',
    description: 'Agrupa documentos por un campo y aplica operadores de acumulacion como $sum, $avg, $min, $max, $count.',
    code: "db.ventas.aggregate([\n  {\n    $group: {\n      _id: '$categoria',\n      totalVentas: { $sum: '$monto' },\n      promedio: { $avg: '$monto' }\n    }\n  }\n]);"
  },
  {
    slug: 'project',
    tag: '$project',
    name: '$project',
    group: 'Agregacion',
    description: 'Selecciona o transforma los campos que pasan a la siguiente etapa del pipeline.',
    code: "db.usuarios.aggregate([\n  {\n    $project: {\n      nombre: 1,\n      email: 1,\n      mayorDeEdad: { $gte: ['$edad', 18] }\n    }\n  }\n]);"
  },
  {
    slug: 'lookup',
    tag: '$lookup',
    name: '$lookup',
    group: 'Agregacion',
    description: 'Realiza un left outer join entre colecciones del mismo servidor, similar a JOIN en SQL.',
    code: "db.usuarios.aggregate([\n  {\n    $lookup: {\n      from: 'pedidos',\n      localField: '_id',\n      foreignField: 'usuarioId',\n      as: 'pedidos'\n    }\n  }\n]);"
  },
  {
    slug: 'unwind',
    tag: '$unwind',
    name: '$unwind',
    group: 'Agregacion',
    description: 'Descompone un array en documentos separados, uno por cada elemento del array.',
    code: "db.usuarios.aggregate([\n  { $unwind: '$etiquetas' }\n]);"
  },

  // ---------- Indices ----------
  {
    slug: 'create-index',
    tag: 'createIndex()',
    name: 'createIndex()',
    group: 'Indices',
    description: 'Crea un indice para acelerar consultas. 1 es ascendente, -1 descendente.',
    code: "db.usuarios.createIndex({ email: 1 });"
  },
  {
    slug: 'unique-index',
    tag: 'createIndex({ unique: true })',
    name: 'Indice unico',
    group: 'Indices',
    description: 'Crea un indice que impide valores duplicados en el campo o combinacion de campos indexados.',
    code: "db.usuarios.createIndex(\n  { email: 1 },\n  { unique: true }\n);"
  },
  {
    slug: 'drop-index',
    tag: 'dropIndex()',
    name: 'dropIndex()',
    group: 'Indices',
    description: 'Elimina un indice existente de una coleccion.',
    code: "db.usuarios.dropIndex('email_1');"
  },
  {
    slug: 'list-indexes',
    tag: 'getIndexes()',
    name: 'getIndexes()',
    group: 'Indices',
    description: 'Devuelve la lista de indices definidos en una coleccion.',
    code: "db.usuarios.getIndexes();"
  },

  // ---------- Colecciones y base de datos ----------
  {
    slug: 'create-collection',
    tag: 'db.createCollection()',
    name: 'db.createCollection()',
    group: 'Colecciones y base de datos',
    description: 'Crea una coleccion explicitamente. Permite definir opciones como validacion de esquema.',
    code: "db.createCollection('productos', {\n  validator: {\n    $jsonSchema: {\n      bsonType: 'object',\n      required: ['nombre', 'precio'],\n      properties: {\n        nombre: { bsonType: 'string' },\n        precio: { bsonType: 'number', minimum: 0 }\n      }\n    }\n  }\n});"
  },
  {
    slug: 'drop-collection',
    tag: 'drop()',
    name: 'drop()',
    group: 'Colecciones y base de datos',
    description: 'Elimina una coleccion completa, incluyendo todos sus documentos e indices.',
    code: "db.usuarios.drop();"
  },
  {
    slug: 'use-database',
    tag: 'use',
    name: 'use',
    group: 'Colecciones y base de datos',
    description: 'Cambia el contexto a una base de datos. Si no existe, MongoDB la crea al insertar el primer documento.',
    code: "use miAplicacion;"
  },
  {
    slug: 'show-collections',
    tag: 'show collections',
    name: 'show collections',
    group: 'Colecciones y base de datos',
    description: 'Lista las colecciones de la base de datos actual en el shell.',
    code: "show collections;"
  }
];
