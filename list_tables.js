require('dotenv').config(); // Load environment variables
const mysql = require('mysql2'); // MySQL connection


// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({ // Create MySQL connection

  host: process.env.URL, // Use environment variable for host

  user: process.env.USUARIO, // Use environment variable for user

  password: process.env.PASSWORD, // Use environment variable for password

  database: 'tareaproyecto', // Connect to the tareaproyecto database

});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database successfully!');

  // Consultar las tablas en la base de datos
  connection.query('SHOW TABLES;', (error, results) => {
    if (error) {
      console.error('Error fetching tables:', error);
      return;
    }
    console.log('Tables in the database:', results);
    connection.end();
  });
});
