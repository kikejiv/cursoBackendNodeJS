const express = require('express'); //traemos el modulo de express

const UsersService = require('./../services/users.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createUserSchema, updateUserSchema, getUserSchema } = require('./../schemas/users.schema');

const router = express.Router();
const service = new UsersService();

router.get('/', async (req, res) => {
    const users = await service.find();
    res.json(users);
  });


// no se que hace esta funcion 😅
 router.get('/users',  (req, res) => {
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
 router.get(
   '/:id',
   validatorHandler(getUserSchema, 'params'),
   async (req, res, next) => {//endpoint para recibir el detalle de un producto desde el id
     try {
       const { id } = req.params; //este request recoje el id
       const user = await service.findOne(id);
       res.json(user);
     } catch (error) {
       next(error);
     }
   }
 );


 router.post('/',
   validatorHandler(createUserSchema, 'body'),
   async (req, res) => {
     const body = req.body;
     const newUser = await service.create(body);
     res.status(201).json(newUser);
   }
 )

 router.patch('/:id',
 validatorHandler(getUserSchema, 'params'),
 validatorHandler(updateUserSchema, 'body'),
 async (req, res, next) => {
   try {
    const { id } = req.params;
    const body = req.body;
    const user = await service.update(id, body)
    res.json(user)
   } catch (error) {
    next(error);
     };
   }
 )


 router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
 })

module.exports = router;
