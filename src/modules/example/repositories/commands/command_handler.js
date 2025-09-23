/* 
  File ini berisi pemanggilan fungsi di domain:

  const Domain = require('./domain');
  const config = require('../../../../infra/configs/global_config');
  const DB = require('../../../../helpers/databases/postgresql/db');
  const db = new DB(config.get('/postgresqlUrl'));
  const domain = new Domain(db);

  const addCustomer = async (payload) => {
    return domain.addCustomer(payload);
  };

  const updateCustomer = async (payload) => {
    return domain.updateCustomer(payload);
  };

  const deleteCustomer = async (payload) => {
    return domain.deleteCustomer(payload);
  };

  module.exports = {
    addCustomer,
    updateCustomer,
    deleteCustomer,
  };


*/
