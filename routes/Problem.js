const express = require("express");

const router = express.Router();

const controller = require("../controller/ProblemController");

router.get("/", controller.get);

router.post("/", controller.createProblem);

router.post("/submission", controller.submitProblem);

module.exports = router;
