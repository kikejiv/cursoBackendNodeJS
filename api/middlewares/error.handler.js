//middleware para captura de errores de manera global

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

//este otro middleware detecta el erro crea un formato y lo devuelve al cliente
function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

  //middleware para errores tipo boom
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
