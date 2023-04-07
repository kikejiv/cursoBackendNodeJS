const express = require('express'); //traemos el modulo de express
const app = express(); // asi crearmos nuestra aplicacion
const port = 3000; // definimo el puerto donde queremos que nos corra

app.get('/', (req, res) => { // para definir la ruta / seguido del callback
  res.send('Hola mi server en express'); //retorna
});

app.get('/nueva-ruta', (req, res) => { // para definir la ruta / seguido del callback
  res.send('Hola soy una nueva ruta'); //retorna
});

app.get('/productos', (req, res) => { // para definir la ruta / seguido del callback
  res.json({
    name: 'Producto 1',
    price: 1000
  }); //retorna
});

app.listen(port, () => { //es para que escuche el puertoo
  console.log('Mi port ' + port);
});


