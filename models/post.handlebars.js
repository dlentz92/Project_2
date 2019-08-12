var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Hangout = sequelize.define("hangout", {
  name: Sequelize.STRING,
  location: Sequelize.STRING,
  date: Sequelize.DATETIME,
  user: Sequelize.STRING
});

Hangout.sync();

module.exports = Hangout;