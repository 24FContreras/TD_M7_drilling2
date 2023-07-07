const { Pool } = require("pg");

const connectionString =
  "postgresql://user_practicadb:practicadb@localhost:5432/practica_db";

const pool = new Pool({ connectionString });

/*
Realice las siguientes consultas con callback y promise, en las tablas anteriormente vistas:
1. Seleccione todos los estudiantes que sean mayores de 25 años.
2. Seleccione todos los estudiantes, y ordene el resultado reflejando el apellido en forma
descendente.
3. Seleccione todos los cursos disponibles.
*/

pool
  .query("SELECT * FROM estudiantes WHERE edad > 25")
  .then((res) => console.log(res.rows))
  .catch((err) => console.log(err.stack));
//.finally(() => {
//  pool.end();
//});

pool
  .query("SELECT * FROM estudiantes ORDER BY apellidos DESC")
  .then((res) => console.log(res.rows))
  .catch((err) => console.log(err.stack));
//.finally(() => {
//  pool.end();
//});

pool
  .query("SELECT * FROM cursos")
  .then((res) => console.log(res.rows))
  .catch((err) => console.log(err.stack));
//.finally(() => {
//  pool.end();
//});

//CIERRA LA CONEXIÓN
pool.end();
