//con este archivo defino el index de las rutas
const express = require('express');

const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');


function routerApi(app) {
  const router = express.Router(); //ruta maestra para versionar la api
  app.use('/api/v1', router); //definir la ruta para la api y lña version
  router.use('/products', productsRouter );
  router.use('/users', usersRouter );
  router.use('/categories', categoriesRouter );
}

module.exports = routerApi;
