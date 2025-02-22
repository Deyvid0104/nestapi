require('dotenv').config(); // Cargar variables de entorno

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.URL,
  user: process.env.USUARIO,
  password: process.env.PASSWORD,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database successfully!');

  // Listar bases de datos
  connection.query('SHOW DATABASES;', (err, results) => {
    if (err) {
      console.error('Error fetching databases:', err);
      return;
    }
    console.log('Databases:', results);
    connection.end();
  });
});
