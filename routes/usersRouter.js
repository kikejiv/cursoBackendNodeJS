const express = require('express'); //traemos el modulo de express

const UsersService = require('./../services/users.service');

const router = express.Router();
const service = new UsersService();

router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});


// no se que hace esta funcion 😅
 router.get('/users', (req, res) => {
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

 //para crear manualmente cada usuario
 router.get('/:id', (req, res) => { //endpoint para recibir el detalle de un producto desde el id
   const { id } = req.params; //este request recoje el id
   const user = service.findOne(id);
   res.json(user);
 });


 router.post('/', (req, res) => {
   const body = req.body;
   res.status(201).json({
     message: 'ceated',
     data: body
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
