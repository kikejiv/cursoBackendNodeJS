const express = require('express'); //traemos el modulo de express
const app = express(); // asi crearmos nuestra aplicacion
const port = 3000; // definimo el puerto donde queremos que nos corra

app.get('/', (req, res) => { // para definir la ruta / seguido del callback
  res.send('Hola mi server en express'); //retorna
})

app.listen(port, () => {
  console.log('Mi port ' + port);
});


