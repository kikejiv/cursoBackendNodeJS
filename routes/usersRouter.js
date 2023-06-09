const express = require('express'); //traemos el modulo de express
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    users.push({
      name: faker.name.firstName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
});
}

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
   res.json({
       id,
       name: 'Kike',
       age: 37,
       email: 'jiv@gmail.com',
     });
 });

module.exports = router;
