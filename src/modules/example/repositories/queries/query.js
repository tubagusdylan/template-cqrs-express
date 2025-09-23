/* 
  File ini berisi fungsi untuk query ke database:

  const collection = 'customers';
  const errorEmptyMessage = 'Data Not Found Please Try Another Input';
  const errorQueryMessage = 'Error querying PostgreSQL';
  const wrapper = require('../../../../helpers/utils/wrapper');
  const logger = require('../../../../helpers/utils/logger');
  const ctx = 'Customer-Query';

  class Query {
    constructor(db) {
      this.db = db;
    }

    async findOne(parameter, projection, isDeleted = true) {
      return this.db.findOne(parameter, projection, collection, isDeleted);
    }

    async findAll(projection, sort, page, limit, isDeleted = true) {
      return this.db.findAll(projection, sort, page, limit, collection, isDeleted);
    }

    async countAll() {
      try {
        const query = `SELECT COUNT(id) FROM ${collection} WHERE deleted_at IS NULL`;
        const result = await this.db.executeQuery(query);
        if (!result || result.rows.length === 0) {
          return wrapper.error(errorEmptyMessage);
        }
        return wrapper.data(result.rows[0].count);
      } catch (err) {
        logger.error(ctx, errorQueryMessage, 'countAll', err);
        return wrapper.error(errorQueryMessage);
      }
    }

    async findCustomer(search, page, limit) {
      try {
        const offset = limit * (page - 1);
        const searchKey = `%${search.split(' ').join('%')}%`;
        const query = `
          SELECT
            id,
            name,
            contact,
            description,
            created_at
          FROM ${collection}
          WHERE
            (
              name ILIKE $1
              OR contact ILIKE $1
              OR description ILIKE $1
            )
            AND deleted_at IS NULL
          ORDER BY name
          LIMIT $2 OFFSET $3;
        `;
        const values = [searchKey, limit, offset];
        const result = await this.db.executeQuery(query, values);
        if (!result || result.rows.length === 0) {
          return wrapper.error(errorEmptyMessage);
        }
        return wrapper.data(result.rows);
      } catch (err) {
        logger.error(ctx, errorQueryMessage, 'findCustomer', err);
        return wrapper.error(errorQueryMessage);
      }
    }

    async countCustomer(search) {
      try {
        const searchKey = `%${search.split(' ').join('%')}%`;
        const query = `
          SELECT COUNT(id)
          FROM ${collection}
          WHERE
            (
              name ILIKE $1
              OR contact ILIKE $1
              OR description ILIKE $1
            )
            AND deleted_at IS NULL;
        `;
        const values = [searchKey];
        const result = await this.db.executeQuery(query, values);
        if (!result || result.rows.length === 0) {
          return wrapper.error(errorEmptyMessage);
        }
        return wrapper.data(result.rows[0].count);
      } catch (err) {
        logger.error(ctx, errorQueryMessage, 'countCustomer', err);
        return wrapper.error(errorQueryMessage);
      }
    }
  }

  module.exports = Query;


*/
