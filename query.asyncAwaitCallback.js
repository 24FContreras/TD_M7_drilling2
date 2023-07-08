const { Pool } = require("pg");

const connectionString =
  "postgresql://user_practicadb:practicadb@localhost:5432/practica_db";

const pool = new Pool({ connectionString });

const estudiantesMayor = async () => {
  const client = await pool.connect();

  try {
    const { rows } = await client.query(
      "SELECT * FROM estudiantes WHERE edad > 25"
    );

    return rows;
  } catch (error) {
    console.log(error.stack);
  } finally {
    client.end();
  }
};

const estudiantesApellidosDESC = async () => {
  const client = await pool.connect();

  try {
    const { rows } = await client.query(
      "SELECT * FROM estudiantes ORDER BY apellidos DESC"
    );

    return rows;
  } catch (error) {
    console.log(error.stack);
  } finally {
    client.end();
  }
};

const mostrarCursos = async () => {
  const client = await pool.connect();

  try {
    const { rows } = await client.query("SELECT * FROM cursos");

    return rows;
  } catch (error) {
    console.log(error.stack);
  } finally {
    client.end();
  }
};

//LLAMADAS POR CALLBACK
estudiantesMayor().then((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

estudiantesApellidosDESC().then((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

mostrarCursos().then((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
