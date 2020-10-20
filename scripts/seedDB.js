const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/yes-man-app"
);

const activitySeed = [
  ,
  ,
  ,
  {
    author: "Jared Varnum",
    activity: "Stretch!",
    approved: true,
    class: "InsideSoloNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Make a new playlist, and dance to it!",
    approved: true,
    class: "InsideSoloNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Download a free workout app!",
    approved: true,
    class: "InsideSoloNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Underwater basket weaving! Jk, do some full body calisthenics!",
    approved: true,
    class: "InsideSoloNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Try to open a 16oz bottle of Dr. Pepper, but don't drink it! That's will power!",
    approved: true,
    class: "InsideSoloNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Meditate.",
    approved: true,
    class: "InsideSoloNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Watch Netflix and actually chill...",
    approved: true,
    class: "InsideSoloNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Write down your thoughts! Journal where you're at in life, or write a poem or song about how you feel.",
    approved: true,
    class: "InsideSoloNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Contemplate the significance of the Number 42.",
    approved: true,
    class: "InsideSoloNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go to the library and get a new fictional book!",
    approved: true,
    class: "InsideSoloNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Make some delicious food and kick back.",
    approved: true,
    class: "InsideSoloNoMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Research random facts about the United States. Trivia night, here we come!",
    approved: true,
    class: "insideSoloNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Learn about investing.",
    approved: true,
    class: "insideSoloNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go to your local library and search the non-fiction section!",
    approved: true,
    class: "insideSoloNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Research Tesla.",
    approved: true,
    class: "insideSoloNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Get on Reddit and follow a cooking subreddit!",
    approved: true,
    class: "insideSoloNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go iceskating with friends, or make new ones!",
    approved: true,
    class: "insideSocialMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go indoor rock climbing with friends!",
    approved: true,
    class: "insideSocialMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Sign up for some virtual dance lessons!",
    approved: true,
    class: "insideSocialMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Take a friend to the gym - Or make new friends there!",
    approved: true,
    class: "insideSocialMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go to a local YMCA, and go swimming! ",
    approved: true,
    class: "insideSocialMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Participate in a virtual escape room with friends!",
    approved: true,
    class: "insideSocialMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go to the local mall and buy yourself something nice!",
    approved: true,
    class: "insideSocialMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go with friends and check out a local bar that you've never been to before",
    approved: true,
    class: "insideSocialMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Hungry? Go check out a local restaurant in town!",
    approved: true,
    class: "insideSocialMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Take the local transit, and do some good ole fashioned people watching!",
    approved: true,
    class: "insideSocialMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Take an online computer coding course!",
    approved: true,
    class: "insideSocialMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go on to Amazon and buy a book related to something you would like to learn more about!",
    approved: true,
    class: "insideSocialMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Research how to build something that would be a nice addition to your home. Step  1, buy the materials to make two of these items. Step 2, build the first one and gift to a friend. Step 3, build and keep the second one you make for your own home.",
    approved: true,
    class: "insideSocialMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Join a virtual toastmasters!",
    approved: true,
    class: "insideSocialMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Join an investing channel on Discord.",
    approved: true,
    class: "insideSocialMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Play a game of twister! But hey, don't get your hopes up.",
    approved: true,
    class: "insideSocialNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Make love!",
    approved: true,
    class: "insideSocialNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialNoMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialNoMoneyFitness",
    date: new Date(Date.now())
  },
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
