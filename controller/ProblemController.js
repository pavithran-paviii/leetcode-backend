const { problemFinder } = require("../helpers/problem");
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
        res.status(200).send("Problem already exist");
      } else {
        const problem = await Problem.create({
          question,
          description,
          problemId,
          acceptance,
          difficulty,
          examples,
        });

        console.log(problem, "problem created");

        res.status(200).send("Problem created successful");
      }
    } catch (error) {
      res.status(500).send("Server error while creating problem");
    }
  },

  submitProblem: async (req, res) => {
    const { submission } = req.body;

    res.status(200).send("Submitted successfully");
  },
};
