const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const validateToken = require("../../middleware/auth.middleware");

// Retrieve all employees
router.get("/",validateToken, userController.findAll);
router.post("/",validateToken, userController.create);
router.get("/:id",validateToken, userController.findById);

module.exports = router;
