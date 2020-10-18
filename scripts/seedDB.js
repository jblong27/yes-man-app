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
    activity: "Read a non-fictional book",
    approved: true,
    class: "insideSoloMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Go to a local museum!",
    approved: true,
    class: "insideSoloMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Pick out any instrument and start learning it!",
    approved: true,
    class: "insideSoloMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Sign up for a night class!",
    approved: true,
    class: "insideSoloMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "Follow a content creator on YouTube and support them on Patreon!",
    approved: true,
    class: "insideSoloMoneyLearning",
    date: new Date(Date.now())
  },
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
    activity: "",
    approved: true,
    class: "insideSocialMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialMoneyLeisure",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "insideSocialMoneyLearning",
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
    activity: "",
    approved: true,
    class: "insideSocialNoMoneyLearning",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloMoneyFitness",
    date: new Date(Date.now())
  },
  {
    author: "Jared Varnum",
    activity: "",
    approved: true,
    class: "outsideSoloMoneyFitness",
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
    activity: "",
    approved: true,
    class: "outsideSoloMoneyLeisure",
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
    activity: "",
    approved: true,
    class: "outsideSoloMoneyLearning",
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
    activity: "",
    approved: true,
    class: "outsideSoloNoMoneyFitness",
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
    activity: "",
    approved: true,
    class: "outsideSoloNoMoneyLeisure",
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
    activity: "",
    approved: true,
    class: "outsideSocialMoneyFitness",
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
    activity: "",
    approved: true,
    class: "outsideSocialMoneyLeisure",
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
