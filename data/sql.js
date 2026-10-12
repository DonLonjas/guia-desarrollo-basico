// Categoria sin vista previa: SQL corre en un motor de base de datos, no en
// el navegador. `code` es SQL puro, listo para ejecutarse en cualquier gestor
// compatible con el estandar (PostgreSQL, MySQL, SQLite, SQL Server, etc.).
module.exports = [
  // ---------- DDL: tablas ----------
  {
    slug: 'create-table',
    tag: 'CREATE TABLE',
    name: 'CREATE TABLE',
    group: 'DDL: tablas',
    description: 'Crea una nueva tabla definiendo sus columnas, tipos de dato y restricciones basicas.',
    attributes: [
      { name: 'nombre_columna', description: 'Identificador de la columna dentro de la tabla.' },
      { name: 'tipo_de_dato', description: 'Tipo de la columna: INT, VARCHAR, TEXT, DATE, DECIMAL, BOOLEAN, etc.' },
      { name: 'restriccion', description: 'Restriccion opcional: PRIMARY KEY, NOT NULL, UNIQUE, DEFAULT, CHECK.' }
    ],
    code: "CREATE TABLE usuarios (\n  id INT PRIMARY KEY,\n  nombre VARCHAR(100) NOT NULL,\n  email VARCHAR(100) UNIQUE,\n  edad INT CHECK (edad >= 0),\n  fecha_registro DATE DEFAULT CURRENT_DATE\n);"
  },
  {
    slug: 'alter-table',
    tag: 'ALTER TABLE',
    name: 'ALTER TABLE',
    group: 'DDL: tablas',
    description: 'Modifica la estructura de una tabla existente: agrega, elimina o cambia columnas y restricciones.',
    code: "ALTER TABLE usuarios\nADD COLUMN telefono VARCHAR(20);\n\nALTER TABLE usuarios\nDROP COLUMN telefono;\n\nALTER TABLE usuarios\nRENAME COLUMN nombre TO nombre_completo;"
  },
  {
    slug: 'drop-table',
    tag: 'DROP TABLE',
    name: 'DROP TABLE',
    group: 'DDL: tablas',
    description: 'Elimina una tabla completa, incluyendo todos sus datos e indices. Usar con precaucion.',
    attributes: [
      { name: 'IF EXISTS', description: 'Evita el error si la tabla no existe.' }
    ],
    code: "DROP TABLE IF EXISTS usuarios;"
  },

  // ---------- DML: consultas ----------
  {
    slug: 'select',
    tag: 'SELECT',
    name: 'SELECT',
    group: 'DML: consultas',
    description: 'Recupera datos de una o varias tablas. Es el comando mas usado en SQL.',
    code: "SELECT nombre, email\nFROM usuarios;"
  },
  {
    slug: 'select-distinct',
    tag: 'SELECT DISTINCT',
    name: 'SELECT DISTINCT',
    group: 'DML: consultas',
    description: 'Devuelve solo filas con valores distintos en las columnas seleccionadas, eliminando duplicados.',
    code: "SELECT DISTINCT ciudad\nFROM clientes;"
  },
  {
    slug: 'where',
    tag: 'WHERE',
    name: 'WHERE',
    group: 'DML: consultas',
    description: 'Filtra las filas que cumplen una condicion antes de devolver el resultado.',
    code: "SELECT nombre, edad\nFROM usuarios\nWHERE edad >= 18;"
  },
  {
    slug: 'order-by',
    tag: 'ORDER BY',
    name: 'ORDER BY',
    group: 'DML: consultas',
    description: 'Ordena las filas segun una o varias columnas, de forma ascendente (ASC) o descendente (DESC).',
    code: "SELECT nombre, precio\nFROM productos\nORDER BY precio DESC;"
  },
  {
    slug: 'limit',
    tag: 'LIMIT',
    name: 'LIMIT',
    group: 'DML: consultas',
    description: 'Restringe el numero de filas devueltas. En SQL Server se usa TOP, en Oracle FETCH FIRST.',
    code: "SELECT nombre, precio\nFROM productos\nORDER BY precio DESC\nLIMIT 10;"
  },
  {
    slug: 'alias',
    tag: 'AS',
    name: 'AS (alias)',
    group: 'DML: consultas',
    description: 'Asigna un nombre temporal a una columna o tabla para que el resultado sea mas legible.',
    code: "SELECT u.nombre AS cliente, u.email AS correo\nFROM usuarios AS u;"
  },

  // ---------- DML: modificacion ----------
  {
    slug: 'insert',
    tag: 'INSERT INTO',
    name: 'INSERT INTO',
    group: 'DML: modificacion',
    description: 'Agrega una o varias filas nuevas a una tabla.',
    code: "INSERT INTO usuarios (nombre, email, edad)\nVALUES ('Ana Perez', 'ana@example.com', 28);\n\nINSERT INTO usuarios (nombre, email, edad)\nVALUES\n  ('Luis Gomez', 'luis@example.com', 34),\n  ('Sara Diaz', 'sara@example.com', 22);"
  },
  {
    slug: 'update',
    tag: 'UPDATE',
    name: 'UPDATE',
    group: 'DML: modificacion',
    description: 'Modifica los valores de una o varias filas existentes. Siempre combinar con WHERE para evitar cambios masivos.',
    code: "UPDATE usuarios\nSET edad = 29\nWHERE email = 'ana@example.com';"
  },
  {
    slug: 'delete',
    tag: 'DELETE',
    name: 'DELETE',
    group: 'DML: modificacion',
    description: 'Elimina filas que cumplen una condicion. Sin WHERE, vacia toda la tabla.',
    code: "DELETE FROM usuarios\nWHERE email = 'ana@example.com';"
  },

  // ---------- Relaciones ----------
  {
    slug: 'join',
    tag: 'JOIN',
    name: 'JOIN',
    group: 'Relaciones',
    description: 'Combina filas de dos o mas tablas relacionadas por una columna comun.',
    code: "SELECT u.nombre, p.titulo\nFROM usuarios u\nJOIN posts p ON u.id = p.usuario_id;"
  },
  {
    slug: 'left-join',
    tag: 'LEFT JOIN',
    name: 'LEFT JOIN',
    group: 'Relaciones',
    description: 'Devuelve todas las filas de la tabla izquierda, aunque no tengan coincidencia en la tabla derecha.',
    code: "SELECT u.nombre, p.titulo\nFROM usuarios u\nLEFT JOIN posts p ON u.id = p.usuario_id;"
  },
  {
    slug: 'inner-join',
    tag: 'INNER JOIN',
    name: 'INNER JOIN',
    group: 'Relaciones',
    description: 'Devuelve solo las filas que tienen coincidencia en ambas tablas. Es el comportamiento por defecto de JOIN.',
    code: "SELECT u.nombre, p.titulo\nFROM usuarios u\nINNER JOIN posts p ON u.id = p.usuario_id;"
  },
  {
    slug: 'foreign-key',
    tag: 'FOREIGN KEY',
    name: 'FOREIGN KEY',
    group: 'Relaciones',
    description: 'Restriccion que vincula una columna de una tabla con la clave primaria de otra, garantizando integridad referencial.',
    code: "CREATE TABLE posts (\n  id INT PRIMARY KEY,\n  titulo VARCHAR(200) NOT NULL,\n  usuario_id INT,\n  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)\n);"
  },

  // ---------- Agrupacion y funciones ----------
  {
    slug: 'group-by',
    tag: 'GROUP BY',
    name: 'GROUP BY',
    group: 'Agrupacion y funciones',
    description: 'Agrupa filas con valores iguales en una o varias columnas para aplicar funciones de agregacion.',
    code: "SELECT categoria, COUNT(*) AS total\nFROM productos\nGROUP BY categoria;"
  },
  {
    slug: 'having',
    tag: 'HAVING',
    name: 'HAVING',
    group: 'Agrupacion y funciones',
    description: 'Filtra grupos de resultados despues de aplicar GROUP BY, a diferencia de WHERE que filtra filas individuales.',
    code: "SELECT categoria, AVG(precio) AS precio_promedio\nFROM productos\nGROUP BY categoria\nHAVING AVG(precio) > 50;"
  },
  {
    slug: 'count',
    tag: 'COUNT()',
    name: 'COUNT()',
    group: 'Agrupacion y funciones',
    description: 'Cuenta filas o valores no nulos de una columna.',
    code: "SELECT COUNT(*) AS total_usuarios\nFROM usuarios;"
  },
  {
    slug: 'sum-avg-min-max',
    tag: 'SUM / AVG / MIN / MAX',
    name: 'SUM, AVG, MIN, MAX',
    group: 'Agrupacion y funciones',
    description: 'Funciones de agregacion para sumar, promediar, obtener el valor minimo o el maximo de una columna.',
    code: "SELECT\n  SUM(precio) AS total,\n  AVG(precio) AS promedio,\n  MIN(precio) AS mas_barato,\n  MAX(precio) AS mas_caro\nFROM productos;"
  },

  // ---------- Operadores ----------
  {
    slug: 'and-or',
    tag: 'AND / OR',
    name: 'AND, OR',
    group: 'Operadores',
    description: 'Combinan condiciones en WHERE. AND exige que ambas se cumplan, OR con que se cumpla una.',
    code: "SELECT nombre, edad, ciudad\nFROM usuarios\nWHERE edad >= 18 AND ciudad = 'Bogota';"
  },
  {
    slug: 'like',
    tag: 'LIKE',
    name: 'LIKE',
    group: 'Operadores',
    description: 'Busca patrones de texto. % representa cualquier secuencia de caracteres y _ un solo caracter.',
    code: "SELECT nombre\nFROM usuarios\nWHERE nombre LIKE 'Ana%';"
  },
  {
    slug: 'in',
    tag: 'IN',
    name: 'IN',
    group: 'Operadores',
    description: 'Comprueba si un valor esta dentro de una lista de valores posibles.',
    code: "SELECT nombre, ciudad\nFROM usuarios\nWHERE ciudad IN ('Bogota', 'Mexico', 'Madrid');"
  },
  {
    slug: 'between',
    tag: 'BETWEEN',
    name: 'BETWEEN',
    group: 'Operadores',
    description: 'Selecciona valores dentro de un rango inclusivo, util para numeros y fechas.',
    code: "SELECT nombre, edad\nFROM usuarios\nWHERE edad BETWEEN 18 AND 30;"
  },
  {
    slug: 'is-null',
    tag: 'IS NULL',
    name: 'IS NULL',
    group: 'Operadores',
    description: 'Filtra filas donde una columna no tiene valor. No se puede comparar NULL con =.',
    code: "SELECT nombre, email\nFROM usuarios\nWHERE email IS NULL;"
  },

  // ---------- Restricciones ----------
  {
    slug: 'primary-key',
    tag: 'PRIMARY KEY',
    name: 'PRIMARY KEY',
    group: 'Restricciones',
    description: 'Identifica de forma unica cada fila de una tabla. No permite valores nulos ni duplicados.',
    code: "CREATE TABLE usuarios (\n  id INT PRIMARY KEY,\n  nombre VARCHAR(100) NOT NULL\n);"
  },
  {
    slug: 'not-null',
    tag: 'NOT NULL',
    name: 'NOT NULL',
    group: 'Restricciones',
    description: 'Impide que una columna acepte valores nulos, garantizando que siempre haya un dato.',
    code: "CREATE TABLE productos (\n  id INT PRIMARY KEY,\n  nombre VARCHAR(100) NOT NULL,\n  precio DECIMAL(10, 2) NOT NULL\n);"
  },
  {
    slug: 'unique',
    tag: 'UNIQUE',
    name: 'UNIQUE',
    group: 'Restricciones',
    description: 'Garantiza que los valores de una columna (o combinacion de columnas) no se repitan.',
    code: "CREATE TABLE usuarios (\n  id INT PRIMARY KEY,\n  email VARCHAR(100) UNIQUE\n);"
  },
  {
    slug: 'check',
    tag: 'CHECK',
    name: 'CHECK',
    group: 'Restricciones',
    description: 'Define una condicion que los valores de una columna deben cumplir al insertarse o actualizarse.',
    code: "CREATE TABLE productos (\n  id INT PRIMARY KEY,\n  nombre VARCHAR(100),\n  precio DECIMAL(10, 2) CHECK (precio > 0)\n);"
  },
  {
    slug: 'default',
    tag: 'DEFAULT',
    name: 'DEFAULT',
    group: 'Restricciones',
    description: 'Asigna un valor automatico a una columna cuando no se proporciona uno en la insercion.',
    code: "CREATE TABLE tareas (\n  id INT PRIMARY KEY,\n  descripcion TEXT,\n  completada BOOLEAN DEFAULT FALSE,\n  creada_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);"
  },

  // ---------- Transacciones ----------
  {
    slug: 'transaction',
    tag: 'BEGIN / COMMIT / ROLLBACK',
    name: 'BEGIN, COMMIT, ROLLBACK',
    group: 'Transacciones',
    description: 'Agrupa varias operaciones en una unidad indivisible: BEGIN inicia, COMMIT confirma y ROLLBACK deshace.',
    code: "BEGIN;\n\nUPDATE cuentas\nSET saldo = saldo - 100\nWHERE id = 1;\n\nUPDATE cuentas\nSET saldo = saldo + 100\nWHERE id = 2;\n\nCOMMIT;"
  }
];
