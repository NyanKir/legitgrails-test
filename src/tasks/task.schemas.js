const Joi = require('joi');

const getTaskSchema = Joi.object({
  id: Joi.number().min(0).required()
});

module.exports = {
  getTaskSchema
};
