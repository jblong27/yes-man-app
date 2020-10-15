const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInputSchema = new Schema({
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const userInput = mongoose.model("userInput", userInputSchema);

module.exports = userInput;