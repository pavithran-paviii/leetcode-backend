const express = require("express");
const router = express.Router();

const controller = require("../controller/UserController");

router.get("/user", controller.get);

router.post("/signup", controller.createuser);

router.post("/login", controller.loginFunc);

router.post("/submitproblem", controller.submitProblem);

module.exports = router;
