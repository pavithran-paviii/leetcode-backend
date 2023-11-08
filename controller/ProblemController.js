const { problemFinder, requiredFields } = require("../helpers/problem");
const Problem = require("../model/Problem");

module.exports = {
  get: async (req, res) => {
    const problem = await Problem.find();
    res.status(200).send(problem);
  },

  createProblem: async (req, res) => {
    const {
      question,
      description,
      problemId,
      acceptance,
      difficulty,
      examples,
    } = req.body;

    try {
      const problemExist = await problemFinder(question);
      if (problemExist?.length > 0) {
        return res.status(200).send("Problem already exist");
      }

      const missingFields = requiredFields.filter((field) => !req.body[field]);

      // if (missingFields.length > 0) {
      //   res.status(400);
      //   throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
      // }

      const problem = await Problem.create({
        question,
        description,
        problemId,
        acceptance,
        difficulty,
        examples,
      });

      // console.log(problem, "problem created");

      res.status(200).send("Problem created successful");
    } catch (error) {
      console.log(error?.message, "create problem error");
      res.status(500).send("Server error while creating problem");
    }
  },
};
