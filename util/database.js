const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Malhar@9090", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
