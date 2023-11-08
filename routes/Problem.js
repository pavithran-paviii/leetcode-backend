const express = require("express");

const router = express.Router();

const controller = require("../controller/ProblemController");

router.get("/", controller.get);

router.post("/", controller.createProblem);

module.exports = router;
