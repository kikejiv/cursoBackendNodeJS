const express = require('express'); //traemos el modulo de express
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const categories = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    categories.push({
      categoriasId: faker.datatype.number(1000),
      nameCategories: faker.commerce.productAdjective(),
      // email: faker.internet.email(),
      // avatar: faker.image.avatar(),
});
}

res.json(categories);

});


router.get('/categorias/:categoriasId/productos/:productosId', (req, res) => { //en esta ruta recibimos dos parametros
  const { categoriasId, productosId } = req.params; //aqui recogemos los id
  res.json({
    categoriasId,
    productosId,
  });
});

router.get('/:id', (req, res) => {
  const { id  } = req.params;
  if (id === '999') {
    res.status(404).json({
      message: 'Not Found'
    });
  } else {
  res.json({
    categoriasId,
    productosId,
  });
}
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    id,
  });
})


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
})
module.exports = router;
