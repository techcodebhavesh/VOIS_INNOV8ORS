const { testSQL } = require("../models/test/test.queries.sql");

const createUserController = async (req, res) => {
  const data = await testSQL();
  return res.status(200).send(data);
};

const loginUserController = async (req, res) => {
  return res.status(200).send("Serve is running");
};

module.exports = {
  createUserController,
  loginUserController,
};
