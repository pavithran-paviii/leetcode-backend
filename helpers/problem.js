const Problem = require("../model/Problem");

function problemFinder(question) {
  const problem = Problem.find({ question });
  return problem;
}

module.exports = { problemFinder };
