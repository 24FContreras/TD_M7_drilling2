const { Pool } = require("pg");

const connectionString =
  "postgresql://user_practicadb:practicadb@localhost:5432/practica_db";

const pool = new Pool({ connectionString });

/*
const query = {
  text: "SELECT * FROM estudiantes WHERE edad > $1",
  values: [25],
  rowMode: "array",
};

pool.query(query, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }

  pool.end();
});
*/

/*
const query = {
  text: "SELECT * FROM estudiantes ORDER BY apellidos DESC",
  rowMode: "array",
};

pool.query(query, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }

  pool.end();
});
*/

const query = {
  text: "SELECT * FROM cursos",
  rowMode: "array",
};

pool.query(query, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }

  pool.end();
});
