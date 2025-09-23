/* 
  File ini untuk simplify fungsi di domain, sehingga tinggal memanggil fungsi dari domain saja

  const Domain = require('./domain');
  const config = require('../../../../infra/configs/global_config');
  const DB = require('../../../../helpers/databases/postgresql/db');
  const db = new DB(config.get('/postgresqlUrl'));
  const domain = new Domain(db);

  const getCustomerById = async (payload) => {
    return domain.getCustomerById(payload);
  };

  const listCustomer = async (payload) => {
    return domain.listCustomer(payload);
  };

  module.exports = {
    getCustomerById,
    listCustomer,
  };



*/
