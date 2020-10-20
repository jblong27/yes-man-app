const router = require("express").Router();
const userInput = require("./userinput");

// choices and prompt input routes
router.use("/userinput", userInput);

module.exports = router;
