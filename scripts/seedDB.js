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
    activity: "Go to a local gym!",
    approved: true,
    class: "insideSoloMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Everytime Wayne says Google it, do 5 push-ups. Everytime Tim makes a movie reference, do 10 sit-ups!",
    approved: true,
    class: "insideSoloMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Git' sum' P90X!",
    approved: true,
    class: "insideSoloMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Sign up for a Yoga class!",
    approved: true,
    class: "insideSoloMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go indoor rock climbing!",
    approved: true,
    class: "insideSoloMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Watch a new movie!",
    approved: true,
    class: "insideSoloMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Play a new mobile game!",
    approved: true,
    class: "insideSoloMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go on Amazon and treat yo'self!",
    approved: true,
    class: "insideSoloMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Read a fictional book!",
    approved: true,
    class: "insideSoloMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Do a virtual escape room!",
    approved: true,
    class: "insideSoloMoneyLeisure",
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
