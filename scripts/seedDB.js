const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/yes-man-app"
);

const activitySeed = [
  {
    author: "Jared Varnum",
    activity: "Gym",
    approved: true,
    class: "insideSoloMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSoloMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSoloMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "",
    date: new Date(Date.now())
  },
];

db.Activity
  .remove({})
  .then(() => db.Activity.collection.insertMany(activitySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
