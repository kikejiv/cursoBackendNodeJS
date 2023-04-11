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
  res.json({
    categoriasId,
    productosId,
  });
});

module.exports = router;
