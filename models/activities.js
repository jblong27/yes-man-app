const mongoose = require("mongoose");
const activitiesSchema = mongoose.Schema;

const activitiesSchema = new Schema({
  author: { type: String, required: true },
  activity: { type: String.trim(), required: true },
  approved: { type: Boolean, default: false },
  class: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Activities = mongoose.model("activities", activitiesSchema);

module.exports = Activities;