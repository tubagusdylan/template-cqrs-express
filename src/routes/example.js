// const customerHandler = require("../modules/customer/handlers/api_handler");

module.exports = (server) => {
  // server.post("/codebase/v1/customer", customerHandler.addCustomer);
  // server.put("/codebase/v1/customer/:id", customerHandler.updateCustomer);
  // server.del("/codebase/v1/customer/:id", customerHandler.deleteCustomer);
  // server.get("/codebase/v1/customer/:id", customerHandler.getCustomerById);
  // server.get("/codebase/v1/customer", customerHandler.listCustomer);
  server.get("/example", (req, res) => {
    res.status(200).send({
      data: "OK",
      message: "Testing success"
    })
  })
};
