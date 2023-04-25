const express = require('express'); //traemos el modulo de express
const cors = require('cors');// libreria para evitar el error de que no funciona el backend desde otro
const routerApi = require('./routes'); //traemos el modulo de routes

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler'); //hacemos eñl llamado a los modulos de errores

const app = express(); // asi crearmos nuestra aplicacion
const port = 3000; // definimo el puerto donde queremos que nos corra

app.use(express.json()); //middelware para recibir informacion post tipo json

// funcion para el problema de CORS (Cross-Origin Resource Sharing (CORS) y limitar el accedo a la api
const whitelist = ['http://localhost:8080', 'https://myapp.co']; //creamos un array e ingresamos las url las cuales van a tener el permiso
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    }else {
      callback(new Error('No permitido'));
    }
  }
}


app.use(cors());//de esta manera acepta cualquier origen, cualquier dominio

app.get('/', (req, res) => { // para definir la ruta / seguido del callback
  res.send('Hola mi server en express'); //retorna
});

app.get('/nueva-ruta', (req, res) => { // para definir la ruta / seguido del callback
  res.send('Hola soy una nueva ruta'); //retorna
});

routerApi(app);

app.use(logErrors); //se debe poner los errores despues de la ruta
app.use(boomErrorHandler);
app.use(errorHandler);


 app.listen(port, () => { //es para que escuche el puertoo
  console.log('Mi port ' + port);
 });



