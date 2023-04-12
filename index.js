const express = require('express'); //traemos el modulo de express
const routerApi = require('./routes'); //traemos el modulo de routes

const app = express(); // asi crearmos nuestra aplicacion
const port = 3000; // definimo el puerto donde queremos que nos corra

app.get('/', (req, res) => { // para definir la ruta / seguido del callback
  res.send('Hola mi server en express'); //retorna
});

app.get('/nueva-ruta', (req, res) => { // para definir la ruta / seguido del callback
  res.send('Hola soy una nueva ruta'); //retorna
});

routerApi(app);


 app.listen(port, () => { //es para que escuche el puertoo
  console.log('Mi port ' + port);
 });



