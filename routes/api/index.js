const express = require("express");
const router = express.Router();
const userInput = require("./userinput");

// choices and prompt input routes
router.use("/userinput", userInput);

module.exports = router;
