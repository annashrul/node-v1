"use strict";
var bcrypt = require("bcryptjs");
const User = require("../models/user.model");

exports.findAll = function (req, res) {
  User.findAll(function (err, result) {
    if (err) res.send(err);
    res.send(result);
  });
};

exports.create = function (req, res) {
  const field = new User(req.body);
  var salt = bcrypt.genSaltSync(10);
  var password = bcrypt.hashSync(field.password, salt);
  Object.assign(field, { password: password });

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    User.findById("email", field.email, (err, result) => {
      if (err) res.send(err);
      if (result.length > 0) {
        res.status(400).send({ error: true, message: "email already exist" });
      } else {
        User.create(field, function (err, result) {
          if (err) res.send(err);
          res.json({
            error: false,
            message: "data added successfully!",
            data: result,
          });
        });
      }
    });
  }
};

exports.findById = function (req, res) {
  User.findById("id", req.params.id, function (err, result) {
    if (err) res.send(err);
    res.json({
      error: false,
      message: "success",
      data: result[0],
    });
  });
};
