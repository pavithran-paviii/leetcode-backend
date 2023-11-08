const Problem = require("../model/Problem");

function problemFinder(question) {
  const problem = Problem.find({ question });
  return problem;
}

const requiredFields = Object.keys(Problem.schema.paths).filter(
  (field) => Problem.schema.paths[field].isRequired
);

module.exports = { problemFinder, requiredFields };
