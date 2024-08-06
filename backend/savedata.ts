const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  user: 'tu_usuario',
  host: 'localhost',
  database: 'tu_base_de_datos',
  password: 'tu_contraseña',
  port: 5432,
});

app.post('/api/candidates', async (req, res) => {
  const { firstName, lastName, email, phone, skills, experience } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO candidates (first_name, last_name, email, phone, skills, experience) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [firstName, lastName, email, phone, skills.join(','), experience]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al guardar el candidato' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});