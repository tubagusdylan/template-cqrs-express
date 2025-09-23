/* 
  File ini berisi logic utama dari fitur (CRUD)

  const Command = require('./command');
  const Query = require('../queries/query');
  const wrapper = require('../../../../helpers/utils/wrapper');
  const { NotFoundError, InternalServerError, BadRequestError } = require('../../../../helpers/error');
  const logger = require('../../../../helpers/utils/logger');
  const ctx = 'Customers-Command-Domain';
  const { v4: uuid } = require('uuid');

  class Customer {
    constructor(db) {
      this.command = new Command(db);
      this.query = new Query(db);
    }

    async addCustomer(payload) {
      const { name, contact, description } = payload;

      const data = {
        id: uuid(),
        name,
        contact,
        description,
      };

      const result = await this.command.insertOne(data);
      if (result.err) {
        logger.error(ctx, 'addCustomer', 'Error adding Customer', result.err);
        return wrapper.error(new InternalServerError('Error adding Customer'));
      }

      return wrapper.data({ id: data.id });
    }

    async updateCustomer(payload) {
      const { id, name, contact, description } = payload;

      if (!name && !contact && !description) return wrapper.error(new BadRequestError('No data to update'));

      const isIdExist = await this.query.findOne({ id }, { id: 1 });
      if (isIdExist.err) {
        return wrapper.error(new NotFoundError('Customer not found'));
      }

      const data = { id: id };
      if (name) data.name = name;
      if (contact) data.contact = contact;
      if (description) data.description = description;

      const result = await this.command.updateOneNew({ id }, data);
      if (result.err) {
        logger.error(ctx, 'updateCustomer', 'Error updating Customer', result.err);
        return wrapper.error(new InternalServerError('Error updating Customer'));
      }

      return wrapper.data({ id: data.id });
    }

    async deleteCustomer(payload) {
      const { id } = payload;

      const isIdExist = await this.query.findOne({ id }, { id: 1 });
      if (isIdExist.err) {
        return wrapper.error(new NotFoundError('Customer not found'));
      }

      const result = await this.command.updateOneNew({ id }, { deleted_at: 'NOW()' });
      if (result.err) {
        logger.error(ctx, 'deleteCustomer', 'Error deleting Customer', result.err);
        return wrapper.error(new InternalServerError('Error deleting Customer'));
      }

      return wrapper.data('Customer deleted successfully');
    }
  }

  module.exports = Customer;


*/
