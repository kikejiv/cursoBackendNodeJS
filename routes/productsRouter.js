const express = require('express'); //traemos el modulo de express

const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => { // para definir la ruta / seguido del callback
  const products = await service.find();
  res.json(products);
});

router.get('/:id', async (req, res) => { //endpoint para recibir el detalle de un producto desde el id
  const { id } = req.params; //este request recoje el id
  const product = await service.findOne(id); //
  res.json(product);// se envia directamente el producto
});

//metodo post para enviar informacion
router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
})

//metodo patch para enviar actualizar la informacion de manera flexible solo los camb pos que necesitamos
router.patch('/:id', async (req, res) => {
 try {
  const { id } = req.params;
  const body = req.body;
  const product = await service.update(id, body);
  res.json(product);
 } catch (error) {
   res.status(404).json({
     message: error.message
   });
 }

})

//metodo delete para eliminar los productos
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);//se envia la respuesta en un json rta
})

module.exports = router;
