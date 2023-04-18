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
  const newCategory = service.create(body);
  res.status(201).json(newCategory);
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const category = service.update(id, body)

  res.json(category);
})


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta);//se envia la respuesta en un json rta
});
module.exports = router;
