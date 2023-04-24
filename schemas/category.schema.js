const Joi = require('joi'),

const categoriesId = Joi.string().uuid();
const categoriesName = Joi.string().min(3).max(25);

const createCategorySchema = Joi.object({
  categoriesId: categoriesId.required(),
  categoriesName: categoriesName.required(),

});

const updateCategorySchema = Joi.object({
  categoriesId: categoriesId,
  categoriesName: categoriesName,

});

const getUserSchema = Joi.object({
  categoriesId: categoriesId.required(),
});

module.exports = { createCategorySchema, updateCategorySchema, getUserSchema  }
