const Joi = require("joi");

const createUserSchema = Joi.object({
  full_name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).required(),
  phone_number: Joi.string().pattern(/^[+0]\d{3,14}$/),
  avatar_url: Joi.string(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).required(),
});

module.exports = {
  createUserSchema,
  loginSchema,
};
