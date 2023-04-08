const express = require('express'); //traemos el modulo de express
const { faker } = require('@faker-js/faker');
const app = express(); // asi crearmos nuestra aplicacion
const port = 3000; // definimo el puerto donde queremos que nos corra

app.get('/', (req, res) => { // para definir la ruta / seguido del callback
  res.send('Hola mi server en express'); //retorna
});

app.get('/nueva-ruta', (req, res) => { // para definir la ruta / seguido del callback
  res.send('Hola soy una nueva ruta'); //retorna
});

app.get('/products', (req, res) => { // para definir la ruta / seguido del callback
  const product = [];
  const { size} = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    product.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });
  }
  res.json(product);
  //   [
  //   {
  //     name: 'Producto 1',
  //     price: 1000
  //   },
  //   {
  //     name: 'Producto 2',
  //     price: 2000
  //   }
  // ]);
});

app.get('/productos/:id', (req, res) => { //endpoint para recibir el detalle de un producto desde el id
  const { id } = req.params; //este request recoje el id
  res.json({
      id,
      name: 'Producto 2',
      price: 2000
    });
});

app.get('/products/filter', (req, res) => {
  res.send('YO soy un filter');
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query; // parametros tipo query
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
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


