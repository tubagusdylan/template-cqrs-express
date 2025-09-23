/* 
  File ini berisi tipe data dari fitur

  const Joi = require('joi');

  const addCustomer = Joi.object({
    name: Joi.string().required(),
    contact: Joi.string().required(),
    description: Joi.string().optional(),
  });

  const updateCustomer = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().optional(),
    contact: Joi.string().optional(),
    description: Joi.string().optional(),
  });

  const deleteCustomer = Joi.object({
    id: Joi.string().required(),
  });

  module.exports = {
    addCustomer,
    updateCustomer,
    deleteCustomer,
  };


*/
