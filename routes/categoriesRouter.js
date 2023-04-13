const express = require('express'); //traemos el modulo de express

const CategoriesService = require('./../services/categories.service');

const router = express.Router();
const service = new CategoriesService();

router.get('/', (req, res) => {
  const categories = service.find();
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
  const { id } = req.params; //este request recoje el id
  const categories = service.findOne(id); //
  res.json(categories);// se envia directamente el producto
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
