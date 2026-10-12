// Categoria sin vista previa (hasPreview: false en categories.js): Node.js
// corre en el servidor, no en el navegador, asi que no hay iframe. `code`
// es JavaScript puro de Node (CommonJS), sin <script> ni HTML envolvente.
module.exports = [
  // ---------- Modulos ----------
  {
    slug: 'require',
    tag: 'require()',
    name: 'require()',
    group: 'Modulos',
    description: 'Carga un modulo (un archivo, o un paquete de npm) y devuelve lo que ese modulo exporta, para poder usarlo en el archivo actual.',
    attributes: [
      { name: 'ruta', description: 'Ruta del archivo o nombre del paquete a cargar.' }
    ],
    code: 'const fs = require("fs");\nconst path = require("path");\n\nconsole.log(typeof fs.readFileSync);'
  },
  {
    slug: 'module-exports',
    tag: 'module.exports',
    name: 'module.exports',
    group: 'Modulos',
    description: 'Define que valor (funcion, objeto, clase) expone un archivo cuando otro lo carga con require(). Es el mecanismo de modulos de CommonJS.',
    code: '// archivo: saludos.js\nfunction saludar(nombre) {\n  return "Hola, " + nombre;\n}\n\nmodule.exports = saludar;\n\n// en otro archivo:\n// const saludar = require("./saludos");\n// saludar("Ana");'
  },
  {
    slug: 'dirname-filename',
    tag: '__dirname / __filename',
    name: '__dirname, __filename',
    group: 'Modulos',
    description: 'Variables disponibles automaticamente en cada modulo de CommonJS: __dirname es la carpeta del archivo actual, __filename su ruta completa.',
    code: 'console.log(__dirname);\nconsole.log(__filename);'
  },

  // ---------- Proceso y entorno ----------
  {
    slug: 'process-argv',
    tag: 'process.argv',
    name: 'process.argv',
    group: 'Proceso y entorno',
    description: 'Array con los argumentos con los que se ejecuto el proceso desde la terminal. Los primeros dos son siempre la ruta de node y la del archivo.',
    code: '// node app.js --puerto 3000\nconsole.log(process.argv);\n// ["/usr/bin/node", "/ruta/app.js", "--puerto", "3000"]'
  },
  {
    slug: 'process-env',
    tag: 'process.env',
    name: 'process.env',
    group: 'Proceso y entorno',
    description: 'Objeto con las variables de entorno del sistema. Se usa para configuracion sensible (claves, puertos) que no debe quedar escrita en el codigo.',
    code: 'const puerto = process.env.PORT || 3000;\nconsole.log("Puerto:", puerto);'
  },
  {
    slug: 'process-version',
    tag: 'process.version',
    name: 'process.version',
    group: 'Proceso y entorno',
    description: 'Cadena de texto con la version de Node.js que esta ejecutando el proceso actual.',
    code: 'console.log(process.version);\n// "v22.22.1"'
  },

  // ---------- Sistema de archivos ----------
  {
    slug: 'fs-readfilesync',
    tag: 'fs.readFileSync()',
    name: 'fs.readFileSync()',
    group: 'Sistema de archivos',
    description: 'Lee el contenido completo de un archivo de forma sincrona: el programa espera a que termine antes de continuar con la siguiente linea.',
    attributes: [
      { name: 'ruta', description: 'Ruta del archivo a leer.' },
      { name: 'encoding', description: 'Formato del resultado, por ejemplo "utf8" para obtener texto en vez de un Buffer.' }
    ],
    code: 'const fs = require("fs");\n\nconst contenido = fs.readFileSync("datos.txt", "utf8");\nconsole.log(contenido);'
  },
  {
    slug: 'fs-writefilesync',
    tag: 'fs.writeFileSync()',
    name: 'fs.writeFileSync()',
    group: 'Sistema de archivos',
    description: 'Escribe datos en un archivo de forma sincrona. Si el archivo ya existe, lo reemplaza por completo; si no existe, lo crea.',
    code: 'const fs = require("fs");\n\nfs.writeFileSync("salida.txt", "Contenido generado por Node");\nconsole.log("Archivo guardado");'
  },
  {
    slug: 'fs-existssync',
    tag: 'fs.existsSync()',
    name: 'fs.existsSync()',
    group: 'Sistema de archivos',
    description: 'Devuelve true o false segun si una ruta (archivo o carpeta) existe en el sistema de archivos.',
    code: 'const fs = require("fs");\n\nif (fs.existsSync("config.json")) {\n  console.log("El archivo de configuracion existe");\n} else {\n  console.log("No se encontro config.json");\n}'
  },
  {
    slug: 'fs-readdirsync',
    tag: 'fs.readdirSync()',
    name: 'fs.readdirSync()',
    group: 'Sistema de archivos',
    description: 'Devuelve un array con los nombres de los archivos y carpetas dentro de una carpeta.',
    code: 'const fs = require("fs");\n\nconst archivos = fs.readdirSync(".");\nconsole.log(archivos);'
  },

  // ---------- Path ----------
  {
    slug: 'path-join',
    tag: 'path.join()',
    name: 'path.join()',
    group: 'Path',
    description: 'Une varios segmentos de ruta en una sola, usando el separador correcto del sistema operativo (/ en Linux/Mac, \\ en Windows).',
    code: 'const path = require("path");\n\nconst ruta = path.join("carpeta", "subcarpeta", "archivo.txt");\nconsole.log(ruta);\n// "carpeta/subcarpeta/archivo.txt"'
  },
  {
    slug: 'path-basename-extname',
    tag: 'path.basename() / path.extname()',
    name: 'basename(), extname()',
    group: 'Path',
    description: 'basename() devuelve el nombre del archivo al final de una ruta. extname() devuelve solo su extension.',
    code: 'const path = require("path");\n\nconst ruta = "/proyectos/guia/imagen.png";\nconsole.log(path.basename(ruta));\nconsole.log(path.extname(ruta));\n// "imagen.png"\n// ".png"'
  },
  {
    slug: 'path-resolve',
    tag: 'path.resolve()',
    name: 'path.resolve()',
    group: 'Path',
    description: 'Convierte una ruta relativa en una ruta absoluta, resolviendola contra el directorio de trabajo actual del proceso.',
    code: 'const path = require("path");\n\nconst absoluta = path.resolve("datos.txt");\nconsole.log(absoluta);\n// "/ruta/completa/hasta/datos.txt"'
  },
  {
    slug: 'path-dirname',
    tag: 'path.dirname()',
    name: 'path.dirname()',
    group: 'Path',
    description: 'Devuelve la carpeta contenedora de una ruta, quitando el nombre del archivo al final.',
    code: 'const path = require("path");\n\nconsole.log(path.dirname("/proyectos/guia/imagen.png"));\n// "/proyectos/guia"'
  },

  // ---------- Buffer ----------
  {
    slug: 'buffer-from',
    tag: 'Buffer.from()',
    name: 'Buffer.from()',
    group: 'Buffer',
    description: 'Crea un Buffer, un area de memoria para manejar datos binarios, a partir de una cadena de texto, un array o datos ya existentes.',
    code: 'const buffer = Buffer.from("Hola");\nconsole.log(buffer);\nconsole.log(buffer.toString());\n// <Buffer 48 6f 6c 61>\n// "Hola"'
  },
  {
    slug: 'buffer-length',
    tag: 'buffer.length',
    name: 'buffer.length',
    group: 'Buffer',
    description: 'Numero de bytes que ocupa el contenido del Buffer, que no siempre coincide con el numero de caracteres del texto original.',
    code: 'const buffer = Buffer.from("Ñoño");\nconsole.log(buffer.length);\n// 6 (algunos caracteres ocupan mas de un byte en UTF-8)'
  },

  // ---------- Eventos ----------
  {
    slug: 'eventemitter-on-emit',
    tag: 'EventEmitter',
    name: 'EventEmitter: on(), emit()',
    group: 'Eventos',
    description: 'Clase base de Node para trabajar con eventos personalizados: on() escucha un evento, emit() lo dispara con los datos que quieras enviar.',
    code: 'const EventEmitter = require("events");\n\nconst emisor = new EventEmitter();\n\nemisor.on("saludo", (nombre) => {\n  console.log("Hola, " + nombre);\n});\n\nemisor.emit("saludo", "Ana");'
  },
  {
    slug: 'eventemitter-once',
    tag: '.once()',
    name: 'EventEmitter.once()',
    group: 'Eventos',
    description: 'Igual que on(), pero la funcion se ejecuta una sola vez: despues de la primera vez que ocurre el evento, se elimina automaticamente.',
    code: 'const EventEmitter = require("events");\n\nconst emisor = new EventEmitter();\n\nemisor.once("inicio", () => {\n  console.log("Esto solo se imprime la primera vez");\n});\n\nemisor.emit("inicio");\nemisor.emit("inicio");\n// Solo se imprime una vez'
  },

  // ---------- Sistema operativo ----------
  {
    slug: 'os-platform',
    tag: 'os.platform()',
    name: 'os.platform()',
    group: 'Sistema operativo',
    description: 'Devuelve una cadena de texto identificando el sistema operativo: "linux", "darwin" (macOS), "win32", entre otros.',
    code: 'const os = require("os");\n\nconsole.log(os.platform());\n// "linux"'
  },
  {
    slug: 'os-cpus',
    tag: 'os.cpus()',
    name: 'os.cpus()',
    group: 'Sistema operativo',
    description: 'Devuelve un array con informacion de cada nucleo del procesador: modelo, velocidad y tiempos de uso.',
    code: 'const os = require("os");\n\nconsole.log("Nucleos disponibles:", os.cpus().length);'
  },
  {
    slug: 'os-totalmem-freemem',
    tag: 'os.totalmem() / os.freemem()',
    name: 'totalmem(), freemem()',
    group: 'Sistema operativo',
    description: 'Devuelven, en bytes, la memoria total del sistema y la memoria libre disponible en este momento.',
    code: 'const os = require("os");\n\nconst totalGB = (os.totalmem() / 1024 / 1024 / 1024).toFixed(1);\nconsole.log("Memoria total: " + totalGB + " GB");'
  },

  // ---------- HTTP ----------
  {
    slug: 'http-createserver',
    tag: 'http.createServer()',
    name: 'http.createServer()',
    group: 'HTTP',
    description: 'Crea un servidor HTTP basico usando solo Node, sin ningun framework. Recibe una funcion que se ejecuta en cada peticion entrante.',
    attributes: [
      { name: 'callback(req, res)', description: 'Se ejecuta en cada peticion; req es la solicitud, res la respuesta a construir.' }
    ],
    code: 'const http = require("http");\n\nconst servidor = http.createServer((req, res) => {\n  res.writeHead(200, { "Content-Type": "text/plain" });\n  res.end("Hola desde Node");\n});\n\nservidor.listen(3000, () => {\n  console.log("Servidor escuchando en el puerto 3000");\n});'
  },
  {
    slug: 'http-get',
    tag: 'http.get()',
    name: 'http.get()',
    group: 'HTTP',
    description: 'Hace una peticion HTTP GET como cliente, hacia otro servidor, y entrega la respuesta por partes a medida que llega.',
    code: 'const http = require("http");\n\nhttp.get("http://ejemplo.com/datos", (res) => {\n  let cuerpo = "";\n  res.on("data", (parte) => { cuerpo += parte; });\n  res.on("end", () => { console.log(cuerpo); });\n});'
  }
];
