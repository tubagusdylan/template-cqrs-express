/* 

  ini adalah contoh api_handler
  fungsi:
  1. mengumpulkan semua fungsi dari command handler dan query handler, untuk memudahkan routes

  const commandHandler = require('../repositories/commands/command_handler');
  const commandModel = require('../repositories/commands/command_model');
  const queryHandler = require('../repositories/queries/query_handler');
  const queryModel = require('../repositories/queries/query_model');
  const validator = require('../../../helpers/utils/validator');
  const { sendResponse, paginationResponse } = require('../../../helpers/utils/response');

  //query
  const getCustomerById = async (req, res) => {
    const payload = { ...req.params };
    const validatePayload = validator.isValidPayload(payload, queryModel.getCustomerById);
    if (validatePayload.err) {
      return sendResponse(validatePayload, res);
    }
    const result = await queryHandler.getCustomerById(validatePayload.data);
    return sendResponse(result, res);
  };

  const listCustomer = async (req, res) => {
    const payload = { ...req.query };
    const validatePayload = validator.isValidPayload(payload, queryModel.listCustomer);
    if (validatePayload.err) {
      return sendResponse(validatePayload, res);
    }
    const result = await queryHandler.listCustomer(validatePayload.data);
    return paginationResponse(result, res);
  };

  // command
  const addCustomer = async (req, res) => {
    const payload = { ...req.body };
    const validatePayload = validator.isValidPayload(payload, commandModel.addCustomer);
    if (validatePayload.err) {
      return sendResponse(validatePayload, res);
    }
    const result = await commandHandler.addCustomer(validatePayload.data);
    return sendResponse(result, res, 201);
  };

  const updateCustomer = async (req, res) => {
    const payload = { ...req.params, ...req.body };
    const validatePayload = validator.isValidPayload(payload, commandModel.updateCustomer);
    if (validatePayload.err) {
      return sendResponse(validatePayload, res);
    }
    const result = await commandHandler.updateCustomer(validatePayload.data);
    return sendResponse(result, res);
  };

  const deleteCustomer = async (req, res) => {
    const payload = { ...req.params };
    const validatePayload = validator.isValidPayload(payload, commandModel.deleteCustomer);
    if (validatePayload.err) {
      return sendResponse(validatePayload, res);
    }
    const result = await commandHandler.deleteCustomer(validatePayload.data);
    return sendResponse(result, res);
  };

  module.exports = {
    getCustomerById,
    listCustomer,
    addCustomer,
    updateCustomer,
    deleteCustomer,
  };


*/
