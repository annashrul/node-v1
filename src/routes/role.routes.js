const express = require("express");
const router = express.Router();
const roleController = require("../controllers/role.controller");
const validateToken = require('../../middleware/auth.middleware');


router.get("/", validateToken,roleController.findAll);
router.post("/", validateToken,roleController.create);
module.exports = router;
