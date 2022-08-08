"user strict";
const dbConn = require("./../../config/db.config");

const User = function (user) {
    this.email = user.email;
    this.password = user.password;
};

User.findAll = function (result) {
  dbConn.query("Select * from users", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("users : ", res);
      result(null, res);
    }
  });
};

User.findById = function (col, val, result) {
  dbConn.query(
    `Select * from users where ${col} = ?`,
    val,
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

User.create = function (field, result) {
  dbConn.query("INSERT INTO users set ?", field, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

module.exports = User;
