//en este archivo realizo las validaciones de los datos y la integridad
const boom = require('@hapi/boom');

//este middleware recibe nuestro schema
function validatorHandler(schema, property) { // recibe un schema y retorna el middleware dinamico
  return (req, res, next) => { //con esta funcion se construye un middleware de forma dinamica
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false }); // abortEarly: false para que me muestre todos los errores en la validacion
    if (error) {
      //si no cumple con la validacion envia un error de tipo boom
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
