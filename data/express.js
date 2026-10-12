// Categoria sin vista previa (hasPreview: false en categories.js): Express
// corre en el servidor, no en el navegador, asi que no hay iframe. `code`
// es JavaScript puro, sin <script> ni HTML envolvente.
module.exports = [
  // ---------- Aplicacion y rutas ----------
  {
    slug: 'express-app',
    tag: 'express()',
    name: 'Crear la aplicacion',
    group: 'Aplicacion y rutas',
    description: 'express() crea la aplicacion. app.listen() la pone a escuchar peticiones en un puerto especifico.',
    code: 'const express = require("express");\nconst app = express();\n\napp.listen(3000, () => {\n  console.log("Servidor escuchando en el puerto 3000");\n});'
  },
  {
    slug: 'app-get',
    tag: 'app.get()',
    name: 'app.get()',
    group: 'Aplicacion y rutas',
    description: 'Define que hacer cuando llega una peticion GET a una ruta especifica.',
    attributes: [
      { name: 'ruta', description: 'Path de la URL, por ejemplo "/saludo".' },
      { name: 'callback(req, res)', description: 'Se ejecuta cuando llega la peticion.' }
    ],
    code: 'app.get("/saludo", (req, res) => {\n  res.send("Hola desde Express");\n});'
  },
  {
    slug: 'app-post',
    tag: 'app.post()',
    name: 'app.post()',
    group: 'Aplicacion y rutas',
    description: 'Define que hacer cuando llega una peticion POST a una ruta especifica, tipicamente para crear o enviar datos.',
    code: 'app.post("/usuarios", (req, res) => {\n  res.status(201).send("Usuario creado");\n});'
  },
  {
    slug: 'route-params',
    tag: 'req.params',
    name: 'Parametros de ruta',
    group: 'Aplicacion y rutas',
    description: 'Los segmentos de la URL marcados con : se capturan como propiedades de req.params.',
    code: 'app.get("/usuarios/:id", (req, res) => {\n  res.send("Usuario con id " + req.params.id);\n});\n\n// GET /usuarios/42 -> "Usuario con id 42"'
  },
  {
    slug: 'query-strings',
    tag: 'req.query',
    name: 'Query strings',
    group: 'Aplicacion y rutas',
    description: 'Los parametros despues del ? en la URL se leen como propiedades de req.query.',
    code: 'app.get("/buscar", (req, res) => {\n  res.send("Buscando: " + req.query.termino);\n});\n\n// GET /buscar?termino=guia -> "Buscando: guia"'
  },

  // ---------- Middleware ----------
  {
    slug: 'app-use',
    tag: 'app.use()',
    name: 'app.use()',
    group: 'Middleware',
    description: 'Registra un middleware: una funcion que se ejecuta en cada peticion antes de llegar a la ruta final, util para logging, autenticacion o transformar datos.',
    code: 'app.use((req, res, next) => {\n  console.log(req.method, req.url);\n  next();\n});'
  },
  {
    slug: 'express-json',
    tag: 'express.json()',
    name: 'express.json()',
    group: 'Middleware',
    description: 'Middleware incorporado que interpreta el cuerpo de la peticion como JSON y lo deja disponible en req.body.',
    code: 'app.use(express.json());\n\napp.post("/mensajes", (req, res) => {\n  res.send("Recibido: " + req.body.texto);\n});'
  },
  {
    slug: 'express-static',
    tag: 'express.static()',
    name: 'express.static()',
    group: 'Middleware',
    description: 'Middleware incorporado que sirve archivos estaticos (HTML, CSS, imagenes) directamente desde una carpeta del proyecto.',
    code: 'app.use(express.static("public"));\n\n// Cualquier archivo dentro de /public queda disponible\n// directamente por su ruta: /public/logo.png -> /logo.png'
  },
  {
    slug: 'custom-middleware',
    tag: 'next()',
    name: 'Middleware personalizado',
    group: 'Middleware',
    description: 'Un middleware propio recibe req, res y next. Debe llamar a next() para que la peticion continue hacia la siguiente funcion; si no lo hace, la peticion se queda esperando.',
    code: 'function verificarToken(req, res, next) {\n  if (req.headers.autorizacion) {\n    next();\n  } else {\n    res.status(401).send("Falta autorizacion");\n  }\n}\n\napp.get("/privado", verificarToken, (req, res) => {\n  res.send("Contenido privado");\n});'
  },

  // ---------- Respuestas ----------
  {
    slug: 'res-send',
    tag: 'res.send()',
    name: 'res.send()',
    group: 'Respuestas',
    description: 'Envia la respuesta al cliente. Acepta texto, HTML, un Buffer o un objeto (que convierte automaticamente a JSON).',
    code: 'app.get("/", (req, res) => {\n  res.send("<h1>Pagina de inicio</h1>");\n});'
  },
  {
    slug: 'res-json',
    tag: 'res.json()',
    name: 'res.json()',
    group: 'Respuestas',
    description: 'Envia la respuesta como JSON, poniendo automaticamente el encabezado Content-Type correcto.',
    code: 'app.get("/api/usuario", (req, res) => {\n  res.json({ nombre: "Ana", activo: true });\n});'
  },
  {
    slug: 'res-status',
    tag: 'res.status()',
    name: 'res.status()',
    group: 'Respuestas',
    description: 'Define el codigo de estado HTTP de la respuesta (200, 404, 500...). Se encadena con send() o json() para completar la respuesta.',
    code: 'app.get("/no-encontrado", (req, res) => {\n  res.status(404).send("Recurso no encontrado");\n});'
  },
  {
    slug: 'res-redirect',
    tag: 'res.redirect()',
    name: 'res.redirect()',
    group: 'Respuestas',
    description: 'Redirige al cliente hacia otra URL, respondiendo con un codigo de estado 3xx en vez de contenido.',
    code: 'app.get("/viejo", (req, res) => {\n  res.redirect("/nuevo");\n});'
  },

  // ---------- Enrutamiento avanzado ----------
  {
    slug: 'router',
    tag: 'express.Router()',
    name: 'express.Router()',
    group: 'Enrutamiento avanzado',
    description: 'Crea un conjunto de rutas independiente, que despues se conecta a la aplicacion principal con app.use(). Util para organizar rutas en archivos separados.',
    code: '// archivo: rutas/usuarios.js\nconst express = require("express");\nconst router = express.Router();\n\nrouter.get("/", (req, res) => {\n  res.send("Lista de usuarios");\n});\n\nmodule.exports = router;\n\n// archivo principal:\n// app.use("/usuarios", require("./rutas/usuarios"));'
  },
  {
    slug: 'error-middleware',
    tag: 'Middleware de errores',
    name: 'Middleware de errores',
    group: 'Enrutamiento avanzado',
    description: 'Un middleware con cuatro parametros (err, req, res, next) captura los errores pasados con next(err) desde cualquier ruta anterior.',
    code: 'app.get("/riesgoso", (req, res, next) => {\n  try {\n    throw new Error("Algo salio mal");\n  } catch (err) {\n    next(err);\n  }\n});\n\napp.use((err, req, res, next) => {\n  res.status(500).send("Error: " + err.message);\n});'
  },
  {
    slug: 'not-found-handler',
    tag: 'Ruta catch-all (404)',
    name: 'Manejador 404',
    group: 'Enrutamiento avanzado',
    description: 'Una ruta comodin al final de todas las demas, que responde cuando ninguna ruta anterior coincidio con la peticion.',
    code: 'app.get("/", (req, res) => {\n  res.send("Inicio");\n});\n\napp.use((req, res) => {\n  res.status(404).send("Pagina no encontrada");\n});'
  }
];
