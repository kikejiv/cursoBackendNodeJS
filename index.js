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
  res.json([
    {
      name: 'Producto 1',
      price: 1000
    },
    {
      name: 'Producto 2',
      price: 2000
    }
  ]);
});

app.get('/productos/:id', (req, res) => { //endpoint para recibir el detalle de un producto desde el id
  const { id } = req.params; //este request recoje el id
  res.json({
      id,
      name: 'Producto 2',
      price: 2000
    });
});

app.get('/categorias/:categoriasId/productos/:productosId', (req, res) => { //en esta ruta recibimos dos parametros
  const { categoriasId, productosId } = req.params; //aqui recogemos los id
  res.json({
    categoriasId,
    productosId,
  });
})

app.listen(port, () => { //es para que escuche el puertoo
  console.log('Mi port ' + port);
});


