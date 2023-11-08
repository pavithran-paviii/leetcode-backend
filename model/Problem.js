const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  question: { type: String, required: true },
  description: { type: String, required: true },
  problemId: { type: String, required: true },
  acceptance: { type: String },
  difficulty: { type: String, required: true },
  examples: { type: String, required: true },
});

module.exports = mongoose.model("Problem", problemSchema);
