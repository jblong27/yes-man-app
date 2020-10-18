const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  author: { type: String, required: true },
  activity: { type: String, required: true },
  approved: { type: String, required: true },
  class: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;