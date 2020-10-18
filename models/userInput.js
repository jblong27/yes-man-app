const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInputSchema = new Schema({
  author: { type: String, required: true },
  activity: { type: String.trim(), required: true },
  approved: { type: Boolean, default: false },
  class: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const userInput = mongoose.model("userInput", userInputSchema);

module.exports = userInput;