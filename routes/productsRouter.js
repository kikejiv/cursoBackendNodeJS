const express = require('express'); //traemos el modulo de express

const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => { // para definir la ruta / seguido del callback
  const products = service.find();
  res.json(products);
});

router.get('/:id', (req, res) => { //endpoint para recibir el detalle de un producto desde el id
  const { id } = req.params; //este request recoje el id
  const product = service.findOne(id); //
  res.json(product);// se envia directamente el producto
});

//metodo post para enviar informacion
router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
})

//metodo patch para enviar actualizar la informacion de manera flexible solo los camb pos que necesitamos
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
})

//metodo delete para eliminar los productos
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
})

module.exports = router;
