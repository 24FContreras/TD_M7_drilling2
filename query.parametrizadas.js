const { Pool } = require("pg");
const format = require("pg-format");

const connectionString =
  "postgresql://user_practicadb:practicadb@localhost:5432/practica_db";

const pool = new Pool({ connectionString });

const obtenerEstudiantesMayor = async (edad) => {
  const client = await pool.connect();

  try {
    const { rows } = await client.query(
      "SELECT * FROM estudiantes WHERE edad > $1",
      [edad]
    );

    console.table(rows);

    return rows;
  } catch (error) {
    console.log(error.stack);
  } finally {
    client.end();
  }
};

const obtenerEstudiantesOrdenados = async (columna, direccion) => {
  const client = await pool.connect();

  try {
    const consulta = format(
      "SELECT * FROM estudiantes ORDER BY %s %s",
      columna,
      direccion
    );
    const { rows } = await client.query(consulta);

    console.table(rows);
    return rows;
  } catch (error) {
    console.table(error.stack);
  } finally {
    client.end();
  }
};

const mostrarTabla = async (tabla) => {
  const client = await pool.connect();

  try {
    const consulta = format("SELECT * FROM %s", tabla);
    const { rows } = await client.query(consulta);

    console.table(rows);
    return rows;
  } catch (error) {
    console.log(error.stack);
  } finally {
    client.end();
  }
};

obtenerEstudiantesMayor(25);
obtenerEstudiantesOrdenados("apellidos", "DESC");
mostrarTabla("cursos");
