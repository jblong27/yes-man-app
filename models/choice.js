const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choiceSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Choice = mongoose.model("Choice", choiceSchema);

module.exports = Choice;