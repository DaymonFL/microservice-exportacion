require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sqlconnector } = require('./database/config');
const { sqliteconnector } = require('./database/configLite');
const { scd_casillasSQLite } = require('./models/sqlite/scd_casillas.model');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const https = require('https');
const fs = require('fs');

app.use(cors({
    origin: '*'
}));

app.use(express.json());


sqlconnector
  .authenticate()
  .then(() => {
    console.log('Conexión correcta.');
  })
  .catch(err => {
    console.error('Error de conexión:', err);
  });

  sqliteconnector.sync().then(() => {
    console.log('Base de datos sincronizada');
  }).catch(function(err) {
    console.log(err)
  });
  // let db = new sqlite3.Database('./database.db3', sqlite3.OPEN_READWRITE, (err) => {
  //   if (err) {
  //     console.error(err.message);
  //   }
  //   console.log('Basde de datos sincronizada');
  // });
  

// Prueba
app.use('/api/migracion', require('./routes/migracion.routes'));


//Desarrollo y local
// Lanzamiento del servicio
app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});

//Producción
// https.createServer({
//     cert: fs.readFileSync('credentials/server.crt'),
//     key: fs.readFileSync('credentials/server.key')
// }, app).listen( process.env.PORT, () => {
//     console.log('Server corriendo en el puerto ' + process.env.PORT);
// });