const Joi = require("joi");

const createTransactionSchema = Joi.object({
  type: Joi.string().valid("c", "d").required(),
  from_to: Joi.string().min(3).max(10).required(),
  description: Joi.string().max(30),
  amount: Joi.number().required(),
});

module.exports = {
  createTransactionSchema,
};