const express = require("express");
const router = express.Router();

const controller = require("../controller/UserController");

router.get("/", controller.get);

module.exports = router;
