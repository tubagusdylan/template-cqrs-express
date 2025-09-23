/* 
  File ini berisi validasi tipe data untuk fitur

  const Joi = require('joi');

  const getCustomerById = Joi.object({
    id: Joi.string().required(),
  });

  const listCustomer = Joi.object({
    page: Joi.number().integer().optional().default(1),
    limit: Joi.number().integer().optional().default(10),
    search: Joi.string().optional(),
  });

  module.exports = {
    getCustomerById,
    listCustomer,
  };

*/
