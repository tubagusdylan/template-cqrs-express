/* 
  file ini berisi logic utama dari fitur

  const Query = require('./query');
  const wrapper = require('../../../../helpers/utils/wrapper');
  const { NotFoundError } = require('../../../../helpers/error');
  const logger = require('../../../../helpers/utils/logger');
  const ctx = 'Customer-Query-Domain';

  class Customer {
    constructor(db) {
      this.query = new Query(db);
    }

    async getCustomerById(payload) {
      const { id } = payload;

      const projection = {
        id: 1,
        name: 1,
        contact: 1,
        description: 1,
        created_at: 1,
      };

      const customer = await this.query.findOne({ id }, projection);

      if (customer.err) {
        logger.error(ctx, 'getCustomerById', 'Customer not found', customer.err);
        return wrapper.error(new NotFoundError('Customer not found'));
      }

      logger.info(ctx, 'getCustomerById', 'get detail Customer', payload);
      return wrapper.data(customer.data);
    }

    async listCustomer(payload) {
      const { page, limit, search } = payload;

      const projection = {
        id: 1,
        name: 1,
        contact: 1,
        description: 1,
        created_at: 1,
      };

      const sort = {
        name: 1
      };

      let customer;
      let count;
      if (search) {
        customer = await this.query.findCustomer(search, page, limit);
        count = await this.query.countCustomer(search);
      } else {
        customer = await this.query.findAll(projection, sort, page, limit);
        count = await this.query.countAll();
      }
      if (customer.err) {
        logger.error(ctx, 'listCustomer', 'Customer not found', customer.err);
        return wrapper.error(new NotFoundError('Customer not found'));
      }

      const totalData = count.data;
      const totalPages = Math.ceil(totalData / limit);
      const meta = {
        page: page,
        per_page: limit,
        total_data: Math.max(totalData, 0),
        total_pages: totalPages,
      };

      logger.info(ctx, 'listCustomer', 'get list Customer', payload);
      return wrapper.paginationData(customer.data, meta);
    }
  }

  module.exports = Customer;


*/
