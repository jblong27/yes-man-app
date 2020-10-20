const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/yes-man-app"



  {
    author: "Jared Varnum",
    activity: "Blow the dust off of the old board games, and invite some friends over for a game night!",
    approved: true,
    class: "insideSocialNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Play a game of truth or dare with a friend! You may learn more than you wish you had!",
    approved: true,
    class: "insideSocialNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go skydiving!!!",
    approved: true,
    class: "outsideSoloMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go bungee jumping!!!!!",
    approved: true,
    class: "outsideSoloMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Visit a local park and go for a walk!",
    approved: true,
    class: "outsideSoloMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go mountain biking!",
    approved: true,
    class: "outsideSoloMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go Paddleboarding!",
    approved: true,
    class: "outsideSoloMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Take a roadtrip! Pet passengers only!",
    approved: true,
    class: "outsideSoloMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go horseback riding!",
    approved: true,
    class: "outsideSoloMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go hiking!",
    approved: true,
    class: "outsideSoloNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Test drive a Tesla!",
    approved: true,
    class: "outsideSoloNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Observe the stars, and learn more about the constellations",
    approved: true,
    class: "outsideSoloNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Build something only utilizing raw materials around you, and up your survival game +5.",
    approved: true,
    class: "outsideSoloNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Join a local adults sports league.",
    approved: true,
    class: "outsideSocialMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Do a Pedal Tavern! Jk, don't you dare! Take a biking class instead, and make new friends!",
    approved: true,
    class: "outsideSocialMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Take a city tour on some Segways!",
    approved: true,
    class: "outsideSocialMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go with friends to a local concert!",
    approved: true,
    class: "outsideSocialMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go with friends to a local festival!",
    approved: true,
    class: "outsideSocialMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Take a historical tour!",
    approved: true,
    class: "outsideSocialMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go with friends to an outdoor museum!",
    approved: true,
    class: "outsideSocialMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go on a picnic with friends!",
    approved: true,
    class: "outsideSocialNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Talk some code with friends outside a local coffee shop!",
    approved: true,
    class: "outsideSocialNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Learn some coding, while talking with friends outside a local coffee shop!",
    approved: true,
    class: "outsideSocialNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSocialNoMoneyLearning",
    date: new Date(Date.now())
  }
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
