"use strict";

const Role = require("../models/role.model");

exports.findAll = function (req, res) {
  Role.findAll(function (err, result) {
    if (err) res.send(err);
    res.send(result);
  });
};

exports.create = function (req, res) {
  const newRole = new Role(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Role.create(newRole, function (err, result) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Role added successfully!",
        data: result,
      });
    });
  }
};
