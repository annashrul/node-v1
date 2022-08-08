const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
// Retrieve all employees
router.post("/login", authController.login);

module.exports = router;
