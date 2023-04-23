//importamos la libreria joi para validar la data que nos envian desde el frontend
const Joi = require('joi');

//se realiza un schema para cada campo
const id = Joi.string().uuid(); //se empiesa por el tipo de dato y ya
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);

//schema para la creacion
const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
});

//schema para la actualizacion
const updateProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
});

//schema para el get
const getProductSchema = Joi.object({
    id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
//este schema se envia al middleware validator para su verificacion
