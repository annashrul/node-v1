"use strict";
var dbConn = require("./../../config/db.config");

var Role = function (role) {
  this.name = role.name;
};

Role.findAll = function (result) {
  dbConn.query("Select * from role", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Role.create = function (newRole, result) {
  dbConn.query("INSERT INTO role set ?", newRole, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

module.exports = Role;
