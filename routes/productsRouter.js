const express = require('express'); //traemos el modulo de express
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => { // para definir la ruta / seguido del callback
  const product = [];
  const { size } = req.query;
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

router.get('/filter', (req, res) => { //esta es una ruta en especifica y se declara antes que las rutas dinamica
  res.send('YO soy un filter');
});

router.get('/:id', (req, res) => { //endpoint para recibir el detalle de un producto desde el id
  const { id } = req.params; //este request recoje el id
  res.json({
      id,
      name: 'Producto 2',
      price: 2000
    });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
})

module.exports = router;
